"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var timeTemplate=function(a,_ref){var b=_ref.format,c=_ref.template,d=a;"number"!=typeof second&&(d=parseInt(d,0)),Number.isNaN(d)&&(d=0);var f,e={Y:31556926,M:2629743.83,W:604800,D:86400,h:3600,m:60,s:1};f=b?b.split(":"):["Y","M","W","D","h","m","s"];var g={},h=c;return Object.keys(e).forEach(function(i){-1<f.indexOf(i)&&(g[i]=Math.floor(d/e[i]),c&&"string"==typeof c&&(h=h.replace("{"+i+"}",g[i])),d%=e[i])}),h?h:g};exports.default=timeTemplate;
