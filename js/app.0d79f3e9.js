(function(){"use strict";var n={5697:function(n,t,e){var r=e(5130),o=e(6768);function i(n,t,e,r,i,a){const u=(0,o.g2)("GalaxyAnimation"),c=(0,o.g2)("Main");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(u),(0,o.bF)(c)],64)}const a={ref:"container",class:"background-container"};function u(n,t,e,r,i,u){return(0,o.uX)(),(0,o.CE)("div",a,null,512)}e(4114);var c=e(8776),s={name:"GalaxyAnimation",mounted(){const n=new c.Z58,t=new c.ubm(75,window.innerWidth/window.innerHeight,.1,1e3),e=new c.JeP;e.setSize(window.innerWidth,window.innerHeight),this.$refs.container.appendChild(e.domElement);const r=new c.LoY,o=[],i=[],a=new c.Q1f,u=1e3;for(let c=0;c<u;c++){const n=1e3*Math.random()-500,t=1e3*Math.random()-500,e=1e3*Math.random()-500;o.push(n,t,e),a.setRGB(Math.random(),Math.random(),Math.random()),i.push(a.r,a.g,a.b)}r.setAttribute("position",new c.qtW(o,3)),r.setAttribute("color",new c.qtW(i,3));const s=new c.BH$({vertexColors:!0,size:1,transparent:!0,blending:c.EZo}),f=new c.ONl(r,s);n.add(f),t.position.z=100;const d=()=>{requestAnimationFrame(d),f.rotation.x+=.001,f.rotation.y+=.001,e.render(n,t)};d()}},f=e(1241);const d=(0,f.A)(s,[["render",u],["__scopeId","data-v-18ca3358"]]);var l=d;const p={class:"main-container"};function v(n,t,e,r,i,a){return(0,o.uX)(),(0,o.CE)("div",p)}var h={name:"Main"};const m=(0,f.A)(h,[["render",v],["__scopeId","data-v-3e5cd462"]]);var w=m,b={name:"App",components:{GalaxyAnimation:l,Main:w}};const g=(0,f.A)(b,[["render",i]]);var y=g;(0,r.Ef)(y).mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return n[r].call(i.exports,i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<n.length;f++){r=n[f][0],o=n[f][1],i=n[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){n.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==n[t]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(c)var f=c(e)}for(t&&t(r);s<a.length;s++)i=a[s],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(f)},r=self["webpackChunk"]=self["webpackChunk"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[504],(function(){return e(5697)}));r=e.O(r)})();
//# sourceMappingURL=app.0d79f3e9.js.map