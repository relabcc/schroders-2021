/*! For license information please see main.009d5fc2.chunk.js.LICENSE.txt */
(this["webpackJsonpstyled-cra"]=this["webpackJsonpstyled-cra"]||[]).push([[0],{136:function(e,t,n){"use strict";var o=n(8),r=n(76),c=n(3),a=n(0),i=n(610),s=n(190),u=n.n(s),l=n(77);function f(){var e=Object(r.a)([""]);return f=function(){return e},e}var d=Object(l.a)(i.a)(f());d.defaultProps={lineHeight:1.5},d.Inline=Object(a.forwardRef)((function(e,t){return Object(c.jsx)(d,Object(o.a)(Object(o.a)({as:"span"},e),{},{ref:t}))})),d.Bold=Object(a.forwardRef)((function(e,t){return Object(c.jsx)(d,Object(o.a)(Object(o.a)({fontWeight:"bold"},e),{},{ref:t}))})),d.Thin=Object(a.forwardRef)((function(e,t){return Object(c.jsx)(d,Object(o.a)(Object(o.a)({fontWeight:"200"},e),{},{ref:t}))})),u()(1,7).forEach((function(e){d["H".concat(e)]=Object(a.forwardRef)((function(t,n){return Object(c.jsx)(d,Object(o.a)(Object(o.a)({as:"h".concat(e),fontSize:"".concat(5-e,"xl")},t),{},{ref:n}))}))})),t.a=d},267:function(e,t,n){"use strict";var o=n(288),r=n.n(o),c=n(293);t.a=function(e,t){return Object(c.a)(function(e,t){return r()({prop:e,cssProperty:e},t)}(e,t))}},278:function(e,t,n){"use strict";t.a=n.p+"static/media/three-stripe.90ad307e.svg"},279:function(e,t,n){"use strict";t.a=n.p+"static/media/two-stripe.e883b6f2.svg"},280:function(e,t,n){"use strict";t.a=n.p+"static/media/dot-grid.1f616540.svg"},281:function(e,t,n){"use strict";t.a=n.p+"static/media/rings.6022d91a.png"},282:function(e,t,n){"use strict";t.a=n.p+"static/media/banner.c51681cd.png"},283:function(e,t,n){"use strict";t.a=n.p+"static/media/under-banner.17f989ed.png"},284:function(e,t,n){"use strict";var o=n(0);t.a=Object(o.createContext)({})},297:function(e,t,n){"use strict";var o=n(8),r=n(183),c=n(3),a=(n(0),n(613)),i=n(619),s=i.a;i.a.defaultProps={target:"_blank"};var u=n(58),l=function(e){var t=e.href,n=Object(r.a)(e,["href"]);return t?Object(c.jsx)(a.a,Object(o.a)({as:function(e){return Object(c.jsx)(s,Object(o.a)(Object(o.a)({},e),{},{href:t}))}},n)):Object(c.jsx)(a.a,Object(o.a)({},n))};l.defaultProps={colorScheme:"blue",fontSize:Object(u.c)("0.75em","1em"),height:"auto",px:"1.5em",py:"1em"},l.Secondary=function(e){return Object(c.jsx)(l,Object(o.a)({colorScheme:"green"},e))},l.Danger=function(e){return Object(c.jsx)(l,Object(o.a)({colorScheme:"red"},e))},l.SingleSharp=function(e){return Object(c.jsx)(l,Object(o.a)({letterSpacing:"0.075em",borderRadius:"0 2em 2em 2em"},e))};t.a=l},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return b}));var o=n(8),r=n(20),c=n(134),a=n(621),i=n(620),s=n(132),u=n.n(s),l=Object(i.a)({sm:"768px",md:"992px",lg:"1280px",xl:"1920px"}),f=[[0,"mobile"],[1,"tablet"],[2,"laptop"],[3,"desktop"]],d=l.map((function(e,t){var n=f.findIndex((function(e){return Object(r.a)(e,1)[0]+1>t}));return n>=0?n:f.length})),b=function(e){var t={};return function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];var c=JSON.stringify(o),a=t[c];if("undefined"!==typeof a)return"object"===typeof a&&null!==a?JSON.parse(JSON.stringify(a)):a;var i=e.apply(this,o);return t[c]=i,setTimeout((function(){delete t[c]}),36e5),"object"===typeof i&&null!==i?JSON.parse(JSON.stringify(i)):i}}((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.length;return o<=1?t[0]:l.map((function(e,n){return u()(t,[d[n]],null)}))})),j='"GenSekiGothic TW", "Noto Sans TC", "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif',p="#002A5E",h="#13E6F0",O="#B71962",g={fonts:{heading:j,body:j,mono:"Menlo, monospace"},colors:Object(o.a)(Object(o.a)({},c.b.colors),{},{bannerBg:"#00609F",primary:p,secondary:h,danger:O,text:u()(c.b.colors,"black"),lightGray:"#E6E6E6",lightGreen:"#B3D476",lightPurple:"#CABFEC",sun:"#F8A908",bgBlue:"#7688A3",lakeBlue:"#82CAD0",apple:"#63c532",prussianBlue:p,ceruleanBlue:h,gray:"#979797",red:"#FF5555",yellow:"#F5A737",darkGray:"#211815",brightBlue:"#0074B7",darkViolet:"#7D3787",vividViolet:"#A446BA",gigas:"#4F3398",mustard:"#FFDC53",conifer:"#bae659",pinkSalmon:"#FF90A1",mandy:"#df536A",disco:O,monza:"#FF5555",jungleGreen:"#00796d"}),breakpoints:l},m=Object(a.a)(g);t.b=m},586:function(e,t){!function(e,t,n){function o(e,t){return typeof e===t}function r(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):l?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}var c=[],a=[],i={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){a.push({name:e,fn:t,options:n})},addAsyncTest:function(e){a.push({name:null,fn:e})}},s=function(){};s.prototype=i,s=new s;var u=t.documentElement,l="svg"===u.nodeName.toLowerCase();s.addTest("video",(function(){var e=r("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t})),function(){var e,t,n,r,i,u;for(var l in a)if(a.hasOwnProperty(l)){if(e=[],(t=a[l]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(u=e[i].split(".")).length?s[u[0]]=r:(!s[u[0]]||s[u[0]]instanceof Boolean||(s[u[0]]=new Boolean(s[u[0]])),s[u[0]][u[1]]=r),c.push((r?"":"no-")+u.join("-"))}}(),function(e){var t=u.className,n=s._config.classPrefix||"";if(l&&(t=t.baseVal),s._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}s._config.enableClasses&&(t+=" "+n+e.join(" "+n),l?u.className.baseVal=t:u.className=t)}(c),delete i.addTest,delete i.addAsyncTest;for(var f=0;f<s._q.length;f++)s._q[f]();e.Modernizr=s}(window,document)},607:function(e,t){var n="TW_Outlooks_2021_";window.gaTrackClick=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=[t,o,r].filter(Boolean).join("-");console.log(n+e+(c?"-".concat(c):"")),window.gtag&&window.gtag("event","click",{event_category:"button",event_label:n+e+(c?"-".concat(c):"")})};var o=function(e){return"/"===e.slice(-1)?e:"".concat(e,"/")};window.gaTrackPageView=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;console.log("".concat(o(window.location.pathname),"#/").concat(e,"-").concat(t,"-").concat(n)),window.gtag&&window.gtag("event","page_view",{page_path:"".concat(o(window.location.pathname),"#/").concat(e,"-").concat(t,"-").concat(n)})}},608:function(e,t,n){"use strict";n.r(t);var o=n(3),r=(n(331),n(340),n(0)),c=n(286),a=n.n(c),i=n(255),s=n.n(i),u=(n(586),n(20)),l=n(178),f=n(29),d=n(265),b=n(86),j=n(136),p=(n(297),n(278)),h=n(279),O=n(280),g=n.p+"static/media/circle.32c944e6.svg",m=n(281),v=n(282),y=n(283),w=n(294),x=function(e){var t=e.index,n=e.data,r=e.style,c=105-t;return Object(o.jsx)("div",{style:r,children:c>=0&&c<=100&&Object(o.jsx)(b.a.Inline,{color:"white",borderBottom:n===t&&"4px solid white",children:Object(o.jsx)(j.a,{fontSize:"5em",children:c})})})},S=function(e){var t=e.progress,n=e.height,c=e.width,a=Object(r.useRef)();return Object(r.useEffect)((function(){a.current.scrollToItem(t+10)}),[t]),Object(o.jsx)(w.a,{height:n,itemData:t+5,itemCount:111,itemSize:124,width:c,ref:a,children:x})},T=function(e){var t=e.onLoaded,n=Object(r.useState)([]),c=Object(u.a)(n,2),a=c[0],i=c[1],s=Object(r.useState)({}),l=Object(u.a)(s,2),j=l[0],w=l[1],x=Object(r.useCallback)((function(e,t){var n=new XMLHttpRequest;n.onprogress=function(e){e.lengthComputable&&i((function(n){var o=Object(f.a)(n);return o[t]=[e.loaded,e.total],o}))},n.open("GET",e,!0),n.send()}),[]),T=Object(r.useMemo)((function(){if(!a.length)return 0;var e=a.reduce((function(e,t){return t?(e[0]+=t[0],e[1]+=t[1],e):e}),[0,0]);return Math.floor(e[0]/e[1]*100)}),[a]);return Object(r.useEffect)((function(){document.body.style.position="fixed",document.body.style.height="100%",document.body.style.overflow="hidden",[v.a,y.a,p.a,h.a,O.a,g,m.a].forEach((function(e,t){return x(e,t)}))}),[]),Object(r.useEffect)((function(){0===T&&t&&setTimeout((function(){t(),document.body.style.position=null,document.body.style.height=null,document.body.style.overflow=null}),1500)}),[T]),Object(o.jsx)(b.a,{position:"fixed",left:"0",top:"0",right:"0",height:"100vh",bg:"primary",zIndex:1e4,id:"loader",overflow:"hidden",children:Object(o.jsx)(d.a,{bounds:!0,onResize:function(e){var t=e.bounds;return w(t)},children:function(e){var t=e.measureRef;return Object(o.jsx)(b.a.Relative,{height:"100%",textAlign:"center",ref:t,children:j.width&&Object(o.jsx)(S,{width:j.width,height:j.height,progress:T})})}})})},k=n(185),A=n.n(k)()({loader:function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,801))},loading:function(){return null}});var C=function(){var e=Object(r.useState)(),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(l.c)(!n,null,{enter:{opacity:1},leave:{opacity:0},config:{duration:500}});return Object(o.jsxs)(o.Fragment,{children:[n&&Object(o.jsx)(A,{done:n}),a.map((function(e){var t=e.item,n=e.props,r=e.key;return t&&Object(o.jsx)(l.a.div,{style:n,children:Object(o.jsx)(T,{onLoaded:function(){return c(!0)}})},r)}))]})},E=n(32),R=n(623),B=n(76),F=n(58);function P(){var e=Object(B.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Noto+Sans+TC:wght@400;500;700&display=swap');\n  body {\n    min-width: 100%;\n    min-height: 100%;\n  }\n\n  img {\n    width: 100%;\n  }\n\n  body #outlook2021-tw-root {\n    font-size: 16px;\n  }\n\n  body.fonts-zh-tw #outlook2021-tw-root p {\n    font-family: ","!important;\n  }\n\n  body.fonts-zh-tw #outlook2021-tw-root #loader p {\n    font-family: 'Anton', sans-serif !important;\n  }\n"]);return P=function(){return e},e}var _=Object(E.d)(P(),F.b.fonts.body),N=function(e){var t=e.children;return Object(o.jsx)(R.a,{theme:F.b,children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(E.a,{styles:_}),t]})})},z=n(284),J=n(292),L=function(e){return Object(J.useMediaQuery)({query:"(min-width: ".concat(e,")")})},I=function(e){var t=e.children,n=F.a.map(L);return Object(o.jsx)(z.a.Provider,{value:n,children:t})},M=function(e){var t=e.children;return Object(o.jsx)(N,{children:Object(o.jsx)(I,{children:t})})};n(607);window.injectCSS=function(e){var t=document.createElement("link");t.href=e,t.rel="stylesheet",document.head.appendChild(t)};setTimeout((function(){a.a.render(Object(o.jsx)(M,{children:Object(o.jsx)(C,{})}),function(e){var t=document.getElementById(e),n=s()(document.querySelectorAll(".jumbotron"),(function(e){return e.contains(t)}));n.classList.contains("panel-white")&&n.classList.remove("panel-white");var o=n||t;return o.style.padding="0",o.id=e,o}("outlook2021-tw-root"))}))},86:function(e,t,n){"use strict";var o=n(8),r=n(76),c=n(3),a=n(0),i=n(609),s=n(77),u=n(267);function l(){var e=Object(r.a)(["\n","\n","\n"]);return l=function(){return e},e}var f=Object(s.a)(i.a)(l(),Object(u.a)("mixBlendMode"),(function(e){return e.onClick&&"cursor: pointer;"}));t.a=f,f.Inline=Object(a.forwardRef)((function(e,t){return Object(c.jsx)(f,Object(o.a)(Object(o.a)({as:"span",display:"inline-block",verticalAlign:"middle"},e),{},{ref:t}))})),f.Absolute=Object(a.forwardRef)((function(e,t){return Object(c.jsx)(f,Object(o.a)(Object(o.a)({position:"absolute"},e),{},{ref:t}))})),f.AbsCenter=Object(a.forwardRef)((function(e,t){return Object(c.jsx)(f.Absolute,Object(o.a)(Object(o.a)({top:"50%",left:"50%",transform:"translate(-50%, -50%)"},e),{},{ref:t}))})),f.FullAbs=Object(a.forwardRef)((function(e,t){return Object(c.jsx)(f.Absolute,Object(o.a)(Object(o.a)({top:"0",left:"0",right:"0",bottom:"0"},e),{},{ref:t}))})),f.Relative=Object(a.forwardRef)((function(e,t){return Object(c.jsx)(f,Object(o.a)(Object(o.a)({position:"relative"},e),{},{ref:t}))})),f.Fixed=Object(a.forwardRef)((function(e,t){return Object(c.jsx)(f,Object(o.a)(Object(o.a)({position:"fixed"},e),{},{ref:t}))})),f.Invisible=Object(a.forwardRef)((function(e,t){return Object(c.jsx)(f.Absolute,Object(o.a)(Object(o.a)({width:"0",height:"0",overflow:"hidden",opacity:"0"},e),{},{ref:t}))}))}},[[608,1,2]]]);