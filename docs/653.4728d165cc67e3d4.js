"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[653],{3653:(O,M,c)=>{c.r(M),c.d(M,{MovieModule:()=>ot});var n=c(6814),d=c(8978),p=c(5900),h=c(8543),m=c(1451),C=c(4664),t=c(9468),x=c(6593),T=c(1099),o=c(7091),g=c(554),u=c(6992),A=c(9891);const w=function(i){return["/person",i]};function Z(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"div",4)(2,"div",5)(3,"a",6),t._UZ(4,"img",7),t.qZA()(),t.TgZ(5,"h5")(6,"a",6),t._uU(7),t.qZA()(),t.TgZ(8,"h6"),t._uU(9),t.qZA()(),t.BQk()),2&i){const e=t.oxw().$implicit;t.xp6(3),t.Q6J("routerLink",t.VKq(6,w,e.id)),t.xp6(1),t.Q6J("src",e.profile_path?"https://image.tmdb.org/t/p/w185/"+e.profile_path:"https://placehold.co/200x300?text=NO+PHOTO",t.LSH)("alt",e.name),t.xp6(2),t.Q6J("routerLink",t.VKq(8,w,e.id)),t.xp6(1),t.hij(" ",e.name," "),t.xp6(2),t.hij(" ",e.title," ")}}function a(i,l){if(1&i&&(t.TgZ(0,"div",2),t.YNc(1,Z,10,10,"ng-container",3),t.qZA()),2&i){const e=l.index,r=t.oxw();t.xp6(1),t.Q6J("ngIf",e<r.limit||r.displayAll)}}let f=(()=>{class i{constructor(){this.displayAll=!1,this.limit=6}trackById(e,r){return r.id}static#t=this.\u0275fac=function(r){return new(r||i)};static#n=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-person-list"]],inputs:{displayAll:"displayAll",limit:"limit",people:"people"},decls:2,vars:2,consts:[[1,"clr-row"],["class","clr-col-6 clr-col-lg-4 clr-col-xl-2",4,"ngFor","ngForOf","ngForTrackBy"],[1,"clr-col-6","clr-col-lg-4","clr-col-xl-2"],[4,"ngIf"],[1,"person-list-item"],[1,"person-list-image"],[3,"routerLink"],[3,"src","alt"]],template:function(r,_){1&r&&(t.TgZ(0,"div",0),t.YNc(1,a,2,1,"div",1),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngForOf",_.people)("ngForTrackBy",_.trackById))},dependencies:[n.sg,n.O5,m.rH],styles:[".person-list-item[_ngcontent-%COMP%]{margin-bottom:1rem}.person-list-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(120%);transform:scale(1.125)}.person-list-item[_ngcontent-%COMP%]   .person-list-image[_ngcontent-%COMP%]{overflow:hidden}.person-list-item[_ngcontent-%COMP%]   .person-list-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;max-width:100%;transition:all .5s ease}.person-list-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:.5rem}.person-list-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-top:0}"]})}return i})();const s=function(){return[]};function v(i,l){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"a",21),t.NdJ("click",function(){t.CHM(e);const _=t.oxw().ngIf,y=t.oxw();return t.KtG(y.getRating(_.rating))}),t._uU(2),t.qZA(),t._uU(3," \u2022 "),t.BQk()}if(2&i){const e=t.oxw().ngIf;t.xp6(1),t.Q6J("routerLink",t.DdM(2,s)),t.xp6(1),t.Oqu(e.rating)}}function I(i,l){if(1&i&&(t.ynx(0),t._uU(1),t.ALo(2,"date"),t.BQk()),2&i){const e=t.oxw().ngIf;t.xp6(1),t.hij(" ",t.xi3(2,1,e.release_date,"longDate")," ")}}const k=function(i){return["/genre",i]};function P(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"a",23),t._uU(2),t.qZA(),t._uU(3),t.BQk()),2&i){const e=l.$implicit,r=l.last;t.xp6(1),t.Q6J("routerLink",t.VKq(3,k,e.id)),t.xp6(1),t.Oqu(e.name),t.xp6(1),t.hij("",r?"":", "," ")}}function U(i,l){if(1&i&&(t.ynx(0),t._uU(1," \u2022 "),t.YNc(2,P,4,5,"ng-container",22),t.BQk()),2&i){const e=t.oxw().ngIf;t.xp6(2),t.Q6J("ngForOf",e.genres)}}function b(i,l){if(1&i&&(t.ynx(0),t._uU(1),t.BQk()),2&i){const e=t.oxw().ngIf,r=t.oxw();t.xp6(1),t.hij(" \u2022 ",r.convertRuntime(e.runtime)," ")}}function Q(i,l){if(1&i&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&i){const e=t.oxw().ngIf;t.xp6(1),t.Oqu(e.tagline)}}function J(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"h2"),t._uU(2,"Overview"),t.qZA(),t._uU(3),t.BQk()),2&i){const e=t.oxw().ngIf;t.xp6(3),t.hij(" ",e.overview," ")}}const B=function(i){return["/collection",i]};function L(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2),t.TgZ(3,"a",23),t._uU(4),t.qZA(),t._uU(5,"."),t.qZA(),t.BQk()),2&i){const e=t.oxw().ngIf;t.xp6(2),t.hij("",e.title," is part of the "),t.xp6(1),t.Q6J("routerLink",t.VKq(3,B,e.belongs_to_collection.id)),t.xp6(1),t.Oqu(e.belongs_to_collection.name)}}function E(i,l){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"p")(2,"button",20),t.NdJ("click",function(){t.CHM(e);const _=t.oxw(2);return t.KtG(_.youtubeTrailerOpen=!0)}),t._uU(3,"Watch Trailer"),t.qZA()(),t.BQk()}}function N(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){t.CHM(e);const _=t.oxw(3);return t.KtG(_.viewAllCast())}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw(3);t.xp6(1),t.hij("View ",e.displayAllCast?"Less":"All","")}}function Y(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"h2"),t._uU(2,"Cast "),t.YNc(3,N,2,1,"button",24),t.qZA(),t._UZ(4,"app-person-list",25),t.BQk()),2&i){const e=t.oxw().ngIf,r=t.oxw();t.xp6(3),t.Q6J("ngIf",e.credits.cast.length>r.limit),t.xp6(1),t.Q6J("displayAll",r.displayAllCast)("limit",r.limit)("people",e.credits.cast)}}function F(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){t.CHM(e);const _=t.oxw(3);return t.KtG(_.viewAllCrew())}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw(3);t.xp6(1),t.hij("View ",e.displayAllCrew?"Less":"All","")}}function q(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"h2"),t._uU(2,"Crew "),t.YNc(3,F,2,1,"button",24),t.qZA(),t._UZ(4,"app-person-list",25),t.BQk()),2&i){const e=t.oxw().ngIf,r=t.oxw();t.xp6(3),t.Q6J("ngIf",e.credits.crew.length>r.limit),t.xp6(1),t.Q6J("displayAll",r.displayAllCrew)("limit",r.limit)("people",e.credits.crew)}}function K(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"h2"),t._uU(2,"Similar Movies"),t.qZA(),t._UZ(3,"app-movie-list",27),t.BQk()),2&i){const e=t.oxw().ngIf;t.xp6(3),t.Q6J("movies",e.similar.results)}}function D(i,l){if(1&i&&(t.TgZ(0,"div",28)(1,"h3"),t._uU(2,"Links"),t.qZA(),t._UZ(3,"app-links",29),t.qZA()),2&i){const e=t.oxw().ngIf;t.xp6(3),t.Q6J("homepage",e.homepage)("externalIds",e.external_ids)}}function S(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"h3"),t._uU(2,"Status"),t.qZA(),t._uU(3),t.BQk()),2&i){const e=t.oxw().ngIf;t.xp6(3),t.hij(" ",e.status," ")}}function $(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"h3"),t._uU(2,"Budget"),t.qZA(),t._uU(3),t.ALo(4,"currency"),t.BQk()),2&i){const e=t.oxw().ngIf;t.xp6(3),t.hij(" ",t.lcZ(4,1,e.budget)," ")}}function j(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"h3"),t._uU(2,"Revenue"),t.qZA(),t._uU(3),t.ALo(4,"currency"),t.BQk()),2&i){const e=t.oxw().ngIf;t.xp6(3),t.hij(" ",t.lcZ(4,1,e.revenue)," ")}}const R=function(i){return["/keyword",i]};function H(i,l){if(1&i&&(t.TgZ(0,"a",23)(1,"span",31),t._uU(2),t.qZA()()),2&i){const e=l.$implicit;t.Q6J("routerLink",t.VKq(2,R,e.id)),t.xp6(2),t.Oqu(e.name)}}function W(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"h3"),t._uU(2,"Keywords"),t.qZA(),t.YNc(3,H,3,4,"a",30),t.BQk()),2&i){const e=t.oxw().ngIf;t.xp6(3),t.Q6J("ngForOf",e.keywords)}}function V(i,l){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"clr-modal",32),t.NdJ("clrModalOpenChange",function(_){t.CHM(e);const y=t.oxw(2);return t.KtG(y.ratingModalOpen=_)}),t.TgZ(2,"h3",16),t._uU(3),t.qZA(),t.TgZ(4,"div",17)(5,"p"),t._uU(6),t.qZA()(),t.TgZ(7,"div",19)(8,"button",20),t.NdJ("click",function(){t.CHM(e);const _=t.oxw(2);return t.KtG(_.ratingModalOpen=!1)}),t._uU(9,"Close"),t.qZA()()(),t.BQk()}if(2&i){const e=l.ngIf,r=t.oxw(2);t.xp6(1),t.Q6J("clrModalOpen",r.ratingModalOpen),t.xp6(2),t.Oqu(e.certification),t.xp6(3),t.Oqu(e.meaning)}}const z=function(i){return{"background-image":i,"background-position":"center center","background-repeat":"no-repeat","background-size":"cover"}};function G(i,l){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6),t._UZ(6,"img",7),t.qZA(),t.TgZ(7,"div",8)(8,"div",9)(9,"h1"),t._uU(10),t.qZA(),t.YNc(11,v,4,3,"ng-container",10),t.YNc(12,I,3,4,"ng-container",10),t.YNc(13,U,3,1,"ng-container",10),t.YNc(14,b,2,1,"ng-container",10),t.YNc(15,Q,2,1,"p",10),t.YNc(16,J,4,1,"ng-container",10),t.YNc(17,L,6,5,"ng-container",10),t.YNc(18,E,4,0,"ng-container",10),t.qZA()()()()()(),t.TgZ(19,"div",4)(20,"div",11)(21,"div",12),t.YNc(22,Y,5,4,"ng-container",10),t.YNc(23,q,5,4,"ng-container",10),t.YNc(24,K,4,1,"ng-container",10),t.qZA(),t.TgZ(25,"div",13),t.YNc(26,D,4,2,"div",14),t.YNc(27,S,4,1,"ng-container",10),t.YNc(28,$,5,3,"ng-container",10),t.YNc(29,j,5,3,"ng-container",10),t.YNc(30,W,4,1,"ng-container",10),t.qZA()()(),t.YNc(31,V,10,3,"ng-container",10),t.ALo(32,"async"),t.TgZ(33,"clr-modal",15),t.NdJ("clrModalOpenChange",function(_){t.CHM(e);const y=t.oxw();return t.KtG(y.youtubeTrailerOpen=_)}),t.TgZ(34,"h3",16),t._uU(35),t.qZA(),t.TgZ(36,"div",17),t._UZ(37,"iframe",18),t.qZA(),t.TgZ(38,"div",19)(39,"button",20),t.NdJ("click",function(){t.CHM(e);const _=t.oxw();return t.KtG(_.youtubeTrailerOpen=!1)}),t._uU(40,"Close"),t.qZA()()(),t.BQk()}if(2&i){const e=l.ngIf,r=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.VKq(27,z,e.backdrop_path?"url(https://image.tmdb.org/t/p/w1280/"+e.backdrop_path+")":"")),t.xp6(5),t.Q6J("src",e.poster_path?"https://image.tmdb.org/t/p/w342/"+e.poster_path:"https://placehold.co/400?text=NO+IMAGE",t.LSH)("alt",e.title),t.xp6(4),t.Oqu(e.title),t.xp6(1),t.Q6J("ngIf",e.rating),t.xp6(1),t.Q6J("ngIf",e.release_date),t.xp6(1),t.Q6J("ngIf",e.genres.length>0),t.xp6(1),t.Q6J("ngIf",e.runtime),t.xp6(1),t.Q6J("ngIf",e.tagline),t.xp6(1),t.Q6J("ngIf",e.overview),t.xp6(1),t.Q6J("ngIf",e.belongs_to_collection),t.xp6(1),t.Q6J("ngIf",e.youtubeTrailerId),t.xp6(4),t.Q6J("ngIf",e.credits.cast.length>0),t.xp6(1),t.Q6J("ngIf",e.credits.crew.length>0),t.xp6(1),t.Q6J("ngIf",e.similar.results.length>0),t.xp6(2),t.Q6J("ngIf",e.homepage||e.external_ids.facebook_id||e.external_ids.instagram_id||e.external_ids.twitter_id),t.xp6(1),t.Q6J("ngIf",e.status),t.xp6(1),t.Q6J("ngIf",e.budget&&e.budget>0),t.xp6(1),t.Q6J("ngIf",e.revenue&&e.revenue>0),t.xp6(1),t.Q6J("ngIf",e.keywords.length>0),t.xp6(1),t.Q6J("ngIf",t.lcZ(32,25,r.rating$)),t.xp6(2),t.Q6J("clrModalOpen",r.youtubeTrailerOpen)("clrModalSize","lg"),t.xp6(2),t.hij("",e.title," Trailer"),t.xp6(2),t.Q6J("src",r.sanitizeYouTubeUrl(e.youtubeTrailerId),t.uOi)}}function X(i,l){1&i&&t._UZ(0,"app-loading")}const tt=[{path:":id",component:(()=>{class i{constructor(e,r,_,y){this.domSanitizer=e,this.moviesSvc=r,this.ratingsSvc=_,this.route=y,this.displayAllCast=!1,this.displayAllCrew=!1,this.limit=6,this.ratingModalOpen=!1,this.youtubeTrailerOpen=!1}ngOnInit(){this.movie$=this.route.paramMap.pipe((0,C.w)(e=>this.moviesSvc.getMovie(+e.get("id"))))}convertRuntime(e){if(0===e)return"";const r=Math.floor(e/60),_=Math.floor(e%60);return`${r>0?r+"h":""} ${_>0?_+"m":""}`}getRating(e){this.ratingModalOpen=!0,this.rating$=this.ratingsSvc.getRating(e)}viewAllCast(){this.displayAllCast=!this.displayAllCast}viewAllCrew(){this.displayAllCrew=!this.displayAllCrew}sanitizeYouTubeUrl(e){return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${e}?controls=0`)}static#t=this.\u0275fac=function(r){return new(r||i)(t.Y36(x.H7),t.Y36(T.I),t.Y36(o.w),t.Y36(m.gz))};static#n=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-movie"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["loading",""],["id","backdrop",3,"ngStyle"],["id","backdropMask"],[1,"container"],[1,"clr-row","clr-align-items-center","clr-justify-content-center"],[1,"clr-col-sm-12","clr-col-md-3"],["id","moviePoster",3,"src","alt"],[1,"clr-col-sm-12","clr-col-md-8"],["id","contentMask"],[4,"ngIf"],[1,"clr-row"],[1,"clr-col-sm-12","clr-col-md-10"],[1,"clr-col-sm-12","clr-col-md-2"],["id","externalIds",4,"ngIf"],[3,"clrModalOpen","clrModalSize","clrModalOpenChange"],[1,"modal-title"],[1,"modal-body"],["width","100%","height","315","title","YouTube Video Player","frameborder","0","allow","accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",2,"display","block","margin","0 auto",3,"src"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"],[1,"rating",3,"routerLink","click"],[4,"ngFor","ngForOf"],[3,"routerLink"],["type","button","class","btn btn-sm",3,"click",4,"ngIf"],[3,"displayAll","limit","people"],["type","button",1,"btn","btn-sm",3,"click"],["layout","list",3,"movies"],["id","externalIds"],[3,"homepage","externalIds"],[3,"routerLink",4,"ngFor","ngForOf"],[1,"label"],[3,"clrModalOpen","clrModalOpenChange"]],template:function(r,_){if(1&r&&(t.YNc(0,G,41,29,"ng-container",0),t.ALo(1,"async"),t.YNc(2,X,1,0,"ng-template",null,1,t.W1O)),2&r){const y=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,_.movie$))("ngIfElse",y)}},dependencies:[n.sg,n.O5,n.PC,d.qAN,d.VLi,g.Z,u.N,A.O,f,m.rH,n.Ov,n.H9,n.uU],styles:["img[_ngcontent-%COMP%]{border-radius:.25rem;height:auto;max-width:100%}#backdrop[_ngcontent-%COMP%]{margin-top:-1.2rem;margin-right:-1.2rem;margin-left:-1.2rem}#backdropMask[_ngcontent-%COMP%]{background-color:#000c;padding-bottom:1.2rem}#contentMask[_ngcontent-%COMP%]{background-color:#000c;border-radius:.25rem;color:#fff;padding:1.2rem}#contentMask[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #contentMask[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #contentMask[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}#contentMask[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0}#contentMask[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0072a3}#externalIds[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:.25rem}#moviePoster[_ngcontent-%COMP%]{margin-bottom:1.2rem;margin-top:1.2rem}.rating[_ngcontent-%COMP%]{border:1px solid #fff;border-radius:.25rem;padding:.125rem .25rem}"]})}return i})(),title:"View Movie"},{path:"",pathMatch:"full",redirectTo:"/home"}];let nt=(()=>{class i{static#t=this.\u0275fac=function(r){return new(r||i)};static#n=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(tt),m.Bz]})}return i})();var et=c(3477);let it=(()=>{class i{static#t=this.\u0275fac=function(r){return new(r||i)};static#n=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[n.ez,m.Bz]})}return i})(),ot=(()=>{class i{static#t=this.\u0275fac=function(r){return new(r||i)};static#n=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[n.ez,d.K6A,p.G,h.I,et.H,it,nt]})}return i})()},8543:(O,M,c)=>{c.d(M,{I:()=>p});var n=c(6814),d=c(9468);let p=(()=>{class h{static#t=this.\u0275fac=function(t){return new(t||h)};static#n=this.\u0275mod=d.oAB({type:h});static#e=this.\u0275inj=d.cJS({imports:[n.ez]})}return h})()},9891:(O,M,c)=>{c.d(M,{O:()=>Z});var n=c(9468),d=c(6814),p=c(1451);function h(a,f){1&a&&n.GkF(0)}function m(a,f){1&a&&(n.ynx(0),n.TgZ(1,"p"),n._uU(2,"No movies found."),n.qZA(),n.BQk())}const C=function(a){return["/movie",a]};function t(a,f){if(1&a&&(n.ynx(0),n.TgZ(1,"div",8)(2,"div",9)(3,"a",10),n._UZ(4,"img",11),n.qZA()(),n.TgZ(5,"h5")(6,"a",10),n._uU(7),n.qZA()()(),n.BQk()),2&a){const s=n.oxw().$implicit;n.xp6(3),n.Q6J("routerLink",n.VKq(5,C,s.id)),n.xp6(1),n.Q6J("src",s.poster_path?"https://image.tmdb.org/t/p/w500/"+s.poster_path:"https://placehold.co/500?text=NO+IMAGE",n.LSH)("alt",s.title),n.xp6(2),n.Q6J("routerLink",n.VKq(7,C,s.id)),n.xp6(1),n.hij(" ",s.title," ")}}function x(a,f){if(1&a&&(n.TgZ(0,"div",7),n.YNc(1,t,8,9,"ng-container",3),n.qZA()),2&a){const s=f.index,v=n.oxw(3);n.xp6(1),n.Q6J("ngIf",s<v.limit||v.displayAll)}}function T(a,f){if(1&a&&(n.TgZ(0,"div",5),n.YNc(1,x,2,1,"div",6),n.qZA()),2&a){const s=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",s.movies)("ngForTrackBy",s.trackById)}}function o(a,f){if(1&a&&(n.YNc(0,m,3,0,"ng-container",3),n.YNc(1,T,2,2,"div",4)),2&a){const s=n.oxw();n.Q6J("ngIf",0===s.movies.length),n.xp6(1),n.Q6J("ngIf",s.movies.length>0)}}function g(a,f){1&a&&(n.ynx(0),n.TgZ(1,"p"),n._uU(2,"No movies found."),n.qZA(),n.BQk())}function u(a,f){if(1&a&&(n.ynx(0),n.TgZ(1,"div",13)(2,"div",14)(3,"div",9)(4,"a",10),n._UZ(5,"img",11),n.qZA()()(),n.TgZ(6,"div",15)(7,"h5")(8,"a",10),n._uU(9),n.qZA()(),n.TgZ(10,"h6"),n._uU(11),n.ALo(12,"date"),n.qZA(),n._uU(13),n.qZA()(),n.BQk()),2&a){const s=n.oxw().$implicit;n.xp6(4),n.Q6J("routerLink",n.VKq(10,C,s.id)),n.xp6(1),n.Q6J("src",s.poster_path?"https://image.tmdb.org/t/p/w185/"+s.poster_path:"https://placehold.co/185?text=NO+IMAGE",n.LSH)("alt",s.title),n.xp6(3),n.Q6J("routerLink",n.VKq(12,C,s.id)),n.xp6(1),n.hij(" ",s.title," "),n.xp6(2),n.hij(" ",n.xi3(12,7,s.release_date,"longDate")," "),n.xp6(2),n.hij(" ",s.overview," ")}}function A(a,f){if(1&a&&(n.ynx(0),n.YNc(1,u,14,14,"ng-container",3),n.BQk()),2&a){const s=f.index,v=n.oxw(2);n.xp6(1),n.Q6J("ngIf",s<v.limit||v.displayAll)}}function w(a,f){if(1&a&&(n.YNc(0,g,3,0,"ng-container",3),n.YNc(1,A,2,1,"ng-container",12)),2&a){const s=n.oxw();n.Q6J("ngIf",0===s.movies.length),n.xp6(1),n.Q6J("ngForOf",s.movies)("ngForTrackBy",s.trackById)}}let Z=(()=>{class a{constructor(){this.displayAll=!1,this.layout="grid",this.limit=6}trackById(s,v){return v.id}static#t=this.\u0275fac=function(v){return new(v||a)};static#n=this.\u0275cmp=n.Xpm({type:a,selectors:[["app-movie-list"]],inputs:{displayAll:"displayAll",layout:"layout",limit:"limit",movies:"movies"},features:[n._Bn([{provide:Window,useValue:window}])],decls:5,vars:3,consts:[[4,"ngIf","ngIfThen","ngIfElse"],["grid",""],["list",""],[4,"ngIf"],["class","clr-row",4,"ngIf"],[1,"clr-row"],["class","clr-col-6 clr-col-lg-4 clr-col-xl-2",4,"ngFor","ngForOf","ngForTrackBy"],[1,"clr-col-6","clr-col-lg-4","clr-col-xl-2"],[1,"movie-list-item"],[1,"movie-list-image"],[3,"routerLink"],[3,"src","alt"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"clr-row","movie-list-item"],[1,"clr-col-sm-12","clr-col-md-2","clr-col-lg-1"],[1,"clr-col-sm-12","clr-col-md-10","clr-col-lg-11"]],template:function(v,I){if(1&v&&(n.YNc(0,h,1,0,"ng-container",0),n.YNc(1,o,2,2,"ng-template",null,1,n.W1O),n.YNc(3,w,2,3,"ng-template",null,2,n.W1O)),2&v){const k=n.MAs(2),P=n.MAs(4);n.Q6J("ngIf","grid"===I.layout)("ngIfThen",k)("ngIfElse",P)}},dependencies:[d.sg,d.O5,p.rH,d.uU],styles:[".movie-list-item[_ngcontent-%COMP%]{margin-bottom:1rem}.movie-list-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(120%);transform:scale(1.125)}.movie-list-item[_ngcontent-%COMP%]   .movie-list-image[_ngcontent-%COMP%]{overflow:hidden}.movie-list-item[_ngcontent-%COMP%]   .movie-list-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;max-width:100%;transition:all .5s ease}.movie-list-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:.5rem}.movie-list-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-top:0}"]})}return a})()},3477:(O,M,c)=>{c.d(M,{H:()=>h});var n=c(6814),d=c(1451),p=c(9468);let h=(()=>{class m{static#t=this.\u0275fac=function(x){return new(x||m)};static#n=this.\u0275mod=p.oAB({type:m});static#e=this.\u0275inj=p.cJS({imports:[n.ez,d.Bz]})}return m})()},1099:(O,M,c)=>{c.d(M,{I:()=>t});var n=c(5619),d=c(2181),p=c(4664),h=c(7398),m=c(9468),C=c(9862);let t=(()=>{class x{constructor(o){this.http=o,this._discoverCriteria=new n.X({type:"discover"}),this._genreCriteria=new n.X({type:"genre"}),this._keywordCriteria=new n.X({type:"keyword"}),this._nowPlayingCriteria=new n.X({type:"nowPlaying"}),this._popularCriteria=new n.X({type:"popular"}),this._searchCriteria=new n.X({type:"search"}),this._trendingCriteria=new n.X({type:"trending"}),this._upcomingCriteria=new n.X({type:"upcoming"})}sortByReleaseDate(o,g){return o.release_date>g.release_date?1:g.release_date>o.release_date?-1:0}changeSearchCriteria(o){switch(o.type){case"discover":this._discoverCriteria.next(o);break;case"genre":this._genreCriteria.next(o);break;case"keyword":this._keywordCriteria.next(o);break;case"nowPlaying":this._nowPlayingCriteria.next(o);break;case"popular":this._popularCriteria.next(o);break;case"search":this._searchCriteria.next(o);break;case"trending":this._trendingCriteria.next(o);break;case"upcoming":this._upcomingCriteria.next(o)}}discover(){return this._discoverCriteria.asObservable().pipe((0,d.h)(o=>!!(o.certification||o.page||o.with_genres||o.with_watch_providers||o.year)),(0,p.w)(o=>this.http.get(`discover/movie?certification.lte=${o.certification}&certification_country=US&include_adult=false&page=${o.page}&region=US&watch_region=US&with_genres=${o.with_genres}&with_watch_providers=${o.with_watch_providers}&year=${o.year||""}`)))}getCollection(o){return this.http.get(`collection/${o}`).pipe((0,h.U)(g=>({...g,parts:g.parts.sort(this.sortByReleaseDate)})))}getCurrentDiscoverCriteria(){return this._discoverCriteria.getValue()}getCurrentSearchCriteria(){return this._searchCriteria.getValue()}getMovie(o){return this.http.get(`movie/${o}?append_to_response=credits,external_ids,keywords,release_dates,similar,videos`).pipe((0,h.U)(g=>({...g,credits:{cast:g.credits.cast.map(u=>({...u,title:u.character})),crew:g.credits.crew.map(u=>({...u,title:u.job}))},keywords:g.keywords.keywords,rating:g.release_dates.results.find(u=>"US"===u.iso_3166_1)?.release_dates.find(u=>u.certification)?.certification,similar:g.similar,youtubeTrailerId:g.videos.results.find(u=>"YouTube"===u.site&&"Trailer"===u.type)?.key})))}getMoviesByGenre(){return this._genreCriteria.asObservable().pipe((0,p.w)(o=>this.http.get(`discover/movie?include_adult=false&page=${o.page}&region=US&with_genres=${o.id}`)))}getMoviesByKeyword(){return this._keywordCriteria.asObservable().pipe((0,p.w)(o=>this.http.get(`discover/movie?include_adult=false&page=${o.page}&region=US&with_keywords=${o.id}`)))}getNowPlaying(){return this._nowPlayingCriteria.asObservable().pipe((0,p.w)(o=>this.http.get(`movie/now_playing?page=${o.page}&region=US`)))}getPopular(){return this._popularCriteria.asObservable().pipe((0,p.w)(o=>this.http.get(`movie/popular?page=${o.page}&region=US`)))}getTrending(){return this._trendingCriteria.asObservable().pipe((0,p.w)(o=>this.http.get(`trending/movie/day?page=${o.page}`)))}getUpcoming(){return this._upcomingCriteria.asObservable().pipe((0,p.w)(o=>this.http.get(`movie/upcoming?page=${o.page}&region=US`)))}search(){return this._searchCriteria.asObservable().pipe((0,p.w)(o=>this.http.get(`search/movie?include_adult=false&page=${o.page}&query=${encodeURIComponent(o.query)}&region=US`)))}static#t=this.\u0275fac=function(g){return new(g||x)(m.LFG(C.eN))};static#n=this.\u0275prov=m.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"})}return x})()}}]);