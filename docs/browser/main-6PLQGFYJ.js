import{a as y}from"./chunk-M6AHCAHI.js";import{b as N}from"./chunk-XS6IF5Y4.js";import{a as M}from"./chunk-4SNGGSXV.js";import"./chunk-LXBKOZT7.js";import{b as A,c as w,d as L}from"./chunk-EHYA6QV2.js";import"./chunk-XZ7AJCHR.js";import{i as I}from"./chunk-VRWHQ3CM.js";import{E as s,F as p,Ga as g,L as b,La as h,Ma as v,N as c,Oa as f,Pa as x,Qa as S,Ra as E,S as e,Sa as O,T as t,Ta as C,U as l,Ua as k,ja as i,q as d,ra as u,sa as m}from"./chunk-LDCFWZ36.js";var V=[{path:"",loadChildren:()=>import("./chunk-UCZAXQR3.js").then(o=>o.HomeModule)},{path:"get-started",component:M,loadChildren:()=>import("./chunk-AOWMJRNX.js").then(o=>o.GetStartedModule)},{path:"components",component:y,loadChildren:()=>import("./chunk-I37ZJ4JI.js").then(o=>o.SectionComponentsModule)},{path:"**",pathMatch:"full",redirectTo:""}];var _={providers:[C(V)]};var F=()=>({exact:!0}),j=()=>({exact:!1});function D(o,a){o&1&&(e(0,"section",45)(1,"nav",46)(2,"ul",47)(3,"li",12)(4,"a",48)(5,"span"),i(6,"obelisco-angular"),t()()(),e(7,"li",12)(8,"a",49)(9,"span"),i(10,"Introducci\xF3n"),t()()(),e(11,"li",12)(12,"a",50)(13,"span"),i(14,"Componentes"),t()()()()()()),o&2&&(s(8),c("routerLinkActiveOptions",m(2,F)),s(4),c("routerLinkActiveOptions",m(3,j)))}var R=(()=>{let a=class a{constructor(n){this.router=n,this.showSection=!1,this.routes=[{title:"Introducci\xF3n",route:"get-started"},{title:"Componentes",route:"components"}],this.componentRoutes=A.concat(w).concat(L)}ngOnInit(){this.router.events.subscribe(n=>{n instanceof f&&(n.url==="/get-started"?document.body.classList.add("scrollable"):document.body.classList.remove("scrollable"))}),this.router.events.subscribe(()=>{let n=["/get-started","/components"];this.showSection=n.some(r=>this.router.url.startsWith(r))})}};a.\u0275fac=function(r){return new(r||a)(p(S))},a.\u0275cmp=d({type:a,selectors:[["app-root"]],standalone:!0,features:[u],decls:77,vars:1,consts:[["role","banner",1,"o-header","navbar"],["href","#main",1,"skip-to-main-content-link"],[1,"container","header-container"],["href","https://gcba.github.io/",1,"navbar-brand"],["src","https://gcba.github.io/Obelisco-V2/images/logo_obelisco.svg","alt","Obelisco",1,"d-none","d-xl-block"],["src","https://gcba.github.io/Obelisco-V2/images/logo_obelisco_mobile.svg","alt","Obelisco",1,"d-xl-none"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarHomeObelisco","aria-controls","navbarHomeObelisco","aria-expanded","false","aria-label","Men\xFA",1,"navbar-toggler"],["id","navbarHomeObelisco",1,"collapse","navbar-collapse"],[1,"navbar-content"],[1,"navbar-sections"],[1,"navbar-sections-title"],[1,"nav","nav-pills","nav-sections"],[1,"nav-item"],["href","https://gcba.github.io/Obelisco-V2/getting-started",1,"nav-link","nav-link-lg"],["href","https://gcba.github.io/Obelisco-V2/components",1,"nav-link","nav-link-lg"],["href","https://gcba.github.io/obelisco-demo/",1,"nav-link","nav-link-lg"],[1,"dropdown"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-dropdown","btn-lg"],[1,"btn-dropdown-text","ellipsis-1"],["aria-label","hidden",1,"material-symbols-rounded","btn-dropdown-icon"],[1,"dropdown-menu"],["href","https://gcba.github.io/Obelisco-V2/documentation",1,"dropdown-item"],[1,"item-text"],["href","https://gcba.github.io/obelisco-v1",1,"dropdown-item"],[1,"fst-italic"],[1,"header-backdrop"],["class","p-2 px-4 bg-dark",4,"ngIf"],[1,"sr-only"],[1,"main-footer"],[1,"container"],[1,"footer-legal-section"],[1,"row","align-items-center"],[1,"col-12","col-md-5","col-xl-4","footer-content-img"],["src","https://gcba.github.io/Obelisco-V2/images/logo-footer-mobile.svg","alt","Logo de Ciudad de Buenos Aires","height","48",1,"d-md-none"],["src","https://gcba.github.io/Obelisco-V2/images/logo-footer.svg","alt","Logo de Ciudad de Buenos Aires","height","40",1,"d-none","d-md-inline"],["src","https://gcba.github.io/Obelisco-V2/images/logo-footer-ba.svg","alt","Logo de Vamos Buenos Aires",1,"img-vamos-ba"],[1,"col-12"],[1,"list-inline"],[1,"list-inline-item"],["href","https://boletinoficial.buenosaires.gob.ar"],["href","https://buenosaires.gob.ar/inicio/terminos-y-condiciones"],["href","https://buenosaires.gob.ar/inicio/privacidad"],["href","https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales"],["href","https://www.buenosaires.gob.ar/gobierno/transparencia"],[1,"footer-license-text"],[1,"p-2","px-4","bg-dark"],["aria-label","Navegaci\xF3n horizontal de librer\xEDa obelisco-angular",1,"custom-nav-sections",2,"width","fit-content","margin-left","auto"],[1,"nav","flex-row","nav-pills","justify-content-center"],["routerLink","/",1,"btn","btn-outline-light"],["routerLinkActive","active","routerLink","/get-started",1,"btn","btn-outline-light",3,"routerLinkActiveOptions"],["routerLinkActive","active","routerLink","/components",1,"btn","btn-outline-light",3,"routerLinkActiveOptions"]],template:function(r,T){r&1&&(e(0,"header",0)(1,"a",1),i(2," Saltar al contenido principal "),t(),e(3,"div",2)(4,"a",3),l(5,"img",4)(6,"img",5),t(),l(7,"button",6),e(8,"div",7)(9,"div",8)(10,"div",9)(11,"nav")(12,"p",10),i(13,"Secciones "),t(),e(14,"ul",11)(15,"li",12)(16,"a",13)(17,"span"),i(18,"Empezar con Obelisco"),t()()(),e(19,"li",12)(20,"a",14)(21,"span"),i(22,"Librer\xEDa"),t()()(),e(23,"li",12)(24,"a",15)(25,"span"),i(26,"Plantillas"),t()()(),e(27,"li",16)(28,"button",17)(29,"span",18),i(30,"Versiones"),t(),e(31,"span",19),i(32," expand_more "),t()(),e(33,"div",20)(34,"a",21)(35,"span",22),i(36,"Obelisco v.2"),t()(),e(37,"a",23)(38,"span",22),i(39,"Obelisco v.1 "),e(40,"span",24),i(41,"(deprecado)"),t()()()()()()()()()()(),l(42,"div",25),t(),b(43,D,15,4,"section",26),l(44,"router-outlet"),e(45,"h2",27),i(46,"Navegaci\xF3n de pie de p\xE1gina"),t(),e(47,"footer",28)(48,"div",29)(49,"section",30)(50,"h3",27),i(51,"Informaci\xF3n gubernamental"),t(),e(52,"div",31)(53,"div",32),l(54,"img",33)(55,"img",34)(56,"img",35),t(),e(57,"div",36)(58,"ul",37)(59,"li",38)(60,"a",39),i(61,"Bolet\xEDn oficial"),t()(),e(62,"li",38)(63,"a",40),i(64,"T\xE9rminos y condiciones"),t()(),e(65,"li",38)(66,"a",41),i(67,"Pol\xEDtica de privacidad"),t()(),e(68,"li",38)(69,"a",42),i(70,"Oficios judiciales"),t()(),e(71,"li",38)(72,"a",43),i(73,"Transparencia"),t()()()()()(),e(74,"section")(75,"div",44),i(76," Los contenidos de buenosaires.gob.ar est\xE1n licenciados bajo Creative Commons Reconocimiento 2.5 Argentina License. "),t()()()()),r&2&&(s(43),c("ngIf",T.showSection))},dependencies:[x,N,I,k,E,O,h,g],styles:[".custom-nav-sections[_ngcontent-%COMP%]   .btn-outline-light.active[_ngcontent-%COMP%]{color:#101e37}"]});let o=a;return o})();v(R,_).catch(o=>console.error(o));
