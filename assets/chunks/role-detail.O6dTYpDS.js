import{d as St,i as At,t as V,f as w,r as A,e as I,h as lt,a as T,g as gt,_ as n,w as E,b as z,s as q,c as K,S as Kt,j as Wt,k as W,L as Q,l as pt,m as Y,n as U,o as H,p as f,q as jt,u as Yt,v as Tt,x as le,y as de}from"./chunk.DBG7W4GS.CDYOjyL0.js";import{H as zt,q as ue,l as mt,r as Xt,o as ce,w as rt,f as M,t as X,x as l,m,i as g,T as Ct,u as Pt,B as he,v as pe,y as me,k as fe,z as Gt,p as Rt,n as wt,A as be,C as ge,D as Vt,g as ut}from"./roles-client.BTCgoAOC.js";import{a as ve,n as r,t as B}from"./property.u054DmXc.js";import{S as j}from"./signal-watcher.Cilo2CUk.js";import{_ as c}from"./tslib.es6.kHcLnhpD.js";import{r as ye}from"./context.BMfdT7zo.js";function _e(t,e){const o=new zt;for(const s of e)o.set(s,t.get(s));return o}function we(t,e){const o=new zt;for(const[s,i]of t.entries())o.set(s,e(i,s));return o}function xe(t,e){const o=Array.from(t.entries()).map(([a,d])=>d.status!=="completed"?d:{status:"completed",value:[a,d.value]}),s=ue(o);return s.status!=="completed"?s:{status:"completed",value:new zt(s.value)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ke{constructor(e){this.__litLocalizeEventHandler=o=>{o.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Ot,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Ot,this.__litLocalizeEventHandler)}}const Ce=t=>t.addController(new ke(t)),$e=Ce;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=()=>(t,e)=>(t.addInitializer($e),t);class Qt{constructor(e){this.host=e,this.host.addController(this),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this)}closestElement(e){function o(s){if(!s||s===document||s===window)return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(e);return i||o(s.getRootNode().host)}return o(this.host)}hostConnected(){this.form=this.closestElement("form"),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),this.form.dispatchEvent(new CustomEvent("update-form")))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),this.form=void 0)}handleFormData(e){const o=this.host.disabled,s=this.host.name,i=this.host.value;!o&&s&&i!==void 0&&(Array.isArray(i)?i.map(a=>e.formData.append(s,a)):e.formData.append(s,i))}handleFormSubmit(e){const o=this.form,s=this.host.disabled,i=this.host.reportValidity;o&&!o.noValidate&&!s&&i&&!this.host.reportValidity()&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(e){this.host.reset()}}function Ee(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function Se(t,e="primary",o=Xt,s=3e3){const i=Object.assign(document.createElement("sl-alert"),{variant:e,closable:!0,duration:s,innerHTML:`
        <sl-icon src="${mt(o)}" slot="icon"></sl-icon>
        ${Ee(t)}
      `});return document.body.append(i),i.toast()}function Mt(t){return Se(t,"danger",ce)}const J=ve("hc_zome_profiles/store");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt="important",Ae=" !"+Zt,Bt=St(class extends At{constructor(t){var e;if(super(t),t.type!==V.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const s=t[o];return s==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?o.removeProperty(s):o[s]=null);for(const s in e){const i=e[s];if(i!=null){this.ft.add(s);const a=typeof i=="string"&&i.endsWith(Ae);s.includes("-")||a?o.setProperty(s,a?i.slice(0,-11):i,a?Zt:""):o[s]=i}}return rt}});let ft=[0],ht=0;function Te(t){t[0]===132&&t[1]===32&&t[2]===36?ft=t.slice(3):ft=t||[],ht=0}function _(){return(()=>{const e=ft[ht];return ht=(ht+1)%ft.length,e})()/256}function Jt(t){const e=Math.floor(_()*360),o=_()*60+40,s=t||(_()*100+(_()+_()+_()+_())*25)/2;return{h:e,s:o,l:s}}function te({h:t,s:e,l:o}){return`hsl(${t}, ${e}%, ${o}%)`}function ze(t,e,o){const s=_()*2*Math.PI,i=e*Math.cos(s),a=e*Math.sin(s),d=o.x+i,h=o.x+a,b=s+2*Math.PI*.3,v=e*Math.cos(b),F=e*Math.sin(b),$=o.x+v,dt=o.x+F,N=b+2*Math.PI*.3,ie=e*Math.cos(N),re=e*Math.sin(N),ne=o.x+ie,ae=o.x+re;t.beginPath(),t.moveTo(d,h),t.lineTo($,dt),t.lineTo(ne,ae),t.fill()}function Le(t){const e=t.hash||[0];return Te(e),{backgroundColor:t.backgroundColor||te(Jt()),hash:e,size:t.size||32}}function De(t,e){if(t.hash&&!(t.hash instanceof Uint8Array))throw new Error("invalid type for opts.hash, expecting Uint8Array or null");t=Le(t||{});const{size:o,backgroundColor:s}=t;e.width=e.height=o;const i=e.getContext("2d");if(!i)return;i.fillStyle=s,i.fillRect(0,0,e.width,e.height);const a=_()<.5?3:4,d=Array.apply(null,Array(a)).map((h,b)=>{const v=b===0?5+_()*25:b===1?70+_()*25:null;return{x:_()*o,y:_()*o,radius:5+_()*o*.25,type:Math.floor(_()*3),color:te(Jt(v))}}).sort((h,b)=>h.radius>b.radius?-1:1);for(let h=0;h<a;h++){const b=d[h],{x:v,y:F,radius:$,type:dt,color:N}=b;switch(i.fillStyle=N,dt){case 0:i.beginPath(),i.arc(v,F,$,0,2*Math.PI),i.fill();break;case 1:i.fillRect(v,F,$*2,$*2);break;case 2:ze(i,$*2,{x:v,y:F});break;default:throw new Error("shape is greater than 2, this should never happen")}}return e}var R=function(t,e,o,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,o,s);else for(var h=t.length-1;h>=0;h--)(d=t[h])&&(a=(i<3?d(a):i>3?d(e,o,a):d(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let S=class extends M{constructor(){super(...arguments),this.size=32,this.shape="circle",this.disableTooltip=!1,this.disableCopy=!1,this.justCopiedHash=!1}async copyHash(){this.disableCopy||(await navigator.clipboard.writeText(this.strHash),this.timeout&&clearTimeout(this.timeout),this.justCopiedHash=!0,this._tooltip.show(),this.timeout=setTimeout(()=>{this._tooltip.hide(),setTimeout(()=>{this.justCopiedHash=!1},100)},2e3))}get strHash(){return X(this.hash)}updated(e){var o,s;super.updated(e),(e.has("hash")&&((o=e.get("hash"))==null?void 0:o.toString())!==((s=this.hash)==null?void 0:s.toString())||e.has("size")||e.has("value"))&&De({hash:this.hash,size:this.size},this._canvas)}renderCanvas(){return l` <canvas
      id="canvas"
      width="1"
      height="1"
      class=${I({square:this.shape==="square",circle:this.shape==="circle"})}
    ></canvas>`}render(){return l`<div
      @click=${()=>this.copyHash()}
      style="${this.disableCopy?"":"cursor: pointer;"} flex-grow: 0"
    >
      <sl-tooltip
        id="tooltip"
        placement="top"
        .content=${this.justCopiedHash?m("Copied!"):`${this.strHash.substring(0,6)}...`}
        .trigger=${this.disableTooltip||this.justCopiedHash?"manual":"hover focus"}
        hoist
      >
        ${this.renderCanvas()}
      </sl-tooltip>
    </div>`}static get styles(){return g`
      :host {
        display: flex;
      }

      .square {
        border-radius: 0%;
      }
      .circle {
        border-radius: 50%;
      }
    `}};R([r(lt("hash"))],S.prototype,"hash",void 0);R([r({type:Number})],S.prototype,"size",void 0);R([r({type:String})],S.prototype,"shape",void 0);R([r({type:Boolean,attribute:"disable-tooltip"})],S.prototype,"disableTooltip",void 0);R([r({type:Boolean,attribute:"disable-copy"})],S.prototype,"disableCopy",void 0);R([w("#canvas")],S.prototype,"_canvas",void 0);R([w("#tooltip")],S.prototype,"_tooltip",void 0);R([A()],S.prototype,"justCopiedHash",void 0);S=R([Z(),B("holo-identicon")],S);var Fe=g`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,L=class extends z{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const t=l`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let e=l``;return this.initials?e=l`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=l`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,l`
      <div
        part="base"
        class=${I({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};L.styles=[T,Fe];L.dependencies={"sl-icon":gt};n([A()],L.prototype,"hasError",2);n([r()],L.prototype,"image",2);n([r()],L.prototype,"label",2);n([r()],L.prototype,"initials",2);n([r()],L.prototype,"loading",2);n([r({reflect:!0})],L.prototype,"shape",2);n([E("image")],L.prototype,"handleImageChange",1);L.define("sl-avatar");var Ie=g`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Lt=class extends z{constructor(){super(...arguments),this.effect="none"}render(){return l`
      <div
        part="base"
        class=${I({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Lt.styles=[T,Ie];n([r()],Lt.prototype,"effect",2);Lt.define("sl-skeleton");let O=class extends j(M){constructor(){super(...arguments),this.size=32,this.disableTooltip=!1,this.disableCopy=!1}renderIdenticon(){return l` <div
      style=${Bt({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
    >
      <holo-identicon
        .disableCopy=${this.disableCopy}
        .disableTooltip=${this.disableTooltip}
        .hash=${this.agentPubKey}
        .size=${this.size}
      >
      </holo-identicon>
      <div class="badge"><slot name="badge"></slot></div>
    </div>`}renderProfile(e){if(!e||!e.entry.fields.avatar)return this.renderIdenticon();const o=l`
      <div
        style=${Bt({cursor:this.disableCopy?"":"pointer",position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
      >
        <sl-avatar
          .image=${e.entry.fields.avatar}
          style="--size: ${this.size}px;"
          @click=${()=>this.dispatchEvent(new CustomEvent("profile-clicked",{composed:!0,bubbles:!0,detail:{agentPubKey:this.agentPubKey}}))}
        >
        </sl-avatar>
        <div class="badge"><slot name="badge"></slot></div>
      </div>
    `;return l`
      <sl-tooltip
        id="tooltip"
        placement="top"
        .trigger=${this.disableTooltip?"manual":"hover focus"}
        hoist
        .content=${e.entry.nickname}
      >
        ${o}
      </sl-tooltip>
    `}render(){if(this.store.config.avatarMode==="identicon")return this.renderIdenticon();const e=this.store.profiles.get(this.agentPubKey).get();switch(e.status){case"pending":return l`<sl-skeleton
          effect="pulse"
          style="height: ${this.size}px; width: ${this.size}px"
        ></sl-skeleton>`;case"completed":return this.renderProfile(e.value);case"error":return l`
          <display-error
            tooltip
            .headline=${m("Error fetching the agent's avatar")}
            .error=${e.error}
          ></display-error>
        `}}};O.styles=[q,g`
      .badge {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    `];c([r(lt("agent-pub-key"))],O.prototype,"agentPubKey",void 0);c([r({type:Number})],O.prototype,"size",void 0);c([r({type:Boolean,attribute:"disable-tooltip"})],O.prototype,"disableTooltip",void 0);c([r({type:Boolean,attribute:"disable-copy"})],O.prototype,"disableCopy",void 0);c([K({context:J,subscribe:!0}),r()],O.prototype,"store",void 0);O=c([Z(),B("agent-avatar")],O);let Nt=class extends j(M){render(){return l`<div class="row" style="align-items: center; width: 150px">
      <sl-skeleton
        effect="sheen"
        style="height: 32px; width: 32px; border-radius: 50%; margin: 8px"
      ></sl-skeleton
      ><sl-skeleton
        effect="sheen"
        style="flex: 1; margin: 8px; border-radius: 12px"
      >
      </sl-skeleton>
    </div>`}static get styles(){return[q,g`
        :host {
          display: flex;
        }
      `]}};Nt=c([B("profile-list-item-skeleton")],Nt);let at=class extends j(M){render(){var e;const o=this.store.profiles.get(this.agentPubKey).get();switch(o.status){case"pending":return l`<profile-list-item-skeleton></profile-list-item-skeleton>`;case"completed":return l`
          <div class="row" style="align-items: center; gap: 8px">
            <agent-avatar .agentPubKey=${this.agentPubKey}></agent-avatar>
            <span>${(e=o.value)===null||e===void 0?void 0:e.entry.nickname}</span>
          </div>
        `;case"error":return l`<display-error
          tooltip
          .headline=${m("Error fetching the profile")}
          .error=${o.error}
        ></display-error>`}}};at.styles=[q];c([r(lt("agent-pub-key"))],at.prototype,"agentPubKey",void 0);c([K({context:J,subscribe:!0}),r()],at.prototype,"store",void 0);at=c([Z(),B("profile-list-item")],at);Kt.define("sl-icon-button");var Pe=g`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Ut=new WeakMap;function ee(t){let e=Ut.get(t);return e||(e=window.getComputedStyle(t,null),Ut.set(t,e)),e}function Re(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=ee(t);return e.visibility!=="hidden"&&e.display!=="none"}function Ve(t){const e=ee(t),{overflowY:o,overflowX:s}=e;return o==="scroll"||s==="scroll"?!0:o!=="auto"||s!=="auto"?!1:t.scrollHeight>t.clientHeight&&o==="auto"||t.scrollWidth>t.clientWidth&&s==="auto"}function Oe(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!Re(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Ve(t)}function Me(t){var e,o;const s=$t(t),i=(e=s[0])!=null?e:null,a=(o=s[s.length-1])!=null?o:null;return{start:i,end:a}}function Be(t,e){var o;return((o=t.getRootNode({composed:!0}))==null?void 0:o.host)!==e}function $t(t){const e=new WeakMap,o=[];function s(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||e.has(i))return;e.set(i,!0),!o.includes(i)&&Oe(i)&&o.push(i),i instanceof HTMLSlotElement&&Be(i,t)&&i.assignedElements({flatten:!0}).forEach(a=>{s(a)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&s(i.shadowRoot)}for(const a of i.children)s(a)}return s(t),o.sort((i,a)=>{const d=Number(i.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-d})}var y=class extends z{constructor(){super(...arguments),this.localize=new Q(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,s,i;const a=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(i=(s=document.activeElement)==null?void 0:s.shadowRoot)==null?void 0:i.activeElement:document.activeElement;(!this.containingElement||(a==null?void 0:a.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const o=e.getAllItems(),s=o[0],i=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(s),s.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(s=>Me(s).start);let o;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,pt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Y(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=U(this,"dropdown.show",{dir:this.localize.dir()});await H(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Y(this);const{keyframes:t,options:e}=U(this,"dropdown.hide",{dir:this.localize.dir()});await H(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return l`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${f(this.sync?this.sync:void 0)}
        class=${I({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};y.styles=[T,Pe];y.dependencies={"sl-popup":Wt};n([w(".dropdown")],y.prototype,"popup",2);n([w(".dropdown__trigger")],y.prototype,"trigger",2);n([w(".dropdown__panel")],y.prototype,"panel",2);n([r({type:Boolean,reflect:!0})],y.prototype,"open",2);n([r({reflect:!0})],y.prototype,"placement",2);n([r({type:Boolean,reflect:!0})],y.prototype,"disabled",2);n([r({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],y.prototype,"stayOpenOnSelect",2);n([r({attribute:!1})],y.prototype,"containingElement",2);n([r({type:Number})],y.prototype,"distance",2);n([r({type:Number})],y.prototype,"skidding",2);n([r({type:Boolean})],y.prototype,"hoist",2);n([r({reflect:!0})],y.prototype,"sync",2);n([E("open",{waitUntilFirstUpdate:!0})],y.prototype,"handleOpenChange",1);W("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});W("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});y.define("sl-dropdown");var Ne=g`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=(t,e)=>{var s;const o=t._$AN;if(o===void 0)return!1;for(const i of o)(s=i._$AO)==null||s.call(i,e,!1),nt(i,e);return!0},bt=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while((o==null?void 0:o.size)===0)},oe=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),qe(e)}};function Ue(t){this._$AN!==void 0?(bt(this),this._$AM=t,oe(this)):this._$AM=t}function He(t,e=!1,o=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(s))for(let a=o;a<s.length;a++)nt(s[a],!1),bt(s[a]);else s!=null&&(nt(s,!1),bt(s));else nt(this,t)}const qe=t=>{t.type==V.CHILD&&(t._$AP??(t._$AP=He),t._$AQ??(t._$AQ=Ue))};class Ke extends At{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,s){super._$AT(e,o,s),oe(this),this.isConnected=e._$AU}_$AO(e,o=!0){var s,i;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(i=this.disconnected)==null||i.call(this)),o&&(nt(this,e),bt(this))}setValue(e){if(jt(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=()=>new je;class je{}const xt=new WeakMap,Ye=St(class extends Ke{render(t){return Ct}update(t,[e]){var s;const o=e!==this.Y;return o&&this.Y!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=e,this.ht=(s=t.options)==null?void 0:s.host,this.rt(this.ct=t.element)),Ct}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let o=xt.get(e);o===void 0&&(o=new WeakMap,xt.set(e,o)),o.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),o.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=xt.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Xe=class{constructor(t,e,o){this.popupRef=We(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var i;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(i=s.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),i=s==null?void 0:s.assignedElements({flatten:!0}).filter(F=>F.localName==="sl-menu")[0],a=this.localize.dir()==="rtl";if(!i)return;const{left:d,top:h,width:b,height:v}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${a?d+b:d}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${h}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${a?d+b:d}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${h+v}px`)},(this.host=t).addController(this),this.hasSlotController=e,this.localize=o}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let o=null;for(const s of e.assignedElements())if(o=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),o.length!==0)break;if(!(!o||o.length===0)){o[0].setAttribute("tabindex","0");for(let s=1;s!==o.length;++s)o[s].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{o[0]instanceof HTMLElement&&o[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((i,a)=>{var d;const h=(d=e.get(a))!=null?d:new CSSUnitValue(0,"px"),v=(h instanceof CSSUnitValue?h:new CSSUnitValue(0,"px")).to("px");return i-v.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=this.localize.dir()==="ltr";return this.isConnected?l`
      <sl-popup
        ${Ye(this.popupRef)}
        placement=${t?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:l` <slot name="submenu" hidden></slot> `}},Ge=g`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,vt=class extends z{constructor(){super(...arguments),this.localize=new Q(this)}render(){return l`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};vt.styles=[T,Ge];var yt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{const s=o.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Qe(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(o+=s.textContent)}),o}var k=class extends z{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.localize=new Q(this),this.hasSlotController=new yt(this,"submenu"),this.submenuController=new Xe(this,this.hasSlotController,this.localize),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Qe(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return l`
      <div
        id="anchor"
        part="base"
        class=${I({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?l` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};k.styles=[T,Ne];k.dependencies={"sl-icon":gt,"sl-popup":Wt,"sl-spinner":vt};n([w("slot:not([name])")],k.prototype,"defaultSlot",2);n([w(".menu-item")],k.prototype,"menuItem",2);n([r()],k.prototype,"type",2);n([r({type:Boolean,reflect:!0})],k.prototype,"checked",2);n([r()],k.prototype,"value",2);n([r({type:Boolean,reflect:!0})],k.prototype,"loading",2);n([r({type:Boolean,reflect:!0})],k.prototype,"disabled",2);n([E("checked")],k.prototype,"handleCheckedChange",1);n([E("disabled")],k.prototype,"handleDisabledChange",1);n([E("type")],k.prototype,"handleTypeChange",1);k.define("sl-menu-item");var Ze=g`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Dt=class extends z{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],o=t.composedPath().find(i=>{var a;return e.includes(((a=i==null?void 0:i.getAttribute)==null?void 0:a.call(i,"role"))||"")});if(!o)return;const s=o;s.type==="checkbox"&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e==null||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),o=this.getCurrentItem();let s=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?s++:t.key==="ArrowUp"?s--:t.key==="Home"?s=0:t.key==="End"&&(s=e.length-1),s<0&&(s=e.length-1),s>e.length-1&&(s=0),this.setCurrentItem(e[s]),e[s].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===t?"0":"-1")})}render(){return l`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Dt.styles=[T,Ze];n([w("slot")],Dt.prototype,"defaultSlot",2);Dt.define("sl-menu");var Je=g`
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
`,to=(t="value")=>(e,o)=>{const s=e.constructor,i=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(a,d,h){var b;const v=s.getPropertyOptions(t),F=typeof v.attribute=="string"?v.attribute:t;if(a===F){const $=v.converter||Pt,N=(typeof $=="function"?$:(b=$==null?void 0:$.fromAttribute)!=null?b:Pt.fromAttribute)(h,v.type);this[t]!==N&&(this[o]=N)}i.call(this,a,d,h)}},eo=g`
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
`,et=new WeakMap,ot=new WeakMap,st=new WeakMap,kt=new WeakSet,ct=new WeakMap,se=class{constructor(t,e){this.handleFormData=o=>{const s=this.options.disabled(this.host),i=this.options.name(this.host),a=this.options.value(this.host),d=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!d&&typeof i=="string"&&i.length>0&&typeof a<"u"&&(Array.isArray(a)?a.forEach(h=>{o.formData.append(i,h.toString())}):o.formData.append(i,a.toString()))},this.handleFormSubmit=o=>{var s;const i=this.options.disabled(this.host),a=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=et.get(this.form))==null||s.forEach(d=>{this.setUserInteracted(d,!0)})),this.form&&!this.form.noValidate&&!i&&!a(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ct.set(this.host,[])},this.handleInteraction=o=>{const s=ct.get(this.host);s.includes(o.type)||s.push(o.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const s of o)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const s of o)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Tt({form:o=>{const s=o.form;if(s){const a=o.getRootNode().querySelector(`#${s}`);if(a)return a}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var s;return(s=o.disabled)!=null?s:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,s)=>o.value=s,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),ct.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ct.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,et.has(this.form)?et.get(this.form).add(this.host):et.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ot.has(this.form)||(ot.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),st.has(this.form)||(st.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=et.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ot.has(this.form)&&(this.form.reportValidity=ot.get(this.form),ot.delete(this.form)),st.has(this.form)&&(this.form.checkValidity=st.get(this.form),st.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?kt.add(t):kt.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{e.hasAttribute(s)&&o.setAttribute(s,e.getAttribute(s))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!kt.has(e),s=!!e.required;e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},Ft=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Yt(Tt({},Ft),{valid:!1,valueMissing:!0}));Object.freeze(Yt(Tt({},Ft),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo=St(class extends At{constructor(t){if(super(t),t.type!==V.PROPERTY&&t.type!==V.ATTRIBUTE&&t.type!==V.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!jt(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===rt||e===Ct)return e;const o=t.element,s=t.name;if(t.type===V.PROPERTY){if(e===o[s])return rt}else if(t.type===V.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(s))return rt}else if(t.type===V.ATTRIBUTE&&o.getAttribute(s)===e+"")return rt;return le(t),e}});var u=class extends z{constructor(){super(...arguments),this.formControlController=new se(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new yt(this,"help-text","label"),this.localize=new Q(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,s="preserve"){const i=e??this.input.selectionStart,a=o??this.input.selectionEnd;this.input.setRangeText(t,i,a,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,s=this.helpText?!0:!!e,a=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return l`
      <div
        part="form-control"
        class=${I({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${I({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${f(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${f(this.placeholder)}
              minlength=${f(this.minlength)}
              maxlength=${f(this.maxlength)}
              min=${f(this.min)}
              max=${f(this.max)}
              step=${f(this.step)}
              .value=${oo(this.value)}
              autocapitalize=${f(this.autocapitalize)}
              autocomplete=${f(this.autocomplete)}
              autocorrect=${f(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${f(this.pattern)}
              enterkeyhint=${f(this.enterkeyhint)}
              inputmode=${f(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${a?l`
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
            ${this.passwordToggle&&!this.disabled?l`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?l`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:l`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};u.styles=[T,eo,Je];u.dependencies={"sl-icon":gt};n([w(".input__control")],u.prototype,"input",2);n([A()],u.prototype,"hasFocus",2);n([r()],u.prototype,"title",2);n([r({reflect:!0})],u.prototype,"type",2);n([r()],u.prototype,"name",2);n([r()],u.prototype,"value",2);n([to()],u.prototype,"defaultValue",2);n([r({reflect:!0})],u.prototype,"size",2);n([r({type:Boolean,reflect:!0})],u.prototype,"filled",2);n([r({type:Boolean,reflect:!0})],u.prototype,"pill",2);n([r()],u.prototype,"label",2);n([r({attribute:"help-text"})],u.prototype,"helpText",2);n([r({type:Boolean})],u.prototype,"clearable",2);n([r({type:Boolean,reflect:!0})],u.prototype,"disabled",2);n([r()],u.prototype,"placeholder",2);n([r({type:Boolean,reflect:!0})],u.prototype,"readonly",2);n([r({attribute:"password-toggle",type:Boolean})],u.prototype,"passwordToggle",2);n([r({attribute:"password-visible",type:Boolean})],u.prototype,"passwordVisible",2);n([r({attribute:"no-spin-buttons",type:Boolean})],u.prototype,"noSpinButtons",2);n([r({reflect:!0})],u.prototype,"form",2);n([r({type:Boolean,reflect:!0})],u.prototype,"required",2);n([r()],u.prototype,"pattern",2);n([r({type:Number})],u.prototype,"minlength",2);n([r({type:Number})],u.prototype,"maxlength",2);n([r()],u.prototype,"min",2);n([r()],u.prototype,"max",2);n([r()],u.prototype,"step",2);n([r()],u.prototype,"autocapitalize",2);n([r()],u.prototype,"autocorrect",2);n([r()],u.prototype,"autocomplete",2);n([r({type:Boolean})],u.prototype,"autofocus",2);n([r()],u.prototype,"enterkeyhint",2);n([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],u.prototype,"spellcheck",2);n([r()],u.prototype,"inputmode",2);n([E("disabled",{waitUntilFirstUpdate:!0})],u.prototype,"handleDisabledChange",1);n([E("step",{waitUntilFirstUpdate:!0})],u.prototype,"handleStepChange",1);n([E("value",{waitUntilFirstUpdate:!0})],u.prototype,"handleValueChange",1);u.define("sl-input");let G=class extends j(M){constructor(){super(...arguments),this._searchFilter=new he.State(void 0),this.excludedAgents=[],this._searchProfiles=pe(this._searchFilter,e=>this.store.client.searchAgents(e),e=>{const o=_e(this.store.profiles,e);return xe(we(o,s=>s.get()))})}set searchFilter(e){this._searchFilter.set(e)}get searchFilter(){return this._searchFilter.get()}async onUsernameSelected(e){const o=await me(this.store.profiles.get(e));this.dispatchEvent(new CustomEvent("agent-selected",{detail:{agentPubKey:e,profile:o},bubbles:!0,composed:!0}))}renderAgentList(){const e=this._searchFilter.get();if(!e||e.length<3)return l`<sl-menu-item disabled
				>${m("Enter at least 3 chars to search...")}</sl-menu-item
			>`;const o=this._searchProfiles.get();switch(o.status){case"pending":return Array(3).map(()=>l`
						<sl-menu-item>
							<sl-skeleton
								effect="sheen"
								slot="prefix"
								style="height: 32px; width: 32px; border-radius: 50%; margin: 8px"
							></sl-skeleton>
							<sl-skeleton
								effect="sheen"
								style="width: 100px; margin: 8px; border-radius: 12px"
							></sl-skeleton>
						</sl-menu-item>
					`);case"error":return l`
					<display-error
						style="flex: 1; display:flex"
						tooltip
						.headline=${m("Error searching agents")}
						.error=${o.error}
					></display-error>
				`;case"completed":{let s=Array.from(o.value.entries()),i=this.excludedAgents.map(a=>a.toString());return s=s.filter(([a,d])=>!i.includes(a.toString())),s.length===0?l`<sl-menu-item disabled>
						${m("No agents match the filter")}
					</sl-menu-item>`:l`
					${s.map(([a,d])=>l`
							<sl-menu-item .value=${X(a)}>
								<agent-avatar
									slot="prefix"
									.agentPubKey=${a}
									style="margin-right: 16px"
								></agent-avatar>
								${d==null?void 0:d.entry.nickname}
							</sl-menu-item>
						`)}
				`}}}render(){return l`
			<sl-dropdown id="dropdown" style="flex: 1" .open=${f(this.open)}>
				<slot slot="trigger"></slot>
				<sl-menu
					@sl-select=${e=>{this.onUsernameSelected(fe(e.detail.item.value))}}
				>
					${this.renderAgentList()}
				</sl-menu>
			</sl-dropdown>
		`}static get styles(){return[q,g`
				:host {
					display: flex;
				}
			`]}};c([r()],G.prototype,"open",void 0);c([K({context:J,subscribe:!0}),r()],G.prototype,"store",void 0);c([r()],G.prototype,"excludedAgents",void 0);c([w("#dropdown")],G.prototype,"dropdown",void 0);G=c([Z(),B("search-agent-dropdown")],G);let x=class extends j(M){constructor(){super(...arguments),this.required=!1,this.disabled=!1,this.clearOnSelect=!1,this.excludedAgents=[],this._controller=new Qt(this),this.searchFilter=""}reportValidity(){const e=this.required!==!1&&this.value===void 0;return e&&(this._textField.setCustomValidity("This field is required"),this._textField.reportValidity()),!e}async reset(){if(this.value=this.defaultValue,this.defaultValue){const e=await this.store.client.getAgentProfile(this.defaultValue);this._textField.value=(e==null?void 0:e.entry.nickname)||""}else this._textField.value=""}onUsernameSelected(e,o){this.value=e,this.clearOnSelect?this._textField.value="":this._textField.value=o.entry.nickname,this.searchFilter=""}get _label(){let e=this.fieldLabel?this.fieldLabel:m("Search Agent");return this.required!==!1&&(e=`${e} *`),e}render(){return l`
			<div style="flex: 1; display: flex;">
				<search-agent-dropdown
					id="dropdown"
					.open=${this.searchFilter.length>=3}
					style="flex: 1"
					.excludedAgents=${this.excludedAgents}
					.searchFilter=${this.searchFilter}
					@agent-selected=${e=>this.onUsernameSelected(e.detail.agentPubKey,e.detail.profile)}
				>
					<sl-input
						id="textfield"
						.label=${this._label}
						.placeholder=${m("At least 3 chars...")}
						@input=${e=>{this.searchFilter=e.target.value}}
					></sl-input>
				</search-agent-dropdown>
			</div>
		`}static get styles(){return[q,g`
				:host {
					display: flex;
				}
			`]}};c([r()],x.prototype,"name",void 0);c([r(lt("default-value"))],x.prototype,"defaultValue",void 0);c([r()],x.prototype,"required",void 0);c([r()],x.prototype,"disabled",void 0);c([A()],x.prototype,"value",void 0);c([r({type:Boolean,attribute:"clear-on-select"})],x.prototype,"clearOnSelect",void 0);c([K({context:J,subscribe:!0}),r()],x.prototype,"store",void 0);c([r()],x.prototype,"excludedAgents",void 0);c([r({type:String,attribute:"field-label"})],x.prototype,"fieldLabel",void 0);c([w("#textfield")],x.prototype,"_textField",void 0);c([A()],x.prototype,"searchFilter",void 0);x=c([Z(),B("search-agent")],x);let C=class extends j(M){constructor(){super(...arguments),this.defaultValue=[],this.required=!1,this.disabled=!1,this.emptyListPlaceholder=m("No agents selected yet."),this._controller=new Qt(this),this.excludedAgents=[],this.value=[]}reportValidity(){return!0}async reset(){this.value=this.defaultValue}render(){return l`
			<div class="column" style="gap: 16px">
				<search-agent
					.fieldLabel=${this.fieldLabel}
					clear-on-select
					@agent-selected=${e=>{this.value=[...this.value,e.detail.agentPubKey],this.dispatchEvent(new CustomEvent("agents-changed",{composed:!0,bubbles:!0,detail:{agents:this.value}}))}}
					.excludedAgents=${this.excludedAgents}
				></search-agent>
				${this.value.length===0?l`<span class="placeholder">${this.emptyListPlaceholder}</span>`:this.value.map((e,o)=>l`<div class="row">
									<profile-list-item
										style="flex: 1"
										.agentPubKey=${e}
									></profile-list-item
									><sl-icon-button
										.src=${mt(Gt)}
										@click=${()=>{this.value=this.value.filter((s,i)=>i!==o),this.dispatchEvent(new CustomEvent("agents-changed",{composed:!0,bubbles:!0,detail:{agents:this.value}}))}}
									></sl-icon-button>
								</div>`)}
			</div>
		`}};C.styles=[q];c([r()],C.prototype,"name",void 0);c([r(lt("default-value"))],C.prototype,"defaultValue",void 0);c([r()],C.prototype,"required",void 0);c([r()],C.prototype,"disabled",void 0);c([r({type:String,attribute:"field-label"})],C.prototype,"fieldLabel",void 0);c([r({type:String,attribute:"empty-list-placeholder"})],C.prototype,"emptyListPlaceholder",void 0);c([K({context:J,subscribe:!0}),r()],C.prototype,"store",void 0);c([r()],C.prototype,"excludedAgents",void 0);c([A()],C.prototype,"value",void 0);C=c([Z(),B("search-agents")],C);var so=g`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,p=class extends z{constructor(){super(...arguments),this.formControlController=new se(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new yt(this,"[default]","prefix","suffix"),this.localize=new Q(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ft}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Rt`a`:Rt`button`;return wt`
      <${e}
        part="base"
        class=${I({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${f(t?void 0:this.disabled)}
        type=${f(t?void 0:this.type)}
        title=${this.title}
        name=${f(t?void 0:this.name)}
        value=${f(t?void 0:this.value)}
        href=${f(t?this.href:void 0)}
        target=${f(t?this.target:void 0)}
        download=${f(t?this.download:void 0)}
        rel=${f(t?this.rel:void 0)}
        role=${f(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?wt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?wt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};p.styles=[T,so];p.dependencies={"sl-icon":gt,"sl-spinner":vt};n([w(".button")],p.prototype,"button",2);n([A()],p.prototype,"hasFocus",2);n([A()],p.prototype,"invalid",2);n([r()],p.prototype,"title",2);n([r({reflect:!0})],p.prototype,"variant",2);n([r({reflect:!0})],p.prototype,"size",2);n([r({type:Boolean,reflect:!0})],p.prototype,"caret",2);n([r({type:Boolean,reflect:!0})],p.prototype,"disabled",2);n([r({type:Boolean,reflect:!0})],p.prototype,"loading",2);n([r({type:Boolean,reflect:!0})],p.prototype,"outline",2);n([r({type:Boolean,reflect:!0})],p.prototype,"pill",2);n([r({type:Boolean,reflect:!0})],p.prototype,"circle",2);n([r()],p.prototype,"type",2);n([r()],p.prototype,"name",2);n([r()],p.prototype,"value",2);n([r()],p.prototype,"href",2);n([r()],p.prototype,"target",2);n([r()],p.prototype,"rel",2);n([r()],p.prototype,"download",2);n([r()],p.prototype,"form",2);n([r({attribute:"formaction"})],p.prototype,"formAction",2);n([r({attribute:"formenctype"})],p.prototype,"formEnctype",2);n([r({attribute:"formmethod"})],p.prototype,"formMethod",2);n([r({attribute:"formnovalidate",type:Boolean})],p.prototype,"formNoValidate",2);n([r({attribute:"formtarget"})],p.prototype,"formTarget",2);n([E("disabled",{waitUntilFirstUpdate:!0})],p.prototype,"handleDisabledChange",1);p.define("sl-button");function*It(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*de(It(t.shadowRoot.activeElement))))}function io(){return[...It()].pop()}var it=[],ro=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var o;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=io();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=$t(this.element);let a=i.findIndex(h=>h===s);this.previousFocus=this.currentFocus;const d=this.tabDirection==="forward"?1:-1;for(;;){a+d>=i.length?a=0:a+d<0?a=i.length-1:a+=d,this.previousFocus=this.currentFocus;const h=i[a];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||h&&this.possiblyHasTabbableChildren(h))return;e.preventDefault(),this.currentFocus=h,(o=this.currentFocus)==null||o.focus({preventScroll:!1});const b=[...It()];if(b.includes(this.currentFocus)||!b.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){it.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){it=it.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return it[it.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=$t(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],s=this.tabDirection==="forward"?e:o;typeof(s==null?void 0:s.focus)=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},Et=new Set;function no(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function ao(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Ht(t){if(Et.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=no()+ao();let o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),e<=0&&(o="revert"),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",o),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function qt(t){Et.delete(t),Et.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var lo=g`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,D=class extends z{constructor(){super(...arguments),this.hasSlotController=new yt(this,"footer"),this.localize=new Q(this),this.modal=new ro(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ht(this))}disconnectedCallback(){var t;super.disconnectedCallback(),this.modal.deactivate(),qt(this),(t=this.closeWatcher)==null||t.destroy()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=U(this,"dialog.denyClose",{dir:this.localize.dir()});H(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ht(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Y(this.dialog),Y(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=U(this,"dialog.show",{dir:this.localize.dir()}),o=U(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([H(this.panel,e.keyframes,e.options),H(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Y(this.dialog),Y(this.overlay)]);const t=U(this,"dialog.hide",{dir:this.localize.dir()}),e=U(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([H(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),H(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,qt(this);const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,pt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pt(this,"sl-after-hide")}render(){return l`
      <div
        part="base"
        class=${I({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${f(this.noHeader?this.label:void 0)}
          aria-labelledby=${f(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":l`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};D.styles=[T,lo];D.dependencies={"sl-icon-button":Kt};n([w(".dialog")],D.prototype,"dialog",2);n([w(".dialog__panel")],D.prototype,"panel",2);n([w(".dialog__overlay")],D.prototype,"overlay",2);n([r({type:Boolean,reflect:!0})],D.prototype,"open",2);n([r({reflect:!0})],D.prototype,"label",2);n([r({attribute:"no-header",type:Boolean,reflect:!0})],D.prototype,"noHeader",2);n([E("open",{waitUntilFirstUpdate:!0})],D.prototype,"handleOpenChange",1);W("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});W("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});W("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});W("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});W("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});D.define("sl-dialog");var uo=g`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,_t=class extends z{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};_t.styles=[T,uo];n([r({type:Boolean,reflect:!0})],_t.prototype,"vertical",2);n([E("vertical")],_t.prototype,"handleVerticalChange",1);_t.define("sl-divider");vt.define("sl-spinner");var co=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,tt=(t,e,o,s)=>{for(var i=s>1?void 0:s?ho(e,o):e,a=t.length-1,d;a>=0;a--)(d=t[a])&&(i=(s?d(e,o,i):d(i))||i);return s&&i&&co(e,o,i),i};let P=class extends j(M){constructor(){super(...arguments),this.committing=!1,this.removingRole=!1}async addMembersToRole(t,e){try{this.committing=!0,await this.rolesStore.client.assignRole(t,e),this.dispatchEvent(new CustomEvent("role-assigned-to-members",{composed:!0,bubbles:!0,detail:{role:t,assignees:e}})),this.shadowRoot.getElementById(`add-members-${t}`).hide()}catch(o){console.error(o),Mt(m("Error adding members to the role"))}this.committing=!1}async removeRole(t,e){try{this.removingRole=!0,await this.rolesStore.client.requestUnassignRole(t,e),this.dispatchEvent(new CustomEvent("unassig-role-requested",{composed:!0,bubbles:!0,detail:{role:t,assignee:e}})),this.shadowRoot.getElementById(`remove-role-${t}-for-${X(e)}`).hide()}catch(o){console.error(o),Mt(m("Error removing the role"))}this.removingRole=!1}name(t){var o;const e=this.profilesStore.profiles.get(t).get();if(e.status==="completed")return(o=e.value)==null?void 0:o.entry.nickname}renderRemoveRoleAction(t,e,o){const s=this.rolesStore.pendingUnassignments.get();switch(s.status){case"pending":return l`<sl-skeleton></sl-skeleton>`;case"error":return l`<display-error
					.headline=${m("Error fetching the pending unassignments")}
					tooltip
					.error=${s.error}
				></display-error>`;case"completed":return s.value.find(a=>be(a.target,ge.AGENT).toString()===e.toString()&&new TextDecoder().decode(a.tag)===t.role)?l`<sl-tag>${m("Remove Role Requested")}</sl-tag>`:l`
					<sl-dialog
						.label=${m("Remove role")}
						id="remove-role-${t.role}-for-${X(e)}"
					>
						<div class="column" style="gap: 12px">
							<span
								>${m(Vt`Are you sure you want to request ${this.name(e)} to remove its ${t.singular_name} role?`)}</span
							>
							<span
								>${m("Their role will actually be removed the next time this member is online again.")}</span
							>
						</div>
						<sl-button
							slot="footer"
							@click=${()=>this.shadowRoot.getElementById(`remove-role-${t.role}-for-${X(e)}`).hide()}
							>${m("Cancel")}</sl-button
						>
						<sl-button
							slot="footer"
							variant="primary"
							.loading=${this.committing}
							@click=${()=>{this.removeRole(t.role,e)}}
							>${m("Remove Role")}</sl-button
						>
					</sl-dialog>

					<sl-icon-button
						.src=${mt(Gt)}
						.disabled=${t.role===ut.role&&o<2}
						@click=${()=>{var a;((a=this.shadowRoot)==null?void 0:a.getElementById(`remove-role-${t.role}-for-${X(e)}`)).show()}}
					></sl-icon-button>
				`}}renderRole(t,e,o){var s,i;return l` <sl-dialog
				id="add-members-${t.role}"
				.label=${m(Vt`Add members as ${t.plural_name}`)}
			>
				<search-agents
					.excludedAgents=${e}
					id="search-agents-${t.role}"
					.fieldLabel=${m("Search Member")}
					.emptyListPlaceholder=${m("No members selected yet.")}
					@agents-changed=${()=>this.requestUpdate()}
				></search-agents>
				<sl-button
					slot="footer"
					@click=${()=>this.shadowRoot.getElementById(`add-members-${t.role}`).hide()}
					>${m("Cancel")}</sl-button
				>
				<sl-button
					slot="footer"
					variant="primary"
					.disabled=${!(((i=(s=this.shadowRoot)==null?void 0:s.getElementById(`search-agents-${t.role}`))==null?void 0:i.value.length)>0)}
					.loading=${this.committing}
					@click=${()=>{var d;const a=((d=this.shadowRoot)==null?void 0:d.getElementById(`search-agents-${t.role}`)).value;this.addMembersToRole(t.role,a)}}
					>${m("Add Members")}</sl-button
				>
			</sl-dialog>
			<div class="column">
				<div class="row" style="align-items: center">
					<span class="title" style="flex: 1">${t.plural_name}</span>
					${o?l`
								<sl-button
									@click=${()=>this.shadowRoot.getElementById(`add-members-${t.role}`).show()}
									>${m("Add Members")}</sl-button
								>
							`:l``}
				</div>
				<sl-divider></sl-divider>
				<span class="placeholder">${t.description}</span>

				<div class="column" style="gap: 12px; margin-top: 24px;">
					${e.length===0?l`
								<div
									class="column"
									style="gap: 4px; flex: 1; align-items: center; justify-content: center"
								>
									<sl-icon
										style="color: grey; height: 32px; width: 32px;"
										.src=${mt(Xt)}
									></sl-icon>
									<span class="placeholder"
										>${m("No members have this role assigned.")}</span
									>
								</div>
							`:e.map(a=>l`
									<div class="row" style="align-items: center;">
										<profile-list-item .agentPubKey=${a}></profile-list-item>
										<span style="flex: 1"></span>
										${o?this.renderRemoveRoleAction(t,a,e.length):l``}
									</div>
								`)}
				</div>
			</div>`}assigneesForRoleAndIAmAdmin(){const t=this.rolesStore.assignees.get(this.role).get(),e=this.rolesStore.myRoles.get();if(t.status!=="completed")return t;if(e.status!=="completed")return e;const o=e.value.includes(ut.role);return{status:"completed",value:{assignees:t.value,iAmAdmin:o}}}render(){const t=this.assigneesForRoleAndIAmAdmin();switch(t.status){case"pending":return l`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;case"error":return l`<display-error
					.headline=${m("Error fetching the role details.")}
					.error=${t.error}
				></display-error>`;case"completed":const e=this.role===ut.role?ut:this.rolesStore.config.roles_config.find(o=>o.role===this.role);return this.renderRole(e,t.value.assignees,t.value.iAmAdmin)}}};P.styles=[q,g`
			sl-divider {
				--spacing: var(--sl-spacing-small);
			}
		`];tt([r()],P.prototype,"role",2);tt([K({context:ye,subscribe:!0}),r()],P.prototype,"rolesStore",2);tt([K({context:J,subscribe:!0})],P.prototype,"profilesStore",2);tt([A()],P.prototype,"committing",2);tt([A()],P.prototype,"removingRole",2);P=tt([B("role-detail")],P);const Eo=Object.freeze(Object.defineProperty({__proto__:null,get RoleDetail(){return P}},Symbol.toStringTag,{value:"Module"}));export{Z as l,Eo as r};
