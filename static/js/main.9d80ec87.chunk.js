(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{11:function(e,o,t){"use strict";t.r(o);var i=t(1),d=t.n(i),c=t(5),r=t.n(c),s=(t(4),t(2)),n=[{id:"Meow 1",keyCode:81,keyTrigger:"Q",sound:"https://www.mboxdrive.com/Meow%201.mp3"},{id:"Meow 2",keyCode:87,keyTrigger:"W",sound:"https://www.mboxdrive.com/Meow%202.mp3"},{id:"Meow 3",keyCode:69,keyTrigger:"E",sound:"https://www.mboxdrive.com/Meow%203.mp3"},{id:"Meow 4",keyCode:65,keyTrigger:"A",sound:"https://www.mboxdrive.com/Meow%204.mp3"},{id:"Meow 5",keyCode:83,keyTrigger:"S",sound:"https://www.mboxdrive.com/Meow%205.mp3"},{id:"Meow 6",keyCode:68,keyTrigger:"D",sound:"https://www.mboxdrive.com/Meow%206.mp3"},{id:"Meow 7",keyCode:90,keyTrigger:"Z",sound:"https://www.mboxdrive.com/Meow%207.mp3"},{id:"Meow 8",keyCode:88,keyTrigger:"X",sound:"https://www.mboxdrive.com/Meow%208.mp3"},{id:"Meow 9",keyCode:67,keyTrigger:"C",sound:"https://www.mboxdrive.com/Meow%209.mp3"}],a=t.p+"static/media/cat.09be61c1.svg",w=t(0),m=function(e){var o=e.drumpads,t=(o.keyTrigger,o.keyCode,o.sound,o.id,Object(i.useState)("")),d=Object(s.a)(t,2),c=d[0],r=d[1];return Object(w.jsx)(w.Fragment,{children:o.map((function(e){var o=e.keyTrigger,t=e.keyCode,i=e.sound,d=e.id;return document.addEventListener("keydown",(function(e){e.keyCode===t&&(r(d),new Audio(i).play())})),Object(w.jsxs)("article",{children:[Object(w.jsxs)("button",{className:"drum-pad",onClick:function(){new Audio(i).play(),r(d)},children:[Object(w.jsx)("img",{src:a,alt:"this is cat",className:"catSvg"}),o]}),Object(w.jsx)("div",{class:"display",id:"display",children:Object(w.jsx)("h1",{children:c})})]})}))})};var u=function(){var e=Object(i.useState)(n),o=Object(s.a)(e,1)[0];return Object(w.jsxs)("main",{children:[Object(w.jsx)("div",{className:"container",id:"drum-machine",children:Object(w.jsx)("div",{className:"drum-pads",children:Object(w.jsx)(m,{drumpads:o})})}),Object(w.jsxs)("div",{className:"notation",children:["Icons made by"," ",Object(w.jsx)("a",{href:"https://www.flaticon.com/authors/vitaly-gorbachev",title:"Vitaly Gorbachev",children:"Vitaly Gorbachev"})," ","from"," ",Object(w.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})};r.a.render(Object(w.jsx)(d.a.StrictMode,{children:Object(w.jsx)(u,{})}),document.getElementById("root"))},4:function(e,o,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.9d80ec87.chunk.js.map