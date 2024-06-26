import{s as ze,a as m,t as Pe}from"./property.B-ZXrebU.js";import{i as K,h as Oe,g as ne,w as $e,x as O}from"./roles-client.BsEGBmUD.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class jt{constructor(e,o,i,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,n)),this.unsubscribe=n},this.host=e,o.context!==void 0){const s=o;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=o,this.callback=i,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new ze(this.context,this.t,this.subscribe))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ui({context:t,subscribe:e}){return(o,i)=>{typeof i=="object"?i.addInitializer(function(){new jt(this,{context:t,callback:r=>{o.set.call(this,r)},subscribe:e})}):o.constructor.addInitializer(r=>{new jt(r,{context:t,callback:s=>{r[i]=s},subscribe:e})})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Re(t){return m({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t,e){return(o,i,r)=>{const s=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(t))??null};return Te(o,i,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=t=>typeof t!="string"&&"strTag"in t,Be=(t,e,o)=>{let i=t[0];for(let r=1;r<t.length;r++)i+=e[r-1],i+=t[r];return i};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=t=>Me(t)?Be(t.strings,t.values):t;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ne=class{constructor(e){this.__litLocalizeEventHandler=o=>{o.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Vt,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Vt,this.__litLocalizeEventHandler)}};const He=t=>t.addController(new Ne(t)),Fe=He;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=()=>(t,e)=>(t.addInitializer(Fe),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ie{constructor(){this.settled=!1,this.promise=new Promise((e,o)=>{this._resolve=e,this._reject=o})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let je=new Ie;je.resolve();/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mi=De;const Ve=[K`
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
  `];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ue=t=>(...e)=>({_$litDirective$:t,values:e});class qe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}function vi(t){return{attribute:t,type:Object,hasChanged:(e,o)=>(e==null?void 0:e.toString())!==(o==null?void 0:o.toString()),converter:e=>e&&e.length>0&&Oe(e)}}function Ye(t){return`data:image/svg+xml;utf8,${Xe(t)}`}function Xe(t){return`<svg style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`}var Ze="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",bi="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",yi="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ke=class ae extends Event{constructor(e){super(ae.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=e}};Ke.eventName="lit-routes-connected";var Ge=K`
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
`,Je=K`
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
`,ut=K`
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
`,le=Object.defineProperty,Qe=Object.defineProperties,to=Object.getOwnPropertyDescriptor,eo=Object.getOwnPropertyDescriptors,Wt=Object.getOwnPropertySymbols,oo=Object.prototype.hasOwnProperty,io=Object.prototype.propertyIsEnumerable,Ut=(t,e,o)=>e in t?le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,Et=(t,e)=>{for(var o in e||(e={}))oo.call(e,o)&&Ut(t,o,e[o]);if(Wt)for(var o of Wt(e))io.call(e,o)&&Ut(t,o,e[o]);return t},ce=(t,e)=>Qe(t,eo(e)),f=(t,e,o,i)=>{for(var r=i>1?void 0:i?to(e,o):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(i?n(e,o,r):n(r))||r);return i&&r&&le(e,o,r),r},F=class extends ne{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,Et({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){customElements.define(t,class extends e{},o);return}let r=" (unknown version)",s=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in i&&i.version&&(s=" v"+i.version),!(r&&s&&r===s)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${s} has already been registered.`)}};F.version="2.15.1";F.dependencies={};f([m()],F.prototype,"dir",2);f([m()],F.prototype,"lang",2);const B=Math.min,k=Math.max,wt=Math.round,vt=Math.floor,Y=t=>({x:t,y:t}),ro={left:"right",right:"left",bottom:"top",top:"bottom"},so={start:"end",end:"start"};function Ot(t,e,o){return k(t,B(e,o))}function nt(t,e){return typeof t=="function"?t(e):t}function X(t){return t.split("-")[0]}function at(t){return t.split("-")[1]}function de(t){return t==="x"?"y":"x"}function Bt(t){return t==="y"?"height":"width"}function Q(t){return["top","bottom"].includes(X(t))?"y":"x"}function Dt(t){return de(Q(t))}function no(t,e,o){o===void 0&&(o=!1);const i=at(t),r=Dt(t),s=Bt(r);let n=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=xt(n)),[n,xt(n)]}function ao(t){const e=xt(t);return[$t(t),e,$t(e)]}function $t(t){return t.replace(/start|end/g,e=>so[e])}function lo(t,e,o){const i=["left","right"],r=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return o?e?r:i:e?i:r;case"left":case"right":return e?s:n;default:return[]}}function co(t,e,o,i){const r=at(t);let s=lo(X(t),o==="start",i);return r&&(s=s.map(n=>n+"-"+r),e&&(s=s.concat(s.map($t)))),s}function xt(t){return t.replace(/left|right|bottom|top/g,e=>ro[e])}function ho(t){return{top:0,right:0,bottom:0,left:0,...t}}function he(t){return typeof t!="number"?ho(t):{top:t,right:t,bottom:t,left:t}}function Ct(t){const{x:e,y:o,width:i,height:r}=t;return{width:i,height:r,top:o,left:e,right:e+i,bottom:o+r,x:e,y:o}}function qt(t,e,o){let{reference:i,floating:r}=t;const s=Q(e),n=Dt(e),a=Bt(n),l=X(e),c=s==="y",d=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,g=i[a]/2-r[a]/2;let h;switch(l){case"top":h={x:d,y:i.y-r.height};break;case"bottom":h={x:d,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:p};break;case"left":h={x:i.x-r.width,y:p};break;default:h={x:i.x,y:i.y}}switch(at(e)){case"start":h[n]-=g*(o&&c?-1:1);break;case"end":h[n]+=g*(o&&c?-1:1);break}return h}const po=async(t,e,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:n}=o,a=s.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(e));let c=await n.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:p}=qt(c,i,l),g=i,h={},u=0;for(let v=0;v<a.length;v++){const{name:y,fn:b}=a[v],{x:w,y:x,data:E,reset:_}=await b({x:d,y:p,initialPlacement:i,placement:g,strategy:r,middlewareData:h,rects:c,platform:n,elements:{reference:t,floating:e}});d=w??d,p=x??p,h={...h,[y]:{...h[y],...E}},_&&u<=50&&(u++,typeof _=="object"&&(_.placement&&(g=_.placement),_.rects&&(c=_.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:r}):_.rects),{x:d,y:p}=qt(c,g,l)),v=-1)}return{x:d,y:p,placement:g,strategy:r,middlewareData:h}};async function Nt(t,e){var o;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:n,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:g=!1,padding:h=0}=nt(e,t),u=he(h),y=a[g?p==="floating"?"reference":"floating":p],b=Ct(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(y)))==null||o?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),w=p==="floating"?{x:i,y:r,width:n.floating.width,height:n.floating.height}:n.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),E=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},_=Ct(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:x,strategy:l}):w);return{top:(b.top-_.top+u.top)/E.y,bottom:(_.bottom-b.bottom+u.bottom)/E.y,left:(b.left-_.left+u.left)/E.x,right:(_.right-b.right+u.right)/E.x}}const uo=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:r,rects:s,platform:n,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=nt(t,e)||{};if(c==null)return{};const p=he(d),g={x:o,y:i},h=Dt(r),u=Bt(h),v=await n.getDimensions(c),y=h==="y",b=y?"top":"left",w=y?"bottom":"right",x=y?"clientHeight":"clientWidth",E=s.reference[u]+s.reference[h]-g[h]-s.floating[u],_=g[h]-s.reference[h],L=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c));let R=L?L[x]:0;(!R||!await(n.isElement==null?void 0:n.isElement(L)))&&(R=a.floating[x]||s.floating[u]);const V=E/2-_/2,T=R/2-v[u]/2-1,P=B(p[b],T),W=B(p[w],T),G=P,ct=R-v[u]-W,S=R/2-v[u]/2+V,ot=Ot(G,S,ct),H=!l.arrow&&at(r)!=null&&S!==ot&&s.reference[u]/2-(S<G?P:W)-v[u]/2<0,M=H?S<G?S-G:S-ct:0;return{[h]:g[h]+M,data:{[h]:ot,centerOffset:S-ot-M,...H&&{alignmentOffset:M}},reset:H}}}),fo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:r,middlewareData:s,rects:n,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:v=!0,...y}=nt(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const b=X(r),w=Q(a),x=X(a)===a,E=await(l.isRTL==null?void 0:l.isRTL(c.floating)),_=g||(x||!v?[xt(a)]:ao(a)),L=u!=="none";!g&&L&&_.push(...co(a,v,u,E));const R=[a,..._],V=await Nt(e,y),T=[];let P=((i=s.flip)==null?void 0:i.overflows)||[];if(d&&T.push(V[b]),p){const S=no(r,n,E);T.push(V[S[0]],V[S[1]])}if(P=[...P,{placement:r,overflows:T}],!T.every(S=>S<=0)){var W,G;const S=(((W=s.flip)==null?void 0:W.index)||0)+1,ot=R[S];if(ot)return{data:{index:S,overflows:P},reset:{placement:ot}};let H=(G=P.filter(M=>M.overflows[0]<=0).sort((M,U)=>M.overflows[1]-U.overflows[1])[0])==null?void 0:G.placement;if(!H)switch(h){case"bestFit":{var ct;const M=(ct=P.filter(U=>{if(L){const q=Q(U.placement);return q===w||q==="y"}return!0}).map(U=>[U.placement,U.overflows.filter(q=>q>0).reduce((q,ke)=>q+ke,0)]).sort((U,q)=>U[1]-q[1])[0])==null?void 0:ct[0];M&&(H=M);break}case"initialPlacement":H=a;break}if(r!==H)return{reset:{placement:H}}}return{}}}};async function go(t,e){const{placement:o,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),n=X(o),a=at(o),l=Q(o)==="y",c=["left","top"].includes(n)?-1:1,d=s&&l?-1:1,p=nt(e,t);let{mainAxis:g,crossAxis:h,alignmentAxis:u}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return a&&typeof u=="number"&&(h=a==="end"?u*-1:u),l?{x:h*d,y:g*c}:{x:g*c,y:h*d}}const mo=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:r,y:s,placement:n,middlewareData:a}=e,l=await go(e,t);return n===((o=a.offset)==null?void 0:o.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:n}}}}},vo=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:n=!1,limiter:a={fn:y=>{let{x:b,y:w}=y;return{x:b,y:w}}},...l}=nt(t,e),c={x:o,y:i},d=await Nt(e,l),p=Q(X(r)),g=de(p);let h=c[g],u=c[p];if(s){const y=g==="y"?"top":"left",b=g==="y"?"bottom":"right",w=h+d[y],x=h-d[b];h=Ot(w,h,x)}if(n){const y=p==="y"?"top":"left",b=p==="y"?"bottom":"right",w=u+d[y],x=u-d[b];u=Ot(w,u,x)}const v=a.fn({...e,[g]:h,[p]:u});return{...v,data:{x:v.x-o,y:v.y-i}}}}},bo=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:i,platform:r,elements:s}=e,{apply:n=()=>{},...a}=nt(t,e),l=await Nt(e,a),c=X(o),d=at(o),p=Q(o)==="y",{width:g,height:h}=i.floating;let u,v;c==="top"||c==="bottom"?(u=c,v=d===(await(r.isRTL==null?void 0:r.isRTL(s.floating))?"start":"end")?"left":"right"):(v=c,u=d==="end"?"top":"bottom");const y=h-l.top-l.bottom,b=g-l.left-l.right,w=B(h-l[u],y),x=B(g-l[v],b),E=!e.middlewareData.shift;let _=w,L=x;if(p?L=d||E?B(x,b):b:_=d||E?B(w,y):y,E&&!d){const V=k(l.left,0),T=k(l.right,0),P=k(l.top,0),W=k(l.bottom,0);p?L=g-2*(V!==0||T!==0?V+T:k(l.left,l.right)):_=h-2*(P!==0||W!==0?P+W:k(l.top,l.bottom))}await n({...e,availableWidth:L,availableHeight:_});const R=await r.getDimensions(s.floating);return g!==R.width||h!==R.height?{reset:{rects:!0}}:{}}}};function lt(t){return pe(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(pe(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function pe(t){return t instanceof Node||t instanceof z(t).Node}function D(t){return t instanceof Element||t instanceof z(t).Element}function N(t){return t instanceof HTMLElement||t instanceof z(t).HTMLElement}function Yt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}function ft(t){const{overflow:e,overflowX:o,overflowY:i,display:r}=$(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(r)}function yo(t){return["table","td","th"].includes(lt(t))}function At(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Ht(t){const e=Ft(),o=$(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function wo(t){let e=Z(t);for(;N(e)&&!st(e);){if(At(e))return null;if(Ht(e))return e;e=Z(e)}return null}function Ft(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function st(t){return["html","body","#document"].includes(lt(t))}function $(t){return z(t).getComputedStyle(t)}function St(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Z(t){if(lt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Yt(t)&&t.host||I(t);return Yt(e)?e.host:e}function ue(t){const e=Z(t);return st(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&ft(e)?e:ue(e)}function ht(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=ue(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),n=z(r);return s?e.concat(n,n.visualViewport||[],ft(r)?r:[],n.frameElement&&o?ht(n.frameElement):[]):e.concat(r,ht(r,[],o))}function fe(t){const e=$(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=N(t),s=r?t.offsetWidth:o,n=r?t.offsetHeight:i,a=wt(o)!==s||wt(i)!==n;return a&&(o=s,i=n),{width:o,height:i,$:a}}function It(t){return D(t)?t:t.contextElement}function rt(t){const e=It(t);if(!N(e))return Y(1);const o=e.getBoundingClientRect(),{width:i,height:r,$:s}=fe(e);let n=(s?wt(o.width):o.width)/i,a=(s?wt(o.height):o.height)/r;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const xo=Y(0);function ge(t){const e=z(t);return!Ft()||!e.visualViewport?xo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Co(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==z(t)?!1:e}function tt(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),s=It(t);let n=Y(1);e&&(i?D(i)&&(n=rt(i)):n=rt(t));const a=Co(s,o,i)?ge(s):Y(0);let l=(r.left+a.x)/n.x,c=(r.top+a.y)/n.y,d=r.width/n.x,p=r.height/n.y;if(s){const g=z(s),h=i&&D(i)?z(i):i;let u=g,v=u.frameElement;for(;v&&i&&h!==u;){const y=rt(v),b=v.getBoundingClientRect(),w=$(v),x=b.left+(v.clientLeft+parseFloat(w.paddingLeft))*y.x,E=b.top+(v.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,c*=y.y,d*=y.x,p*=y.y,l+=x,c+=E,u=z(v),v=u.frameElement}}return Ct({width:d,height:p,x:l,y:c})}function _o(t){let{elements:e,rect:o,offsetParent:i,strategy:r}=t;const s=r==="fixed",n=I(i),a=e?At(e.floating):!1;if(i===n||a&&s)return o;let l={scrollLeft:0,scrollTop:0},c=Y(1);const d=Y(0),p=N(i);if((p||!p&&!s)&&((lt(i)!=="body"||ft(n))&&(l=St(i)),N(i))){const g=tt(i);c=rt(i),d.x=g.x+i.clientLeft,d.y=g.y+i.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+d.x,y:o.y*c.y-l.scrollTop*c.y+d.y}}function Eo(t){return Array.from(t.getClientRects())}function me(t){return tt(I(t)).left+St(t).scrollLeft}function Ao(t){const e=I(t),o=St(t),i=t.ownerDocument.body,r=k(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=k(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let n=-o.scrollLeft+me(t);const a=-o.scrollTop;return $(i).direction==="rtl"&&(n+=k(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:n,y:a}}function So(t,e){const o=z(t),i=I(t),r=o.visualViewport;let s=i.clientWidth,n=i.clientHeight,a=0,l=0;if(r){s=r.width,n=r.height;const c=Ft();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:n,x:a,y:l}}function Lo(t,e){const o=tt(t,!0,e==="fixed"),i=o.top+t.clientTop,r=o.left+t.clientLeft,s=N(t)?rt(t):Y(1),n=t.clientWidth*s.x,a=t.clientHeight*s.y,l=r*s.x,c=i*s.y;return{width:n,height:a,x:l,y:c}}function Xt(t,e,o){let i;if(e==="viewport")i=So(t,o);else if(e==="document")i=Ao(I(t));else if(D(e))i=Lo(e,o);else{const r=ge(t);i={...e,x:e.x-r.x,y:e.y-r.y}}return Ct(i)}function ve(t,e){const o=Z(t);return o===e||!D(o)||st(o)?!1:$(o).position==="fixed"||ve(o,e)}function ko(t,e){const o=e.get(t);if(o)return o;let i=ht(t,[],!1).filter(a=>D(a)&&lt(a)!=="body"),r=null;const s=$(t).position==="fixed";let n=s?Z(t):t;for(;D(n)&&!st(n);){const a=$(n),l=Ht(n);!l&&a.position==="fixed"&&(r=null),(s?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||ft(n)&&!l&&ve(t,n))?i=i.filter(d=>d!==n):r=a,n=Z(n)}return e.set(t,i),i}function zo(t){let{element:e,boundary:o,rootBoundary:i,strategy:r}=t;const n=[...o==="clippingAncestors"?At(e)?[]:ko(e,this._c):[].concat(o),i],a=n[0],l=n.reduce((c,d)=>{const p=Xt(e,d,r);return c.top=k(p.top,c.top),c.right=B(p.right,c.right),c.bottom=B(p.bottom,c.bottom),c.left=k(p.left,c.left),c},Xt(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Po(t){const{width:e,height:o}=fe(t);return{width:e,height:o}}function Oo(t,e,o){const i=N(e),r=I(e),s=o==="fixed",n=tt(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=Y(0);if(i||!i&&!s)if((lt(e)!=="body"||ft(r))&&(a=St(e)),i){const p=tt(e,!0,s,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else r&&(l.x=me(r));const c=n.left+a.scrollLeft-l.x,d=n.top+a.scrollTop-l.y;return{x:c,y:d,width:n.width,height:n.height}}function Lt(t){return $(t).position==="static"}function Zt(t,e){return!N(t)||$(t).position==="fixed"?null:e?e(t):t.offsetParent}function be(t,e){const o=z(t);if(At(t))return o;if(!N(t)){let r=Z(t);for(;r&&!st(r);){if(D(r)&&!Lt(r))return r;r=Z(r)}return o}let i=Zt(t,e);for(;i&&yo(i)&&Lt(i);)i=Zt(i,e);return i&&st(i)&&Lt(i)&&!Ht(i)?o:i||wo(t)||o}const $o=async function(t){const e=this.getOffsetParent||be,o=this.getDimensions,i=await o(t.floating);return{reference:Oo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Ro(t){return $(t).direction==="rtl"}const yt={convertOffsetParentRelativeRectToViewportRelativeRect:_o,getDocumentElement:I,getClippingRect:zo,getOffsetParent:be,getElementRects:$o,getClientRects:Eo,getDimensions:Po,getScale:rt,isElement:D,isRTL:Ro};function To(t,e){let o=null,i;const r=I(t);function s(){var a;clearTimeout(i),(a=o)==null||a.disconnect(),o=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const{left:c,top:d,width:p,height:g}=t.getBoundingClientRect();if(a||e(),!p||!g)return;const h=vt(d),u=vt(r.clientWidth-(c+p)),v=vt(r.clientHeight-(d+g)),y=vt(c),w={rootMargin:-h+"px "+-u+"px "+-v+"px "+-y+"px",threshold:k(0,B(1,l))||1};let x=!0;function E(_){const L=_[0].intersectionRatio;if(L!==l){if(!x)return n();L?n(!1,L):i=setTimeout(()=>{n(!1,1e-7)},1e3)}x=!1}try{o=new IntersectionObserver(E,{...w,root:r.ownerDocument})}catch{o=new IntersectionObserver(E,w)}o.observe(t)}return n(!0),s}function Mo(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=It(t),d=r||s?[...c?ht(c):[],...ht(e)]:[];d.forEach(b=>{r&&b.addEventListener("scroll",o,{passive:!0}),s&&b.addEventListener("resize",o)});const p=c&&a?To(c,o):null;let g=-1,h=null;n&&(h=new ResizeObserver(b=>{let[w]=b;w&&w.target===c&&h&&(h.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=h)==null||x.observe(e)})),o()}),c&&!l&&h.observe(c),h.observe(e));let u,v=l?tt(t):null;l&&y();function y(){const b=tt(t);v&&(b.x!==v.x||b.y!==v.y||b.width!==v.width||b.height!==v.height)&&o(),v=b,u=requestAnimationFrame(y)}return o(),()=>{var b;d.forEach(w=>{r&&w.removeEventListener("scroll",o),s&&w.removeEventListener("resize",o)}),p==null||p(),(b=h)==null||b.disconnect(),h=null,l&&cancelAnimationFrame(u)}}const Bo=mo,Do=vo,No=fo,Kt=bo,Ho=uo,Fo=(t,e,o)=>{const i=new Map,r={platform:yt,...o},s={...r.platform,_c:i};return po(t,e,{...r,platform:s})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=Ue(class extends qe{constructor(t){var e;if(super(t),t.type!==We.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(e)}const o=t.element.classList;for(const s of this.st)s in e||(o.remove(s),this.st.delete(s));for(const s in e){const n=!!e[s];n===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(n?(o.add(s),this.st.add(s)):(o.remove(s),this.st.delete(s)))}return $e}});function Io(t){return jo(t)}function kt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function jo(t){for(let e=t;e;e=kt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=kt(t);e;e=kt(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function Vo(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var C=class extends F{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,s=0,n=0,a=0,l=0,c=0,d=0;o?t.top<e.top?(i=t.left,r=t.bottom,s=t.right,n=t.bottom,a=e.left,l=e.top,c=e.right,d=e.top):(i=e.left,r=e.bottom,s=e.right,n=e.bottom,a=t.left,l=t.top,c=t.right,d=t.top):t.left<e.left?(i=t.right,r=t.top,s=e.left,n=e.top,a=t.right,l=t.bottom,c=e.left,d=e.bottom):(i=e.right,r=e.top,s=t.left,n=t.top,a=e.right,l=e.bottom,c=t.left,d=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Vo(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Mo(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Bo({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Kt({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=r?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(No({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Do({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Kt({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Ho({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>yt.getOffsetParent(o,Io):yt.getOffsetParent;Fo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:ce(Et({},yt),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:r,placement:s})=>{const n=getComputedStyle(this).direction==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const l=r.arrow.x,c=r.arrow.y;let d="",p="",g="",h="";if(this.arrowPlacement==="start"){const u=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=n?u:"",h=n?"":u}else if(this.arrowPlacement==="end"){const u=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=n?"":u,h=n?u:"",g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof l=="number"?`${l}px`:"",d=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:d,right:p,bottom:g,left:h,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return O`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${_t({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${_t({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?O`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};C.styles=[ut,Je];f([pt(".popup")],C.prototype,"popup",2);f([pt(".popup__arrow")],C.prototype,"arrowEl",2);f([m()],C.prototype,"anchor",2);f([m({type:Boolean,reflect:!0})],C.prototype,"active",2);f([m({reflect:!0})],C.prototype,"placement",2);f([m({reflect:!0})],C.prototype,"strategy",2);f([m({type:Number})],C.prototype,"distance",2);f([m({type:Number})],C.prototype,"skidding",2);f([m({type:Boolean})],C.prototype,"arrow",2);f([m({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2);f([m({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2);f([m({type:Boolean})],C.prototype,"flip",2);f([m({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2);f([m({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2);f([m({type:Object})],C.prototype,"flipBoundary",2);f([m({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2);f([m({type:Boolean})],C.prototype,"shift",2);f([m({type:Object})],C.prototype,"shiftBoundary",2);f([m({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2);f([m({attribute:"auto-size"})],C.prototype,"autoSize",2);f([m()],C.prototype,"sync",2);f([m({type:Object})],C.prototype,"autoSizeBoundary",2);f([m({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2);f([m({attribute:"hover-bridge",type:Boolean})],C.prototype,"hoverBridge",2);var ye=new Map,Wo=new WeakMap;function Uo(t){return t??{keyframes:[],options:{duration:0}}}function Gt(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function we(t,e){ye.set(t,Uo(e))}function Jt(t,e,o){const i=Wo.get(t);if(i!=null&&i[e])return Gt(i[e],o.dir);const r=ye.get(e);return r?Gt(r,o.dir):{keyframes:[],options:{duration:0}}}function Qt(t,e){return new Promise(o=>{function i(r){r.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function te(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,ce(Et({},o),{duration:qo()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function ee(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function qo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function oe(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}const Rt=new Set,Yo=new MutationObserver(Ee),it=new Map;let xe=document.documentElement.dir||"ltr",Ce=document.documentElement.lang||navigator.language,J;Yo.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function _e(...t){t.map(e=>{const o=e.$code.toLowerCase();it.has(o)?it.set(o,Object.assign(Object.assign({},it.get(o)),e)):it.set(o,e),J||(J=e)}),Ee()}function Ee(){xe=document.documentElement.dir||"ltr",Ce=document.documentElement.lang||navigator.language,[...Rt.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Xo=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Rt.add(this.host)}hostDisconnected(){Rt.delete(this.host)}dir(){return`${this.host.dir||xe}`.toLowerCase()}lang(){return`${this.host.lang||Ce}`.toLowerCase()}getTranslationData(e){var o,i;const r=new Intl.Locale(e.replace(/_/g,"-")),s=r==null?void 0:r.language.toLowerCase(),n=(i=(o=r==null?void 0:r.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",a=it.get(`${s}-${n}`),l=it.get(s);return{locale:r,language:s,region:n,primary:a,secondary:l}}exists(e,o){var i;const{primary:r,secondary:s}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(r&&r[e]||s&&s[e]||o.includeFallback&&J&&J[e])}term(e,...o){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(r&&r[e])s=r[e];else if(J&&J[e])s=J[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...o):s}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var Ae={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};_e(Ae);var Zo=Ae,Se=class extends Xo{};_e(Zo);function gt(t,e){const o=Et({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:s}=i,n=Array.isArray(t)?t:[t];i.update=function(a){n.forEach(l=>{const c=l;if(a.has(c)){const d=a.get(c),p=this[c];d!==p&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](d,p)}}),s.call(this,a)}}}var A=class extends F{constructor(){super(),this.localize=new Se(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=ee(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=ee(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await oe(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=Jt(this,"tooltip.show",{dir:this.localize.dir()});await te(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await oe(this.body);const{keyframes:o,options:i}=Jt(this,"tooltip.hide",{dir:this.localize.dir()});await te(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Qt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Qt(this,"sl-after-hide")}render(){return O`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${_t({tooltip:!0,"tooltip--open":this.open})}
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
    `}};A.styles=[ut,Ge];A.dependencies={"sl-popup":C};f([pt("slot:not([name])")],A.prototype,"defaultSlot",2);f([pt(".tooltip__body")],A.prototype,"body",2);f([pt("sl-popup")],A.prototype,"popup",2);f([m()],A.prototype,"content",2);f([m()],A.prototype,"placement",2);f([m({type:Boolean,reflect:!0})],A.prototype,"disabled",2);f([m({type:Number})],A.prototype,"distance",2);f([m({type:Boolean,reflect:!0})],A.prototype,"open",2);f([m({type:Number})],A.prototype,"skidding",2);f([m()],A.prototype,"trigger",2);f([m({type:Boolean})],A.prototype,"hoist",2);f([gt("open",{waitUntilFirstUpdate:!0})],A.prototype,"handleOpenChange",1);f([gt(["content","distance","hoist","placement","skidding"])],A.prototype,"handleOptionsChange",1);f([gt("disabled")],A.prototype,"handleDisabledChange",1);we("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});we("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});A.define("sl-tooltip");var Ko=K`
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
`,Tt="";function ie(t){Tt=t}function Go(t=""){if(!Tt){const e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)ie(o.getAttribute("data-shoelace"));else{const i=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let r="";i&&(r=i.getAttribute("src")),ie(r.split("/").slice(0,-1).join("/"))}}return Tt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Jo={name:"default",resolver:t=>Go(`assets/icons/${t}.svg`)},Qo=Jo,re={caret:`
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
  `},ti={name:"system",resolver:t=>t in re?`data:image/svg+xml,${encodeURIComponent(re[t])}`:""},ei=ti,oi=[Qo,ei],Mt=[];function ii(t){Mt.push(t)}function ri(t){Mt=Mt.filter(e=>e!==t)}function se(t){return oi.find(e=>e.name===t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const si=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,xi=t=>t.strings===void 0,ni={},Ci=(t,e=ni)=>t._$AH=e;var dt=Symbol(),bt=Symbol(),zt,Pt=new Map,j=class extends F{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e!=null&&e.spriteSheet){this.svg=O`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const r=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(r),this.svg}try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?dt:bt}catch{return bt}try{const r=document.createElement("div");r.innerHTML=await i.text();const s=r.firstElementChild;if(((o=s==null?void 0:s.tagName)==null?void 0:o.toLowerCase())!=="svg")return dt;zt||(zt=new DOMParser);const a=zt.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):dt}catch{return dt}}connectedCallback(){super.connectedCallback(),ii(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ri(this)}getIconSource(){const t=se(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?se(this.library):void 0;if(!e){this.svg=null;return}let r=Pt.get(e);if(r||(r=this.resolveIcon(e,i),Pt.set(e,r)),!this.initialRender)return;const s=await r;if(s===bt&&Pt.delete(e),e===this.getIconSource().url){if(si(s)){this.svg=s;return}switch(s){case bt:case dt:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(t=i==null?void 0:i.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};j.styles=[ut,Ko];f([Re()],j.prototype,"svg",2);f([m({reflect:!0})],j.prototype,"name",2);f([m()],j.prototype,"src",2);f([m()],j.prototype,"label",2);f([m({reflect:!0})],j.prototype,"library",2);f([gt("label")],j.prototype,"handleLabelChange",1);f([gt(["name","src","library"])],j.prototype,"setIcon",1);j.define("sl-icon");var mt=function(t,e,o,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};let et=class extends ne{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return O`
      <sl-icon
        style="color: red; height: ${this._iconSize}; width: ${this._iconSize}; margin-bottom: 8px;"
        src="${Ye(Ze)}"
      ></sl-icon>
    `}renderFull(){return O` <div class="column center-content" style="flex: 1">
      ${this.renderIcon()}
      <div style="width: 500px; text-align: center" class="column">
        ${this.headline?O` <span style="margin-bottom: 8px">${this.headline} </span>`:O``}
        <span class="placeholder"
          >${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
        </span>
      </div>
    </div>`}renderTooltip(){return O`
      <sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
        ${this.renderIcon()}</sl-tooltip
      >
    `}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};et.styles=[Ve,K`
      :host {
        display: flex;
        flex: 1;
      }
    `];mt([m({attribute:"tooltip"})],et.prototype,"tooltip",void 0);mt([m()],et.prototype,"headline",void 0);mt([m()],et.prototype,"error",void 0);mt([m({attribute:"icon-size"})],et.prototype,"iconSize",void 0);et=mt([Pe("display-error")],et);var ai=K`
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
`,li=class extends F{constructor(){super(...arguments),this.localize=new Se(this)}render(){return O`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};li.styles=[ut,ai];var ci=K`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,di=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Le=class extends F{constructor(){super(...arguments),this.hasSlotController=new di(this,"footer","header","image")}render(){return O`
      <div
        part="base"
        class=${_t({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Le.styles=[ut,ci];Le.define("sl-card");export{Et as A,li as B,di as H,Se as L,j as S,f as _,yi as a,Ci as b,ui as c,ut as d,Ue as e,xi as f,pt as g,gt as h,qe as i,F as j,_t as k,gi as l,mi as m,vi as n,bi as o,Ze as p,we as q,Re as r,Ve as s,We as t,oe as u,Jt as v,Ye as w,te as x,Qt as y,ce as z};
