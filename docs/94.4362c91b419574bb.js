"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[94],{94:(w,u,i)=>{i.r(u),i.d(u,{KeywordModule:()=>L});var t=i(6814),g=i(8978),p=i(8543),_=i(3477),y=i(4150),h=i(1451),l=i(2572),v=i(8504),d=i(4664),n=i(7398),c=i(6306),e=i(9468),M=i(9862);let T=(()=>{class s{constructor(r){this.http=r}getKeywordName(r){return this.http.get(`keyword/${r}`).pipe((0,n.U)(m=>m.name))}static#t=this.\u0275fac=function(m){return new(m||s)(e.LFG(M.eN))};static#e=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var E=i(1099),o=i(6992),C=i(9891),a=i(1818);function f(s,I){if(1&s){const r=e.EpF();e.ynx(0),e.TgZ(1,"h1"),e._uU(2),e.qZA(),e.TgZ(3,"app-pagination",5),e.NdJ("nextPageEvent",function(x){e.CHM(r);const P=e.oxw();return e.KtG(P.goToPage(x))}),e.qZA(),e._UZ(4,"app-movie-list",6),e.TgZ(5,"app-pagination",5),e.NdJ("nextPageEvent",function(x){e.CHM(r);const P=e.oxw();return e.KtG(P.goToPage(x))}),e.qZA(),e.BQk()}if(2&s){const r=I.ngIf;e.xp6(2),e.hij("Keyword: ",r.keywordName,""),e.xp6(1),e.Q6J("page",r.page)("totalPages",r.total_pages),e.xp6(1),e.Q6J("displayAll",!0)("movies",r.results),e.xp6(1),e.Q6J("page",r.page)("totalPages",r.total_pages)}}function O(s,I){1&s&&e._UZ(0,"app-loading")}function A(s,I){if(1&s&&e.YNc(0,O,1,0,"app-loading",7),2&s){const r=e.oxw();e.Q6J("ngIf",!r.errorMsg)}}const U=[{path:":id",component:(()=>{class s{constructor(r,m,x){this.keywordsSvc=r,this.moviesSvc=m,this.route=x,this.errorModalClosed=!0,this.errorMsg=""}ngOnInit(){this.data$=this.route.paramMap.pipe((0,d.w)(r=>(this.id=+r.get("id"),this.moviesSvc.changeSearchCriteria({id:this.id,page:1,type:"keyword"}),(0,l.a)([this.keywordsSvc.getKeywordName(this.id),this.moviesSvc.getMoviesByKeyword()]).pipe((0,n.U)(([m,x])=>({...x,keywordName:m}))))),(0,c.K)(r=>(this.errorModalClosed=!1,this.errorMsg=r.error.status_message,(0,v._)(()=>new Error(r.error.status_message)))))}goToPage(r){this.moviesSvc.changeSearchCriteria({id:this.id,page:r,type:"keyword"})}static#t=this.\u0275fac=function(m){return new(m||s)(e.Y36(T),e.Y36(E.I),e.Y36(h.gz))};static#e=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-keyword"]],decls:9,vars:8,consts:[["id","top",1,"container"],[4,"ngIf","ngIfElse"],[3,"clrAlertClosed","clrAlertClosable","clrAlertType"],[1,"alert-text"],["loading",""],[3,"page","totalPages","nextPageEvent"],["layout","list",3,"displayAll","movies"],[4,"ngIf"]],template:function(m,x){if(1&m&&(e.TgZ(0,"div",0),e.YNc(1,f,6,7,"ng-container",1),e.ALo(2,"async"),e.TgZ(3,"clr-alert",2)(4,"clr-alert-item")(5,"span",3),e._uU(6),e.qZA()()(),e.YNc(7,A,1,1,"ng-template",null,4,e.W1O),e.qZA()),2&m){const P=e.MAs(8);e.xp6(1),e.Q6J("ngIf",e.lcZ(2,6,x.data$))("ngIfElse",P),e.xp6(2),e.Q6J("clrAlertClosed",x.errorModalClosed)("clrAlertClosable",!1)("clrAlertType","warning"),e.xp6(3),e.hij(" ",x.errorMsg," ")}},dependencies:[g.TIm,g.CyW,g.I9z,t.O5,o.N,C.O,a.Q,t.Ov],styles:["h1[_ngcontent-%COMP%]{margin-bottom:1.2rem;text-transform:capitalize}"]})}return s})(),title:"View Movies By Keyword"},{path:"",pathMatch:"full",redirectTo:"/home"}];let K=(()=>{class s{static#t=this.\u0275fac=function(m){return new(m||s)};static#e=this.\u0275mod=e.oAB({type:s});static#n=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(U),h.Bz]})}return s})(),L=(()=>{class s{static#t=this.\u0275fac=function(m){return new(m||s)};static#e=this.\u0275mod=e.oAB({type:s});static#n=this.\u0275inj=e.cJS({imports:[g.K6A,t.ez,p.I,_.H,y.u,K]})}return s})()},8543:(w,u,i)=>{i.d(u,{I:()=>p});var t=i(6814),g=i(9468);let p=(()=>{class _{static#t=this.\u0275fac=function(l){return new(l||_)};static#e=this.\u0275mod=g.oAB({type:_});static#n=this.\u0275inj=g.cJS({imports:[t.ez]})}return _})()},9891:(w,u,i)=>{i.d(u,{O:()=>E});var t=i(9468),g=i(6814),p=i(1451);function _(o,C){1&o&&t.GkF(0)}function y(o,C){1&o&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"No movies found."),t.qZA(),t.BQk())}const h=function(o){return["/movie",o]};function l(o,C){if(1&o&&(t.ynx(0),t.TgZ(1,"div",8)(2,"div",9)(3,"a",10),t._UZ(4,"img",11),t.qZA()(),t.TgZ(5,"h5")(6,"a",10),t._uU(7),t.qZA()()(),t.BQk()),2&o){const a=t.oxw().$implicit;t.xp6(3),t.Q6J("routerLink",t.VKq(5,h,a.id)),t.xp6(1),t.Q6J("src",a.poster_path?"https://image.tmdb.org/t/p/w500/"+a.poster_path:"https://placehold.co/500?text=NO+IMAGE",t.LSH)("alt",a.title),t.xp6(2),t.Q6J("routerLink",t.VKq(7,h,a.id)),t.xp6(1),t.hij(" ",a.title," ")}}function v(o,C){if(1&o&&(t.TgZ(0,"div",7),t.YNc(1,l,8,9,"ng-container",3),t.qZA()),2&o){const a=C.index,f=t.oxw(3);t.xp6(1),t.Q6J("ngIf",a<f.limit||f.displayAll)}}function d(o,C){if(1&o&&(t.TgZ(0,"div",5),t.YNc(1,v,2,1,"div",6),t.qZA()),2&o){const a=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",a.movies)("ngForTrackBy",a.trackById)}}function n(o,C){if(1&o&&(t.YNc(0,y,3,0,"ng-container",3),t.YNc(1,d,2,2,"div",4)),2&o){const a=t.oxw();t.Q6J("ngIf",0===a.movies.length),t.xp6(1),t.Q6J("ngIf",a.movies.length>0)}}function c(o,C){1&o&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"No movies found."),t.qZA(),t.BQk())}function e(o,C){if(1&o&&(t.ynx(0),t.TgZ(1,"div",13)(2,"div",14)(3,"div",9)(4,"a",10),t._UZ(5,"img",11),t.qZA()()(),t.TgZ(6,"div",15)(7,"h5")(8,"a",10),t._uU(9),t.qZA()(),t.TgZ(10,"h6"),t._uU(11),t.ALo(12,"date"),t.qZA(),t._uU(13),t.qZA()(),t.BQk()),2&o){const a=t.oxw().$implicit;t.xp6(4),t.Q6J("routerLink",t.VKq(10,h,a.id)),t.xp6(1),t.Q6J("src",a.poster_path?"https://image.tmdb.org/t/p/w185/"+a.poster_path:"https://placehold.co/185?text=NO+IMAGE",t.LSH)("alt",a.title),t.xp6(3),t.Q6J("routerLink",t.VKq(12,h,a.id)),t.xp6(1),t.hij(" ",a.title," "),t.xp6(2),t.hij(" ",t.xi3(12,7,a.release_date,"longDate")," "),t.xp6(2),t.hij(" ",a.overview," ")}}function M(o,C){if(1&o&&(t.ynx(0),t.YNc(1,e,14,14,"ng-container",3),t.BQk()),2&o){const a=C.index,f=t.oxw(2);t.xp6(1),t.Q6J("ngIf",a<f.limit||f.displayAll)}}function T(o,C){if(1&o&&(t.YNc(0,c,3,0,"ng-container",3),t.YNc(1,M,2,1,"ng-container",12)),2&o){const a=t.oxw();t.Q6J("ngIf",0===a.movies.length),t.xp6(1),t.Q6J("ngForOf",a.movies)("ngForTrackBy",a.trackById)}}let E=(()=>{class o{constructor(){this.displayAll=!1,this.layout="grid",this.limit=6}trackById(a,f){return f.id}static#t=this.\u0275fac=function(f){return new(f||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-movie-list"]],inputs:{displayAll:"displayAll",layout:"layout",limit:"limit",movies:"movies"},features:[t._Bn([{provide:Window,useValue:window}])],decls:5,vars:3,consts:[[4,"ngIf","ngIfThen","ngIfElse"],["grid",""],["list",""],[4,"ngIf"],["class","clr-row",4,"ngIf"],[1,"clr-row"],["class","clr-col-6 clr-col-lg-4 clr-col-xl-2",4,"ngFor","ngForOf","ngForTrackBy"],[1,"clr-col-6","clr-col-lg-4","clr-col-xl-2"],[1,"movie-list-item"],[1,"movie-list-image"],[3,"routerLink"],[3,"src","alt"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"clr-row","movie-list-item"],[1,"clr-col-sm-12","clr-col-md-2","clr-col-lg-1"],[1,"clr-col-sm-12","clr-col-md-10","clr-col-lg-11"]],template:function(f,O){if(1&f&&(t.YNc(0,_,1,0,"ng-container",0),t.YNc(1,n,2,2,"ng-template",null,1,t.W1O),t.YNc(3,T,2,3,"ng-template",null,2,t.W1O)),2&f){const A=t.MAs(2),B=t.MAs(4);t.Q6J("ngIf","grid"===O.layout)("ngIfThen",A)("ngIfElse",B)}},dependencies:[g.sg,g.O5,p.rH,g.uU],styles:[".movie-list-item[_ngcontent-%COMP%]{margin-bottom:1rem}.movie-list-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(120%);transform:scale(1.125)}.movie-list-item[_ngcontent-%COMP%]   .movie-list-image[_ngcontent-%COMP%]{overflow:hidden}.movie-list-item[_ngcontent-%COMP%]   .movie-list-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;max-width:100%;transition:all .5s ease}.movie-list-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:.5rem}.movie-list-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-top:0}"]})}return o})()},3477:(w,u,i)=>{i.d(u,{H:()=>_});var t=i(6814),g=i(1451),p=i(9468);let _=(()=>{class y{static#t=this.\u0275fac=function(v){return new(v||y)};static#e=this.\u0275mod=p.oAB({type:y});static#n=this.\u0275inj=p.cJS({imports:[t.ez,g.Bz]})}return y})()},1818:(w,u,i)=>{i.d(u,{Q:()=>h});var t=i(9468),g=i(6814);function p(l,v){if(1&l){const d=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(d);const c=t.oxw(2);return t.KtG(c.goToPage(c.page-1))}),t._uU(1,"\xab"),t.qZA()}}function _(l,v){if(1&l){const d=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(d);const c=t.oxw(2);return t.KtG(c.goToPage(c.page+1))}),t._uU(1,"\xbb"),t.qZA()}}function y(l,v){if(1&l&&(t.TgZ(0,"div",1)(1,"div",2),t.YNc(2,p,2,0,"button",3),t.qZA(),t.TgZ(3,"div",4),t._uU(4),t.ALo(5,"number"),t.qZA(),t.TgZ(6,"div",2),t.YNc(7,_,2,0,"button",5),t.qZA()()),2&l){const d=t.oxw();t.xp6(2),t.Q6J("ngIf",d.page>1),t.xp6(2),t.AsE(" Page ",d.page," of ",t.lcZ(5,4,d.totalPages)," "),t.xp6(3),t.Q6J("ngIf",d.page<d.totalPages)}}let h=(()=>{class l{constructor(d){this.window=d,this.nextPageEvent=new t.vpe}goToPage(d){this.window.document.getElementById("top")?.scrollIntoView(),this.nextPageEvent.emit(d)}static#t=this.\u0275fac=function(n){return new(n||l)(t.Y36(Window))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-pagination"]],inputs:{page:"page",totalPages:"totalPages"},outputs:{nextPageEvent:"nextPageEvent"},features:[t._Bn([{provide:Window,useValue:window}])],decls:1,vars:1,consts:[["class","pagination clr-row clr-align-items-center clr-justify-content-center",4,"ngIf"],[1,"pagination","clr-row","clr-align-items-center","clr-justify-content-center"],[1,"clr-col-2","clr-col-md-1"],["title","Previous Page","class","btn btn-sm",3,"click",4,"ngIf"],[1,"clr-col-auto"],["title","Next Page","class","btn btn-sm",3,"click",4,"ngIf"],["title","Previous Page",1,"btn","btn-sm",3,"click"],["title","Next Page",1,"btn","btn-sm",3,"click"]],template:function(n,c){1&n&&t.YNc(0,y,8,6,"div",0),2&n&&t.Q6J("ngIf",c.totalPages>0)},dependencies:[g.O5,g.JJ],styles:[".pagination[_ngcontent-%COMP%]{margin-bottom:1.2rem;text-align:center}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:0;min-width:.5rem}"]})}return l})()},4150:(w,u,i)=>{i.d(u,{u:()=>p});var t=i(6814),g=i(9468);let p=(()=>{class _{static#t=this.\u0275fac=function(l){return new(l||_)};static#e=this.\u0275mod=g.oAB({type:_});static#n=this.\u0275inj=g.cJS({imports:[t.ez]})}return _})()},1099:(w,u,i)=>{i.d(u,{I:()=>l});var t=i(5619),g=i(2181),p=i(4664),_=i(7398),y=i(9468),h=i(9862);let l=(()=>{class v{constructor(n){this.http=n,this._discoverCriteria=new t.X({type:"discover"}),this._genreCriteria=new t.X({type:"genre"}),this._keywordCriteria=new t.X({type:"keyword"}),this._nowPlayingCriteria=new t.X({type:"nowPlaying"}),this._popularCriteria=new t.X({type:"popular"}),this._searchCriteria=new t.X({type:"search"}),this._trendingCriteria=new t.X({type:"trending"}),this._upcomingCriteria=new t.X({type:"upcoming"})}sortByReleaseDate(n,c){return n.release_date>c.release_date?1:c.release_date>n.release_date?-1:0}changeSearchCriteria(n){switch(n.type){case"discover":this._discoverCriteria.next(n);break;case"genre":this._genreCriteria.next(n);break;case"keyword":this._keywordCriteria.next(n);break;case"nowPlaying":this._nowPlayingCriteria.next(n);break;case"popular":this._popularCriteria.next(n);break;case"search":this._searchCriteria.next(n);break;case"trending":this._trendingCriteria.next(n);break;case"upcoming":this._upcomingCriteria.next(n)}}discover(){return this._discoverCriteria.asObservable().pipe((0,g.h)(n=>!!(n.certification||n.page||n.with_genres||n.with_watch_providers||n.year)),(0,p.w)(n=>this.http.get(`discover/movie?certification.lte=${n.certification}&certification_country=US&include_adult=false&page=${n.page}&region=US&watch_region=US&with_genres=${n.with_genres}&with_watch_providers=${n.with_watch_providers}&year=${n.year||""}`)))}getCollection(n){return this.http.get(`collection/${n}`).pipe((0,_.U)(c=>({...c,parts:c.parts.sort(this.sortByReleaseDate)})))}getCurrentDiscoverCriteria(){return this._discoverCriteria.getValue()}getCurrentSearchCriteria(){return this._searchCriteria.getValue()}getMovie(n){return this.http.get(`movie/${n}?append_to_response=credits,external_ids,keywords,release_dates,similar,videos`).pipe((0,_.U)(c=>({...c,credits:{cast:c.credits.cast.map(e=>({...e,title:e.character})),crew:c.credits.crew.map(e=>({...e,title:e.job}))},keywords:c.keywords.keywords,rating:c.release_dates.results.find(e=>"US"===e.iso_3166_1)?.release_dates.find(e=>e.certification)?.certification,similar:c.similar,youtubeTrailerId:c.videos.results.find(e=>"YouTube"===e.site&&"Trailer"===e.type)?.key})))}getMoviesByGenre(){return this._genreCriteria.asObservable().pipe((0,p.w)(n=>this.http.get(`discover/movie?include_adult=false&page=${n.page}&region=US&with_genres=${n.id}`)))}getMoviesByKeyword(){return this._keywordCriteria.asObservable().pipe((0,p.w)(n=>this.http.get(`discover/movie?include_adult=false&page=${n.page}&region=US&with_keywords=${n.id}`)))}getNowPlaying(){return this._nowPlayingCriteria.asObservable().pipe((0,p.w)(n=>this.http.get(`movie/now_playing?page=${n.page}&region=US`)))}getPopular(){return this._popularCriteria.asObservable().pipe((0,p.w)(n=>this.http.get(`movie/popular?page=${n.page}&region=US`)))}getTrending(){return this._trendingCriteria.asObservable().pipe((0,p.w)(n=>this.http.get(`trending/movie/day?page=${n.page}`)))}getUpcoming(){return this._upcomingCriteria.asObservable().pipe((0,p.w)(n=>this.http.get(`movie/upcoming?page=${n.page}&region=US`)))}search(){return this._searchCriteria.asObservable().pipe((0,p.w)(n=>this.http.get(`search/movie?include_adult=false&page=${n.page}&query=${encodeURIComponent(n.query)}&region=US`)))}static#t=this.\u0275fac=function(c){return new(c||v)(y.LFG(h.eN))};static#e=this.\u0275prov=y.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()}}]);