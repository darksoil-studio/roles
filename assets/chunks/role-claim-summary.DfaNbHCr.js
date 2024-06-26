import{m as c,s as p,c as d,n as u,l as h}from"./chunk.MGEAXYVX.fO6xFSdZ.js";import{x as a,g as y}from"./roles-client.BsEGBmUD.js";import{S as f}from"./signal-watcher.DeCe-Rpy.js";import"./chunk.C2LF7HHG.Cl1T-XsN.js";import{a as v,t as g}from"./property.B-ZXrebU.js";import{r as C}from"./context.KiubJ2Dr.js";var x=Object.defineProperty,S=Object.getOwnPropertyDescriptor,m=(e,t,o,l)=>{for(var r=l>1?void 0:l?S(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(l?n(t,o,r):n(r))||r);return l&&r&&x(t,o,r),r};let s=class extends f(y){renderSummary(e){return a`
			<div class="column" style="gap: 16px;">
				<div class="column" style="gap: 8px">
					<span><strong>${c("Role Name")}</strong></span>
					<span style="white-space: pre-line">${e.entry.role}</span>
				</div>
			</div>
		`}renderRoleClaim(){const e=this.rolesStore.roleClaims.get(this.roleClaimHash).entry.get();switch(e.status){case"pending":return a`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;case"error":return a`<display-error
					.headline=${c("Error fetching the role claim")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderSummary(e.value)}}render(){return a`<sl-card
			style="flex: 1; cursor: grab;"
			@click=${()=>this.dispatchEvent(new CustomEvent("role-claim-selected",{composed:!0,bubbles:!0,detail:{roleClaimHash:this.roleClaimHash}}))}
		>
			${this.renderRoleClaim()}
		</sl-card>`}};s.styles=[p];m([v(u("role-claim-hash"))],s.prototype,"roleClaimHash",2);m([d({context:C,subscribe:!0})],s.prototype,"rolesStore",2);s=m([h(),g("role-claim-summary")],s);export{s as RoleClaimSummary};
