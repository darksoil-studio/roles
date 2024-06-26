import{m as o,w as m,s as d,c as h,n as y,l as f,o as u}from"./chunk.MGEAXYVX.fO6xFSdZ.js";import{n as v}from"./chunk.5SKBN5CP._6jWBe5P.js";import{x as c,g}from"./roles-client.BsEGBmUD.js";import{S as C}from"./signal-watcher.DeCe-Rpy.js";import"./chunk.C2LF7HHG.Cl1T-XsN.js";import{a as x,t as b}from"./property.B-ZXrebU.js";import{r as w}from"./context.KiubJ2Dr.js";import"./static.Da8DPRVO.js";var S=Object.defineProperty,$=Object.getOwnPropertyDescriptor,p=(e,s,a,l)=>{for(var r=l>1?void 0:l?$(s,a):s,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(l?n(s,a,r):n(r))||r);return l&&r&&S(s,a,r),r};let t=class extends C(g){async deleteRoleClaim(){try{await this.rolesStore.client.deleteRoleClaim(this.roleClaimHash),this.dispatchEvent(new CustomEvent("role-claim-deleted",{bubbles:!0,composed:!0,detail:{roleClaimHash:this.roleClaimHash}}))}catch(e){console.error(e),v(o("Error deleting the role claim"))}}renderDetail(e){return c`
			<sl-card>
				<div slot="header" class="row" style="gap: 8px">
					<span style="font-size: 18px; flex: 1;">${o("Role Claim")}</span>

					<sl-icon-button
						.src=${m(u)}
						@click=${()=>this.deleteRoleClaim()}
					></sl-icon-button>
				</div>

				<div class="column" style="gap: 16px;">
					<div class="column" style="gap: 8px;">
						<span><strong>${o("Role Name")}</strong></span>
						<span style="white-space: pre-line">${e.entry.role}</span>
					</div>
				</div>
			</sl-card>
		`}render(){const e=this.rolesStore.roleClaims.get(this.roleClaimHash).entry.get();switch(e.status){case"pending":return c`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;case"error":return c`<display-error
					.headline=${o("Error fetching the role claim")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderDetail(e.value)}}};t.styles=[d];p([x(y("role-claim-hash"))],t.prototype,"roleClaimHash",2);p([h({context:w,subscribe:!0})],t.prototype,"rolesStore",2);t=p([f(),b("role-claim-detail")],t);export{t as RoleClaimDetail};
