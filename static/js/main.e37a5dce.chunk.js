(window.webpackJsonpminesweeper=window.webpackJsonpminesweeper||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),s=n.n(r),c=(n(14),n(1)),o=n(2),l=n(4),u=n(3),h=n(5),d=(n(15),n(8)),f=(n(16),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).createClassNames=function(){var e=n.props,t=e.hasMine,a=e.nearbyMines,i=e.isRevealed,r=e.isEmpty;if(e.isFlagged)return"cell_flagged";if(i){if(r)return"cell_empty";if(t)return"cell_mine";switch(a){case 1:return"cell_1-nearby";case 2:return"cell_2-nearby";case 3:return"cell_3-nearby";default:return"cell_many-nearby"}}return"cell"},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.x,a=t.y,r=t.nearbyMines,s=t.isRevealed,c=this.createClassNames();return i.a.createElement("div",{className:c,onClick:function(){return e.props.onClick(n,a)}},s&&r?r:null)}}]),t}(a.PureComponent)),m=(n(17),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isGameFinished,n=e.didUserWin,a={face:"sapper-face",eyes:"sapper-eyes",mouth:"sapper-mouth"};if(t){var r=n?"_win":"_loose";for(var s in a)a[s]+=r}var c=a.face,o=a.eyes,l=a.mouth;return i.a.createElement("div",{className:c},i.a.createElement("div",{className:o}),i.a.createElement("div",{className:l}))}}]),t}(a.Component)),p=(n(18),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"flag-toggle-container",onClick:this.props.onClick},i.a.createElement("div",{className:"flag-toggle ".concat(this.props.isOn?"isOn":"")}))}}]),t}(a.Component)),v=(n(19),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.flagsLeft;return i.a.createElement("div",{className:"flag-counter"},i.a.createElement("span",null,e))}}]),t}(a.Component)),g=(n(20),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.didUserWin;return i.a.createElement("div",{className:"reset ".concat(e?"reset_win":"reset_loose"),onClick:this.props.onClick},"Play again")}}]),t}(a.Component)),b=(n(21),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).createEmptyBoard=function(){for(var e=n.props,t=e.height,a=e.width,i=[],r=0;r<a;r++){i.push([]);for(var s=0;s<t;s++)i[r][s]={x:r,y:s,hasMine:!1,nearbyMines:0,isRevealed:!1,isEmpty:!1,isFlagged:!1}}return i},n.getRandomNumber=function(e){return Math.floor(Math.random()*e)},n.plantMines=function(e){for(var t=n.props,a=t.width,i=t.height,r=t.mines,s=0;s<r;){var c=n.getRandomNumber(i),o=n.getRandomNumber(a);e[c][o].hasMine||(e[c][o].hasMine=!0,s++)}},n.findNeighbouringCells=function(e,t,a){var i=[];return e>0&&i.push(a[e-1][t]),e<n.props.height-1&&i.push(a[e+1][t]),t>0&&i.push(a[e][t-1]),t<n.props.width-1&&i.push(a[e][t+1]),e>0&&t>0&&i.push(a[e-1][t-1]),e>0&&t<n.props.width-1&&i.push(a[e-1][t+1]),e<n.props.height-1&&t<n.props.width-1&&i.push(a[e+1][t+1]),e<n.props.height-1&&t>0&&i.push(a[e+1][t-1]),i},n.countNearbyMines=function(e){for(var t=n.props,a=t.width,i=t.height,r=0;r<i;r++)for(var s=0;s<a;s++){var c=e[r][s];c.hasMine||function(){var t=0;n.findNeighbouringCells(c.x,c.y,e).forEach((function(e){e.hasMine&&t++})),0===t&&(c.isEmpty=!0),c.nearbyMines=t}()}},n.revealBoard=function(){var e=Object(d.a)(n.state.board).map((function(e){return e.map((function(e){return e.isRevealed=!0}))}));n.setState({board:e})},n.getHidden=function(e){var t=0;return e.forEach((function(e){t+=e.filter((function(e){return!1===e.isRevealed})).length})),t},n.revealEmpty=function(e,t,a){n.findNeighbouringCells(e,t,a).forEach((function(e){e.isFlagged||e.isRevealed||!e.isEmpty&&e.hasMine||(a[e.x][e.y].isRevealed=!0,e.isEmpty&&n.revealEmpty(e.x,e.y,a))}))},n.toggleClickAction=function(e){var t="reveal"===n.state.clickAction?"flag":"reveal";n.setState({clickAction:t})},n.revealCell=function(e,t){var a=n.state.board,i=a[e][t];i.isFlagged||(i.hasMine&&n.finishGame(),i.isRevealed=!0,i.isEmpty&&n.revealEmpty(e,t,a),n.getHidden(a)===n.props.mines&&n.finishGame(!0))},n.flagCell=function(e,t){var a=n.state.board,i=n.state.flagsLeft;i||a[e][t].isFlagged?(a[e][t].isFlagged=!a[e][t].isFlagged,n.setState({flagsLeft:a[e][t].isFlagged?i-1:i+1})):alert("no more flags left...")},n.handleClick=function(e,t){var a=n.state.board;a[e][t].isRevealed||({reveal:n.revealCell,flag:n.flagCell}[n.state.clickAction](e,t),n.setState({board:a}))},n.createNewGame=function(){var e=n.createEmptyBoard();n.plantMines(e),n.countNearbyMines(e),n.setState({board:e,isGameFinished:!1,didUserWin:!1,clickAction:"reveal",flagsLeft:n.props.mines})},n.componentDidMount=function(){n.createNewGame()},n.state={board:[],isGameFinished:!1,didUserWin:!1,clickAction:"reveal",flagsLeft:e.mines},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"finishGame",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=e?"You won! :)":"You looooose :(";console.log(t),this.revealBoard(),this.setState({didUserWin:e,isGameFinished:!0})}},{key:"render",value:function(){var e=this,t=this.state,n=t.board,a=t.isGameFinished,r=t.didUserWin,s=t.clickAction;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"header"},this.state.isGameFinished?i.a.createElement(g,{onClick:this.createNewGame,didUserWin:this.state.didUserWin}):i.a.createElement(p,{onClick:this.toggleClickAction,isOn:"flag"===s}),i.a.createElement(m,{isGameFinished:a,didUserWin:r}),i.a.createElement(v,{flagsLeft:this.state.flagsLeft})),i.a.createElement("div",{className:"board"},n.map((function(t,n){return i.a.createElement("div",{className:"board-row",key:n},t.map((function(n){return i.a.createElement(f,{onClick:e.handleClick,x:n.x,y:n.y,hasMine:n.hasMine,nearbyMines:n.nearbyMines,isRevealed:n.isRevealed,isEmpty:n.isEmpty,isFlagged:n.isFlagged,key:n.x*t.length+n.y,isGameFinished:e.state.isGameFinished})})))}))))}}]),t}(a.Component)),y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={height:10,width:10,mines:10},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.height,n=e.width,a=e.mines;return i.a.createElement("div",{className:"game"},i.a.createElement(b,{height:t,width:n,mines:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e37a5dce.chunk.js.map