"use strict";function appearanceDigitBlock(){var e=document.createElement("div");e.setAttribute("class","digit"),places[function t(){var c=getRandomPlace(places.length);e.id=c;var a=c;return places[a].lastChild?t():a}()].appendChild(e)}function getRandomPlace(e){return Math.floor(Math.random()*e)}function IsPlaced(e){if(!place.hasChildNodes())return!0}function Movement(e){function t(e,t,c,a,o){switch(e){case"ArrowDown":r[t].classList.remove("mov-top-".concat(a,"00")),r[t].classList.add("mov-bottom-".concat(c,"00"));break;case"ArrowUp":r[t].classList.remove("mov-bottom-".concat(c,"00")),r[t].classList.add("mov-top-".concat(a,"00"));break;case"ArrowLeft":r[t].classList.remove("mov-right-".concat(c,"00")),r[t].classList.add("mov-left-".concat(a,"00"));break;case"ArrowRight":r[t].classList.remove("mov-left-".concat(a,"00")),r[t].classList.add("mov-right-".concat(c,"00"))}}function a(e,t){for(var a=(Number(r[e].parentNode.classList[1][4]),Number(r[e].parentNode.classList[2][4])),o=(Number(places[e].classList[2][4]),places.length);o>0;o--)if(places[o-1].classList[2][4]==a&&(c(o),c(places[o-1]),!places[o-1].lastChild)){r[e].classList.remove("mov-bottom-".concat(t,"00")),places[o-1].appendChild(r[e]),c(places[o-1].lastChild.id+"       HERE        ");break}}var r=Array.from(document.querySelectorAll(".digit")),o=Array.from(document.querySelectorAll(".place")),s=o[o.length-1].classList[1][4],i=(o[0].classList[1],function(c){if("ArrowDown"===e||"ArrowUp"===e){var o=r[c].parentNode.classList[1][4],i=s-o,n=o-1;setTimeout(function(){a(c,i)},200),t(e,c,i,n)}else if("ArrowLeft"===e||"ArrowRight"===e){var l=r[c].parentNode.classList[2][4],d=s-l,m=l-1;t(e,c,d,m)}});for(var n in r)i(n)}function c(e){console.log(e)}var places=document.querySelectorAll(".place");appearanceDigitBlock();var keytrigger=[];window.addEventListener("keyup",function(e){keytrigger.push(e.code),Movement(keytrigger[0]),keytrigger.length>=2&&(keytrigger=[]),setTimeout(function(){keytrigger=[]},200)});