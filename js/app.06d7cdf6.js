(function(t){function s(s){for(var e,c,o=s[0],r=s[1],l=s[2],f=0,u=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&u.push(i[c][0]),i[c]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);d&&d(s);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],e=!0,o=1;o<a.length;o++){var r=a[o];0!==i[r]&&(e=!1)}e&&(n.splice(s--,1),t=c(c.s=a[0]))}return t}var e={},i={app:0},n=[];function c(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=e,c.d=function(t,s,a){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)c.d(a,e,function(s){return t[s]}.bind(null,e));return a},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="/app-portafolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var d=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"034f":function(t,s,a){"use strict";a("85ec")},"04fb":function(t,s,a){"use strict";a("30cc")},"07e0":function(t,s,a){"use strict";a("389f")},"182c":function(t,s,a){"use strict";a("7aca")},"1ad0":function(t,s,a){t.exports=a.p+"img/previewCardTailwind.4289c63f.png"},"1da9":function(t,s,a){"use strict";a("ef3d")},2095:function(t,s,a){t.exports=a.p+"img/Pokedex.70c1fea8.png"},"2d55":function(t,s,a){t.exports=a.p+"img/adviceGenerator.704404f6.png"},"30cc":function(t,s,a){},"389f":function(t,s,a){},"4b1e":function(t,s,a){t.exports=a.p+"img/ghostlogin.30da1473.png"},5664:function(t,s,a){t.exports=a.p+"img/diccionario.b3b7ee90.png"},"56c8":function(t,s,a){t.exports=a.p+"img/profile_picture.e67d1c61.jpg"},"56d7":function(t,s,a){"use strict";a.r(s);var e=a("2b0e"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("section",{staticClass:"sec-tion",attrs:{id:"Iam"}},[a("secIam")],1),a("section",{staticClass:"sec-tion",attrs:{id:"AboutMe"}},[a("secAbout")],1),a("section",{staticClass:"sec-tion",attrs:{id:"Proyects"}},[a("secProjects")],1),a("section",{staticClass:"sec-tion",attrs:{id:"Portfolio"}},[a("secPortfolio")],1),a("section",{staticClass:"sec-tion",attrs:{id:"ContactMe"}},[a("secContactMe")],1),a("glassMenu")],1)},n=[],c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"glass-menu"},t._l(t.items,(function(s){return a("i",{key:s.index,class:[s.icon,s.link],on:{click:t.scrollthis}})})),0)},o=[],r={name:"GlassMenu",props:{},data:()=>({items:[{link:"Iam active",icon:"fa-solid fa-user"},{link:"AboutMe",icon:"fa-solid fa-address-card"},{link:"Proyects",icon:"fa-solid fa-diagram-project"},{link:"Portfolio",icon:"fa-solid fa-suitcase"},{link:"ContactMe",icon:"fa-solid fa-comment"}]}),methods:{scrollthis(t){document.querySelectorAll("i").forEach(t=>{t.classList.remove("active")}),t.target.classList.add("active");let s=t.target.classList[2],a=document.getElementById(s);a.scrollIntoView({behavior:"smooth"})}},mounted(){let t=document.querySelector(".Iam"),s=document.getElementById("Iam");s.scrollIntoView({behavior:"smooth",alignToTop:alignToTop});var a=t.classList.add("active");a()}},l=r,d=(a("8773"),a("2877")),f=Object(d["a"])(l,c,o,!1,null,"4a21d320",null),u=f.exports,p=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sec-tion"})},v=[],m={name:"secContainer",props:{},data:()=>({}),components:{}},h=m,g=(a("182c"),Object(d["a"])(h,p,v,!1,null,"47c85f34",null)),_=g.exports,b=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"secIam"},[a("p",[t._v("Hello I'am")]),a("h1",[t._v("Gustavo Park")]),a("p",[t._v("Front End Developer")]),a("div",{staticClass:"actions"},[a("button",{on:{click:t.cv}},[t._v("Download CV")]),a("button",{on:{click:t.wa}},[t._v("Let's Talk")])]),t._m(0)])},C=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bg_picture"},[e("img",{attrs:{src:a("56c8"),alt:""}})])}],w={name:"Iam",props:{},data:()=>({}),methods:{wa(){window.location.assign("https://wa.me/525550745077")},cv(){window.location.assign("https://drive.google.com/file/d/16cTIjZFxRvQLnopzozgbN46-r--6Oo86/view?usp=sharing")}}},y=w,k=(a("04fb"),Object(d["a"])(y,b,C,!1,null,"4789bab8",null)),x=k.exports,j=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"secAbout"},[a("p",[t._v("Get To Know")]),a("h1",[t._v("About Me")]),a("div",{staticClass:"picture_info"},[t._m(0),a("div",{staticClass:"info"},[t._m(1),t._m(2),a("button",{on:{click:t.wa}},[t._v(" Lets'Talk ")])])])])},I=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"picture"},[e("img",{attrs:{src:a("b0df"),alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"grid"},[a("div",{staticClass:"exp"},[a("i",{staticClass:"fa-solid fa-medal"}),a("h3",[t._v("Experience")]),a("p",[t._v("+5 years")])]),a("div",{staticClass:"clients"},[a("i",{staticClass:"fa-solid fa-person"}),a("h3",[t._v("Clients")]),a("p",[t._v("About +200")])]),a("div",{staticClass:"projects"},[a("i",{staticClass:"fa-solid fa-list-check"}),a("h3",[t._v("Projects")]),a("p",[t._v("+20")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v(" I am an Information Systems Specialist and Computer Systems Engineer. "),a("br"),a("br"),t._v(" I have dedicated myself to learning the necessary technologies for web development in a self-taught way. "),a("br"),a("br"),t._v(" I have developed personal projects and for third parties where I have applied front-end knowledge. "),a("br"),a("br"),t._v(" In addition, I have extensive experience in the area of ​​technology, specifically in technical support, computer equipment maintenance and SQL database management. "),a("br"),a("br"),t._v(" --Gustavo Morales ")])}],S={name:"About",props:{},data:()=>({}),methods:{wa(){window.location.assign("https://wa.me/525550745077")}}},P=S,O=(a("07e0"),Object(d["a"])(P,j,I,!1,null,"d6ad3f6a",null)),E=O.exports,M=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"secProjects"},[e("h1",[t._v("Projects")]),e("p",[t._v("This are some of my projects "),e("br"),t._v(" swipe left :D")]),e("div",{staticClass:"grid"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card_img"},[e("img",{attrs:{src:a("7ba1"),alt:""}})]),e("div",{staticClass:"card_description"},[e("p",[t._v("In this App you can check your IMC by puting your size and weight")])]),e("div",{staticClass:"card_actions"},[e("a",{attrs:{href:"https://stzaryc.github.io/calculadora-imc/"}},[t._v("View Demo")])])]),e("div",{staticClass:"card"},[e("div",{staticClass:"card_img"},[e("img",{attrs:{src:a("5664"),alt:""}})]),e("div",{staticClass:"card_description"},[e("p",[t._v("This is a dicctionary made with Js to consume an .JSon documment to simulate API services")])]),e("div",{staticClass:"card_actions"},[e("a",{attrs:{href:"https://stzaryc.github.io/Diccionario_Regio_Chilango/"}},[t._v("View Demo")])])]),e("div",{staticClass:"card"},[e("div",{staticClass:"card_img"},[e("img",{attrs:{src:a("4b1e"),alt:""}})]),e("div",{staticClass:"card_description"},[e("p",[t._v(" This is a login simulator of 4 passwords... write this words: -Admin -Stzary -Carmesi -ImHuman ")])]),e("div",{staticClass:"card_actions"},[e("a",{attrs:{href:"https://stzaryc.github.io/GhostLogin/"}},[t._v("View Demo")])])]),e("div",{staticClass:"card"},[e("div",{staticClass:"card_img"},[e("img",{attrs:{src:a("2095"),alt:""}})]),e("div",{staticClass:"card_description"},[e("p",[t._v("This is a Pokedex, the data is from the official poke API")])]),e("div",{staticClass:"card_actions"},[e("a",{attrs:{href:"https://stzaryc.github.io/pokedex/"}},[t._v("View Demo")])])])])])}],A={name:"Projects",props:{},data:()=>({})},$=A,z=(a("1da9"),Object(d["a"])($,M,T,!1,null,"4ade2da7",null)),D=z.exports,G=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"secPortfolio"},[e("h1",[t._v("Portfolio")]),e("div",{staticClass:"screen"},[e("div",{staticClass:"challenge"},[e("div",{staticClass:"picture"},[e("img",{attrs:{src:a("2d55"),alt:""}})]),e("div",{staticClass:"tecnologies"},[e("h1",[t._v("Addvice Generator App")]),e("div",{staticClass:"tecnologies_icons"},[e("span",{staticStyle:{color:"orange"}},[e("i",{staticClass:"fa-brands fa-html5"})]),e("span",{staticStyle:{color:"skyblue"}},[e("i",{staticClass:"fa-brands fa-css3-alt"})]),e("span",{staticStyle:{color:"#ffdd40"}},[e("i",{staticClass:"fa-brands fa-js-square"})]),e("span",{staticStyle:{color:"coral",display:"flex","align-items":"center"}},[e("i",[t._v("API")])])]),e("a",{attrs:{href:"https://www.frontendmentor.io/solutions/advice-generator-app-YCsz8KIzg",target:"_blank"}},[t._v(" GO DEMO "),e("i",{staticClass:"fa-solid fa-circle-right"})])])]),e("div",{staticClass:"challenge"},[e("div",{staticClass:"picture"},[e("img",{attrs:{src:a("1ad0"),alt:""}})]),e("div",{staticClass:"tecnologies"},[e("h1",[t._v("NFT preview card component Tailwind CSS")]),e("div",{staticClass:"tecnologies_icons"},[e("span",{staticStyle:{color:"orange"}},[e("i",{staticClass:"fa-brands fa-html5"})]),e("span",{staticStyle:{color:"skyblue"}},[e("i",{staticClass:"fa-brands fa-css3-alt"})]),e("span",{staticStyle:{color:"skyblue",display:"flex","align-items":"center"}},[e("i",[t._v("TAILWIND")])])]),e("a",{attrs:{href:"https://www.frontendmentor.io/solutions/frontend-mentor-nft-preview-card-component-tailwind-css-XTVySKTjw",target:"_blank"}},[t._v(" GO DEMO "),e("i",{staticClass:"fa-solid fa-circle-right"})])])]),e("div",{staticClass:"challenge"},[e("div",{staticClass:"picture"},[e("img",{attrs:{src:a("cb11"),alt:""}})]),e("div",{staticClass:"tecnologies"},[e("h1",[t._v("Fourcard Feature Section")]),e("div",{staticClass:"tecnologies_icons"},[e("span",{staticStyle:{color:"orange"}},[e("i",{staticClass:"fa-brands fa-html5"})]),e("span",{staticStyle:{color:"skyblue"}},[e("i",{staticClass:"fa-brands fa-css3-alt"})])]),e("a",{attrs:{href:"https://www.frontendmentor.io/solutions/fourcardfeaturesectionchallenge-only-with-css-yciO3XURX",target:"_blank"}},[t._v(" GO DEMO "),e("i",{staticClass:"fa-solid fa-circle-right"})])])])])])}],V={name:"Portfolio",props:{},data:()=>({})},F=V,q=(a("f551"),Object(d["a"])(F,G,L,!1,null,"32214a88",null)),J=q.exports,H=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h1",[t._v("Contact Me")]),a("div",{staticClass:"networks"},[a("div",{staticClass:"net"},[a("a",{attrs:{href:"https://www.linkedin.com/in/gustavo-morales-084748219/",target:"_blank"}},[t._v("LinkedIn "),a("i",{staticClass:"fa-brands fa-linkedin"})])]),a("div",{staticClass:"net"},[a("a",{attrs:{href:"https://github.com/StzaryC",target:"_blank"}},[t._v("Git Hub "),a("i",{staticClass:"fa-brands fa-github"})])]),a("div",{staticClass:"net"},[a("a",{attrs:{href:"https://www.frontendmentor.io/profile/StzaryC",target:"_blank"}},[t._v("Front End Mentor "),a("i",{staticClass:"fa-solid fa-code"})])]),a("div",{staticClass:"net"},[a("a",{attrs:{href:"https://wa.me/525550745077",target:"_blank"}},[t._v("Whats App "),a("i",{staticClass:"fa-brands fa-whatsapp"})])]),a("div",{staticClass:"net"},[a("a",{attrs:{href:"https://www.google.com/intl/es-419/gmail/about/"}},[t._v("gustavored2222"),a("i",{staticClass:"fa-solid fa-at",staticStyle:{margin:"0"}}),t._v("gmail.com")])])])])}],N={name:"ContactMe",props:{},data:()=>({}),methods:{}},R=N,X=(a("e812"),Object(d["a"])(R,H,K,!1,null,"37318590",null)),B=X.exports,Q={name:"App",components:{glassMenu:u,secContainer:_,secIam:x,secAbout:E,secProjects:D,secPortfolio:J,secContactMe:B}},W=Q,U=(a("034f"),Object(d["a"])(W,i,n,!1,null,null,null)),Y=U.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(Y)}}).$mount("#app")},6275:function(t,s,a){},6624:function(t,s,a){},"7aca":function(t,s,a){},"7ba1":function(t,s,a){t.exports=a.p+"img/calculadoraimc.77250308.png"},"85ec":function(t,s,a){},8773:function(t,s,a){"use strict";a("6624")},b0df:function(t,s,a){t.exports=a.p+"img/me.42aaa7f1.jpg"},cb11:function(t,s,a){t.exports=a.p+"img/Fourcardfeaturesection.a503e3ae.png"},e812:function(t,s,a){"use strict";a("f268")},ef3d:function(t,s,a){},f268:function(t,s,a){},f551:function(t,s,a){"use strict";a("6275")}});
//# sourceMappingURL=app.06d7cdf6.js.map