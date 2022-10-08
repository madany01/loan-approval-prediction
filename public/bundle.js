/*! For license information please see bundle.js.LICENSE.txt */
!function(){"use strict";function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=S(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=f(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h={};function y(){}function p(){}function d(){}var v={};l(v,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(O([])));g&&g!==n&&o.call(g,a)&&(v=g);var w=d.prototype=y.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function L(r,e){function n(i,a,c,u){var l=f(r[i],r,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==t(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function S(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,S(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function x(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,l(w,"constructor",d),l(d,"constructor",p),p.displayName=l(d,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(L.prototype),l(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,u,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},e}function e(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function o(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var a=document.querySelector("form"),c=document.querySelector(".spinner-modal-ctr"),u=document.querySelector(".spinner-ctr .cancel"),l=document.querySelector(".err-msg-modal"),s=l.querySelector(".msg"),f=l.querySelector(".err-msg-modal .close-modal"),h=document.querySelector(".predictions-ctr"),y={bayes:h.querySelector(".bayes"),tree:h.querySelector(".tree"),logistic:h.querySelector(".logistic"),svm:h.querySelector(".svm"),knn:h.querySelector(".knn"),voting_majority:h.querySelector(".majority")},p="https://loan-approval-prediction-api.onrender.com",d=null,v=["ApplicantIncome","CoapplicantIncome","LoanAmount","Loan_Amount_Term"],m=function(){l.classList.add("hidden")},g=function(){c.classList.add("d-none")},w=function(t){Object.entries(y).forEach((function(r){var e,n,i=(n=2,function(t){if(Array.isArray(t))return t}(e=r)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i=[],a=!0,c=!1;try{for(e=e.call(t);!(a=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==e.return||e.return()}finally{if(c)throw o}}return i}}(e,n)||o(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],c=i[1];c.classList.remove("yes","no"),c.classList.add(t[a].toLowerCase())})),h.classList.remove("hidden")};function b(t){return L.apply(this,arguments)}function L(){return(L=n(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(p,{method:"POST",signal:d.signal,headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}f.addEventListener("click",(function(){return m()})),u.addEventListener("click",(function(){d&&(d.abort(),d=null)})),a.addEventListener("submit",function(){var t=n(r().mark((function t(e){var n,u;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=Object.fromEntries(function(t){if(Array.isArray(t))return i(t)}(f=new FormData(a))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(f)||o(f)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v.forEach((function(t){return n[t]=Number(n[t])})),h.classList.add("hidden"),m(),c.classList.remove("d-none"),d||(d=new AbortController),u=null,t.prev=8,t.next=11,b(n);case 11:u=t.sent,t.next=21;break;case 14:return t.prev=14,t.t0=t.catch(8),console.log(t.t0),"AbortError"!==t.t0.name&&(r=void 0,s.textContent=r||s.dataset.msg,l.classList.remove("hidden")),g(),a.scrollIntoView(),t.abrupt("return");case 21:g(),w(u),h.scrollIntoView();case 24:case"end":return t.stop()}var r,f}),t,null,[[8,14]])})));return function(r){return t.apply(this,arguments)}}())}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7NFFBQ0EsOCtOQUNBLElBQU1BLEVBQU9DLFNBQVNDLGNBQWMsUUFDOUJDLEVBQWFGLFNBQVNDLGNBQWMsc0JBQ3BDRSxFQUFzQkgsU0FBU0MsY0FBYyx3QkFFN0NHLEVBQWNKLFNBQVNDLGNBQWMsa0JBQ3JDSSxFQUFXRCxFQUFZSCxjQUFjLFFBQ3JDSyxFQUFhRixFQUFZSCxjQUFjLCtCQUV2Q00sRUFBZ0JQLFNBQVNDLGNBQWMsb0JBQ3ZDTyxFQUFZLENBQ2hCQyxNQUFPRixFQUFjTixjQUFjLFVBQ25DUyxLQUFNSCxFQUFjTixjQUFjLFNBQ2xDVSxTQUFVSixFQUFjTixjQUFjLGFBQ3RDVyxJQUFLTCxFQUFjTixjQUFjLFFBQ2pDWSxJQUFLTixFQUFjTixjQUFjLFFBQ2pDYSxnQkFBaUJQLEVBQWNOLGNBQWMsY0FHekNjLEVBQU0sb0RBQ1JDLEVBQWtCLEtBRWhCQyxFQUFpQixDQUNyQixrQkFDQSxvQkFDQSxhQUNBLG9CQUdJQyxFQUFTLFdBTVhkLEVBQVllLFVBQVVDLElBQUksU0FDM0IsRUFHR0MsRUFBVSxXQUtabkIsRUFBV2lCLFVBQVVDLElBQUksU0FDMUIsRUFHR0UsRUFBb0IsU0FJWkMsR0FDVkMsT0FBT0MsUUFBUWpCLEdBQVdrQixTQUFRLFlBQTBCLG9qQkFBeEJDLEVBQXdCLEtBQWJDLEVBQWEsS0FDMURBLEVBQVFULFVBQVVVLE9BQU8sTUFBTyxNQUNoQ0QsRUFBUVQsVUFBVUMsSUFBSUcsRUFBRUksR0FBV0csY0FDcEMsSUFFRHZCLEVBQWNZLFVBQVVVLE9BQU8sU0FDaEMsV0FHWUUsRUFBZ0Isb0VBQS9CLFdBQStCQyxHQUEvQix1RkFDcUJDLE1BQU1sQixFQUFLLENBQzVCbUIsT0FBUSxPQUNSQyxPQUFRbkIsRUFBZ0JtQixPQUN4QkMsUUFBUyxDQUFFLGVBQWdCLG9CQUMzQkMsS0FBTUMsS0FBS0MsVUFBVVAsS0FMekIsY0FDUVEsRUFEUix5QkFRU0EsRUFBS0MsUUFSZCxrRUFXQW5DLEVBQVdvQyxpQkFBaUIsU0FBUyxrQkFBTXhCLEdBQU4sSUFFckNmLEVBQW9CdUMsaUJBQWlCLFNBQVMsV0FDdkMxQixJQUVMQSxFQUFnQjJCLFFBQ2hCM0IsRUFBa0IsS0FDbkIsSUFFRGpCLEVBQUsyQyxpQkFBaUIsU0FBdEIsNkJBQWdDLFdBQU1FLEdBQU4sZ0ZBQzlCQSxFQUFHQyxpQkFFR2IsRUFBSVIsT0FBT3NCLDJEQUFnQixJQUFJQyxTQUFTaEQsMlNBQzlDa0IsRUFBZVMsU0FBUSxTQUFBc0IsR0FBSSxPQUFLaEIsRUFBRWdCLEdBQVFDLE9BQU9qQixFQUFFZ0IsR0FBeEIsSUFwQ3pCekMsRUFBY1ksVUFBVUMsSUFBSSxVQXVDOUJGLElBaERFaEIsRUFBV2lCLFVBQVVVLE9BQU8sVUFtRHpCYixJQUFpQkEsRUFBa0IsSUFBSWtDLGlCQUV4Q0MsRUFBYyxLQVpZLG1CQWVScEIsRUFBZ0JDLEdBZlIsUUFlNUJtQixFQWY0QixnRUFpQjVCQyxRQUFRQyxJQUFSLE1BRWlCLGVBQWIsS0FBSUMsT0F2RUxDLE9BdUU0QnJDLEVBdEUvQmIsRUFBU21ELFlBQWNELEdBQU9sRCxFQUFTb0QsUUFBUUYsSUFDL0NuRCxFQUFZZSxVQUFVVSxPQUFPLFdBdUU3QlIsSUFDQXRCLEVBQUsyRCxpQkF0QnVCLDJCQTJCOUJyQyxJQUNBQyxFQUE4QjZCLEdBQzlCNUMsRUFBY21ELGlCQTdCZ0Isa0NBckRqQixJQUNSSCxHQW9EeUIsd0JBQWhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9hbi1hcHByb3ZhbC1wcmVkaWN0aW9uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpXG5jb25zdCBzcGlubmVyQ3RyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5uZXItbW9kYWwtY3RyJylcbmNvbnN0IGNhbmNlbFByZWRpY3Rpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Bpbm5lci1jdHIgLmNhbmNlbCcpXG5cbmNvbnN0IGVyck1zZ01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVyci1tc2ctbW9kYWwnKVxuY29uc3QgZXJyTXNnRWwgPSBlcnJNc2dNb2RhbC5xdWVyeVNlbGVjdG9yKCcubXNnJylcbmNvbnN0IGhpZGVFcnJNc2cgPSBlcnJNc2dNb2RhbC5xdWVyeVNlbGVjdG9yKCcuZXJyLW1zZy1tb2RhbCAuY2xvc2UtbW9kYWwnKVxuXG5jb25zdCBwcmVkaWN0aW9uQ3RyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3Rpb25zLWN0cicpXG5jb25zdCBtb2RlbHNFbHMgPSB7XG4gIGJheWVzOiBwcmVkaWN0aW9uQ3RyLnF1ZXJ5U2VsZWN0b3IoJy5iYXllcycpLFxuICB0cmVlOiBwcmVkaWN0aW9uQ3RyLnF1ZXJ5U2VsZWN0b3IoJy50cmVlJyksXG4gIGxvZ2lzdGljOiBwcmVkaWN0aW9uQ3RyLnF1ZXJ5U2VsZWN0b3IoJy5sb2dpc3RpYycpLFxuICBzdm06IHByZWRpY3Rpb25DdHIucXVlcnlTZWxlY3RvcignLnN2bScpLFxuICBrbm46IHByZWRpY3Rpb25DdHIucXVlcnlTZWxlY3RvcignLmtubicpLFxuICB2b3RpbmdfbWFqb3JpdHk6IHByZWRpY3Rpb25DdHIucXVlcnlTZWxlY3RvcignLm1ham9yaXR5JyksXG59XG5cbmNvbnN0IEFQSSA9ICdodHRwczovL2xvYW4tYXBwcm92YWwtcHJlZGljdGlvbi1hcGkub25yZW5kZXIuY29tJ1xubGV0IGFib3J0Q29udHJvbGxlciA9IG51bGxcblxuY29uc3QgTlVNRVJJQ19GSUVMRFMgPSBbXG4gICdBcHBsaWNhbnRJbmNvbWUnLFxuICAnQ29hcHBsaWNhbnRJbmNvbWUnLFxuICAnTG9hbkFtb3VudCcsXG4gICdMb2FuX0Ftb3VudF9UZXJtJyxcbl1cblxuY29uc3QgZXJyTXNnID0ge1xuICBzaG93KG1zZykge1xuICAgIGVyck1zZ0VsLnRleHRDb250ZW50ID0gbXNnIHx8IGVyck1zZ0VsLmRhdGFzZXQubXNnXG4gICAgZXJyTXNnTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgfSxcbiAgaGlkZSgpIHtcbiAgICBlcnJNc2dNb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICB9LFxufVxuXG5jb25zdCBzcGlubmVyID0ge1xuICBzaG93KCkge1xuICAgIHNwaW5uZXJDdHIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJylcbiAgfSxcbiAgaGlkZSgpIHtcbiAgICBzcGlubmVyQ3RyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpXG4gIH0sXG59XG5cbmNvbnN0IG1vZGVsc1ByZWRpY3Rpb25zID0ge1xuICBoaWRlKCkge1xuICAgIHByZWRpY3Rpb25DdHIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgfSxcbiAgc2hvd1Jlc3VsdHMoeSkge1xuICAgIE9iamVjdC5lbnRyaWVzKG1vZGVsc0VscykuZm9yRWFjaCgoW21vZGVsTmFtZSwgbW9kZWxFbF0pID0+IHtcbiAgICAgIG1vZGVsRWwuY2xhc3NMaXN0LnJlbW92ZSgneWVzJywgJ25vJylcbiAgICAgIG1vZGVsRWwuY2xhc3NMaXN0LmFkZCh5W21vZGVsTmFtZV0udG9Mb3dlckNhc2UoKSlcbiAgICB9KVxuXG4gICAgcHJlZGljdGlvbkN0ci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICB9LFxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFByZWRpY3Rpb24oeCkge1xuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goQVBJLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHgpLFxuICB9KVxuXG4gIHJldHVybiByZXNwLmpzb24oKVxufVxuXG5oaWRlRXJyTXNnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZXJyTXNnLmhpZGUoKSlcblxuY2FuY2VsUHJlZGljdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKCFhYm9ydENvbnRyb2xsZXIpIHJldHVyblxuXG4gIGFib3J0Q29udHJvbGxlci5hYm9ydCgpXG4gIGFib3J0Q29udHJvbGxlciA9IG51bGxcbn0pXG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgZXYgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgeCA9IE9iamVjdC5mcm9tRW50cmllcyhbLi4ubmV3IEZvcm1EYXRhKGZvcm0pXSlcbiAgTlVNRVJJQ19GSUVMRFMuZm9yRWFjaChhdHRyID0+ICh4W2F0dHJdID0gTnVtYmVyKHhbYXR0cl0pKSlcblxuICBtb2RlbHNQcmVkaWN0aW9ucy5oaWRlKClcbiAgZXJyTXNnLmhpZGUoKVxuICBzcGlubmVyLnNob3coKVxuXG4gIGlmICghYWJvcnRDb250cm9sbGVyKSBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcblxuICBsZXQgcHJlZGljdGlvbnMgPSBudWxsXG5cbiAgdHJ5IHtcbiAgICBwcmVkaWN0aW9ucyA9IGF3YWl0IGZldGNoUHJlZGljdGlvbih4KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpXG5cbiAgICBpZiAoZXJyLm5hbWUgIT09ICdBYm9ydEVycm9yJykgZXJyTXNnLnNob3coKVxuXG4gICAgc3Bpbm5lci5oaWRlKClcbiAgICBmb3JtLnNjcm9sbEludG9WaWV3KClcblxuICAgIHJldHVyblxuICB9XG5cbiAgc3Bpbm5lci5oaWRlKClcbiAgbW9kZWxzUHJlZGljdGlvbnMuc2hvd1Jlc3VsdHMocHJlZGljdGlvbnMpXG4gIHByZWRpY3Rpb25DdHIuc2Nyb2xsSW50b1ZpZXcoKVxufSlcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5mdW5jdGlvbiBwb3B1bGF0ZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cIm51bWJlclwiXScpLmZvckVhY2goKGlucCwgaSkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGlucC52YWx1ZSA9IGkgKyAxXG4gIH0pXG4gIGNvbnN0IG5hbWVzID0gbmV3IFNldCgpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9XCJyYWRpb1wiXWApLmZvckVhY2goaW5wID0+IHtcbiAgICBpZiAobmFtZXMuaGFzKGlucC5uYW1lKSkgcmV0dXJuXG4gICAgbmFtZXMuYWRkKGlucC5uYW1lKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGlucC5jaGVja2VkID0gdHJ1ZVxuICB9KVxufVxuXG4vLyBwb3B1bGF0ZSgpXG4iXSwibmFtZXMiOlsiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNwaW5uZXJDdHIiLCJjYW5jZWxQcmVkaWN0aW9uQnRuIiwiZXJyTXNnTW9kYWwiLCJlcnJNc2dFbCIsImhpZGVFcnJNc2ciLCJwcmVkaWN0aW9uQ3RyIiwibW9kZWxzRWxzIiwiYmF5ZXMiLCJ0cmVlIiwibG9naXN0aWMiLCJzdm0iLCJrbm4iLCJ2b3RpbmdfbWFqb3JpdHkiLCJBUEkiLCJhYm9ydENvbnRyb2xsZXIiLCJOVU1FUklDX0ZJRUxEUyIsImVyck1zZyIsImNsYXNzTGlzdCIsImFkZCIsInNwaW5uZXIiLCJtb2RlbHNQcmVkaWN0aW9ucyIsInkiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsIm1vZGVsTmFtZSIsIm1vZGVsRWwiLCJyZW1vdmUiLCJ0b0xvd2VyQ2FzZSIsImZldGNoUHJlZGljdGlvbiIsIngiLCJmZXRjaCIsIm1ldGhvZCIsInNpZ25hbCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3AiLCJqc29uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFib3J0IiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImZyb21FbnRyaWVzIiwiRm9ybURhdGEiLCJhdHRyIiwiTnVtYmVyIiwiQWJvcnRDb250cm9sbGVyIiwicHJlZGljdGlvbnMiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsIm1zZyIsInRleHRDb250ZW50IiwiZGF0YXNldCIsInNjcm9sbEludG9WaWV3Il0sInNvdXJjZVJvb3QiOiIifQ==