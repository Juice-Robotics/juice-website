(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8273:function(e,t,n){"use strict";n.r(t),n.d(t,{CountUp:function(){return o}});var s=function(){return(s=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=function(){function e(e,t,n){var o=this;this.endVal=t,this.options=n,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){o.startTime||(o.startTime=e);var t=e-o.startTime;o.remaining=o.duration-t,o.useEasing?o.countDown?o.frameVal=o.startVal-o.easingFn(t,0,o.startVal-o.endVal,o.duration):o.frameVal=o.easingFn(t,o.startVal,o.endVal-o.startVal,o.duration):o.frameVal=o.startVal+(o.endVal-o.startVal)*(t/o.duration);var n=o.countDown?o.frameVal<o.endVal:o.frameVal>o.endVal;o.frameVal=n?o.endVal:o.frameVal,o.frameVal=Number(o.frameVal.toFixed(o.options.decimalPlaces)),o.printValue(o.frameVal),t<o.duration?o.rAF=requestAnimationFrame(o.count):null!==o.finalEndVal?o.update(o.finalEndVal):o.callback&&o.callback()},this.formatNumber=function(e){var t,n,s,i,r=e<0?"-":"";t=Math.abs(e).toFixed(o.options.decimalPlaces);var a=(t+="").split(".");if(n=a[0],s=a.length>1?o.options.decimal+a[1]:"",o.options.useGrouping){i="";for(var l=3,c=0,u=0,h=n.length;u<h;++u)o.options.useIndianSeparators&&4===u&&(l=2,c=1),0!==u&&c%l==0&&(i=o.options.separator+i),c++,i=n[h-u-1]+i;n=i}return o.options.numerals&&o.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return o.options.numerals[+e]})),s=s.replace(/[0-9]/g,(function(e){return o.options.numerals[+e]}))),r+o.options.prefix+n+s+o.options.suffix},this.easeOutExpo=function(e,t,n,s){return n*(1-Math.pow(2,-10*e/s))*1024/1023+t},this.options=s(s({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return o.handleScroll(o)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),s=n.top+window.pageYOffset,o=n.top+n.height+window.pageYOffset;o<t&&o>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>o||s>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);this.el&&("INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t)},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},723:function(e,t,n){"use strict";var s=n(5893),o=n(1664),i=n.n(o),r=n(7294),a=n(7246),l=n.n(a),c=n(2814),u=n(1417),h=n(9398);t.Z=function(e){var t=(0,r.useState)(!1),o=(t[0],t[1],e.dark);return(0,s.jsxs)("footer",{className:l().footerDistributed+" "+l().footer+" "+(o?l().dark:l().light),children:[(0,s.jsxs)("div",{className:l().footerLeft,children:[(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{srcSet:n(1241)("./"+(o?"dark":"light")+"/logo.png"),type:"image/webp",width:"181",alt:"Juice 16236 Logo"}),(0,s.jsx)("img",{src:"/assets/"+(o?"dark":"light")+"/logo.png",alt:"Juice 16236 Logo"})]}),(0,s.jsxs)("p",{className:l().footerLinks,children:[(0,s.jsx)(i(),{href:"/",children:"Home"}),(0,s.jsx)(i(),{href:"/about",children:"About"}),(0,s.jsx)(i(),{href:"/sponsors",children:"Sponsors"}),(0,s.jsx)(i(),{href:"/contact",children:"Contact"}),(0,s.jsx)(i(),{href:"/press",children:"Press"})]}),(0,s.jsxs)("p",{className:l().footerCompanyName,children:["\xa9 ",(new Date).getFullYear()," Juice 16236. All Rights Reserved."]})]}),(0,s.jsxs)("div",{className:l().footerCenter,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(c.G,{icon:u.mdU,className:l().i}),(0,s.jsx)("p",{children:(0,s.jsx)(i(),{href:"https://twitter.com/ftcteam16236",children:"@ftcteam16236"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.G,{icon:h.FU$,className:l().i}),(0,s.jsx)("p",{children:(0,s.jsx)(i(),{href:"mailto:ftcteam16236@gmail.com",children:"ftcteam16236@gmail.com"})})]})]}),(0,s.jsxs)("div",{className:l().footerRight,children:[(0,s.jsxs)("p",{className:l().footerCompanyAbout,children:[(0,s.jsx)("span",{children:"ABOUT TEAM JUICE 16236"}),"Team Juice 16236 is a competitive robotics team in Folsom, CA. Founded in 2019, our team comprises of eight high school and middle school students. Team Juice competes in the FIRST Tech Challenge (FTC), an international robotics competition open to grades 7-12. We are an official initiative under Silent Bot Deadly which is a  501(c)(3) Non-Profit."]}),(0,s.jsxs)("div",{className:l().footerIcons,children:[(0,s.jsx)("a",{alt:"Juice's YouTube Channel",href:"https://www.youtube.com/channel/UCDixouMNi5Kr-GYOzkJOmjg",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(c.G,{icon:u.opf,className:l().i})}),(0,s.jsx)("a",{alt:"Juice's Instagram",href:"https://www.instagram.com/team_16236/",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(c.G,{icon:u.Zzi,className:l().i})}),(0,s.jsx)("a",{alt:"Juice's Twitter",href:"https://twitter.com/ftcteam16236?lang=en",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(c.G,{icon:u.mdU,className:l().i})}),(0,s.jsx)("a",{alt:"Contact Juice",href:"mailto:ftcteam16236@gmail.com",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(c.G,{icon:h.FU$,className:l().i})}),(0,s.jsx)("a",{alt:"Juice's GitHub",href:"https://github.com/Juice-Robotics",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(c.G,{icon:u.zhw,className:l().i})})]})]})]})}},2103:function(e,t,n){"use strict";var s=n(5893),o=n(1664),i=n.n(o),r=n(7294),a=n(4879),l=n.n(a);t.Z=function(e){var t=(0,r.useState)(!1),o=t[0],a=t[1],c=e.dark,u=e.page;return(0,s.jsxs)("nav",{className:l().nav+" "+(c?l().dark:l().light),children:[(0,s.jsx)(i(),{href:"/",children:(0,s.jsx)("div",{className:l().logo,children:(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{srcSet:n(1241)("./"+(c?"dark":"light")+"/logo.png"),type:"image/webp",alt:"Juice 16236 Logo"}),(0,s.jsx)("img",{src:"/assets/"+(c?"dark":"light")+"/logo.png",alt:"Juice 16236 Logo"})]})})}),(0,s.jsxs)("ul",{className:"".concat(l().navLinks,"  ").concat(o?l().navActive:""),children:[(0,s.jsx)("li",{className:"home"==u?l().active:"",children:(0,s.jsx)(i(),{href:"/",children:"Home"})}),(0,s.jsx)("li",{className:"about"==u?l().active:"",children:(0,s.jsx)(i(),{href:"/about",children:"About"})}),(0,s.jsx)("li",{className:"sponsors"==u?l().active:"",children:(0,s.jsx)(i(),{href:"/sponsors",children:"Sponsors"})}),(0,s.jsx)("li",{className:"contact"==u?l().active:"",children:(0,s.jsx)(i(),{href:"/contact",children:"Contact"})})]}),(0,s.jsxs)("div",{className:"".concat(l().burger,"  ").concat(o?l().toggle:""),onClick:function(e){a(!o)},children:[(0,s.jsx)("div",{className:l().line1}),(0,s.jsx)("div",{className:l().line2}),(0,s.jsx)("div",{className:l().line3})]})]})}},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var s=n(5893),o=n(9008),i=n.n(o),r=n(7160),a=n.n(r),l=n(2962),c=n(2103),u=n(723),h=n(5964),m=n(7857),d=n(1664),p=n.n(d);function f(e){var t=e.dark;return(0,s.jsxs)("div",{className:t?a().dark:a().light,children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:"Juice 16236"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)(l.PB,{title:"Team Juice 16236 - Home",description:"Juice 16236 is a FTC Team based in Folsom, CA.",canonical:"https://juicerobotics.org/",openGraph:{url:"https://juicerobotics.org",title:"Juice 16236",description:"Juice 16236 is a FIRST\xae Tech Challenge team based in Folsom, CA.",images:[{url:"https://cdn.discordapp.com/attachments/949530485023977482/949530599318765578/JUICE_16236.png",alt:"Juice 16236 Logo",type:"image/png"},{url:"https://media.discordapp.net/attachments/884550121503752222/947384156403417088/Full_robot_v2_arm_up_2022-Feb-27_06-37-45AM-000_CustomizedView6366346004_jpg.jpeg",alt:"Juice 16236 Freight Frenzy Robot v2",type:"image/jpeg"}],site_name:"Juice 16236"},twitter:{cardType:"summary_large_image"},additionalMetaTags:[{property:"theme-color",content:"#fe8f00"}]}),(0,s.jsx)(c.Z,{dark:t,page:"home"}),(0,s.jsxs)("main",{className:a().main,children:[(0,s.jsx)("div",{className:a().dots,children:(0,s.jsxs)("section",{className:a().robotStack,children:[(0,s.jsx)("h1",{className:a().topText,children:"JUICE"}),(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{srcSet:n(7237),type:"image/webp",width:"900",alt:""}),(0,s.jsx)("img",{src:"/assets/robot-trans-3.png",alt:"Juice 16236 Logo"})]}),(0,s.jsx)("h1",{className:a().bottomText,children:"16236"})]})}),(0,s.jsxs)("section",{className:a().miniStats,children:[(0,s.jsxs)("div",{className:a().smolSponsorsSection,children:[(0,s.jsx)("p",{children:"SPONSORED BY"}),(0,s.jsx)("div",{className:a().scroller,children:(0,s.jsxs)("ul",{className:a().innerScroller,children:[h.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:e.website,target:"_blank",rel:"noreferrer",children:(0,s.jsx)("img",{alt:e.name+" Logo",src:e.logo,className:"grayscaleSponsor"==e.imgClass?a().grayscaleSponsor:""})})},h.findIndex((function(t){t.website,e.website})).toString())})),h.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:e.website,target:"_blank",rel:"noreferrer",children:(0,s.jsx)("img",{alt:e.name+" Logo",src:e.logo,className:"grayscaleSponsor"==e.imgClass?a().grayscaleSponsor:""})})},h.findIndex((function(t){t.website,e.website})).toString()+"2")}))]})})]}),(0,s.jsxs)("h2",{children:["Ranked ",(0,s.jsxs)("span",{style:{color:"#FF9626"},children:["#",(0,s.jsx)(m.ZP,{start:1,end:9,duration:1.5,separator:",",enableScrollSpy:!0,scrollSpyOnce:!0})]})," out of 6,000+"]}),(0,s.jsx)("small",{children:"IN THE 2023 SEASON"}),(0,s.jsxs)("div",{className:a().statsContainer,children:[(0,s.jsxs)("div",{className:a().statsCard,children:[(0,s.jsx)("h3",{children:"Award Winning Robots"}),(0,s.jsx)("p",{children:"15+ awards and 50+ matches won in team history"}),(0,s.jsx)("br",{}),(0,s.jsx)(p(),{href:"/neo",children:(0,s.jsx)("a",{className:a().button,children:"MEET THE ROBOT"})})]}),(0,s.jsxs)("div",{className:a().statsCard,children:[(0,s.jsxs)("h3",{children:[(0,s.jsx)(m.ZP,{end:1e4,duration:1,separator:",",enableScrollSpy:!0,scrollSpyOnce:!0}),"+ people impacted"]}),(0,s.jsxs)("p",{children:["in ",(0,s.jsx)("bold",{style:{fontWeight:"700"},children:"10+ countries"})," through the Juice Outreach Program"]}),(0,s.jsx)("br",{}),(0,s.jsx)(p(),{href:"/outreach",children:(0,s.jsx)("a",{className:a().button,children:"LEARN MORE"})})]}),(0,s.jsxs)("div",{className:a().statsCard,children:[(0,s.jsxs)("h3",{children:[(0,s.jsx)(m.ZP,{end:2,duration:.25,separator:",",enableScrollSpy:!0,scrollSpyOnce:!0}),"x NorCal Champions"]}),(0,s.jsx)("p",{children:"and played in every NorCal Championship playoffs since 2019"}),(0,s.jsx)(p(),{href:"/about",children:(0,s.jsx)("a",{className:a().button,children:"MEET THE TEAM"})})]})]})]}),(0,s.jsxs)("section",{className:a().aboutSection,children:[(0,s.jsxs)("div",{className:a().picColumn,children:[(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{srcSet:n(2122),type:"image/webp",alt:"Team Juice (2022)"}),(0,s.jsx)("img",{src:"/assets/team/team_2024.png",alt:"Juice 16236 2021-22"})]}),(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{srcSet:n(3446),type:"image/webp",alt:'Juice 16236 Award-Winning "REDEMPTION v3" Robot'}),(0,s.jsx)("img",{src:"/assets/roseville-bot.jpg",alt:'Juice 16236 Award-Winning "REDEMPTION v3" Robot'})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{children:["ABOUT ",(0,s.jsx)("span",{style:{color:"#FF9626"},children:"TEAM JUICE"})]}),(0,s.jsx)("p",{children:"Team Juice 16236 is a competitive robotics team in Folsom, CA. Founded in 2019, our team comprises of eight high school and middle school students. Team Juice competes in the FIRST Tech Challenge (FTC), an international robotics competition open to grades 7-12. We are an official initiative under Silent Bot Deadly which is a 501(c)(3) Non-Profit."}),(0,s.jsx)("h3",{style:{color:"#FF9626"},children:"2023-24 SPONSORS"}),(0,s.jsx)("div",{className:a().sponsors,children:h.map((function(e){return(0,s.jsx)("a",{href:e.website,target:"_blank",rel:"noreferrer",children:(0,s.jsx)("img",{alt:e.name+" Logo",src:e.logo,className:"grayscaleSponsor"==e.imgClass?a().grayscaleSponsor:""})},h.findIndex((function(t){t.website,e.website})).toString())}))})]})]})]}),(0,s.jsx)(u.Z,{dark:t})]})}},7246:function(e){e.exports={footer:"Footer_footer__Tl1eP",footerDistributed:"Footer_footerDistributed__8DGCc",dark:"Footer_dark__YTV09",light:"Footer_light__xPIDa",footerLeft:"Footer_footerLeft__0LOiI",footerCenter:"Footer_footerCenter__ga8Tw",footerRight:"Footer_footerRight__rF0Vq",footerLinks:"Footer_footerLinks__a5eVd",footerCompanyName:"Footer_footerCompanyName__Dsv_6",i:"Footer_i__EtjDd","fa-envelope":"Footer_fa-envelope__4umyU",footerCompanyAbout:"Footer_footerCompanyAbout__elr9y",footerIcons:"Footer_footerIcons__K8jEa",shake:"Footer_shake__xbLsv"}},7160:function(e){e.exports={dark:"Home_dark__DPUmS",light:"Home_light__2FbJR",main:"Home_main__nLjiQ",robotStack:"Home_robotStack__TzpOp",aboutSection:"Home_aboutSection__YeVMv",sponsors:"Home_sponsors__IKeoG",topText:"Home_topText__3GZwy",bottomText:"Home_bottomText__dRqyz",picColumn:"Home_picColumn__AeC5O",grayscaleSponsor:"Home_grayscaleSponsor__JcHCQ",dots:"Home_dots__wCG8X",smolSponsorsSection:"Home_smolSponsorsSection__deoSt",scroller:"Home_scroller__fzyYA",innerScroller:"Home_innerScroller__G6z8U",scroll:"Home_scroll__lfp6U",miniStats:"Home_miniStats__5M8zy",statsContainer:"Home_statsContainer__H8z14",statsCard:"Home_statsCard__41Xec",button:"Home_button__Zs7A2"}},4879:function(e){e.exports={nav:"Navbar_nav__b3Hnv",dark:"Navbar_dark__9vqfW",light:"Navbar_light__YH1xb",logo:"Navbar_logo__E_Sw_",navLinks:"Navbar_navLinks__EHN_C",active:"Navbar_active__8GnRs",burger:"Navbar_burger__0Yw5y",toggle:"Navbar_toggle__QFzO1",navActive:"Navbar_navActive__blbLi",line1:"Navbar_line1__ZPqhi",line2:"Navbar_line2__6pGPr",line3:"Navbar_line3__3jyeP"}},7857:function(e,t,n){"use strict";var s=n(7294),o=n(8273);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,t||"default");if("object"!==typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?s.useLayoutEffect:s.useEffect;function h(e){var t=s.useRef(e);return u((function(){t.current=e})),s.useCallback((function(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return t.current.apply(void 0,n)}),[])}var m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],d={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},p=function(e){var t=s.useMemo((function(){return r(r({},d),e)}),[e]),n=t.ref,i=t.startOnMount,a=t.enableReinitialize,l=t.delay,u=t.onEnd,p=t.onStart,f=t.onPauseResume,g=t.onReset,b=t.onUpdate,_=c(t,m),x=s.useRef(),w=s.useRef(),j=s.useRef(!1),v=h((function(){return function(e,t){var n=t.decimal,s=t.decimals,i=t.duration,r=t.easingFn,a=t.end,l=t.formattingFn,c=t.numerals,u=t.prefix,h=t.separator,m=t.start,d=t.suffix,p=t.useEasing,f=t.enableScrollSpy,g=t.scrollSpyDelay,b=t.scrollSpyOnce;return new o.CountUp(e,a,{startVal:m,duration:i,decimal:n,decimalPlaces:s,easingFn:r,formattingFn:l,numerals:c,separator:h,prefix:u,suffix:d,useEasing:p,useGrouping:!!h,enableScrollSpy:f,scrollSpyDelay:g,scrollSpyOnce:b})}("string"===typeof n?n:n.current,_)})),y=h((function(e){var t=x.current;if(t&&!e)return t;var n=v();return x.current=n,n})),S=h((function(){var e=function(){return y(!0).start((function(){null===u||void 0===u||u({pauseResume:N,reset:C,start:F,update:E})}))};l&&l>0?w.current=setTimeout(e,1e3*l):e(),null===p||void 0===p||p({pauseResume:N,reset:C,update:E})})),N=h((function(){y().pauseResume(),null===f||void 0===f||f({reset:C,start:F,update:E})})),C=h((function(){y().el&&(w.current&&clearTimeout(w.current),y().reset(),null===g||void 0===g||g({pauseResume:N,start:F,update:E}))})),E=h((function(e){y().update(e),null===b||void 0===b||b({pauseResume:N,reset:C,start:F})})),F=h((function(){C(),S()})),V=h((function(e){i&&(e&&C(),S())}));return s.useEffect((function(){j.current?a&&V(!0):(j.current=!0,V())}),[a,j,V,l,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),s.useEffect((function(){return function(){C()}}),[C]),{start:F,pauseResume:N,reset:C,update:E,getCountUp:y}},f=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,o=e.containerProps,i=e.children,a=e.style,u=c(e,f),m=s.useRef(null),d=s.useRef(!1),g=p(r(r({},u),{},{ref:m,startOnMount:"function"!==typeof i||0===e.delay,enableReinitialize:!1})),b=g.start,_=g.reset,x=g.update,w=g.pauseResume,j=g.getCountUp,v=h((function(){b()})),y=h((function(t){e.preserveValue||_(),x(t)})),S=h((function(){"function"!==typeof e.children||m.current instanceof Element?j():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));s.useEffect((function(){S()}),[S]),s.useEffect((function(){d.current&&y(e.end)}),[e.end,y]);var N=n&&e;return s.useEffect((function(){n&&d.current&&v()}),[v,n,N]),s.useEffect((function(){!n&&d.current&&v()}),[v,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),s.useEffect((function(){d.current=!0}),[]),"function"===typeof i?i({countUpRef:m,start:b,reset:_,update:x,pauseResume:w,getCountUp:j}):s.createElement("span",l({className:t,ref:m,style:a},o),"undefined"!==typeof e.start?j().formattingFn(e.start):"")}},3492:function(e){e.exports="/_next/static/images/logo-3214850780121560839e001911de9c95.png.webp"},5335:function(e){e.exports="/_next/static/images/logo-35ed9992570252613f76406e797e7ba5.png.webp"},7237:function(e){e.exports="/_next/static/images/robot-trans-3-1f2ab1f8a93f9a9523c03c167cfe509d.png.webp"},3446:function(e){e.exports="/_next/static/images/roseville-bot-06f35766e1f5fa17f99db81fc713c278.jpg.webp"},2122:function(e){e.exports="/_next/static/images/team_2024-b66fdd64ff926c14753a2f8e41837f09.jpg.webp"},1241:function(e,t,n){var s={"./dark/logo.png":3492,"./light/logo.png":5335};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=i,e.exports=o,o.id=1241},5964:function(e){"use strict";e.exports=JSON.parse('[{"name":"Prototek Digital Manufacturing","logo":"https://prototek.com/wp-content/uploads/2024/01/Prototek-Full-Color.webp","website":"http://sacedm.com/","logoStyle":"halfwhite","imgClass":""},{"name":"Micron","logo":"https://www.micron.com/content/experience-fragments/micron/us/en/site/header/master/_jcr_content/root/header_1665313514/logo.coreimg.svg/1699275530241/micron-logo-white.svg","website":"https://www.micron.com/","logoStyle":"white","imgClass":""},{"name":"Gene Haas Foundation","logo":"/assets/sponsors/GeneHaasFoundation.png","website":"https://ghaasfoundation.org/content/ghf/en/home.html","logoStyle":"white","imgClass":""},{"name":"Western Digital","logo":"https://www.westerndigital.com/content/dam/store/en-us/assets/home-page/brand-logos/header-main-logo.svg","website":"https://www.westerndigital.com/","logoStyle":"white","imgClass":""},{"name":"Axon Robotics","logo":"/assets/sponsors/Axon-Logo-With-Text-White.svg","website":"https://axon-robotics.com/","logoStyle":"white","imgClass":""},{"name":"American Council of Engineering Companies Sierra Chapter","logo":"https://cdn.ymaws.com/acec-ca.site-ym.com/graphics/logo.png","website":"https://www.acec-ca.org/","logoStyle":"white","imgClass":""},{"name":"Inductive Automation","logo":"https://inductiveautomation.com/static/images/logos/inductive-automation-logo.png","website":"http://www.inductiveautomation.com/","logoStyle":"white","imgClass":""},{"name":"Powdercraft Rocklin","logo":"/assets/sponsors/powder-craft-logo.png","website":"http://www.powdercraftofrocklin.com/","logoStyle":"hal","imgClass":"grayscaleSponsor"},{"name":"CNC Madness","logo":"/assets/sponsors/cnc-madness.png","website":"https://cncmadness.com/","logoStyle":"white","imgClass":""},{"name":"Apple","logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1200px-Apple_logo_white.svg.png","website":"https://apple.com/","logoStyle":"white","imgClass":""},{"name":"MonsterBolts","logo":"/assets/sponsors/monster-bolts.png","website":"https://monsterbolts.com/","logoStyle":"hal","imgClass":"grayscaleSponsor"},{"name":"Misumi","logo":"https://www.esker.com.sg/sites/default/files/rgb_main_horizontal_white-registeredtrademark-01.png","website":"https://us.misumi-ec.com/","logoStyle":"halfwhite","imgClass":""},{"name":"goBilda","logo":"https://cdn11.bigcommerce.com/s-eem7ijc77k/stencil/af49f910-ade4-013a-b026-32a478cd4269/e/940880a0-6c0d-0136-7313-41f31bb2e297/img/goBILDA.svg","website":"https://www.gobilda.com/","logoStyle":"white","imgClass":""}]')}},function(e){e.O(0,[523,112,664,814,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);