import{x as t,g as p}from"./roles-client.BsEGBmUD.js";import{t as d}from"./property.B-ZXrebU.js";import{S as f}from"./signal-watcher.DeCe-Rpy.js";import{w as u,m as c,s as y,c as h,l as v,a as g}from"./chunk.MGEAXYVX.fO6xFSdZ.js";import"./chunk.C2LF7HHG.Cl1T-XsN.js";import"./role-claim-summary.DfaNbHCr.js";import{r as x}from"./context.KiubJ2Dr.js";var S=Object.defineProperty,w=Object.getOwnPropertyDescriptor,m=(e,s,a,l)=>{for(var r=l>1?void 0:l?w(s,a):s,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(l?n(s,a,r):n(r))||r);return l&&r&&S(s,a,r),r};let o=class extends f(p){renderList(e){return e.length===0?t` <div class="column center-content" style="gap: 16px;">
        <sl-icon
          .src=${u(g)}
          style="color: grey; height: 64px; width: 64px;"
          ></sl-icon
        >
        <span class="placeholder">${c("No role claims found")}</span>
      </div>`:t`
      <div class="column" style="gap: 16px; flex: 1">
        ${e.map(s=>t`<role-claim-summary .roleClaimHash=${s}></role-claim-summary>`)}
      </div>
    `}render(){const e=this.rolesStore.allRoles.get();switch(e.status){case"pending":return t`<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;">
          <sl-spinner style="font-size: 2rem;"></sl-spinner>
        </div>`;case"error":return t`<display-error
          .headline=${c("Error fetching the role claims")}
          .error=${e.error}
        ></display-error>`;case"completed":return this.renderList(Array.from(e.value.keys()))}}};o.styles=[y];m([h({context:x,subscribe:!0})],o.prototype,"rolesStore",2);o=m([v(),d("all-roles")],o);export{o as AllRoles};
