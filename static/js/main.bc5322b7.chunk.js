(this["webpackJsonpfish-tree-bird-quiz"]=this["webpackJsonpfish-tree-bird-quiz"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"name":"Wittling","answer":"Fisch"},{"name":"Leng","answer":"Fisch"},{"name":"Kliesche","answer":"Fisch"},{"name":"Knurrhahn","answer":"Fisch"},{"name":"\xc4sche","answer":"Fisch"},{"name":"Elritze","answer":"Fisch"},{"name":"Giebel","answer":"Fisch"},{"name":"Glattdick","answer":"Fisch"},{"name":"G\xfcster","answer":"Fisch"},{"name":"Hasel","answer":"Fisch"},{"name":"Karausche","answer":"Fisch"},{"name":"Koppe","answer":"Fisch"},{"name":"Laube","answer":"Fisch"},{"name":"Rapfen","answer":"Fisch"},{"name":"Reinanke","answer":"Fisch"},{"name":"Rotfeder","answer":"Fisch"},{"name":"Rotauge","answer":"Fisch"},{"name":"Schleie","answer":"Fisch"},{"name":"Schneider","answer":"Fisch"},{"name":"Schr\xe4tzer","answer":"Fisch"},{"name":"Streber","answer":"Fisch"},{"name":"Zingel","answer":"Fisch"},{"name":"Bekassine","answer":"Vogel"},{"name":"H\xe4nfling","answer":"Vogel"},{"name":"Dohle","answer":"Vogel"},{"name":"Fitis","answer":"Vogel"},{"name":"G\xe4nses\xe4ger","answer":"Vogel"},{"name":"Gimpel","answer":"Vogel"},{"name":"Girlitz","answer":"Vogel"},{"name":"Grauschn\xe4pper","answer":"Vogel"},{"name":"Heckenbraunelle","answer":"Vogel"},{"name":"Kernbei\xdfer","answer":"Vogel"},{"name":"Kleiber","answer":"Vogel"},{"name":"Kormoran","answer":"Vogel"},{"name":"Mittels\xe4ger","answer":"Vogel"},{"name":"Neunt\xf6ter","answer":"Vogel"},{"name":"Ortolan","answer":"Vogel"},{"name":"Pirol","answer":"Vogel"},{"name":"Rotmilan","answer":"Vogel"},{"name":"Seidenschwanz","answer":"Vogel"},{"name":"Sperber","answer":"Vogel"},{"name":"Stieglitz","answer":"Vogel"},{"name":"Uferschwalbe","answer":"Vogel"},{"name":"Ziegenmelker","answer":"Vogel"},{"name":"Zwergdommel","answer":"Vogel"},{"name":"Zilpzalp","answer":"Vogel"},{"name":"Lerche","answer":"Vogel"},{"name":"Tamariske","answer":"Baum"},{"name":"Afzelia","answer":"Baum"},{"name":"Gleditschie","answer":"Baum"},{"name":"Esche","answer":"Baum"},{"name":"Persimone","answer":"Baum"},{"name":"Zeder","answer":"Baum"},{"name":"Spatzenzunge","answer":"Baum"},{"name":"Kronwicke","answer":"Baum"},{"name":"borstiger Fl\xfcgelstorax","answer":"Baum"},{"name":"Buloke","answer":"Baum"},{"name":"Ulme","answer":"Baum"},{"name":"L\xe4rche","answer":"Baum"},{"name":"Akebie","answer":"Baum"},{"name":"Pfaffenh\xfctchen","answer":"Baum"},{"name":"Berberitze","answer":"Baum"},{"name":"Seidelbast","answer":"Baum"},{"name":"Liguster","answer":"Baum"},{"name":"Erle","answer":"Baum"},{"name":"Zelkove","answer":"Baum"},{"name":"Karambole","answer":"Baum"},{"name":"Oleander","answer":"Baum"},{"name":"Stechwinde","answer":"Baum"},{"name":"Reneklode","answer":"Baum"},{"name":"Schlehe","answer":"Baum"},{"name":"Seemandel","answer":"Baum"},{"name":"Silberginster","answer":"Baum"},{"name":"Wei\xdfkopfmimose","answer":"Baum"},{"name":"Ysop","answer":"Baum"}]')},,,function(e,n,a){e.exports=a.p+"static/media/tree.f13684d3.png"},function(e,n,a){e.exports=a.p+"static/media/fish.482e093c.png"},function(e,n,a){e.exports=a.p+"static/media/bird.8f93aab9.png"},function(e,n,a){e.exports=a.p+"static/media/life.ad1ab079.png"},function(e,n,a){e.exports=a.p+"static/media/lost_life.ae020acc.png"},,,function(e,n,a){e.exports=a(39)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},,,,,,function(e,n,a){"use strict";a.r(n);var r=a(0),s=a.n(r),t=a(8),i=a.n(t),o=(a(31),a(32),a(25)),m=a(1),l=(a(33),a(19)),c=a.n(l),u=a(20),w=a.n(u),d=a(21),g=a.n(d),h=a(22),f=a.n(h),p=a(23),E=a.n(p),b=a(7),_=[new Audio("/fish-tree-bird-quiz/sounds/wrong/wrong_1.mp3"),new Audio("/fish-tree-bird-quiz/sounds/wrong/wrong_2.mp3"),new Audio("/fish-tree-bird-quiz/sounds/wrong/wrong_3.mp3"),new Audio("/fish-tree-bird-quiz/sounds/wrong/wrong_4.mp3"),new Audio("/fish-tree-bird-quiz/sounds/wrong/wrong_5.mp3")],B=[new Audio("/fish-tree-bird-quiz/sounds/retry/retry_1.mp3")],v=[new Audio("/fish-tree-bird-quiz/sounds/victory/victory_1.mp3"),new Audio("/fish-tree-bird-quiz/sounds/victory/victory_2.mp3"),new Audio("/fish-tree-bird-quiz/sounds/victory/victory_3.mp3")],V=[new Audio("/fish-tree-bird-quiz/sounds/game_over/game_over_1.mp3"),new Audio("/fish-tree-bird-quiz/sounds/game_over/game_over_2.mp3"),new Audio("/fish-tree-bird-quiz/sounds/game_over/game_over_3.mp3"),new Audio("/fish-tree-bird-quiz/sounds/game_over/game_over_4.mp3"),new Audio("/fish-tree-bird-quiz/sounds/game_over/game_over_5.mp3")],F=function(){for(var e=function(e){e[Math.floor(Math.random()*e.length)].play().then((function(){})).catch((function(e){console.log(e)}))},n=Object(b.c)((function(e){return e.game})),a=Object(b.b)(),r=function(r){r.currentTarget.dataset.answer===n.questions[n.currentQuestionIndex].answer?a({type:"INCREASE_SCORE"}):(n.lifes>1?e(_):e(V),a({type:"REMOVE_LIFE"})),n.questions.length===n.currentQuestionIndex+1&&n.lifes>0&&e(v),a({type:"GET_NEXT_QUESTION"})},t=[0,0,0,0,0],i=0;i<n.lifes;i++)t[i]=1;return n.lifes>0?n.questions.length>n.currentQuestionIndex?s.a.createElement("div",null,s.a.createElement("h1",null,"Fisch, Baum oder Vogel?"),s.a.createElement("div",null,t.map((function(e){return 1===e?s.a.createElement("img",{className:"life-image",src:f.a}):0===e?s.a.createElement("img",{className:"life-image",src:E.a}):void 0})),s.a.createElement("p",null,"Verbleibende Namen: ",n.questions.length-n.currentQuestionIndex),s.a.createElement("h3",null,"Was ist ein/e ",n.questions[n.currentQuestionIndex].name," ?")),s.a.createElement("button",{className:"game-button","data-answer":"Fisch",style:{backgroundColor:"blue"},onClick:r},s.a.createElement("p",null,"Fisch"),s.a.createElement("img",{src:w.a})),s.a.createElement("button",{className:"game-button","data-answer":"Baum",style:{backgroundColor:"green"},onClick:r},s.a.createElement("p",null,"Baum"),s.a.createElement("img",{src:c.a})),s.a.createElement("button",{className:"game-button","data-answer":"Vogel",style:{backgroundColor:"red"},onClick:r},s.a.createElement("p",null,"Vogel"),s.a.createElement("img",{src:g.a}))):s.a.createElement("div",null,s.a.createElement("h1",null,"Echt geil gemacht!"),s.a.createElement("button",{onClick:function(){a({type:"RESET_GAME_STATE"})}},"Lass mich nochmal ran")):s.a.createElement("div",null,s.a.createElement("h1",null,"rip"),s.a.createElement("button",{onClick:function(){e(B),a({type:"RESET_GAME_STATE"})}},"Ich schaffe das"))};var S=function(){return s.a.createElement(o.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(m.c,null,s.a.createElement(m.a,{path:""},s.a.createElement(F,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(5),A=a(10),k=a(16),q=function(e){for(var n,a,r=e.length;0!==r;)a=Math.floor(Math.random()*r),n=e[r-=1],e[r]=e[a],e[a]=n;return e},y={questions:q(k),currentQuestionIndex:0,score:0,lifes:5},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"RESET_GAME_STATE":return{questions:q(k),currentQuestionIndex:0,score:0,lifes:5};case"GET_NEXT_QUESTION":return Object(A.a)({},e,{currentQuestionIndex:e.currentQuestionIndex+1});case"INCREASE_SCORE":return Object(A.a)({},e,{score:e.score+1});case"REMOVE_LIFE":return Object(A.a)({},e,{lifes:e.lifes-1});default:return e}},I=Object(z.b)({game:x}),T=Object(z.c)(I);i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b.a,{store:T},s.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.bc5322b7.chunk.js.map