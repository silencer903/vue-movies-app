(function(e){function t(t){for(var n,a,o=t[0],c=t[1],d=t[2],f=0,l=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&l.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(l.length)l.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},i={app:0},r=[];function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-movies-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0fe4":function(e,t,s){},"1a49":function(e,t,s){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],a={name:"App"},o=a,c=(s("5c0b"),s("2877")),d=Object(c["a"])(o,i,r,!1,null,null,null),u=d.exports,f=s("9483");Object(f["a"])("".concat("/vue-movies-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var l=s("8c4f"),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("movies-list")},v=[],b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"movies-page"},[s("div",{staticClass:"movies-genres"},[s("multiselect",{attrs:{placeholder:"Выберте жанры",label:"name","track-by":"id",options:e.genres,multiple:!0,taggable:!0},on:{input:e.setSelectedGenres},model:{value:e.selectedGenres,callback:function(t){e.selectedGenres=t},expression:"selectedGenres"}})],1),s("div",{staticClass:"movies-list"},e._l(e.movies,(function(t){return s("div",{staticClass:"movie"},[s("div",{staticClass:"movie-img"},[s("router-link",{attrs:{to:{name:"movie-view",params:{id:t.id}}}},[s("img",{attrs:{src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+t.poster_path},on:{error:function(t){return e.setEmptyImage(t)}}})])],1),s("div",{staticClass:"movie-info"},[s("router-link",{attrs:{to:{name:"movie-view",params:{id:t.id}}}},[s("h4",{staticClass:"movie-title"},[e._v(e._s(t.title))])]),s("p",{staticClass:"movie-overview"},[e._v(" "+e._s(e._f("truncateString")(t.overview,e.overviewLimit))+" ")])],1)])})),0)])},j=[],p=s("8e5f"),g=s.n(p),h=(s("a15b"),s("d81d"),s("b64b"),"1730bf9afafcb298aad04f9bab0fd801"),y=s("bc3a"),I=s.n(y);function k(e,t){if(e&&t){t["language"]||(t["language"]="ru-RU");var s="https://api.themoviedb.org",n=3,i=Object.keys(t).map((function(e){return e+"="+t[e]})).join("&");return I.a.get(s+"/"+n+"/"+e+"?api_key="+h+"&"+i)}return!1}var J=s("8944"),A=s.n(J),w={name:"movies-list",components:{multiselect:g.a},data:function(){return{bottom:!1,page:0,movies:[],overviewLimit:385,genres:[],selectedGenres:[]}},created:function(){var e=this;window.addEventListener("scroll",(function(){e.bottom=e.bottomVisible()})),this.getGenres(),this.$set(this,"selectedGenres",this.$store.state.selectedGenres),this.getMovies()},methods:{bottomVisible:function(){var e=window.scrollY,t=document.documentElement.clientHeight,s=document.documentElement.scrollHeight,n=t+e>=s;return n||s<t},getMovies:function(){var e=this;this.$store.dispatch("getMoviesAsync").then((function(){e.$set(e,"movies",e.$store.state.movies)}))},getGenres:function(){var e=this;k("genre/movie/list",{}).then((function(t){e.$set(e,"genres",t.data.genres)}))},setSelectedGenres:function(){var e=this;this.$store.dispatch("setSelectedGenresAsync",this.selectedGenres).then((function(){console.log(e.$store.state),e.$store.dispatch("getMoviesAsync").then((function(){e.$set(e,"movies",e.$store.state.movies)}))}))},setEmptyImage:function(e){e.target.src=A.a}},watch:{bottom:function(e){e&&this.getMovies()}},filters:{truncateString:function(e,t){return e.length>t?e.substring(0,t)+"...":0===e.length?"Описание отсутствует":e}}},x=w,L=(s("60bc"),s("e24f"),Object(c["a"])(x,b,j,!1,null,null,null)),S=L.exports,C={name:"home",components:{MoviesList:S}},O=C,_=Object(c["a"])(O,m,v,!1,null,null,null),H=_.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"movie-page"},[s("div",{staticClass:"movie-data"},[s("div",{staticClass:"movie-header"},[s("div",{staticClass:"movie-poster"},[s("img",{attrs:{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+e.movie.poster_path,alt:""}})]),s("div",{staticClass:"movie-description"},[s("h2",[e._v(e._s(e.movie.title))]),s("p",[e._v("Дата выхода: "+e._s(e._f("DateFormater")(e.movie.release_date)))]),s("p",[e._v("Продолжительность: "+e._s(e.movie.runtime)+" мин.")]),s("p",[e._v("Жанры: "+e._s(e._f("GenresToString")(e.movie.genres)))]),s("p",[e._v(e._s(e.movie.overview)+" ")]),s("p")])]),s("div",{staticClass:"movie-hr"}),s("div",{staticClass:"movie-videos"},e._l(e.movie.videos.results,(function(e){return s("div",{staticClass:"movie-video"},[s("youtube",{attrs:{"player-width":"1000px","video-id":e.key}})],1)})),0)])])},G=[],P=(s("b0c0"),s("c1df")),Z=s.n(P),R={name:"movie-view",data:function(){return{movie:{videos:[]}}},methods:{getMovie:function(){var e=this,t=this.$route.params.id;this.$apiRequest("movie/"+t,{append_to_response:"videos"}).then((function(t){e.$set(e,"movie",t.data),console.log(e.movie)}))}},created:function(){this.getMovie()},filters:{GenresToString:function(e){return e?e.map((function(e){return e.name})).join(","):"Жанры не найдены"},DateFormater:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD.MM.Y";return e?Z()(e,"YYYY-MM-DD").format(t):e}}},M=R,Y=(s("7b82"),Object(c["a"])(M,z,G,!1,null,"c1eb1b1a",null)),D=Y.exports;n["a"].use(l["a"]);var W=[{path:"/",name:"home",component:H},{path:"/movie-view/:id",name:"movie-view",component:D}],X=new l["a"]({mode:"history",base:"/vue-movies-app/",routes:W}),E=X,K=(s("99af"),s("284c")),V=s("2f62");n["a"].use(V["a"]);var q=new V["a"].Store({state:{page:0,movies:[],selectedGenres:[]},getters:{getPage:function(e){return e.page},getSelectedGenresIdsString:function(e){return e.selectedGenres.map((function(e){return e.id})).join(",")}},mutations:{nextPage:function(e){e.page+=1},setCurrentPage:function(e,t){e.page=t},setMovies:function(e,t){!0===t.empty?e.movies=[]:e.movies=[].concat(Object(K["a"])(e.movies),Object(K["a"])(t.results))},setSelectedGenres:function(e,t){e.selectedGenres=t}},actions:{getMoviesAsync:function(e){return e.commit("nextPage"),k("discover/movie",{page:e.getters.getPage,sort_by:"popularity.desc",primary_release_date:Z()().format("YYYY-MM-DD"),with_genres:e.getters.getSelectedGenresIdsString}).then((function(t){e.commit("setMovies",t.data),e.commit("setCurrentPage",t.data.page)}))},setSelectedGenresAsync:function(e,t){e.commit("setSelectedGenres",t),e.commit("setMovies",{empty:!0}),e.commit("setCurrentPage",{page:0})}},modules:{}}),U={install:function(e,t){e.prototype.$apiRequest=function(e,t){if(e&&t){t["language"]||(t["language"]="ru-RU");var s="https://api.themoviedb.org",n=3,i=Object.keys(t).map((function(e){return e+"="+t[e]})).join("&");return I.a.get(s+"/"+n+"/"+e+"?api_key="+h+"&"+i)}return!1}}},N=s("f6dd");n["a"].config.productionTip=!1,n["a"].use(N["a"]),n["a"].use(U),E.saveScrollPosition=!0,new n["a"]({router:E,store:q,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("9c0c"),i=s.n(n);i.a},"7b82":function(e,t,s){"use strict";var n=s("0fe4"),i=s.n(n);i.a},8944:function(e,t){e.exports="data:image/png;base64,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"},"9c0c":function(e,t,s){},e24f:function(e,t,s){"use strict";var n=s("1a49"),i=s.n(n);i.a}});
//# sourceMappingURL=app.06822023.js.map