"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[332],{9332:(y,v,i)=>{i.r(v),i.d(v,{CollectionModule:()=>A});var t=i(6814),p=i(8978),l=i(8543),m=i(3477),d=i(1451),f=i(8504),M=i(4664),u=i(6306),e=i(9468),n=i(1099),c=i(6992),g=i(9891);function x(a,O){if(1&a&&(e.ynx(0),e.TgZ(1,"h2"),e._uU(2,"Overview"),e.qZA(),e._uU(3),e.BQk()),2&a){const s=e.oxw().ngIf;e.xp6(3),e.hij(" ",s.overview," ")}}const w=function(a){return{"background-image":a,"background-position":"center center","background-repeat":"no-repeat","background-size":"cover"}};function P(a,O){if(1&a&&(e.ynx(0),e.TgZ(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"div",8),e._UZ(6,"img",9),e.qZA(),e.TgZ(7,"div",10)(8,"div",11)(9,"h1"),e._uU(10),e.qZA(),e.YNc(11,x,4,1,"ng-container",12),e.qZA()()()()()(),e.TgZ(12,"div",13)(13,"h2"),e._uU(14),e.qZA(),e._UZ(15,"app-movie-list",14),e.qZA(),e.BQk()),2&a){const s=O.ngIf;e.xp6(1),e.Q6J("ngStyle",e.VKq(8,w,s.backdrop_path?"url(https://image.tmdb.org/t/p/w1280/"+s.backdrop_path+")":"")),e.xp6(5),e.Q6J("src",s.poster_path?"https://image.tmdb.org/t/p/w342/"+s.poster_path:"https://placehold.co/400?text=NO+IMAGE",e.LSH)("alt",s.name),e.xp6(4),e.Oqu(s.name),e.xp6(1),e.Q6J("ngIf",s.overview),e.xp6(3),e.hij("",s.parts.length," Movies"),e.xp6(1),e.Q6J("displayAll",!0)("movies",s.parts)}}function o(a,O){1&a&&e._UZ(0,"app-loading")}function h(a,O){if(1&a&&e.YNc(0,o,1,0,"app-loading",12),2&a){const s=e.oxw();e.Q6J("ngIf",!s.errorMsg)}}const _=[{path:":id",component:(()=>{class a{constructor(s,C){this.moviesSvc=s,this.route=C,this.errorModalClosed=!0,this.errorMsg=""}ngOnInit(){this.collection$=this.route.paramMap.pipe((0,M.w)(s=>this.moviesSvc.getCollection(+s.get("id"))),(0,u.K)(s=>(this.errorModalClosed=!1,this.errorMsg=s.error.status_message,(0,f._)(()=>new Error(s.error.status_message)))))}static#t=this.\u0275fac=function(C){return new(C||a)(e.Y36(n.I),e.Y36(d.gz))};static#e=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-collection"]],decls:8,vars:8,consts:[[4,"ngIf","ngIfElse"],[3,"clrAlertClosed","clrAlertClosable","clrAlertType"],[1,"alert-text"],["loading",""],["id","backdrop",3,"ngStyle"],["id","backdropMask"],[1,"container"],[1,"clr-row","clr-align-items-center","clr-justify-content-center"],[1,"clr-col-sm-12","clr-col-md-3"],["id","moviePoster",3,"src","alt"],[1,"clr-col-sm-12","clr-col-md-8"],["id","contentMask"],[4,"ngIf"],["id","collectionMovieList",1,"container"],["layout","list",3,"displayAll","movies"]],template:function(C,E){if(1&C&&(e.YNc(0,P,16,10,"ng-container",0),e.ALo(1,"async"),e.TgZ(2,"clr-alert",1)(3,"clr-alert-item")(4,"span",2),e._uU(5),e.qZA()()(),e.YNc(6,h,1,1,"ng-template",null,3,e.W1O)),2&C){const I=e.MAs(7);e.Q6J("ngIf",e.lcZ(1,6,E.collection$))("ngIfElse",I),e.xp6(2),e.Q6J("clrAlertClosed",E.errorModalClosed)("clrAlertClosable",!1)("clrAlertType","warning"),e.xp6(3),e.hij(" ",E.errorMsg," ")}},dependencies:[p.TIm,p.CyW,p.I9z,t.O5,t.PC,c.N,g.O,t.Ov],styles:["img[_ngcontent-%COMP%]{border-radius:.25rem;height:auto;max-width:100%}#backdrop[_ngcontent-%COMP%]{margin-top:-1.2rem;margin-right:-1.2rem;margin-left:-1.2rem}#backdropMask[_ngcontent-%COMP%]{background-color:#000c;padding-bottom:1.2rem}#collectionMovieList[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:1.2rem}#contentMask[_ngcontent-%COMP%]{background-color:#000c;border-radius:.25rem;color:#fff;padding:1.2rem}#contentMask[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #contentMask[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #contentMask[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}#contentMask[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0}#contentMask[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0072a3}#moviePoster[_ngcontent-%COMP%]{margin-bottom:1.2rem;margin-top:1.2rem}"]})}return a})(),title:"View Collection"},{path:"",pathMatch:"full",redirectTo:"/home"}];let T=(()=>{class a{static#t=this.\u0275fac=function(C){return new(C||a)};static#e=this.\u0275mod=e.oAB({type:a});static#n=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(_),d.Bz]})}return a})(),A=(()=>{class a{static#t=this.\u0275fac=function(C){return new(C||a)};static#e=this.\u0275mod=e.oAB({type:a});static#n=this.\u0275inj=e.cJS({imports:[p.K6A,t.ez,l.I,m.H,T]})}return a})()},8543:(y,v,i)=>{i.d(v,{I:()=>l});var t=i(6814),p=i(9468);let l=(()=>{class m{static#t=this.\u0275fac=function(M){return new(M||m)};static#e=this.\u0275mod=p.oAB({type:m});static#n=this.\u0275inj=p.cJS({imports:[t.ez]})}return m})()},9891:(y,v,i)=>{i.d(v,{O:()=>P});var t=i(9468),p=i(6814),l=i(1451);function m(o,h){1&o&&t.GkF(0)}function d(o,h){1&o&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"No movies found."),t.qZA(),t.BQk())}const f=function(o){return["/movie",o]};function M(o,h){if(1&o&&(t.ynx(0),t.TgZ(1,"div",8)(2,"div",9)(3,"a",10),t._UZ(4,"img",11),t.qZA()(),t.TgZ(5,"h5")(6,"a",10),t._uU(7),t.qZA()()(),t.BQk()),2&o){const r=t.oxw().$implicit;t.xp6(3),t.Q6J("routerLink",t.VKq(5,f,r.id)),t.xp6(1),t.Q6J("src",r.poster_path?"https://image.tmdb.org/t/p/w500/"+r.poster_path:"https://placehold.co/500?text=NO+IMAGE",t.LSH)("alt",r.title),t.xp6(2),t.Q6J("routerLink",t.VKq(7,f,r.id)),t.xp6(1),t.hij(" ",r.title," ")}}function u(o,h){if(1&o&&(t.TgZ(0,"div",7),t.YNc(1,M,8,9,"ng-container",3),t.qZA()),2&o){const r=h.index,_=t.oxw(3);t.xp6(1),t.Q6J("ngIf",r<_.limit||_.displayAll)}}function e(o,h){if(1&o&&(t.TgZ(0,"div",5),t.YNc(1,u,2,1,"div",6),t.qZA()),2&o){const r=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",r.movies)("ngForTrackBy",r.trackById)}}function n(o,h){if(1&o&&(t.YNc(0,d,3,0,"ng-container",3),t.YNc(1,e,2,2,"div",4)),2&o){const r=t.oxw();t.Q6J("ngIf",0===r.movies.length),t.xp6(1),t.Q6J("ngIf",r.movies.length>0)}}function c(o,h){1&o&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"No movies found."),t.qZA(),t.BQk())}function g(o,h){if(1&o&&(t.ynx(0),t.TgZ(1,"div",13)(2,"div",14)(3,"div",9)(4,"a",10),t._UZ(5,"img",11),t.qZA()()(),t.TgZ(6,"div",15)(7,"h5")(8,"a",10),t._uU(9),t.qZA()(),t.TgZ(10,"h6"),t._uU(11),t.ALo(12,"date"),t.qZA(),t._uU(13),t.qZA()(),t.BQk()),2&o){const r=t.oxw().$implicit;t.xp6(4),t.Q6J("routerLink",t.VKq(10,f,r.id)),t.xp6(1),t.Q6J("src",r.poster_path?"https://image.tmdb.org/t/p/w185/"+r.poster_path:"https://placehold.co/185?text=NO+IMAGE",t.LSH)("alt",r.title),t.xp6(3),t.Q6J("routerLink",t.VKq(12,f,r.id)),t.xp6(1),t.hij(" ",r.title," "),t.xp6(2),t.hij(" ",t.xi3(12,7,r.release_date,"longDate")," "),t.xp6(2),t.hij(" ",r.overview," ")}}function x(o,h){if(1&o&&(t.ynx(0),t.YNc(1,g,14,14,"ng-container",3),t.BQk()),2&o){const r=h.index,_=t.oxw(2);t.xp6(1),t.Q6J("ngIf",r<_.limit||_.displayAll)}}function w(o,h){if(1&o&&(t.YNc(0,c,3,0,"ng-container",3),t.YNc(1,x,2,1,"ng-container",12)),2&o){const r=t.oxw();t.Q6J("ngIf",0===r.movies.length),t.xp6(1),t.Q6J("ngForOf",r.movies)("ngForTrackBy",r.trackById)}}let P=(()=>{class o{constructor(){this.displayAll=!1,this.layout="grid",this.limit=6}trackById(r,_){return _.id}static#t=this.\u0275fac=function(_){return new(_||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-movie-list"]],inputs:{displayAll:"displayAll",layout:"layout",limit:"limit",movies:"movies"},features:[t._Bn([{provide:Window,useValue:window}])],decls:5,vars:3,consts:[[4,"ngIf","ngIfThen","ngIfElse"],["grid",""],["list",""],[4,"ngIf"],["class","clr-row",4,"ngIf"],[1,"clr-row"],["class","clr-col-6 clr-col-lg-4 clr-col-xl-2",4,"ngFor","ngForOf","ngForTrackBy"],[1,"clr-col-6","clr-col-lg-4","clr-col-xl-2"],[1,"movie-list-item"],[1,"movie-list-image"],[3,"routerLink"],[3,"src","alt"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"clr-row","movie-list-item"],[1,"clr-col-sm-12","clr-col-md-2","clr-col-lg-1"],[1,"clr-col-sm-12","clr-col-md-10","clr-col-lg-11"]],template:function(_,T){if(1&_&&(t.YNc(0,m,1,0,"ng-container",0),t.YNc(1,n,2,2,"ng-template",null,1,t.W1O),t.YNc(3,w,2,3,"ng-template",null,2,t.W1O)),2&_){const A=t.MAs(2),a=t.MAs(4);t.Q6J("ngIf","grid"===T.layout)("ngIfThen",A)("ngIfElse",a)}},dependencies:[p.sg,p.O5,l.rH,p.uU],styles:[".movie-list-item[_ngcontent-%COMP%]{margin-bottom:1rem}.movie-list-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(120%);transform:scale(1.125)}.movie-list-item[_ngcontent-%COMP%]   .movie-list-image[_ngcontent-%COMP%]{overflow:hidden}.movie-list-item[_ngcontent-%COMP%]   .movie-list-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;max-width:100%;transition:all .5s ease}.movie-list-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:.5rem}.movie-list-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-top:0}"]})}return o})()},3477:(y,v,i)=>{i.d(v,{H:()=>m});var t=i(6814),p=i(1451),l=i(9468);let m=(()=>{class d{static#t=this.\u0275fac=function(u){return new(u||d)};static#e=this.\u0275mod=l.oAB({type:d});static#n=this.\u0275inj=l.cJS({imports:[t.ez,p.Bz]})}return d})()},1099:(y,v,i)=>{i.d(v,{I:()=>M});var t=i(5619),p=i(2181),l=i(4664),m=i(7398),d=i(9468),f=i(9862);let M=(()=>{class u{constructor(n){this.http=n,this._discoverCriteria=new t.X({type:"discover"}),this._genreCriteria=new t.X({type:"genre"}),this._keywordCriteria=new t.X({type:"keyword"}),this._nowPlayingCriteria=new t.X({type:"nowPlaying"}),this._popularCriteria=new t.X({type:"popular"}),this._searchCriteria=new t.X({type:"search"}),this._trendingCriteria=new t.X({type:"trending"}),this._upcomingCriteria=new t.X({type:"upcoming"})}sortByReleaseDate(n,c){return n.release_date>c.release_date?1:c.release_date>n.release_date?-1:0}changeSearchCriteria(n){switch(n.type){case"discover":this._discoverCriteria.next(n);break;case"genre":this._genreCriteria.next(n);break;case"keyword":this._keywordCriteria.next(n);break;case"nowPlaying":this._nowPlayingCriteria.next(n);break;case"popular":this._popularCriteria.next(n);break;case"search":this._searchCriteria.next(n);break;case"trending":this._trendingCriteria.next(n);break;case"upcoming":this._upcomingCriteria.next(n)}}discover(){return this._discoverCriteria.asObservable().pipe((0,p.h)(n=>!!(n.certification||n.page||n.with_genres||n.with_watch_providers||n.year)),(0,l.w)(n=>this.http.get(`discover/movie?certification.lte=${n.certification}&certification_country=US&include_adult=false&page=${n.page}&region=US&watch_region=US&with_genres=${n.with_genres}&with_watch_providers=${n.with_watch_providers}&year=${n.year||""}`)))}getCollection(n){return this.http.get(`collection/${n}`).pipe((0,m.U)(c=>({...c,parts:c.parts.sort(this.sortByReleaseDate)})))}getCurrentDiscoverCriteria(){return this._discoverCriteria.getValue()}getCurrentSearchCriteria(){return this._searchCriteria.getValue()}getMovie(n){return this.http.get(`movie/${n}?append_to_response=credits,external_ids,keywords,release_dates,similar,videos`).pipe((0,m.U)(c=>({...c,credits:{cast:c.credits.cast.map(g=>({...g,title:g.character})),crew:c.credits.crew.map(g=>({...g,title:g.job}))},keywords:c.keywords.keywords,rating:c.release_dates.results.find(g=>"US"===g.iso_3166_1)?.release_dates.find(g=>g.certification)?.certification,similar:c.similar,youtubeTrailerId:c.videos.results.find(g=>"YouTube"===g.site&&"Trailer"===g.type)?.key})))}getMoviesByGenre(){return this._genreCriteria.asObservable().pipe((0,l.w)(n=>this.http.get(`discover/movie?include_adult=false&page=${n.page}&region=US&with_genres=${n.id}`)))}getMoviesByKeyword(){return this._keywordCriteria.asObservable().pipe((0,l.w)(n=>this.http.get(`discover/movie?include_adult=false&page=${n.page}&region=US&with_keywords=${n.id}`)))}getNowPlaying(){return this._nowPlayingCriteria.asObservable().pipe((0,l.w)(n=>this.http.get(`movie/now_playing?page=${n.page}&region=US`)))}getPopular(){return this._popularCriteria.asObservable().pipe((0,l.w)(n=>this.http.get(`movie/popular?page=${n.page}&region=US`)))}getTrending(){return this._trendingCriteria.asObservable().pipe((0,l.w)(n=>this.http.get(`trending/movie/day?page=${n.page}`)))}getUpcoming(){return this._upcomingCriteria.asObservable().pipe((0,l.w)(n=>this.http.get(`movie/upcoming?page=${n.page}&region=US`)))}search(){return this._searchCriteria.asObservable().pipe((0,l.w)(n=>this.http.get(`search/movie?include_adult=false&page=${n.page}&query=${encodeURIComponent(n.query)}&region=US`)))}static#t=this.\u0275fac=function(c){return new(c||u)(d.LFG(f.eN))};static#e=this.\u0275prov=d.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()}}]);