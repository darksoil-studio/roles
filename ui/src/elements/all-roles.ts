import { LitElement, html } from 'lit';
import { state, customElement, property } from 'lit/decorators.js';
import { AgentPubKey, EntryHash, ActionHash, Record } from '@holochain/client';
import { SignalWatcher } from '@holochain-open-dev/signals';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import { hashProperty, sharedStyles, wrapPathInSvg } from '@holochain-open-dev/elements';
import { mdiInformationOutline } from '@mdi/js';

import '@holochain-open-dev/elements/dist/elements/display-error.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

import './role-claim-summary.js';
import { RolesStore } from '../roles-store.js';
import { rolesStoreContext } from '../context.js';

/**
 * @element all-roles
 */
@localized()
@customElement('all-roles')
export class AllRoles extends SignalWatcher(LitElement) {
  
  /**
   * @internal
   */
  @consume({ context: rolesStoreContext, subscribe: true })
  rolesStore!: RolesStore;


  renderList(hashes: Array<ActionHash>) {
    if (hashes.length === 0) 
      return html` <div class="column center-content" style="gap: 16px;">
        <sl-icon
          .src=${wrapPathInSvg(mdiInformationOutline)}
          style="color: grey; height: 64px; width: 64px;"
          ></sl-icon
        >
        <span class="placeholder">${msg("No role claims found")}</span>
      </div>`;

    return html`
      <div class="column" style="gap: 16px; flex: 1">
        ${hashes.map(hash => 
          html`<role-claim-summary .roleClaimHash=${hash}></role-claim-summary>`
        )}
      </div>
    `;
  }

  render() {
    const map = this.rolesStore.allRoles.get();
  
    switch (map.status) {
      case 'pending':
        return html`<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;">
          <sl-spinner style="font-size: 2rem;"></sl-spinner>
        </div>`;
      case 'error':
        return html`<display-error
          .headline=${msg("Error fetching the role claims")}
          .error=${ map.error}
        ></display-error>`;
      case 'completed':
        return this.renderList(Array.from(map.value.keys()));
    }
  }
  
  static styles = [sharedStyles];
}
