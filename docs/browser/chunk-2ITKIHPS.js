import"./chunk-TXV6WNUW.js";import{a as w,b as j}from"./chunk-L7AUYLW6.js";import{a as O,b as M}from"./chunk-TA4B33KA.js";import{b as D}from"./chunk-QWOLZLFD.js";import{a as y}from"./chunk-LXBKOZT7.js";import{b as B}from"./chunk-FAFWVACD.js";import{a as x}from"./chunk-DYZ3K4WC.js";import{a as S}from"./chunk-XZ7AJCHR.js";import{h as f,i as g}from"./chunk-VRWHQ3CM.js";import{a as T}from"./chunk-S2DW6XOG.js";import{E as m,L as E,La as b,N as l,S as t,T as n,U as a,Ua as h,ja as e,ka as u,n as s,q as p,r as c}from"./chunk-LDCFWZ36.js";var k=(()=>{let i=class i{constructor(){this.customExample=`
<o-alert>
  <div *oCustomContent>
    <p>Contenido personalizado</p>
  </div>
</o-alert>`}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=p({type:i,selectors:[["app-custom-content-api"]],decls:57,vars:2,consts:[[1,"section-api"],[1,"section-title"],[1,"h3"],["highlight-js","","code","import { OCustomContentDirective } from 'obelisco-angular/directives'",3,"lang"],[1,"section-selector"],["highlight-js",""],[1,"d-flex","flex-column","flex-md-row"]],template:function(r,C){r&1&&(t(0,"section",0)(1,"div",1)(2,"h2",2),e(3," Referencia de API para la directiva oCustomContent de Obelisco "),n(),t(4,"div"),a(5,"code",3),n()(),a(6,"hr"),t(7,"div",4)(8,"p"),e(9,"Directiva estructural: "),t(10,"strong"),e(11,"*oCustomContent"),n()(),t(12,"p"),e(13," La directiva "),t(14,"code"),e(15,"OCustomContent"),n(),e(16," permite definir contenido personalizado de manera din\xE1mica dentro de los componentes: "),n(),a(17,"br"),t(18,"h2",2),e(19,"Uso:"),n(),t(20,"p"),e(21," Agrega el atributo "),t(22,"code"),e(23,"OCustomContent"),n(),e(24," a la etiqueta HTML. Por ejemplo: "),n(),t(25,"pre"),e(26,"      "),t(27,"code",5),e(28),n(),e(29,`
    `),n(),t(30,"h2",2),e(31,"Reglas y Consideraciones:"),n(),t(32,"ul")(33,"li"),e(34," La directiva "),t(35,"code"),e(36,"OCustomContent"),n(),e(37," debe usarse en elementos que admitan contenido din\xE1mico, como "),t(38,"code"),e(39,"<div>"),n(),e(40,", "),t(41,"code"),e(42,"<ng-container>"),n(),e(43,", etc. "),n(),t(44,"li"),e(45," La directiva debe estar disponible en el m\xF3dulo de Angular donde se utilizar\xE1. Aseg\xFArate de importar y declarar la directiva en el m\xF3dulo correspondiente. "),n()(),a(46,"br"),t(47,"h2",2),e(48,"Componentes con Directiva OCustomContent Integrada:"),n(),t(49,"ul",6)(50,"div")(51,"li"),e(52,"Alerta"),n(),t(53,"li"),e(54,"Banner"),n(),t(55,"li"),e(56,"Bloque de tr\xE1mite"),n()()()()()),r&2&&(m(5),l("lang","ts"),m(23),u(C.customExample))},dependencies:[f]});let o=i;return o})();function z(o,i){o&1&&(t(0,"div",8)(1,"p",9),e(2,"T\xEDtulo personalizado"),n(),t(3,"div",10)(4,"span"),e(5,"Total:"),n(),t(6,"span",11),e(7,"$1000"),n()(),t(8,"o-button",12),e(9,"Bot\xF3n"),n(),a(10,"hr"),t(11,"p"),e(12,"Texto extendido personalizado de bloque de tr\xE1mite."),n(),t(13,"o-button",13),e(14,"Bot\xF3n"),n()()),o&2&&(m(8),l("isExpandable",!0),m(5),l("isOutline",!0)("isExpandable",!0))}var L=(()=>{let i=class i{constructor(){this.oCustomContentHTML=`
<o-block [isBgLight]="true">
  <div *oCustomContent class="p-2">
    <p class="mb-1">T\xEDtulo personalizado</p>
    <div class="d-flex justify-content-between font-weight-bold">
      <span>Total:</span>
      <span class="h3 mb-0">$1000</span>
    </div>
    <o-button [isExpandable]="true" link="#">Bot\xF3n</o-button>
    <hr />
    <p>Texto extendido personalizado de bloque de tr\xE1mite.</p>
    <o-button [isOutline]="true" type="secondary" [isExpandable]="true" link="#">Bot\xF3n</o-button>
  </div>
</o-block>
  `}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=p({type:i,selectors:[["app-custom-content-examples"]],decls:9,vars:2,consts:[[1,"section-example"],["title","Componente Bloque de tr\xE1mite personalizado"],["component","",2,"max-width","340px"],[3,"isBgLight"],["class","p-2",4,"oCustomContent"],["appClipboard","","component-html","",1,"d-flex","flex-column","align-items-end","p-0"],[1,"btn","btn-sm","btn-outline-tertiary","btn-clipboard","btn-icon"],["highlight-js",""],[1,"p-2"],[1,"mb-1"],[1,"d-flex","justify-content-between","font-weight-bold"],[1,"h3","mb-0"],["link","#",3,"isExpandable"],["type","secondary","link","#",3,"isOutline","isExpandable"]],template:function(r,C){r&1&&(t(0,"section",0)(1,"app-viewer",1)(2,"div",2)(3,"o-block",3),E(4,z,15,3,"div",4),n()(),t(5,"div",5),a(6,"button",6),t(7,"code",7),e(8),n()()()()),r&2&&(m(3),l("isBgLight",!0),m(5),u(C.oCustomContentHTML))},dependencies:[x,S,f,y,w,O]});let o=i;return o})();var q=[{path:"api",component:k},{path:"examples",component:L},{path:"**",pathMatch:"full",redirectTo:"api"}],A=(()=>{let i=class i{};i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=c({type:i}),i.\u0275inj=s({imports:[h.forChild(q),h]});let o=i;return o})();var pe=(()=>{let i=class i{};i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=c({type:i}),i.\u0275inj=s({imports:[b,A,B,x,g,T,j,M,D]});let o=i;return o})();export{pe as CustomContentModule};
