(this["webpackJsonpreact-simon-says"]=this["webpackJsonpreact-simon-says"]||[]).push([[0],{27:function(e,t,n){e.exports=n.p+"static/media/wood.97685270.jpg"},31:function(e,t,n){e.exports=n(51)},38:function(e,t,n){e.exports=n.p+"static/media/applause.9cb7c788.wav"},39:function(e,t,n){e.exports=n.p+"static/media/aww.827dbe6b.wav"},40:function(e,t,n){e.exports=n.p+"static/media/a_sharp.8c41f6e6.wav"},41:function(e,t,n){e.exports=n.p+"static/media/c_sharp.8b562331.wav"},42:function(e,t,n){e.exports=n.p+"static/media/f_sharp.720b7b95.wav"},43:function(e,t,n){e.exports=n.p+"static/media/g_sharp.14433c26.wav"},51:function(e,t,n){"use strict";n.r(t);var r,a,o,l=n(0),c=n.n(l),u=n(22),i=n.n(u),s=n(2),d=n(23),g=n(6),h=n(4),f=n(28);function p(){var e=Object.keys(r).map((function(e){return r[e]}));return e[Math.floor(Math.random()*e.length)]}!function(e){e.Red="Red",e.Blue="Blue",e.Yellow="Yellow",e.Green="Green"}(r||(r={})),function(e){e.en="en",e.es="es",e.fr="fr"}(a||(a={})),function(e){e.SOUND="sound",e.HIGH_SCORE="high_score",e.LOCALE="locale",e.HIGH_SCORE_DATE="high_score_date"}(o||(o={}));var b=n(38),m=n(39),v=n(40),S=n(41),O=n(42),w=n(43);function E(e){var t=new Audio(e);t.volume=.5,t.play().then((function(){return t.remove()}))}function C(e){E(function(e){switch(e){case r.Red:return v;case r.Blue:return S;case r.Yellow:return w;case r.Green:default:return O}}(e))}var j={$Green:"#23A623",$Green_Lit:"#00F500",$Red:"#B50D0D",$Red_Lit:"#FF0000",$Yellow:"#C2B206",$Yellow_Lit:"#FFFF00",$Blue:"#5454C4",$Blue_Lit:"#0000FF"};function x(e){var t=new Date;return new Date(t.setFullYear(t.getFullYear()+e))}var R=[[r.Green,r.Yellow],[r.Red,r.Blue]],H=a.en,B={allowUserInput:!1,canStartRound:!0,clearHighScore:h.noop,currentLocale:H,handleUpdateLocale:h.noop,onButtonClick:h.noop,roundData:[],soundEnabled:!0,startGame:h.noop,toggleSound:h.noop,userSelectedValues:[],preventChangeSettings:!1},y=Object(l.createContext)(B),L=function(){return Object(l.useContext)(y)},G=function(e){var t=e.children,n=Object(f.a)(Object.keys(o).map((function(e){return o[e]}))),r=Object(g.a)(n,3),a=r[0],u=r[1],i=r[2],s=Object(l.useState)(B.roundData),v=Object(g.a)(s,2),S=v[0],O=v[1],w=Object(l.useState)(B.currentLitColor),j=Object(g.a)(w,2),R=j[0],H=j[1],L=Object(l.useState)(B.allowUserInput),G=Object(g.a)(L,2),_=G[0],k=G[1],I=Object(l.useState)(B.userSelectedValues),D=Object(g.a)(I,2),$=D[0],T=D[1],U=Object(l.useState)(B.canStartRound),F=Object(g.a)(U,2),A=F[0],Y=F[1],P=Object(l.useState)(a[o.SOUND]?"true"===a[o.SOUND]:B.soundEnabled),M=Object(g.a)(P,2),N=M[0],z=M[1],V=Object(l.useState)(a[o.LOCALE]||B.currentLocale),J=Object(g.a)(V,2),W=J[0],q=J[1],K=Object(h.last)(S),Q=(null===K||void 0===K?void 0:K.roundId)||0,X=!(A||_),Z=a[o.HIGH_SCORE]&&a[o.HIGH_SCORE_DATE]?{score:Number(a[o.HIGH_SCORE]),date:new Date(a[o.HIGH_SCORE_DATE])}:void 0,ee=function(e){return N&&void E("applause"===e?b:m)},te=function(e){return N&&C(e)},ne=function(e,t){u(e,t,{expires:x(10)})},re=function(e){var t=function(e,t){for(var n=[],r=e.length>t.length?e.length:t.length,a=0;a<r;a++)n.push(e[a]),n.push(t[a]);return n}(e,Object(h.fill)(Object(h.range)(e.length),null)),n=function(e){e===t.length-1&&k(!0);var n=t[e];n&&te(n),H(n)};t.forEach((function(e,t){return Object(h.delay)(n,1e3*(t+1),t)}))},ae=function(e){var t=oe(e),n=t&&e.length===(null===K||void 0===K?void 0:K.color.length);t||(O([]),ee("aww")),n&&(!Z||Q>Z.score)&&(ee("applause"),ne(o.HIGH_SCORE,Q),ne(o.HIGH_SCORE_DATE,new Date)),!n&&t||(k(!1),T([]),Y(!0))},oe=function(e){return Object(h.isEqual)(e,null===K||void 0===K?void 0:K.color.slice(0,e.length))},le=Object(d.a)({},B,{allowUserInput:_,canStartRound:A,clearHighScore:function(){return i(o.HIGH_SCORE)},currentLitColor:R,currentLocale:W,currentRound:Q,handleUpdateLocale:function(e){q(e),ne(o.LOCALE,e)},highScoreInfo:Z,onButtonClick:function(e){if(Q&&_&&(te(e),$.length<Q)){var t=$.concat(e);T(t),ae(t),t.length===Q&&(H(e),Object(h.delay)(H,350,null))}},preventChangeSettings:X,roundData:S,soundEnabled:N,startGame:function(){k(!1),Y(!1),function(){var e=Q+1,t=((null===K||void 0===K?void 0:K.color)||[]).concat([p()]);O(S.concat({roundId:e,color:t})),re(t)}()},toggleSound:function(e){z(e),ne(o.SOUND,e)},userSelectedValues:$});return c.a.createElement(y.Provider,{value:le},t)},_=n(53),k={en:{"clearHighScore.button.text":"Clear","clearHighScore.button.title":"Clear high score","clearHighScore.header":"High Score: {score}","clearHighScore.header.empty":"No High Score","default.document.title":"React Simon Says","localeChooser.label":"Locale:","localeChooser.value.en":"English","localeChooser.value.es":"Spanish","localeChooser.value.fr":"French","soundToggle.label":"Sound","soundToggle.title":"Toggle Sound","startButton.text.inProgress":"Round {currentRound} in progress","startButton.text.startGame":"Start Game","startButton.text.startGuess":"Start Guessing","startButton.text.startRound":"Start Round {nextRound}"},es:{"clearHighScore.button.text":"Clara","clearHighScore.button.title":"Puntuaci\xf3n alta clara","clearHighScore.header":"Puntuaci\xf3n Alta: {score}","clearHighScore.header.empty":"No Puntuaci\xf3n Alta","default.document.title":"React Sim\xf3n Dice","localeChooser.label":"Localizaci\xf3n:","localeChooser.value.en":"Ingl\xe9s","localeChooser.value.es":"Espa\xf1ol","localeChooser.value.fr":"Franc\xe9s","soundToggle.label":"Sonido","soundToggle.title":"Cambiar el Sonido","startButton.text.inProgress":"Ronda {currentRound} en progreso","startButton.text.startGame":"Comenzar el juego","startButton.text.startGuess":"Empieza a adivinar","startButton.text.startRound":"Comienza la Ronda {nextRound}"},fr:{"clearHighScore.button.text":"Clair","clearHighScore.button.title":"Score \xe9lev\xe9 clair","clearHighScore.header":"Score \xe9lev\xe9: {score}","clearHighScore.header.empty":"Pas de score \xe9lev\xe9","default.document.title":"React Simon Dit","localeChooser.label":"Locale:","localeChooser.value.en":"Anglais","localeChooser.value.es":"Espagnol","localeChooser.value.fr":"Fran\xe7ais","soundToggle.label":"Bruit","soundToggle.title":"Basculer Bruit","startButton.text.inProgress":"Ronde {currentRound} en cours","startButton.text.startGame":"D\xe9marrer le jeu","startButton.text.startGuess":"Commencez \xe0 deviner","startButton.text.startRound":"D\xe9but de la ronde {nextRound}"}},I=function(e){var t=e.children,n=L().currentLocale;return c.a.createElement(_.a,{locale:n,messages:k[n]},t)},D=n(52),$=n(3);function T(){var e=Object($.a)(["\n    margin-left: 8px;\n"]);return T=function(){return e},e}function U(){var e=Object($.a)(["\n    margin: 0 0 5px 0;\n    white-space: nowrap;\n"]);return U=function(){return e},e}function F(){var e=Object($.a)(["\n    margin: 0 0 5px 0;\n"]);return F=function(){return e},e}function A(){var e=Object($.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n"]);return A=function(){return e},e}function Y(){var e=Object($.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    white-space: nowrap;\n    margin: 0;\n"]);return Y=function(){return e},e}var P=s.b.h2(Y()),M=s.b.h3(A()),N=s.b.h5(F()),z=s.b.h2(U()),V=s.b.button(T()),J=function(){var e=L(),t=e.highScoreInfo,n=e.clearHighScore,r=e.preventChangeSettings,a=Object(D.a)().formatMessage;return t?c.a.createElement(P,null,c.a.createElement(M,null,a({id:"clearHighScore.header"},{score:t.score}),c.a.createElement(V,{disabled:r,onClick:n,title:a({id:"clearHighScore.button.title"})},a({id:"clearHighScore.button.text"}))),c.a.createElement(N,null,t.date.toLocaleString())):c.a.createElement(z,null,a({id:"clearHighScore.header.empty"}))};function W(){var e=Object($.a)(["\n    margin-left: 8px;\n"]);return W=function(){return e},e}function q(){var e=Object($.a)(["\n    width: 100%;\n    padding-top: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return q=function(){return e},e}var K=s.b.div(q()),Q=s.b.select(W()),X=function(){var e=L(),t=e.currentLocale,n=e.handleUpdateLocale,r=e.preventChangeSettings,o=Object(D.a)().formatMessage,l=Object.keys(a).map((function(e){return a[e]})).map((function(e){return c.a.createElement("option",{key:e,value:e},o({id:"localeChooser.value.".concat(e)}))}));return c.a.createElement(K,null,o({id:"localeChooser.label"}),c.a.createElement(Q,{disabled:r,value:t,onChange:function(e){return n(a[e.target.value])}},l))},Z=function(){var e=L(),t=e.soundEnabled,n=e.toggleSound,r=e.preventChangeSettings,a=Object(D.a)().formatMessage;return c.a.createElement("div",{style:{paddingTop:"4px"}},c.a.createElement("input",{name:"soundToggle",type:"checkbox",checked:t,disabled:r,onChange:function(e){return n(e.target.checked)},title:a({id:"soundToggle.title"})}),a({id:"soundToggle.label"}))};function ee(){var e=Object($.a)(["\n    height: 25vh;\n    width: 25vh;\n    border-radius: 25px;\n    max-width: 49vw;\n    transition-duration: 0.4s;\n    -webkit-tap-highlight-color: transparent;\n    margin: 2px;\n    background-color: ",";\n\n    :hover {\n        ","\n    }\n\n    ","\n    ","\n"]);return ee=function(){return e},e}var te=s.b.div(ee(),(function(e){return e.unlit}),(function(e){var t=e.allowUserInput,n=e.lit;return t&&"background-color: ".concat(n,";")}),(function(e){return e.allowUserInput&&"cursor: pointer;"}),(function(e){var t=e.isLit,n=e.lit;return t&&"background-color: ".concat(n,";")})),ne=function(e){var t=e.buttonColor,n=L(),a=n.currentLitColor,o=n.allowUserInput,l=n.onButtonClick;return c.a.createElement(te,Object.assign({allowUserInput:o,isLit:a===t,onClick:function(){return l(t)}},function(e){switch(e){case r.Red:return{unlit:j.$Red,lit:j.$Red_Lit};case r.Blue:return{unlit:j.$Blue,lit:j.$Blue_Lit};case r.Yellow:return{unlit:j.$Yellow,lit:j.$Yellow_Lit};default:return{unlit:j.$Green,lit:j.$Green_Lit}}}(t)))};function re(){var e=Object($.a)(["\n    display: flex;\n"]);return re=function(){return e},e}var ae=s.b.div(re()),oe=function(){var e=function(e){return c.a.createElement(ne,{key:e,buttonColor:e})};return c.a.createElement("div",null,R.map((function(t,n){return c.a.createElement(ae,{key:n},t.map(e))})))},le=n(26),ce=function(){var e=(0,Object(D.a)().formatMessage)({id:"default.document.title"});return c.a.createElement(le.Helmet,{title:e})};function ue(){var e=Object($.a)(["\n    height: 35px;\n    min-width: 150px;\n    width: 250px;\n    margin-top: 10px;\n"]);return ue=function(){return e},e}var ie=s.b.button(ue()),se=function(){var e=L(),t=e.startGame,n=e.currentRound,r=e.canStartRound,a=e.allowUserInput,o=Object(D.a)().formatMessage;return c.a.createElement(ie,{disabled:!r,onClick:t},function(){var e="inProgress",t=(n||0)+1;a?e="startGuess":r&&(e=n?"startRound":"startGame");var l="startButton.text.".concat(e);return o({id:l},{nextRound:t,currentRound:n})}())};function de(){var e=Object($.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n"]);return de=function(){return e},e}var ge=s.b.div(de()),he=function(){return c.a.createElement(ge,null,c.a.createElement(ce,null),c.a.createElement(J,null),c.a.createElement(oe,null),c.a.createElement(se,null),c.a.createElement(X,null),c.a.createElement(Z,null))},fe=n(27),pe=n.n(fe);function be(){var e=Object($.a)(["\n    margin-left: auto;\n    margin-right: auto;\n    width: 25vw;\n    max-width: 675px;\n"]);return be=function(){return e},e}function me(){var e=Object($.a)(["\n    display: table-cell;\n    vertical-align: middle;\n"]);return me=function(){return e},e}function ve(){var e=Object($.a)(["\n    display: table;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-image: url(",");\n    background-size: cover;\n"]);return ve=function(){return e},e}var Se=s.b.div(ve(),pe.a),Oe=s.b.div(me()),we=s.b.div(be()),Ee=function(){return l.createElement(s.a,{theme:{color:j}},l.createElement(G,null,l.createElement(I,null,l.createElement(Se,null,l.createElement(Oe,null,l.createElement(we,null,l.createElement(he,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.d03a644c.chunk.js.map