(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://i1.wp.com/fortniteskins.net/wp-content/uploads/2018/05/abstrakt-image-1.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1},{id:2,image:"https://i1.wp.com/fortniteskins.net/wp-content/uploads/2018/03/crackshot-icon.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1},{id:3,image:"https://i2.wp.com/fortniteskins.net/wp-content/uploads/2019/04/cloaked-shadow-icon.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1},{id:4,image:"https://i0.wp.com/fortniteskins.net/wp-content/uploads/2019/04/slushy-soldier-icon.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1},{id:5,image:"https://i1.wp.com/fortniteskins.net/wp-content/uploads/2019/04/T-Soldier-HID-370-Athena-Commando-M-EvilSuit-L.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1},{id:6,image:"https://i2.wp.com/fortniteskins.net/wp-content/uploads/2019/04/spike-icon.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1},{id:7,image:"https://i0.wp.com/fortniteskins.net/wp-content/uploads/2019/04/mezmer-icon.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1},{id:8,image:"https://i1.wp.com/fortniteskins.net/wp-content/uploads/2019/04/malcore-icon.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1},{id:9,image:"https://i2.wp.com/fortniteskins.net/wp-content/uploads/2018/04/Black-Knight-icon.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1},{id:10,image:"https://i2.wp.com/fortniteskins.net/wp-content/uploads/2018/04/Renegade-Raider-icon.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1},{id:11,image:"https://i1.wp.com/fortniteskins.net/wp-content/uploads/2018/03/Recon-Expert-icon.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1},{id:12,image:"https://i0.wp.com/fortniteskins.net/wp-content/uploads/2018/08/panda-team-leader-icon-1.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1},{id:13,image:"https://i0.wp.com/fortniteskins.net/wp-content/uploads/2018/08/beef-boss-icon.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1},{id:14,image:"https://i1.wp.com/fortniteskins.net/wp-content/uploads/2018/04/tomatohead-skin-1.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1},{id:15,image:"https://i2.wp.com/fortniteskins.net/wp-content/uploads/2019/04/lil-whip-icon.png?resize=150%2C150&quality=90&strip=all&ssl=1",clicked:!1},{id:16,image:"https://i0.wp.com/fortniteskins.net/wp-content/uploads/2018/05/moisty-merman-image-1.png?resize=200%2C200&quality=90&strip=all&ssl=1",clicked:!1}]},,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(3),r=n.n(a),l=n(4),s=n(5),o=n(7),p=n(6),d=n(8),u=(n(15),function(e){return c.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),m=(n(16),function(e){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",{className:"brand animated lightSpeedIn"},c.a.createElement("a",{href:"/Fortnite-clicky-game/"},e.title)),c.a.createElement("li",{id:"rw"},e.correctIncorrect),c.a.createElement("li",null,"Current Score: ",e.score),c.a.createElement("li",null,"Top Score: ",e.topScore)))}),f=(n(17),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),h=(n(18),function(e){return c.a.createElement("h1",{className:"title"},e.children)});n(19);var k=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("span",null,"Fortnite Clicky Game"),c.a.createElement("img",{class:"React",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"}))},g=function(e){return c.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},w=function(e){return c.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},E=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return c.a.createElement("div",{className:t},e.children)},y=n(1);n(20);var S=function(e){function t(){var e,n;Object(l.a)(this,t);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(n=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={fortnitefriends:y,currentScore:0,topScore:0,correctIncorrect:"",clicked:[]},n.handleClick=function(e){-1===n.state.clicked.indexOf(e)?(n.handleIncrement(),n.setState({clicked:n.state.clicked.concat(e)})):n.handleReset()},n.handleIncrement=function(){var e=n.state.currentScore+1;n.setState({currentScore:e,correctIncorrect:"You guessed correctly!"}),e>=n.state.topScore?n.setState({topScore:e}):3===e&&n.setState({correctIncorrect:"You win the game!"}),n.handleShuffle()},n.handleReset=function(){n.setState({currentScore:0,topScore:n.state.topScore,correctIncorrect:"You guessed incorrectly!",clicked:[]}),n.handleShuffle()},n.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=[e[n],e[t]];e[t]=i[0],e[n]=i[1]}return e}(y);n.setState({fortnitefriends:e})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(f,null,c.a.createElement(m,{title:"Fortnite Clicky Game",score:this.state.currentScore,topScore:this.state.topScore,correctIncorrect:this.state.correctIncorrect}),c.a.createElement(h,null,"Click on an image to earn points, but don't click on any more than once!"),c.a.createElement(g,null,c.a.createElement(w,null,this.state.fortnitefriends.map(function(t){return c.a.createElement(E,{size:"md-3 sm-6"},c.a.createElement(u,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))),c.a.createElement(k,null))}}]),t}(i.Component);n(21);r.a.render(c.a.createElement(S,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.3bc6a3c2.chunk.js.map