"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[828],{3828:(A,l,i)=>{i.r(l),i.d(l,{HomeModule:()=>S});var a=i(6895),p=i(7980),c=i(6123),n=i(1571),g=i(9991),r=i(8424),u=i(761);function v(o,t){if(1&o&&(n.ynx(0),n._UZ(1,"app-movie-list",7),n.BQk()),2&o){const e=t.ngIf;n.xp6(1),n.Q6J("movies",e.results)}}function f(o,t){if(1&o&&(n.ynx(0),n._UZ(1,"app-movie-list",7),n.BQk()),2&o){const e=t.ngIf;n.xp6(1),n.Q6J("movies",e.results)}}function h(o,t){if(1&o&&(n.ynx(0),n._UZ(1,"app-movie-list",7),n.BQk()),2&o){const e=t.ngIf;n.xp6(1),n.Q6J("movies",e.results)}}function d(o,t){if(1&o&&(n.ynx(0),n._UZ(1,"app-movie-list",7),n.BQk()),2&o){const e=t.ngIf;n.xp6(1),n.Q6J("movies",e.results)}}function y(o,t){1&o&&n._UZ(0,"app-loading")}const H=[{path:"",component:(()=>{class o{constructor(e){this.moviesSvc=e}ngOnInit(){this.moviesSvc.changeSearchCriteria({page:1,type:"nowPlaying"}),this.moviesSvc.changeSearchCriteria({page:1,type:"popular"}),this.moviesSvc.changeSearchCriteria({page:1,type:"trending"}),this.moviesSvc.changeSearchCriteria({page:1,type:"upcoming"}),this.nowPlaying$=this.moviesSvc.getNowPlaying(),this.popular$=this.moviesSvc.getPopular(),this.trending$=this.moviesSvc.getTrending(),this.upcoming$=this.moviesSvc.getUpcoming()}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(g.I))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-home"]],decls:23,vars:16,consts:[[1,"container"],["routerLink","/now-playing"],[4,"ngIf","ngIfElse"],["routerLink","/popular"],["routerLink","/trending"],["routerLink","/upcoming"],["loading",""],[3,"movies"]],template:function(e,s){if(1&e&&(n.TgZ(0,"div",0)(1,"h2")(2,"a",1),n._uU(3,"Now Playing"),n.qZA()(),n.YNc(4,v,2,1,"ng-container",2),n.ALo(5,"async"),n.TgZ(6,"h2")(7,"a",3),n._uU(8,"Popular"),n.qZA()(),n.YNc(9,f,2,1,"ng-container",2),n.ALo(10,"async"),n.TgZ(11,"h2")(12,"a",4),n._uU(13,"Trending"),n.qZA()(),n.YNc(14,h,2,1,"ng-container",2),n.ALo(15,"async"),n.TgZ(16,"h2")(17,"a",5),n._uU(18,"Upcoming"),n.qZA()(),n.YNc(19,d,2,1,"ng-container",2),n.ALo(20,"async"),n.YNc(21,y,1,0,"ng-template",null,6,n.W1O),n.qZA()),2&e){const m=n.MAs(22);n.xp6(4),n.Q6J("ngIf",n.lcZ(5,8,s.nowPlaying$))("ngIfElse",m),n.xp6(5),n.Q6J("ngIf",n.lcZ(10,10,s.popular$))("ngIfElse",m),n.xp6(5),n.Q6J("ngIf",n.lcZ(15,12,s.trending$))("ngIfElse",m),n.xp6(5),n.Q6J("ngIf",n.lcZ(20,14,s.upcoming$))("ngIfElse",m)}},dependencies:[a.O5,r.N,u.O,c.rH,a.Ov]}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[c.Bz.forChild(H),c.Bz]}),o})();var C=i(97),I=i(740);let S=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[p.K6A,a.ez,C.I,I.H,Z]}),o})()}}]);