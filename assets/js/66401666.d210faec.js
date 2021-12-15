"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[778],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},254:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={title:"Introduction"},l=void 0,u={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"What is this?",source:"@site/../contents/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/introduction",editUrl:"https://github.com/yangshun/front-end-interview-handbook/edit/master/contents/../contents/introduction.md",tags:[],version:"current",lastUpdatedBy:"Yangshun",lastUpdatedAt:1632562734,formattedLastUpdatedAt:"9/25/2021",frontMatter:{title:"Introduction"},sidebar:"root",next:{title:"Overview",permalink:"/pop-quiz"}},c=[{value:"What is this?",id:"what-is-this",children:[],level:2},{value:"Front end interview formats",id:"front-end-interview-formats",children:[],level:2},{value:"General tips for front end interviews",id:"general-tips-for-front-end-interviews",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-this"},"What is this?"),(0,i.kt)("p",null,"Unlike typical software engineer job interviews, front end interviews have less emphasis on algorithms and have more questions on intricate knowledge and expertise about the front end domain\u200a\u2014\u200aHTML, CSS, JavaScript, just to name a few."),(0,i.kt)("p",null,"Many front end interviews are highly-focused on domain knowledge and applying them to real-world scenarios. You might find that grinding LeetCode is not all you need when it comes to interviewing for a front end position, but that's a good thing! Front end interviews tend to test concepts that are more practical and relevant to real world front end development. But that doesn't mean that you don't have to be familiar with basic data structure and algorithmic concepts - there's just less emphasis on them and probably you get easier algorithmic questions."),(0,i.kt)("p",null,"While there are some existing resources to help front end developers in preparing for interviews, they aren't as abundant as materials for a software engineer interview. Among the existing resources, probably the most helpful question bank would be ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/h5bp/Front-end-Developer-Interview-Questions"},"Front-end Developer Interview Questions"),". Unfortunately, there aren't many complete and satisfactory answers to these questions readily available online. This handbook answers these pop quiz-style questions along with information and guidance for other front end interview formats."),(0,i.kt)("h2",{id:"front-end-interview-formats"},"Front end interview formats"),(0,i.kt)("p",null,"Unlike Software Engineering interviews, the formats for front end interviews are less known and less standard. However, there are a few common formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pop Quiz")," - Short questions which test your knowledge and have clear non-subjective answers. E.g. Explain the ",(0,i.kt)("inlineCode",{parentName:"li"},"this")," keyword in JavaScript"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Algorithms")," - LeetCode-style algorithmic coding questions, but solve them using JavaScript"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Write a small utility function/library")," - Implement a common function in JavaScript. This is the front end version of LeetCode-style algorithm questions. E.g. Implement the ",(0,i.kt)("inlineCode",{parentName:"li"},"debounce")," function found in Underscore/Lodash"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Build User Interfaces (component/app/game)")," - Write HTML, CSS and JavaScript to implement a UI component or a small app/game. E.g. Build a tabs component, Tic-tac-toe Game, Tetris Game"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"System Design")," - Describe and discuss how you would build a UI component/app/game and its architecture. This is the front end version of system design questions. E.g. Describe how you would build Emoji autocomplete feature in a chat app, what APIs it would have, what components there are to the feature, how to ensure it has good performance, UX, etc.")),(0,i.kt)("h2",{id:"general-tips-for-front-end-interviews"},"General tips for front end interviews"),(0,i.kt)("p",null,"Regardless of which type of format you are given, one thing stays true - you need to be extremely strong in your front end fundamentals and constantly display mastery of them to your interviewer."),(0,i.kt)("p",null,"Be ",(0,i.kt)("em",{parentName:"p"},"extremely")," familiar with the following concepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CSS: Specificity, Box model, Layout, Positioning"),(0,i.kt)("li",{parentName:"ul"},"JavaScript: ",(0,i.kt)("inlineCode",{parentName:"li"},"this")," keyword, Prototypes, closures, Async-style code, Promises, Timers (",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"setInterval"),")"),(0,i.kt)("li",{parentName:"ul"},"JavaScript Design Patterns: Observer pattern, Module pattern"),(0,i.kt)("li",{parentName:"ul"},"HTML: Event delegation (it was useful in almost every interview), DOM traversal, DOM manipulation, Form validation and submission"),(0,i.kt)("li",{parentName:"ul"},"Vanilla JS, or jQuery at the very least. Not all interviews allow you to use React as they want to see mastery of lower-level stuff")),(0,i.kt)("p",null,"Look out for interview questions by companies on Glassdoor. Front end questions are not as abundant but some still can be found. Many companies use similar questions."))}d.isMDXComponent=!0}}]);