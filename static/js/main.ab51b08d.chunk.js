(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,a){e.exports={info:"Weather_info__3_59q",time:"Weather_time__kzQJW",temp:"Weather_temp__1uzYZ",description:"Weather_description__S1ddQ",card:"Weather_card__3Q50I",container:"Weather_container__2T84I"}},14:function(e,t,a){e.exports={container:"SearchBar_container__2vBet",search:"SearchBar_search__2GKtg",dropdownMenu:"SearchBar_dropdownMenu__3McU7",loading:"SearchBar_loading__2Sevm"}},16:function(e,t,a){e.exports={container:"Tweets_container__2VfF6",tweets:"Tweets_tweets__3E63q"}},17:function(e,t,a){e.exports={scroll:"Popup_scroll__3obnZ",bounce:"Popup_bounce__1gzwx",instructions:"Popup_instructions__9eaNa"}},2:function(e,t,a){e.exports={info:"Corona_info__2ixLp",time:"Corona_time__1QkIK",category:"Corona_category__1eT1a",recovered:"Corona_recovered__p_eWA",confirmed:"Corona_confirmed__fwDZ3",dead:"Corona_dead__3UMyi",province:"Corona_province__3jEv_",iconBox:"Corona_iconBox__5b_-P",card:"Corona_card__2aFFa",container:"Corona_container__1MqDE"}},25:function(e,t,a){e.exports=a(38)},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),c=a.n(i),o=a(1),s=a.n(o),l=a(3),d=a(4),u=a(8),m=a(7),p=a(6),f=function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://flask-app-u63drvxcia-uc.a.run.app/",{method:"POST",body:JSON.stringify(t)});case 3:return a=e.sent,e.abrupt("return",a.json());case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=a(5),v=a(23),g=a.n(v),E=a(18),y=a.n(E),w=a(15),_=a.n(w),b=a(14),N=a.n(b),x=function(e){var t=Object(n.useState)(""),a=Object(h.a)(t,2),i=a[0],c=a[1],o=Object(n.useState)(window.location.hash),d=Object(h.a)(o,2),u=d[0],m=d[1],p=Object(n.useState)(!1),f=Object(h.a)(p,2),v=f[0],E=f[1],b=function(){var t=Object(l.a)(s.a.mark((function t(a,n,r){var i,o,l,d,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(a),t.next=3,Object(w.geocodeByAddress)(a);case 3:return i=t.sent,t.next=6,Object(w.getLatLng)(i[0]);case 6:if(o=t.sent,l=o.lat,d=o.lng,null===r){t.next=15;break}return y.a.setApiKey("AIzaSyC9lbeOtWeYfIXDmkRxeSG6GyWv9GkTyhc"),t.next=13,y.a.fromLatLng(l,d);case 13:u=t.sent,e.getData({city:r.terms[0].value,country:r.terms[r.terms.length-1].value,province:u.results[u.results.length-3].address_components[0].long_name,lat:l,lng:d});case 15:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.addEventListener("hashchange",(function(){m(window.location.hash)}))})),r.a.createElement("div",{style:{visibility:"#t1"===u||""===u?"initial":"hidden",opacity:"#t1"===u||""===u?1:0,transition:"visibility 0s, opacity 1s linear"}},r.a.createElement(g.a,{url:"https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyC9lbeOtWeYfIXDmkRxeSG6GyWv9GkTyhc","&libraries=places"),onLoad:function(){E(!0)}}),v?r.a.createElement(_.a,{value:i,onChange:c,onError:function(e){return function(e){console.log(e)}(e)},onSelect:b,searchOptions:{types:["(cities)"]}},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,i=e.loading;return r.a.createElement("div",null,r.a.createElement("div",{className:N.a.container},r.a.createElement("input",t({placeholder:"Anywhere..."})),r.a.createElement("div",{className:N.a.search,onClick:function(){c("")}})),r.a.createElement("div",{className:N.a.dropdownMenu},i?r.a.createElement("div",{className:N.a.loading},"...loading"):null,a.map((function(e,t){var a={padding:"15px",backgroundColor:"transparent",transition:"0.2s",fontFamily:'"Inconsolata", monospace'};return"suggestionitemActive"===(e.active?"suggestionitemActive":"suggestionItem")&&(a.borderLeft="10px solid rebeccapurple",a.cursor="pointer"),0===t&&(a.paddingTop="40px"),r.a.createElement("div",Object.assign({},n(e,{style:a}),{key:t}),e.formattedSuggestion.mainText+" "+e.formattedSuggestion.secondaryText)}))))})):null)},O=a(16),L=a.n(O),j=a(24),S=r.a.memo((function(e){var t=0,a=e.data;if(0===a.length)return r.a.createElement("div",{className:L.a.container,style:{height:e.show?"600px":"0px",borderWidth:e.show?"10px":"0px"}});function n(){return(n=Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading(!1);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var i=function(){++t===a.length&&function(){n.apply(this,arguments)}()};return r.a.createElement("div",{className:L.a.container,style:{height:e.show?"600px":"0px",borderWidth:e.show?"10px":"0px"}},r.a.createElement("ul",{className:L.a.tweets},a.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(j.a,{id:e,options:{align:"center",conversation:"none",theme:"dark"},onTweetLoadSuccess:function(){return i()}}))}))))})),C=a(12),k=a(10),W=a.n(k),T=function(e,t){return[-(t-window.innerHeight/2)/60,(e-window.innerWidth/2)/60,1.08]},M=function(e,t,a){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(a,")")},D=r.a.memo((function(e){function t(){return(t=Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading(!1);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var a=e.weather;0!==a.length&&function(){t.apply(this,arguments)}();var n=Object(C.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:300,friction:40}}})),i=Object(h.a)(n,2),c=i[0],o=i[1];return r.a.createElement("div",{className:W.a.container},r.a.createElement(C.a.div,{className:W.a.card,onMouseMove:function(e){var t=e.clientX,a=e.clientY;return o({xys:T(t,a)})},onMouseLeave:function(){return o({xys:[0,0,1]})},style:{transform:c.xys.interpolate(M)}},r.a.createElement("div",{style:{height:"300px",width:"400px",fontSize:"90px",textAlign:"center"}},r.a.createElement("div",{className:["fas fa-sun","fas fa-cloud","fas fa-cloud-showers-heavy","fas fa-poo-storm","fas fa-snowflake","fas fa-cloud-rain","fas fa-smog"][a[0]],style:{position:"relative",top:100}})),r.a.createElement("div",{className:W.a.info},r.a.createElement("div",{className:W.a.time},r.a.createElement("time",null,function(e){var t=new Date,a=t.getTime(),n=6e4*t.getTimezoneOffset(),r=new Date(a+n+1e3*e),i=r.getFullYear(),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][r.getMonth()];return r.getDate()+" "+c+" "+i+" "+r.getHours()+":"+r.getMinutes()}(a[2]))),r.a.createElement("div",{className:W.a.temp},r.a.createElement("div",null,a[1])),r.a.createElement("div",{className:W.a.description},r.a.createElement("div",null,a[3])))))}),(function(e,t){return e.weather===t.weather})),A=a(2),I=a.n(A),B=function(e,t){return[-(t-window.innerHeight/2)/60,(e-window.innerWidth/2)/60,1.08]},R=function(e,t,a){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(a,")")},Y=r.a.memo((function(e){var t=e.data,a=Object(C.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:300,friction:40}}})),n=Object(h.a)(a,2),i=n[0],c=n[1];function o(){return(o=Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading(!1);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}0!==t.length&&function(){o.apply(this,arguments)}();return r.a.createElement("div",{className:I.a.container},r.a.createElement(C.a.div,{className:I.a.card,onMouseMove:function(e){var t=e.clientX,a=e.clientY;return c({xys:B(t,a)})},onMouseLeave:function(){return c({xys:[0,0,1]})},style:{transform:i.xys.interpolate(R)}},r.a.createElement("div",{className:I.a.iconBox},r.a.createElement("div",{className:"fas fa-virus",style:{position:"relative",top:100}})),r.a.createElement("div",{className:I.a.info},r.a.createElement("div",{className:I.a.time},r.a.createElement("time",null,t[4])),r.a.createElement("div",{className:I.a.province},r.a.createElement("div",null,t[0])),r.a.createElement("div",{className:I.a.confirmed},r.a.createElement("div",{className:I.a.category},"Confirmed:",r.a.createElement("span",{id:I.a.confirmed},t[1]))),r.a.createElement("div",{className:I.a.dead},r.a.createElement("div",{className:I.a.category},"Dead:",r.a.createElement("span",{id:I.a.dead},t[2]))),r.a.createElement("div",{className:I.a.recovered},r.a.createElement("div",{className:I.a.category},"Recovered:",r.a.createElement("span",{id:I.a.recovered},null===t[3]?"Unknown":t[3]))))))}),(function(e,t){return e.data===t.data})),z=a(17),G=a.n(z),J=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(""),o=Object(h.a)(c,2),s=o[0],l=o[1];return Object(n.useEffect)((function(){window.addEventListener("hashchange",(function(){l(window.location.hash)}))}),[]),r.a.createElement("div",{className:G.a.container,style:{visibility:"#t1"===s||""===s?"initial":"hidden",opacity:"#t1"===s||""===s?1:0,transition:"visibility 0s, opacity 1s linear"}},r.a.createElement("button",{onClick:function(){console.log(a),i(!a)},className:G.a.scroll,style:{bottom:a?"26.5vh":"30px",transition:a?"all 0.1s ease-in":"all 0.3s ease-in"}}),r.a.createElement("div",{className:G.a.instructions,style:{height:a?"25vh":"0",bottom:a?"0":"-30px"}},"When the app first loads, there will not be any data because the city is not yet selected. To start, search any cities in the search bar above. Once selected a city, you can now navigate to the other pages (on the left hand side) to view the city's trends, weather and covid data. The weather and covid are made in form of cards, they are some really nice animation once you hover your mouse on top of them."))},P=(a(37),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={location:{city:null,country:null,province:null,lat:null,lng:null},tweets:[],weather:[],corona:[],initial:!0,tweetLoading:!1,weatherLoading:!1,coronaLoading:!1},e.handleData=function(){var t=Object(l.a)(s.a.mark((function t(a){var n,r,i,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({tweets:[],weather:[],corona:[]});case 2:return e.setState({initial:!1}),e.setState({tweetLoading:!0,weatherLoading:!0,coronaLoading:!0}),e.setState({location:a}),t.next=7,f(a);case 7:n=t.sent,r=n.tweets,i=n.weather,c=n.corona,e.setState({tweets:r,weather:i,corona:c});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleTweetLoading=function(t){e.setState({tweetLoading:t})},e.handleWeatherLoading=function(t){e.setState({weatherLoading:t})},e.handleCoronaLoading=function(t){e.setState({coronaLoading:t})},e.TweetConditionalRender=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:e.state.tweetLoading||e.state.initial?"":"none"}},r.a.createElement("section",{className:"icon fa fa-twitter"},r.a.createElement("span",{className:"title"},"TREND"),r.a.createElement("div",{style:{visibility:0===e.state.tweets.length?"hidden":"visible"}},r.a.createElement("span",{className:"loader"},r.a.createElement("span",{className:"loader-inner"}))))),r.a.createElement("div",{style:{visibility:e.state.tweetLoading||e.state.initial?"hidden":"visible"}},r.a.createElement(S,{show:!e.state.tweetLoading&&!e.state.initial,loading:function(t){return e.handleTweetLoading(t)},data:e.state.tweets})))},e.WeatherConditionalRender=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:e.state.weatherLoading||e.state.initial?"":"none"}},r.a.createElement("section",{className:"icon fas fa-cloud-sun"},r.a.createElement("span",{className:"title"},"WEATHER"),r.a.createElement("div",{style:{visibility:0===e.state.weather.length?"hidden":"visible"}},r.a.createElement("span",{className:"loader"},r.a.createElement("span",{className:"loader-inner"}))))),r.a.createElement("div",{style:{visibility:e.state.weatherLoading||e.state.initial?"hidden":"visible"}},r.a.createElement(D,{loading:function(t){return e.handleWeatherLoading(t)},weather:e.state.weather})))},e.CoronaConditionalRender=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:e.state.coronaLoading||e.state.initial?"":"none"}},r.a.createElement("section",{className:"icon fas fa-virus"},r.a.createElement("span",{className:"title"},"COVID-19"),r.a.createElement("div",{style:{visibility:0===e.state.corona.length?"hidden":"visible"}},r.a.createElement("span",{className:"loader"},r.a.createElement("span",{className:"loader-inner"}))))),r.a.createElement("div",{style:{visibility:e.state.coronaLoading||e.state.initial?"hidden":"visible"}},r.a.createElement(Y,{loading:function(t){return e.handleCoronaLoading(t)},data:e.state.corona})))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ct",id:"t1"},r.a.createElement("div",{className:"ct",id:"t2"},r.a.createElement("div",{className:"ct",id:"t3"},r.a.createElement("div",{className:"ct",id:"t4"},r.a.createElement("div",{className:"ct",id:"t5"},r.a.createElement("ul",{id:"menu"},r.a.createElement("a",{href:"#t1"},r.a.createElement("li",{className:"icon fa fa-search",id:"uno"})),r.a.createElement("a",{href:"#t2"},r.a.createElement("li",{className:"icon fas fa-cloud-sun",id:"dos"})),r.a.createElement("a",{href:"#t3"},r.a.createElement("li",{className:"icon fab fa-twitter",id:"tres"})),r.a.createElement("a",{href:"#t4"},r.a.createElement("li",{className:"icon fas fa-virus",id:"cuatro"}))),r.a.createElement("div",{className:"page",id:"p1"},r.a.createElement("section",null,r.a.createElement(J,null),r.a.createElement(x,{className:"searchBar",getData:function(t){return e.handleData(t)}}))),r.a.createElement("div",{className:"page",id:"p2"},this.WeatherConditionalRender()),r.a.createElement("div",{className:"page",id:"p3"},this.TweetConditionalRender()),r.a.createElement("div",{className:"page",id:"p4"},this.CoronaConditionalRender()))))))}}]),a}(r.a.Component));c.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ab51b08d.chunk.js.map