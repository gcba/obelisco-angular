import{a as U,b as W,c as q,d as $,e as K}from"./chunk-TC2FHQ2M.js";import{a as Y,b as Z}from"./chunk-FAFWVACD.js";import{a as k}from"./chunk-DYZ3K4WC.js";import{e as G}from"./chunk-EHYA6QV2.js";import{a as X}from"./chunk-XZ7AJCHR.js";import{h as O,i as R}from"./chunk-VRWHQ3CM.js";import{d as Q}from"./chunk-KB3GMRUO.js";import{a as J}from"./chunk-S2DW6XOG.js";import{$ as H,E as n,Ea as B,Fa as z,Ga as A,L as w,La as L,M as T,N as o,P as C,S as i,T as r,U as c,Ua as V,V as b,W as I,Y as y,Z as g,_ as d,aa as j,ia as M,ja as m,la as u,n as S,q as h,r as E,u as f,v as _,y as F,ya as N}from"./chunk-LDCFWZ36.js";var ee=(()=>{let e=class e{constructor(){this.dataSourcePaginationProperties=[{name:{data:"@Input() <br/> totalPages: number",customClasses:""},description:{data:"Se utiliza para establecer el n\xFAmero total de p\xE1ginas.",customClasses:""}},{name:{data:"@Input() <br/> ariaLabel: string",customClasses:""},description:{data:"Se utiliza para establecer el texto de la etiqueta aria-label.",customClasses:""}},{name:{data:"@Input() <br/> currentPage: number",customClasses:""},description:{data:"Se utiliza para establecer la p\xE1gina actual. Por defecto es 1.",customClasses:""}},{name:{data:"@Input() <br/> isDiscriptiveType: boolean",customClasses:""},description:{data:"Se utiliza para ocultar los botones de numeraci\xF3n.",customClasses:""}},{name:{data:"@Input() <br /> customClasses: string",customClasses:""},description:{data:"Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.",customClasses:""}}],this.dataSourcePaginationMethods=[{name:{data:"@Output() <br/> currentPageChange: EventEmitter&lt;number&gt;",customClasses:""},description:{data:"Se utiliza para obtener la p\xE1gina actual.",customClasses:""}}],this.columnsPagination=G}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=h({type:e,selectors:[["app-pagination-api"]],decls:22,vars:11,consts:[[1,"section-api"],[1,"section-title"],[1,"h3"],[1,""],["highlight-js","","code","import { OPaginationModule } from 'obelisco-angular/pagination';",3,"lang"],[1,"section-selector"],[1,"section-properties"],[3,"isScrollable","columns","dataSource","isStriped","isBordered"]],template:function(a,l){a&1&&(i(0,"section",0)(1,"div",1)(2,"h2",2),m(3," Referencia de API para el componente Paginacion de Obelisco "),r(),i(4,"div",3),c(5,"code",4),r()(),i(6,"h2",2),m(7,"Etiqueta"),r(),c(8,"hr"),i(9,"div",5)(10,"p"),m(11,"Selector: "),i(12,"strong"),m(13,"o-pagination"),r()(),i(14,"div",6)(15,"h2",2),m(16,"Propiedades"),r(),c(17,"o-table",7),r(),i(18,"div",6)(19,"h2",2),m(20,"M\xE9todos"),r(),c(21,"o-table",7),r()()()),a&2&&(n(5),o("lang","ts"),n(12),o("isScrollable",!0)("columns",l.columnsPagination)("dataSource",l.dataSourcePaginationProperties)("isStriped",!0)("isBordered",!0),n(4),o("isScrollable",!0)("columns",l.columnsPagination)("dataSource",l.dataSourcePaginationMethods)("isStriped",!0)("isBordered",!0))},dependencies:[Y,O]});let t=e;return t})();var pe=["*"];function me(t,e){t&1&&(b(0),i(1,"span",3),m(2,"..."),r(),I())}function ce(t,e){t&1&&(i(0,"a",4),j(1),r())}var D=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=h({type:e,selectors:[["o-pagination-item"]],inputs:{isActive:"isActive",isDisabled:"isDisabled",isNoEvent:"isNoEvent"},ngContentSelectors:pe,decls:4,vars:8,consts:[["showLink",""],[1,"page-item"],[4,"ngIf","ngIfElse"],[1,"page-link"],["href","#",1,"page-link"]],template:function(a,l){if(a&1&&(H(),i(0,"li",1),w(1,me,3,0,"ng-container",2)(2,ce,2,0,"ng-template",null,0,N),r()),a&2){let P=M(3);C("active",l.isActive)("no-events",l.isNoEvent)("disabled",l.isDisabled),n(),o("ngIf",l.isNoEvent)("ngIfElse",P)}},dependencies:[A]});let t=e;return t})();var ie=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=h({type:e,selectors:[["o-pagination-number"]],inputs:{index:"index",current:"current"},decls:2,vars:2,consts:[[3,"isActive"]],template:function(a,l){a&1&&(i(0,"o-pagination-item",0),m(1),r()),a&2&&(o("isActive",l.index===l.current),n(),u(" ",l.index+1,`
`))},dependencies:[D]});let t=e;return t})();function de(t,e){if(t&1){let s=y();b(0),i(1,"o-pagination-number",11),g("click",function(){f(s);let a=d(2);return _(a.selectedPage(0))}),r(),c(2,"o-pagination-item",12),I()}if(t&2){let s=d(2);n(),o("index",0)("current",s.currentPage),n(),o("isDisabled",!0)("isNoEvent",!0)}}function ue(t,e){if(t&1){let s=y();i(0,"o-pagination-number",11),g("click",function(){let a=f(s).$implicit,l=d(2);return _(l.selectedPage(a))}),r()}if(t&2){let s=e.$implicit,p=d(2);o("index",s)("current",p.currentPage)}}function he(t,e){if(t&1){let s=y();b(0),c(1,"o-pagination-item",12),i(2,"o-pagination-number",11),g("click",function(){f(s);let a=d(2);return _(a.selectedPage(a.lastIndex))}),r(),I()}if(t&2){let s=d(2);n(),o("isDisabled",!0)("isNoEvent",!0),n(),o("index",s.lastIndex)("current",s.currentPage)}}function fe(t,e){if(t&1){let s=y();b(0),i(1,"nav",2)(2,"ul",3)(3,"o-pagination-item",4),g("click",function(){f(s);let a=d();return _(a.onPrev())}),c(4,"span",5),i(5,"span",6),m(6,"Anterior"),r()(),w(7,de,3,4,"ng-container",7)(8,ue,1,2,"o-pagination-number",8)(9,he,3,4,"ng-container",7),i(10,"o-pagination-item",4),g("click",function(){f(s);let a=d();return _(a.onNext())}),i(11,"span",9),m(12,"Siguiente"),r(),c(13,"span",10),r()()(),I()}if(t&2){let s=d();n(),o("ngClass",s.customClasses),T("aria-label",s.ariaLabel),n(2),C("hidden",s.getIsFirstPage),n(),T("aria-hidden",!0),n(3),o("ngIf",s.isShowBottomTrimmer),n(),o("ngForOf",s.pagesToShow),n(),o("ngIf",s.isShowTopTrimmer),n(),C("hidden",s.getIsLastPage),n(3),T("aria-hidden",!0)}}function _e(t,e){if(t&1){let s=y();i(0,"div",13)(1,"div",14)(2,"div",15),g("click",function(){f(s);let a=d();return _(a.onPrev())}),i(3,"a",16),c(4,"span",5),i(5,"span",9),m(6,"Anterior"),r()()(),i(7,"div",15),g("click",function(){f(s);let a=d();return _(a.onNext())}),i(8,"a",16)(9,"span",9),m(10,"Siguiente"),r(),c(11,"span",10),r()()()()}if(t&2){let s=d();o("ngClass",s.customClasses),n(2),C("hidden",s.getIsFirstPage),n(2),T("aria-hidden",!0),n(3),C("hidden",s.getIsLastPage),n(4),T("aria-hidden",!0)}}var ne=(()=>{let e=class e{constructor(){this.currentPage=1,this.isDiscriptiveType=!1,this.customClasses="",this.currentPageChange=new F,this.pagesArr=[],this.isShowTopTrimmer=!1,this.isShowBottomTrimmer=!1,this.pagesToShow=[],this.isBlockEvent=!1}get getIsFirstPage(){return this.currentPage===0}get getIsLastPage(){return this.currentPage===this.pagesArr.length-1}ngOnInit(){this.pagesArr=Array.from(Array(this.totalPages).keys()),this.pagesToShow=this.pagesArr,this.lastIndex=this.pagesArr.length-1,this.isShowTopTrimmer=!0,this.selectedPage(this.currentPage-1)}selectedPage(p){this.currentPage!==p&&(this.currentPage=p,this.isBlockEvent||this.currentPageChange.emit(p+1),this.pagesArr.length>2&&(this.currentPage<4?(this.lastIndex=this.pagesArr.length-1,this.pagesToShow=[0,1,2,3,4],this.isShowTopTrimmer=!0,this.isShowBottomTrimmer=!1):this.currentPage>this.lastIndex-4?(this.pagesToShow=this.pagesArr.slice(-5),this.isShowTopTrimmer=!1,this.isShowBottomTrimmer=!0):(this.pagesToShow=this.pagesArr.slice(this.currentPage-1,this.currentPage+2),this.isShowBottomTrimmer=!0,this.isShowTopTrimmer=!0)))}onPrev(){this.isBlockEvent=!0,this.currentPageChange.emit(this.currentPage),this.currentPage>0&&this.selectedPage(this.currentPage-1),this.isBlockEvent=!1}onNext(){this.isBlockEvent=!0,this.currentPage<this.pagesArr.length-1&&this.selectedPage(this.currentPage+1),this.currentPageChange.emit(this.currentPage+1),this.isBlockEvent=!1}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=h({type:e,selectors:[["o-pagination"]],inputs:{totalPages:"totalPages",ariaLabel:"ariaLabel",currentPage:"currentPage",isDiscriptiveType:"isDiscriptiveType",customClasses:"customClasses"},outputs:{currentPageChange:"currentPageChange"},decls:3,vars:2,consts:[["descriptive",""],[4,"ngIf","ngIfElse"],[3,"ngClass"],[1,"pagination"],[3,"click"],[1,"page-previous-icon"],[1,"page-previous-text"],[4,"ngIf"],[3,"index","current","click",4,"ngFor","ngForOf"],[1,"page-next-text"],[1,"page-next-icon"],[3,"click","index","current"],[3,"isDisabled","isNoEvent"],[1,"pagination",3,"ngClass"],[1,"page-navigation"],[1,"page-item",3,"click"],["href","#",1,"btn","page-link"]],template:function(a,l){if(a&1&&w(0,fe,14,11,"ng-container",1)(1,_e,12,7,"ng-template",null,0,N),a&2){let P=M(2);o("ngIf",!l.isDiscriptiveType)("ngIfElse",P)}},dependencies:[B,z,A,ie,D],styles:[".hidden[_ngcontent-%COMP%]{opacity:0}"]});let t=e;return t})();var ae=(()=>{let e=class e{constructor(){this.exampleStartHTML=U,this.exampleMidHTML=W,this.exampleEndHTML=q,this.exampleWithoutNumbersHTML=$,this.exampleTS=K}actualPage(p){console.log(p)}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=h({type:e,selectors:[["app-pagination-examples"]],decls:41,vars:25,consts:[[1,"section-example"],["title","Inicial",3,"isNavCode"],["component","","ariaLabel","Ejemplo de paginaci\xF3n inicial",3,"currentPageChange","totalPages","currentPage"],["appClipboard","","component-html","",1,"d-flex","flex-column","align-items-end","p-0"],[1,"btn","btn-sm","btn-outline-tertiary","btn-clipboard","btn-icon"],["highlight-js",""],["appClipboard","","component-ts","",1,"d-flex","flex-column","align-items-end","p-0"],["highlight-js","",3,"lang"],["title","Central",3,"isNavCode"],["component","","ariaLabel","Ejemplo de paginaci\xF3n central",3,"currentPageChange","totalPages","currentPage"],["title","Final",3,"isNavCode"],["component","","ariaLabel","Ejemplo de paginaci\xF3n final",3,"currentPageChange","totalPages","currentPage"],["title","Descriptivo",3,"isNavCode"],["component","","ariaLabel","Ejemplo de paginaci\xF3n sin numerado",3,"currentPageChange","totalPages","currentPage","isDiscriptiveType"]],template:function(a,l){a&1&&(i(0,"section",0)(1,"app-viewer",1)(2,"o-pagination",2),g("currentPageChange",function(v){return l.actualPage(v)}),r(),i(3,"div",3),c(4,"button",4),i(5,"code",5),m(6),r()(),i(7,"div",6),c(8,"button",4),i(9,"code",7),m(10),r()()(),i(11,"app-viewer",8)(12,"o-pagination",9),g("currentPageChange",function(v){return l.actualPage(v)}),r(),i(13,"div",3),c(14,"button",4),i(15,"code",5),m(16),r()(),i(17,"div",6),c(18,"button",4),i(19,"code",7),m(20),r()()(),i(21,"app-viewer",10)(22,"o-pagination",11),g("currentPageChange",function(v){return l.actualPage(v)}),r(),i(23,"div",3),c(24,"button",4),i(25,"code",5),m(26),r()(),i(27,"div",6),c(28,"button",4),i(29,"code",7),m(30),r()()(),i(31,"app-viewer",12)(32,"o-pagination",13),g("currentPageChange",function(v){return l.actualPage(v)}),r(),i(33,"div",3),c(34,"button",4),i(35,"code",5),m(36),r()(),i(37,"div",6),c(38,"button",4),i(39,"code",7),m(40),r()()()()),a&2&&(n(),o("isNavCode",!0),n(),o("totalPages",10)("currentPage",1),n(4),u(" ",l.exampleStartHTML," "),n(3),o("lang","ts"),n(),u(" ",l.exampleTS," "),n(),o("isNavCode",!0),n(),o("totalPages",10)("currentPage",5),n(4),u(" ",l.exampleMidHTML," "),n(3),o("lang","ts"),n(),u(" ",l.exampleTS," "),n(),o("isNavCode",!0),n(),o("totalPages",10)("currentPage",10),n(4),u(" ",l.exampleEndHTML," "),n(3),o("lang","ts"),n(),u(" ",l.exampleTS," "),n(),o("isNavCode",!0),n(),o("totalPages",10)("currentPage",5)("isDiscriptiveType",!0),n(4),u(" ",l.exampleWithoutNumbersHTML," "),n(3),o("lang","ts"),n(),u(" ",l.exampleTS," "))},dependencies:[k,ne,X,O]});let t=e;return t})();var ve=[{path:"api",component:ee},{path:"examples",component:ae},{path:"**",pathMatch:"full",redirectTo:"api"}],re=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=E({type:e}),e.\u0275inj=S({imports:[V.forChild(ve),V]});let t=e;return t})();var oe=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=E({type:e}),e.\u0275inj=S({imports:[L]});let t=e;return t})();var Ze=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=E({type:e}),e.\u0275inj=S({imports:[L,re,Q,Z,k,oe,R,J]});let t=e;return t})();export{Ze as PaginationModule};
