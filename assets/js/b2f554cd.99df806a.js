"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"a-glimpse-into-front-end-interviews","metadata":{"permalink":"/blog/a-glimpse-into-front-end-interviews","source":"@site/blog/2021-08-30-a-glimpse-into-front-end-interviews.md","title":"A Glimpse into Front End Interviews","description":"A glimpse into the front end interview process and questions that frequently come up.","date":"2021-08-30T00:00:00.000Z","formattedDate":"August 30, 2021","tags":[{"label":"front end","permalink":"/blog/tags/front-end"},{"label":"interview","permalink":"/blog/tags/interview"}],"readingTime":4.99,"truncated":true,"authors":[{"name":"Kai Li","title":"Software Engineer at Quora","url":"https://github.com/li-kai","imageURL":"https://github.com/li-kai.png"}],"nextItem":{"title":"Front End Career Questions","permalink":"/blog/front-end-career-questions"}},"content":"<head>\\n  <link rel=\\"canonical\\" href=\\"https://lik.ai/blog/my-experience-with-front-end-interviews\\" />\\n</head>\\n\\nA glimpse into the front end interview process and questions that frequently come up.\\n\\n\x3c!--truncate--\x3e\\n\\n## Interview Process\\n\\nApplying for front end engineer roles is very similar to software engineer roles, but the interviews can be quite different. In my experience, for each company, there tend to be between 3 to 4 sessions. Most of them will be testing on JavaScript and discussion around web development technologies, and the rest on algorithms or behavioral.\\n\\nOne aspect that I have found interesting is that the younger the company, the more questions will lean towards JavaScript. This could be because hiring specifically for front end engineers is relatively new. Older companies used to only hire software engineers without regard if their focus is on the back end or front end.\\n\\n## JavaScript Rounds\\n\\nJavaScript is the main focus among all the companies I have interviewed with. It makes sense as front end work nowadays is very JavaScript-heavy. HTML and CSS knowledge is no longer a necessity thanks to component libraries and the likes.\\n\\n### JavaScript Minutiae\\n\\nTo qualify for some companies, you might need to brush up on the minutiae of JavaScript. Topics like variable hoisting, holey arrays, non-strict mode, and switch case fall through came up. While I do not feel that knowing such things determine who is a better engineer, it is what it is. Here is my [JavaScript cheat sheet](https://repl.it/@li_kai/JavaScript-Cheatsheet).\\n\\n### JavaScript Topics\\n\\nAfter the first assessment, live interviews tend to test on more advanced JavaScript concepts such as the event loop, promises, async/await, scope and closures.\\n\\nIf you have been writing JavaScript applications for some time and have come across a variety of situations, this should not be too hard.\\n\\nThe most frequently asked question I have ever gotten is to implement `debounce` and `throttle`:\\n\\n```javascript\\nfunction debounce(fn, duration) {\\n  let id;\\n  return function (...args) {\\n    if (id) {\\n      // reset timeout and prevent it from triggering\\n      // if debounced function is called within duration\\n      clearTimeout(id);\\n    }\\n    id = setTimeout(() => {\\n      fn(...args);\\n    }, duration);\\n  };\\n}\\n\\nfunction throttle(fn, duration) {\\n  let id;\\n  return function (...args) {\\n    if (id) {\\n      // if throttled function is called within duration,\\n      // do nothing\\n      return;\\n    }\\n\\n    fn(...args);\\n\\n    id = setTimeout(() => {\\n      id = null; // release \\"lock\\"\\n    }, duration);\\n  };\\n}\\n\\n// usage example\\nconst helloWorld = () => {\\n  console.log(\'hello world\');\\n};\\nconst debouncedHelloWorld = debounce(helloWorld, 1000);\\nconst throttledHelloWorld = throttle(helloWorld, 1000);\\n```\\n\\nThe second most frequently asked question is to implement a sequential `Promise.all` of sorts:\\n\\n```typescript\\nfunction sequential(data, fetcher) {\\n  const helper = (index, results) => {\\n    if (index === data.length) {\\n      return results;\\n    }\\n    return fetcher(data[index]).then((datum) => {\\n      results.push(datum);\\n      return helper(index + 1, results);\\n    });\\n  };\\n\\n  return helper(0, []);\\n}\\n\\n// usage example\\nconst fetcher = (i) => {\\n  return new Promise((resolve) => {\\n    setTimeout(() => resolve(i), 1000);\\n  });\\n};\\nsequential([1, 2, 3], fetcher);\\n```\\n\\n## Discussion Rounds\\n\\n### Web development tools\\n\\nRegardless of how we wish to deny it, web development tools are an increasingly complex and diverse ecosystem.\\n\\nSmaller companies, especially start-ups, require engineers who have a good understanding of these tools. Larger companies will be able to abstract tooling complexity away from engineers unless the role demands it.\\n\\nAs such, web development tools like Webpack and Babel have become a common discussion topic.\\n\\nA good understanding of tools like Webpack would be to be able to explain the following concepts:\\n\\n- what is bundling\\n- what is tree-shaking\\n- what is lazy-loading and why does it matter\\n- how loaders work\\n\\n### React or web framework of choice\\n\\nIf the role states that React knowledge is required, you may be expected to answer or code out React components. If you do not have React experience, using other frameworks would be possible, provided that you can explain well what is happening.\\n\\nThis may range from implementing a feature live or simply answering or explaining some React concepts such as `useEffect`\'s dependencies array or `shouldComponentUpdate`.\\n\\n### Work experience\\n\\nAside from the two topics mentioned earlier, interviewers might dive into one or two things that they found interesting in your resume and ask you to elaborate.\\n\\nAs I had some experience in writing Babel plugins and jscodeshift code mods, I walked them through how I utilized those tools to help make the company codebase better.\\n\\n## Implementation Rounds\\n\\nIn all of my interviews, I have only been asked to implement a feature twice. It is not a common question, but it may come up.\\n\\nThis would come down to how well-versed you are with your basics such as HTML and CSS, as well as tools and frameworks. As an example, one of the question I have gotten was to implement an autocomplete search bar like Google\'s. If you have built something like that before, it is doable within an hour.\\n\\nImplementation rounds feel very similar to algorithms, as you need to actively find the best solution while thinking out loud and explaining your decisions.\\n\\n## Algorithm Rounds\\n\\nAs software engineers, we are not unfamiliar with algorithm questions. Leetcode and Hackerrank are common resources used for practicing such questions.\\n\\nAs I knew this was my weakness, this was where I spent the most time. It may be a little ironic that I chose Python over JavaScript as my language of choice for tackling algorithms. JavaScript\'s lack of a native minheap and binary search implementation made it a slightly worse choice.\\n\\nFor those who are just starting to learn Python or getting back into it, here\'s my [Python cheat sheet](https://repl.it/@li_kai/Python-Cheatsheet).\\n\\n## Conclusion\\n\\nFront end software engineer roles are not very different from general software engineer roles, but they do tend to be more specialized and in some ways, require even more effort.\\n\\nIf you are passionate about this field and interested in what you do, this would not be too high of a hurdle. I hope my experience and tips were useful to you, and good luck in your search!"},{"id":"front-end-career-questions","metadata":{"permalink":"/blog/front-end-career-questions","source":"@site/blog/2021-08-28-front-end-career-questions.md","title":"Front End Career Questions","description":"Recently a junior front end engineer at a startup in Singapore reached out to me to ask me how front end development as a career.","date":"2021-08-28T00:00:00.000Z","formattedDate":"August 28, 2021","tags":[{"label":"front end","permalink":"/blog/tags/front-end"},{"label":"career","permalink":"/blog/tags/career"}],"readingTime":3.675,"truncated":true,"authors":[{"name":"Yangshun Tay","title":"Engineering Lead at Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png"}],"prevItem":{"title":"A Glimpse into Front End Interviews","permalink":"/blog/a-glimpse-into-front-end-interviews"},"nextItem":{"title":"Are Front End Development Skills Enough for a Career?","permalink":"/blog/are-front-end-development-skills-enough-for-a-career"}},"content":"<head>\\n  <link rel=\\"canonical\\" href=\\"https://yangshun.im/blog/front-end-career-questions\\" />\\n</head>\\n\\nRecently a junior front end engineer at a startup in Singapore reached out to me to ask me how front end development as a career.\\n\\n\x3c!--truncate--\x3e\\n\\n### My manager told me that currently it\'s a bit hard to define requirements & expectations for higher tier / higher Individual Contributor (IC) level for Front End engineers in the organization. Since you are working at Facebook, I am wondering what are some requirements & expectations for higher IC level there for Front End engineers (maybe around IC4, IC5 and above if that\'s kinda the level you use there)?\\n\\nFor smaller companies that might be true, but it\'s still possible if you don\'t limit yourself to front end work. Going up the levels is all about scope and complexity. IC3s (Junior Engineer) work on tasks, IC4s (Software Engineer) work on features, IC5s (Senior Software Engineer) work on projects, IC6s (Staff Software Engineer) work on huge projects spanning across teams, IC7s (Senior Staff Software Engineer) work on projects spanning across the org, IC8+s (Principal Software Engineer) work on projects spanning across the company or even influencing the industry. If you\'re able to show that you can handle scope of that magnitude, there shouldn\'t be a reason not to be compensated at that level. That said, the rough guide I proposed here is for a company the size of Facebook where we have 10s of thousands of Engineers. Doing work that impacts an entire company of 10 people likely won\'t be IC8 level work. For reference, React core team is mostly made up of IC5s/IC6s and one IC7. Flow has a number of IC5s and IC6s as it\'s technically complex and affects how the entire company writes JavaScript. GraphQL has many senior engineers and the creator of GraphQL is currently a director (IC8 equivalent).\\n\\n### Are you still doing a lot of Front End-related development work now? Be it in the company or personally? If yes, I am just curious what are the things you often do, and what do you like in particular about Front End development?\\n\\nI\'m still doing a lot of Front End development for work. Less in a personal capacity ever since I stopped working on Docusaurus as a side project. You can check out my GitHub to see what stuff I\'ve done. At work I\'m in-charge of oculus.com and built the infra for it. I built a design system of React components for the content developers to develop the marketing pages.\\n\\nI really like all aspects of Front End development, maybe except optimizing performance. At FB we build a lot of Front End-related tooling (e.g. Jest, GraphQL, Flow) and libraries (our internal CSS-in-JS solution, Docusaurus, React, Flux, etc) which is personally very exciting to me. Even within front end development, there are various layers - very user-facing stuff (HTML/CSS/visual related code) and back end (JavaScript stuff, network layer, storage), tooling (ESLint, Babel, TypeScript, webpack). I call myself a full front end stack developer as I\'m decent across the entire front end stack. I\'m especially excited about tooling work as the problems there are interesting and challenging. Typically only large companies face such problems because they only occur at scale, hence I really like being at FB because FB is one of such companies.\\n\\n### Personally, do you have any tips on how best to grow as an Front End engineer? Are there any particular areas that you\'d recommend?\\n\\nLearn your fundamentals well. There are many UI and CSS libraries out there, but a good Front End developer still needs to know how to build a website without them. Peek beneath the abstraction layers and understand the problems these libraries are trying to solve, do not use them blindly. Keep building stuff - try to build a simple version of the libraries you frequently use, build interesting user interfaces and products, etc.\\n\\n### What do you think about developing breadth-wise vs depth-wise? For example, do you think it\'s important for a software engineer to know more about other fields besides the end he/she is currently working at? In particular, what do you think about an Front End engineer that knows BE (i.e. a full-stack developer), or an Front End engineer that knows mobile development (with the advent of React Native or Flutter)?\\n\\nI somewhat answered this in another [blog post](/blog/are-front-end-development-skills-enough-for-a-career). Lemme know if your question isn\'t answered after reading it."},{"id":"are-front-end-development-skills-enough-for-a-career","metadata":{"permalink":"/blog/are-front-end-development-skills-enough-for-a-career","source":"@site/blog/2019-11-03-are-front-end-development-enough-for-a-career.md","title":"Are Front End Development Skills Enough for a Career?","description":"Recently, an undergrad freshmen I met at an event asked me a question regarding Front End development as a career.","date":"2019-11-03T00:00:00.000Z","formattedDate":"November 3, 2019","tags":[{"label":"front end","permalink":"/blog/tags/front-end"},{"label":"career","permalink":"/blog/tags/career"}],"readingTime":7.585,"truncated":true,"authors":[{"name":"Yangshun Tay","title":"Front End Engineer at Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png"}],"prevItem":{"title":"Front End Career Questions","permalink":"/blog/front-end-career-questions"}},"content":"<head>\\n  <link rel=\\"canonical\\" href=\\"https://yangshun.im/blog/are-front-end-development-skills-enough-for-a-career\\" />\\n</head>\\n\\nRecently, an undergrad freshmen I met at an event asked me a question regarding Front End development as a career.\\n\\n\x3c!--truncate--\x3e\\n\\n> I\'m honestly quite into front end development \u2014 web technologies, UI/UX, web design and stuff. But with there being more and more accessible to new developers (create-react-app, parcel and such), I just can\'t help but wonder if these skills are sufficient to survive in the tech industry today. Not that it\'s a bad thing! Lowering the barrier to entry for programmers is always good. However, for those like myself who would like to pursue front end development as a career, I\'m just wondering if having these skills are enough.\\n\\nInteresting question. I\'ve wondered the same question to myself before but convinced myself that I\'m probably fine just dabbling in Front End development for now. \ud83d\ude0c\\n\\n## Front End is complex and getting increasingly so\\n\\nMost people would have used websites like facebook.com, youtube.com and gmail.com. These applications have hundreds of engineers working on them (thousands if you include the back end) due to the demanding nature of the application - it has to load fast, it has to be secure, it has to look pretty. These days, front end development is no longer just about building websites rendering a static HTML. Many websites these days are in fact web applications and a lot of thought has to be put into the application architecture, and that requires good software engineering capabilities.\\n\\nThat\'s why you see many Front End tools these days like React, Redux, Relay, CSS modules, webpack, etc. These tools exist because of the ever-increasing requirements of building rich and performant user experiences on the web. [Being a good Front End developer](https://www.toptal.com/front-end/how-to-hire) is very hard, there are many aspects to know about - HTML, CSS, JavaScript, Browser APIs, Security, Performance, Animation, SEO, Networking, the list is non-exhaustive and growing. There are always new problems to solve and new things to learn. [JavaScript fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4) was a term pretty common a few years back due to the explosion of tools in the Front End ecosystem. Things have gotten more stable but the JavaScript community is currently still one of the most fast-moving communities.\\n\\n## Does the rise of mobile threaten the existence of web developers?\\n\\nMany products now have a native mobile app version and that might make people think that the existence of Front End (web) developers could be threatened. I think that is only true to a small extent. Certain applications like Uber and Lyft make sense to be mobile-first, but there are also many complex professional applications where web (or any interface with a larger screens) will always prevail, such as office productivity and design software. Viewing things at a more macro scale, both mobile apps and web apps fall under the category of client-side applications. Many core skills important for being a good web developer are also important for mobile app development - they are transferable across platforms.\\n\\nTools like [React Native](https://reactnative.dev) and [Flutter](https://flutter.dev) have also been created to help engineers build products across platforms by only writing the code \\"once\\" (in quotes because that dream is still in development). This approach is not a silver bullet solution and has yet to prove itself adequately, but for prototyping small apps or even just certain parts of your mobile app, it works pretty well. In React Native, you write your application in JavaScript using React Native primitives, and the React Native runtime runs the code on the JavaScript engine in the platform to construct native app UI views and handle application logic. It\'s pretty similar to writing typical web front end code. Facebook\'s Ads Manager App and the Marketplace tab are built using React Native. There are numerous technologies that enable you to build native apps on mobile platforms by knowing web front end development.\\n\\nEven though mobile usage is on the rise, there still exists many use cases where the desktop still excels at. Google Suite, Microsoft Office, Design tools are still more efficiently operated on desktops. In fact, many desktop applications these days are built on HTML5 technologies instead of native desktop code using tools like Electron to package web application code into an executable shipped to users. You might already be using some of them without knowing - Slack, Discord, WhatsApp Desktop, VS Code, Atom Editor, just to name a few. I think developers who are only familiar with native desktop platform engineering skills have more reasons to worry than Front End developers.\\n\\nThe web is incredibly cross-platform!\\n\\n## Jack of all trades, master of one\\n\\nHowever, I think that being a Front End development in many regards, is considered a specialized position. That\'s why it\'s important to be \\"T-shaped\\". I first got introduced to this term through my ex-manager at Grab, Tim Goh. He advised me to have a specialization (front end), yet still know a bit about everything. In other words, you are strong in your core fundamentals, but you also specialize in a particular area.\\n\\nThis is good advice and it\'s not new advice. In most university courses, students are expected to study the fundamental courses before choosing their area of specialization. In the context of a School of Computing in National University of Singapore, students start their in school by taking basic classes in Algorithms, Data Structures, Software Engineering, Operating Systems, Computer Networks, before choosing their specialization in deeper areas like Compilers, Computer Graphics, AI and Machine Learning, Media, Networking and more.\\n\\nHaving a strong foundation enables someone to make switching domains a possibility. There will definitely be a ramp-up process, but it can be made smoother with solid foundations, and with the skill of learning how to learn fast. In the extreme case where the web becomes irrelevant, and no companies want to hire front end developers anymore, front end developers with strong fundamentals can always slightly switch tracks by doing mobile or back end engineering, or even the hottest UI platform (AR/VR?) out there.\\n\\nHaving good tools to use (like Create React App, Parcel) doesn\'t eradicate the need for Front End developers to possess good software engineering skills. What will happen if you are the person tasked to build the tools? Great Front End developers (or Software Engineers really) go beneath the abstractions layer, understand how their tools work, and what problems the tool set out to solve. They also constantly seek to challenge and improve the status quo by building better technologies to cater to the ever-increasing demands.\\n\\nAt Facebook, the Front End Engineers are Software Engineers first, domain experts second. Many of the Front End engineers I know at Facebook have a deep understanding of the technical stack and don\'t just work on stuff related to the browser. At Facebook scale, front end work also involves building a lot of infrastructure to make our front end code base scale well with the growing technical and people needs. That means writing [codemods](https://github.com/facebook/jscodeshift) to do large-scale refactoring, inventing new [UI](https://reactjs.org) [paradigms](http://facebook.github.io/flux/), performant [testing frameworks](https://jestjs.io), creating [type-checkers](https://flow.org) for untyped languages, changing the ways we [fetch data](https://graphql.org) from our servers and [managing it on clients](https://relay.dev). These tools wouldn\'t exist if the Front End engineers at Facebook didn\'t possess strong software engineering skills.\\n\\n## Pick up new, relevant skills\\n\\nIt can be hard to pick up new skills at work in an unrelated domain if there are no opportunities to do so. Thankfully (or not), due to the explosion of tools in the Front End ecosystem, I\'ve found an area which I have gained a new-found interest in - Programming Languages Theory (Static Analysis, Compilers, and Intepreters). Static analysis is incredibly important in tools that I use on a daily basis - it\'s being used by the module bundlers for bundling JavaScript files together, generating CSS from more user-friendly CSS syntaxes, compiling modern JavaScript into older versions of JavaScript that more common browsers can run, and even this blog post written in Markdown uses static analysis to be converted into HTML.\\n\\nI\'ve been toying with writing my own interpreter after learning this awesome book called [Crafting Interpreters](http://www.craftinginterpreters.com) and will be further exploring this domain in my spare time, possibly building Front End-related tooling in future that leverages static analysis and compilation.\\n\\nAdding new skills to my arsenal in a related but different domain helps me to stay relevant in the event that the industry no longer needs Front End developers \ud83d\ude31\\n\\n---\\n\\nIn summary, although Front End development is considered quite specialized, there\'s enough demand and complexity for it to stay relevant in the years to come. What would threaten the web would be an entire shift of the way users interact with apps, perhaps to a non-visual paradigm like a brain-controlled interface. However, paradigm shifts don\'t happen overnight and there will be sufficient time to react (pun intended) in the case that ever happens. Being strong in your Software Engineering fundamentals and knowing how to learn new skills fast will help you in switching domains (and also careers).\\n\\n_Opinions are my own and do not represent the views of my employer._"}]}')}}]);