(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2962:function(e,t,o){"use strict";o.d(t,{PB:function(){return d},lX:function(){return s}});var a=o(9008),r=o.n(a),n=o(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},i.apply(this,arguments)}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e,t,o){void 0===t&&(t=[]);var a=void 0===o?{}:o,r=a.defaultWidth,i=a.defaultHeight;return t.reduce((function(t,o,a){return t.push(n.createElement("meta",{key:"og:"+e+":0"+a,property:"og:"+e,content:o.url})),o.alt&&t.push(n.createElement("meta",{key:"og:"+e+":alt0"+a,property:"og:"+e+":alt",content:o.alt})),o.secureUrl&&t.push(n.createElement("meta",{key:"og:"+e+":secure_url0"+a,property:"og:"+e+":secure_url",content:o.secureUrl.toString()})),o.type&&t.push(n.createElement("meta",{key:"og:"+e+":type0"+a,property:"og:"+e+":type",content:o.type.toString()})),o.width?t.push(n.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:o.width.toString()})):r&&t.push(n.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:r.toString()})),o.height?t.push(n.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:o.height.toString()})):i&&t.push(n.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:i.toString()})),t}),[])},h=function(e){var t,o,a,r=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var p="";e.title?(p=e.title,l.templateTitle&&(p=l.templateTitle.replace(/%s/g,(function(){return p})))):e.defaultTitle&&(p=e.defaultTitle),p&&r.push(n.createElement("title",{key:"title"},p));var h,s,d=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,u=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow,m="";if(e.robotsProps){var g=e.robotsProps,f=g.nosnippet,y=g.maxSnippet,G=g.maxImagePreview,k=g.maxVideoPreview,v=g.noarchive,b=g.noimageindex,E=g.notranslate,w=g.unavailableAfter;m=(f?",nosnippet":"")+(y?",max-snippet:"+y:"")+(G?",max-image-preview:"+G:"")+(v?",noarchive":"")+(w?",unavailable_after:"+w:"")+(b?",noimageindex":"")+(k?",max-video-preview:"+k:"")+(E?",notranslate":"")}(d||u?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),r.push(n.createElement("meta",{key:"robots",name:"robots",content:(d?"noindex":"index")+","+(u?"nofollow":"follow")+m}))):r.push(n.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),e.description&&r.push(n.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&r.push(n.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){r.push(n.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&r.push(n.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&r.push(n.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&r.push(n.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&r.push(n.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||p)&&r.push(n.createElement("meta",{key:"og:title",property:"og:title",content:(null==(h=e.openGraph)?void 0:h.title)||p}));(null!=(o=e.openGraph)&&o.description||e.description)&&r.push(n.createElement("meta",{key:"og:description",property:"og:description",content:(null==(s=e.openGraph)?void 0:s.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&r.push(n.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var _=e.openGraph.type.toLowerCase();r.push(n.createElement("meta",{key:"og:type",property:"og:type",content:_})),"profile"===_&&e.openGraph.profile?(e.openGraph.profile.firstName&&r.push(n.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&r.push(n.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&r.push(n.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&r.push(n.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===_&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){r.push(n.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&r.push(n.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&r.push(n.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){r.push(n.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===_&&e.openGraph.article?(e.openGraph.article.publishedTime&&r.push(n.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&r.push(n.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&r.push(n.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){r.push(n.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&r.push(n.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){r.push(n.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==_&&"video.episode"!==_&&"video.tv_show"!==_&&"video.other"!==_||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&r.push(n.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&r.push(n.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){r.push(n.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){r.push(n.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&r.push(n.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&r.push(n.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){r.push(n.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&r.push(n.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&r.push.apply(r,c("image",e.openGraph.images,{defaultWidth:l.defaultOpenGraphImageWidth,defaultHeight:l.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&r.push.apply(r,c("video",e.openGraph.videos,{defaultWidth:l.defaultOpenGraphVideoWidth,defaultHeight:l.defaultOpenGraphVideoHeight})),e.openGraph.locale&&r.push(n.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&r.push(n.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&r.push(n.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,o,a;r.push(n.createElement("meta",i({key:"meta:"+(null!=(t=null!=(o=null!=(a=e.keyOverride)?a:e.name)?o:e.property)?t:e.httpEquiv)},e)))})),null!=(a=e.additionalLinkTags)&&a.length&&e.additionalLinkTags.forEach((function(e){var t;r.push(n.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),r},s=function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.title,o=e.titleTemplate,a=e.defaultTitle,i=e.dangerouslySetAllPagesToNoIndex,p=void 0!==i&&i,l=e.dangerouslySetAllPagesToNoFollow,c=void 0!==l&&l,s=e.description,d=e.canonical,u=e.facebook,m=e.openGraph,g=e.additionalMetaTags,f=e.twitter,y=e.defaultOpenGraphImageWidth,G=e.defaultOpenGraphImageHeight,k=e.defaultOpenGraphVideoWidth,v=e.defaultOpenGraphVideoHeight,b=e.mobileAlternate,E=e.languageAlternates,w=e.additionalLinkTags,_=e.robotsProps;return n.createElement(r(),null,h({title:t,titleTemplate:o,defaultTitle:a,dangerouslySetAllPagesToNoIndex:p,dangerouslySetAllPagesToNoFollow:c,description:s,canonical:d,facebook:u,openGraph:m,additionalMetaTags:g,twitter:f,defaultOpenGraphImageWidth:y,defaultOpenGraphImageHeight:G,defaultOpenGraphVideoWidth:k,defaultOpenGraphVideoHeight:v,mobileAlternate:b,languageAlternates:E,additionalLinkTags:w,robotsProps:_}))},t}(n.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.title,o=e.noindex,a=void 0!==o&&o,i=e.nofollow,p=e.robotsProps,l=e.description,c=e.canonical,s=e.openGraph,d=e.facebook,u=e.twitter,m=e.additionalMetaTags,g=e.titleTemplate,f=e.mobileAlternate,y=e.languageAlternates,G=e.additionalLinkTags;return n.createElement(r(),null,h({title:t,noindex:a,nofollow:i,robotsProps:p,description:l,canonical:c,facebook:d,openGraph:s,additionalMetaTags:m,twitter:u,titleTemplate:g,mobileAlternate:f,languageAlternates:y,additionalLinkTags:G}))},t}(n.Component),u=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"});new RegExp("["+Object.keys(u).join("")+"]","g")},1118:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(2395)}])},2395:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return l}});var a=o(5893),r=(o(6774),{title:"Juice 16236",description:"Juice 16236 is a FTC Team based in Folsom, CA.",canonical:"https://juicerobotics.org/",openGraph:{url:"https://juicerobotics.org",locale:"en_US",type:"website",title:"Juice 16236",description:"Juice 16236 is a FIRST\xae Tech Challenge team based in Folsom, CA.",images:[{url:"https://cdn.discordapp.com/attachments/949530485023977482/949530599318765578/JUICE_16236.png",alt:"Juice 16236 Logo",type:"image/png"},{url:"https://media.discordapp.net/attachments/884550121503752222/947384156403417088/Full_robot_v2_arm_up_2022-Feb-27_06-37-45AM-000_CustomizedView6366346004_jpg.jpeg",alt:"Juice 16236 Freight Frenzy Robot v2",type:"image/jpeg"}],site_name:"Juice 16236"},twitter:{cardType:"summary_large_image"},additionalMetaTags:[{property:"theme-color",content:"#fe8f00"}]}),n=o(2962);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},a=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),a.forEach((function(t){i(e,t,o[t])}))}return e}var l=function(e){var t=e.Component,o=e.pageProps;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.lX,p({},r)),(0,a.jsx)(t,p({},o,{dark:!0}))]})}},6774:function(){},9008:function(e,t,o){e.exports=o(3121)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(880)}));var o=e.O();_N_E=o}]);