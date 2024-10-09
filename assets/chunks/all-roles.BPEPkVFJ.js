import{H as qe,j as si,i as L,d as Eo,w as ie,m as So,a as Ao,b as Bt,s as Q,x as m,e as Mt,c as A,T as be,g as ge,n as pe,u as io,B as ri,p as ni,t as ai,h as zo,r as li,k as ci,l as so,o as ce}from"../elements_all-roles.md.sHlU9bnF.js";import{S as St}from"./signal-watcher.Cu0NVqW0.js";import{s as di,n as l,a as ui,t as nt}from"./property.BZCvAHlr.js";import{r as Lo}from"./context.DWsuRjof.js";import{_ as x}from"./tslib.es6.kHcLnhpD.js";import"./framework.Ck1r-Hkz.js";import"./commonjsHelpers.CfSuzJoK.js";import"./range.8CHRcHaX.js";import"./toFinite.4brzzzp-.js";import"./isSymbol.BQyHfQYg.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ro=class{constructor(e,o,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(r,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=r,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(r,n)),this.unsubscribe=n},this.host=e,o.context!==void 0){const r=o;this.context=r.context,this.callback=r.callback,this.subscribe=r.subscribe??!1}else this.context=o,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new di(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function At({context:t,subscribe:e}){return(o,i)=>{typeof i=="object"?i.addInitializer(function(){new ro(this,{context:t,callback:s=>{o.set.call(this,s)},subscribe:e})}):o.constructor.addInitializer(s=>{new ro(s,{context:t,callback:r=>{s[i]=r},subscribe:e})})}}function hi(t,e){const o=new qe;for(const i of e)o.set(i,t.get(i));return o}function pi(t,e){const o=new qe;for(const[i,s]of t.entries())o.set(i,e(s,i));return o}function fi(t,e){const o=Array.from(t.entries()).map(([r,n])=>n.status!=="completed"?n:{status:"completed",value:[r,n.value]}),i=si(o);return i.status!=="completed"?i:{status:"completed",value:new qe(i.value)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mi=class{constructor(e){this.__litLocalizeEventHandler=o=>{o.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(no,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(no,this.__litLocalizeEventHandler)}};const bi=t=>t.addController(new mi(t)),gi=bi;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=()=>(t,e)=>(t.addInitializer(gi),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function X(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(t,e){return(o,i,s)=>{const r=n=>{var c;return((c=n.renderRoot)==null?void 0:c.querySelector(t))??null};return vi(o,i,{get(){return r(this)}})}}const pt=[L`
    .row {
      display: flex;
      flex-direction: row;
    }
    .column {
      display: flex;
      flex-direction: column;
    }
    .small-margin {
      margin-top: 6px;
    }
    .big-margin {
      margin-top: 23px;
    }

    .fill {
      flex: 1;
      height: 100%;
    }

    .title {
      font-size: 20px;
    }

    .center-content {
      align-items: center;
      justify-content: center;
    }

    .placeholder {
      color: var(--sl-color-gray-700);
    }

    .flex-scrollable-parent {
      position: relative;
      display: flex;
      flex: 1;
    }

    .flex-scrollable-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .flex-scrollable-x {
      max-width: 100%;
      overflow-x: auto;
    }
    .flex-scrollable-y {
      max-height: 100%;
      overflow-y: auto;
    }
    :host {
      color: var(--sl-color-neutral-1000);
    }

    sl-card {
      display: flex;
    }
    sl-card::part(base) {
      flex: 1;
    }
    sl-card::part(body) {
      display: flex;
      flex: 1;
    }
    sl-drawer::part(body) {
      display: flex;
    }
  `];class To{constructor(e){this.host=e,this.host.addController(this),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this)}closestElement(e){function o(i){if(!i||i===document||i===window)return null;i.assignedSlot&&(i=i.assignedSlot);const s=i.closest(e);return s||o(i.getRootNode().host)}return o(this.host)}hostConnected(){this.form=this.closestElement("form"),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),this.form.dispatchEvent(new CustomEvent("update-form")))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),this.form=void 0)}handleFormData(e){const o=this.host.disabled,i=this.host.name,s=this.host.value;!o&&i&&s!==void 0&&(Array.isArray(s)?s.map(r=>e.formData.append(i,r)):e.formData.append(i,s))}handleFormSubmit(e){const o=this.form,i=this.host.disabled,s=this.host.reportValidity;o&&!o.noValidate&&!i&&s&&!this.host.reportValidity()&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(e){this.host.reset()}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ce=t=>(...e)=>({_$litDirective$:t,values:e});let $e=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};function ne(t){return{attribute:t,type:Object,hasChanged:(e,o)=>(e==null?void 0:e.toString())!==(o==null?void 0:o.toString()),converter:e=>e&&e.length>0&&Eo(e)}}function yi(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function wi(t,e="primary",o=So,i=3e3){const s=Object.assign(document.createElement("sl-alert"),{variant:e,closable:!0,duration:i,innerHTML:`
        <sl-icon src="${ie(o)}" slot="icon"></sl-icon>
        ${yi(t)}
      `});return document.body.append(s),s.toast()}function ao(t){return wi(t,"danger",Ao)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let xi=class Po extends Event{constructor(e){super(Po.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=e}};xi.eventName="lit-routes-connected";const Wt=ui("hc_zome_profiles/store");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ro="important",_i=" !"+Ro,lo=Ce(class extends $e{constructor(t){var e;if(super(t),t.type!==dt.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const i=t[o];return i==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?o.removeProperty(i):o[i]=null);for(const i in e){const s=e[i];if(s!=null){this.ft.add(i);const r=typeof s=="string"&&s.endsWith(_i);i.includes("-")||r?o.setProperty(i,r?s.slice(0,-11):s,r?Ro:""):o[i]=s}}return Bt}});var ki=L`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ci=L`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`,V=L`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Oo=Object.defineProperty,$i=Object.defineProperties,Ei=Object.getOwnPropertyDescriptor,Si=Object.getOwnPropertyDescriptors,co=Object.getOwnPropertySymbols,Ai=Object.prototype.hasOwnProperty,zi=Object.prototype.propertyIsEnumerable,Pe=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),uo=(t,e,o)=>e in t?Oo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,Dt=(t,e)=>{for(var o in e||(e={}))Ai.call(e,o)&&uo(t,o,e[o]);if(co)for(var o of co(e))zi.call(e,o)&&uo(t,o,e[o]);return t},Ee=(t,e)=>$i(t,Si(e)),a=(t,e,o,i)=>{for(var s=i>1?void 0:i?Ei(e,o):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Oo(e,o,s),s},Li=function(t,e){this[0]=t,this[1]=e},Ti=t=>{var e=t[Pe("asyncIterator")],o=!1,i,s={};return e==null?(e=t[Pe("iterator")](),i=r=>s[r]=n=>e[r](n)):(e=e.call(t),i=r=>s[r]=n=>{if(o){if(o=!1,r==="throw")throw n;return n}return o=!0,{done:!1,value:new Li(new Promise(c=>{var d=e[r](n);if(!(d instanceof Object))throw TypeError("Object expected");c(d)}),1)}}),s[Pe("iterator")]=()=>s,i("next"),"throw"in e?i("throw"):s.throw=r=>{throw r},"return"in e&&i("return"),s},R=class extends Q{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,Dt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){customElements.define(t,class extends e{},o);return}let s=" (unknown version)",r=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in i&&i.version&&(r=" v"+i.version),!(s&&r&&s===r)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${r} has already been registered.`)}};R.version="2.15.1";R.dependencies={};a([l()],R.prototype,"dir",2);a([l()],R.prototype,"lang",2);const ot=Math.min,U=Math.max,ve=Math.round,de=Math.floor,_t=t=>({x:t,y:t}),Pi={left:"right",right:"left",bottom:"top",top:"bottom"},Ri={start:"end",end:"start"};function Me(t,e,o){return U(t,ot(e,o))}function qt(t,e){return typeof t=="function"?t(e):t}function kt(t){return t.split("-")[0]}function Kt(t){return t.split("-")[1]}function Do(t){return t==="x"?"y":"x"}function Ke(t){return t==="y"?"height":"width"}function Tt(t){return["top","bottom"].includes(kt(t))?"y":"x"}function Ye(t){return Do(Tt(t))}function Oi(t,e,o){o===void 0&&(o=!1);const i=Kt(t),s=Ye(t),r=Ke(s);let n=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(n=ye(n)),[n,ye(n)]}function Di(t){const e=ye(t);return[Ve(t),e,Ve(e)]}function Ve(t){return t.replace(/start|end/g,e=>Ri[e])}function Fi(t,e,o){const i=["left","right"],s=["right","left"],r=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return o?e?s:i:e?i:s;case"left":case"right":return e?r:n;default:return[]}}function Ii(t,e,o,i){const s=Kt(t);let r=Fi(kt(t),o==="start",i);return s&&(r=r.map(n=>n+"-"+s),e&&(r=r.concat(r.map(Ve)))),r}function ye(t){return t.replace(/left|right|bottom|top/g,e=>Pi[e])}function Bi(t){return{top:0,right:0,bottom:0,left:0,...t}}function Fo(t){return typeof t!="number"?Bi(t):{top:t,right:t,bottom:t,left:t}}function we(t){const{x:e,y:o,width:i,height:s}=t;return{width:i,height:s,top:o,left:e,right:e+i,bottom:o+s,x:e,y:o}}function ho(t,e,o){let{reference:i,floating:s}=t;const r=Tt(e),n=Ye(e),c=Ke(n),d=kt(e),u=r==="y",h=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,g=i[c]/2-s[c]/2;let p;switch(d){case"top":p={x:h,y:i.y-s.height};break;case"bottom":p={x:h,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:f};break;case"left":p={x:i.x-s.width,y:f};break;default:p={x:i.x,y:i.y}}switch(Kt(e)){case"start":p[n]-=g*(o&&u?-1:1);break;case"end":p[n]+=g*(o&&u?-1:1);break}return p}const Mi=async(t,e,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:n}=o,c=r.filter(Boolean),d=await(n.isRTL==null?void 0:n.isRTL(e));let u=await n.getElementRects({reference:t,floating:e,strategy:s}),{x:h,y:f}=ho(u,i,d),g=i,p={},b=0;for(let v=0;v<c.length;v++){const{name:_,fn:y}=c[v],{x:C,y:S,data:P,reset:z}=await y({x:h,y:f,initialPlacement:i,placement:g,strategy:s,middlewareData:p,rects:u,platform:n,elements:{reference:t,floating:e}});h=C??h,f=S??f,p={...p,[_]:{...p[_],...P}},z&&b<=50&&(b++,typeof z=="object"&&(z.placement&&(g=z.placement),z.rects&&(u=z.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:s}):z.rects),{x:h,y:f}=ho(u,g,d)),v=-1)}return{x:h,y:f,placement:g,strategy:s,middlewareData:p}};async function Xe(t,e){var o;e===void 0&&(e={});const{x:i,y:s,platform:r,rects:n,elements:c,strategy:d}=t,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:f="floating",altBoundary:g=!1,padding:p=0}=qt(e,t),b=Fo(p),_=c[g?f==="floating"?"reference":"floating":f],y=we(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(_)))==null||o?_:_.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:u,rootBoundary:h,strategy:d})),C=f==="floating"?{x:i,y:s,width:n.floating.width,height:n.floating.height}:n.reference,S=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),P=await(r.isElement==null?void 0:r.isElement(S))?await(r.getScale==null?void 0:r.getScale(S))||{x:1,y:1}:{x:1,y:1},z=we(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:C,offsetParent:S,strategy:d}):C);return{top:(y.top-z.top+b.top)/P.y,bottom:(z.bottom-y.bottom+b.bottom)/P.y,left:(y.left-z.left+b.left)/P.x,right:(z.right-y.right+b.right)/P.x}}const Vi=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:s,rects:r,platform:n,elements:c,middlewareData:d}=e,{element:u,padding:h=0}=qt(t,e)||{};if(u==null)return{};const f=Fo(h),g={x:o,y:i},p=Ye(s),b=Ke(p),v=await n.getDimensions(u),_=p==="y",y=_?"top":"left",C=_?"bottom":"right",S=_?"clientHeight":"clientWidth",P=r.reference[b]+r.reference[p]-g[p]-r.floating[b],z=g[p]-r.reference[p],M=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u));let J=M?M[S]:0;(!J||!await(n.isElement==null?void 0:n.isElement(M)))&&(J=c.floating[S]||r.floating[b]);const gt=P/2-z/2,tt=J/2-v[b]/2-1,G=ot(f[y],tt),vt=ot(f[C],tt),zt=G,Gt=J-v[b]-vt,I=J/2-v[b]/2+gt,It=Me(zt,I,Gt),ct=!d.arrow&&Kt(s)!=null&&I!==It&&r.reference[b]/2-(I<zt?G:vt)-v[b]/2<0,et=ct?I<zt?I-zt:I-Gt:0;return{[p]:g[p]+et,data:{[p]:It,centerOffset:I-It-et,...ct&&{alignmentOffset:et}},reset:ct}}}),Ni=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:s,middlewareData:r,rects:n,initialPlacement:c,platform:d,elements:u}=e,{mainAxis:h=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:v=!0,..._}=qt(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const y=kt(s),C=Tt(c),S=kt(c)===c,P=await(d.isRTL==null?void 0:d.isRTL(u.floating)),z=g||(S||!v?[ye(c)]:Di(c)),M=b!=="none";!g&&M&&z.push(...Ii(c,v,b,P));const J=[c,...z],gt=await Xe(e,_),tt=[];let G=((i=r.flip)==null?void 0:i.overflows)||[];if(h&&tt.push(gt[y]),f){const I=Oi(s,n,P);tt.push(gt[I[0]],gt[I[1]])}if(G=[...G,{placement:s,overflows:tt}],!tt.every(I=>I<=0)){var vt,zt;const I=(((vt=r.flip)==null?void 0:vt.index)||0)+1,It=J[I];if(It)return{data:{index:I,overflows:G},reset:{placement:It}};let ct=(zt=G.filter(et=>et.overflows[0]<=0).sort((et,yt)=>et.overflows[1]-yt.overflows[1])[0])==null?void 0:zt.placement;if(!ct)switch(p){case"bestFit":{var Gt;const et=(Gt=G.filter(yt=>{if(M){const wt=Tt(yt.placement);return wt===C||wt==="y"}return!0}).map(yt=>[yt.placement,yt.overflows.filter(wt=>wt>0).reduce((wt,ii)=>wt+ii,0)]).sort((yt,wt)=>yt[1]-wt[1])[0])==null?void 0:Gt[0];et&&(ct=et);break}case"initialPlacement":ct=c;break}if(s!==ct)return{reset:{placement:ct}}}return{}}}};async function Hi(t,e){const{placement:o,platform:i,elements:s}=t,r=await(i.isRTL==null?void 0:i.isRTL(s.floating)),n=kt(o),c=Kt(o),d=Tt(o)==="y",u=["left","top"].includes(n)?-1:1,h=r&&d?-1:1,f=qt(e,t);let{mainAxis:g,crossAxis:p,alignmentAxis:b}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return c&&typeof b=="number"&&(p=c==="end"?b*-1:b),d?{x:p*h,y:g*u}:{x:g*u,y:p*h}}const Ui=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:s,y:r,placement:n,middlewareData:c}=e,d=await Hi(e,t);return n===((o=c.offset)==null?void 0:o.placement)&&(i=c.arrow)!=null&&i.alignmentOffset?{}:{x:s+d.x,y:r+d.y,data:{...d,placement:n}}}}},ji=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:s}=e,{mainAxis:r=!0,crossAxis:n=!1,limiter:c={fn:_=>{let{x:y,y:C}=_;return{x:y,y:C}}},...d}=qt(t,e),u={x:o,y:i},h=await Xe(e,d),f=Tt(kt(s)),g=Do(f);let p=u[g],b=u[f];if(r){const _=g==="y"?"top":"left",y=g==="y"?"bottom":"right",C=p+h[_],S=p-h[y];p=Me(C,p,S)}if(n){const _=f==="y"?"top":"left",y=f==="y"?"bottom":"right",C=b+h[_],S=b-h[y];b=Me(C,b,S)}const v=c.fn({...e,[g]:p,[f]:b});return{...v,data:{x:v.x-o,y:v.y-i}}}}},Wi=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:i,platform:s,elements:r}=e,{apply:n=()=>{},...c}=qt(t,e),d=await Xe(e,c),u=kt(o),h=Kt(o),f=Tt(o)==="y",{width:g,height:p}=i.floating;let b,v;u==="top"||u==="bottom"?(b=u,v=h===(await(s.isRTL==null?void 0:s.isRTL(r.floating))?"start":"end")?"left":"right"):(v=u,b=h==="end"?"top":"bottom");const _=p-d.top-d.bottom,y=g-d.left-d.right,C=ot(p-d[b],_),S=ot(g-d[v],y),P=!e.middlewareData.shift;let z=C,M=S;if(f?M=h||P?ot(S,y):y:z=h||P?ot(C,_):_,P&&!h){const gt=U(d.left,0),tt=U(d.right,0),G=U(d.top,0),vt=U(d.bottom,0);f?M=g-2*(gt!==0||tt!==0?gt+tt:U(d.left,d.right)):z=p-2*(G!==0||vt!==0?G+vt:U(d.top,d.bottom))}await n({...e,availableWidth:M,availableHeight:z});const J=await s.getDimensions(r.floating);return g!==J.width||p!==J.height?{reset:{rects:!0}}:{}}}};function Yt(t){return Io(t)?(t.nodeName||"").toLowerCase():"#document"}function j(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ft(t){var e;return(e=(Io(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Io(t){return t instanceof Node||t instanceof j(t).Node}function it(t){return t instanceof Element||t instanceof j(t).Element}function st(t){return t instanceof HTMLElement||t instanceof j(t).HTMLElement}function po(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof j(t).ShadowRoot}function ae(t){const{overflow:e,overflowX:o,overflowY:i,display:s}=Z(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(s)}function qi(t){return["table","td","th"].includes(Yt(t))}function Se(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Ge(t){const e=Ze(),o=Z(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function Ki(t){let e=Ct(t);for(;st(e)&&!Ht(e);){if(Se(e))return null;if(Ge(e))return e;e=Ct(e)}return null}function Ze(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ht(t){return["html","body","#document"].includes(Yt(t))}function Z(t){return j(t).getComputedStyle(t)}function Ae(t){return it(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Ct(t){if(Yt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||po(t)&&t.host||ft(t);return po(e)?e.host:e}function Bo(t){const e=Ct(t);return Ht(e)?t.ownerDocument?t.ownerDocument.body:t.body:st(e)&&ae(e)?e:Bo(e)}function se(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const s=Bo(t),r=s===((i=t.ownerDocument)==null?void 0:i.body),n=j(s);return r?e.concat(n,n.visualViewport||[],ae(s)?s:[],n.frameElement&&o?se(n.frameElement):[]):e.concat(s,se(s,[],o))}function Mo(t){const e=Z(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=st(t),r=s?t.offsetWidth:o,n=s?t.offsetHeight:i,c=ve(o)!==r||ve(i)!==n;return c&&(o=r,i=n),{width:o,height:i,$:c}}function Qe(t){return it(t)?t:t.contextElement}function Nt(t){const e=Qe(t);if(!st(e))return _t(1);const o=e.getBoundingClientRect(),{width:i,height:s,$:r}=Mo(e);let n=(r?ve(o.width):o.width)/i,c=(r?ve(o.height):o.height)/s;return(!n||!Number.isFinite(n))&&(n=1),(!c||!Number.isFinite(c))&&(c=1),{x:n,y:c}}const Yi=_t(0);function Vo(t){const e=j(t);return!Ze()||!e.visualViewport?Yi:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Xi(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==j(t)?!1:e}function Pt(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const s=t.getBoundingClientRect(),r=Qe(t);let n=_t(1);e&&(i?it(i)&&(n=Nt(i)):n=Nt(t));const c=Xi(r,o,i)?Vo(r):_t(0);let d=(s.left+c.x)/n.x,u=(s.top+c.y)/n.y,h=s.width/n.x,f=s.height/n.y;if(r){const g=j(r),p=i&&it(i)?j(i):i;let b=g,v=b.frameElement;for(;v&&i&&p!==b;){const _=Nt(v),y=v.getBoundingClientRect(),C=Z(v),S=y.left+(v.clientLeft+parseFloat(C.paddingLeft))*_.x,P=y.top+(v.clientTop+parseFloat(C.paddingTop))*_.y;d*=_.x,u*=_.y,h*=_.x,f*=_.y,d+=S,u+=P,b=j(v),v=b.frameElement}}return we({width:h,height:f,x:d,y:u})}function Gi(t){let{elements:e,rect:o,offsetParent:i,strategy:s}=t;const r=s==="fixed",n=ft(i),c=e?Se(e.floating):!1;if(i===n||c&&r)return o;let d={scrollLeft:0,scrollTop:0},u=_t(1);const h=_t(0),f=st(i);if((f||!f&&!r)&&((Yt(i)!=="body"||ae(n))&&(d=Ae(i)),st(i))){const g=Pt(i);u=Nt(i),h.x=g.x+i.clientLeft,h.y=g.y+i.clientTop}return{width:o.width*u.x,height:o.height*u.y,x:o.x*u.x-d.scrollLeft*u.x+h.x,y:o.y*u.y-d.scrollTop*u.y+h.y}}function Zi(t){return Array.from(t.getClientRects())}function No(t){return Pt(ft(t)).left+Ae(t).scrollLeft}function Qi(t){const e=ft(t),o=Ae(t),i=t.ownerDocument.body,s=U(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=U(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let n=-o.scrollLeft+No(t);const c=-o.scrollTop;return Z(i).direction==="rtl"&&(n+=U(e.clientWidth,i.clientWidth)-s),{width:s,height:r,x:n,y:c}}function Ji(t,e){const o=j(t),i=ft(t),s=o.visualViewport;let r=i.clientWidth,n=i.clientHeight,c=0,d=0;if(s){r=s.width,n=s.height;const u=Ze();(!u||u&&e==="fixed")&&(c=s.offsetLeft,d=s.offsetTop)}return{width:r,height:n,x:c,y:d}}function ts(t,e){const o=Pt(t,!0,e==="fixed"),i=o.top+t.clientTop,s=o.left+t.clientLeft,r=st(t)?Nt(t):_t(1),n=t.clientWidth*r.x,c=t.clientHeight*r.y,d=s*r.x,u=i*r.y;return{width:n,height:c,x:d,y:u}}function fo(t,e,o){let i;if(e==="viewport")i=Ji(t,o);else if(e==="document")i=Qi(ft(t));else if(it(e))i=ts(e,o);else{const s=Vo(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return we(i)}function Ho(t,e){const o=Ct(t);return o===e||!it(o)||Ht(o)?!1:Z(o).position==="fixed"||Ho(o,e)}function es(t,e){const o=e.get(t);if(o)return o;let i=se(t,[],!1).filter(c=>it(c)&&Yt(c)!=="body"),s=null;const r=Z(t).position==="fixed";let n=r?Ct(t):t;for(;it(n)&&!Ht(n);){const c=Z(n),d=Ge(n);!d&&c.position==="fixed"&&(s=null),(r?!d&&!s:!d&&c.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ae(n)&&!d&&Ho(t,n))?i=i.filter(h=>h!==n):s=c,n=Ct(n)}return e.set(t,i),i}function os(t){let{element:e,boundary:o,rootBoundary:i,strategy:s}=t;const n=[...o==="clippingAncestors"?Se(e)?[]:es(e,this._c):[].concat(o),i],c=n[0],d=n.reduce((u,h)=>{const f=fo(e,h,s);return u.top=U(f.top,u.top),u.right=ot(f.right,u.right),u.bottom=ot(f.bottom,u.bottom),u.left=U(f.left,u.left),u},fo(e,c,s));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function is(t){const{width:e,height:o}=Mo(t);return{width:e,height:o}}function ss(t,e,o){const i=st(e),s=ft(e),r=o==="fixed",n=Pt(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const d=_t(0);if(i||!i&&!r)if((Yt(e)!=="body"||ae(s))&&(c=Ae(e)),i){const f=Pt(e,!0,r,e);d.x=f.x+e.clientLeft,d.y=f.y+e.clientTop}else s&&(d.x=No(s));const u=n.left+c.scrollLeft-d.x,h=n.top+c.scrollTop-d.y;return{x:u,y:h,width:n.width,height:n.height}}function Re(t){return Z(t).position==="static"}function mo(t,e){return!st(t)||Z(t).position==="fixed"?null:e?e(t):t.offsetParent}function Uo(t,e){const o=j(t);if(Se(t))return o;if(!st(t)){let s=Ct(t);for(;s&&!Ht(s);){if(it(s)&&!Re(s))return s;s=Ct(s)}return o}let i=mo(t,e);for(;i&&qi(i)&&Re(i);)i=mo(i,e);return i&&Ht(i)&&Re(i)&&!Ge(i)?o:i||Ki(t)||o}const rs=async function(t){const e=this.getOffsetParent||Uo,o=this.getDimensions,i=await o(t.floating);return{reference:ss(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function ns(t){return Z(t).direction==="rtl"}const fe={convertOffsetParentRelativeRectToViewportRelativeRect:Gi,getDocumentElement:ft,getClippingRect:os,getOffsetParent:Uo,getElementRects:rs,getClientRects:Zi,getDimensions:is,getScale:Nt,isElement:it,isRTL:ns};function as(t,e){let o=null,i;const s=ft(t);function r(){var c;clearTimeout(i),(c=o)==null||c.disconnect(),o=null}function n(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),r();const{left:u,top:h,width:f,height:g}=t.getBoundingClientRect();if(c||e(),!f||!g)return;const p=de(h),b=de(s.clientWidth-(u+f)),v=de(s.clientHeight-(h+g)),_=de(u),C={rootMargin:-p+"px "+-b+"px "+-v+"px "+-_+"px",threshold:U(0,ot(1,d))||1};let S=!0;function P(z){const M=z[0].intersectionRatio;if(M!==d){if(!S)return n();M?n(!1,M):i=setTimeout(()=>{n(!1,1e-7)},1e3)}S=!1}try{o=new IntersectionObserver(P,{...C,root:s.ownerDocument})}catch{o=new IntersectionObserver(P,C)}o.observe(t)}return n(!0),r}function ls(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:d=!1}=i,u=Qe(t),h=s||r?[...u?se(u):[],...se(e)]:[];h.forEach(y=>{s&&y.addEventListener("scroll",o,{passive:!0}),r&&y.addEventListener("resize",o)});const f=u&&c?as(u,o):null;let g=-1,p=null;n&&(p=new ResizeObserver(y=>{let[C]=y;C&&C.target===u&&p&&(p.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var S;(S=p)==null||S.observe(e)})),o()}),u&&!d&&p.observe(u),p.observe(e));let b,v=d?Pt(t):null;d&&_();function _(){const y=Pt(t);v&&(y.x!==v.x||y.y!==v.y||y.width!==v.width||y.height!==v.height)&&o(),v=y,b=requestAnimationFrame(_)}return o(),()=>{var y;h.forEach(C=>{s&&C.removeEventListener("scroll",o),r&&C.removeEventListener("resize",o)}),f==null||f(),(y=p)==null||y.disconnect(),p=null,d&&cancelAnimationFrame(b)}}const cs=Ui,ds=ji,us=Ni,bo=Wi,hs=Vi,ps=(t,e,o)=>{const i=new Map,s={platform:fe,...o},r={...s.platform,_c:i};return Mi(t,e,{...s,platform:r})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=Ce(class extends $e{constructor(t){var e;if(super(t),t.type!==dt.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((i=this.nt)!=null&&i.has(r))&&this.st.add(r);return this.render(e)}const o=t.element.classList;for(const r of this.st)r in e||(o.remove(r),this.st.delete(r));for(const r in e){const n=!!e[r];n===this.st.has(r)||(s=this.nt)!=null&&s.has(r)||(n?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return Bt}});function fs(t){return ms(t)}function Oe(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function ms(t){for(let e=t;e;e=Oe(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Oe(t);e;e=Oe(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function bs(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var E=class extends R{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,s=0,r=0,n=0,c=0,d=0,u=0,h=0;o?t.top<e.top?(i=t.left,s=t.bottom,r=t.right,n=t.bottom,c=e.left,d=e.top,u=e.right,h=e.top):(i=e.left,s=e.bottom,r=e.right,n=e.bottom,c=t.left,d=t.top,u=t.right,h=t.top):t.left<e.left?(i=t.right,s=t.top,r=e.left,n=e.top,c=t.right,d=t.bottom,u=e.left,h=e.bottom):(i=e.right,s=e.top,r=t.left,n=t.top,c=e.right,d=e.bottom,u=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||bs(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=ls(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[cs({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(bo({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=s?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(us({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(ds({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(bo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(hs({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>fe.getOffsetParent(o,fs):fe.getOffsetParent;ps(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Ee(Dt({},fe),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:s,placement:r})=>{const n=getComputedStyle(this).direction==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const d=s.arrow.x,u=s.arrow.y;let h="",f="",g="",p="";if(this.arrowPlacement==="start"){const b=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",f=n?b:"",p=n?"":b}else if(this.arrowPlacement==="end"){const b=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=n?"":b,p=n?b:"",g=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof d=="number"?`${d}px`:"",h=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:h,right:f,bottom:g,left:p,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return m`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${W({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${W({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?m`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};E.styles=[V,Ci];a([T(".popup")],E.prototype,"popup",2);a([T(".popup__arrow")],E.prototype,"arrowEl",2);a([l()],E.prototype,"anchor",2);a([l({type:Boolean,reflect:!0})],E.prototype,"active",2);a([l({reflect:!0})],E.prototype,"placement",2);a([l({reflect:!0})],E.prototype,"strategy",2);a([l({type:Number})],E.prototype,"distance",2);a([l({type:Number})],E.prototype,"skidding",2);a([l({type:Boolean})],E.prototype,"arrow",2);a([l({attribute:"arrow-placement"})],E.prototype,"arrowPlacement",2);a([l({attribute:"arrow-padding",type:Number})],E.prototype,"arrowPadding",2);a([l({type:Boolean})],E.prototype,"flip",2);a([l({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],E.prototype,"flipFallbackPlacements",2);a([l({attribute:"flip-fallback-strategy"})],E.prototype,"flipFallbackStrategy",2);a([l({type:Object})],E.prototype,"flipBoundary",2);a([l({attribute:"flip-padding",type:Number})],E.prototype,"flipPadding",2);a([l({type:Boolean})],E.prototype,"shift",2);a([l({type:Object})],E.prototype,"shiftBoundary",2);a([l({attribute:"shift-padding",type:Number})],E.prototype,"shiftPadding",2);a([l({attribute:"auto-size"})],E.prototype,"autoSize",2);a([l()],E.prototype,"sync",2);a([l({type:Object})],E.prototype,"autoSizeBoundary",2);a([l({attribute:"auto-size-padding",type:Number})],E.prototype,"autoSizePadding",2);a([l({attribute:"hover-bridge",type:Boolean})],E.prototype,"hoverBridge",2);var jo=new Map,gs=new WeakMap;function vs(t){return t??{keyframes:[],options:{duration:0}}}function go(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function mt(t,e){jo.set(t,vs(e))}function ut(t,e,o){const i=gs.get(t);if(i!=null&&i[e])return go(i[e],o.dir);const s=jo.get(e);return s?go(s,o.dir):{keyframes:[],options:{duration:0}}}function Ut(t,e){return new Promise(o=>{function i(s){s.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function ht(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(e,Ee(Dt({},o),{duration:ys()?0:o.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})})}function vo(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function ys(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function xt(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}const Ne=new Set,ws=new MutationObserver(Yo),Vt=new Map;let Wo=document.documentElement.dir||"ltr",qo=document.documentElement.lang||navigator.language,Lt;ws.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Ko(...t){t.map(e=>{const o=e.$code.toLowerCase();Vt.has(o)?Vt.set(o,Object.assign(Object.assign({},Vt.get(o)),e)):Vt.set(o,e),Lt||(Lt=e)}),Yo()}function Yo(){Wo=document.documentElement.dir||"ltr",qo=document.documentElement.lang||navigator.language,[...Ne.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let xs=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ne.add(this.host)}hostDisconnected(){Ne.delete(this.host)}dir(){return`${this.host.dir||Wo}`.toLowerCase()}lang(){return`${this.host.lang||qo}`.toLowerCase()}getTranslationData(e){var o,i;const s=new Intl.Locale(e.replace(/_/g,"-")),r=s==null?void 0:s.language.toLowerCase(),n=(i=(o=s==null?void 0:s.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",c=Vt.get(`${r}-${n}`),d=Vt.get(r);return{locale:s,language:r,region:n,primary:c,secondary:d}}exists(e,o){var i;const{primary:s,secondary:r}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(s&&s[e]||r&&r[e]||o.includeFallback&&Lt&&Lt[e])}term(e,...o){const{primary:i,secondary:s}=this.getTranslationData(this.lang());let r;if(i&&i[e])r=i[e];else if(s&&s[e])r=s[e];else if(Lt&&Lt[e])r=Lt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...o):r}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var Xo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Ko(Xo);var _s=Xo,Ft=class extends xs{};Ko(_s);function D(t,e){const o=Dt({waitUntilFirstUpdate:!1},e);return(i,s)=>{const{update:r}=i,n=Array.isArray(t)?t:[t];i.update=function(c){n.forEach(d=>{const u=d;if(c.has(u)){const h=c.get(u),f=this[u];h!==f&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[s](h,f)}}),r.call(this,c)}}}var O=class extends R{constructor(){super(),this.localize=new Ft(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=vo(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=vo(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await xt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=ut(this,"tooltip.show",{dir:this.localize.dir()});await ht(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await xt(this.body);const{keyframes:o,options:i}=ut(this,"tooltip.hide",{dir:this.localize.dir()});await ht(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ut(this,"sl-after-hide")}render(){return m`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${W({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};O.styles=[V,ki];O.dependencies={"sl-popup":E};a([T("slot:not([name])")],O.prototype,"defaultSlot",2);a([T(".tooltip__body")],O.prototype,"body",2);a([T("sl-popup")],O.prototype,"popup",2);a([l()],O.prototype,"content",2);a([l()],O.prototype,"placement",2);a([l({type:Boolean,reflect:!0})],O.prototype,"disabled",2);a([l({type:Number})],O.prototype,"distance",2);a([l({type:Boolean,reflect:!0})],O.prototype,"open",2);a([l({type:Number})],O.prototype,"skidding",2);a([l()],O.prototype,"trigger",2);a([l({type:Boolean})],O.prototype,"hoist",2);a([D("open",{waitUntilFirstUpdate:!0})],O.prototype,"handleOpenChange",1);a([D(["content","distance","hoist","placement","skidding"])],O.prototype,"handleOptionsChange",1);a([D("disabled")],O.prototype,"handleDisabledChange",1);mt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});mt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});O.define("sl-tooltip");var ks=L`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,He="";function yo(t){He=t}function Cs(t=""){if(!He){const e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)yo(o.getAttribute("data-shoelace"));else{const i=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let s="";i&&(s=i.getAttribute("src")),yo(s.split("/").slice(0,-1).join("/"))}}return He.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var $s={name:"default",resolver:t=>Cs(`assets/icons/${t}.svg`)},Es=$s,wo={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ss={name:"system",resolver:t=>t in wo?`data:image/svg+xml,${encodeURIComponent(wo[t])}`:""},As=Ss,zs=[Es,As],Ue=[];function Ls(t){Ue.push(t)}function Ts(t){Ue=Ue.filter(e=>e!==t)}function xo(t){return zs.find(e=>e.name===t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ps=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,Go=t=>t.strings===void 0,Rs={},Os=(t,e=Rs)=>t._$AH=e;var Zt=Symbol(),ue=Symbol(),De,Fe=new Map,N=class extends R{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e!=null&&e.spriteSheet){this.svg=m`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(s),this.svg}try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Zt:ue}catch{return ue}try{const s=document.createElement("div");s.innerHTML=await i.text();const r=s.firstElementChild;if(((o=r==null?void 0:r.tagName)==null?void 0:o.toLowerCase())!=="svg")return Zt;De||(De=new DOMParser);const c=De.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):Zt}catch{return Zt}}connectedCallback(){super.connectedCallback(),Ls(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ts(this)}getIconSource(){const t=xo(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?xo(this.library):void 0;if(!e){this.svg=null;return}let s=Fe.get(e);if(s||(s=this.resolveIcon(e,i),Fe.set(e,s)),!this.initialRender)return;const r=await s;if(r===ue&&Fe.delete(e),e===this.getIconSource().url){if(Ps(r)){this.svg=r;return}switch(r){case ue:case Zt:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=i==null?void 0:i.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};N.styles=[V,ks];a([X()],N.prototype,"svg",2);a([l({reflect:!0})],N.prototype,"name",2);a([l()],N.prototype,"src",2);a([l()],N.prototype,"label",2);a([l({reflect:!0})],N.prototype,"library",2);a([D("label")],N.prototype,"handleLabelChange",1);a([D(["name","src","library"])],N.prototype,"setIcon",1);N.define("sl-icon");var le=function(t,e,o,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(r=(s<3?n(r):s>3?n(e,o,r):n(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r};let Rt=class extends Q{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return m`
      <sl-icon
        style="color: red; height: ${this._iconSize}; width: ${this._iconSize}; margin-bottom: 8px;"
        src="${ie(Ao)}"
      ></sl-icon>
    `}renderFull(){return m` <div class="column center-content" style="flex: 1">
      ${this.renderIcon()}
      <div style="width: 500px; text-align: center" class="column">
        ${this.headline?m` <span style="margin-bottom: 8px">${this.headline} </span>`:m``}
        <span class="placeholder"
          >${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
        </span>
      </div>
    </div>`}renderTooltip(){return m`
      <sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
        ${this.renderIcon()}</sl-tooltip
      >
    `}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};Rt.styles=[pt,L`
      :host {
        display: flex;
        flex: 1;
      }
    `];le([l({attribute:"tooltip"})],Rt.prototype,"tooltip",void 0);le([l()],Rt.prototype,"headline",void 0);le([l()],Rt.prototype,"error",void 0);le([l({attribute:"icon-size"})],Rt.prototype,"iconSize",void 0);Rt=le([nt("display-error")],Rt);let xe=[0],me=0;function Ds(t){t[0]===132&&t[1]===32&&t[2]===36?xe=t.slice(3):xe=t||[],me=0}function B(){return(()=>{const e=xe[me];return me=(me+1)%xe.length,e})()/256}function Zo(t){const e=Math.floor(B()*360),o=B()*60+40,i=t||(B()*100+(B()+B()+B()+B())*25)/2;return{h:e,s:o,l:i}}function Qo({h:t,s:e,l:o}){return`hsl(${t}, ${e}%, ${o}%)`}function Fs(t,e,o){const i=B()*2*Math.PI,s=e*Math.cos(i),r=e*Math.sin(i),n=o.x+s,c=o.x+r,d=i+2*Math.PI*.3,u=e*Math.cos(d),h=e*Math.sin(d),f=o.x+u,g=o.x+h,p=d+2*Math.PI*.3,b=e*Math.cos(p),v=e*Math.sin(p),_=o.x+b,y=o.x+v;t.beginPath(),t.moveTo(n,c),t.lineTo(f,g),t.lineTo(_,y),t.fill()}function Is(t){const e=t.hash||[0];return Ds(e),{backgroundColor:t.backgroundColor||Qo(Zo()),hash:e,size:t.size||32}}function Bs(t,e){if(t.hash&&!(t.hash instanceof Uint8Array))throw new Error("invalid type for opts.hash, expecting Uint8Array or null");t=Is(t||{});const{size:o,backgroundColor:i}=t;e.width=e.height=o;const s=e.getContext("2d");if(!s)return;s.fillStyle=i,s.fillRect(0,0,e.width,e.height);const r=B()<.5?3:4,n=Array.apply(null,Array(r)).map((c,d)=>{const u=d===0?5+B()*25:d===1?70+B()*25:null;return{x:B()*o,y:B()*o,radius:5+B()*o*.25,type:Math.floor(B()*3),color:Qo(Zo(u))}}).sort((c,d)=>c.radius>d.radius?-1:1);for(let c=0;c<r;c++){const d=n[c],{x:u,y:h,radius:f,type:g,color:p}=d;switch(s.fillStyle=p,g){case 0:s.beginPath(),s.arc(u,h,f,0,2*Math.PI),s.fill();break;case 1:s.fillRect(u,h,f*2,f*2);break;case 2:Fs(s,f*2,{x:u,y:h});break;default:throw new Error("shape is greater than 2, this should never happen")}}return e}var bt=function(t,e,o,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(r=(s<3?n(r):s>3?n(e,o,r):n(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r};let rt=class extends Q{constructor(){super(...arguments),this.size=32,this.shape="circle",this.disableTooltip=!1,this.disableCopy=!1,this.justCopiedHash=!1}async copyHash(){this.disableCopy||(await navigator.clipboard.writeText(this.strHash),this.timeout&&clearTimeout(this.timeout),this.justCopiedHash=!0,this._tooltip.show(),this.timeout=setTimeout(()=>{this._tooltip.hide(),setTimeout(()=>{this.justCopiedHash=!1},100)},2e3))}get strHash(){return Mt(this.hash)}updated(e){var o,i;super.updated(e),(e.has("hash")&&((o=e.get("hash"))==null?void 0:o.toString())!==((i=this.hash)==null?void 0:i.toString())||e.has("size")||e.has("value"))&&Bs({hash:this.hash,size:this.size},this._canvas)}renderCanvas(){return m` <canvas
      id="canvas"
      width="1"
      height="1"
      class=${W({square:this.shape==="square",circle:this.shape==="circle"})}
    ></canvas>`}render(){return m`<div
      @click=${()=>this.copyHash()}
      style="${this.disableCopy?"":"cursor: pointer;"} flex-grow: 0"
    >
      <sl-tooltip
        id="tooltip"
        placement="top"
        .content=${this.justCopiedHash?A("Copied!"):`${this.strHash.substring(0,6)}...`}
        .trigger=${this.disableTooltip||this.justCopiedHash?"manual":"hover focus"}
        hoist
      >
        ${this.renderCanvas()}
      </sl-tooltip>
    </div>`}static get styles(){return L`
      :host {
        display: flex;
      }

      .square {
        border-radius: 0%;
      }
      .circle {
        border-radius: 50%;
      }
    `}};bt([l(ne("hash"))],rt.prototype,"hash",void 0);bt([l({type:Number})],rt.prototype,"size",void 0);bt([l({type:String})],rt.prototype,"shape",void 0);bt([l({type:Boolean,attribute:"disable-tooltip"})],rt.prototype,"disableTooltip",void 0);bt([l({type:Boolean,attribute:"disable-copy"})],rt.prototype,"disableCopy",void 0);bt([T("#canvas")],rt.prototype,"_canvas",void 0);bt([T("#tooltip")],rt.prototype,"_tooltip",void 0);bt([X()],rt.prototype,"justCopiedHash",void 0);rt=bt([Ot(),nt("holo-identicon")],rt);var Ms=L`
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
`,at=class extends R{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const t=m`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let e=m``;return this.initials?e=m`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=m`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,m`
      <div
        part="base"
        class=${W({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};at.styles=[V,Ms];at.dependencies={"sl-icon":N};a([X()],at.prototype,"hasError",2);a([l()],at.prototype,"image",2);a([l()],at.prototype,"label",2);a([l()],at.prototype,"initials",2);a([l()],at.prototype,"loading",2);a([l({reflect:!0})],at.prototype,"shape",2);a([D("image")],at.prototype,"handleImageChange",1);at.define("sl-avatar");var Vs=L`
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
`,Je=class extends R{constructor(){super(...arguments),this.effect="none"}render(){return m`
      <div
        part="base"
        class=${W({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Je.styles=[V,Vs];a([l()],Je.prototype,"effect",2);Je.define("sl-skeleton");let $t=class extends St(Q){constructor(){super(...arguments),this.size=32,this.disableTooltip=!1,this.disableCopy=!1}renderIdenticon(){return m` <div
      style=${lo({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
    >
      <holo-identicon
        .disableCopy=${this.disableCopy}
        .disableTooltip=${this.disableTooltip}
        .hash=${this.agentPubKey}
        .size=${this.size}
      >
      </holo-identicon>
      <div class="badge"><slot name="badge"></slot></div>
    </div>`}renderProfile(e){if(!e||!e.entry.fields.avatar)return this.renderIdenticon();const o=m`
      <div
        style=${lo({cursor:this.disableCopy?"":"pointer",position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
      >
        <sl-avatar
          .image=${e.entry.fields.avatar}
          style="--size: ${this.size}px;"
          @click=${()=>this.dispatchEvent(new CustomEvent("profile-clicked",{composed:!0,bubbles:!0,detail:{agentPubKey:this.agentPubKey}}))}
        >
        </sl-avatar>
        <div class="badge"><slot name="badge"></slot></div>
      </div>
    `;return m`
      <sl-tooltip
        id="tooltip"
        placement="top"
        .trigger=${this.disableTooltip?"manual":"hover focus"}
        hoist
        .content=${e.entry.nickname}
      >
        ${o}
      </sl-tooltip>
    `}render(){if(this.store.config.avatarMode==="identicon")return this.renderIdenticon();const e=this.store.profiles.get(this.agentPubKey).get();switch(e.status){case"pending":return m`<sl-skeleton
          effect="pulse"
          style="height: ${this.size}px; width: ${this.size}px"
        ></sl-skeleton>`;case"completed":return this.renderProfile(e.value);case"error":return m`
          <display-error
            tooltip
            .headline=${A("Error fetching the agent's avatar")}
            .error=${e.error}
          ></display-error>
        `}}};$t.styles=[pt,L`
      .badge {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    `];x([l(ne("agent-pub-key"))],$t.prototype,"agentPubKey",void 0);x([l({type:Number})],$t.prototype,"size",void 0);x([l({type:Boolean,attribute:"disable-tooltip"})],$t.prototype,"disableTooltip",void 0);x([l({type:Boolean,attribute:"disable-copy"})],$t.prototype,"disableCopy",void 0);x([At({context:Wt,subscribe:!0}),l()],$t.prototype,"store",void 0);$t=x([Ot(),nt("agent-avatar")],$t);let _o=class extends St(Q){render(){return m`<div class="row" style="align-items: center; width: 150px">
      <sl-skeleton
        effect="sheen"
        style="height: 32px; width: 32px; border-radius: 50%; margin: 8px"
      ></sl-skeleton
      ><sl-skeleton
        effect="sheen"
        style="flex: 1; margin: 8px; border-radius: 12px"
      >
      </sl-skeleton>
    </div>`}static get styles(){return[pt,L`
        :host {
          display: flex;
        }
      `]}};_o=x([nt("profile-list-item-skeleton")],_o);let re=class extends St(Q){render(){var e;const o=this.store.profiles.get(this.agentPubKey).get();switch(o.status){case"pending":return m`<profile-list-item-skeleton></profile-list-item-skeleton>`;case"completed":return m`
          <div class="row" style="align-items: center; gap: 8px">
            <agent-avatar .agentPubKey=${this.agentPubKey}></agent-avatar>
            <span>${(e=o.value)===null||e===void 0?void 0:e.entry.nickname}</span>
          </div>
        `;case"error":return m`<display-error
          tooltip
          .headline=${A("Error fetching the profile")}
          .error=${o.error}
        ></display-error>`}}};re.styles=[pt];x([l(ne("agent-pub-key"))],re.prototype,"agentPubKey",void 0);x([At({context:Wt,subscribe:!0}),l()],re.prototype,"store",void 0);re=x([Ot(),nt("profile-list-item")],re);var Ns=L`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=t=>t??be;var H=class extends R{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?ge`a`:ge`button`;return pe`
      <${e}
        part="base"
        class=${W({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${k(t?void 0:this.disabled)}
        type=${k(t?void 0:"button")}
        href=${k(t?this.href:void 0)}
        target=${k(t?this.target:void 0)}
        download=${k(t?this.download:void 0)}
        rel=${k(t&&this.target?"noreferrer noopener":void 0)}
        role=${k(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${k(this.name)}
          library=${k(this.library)}
          src=${k(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};H.styles=[V,Ns];H.dependencies={"sl-icon":N};a([T(".icon-button")],H.prototype,"button",2);a([X()],H.prototype,"hasFocus",2);a([l()],H.prototype,"name",2);a([l()],H.prototype,"library",2);a([l()],H.prototype,"src",2);a([l()],H.prototype,"href",2);a([l()],H.prototype,"target",2);a([l()],H.prototype,"download",2);a([l()],H.prototype,"label",2);a([l({type:Boolean,reflect:!0})],H.prototype,"disabled",2);H.define("sl-icon-button");var Hs=L`
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
`,ko=new WeakMap;function Jo(t){let e=ko.get(t);return e||(e=window.getComputedStyle(t,null),ko.set(t,e)),e}function Us(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Jo(t);return e.visibility!=="hidden"&&e.display!=="none"}function js(t){const e=Jo(t),{overflowY:o,overflowX:i}=e;return o==="scroll"||i==="scroll"?!0:o!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&o==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function Ws(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!Us(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:js(t)}function qs(t){var e,o;const i=je(t),s=(e=i[0])!=null?e:null,r=(o=i[i.length-1])!=null?o:null;return{start:s,end:r}}function Ks(t,e){var o;return((o=t.getRootNode({composed:!0}))==null?void 0:o.host)!==e}function je(t){const e=new WeakMap,o=[];function i(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]")||e.has(s))return;e.set(s,!0),!o.includes(s)&&Ws(s)&&o.push(s),s instanceof HTMLSlotElement&&Ks(s,t)&&s.assignedElements({flatten:!0}).forEach(r=>{i(r)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&i(s.shadowRoot)}for(const r of s.children)i(r)}return i(t),o.sort((s,r)=>{const n=Number(s.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-n})}var F=class extends R{constructor(){super(...arguments),this.localize=new Ft(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,i,s;const r=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(s=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:s.activeElement:document.activeElement;(!this.containingElement||(r==null?void 0:r.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const o=e.getAllItems(),i=o[0],s=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(s),s.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(i=>qs(i).start);let o;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ut(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await xt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=ut(this,"dropdown.show",{dir:this.localize.dir()});await ht(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await xt(this);const{keyframes:t,options:e}=ut(this,"dropdown.hide",{dir:this.localize.dir()});await ht(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return m`
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
        sync=${k(this.sync?this.sync:void 0)}
        class=${W({dropdown:!0,"dropdown--open":this.open})}
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
    `}};F.styles=[V,Hs];F.dependencies={"sl-popup":E};a([T(".dropdown")],F.prototype,"popup",2);a([T(".dropdown__trigger")],F.prototype,"trigger",2);a([T(".dropdown__panel")],F.prototype,"panel",2);a([l({type:Boolean,reflect:!0})],F.prototype,"open",2);a([l({reflect:!0})],F.prototype,"placement",2);a([l({type:Boolean,reflect:!0})],F.prototype,"disabled",2);a([l({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],F.prototype,"stayOpenOnSelect",2);a([l({attribute:!1})],F.prototype,"containingElement",2);a([l({type:Number})],F.prototype,"distance",2);a([l({type:Number})],F.prototype,"skidding",2);a([l({type:Boolean})],F.prototype,"hoist",2);a([l({reflect:!0})],F.prototype,"sync",2);a([D("open",{waitUntilFirstUpdate:!0})],F.prototype,"handleOpenChange",1);mt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});mt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});F.define("sl-dropdown");var Ys=L`
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
 */const oe=(t,e)=>{var i;const o=t._$AN;if(o===void 0)return!1;for(const s of o)(i=s._$AO)==null||i.call(s,e,!1),oe(s,e);return!0},_e=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while((o==null?void 0:o.size)===0)},ti=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Zs(e)}};function Xs(t){this._$AN!==void 0?(_e(this),this._$AM=t,ti(this)):this._$AM=t}function Gs(t,e=!1,o=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let r=o;r<i.length;r++)oe(i[r],!1),_e(i[r]);else i!=null&&(oe(i,!1),_e(i));else oe(this,t)}const Zs=t=>{t.type==dt.CHILD&&(t._$AP??(t._$AP=Gs),t._$AQ??(t._$AQ=Xs))};class Qs extends $e{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,i){super._$AT(e,o,i),ti(this),this.isConnected=e._$AU}_$AO(e,o=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),o&&(oe(this,e),_e(this))}setValue(e){if(Go(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Js=()=>new tr;class tr{}const Ie=new WeakMap,er=Ce(class extends Qs{render(t){return be}update(t,[e]){var i;const o=e!==this.Y;return o&&this.Y!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),be}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let o=Ie.get(e);o===void 0&&(o=new WeakMap,Ie.set(e,o)),o.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),o.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=Ie.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var or=class{constructor(t,e,o){this.popupRef=Js(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var s;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(s=i.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),s=i==null?void 0:i.assignedElements({flatten:!0}).filter(h=>h.localName==="sl-menu")[0],r=this.localize.dir()==="rtl";if(!s)return;const{left:n,top:c,width:d,height:u}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?n+d:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${c}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?n+d:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${c+u}px`)},(this.host=t).addController(this),this.hasSlotController=e,this.localize=o}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let o=null;for(const i of e.assignedElements())if(o=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),o.length!==0)break;if(!(!o||o.length===0)){o[0].setAttribute("tabindex","0");for(let i=1;i!==o.length;++i)o[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{o[0]instanceof HTMLElement&&o[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((s,r)=>{var n;const c=(n=e.get(r))!=null?n:new CSSUnitValue(0,"px"),u=(c instanceof CSSUnitValue?c:new CSSUnitValue(0,"px")).to("px");return s-u.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=this.localize.dir()==="ltr";return this.isConnected?m`
      <sl-popup
        ${er(this.popupRef)}
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
    `:m` <slot name="submenu" hidden></slot> `}},ir=L`
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
`,ze=class extends R{constructor(){super(...arguments),this.localize=new Ft(this)}render(){return m`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ze.styles=[V,ir];var Le=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function sr(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(o+=i.textContent)}),o}var K=class extends R{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.localize=new Ft(this),this.hasSlotController=new Le(this,"submenu"),this.submenuController=new or(this,this.hasSlotController,this.localize),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return sr(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return m`
      <div
        id="anchor"
        part="base"
        class=${W({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
        ${this.loading?m` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};K.styles=[V,Ys];K.dependencies={"sl-icon":N,"sl-popup":E,"sl-spinner":ze};a([T("slot:not([name])")],K.prototype,"defaultSlot",2);a([T(".menu-item")],K.prototype,"menuItem",2);a([l()],K.prototype,"type",2);a([l({type:Boolean,reflect:!0})],K.prototype,"checked",2);a([l()],K.prototype,"value",2);a([l({type:Boolean,reflect:!0})],K.prototype,"loading",2);a([l({type:Boolean,reflect:!0})],K.prototype,"disabled",2);a([D("checked")],K.prototype,"handleCheckedChange",1);a([D("disabled")],K.prototype,"handleDisabledChange",1);a([D("type")],K.prototype,"handleTypeChange",1);K.define("sl-menu-item");var rr=L`
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
`,to=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],o=t.composedPath().find(s=>{var r;return e.includes(((r=s==null?void 0:s.getAttribute)==null?void 0:r.call(s,"role"))||"")});if(!o)return;const i=o;i.type==="checkbox"&&(i.checked=!i.checked),this.emit("sl-select",{detail:{item:i}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e==null||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),o=this.getCurrentItem();let i=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===t?"0":"-1")})}render(){return m`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};to.styles=[V,rr];a([T("slot")],to.prototype,"defaultSlot",2);to.define("sl-menu");var nr=L`
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
`,ar=(t="value")=>(e,o)=>{const i=e.constructor,s=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(r,n,c){var d;const u=i.getPropertyOptions(t),h=typeof u.attribute=="string"?u.attribute:t;if(r===h){const f=u.converter||io,p=(typeof f=="function"?f:(d=f==null?void 0:f.fromAttribute)!=null?d:io.fromAttribute)(c,u.type);this[t]!==p&&(this[o]=p)}s.call(this,r,n,c)}},lr=L`
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
`,Qt=new WeakMap,Jt=new WeakMap,te=new WeakMap,Be=new WeakSet,he=new WeakMap,ei=class{constructor(t,e){this.handleFormData=o=>{const i=this.options.disabled(this.host),s=this.options.name(this.host),r=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!n&&typeof s=="string"&&s.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(c=>{o.formData.append(s,c.toString())}):o.formData.append(s,r.toString()))},this.handleFormSubmit=o=>{var i;const s=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Qt.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!r(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),he.set(this.host,[])},this.handleInteraction=o=>{const i=he.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Dt({form:o=>{const i=o.form;if(i){const r=o.getRootNode().querySelector(`#${i}`);if(r)return r}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!=null?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),he.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),he.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Qt.has(this.form)?Qt.get(this.form).add(this.host):Qt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Jt.has(this.form)||(Jt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),te.has(this.form)||(te.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Qt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Jt.has(this.form)&&(this.form.reportValidity=Jt.get(this.form),Jt.delete(this.form)),te.has(this.form)&&(this.form.checkValidity=te.get(this.form),te.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Be.add(t):Be.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!Be.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},eo=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Ee(Dt({},eo),{valid:!1,valueMissing:!0}));Object.freeze(Ee(Dt({},eo),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cr=Ce(class extends $e{constructor(t){if(super(t),t.type!==dt.PROPERTY&&t.type!==dt.ATTRIBUTE&&t.type!==dt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Go(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Bt||e===be)return e;const o=t.element,i=t.name;if(t.type===dt.PROPERTY){if(e===o[i])return Bt}else if(t.type===dt.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(i))return Bt}else if(t.type===dt.ATTRIBUTE&&o.getAttribute(i)===e+"")return Bt;return Os(t),e}});var w=class extends R{constructor(){super(...arguments),this.formControlController=new ei(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Le(this,"help-text","label"),this.localize=new Ft(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){const s=e??this.input.selectionStart,r=o??this.input.selectionEnd;this.input.setRangeText(t,s,r,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return m`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
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
            class=${W({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${k(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${k(this.placeholder)}
              minlength=${k(this.minlength)}
              maxlength=${k(this.maxlength)}
              min=${k(this.min)}
              max=${k(this.max)}
              step=${k(this.step)}
              .value=${cr(this.value)}
              autocapitalize=${k(this.autocapitalize)}
              autocomplete=${k(this.autocomplete)}
              autocorrect=${k(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${k(this.pattern)}
              enterkeyhint=${k(this.enterkeyhint)}
              inputmode=${k(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?m`
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
            ${this.passwordToggle&&!this.disabled?m`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?m`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:m`
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};w.styles=[V,lr,nr];w.dependencies={"sl-icon":N};a([T(".input__control")],w.prototype,"input",2);a([X()],w.prototype,"hasFocus",2);a([l()],w.prototype,"title",2);a([l({reflect:!0})],w.prototype,"type",2);a([l()],w.prototype,"name",2);a([l()],w.prototype,"value",2);a([ar()],w.prototype,"defaultValue",2);a([l({reflect:!0})],w.prototype,"size",2);a([l({type:Boolean,reflect:!0})],w.prototype,"filled",2);a([l({type:Boolean,reflect:!0})],w.prototype,"pill",2);a([l()],w.prototype,"label",2);a([l({attribute:"help-text"})],w.prototype,"helpText",2);a([l({type:Boolean})],w.prototype,"clearable",2);a([l({type:Boolean,reflect:!0})],w.prototype,"disabled",2);a([l()],w.prototype,"placeholder",2);a([l({type:Boolean,reflect:!0})],w.prototype,"readonly",2);a([l({attribute:"password-toggle",type:Boolean})],w.prototype,"passwordToggle",2);a([l({attribute:"password-visible",type:Boolean})],w.prototype,"passwordVisible",2);a([l({attribute:"no-spin-buttons",type:Boolean})],w.prototype,"noSpinButtons",2);a([l({reflect:!0})],w.prototype,"form",2);a([l({type:Boolean,reflect:!0})],w.prototype,"required",2);a([l()],w.prototype,"pattern",2);a([l({type:Number})],w.prototype,"minlength",2);a([l({type:Number})],w.prototype,"maxlength",2);a([l()],w.prototype,"min",2);a([l()],w.prototype,"max",2);a([l()],w.prototype,"step",2);a([l()],w.prototype,"autocapitalize",2);a([l()],w.prototype,"autocorrect",2);a([l()],w.prototype,"autocomplete",2);a([l({type:Boolean})],w.prototype,"autofocus",2);a([l()],w.prototype,"enterkeyhint",2);a([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],w.prototype,"spellcheck",2);a([l()],w.prototype,"inputmode",2);a([D("disabled",{waitUntilFirstUpdate:!0})],w.prototype,"handleDisabledChange",1);a([D("step",{waitUntilFirstUpdate:!0})],w.prototype,"handleStepChange",1);a([D("value",{waitUntilFirstUpdate:!0})],w.prototype,"handleValueChange",1);w.define("sl-input");let jt=class extends St(Q){constructor(){super(...arguments),this._searchFilter=new ri.State(void 0),this.excludedAgents=[],this._searchProfiles=ni(this._searchFilter,e=>this.store.client.searchAgents(e),e=>{const o=hi(this.store.profiles,e);return fi(pi(o,i=>i.get()))})}set searchFilter(e){this._searchFilter.set(e)}get searchFilter(){return this._searchFilter.get()}async onUsernameSelected(e){const o=await ai(this.store.profiles.get(e));this.dispatchEvent(new CustomEvent("agent-selected",{detail:{agentPubKey:e,profile:o},bubbles:!0,composed:!0}))}renderAgentList(){const e=this._searchFilter.get();if(!e||e.length<3)return m`<sl-menu-item disabled
				>${A("Enter at least 3 chars to search...")}</sl-menu-item
			>`;const o=this._searchProfiles.get();switch(o.status){case"pending":return Array(3).map(()=>m`
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
					`);case"error":return m`
					<display-error
						style="flex: 1; display:flex"
						tooltip
						.headline=${A("Error searching agents")}
						.error=${o.error}
					></display-error>
				`;case"completed":{let i=Array.from(o.value.entries()),s=this.excludedAgents.map(r=>r.toString());return i=i.filter(([r,n])=>!s.includes(r.toString())),i.length===0?m`<sl-menu-item disabled>
						${A("No agents match the filter")}
					</sl-menu-item>`:m`
					${i.map(([r,n])=>m`
							<sl-menu-item .value=${Mt(r)}>
								<agent-avatar
									slot="prefix"
									.agentPubKey=${r}
									style="margin-right: 16px"
								></agent-avatar>
								${n==null?void 0:n.entry.nickname}
							</sl-menu-item>
						`)}
				`}}}render(){return m`
			<sl-dropdown id="dropdown" style="flex: 1" .open=${k(this.open)}>
				<slot slot="trigger"></slot>
				<sl-menu
					@sl-select=${e=>{this.onUsernameSelected(Eo(e.detail.item.value))}}
				>
					${this.renderAgentList()}
				</sl-menu>
			</sl-dropdown>
		`}static get styles(){return[pt,L`
				:host {
					display: flex;
				}
			`]}};x([l()],jt.prototype,"open",void 0);x([At({context:Wt,subscribe:!0}),l()],jt.prototype,"store",void 0);x([l()],jt.prototype,"excludedAgents",void 0);x([T("#dropdown")],jt.prototype,"dropdown",void 0);jt=x([Ot(),nt("search-agent-dropdown")],jt);let q=class extends St(Q){constructor(){super(...arguments),this.required=!1,this.disabled=!1,this.clearOnSelect=!1,this.excludedAgents=[],this._controller=new To(this),this.searchFilter=""}reportValidity(){const e=this.required!==!1&&this.value===void 0;return e&&(this._textField.setCustomValidity("This field is required"),this._textField.reportValidity()),!e}async reset(){if(this.value=this.defaultValue,this.defaultValue){const e=await this.store.client.getAgentProfile(this.defaultValue);this._textField.value=(e==null?void 0:e.entry.nickname)||""}else this._textField.value=""}onUsernameSelected(e,o){this.value=e,this.clearOnSelect?this._textField.value="":this._textField.value=o.entry.nickname,this.searchFilter=""}get _label(){let e=this.fieldLabel?this.fieldLabel:A("Search Agent");return this.required!==!1&&(e=`${e} *`),e}render(){return m`
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
						.placeholder=${A("At least 3 chars...")}
						@input=${e=>{this.searchFilter=e.target.value}}
					></sl-input>
				</search-agent-dropdown>
			</div>
		`}static get styles(){return[pt,L`
				:host {
					display: flex;
				}
			`]}};x([l()],q.prototype,"name",void 0);x([l(ne("default-value"))],q.prototype,"defaultValue",void 0);x([l()],q.prototype,"required",void 0);x([l()],q.prototype,"disabled",void 0);x([X()],q.prototype,"value",void 0);x([l({type:Boolean,attribute:"clear-on-select"})],q.prototype,"clearOnSelect",void 0);x([At({context:Wt,subscribe:!0}),l()],q.prototype,"store",void 0);x([l()],q.prototype,"excludedAgents",void 0);x([l({type:String,attribute:"field-label"})],q.prototype,"fieldLabel",void 0);x([T("#textfield")],q.prototype,"_textField",void 0);x([X()],q.prototype,"searchFilter",void 0);q=x([Ot(),nt("search-agent")],q);let Y=class extends St(Q){constructor(){super(...arguments),this.defaultValue=[],this.required=!1,this.disabled=!1,this.emptyListPlaceholder=A("No agents selected yet."),this._controller=new To(this),this.excludedAgents=[],this.value=[]}reportValidity(){return!0}async reset(){this.value=this.defaultValue}render(){return m`
			<div class="column" style="gap: 16px">
				<search-agent
					.fieldLabel=${this.fieldLabel}
					clear-on-select
					@agent-selected=${e=>{this.value=[...this.value,e.detail.agentPubKey],this.dispatchEvent(new CustomEvent("agents-changed",{composed:!0,bubbles:!0,detail:{agents:this.value}}))}}
					.excludedAgents=${this.excludedAgents}
				></search-agent>
				${this.value.length===0?m`<span class="placeholder">${this.emptyListPlaceholder}</span>`:this.value.map((e,o)=>m`<div class="row">
									<profile-list-item
										style="flex: 1"
										.agentPubKey=${e}
									></profile-list-item
									><sl-icon-button
										.src=${ie(zo)}
										@click=${()=>{this.value=this.value.filter((i,s)=>s!==o),this.dispatchEvent(new CustomEvent("agents-changed",{composed:!0,bubbles:!0,detail:{agents:this.value}}))}}
									></sl-icon-button>
								</div>`)}
			</div>
		`}};Y.styles=[pt];x([l()],Y.prototype,"name",void 0);x([l(ne("default-value"))],Y.prototype,"defaultValue",void 0);x([l()],Y.prototype,"required",void 0);x([l()],Y.prototype,"disabled",void 0);x([l({type:String,attribute:"field-label"})],Y.prototype,"fieldLabel",void 0);x([l({type:String,attribute:"empty-list-placeholder"})],Y.prototype,"emptyListPlaceholder",void 0);x([At({context:Wt,subscribe:!0}),l()],Y.prototype,"store",void 0);x([l()],Y.prototype,"excludedAgents",void 0);x([X()],Y.prototype,"value",void 0);Y=x([Ot(),nt("search-agents")],Y);var dr=L`
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
`,$=class extends R{constructor(){super(...arguments),this.formControlController=new ei(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Le(this,"[default]","prefix","suffix"),this.localize=new Ft(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:eo}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?ge`a`:ge`button`;return pe`
      <${e}
        part="base"
        class=${W({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${k(t?void 0:this.disabled)}
        type=${k(t?void 0:this.type)}
        title=${this.title}
        name=${k(t?void 0:this.name)}
        value=${k(t?void 0:this.value)}
        href=${k(t?this.href:void 0)}
        target=${k(t?this.target:void 0)}
        download=${k(t?this.download:void 0)}
        rel=${k(t?this.rel:void 0)}
        role=${k(t?void 0:"button")}
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
        ${this.caret?pe` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?pe`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};$.styles=[V,dr];$.dependencies={"sl-icon":N,"sl-spinner":ze};a([T(".button")],$.prototype,"button",2);a([X()],$.prototype,"hasFocus",2);a([X()],$.prototype,"invalid",2);a([l()],$.prototype,"title",2);a([l({reflect:!0})],$.prototype,"variant",2);a([l({reflect:!0})],$.prototype,"size",2);a([l({type:Boolean,reflect:!0})],$.prototype,"caret",2);a([l({type:Boolean,reflect:!0})],$.prototype,"disabled",2);a([l({type:Boolean,reflect:!0})],$.prototype,"loading",2);a([l({type:Boolean,reflect:!0})],$.prototype,"outline",2);a([l({type:Boolean,reflect:!0})],$.prototype,"pill",2);a([l({type:Boolean,reflect:!0})],$.prototype,"circle",2);a([l()],$.prototype,"type",2);a([l()],$.prototype,"name",2);a([l()],$.prototype,"value",2);a([l()],$.prototype,"href",2);a([l()],$.prototype,"target",2);a([l()],$.prototype,"rel",2);a([l()],$.prototype,"download",2);a([l()],$.prototype,"form",2);a([l({attribute:"formaction"})],$.prototype,"formAction",2);a([l({attribute:"formenctype"})],$.prototype,"formEnctype",2);a([l({attribute:"formmethod"})],$.prototype,"formMethod",2);a([l({attribute:"formnovalidate",type:Boolean})],$.prototype,"formNoValidate",2);a([l({attribute:"formtarget"})],$.prototype,"formTarget",2);a([D("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);$.define("sl-button");function*oo(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Ti(oo(t.shadowRoot.activeElement))))}function ur(){return[...oo()].pop()}var ee=[],hr=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var o;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=ur();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=je(this.element);let r=s.findIndex(c=>c===i);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){r+n>=s.length?r=0:r+n<0?r=s.length-1:r+=n,this.previousFocus=this.currentFocus;const c=s[r];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||c&&this.possiblyHasTabbableChildren(c))return;e.preventDefault(),this.currentFocus=c,(o=this.currentFocus)==null||o.focus({preventScroll:!1});const d=[...oo()];if(d.includes(this.currentFocus)||!d.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){ee.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ee=ee.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ee[ee.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=je(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],i=this.tabDirection==="forward"?e:o;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},We=new Set;function pr(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function fr(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Co(t){if(We.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=pr()+fr();let o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),e<=0&&(o="revert"),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",o),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function $o(t){We.delete(t),We.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var mr=L`
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
`,lt=class extends R{constructor(){super(...arguments),this.hasSlotController=new Le(this,"footer"),this.localize=new Ft(this),this.modal=new hr(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Co(this))}disconnectedCallback(){var t;super.disconnectedCallback(),this.modal.deactivate(),$o(this),(t=this.closeWatcher)==null||t.destroy()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=ut(this,"dialog.denyClose",{dir:this.localize.dir()});ht(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Co(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([xt(this.dialog),xt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=ut(this,"dialog.show",{dir:this.localize.dir()}),o=ut(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([ht(this.panel,e.keyframes,e.options),ht(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([xt(this.dialog),xt(this.overlay)]);const t=ut(this,"dialog.hide",{dir:this.localize.dir()}),e=ut(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([ht(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),ht(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,$o(this);const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ut(this,"sl-after-hide")}render(){return m`
      <div
        part="base"
        class=${W({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${k(this.noHeader?this.label:void 0)}
          aria-labelledby=${k(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":m`
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
    `}};lt.styles=[V,mr];lt.dependencies={"sl-icon-button":H};a([T(".dialog")],lt.prototype,"dialog",2);a([T(".dialog__panel")],lt.prototype,"panel",2);a([T(".dialog__overlay")],lt.prototype,"overlay",2);a([l({type:Boolean,reflect:!0})],lt.prototype,"open",2);a([l({reflect:!0})],lt.prototype,"label",2);a([l({attribute:"no-header",type:Boolean,reflect:!0})],lt.prototype,"noHeader",2);a([D("open",{waitUntilFirstUpdate:!0})],lt.prototype,"handleOpenChange",1);mt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});mt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});mt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});mt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});mt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});lt.define("sl-dialog");var br=L`
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
`,Te=class extends R{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Te.styles=[V,br];a([l({type:Boolean,reflect:!0})],Te.prototype,"vertical",2);a([D("vertical")],Te.prototype,"handleVerticalChange",1);Te.define("sl-divider");ze.define("sl-spinner");var gr=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,Xt=(t,e,o,i)=>{for(var s=i>1?void 0:i?vr(e,o):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&gr(e,o,s),s};let Et=class extends St(Q){constructor(){super(...arguments),this.committing=!1,this.removingRole=!1}async addMembersToRole(t,e){try{this.committing=!0,await this.rolesStore.client.assignRole(t,e),this.dispatchEvent(new CustomEvent("role-assigned-to-members",{composed:!0,bubbles:!0,detail:{role:t,assignees:e}})),this.shadowRoot.getElementById(`add-members-${t}`).hide()}catch(o){console.error(o),ao(A("Error adding members to the role"))}this.committing=!1}async removeRole(t,e){try{this.removingRole=!0,await this.rolesStore.client.requestUnassignRole(t,e),this.dispatchEvent(new CustomEvent("unassig-role-requested",{composed:!0,bubbles:!0,detail:{role:t,assignee:e}})),this.shadowRoot.getElementById(`remove-role-${t}-for-${Mt(e)}`).hide()}catch(o){console.error(o),ao(A("Error removing the role"))}this.removingRole=!1}name(t){var o;const e=this.profilesStore.profiles.get(t).get();if(e.status==="completed")return(o=e.value)==null?void 0:o.entry.nickname}renderRemoveRoleAction(t,e,o){const i=this.rolesStore.pendingUnassignments.get();switch(i.status){case"pending":return m`<sl-skeleton></sl-skeleton>`;case"error":return m`<display-error
					.headline=${A("Error fetching the pending unassignments")}
					tooltip
					.error=${i.error}
				></display-error>`;case"completed":return i.value.find(r=>li(r.target,ci.AGENT).toString()===e.toString()&&new TextDecoder().decode(r.tag)===t.role)?m`<sl-tag>${A("Remove Role Requested")}</sl-tag>`:m`
					<sl-dialog
						.label=${A("Remove role")}
						id="remove-role-${t.role}-for-${Mt(e)}"
					>
						<div class="column" style="gap: 12px">
							<span
								>${A(so`Are you sure you want to request ${this.name(e)} to remove its ${t.singular_name} role?`)}</span
							>
							<span
								>${A("Their role will actually be removed the next time this member is online again.")}</span
							>
						</div>
						<sl-button
							slot="footer"
							@click=${()=>this.shadowRoot.getElementById(`remove-role-${t.role}-for-${Mt(e)}`).hide()}
							>${A("Cancel")}</sl-button
						>
						<sl-button
							slot="footer"
							variant="primary"
							.loading=${this.committing}
							@click=${()=>{this.removeRole(t.role,e)}}
							>${A("Remove Role")}</sl-button
						>
					</sl-dialog>

					<sl-icon-button
						.src=${ie(zo)}
						.disabled=${t.role===ce.role&&o<2}
						@click=${()=>{var r;((r=this.shadowRoot)==null?void 0:r.getElementById(`remove-role-${t.role}-for-${Mt(e)}`)).show()}}
					></sl-icon-button>
				`}}renderRole(t,e,o){var i,s;return m` <sl-dialog
				id="add-members-${t.role}"
				.label=${A(so`Add members as ${t.plural_name}`)}
			>
				<search-agents
					.excludedAgents=${e}
					id="search-agents-${t.role}"
					.fieldLabel=${A("Search Member")}
					.emptyListPlaceholder=${A("No members selected yet.")}
					@agents-changed=${()=>this.requestUpdate()}
				></search-agents>
				<sl-button
					slot="footer"
					@click=${()=>this.shadowRoot.getElementById(`add-members-${t.role}`).hide()}
					>${A("Cancel")}</sl-button
				>
				<sl-button
					slot="footer"
					variant="primary"
					.disabled=${!(((s=(i=this.shadowRoot)==null?void 0:i.getElementById(`search-agents-${t.role}`))==null?void 0:s.value.length)>0)}
					.loading=${this.committing}
					@click=${()=>{var n;const r=((n=this.shadowRoot)==null?void 0:n.getElementById(`search-agents-${t.role}`)).value;this.addMembersToRole(t.role,r)}}
					>${A("Add Members")}</sl-button
				>
			</sl-dialog>
			<div class="column">
				<div class="row" style="align-items: center">
					<span class="title" style="flex: 1">${t.plural_name}</span>
					${o?m`
								<sl-button
									@click=${()=>this.shadowRoot.getElementById(`add-members-${t.role}`).show()}
									>${A("Add Members")}</sl-button
								>
							`:m``}
				</div>
				<sl-divider></sl-divider>
				<span class="placeholder">${t.description}</span>

				<div class="column" style="gap: 12px; margin-top: 24px;">
					${e.length===0?m`
								<div
									class="column"
									style="gap: 4px; flex: 1; align-items: center; justify-content: center"
								>
									<sl-icon
										style="color: grey; height: 32px; width: 32px;"
										.src=${ie(So)}
									></sl-icon>
									<span class="placeholder"
										>${A("No members have this role assigned.")}</span
									>
								</div>
							`:e.map(r=>m`
									<div class="row" style="align-items: center;">
										<profile-list-item .agentPubKey=${r}></profile-list-item>
										<span style="flex: 1"></span>
										${o?this.renderRemoveRoleAction(t,r,e.length):m``}
									</div>
								`)}
				</div>
			</div>`}assigneesForRoleAndIAmAdmin(){const t=this.rolesStore.assignees.get(this.role).get(),e=this.rolesStore.myRoles.get();if(t.status!=="completed")return t;if(e.status!=="completed")return e;const o=e.value.includes(ce.role);return{status:"completed",value:{assignees:t.value,iAmAdmin:o}}}render(){const t=this.assigneesForRoleAndIAmAdmin();switch(t.status){case"pending":return m`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;case"error":return m`<display-error
					.headline=${A("Error fetching the role details.")}
					.error=${t.error}
				></display-error>`;case"completed":const e=this.role===ce.role?ce:this.rolesStore.config.roles_config.find(o=>o.role===this.role);return this.renderRole(e,t.value.assignees,t.value.iAmAdmin)}}};Et.styles=[pt,L`
			sl-divider {
				--spacing: var(--sl-spacing-small);
			}
		`];Xt([l()],Et.prototype,"role",2);Xt([At({context:Lo,subscribe:!0}),l()],Et.prototype,"rolesStore",2);Xt([At({context:Wt,subscribe:!0})],Et.prototype,"profilesStore",2);Xt([X()],Et.prototype,"committing",2);Xt([X()],Et.prototype,"removingRole",2);Et=Xt([nt("role-detail")],Et);var yr=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,oi=(t,e,o,i)=>{for(var s=i>1?void 0:i?wr(e,o):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&yr(e,o,s),s};let ke=class extends St(Q){render(){return m`
			<div class="column" style="gap: 32px; flex: 1">
				${this.rolesStore.allRoles.map(t=>m` <role-detail .role=${t}></role-detail> `)}
			</div>
		`}};ke.styles=[pt];oi([At({context:Lo,subscribe:!0})],ke.prototype,"rolesStore",2);ke=oi([Ot(),nt("all-roles")],ke);export{ke as AllRoles};
