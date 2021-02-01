"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var datatable=function(){function t(e){_classCallCheck(this,t),this.tableselected=document.querySelector(e),this.tableslector=e,this.defaultNoSelectResult=10,this.keys=null,this.setNoSelectResult=null,this.currentPage=null,this.currentSearch=null,this.active_page=1,this.total_pages=null,this.sourceData=this.tableToJson(this.tableselected),this.sourceDataLength=this.sourceData[parseInt(this.sourceData.length-1)],this.currentData=this.sourceData,this.sourceData.pop(),this.register(this.tableselected),this.DOMForEntriesBelow=document.querySelector("div.wrapperdatatable > div.tabledesignpaginate > div.entries > p"),this.oldtbody=document.querySelector("div.wrapperdatatable > ".concat(this.tableslector," > tbody")),this.new_tbody=document.createElement("tbody"),this.oldpages=document.querySelector("div.wrapperdatatable > div.tabledesignpaginate div.pages > ul"),this.new_pages=document.createElement("ul"),this.populate_with_new_rows(this.new_tbody,this.sourceData,this.defaultNoSelectResult)}return _createClass(t,[{key:"widthGet",value:function(){var e=document.querySelector("".concat(this.tableslector)).clientWidth,t=document.querySelector("".concat(this.tableslector)).offsetParent.clientWidth,i=Math.round(100*parseInt(e)/parseInt(t));this.defwidth=i}},{key:"register",value:function(e){var t=e,i=document.createElement("div");i.classList.add("wrapperdatatable"),(null!=this.tableselected.getAttribute("width")||null!=this.tableselected.getAttribute("style")&&0==this.tableselected.getAttribute("style").search(new RegExp("width","i")))&&this.widthGet();var n=this.selectNSearchOption(),l=this.entriesNPagesOption(this.sourceDataLength,this.defaultNoSelectResult);t.parentNode.insertBefore(i,t),i.appendChild(t),t.parentNode.insertBefore(n,t),t.parentNode.insertBefore(l,t.nextSibling);var s=document.querySelector("div.wrapperdatatable div.tabledesignoption .tabledesignselectresult > select#select"),r=document.querySelector("div.wrapperdatatable div.tabledesignoption div.tabledesignsearch > input#search"),a=document.querySelectorAll("div.wrapperdatatable div.tabledesignpaginate div.pages > ul > li > button ");this.registerEventListener(a,s,r)}},{key:"registerEventListener",value:function(e,t,i){var n=this,l=0<arguments.length&&void 0!==e?e:null,s=1<arguments.length&&void 0!==t?t:null,r=2<arguments.length&&void 0!==i?i:null;null!=s&&s.addEventListener("change",function(){n.selectResultChanges(event)}),null!=r&&r.addEventListener("input",function(){n.searchesData(event)}),null!=l&&l.forEach(function(e){e.addEventListener("click",function(){n.pageClicked(event)})})}},{key:"selectResultChanges",value:function(e){this.setNoSelectResult=e.target.selectedOptions[0].value;var t=this.setNoSelectResult?this.setNoSelectResult:this.defaultNoSelectResult,i=this.currentData.length<t?this.currentData.length:t;this.updatedEntries(0==this.currentData.length?0:1,null!=this.currentSearch?i:t,(this.currentSearch,this.sourceDataLength),this.currentSearch?this.currentData.length:null),this.populate_with_new_rows(this.new_tbody,this.currentData,this.setNoSelectResult),this.populate_with_new_pages(this.new_pages,this.currentData.length,this.setNoSelectResult)}},{key:"searchesData",value:function(e){var i=this;try{var t=e.target.value,n=new RegExp(t,"i"),l=[];this.sourceData.forEach(function(e){for(var t=0;t<i.keys.length;t++)if(-1!=e[i.keys[t]].search(n)){l.push(e);break}});var s=this.setNoSelectResult?this.setNoSelectResult:this.defaultNoSelectResult;this.currentSearch=""==t?null:t,this.populate_with_new_rows(this.new_tbody,l,s);var r=(this.currentData=l).length<s?l.length:s;this.updatedEntries(0==l.length?0:1,r,this.sourceDataLength,""!=t?l.length:null),this.populate_with_new_pages(this.new_pages,l.length,s)}catch(e){}}},{key:"pageClicked",value:function(e){if(this.currentPage!=e.target.id||null==this.currentPage||"next"==this.currentPage||"prev"==this.currentPage){this.currentPage=e.target.id;var t,i,n,l,s=e.target.id,r=document.querySelector("div.wrapperdatatable div.tabledesignpaginate div.pages > ul > li > button.active");switch(e.target.innerText){case"prev":if(i=r.parentNode.previousElementSibling.childNodes[0],l=r.parentNode.previousElementSibling.previousElementSibling.childNodes[0],t=r.parentNode.nextElementSibling.childNodes[0],"prev"==i)return;if(s=i.id,"..."==l.innerText){var a=r.id,d=i.id,o=l.id=--i.id;if(parseInt(o)-4<0){var c=o;r.parentNode.nextElementSibling.nextElementSibling.childNodes[0].innerText="...",r.parentNode.nextElementSibling.nextElementSibling.childNodes[0].disabled=!0,r.parentNode.previousElementSibling.childNodes[0].innerText=o,r.parentNode.previousElementSibling.childNodes[0].id=o,r.innerText=d,r.id=d,t.innerText=a,t.id=a,l.innerText=--c,l.id=c,l.disabled=!1}else r.parentNode.previousElementSibling.previousElementSibling.childNodes[0].innerText="...",r.parentNode.previousElementSibling.previousElementSibling.childNodes[0].disabled=!0,r.parentNode.previousElementSibling.childNodes[0].innerText=o,r.parentNode.previousElementSibling.childNodes[0].id=o,r.innerText=d,r.id=d,t.innerText=a,t.id=a,t.parentNode.nextElementSibling.childNodes[0].innerText="...",t.parentNode.nextElementSibling.childNodes[0].disabled=!0}else e.target.disabled=1==s,r.parentNode.previousElementSibling.childNodes[0].classList.add("active"),r.classList.remove("active");document.querySelectorAll("ul > li:last-child")[0].childNodes[0].disabled=!1;break;case"next":if(t=r.parentNode.nextElementSibling.childNodes[0],n=r.parentNode.nextElementSibling.nextElementSibling.childNodes[0],"next"==t.id)return;if(s=t.id,"..."==n.innerText){var u=r.id,h=t.id,p=n.id=++t.id;if(parseInt(u)+4>=this.total_pages){var g=p;r.parentNode.previousElementSibling.previousElementSibling.childNodes[0].innerText="...",r.parentNode.previousElementSibling.previousElementSibling.childNodes[0].disabled=!0,r.parentNode.previousElementSibling.childNodes[0].innerText=u,r.parentNode.previousElementSibling.childNodes[0].id=u,r.innerText=h,r.id=h,t.innerText=p,t.id=p,t.parentNode.nextElementSibling.childNodes[0].innerText=++g,t.parentNode.nextElementSibling.childNodes[0].id=g,t.parentNode.nextElementSibling.childNodes[0].disabled=!1}else r.parentNode.previousElementSibling.previousElementSibling.childNodes[0].innerText="...",r.parentNode.previousElementSibling.previousElementSibling.childNodes[0].disabled=!0,r.parentNode.previousElementSibling.childNodes[0].innerText=u,r.parentNode.previousElementSibling.childNodes[0].id=u,r.innerText=h,r.id=h,t.innerText=p,t.id=p,t.parentNode.nextElementSibling.childNodes[0].innerText="...",t.parentNode.nextElementSibling.childNodes[0].disabled=!0}else s==this.total_pages?e.target.disabled=!0:e.target.disabled=!1,r.parentNode.nextElementSibling.childNodes[0].classList.add("active"),r.classList.remove("active");document.querySelectorAll("ul > li:first-child")[0].childNodes[0].disabled=!1;break;default:if("next"==e.target.parentNode.nextElementSibling.childNodes[0].innerText)"..."==e.target.parentNode.previousElementSibling.childNodes[0].innerText?this.page_clicked_regenerated("last",e.target):(document.querySelectorAll("ul > li:last-child")[0].childNodes[0].disabled=!0,document.querySelectorAll("ul > li:first-child")[0].childNodes[0].disabled=!1),e.target.classList.add("active"),r.classList.remove("active");else if("prev"==e.target.parentNode.previousElementSibling.childNodes[0].innerText)"..."==e.target.parentNode.nextElementSibling.childNodes[0].innerText?this.page_clicked_regenerated("first",e.target):(document.querySelectorAll("ul > li:first-child")[0].childNodes[0].disabled=!0,document.querySelectorAll("ul > li:last-child")[0].childNodes[0].disabled=!1),e.target.classList.add("active"),r.classList.remove("active");else if("..."==e.target.parentNode.nextElementSibling.childNodes[0].innerText){var b=e.target,v=e.target.parentNode.previousElementSibling.childNodes[0].id,S=b.id,N=e.target.parentNode.nextElementSibling.childNodes[0].id=parseInt(S)+1;parseInt(v)+4>=this.total_pages&&(b.parentNode.nextElementSibling.childNodes[0].innerText=N+1,b.parentNode.nextElementSibling.childNodes[0].id=N+1,b.parentNode.nextElementSibling.childNodes[0].disabled=!1),b.innerText=N,b.id=N,b.parentNode.previousElementSibling.childNodes[0].innerText=S,b.parentNode.previousElementSibling.childNodes[0].id=S,b.parentNode.previousElementSibling.previousElementSibling.childNodes[0].innerText=v,b.parentNode.previousElementSibling.previousElementSibling.childNodes[0].id=v,b.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[0].innerText="...",b.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[0].disabled=!0,b.parentNode.previousElementSibling.childNodes[0].classList.contains("active")||(b.parentNode.previousElementSibling.childNodes[0].classList.add("active"),r.classList.remove("active"))}else if("..."==e.target.parentNode.previousElementSibling.childNodes[0].innerText){var m=e.target,E=parseInt(m.id)-1,x=m.id,f=parseInt(m.id)+1;parseInt(E)-4<0&&(m.parentNode.previousElementSibling.childNodes[0].innerText=E-1,m.parentNode.previousElementSibling.childNodes[0].id=E-1,m.parentNode.previousElementSibling.childNodes[0].disabled=!1),m.innerText=E,m.id=E,m.parentNode.nextElementSibling.childNodes[0].innerText=x,m.parentNode.nextElementSibling.childNodes[0].id=x,m.parentNode.nextElementSibling.nextElementSibling.childNodes[0].innerText=f,m.parentNode.nextElementSibling.nextElementSibling.childNodes[0].id=f,m.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[0].innerText="...",m.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[0].disabled=!0,m.parentNode.nextElementSibling.childNodes[0].classList.contains("active")||(m.parentNode.nextElementSibling.childNodes[0].classList.add("active"),r.classList.remove("active"))}else document.querySelectorAll("ul > li:last-child")[0].childNodes[0].disabled=!1,document.querySelectorAll("ul > li:first-child")[0].childNodes[0].disabled=!1,e.target.classList.add("active"),r.classList.remove("active")}var y=this.setNoSelectResult?this.setNoSelectResult:this.defaultNoSelectResult,w=y*(s-1),T=y<this.currentData.length&&this.sourceDataLength>=this.currentData.length?y*s:this.currentData.length;T>this.currentData.length&&(T=this.currentData.length),this.updatedEntries(0==w?1:w,T,this.sourceDataLength,null!=this.currentSearch?this.currentData.length:null),this.populate_with_new_rows(this.new_tbody,this.currentData,T,w)}}},{key:"page_clicked_regenerated",value:function(e,t){var i=1<arguments.length&&void 0!==t?t:null,n=i.id;"last"==e?(i.parentNode.nextElementSibling.childNodes[0].disabled=!0,i.parentNode.previousElementSibling.childNodes[0].innerText=parseInt(n)-1,i.parentNode.previousElementSibling.childNodes[0].id=parseInt(n)-1,i.parentNode.previousElementSibling.childNodes[0].disabled=!1,i.parentNode.previousElementSibling.previousElementSibling.childNodes[0].innerText=parseInt(n)-2,i.parentNode.previousElementSibling.previousElementSibling.childNodes[0].id=parseInt(n)-2,i.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[0].innerText=parseInt(n)-3,i.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[0].id=parseInt(n)-3,i.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[0].innerText=parseInt(n)-4,i.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[0].id=parseInt(n)-4,i.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[0].innerText="...",i.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[0].disabled=!0,i.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[0].disabled=!1):(i.parentNode.previousElementSibling.childNodes[0].disabled=!0,i.parentNode.nextElementSibling.childNodes[0].innerText=parseInt(n)+1,i.parentNode.nextElementSibling.childNodes[0].id=parseInt(n)+1,i.parentNode.nextElementSibling.childNodes[0].disabled=!1,i.parentNode.nextElementSibling.nextElementSibling.childNodes[0].innerText=parseInt(n)+2,i.parentNode.nextElementSibling.nextElementSibling.childNodes[0].id=parseInt(n)+2,i.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[0].innerText=parseInt(n)+3,i.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[0].id=parseInt(n)+3,i.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[0].innerText=parseInt(n)+4,i.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[0].id=parseInt(n)+4,i.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[0].innerText="...",i.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[0].disabled=!0,i.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[0].disabled=!1)}},{key:"updatedEntries",value:function(e,t,i,n){var l=2<arguments.length&&void 0!==i?i:null,s=3<arguments.length&&void 0!==n?n:null,r=l<t?l:t,a=this.setNoSelectResult?this.setNoSelectResult:this.defaultNoSelectResult;0==e&&1==e||(a=t),console.log(r),this.DOMForEntriesBelow.innerText="Showing ".concat(0==e?0:e," to ").concat(null!=s&&a<t&&null!=l?a:r," entries total of ").concat(null!=s?s:l,". ").concat(s?"(filtered from ".concat(l," total entries)"):"")}},{key:"selectNSearchOption",value:function(){var e=document.createElement("div");return e.classList.add("tabledesignoption"),null!=this.defwidth&&(e.style.width=this.defwidth+"%"),e.innerHTML='\n\t\t\t\t\t<div class="tabledesignselectresult">\n\t\t\t\t\t\t<label for="select">Select entries: </label>\n\t\t\t\t\t\t<select id="select">\n\t\t\t\t\t\t\t<option value="10" selected>10</option>\n\t\t\t\t\t\t\t<option value="25">25</option>\n\t\t\t\t\t\t\t<option value="50">50</option>\n\t\t\t\t\t\t\t<option value="100">100</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tabledesignsearch">\n\t\t\t\t\t\t<label for="search">Search: </label>\n\t\t\t\t\t\t<input type="text" id="search" name="">\n\t\t\t\t\t</div>\n\t\t\t',e}},{key:"entriesNPagesOption",value:function(e,t){var i=document.createElement("div");i.classList.add("tabledesignpaginate"),null!=this.defwidth&&(i.style.width=this.defwidth+"%");var n=Math.ceil(e/t),l="";l='\n\t\t\t<div class="entries">\n\t\t\t\t<p>Showing 1 to '.concat(t," entries total of ").concat(e,'</p>\n\t\t\t</div>\n\t\t\t<div class="pages" style="position: relative;">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><button type="button" id="prev" disabled>prev</button></li>\n\t\t\t\t\t<li><button type="button" class="active" id="1">1</button></li>'),console.log(n);for(var s=1;s<(6<n?6:n);s++){if(6<n&&5==s){l+='<li><button type="button" disabled>...</button></li>',l+='<li><button type="button" id="'.concat(n,'" >').concat(n,"</button></li>");break}l+='<li><button type="button" id="'.concat(s+1,'">').concat(s+1,"</button></li>")}return this.total_pages=n,l+='\n\t\t\t\t\t<li><button type="button" id="next">next</button></li>\n\t\t\t\t</ul>\n\t\t\t </div>',i.innerHTML=l,i}},{key:"sortableColumn",value:function(e){var t=this,i=0<arguments.length&&void 0!==e?e:null,n=document.querySelectorAll(" ".concat(this.tableslector," > thead > tr > th"));if(null!=i){document.querySelectorAll("".concat(this.tableslector," > thead"));n.removeEventListener&&n.removeEventListener("click",function(){console.log("remove")})}for(var l=0;l<n.length;l++)null!=i&&0==i[l]||(n[l].innerText+=" ↓↑",n[l].classList.add("clickable"),n[l].addEventListener("click",function(){t.sortbycolumn(t.currentData,event)}))}},{key:"tableToJson",value:function(e,t){for(var i=1<arguments.length&&void 0!==t?t:null,n=[],l=[],s=0;s<e.rows[0].cells.length;s++)l[s]=e.rows[0].cells[s].innerHTML.replace(/\s+/g,"");var r=!i||i>e.rows.length-1?e.rows.length-1:i;for(s=1;s<r;s++){for(var a=e.rows[s],d={},o=0;o<a.cells.length;o++)d[l[o]]=a.cells[o].innerHTML;n.push(d)}return n.push(e.rows.length-2),n}},{key:"sortbycolumn",value:function(e,t){var i=t.currentTarget.textContent.split("↑↓");document.querySelector(" div.wrapperdatatable > div.tabledesignpaginate > div.pages > ul > li > button.active").classList.remove("active");var n=document.querySelector(" div.wrapperdatatable > div.tabledesignpaginate > div.pages > ul > li:first-child");n.nextElementSibling.childNodes[0].classList.add("active"),document.querySelector(" div.wrapperdatatable > div.tabledesignpaginate > div.pages > ul > li:last-child").childNodes[0].disabled=!1,7<this.total_pages&&this.page_clicked_regenerated("first",n.nextElementSibling.childNodes[0]);var l=this.setNoSelectResult?this.setNoSelectResult:this.defaultNoSelectResult,s=this.currentData.length<l?this.currentData.length:l;if(this.updatedEntries(0==this.currentData.length?0:1,null!=this.currentSearch?s:l,(this.currentSearch,this.sourceDataLength),this.currentSearch?this.currentData.length:null),1==i.length){var r=t.currentTarget.textContent;t.currentTarget.textContent=r.slice(0,r.length-2)+" ↑↓"}else{r=t.currentTarget.textContent;t.currentTarget.textContent=r.slice(0,r.length-2)+" ↓↑"}var a=t.currentTarget.textContent.slice(0,t.currentTarget.textContent.length-2).replace(/\s+/g,"");this.sorting(e,a,i.length);var d=this.setNoSelectResult?this.setNoSelectResult:this.defaultNoSelectResult;this.populate_with_new_rows(this.new_tbody,e,d),this.currentPage=null}},{key:"getKeysOfObject",value:function(e){var t=[];for(var i in e)t.push(i);return t}},{key:"populate_with_new_rows",value:function(e,i,t,n){var l=2<arguments.length&&void 0!==t?t:null,s=3<arguments.length&&void 0!==n?n:null;null==this.keys&&(this.keys=this.getKeysOfObject(i[0]));var r=this.keys,a="",d=s||0;0!=i.length?i.forEach(function(e){if(d!=l){a+="<tr>";for(var t=0;t<r.length;t++)a+="\n\t\t\t\t\t\t<td>".concat(null==s?e[r[t]]:i[d][r[t]],"</td>");a+="</tr>",d++}}):(a+="<tr>",a+='<td colspan="'.concat(r.length,'">No data found.</td>'),a+="</tr>"),e.innerHTML=a,this.oldtbody.parentNode.replaceChild(e,this.oldtbody),this.oldtbody=e}},{key:"populate_with_new_pages",value:function(e,t,i){var n=2<arguments.length&&void 0!==i?i:null,l=Math.ceil(t/(0==n?1:n)),s="";s+='<li><button type="button" id="prev" disabled>prev</button></li>\n\t\t\t\t\t\t\t<li><button type="button"  id="1" class="active">1</button></li>';for(var r=1;r<(7<l?7:l);r++){if(6==r){s+='<li><button type="button" disabled>...</button></li>',s+='<li><button type="button" id="'.concat(l,'">').concat(l,"</button></li>");break}s+='<li><button type="button" id="'.concat(r+1,'">').concat(r+1,"</button></li>")}s+='<li><button type="button" id="next">next</button></li></li>',e.innerHTML=s,this.total_pages=l,this.currentPage=1,this.oldpages.parentNode.replaceChild(e,this.oldpages),this.oldpages=e;var a=document.querySelectorAll("div.wrapperdatatable div.tabledesignpaginate div.pages > ul > li > button");this.registerEventListener(a)}},{key:"sorting",value:function(e,l,s){e.sort(function(e,t){var i=e[l],n=t[l];return 1==s?i<n?-1:n<i?1:0:n<i?-1:i<n?1:0})}}]),t}();