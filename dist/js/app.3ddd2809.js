(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],m=0,d=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,r=1;r<i.length;r++){var c=i[r];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},n={app:0},s=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"13fb":function(t,e,i){"use strict";i("2008")},"17fd":function(t,e,i){"use strict";i("d28e")},"1af6":function(t,e,i){},2008:function(t,e,i){},"20ef":function(t,e,i){},"22c4":function(t,e,i){t.exports=i.p+"img/ROB.4c64c795.png"},2608:function(t,e,i){t.exports=i.p+"img/InsightLogo.716a5ccf.png"},3075:function(t,e,i){"use strict";i("9aaa")},"45e7":function(t,e,i){t.exports=i.p+"img/TCS.925062b9.png"},"469c":function(t,e,i){t.exports=i.p+"img/CFI.5deb7eb0.png"},"4ffd":function(t,e){t.exports="data:image/png;base64,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"},7016:function(t,e,i){var a={"./CFI.png":"469c","./Hasbro.png":"82aa","./InsightLogo.png":"2608","./ROB.png":"22c4","./TCS.png":"45e7","./logo.png":"4ffd","./signature.png":"9535"};function n(t){var e=s(t);return i(e)}function s(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=s,t.exports=n,n.id="7016"},"717b":function(t,e,i){"use strict";i("1af6")},"82aa":function(t,e,i){t.exports=i.p+"img/Hasbro.61553455.png"},"83d6":function(t,e,i){"use strict";i("20ef")},9535:function(t,e,i){t.exports=i.p+"img/signature.45f75930.png"},"98a7":function(t,e,i){t.exports=i.p+"img/stud.94c9b237.jpeg"},"9aaa":function(t,e,i){},b107:function(t,e,i){},b22e:function(t,e,i){t.exports=i.p+"img/story-animation.fb19785b.gif"},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Navbar"),i("main",[i("Banner"),i("AboutMe"),i("Passions"),i("Projects"),i("Mindfulness"),i("IntrigueGames"),i("Library"),i("Connect")],1)],1)},s=[],o=i("d4ec"),r=i("bee2"),c=i("262e"),l=i("2caf"),u=i("9ab4"),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero banner is-fullheight bg-image"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"columns banner-content mt-6"},[a("div",{staticClass:"column is-one-fifth"}),a("div",{staticClass:"column mt-6"},[a("h1",{staticClass:"title"},[a("img",{staticClass:"image",attrs:{src:i("9535"),alt:"Xal title"}})]),a("h2",{staticClass:"subtitle has-text-black has-text-weight-bold"},[t._v(" Software Engineer, Meditator, Philomath, Video Game Designer ")])]),a("div",{staticClass:"column is-one-quarter"}),a("div",{staticClass:"column is-one-quarter"})])])])}],p=i("1b40"),h=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){return Object(o["a"])(this,i),e.apply(this,arguments)}return i}(a["a"]);h=Object(u["a"])([p["a"]],h);var f=h,b=f,v=(i("13fb"),i("2877")),g=Object(v["a"])(b,m,d,!1,null,"6e93362a",null),y=g.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"hero is-primary connect"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("div",{staticClass:"columns is-centered is-mobile"},[i("div",{staticClass:"column is-half has-text-centered"},[i("h1",{staticClass:"title"},[t._v("Want to Connect?")]),i("div",{staticClass:"block"},[i("a",{attrs:{href:"https://twitter.com/KevinLogan12"}},[i("b-icon",{attrs:{type:"is-white",icon:"twitter",size:"is-medium",title:"Twitter Icon"}})],1),i("a",{attrs:{href:"https://www.facebook.com/kevin.logan1"}},[i("b-icon",{attrs:{type:"is-white",icon:"facebook",size:"is-medium",title:"Facebook Icon"}})],1),i("a",{attrs:{href:"https://www.linkedin.com/in/kevin-logan-73277594/"}},[i("b-icon",{attrs:{type:"is-white",icon:"linkedin",size:"is-medium",title:"LinkedIn Icon"}})],1),i("a",{attrs:{href:"https://www.instagram.com/kevinlogan7/"}},[i("b-icon",{attrs:{type:"is-white",icon:"instagram",size:"is-medium",title:"Instagram Icon"}})],1),i("a",{attrs:{href:"https://github.com/kevinlogan94"}},[i("b-icon",{attrs:{type:"is-white",icon:"github",size:"is-medium",title:"Github Icon"}})],1)])])])])])])},C=[],O=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){return Object(o["a"])(this,i),e.apply(this,arguments)}return i}(a["a"]);O=Object(u["a"])([p["a"]],O);var j=O,k=j,I=(i("17fd"),Object(v["a"])(k,w,C,!1,null,"b33cfa14",null)),A=I.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"hero passions",attrs:{id:"passions"}},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title has-text-centered"},[t._v("Passions")]),i("h2",{staticClass:"subtitle has-text-centered"},[t._v("What I do at a glance.")]),i("div",{staticClass:"columns"},[i("b-carousel-list",{attrs:{data:t.passions,"items-to-show":2,"items-to-list":1,repeat:!0},scopedSlots:t._u([{key:"item",fn:function(e){return[i("div",{staticClass:"has-text-centered column"},[i("div",{staticClass:"container content"},[i("b-icon",{attrs:{icon:e.icon,size:"is-large",type:"is-primary"}}),i("p",[t._v(t._s(e.title))])],1),i("p",{staticClass:"content"},[t._v(" "+t._s(e.description)+" ")])])]}}])})],1)])])])},L=[],V=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){var t;return Object(o["a"])(this,i),t=e.apply(this,arguments),t.passions=[{icon:"web",title:"Web Development",description:"My first love, I have a burning passion for web development. I have built several Web Applications used by millions of users across the country."},{icon:"google-controller",title:"Video Game Design",description:"To fulfill a promise I made when I was five years old, You can find me building video games to offer a break from reality while also providing a story with lessons people can use to better their own lives."},{icon:"flower",title:"Mindfulness",description:"After surviving a traumatic event in my early twenties, I use mindfulness every day to constantly be in a state of calm and control over the present moment."},{icon:"wrench",title:"Api Engineering",description:"To bring my Web Applications to life, I design and build APIs to provide a constant connection to the data in the cloud."},{icon:"book-open-variant",title:"Personal Development",description:"I genuinely love to learn. With this, I am constantly reading and studying from the greatest minds of our time in my relentless self-reliance pursuit."},{icon:"currency-usd",title:"Finance",description:"After making it through the 2020 quarantine, I developed a passion for financial independence. To do this, you can find me constantly looking for new avenues for investing."},{icon:"auto-fix",title:"Art",description:"I use pixel art to draw regions, creatures, and animations to bring video games to life and offer an immersive experience."}],t}return Object(r["a"])(i,[{key:"mounted",value:function(){setInterval(this.triggerCarouselTransition,7500)}},{key:"triggerCarouselTransition",value:function(){var t=document.getElementsByClassName("has-icons-right")[0],e=new Event("click");t.dispatchEvent(e)}}]),i}(a["a"]);V=Object(u["a"])([p["a"]],V);var S=V,P=S,T=Object(v["a"])(P,x,L,!1,null,null,null),q=T.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-navbar",{attrs:{type:"is-primary",spaced:!0,"fixed-top":!0},scopedSlots:t._u([{key:"brand",fn:function(){return[i("b-navbar-item",{attrs:{href:"https://twitter.com/KevinLogan12"}},[i("b-icon",{attrs:{type:"is-white",icon:"twitter",title:"Twitter Icon"}})],1),i("b-navbar-item",{attrs:{href:"https://www.facebook.com/kevin.logan1"}},[i("b-icon",{attrs:{type:"is-white",icon:"facebook",title:"Facebook Icon"}})],1),i("b-navbar-item",{attrs:{href:"https://www.linkedin.com/in/kevin-logan-73277594/"}},[i("b-icon",{attrs:{type:"is-white",icon:"linkedin",title:"LinkedIn Icon"}})],1),i("b-navbar-item",{attrs:{href:"https://www.instagram.com/kevinlogan7/"}},[i("b-icon",{attrs:{type:"is-white",icon:"instagram",title:"Instagram Icon"}})],1),i("b-navbar-item",{attrs:{href:"https://github.com/kevinlogan94"}},[i("b-icon",{attrs:{type:"is-white",icon:"github",title:"Github Icon"}})],1)]},proxy:!0},{key:"start",fn:function(){},proxy:!0},{key:"end",fn:function(){return[i("b-navbar-item",{staticClass:"has-text-white",on:{click:function(e){return t.scrollIntoView("aboutMe")}}},[t._v("About Me")]),i("b-navbar-item",{staticClass:"has-text-white",on:{click:function(e){return t.scrollIntoView("passions")}}},[t._v("Passions")]),i("b-navbar-item",{staticClass:"has-text-white",on:{click:function(e){return t.scrollIntoView("software")}}},[t._v("Software")]),i("b-navbar-item",{staticClass:"has-text-white",on:{click:function(e){return t.scrollIntoView("meditation")}}},[t._v("Meditation")]),i("b-navbar-item",{staticClass:"has-text-white",on:{click:function(e){return t.scrollIntoView("games")}}},[t._v("Games")]),i("b-navbar-item",{staticClass:"has-text-white",on:{click:function(e){return t.scrollIntoView("library")}}},[t._v("Library")]),i("b-navbar-item",{staticClass:"has-text-white",on:{click:function(e){return t.scrollIntoView("connect")}}},[t._v("Connect")])]},proxy:!0}])})},B=[],N=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){return Object(o["a"])(this,i),e.apply(this,arguments)}return Object(r["a"])(i,[{key:"scrollIntoView",value:function(t){var e=document.getElementsByClassName(t)[0];e&&e.scrollIntoView({behavior:"smooth",block:"center"})}}]),i}(a["a"]);N=Object(u["a"])([p["a"]],N);var M,R=N,H=R,X=Object(v["a"])(H,U,B,!1,null,null,null),E=X.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-primary aboutMe"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title has-text-centered"},[t._v("Hey, I'm Kevin")]),a("div",{staticClass:"columns is-vcentered"},[a("div",{staticClass:"column"},[a("img",{staticClass:"image",attrs:{src:i("98a7"),alt:"Profile Picture"}})]),a("div",{staticClass:"column"},[a("p",{staticClass:"content"},[t._v(" I'm best most known for my work buildings Web Applications for Transformers, Littlest Pet Shop, My Little Pony, Fifth Third Bank, and NaviStone. ")]),a("p",{staticClass:"content"},[t._v(" I'm the kind of guy that wakes up everyday and constantly asks himself, what is one thing I can do today to become better. Ever since I was very young I have always had a burning passion for everything that I do. I am truly obsessed with progress and slowly becoming the best version of myself. ")]),a("p",{staticClass:"content"},[t._v(" Thanks for visiting me on my corner of the internet. This site is where you can find some the things that have guided me to where I am now and what I'm currently up to. I hope that they can help you on your journey as well. ")])])])])])])}],K=Object(p["a"])(M=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){return Object(o["a"])(this,i),e.apply(this,arguments)}return i}(a["a"]))||M,J=K,F=(i("3075"),Object(v["a"])(J,W,G,!1,null,null,null)),z=F.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"hero library"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title has-text-centered"},[t._v("My Library")]),i("h2",{staticClass:"subtitle has-text-centered"},[t._v(" The Personal-Development books that have molded who I am today. ")]),i("b-carousel-list",{attrs:{data:t.items,"items-to-show":3,"items-to-list":1,"arrow-hover":!1,repeat:!0}})],1)])])},_=[],Y=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){var t;return Object(o["a"])(this,i),t=e.apply(this,arguments),t.items=[{title:"The Power of your Subconscious Mind",image:"https://m.media-amazon.com/images/I/51X3H9IMgmL.jpg"},{title:"Peak Performance",image:"https://m.media-amazon.com/images/I/41ssxrhLwCL.jpg"},{title:"Start Where You Are",image:"https://m.media-amazon.com/images/I/51WVBVDl4cL.jpg"},{title:"Range",image:"https://m.media-amazon.com/images/I/41OjnXiiB1L.jpg"},{title:"How to be a 3% Man",image:"https://m.media-amazon.com/images/I/51nZECMYKsL.jpg"},{title:"Mastering Yourself",image:"https://m.media-amazon.com/images/I/51bjykpGDfL.jpg"},{title:"The Way of the Superior Man",image:"https://m.media-amazon.com/images/I/61pqlNBnmQL.jpg"},{title:"How to Win Friends & Influence People",image:"https://m.media-amazon.com/images/I/51PWIy1rHUL.jpg"},{title:"Letting Go: The Pathway of Surrender",image:"https://m.media-amazon.com/images/I/41BoLINwhQL.jpg"},{title:"The Art of Seduction",image:"https://m.media-amazon.com/images/I/41+FfYVLnEL.jpg"},{title:"Heart of the Soul",image:"https://m.media-amazon.com/images/I/51kqjUwGBrL.jpg"},{title:"The Seat of the Soul",image:"https://m.media-amazon.com/images/I/51Em8qZ9mqL.jpg"}],t}return Object(r["a"])(i,[{key:"mounted",value:function(){setInterval(this.triggerCarouselTransition,7500)}},{key:"triggerCarouselTransition",value:function(){var t=document.getElementsByClassName("has-icons-right"),e=t[t.length-1],i=new Event("click");e.dispatchEvent(i)}}]),i}(a["a"]);Y=Object(u["a"])([p["a"]],Y);var D=Y,Q=D,$=Object(v["a"])(Q,Z,_,!1,null,"664632f2",null),tt=$.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-primary games"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title has-text-centered"},[t._v("Games")]),a("div",{staticClass:"columns is-vcentered"},[a("div",{staticClass:"column"},[a("img",{staticClass:"image",attrs:{src:i("b22e"),alt:"Xal at his desk"}})]),a("div",{staticClass:"column"},[a("p",{staticClass:"content"},[t._v(" Check out my latest game, Xal's Path, on Android and iOS. ")]),a("p",{staticClass:"content"},[t._v(" Xal's Path is a game where you, the stranger, strive to help Xal rid the realm of a terrible blight and uncover the deceitful truth behind it. ")]),a("b-button",{attrs:{type:"",size:"is-medium"},on:{click:t.OpenIntrigueGames}},[t._v("Launch Website ")])],1)])])])])},it=[],at=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){var t;return Object(o["a"])(this,i),t=e.apply(this,arguments),t.soundtrackLink="https://intrigue-games.com",t}return Object(r["a"])(i,[{key:"OpenIntrigueGames",value:function(){window.open(this.soundtrackLink,"_blank")}}]),i}(a["a"]);at=Object(u["a"])([p["a"]],at);var nt=at,st=nt,ot=(i("83d6"),Object(v["a"])(st,et,it,!1,null,"60eadaf2",null)),rt=ot.exports,ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"hero meditation"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title has-text-centered"},[t._v("Meditation")]),i("h2",{staticClass:"subtitle has-text-centered"},[t._v(" The best platforms that I use for calm and mental programming. ")]),i("b-carousel-list",{attrs:{data:t.items,"items-to-show":5,"items-to-list":1,"arrow-hover":!1,arrow:!1,repeat:!0},scopedSlots:t._u([{key:"item",fn:function(e){return[i("figure",{staticClass:"image",on:{click:function(i){return t.openMindfulnessPlatform(e.location)}}},[i("img",{attrs:{src:e.image,alt:e.title,title:e.title}})])]}}])})],1)])])},lt=[],ut=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){var t;return Object(o["a"])(this,i),t=e.apply(this,arguments),t.items=[{title:"Calm",location:"https://calm.com",image:"https://cdn.freelogovectors.net/wp-content/uploads/2020/11/calm_logo.png"},{title:"Balance",location:"https://balanceapp.com",image:"https://mindoverlatte.com/wp-content/uploads/2020/05/A-Balance.png"},{title:"Live the Life You Love",location:"https://www.youtube.com/c/Ilivethelifeilove",image:"https://yt3.ggpht.com/ytc/AKedOLRuB_u8abOk3l8x74BmJ6WQbha-c81_kiTxk_2XAw=s900-c-k-c0x00ffffff-no-rj"},{title:"Jason Stephenson",location:"https://www.youtube.com/c/JasonStephensonSleepMeditationMusic",image:"https://yt3.ggpht.com/ytc/AKedOLQDcNwpiqi0OEZb7ZZOw8jJLTUpPt1JaSoWHmLn9w=s900-c-k-c0x00ffffff-no-rj"},{title:"Master Sri Akarshana",location:"https://www.youtube.com/c/MasterSriAkarshana",image:"https://angartwork.akamaized.net/?id=144848534&size=640"}],t}return Object(r["a"])(i,[{key:"openMindfulnessPlatform",value:function(t){window.open(t,"_blank")}}]),i}(a["a"]);ut=Object(u["a"])([p["a"]],ut);var mt=ut,dt=mt,pt=(i("717b"),Object(v["a"])(dt,ct,lt,!1,null,null,null)),ht=pt.exports,ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"hero is-primary software"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title has-text-centered"},[t._v("Software Engineering")]),i("h2",{staticClass:"subtitle has-text-centered"},[t._v(" Enterprise and Start-Up Projects ")]),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"tile is-ancestor"},[i("div",{staticClass:"tile is-vertical"},[i("div",{staticClass:"tile"},[i("Project",{attrs:{title:"Fifth Third Bank",subtitle:"Angular and UI Developer",img:"ROB.png",imgAlt:"test",description:"At Fifth Third Bank, I focused on the online banking application and building new features like Offers, Products, Lost & Stolen Card, and Check Order."}}),i("Project",{attrs:{title:"Hasbro",subtitle:"UI, PHP, and JQuery Developer",img:"Hasbro.png",imgAlt:"test",description:"At Hasbro, I got to build a creative and fun user experience by completing full site redesigns. My primary focus was on Transformers, My Little Pony, and Littlest Pet Shop."}})],1),i("div",{staticClass:"tile"},[i("Project",{attrs:{title:"TCS",subtitle:"UI and React Developer, UX Designer",img:"TCS.png",imgAlt:"test",description:"At TCS, I offered customers a smoother check-in process by designing and building their front desk application. Features included incorporating employee directory and badge sign-in."}}),i("Project",{attrs:{title:"NaviStone",subtitle:"Full Stack Engineer",img:"CFI.png",imgAlt:"test",description:"At NaviStone, I built several applications on the web and in the cloud. By far my biggest challenge yet."}})],1)])])])])])])])},bt=[],vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile is-child box has-text-centered"},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column has-text-centered"},[i("h4",{staticClass:"title is-4 has-text-black"},[t._v(t._s(t.title))]),i("h5",{staticClass:"subtitle has-text-black"},[t._v(t._s(t.subtitle))]),i("p",{staticClass:"content"},[t._v(t._s(t.description))])]),i("div",{staticClass:"column"},[i("figure",{staticClass:"image is-3by2"},[i("img",{attrs:{src:t.getImgUrl(t.img),alt:t.imgAlt}})])])])])])},gt=[],yt=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return Object(r["a"])(a,[{key:"getImgUrl",value:function(t){var e=i("7016");return e("./"+t)}}]),a}(a["a"]);Object(u["a"])([Object(p["b"])()],yt.prototype,"img",void 0),Object(u["a"])([Object(p["b"])()],yt.prototype,"imgAlt",void 0),Object(u["a"])([Object(p["b"])()],yt.prototype,"title",void 0),Object(u["a"])([Object(p["b"])()],yt.prototype,"subtitle",void 0),Object(u["a"])([Object(p["b"])()],yt.prototype,"description",void 0),yt=Object(u["a"])([p["a"]],yt);var wt=yt,Ct=wt,Ot=Object(v["a"])(Ct,vt,gt,!1,null,null,null),jt=Ot.exports,kt=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){return Object(o["a"])(this,i),e.apply(this,arguments)}return i}(a["a"]);kt=Object(u["a"])([Object(p["a"])({components:{Project:jt}})],kt);var It=kt,At=It,xt=Object(v["a"])(At,ft,bt,!1,null,null,null),Lt=xt.exports,Vt=i("000b"),St=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){return Object(o["a"])(this,i),e.apply(this,arguments)}return Object(r["a"])(i,[{key:"mounted",value:function(){Object(Vt["b"])(this.$analytics,"page_view")}}]),i}(a["a"]);St=Object(u["a"])([Object(p["a"])({components:{Projects:Lt,Mindfulness:ht,IntrigueGames:rt,Library:tt,Banner:y,Connect:A,Passions:q,Navbar:E,AboutMe:z}})],St);var Pt=St,Tt=Pt,qt=Object(v["a"])(Tt,n,s,!1,null,null,null),Ut=qt.exports,Bt=i("289d"),Nt=(i("b107"),i("260b")),Mt={apiKey:"AIzaSyCcBHeItHJVEx7Mvrz3cjL8C3RQKy_HNn0",authDomain:"personal-web-application.firebaseapp.com",projectId:"personal-web-application",storageBucket:"personal-web-application.appspot.com",messagingSenderId:"322364835279",appId:"1:322364835279:web:64f6e3eae2a12273bcfeba",measurementId:"G-TSMGELVFV4"},Rt=Object(Nt["a"])(Mt),Ht=Object(Vt["a"])(Rt);a["a"].prototype.$analytics=Ht,a["a"].use(Bt["a"]),a["a"].config.productionTip=!1,document.title="Kevin Logan - Software Engineer, Meditator, Philomath, Video Game Designer",new a["a"]({render:function(t){return t(Ut)}}).$mount("#app")},d28e:function(t,e,i){}});
//# sourceMappingURL=app.3ddd2809.js.map