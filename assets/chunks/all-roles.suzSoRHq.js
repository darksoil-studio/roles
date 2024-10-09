import{s as f,c}from"./chunk.DBG7W4GS.CDYOjyL0.js";import{x as m,f as n}from"./roles-client.BTCgoAOC.js";import{S as v}from"./signal-watcher.Cilo2CUk.js";import{l as x}from"./role-detail.O6dTYpDS.js";import{t as d}from"./property.u054DmXc.js";import{r as u}from"./context.BMfdT7zo.js";import"./commonjsHelpers.CfSuzJoK.js";import"./range.8CHRcHaX.js";import"./toFinite.4brzzzp-.js";import"./isSymbol.BQyHfQYg.js";import"./tslib.es6.kHcLnhpD.js";var S=Object.defineProperty,_=Object.getOwnPropertyDescriptor,a=(e,o,s,t)=>{for(var r=t>1?void 0:t?_(o,s):o,p=e.length-1,i;p>=0;p--)(i=e[p])&&(r=(t?i(o,s,r):i(r))||r);return t&&r&&S(o,s,r),r};let l=class extends v(n){render(){return m`
			<div class="column" style="gap: 32px; flex: 1">
				${this.rolesStore.allRoles.map(e=>m` <role-detail .role=${e}></role-detail> `)}
			</div>
		`}};l.styles=[f];a([c({context:u,subscribe:!0})],l.prototype,"rolesStore",2);l=a([x(),d("all-roles")],l);export{l as AllRoles};
