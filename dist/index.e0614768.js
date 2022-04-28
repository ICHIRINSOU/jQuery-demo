window.jQuery=function(e){let r;return"string"==typeof e?r=document.querySelectorAll(e):e instanceof Array&&(r=e),{addClass(e){for(let t=0;t<r.length;t++){r[t].classList.add(e)}return this},find(e){let t=[];for(let n=0;n<r.length;n++){const l=Array.from(r[n].querySelectorAll(e));t=t.concat(l)}return jQuery(t)}}};
//# sourceMappingURL=index.e0614768.js.map
