(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[2],{24:function(e,t,a){e.exports=a.p+"static/media/-1.be0677f5.webp"},25:function(e,t,a){e.exports=a.p+"static/media/-1.6e6d3d61.webp"},27:function(e,t,a){var c={"./0/-1.webp":24,"./0/0.webp":28,"./0/1.webp":41,"./0/2.1.webp":29,"./0/2.webp":42,"./0/3.webp":43,"./1/-1.webp":25,"./1/0.webp":30,"./1/1.1.webp":31,"./1/1.webp":44,"./1/2.1.webp":32,"./1/2.webp":45,"./1/3.webp":46};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=r,e.exports=n,n.id=27},28:function(e,t,a){e.exports=a.p+"static/media/0.e77b309d.webp"},29:function(e,t,a){e.exports=a.p+"static/media/2.1.a3e700a4.webp"},30:function(e,t,a){e.exports=a.p+"static/media/0.71eeb771.webp"},31:function(e,t,a){e.exports=a.p+"static/media/1.1.fab117d9.webp"},32:function(e,t,a){e.exports=a.p+"static/media/2.1.acacfa0a.webp"},40:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/1.e75e75a8.webp"},42:function(e,t,a){e.exports=a.p+"static/media/2.d40e156b.webp"},43:function(e,t,a){e.exports=a.p+"static/media/3.fe82da96.webp"},44:function(e,t,a){e.exports=a.p+"static/media/1.8ace2e2e.webp"},45:function(e,t,a){e.exports=a.p+"static/media/2.4c729b12.webp"},46:function(e,t,a){e.exports=a.p+"static/media/3.c8352a31.webp"},47:function(e,t,a){var c={"./0/2.1.webp":29,"./1/1.1.webp":31,"./1/2.1.webp":32};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=r,e.exports=n,n.id=47},48:function(e,t,a){var c={"./0/0.webp":28,"./1/0.webp":30};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=r,e.exports=n,n.id=48},57:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var c=a(0),n=a.n(c),r=(a(40),a(1)),s=a(23),o=a(22);function i(){var e=Object(c.useContext)(r.a).state,t=Object(o.a)(),i=Object(c.useRef)(),l={ease:.07,current:0,previous:0,rounded:0},p=Object(c.useRef)([]);Object(c.useEffect)((function(){e.project.isOpened&&(document.body.style.height="".concat(i.current.getBoundingClientRect().height,"px"))}),[t,e.project.isOpened,i.current?i.current.getBoundingClientRect().height:e.project.isOpened]),Object(c.useEffect)((function(){e.project.isOpened?p.current.push(requestAnimationFrame(m)):p.current.map((function(e){cancelAnimationFrame(e)}))}),[e.project.isOpened]);var m=function e(){l.current=window.scrollY,l.previous+=(l.current-l.previous)*l.ease,l.rounded=Math.round(100*l.previous)/100,i.current.style.transform="translateY(-".concat(l.rounded,"px)"),document.querySelectorAll(".project .title").forEach((function(e){e.style.transform="scale(max(0.5, ".concat(1-.025*l.rounded/100,"))")})),document.querySelectorAll(".project .mockup").forEach((function(e){e.style.transform="scale(max(0.5, ".concat(1-.05*l.rounded/100,"))")})),p.current.push(requestAnimationFrame(e))},u=e.project.id,d=[];for(var f in s[u].role)d.push(n.a.createElement("li",{key:f},s[u].role[f]));for(var b=[],E=0;E<s[u].process.length-1;E++)switch(E){case 0:case 1:case 5:b.push(n.a.createElement("div",{className:"item",key:E},n.a.createElement("h2",{className:"font-s"},s[u].process[E][0]),n.a.createElement("div",null,n.a.createElement("p",{className:"font-s"},s[u].process[E][1]))));break;case 3:b.push(n.a.createElement("div",{className:"item",key:E},n.a.createElement("h2",{className:"font-s"},s[u].process[E][0]),n.a.createElement("div",null,s[u].process[E][1]&&n.a.createElement("p",{className:"font-s"},s[u].process[E][1]),n.a.createElement("div",{key:"img-".concat(E-1),className:"img"},n.a.createElement("img",{className:"undragable unselectable",alt:"",src:a(27)("./".concat(e.project.id,"/").concat(parseInt(E-1),".webp"))})),s[u].process[E][2]&&n.a.createElement("p",{className:"font-s"},s[u].process[E][2]),n.a.createElement("div",{className:"img"},n.a.createElement("img",{className:"undragable unselectable",alt:"",src:a(47)("./".concat(e.project.id,"/").concat(parseInt(E-1),".1.webp"))})))));break;default:b.push(n.a.createElement("div",{key:E,className:"item"},n.a.createElement("h2",{className:"font-s"},s[u].process[E][0]),n.a.createElement("div",null,s[u].process[E][1]&&n.a.createElement("p",{className:"font-s"},s[u].process[E][1]),n.a.createElement("div",{className:"img"},n.a.createElement("img",{className:"undragable unselectable",alt:"",src:a(27)("./".concat(e.project.id,"/").concat(parseInt(E-1),".webp"))})))))}return b.push(n.a.createElement("p",{key:b.length,className:"font-m conclution"},s[u].process[6][1])),n.a.createElement("div",{id:"project"},n.a.createElement("div",null),n.a.createElement("div",{className:"modal",style:{top:e.project.isOpened?0:"100vh"}},n.a.createElement("div",{ref:i,className:"modal-scroll"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",null,n.a.createElement("div",{className:"description"},n.a.createElement("div",{className:"font-xs"},n.a.createElement("h2",{className:"font-s"},"Role"),n.a.createElement("ul",null,d)),n.a.createElement("div",null,n.a.createElement("p",{className:"font-m"},s[u].abstract)),n.a.createElement("div",{className:"img"},n.a.createElement("img",{className:"undragable unselectable",alt:"",src:a(48)("./".concat(e.project.id,"/0.webp"))}))),n.a.createElement("hr",null),n.a.createElement("div",{className:"process"},b))))))}}}]);
//# sourceMappingURL=2.dbeb382b.chunk.js.map