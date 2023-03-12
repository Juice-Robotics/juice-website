(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{8273:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,n,r,s,a=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],r=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){s="";for(var l=3,c=0,u=0,f=n.length;u<f;++u)i.options.useIndianSeparators&&4===u&&(l=2,c=1),0!==u&&c%l==0&&(s=i.options.separator+s),c++,s=n[f-u-1]+s;n=s}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),a+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);this.el&&("INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e)},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},723:function(t,e,n){"use strict";var r=n(5893),i=n(1664),s=n.n(i),a=n(7294),o=n(7246),l=n.n(o),c=n(2814),u=n(1417),f=n(9398);e.Z=function(t){var e=(0,a.useState)(!1),i=(e[0],e[1],t.dark);return(0,r.jsxs)("footer",{className:l().footerDistributed+" "+l().footer+" "+(i?l().dark:l().light),children:[(0,r.jsxs)("div",{className:l().footerLeft,children:[(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{srcSet:n(1241)("./"+(i?"dark":"light")+"/logo.png"),type:"image/webp",width:"181",alt:"Juice 16236 Logo"}),(0,r.jsx)("img",{src:"/assets/"+(i?"dark":"light")+"/logo.png",alt:"Juice 16236 Logo"})]}),(0,r.jsxs)("p",{className:l().footerLinks,children:[(0,r.jsx)(s(),{href:"/",children:"Home"}),(0,r.jsx)(s(),{href:"/about",children:"About"}),(0,r.jsx)(s(),{href:"/sponsors",children:"Sponsors"}),(0,r.jsx)(s(),{href:"/contact",children:"Contact"})]}),(0,r.jsxs)("p",{className:l().footerCompanyName,children:["\xa9 ",(new Date).getFullYear()," Juice 16236. All Rights Reserved."]})]}),(0,r.jsxs)("div",{className:l().footerCenter,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(c.G,{icon:u.mdU,className:l().i}),(0,r.jsx)("p",{children:(0,r.jsx)(s(),{href:"https://twitter.com/ftcteam16236",children:"@ftcteam16236"})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.G,{icon:f.FU$,className:l().i}),(0,r.jsx)("p",{children:(0,r.jsx)(s(),{href:"mailto:ftcteam16236@gmail.com",children:"ftcteam16236@gmail.com"})})]})]}),(0,r.jsxs)("div",{className:l().footerRight,children:[(0,r.jsxs)("p",{className:l().footerCompanyAbout,children:[(0,r.jsx)("span",{children:"About Team Juice 16236"}),"Team Juice 16236 is a competitive robotics team in Folsom, CA. Founded in 2019, our team comprises of six high school students. Team Juice competes in the FIRST Tech Challenge (FTC), an international robotics competition open to grades 7-12. We are an official initiative under Silent Bot Deadly which is a  501(c)(3) Non-Profit."]}),(0,r.jsxs)("div",{className:l().footerIcons,children:[(0,r.jsx)("a",{alt:"Juice's YouTube Channel",href:"https://www.youtube.com/channel/UCDixouMNi5Kr-GYOzkJOmjg",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(c.G,{icon:u.opf,className:l().i})}),(0,r.jsx)("a",{alt:"Juice's Instagram",href:"https://www.instagram.com/team_16236/",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(c.G,{icon:u.Zzi,className:l().i})}),(0,r.jsx)("a",{alt:"Juice's Twitter",href:"https://twitter.com/ftcteam16236?lang=en",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(c.G,{icon:u.mdU,className:l().i})}),(0,r.jsx)("a",{alt:"Contact Juice",href:"mailto:ftcteam16236@gmail.com",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(c.G,{icon:f.FU$,className:l().i})}),(0,r.jsx)("a",{alt:"Juice's GitHub",href:"https://github.com/Juice-Robotics",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(c.G,{icon:u.zhw,className:l().i})})]})]})]})}},2103:function(t,e,n){"use strict";var r=n(5893),i=n(1664),s=n.n(i),a=n(7294),o=n(4879),l=n.n(o);e.Z=function(t){var e=(0,a.useState)(!1),i=e[0],o=e[1],c=t.dark,u=t.page;return(0,r.jsxs)("nav",{className:l().nav+" "+(c?l().dark:l().light),children:[(0,r.jsx)(s(),{href:"/",children:(0,r.jsx)("div",{className:l().logo,children:(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{srcSet:n(1241)("./"+(c?"dark":"light")+"/logo.png"),type:"image/webp",alt:"Juice 16236 Logo"}),(0,r.jsx)("img",{src:"/assets/"+(c?"dark":"light")+"/logo.png",alt:"Juice 16236 Logo"})]})})}),(0,r.jsxs)("ul",{className:"".concat(l().navLinks,"  ").concat(i?l().navActive:""),children:[(0,r.jsx)("li",{className:"home"==u?l().active:"",children:(0,r.jsx)(s(),{href:"/",children:"Home"})}),(0,r.jsx)("li",{className:"about"==u?l().active:"",children:(0,r.jsx)(s(),{href:"/about",children:"About"})}),(0,r.jsx)("li",{className:"sponsors"==u?l().active:"",children:(0,r.jsx)(s(),{href:"/sponsors",children:"Sponsors"})}),(0,r.jsx)("li",{className:"contact"==u?l().active:"",children:(0,r.jsx)(s(),{href:"/contact",children:"Contact"})})]}),(0,r.jsxs)("div",{className:"".concat(l().burger,"  ").concat(i?l().toggle:""),onClick:function(t){o(!i)},children:[(0,r.jsx)("div",{className:l().line1}),(0,r.jsx)("div",{className:l().line2}),(0,r.jsx)("div",{className:l().line3})]})]})}},518:function(t,e,n){"use strict";var r=n(5893),i=n(8470),s=n.n(i),a=n(7857);e.Z=function(t){var e=t.number,n=t.prefix,i=t.suffix,o=t.description,l=t.citation;return(0,r.jsxs)("div",{className:s().card,children:[(0,r.jsxs)("h3",{children:[n,(0,r.jsx)(a.ZP,{end:e,duration:1}),i]}),(0,r.jsxs)("p",{children:[o,l?(0,r.jsx)("sup",{children:l}):""]})]})}},7246:function(t){t.exports={footer:"Footer_footer__Tl1eP",footerDistributed:"Footer_footerDistributed__8DGCc",dark:"Footer_dark__YTV09",light:"Footer_light__xPIDa",footerLeft:"Footer_footerLeft__0LOiI",footerCenter:"Footer_footerCenter__ga8Tw",footerRight:"Footer_footerRight__rF0Vq",footerLinks:"Footer_footerLinks__a5eVd",footerCompanyName:"Footer_footerCompanyName__Dsv_6",i:"Footer_i__EtjDd","fa-envelope":"Footer_fa-envelope__4umyU",footerCompanyAbout:"Footer_footerCompanyAbout__elr9y",footerIcons:"Footer_footerIcons__K8jEa",shake:"Footer_shake__xbLsv"}},4879:function(t){t.exports={nav:"Navbar_nav__b3Hnv",dark:"Navbar_dark__9vqfW",light:"Navbar_light__YH1xb",logo:"Navbar_logo__E_Sw_",navLinks:"Navbar_navLinks__EHN_C",active:"Navbar_active__8GnRs",burger:"Navbar_burger__0Yw5y",toggle:"Navbar_toggle__QFzO1",navActive:"Navbar_navActive__blbLi",line1:"Navbar_line1__ZPqhi",line2:"Navbar_line2__6pGPr",line3:"Navbar_line3__3jyeP"}},2720:function(t){t.exports={dark:"SponsorsBrief_dark__oQiu4",light:"SponsorsBrief_light__2Y_Oz",main:"SponsorsBrief_main__0fQmE",sponsors:"SponsorsBrief_sponsors__tA4kz",white:"SponsorsBrief_white__QUE4s",halfwhite:"SponsorsBrief_halfwhite___037W",statsSection:"SponsorsBrief_statsSection__tVt4T",statsSectionStats:"SponsorsBrief_statsSectionStats__Y9bhU",info:"SponsorsBrief_info__xvXu3",financials:"SponsorsBrief_financials__P2cgD",downloads:"SponsorsBrief_downloads__Tk_cT",document:"SponsorsBrief_document__SJ0LL",contact:"SponsorsBrief_contact__PKDtm",error:"SponsorsBrief_error__rJsiK"}},8470:function(t){t.exports={card:"StatsCard_card__UCL2j"}},7857:function(t,e,n){"use strict";var r=n(7294),i=n(8273);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function f(t){var e=r.useRef(t);return u((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],p={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},d=function(t){var e=r.useMemo((function(){return a(a({},p),t)}),[t]),n=e.ref,s=e.startOnMount,o=e.enableReinitialize,l=e.delay,u=e.onEnd,d=e.onStart,m=e.onPauseResume,g=e.onReset,_=e.onUpdate,v=c(e,h),b=r.useRef(),x=r.useRef(),y=r.useRef(!1),j=f((function(){return function(t,e){var n=e.decimal,r=e.decimals,s=e.duration,a=e.easingFn,o=e.end,l=e.formattingFn,c=e.numerals,u=e.prefix,f=e.separator,h=e.start,p=e.suffix,d=e.useEasing,m=e.enableScrollSpy,g=e.scrollSpyDelay,_=e.scrollSpyOnce;return new i.CountUp(t,o,{startVal:h,duration:s,decimal:n,decimalPlaces:r,easingFn:a,formattingFn:l,numerals:c,separator:f,prefix:u,suffix:p,useEasing:d,useGrouping:!!f,enableScrollSpy:m,scrollSpyDelay:g,scrollSpyOnce:_})}("string"===typeof n?n:n.current,v)})),w=f((function(t){var e=b.current;if(e&&!t)return e;var n=j();return b.current=n,n})),V=f((function(){var t=function(){return w(!0).start((function(){null===u||void 0===u||u({pauseResume:S,reset:N,start:F,update:E})}))};l&&l>0?x.current=setTimeout(t,1e3*l):t(),null===d||void 0===d||d({pauseResume:S,reset:N,update:E})})),S=f((function(){w().pauseResume(),null===m||void 0===m||m({reset:N,start:F,update:E})})),N=f((function(){w().el&&(x.current&&clearTimeout(x.current),w().reset(),null===g||void 0===g||g({pauseResume:S,start:F,update:E}))})),E=f((function(t){w().update(t),null===_||void 0===_||_({pauseResume:S,reset:N,start:F})})),F=f((function(){N(),V()})),O=f((function(t){s&&(t&&N(),V())}));return r.useEffect((function(){y.current?o&&O(!0):(y.current=!0,O())}),[o,y,O,l,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){N()}}),[N]),{start:F,pauseResume:S,reset:N,update:E,getCountUp:w}},m=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,s=t.children,o=t.style,u=c(t,m),h=r.useRef(null),p=r.useRef(!1),g=d(a(a({},u),{},{ref:h,startOnMount:"function"!==typeof s||0===t.delay,enableReinitialize:!1})),_=g.start,v=g.reset,b=g.update,x=g.pauseResume,y=g.getCountUp,j=f((function(){_()})),w=f((function(e){t.preserveValue||v(),b(e)})),V=f((function(){"function"!==typeof t.children||h.current instanceof Element?y():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){V()}),[V]),r.useEffect((function(){p.current&&w(t.end)}),[t.end,w]);var S=n&&t;return r.useEffect((function(){n&&p.current&&j()}),[j,n,S]),r.useEffect((function(){!n&&p.current&&j()}),[j,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){p.current=!0}),[]),"function"===typeof s?s({countUpRef:h,start:_,reset:v,update:b,pauseResume:x,getCountUp:y}):r.createElement("span",l({className:e,ref:h,style:o},i),"undefined"!==typeof t.start?y().formattingFn(t.start):"")}},3492:function(t){t.exports="/_next/static/images/logo-3214850780121560839e001911de9c95.png.webp"},5335:function(t){t.exports="/_next/static/images/logo-35ed9992570252613f76406e797e7ba5.png.webp"},1241:function(t,e,n){var r={"./dark/logo.png":3492,"./light/logo.png":5335};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=s,t.exports=i,i.id=1241}}]);