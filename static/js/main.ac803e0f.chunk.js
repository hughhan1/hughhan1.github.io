(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},,,,,,,,,function(e,t,n){e.exports=n(49)},,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/flatiron_building.301d5a68.jpg"},function(e,t,n){e.exports=n.p+"static/media/tv.69e75176.jpg"},function(e,t,n){e.exports=n.p+"static/media/strawberries.3aa33eda.jpg"},function(e,t,n){e.exports=n.p+"static/media/selfie.5bc493f6.jpg"},function(e,t,n){e.exports=n.p+"static/media/flare.cbbc0805.jpg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=n(9),i=n(1),s=["home","about","contact"],u={home:"/",about:"/about/",blog:"/blog/",contact:"/contact/"},m=n(7),d=n.n(m),p=(n(30),function(e){return a.createElement("div",{className:d()("footer",e.className)},a.createElement("div",{className:"footer-navigation"},s.filter(function(t){return t!==e.currentPage}).map(function(e,t){return a.createElement("span",null,a.createElement("span",{className:"footer-navigation__item"},a.createElement(l.b,{to:u[e]},e)),t<s.length-2&&"\xb7")})),a.createElement("div",{className:"footer-copyright"},"\xa9 ",(new Date).getFullYear()," hugh han"))}),h=(n(36),function(e){return a.createElement("div",{className:d()("page-body",e.className),style:{alignItems:e.alignItems}},e.children)}),g=(n(37),function(e){return a.createElement("div",{className:d()("page-container",e.className)},e.children)}),f=(n(38),function(e){return a.createElement("div",{className:d()(e.isHomePage?"home-page-content":"page-content",e.className)},e.children)});f.defaultProps={isHomePage:!1};var b=f,E=(n(39),function(e){return a.createElement("div",{className:"header"},e.text)}),v=(n(40),function(){return a.createElement(g,null,a.createElement(b,null,a.createElement(E,{text:"about"}),a.createElement(h,null,a.createElement("p",null,"Hi, I\u2019m Hugh."),a.createElement("p",null,"I'm a recent graduate from Johns Hopkins University where I studied computer science and applied math. I live in New York, where I work as an engineer at TikTok. I previously worked on a few open source projects: most notably a"," ",a.createElement("a",{href:"https://github.com/mypyc/mypyc",target:"_blank"},"Python compiler"),","," ",a.createElement("a",{href:"https://github.com/mongodb/mongo",target:"_blank"},"sharded database"),", and university"," ",a.createElement("a",{href:"https://github.com/noahpresler/semesterly",target:"_blank"},"course-scheduling platform"),"."),a.createElement("p",null,"In my free time I like dancing, shooting film photography, and checking off films from"," ",a.createElement("a",{href:"https://letterboxd.com/hughhan/watchlist",target:"_blank"},"my Letterboxd watchlist"),"."),a.createElement("p",null,"If you would like to get to know me, please ",a.createElement(l.b,{to:"/contact/"},"reach out"),". There are rarely things that I find as meaningful as genuine connections with other people."),a.createElement("p",null,"Thanks for stopping by!")),a.createElement(p,{currentPage:"about"})))}),k=(n(41),function(){return a.createElement(g,null,a.createElement(b,null,a.createElement(E,{text:"contact"}),a.createElement(h,{alignItems:"center"},a.createElement("p",null,"Let's get in touch!"),a.createElement(y,null)),a.createElement(p,{currentPage:"contact"})))}),y=function(){return a.createElement("form",{className:"contact-form",name:"contact-form",action:"https://formspree.io/hughhan1@gmail.com",method:"POST"},a.createElement("input",{className:"contact-form__input-field",type:"text",name:"name",minLength:3,placeholder:"your name",required:!0}),a.createElement("input",{className:"contact-form__input-field",type:"email",name:"_replyto",minLength:3,placeholder:"your email address",required:!0}),a.createElement("textarea",{className:"contact-form__input-field expanding",name:"message",placeholder:"your message",maxLength:320,required:!0}),a.createElement("button",{className:"submit-form-button",type:"submit",value:"Send"},a.createElement("svg",{version:"1.1",className:"send-icn",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100px",height:"36px",viewBox:"0 0 100 36","enable-background":"new 0 0 100 36",xmlSpace:"preserve"},a.createElement("path",{d:"M100,0L100,0 M23.8,7.1L100,0L40.9,36l-4.7-7.5L22,34.8l-4-11L0,30.5L16.4,8.7l5.4,15L23,7L23.8,7.1z M16.8,20.4l-1.5-4.3 l-5.1,6.7L16.8,20.4z M34.4,25.4l-8.1-13.1L25,29.6L34.4,25.4z M35.2,13.2l8.1,13.1L70,9.9L35.2,13.2z"})),a.createElement("small",null,"send")))},w=n(10),L=n(11),N=n(13),x=n(12),j=n(14),_=n(50),B=(n(16),function(e){return r.a.createElement("div",{className:"background"},r.a.createElement("img",{src:e.src,onChange:e.onChange,onLoad:e.onLoad}))}),I=function(e){return r.a.createElement("div",{className:"background",style:{backgroundColor:e.color}})},O=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(N.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).state={backgroundLoaded:!1},n.setBackgroundLoaded=function(){n.state.backgroundLoaded||n.setState({backgroundLoaded:!0})},n.onLoad=function(){n.setBackgroundLoaded(),n.props.onLoad&&n.props.onLoad()},n}return Object(j.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{src:this.props.src,onLoad:this.onLoad}),r.a.createElement(_.a,{classNames:"background-fade-in",in:!this.state.backgroundLoaded,timeout:300},r.a.createElement(I,{color:"#A0A5A9"})))}}]),t}(r.a.Component),S=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(N.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).state={backgroundLoaded:!1},n.shouldDisplayPlaceholderBackground=function(){return!n.state.backgroundLoaded&&null!==n.props.prevSrc},n.setBackgroundLoaded=function(){n.setState({backgroundLoaded:!0})},n}return Object(j.a)(t,e),Object(L.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.props.currSrc!==e.currSrc&&this.state===t&&this.setState({backgroundLoaded:!1})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{src:this.props.currSrc,onLoad:this.setBackgroundLoaded}),r.a.createElement(_.a,{in:this.shouldDisplayPlaceholderBackground(),classNames:"background-cross-fade",timeout:500},r.a.createElement(B,{src:this.props.prevSrc})))}}]),t}(r.a.Component),P=(n(42),[n(43),n(44),n(45),n(46),n(47)]),C=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(N.a)(this,Object(x.a)(t).call(this,e))).interval=void 0,n.interval=null,n.state={modifier:0,prevBackground:null,currBackground:P[0]},n}return Object(j.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){e.setState(function(e){var t=(e.modifier+1)%P.length;return{modifier:t,prevBackground:e.currBackground,currBackground:P[t]}})},5e3)}},{key:"componentWillUnmount",value:function(){null!==this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return a.createElement(g,{className:"home-page"},a.createElement(S,{currSrc:this.state.currBackground,prevSrc:this.state.prevBackground}),a.createElement(b,{isHomePage:!0},a.createElement("div",{className:"home-page__body"},a.createElement("div",{className:"home-page__title"},"hugh han"),a.createElement(p,{className:"home-page__footer",currentPage:"home"}))))}}]),t}(a.Component);n(48),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.a,{basename:""},r.a.createElement(i.a,{path:u.home,exact:!0,component:C}),r.a.createElement(i.a,{path:u.about,component:v}),r.a.createElement(i.a,{path:u.contact,component:k})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[25,1,2]]]);
//# sourceMappingURL=main.ac803e0f.chunk.js.map