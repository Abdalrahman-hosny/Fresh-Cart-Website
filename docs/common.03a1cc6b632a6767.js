"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[592],{7913:(f,p,o)=>{o.d(p,{c:()=>i});var s=o(6814),e=o(4769);let i=(()=>{class l{static#e=this.\u0275fac=function(d){return new(d||l)};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["app-footer"]],standalone:!0,features:[e.jDz],decls:13,vars:0,consts:[[1,"bg-main-light","py-4"],[1,"container"],[1,"text-muted"],[1,"d-flex","gap-3"],["type","email","placeholder","Email...",1,"form-control"],[1,"main-btn","flex-shrink-0"],[1,"h6","text-center"]],template:function(d,r){1&d&&(e.TgZ(0,"footer",0)(1,"div",1)(2,"h2"),e._uU(3,"Get The FreshCart App"),e.qZA(),e.TgZ(4,"p",2),e._uU(5,"we will send you a link,open it on your phone to download the app "),e.qZA(),e.TgZ(6,"div",3),e._UZ(7,"input",4),e.TgZ(8,"button",5),e._uU(9,"Share App Link"),e.qZA()(),e._UZ(10,"hr"),e.TgZ(11,"h3",6),e._uU(12,"\xa92024 abdalrahman hosny All Rights Reserved"),e.qZA()()())},dependencies:[s.ez],styles:["[_nghost-%COMP%]{margin-top:auto}"]})}return l})()},8129:(f,p,o)=>{o.d(p,{r:()=>e});var s=o(4769);let e=(()=>{class i{transform(u,c){return u.split("").slice(0,c).join("")}static#e=this.\u0275fac=function(c){return new(c||i)};static#t=this.\u0275pipe=s.Yjl({name:"cuttext",type:i,pure:!0,standalone:!0})}return i})()},9410:(f,p,o)=>{o.d(p,{e:()=>d});class s extends Error{}s.prototype.name="InvalidTokenError";var u=o(4769),c=o(9862);let d=(()=>{class r{constructor(t){this._HttpClient=t,this.baseUrl="https://ecommerce.routemisr.com/api/v1/auth/"}register(t){return this._HttpClient.post(this.baseUrl+"signup",t)}login(t){return this._HttpClient.post(this.baseUrl+"signin",t)}decodeUaser(){const t=localStorage.getItem("etoken");if(null!==t){const n=function l(r,a){if("string"!=typeof r)throw new s("Invalid token specified: must be a string");a||(a={});const t=!0===a.header?0:1,n=r.split(".")[t];if("string"!=typeof n)throw new s(`Invalid token specified: missing part #${t+1}`);let g;try{g=function i(r){let a=r.replace(/-/g,"+").replace(/_/g,"/");switch(a.length%4){case 0:break;case 2:a+="==";break;case 3:a+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function e(r){return decodeURIComponent(atob(r).replace(/(.)/g,(a,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}(a)}catch{return atob(a)}}(n)}catch(h){throw new s(`Invalid token specified: invalid base64 for part #${t+1} (${h.message})`)}try{return JSON.parse(g)}catch(h){throw new s(`Invalid token specified: invalid json for part #${t+1} (${h.message})`)}}(t);this.userInfo=n}}static#e=this.\u0275fac=function(n){return new(n||r)(u.LFG(c.eN))};static#t=this.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);