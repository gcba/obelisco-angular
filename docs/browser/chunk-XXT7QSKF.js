import{a as $,b as j}from"./chunk-RLEFH6DK.js";import{E as p,Ea as E,F as d,Ga as F,K as v,Ka as N,L as y,La as B,M as C,N as n,O as x,S as a,T as c,U as b,_ as I,c as h,j as o,ja as D,ka as w,n as l,q as S,r as f,wa as m,xa as u,y as g}from"./chunk-LDCFWZ36.js";function T(e,t){if(e&1&&(a(0,"p",3),D(1),c()),e&2){let M=I();p(),w(M.description)}}var A=100,O=0,G=(()=>{let t=class t extends j{constructor(i){super(i),this.progressBarService=i,this.percentage=0,this.aux=0,this.type="primary",this.currentStep=0,this.totalSteps=10,this.customClasses="",this.stopSteps=new g,this.onDestroy$=new h}ngOnInit(){this.progressBarService.getNext.pipe(o(this.onDestroy$)).subscribe(()=>{this.nextStep()}),this.progressBarService.getPrevious.pipe(o(this.onDestroy$)).subscribe(()=>{this.previousStep()}),this.aux=A/this.totalSteps;for(let i=0;i<this.currentStep;i++)this.percentage+=this.aux}previousStep(){if(this.setpsService.isFirstStep.emit(!1),this.currentStep>O&&(this.percentage-=this.aux,this.currentStep--),this.currentStep===0){this.setpsService.isFirstStep.emit(!0);return}}nextStep(){this.setpsService.isFirstStep.emit(!1),this.currentStep<this.totalSteps&&(this.percentage+=this.aux,this.currentStep++),this.currentStep===this.totalSteps&&(this.stopSteps.emit(!0),this.setpsService.stopEmmiter.emit(!0),this.progressBarService.stop())}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}};t.\u0275fac=function(s){return new(s||t)(d($))},t.\u0275cmp=S({type:t,selectors:[["o-progress-bar"]],inputs:{description:"description",type:"type",currentStep:"currentStep",totalSteps:"totalSteps",customClasses:"customClasses"},outputs:{stopSteps:"stopSteps"},features:[v],decls:5,vars:10,consts:[["class","steps",4,"ngIf"],[1,"progress",3,"ngClass"],["role","progressbar",1,"progress-bar",3,"ngClass"],[1,"steps"]],template:function(s,r){s&1&&(y(0,T,2,1,"p",0),a(1,"div",1),b(2,"div",2),m(3,"number"),m(4,"number"),c()),s&2&&(n("ngIf",r.description),p(),n("ngClass",r.customClasses),p(),x("width",u(3,6,r.percentage),"%"),n("ngClass","bg-"+r.type),C("aria-valuenow",u(4,8,r.percentage)))},dependencies:[E,F,N]});let e=t;return e})();var Q=(()=>{let t=class t{};t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=f({type:t}),t.\u0275inj=l({imports:[B]});let e=t;return e})();export{G as a,Q as b};
