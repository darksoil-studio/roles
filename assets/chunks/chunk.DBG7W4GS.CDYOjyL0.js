import{s as _e,n as g,t as ke}from"./property.u054DmXc.js";import{i as it,k as Re,f as ce,w as Te,x as H,l as Be,o as De,T as Me,p as Ut,n as Fe}from"./roles-client.BTCgoAOC.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class qt{constructor(e,o,i,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(r,s)=>{this.unsubscribe&&(this.unsubscribe!==s&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=r,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(r,s)),this.unsubscribe=s},this.host=e,o.context!==void 0){const r=o;this.context=r.context,this.callback=r.callback,this.subscribe=r.subscribe??!1}else this.context=o,this.callback=i,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new _e(this.context,this.t,this.subscribe))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function si({context:t,subscribe:e}){return(o,i)=>{typeof i=="object"?i.addInitializer(function(){new qt(this,{context:t,callback:n=>{o.set.call(this,n)},subscribe:e})}):o.constructor.addInitializer(n=>{new qt(n,{context:t,callback:r=>{n[i]=r},subscribe:e})})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(t){return g({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t,e){return(o,i,n)=>{const r=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(t))??null};return Ne(o,i,{get(){return r(this)}})}}const Ie=[it`
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
 */const je={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},He=t=>(...e)=>({_$litDirective$:t,values:e});class We{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}function ai(t){return{attribute:t,type:Object,hasChanged:(e,o)=>(e==null?void 0:e.toString())!==(o==null?void 0:o.toString()),converter:e=>e&&e.length>0&&Re(e)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ve=class de extends Event{constructor(e){super(de.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=e}};Ve.eventName="lit-routes-connected";var Ue=it`
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
`,qe=it`
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
`,At=it`
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
`,ue=Object.defineProperty,Ye=Object.defineProperties,Xe=Object.getOwnPropertyDescriptor,Ke=Object.getOwnPropertyDescriptors,Yt=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,zt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Xt=(t,e,o)=>e in t?ue(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,St=(t,e)=>{for(var o in e||(e={}))Ze.call(e,o)&&Xt(t,o,e[o]);if(Yt)for(var o of Yt(e))Ge.call(e,o)&&Xt(t,o,e[o]);return t},pe=(t,e)=>Ye(t,Ke(e)),p=(t,e,o,i)=>{for(var n=i>1?void 0:i?Xe(e,o):e,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(i?s(e,o,n):s(n))||n);return i&&n&&ue(e,o,n),n},Je=function(t,e){this[0]=t,this[1]=e},li=t=>{var e=t[zt("asyncIterator")],o=!1,i,n={};return e==null?(e=t[zt("iterator")](),i=r=>n[r]=s=>e[r](s)):(e=e.call(t),i=r=>n[r]=s=>{if(o){if(o=!1,r==="throw")throw s;return s}return o=!0,{done:!1,value:new Je(new Promise(a=>{var l=e[r](s);if(!(l instanceof Object))throw TypeError("Object expected");a(l)}),1)}}),n[zt("iterator")]=()=>n,i("next"),"throw"in e?i("throw"):n.throw=r=>{throw r},"return"in e&&i("return"),n},G=class extends ce{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,St({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){customElements.define(t,class extends e{},o);return}let n=" (unknown version)",r=n;"version"in e&&e.version&&(n=" v"+e.version),"version"in i&&i.version&&(r=" v"+i.version),!(n&&r&&n===r)&&console.warn(`Attempted to register <${t}>${n}, but <${t}>${r} has already been registered.`)}};G.version="2.15.1";G.dependencies={};p([g()],G.prototype,"dir",2);p([g()],G.prototype,"lang",2);const M=Math.min,L=Math.max,xt=Math.round,bt=Math.floor,X=t=>({x:t,y:t}),Qe={left:"right",right:"left",bottom:"top",top:"bottom"},to={start:"end",end:"start"};function Tt(t,e,o){return L(t,M(e,o))}function ct(t,e){return typeof t=="function"?t(e):t}function K(t){return t.split("-")[0]}function ht(t){return t.split("-")[1]}function fe(t){return t==="x"?"y":"x"}function Nt(t){return t==="y"?"height":"width"}function tt(t){return["top","bottom"].includes(K(t))?"y":"x"}function It(t){return fe(tt(t))}function eo(t,e,o){o===void 0&&(o=!1);const i=ht(t),n=It(t),r=Nt(n);let s=n==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Ct(s)),[s,Ct(s)]}function oo(t){const e=Ct(t);return[Bt(t),e,Bt(e)]}function Bt(t){return t.replace(/start|end/g,e=>to[e])}function io(t,e,o){const i=["left","right"],n=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?n:i:e?i:n;case"left":case"right":return e?r:s;default:return[]}}function no(t,e,o,i){const n=ht(t);let r=io(K(t),o==="start",i);return n&&(r=r.map(s=>s+"-"+n),e&&(r=r.concat(r.map(Bt)))),r}function Ct(t){return t.replace(/left|right|bottom|top/g,e=>Qe[e])}function ro(t){return{top:0,right:0,bottom:0,left:0,...t}}function ge(t){return typeof t!="number"?ro(t):{top:t,right:t,bottom:t,left:t}}function Et(t){const{x:e,y:o,width:i,height:n}=t;return{width:i,height:n,top:o,left:e,right:e+i,bottom:o+n,x:e,y:o}}function Kt(t,e,o){let{reference:i,floating:n}=t;const r=tt(e),s=It(e),a=Nt(s),l=K(e),c=r==="y",h=i.x+i.width/2-n.width/2,u=i.y+i.height/2-n.height/2,m=i[a]/2-n[a]/2;let d;switch(l){case"top":d={x:h,y:i.y-n.height};break;case"bottom":d={x:h,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:u};break;case"left":d={x:i.x-n.width,y:u};break;default:d={x:i.x,y:i.y}}switch(ht(e)){case"start":d[s]-=m*(o&&c?-1:1);break;case"end":d[s]+=m*(o&&c?-1:1);break}return d}const so=async(t,e,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:r=[],platform:s}=o,a=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:n}),{x:h,y:u}=Kt(c,i,l),m=i,d={},f=0;for(let v=0;v<a.length;v++){const{name:y,fn:b}=a[v],{x:w,y:x,data:$,reset:E}=await b({x:h,y:u,initialPlacement:i,placement:m,strategy:n,middlewareData:d,rects:c,platform:s,elements:{reference:t,floating:e}});h=w??h,u=x??u,d={...d,[y]:{...d[y],...$}},E&&f<=50&&(f++,typeof E=="object"&&(E.placement&&(m=E.placement),E.rects&&(c=E.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:n}):E.rects),{x:h,y:u}=Kt(c,m,l)),v=-1)}return{x:h,y:u,placement:m,strategy:n,middlewareData:d}};async function jt(t,e){var o;e===void 0&&(e={});const{x:i,y:n,platform:r,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:m=!1,padding:d=0}=ct(e,t),f=ge(d),y=a[m?u==="floating"?"reference":"floating":u],b=Et(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(y)))==null||o?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),w=u==="floating"?{x:i,y:n,width:s.floating.width,height:s.floating.height}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),$=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},E=Et(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:x,strategy:l}):w);return{top:(b.top-E.top+f.top)/$.y,bottom:(E.bottom-b.bottom+f.bottom)/$.y,left:(b.left-E.left+f.left)/$.x,right:(E.right-b.right+f.right)/$.x}}const ao=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:n,rects:r,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=ct(t,e)||{};if(c==null)return{};const u=ge(h),m={x:o,y:i},d=It(n),f=Nt(d),v=await s.getDimensions(c),y=d==="y",b=y?"top":"left",w=y?"bottom":"right",x=y?"clientHeight":"clientWidth",$=r.reference[f]+r.reference[d]-m[d]-r.floating[f],E=m[d]-r.reference[d],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let R=P?P[x]:0;(!R||!await(s.isElement==null?void 0:s.isElement(P)))&&(R=a.floating[x]||r.floating[f]);const V=$/2-E/2,T=R/2-v[f]/2-1,_=M(u[b],T),U=M(u[w],T),J=_,ut=R-v[f]-U,S=R/2-v[f]/2+V,nt=Tt(J,S,ut),j=!l.arrow&&ht(n)!=null&&S!==nt&&r.reference[f]/2-(S<J?_:U)-v[f]/2<0,B=j?S<J?S-J:S-ut:0;return{[d]:m[d]+B,data:{[d]:nt,centerOffset:S-nt-B,...j&&{alignmentOffset:B}},reset:j}}}),lo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:n,middlewareData:r,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:v=!0,...y}=ct(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const b=K(n),w=tt(a),x=K(a)===a,$=await(l.isRTL==null?void 0:l.isRTL(c.floating)),E=m||(x||!v?[Ct(a)]:oo(a)),P=f!=="none";!m&&P&&E.push(...no(a,v,f,$));const R=[a,...E],V=await jt(e,y),T=[];let _=((i=r.flip)==null?void 0:i.overflows)||[];if(h&&T.push(V[b]),u){const S=eo(n,s,$);T.push(V[S[0]],V[S[1]])}if(_=[..._,{placement:n,overflows:T}],!T.every(S=>S<=0)){var U,J;const S=(((U=r.flip)==null?void 0:U.index)||0)+1,nt=R[S];if(nt)return{data:{index:S,overflows:_},reset:{placement:nt}};let j=(J=_.filter(B=>B.overflows[0]<=0).sort((B,q)=>B.overflows[1]-q.overflows[1])[0])==null?void 0:J.placement;if(!j)switch(d){case"bestFit":{var ut;const B=(ut=_.filter(q=>{if(P){const Y=tt(q.placement);return Y===w||Y==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(Y=>Y>0).reduce((Y,Oe)=>Y+Oe,0)]).sort((q,Y)=>q[1]-Y[1])[0])==null?void 0:ut[0];B&&(j=B);break}case"initialPlacement":j=a;break}if(n!==j)return{reset:{placement:j}}}return{}}}};async function co(t,e){const{placement:o,platform:i,elements:n}=t,r=await(i.isRTL==null?void 0:i.isRTL(n.floating)),s=K(o),a=ht(o),l=tt(o)==="y",c=["left","top"].includes(s)?-1:1,h=r&&l?-1:1,u=ct(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:f}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&typeof f=="number"&&(d=a==="end"?f*-1:f),l?{x:d*h,y:m*c}:{x:m*c,y:d*h}}const ho=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:n,y:r,placement:s,middlewareData:a}=e,l=await co(e,t);return s===((o=a.offset)==null?void 0:o.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:n+l.x,y:r+l.y,data:{...l,placement:s}}}}},uo=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:n}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:b,y:w}=y;return{x:b,y:w}}},...l}=ct(t,e),c={x:o,y:i},h=await jt(e,l),u=tt(K(n)),m=fe(u);let d=c[m],f=c[u];if(r){const y=m==="y"?"top":"left",b=m==="y"?"bottom":"right",w=d+h[y],x=d-h[b];d=Tt(w,d,x)}if(s){const y=u==="y"?"top":"left",b=u==="y"?"bottom":"right",w=f+h[y],x=f-h[b];f=Tt(w,f,x)}const v=a.fn({...e,[m]:d,[u]:f});return{...v,data:{x:v.x-o,y:v.y-i}}}}},po=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:i,platform:n,elements:r}=e,{apply:s=()=>{},...a}=ct(t,e),l=await jt(e,a),c=K(o),h=ht(o),u=tt(o)==="y",{width:m,height:d}=i.floating;let f,v;c==="top"||c==="bottom"?(f=c,v=h===(await(n.isRTL==null?void 0:n.isRTL(r.floating))?"start":"end")?"left":"right"):(v=c,f=h==="end"?"top":"bottom");const y=d-l.top-l.bottom,b=m-l.left-l.right,w=M(d-l[f],y),x=M(m-l[v],b),$=!e.middlewareData.shift;let E=w,P=x;if(u?P=h||$?M(x,b):b:E=h||$?M(w,y):y,$&&!h){const V=L(l.left,0),T=L(l.right,0),_=L(l.top,0),U=L(l.bottom,0);u?P=m-2*(V!==0||T!==0?V+T:L(l.left,l.right)):E=d-2*(_!==0||U!==0?_+U:L(l.top,l.bottom))}await s({...e,availableWidth:P,availableHeight:E});const R=await n.getDimensions(r.floating);return m!==R.width||d!==R.height?{reset:{rects:!0}}:{}}}};function dt(t){return me(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function W(t){var e;return(e=(me(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function me(t){return t instanceof Node||t instanceof z(t).Node}function F(t){return t instanceof Element||t instanceof z(t).Element}function N(t){return t instanceof HTMLElement||t instanceof z(t).HTMLElement}function Zt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}function gt(t){const{overflow:e,overflowX:o,overflowY:i,display:n}=k(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(n)}function fo(t){return["table","td","th"].includes(dt(t))}function Pt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Ht(t){const e=Wt(),o=k(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function go(t){let e=Z(t);for(;N(e)&&!at(e);){if(Pt(e))return null;if(Ht(e))return e;e=Z(e)}return null}function Wt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function at(t){return["html","body","#document"].includes(dt(t))}function k(t){return z(t).getComputedStyle(t)}function Lt(t){return F(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Z(t){if(dt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Zt(t)&&t.host||W(t);return Zt(e)?e.host:e}function ve(t){const e=Z(t);return at(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&gt(e)?e:ve(e)}function ft(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const n=ve(t),r=n===((i=t.ownerDocument)==null?void 0:i.body),s=z(n);return r?e.concat(s,s.visualViewport||[],gt(n)?n:[],s.frameElement&&o?ft(s.frameElement):[]):e.concat(n,ft(n,[],o))}function be(t){const e=k(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=N(t),r=n?t.offsetWidth:o,s=n?t.offsetHeight:i,a=xt(o)!==r||xt(i)!==s;return a&&(o=r,i=s),{width:o,height:i,$:a}}function Vt(t){return F(t)?t:t.contextElement}function st(t){const e=Vt(t);if(!N(e))return X(1);const o=e.getBoundingClientRect(),{width:i,height:n,$:r}=be(e);let s=(r?xt(o.width):o.width)/i,a=(r?xt(o.height):o.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const mo=X(0);function ye(t){const e=z(t);return!Wt()||!e.visualViewport?mo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function vo(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==z(t)?!1:e}function et(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const n=t.getBoundingClientRect(),r=Vt(t);let s=X(1);e&&(i?F(i)&&(s=st(i)):s=st(t));const a=vo(r,o,i)?ye(r):X(0);let l=(n.left+a.x)/s.x,c=(n.top+a.y)/s.y,h=n.width/s.x,u=n.height/s.y;if(r){const m=z(r),d=i&&F(i)?z(i):i;let f=m,v=f.frameElement;for(;v&&i&&d!==f;){const y=st(v),b=v.getBoundingClientRect(),w=k(v),x=b.left+(v.clientLeft+parseFloat(w.paddingLeft))*y.x,$=b.top+(v.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,c*=y.y,h*=y.x,u*=y.y,l+=x,c+=$,f=z(v),v=f.frameElement}}return Et({width:h,height:u,x:l,y:c})}function bo(t){let{elements:e,rect:o,offsetParent:i,strategy:n}=t;const r=n==="fixed",s=W(i),a=e?Pt(e.floating):!1;if(i===s||a&&r)return o;let l={scrollLeft:0,scrollTop:0},c=X(1);const h=X(0),u=N(i);if((u||!u&&!r)&&((dt(i)!=="body"||gt(s))&&(l=Lt(i)),N(i))){const m=et(i);c=st(i),h.x=m.x+i.clientLeft,h.y=m.y+i.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+h.x,y:o.y*c.y-l.scrollTop*c.y+h.y}}function yo(t){return Array.from(t.getClientRects())}function we(t){return et(W(t)).left+Lt(t).scrollLeft}function wo(t){const e=W(t),o=Lt(t),i=t.ownerDocument.body,n=L(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=L(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-o.scrollLeft+we(t);const a=-o.scrollTop;return k(i).direction==="rtl"&&(s+=L(e.clientWidth,i.clientWidth)-n),{width:n,height:r,x:s,y:a}}function xo(t,e){const o=z(t),i=W(t),n=o.visualViewport;let r=i.clientWidth,s=i.clientHeight,a=0,l=0;if(n){r=n.width,s=n.height;const c=Wt();(!c||c&&e==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:r,height:s,x:a,y:l}}function Co(t,e){const o=et(t,!0,e==="fixed"),i=o.top+t.clientTop,n=o.left+t.clientLeft,r=N(t)?st(t):X(1),s=t.clientWidth*r.x,a=t.clientHeight*r.y,l=n*r.x,c=i*r.y;return{width:s,height:a,x:l,y:c}}function Gt(t,e,o){let i;if(e==="viewport")i=xo(t,o);else if(e==="document")i=wo(W(t));else if(F(e))i=Co(e,o);else{const n=ye(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return Et(i)}function xe(t,e){const o=Z(t);return o===e||!F(o)||at(o)?!1:k(o).position==="fixed"||xe(o,e)}function Eo(t,e){const o=e.get(t);if(o)return o;let i=ft(t,[],!1).filter(a=>F(a)&&dt(a)!=="body"),n=null;const r=k(t).position==="fixed";let s=r?Z(t):t;for(;F(s)&&!at(s);){const a=k(s),l=Ht(s);!l&&a.position==="fixed"&&(n=null),(r?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||gt(s)&&!l&&xe(t,s))?i=i.filter(h=>h!==s):n=a,s=Z(s)}return e.set(t,i),i}function $o(t){let{element:e,boundary:o,rootBoundary:i,strategy:n}=t;const s=[...o==="clippingAncestors"?Pt(e)?[]:Eo(e,this._c):[].concat(o),i],a=s[0],l=s.reduce((c,h)=>{const u=Gt(e,h,n);return c.top=L(u.top,c.top),c.right=M(u.right,c.right),c.bottom=M(u.bottom,c.bottom),c.left=L(u.left,c.left),c},Gt(e,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ao(t){const{width:e,height:o}=be(t);return{width:e,height:o}}function So(t,e,o){const i=N(e),n=W(e),r=o==="fixed",s=et(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=X(0);if(i||!i&&!r)if((dt(e)!=="body"||gt(n))&&(a=Lt(e)),i){const u=et(e,!0,r,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else n&&(l.x=we(n));const c=s.left+a.scrollLeft-l.x,h=s.top+a.scrollTop-l.y;return{x:c,y:h,width:s.width,height:s.height}}function Ot(t){return k(t).position==="static"}function Jt(t,e){return!N(t)||k(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ce(t,e){const o=z(t);if(Pt(t))return o;if(!N(t)){let n=Z(t);for(;n&&!at(n);){if(F(n)&&!Ot(n))return n;n=Z(n)}return o}let i=Jt(t,e);for(;i&&fo(i)&&Ot(i);)i=Jt(i,e);return i&&at(i)&&Ot(i)&&!Ht(i)?o:i||go(t)||o}const Po=async function(t){const e=this.getOffsetParent||Ce,o=this.getDimensions,i=await o(t.floating);return{reference:So(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Lo(t){return k(t).direction==="rtl"}const wt={convertOffsetParentRelativeRectToViewportRelativeRect:bo,getDocumentElement:W,getClippingRect:$o,getOffsetParent:Ce,getElementRects:Po,getClientRects:yo,getDimensions:Ao,getScale:st,isElement:F,isRTL:Lo};function zo(t,e){let o=null,i;const n=W(t);function r(){var a;clearTimeout(i),(a=o)==null||a.disconnect(),o=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const{left:c,top:h,width:u,height:m}=t.getBoundingClientRect();if(a||e(),!u||!m)return;const d=bt(h),f=bt(n.clientWidth-(c+u)),v=bt(n.clientHeight-(h+m)),y=bt(c),w={rootMargin:-d+"px "+-f+"px "+-v+"px "+-y+"px",threshold:L(0,M(1,l))||1};let x=!0;function $(E){const P=E[0].intersectionRatio;if(P!==l){if(!x)return s();P?s(!1,P):i=setTimeout(()=>{s(!1,1e-7)},1e3)}x=!1}try{o=new IntersectionObserver($,{...w,root:n.ownerDocument})}catch{o=new IntersectionObserver($,w)}o.observe(t)}return s(!0),r}function Oo(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Vt(t),h=n||r?[...c?ft(c):[],...ft(e)]:[];h.forEach(b=>{n&&b.addEventListener("scroll",o,{passive:!0}),r&&b.addEventListener("resize",o)});const u=c&&a?zo(c,o):null;let m=-1,d=null;s&&(d=new ResizeObserver(b=>{let[w]=b;w&&w.target===c&&d&&(d.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=d)==null||x.observe(e)})),o()}),c&&!l&&d.observe(c),d.observe(e));let f,v=l?et(t):null;l&&y();function y(){const b=et(t);v&&(b.x!==v.x||b.y!==v.y||b.width!==v.width||b.height!==v.height)&&o(),v=b,f=requestAnimationFrame(y)}return o(),()=>{var b;h.forEach(w=>{n&&w.removeEventListener("scroll",o),r&&w.removeEventListener("resize",o)}),u==null||u(),(b=d)==null||b.disconnect(),d=null,l&&cancelAnimationFrame(f)}}const _o=ho,ko=uo,Ro=lo,Qt=po,To=ao,Bo=(t,e,o)=>{const i=new Map,n={platform:wt,...o},r={...n.platform,_c:i};return so(t,e,{...n,platform:r})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=He(class extends We{constructor(t){var e;if(super(t),t.type!==je.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((i=this.nt)!=null&&i.has(r))&&this.st.add(r);return this.render(e)}const o=t.element.classList;for(const r of this.st)r in e||(o.remove(r),this.st.delete(r));for(const r in e){const s=!!e[r];s===this.st.has(r)||(n=this.nt)!=null&&n.has(r)||(s?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return Te}});function Do(t){return Mo(t)}function _t(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Mo(t){for(let e=t;e;e=_t(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=_t(t);e;e=_t(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function Fo(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var C=class extends G{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,n=0,r=0,s=0,a=0,l=0,c=0,h=0;o?t.top<e.top?(i=t.left,n=t.bottom,r=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):(i=e.left,n=e.bottom,r=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):t.left<e.left?(i=t.right,n=t.top,r=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom):(i=e.right,n=e.top,r=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Fo(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Oo(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[_o({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Qt({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=n?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Ro({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(ko({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Qt({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(To({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>wt.getOffsetParent(o,Do):wt.getOffsetParent;Bo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:pe(St({},wt),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:n,placement:r})=>{const s=getComputedStyle(this).direction==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const l=n.arrow.x,c=n.arrow.y;let h="",u="",m="",d="";if(this.arrowPlacement==="start"){const f=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=s?f:"",d=s?"":f}else if(this.arrowPlacement==="end"){const f=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=s?"":f,d=s?f:"",m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(d=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(d=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:m,left:d,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return H`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${$t({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${$t({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?H`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};C.styles=[At,qe];p([lt(".popup")],C.prototype,"popup",2);p([lt(".popup__arrow")],C.prototype,"arrowEl",2);p([g()],C.prototype,"anchor",2);p([g({type:Boolean,reflect:!0})],C.prototype,"active",2);p([g({reflect:!0})],C.prototype,"placement",2);p([g({reflect:!0})],C.prototype,"strategy",2);p([g({type:Number})],C.prototype,"distance",2);p([g({type:Number})],C.prototype,"skidding",2);p([g({type:Boolean})],C.prototype,"arrow",2);p([g({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2);p([g({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2);p([g({type:Boolean})],C.prototype,"flip",2);p([g({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2);p([g({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2);p([g({type:Object})],C.prototype,"flipBoundary",2);p([g({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2);p([g({type:Boolean})],C.prototype,"shift",2);p([g({type:Object})],C.prototype,"shiftBoundary",2);p([g({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2);p([g({attribute:"auto-size"})],C.prototype,"autoSize",2);p([g()],C.prototype,"sync",2);p([g({type:Object})],C.prototype,"autoSizeBoundary",2);p([g({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2);p([g({attribute:"hover-bridge",type:Boolean})],C.prototype,"hoverBridge",2);var Ee=new Map,No=new WeakMap;function Io(t){return t??{keyframes:[],options:{duration:0}}}function te(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function $e(t,e){Ee.set(t,Io(e))}function ee(t,e,o){const i=No.get(t);if(i!=null&&i[e])return te(i[e],o.dir);const n=Ee.get(e);return n?te(n,o.dir):{keyframes:[],options:{duration:0}}}function oe(t,e){return new Promise(o=>{function i(n){n.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function ie(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=t.animate(e,pe(St({},o),{duration:jo()?0:o.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})})}function ne(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function jo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function re(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}const Dt=new Set,Ho=new MutationObserver(Le),rt=new Map;let Ae=document.documentElement.dir||"ltr",Se=document.documentElement.lang||navigator.language,Q;Ho.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Pe(...t){t.map(e=>{const o=e.$code.toLowerCase();rt.has(o)?rt.set(o,Object.assign(Object.assign({},rt.get(o)),e)):rt.set(o,e),Q||(Q=e)}),Le()}function Le(){Ae=document.documentElement.dir||"ltr",Se=document.documentElement.lang||navigator.language,[...Dt.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Wo=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Dt.add(this.host)}hostDisconnected(){Dt.delete(this.host)}dir(){return`${this.host.dir||Ae}`.toLowerCase()}lang(){return`${this.host.lang||Se}`.toLowerCase()}getTranslationData(e){var o,i;const n=new Intl.Locale(e.replace(/_/g,"-")),r=n==null?void 0:n.language.toLowerCase(),s=(i=(o=n==null?void 0:n.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",a=rt.get(`${r}-${s}`),l=rt.get(r);return{locale:n,language:r,region:s,primary:a,secondary:l}}exists(e,o){var i;const{primary:n,secondary:r}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(n&&n[e]||r&&r[e]||o.includeFallback&&Q&&Q[e])}term(e,...o){const{primary:i,secondary:n}=this.getTranslationData(this.lang());let r;if(i&&i[e])r=i[e];else if(n&&n[e])r=n[e];else if(Q&&Q[e])r=Q[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...o):r}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var ze={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Pe(ze);var Vo=ze,Uo=class extends Wo{};Pe(Vo);function mt(t,e){const o=St({waitUntilFirstUpdate:!1},e);return(i,n)=>{const{update:r}=i,s=Array.isArray(t)?t:[t];i.update=function(a){s.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),u=this[c];h!==u&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[n](h,u)}}),r.call(this,a)}}}var A=class extends G{constructor(){super(),this.localize=new Uo(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=ne(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=ne(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await re(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=ee(this,"tooltip.show",{dir:this.localize.dir()});await ie(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await re(this.body);const{keyframes:o,options:i}=ee(this,"tooltip.hide",{dir:this.localize.dir()});await ie(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,oe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,oe(this,"sl-after-hide")}render(){return H`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${$t({tooltip:!0,"tooltip--open":this.open})}
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
    `}};A.styles=[At,Ue];A.dependencies={"sl-popup":C};p([lt("slot:not([name])")],A.prototype,"defaultSlot",2);p([lt(".tooltip__body")],A.prototype,"body",2);p([lt("sl-popup")],A.prototype,"popup",2);p([g()],A.prototype,"content",2);p([g()],A.prototype,"placement",2);p([g({type:Boolean,reflect:!0})],A.prototype,"disabled",2);p([g({type:Number})],A.prototype,"distance",2);p([g({type:Boolean,reflect:!0})],A.prototype,"open",2);p([g({type:Number})],A.prototype,"skidding",2);p([g()],A.prototype,"trigger",2);p([g({type:Boolean})],A.prototype,"hoist",2);p([mt("open",{waitUntilFirstUpdate:!0})],A.prototype,"handleOpenChange",1);p([mt(["content","distance","hoist","placement","skidding"])],A.prototype,"handleOptionsChange",1);p([mt("disabled")],A.prototype,"handleDisabledChange",1);$e("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});$e("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});A.define("sl-tooltip");var qo=it`
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
`,Mt="";function se(t){Mt=t}function Yo(t=""){if(!Mt){const e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)se(o.getAttribute("data-shoelace"));else{const i=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let n="";i&&(n=i.getAttribute("src")),se(n.split("/").slice(0,-1).join("/"))}}return Mt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Xo={name:"default",resolver:t=>Yo(`assets/icons/${t}.svg`)},Ko=Xo,ae={caret:`
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
  `},Zo={name:"system",resolver:t=>t in ae?`data:image/svg+xml,${encodeURIComponent(ae[t])}`:""},Go=Zo,Jo=[Ko,Go],Ft=[];function Qo(t){Ft.push(t)}function ti(t){Ft=Ft.filter(e=>e!==t)}function le(t){return Jo.find(e=>e.name===t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,hi=t=>t.strings===void 0,oi={},di=(t,e=oi)=>t._$AH=e;var pt=Symbol(),yt=Symbol(),kt,Rt=new Map,I=class extends G{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e!=null&&e.spriteSheet){this.svg=H`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(n),this.svg}try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?pt:yt}catch{return yt}try{const n=document.createElement("div");n.innerHTML=await i.text();const r=n.firstElementChild;if(((o=r==null?void 0:r.tagName)==null?void 0:o.toLowerCase())!=="svg")return pt;kt||(kt=new DOMParser);const a=kt.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):pt}catch{return pt}}connectedCallback(){super.connectedCallback(),Qo(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ti(this)}getIconSource(){const t=le(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?le(this.library):void 0;if(!e){this.svg=null;return}let n=Rt.get(e);if(n||(n=this.resolveIcon(e,i),Rt.set(e,n)),!this.initialRender)return;const r=await n;if(r===yt&&Rt.delete(e),e===this.getIconSource().url){if(ei(r)){this.svg=r;return}switch(r){case yt:case pt:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=i==null?void 0:i.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};I.styles=[At,qo];p([he()],I.prototype,"svg",2);p([g({reflect:!0})],I.prototype,"name",2);p([g()],I.prototype,"src",2);p([g()],I.prototype,"label",2);p([g({reflect:!0})],I.prototype,"library",2);p([mt("label")],I.prototype,"handleLabelChange",1);p([mt(["name","src","library"])],I.prototype,"setIcon",1);I.define("sl-icon");var vt=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let ot=class extends ce{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return H`
      <sl-icon
        style="color: red; height: ${this._iconSize}; width: ${this._iconSize}; margin-bottom: 8px;"
        src="${Be(De)}"
      ></sl-icon>
    `}renderFull(){return H` <div class="column center-content" style="flex: 1">
      ${this.renderIcon()}
      <div style="width: 500px; text-align: center" class="column">
        ${this.headline?H` <span style="margin-bottom: 8px">${this.headline} </span>`:H``}
        <span class="placeholder"
          >${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
        </span>
      </div>
    </div>`}renderTooltip(){return H`
      <sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
        ${this.renderIcon()}</sl-tooltip
      >
    `}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};ot.styles=[Ie,it`
      :host {
        display: flex;
        flex: 1;
      }
    `];vt([g({attribute:"tooltip"})],ot.prototype,"tooltip",void 0);vt([g()],ot.prototype,"headline",void 0);vt([g()],ot.prototype,"error",void 0);vt([g({attribute:"icon-size"})],ot.prototype,"iconSize",void 0);ot=vt([ke("display-error")],ot);var ii=it`
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
 */const D=t=>t??Me;var O=class extends G{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Ut`a`:Ut`button`;return Fe`
      <${e}
        part="base"
        class=${$t({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${D(t?void 0:this.disabled)}
        type=${D(t?void 0:"button")}
        href=${D(t?this.href:void 0)}
        target=${D(t?this.target:void 0)}
        download=${D(t?this.download:void 0)}
        rel=${D(t&&this.target?"noreferrer noopener":void 0)}
        role=${D(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${D(this.name)}
          library=${D(this.library)}
          src=${D(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};O.styles=[At,ii];O.dependencies={"sl-icon":I};p([lt(".icon-button")],O.prototype,"button",2);p([he()],O.prototype,"hasFocus",2);p([g()],O.prototype,"name",2);p([g()],O.prototype,"library",2);p([g()],O.prototype,"src",2);p([g()],O.prototype,"href",2);p([g()],O.prototype,"target",2);p([g()],O.prototype,"download",2);p([g()],O.prototype,"label",2);p([g({type:Boolean,reflect:!0})],O.prototype,"disabled",2);export{Uo as L,O as S,p as _,At as a,G as b,si as c,He as d,$t as e,lt as f,I as g,ai as h,We as i,C as j,$e as k,oe as l,re as m,ee as n,ie as o,D as p,hi as q,he as r,Ie as s,je as t,pe as u,St as v,mt as w,di as x,li as y};
