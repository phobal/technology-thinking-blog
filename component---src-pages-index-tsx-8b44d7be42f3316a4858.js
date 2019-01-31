(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return k}),n.d(t,"IndexQuery",function(){return _});n(53);var r=n(6),a=n.n(r),o=n(0),i=n.n(o),l=n(38),c=n(156),m=n(166),s=n(163),p=n.n(s),u=n(158),d=n(157),g=n(160),h=n.n(g),f=n(161),b=n.n(f),y=n(248),x=n.n(y),E=c.c.main.withConfig({displayName:"pages__Homepage",componentId:"sc-1peab7d-0"})(["display:flex;height:100vh;flex-direction:row;@media ","{height:100%;flex-direction:column;}@media ","{height:100%;flex-direction:column;}"],d.a.tablet,d.a.phone),w=c.c.div.withConfig({displayName:"pages__GridRow",componentId:"sc-1peab7d-1"})(["flex:1;display:flex;justify-content:center;align-items:center;background:",";background-size:cover;padding:2rem 4rem;color:",";h1{color:",";}@media ","{padding:3rem 3rem;}@media ","{padding:2rem 1.5rem;}"],function(e){return e.background?"linear-gradient(\n      -185deg,\n      "+h()(b()(.1,e.theme.colors.primary),.89)+", \n      "+h()(x()(.1,e.theme.colors.grey.dark),.9)+"), url(/assets/bg.png) no-repeat":null},function(e){return e.background?e.theme.colors.white:null},function(e){return e.background?e.theme.colors.white:null},d.a.tablet,d.a.phone),v=c.c.div.withConfig({displayName:"pages__HomepageContent",componentId:"sc-1peab7d-2"})(["max-width:30rem;text-align:",";"],function(e){return e.center?"center":"left"}),k=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark,t=e.edges,n=e.totalCount;return i.a.createElement(m.e,null,i.a.createElement(m.l,{fullWidth:!0},i.a.createElement(p.a,{title:"Homepage | "+u.a.siteTitle}),i.a.createElement(E,null,i.a.createElement(w,{background:!0},i.a.createElement(v,{center:!0},i.a.createElement("img",{src:u.a.siteLogo,style:{width:"100px"}}),i.a.createElement("h1",null,"Hi. I am ",i.a.createElement("br",null),"Phobal"),i.a.createElement("p",null,"front-end developer"),i.a.createElement(l.Link,{to:"/contact"},i.a.createElement(m.b,{big:!0},i.a.createElement("svg",{width:"1792",height:"1792",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"})),"Contact")),i.a.createElement(l.Link,{to:"/blog"},i.a.createElement(m.b,{big:!0},i.a.createElement("svg",{width:"1792",height:"1792",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"})),"Blog")))),i.a.createElement(w,null,i.a.createElement(v,null,i.a.createElement("h2",null,"About Me"),i.a.createElement("p",null,"Love Coding、Love Life"),i.a.createElement("hr",null),i.a.createElement("h2",null,"Latest Blog"),t.map(function(e){return i.a.createElement(m.a,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,slug:e.node.fields.slug,category:e.node.frontmatter.category,key:e.node.fields.slug})}),i.a.createElement("p",{className:"textRight"},i.a.createElement(l.Link,{to:"/blog"},"All articles (",n,")")))))))},t}(i.a.Component),_="2223859495"},157:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"}},158:function(e,t,n){"use strict";t.a={pathPrefix:"/",siteTitle:"Back To Home",siteTitleAlt:"博客主要",siteUrl:"https://phobal.github.io/technology-thinking-blog/",siteLanguage:"en",siteBanner:"/assets/banner.jpg",defaultBg:"/assets/bg.png",favicon:"src/favicon.png",siteDescription:"Typescript Power Blog with big typography",author:"Phobal",siteLogo:"/assets/logo.png",userTwitter:"@phobal",ogSiteName:"phobal",ogLanguage:"en_US",themeColor:"#3498DB",backgroundColor:"#2b2e3c",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"18px",siteFBAppID:"",Google_Tag_Manager_ID:"GTM-MVP42QK",POST_PER_PAGE:5}},164:function(e){e.exports={data:{site:{buildTime:"31.01.2019"}}}},165:function(e,t,n){},166:function(e,t,n){"use strict";var r=n(6),a=n.n(r),o=n(0),i=n.n(o),l=n(156),c=n(38),m=n(159),s=n.n(m),p=(n(167),n(160)),u=n.n(p),d=l.c.div.withConfig({displayName:"Subline",componentId:"r0qb95-0"})(["font-size:",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.light&&"color: "+u()(e.theme.colors.white,.7)},function(e){return e.sectionTitle&&"text-align: center"}),g=l.c.article.withConfig({displayName:"Article__Post",componentId:"sc-1jqucgb-0"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;"]),h=l.c.h2.withConfig({displayName:"Article__Title",componentId:"sc-1jqucgb-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),f=l.c.span.withConfig({displayName:"Article__Initiale",componentId:"sc-1jqucgb-2"})(["position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),b=l.c.p.withConfig({displayName:"Article__Excerpt",componentId:"sc-1jqucgb-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.date,r=e.excerpt,a=e.slug,o=e.timeToRead,l=e.category,m=t.charAt(0);return i.a.createElement(g,null,i.a.createElement(h,null,i.a.createElement(f,null,m),i.a.createElement(c.Link,{to:"/blog/"+a},t)),i.a.createElement(d,null,n," — ",o," Min Read — In",i.a.createElement(c.Link,{to:"/categories/"+s()(l)}," ",l)),i.a.createElement(b,null,r))},t}(i.a.PureComponent),x=(n(162),n(161)),E=n.n(x),w=l.c.button.withConfig({displayName:"Button",componentId:"ll5rxn-0"})(["background:",";border:none;display:inline-flex;align-items:center;margin:0 0.5rem;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitions.normal},function(e){return E()(.3,e.theme.colors.primary)}),v=n(173),k=n(157),_=n(158),N=l.c.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-90z1o6-0"})(["position:relative;background:linear-gradient( -185deg,",","," ),url(",") no-repeat;background-size:cover;padding:8rem 2rem 10rem;text-align:center;::after{background:transparent url(/assets/mask.svg) no-repeat bottom left;background-size:101%;bottom:-2px;content:'';display:block;height:100%;left:0;position:absolute;width:100%;}@media ","{padding:4rem 2rem 6rem;}@media ","{padding:1rem 0.5rem 2rem;}"],function(e){return u()(Object(v.a)(.1,e.theme.colors.primary),.6)},function(e){return u()(Object(v.b)(.1,e.theme.colors.grey.dark),.8)},function(e){return e.banner},k.a.tablet,k.a.phone),C=l.c.div.withConfig({displayName:"Header__Content",componentId:"sc-90z1o6-1"})(["position:relative;z-index:999;a{color:white;&:hover{opacity:0.85;color:white;}}"]),P=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement(N,{banner:this.props.banner||_.a.defaultBg},i.a.createElement(C,null,this.props.children))},t}(i.a.PureComponent),I=n(168),z=n.n(I),T=n(164),L={colors:{primary:"#ffc400",bg:"#fff",white:"#fff",grey:{dark:"rgba(179, 164, 60, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem",big:"2.9rem"}},j=n(169),S=n.n(j);n(165);function q(){var e=z()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n"]);return q=function(){return e},e}var A=Object(l.b)(q(),L.colors.bg,L.colors.primary,L.colors.bg,L.colors.grey.default,k.a.phone,L.colors.grey.dark,L.transitions.normal,L.colors.primary,L.colors.grey.dark,L.colors.primary,L.colors.grey.dark),B=l.c.footer.withConfig({displayName:"Layout__Footer",componentId:"vba7vf-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),O=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(c.StaticQuery,{query:"1536950682",render:function(t){return i.a.createElement(l.a,{theme:L},i.a.createElement(i.a.Fragment,null,i.a.createElement(A,null),e,i.a.createElement(B,null,"© ",S()(t.site.buildTime,".")[2]," by Phobal. All rights reserved. ",i.a.createElement("br",null),i.a.createElement("a",{href:"https://github.com/phobal/phobal.github.io"},"GitHub Repository")," ",i.a.createElement("br",null),i.a.createElement("span",null,"Last build: ",t.site.buildTime))))},data:T})},t}(i.a.PureComponent),F=l.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"sc-1bejvtc-0"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),M=l.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"sc-1bejvtc-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),R=l.c.div.withConfig({displayName:"PrevNext__Next",componentId:"sc-1bejvtc-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),W=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.prev,n=e.next;return i.a.createElement(F,null,t&&i.a.createElement(M,null,i.a.createElement("span",null,"Previous"),i.a.createElement(c.Link,{to:"/blog/"+s()(t.frontmatter.title)},t.frontmatter.title)),n&&i.a.createElement(R,null,i.a.createElement("span",null,"Next"),i.a.createElement(c.Link,{to:"/blog/"+s()(n.frontmatter.title)},n.frontmatter.title)))},t}(i.a.PureComponent),H=l.c.div.withConfig({displayName:"SectionTitle",componentId:"sc-1hec8w9-0"})(["font-size:",";text-transform:",";text-align:center;color:",";position:relative;padding:2rem 0 0;margin-bottom:2rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.big},function(e){return e.uppercase?"uppercase":"normal"},function(e){return e.theme.colors.white},function(e){return e.theme.colors.white}),D=n(163),U=n.n(D),G=function(e){var t,n,r,a,o=e.postNode,l=e.postPath,c=e.postSEO,m="/"===_.a.pathPrefix?"":_.a.pathPrefix;c?(t=o.frontmatter.title,n=o.excerpt,r=_.a.siteBanner,a=_.a.siteUrl+m+l):(t=_.a.siteTitle,n=_.a.siteDescription,r=_.a.siteBanner);r=_.a.siteUrl+m+r;var s=_.a.siteUrl+_.a.pathPrefix,p=[{"@context":"http://schema.org","@type":"WebSite","@id":s,url:s,name:t,alternateName:_.a.siteTitleAlt?_.a.siteTitleAlt:""}];return c&&(p=[{"@context":"http://schema.org","@type":"BlogPosting","@id":a,url:a,name:t,alternateName:_.a.siteTitleAlt?_.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:_.a.siteDescription,datePublished:o.frontmatter.date,dateModified:o.frontmatter.date,author:{"@type":"Person",name:_.a.author},publisher:{"@type":"Organization",name:_.a.author,logo:{"@type":"ImageObject",url:_.a.siteUrl+m+_.a.siteLogo}},isPartOf:s,mainEntityOfPage:{"@type":"WebSite","@id":s}}]),i.a.createElement(U.a,null,i.a.createElement("html",{lang:_.a.siteLanguage}),i.a.createElement("title",null,_.a.siteTitle),i.a.createElement("meta",{name:"description",content:n}),i.a.createElement("meta",{name:"image",content:r}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),i.a.createElement("meta",{property:"og:locale",content:_.a.ogLanguage}),i.a.createElement("meta",{property:"og:site_name",content:_.a.ogSiteName?_.a.ogSiteName:""}),i.a.createElement("meta",{property:"og:url",content:c?a:s}),c?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:t}),i.a.createElement("meta",{property:"og:description",content:n}),i.a.createElement("meta",{property:"og:image",content:r}),i.a.createElement("meta",{property:"fb:app_id",content:_.a.siteFBAppID?_.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:_.a.userTwitter?_.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:t}),i.a.createElement("meta",{name:"twitter:url",content:_.a.siteUrl}),i.a.createElement("meta",{name:"twitter:description",content:n}),i.a.createElement("meta",{name:"twitter:image",content:r}))},J=l.c.div.withConfig({displayName:"Wrapper",componentId:"sc-1t16n0z-0"})(["display:flex;flex-direction:column;margin:0 auto;max-width:",";padding:",";@media ","{padding:",";}@media ","{padding:",";}"],function(e){return e.fullWidth?"100%":"100rem"},function(e){return e.fullWidth?"0":"0 6rem"},k.a.tablet,function(e){return e.fullWidth?"0":"0 3rem"},k.a.phone,function(e){return e.fullWidth?"0":"0 1rem"}),Q=l.c.div.withConfig({displayName:"Content",componentId:"sc-8oa00p-0"})(["box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:2rem 4rem;background-color:",";z-index:9000;margin-top:-4rem;form{p{label,input{display:block;}input{min-width:275px;}textarea{resize:vertical;min-height:150px;width:100%;}}}@media ","{padding:3rem 3rem;}@media ","{padding:2rem 1.5rem;}"],function(e){return e.theme.colors.bg},k.a.tablet,k.a.phone),K=l.c.h3.withConfig({displayName:"Title",componentId:"oe4xmp-0"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),V=(n(79),n(170),n(171),n(172),l.c.div.withConfig({displayName:"Pagination__PaginationContainer",componentId:"sc-146hdjz-0"})(["text-align:center;margin:2rem;}"])),Y=l.c.div.withConfig({displayName:"Pagination__PaginationContent",componentId:"sc-146hdjz-1"})(["display:inline-block;padding:0 2.5rem;border-radius:3.5rem;background-color:#eee;@media ","{padding:0 1rem;}.page-numbers{display:block;float:left;transition:400ms ease;color:",";letter-spacing:0.1em;padding:1rem;&:hover,&.current{background-color:",";color:",";}&.prev{margin-left:-1.5rem;}&.next{margin-right:-1.5rem;}&.prev:hover,&.next:hover{background-color:transparent;color:",";}@media ","{padding:0 1.4rem;display:none;&:nth-of-type(2){position:relative;padding-right:5rem;&::after{content:'...';position:absolute;top:0;left:4.5rem;}}&:nth-child(-n + 3),&:nth-last-child(-n + 3){display:block;}&:nth-last-child(-n + 4){padding-right:1.4rem;&::after{content:none;}}}"],k.a.phone,L.colors.grey.light,E()(.2,L.colors.primary),L.colors.white,E()(.2,L.colors.primary),k.a.tablet),X=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.totalPages,r=e.url,a=1===t,o=t===n,l=t-1==1?"/"+r+"/":"/"+r+"/"+(t-1).toString(),m="/"+r+"/"+(t+1).toString();return n>1?i.a.createElement(V,null,i.a.createElement(Y,null,!a&&i.a.createElement(c.Link,{className:"prev page-numbers",to:l,rel:"prev"},"← Prev"),Array.from({length:n},function(e,n){return i.a.createElement(c.Link,{className:t===n+1?"page-numbers current":"page-numbers",key:"pagination-number"+(n+1),to:"/"+r+"/"+(0===n?"":n+1)},n+1)}),!o&&i.a.createElement(c.Link,{className:"next page-numbers",to:m,rel:"next"},"Next →"))):null},t}(i.a.PureComponent);n.d(t,"a",function(){return y}),n.d(t,"b",function(){return w}),n.d(t,"d",function(){return P}),n.d(t,"e",function(){return O}),n.d(t,"g",function(){return W}),n.d(t,"i",function(){return H}),n.d(t,"h",function(){return G}),n.d(t,"j",function(){return d}),n.d(t,"l",function(){return J}),n.d(t,"c",function(){return Q}),n.d(t,"k",function(){return K}),n.d(t,"f",function(){return X})},248:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=l(n(187)),a=l(n(188)),o=l(n(189)),i=l(n(190));function l(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){var n=(0,o.default)(t);return(0,i.default)(c({},n,{lightness:(0,a.default)(0,1,n.lightness+parseFloat(e))}))}var s=(0,r.default)(m);t.default=s,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8b44d7be42f3316a4858.js.map