(this["webpackJsonpfair-salary-web"]=this["webpackJsonpfair-salary-web"]||[]).push([[0],{81:function(e,n,t){e.exports=t(91)},91:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(10),i=t.n(l),o=t(61),c=t(15),u=t(47),s=t(16),m=t(121),f=t(119),d=t(120);function v(){var e=Object(c.a)(["\n  margin-bottom: 20px;\n"]);return v=function(){return e},e}function h(){var e=Object(c.a)(["\n  width: 300px;\n"]);return h=function(){return e},e}function p(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]);return p=function(){return e},e}var y=s.a.div(p()),g=s.a.div(h()),E=s.a.div(v());function b(e){var n=e.formState,t=e.onChange;return r.a.createElement(y,null,r.a.createElement(g,null,r.a.createElement(E,null,r.a.createElement(m.a,{label:"\u041c\u043e\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430",variant:"filled",placeholder:"20000",InputProps:{endAdornment:r.a.createElement(f.a,{position:"end"},"\u20bd")},onChange:function(e){var a=e.target.value;t(Object(u.a)({},n,{salary:a}))},value:n.salary,fullWidth:!0})),r.a.createElement(d.a,{label:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0440\u0430\u0437 \u043c\u0435\u043d\u044f\u043b\u0430\u0441\u044c",variant:"inline",inputVariant:"filled",placeholder:"31/01/2020",format:"dd/MM/yyyy",value:n.date,onChange:function(e){t(Object(u.a)({},n,{date:e}))},fullWidth:!0,invalidDateMessage:"\u0423\u043f\u0441, \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u0434\u0430\u0442\u0430"})))}var x=t(59),w=t.n(x);function j(){var e=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: 400px;\n  align-items: center;\n  justify-content: center;\n"]);return j=function(){return e},e}var S=s.a.div(j());function O(){return r.a.createElement(S,null,r.a.createElement("h2",null,"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0443"))}function C(){var e=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: 400px;\n  align-items: center;\n  justify-content: center;\n"]);return C=function(){return e},e}var M=s.a.div(C());function D(){return r.a.createElement(M,null,r.a.createElement("h2",null,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043c\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0441 \u0441\u0443\u043c\u043c\u0430\u043c\u0438 \u043e\u0442 1000 \u0440\u0443\u0431\u043b\u0435\u0439"," ",r.a.createElement("span",{role:"img","aria-label":"\u043a\u043e\u043b\u0435\u0447\u043a\u043e \u0441 \u0434\u0440\u0430\u0433\u043e\u0446\u0435\u043d\u043d\u044b\u043c \u043a\u0430\u043c\u043d\u0435\u043c"},"\ud83d\udc8d")))}function k(){var e=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n"]);return k=function(){return e},e}var F=s.a.div(k());function A(e){var n,t,a=e.salary;return r.a.createElement(F,null,r.a.createElement("h2",null,"\u0412\u0430\u0448\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f ",a," ",(n=a,t={nom:"\u0440\u0443\u0431\u043b\u044c",gen:"\u0440\u0443\u0431\u043b\u044f",plu:"\u0440\u0443\u0431\u043b\u0435\u0439"},(n=Math.abs(n)).toString().indexOf(".")>-1?t.gen:n%10===1&&n%100!==11?t.nom:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?t.gen:t.plu)))}var W=function(e,n,t){var a=t.length-n,r=new Date;return new Date(r.getFullYear(),r.getMonth()-a).getTime()},P=function(e){return function(n,t){return Math.round(e+e*(t/1e3*Math.random()))}},T=function(e){return new Array(15).fill(0).map(function(e){return function(n,t,a){return{x:W(0,t,a),y:P(e)(n,t)}}}(e))};function B(e){return e>9999}function I(e){return e<1e3}function J(e){var n=function(e){var n=Number(e.salary)||void 0,t=n&&T(n)||void 0,a=t&&t[t.length-1].y||void 0,r=!n;return{apexChartProps:function(e){var n=e.data;return{options:{chart:{id:"chart",toolbar:{show:!1},zoom:{enabled:!1},animations:{enabled:e.isEnabledAnimations}},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},xaxis:{type:"datetime"},stroke:{curve:"smooth"},fill:{type:"gradient",gradient:{shade:"dark",type:"vertical",gradientToColors:void 0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[{offset:0,color:"#FF0",opacity:1},{offset:100,color:"#D0D",opacity:1}]}}},series:[{name:"\u0420\u0435\u0430\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430",data:n}],annotations:{xaxis:[{x:"\u0424\u0435\u0432",borderColor:"#775DD0",label:{style:{color:"#fff"},text:"X-axis annotation - 22 Nov"}}]}}}({data:t,isEnabledAnimations:!!n&&B(n)}),resultSalary:a,isUnrealSalary:n&&I(n),isEmptySalary:r}}(e.formState),t=n.isEmptySalary,l=n.isUnrealSalary,i=n.apexChartProps,o=n.resultSalary;return t?r.a.createElement(O,null):l?r.a.createElement(D,null):r.a.createElement(a.Fragment,null,r.a.createElement(A,{salary:o}),r.a.createElement(w.a,Object.assign({},i,{type:"line",height:400})))}var N=t(92);function U(){var e=Object(c.a)(["\n  margin-top: 40px;\n"]);return U=function(){return e},e}var z=s.a.div(U());var V=function(){var e=Object(a.useState)({salary:""}),n=Object(o.a)(e,2),t=n[0],l=n[1];return r.a.createElement(a.Fragment,null,r.a.createElement(N.a,{variant:"h1",align:"center"},"\u0421\u043f\u0440\u0430\u0432\u0435\u0434\u043b\u0438\u0432\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430"),r.a.createElement(z,null,r.a.createElement(b,{formState:t,onChange:l})),r.a.createElement(z,null,r.a.createElement(J,{formState:t})))},X=t(60),Y=t(11);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y.a,{utils:X.a},r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[81,1,2]]]);
//# sourceMappingURL=main.575a7b7d.chunk.js.map