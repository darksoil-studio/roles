# `<create-role-claim>`

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `<create-role-claim>` element somewhere in the javascript side of your web-app like this:

```js
import '@holochain-open-dev/roles/dist/elements/create-role-claim.js'
```

2. Use it in the html side of your web-app like this:


::: code-group
```html [Lit]
<create-role-claim 
  .assignRoleCreateLinkHash=${ assignRoleCreateLinkHash }
>
</create-role-claim>
```

```html [React]
<create-role-claim
  assignRoleCreateLinkHash={ assignRoleCreateLinkHash }
>
</create-role-claim>
```

```html [Angular]
<create-role-claim
  [assignRoleCreateLinkHash]="assignRoleCreateLinkHash"
>
</create-role-claim>
```

```html [Vue]
<create-role-claim
  :assignRoleCreateLinkHash="assignRoleCreateLinkHash"
>
</create-role-claim>
```

```html [Svelte]
<create-role-claim
  assign-role-create-link-hash={encodeHashToBase64(assignRoleCreateLinkHash)}
>
</create-role-claim>
```
:::

> [!WARNING]
> Like all the elements in this module, `<create-role-claim>` needs to be placed inside an initialized `<roles-context>`.

## Demo

Here is an interactive demo of the element:

<element-demo>
</element-demo>

<script setup>
import { onMounted } from "vue";
import { ProfilesClient, ProfilesStore } from '@holochain-open-dev/profiles';
import { demoProfiles, ProfilesZomeMock } from '@holochain-open-dev/profiles/dist/mocks.js';
import { decodeHashFromBase64 } from '@holochain/client';
import { render, html } from "lit";

import { RolesZomeMock, sampleRoleClaim } from "../../ui/src/mocks.ts";
import { RolesStore } from "../../ui/src/roles-store.ts";
import { RolesClient } from "../../ui/src/roles-client.ts";

onMounted(async () => {
  // Elements need to be imported on the client side, not the SSR side
  // Reference: https://vitepress.dev/guide/ssr-compat#importing-in-mounted-hook
  await import('@api-viewer/docs/lib/api-docs.js');
  await import('@api-viewer/demo/lib/api-demo.js');
  await import('@holochain-open-dev/profiles/dist/elements/profiles-context.js');
  if (!customElements.get('roles-context')) await import('../../ui/src/elements/roles-context.ts');
  if (!customElements.get('create-role-claim')) await import('../../ui/src/elements/create-role-claim.ts');

  const profiles = await demoProfiles();

  const profilesMock = new ProfilesZomeMock(
    profiles,
    Array.from(profiles.keys())[0]
  );
  const profilesStore = new ProfilesStore(new ProfilesClient(profilesMock, "roles_test"));

  const mock = new RolesZomeMock();
  const client = new RolesClient(mock, "roles_test");

  const roleClaim = await sampleRoleClaim(client);

  const record = await mock.create_role_claim(roleClaim);

  const store = new RolesStore(client);
  
  render(html`
    <profiles-context .store=${profilesStore}>
      <roles-context .store=${store}>
        <api-demo src="custom-elements.json" only="create-role-claim" exclude-knobs="store">
        </api-demo>
      </roles-context>
    </profiles-context>
  `, document.querySelector('element-demo'))
  })


</script>

## API Reference

`<create-role-claim>` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="create-role-claim">
</api-docs>
