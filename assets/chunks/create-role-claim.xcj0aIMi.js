import{e as T,i as E,t as h,f as R,b as B,d as D,S as P,_ as l,g as S,r as I,h as y,j as F,H as L,L as O,k,m as g,s as U,c as H,n as q,l as N}from"./chunk.MGEAXYVX.fO6xFSdZ.js";import{F as j,o as u,n as K}from"./chunk.5SKBN5CP._6jWBe5P.js";import{i as V,u as $,w as v,T as M,x as d,g as Y}from"./roles-client.BsEGBmUD.js";import{S as W}from"./signal-watcher.DeCe-Rpy.js";import{a as o,t as G}from"./property.B-ZXrebU.js";import{r as J}from"./context.KiubJ2Dr.js";import"./static.Da8DPRVO.js";function _(t){return typeof t=="string"&&t.split(",").length===39?new Uint8Array(t.split(",").map(i=>parseInt(i,10))):t}function z(t){const i=new FormData(t),r={};return i.forEach((n,s)=>{if(Reflect.has(r,s)){const a=r[s];Array.isArray(a)?a.push(_(n)):r[s]=[r[s],_(n)]}else r[s]=_(n)}),r}class Q extends E{constructor(){super(...arguments),this.initialized=!1}update(i,r){this.initialized||(this.initialized=!0,i.element.addEventListener("update-form",s=>{this.listener&&i.element.removeEventListener("submit",this.listener),this.listener=a=>{a.preventDefault();const p=z(i.element);r[0](p)},i.element.addEventListener("submit",this.listener)})),setTimeout(()=>{this.listener&&i.element.removeEventListener("submit",this.listener),this.listener=n=>{n.preventDefault();const s=z(i.element);r[0](s)},i.element.addEventListener("submit",this.listener)},100)}render(i){return""}}const X=T(Q);var Z=V`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,tt=(t="value")=>(i,r)=>{const n=i.constructor,s=n.prototype.attributeChangedCallback;n.prototype.attributeChangedCallback=function(a,p,w){var x;const f=n.getPropertyOptions(t),A=typeof f.attribute=="string"?f.attribute:t;if(a===A){const b=f.converter||$,C=(typeof b=="function"?b:(x=b==null?void 0:b.fromAttribute)!=null?x:$.fromAttribute)(w,f.type);this[t]!==C&&(this[r]=C)}s.call(this,a,p,w)}},et=V`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=T(class extends E{constructor(t){if(super(t),t.type!==h.PROPERTY&&t.type!==h.ATTRIBUTE&&t.type!==h.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!R(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[i]){if(i===v||i===M)return i;const r=t.element,n=t.name;if(t.type===h.PROPERTY){if(i===r[n])return v}else if(t.type===h.BOOLEAN_ATTRIBUTE){if(!!i===r.hasAttribute(n))return v}else if(t.type===h.ATTRIBUTE&&r.getAttribute(n)===i+"")return v;return B(t),i}});var e=class extends F{constructor(){super(...arguments),this.formControlController=new j(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new L(this,"help-text","label"),this.localize=new O(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const i=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!i&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,i,r="none"){this.input.setSelectionRange(t,i,r)}setRangeText(t,i,r,n="preserve"){const s=i??this.input.selectionStart,a=r??this.input.selectionEnd;this.input.setRangeText(t,s,a,n),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,n=this.helpText?!0:!!i,a=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return d`
      <div
        part="form-control"
        class=${k({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${k({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${u(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${u(this.placeholder)}
              minlength=${u(this.minlength)}
              maxlength=${u(this.maxlength)}
              min=${u(this.min)}
              max=${u(this.max)}
              step=${u(this.step)}
              .value=${it(this.value)}
              autocapitalize=${u(this.autocapitalize)}
              autocomplete=${u(this.autocomplete)}
              autocorrect=${u(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${u(this.pattern)}
              enterkeyhint=${u(this.enterkeyhint)}
              inputmode=${u(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${a?d`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?d`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?d`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:d`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};e.styles=[D,et,Z];e.dependencies={"sl-icon":P};l([S(".input__control")],e.prototype,"input",2);l([I()],e.prototype,"hasFocus",2);l([o()],e.prototype,"title",2);l([o({reflect:!0})],e.prototype,"type",2);l([o()],e.prototype,"name",2);l([o()],e.prototype,"value",2);l([tt()],e.prototype,"defaultValue",2);l([o({reflect:!0})],e.prototype,"size",2);l([o({type:Boolean,reflect:!0})],e.prototype,"filled",2);l([o({type:Boolean,reflect:!0})],e.prototype,"pill",2);l([o()],e.prototype,"label",2);l([o({attribute:"help-text"})],e.prototype,"helpText",2);l([o({type:Boolean})],e.prototype,"clearable",2);l([o({type:Boolean,reflect:!0})],e.prototype,"disabled",2);l([o()],e.prototype,"placeholder",2);l([o({type:Boolean,reflect:!0})],e.prototype,"readonly",2);l([o({attribute:"password-toggle",type:Boolean})],e.prototype,"passwordToggle",2);l([o({attribute:"password-visible",type:Boolean})],e.prototype,"passwordVisible",2);l([o({attribute:"no-spin-buttons",type:Boolean})],e.prototype,"noSpinButtons",2);l([o({reflect:!0})],e.prototype,"form",2);l([o({type:Boolean,reflect:!0})],e.prototype,"required",2);l([o()],e.prototype,"pattern",2);l([o({type:Number})],e.prototype,"minlength",2);l([o({type:Number})],e.prototype,"maxlength",2);l([o()],e.prototype,"min",2);l([o()],e.prototype,"max",2);l([o()],e.prototype,"step",2);l([o()],e.prototype,"autocapitalize",2);l([o()],e.prototype,"autocorrect",2);l([o()],e.prototype,"autocomplete",2);l([o({type:Boolean})],e.prototype,"autofocus",2);l([o()],e.prototype,"enterkeyhint",2);l([o({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],e.prototype,"spellcheck",2);l([o()],e.prototype,"inputmode",2);l([y("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1);l([y("step",{waitUntilFirstUpdate:!0})],e.prototype,"handleStepChange",1);l([y("value",{waitUntilFirstUpdate:!0})],e.prototype,"handleValueChange",1);e.define("sl-input");var lt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,m=(t,i,r,n)=>{for(var s=n>1?void 0:n?ot(i,r):i,a=t.length-1,p;a>=0;a--)(p=t[a])&&(s=(n?p(i,r,s):p(s))||s);return n&&s&&lt(i,r,s),s};let c=class extends W(Y){constructor(){super(...arguments),this.committing=!1}async createRoleClaim(t){if(this.assignRoleCreateLinkHash===void 0)throw new Error("Cannot create a new Role Claim without its assign_role_create_link_hash field");const i={role:t.role,assign_role_create_link_hash:this.assignRoleCreateLinkHash};try{this.committing=!0;const r=await this.rolesStore.client.createRoleClaim(i);this.dispatchEvent(new CustomEvent("role-claim-created",{composed:!0,bubbles:!0,detail:{roleClaimHash:r.actionHash}})),this.form.reset()}catch(r){console.error(r),K(g("Error creating the role claim"))}this.committing=!1}render(){return d` <sl-card style="flex: 1;">
			<span slot="header">${g("Create Role Claim")}</span>

			<form
				id="create-form"
				class="column"
				style="flex: 1; gap: 16px;"
				${X(t=>this.createRoleClaim(t))}
			>
				<sl-input name="role" .label=${g("Role Name")} required></sl-input>

				<sl-button variant="primary" type="submit" .loading=${this.committing}
					>${g("Create Role Claim")}</sl-button
				>
			</form>
		</sl-card>`}};c.styles=[U];m([o(q("assign-role-create-link-hash"))],c.prototype,"assignRoleCreateLinkHash",2);m([H({context:J,subscribe:!0})],c.prototype,"rolesStore",2);m([I()],c.prototype,"committing",2);m([S("#create-form")],c.prototype,"form",2);c=m([N(),G("create-role-claim")],c);export{c as CreateRoleClaim};
