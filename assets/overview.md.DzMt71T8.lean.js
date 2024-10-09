import{_ as h,D as d,o as t,c,b as n,w as e,a4 as r,a3 as l,j as a,a as i,I as s}from"./chunks/framework.Ck1r-Hkz.js";const T=JSON.parse('{"title":"@darksoil-studio/roles","description":"","frontmatter":{},"headers":[],"relativePath":"overview.md","filePath":"overview.md"}'),p={name:"overview.md"},m=l("",11),u=a("h3",{id:"role-assignment",tabindex:"-1"},[i("Role assignment "),a("a",{class:"header-anchor",href:"#role-assignment","aria-label":'Permalink to "Role assignment"'},"​")],-1),g=a("p",null,"In the diagram below Alice is the progenitor and is therefore granted ADMIN_ROLE when entering the DNA.",-1),f=l("",5);function _(A,b,y,w,v,k){const o=d("Mermaid");return t(),c("div",null,[m,(t(),n(r,null,{default:e(()=>[s(o,{id:"mermaid-42",class:"mermaid",graph:"graph%20TD%3B%0A%20%20Agent%20--has--%3E%20AgentPubKey%0A%20%20Agent%20--creates--%3E%20hApp_DNA%0A%20%20AgentPubKey%20--included%20when%20creating--%3E%20hApp_DNA%0A%20%20Agent%20--joins%20--%3EhApp_DNA%0A%20%20Agent%20--claims--%3E%20ADMIN_ROLE%0A%20%20hApp_DNA%20--validates--%3E%20ADMIN_ROLE%0A%20%20%0A"})]),fallback:e(()=>[i(" Loading... ")]),_:1})),u,g,(t(),n(r,null,{default:e(()=>[s(o,{id:"mermaid-49",class:"mermaid",graph:"graph%20TD%3B%0A%20%20%20%20Alice%20--%20claims%20on%20init%20--%3E%20ADMIN_ROLE%0A%20%20%20%20Alice%20--%20creates%20for%20Caroline%20--%3E%20admin_role_assignment%0A%20%20%20%20Caroline%20--%20uses%20assignment%20to%20claim%20--%3E%20ADMIN_ROLE%0A%20%20%20%20Caroline%20--%20(now%20admin)%20creates%20for%20David%20--%3E%20editor_role_assignment%0A%20%20%20%20David%20--%20uses%20assignment%20to%20claim%20--%3E%20EDITOR_ROLE%0A%20%20%20%20%0A"})]),fallback:e(()=>[i(" Loading... ")]),_:1})),f])}const N=h(p,[["render",_]]);export{T as __pageData,N as default};
