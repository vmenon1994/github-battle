(self.webpackChunkgithub_battle=self.webpackChunkgithub_battle||[]).push([[921],{908:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(466),o=r(74),a=r.n(o);function c(e){var t=e.header,r=e.subheader,o=e.avatar,a=e.href,c=e.name,i=e.children;return n.createElement("div",{className:"card bg-light "},n.createElement("h4",{className:"header-lg center-text"},t),n.createElement("img",{className:"avatar",src:o,alt:"Avatar for ".concat(c)}),r&&n.createElement("h4",{className:"center-text"},r),n.createElement("h2",{className:"center-text"},n.createElement("a",{className:"link",href:a},c)),i)}c.propTypes={header:a().string.isRequired,avatar:a().string.isRequired,name:a().string.isRequired,href:a().string.isRequired,subheader:a().string}},921:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>O});var n=r(466),o=r(335),a=r(586),c=r(908),i=r(74),s=r.n(i),l=r(396),u=r(346),f=r(851),p=r(429);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e){var t=e.profile;return n.createElement("ul",{className:"card-list"},n.createElement("li",null,n.createElement(a.Xws,{color:"rgb(239, 115, 115)",size:22}),t.name),t.location&&n.createElement("li",null,n.createElement(u.Z,{text:"User's Location"},n.createElement(a.Phk,{color:"rgb(114, 115, 255)",size:22}),t.location)),t.company&&n.createElement("li",null,n.createElement(u.Z,{text:"User's Company"},n.createElement(a.I8D,{color:"#795548",size:22}),t.company)),n.createElement("li",null,n.createElement(a.I$,{color:"rgb(129, 195, 245)",size:22}),t.followers.toLocaleString()," followers"),n.createElement("li",null,n.createElement(a.wN,{color:"rgb(129, 195, 245)",size:22}),t.following.toLocaleString()," following"))}E.propTypes={profile:s().object.isRequired};var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,e);var t,r,a,i,s=(a=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(a);if(i){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return g(this,e)});function u(){var e;m(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return w(h(e=s.call.apply(s,[this].concat(r))),"state",{winner:null,loser:null,error:null,loading:!0}),e}return t=u,(r=[{key:"componentDidMount",value:function(){var e=this,t=f.parse(this.props.location.search),r=t.playerOne,n=t.playerTwo;(0,o.N)([r,n]).then((function(t){e.setState({winner:t[0],loser:t[1],error:null,loading:!1})})).catch((function(t){var r=t.message;e.setState({error:r,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.winner,r=e.loser,o=e.error;return!0===e.loading?n.createElement(l.Z,{text:"Battling"}):o?n.createElement("p",{className:"center-text error"},o):n.createElement(n.Fragment,null,n.createElement("div",{className:"grid space-around container-sm"},n.createElement(c.Z,{header:t.score===r.score?"Tie":"Winner",avatar:t.profile.avatar_url,name:t.profile.login,subheader:"score: ".concat(t.score.toLocaleString()),href:t.profile.html_url},n.createElement(E,{profile:t.profile})),n.createElement(c.Z,{header:t.score===r.score?"Tie":"Loser",avatar:r.profile.avatar_url,name:r.profile.login,subheader:"score: ".concat(r.score.toLocaleString()),href:r.profile.html_url},n.createElement(E,{profile:r.profile}))),n.createElement(p.rU,{to:"/battle",className:"btn dark-btn btn-space"},"Reset"))}}])&&d(t.prototype,r),u}(n.Component)},346:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(466),o=r(74),a=r.n(o);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(m,e);var t,r,o,a,c=(o=m,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(o);if(a){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return u(this,e)});function m(){var e;i(this,m);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return y(f(e=c.call.apply(c,[this].concat(r))),"state",{hovering:!1}),y(f(e),"mouseOver",(function(){e.setState({hovering:!0})})),y(f(e),"mouseOut",(function(){e.setState({hovering:!1})})),e}return t=m,(r=[{key:"render",value:function(){return n.createElement("div",{onMouseOver:this.mouseOver,onMouseOut:this.mouseOut},this.props.children(this.state.hovering))}}])&&s(t.prototype,r),m}(n.Component),d={container:{position:"relative",display:"flex"},tooltip:{boxSizing:"border-box",position:"absolute",width:"160px",bottom:"100%",left:"50%",marginLeft:"-80px",borderRadius:"3px",backgroundColor:"hsla(0, 0%, 20%, 0.9)",padding:"7px",marginBottom:"5px",color:"#fff",textAlign:"center",fontSize:"14px"}};function b(e){var t=e.text,r=e.children;return n.createElement(m,null,(function(e){return n.createElement("div",{style:d.container},!0===e&&n.createElement("div",{style:d.tooltip},t),r)}))}b.propTypes={text:a().string.isRequired};const g=b},335:(e,t,r)=>{"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{N:()=>l,Q:()=>u});var o="?client_id=".concat("5e872719b32fb08ad995","&client_secret=").concat("a4724d322a27abccff274bd941dc3660f79dc74b");function a(e,t){return"Not Found"===e?"".concat(t," doesn't exist"):e}function c(e){return fetch("https://api.github.com/users/".concat(e,"/repos").concat(o,"&per_page=100")).then((function(e){return e.json()})).then((function(t){if(t.message)throw new Error(a(t.message,e));return t}))}function i(e,t){return 3*e+function(e){return e.reduce((function(e,t){return e+t.stargazers_count}),0)}(t)}function s(e){return Promise.all([(t=e,fetch("https://api.github.com/users/".concat(t).concat(o)).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error(a(e.message,t));return e}))),c(e)]).then((function(e){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],c=o[1];return{profile:a,score:i(a.followers,c)}}));var t}function l(e){return Promise.all([s(e[0]),s(e[1])]).then((function(e){return function(e){return e.sort((function(e,t){return t.score-e.score}))}(e)}))}function u(e){var t=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(e,"&sort=stars&order=desc&type=Repositories"));return fetch(t).then((function(e){return e.json()})).then((function(e){if(!e.items)throw new Error(e.message);return e.items}))}},377:e=>{"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var o=a(r[0]);o!==r[0]&&(t[r[0]]=o)}r=n.exec(e)}t["%C2"]="�";for(var c=Object.keys(t),i=0;i<c.length;i++){var s=c[i];e=e.replace(new RegExp(s,"g"),t[s])}return e}(e)}}},318:e=>{"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var c=n[a],i=e[c];(o?-1!==t.indexOf(c):t(c,i,e))&&(r[c]=i)}return r}},851:(e,t,r)=>{"use strict";const n=r(221),o=r(377),a=r(374),c=r(318),i=Symbol("encodeFragmentIdentifier");function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function u(e,t){return t.decode?o(e):e}function f(e){return Array.isArray(e)?e.sort():"object"==typeof e?f(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function p(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function y(e){const t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function m(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function d(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&u(r,e).includes(e.arrayFormatSeparator);r=a?u(r,e):r;const c=o||a?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);n[t]=c};case"bracket-separator":return(t,r,n)=>{const o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o)return void(n[t]=r?u(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;let[e,c]=a(t.decode?o.replace(/\+/g," "):o,"=");c=void 0===c?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?c:u(c,t),r(u(e,t),c,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=m(r[e],t);else n[e]=m(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=f(r):e[t]=r,e}),Object.create(null))}t.extract=y,t.parse=d,t.stringify=(e,t)=>{if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[",o,"]"].join("")]:[...r,[l(t,e),"[",l(o,e),"]=",l(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[]"].join("")]:[...r,[l(t,e),"[]=",l(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[l(r,e),t,l(o,e)].join("")]:[[n,l(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,l(t,e)]:[...r,[l(t,e),"=",l(n,e)].join("")]}}(t),o={};for(const t of Object.keys(e))r(t)||(o[t]=e[t]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?l(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?l(r,t)+"[]":o.reduce(n(r),[]).join("&"):l(r,t)+"="+l(o,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:d(y(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[i]:!0},r);const n=p(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),c=Object.assign(a,e.query);let s=t.stringify(c,r);s&&(s=`?${s}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${r[i]?l(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${s}${u}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[i]:!1},n);const{url:o,query:a,fragmentIdentifier:s}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:c(a,r),fragmentIdentifier:s},n)},t.exclude=(e,r,n)=>{const o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},374:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},221:e=>{"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);