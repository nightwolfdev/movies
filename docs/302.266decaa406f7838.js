"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[302],{8543:(f,p,n)=>{n.d(p,{I:()=>_});var t=n(6814),l=n(9468);let _=(()=>{class c{static#t=this.\u0275fac=function(r){return new(r||c)};static#e=this.\u0275mod=l.oAB({type:c});static#n=this.\u0275inj=l.cJS({imports:[t.ez]})}return c})()},9891:(f,p,n)=>{n.d(p,{O:()=>x});var t=n(9468),l=n(6814),_=n(1451);function c(i,v){1&i&&t.GkF(0)}function m(i,v){1&i&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"No movies found."),t.qZA(),t.BQk())}const d=function(i){return["/movie",i]};function r(i,v){if(1&i&&(t.ynx(0),t.TgZ(1,"div",8)(2,"div",9)(3,"a",10),t._UZ(4,"img",11),t.qZA()(),t.TgZ(5,"h5")(6,"a",10),t._uU(7),t.qZA()()(),t.BQk()),2&i){const o=t.oxw().$implicit;t.xp6(3),t.Q6J("routerLink",t.VKq(5,d,o.id)),t.xp6(1),t.Q6J("src",o.poster_path?"https://image.tmdb.org/t/p/w500/"+o.poster_path:"https://placehold.co/500?text=NO+IMAGE",t.LSH)("alt",o.title),t.xp6(2),t.Q6J("routerLink",t.VKq(7,d,o.id)),t.xp6(1),t.hij(" ",o.title," ")}}function u(i,v){if(1&i&&(t.TgZ(0,"div",7),t.YNc(1,r,8,9,"ng-container",3),t.qZA()),2&i){const o=v.index,h=t.oxw(3);t.xp6(1),t.Q6J("ngIf",o<h.limit||h.displayAll)}}function s(i,v){if(1&i&&(t.TgZ(0,"div",5),t.YNc(1,u,2,1,"div",6),t.qZA()),2&i){const o=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",o.movies)("ngForTrackBy",o.trackById)}}function e(i,v){if(1&i&&(t.YNc(0,m,3,0,"ng-container",3),t.YNc(1,s,2,2,"div",4)),2&i){const o=t.oxw();t.Q6J("ngIf",0===o.movies.length),t.xp6(1),t.Q6J("ngIf",o.movies.length>0)}}function a(i,v){1&i&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"No movies found."),t.qZA(),t.BQk())}function g(i,v){if(1&i&&(t.ynx(0),t.TgZ(1,"div",13)(2,"div",14)(3,"div",9)(4,"a",10),t._UZ(5,"img",11),t.qZA()()(),t.TgZ(6,"div",15)(7,"h5")(8,"a",10),t._uU(9),t.qZA()(),t.TgZ(10,"h6"),t._uU(11),t.ALo(12,"date"),t.qZA(),t._uU(13),t.qZA()(),t.BQk()),2&i){const o=t.oxw().$implicit;t.xp6(4),t.Q6J("routerLink",t.VKq(10,d,o.id)),t.xp6(1),t.Q6J("src",o.poster_path?"https://image.tmdb.org/t/p/w185/"+o.poster_path:"https://placehold.co/185?text=NO+IMAGE",t.LSH)("alt",o.title),t.xp6(3),t.Q6J("routerLink",t.VKq(12,d,o.id)),t.xp6(1),t.hij(" ",o.title," "),t.xp6(2),t.hij(" ",t.xi3(12,7,o.release_date,"longDate")," "),t.xp6(2),t.hij(" ",o.overview," ")}}function P(i,v){if(1&i&&(t.ynx(0),t.YNc(1,g,14,14,"ng-container",3),t.BQk()),2&i){const o=v.index,h=t.oxw(2);t.xp6(1),t.Q6J("ngIf",o<h.limit||h.displayAll)}}function C(i,v){if(1&i&&(t.YNc(0,a,3,0,"ng-container",3),t.YNc(1,P,2,1,"ng-container",12)),2&i){const o=t.oxw();t.Q6J("ngIf",0===o.movies.length),t.xp6(1),t.Q6J("ngForOf",o.movies)("ngForTrackBy",o.trackById)}}let x=(()=>{class i{constructor(){this.displayAll=!1,this.layout="grid",this.limit=6}trackById(o,h){return h.id}static#t=this.\u0275fac=function(h){return new(h||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-movie-list"]],inputs:{displayAll:"displayAll",layout:"layout",limit:"limit",movies:"movies"},features:[t._Bn([{provide:Window,useValue:window}])],decls:5,vars:3,consts:[[4,"ngIf","ngIfThen","ngIfElse"],["grid",""],["list",""],[4,"ngIf"],["class","clr-row",4,"ngIf"],[1,"clr-row"],["class","clr-col-6 clr-col-lg-4 clr-col-xl-2",4,"ngFor","ngForOf","ngForTrackBy"],[1,"clr-col-6","clr-col-lg-4","clr-col-xl-2"],[1,"movie-list-item"],[1,"movie-list-image"],[3,"routerLink"],[3,"src","alt"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"clr-row","movie-list-item"],[1,"clr-col-sm-12","clr-col-md-2","clr-col-lg-1"],[1,"clr-col-sm-12","clr-col-md-10","clr-col-lg-11"]],template:function(h,M){if(1&h&&(t.YNc(0,c,1,0,"ng-container",0),t.YNc(1,e,2,2,"ng-template",null,1,t.W1O),t.YNc(3,C,2,3,"ng-template",null,2,t.W1O)),2&h){const y=t.MAs(2),E=t.MAs(4);t.Q6J("ngIf","grid"===M.layout)("ngIfThen",y)("ngIfElse",E)}},dependencies:[l.sg,l.O5,_.rH,l.uU],styles:[".movie-list-item[_ngcontent-%COMP%]{margin-bottom:1rem}.movie-list-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(120%);transform:scale(1.125)}.movie-list-item[_ngcontent-%COMP%]   .movie-list-image[_ngcontent-%COMP%]{overflow:hidden}.movie-list-item[_ngcontent-%COMP%]   .movie-list-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;max-width:100%;transition:all .5s ease}.movie-list-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:.5rem}.movie-list-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-top:0}"]})}return i})()},3477:(f,p,n)=>{n.d(p,{H:()=>c});var t=n(6814),l=n(1451),_=n(9468);let c=(()=>{class m{static#t=this.\u0275fac=function(u){return new(u||m)};static#e=this.\u0275mod=_.oAB({type:m});static#n=this.\u0275inj=_.cJS({imports:[t.ez,l.Bz]})}return m})()},1818:(f,p,n)=>{n.d(p,{Q:()=>d});var t=n(9468),l=n(6814);function _(r,u){if(1&r){const s=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(s);const a=t.oxw(2);return t.KtG(a.goToPage(a.page-1))}),t._uU(1,"\xab"),t.qZA()}}function c(r,u){if(1&r){const s=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(s);const a=t.oxw(2);return t.KtG(a.goToPage(a.page+1))}),t._uU(1,"\xbb"),t.qZA()}}function m(r,u){if(1&r&&(t.TgZ(0,"div",1)(1,"div",2),t.YNc(2,_,2,0,"button",3),t.qZA(),t.TgZ(3,"div",4),t._uU(4),t.ALo(5,"number"),t.qZA(),t.TgZ(6,"div",2),t.YNc(7,c,2,0,"button",5),t.qZA()()),2&r){const s=t.oxw();t.xp6(2),t.Q6J("ngIf",s.page>1),t.xp6(2),t.AsE(" Page ",s.page," of ",t.lcZ(5,4,s.totalPages)," "),t.xp6(3),t.Q6J("ngIf",s.page<s.totalPages)}}let d=(()=>{class r{constructor(s){this.window=s,this.nextPageEvent=new t.vpe}goToPage(s){this.window.document.getElementById("top")?.scrollIntoView(),this.nextPageEvent.emit(s)}static#t=this.\u0275fac=function(e){return new(e||r)(t.Y36(Window))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-pagination"]],inputs:{page:"page",totalPages:"totalPages"},outputs:{nextPageEvent:"nextPageEvent"},features:[t._Bn([{provide:Window,useValue:window}])],decls:1,vars:1,consts:[["class","pagination clr-row clr-align-items-center clr-justify-content-center",4,"ngIf"],[1,"pagination","clr-row","clr-align-items-center","clr-justify-content-center"],[1,"clr-col-2","clr-col-md-1"],["title","Previous Page","class","btn btn-sm",3,"click",4,"ngIf"],[1,"clr-col-auto"],["title","Next Page","class","btn btn-sm",3,"click",4,"ngIf"],["title","Previous Page",1,"btn","btn-sm",3,"click"],["title","Next Page",1,"btn","btn-sm",3,"click"]],template:function(e,a){1&e&&t.YNc(0,m,8,6,"div",0),2&e&&t.Q6J("ngIf",a.totalPages>0)},dependencies:[l.O5,l.JJ],styles:[".pagination[_ngcontent-%COMP%]{margin-bottom:1.2rem;text-align:center}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:0;min-width:.5rem}"]})}return r})()},4150:(f,p,n)=>{n.d(p,{u:()=>_});var t=n(6814),l=n(9468);let _=(()=>{class c{static#t=this.\u0275fac=function(r){return new(r||c)};static#e=this.\u0275mod=l.oAB({type:c});static#n=this.\u0275inj=l.cJS({imports:[t.ez]})}return c})()},8618:(f,p,n)=>{n.d(p,{S:()=>d});var t=n(5619),l=n(7398),_=n(9397),c=n(9468),m=n(9862);let d=(()=>{class r{constructor(s){this.http=s,this._genres=new t.X([]),this.genres$=this._genres.asObservable(),this.getGenres().subscribe()}getGenres(){return this.http.get("genre/movie/list").pipe((0,l.U)(s=>s.genres),(0,_.b)(s=>this._genres.next(s)))}getGenreName(s){return this.genres$.pipe((0,l.U)(e=>e.find(a=>a.id===s)?.name))}static#t=this.\u0275fac=function(e){return new(e||r)(c.LFG(m.eN))};static#e=this.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},1099:(f,p,n)=>{n.d(p,{I:()=>r});var t=n(5619),l=n(2181),_=n(4664),c=n(7398),m=n(9468),d=n(9862);let r=(()=>{class u{constructor(e){this.http=e,this._discoverCriteria=new t.X({type:"discover"}),this._genreCriteria=new t.X({type:"genre"}),this._keywordCriteria=new t.X({type:"keyword"}),this._nowPlayingCriteria=new t.X({type:"nowPlaying"}),this._popularCriteria=new t.X({type:"popular"}),this._searchCriteria=new t.X({type:"search"}),this._trendingCriteria=new t.X({type:"trending"}),this._upcomingCriteria=new t.X({type:"upcoming"})}sortByReleaseDate(e,a){return e.release_date>a.release_date?1:a.release_date>e.release_date?-1:0}changeSearchCriteria(e){switch(e.type){case"discover":this._discoverCriteria.next(e);break;case"genre":this._genreCriteria.next(e);break;case"keyword":this._keywordCriteria.next(e);break;case"nowPlaying":this._nowPlayingCriteria.next(e);break;case"popular":this._popularCriteria.next(e);break;case"search":this._searchCriteria.next(e);break;case"trending":this._trendingCriteria.next(e);break;case"upcoming":this._upcomingCriteria.next(e)}}discover(){return this._discoverCriteria.asObservable().pipe((0,l.h)(e=>!!(e.certification||e.page||e.with_genres||e.with_watch_providers||e.year)),(0,_.w)(e=>this.http.get(`discover/movie?certification.lte=${e.certification}&certification_country=US&include_adult=false&page=${e.page}&region=US&watch_region=US&with_genres=${e.with_genres}&with_watch_providers=${e.with_watch_providers}&year=${e.year||""}`)))}getCollection(e){return this.http.get(`collection/${e}`).pipe((0,c.U)(a=>({...a,parts:a.parts.sort(this.sortByReleaseDate)})))}getCurrentDiscoverCriteria(){return this._discoverCriteria.getValue()}getCurrentSearchCriteria(){return this._searchCriteria.getValue()}getMovie(e){return this.http.get(`movie/${e}?append_to_response=credits,external_ids,keywords,release_dates,similar,videos`).pipe((0,c.U)(a=>({...a,credits:{cast:a.credits.cast.map(g=>({...g,title:g.character})),crew:a.credits.crew.map(g=>({...g,title:g.job}))},keywords:a.keywords.keywords,rating:a.release_dates.results.find(g=>"US"===g.iso_3166_1)?.release_dates.find(g=>g.certification)?.certification,similar:a.similar,youtubeTrailerId:a.videos.results.find(g=>"YouTube"===g.site&&"Trailer"===g.type)?.key})))}getMoviesByGenre(){return this._genreCriteria.asObservable().pipe((0,_.w)(e=>this.http.get(`discover/movie?include_adult=false&page=${e.page}&region=US&with_genres=${e.id}`)))}getMoviesByKeyword(){return this._keywordCriteria.asObservable().pipe((0,_.w)(e=>this.http.get(`discover/movie?include_adult=false&page=${e.page}&region=US&with_keywords=${e.id}`)))}getNowPlaying(){return this._nowPlayingCriteria.asObservable().pipe((0,_.w)(e=>this.http.get(`movie/now_playing?page=${e.page}&region=US`)))}getPopular(){return this._popularCriteria.asObservable().pipe((0,_.w)(e=>this.http.get(`movie/popular?page=${e.page}&region=US`)))}getTrending(){return this._trendingCriteria.asObservable().pipe((0,_.w)(e=>this.http.get(`trending/movie/day?page=${e.page}`)))}getUpcoming(){return this._upcomingCriteria.asObservable().pipe((0,_.w)(e=>this.http.get(`movie/upcoming?page=${e.page}&region=US`)))}search(){return this._searchCriteria.asObservable().pipe((0,_.w)(e=>this.http.get(`search/movie?include_adult=false&page=${e.page}&query=${encodeURIComponent(e.query)}&region=US`)))}static#t=this.\u0275fac=function(a){return new(a||u)(m.LFG(d.eN))};static#e=this.\u0275prov=m.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()}}]);