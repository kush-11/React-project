(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){t.exports={container:"Login_container__3lIp7",topButton:"Login_topButton__1S-zb",contact_form:"Login_contact_form__3rCCk",formControl:"Login_formControl__8GeZk",submitButton:"Login_submitButton__2IIuU",logo:"Login_logo__3B2KF"}},17:function(t,e,n){t.exports={navigation:"Navbar_navigation__2J-D0",logo:"Navbar_logo__1SLLL",text:"Navbar_text__2Q4Ym"}},27:function(t,e,n){t.exports={container:"Home_container__1sj53",h1:"Home_h1__dlSvQ"}},30:function(t,e,n){t.exports=n(56)},39:function(t,e,n){},41:function(t,e,n){t.exports=n.p+"static/media/logo.06e73328.svg"},42:function(t,e,n){},47:function(t,e,n){},50:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),o=n(29),i=n.n(o),c=(n(39),n(41),n(42),n(11)),l=n(17),u=n.n(l),s=function(){return a.a.createElement("nav",{className:"".concat(u.a.navigation," container")},a.a.createElement("div",null,a.a.createElement(c.b,{to:"/"},a.a.createElement("img",{src:"/Images/images.png",alt:"photo",className:"".concat(u.a.logo)}))),a.a.createElement("div",null,a.a.createElement("ul",null,a.a.createElement(c.b,{to:"/Login"},a.a.createElement("li",{className:"".concat(u.a.text)},"Login")),a.a.createElement(c.b,{to:"/Signup"},a.a.createElement("li",{className:"".concat(u.a.text)},"Signup")),a.a.createElement(c.b,{to:"/Weather"},a.a.createElement("li",{className:"".concat(u.a.text)},"Weather")),a.a.createElement(c.b,{to:"/Calculator"},a.a.createElement("li",{className:"".concat(u.a.text)},"Calculator")))))},f=n(6),m=n(24),p=n(4),h=n(14),d=n.n(h),v=n(0),g=function(){Object(v.n)();var t=Object(r.useState)("40%"),e=Object(p.a)(t,2),n=(e[0],e[1]);Object(r.useEffect)(function(){window.innerWidth<900&&n("300px")},[]);var o=Object(r.useState)({username:"",password:""}),i=Object(p.a)(o,2),c=i[0],l=i[1],u=function(t){var e=t.target,n=e.name,r=e.value;l(Object(m.a)({},c,Object(f.a)({},n,r)))};return a.a.createElement("div",{className:"".concat(d.a.contact_form)},a.a.createElement("form",null,a.a.createElement("h2",null,"Login"),a.a.createElement("div",{className:"".concat(d.a.formControl)},a.a.createElement("label",{htmlFor:"username"},"UserName"),a.a.createElement("input",{type:"text",name:"username",placeholder:"Username",onChange:u})),a.a.createElement("div",{className:"".concat(d.a.formControl)},a.a.createElement("label",{htmlFor:"text"},"Password"),a.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:u}),a.a.createElement("button",{onClick:function(t){t.preventDefault();var e=JSON.parse(localStorage.getItem("user"));e&&e.username===c.username&&e.password===c.password?alert("login successful"):alert("invalid password")}},"Login"))))},y=n(27),E=n.n(y),b=function(){var t=Object(r.useState)("40%"),e=Object(p.a)(t,2),n=(e[0],e[1]);Object(r.useEffect)(function(){window.innerWidth<900&&n("300px")},[]);var o=Object(r.useState)({username:"",password:""}),i=Object(p.a)(o,2),c=i[0],l=i[1],u=function(t){var e=t.target,n=e.name,r=e.value;l(Object(m.a)({},c,Object(f.a)({},n,r)))};return a.a.createElement("div",{className:"".concat(d.a.contact_form)},a.a.createElement("form",null,a.a.createElement("h2",null,"Signup"),a.a.createElement("div",{className:"".concat(d.a.formControl)},a.a.createElement("label",{htmlFor:"username"},"UserName"),a.a.createElement("input",{type:"text",name:"username",placeholder:"Username",onChange:u})),a.a.createElement("div",{className:"".concat(d.a.formControl)},a.a.createElement("label",{htmlFor:"password"},"Password"),a.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:u}),a.a.createElement("button",{onClick:function(){c.username&&c.password?(localStorage.setItem("user",JSON.stringify(c)),alert("Signup successful!")):alert("Please fill in all fields.")}},"Signup"))))},w=n(10),O=n(8),_=n(9),x=n(16),C=n(12),L=n(15),S=(n(47),function(t){function e(){var t;return Object(O.a)(this,e),(t=Object(x.a)(this,Object(C.a)(e).call(this))).inputDigit=function(e){var n=t.state,r=n.displayValue;n.waitingForOperand?t.setState({displayValue:String(e),waitingForOperand:!1}):t.setState({displayValue:"0"===r?String(e):r+e})},t.inputDecimal=function(){var e=t.state,n=e.displayValue;e.waitingForOperand?t.setState({displayValue:"0.",waitingForOperand:!1}):-1===n.indexOf(".")&&t.setState({displayValue:n+".",waitingForOperand:!1})},t.clearDisplay=function(){t.setState({displayValue:"0",prevValue:null,operator:null,waitingForOperand:!1})},t.performOperation=function(e){var n=t.state,r=n.displayValue,a=n.operator,o=n.prevValue,i=parseFloat(r);if(null==o)t.setState({prevValue:i,displayValue:"0",operator:e,waitingForOperand:!0});else if(a){var c=t.calculate(o,i,a);t.setState({prevValue:c,displayValue:String(c),operator:e,waitingForOperand:!0})}var l="".concat(o," ").concat(a," ").concat(i," = ").concat(r);t.addToHistory(l)},t.calculate=function(t,e,n){switch(n){case"+":return t+e;case"-":return t-e;case"*":return t*e;case"/":return 0===e?(alert("Division by zero is not allowed."),t):t/e;default:return e}},t.addToHistory=function(e){var n=t.state.calculationHistory,r=[].concat(Object(w.a)(n),[e]).slice(-50);t.setState({calculationHistory:r})},t.toggleHistoryPopup=function(){t.setState(function(t){return{showHistoryPopup:!t.showHistoryPopup}})},t.toggleScientificMode=function(){t.setState(function(t){return{scientificMode:!t.scientificMode}})},t.state={displayValue:"0",prevValue:null,operator:null,waitingForOperand:!1,calculationHistory:[],showHistoryPopup:!1,scientificMode:!1},t}return Object(L.a)(e,t),Object(_.a)(e,[{key:"render",value:function(){var t=this,e=this.state,n=e.displayValue,r=e.calculationHistory,o=e.showHistoryPopup,i=e.scientificMode;return a.a.createElement("div",{className:"calculator"},a.a.createElement("div",{className:"display"},n),a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{onClick:function(){return t.inputDigit(7)}},"7"),a.a.createElement("button",{onClick:function(){return t.inputDigit(8)}},"8"),a.a.createElement("button",{onClick:function(){return t.inputDigit(9)}},"9"),a.a.createElement("button",{onClick:function(){return t.inputDigit(4)}},"4"),a.a.createElement("button",{onClick:function(){return t.inputDigit(5)}},"5"),a.a.createElement("button",{onClick:function(){return t.inputDigit(6)}},"6"),a.a.createElement("button",{onClick:function(){return t.inputDigit(1)}},"1"),a.a.createElement("button",{onClick:function(){return t.inputDigit(2)}},"2"),a.a.createElement("button",{onClick:function(){return t.inputDigit(3)}},"3"),a.a.createElement("button",{onClick:function(){return t.inputDigit(0)}},"0"),a.a.createElement("button",{onClick:function(){return t.inputDecimal()}},"."),a.a.createElement("button",{onClick:function(){return t.performOperation("+")}},"+"),a.a.createElement("button",{onClick:function(){return t.performOperation("-")}},"-"),a.a.createElement("button",{onClick:function(){return t.performOperation("*")}},"*"),a.a.createElement("button",{onClick:function(){return t.performOperation("/")}},"/"),a.a.createElement("button",{onClick:function(){return t.clearDisplay()}},"AC"),a.a.createElement("button",{onClick:function(){return t.performOperation("=")}},"="),a.a.createElement("button",{onClick:function(){return t.toggleScientificMode()}},i?"Normal":"Scientific"),i&&a.a.createElement("div",{className:"scientific-buttons"},a.a.createElement("button",{onClick:function(){return t.calculateSquareRoot()}},"\u221a")),a.a.createElement("button",{onClick:function(){return t.toggleHistoryPopup()}},"History")),o&&a.a.createElement("div",{className:"history-popup"},a.a.createElement("div",{className:"history-header"},"Calculation History"),a.a.createElement("ul",null,r.map(function(t,e){return a.a.createElement("li",{key:e},t)}))))}}]),e}(r.Component)),N=n(7),j=n(59),k=n(28),F=n.n(k);n(50);function D(){D=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new k(r||[]);return a(i,"_invoke",{value:L(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var m="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function g(){}function y(){}function E(){}var b={};u(b,i,function(){return this});var w=Object.getPrototypeOf,O=w&&w(w(F([])));O&&O!==n&&r.call(O,i)&&(b=O);var _=E.prototype=g.prototype=Object.create(b);function x(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function C(t,e){function n(a,o,i,c){var l=f(t[a],t,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(s).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(t,r){function a(){return new e(function(e,a){n(t,r,e,a)})}return o=o?o.then(a,a):a()}})}function L(e,n,r){var a=m;return function(o,i){if(a===h)throw new Error("Generator is already running");if(a===d){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var l=S(c,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===m)throw a=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var u=f(e,n,r);if("normal"===u.type){if(a=r.done?d:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a=d,r.method="throw",r.arg=u.arg)}}}function S(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=f(a,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function F(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return y.prototype=E,a(_,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:y,configurable:!0}),y.displayName=u(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},x(C.prototype),u(C.prototype,c,function(){return this}),e.AsyncIterator=C,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new C(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(_),u(_,l,"Generator"),u(_,i,function(){return this}),u(_,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=F,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return c.type="throw",c.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:F(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}var P="Delhi",H="https://api.openweathermap.org/data/2.5/forecast?q=".concat(P,"&appid=").concat("5fb88c191cccc13e5e879a8bb814207d","&units=").concat("mertic#");var V=function(){var t=Object(r.useState)([]),e=Object(p.a)(t,2),n=e[0],o=e[1];Object(r.useEffect)(function(){var t=function(){var t=Object(N.a)(D().mark(function t(){var e;return D().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get(H);case 3:e=t.sent,o(e.data.list),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching data: ",t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(){return t.apply(this,arguments)}}();t();var e=setInterval(t,3e5);return function(){return clearInterval(e)}},[]);var i=n.reduce(function(t,e){var n=F()(e.dt_txt).format("YYYY-MM-DD");return t[n]||(t[n]=e),t},{});return a.a.createElement("div",{className:"weather-app"},a.a.createElement("h1",null,"5-Day Weather Forecast for ",P),a.a.createElement("div",{className:"forecast"},Object.entries(i).map(function(t){var e=Object(p.a)(t,2),n=e[0],r=e[1];return a.a.createElement("div",{className:"forecast-item",key:n},a.a.createElement("div",{className:"forecast-date"},F()(n).format("MMM DD")),a.a.createElement("div",{className:"forecast-icon"},a.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(r.weather[0].icon,".png"),alt:r.weather[0].description})),a.a.createElement("div",{className:"forecast-temp"},a.a.createElement("span",null,Math.round(r.main.temp_max-273.15),"\xb0C")),a.a.createElement("div",{className:"forecast-details"},a.a.createElement("span",null,"Humidity: ",r.main.humidity,"%"),a.a.createElement("span",null,"Wind Speed: ",r.wind.speed," m/s")))})))},I=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"".concat(E.a.container)},a.a.createElement("span",null,a.a.createElement("h1",{className:"".concat(E.a.h1)},"Welcome to TaskBoard"))))};var M=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,null),a.a.createElement(v.c,null,a.a.createElement(v.a,{path:"/",element:a.a.createElement(I,null)}),a.a.createElement(v.a,{path:"/Login",element:a.a.createElement(g,null)}),a.a.createElement(v.a,{path:"/Signup",element:a.a.createElement(b,null)}),a.a.createElement(v.a,{path:"/Weather",element:a.a.createElement(V,null)}),a.a.createElement(v.a,{path:"/Calculator",element:a.a.createElement(S,null)})))},T=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,58)).then(function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),o(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,null,a.a.createElement(M,null)))),T()}},[[30,3,2]]]);
//# sourceMappingURL=main.210546de.chunk.js.map