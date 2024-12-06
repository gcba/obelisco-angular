import{a as X,b as G,c as W,d as Z,e as $,f as ee,g as te,h as ne,i as ie,j as _,k as O,l as oe}from"./chunk-HFJYX3FY.js";import{a as V,b as Y}from"./chunk-TA4B33KA.js";import{a as J}from"./chunk-LXBKOZT7.js";import{a as ae,b as se}from"./chunk-FAFWVACD.js";import{a as I}from"./chunk-DYZ3K4WC.js";import{e as Q}from"./chunk-EHYA6QV2.js";import{a as q}from"./chunk-XZ7AJCHR.js";import{h as N,i as P}from"./chunk-VRWHQ3CM.js";import{d as re}from"./chunk-KB3GMRUO.js";import{a as K}from"./chunk-S2DW6XOG.js";import{$ as h,E as a,Ea as S,Ga as B,Ia as z,L as b,La as E,N as o,P as R,Q as k,S as n,T as i,U as c,Ua as j,X as L,_ as u,aa as f,ea as M,ga as D,ha as A,ia as F,ja as m,ka as w,la as C,n as x,q as d,r as g,ya as U,z as H}from"./chunk-LDCFWZ36.js";var me=(()=>{let e=class e{constructor(){this.dataSource=X,this.columns=Q,this.bannerButtonHTML=_,this.bannerButtonTS=O,this.dataSourceSections=G,this.bannerSectionsHtml=W}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=d({type:e,selectors:[["app-banner-api"]],decls:44,vars:12,consts:[[1,"section-api"],[1,"section-title"],[1,"h3"],[1,""],["highlight-js","","code","import { OBannerModule } from 'obelisco-angular/banner';",3,"lang"],[1,"section-selector"],[1,"section-properties","mb-5"],[3,"isScrollable","columns","dataSource","isStriped","isBordered"],["component-html",""],["highlight-js",""]],template:function(s,r){s&1&&(n(0,"section",0)(1,"div",1)(2,"h2",2),m(3,"Referencia de API para el componente Banner de Obelisco"),i(),n(4,"div",3),c(5,"code",4),i()(),n(6,"h2",2),m(7,"Etiqueta"),i(),c(8,"hr"),n(9,"div",5)(10,"p"),m(11,"Selector: "),n(12,"strong"),m(13,"o-banner"),i()(),n(14,"div",6)(15,"h2",2),m(16,"Propiedades"),i(),c(17,"o-table",7),i(),n(18,"div",6)(19,"h2",2),m(20,"Secciones b\xE1sicas de Banner"),i(),n(21,"p"),m(22," El componente Banner puede ser utilizado con las propiedades mencionadas previamente. Adem\xE1s, Ngx-obelisco proporciona una serie de secciones predefinidas que pueden incluirse dentro de <o-banner></o-banner>. "),i(),c(23,"o-table",7),i(),n(24,"div",6)(25,"p"),m(26," Tanto "),n(27,"em"),m(28,"o-banner-text"),i(),m(29," como "),n(30,"em"),m(31,"o-banner-actions"),i(),m(32," tienen la propiedad "),n(33,"em")(34,"strong"),m(35,"customClasses"),i(),m(36,": string"),i(),m(37,", la cual permite aplicar clases personalizadas a los mismos. "),i()(),n(38,"div",6)(39,"p"),m(40,"Ejemplo:"),i(),n(41,"div",8)(42,"code",9),m(43),i()()()()()),s&2&&(a(5),o("lang","ts"),a(12),o("isScrollable",!0)("columns",r.columns)("dataSource",r.dataSource)("isStriped",!0)("isBordered",!0),a(6),o("isScrollable",!0)("columns",r.columns)("dataSource",r.dataSourceSections)("isStriped",!0)("isBordered",!0),a(20),C(" ",r.bannerSectionsHtml," "))},dependencies:[ae,N]});let t=e;return t})();var ve=["*"],ce=(()=>{let e=class e{constructor(){this.customClasses=""}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=d({type:e,selectors:[["o-banner-actions"]],inputs:{customClasses:"customClasses"},ngContentSelectors:ve,decls:2,vars:1,consts:[[1,"banner-actions",3,"ngClass"]],template:function(s,r){s&1&&(h(),n(0,"div",0),f(1),i()),s&2&&o("ngClass",r.customClasses)},dependencies:[S]});let t=e;return t})();var ge=["*"];function he(t,e){if(t&1&&c(0,"p",2),t&2){let p=u();o("innerHTML",p.text,H)("ngClass",p.customClasses)}}function Se(t,e){if(t&1&&(n(0,"p",3),f(1),i()),t&2){let p=u();o("ngClass",p.customClasses)}}var le=(()=>{let e=class e{constructor(){this.customClasses=""}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=d({type:e,selectors:[["o-banner-text"]],inputs:{text:"text",customClasses:"customClasses"},ngContentSelectors:ge,decls:3,vars:2,consts:[["children",""],["class","banner-text",3,"innerHTML","ngClass",4,"ngIf","ngIfElse"],[1,"banner-text",3,"innerHTML","ngClass"],[1,"banner-text",3,"ngClass"]],template:function(s,r){if(s&1&&(h(),b(0,he,1,2,"p",1)(1,Se,2,1,"ng-template",null,0,U)),s&2){let T=F(2);o("ngIf",r.text)("ngIfElse",T)}},dependencies:[S,B]});let t=e;return t})();var ye=["children"],Be=[[["o-banner-icon"]],[["o-banner-text"]],[["o-banner-actions"]],"*"],Ee=["o-banner-icon","o-banner-text","o-banner-actions","*"];function Ne(t,e){if(t&1&&c(0,"i"),t&2){let p=u(2);k(p.icon)}}function _e(t,e){if(t&1&&(n(0,"span",8),m(1),i()),t&2){let p=u(2);a(),w(p.icon)}}function Oe(t,e){if(t&1&&c(0,"o-banner-text",9),t&2){let p=u(2);o("text",p.content)}}function Ie(t,e){t&1&&(n(0,"o-banner-actions"),f(1,3),i())}function Me(t,e){if(t&1&&(n(0,"div",3),f(1),b(2,Ne,1,3,"i",4)(3,_e,2,1,"span",5),f(4,1),b(5,Oe,1,1,"o-banner-text",6),f(6,2),b(7,Ie,2,0,"o-banner-actions",7),i()),t&2){let p=u();a(2),o("ngIf",p.icon&&(p.icon==null?null:p.icon.includes("bx"))),a(),o("ngIf",p.icon&&!p.icon.includes("bx")),a(2),o("ngIf",p.content),a(2),o("ngIf",p.children)}}function De(t,e){if(t&1&&L(0,10),t&2){let p=u();o("ngTemplateOutlet",p.oCustomContent.template)}}var de=(()=>{let e=class e{constructor(){this.isDark=!1,this.customClasses=""}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=d({type:e,selectors:[["o-banner"]],contentQueries:function(s,r,T){if(s&1&&(M(T,ye,7),M(T,J,7)),s&2){let y;D(y=A())&&(r.children=y.first),D(y=A())&&(r.oCustomContent=y.first)}},inputs:{isDark:"isDark",content:"content",icon:"icon",customClasses:"customClasses"},ngContentSelectors:Ee,decls:3,vars:5,consts:[[1,"banner",3,"ngClass"],["class","banner-content",4,"ngIf"],[3,"ngTemplateOutlet",4,"ngIf"],[1,"banner-content"],[3,"class",4,"ngIf"],["class","material-symbols-rounded o-icon","aria-hidden","true",4,"ngIf"],[3,"text",4,"ngIf"],[4,"ngIf"],["aria-hidden","true",1,"material-symbols-rounded","o-icon"],[3,"text"],[3,"ngTemplateOutlet"]],template:function(s,r){s&1&&(h(Be),n(0,"div",0),b(1,Me,8,4,"div",1)(2,De,1,1,"ng-container",2),i()),s&2&&(R("banner-dark",r.isDark),o("ngClass",r.customClasses),a(),o("ngIf",!r.oCustomContent),a(),o("ngIf",r.oCustomContent))},dependencies:[S,B,z,ce,le]});let t=e;return t})();var ue=(()=>{let e=class e{constructor(){this.content=Z,this.bannerTypesHTML=$,this.bannerTypesTS=ee,this.textButton=te,this.icon=ne,this.bannerButtonHTML=_,this.bannerButtonTS=O,this.iconCookie=ie,this.bannerButtonsHTML=oe}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=d({type:e,selectors:[["app-banner-examples"]],decls:58,vars:27,consts:[["children",""],[1,"section-example"],["title","Tipos",3,"isNavCode"],["component","",1,"mb-4"],[3,"content"],[3,"content","isDark"],["appClipboard","","component-html","",1,"d-flex","flex-column","align-items-end","p-0"],[1,"btn","btn-sm","btn-outline-tertiary","btn-clipboard","btn-icon"],["highlight-js",""],["appClipboard","","component-ts","",1,"d-flex","flex-column","align-items-end","p-0"],["highlight-js","",3,"lang"],["title","Con Bot\xF3n",3,"isNavCode"],[3,"content","icon"],["size","sm","type","primary","link","#"],[3,"content","icon","isDark"],["title","Con Botones",3,"isNavCode"],["size","sm","type","primary","link","#",3,"isOutline"],["size","sm","type","light","link","#",3,"isOutline"]],template:function(s,r){s&1&&(n(0,"section",1)(1,"app-viewer",2)(2,"div",3),c(3,"o-banner",4)(4,"br")(5,"o-banner",5),i(),n(6,"div",6),c(7,"button",7),n(8,"code",8),m(9),i()(),n(10,"div",9),c(11,"button",7),n(12,"code",10),m(13),i()()(),n(14,"app-viewer",11)(15,"div",3)(16,"o-banner",12)(17,"o-button",13,0),m(19,"Bot\xF3n"),i()(),c(20,"br"),n(21,"o-banner",14)(22,"o-button",13,0),m(24,"Bot\xF3n"),i()()(),n(25,"div",6),c(26,"button",7),n(27,"code",8),m(28),i()(),n(29,"div",9),c(30,"button",7),n(31,"code",10),m(32),i()()(),n(33,"app-viewer",15)(34,"div",3)(35,"o-banner",12)(36,"o-button",13,0),m(38,"Bot\xF3n"),i(),n(39,"o-button",16,0),m(41,"Bot\xF3n"),i()(),c(42,"br"),n(43,"o-banner",14)(44,"o-button",13,0),m(46,"Bot\xF3n"),i(),n(47,"o-button",17,0),m(49,"Bot\xF3n"),i()()(),n(50,"div",6),c(51,"button",7),n(52,"code",8),m(53),i()(),n(54,"div",9),c(55,"button",7),n(56,"code",10),m(57),i()()()()),s&2&&(a(),o("isNavCode",!0),a(2),o("content",r.content),a(2),o("content",r.content)("isDark",!0),a(4),C(" ",r.bannerTypesHTML," "),a(3),o("lang","ts"),a(),C(" ",r.bannerTypesTS," "),a(),o("isNavCode",!0),a(2),o("content",r.textButton)("icon",r.icon),a(5),o("content",r.textButton)("icon",r.icon)("isDark",!0),a(7),C(" ",r.bannerButtonHTML," "),a(3),o("lang","ts"),a(),C(" ",r.bannerButtonTS," "),a(),o("isNavCode",!0),a(2),o("content",r.textButton)("icon",r.iconCookie),a(4),o("isOutline",!0),a(4),o("content",r.textButton)("icon",r.iconCookie)("isDark",!0),a(4),o("isOutline",!0),a(6),C(" ",r.bannerButtonsHTML," "),a(3),o("lang","ts"),a(),C(" ",r.bannerButtonTS," "))},dependencies:[I,N,q,de,V]});let t=e;return t})();var je=[{path:"api",component:me},{path:"examples",component:ue},{path:"**",pathMatch:"full",redirectTo:"api"}],fe=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=g({type:e}),e.\u0275inj=x({imports:[j.forChild(je),j]});let t=e;return t})();var Ce=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=g({type:e}),e.\u0275inj=x({imports:[E]});let t=e;return t})();var ut=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=g({type:e}),e.\u0275inj=x({imports:[E,fe,re,se,I,P,Ce,K,Y]});let t=e;return t})();export{ut as BannerModule};
