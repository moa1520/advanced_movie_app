(this.webpackJsonpkoflix=this.webpackJsonpkoflix||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/nothing.fe502a59.jpg"},48:function(e,t,n){e.exports=n(78)},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(39),o=n.n(i),l=n(10),c=n(11),u=n(13),s=n(12),p=n(14),d=n(19),m=n(17),g=n(3),f=n(2);function v(){var e=Object(g.a)(["\n    font-size:26px;\n    margin: 0 30px;\n    color: red;\n    opacity: 0.8;\n    &:hover{opacity:1.0;}\n    transition: opacity 0.2s ease-in-out;\n"]);return v=function(){return e},e}function b(){var e=Object(g.a)(["\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return b=function(){return e},e}function h(){var e=Object(g.a)(["\n    width: 80px;\n    height: 50px;\n    text-align: center;\n    border-bottom: 3px solid ",";\n    transition: border-bottom 0.5s ease-in-out;\n"]);return h=function(){return e},e}function y(){var e=Object(g.a)(["\n    display: flex;\n"]);return y=function(){return e},e}function E(){var e=Object(g.a)(["\n    color: white;\n    position: fixed;\n    font-size: 16px;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    background-color: rgba(20, 20, 20, 0.8);\n    z-index: 10;\n    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return E=function(){return e},e}var x=f.default.header(E()),_=f.default.ul(y()),j=f.default.li(h(),(function(e){return e.current?"#3498db":"transparent"})),O=Object(f.default)(d.b)(b()),k=f.default.li(v()),w=Object(m.g)((function(e){var t=e.location.pathname;return r.a.createElement(x,null,r.a.createElement(_,null,r.a.createElement(k,null,r.a.createElement(O,{to:"/"},"Koflix")),r.a.createElement(j,{current:"/"===t},r.a.createElement(O,{to:"/"},"Movies")),r.a.createElement(j,{current:"/tv"===t},r.a.createElement(O,{to:"/tv"},"TV")),r.a.createElement(j,{current:"/search"===t},r.a.createElement(O,{to:"/search"},"Search"))))})),S=n(7),R=n.n(S),U=n(16),T=n(1),C=n.n(T);function M(){var e=Object(g.a)(["\n    margin-top: 25px;\n    display: grid;\n    grid-template-columns:repeat(auto-fill, 125px);\n    grid-gap: 25px;\n"]);return M=function(){return e},e}function z(){var e=Object(g.a)(["\n    font-size: 14px;\n    font-weight: 600;\n"]);return z=function(){return e},e}function q(){var e=Object(g.a)(["\n    :not(:last-child) {\n        margin-bottom: 50px;\n    }\n"]);return q=function(){return e},e}var P=f.default.div(q()),B=f.default.span(z()),I=f.default.div(M()),D=function(e){var t=e.title,n=e.children;return r.a.createElement(P,null,r.a.createElement(B,null,t),r.a.createElement(I,null,n))};D.prototype={title:C.a.string.isRequired,children:C.a.oneOfType([C.a.arrayOf(C.a.node),C.a.node])};var K=D;function F(){var e=Object(g.a)(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    font-size: 32px;\n    margin-top: 100px;\n"]);return F=function(){return e},e}var V=f.default.div(F()),N=function(){return r.a.createElement(V,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"Loading..."))};function A(){var e=Object(g.a)(["\n    color: ",";\n    font-size: 22px;\n"]);return A=function(){return e},e}function L(){var e=Object(g.a)(["\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n"]);return L=function(){return e},e}var J=f.default.div(L()),G=f.default.span(A(),(function(e){return e.color})),H=function(e){var t=e.text,n=e.color;return r.a.createElement(J,null,r.a.createElement(G,{color:n},t))};H.prototype={text:C.a.string.isRequired,color:C.a.string.isRequired};var Y=H;function Q(){var e=Object(g.a)(["\n    font-size: 10px;\n    color:rgba(255,255,255,0.5);\n"]);return Q=function(){return e},e}function W(){var e=Object(g.a)(["\n    display: block;\n    margin-bottom: 2px;\n"]);return W=function(){return e},e}function X(){var e=Object(g.a)(["\n    margin-bottom: 5px;\n    position: relative;\n    &:hover{\n        "," {\n            opacity: 0.3;\n        }\n        "," {\n            opacity: 1;\n        }\n    }\n"]);return X=function(){return e},e}function Z(){var e=Object(g.a)(["\n    bottom: 5px;\n    right: 5px;\n    position: absolute;\n    transition: opacity 0.1s linear;\n    opacity: 0;\n"]);return Z=function(){return e},e}function $(){var e=Object(g.a)(["\n    background-image: url(",");\n    height: 180px;\n    background-size: cover;\n    border-radius: 4px;\n    background-position: center center;\n    transition: opacity 0.1s linear;\n"]);return $=function(){return e},e}function ee(){var e=Object(g.a)(["\n    font-size: 12px;\n"]);return ee=function(){return e},e}var te=f.default.div(ee()),ne=f.default.div($(),(function(e){return e.bgUrl})),ae=f.default.span(Z()),re=f.default.div(X(),ne,ae),ie=f.default.span(W()),oe=f.default.span(Q()),le=function(e){var t=e.id,a=e.imageUrl,i=e.title,o=e.rating,l=e.year,c=e.isMovie,u=void 0!==c&&c;return r.a.createElement(d.b,{to:u?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(te,null,r.a.createElement(re,null,r.a.createElement(ne,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(23)}),r.a.createElement(ae,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ",o,"/10")),r.a.createElement(ie,null,i.length>18?"".concat(i.substring(0,18),"..."):i),r.a.createElement(oe,null,l)))};le.prototype={id:C.a.number.isRequired,imageUrl:C.a.string,title:C.a.string.isRequired,rating:C.a.number,year:C.a.string,isMovie:C.a.bool};var ce=le,ue=n(9),se=n.n(ue);function pe(){var e=Object(g.a)(["\n    padding: 20px;\n"]);return pe=function(){return e},e}var de=f.default.div(pe()),me=function(e){var t=e.nowPlaying,n=e.popular,a=e.upcoming,i=e.error,o=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,null,r.a.createElement("title",null,"Koflix | Movies")),o?r.a.createElement(N,null):r.a.createElement(de,null,r.a.createElement(se.a,null,r.a.createElement("title",null,"Koflix | Movies")),t&&t.length>0&&r.a.createElement(K,{title:"Now Playing"},t.map((function(e){return r.a.createElement(ce,{key:e.id,id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(K,{title:"Upcoming"},a.map((function(e){return r.a.createElement(ce,{key:e.id,id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(K,{title:"Popular"},n.map((function(e){return r.a.createElement(ce,{key:e.id,id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)})}))),i&&r.a.createElement(Y,{color:"#e74c3c",text:i}))," ")};me.prototype={nowPlaying:C.a.array,upcoming:C.a.array,popular:C.a.array,error:C.a.string,loading:C.a.bool.isRequired};var ge=me,fe=n(44),ve="803b005f53021a61c58a9a205576b6f5",be=n.n(fe).a.create({baseURL:"https://api.themoviedb.org/3"}),he={nowPlaying:function(){return be.get("/movie/now_playing",{params:{api_key:ve,language:"en-US"}})},upcoming:function(){return be.get("/movie/upcoming",{params:{api_key:ve,language:"en-US"}})},popular:function(){return be.get("/movie/popular",{params:{api_key:ve,language:"en-US"}})},movieDetail:function(e){return be.get("/movie/".concat(e),{params:{api_key:ve,language:"en-US",append_to_response:"videos"}})},search:function(e){return be.get("/search/movie",{params:{api_key:ve,language:"en-US",query:encodeURIComponent(e)}})}},ye={topRated:function(){return be.get("/tv/top_rated",{params:{api_key:ve,language:"en-US"}})},popular:function(){return be.get("/tv/popular",{params:{api_key:ve,language:"en-US"}})},airingToday:function(){return be.get("/tv/airing_today",{params:{api_key:ve,language:"en-US"}})},tvDetail:function(e){return be.get("/tv/".concat(e),{params:{api_key:ve,language:"en-US",append_to_response:"videos"}})},search:function(e){return be.get("/search/tv",{params:{api_key:ve,language:"en-US",query:encodeURIComponent(e)}})}},Ee=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n.componentDidMount=Object(U.a)(R.a.mark((function e(){var t,a,r,i,o,l;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,he.nowPlaying();case 3:return t=e.sent,a=t.data.results,e.next=7,he.upcoming();case 7:return r=e.sent,i=r.data.results,e.next=11,he.popular();case 11:o=e.sent,l=o.data.results,n.setState({nowPlaying:a,upcoming:i,popular:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),n.setState({error:"Can't find movies information."});case 19:return e.prev=19,n.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[0,16,19,22]])}))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,o=e.loading;return r.a.createElement(ge,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:o})}}]),t}(a.Component);function xe(){var e=Object(g.a)(["\n    all: unset;\n    font-size: 28px;\n    width: 100%;\n"]);return xe=function(){return e},e}function _e(){var e=Object(g.a)(["\n    margin-bottom: 50px;\n    width: 100%;\n"]);return _e=function(){return e},e}function je(){var e=Object(g.a)(["\n    padding: 20px;\n"]);return je=function(){return e},e}var Oe=f.default.div(je()),ke=f.default.form(_e()),we=f.default.input(xe()),Se=function(e){var t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,o=e.loading,l=e.handleSubmit,c=e.updateTerm;return r.a.createElement(Oe,null,r.a.createElement(se.a,null,r.a.createElement("title",null,"Koflix | Search")),r.a.createElement(ke,{onSubmit:l},r.a.createElement(we,{placeholder:"Search Movies or TV Shows...",value:a,onChange:c})),o?r.a.createElement(N,null):r.a.createElement(r.a.Fragment,null," ",t&&t.length>0&&r.a.createElement(K,{title:"Movie Results"},t.map((function(e){return r.a.createElement(ce,{key:e.id,id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)})})))," ",n&&n.length>0&&r.a.createElement(K,{title:"TV Results"},n.map((function(e){return r.a.createElement(ce,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})})))," ",i&&r.a.createElement(Y,{color:"#e74c3c",text:i})," ",t&&n&&0===t.length&&0===n.length&&r.a.createElement(Y,{text:"Nothing found",color:"#b2bec3"})))};Se.prototype={movieResults:C.a.array,tvResults:C.a.array,searchTerm:C.a.string,error:C.a.string,loading:C.a.bool.isRequired,handleSubmit:C.a.func.isRequired,updateTerm:C.a.func.isRequired};var Re=Se,Ue=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.updateTerm=function(e){var t=e.target.value;n.setState({searchTerm:t})},n.searchByTerm=Object(U.a)(R.a.mark((function e(){var t,a,r,i,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,e.prev=1,n.setState({loading:!0}),e.next=5,he.search(t);case 5:return a=e.sent,r=a.data.results,e.next=9,ye.search(t);case 9:i=e.sent,o=i.data.results,n.setState({movieResults:r,tvResults:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),n.setState({error:"Can't find results."});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,14,17,20]])}))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,o=e.loading;return r.a.createElement(Re,{movieResults:t,tvResults:n,searchTerm:a,error:i,loading:o,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),t}(a.Component);function Te(){var e=Object(g.a)(["\n    padding: 20px;\n"]);return Te=function(){return e},e}var Ce=f.default.div(Te()),Me=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,o=e.loading;return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(se.a,null," ",r.a.createElement("title",null,"Koflix | TV Shows")),o?r.a.createElement(N,null):r.a.createElement(Ce,null,r.a.createElement(se.a,null,r.a.createElement("title",null,"Koflix | TV Shows")),t&&t.length>0&&r.a.createElement(K,{title:"Top Rated"},t.map((function(e){return r.a.createElement(ce,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})}))),n&&n.length>0&&r.a.createElement(K,{title:"Popular"},n.map((function(e){return r.a.createElement(ce,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})}))),a&&a.length>0&&r.a.createElement(K,{title:"Airing Today"},a.map((function(e){return r.a.createElement(ce,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})}))),i&&r.a.createElement(Y,{color:"#e74c3c",text:i}))," ")};Me.prototype={topRated:C.a.array,popular:C.a.array,airingToday:C.a.array,error:C.a.string,loading:C.a.bool.isRequired};var ze=Me,qe=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},n.componentDidMount=Object(U.a)(R.a.mark((function e(){var t,a,r,i,o,l;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ye.topRated();case 3:return t=e.sent,a=t.data.results,e.next=7,ye.popular();case 7:return r=e.sent,i=r.data.results,e.next=11,ye.airingToday();case 11:o=e.sent,l=o.data.results,n.setState({topRated:a,popular:i,airingToday:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),n.setState({error:"Can't find TV information."});case 19:return e.prev=19,n.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[0,16,19,22]])}))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,o=e.loading;return r.a.createElement(ze,{topRated:t,popular:n,airingToday:a,error:i,loading:o})}}]),t}(a.Component);function Pe(){var e=Object(g.a)(["\n    display: block;\n    margin-bottom: 2px;\n"]);return Pe=function(){return e},e}function Be(){var e=Object(g.a)(["\n    margin-bottom: 5px;\n    position: relative;\n"]);return Be=function(){return e},e}function Ie(){var e=Object(g.a)(["\n    background-image: url(",");\n    height: 180px;\n    background-size: cover;\n    border-radius: 4px;\n    background-position: center center;\n    transition: opacity 0.1s linear;\n"]);return Ie=function(){return e},e}function De(){var e=Object(g.a)(["\n    font-size: 12px;\n"]);return De=function(){return e},e}var Ke=f.default.div(De()),Fe=f.default.div(Ie(),(function(e){return e.bgUrl})),Ve=f.default.div(Be()),Ne=f.default.span(Pe()),Ae=function(e){e.id;var t=e.imageUrl,a=e.title;return r.a.createElement(Ke,null,r.a.createElement(Ve,null,r.a.createElement(Fe,{bgUrl:t?"https://image.tmdb.org/t/p/w300".concat(t):n(23)})),r.a.createElement(Ne,null,a.length>18?"".concat(a.substring(0,18),"..."):a))};Ae.prototype={id:C.a.number.isRequired,imageUrl:C.a.string,title:C.a.string.isRequired};var Le=Ae;function Je(){var e=Object(g.a)(["\n    margin-bottom: 50px;\n"]);return Je=function(){return e},e}function Ge(){var e=Object(g.a)(["\n    height: 50px;\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n"]);return Ge=function(){return e},e}function He(){var e=Object(g.a)(["\n    height: 50px;\n    display:flex;\n    align-items: center;\n    justify-content: center;\n"]);return He=function(){return e},e}function Ye(){var e=Object(g.a)(["\n    font-size: 16px;\n    text-align: center;\n    width: 120px;\n    height: 50px;\n    opacity: 0.7;\n    &:hover {\n        opacity: 1;\n    }\n    border-bottom: 3px solid ",";\n    transition: border-bottom 0.5s ease-in-out, opacity 0.1s ease-in-out;\n"]);return Ye=function(){return e},e}function Qe(){var e=Object(g.a)(["\n    width: 80%;\n    height: 40px;\n    background-color: rgba(255, 255, 255, 0.3);\n    margin-top: 30px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    margin-bottom: 30px;\n"]);return Qe=function(){return e},e}function We(){var e=Object(g.a)(["\n    font-size: 16px;\n    opacity: 0.7;\n    line-height: 1.5;\n    width: 80%;\n"]);return We=function(){return e},e}function Xe(){var e=Object(g.a)(["\n    margin: 0 10px;\n"]);return Xe=function(){return e},e}function Ze(){var e=Object(g.a)(["\n    font-size: 16px;\n"]);return Ze=function(){return e},e}function $e(){var e=Object(g.a)(["\n    margin: 20px 0;\n"]);return $e=function(){return e},e}function et(){var e=Object(g.a)(["\n    font-size: 36px;\n"]);return et=function(){return e},e}function tt(){var e=Object(g.a)(["\n    width: 70%;\n    margin-left: 10px;\n"]);return tt=function(){return e},e}function nt(){var e=Object(g.a)(["\n    width: 30%;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    height: 100%;\n    border-radius: 5px;\n"]);return nt=function(){return e},e}function at(){var e=Object(g.a)(["\n    display: flex;\n    width: 100%;\n    position: relative;\n    z-index: 1;\n    height: 100%;\n"]);return at=function(){return e},e}function rt(){var e=Object(g.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    filter: blur(3px);\n    opacity: 0.5;\n    z-index: 0;\n"]);return rt=function(){return e},e}function it(){var e=Object(g.a)(["\n    height: calc(100vh - 50px);\n    width: 100%;\n    position: relative;\n    padding: 50px;\n"]);return it=function(){return e},e}var ot=f.default.div(it()),lt=f.default.div(rt(),(function(e){return e.bgImage})),ct=f.default.div(at()),ut=f.default.div(nt(),(function(e){return e.bgImage})),st=f.default.div(tt()),pt=f.default.h3(et()),dt=f.default.div($e()),mt=f.default.span(Ze()),gt=f.default.span(Xe()),ft=f.default.p(We()),vt=f.default.ul(Qe()),bt=f.default.li(Ye(),(function(e){return e.current?"#3498db":"transparent"})),ht=f.default.a(He()),yt=f.default.div(Ge()),Et=f.default.div(Je()),xt=function(e){var t=e.result,a=e.handleSeason,i=e.handleCollection,o=e.collection,l=e.handleCreatedBy,c=e.create,u=e.isMovie,s=e.season;e.error;return e.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,null,r.a.createElement("title",null,"Koflix | Loading")),r.a.createElement(N,null)):r.a.createElement(ot,null,r.a.createElement(se.a,null,r.a.createElement("title",null,"Koflix | ",t.original_title?t.title:t.name)),r.a.createElement(lt,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(ct,null,r.a.createElement(ut,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(23)}),r.a.createElement(st,null,r.a.createElement(pt,null,t.original_title?t.title:t.name),r.a.createElement(dt,null,r.a.createElement(mt,null,t.release_date?t.release_date.substring(0,4):t.last_air_date.substring(0,4)),r.a.createElement(gt,null,"\u2022"),r.a.createElement(mt,null,t.runtime?t.runtime:t.episode_run_time[0],"min"),r.a.createElement(gt,null,"\u2022"),r.a.createElement(mt,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})))),r.a.createElement(ft,null,t.overview),r.a.createElement(vt,null,t.videos.results.length>0?r.a.createElement(bt,null,r.a.createElement(ht,{href:"https://www.youtube.com/watch?v=".concat(t.videos.results[0].key),target:"_blank"},"Youtube")):null,u?r.a.createElement(bt,null,r.a.createElement(yt,{onClick:i},"Collection")):r.a.createElement(bt,null,r.a.createElement(yt,{onClick:a},"Season")),u?null:r.a.createElement(bt,null,r.a.createElement(yt,{onClick:l},"Created By"))),r.a.createElement(Et,null,t.belongs_to_collection&&!0===o&&r.a.createElement(K,{title:"Collection"},r.a.createElement(ce,{key:t.belongs_to_collection.id,id:t.belongs_to_collection.id,title:t.belongs_to_collection.name,imageUrl:t.belongs_to_collection.poster_path})),t.seasons&&!0===s&&r.a.createElement(K,{title:"Season"},t.seasons.map((function(e){return r.a.createElement(ce,{key:e.id,id:e.id,title:e.name,imageUrl:e.poster_path})})))," ",t.created_by&&!0===c&&r.a.createElement(K,{title:"Created By"},t.created_by.map((function(e){return r.a.createElement(Le,{key:e.id,id:e.id,title:e.name,imageUrl:e.profile_path})})))))))};xt.prototype={result:C.a.object,handleSeason:C.a.func,handleCreatedBy:C.a.func,handleCollection:C.a.func,create:C.a.bool,collection:C.a.bool,season:C.a.bool,error:C.a.string,isMovie:C.a.bool.isRequired,loading:C.a.bool.isRequired};var _t=xt,jt=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).componentDidMount=Object(U.a)(R.a.mark((function e(){var t,a,r,i,o,l,c,u;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.props,a=t.match.params.id,r=t.history.push,i=n.state.isMovie,o=parseInt(a),!isNaN(o)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(l=null,e.prev=6,!i){e.next=14;break}return e.next=10,he.movieDetail(o);case 10:c=e.sent,l=c.data,e.next=18;break;case 14:return e.next=16,ye.tvDetail(o);case 16:u=e.sent,l=u.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),n.setState({error:"Can't find anything."});case 23:return e.prev=23,n.setState({loading:!1,result:l}),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[6,20,23,26]])})));var a=e.match.path;return n.state={result:null,error:null,loading:!0,season:!1,create:!1,collection:!1,isMovie:a.includes("movie")},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.result,a=t.season,i=t.create,o=t.collection,l=t.error,c=t.loading,u=t.isMovie;return r.a.createElement(_t,{result:n,create:i,season:a,collection:o,handleCollection:function(){!0===o?e.setState({collection:!1}):e.setState({collection:!0})},isMovie:u,handleCreatedBy:function(){!0===i?e.setState({create:!1}):e.setState({create:!0})},handleSeason:function(){!0===a?e.setState({season:!1}):e.setState({season:!0})},error:l,loading:c})}}]),t}(a.Component),Ot=function(){return r.a.createElement(d.a,null,r.a.createElement(w,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,component:Ee}),r.a.createElement(m.b,{path:"/tv",exact:!0,component:qe}),r.a.createElement(m.b,{path:"/search",component:Ue}),r.a.createElement(m.b,{path:"/movie/:id",component:jt}),r.a.createElement(m.b,{path:"/show/:id",component:jt}),r.a.createElement(m.a,{from:"*",to:"/"})))},kt=n(45),wt=n.n(kt);function St(){var e=Object(g.a)(["\n    ",";\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n    * {\n        box-sizing: border-box;\n    }\n    body {\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 12px;\n        background-color: rgba(20, 20, 20, 1);\n        color: white;\n        padding-top: 50px;\n    }\n"]);return St=function(){return e},e}var Rt=Object(f.createGlobalStyle)(St(),wt.a),Ut=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ot,null),r.a.createElement(Rt,null))}}]),t}(a.Component);o.a.render(r.a.createElement(Ut,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.38c493ac.chunk.js.map