const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/api-docs.6GVAIKQB.js","assets/chunks/api-viewer-tabs.bc9mZ4w5.js","assets/chunks/tslib.es6.kHcLnhpD.js","assets/chunks/api-demo.Bsqmng5d.js","assets/chunks/profiles-context.DfI-rHFT.js","assets/chunks/roles-client.BTCgoAOC.js","assets/chunks/commonjsHelpers.CfSuzJoK.js","assets/chunks/range.8CHRcHaX.js","assets/chunks/toFinite.4brzzzp-.js","assets/chunks/isSymbol.BQyHfQYg.js","assets/chunks/provide.BOBbaQW8.js","assets/chunks/property.u054DmXc.js","assets/chunks/signal-watcher.Cilo2CUk.js","assets/chunks/roles-context.D4xjEmZC.js","assets/chunks/context.BMfdT7zo.js","assets/chunks/role-detail.O6dTYpDS.js","assets/chunks/chunk.DBG7W4GS.CDYOjyL0.js"])))=>i.map(i=>d[i]);
import{y as d,X as e,o as c,c as p,a4 as h,j as m}from"./chunks/framework.Bnm9oeSA.js";import{d as _,P as u,a as k,b as g,R as f,c as E,s as b,e as v,j as y,n as w}from"./chunks/roles-client.BTCgoAOC.js";import"./chunks/commonjsHelpers.CfSuzJoK.js";import"./chunks/range.8CHRcHaX.js";import"./chunks/toFinite.4brzzzp-.js";import"./chunks/isSymbol.BQyHfQYg.js";const P=h("",12),A=m("api-docs",{src:"custom-elements.json",only:"role-detail"},null,-1),x=[P,A],V=JSON.parse('{"title":"<role-detail>","description":"","frontmatter":{},"headers":[],"relativePath":"elements/role-details.md","filePath":"elements/role-details.md"}'),R={name:"elements/role-details.md"},O=Object.assign(R,{setup(I){return d(async()=>{await e(()=>import("./chunks/api-docs.6GVAIKQB.js"),__vite__mapDeps([0,1,2])),await e(()=>import("./chunks/api-demo.Bsqmng5d.js"),__vite__mapDeps([3,1,2])),await e(()=>import("./chunks/profiles-context.DfI-rHFT.js"),__vite__mapDeps([4,2,5,6,7,8,9,10,11,12])),customElements.get("roles-context")||await e(()=>import("./chunks/roles-context.D4xjEmZC.js"),__vite__mapDeps([13,10,11,5,6,7,8,9,14])),customElements.get("role-detail")||await e(()=>import("./chunks/role-detail.O6dTYpDS.js").then(n=>n.r),__vite__mapDeps([15,16,11,5,6,7,8,9,12,2,14]));const t=await _(),a=new u(t,Array.from(t.keys())[0]),i=new k(new g(a,"roles_test")),s=new f,o=new E(s,"roles_test"),l=await b();await s.create_role_claim(l);const r=new v(o,{roles_config:[{role:"editor",singular_name:"editor",plural_name:"editor",description:"editor"}]});y(w`
    <profiles-context .store=${i}>
      <roles-context .store=${r}>
        <api-demo src="custom-elements.json" only="role-detail" exclude-knobs="store">
          <template data-element="role-detail" data-target="host">
            <role-detail ></role-detail>
          </template>
        </api-demo>
      </roles-context>
    </profiles-context>
  `,document.querySelector("element-demo"))}),(t,a)=>(c(),p("div",null,x))}});export{V as __pageData,O as default};
