import{G as k}from"./graph.CECJRqzi.js";import{b as Mn,o as hn,p as ln,e as j,l as A,n as Pn,q as Sn,c as On,s as Fn,d as f,h as m,i as g,f as I,v as y,r as O}from"./baseUniq.Ct-xTuNG.js";import{f as N,b as vn,a as Vn,c as An,d as Bn,m as w,e as R,g as z,l as P,h as Gn}from"./basePickBy.D-GF9FFE.js";import{r as L}from"./range.8CHRcHaX.js";import{a_ as Yn,a$ as Dn,b0 as $n,aJ as qn,b1 as Wn,aL as pn,aK as mn,b2 as jn,aA as zn,aM as Xn,aC as Un,b3 as q}from"../app.DEr8Zaeb.js";import{i as Q}from"./isSymbol.BQyHfQYg.js";import{c as nn}from"./commonjsHelpers.CfSuzJoK.js";function Hn(n){return Yn(Dn(n,void 0,N),n+"")}var Jn=1,Kn=4;function Zn(n){return Mn(n,Jn|Kn)}function Qn(n,e){return n==null?n:$n(n,hn(e),qn)}function ne(n,e){return n&&ln(n,hn(e))}function ee(n,e){return n>e}function F(n,e){var r={};return e=j(e),ln(n,function(t,i,a){Wn(r,i,e(t,i,a))}),r}function x(n){return n&&n.length?vn(n,pn,ee):void 0}function X(n,e){return n&&n.length?vn(n,j(e),Vn):void 0}function re(n,e){var r=n.length;for(n.sort(e);r--;)n[r]=n[r].value;return n}function te(n,e){if(n!==e){var r=n!==void 0,t=n===null,i=n===n,a=Q(n),o=e!==void 0,u=e===null,d=e===e,s=Q(e);if(!u&&!s&&!a&&n>e||a&&o&&d&&!u&&!s||t&&o&&d||!r&&d||!i)return 1;if(!t&&!a&&!s&&n<e||s&&r&&i&&!t&&!a||u&&r&&i||!o&&i||!d)return-1}return 0}function ie(n,e,r){for(var t=-1,i=n.criteria,a=e.criteria,o=i.length,u=r.length;++t<o;){var d=te(i[t],a[t]);if(d){if(t>=u)return d;var s=r[t];return d*(s=="desc"?-1:1)}}return n.index-e.index}function ae(n,e,r){e.length?e=A(e,function(a){return mn(a)?function(o){return Pn(o,a.length===1?a[0]:a)}:a}):e=[pn];var t=-1;e=A(e,jn(j));var i=An(n,function(a,o,u){var d=A(e,function(s){return s(a)});return{criteria:d,index:++t,value:a}});return re(i,function(a,o){return ie(a,o,r)})}function oe(n,e){return Bn(n,e,function(r,t){return Sn(n,t)})}var S=Hn(function(n,e){return n==null?{}:oe(n,e)}),M=zn(function(n,e){if(n==null)return[];var r=e.length;return r>1&&nn(n,e[0],e[1])?e=[]:r>2&&nn(e[0],e[1],e[2])&&(e=[e[0]]),ae(n,On(e),[])}),ue=0;function U(n){var e=++ue;return Fn(n)+e}function de(n,e,r){for(var t=-1,i=n.length,a=e.length,o={};++t<i;){var u=t<a?e[t]:void 0;r(o,n[t],u)}return o}function se(n,e){return de(n||[],e||[],Xn)}class fe{constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,r=e._prev;if(r!==e)return en(r),r}enqueue(e){var r=this._sentinel;e._prev&&e._next&&en(e),e._next=r._next,r._next._prev=e,r._next=e,e._prev=r}toString(){for(var e=[],r=this._sentinel,t=r._prev;t!==r;)e.push(JSON.stringify(t,ce)),t=t._prev;return"["+e.join(", ")+"]"}}function en(n){n._prev._next=n._next,n._next._prev=n._prev,delete n._next,delete n._prev}function ce(n,e){if(n!=="_next"&&n!=="_prev")return e}var he=Un(1);function le(n,e){if(n.nodeCount()<=1)return[];var r=pe(n,e||he),t=ve(r.graph,r.buckets,r.zeroIdx);return N(w(t,function(i){return n.outEdges(i.v,i.w)}))}function ve(n,e,r){for(var t=[],i=e[e.length-1],a=e[0],o;n.nodeCount();){for(;o=a.dequeue();)B(n,e,r,o);for(;o=i.dequeue();)B(n,e,r,o);if(n.nodeCount()){for(var u=e.length-2;u>0;--u)if(o=e[u].dequeue(),o){t=t.concat(B(n,e,r,o,!0));break}}}return t}function B(n,e,r,t,i){var a=i?[]:void 0;return f(n.inEdges(t.v),function(o){var u=n.edge(o),d=n.node(o.v);i&&a.push({v:o.v,w:o.w}),d.out-=u,W(e,r,d)}),f(n.outEdges(t.v),function(o){var u=n.edge(o),d=o.w,s=n.node(d);s.in-=u,W(e,r,s)}),n.removeNode(t.v),a}function pe(n,e){var r=new k,t=0,i=0;f(n.nodes(),function(u){r.setNode(u,{v:u,in:0,out:0})}),f(n.edges(),function(u){var d=r.edge(u.v,u.w)||0,s=e(u),c=d+s;r.setEdge(u.v,u.w,c),i=Math.max(i,r.node(u.v).out+=s),t=Math.max(t,r.node(u.w).in+=s)});var a=L(i+t+3).map(function(){return new fe}),o=t+1;return f(r.nodes(),function(u){W(a,o,r.node(u))}),{graph:r,buckets:a,zeroIdx:o}}function W(n,e,r){r.out?r.in?n[r.out-r.in+e].enqueue(r):n[n.length-1].enqueue(r):n[0].enqueue(r)}function me(n){var e=n.graph().acyclicer==="greedy"?le(n,r(n)):we(n);f(e,function(t){var i=n.edge(t);n.removeEdge(t),i.forwardName=t.name,i.reversed=!0,n.setEdge(t.w,t.v,i,U("rev"))});function r(t){return function(i){return t.edge(i).weight}}}function we(n){var e=[],r={},t={};function i(a){m(t,a)||(t[a]=!0,r[a]=!0,f(n.outEdges(a),function(o){m(r,o.w)?e.push(o):i(o.w)}),delete r[a])}return f(n.nodes(),i),e}function be(n){f(n.edges(),function(e){var r=n.edge(e);if(r.reversed){n.removeEdge(e);var t=r.forwardName;delete r.reversed,delete r.forwardName,n.setEdge(e.w,e.v,r,t)}})}function C(n,e,r,t){var i;do i=U(t);while(n.hasNode(i));return r.dummy=e,n.setNode(i,r),i}function ge(n){var e=new k().setGraph(n.graph());return f(n.nodes(),function(r){e.setNode(r,n.node(r))}),f(n.edges(),function(r){var t=e.edge(r.v,r.w)||{weight:0,minlen:1},i=n.edge(r);e.setEdge(r.v,r.w,{weight:t.weight+i.weight,minlen:Math.max(t.minlen,i.minlen)})}),e}function wn(n){var e=new k({multigraph:n.isMultigraph()}).setGraph(n.graph());return f(n.nodes(),function(r){n.children(r).length||e.setNode(r,n.node(r))}),f(n.edges(),function(r){e.setEdge(r,n.edge(r))}),e}function rn(n,e){var r=n.x,t=n.y,i=e.x-r,a=e.y-t,o=n.width/2,u=n.height/2;if(!i&&!a)throw new Error("Not possible to find intersection inside of the rectangle");var d,s;return Math.abs(a)*o>Math.abs(i)*u?(a<0&&(u=-u),d=u*i/a,s=u):(i<0&&(o=-o),d=o,s=o*a/i),{x:r+d,y:t+s}}function V(n){var e=w(L(bn(n)+1),function(){return[]});return f(n.nodes(),function(r){var t=n.node(r),i=t.rank;g(i)||(e[i][t.order]=r)}),e}function ke(n){var e=R(w(n.nodes(),function(r){return n.node(r).rank}));f(n.nodes(),function(r){var t=n.node(r);m(t,"rank")&&(t.rank-=e)})}function xe(n){var e=R(w(n.nodes(),function(a){return n.node(a).rank})),r=[];f(n.nodes(),function(a){var o=n.node(a).rank-e;r[o]||(r[o]=[]),r[o].push(a)});var t=0,i=n.graph().nodeRankFactor;f(r,function(a,o){g(a)&&o%i!==0?--t:t&&f(a,function(u){n.node(u).rank+=t})})}function tn(n,e,r,t){var i={width:0,height:0};return arguments.length>=4&&(i.rank=r,i.order=t),C(n,"border",i,e)}function bn(n){return x(w(n.nodes(),function(e){var r=n.node(e).rank;if(!g(r))return r}))}function Ee(n,e){var r={lhs:[],rhs:[]};return f(n,function(t){e(t)?r.lhs.push(t):r.rhs.push(t)}),r}function ye(n,e){return e()}function Le(n){function e(r){var t=n.children(r),i=n.node(r);if(t.length&&f(t,e),m(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(var a=i.minRank,o=i.maxRank+1;a<o;++a)an(n,"borderLeft","_bl",r,i,a),an(n,"borderRight","_br",r,i,a)}}f(n.children(),e)}function an(n,e,r,t,i,a){var o={width:0,height:0,rank:a,borderType:e},u=i[e][a-1],d=C(n,"border",o,r);i[e][a]=d,n.setParent(d,t),u&&n.setEdge(u,d,{weight:1})}function Ne(n){var e=n.graph().rankdir.toLowerCase();(e==="lr"||e==="rl")&&gn(n)}function Ce(n){var e=n.graph().rankdir.toLowerCase();(e==="bt"||e==="rl")&&_e(n),(e==="lr"||e==="rl")&&(Re(n),gn(n))}function gn(n){f(n.nodes(),function(e){on(n.node(e))}),f(n.edges(),function(e){on(n.edge(e))})}function on(n){var e=n.width;n.width=n.height,n.height=e}function _e(n){f(n.nodes(),function(e){G(n.node(e))}),f(n.edges(),function(e){var r=n.edge(e);f(r.points,G),m(r,"y")&&G(r)})}function G(n){n.y=-n.y}function Re(n){f(n.nodes(),function(e){Y(n.node(e))}),f(n.edges(),function(e){var r=n.edge(e);f(r.points,Y),m(r,"x")&&Y(r)})}function Y(n){var e=n.x;n.x=n.y,n.y=e}function Te(n){n.graph().dummyChains=[],f(n.edges(),function(e){Ie(n,e)})}function Ie(n,e){var r=e.v,t=n.node(r).rank,i=e.w,a=n.node(i).rank,o=e.name,u=n.edge(e),d=u.labelRank;if(a!==t+1){n.removeEdge(e);var s,c,h;for(h=0,++t;t<a;++h,++t)u.points=[],c={width:0,height:0,edgeLabel:u,edgeObj:e,rank:t},s=C(n,"edge",c,"_d"),t===d&&(c.width=u.width,c.height=u.height,c.dummy="edge-label",c.labelpos=u.labelpos),n.setEdge(r,s,{weight:u.weight},o),h===0&&n.graph().dummyChains.push(s),r=s;n.setEdge(r,i,{weight:u.weight},o)}}function Me(n){f(n.graph().dummyChains,function(e){var r=n.node(e),t=r.edgeLabel,i;for(n.setEdge(r.edgeObj,t);r.dummy;)i=n.successors(e)[0],n.removeNode(e),t.points.push({x:r.x,y:r.y}),r.dummy==="edge-label"&&(t.x=r.x,t.y=r.y,t.width=r.width,t.height=r.height),e=i,r=n.node(e)})}function H(n){var e={};function r(t){var i=n.node(t);if(m(e,t))return i.rank;e[t]=!0;var a=R(w(n.outEdges(t),function(o){return r(o.w)-n.edge(o).minlen}));return(a===Number.POSITIVE_INFINITY||a===void 0||a===null)&&(a=0),i.rank=a}f(n.sources(),r)}function T(n,e){return n.node(e.w).rank-n.node(e.v).rank-n.edge(e).minlen}function kn(n){var e=new k({directed:!1}),r=n.nodes()[0],t=n.nodeCount();e.setNode(r,{});for(var i,a;Pe(e,n)<t;)i=Se(e,n),a=e.hasNode(i.v)?T(n,i):-T(n,i),Oe(e,n,a);return e}function Pe(n,e){function r(t){f(e.nodeEdges(t),function(i){var a=i.v,o=t===a?i.w:a;!n.hasNode(o)&&!T(e,i)&&(n.setNode(o,{}),n.setEdge(t,o,{}),r(o))})}return f(n.nodes(),r),n.nodeCount()}function Se(n,e){return X(e.edges(),function(r){if(n.hasNode(r.v)!==n.hasNode(r.w))return T(e,r)})}function Oe(n,e,r){f(n.nodes(),function(t){e.node(t).rank+=r})}function Fe(){}Fe.prototype=new Error;function xn(n,e,r){mn(e)||(e=[e]);var t=(n.isDirected()?n.successors:n.neighbors).bind(n),i=[],a={};return f(e,function(o){if(!n.hasNode(o))throw new Error("Graph does not have node: "+o);En(n,o,r==="post",a,t,i)}),i}function En(n,e,r,t,i,a){m(t,e)||(t[e]=!0,r||a.push(e),f(i(e),function(o){En(n,o,r,t,i,a)}),r&&a.push(e))}function Ve(n,e){return xn(n,e,"post")}function Ae(n,e){return xn(n,e,"pre")}E.initLowLimValues=K;E.initCutValues=J;E.calcCutValue=yn;E.leaveEdge=Nn;E.enterEdge=Cn;E.exchangeEdges=_n;function E(n){n=ge(n),H(n);var e=kn(n);K(e),J(e,n);for(var r,t;r=Nn(e);)t=Cn(e,n,r),_n(e,n,r,t)}function J(n,e){var r=Ve(n,n.nodes());r=r.slice(0,r.length-1),f(r,function(t){Be(n,e,t)})}function Be(n,e,r){var t=n.node(r),i=t.parent;n.edge(r,i).cutvalue=yn(n,e,r)}function yn(n,e,r){var t=n.node(r),i=t.parent,a=!0,o=e.edge(r,i),u=0;return o||(a=!1,o=e.edge(i,r)),u=o.weight,f(e.nodeEdges(r),function(d){var s=d.v===r,c=s?d.w:d.v;if(c!==i){var h=s===a,l=e.edge(d).weight;if(u+=h?l:-l,Ye(n,r,c)){var v=n.edge(r,c).cutvalue;u+=h?-v:v}}}),u}function K(n,e){arguments.length<2&&(e=n.nodes()[0]),Ln(n,{},1,e)}function Ln(n,e,r,t,i){var a=r,o=n.node(t);return e[t]=!0,f(n.neighbors(t),function(u){m(e,u)||(r=Ln(n,e,r,u,t))}),o.low=a,o.lim=r++,i?o.parent=i:delete o.parent,r}function Nn(n){return z(n.edges(),function(e){return n.edge(e).cutvalue<0})}function Cn(n,e,r){var t=r.v,i=r.w;e.hasEdge(t,i)||(t=r.w,i=r.v);var a=n.node(t),o=n.node(i),u=a,d=!1;a.lim>o.lim&&(u=o,d=!0);var s=I(e.edges(),function(c){return d===un(n,n.node(c.v),u)&&d!==un(n,n.node(c.w),u)});return X(s,function(c){return T(e,c)})}function _n(n,e,r,t){var i=r.v,a=r.w;n.removeEdge(i,a),n.setEdge(t.v,t.w,{}),K(n),J(n,e),Ge(n,e)}function Ge(n,e){var r=z(n.nodes(),function(i){return!e.node(i).parent}),t=Ae(n,r);t=t.slice(1),f(t,function(i){var a=n.node(i).parent,o=e.edge(i,a),u=!1;o||(o=e.edge(a,i),u=!0),e.node(i).rank=e.node(a).rank+(u?o.minlen:-o.minlen)})}function Ye(n,e,r){return n.hasEdge(e,r)}function un(n,e,r){return r.low<=e.lim&&e.lim<=r.lim}function De(n){switch(n.graph().ranker){case"network-simplex":dn(n);break;case"tight-tree":qe(n);break;case"longest-path":$e(n);break;default:dn(n)}}var $e=H;function qe(n){H(n),kn(n)}function dn(n){E(n)}function We(n){var e=C(n,"root",{},"_root"),r=je(n),t=x(y(r))-1,i=2*t+1;n.graph().nestingRoot=e,f(n.edges(),function(o){n.edge(o).minlen*=i});var a=ze(n)+1;f(n.children(),function(o){Rn(n,e,i,a,t,r,o)}),n.graph().nodeRankFactor=i}function Rn(n,e,r,t,i,a,o){var u=n.children(o);if(!u.length){o!==e&&n.setEdge(e,o,{weight:0,minlen:r});return}var d=tn(n,"_bt"),s=tn(n,"_bb"),c=n.node(o);n.setParent(d,o),c.borderTop=d,n.setParent(s,o),c.borderBottom=s,f(u,function(h){Rn(n,e,r,t,i,a,h);var l=n.node(h),v=l.borderTop?l.borderTop:h,p=l.borderBottom?l.borderBottom:h,b=l.borderTop?t:2*t,_=v!==p?1:i-a[o]+1;n.setEdge(d,v,{weight:b,minlen:_,nestingEdge:!0}),n.setEdge(p,s,{weight:b,minlen:_,nestingEdge:!0})}),n.parent(o)||n.setEdge(e,d,{weight:0,minlen:i+a[o]})}function je(n){var e={};function r(t,i){var a=n.children(t);a&&a.length&&f(a,function(o){r(o,i+1)}),e[t]=i}return f(n.children(),function(t){r(t,1)}),e}function ze(n){return O(n.edges(),function(e,r){return e+n.edge(r).weight},0)}function Xe(n){var e=n.graph();n.removeNode(e.nestingRoot),delete e.nestingRoot,f(n.edges(),function(r){var t=n.edge(r);t.nestingEdge&&n.removeEdge(r)})}function Ue(n,e,r){var t={},i;f(r,function(a){for(var o=n.parent(a),u,d;o;){if(u=n.parent(o),u?(d=t[u],t[u]=o):(d=i,i=o),d&&d!==o){e.setEdge(d,o);return}o=u}})}function He(n,e,r){var t=Je(n),i=new k({compound:!0}).setGraph({root:t}).setDefaultNodeLabel(function(a){return n.node(a)});return f(n.nodes(),function(a){var o=n.node(a),u=n.parent(a);(o.rank===e||o.minRank<=e&&e<=o.maxRank)&&(i.setNode(a),i.setParent(a,u||t),f(n[r](a),function(d){var s=d.v===a?d.w:d.v,c=i.edge(s,a),h=g(c)?0:c.weight;i.setEdge(s,a,{weight:n.edge(d).weight+h})}),m(o,"minRank")&&i.setNode(a,{borderLeft:o.borderLeft[e],borderRight:o.borderRight[e]}))}),i}function Je(n){for(var e;n.hasNode(e=U("_root")););return e}function Ke(n,e){for(var r=0,t=1;t<e.length;++t)r+=Ze(n,e[t-1],e[t]);return r}function Ze(n,e,r){for(var t=se(r,w(r,function(s,c){return c})),i=N(w(e,function(s){return M(w(n.outEdges(s),function(c){return{pos:t[c.w],weight:n.edge(c).weight}}),"pos")})),a=1;a<r.length;)a<<=1;var o=2*a-1;a-=1;var u=w(new Array(o),function(){return 0}),d=0;return f(i.forEach(function(s){var c=s.pos+a;u[c]+=s.weight;for(var h=0;c>0;)c%2&&(h+=u[c+1]),c=c-1>>1,u[c]+=s.weight;d+=s.weight*h})),d}function Qe(n){var e={},r=I(n.nodes(),function(u){return!n.children(u).length}),t=x(w(r,function(u){return n.node(u).rank})),i=w(L(t+1),function(){return[]});function a(u){if(!m(e,u)){e[u]=!0;var d=n.node(u);i[d.rank].push(u),f(n.successors(u),a)}}var o=M(r,function(u){return n.node(u).rank});return f(o,a),i}function nr(n,e){return w(e,function(r){var t=n.inEdges(r);if(t.length){var i=O(t,function(a,o){var u=n.edge(o),d=n.node(o.v);return{sum:a.sum+u.weight*d.order,weight:a.weight+u.weight}},{sum:0,weight:0});return{v:r,barycenter:i.sum/i.weight,weight:i.weight}}else return{v:r}})}function er(n,e){var r={};f(n,function(i,a){var o=r[i.v]={indegree:0,in:[],out:[],vs:[i.v],i:a};g(i.barycenter)||(o.barycenter=i.barycenter,o.weight=i.weight)}),f(e.edges(),function(i){var a=r[i.v],o=r[i.w];!g(a)&&!g(o)&&(o.indegree++,a.out.push(r[i.w]))});var t=I(r,function(i){return!i.indegree});return rr(t)}function rr(n){var e=[];function r(a){return function(o){o.merged||(g(o.barycenter)||g(a.barycenter)||o.barycenter>=a.barycenter)&&tr(a,o)}}function t(a){return function(o){o.in.push(a),--o.indegree===0&&n.push(o)}}for(;n.length;){var i=n.pop();e.push(i),f(i.in.reverse(),r(i)),f(i.out,t(i))}return w(I(e,function(a){return!a.merged}),function(a){return S(a,["vs","i","barycenter","weight"])})}function tr(n,e){var r=0,t=0;n.weight&&(r+=n.barycenter*n.weight,t+=n.weight),e.weight&&(r+=e.barycenter*e.weight,t+=e.weight),n.vs=e.vs.concat(n.vs),n.barycenter=r/t,n.weight=t,n.i=Math.min(e.i,n.i),e.merged=!0}function ir(n,e){var r=Ee(n,function(c){return m(c,"barycenter")}),t=r.lhs,i=M(r.rhs,function(c){return-c.i}),a=[],o=0,u=0,d=0;t.sort(ar(!!e)),d=sn(a,i,d),f(t,function(c){d+=c.vs.length,a.push(c.vs),o+=c.barycenter*c.weight,u+=c.weight,d=sn(a,i,d)});var s={vs:N(a)};return u&&(s.barycenter=o/u,s.weight=u),s}function sn(n,e,r){for(var t;e.length&&(t=P(e)).i<=r;)e.pop(),n.push(t.vs),r++;return r}function ar(n){return function(e,r){return e.barycenter<r.barycenter?-1:e.barycenter>r.barycenter?1:n?r.i-e.i:e.i-r.i}}function Tn(n,e,r,t){var i=n.children(e),a=n.node(e),o=a?a.borderLeft:void 0,u=a?a.borderRight:void 0,d={};o&&(i=I(i,function(p){return p!==o&&p!==u}));var s=nr(n,i);f(s,function(p){if(n.children(p.v).length){var b=Tn(n,p.v,r,t);d[p.v]=b,m(b,"barycenter")&&ur(p,b)}});var c=er(s,r);or(c,d);var h=ir(c,t);if(o&&(h.vs=N([o,h.vs,u]),n.predecessors(o).length)){var l=n.node(n.predecessors(o)[0]),v=n.node(n.predecessors(u)[0]);m(h,"barycenter")||(h.barycenter=0,h.weight=0),h.barycenter=(h.barycenter*h.weight+l.order+v.order)/(h.weight+2),h.weight+=2}return h}function or(n,e){f(n,function(r){r.vs=N(r.vs.map(function(t){return e[t]?e[t].vs:t}))})}function ur(n,e){g(n.barycenter)?(n.barycenter=e.barycenter,n.weight=e.weight):(n.barycenter=(n.barycenter*n.weight+e.barycenter*e.weight)/(n.weight+e.weight),n.weight+=e.weight)}function dr(n){var e=bn(n),r=fn(n,L(1,e+1),"inEdges"),t=fn(n,L(e-1,-1,-1),"outEdges"),i=Qe(n);cn(n,i);for(var a=Number.POSITIVE_INFINITY,o,u=0,d=0;d<4;++u,++d){sr(u%2?r:t,u%4>=2),i=V(n);var s=Ke(n,i);s<a&&(d=0,o=Zn(i),a=s)}cn(n,o)}function fn(n,e,r){return w(e,function(t){return He(n,t,r)})}function sr(n,e){var r=new k;f(n,function(t){var i=t.graph().root,a=Tn(t,i,r,e);f(a.vs,function(o,u){t.node(o).order=u}),Ue(t,r,a.vs)})}function cn(n,e){f(e,function(r){f(r,function(t,i){n.node(t).order=i})})}function fr(n){var e=hr(n);f(n.graph().dummyChains,function(r){for(var t=n.node(r),i=t.edgeObj,a=cr(n,e,i.v,i.w),o=a.path,u=a.lca,d=0,s=o[d],c=!0;r!==i.w;){if(t=n.node(r),c){for(;(s=o[d])!==u&&n.node(s).maxRank<t.rank;)d++;s===u&&(c=!1)}if(!c){for(;d<o.length-1&&n.node(s=o[d+1]).minRank<=t.rank;)d++;s=o[d]}n.setParent(r,s),r=n.successors(r)[0]}})}function cr(n,e,r,t){var i=[],a=[],o=Math.min(e[r].low,e[t].low),u=Math.max(e[r].lim,e[t].lim),d,s;d=r;do d=n.parent(d),i.push(d);while(d&&(e[d].low>o||u>e[d].lim));for(s=d,d=t;(d=n.parent(d))!==s;)a.push(d);return{path:i.concat(a.reverse()),lca:s}}function hr(n){var e={},r=0;function t(i){var a=r;f(n.children(i),t),e[i]={low:a,lim:r++}}return f(n.children(),t),e}function lr(n,e){var r={};function t(i,a){var o=0,u=0,d=i.length,s=P(a);return f(a,function(c,h){var l=pr(n,c),v=l?n.node(l).order:d;(l||c===s)&&(f(a.slice(u,h+1),function(p){f(n.predecessors(p),function(b){var _=n.node(b),Z=_.order;(Z<o||v<Z)&&!(_.dummy&&n.node(p).dummy)&&In(r,b,p)})}),u=h+1,o=v)}),a}return O(e,t),r}function vr(n,e){var r={};function t(a,o,u,d,s){var c;f(L(o,u),function(h){c=a[h],n.node(c).dummy&&f(n.predecessors(c),function(l){var v=n.node(l);v.dummy&&(v.order<d||v.order>s)&&In(r,l,c)})})}function i(a,o){var u=-1,d,s=0;return f(o,function(c,h){if(n.node(c).dummy==="border"){var l=n.predecessors(c);l.length&&(d=n.node(l[0]).order,t(o,s,h,u,d),s=h,u=d)}t(o,s,o.length,d,a.length)}),o}return O(e,i),r}function pr(n,e){if(n.node(e).dummy)return z(n.predecessors(e),function(r){return n.node(r).dummy})}function In(n,e,r){if(e>r){var t=e;e=r,r=t}var i=n[e];i||(n[e]=i={}),i[r]=!0}function mr(n,e,r){if(e>r){var t=e;e=r,r=t}return m(n[e],r)}function wr(n,e,r,t){var i={},a={},o={};return f(e,function(u){f(u,function(d,s){i[d]=d,a[d]=d,o[d]=s})}),f(e,function(u){var d=-1;f(u,function(s){var c=t(s);if(c.length){c=M(c,function(b){return o[b]});for(var h=(c.length-1)/2,l=Math.floor(h),v=Math.ceil(h);l<=v;++l){var p=c[l];a[s]===s&&d<o[p]&&!mr(r,s,p)&&(a[p]=s,a[s]=i[s]=i[p],d=o[p])}}})}),{root:i,align:a}}function br(n,e,r,t,i){var a={},o=gr(n,e,r,i),u=i?"borderLeft":"borderRight";function d(h,l){for(var v=o.nodes(),p=v.pop(),b={};p;)b[p]?h(p):(b[p]=!0,v.push(p),v=v.concat(l(p))),p=v.pop()}function s(h){a[h]=o.inEdges(h).reduce(function(l,v){return Math.max(l,a[v.v]+o.edge(v))},0)}function c(h){var l=o.outEdges(h).reduce(function(p,b){return Math.min(p,a[b.w]-o.edge(b))},Number.POSITIVE_INFINITY),v=n.node(h);l!==Number.POSITIVE_INFINITY&&v.borderType!==u&&(a[h]=Math.max(a[h],l))}return d(s,o.predecessors.bind(o)),d(c,o.successors.bind(o)),f(t,function(h){a[h]=a[r[h]]}),a}function gr(n,e,r,t){var i=new k,a=n.graph(),o=Lr(a.nodesep,a.edgesep,t);return f(e,function(u){var d;f(u,function(s){var c=r[s];if(i.setNode(c),d){var h=r[d],l=i.edge(h,c);i.setEdge(h,c,Math.max(o(n,s,d),l||0))}d=s})}),i}function kr(n,e){return X(y(e),function(r){var t=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;return Qn(r,function(a,o){var u=Nr(n,o)/2;t=Math.max(a+u,t),i=Math.min(a-u,i)}),t-i})}function xr(n,e){var r=y(e),t=R(r),i=x(r);f(["u","d"],function(a){f(["l","r"],function(o){var u=a+o,d=n[u],s;if(d!==e){var c=y(d);s=o==="l"?t-R(c):i-x(c),s&&(n[u]=F(d,function(h){return h+s}))}})})}function Er(n,e){return F(n.ul,function(r,t){if(e)return n[e.toLowerCase()][t];var i=M(w(n,t));return(i[1]+i[2])/2})}function yr(n){var e=V(n),r=q(lr(n,e),vr(n,e)),t={},i;f(["u","d"],function(o){i=o==="u"?e:y(e).reverse(),f(["l","r"],function(u){u==="r"&&(i=w(i,function(h){return y(h).reverse()}));var d=(o==="u"?n.predecessors:n.successors).bind(n),s=wr(n,i,r,d),c=br(n,i,s.root,s.align,u==="r");u==="r"&&(c=F(c,function(h){return-h})),t[o+u]=c})});var a=kr(n,t);return xr(t,a),Er(t,n.graph().align)}function Lr(n,e,r){return function(t,i,a){var o=t.node(i),u=t.node(a),d=0,s;if(d+=o.width/2,m(o,"labelpos"))switch(o.labelpos.toLowerCase()){case"l":s=-o.width/2;break;case"r":s=o.width/2;break}if(s&&(d+=r?s:-s),s=0,d+=(o.dummy?e:n)/2,d+=(u.dummy?e:n)/2,d+=u.width/2,m(u,"labelpos"))switch(u.labelpos.toLowerCase()){case"l":s=u.width/2;break;case"r":s=-u.width/2;break}return s&&(d+=r?s:-s),s=0,d}}function Nr(n,e){return n.node(e).width}function Cr(n){n=wn(n),_r(n),ne(yr(n),function(e,r){n.node(r).x=e})}function _r(n){var e=V(n),r=n.graph().ranksep,t=0;f(e,function(i){var a=x(w(i,function(o){return n.node(o).height}));f(i,function(o){n.node(o).y=t+a/2}),t+=a+r})}function it(n,e){var r=ye;r("layout",function(){var t=r("  buildLayoutGraph",function(){return Br(n)});r("  runLayout",function(){Rr(t,r)}),r("  updateInputGraph",function(){Tr(n,t)})})}function Rr(n,e){e("    makeSpaceForEdgeLabels",function(){Gr(n)}),e("    removeSelfEdges",function(){Ur(n)}),e("    acyclic",function(){me(n)}),e("    nestingGraph.run",function(){We(n)}),e("    rank",function(){De(wn(n))}),e("    injectEdgeLabelProxies",function(){Yr(n)}),e("    removeEmptyRanks",function(){xe(n)}),e("    nestingGraph.cleanup",function(){Xe(n)}),e("    normalizeRanks",function(){ke(n)}),e("    assignRankMinMax",function(){Dr(n)}),e("    removeEdgeLabelProxies",function(){$r(n)}),e("    normalize.run",function(){Te(n)}),e("    parentDummyChains",function(){fr(n)}),e("    addBorderSegments",function(){Le(n)}),e("    order",function(){dr(n)}),e("    insertSelfEdges",function(){Hr(n)}),e("    adjustCoordinateSystem",function(){Ne(n)}),e("    position",function(){Cr(n)}),e("    positionSelfEdges",function(){Jr(n)}),e("    removeBorderNodes",function(){Xr(n)}),e("    normalize.undo",function(){Me(n)}),e("    fixupEdgeLabelCoords",function(){jr(n)}),e("    undoCoordinateSystem",function(){Ce(n)}),e("    translateGraph",function(){qr(n)}),e("    assignNodeIntersects",function(){Wr(n)}),e("    reversePoints",function(){zr(n)}),e("    acyclic.undo",function(){be(n)})}function Tr(n,e){f(n.nodes(),function(r){var t=n.node(r),i=e.node(r);t&&(t.x=i.x,t.y=i.y,e.children(r).length&&(t.width=i.width,t.height=i.height))}),f(n.edges(),function(r){var t=n.edge(r),i=e.edge(r);t.points=i.points,m(i,"x")&&(t.x=i.x,t.y=i.y)}),n.graph().width=e.graph().width,n.graph().height=e.graph().height}var Ir=["nodesep","edgesep","ranksep","marginx","marginy"],Mr={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},Pr=["acyclicer","ranker","rankdir","align"],Sr=["width","height"],Or={width:0,height:0},Fr=["minlen","weight","width","height","labeloffset"],Vr={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},Ar=["labelpos"];function Br(n){var e=new k({multigraph:!0,compound:!0}),r=$(n.graph());return e.setGraph(q({},Mr,D(r,Ir),S(r,Pr))),f(n.nodes(),function(t){var i=$(n.node(t));e.setNode(t,Gn(D(i,Sr),Or)),e.setParent(t,n.parent(t))}),f(n.edges(),function(t){var i=$(n.edge(t));e.setEdge(t,q({},Vr,D(i,Fr),S(i,Ar)))}),e}function Gr(n){var e=n.graph();e.ranksep/=2,f(n.edges(),function(r){var t=n.edge(r);t.minlen*=2,t.labelpos.toLowerCase()!=="c"&&(e.rankdir==="TB"||e.rankdir==="BT"?t.width+=t.labeloffset:t.height+=t.labeloffset)})}function Yr(n){f(n.edges(),function(e){var r=n.edge(e);if(r.width&&r.height){var t=n.node(e.v),i=n.node(e.w),a={rank:(i.rank-t.rank)/2+t.rank,e};C(n,"edge-proxy",a,"_ep")}})}function Dr(n){var e=0;f(n.nodes(),function(r){var t=n.node(r);t.borderTop&&(t.minRank=n.node(t.borderTop).rank,t.maxRank=n.node(t.borderBottom).rank,e=x(e,t.maxRank))}),n.graph().maxRank=e}function $r(n){f(n.nodes(),function(e){var r=n.node(e);r.dummy==="edge-proxy"&&(n.edge(r.e).labelRank=r.rank,n.removeNode(e))})}function qr(n){var e=Number.POSITIVE_INFINITY,r=0,t=Number.POSITIVE_INFINITY,i=0,a=n.graph(),o=a.marginx||0,u=a.marginy||0;function d(s){var c=s.x,h=s.y,l=s.width,v=s.height;e=Math.min(e,c-l/2),r=Math.max(r,c+l/2),t=Math.min(t,h-v/2),i=Math.max(i,h+v/2)}f(n.nodes(),function(s){d(n.node(s))}),f(n.edges(),function(s){var c=n.edge(s);m(c,"x")&&d(c)}),e-=o,t-=u,f(n.nodes(),function(s){var c=n.node(s);c.x-=e,c.y-=t}),f(n.edges(),function(s){var c=n.edge(s);f(c.points,function(h){h.x-=e,h.y-=t}),m(c,"x")&&(c.x-=e),m(c,"y")&&(c.y-=t)}),a.width=r-e+o,a.height=i-t+u}function Wr(n){f(n.edges(),function(e){var r=n.edge(e),t=n.node(e.v),i=n.node(e.w),a,o;r.points?(a=r.points[0],o=r.points[r.points.length-1]):(r.points=[],a=i,o=t),r.points.unshift(rn(t,a)),r.points.push(rn(i,o))})}function jr(n){f(n.edges(),function(e){var r=n.edge(e);if(m(r,"x"))switch((r.labelpos==="l"||r.labelpos==="r")&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset;break}})}function zr(n){f(n.edges(),function(e){var r=n.edge(e);r.reversed&&r.points.reverse()})}function Xr(n){f(n.nodes(),function(e){if(n.children(e).length){var r=n.node(e),t=n.node(r.borderTop),i=n.node(r.borderBottom),a=n.node(P(r.borderLeft)),o=n.node(P(r.borderRight));r.width=Math.abs(o.x-a.x),r.height=Math.abs(i.y-t.y),r.x=a.x+r.width/2,r.y=t.y+r.height/2}}),f(n.nodes(),function(e){n.node(e).dummy==="border"&&n.removeNode(e)})}function Ur(n){f(n.edges(),function(e){if(e.v===e.w){var r=n.node(e.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e,label:n.edge(e)}),n.removeEdge(e)}})}function Hr(n){var e=V(n);f(e,function(r){var t=0;f(r,function(i,a){var o=n.node(i);o.order=a+t,f(o.selfEdges,function(u){C(n,"selfedge",{width:u.label.width,height:u.label.height,rank:o.rank,order:a+ ++t,e:u.e,label:u.label},"_se")}),delete o.selfEdges})})}function Jr(n){f(n.nodes(),function(e){var r=n.node(e);if(r.dummy==="selfedge"){var t=n.node(r.e.v),i=t.x+t.width/2,a=t.y,o=r.x-i,u=t.height/2;n.setEdge(r.e,r.label),n.removeNode(e),r.label.points=[{x:i+2*o/3,y:a-u},{x:i+5*o/6,y:a-u},{x:i+o,y:a},{x:i+5*o/6,y:a+u},{x:i+2*o/3,y:a+u}],r.label.x=r.x,r.label.y=r.y}})}function D(n,e){return F(S(n,e),Number)}function $(n){var e={};return f(n,function(r,t){e[t.toLowerCase()]=r}),e}export{it as l};
