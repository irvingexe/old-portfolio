(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[3],{21:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return c}))},33:function(e,t,n){},34:function(e,t,n){var r={"./0/1.webp":35,"./3/1.webp":36,"./4/1.webp":37,"./others/4/1.webp":38};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=34},35:function(e,t,n){e.exports=n.p+"static/media/1.a8931a77.webp"},36:function(e,t,n){e.exports=n.p+"static/media/1.1a67b91d.webp"},37:function(e,t,n){e.exports=n.p+"static/media/1.5db6a3e6.webp"},38:function(e,t,n){e.exports=n.p+"static/media/1.8ace2e2e.webp"},39:function(e,t,n){var r={"./0/0.webp":40,"./1/0.webp":41,"./2/0.webp":42,"./3/0.webp":43,"./4/0.webp":44,"./others/3/0.webp":45,"./others/4/0.webp":46};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=39},40:function(e,t,n){e.exports=n.p+"static/media/0.f633fd04.webp"},41:function(e,t,n){e.exports=n.p+"static/media/0.5036176e.webp"},42:function(e,t,n){e.exports=n.p+"static/media/0.bf7d48aa.webp"},43:function(e,t,n){e.exports=n.p+"static/media/0.1a5aa941.webp"},44:function(e,t,n){e.exports=n.p+"static/media/0.6b8f81a6.webp"},45:function(e,t,n){e.exports=n.p+"static/media/0.e77b309d.webp"},46:function(e,t,n){e.exports=n.p+"static/media/0.568ee887.webp"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(21),a=n(0),c=n.n(a),o=(n(33),n(1)),s=n(22),i=n(23);function u(){var e=Object(a.useContext)(o.a),t=e.state,u=e.actions,l=Object(i.a)(),p=Object(a.useRef)(),f={ease:.08,current:0,previous:0,rounded:0},m=Object(a.useRef)([]);Object(a.useEffect)((function(){t.project.isOpened&&(document.body.style.height="".concat(p.current.getBoundingClientRect().height,"px"))}),[l,t.project.isOpened,p.current?p.current.getBoundingClientRect().height:t.project.isOpened]),Object(a.useEffect)((function(){t.project.isOpened?m.current.push(requestAnimationFrame(w)):m.current.map((function(e){cancelAnimationFrame(e)}))}),[t.project.isOpened]);var d,b=function(e){u({type:"setState",payload:Object(r.a)({},t,{cursor:{type:e}})})},h=[],v=Object(a.useRef)([]),w=function e(){if(v.current.length<100){for(var t=performance.now();h.length>0&&h[0]<=t-1e3;)h.shift();h.push(t),d=h.length,f.ease=4.8/d,v.current.push(f.ease)}else 100===v.current.length&&(v.current.push(f.ease),f.ease=(n=v.current,Object.values(n.reduce((function(e,t){return t in e||(e[t]=[0,t]),e[t][0]++,e}),{})).reduce((function(e,t){return t[0]<e[0]?e:t}),[0,null])[1]));var n;f.current=window.scrollY,f.previous+=(f.current-f.previous)*f.ease,f.rounded=Math.round(100*f.previous)/100,p.current.style.transform="translateY(-".concat(f.rounded,"px)"),m.current.push(requestAnimationFrame(e))},O=t.project.id,E=[];for(var j in s[O].role)E.push(c.a.createElement("li",{key:j},s[O].role[j]));var g=[];g.push(c.a.createElement("div",{key:g.length,className:"item"},c.a.createElement("h2",{className:"font-s"},s[O].process[0][0]),c.a.createElement("div",null,s[O].process[0][1]&&c.a.createElement("p",{className:"font-s",dangerouslySetInnerHTML:{__html:s[O].process[0][1]}}))));try{g.push(c.a.createElement("div",{key:g.length,className:"img"},c.a.createElement("img",{className:"undragable unselectable",alt:"",src:n(34)("./".concat(t.project.id,"/1.webp"))})))}catch(y){}return g.push(c.a.createElement("p",{key:g.length,className:"font-m conclution",dangerouslySetInnerHTML:{__html:s[O].process[6][1]}})),c.a.createElement("div",{id:"project"},c.a.createElement("div",null),c.a.createElement("div",{className:"modal",style:{top:t.project.isOpened?0:"100vh"}},c.a.createElement("div",{ref:p,className:"modal-scroll"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",null,c.a.createElement("div",{className:"description"},c.a.createElement("div",{className:"font-xs"},c.a.createElement("h2",{className:"font-s"},"Role"),c.a.createElement("ul",null,E)),c.a.createElement("div",null,c.a.createElement("p",{className:"font-m"},s[O].abstract)),c.a.createElement("div",{className:"img"},c.a.createElement("img",{className:"undragable unselectable",alt:"",src:n(39)("./".concat(t.project.id,"/0.webp"))}))),c.a.createElement("hr",null),c.a.createElement("div",{className:"process"},g)))),s[O].site&&c.a.createElement("a",{className:"site",href:s[O].site,target:"_blank",rel:"noopener noreferrer",onMouseEnter:function(){b("hover arrow")},onMouseLeave:function(){b("default")}},"Visit website")))}}}]);
//# sourceMappingURL=3.cc1a9bc0.chunk.js.map