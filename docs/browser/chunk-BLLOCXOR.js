import{a as ne,b as ae,c as ie,d as re,e as oe,f as le,g as ce,h as se,i as de,j as pe,k as me,l as _e,m as ye,n as ue,o as fe,p as Ce,q as ve,r as ge,s as he,t as De,u as Ee,v as Ae,w as Se,x as xe,y as Te}from"./chunk-WFVFVMKD.js";import{b as ee}from"./chunk-TA4B33KA.js";import{a as be,b as Ie}from"./chunk-FAFWVACD.js";import{a as k}from"./chunk-DYZ3K4WC.js";import{e as Q}from"./chunk-EHYA6QV2.js";import{a as Z}from"./chunk-XZ7AJCHR.js";import{h as L,i as X}from"./chunk-VRWHQ3CM.js";import{d as Oe}from"./chunk-KB3GMRUO.js";import{a as te}from"./chunk-S2DW6XOG.js";import{A as z,E as t,Ea as J,Fa as K,Ga as q,Ia as G,L as f,La as M,M as Y,N as o,P as N,S as a,T as l,U as p,Ua as O,V as v,W as g,X as I,Y as $,Z as V,_ as u,a as H,b as B,ba as R,ca as W,ia as h,ja as s,ka as m,la as w,n as A,q as S,r as x,sa as _,ta as F,u as U,v as j,ya as T}from"./chunk-LDCFWZ36.js";var Re=(()=>{let r=class r{constructor(){this.columns=Q,this.dataSource=De,this.activedayInterface=Ee,this.calendarDateInterface=Ae,this.activedayDataSource=Se,this.calendarDateDataSource=xe,this.activedayTypes=Te}};r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=S({type:r,selectors:[["app-calendar-api"]],decls:60,vars:22,consts:[[1,"section-api"],[1,"section-title"],[1,"h3"],[1,""],["highlight-js","","code","import { OCalendarModule } from 'obelisco-angular/calendar';",3,"lang"],[1,"section-selector"],[1,"section-properties","mb-5"],[3,"isScrollable","columns","dataSource","isStriped","isBordered"],[1,"section-type","mb-5"],[1,"section-interface"],["highlight-js","",3,"lang"],[1,"section-properties"],[1,"section-type"],[1,"section-interface","mb-5"]],template:function(c,i){c&1&&(a(0,"section",0)(1,"div",1)(2,"h2",2),s(3," Referencia de API para el componente Calendario de Obelisco "),l(),a(4,"div",3),p(5,"code",4),l()(),a(6,"h2",2),s(7,"Etiqueta"),l(),p(8,"hr"),a(9,"div",5)(10,"p"),s(11,"Selector: "),a(12,"strong"),s(13,"o-calendar"),l()(),a(14,"div",6)(15,"h2",2),s(16,"Propiedades generales"),l(),p(17,"o-table",7),l()(),a(18,"h2",2),s(19,"Tipos de datos"),l(),p(20,"hr"),a(21,"div",8)(22,"h3"),s(23,"CalendarDate"),l(),a(24,"p"),s(25,"Permite establecer los valores de las referencias del mes y a\xF1o."),l(),a(26,"div",9)(27,"div",3)(28,"code",10),s(29),l()(),a(30,"div",11)(31,"h4"),s(32,"Propiedades"),l(),p(33,"o-table",7),l()()(),a(34,"div",12)(35,"h3"),s(36,"ActiveDay"),l(),a(37,"p"),s(38,"Permite establecer los valores de las referencias de los d\xEDas."),l(),a(39,"div",9)(40,"div",3)(41,"code",10),s(42),l()(),a(43,"div",11)(44,"h4"),s(45,"Propiedades"),l(),p(46,"o-table",7),l()()(),p(47,"br"),a(48,"div",12)(49,"h3"),s(50,"ActiveDayTypes"),l(),a(51,"p"),s(52,"Permite establecer los valores de la propiedad "),a(53,"strong"),s(54,"type"),l(),s(55,"."),l(),a(56,"div",13)(57,"div",3)(58,"code",10),s(59),l()()()()()),c&2&&(t(5),o("lang","ts"),t(12),o("isScrollable",!0)("columns",i.columns)("dataSource",i.dataSource)("isStriped",!0)("isBordered",!0),t(11),o("lang","ts"),t(),m(i.calendarDateInterface),t(4),o("isScrollable",!0)("columns",i.columns)("dataSource",i.calendarDateDataSource)("isStriped",!0)("isBordered",!0),t(8),o("lang","ts"),t(),m(i.activedayInterface),t(4),o("isScrollable",!0)("columns",i.columns)("dataSource",i.activedayDataSource)("isStriped",!0)("isBordered",!0),t(12),o("lang","ts"),t(),m(i.activedayTypes))},dependencies:[be,L]});let e=r;return e})();var Me=e=>({day:e}),Pe=()=>[1,2,3,4,5,6,7];function He(e,r){if(e&1&&(a(0,"th")(1,"span"),s(2),l()()),e&2){let d=r.$implicit;t(2),m(d)}}function Be(e,r){e&1&&p(0,"td")}function Ue(e,r){if(e&1&&(v(0),f(1,Be,1,0,"td",10),g()),e&2){let d=u();t(),o("ngForOf",d.emptyDaysArray)}}function je(e,r){e&1&&I(0)}function ze(e,r){if(e&1&&(a(0,"td"),f(1,je,1,0,"ng-container",16),l()),e&2){let d=r.$implicit;u();let n=h(21);t(),o("ngTemplateOutlet",n)("ngTemplateOutletContext",F(2,Me,d))}}function Ye(e,r){e&1&&I(0)}function $e(e,r){if(e&1&&(v(0),f(1,Ye,1,0,"ng-container",16),g()),e&2){let d=u().$implicit;u(2);let n=h(21);t(),o("ngTemplateOutlet",n)("ngTemplateOutletContext",F(2,Me,d))}}function Ve(e,r){e&1&&(v(0),p(1,"span"),g())}function We(e,r){if(e&1&&(v(0),a(1,"td"),f(2,$e,2,4,"ng-container",12)(3,Ve,2,0,"ng-container",12),l(),g()),e&2){let d=r.$implicit;t(2),o("ngIf",d>=0),t(),o("ngIf",d<0)}}function Je(e,r){if(e&1&&(a(0,"tr",11),f(1,We,4,2,"ng-container",10),l()),e&2){let d=r.$implicit;t(),o("ngForOf",d)}}function Ke(e,r){e&1&&(a(0,"td"),p(1,"span"),l())}function qe(e,r){e&1&&(a(0,"tr",11),f(1,Ke,2,0,"td",10),l()),e&2&&(t(),o("ngForOf",_(1,Pe)))}function Ge(e,r){e&1&&I(0)}function Qe(e,r){if(e&1&&(v(0),a(1,"div",19)(2,"div",20)(3,"button",21),p(4,"i",22),a(5,"span",23),s(6,"Referencias"),l()(),a(7,"div",24)(8,"div",25),f(9,Ge,1,0,"ng-container",26),l()()()(),g()),e&2){let d=u(2),n=h(19);t(3),Y("data-target","#collapse"+d.monthsTitles(d.month)),t(4),W("id","collapse",d.monthsTitles(d.month),""),t(2),o("ngTemplateOutlet",n)}}function Xe(e,r){if(e&1&&(a(0,"div",17),f(1,Qe,10,4,"ng-container",18),l()),e&2){let d=u(),n=h(19);t(),o("ngIf",d.isCollapsed)("ngIfElse",n)}}function Ze(e,r){if(e&1&&(a(0,"li")(1,"strong"),s(2),l(),s(3),l()),e&2){let d=r.$implicit,n=u(2);t(2),w(" ",n.typeOfDays(d.day)," "),t(),w(" ",d.title," ")}}function et(e,r){if(e&1&&(a(0,"ul",27),f(1,Ze,4,2,"li",10),l()),e&2){let d=u();t(),o("ngForOf",d.activeDays)}}function tt(e,r){if(e&1){let d=$();a(0,"a",29),V("click",function(c){let i;U(d);let y=u(2).day,C=u();return j(((i=C.getActiveDay(y))==null?null:i.isDisabled)&&c.preventDefault())}),a(1,"span",30),s(2),l()()}if(e&2){let d,n,c,i,y=u(2).day,C=u();N("disabled",(d=C.getActiveDay(y))==null?null:d.isDisabled),R("href",(n=C.getActiveDay(y))==null?null:n.url,z),R("title",(c=C.getActiveDay(y))==null?null:c.title),t(),o("ngClass",C.getClassByType((i=C.getActiveDay(y))==null?null:i.type)),t(),m(y)}}function nt(e,r){if(e&1&&(a(0,"span",31)(1,"span",30),s(2),l()()),e&2){let d,n,c,i=u(2).day,y=u();N("disabled",(d=y.getActiveDay(i))==null?null:d.isDisabled),R("title",(n=y.getActiveDay(i))==null?null:n.title),t(),o("ngClass",y.getClassByType((c=y.getActiveDay(i))==null?null:c.type)),t(),m(i)}}function at(e,r){if(e&1&&(v(0),f(1,tt,3,6,"a",28)(2,nt,3,5,"ng-template",null,3,T),g()),e&2){let d,n=h(3),c=u().day,i=u();t(),o("ngIf",((d=i.getActiveDay(c))==null?null:d.url)!=null)("ngIfElse",n)}}function it(e,r){if(e&1&&(a(0,"span"),s(1),l()),e&2){let d=u().day;t(),m(d)}}function rt(e,r){if(e&1&&f(0,at,4,2,"ng-container",18)(1,it,2,1,"ng-template",null,2,T),e&2){let d=r.day,n=h(2),c=u();o("ngIf",c.isActiveDay(d))("ngIfElse",n)}}var Le=(()=>{let r=class r{getStartDayOfMonth(n,c){let y=new Date(n,c-1,1).getDay();return this.start=y,this.start}get weekDaysArrayRows(){let n=[],i=this.weekDaysArray.length,y=0;for(let E=0;E<i;E+=7)n.push(this.weekDaysArray.slice(E,E+7)),y+=1;let C=n[n.length-1].length;if(C<7){let E=7-C;for(let P=0;P<E;P++)n[n.length-1].push(-1)}return{rows:n,counter:y}}isActiveDay(n){return!!this.analizedActiveDays?.find(c=>c.day===n)}getActiveDay(n){return this.analizedActiveDays?.find(c=>c.day===n)}convertArrayIntoObject(n){let c=n.day;return Array.isArray(c)?c.map(i=>B(H({},n),{day:i})):[n]}generateArrayActiveDays(n){for(let c in n)if(Object.prototype.hasOwnProperty.call(n,c)){let i=n[c];if(typeof i.day=="number")this.analizedActiveDays.push(i);else for(let y of this.convertArrayIntoObject(i))this.analizedActiveDays.push(y)}return this.analizedActiveDays}getClassByType(n){return n==null?"active":n=="secondary"?"active-secondary":`active bg-${n}`}typeOfDays(n){return n?typeof n=="number"?`${n}.`:n.length>2?`${n[0]} al ${n[n.length-1]}.`:`${n[0]}, ${n[n.length-1]}.`:""}constructor(){this.activeDays=[],this.isCollapsed=!1,this.hasList=!0,this.customClasses="",this.month=null,this.year=null,this.start=0,this.MONTH_TITLE=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],this.DAYS_HEADER_TABLE=["D","L","M","M","J","V","S"],this.daysArray=[],this.emptyDaysArray=[],this.firstWeekDays=0,this.firstWeekDaysArray=[],this.weekDaysArray=[],this.analizedActiveDays=[],this.monthAmountOfDays=(n,c)=>typeof n!="number"||n<1||n>12?0:n===4||n===6||n===9||n===11?30:n===2?(c||2024)%4===0?29:28:31,this.monthsTitles=n=>n&&n>=1&&n<=12?this.MONTH_TITLE[n-1]:"Mes inv\xE1lido"}ngOnInit(){this.date&&(this.month=this.date.month,this.year=this.date.year),this.getStartDayOfMonth(this.year,this.month),this.daysArray=Array.from({length:this.monthAmountOfDays(this.month,this.year)},(n,c)=>c+1),this.emptyDaysArray=this.start<7?Array.from({length:this.start},(n,c)=>({key:c})):[],this.firstWeekDays=7-this.start,this.firstWeekDaysArray=this.daysArray.slice(0,this.firstWeekDays),this.weekDaysArray=this.daysArray.slice(this.firstWeekDays),this.activeDays&&this.generateArrayActiveDays(this.activeDays)}};r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=S({type:r,selectors:[["o-calendar"]],inputs:{date:"date",activeDays:"activeDays",isCollapsed:"isCollapsed",hasList:"hasList",customClasses:"customClasses"},decls:22,vars:9,consts:[["calendarList",""],["activeDay",""],["notActive",""],["activeNoLink",""],[1,"calendar",3,"ngClass"],[1,"calendar-header"],[1,"calendar-title"],[1,"calendar-year"],[1,"calendar-body"],[1,"calendar-week-header"],[4,"ngFor","ngForOf"],[1,"calendar-week"],[4,"ngIf"],["class","calendar-week",4,"ngFor","ngForOf"],["class","calendar-week",4,"ngIf"],["class","calendar-footer",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"calendar-footer"],[4,"ngIf","ngIfElse"],[1,"accordion"],[1,"card"],["data-toggle","collapse",1,"card-header","collapsed"],[1,"bx","bx-calendar"],[1,"collapse-title"],[1,"collapse",3,"id"],[1,"card-body"],[4,"ngTemplateOutlet"],[1,"calendar-footer-list"],["class","calendar-link",3,"href","title","disabled","click",4,"ngIf","ngIfElse"],[1,"calendar-link",3,"click","href","title"],[3,"ngClass"],[3,"title"]],template:function(c,i){c&1&&(a(0,"div",4)(1,"div",5)(2,"h2",6),s(3),l(),a(4,"span",7),s(5),l()(),a(6,"div",8)(7,"table")(8,"thead")(9,"tr",9),f(10,He,3,1,"th",10),l()(),a(11,"tbody")(12,"tr",11),f(13,Ue,2,1,"ng-container",12)(14,ze,2,4,"td",10),l(),f(15,Je,2,1,"tr",13)(16,qe,2,2,"tr",14),l()()(),f(17,Xe,2,2,"div",15),l(),f(18,et,2,1,"ng-template",null,0,T)(20,rt,3,2,"ng-template",null,1,T)),c&2&&(o("ngClass",i.customClasses),t(3),m(i.monthsTitles(i.month)),t(2),m(i.year),t(5),o("ngForOf",i.DAYS_HEADER_TABLE),t(3),o("ngIf",i.emptyDaysArray.length!=0),t(),o("ngForOf",i.firstWeekDaysArray),t(),o("ngForOf",i.weekDaysArrayRows.rows),t(),o("ngIf",i.weekDaysArrayRows.counter===4),t(),o("ngIf",i.activeDays&&i.hasList))},dependencies:[J,K,q,G],styles:[".calendar[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .calendar-week[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .calendar-link.disabled[_ngcontent-%COMP%], .calendar[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .calendar-week[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] > span.disabled[_ngcontent-%COMP%]{cursor:not-allowed;pointer-events:none}.calendar[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .calendar-week[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .calendar-link.disabled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .calendar[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .calendar-week[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] > span.disabled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:transparent!important;color:#9eaab8}"]});let e=r;return e})();var D=()=>({month:10,year:2024}),lt=()=>({month:1,year:2024}),ct=()=>({month:2,year:2024}),st=()=>({month:3,year:2024}),dt=()=>({month:4,year:2024}),pt=()=>({month:5,year:2024}),mt=()=>({month:6,year:2024}),_t=()=>({month:7,year:2024}),yt=()=>({month:8,year:2024}),ut=()=>({month:9,year:2024}),ft=()=>({month:11,year:2024}),Ct=()=>({month:12,year:2024}),ke=(()=>{let r=class r{constructor(){this.calendarNoEvents=ne,this.calendarDefault=ae,this.calendarDefaultHtml=ie,this.calendarDefaultTs=re,this.calendarLink=oe,this.calendarLinkHtml=le,this.calendarLinkTs=ce,this.calendarTwoReferences=se,this.calendarTwoReferencesHtml=de,this.calendarTwoReferencesTs=pe,this.calendarCollapse=me,this.calendarCollapseHtml=_e,this.calendarCollapseTs=ye,this.calendarCromaticRef=ue,this.calendarCromaticRefHtml=fe,this.calendarCromaticRefTs=Ce,this.calendarDeck=ve,this.calendarDeckHtml=ge,this.calendarDeckTs=he}};r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=S({type:r,selectors:[["app-calendar-examples"]],decls:81,vars:80,consts:[[1,"section-example"],["title","Sin eventos"],["component","","customClasses","mx-auto",3,"date"],["appClipboard","","component-html","",1,"d-flex","flex-column","align-items-end","p-0"],[1,"btn","btn-sm","btn-outline-tertiary","btn-clipboard","btn-icon"],["highlight-js",""],[1,"font-weight-bold"],["title","Predeterminado",3,"isNavCode"],["component","","customClasses","mx-auto",3,"date","activeDays"],["appClipboard","","component-ts","",1,"d-flex","flex-column","align-items-end","p-0"],["highlight-js","",3,"lang"],["title","Con enlace",3,"isNavCode"],["title","Con 2 referencias",3,"isNavCode"],["title","Con colapsable",3,"isNavCode"],["component","","customClasses","mx-auto",3,"date","activeDays","isCollapsed"],["title","Con referencias crom\xE1ticas",3,"isNavCode"],["title","Disposici\xF3n",3,"isNavCode"],["component","",1,"calendar-deck"],[3,"date","activeDays"]],template:function(c,i){c&1&&(a(0,"section",0)(1,"app-viewer",1),p(2,"o-calendar",2),a(3,"div",3),p(4,"button",4),a(5,"code",5),s(6),l()()(),a(7,"h3",6),s(8,"Con eventos"),l(),a(9,"app-viewer",7),p(10,"o-calendar",8),a(11,"div",3),p(12,"button",4),a(13,"code",5),s(14),l()(),a(15,"div",9),p(16,"button",4),a(17,"code",10),s(18),l()()(),a(19,"app-viewer",11),p(20,"o-calendar",8),a(21,"div",3),p(22,"button",4),a(23,"code",5),s(24),l()(),a(25,"div",9),p(26,"button",4),a(27,"code",10),s(28),l()()(),a(29,"app-viewer",12),p(30,"o-calendar",8),a(31,"div",3),p(32,"button",4),a(33,"code",5),s(34),l()(),a(35,"div",9),p(36,"button",4),a(37,"code",10),s(38),l()()(),a(39,"app-viewer",13),p(40,"o-calendar",14),a(41,"div",3),p(42,"button",4),a(43,"code",5),s(44),l()(),a(45,"div",9),p(46,"button",4),a(47,"code",10),s(48),l()()(),a(49,"app-viewer",15),p(50,"o-calendar",14),a(51,"div",3),p(52,"button",4),a(53,"code",5),s(54),l()(),a(55,"div",9),p(56,"button",4),a(57,"code",10),s(58),l()()(),a(59,"app-viewer",16)(60,"div",17),p(61,"o-calendar",18)(62,"o-calendar",18)(63,"o-calendar",18)(64,"o-calendar",18)(65,"o-calendar",18)(66,"o-calendar",18)(67,"o-calendar",18)(68,"o-calendar",18)(69,"o-calendar",18)(70,"o-calendar",18)(71,"o-calendar",18)(72,"o-calendar",18),l(),a(73,"div",3),p(74,"button",4),a(75,"code",5),s(76),l()(),a(77,"div",9),p(78,"button",4),a(79,"code",10),s(80),l()()()()),c&2&&(t(2),o("date",_(62,D)),t(4),m(i.calendarNoEvents),t(3),o("isNavCode",!0),t(),o("date",_(63,D))("activeDays",i.calendarDefault),t(4),m(i.calendarDefaultHtml),t(3),o("lang","ts"),t(),m(i.calendarDefaultTs),t(),o("isNavCode",!0),t(),o("date",_(64,D))("activeDays",i.calendarLink),t(4),m(i.calendarLinkHtml),t(3),o("lang","ts"),t(),m(i.calendarLinkTs),t(),o("isNavCode",!0),t(),o("date",_(65,D))("activeDays",i.calendarTwoReferences),t(4),m(i.calendarTwoReferencesHtml),t(3),o("lang","ts"),t(),m(i.calendarTwoReferencesTs),t(),o("isNavCode",!0),t(),o("date",_(66,D))("activeDays",i.calendarCollapse)("isCollapsed",!0),t(4),m(i.calendarCollapseHtml),t(3),o("lang","ts"),t(),m(i.calendarCollapseTs),t(),o("isNavCode",!0),t(),o("date",_(67,D))("activeDays",i.calendarCromaticRef)("isCollapsed",!0),t(4),m(i.calendarCromaticRefHtml),t(3),o("lang","ts"),t(),m(i.calendarCromaticRefTs),t(),o("isNavCode",!0),t(2),o("date",_(68,lt))("activeDays",i.calendarDeck.JANUARY),t(),o("date",_(69,ct))("activeDays",i.calendarDeck.FEBRUARY),t(),o("date",_(70,st))("activeDays",i.calendarDeck.MARCH),t(),o("date",_(71,dt))("activeDays",i.calendarDeck.APRIL),t(),o("date",_(72,pt))("activeDays",i.calendarDeck.MAY),t(),o("date",_(73,mt))("activeDays",i.calendarDeck.JUNE),t(),o("date",_(74,_t))("activeDays",i.calendarDeck.JULY),t(),o("date",_(75,yt))("activeDays",i.calendarDeck.AUGUST),t(),o("date",_(76,ut))("activeDays",i.calendarDeck.SEPTEMBER),t(),o("date",_(77,D))("activeDays",i.calendarDeck.OCTOBER),t(),o("date",_(78,ft))("activeDays",i.calendarDeck.NOVEMBER),t(),o("date",_(79,Ct))("activeDays",i.calendarDeck.DECEMBER),t(4),m(i.calendarDeckHtml),t(3),o("lang","ts"),t(),m(i.calendarDeckTs))},dependencies:[k,L,Z,Le],styles:["@media (max-width: 350px){  o-calendar .calendar .calendar-body table{transform:translate(-6%) scale(.92)}}@media (max-width: 315px){  o-calendar .calendar .calendar-body table{transform:translate(-13%) scale(.82)}}@media (max-width: 350px){  .calendar-deck{transform:translate(0) translateY(-445px) scale(.85)}  .calendar-deck o-calendar .calendar .calendar-body table{transform:translate(0) scale(1)}}@media (max-width: 315px){  .calendar-deck{transform:translate(0) translateY(-745px) scale(.75)}}"]});let e=r;return e})();var vt=[{path:"api",component:Re},{path:"examples",component:ke},{path:"**",pathMatch:"full",redirectTo:"api"}],Ne=(()=>{let r=class r{};r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=x({type:r}),r.\u0275inj=A({imports:[O.forChild(vt),O]});let e=r;return e})();var we=(()=>{let r=class r{};r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=x({type:r}),r.\u0275inj=A({imports:[M,O]});let e=r;return e})();var Zt=(()=>{let r=class r{};r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=x({type:r}),r.\u0275inj=A({imports:[M,Ne,Oe,Ie,k,X,te,we,ee]});let e=r;return e})();export{Zt as CalendarModule};
