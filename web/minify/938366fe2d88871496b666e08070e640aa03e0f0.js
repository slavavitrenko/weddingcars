/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */
(function(global,factory){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
return factory(w);};}else{factory(global);}}(typeof window!=="undefined"?window:this,function(window,noGlobal){var arr=[];var document=window.document;var slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var
version="2.2.4",jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,selector:"",length:0,toArray:function(){return slice.call(this);},get:function(num){return num!=null?(num<0?this[num+this.length]:this[num]):slice.call(this);},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret;},each:function(callback){return jQuery.each(this,callback);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor();},push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(i===length){target=this;i--;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function(obj){return obj!=null&&obj===obj.window;},isNumeric:function(obj){var realStringObj=obj&&obj.toString();return!jQuery.isArray(obj)&&(realStringObj-parseFloat(realStringObj)+1)>=0;},isPlainObject:function(obj){var key;if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype||{},"isPrototypeOf")){return false;}
for(key in obj){}
return key===undefined||hasOwn.call(obj,key);},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},type:function(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;},globalEval:function(code){var script,indirect=eval;code=jQuery.trim(code);if(code){if(code.indexOf("use strict")===1){script=document.createElement("script");script.text=code;document.head.appendChild(script).parentNode.removeChild(script);}else{indirect(code);}}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}
return obj;},trim:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}
first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
return matches;},map:function(elems,callback,arg){var length,value,i=0,ret=[];if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}
return concat.apply([],ret);},guid:1,proxy:function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!jQuery.isFunction(fn)){return undefined;}
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
var Sizzle=
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
return 0;},MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+".*"+")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},unloadHandler=function(){setDocument();};try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1;}};}
function Sizzle(selector,context,results,seed){var m,i,elem,nid,nidselect,match,groups,newSelector,newContext=context&&context.ownerDocument,nodeType=context?context.nodeType:9;results=results||[];if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}
if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;if(documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){if((elem=context.getElementById(m))){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;}else if(context.nodeName.toLowerCase()!=="object"){if((nid=context.getAttribute("id"))){nid=nid.replace(rescape,"\\$&");}else{context.setAttribute("id",(nid=expando));}
groups=tokenize(selector);i=groups.length;nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";while(i--){groups[i]=nidselect+" "+toSelector(groups[i]);}
newSelector=groups.join(",");newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key+" "]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{if(div.parentNode){div.parentNode.removeChild(div);}
div=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-
(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff;}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}
support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);if((parent=document.defaultView)&&parent.top!==parent){if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false);}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}}
support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");});support.getElementsByTagName=assert(function(div){div.appendChild(document.createComment(""));return!div.getElementsByTagName("*").length;});support.getElementsByClassName=rnative.test(document.getElementsByClassName);support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(document.querySelectorAll))){assert(function(div){docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}
if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){var input=document.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D");if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}
if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}
div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;return 0;}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}
if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}
return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}
return compare&4?-1:1;}:function(a,b){if(a===b){hasDuplicate=true;return 0;}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
while(ap[i]===bp[i]){i++;}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
sortInput=null;return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){node=parent;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{if(useCache){node=elem;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}
if(diff===false){while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}
if(node===elem){break;}}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push((tokens=[]));}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if((oldCache=uniqueCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2]);}else{uniqueCache[dir]=newCache;if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}
while((matcher=elementMatchers[j++])){if(matcher(elem,context||document,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector);}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector;}
return cached;};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1;});if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}
return Sizzle;})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var dir=function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}
matched.push(elem);}}
return matched;};var siblings=function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}
return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=(/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);var risSimple=/^.[^:#\[\.,]*$/;function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}
qualifier=jQuery.filter(qualifier,elements);}
return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>-1)!==not;});}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,len=this.length,ret=[],self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;if(!selector){return this;}
root=root||rootjQuery;if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||root).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector):selector(jQuery);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}
return indexOf.call(this,elem.jquery?elem[0]:elem);},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}
return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return dir(elem,"nextSibling");},prevAll:function(elem){return dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem);},children:function(elem){return siblings(elem.firstChild);},contents:function(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}
if(this.length>1){if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}
if(rparentsprev.test(name)){matched.reverse();}}
return this.pushStack(matched);};});var rnotwhite=(/\S+/g);function createOptions(options){var object={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var
firing,memory,fired,locked,list=[],queue=[],firingIndex=-1,fire=function(){locked=options.once;fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){firingIndex=list.length;memory=false;}}}
if(!options.memory){memory=false;}
firing=false;if(locked){if(memory){list=[];}else{list="";}}},self={add:function(){if(list){if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}
(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){add(arg);}});})(arguments);if(memory&&!firing){fire();}}
return this;},remove:function(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(index<=firingIndex){firingIndex--;}}});return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},empty:function(){if(list){list=[];}
return this;},disable:function(){locked=queue=[];list=memory="";return this;},disabled:function(){return!list;},lock:function(){locked=queue=[];if(!memory){list=memory="";}
return this;},locked:function(){return!!locked;},fireWith:function(context,args){if(!locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(subordinate){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().progress(updateFunc(i,progressContexts,progressValues)).done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject);}else{--remaining;}}}
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
return deferred.promise();}});var readyList;jQuery.fn.ready=function(fn){jQuery.ready.promise().done(fn);return this;};jQuery.extend({isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}});function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}
jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){window.setTimeout(jQuery.ready);}else{document.addEventListener("DOMContentLoaded",completed);window.addEventListener("load",completed);}}
return readyList.promise(obj);};jQuery.ready.promise();var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
return chainable?elems:bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;};var acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType);};function Data(){this.expando=jQuery.expando+Data.uid++;}
Data.uid=1;Data.prototype={register:function(owner,initial){var value=initial||{};if(owner.nodeType){owner[this.expando]=value;}else{Object.defineProperty(owner,this.expando,{value:value,writable:true,configurable:true});}
return owner[this.expando];},cache:function(owner){if(!acceptData(owner)){return{};}
var value=owner[this.expando];if(!value){value={};if(acceptData(owner)){if(owner.nodeType){owner[this.expando]=value;}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}
return value;},set:function(owner,data,value){var prop,cache=this.cache(owner);if(typeof data==="string"){cache[data]=value;}else{for(prop in data){cache[prop]=data[prop];}}
return cache;},get:function(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][key];},access:function(owner,key,value){var stored;if(key===undefined||((key&&typeof key==="string")&&value===undefined)){stored=this.get(owner,key);return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key));}
this.set(owner,key,value);return value!==undefined?value:key;},remove:function(owner,key){var i,name,camel,cache=owner[this.expando];if(cache===undefined){return;}
if(key===undefined){this.register(owner);}else{if(jQuery.isArray(key)){name=key.concat(key.map(jQuery.camelCase));}else{camel=jQuery.camelCase(key);if(key in cache){name=[key,camel];}else{name=camel;name=name in cache?[name]:(name.match(rnotwhite)||[]);}}
i=name.length;while(i--){delete cache[name[i]];}}
if(key===undefined||jQuery.isEmptyObject(cache)){if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function dataAttr(elem,key,data){var name;if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
dataUser.set(elem,key,data);}else{data=undefined;}}
return data;}
jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function(elem,name,data){return dataUser.access(elem,name,data);},removeData:function(elem,name){dataUser.remove(elem,name);},_data:function(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
dataPriv.set(elem,"hasDataAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){dataUser.set(this,key);});}
return access(this,function(value){var data,camelKey;if(elem&&value===undefined){data=dataUser.get(elem,key)||dataUser.get(elem,key.replace(rmultiDash,"-$&").toLowerCase());if(data!==undefined){return data;}
camelKey=jQuery.camelCase(key);data=dataUser.get(elem,camelKey);if(data!==undefined){return data;}
data=dataAttr(elem,camelKey,undefined);if(data!==undefined){return data;}
return;}
camelKey=jQuery.camelCase(key);this.each(function(){var data=dataUser.get(this,camelKey);dataUser.set(this,camelKey,value);if(key.indexOf("-")>-1&&data!==undefined){dataUser.set(this,key,value);}});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){unit=unit||initialInUnit[3];valueParts=valueParts||[];initialInUnit=+initial||1;do{scale=scale||".5";initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit);}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}
if(valueParts){initialInUnit=+initialInUnit||+initial||0;adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}
return adjusted;}
var rcheckableType=(/^(?:checkbox|radio)$/i);var rtagName=(/<([\w:-]+)/);var rscriptType=(/^$|\/(?:java|ecma)script/i);var wrapMap={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){var ret=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!=="undefined"?context.querySelectorAll(tag||"*"):[];return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;}
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}
var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||fragment.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
jQuery.merge(nodes,tmp.childNodes);tmp=fragment.firstChild;tmp.textContent="";}}}
fragment.textContent="";i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}
continue;}
contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(fragment.appendChild(elem),"script");if(contains){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
return fragment;}
(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var
rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}
function returnFalse(){return false;}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
function on(elem,types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){on(elem,type,selector,data,types[type],one);}
return elem;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return elem;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);if(!elemData){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function(event){event=jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=slice.call(arguments),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(event.type!=="click"||isNaN(event.button)||event.button<1)){for(;cur!==this;cur=cur.parentNode||this){if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}
if(matches[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}
if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase "+"metaKey relatedTarget shiftKey target timeStamp view which").split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:("button buttons clientX clientY offsetX offsetY pageX pageY "+"screenX screenY toElement").split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+
(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-
(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+
(doc&&doc.scrollTop||body&&body.scrollTop||0)-
(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},fix:function(event){if(event[jQuery.expando]){return event;}
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}},_default:function(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true;};jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}
this.stopPropagation();}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn);},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,rnoInnerhtml=/<script|<style|<link/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}
return elem;}
function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}
if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
function domManip(collection,args,callback,ignored){args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}
domManip(self,args,callback,ignored);});}
if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(collection[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{jQuery.globalEval(node.textContent.replace(rcleanScript,""));}}}}}}
return collection;}
function remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}
if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}
node.parentNode.removeChild(node);}}
return elem;}
jQuery.extend({htmlPrefilter:function(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
return clone;},cleanData:function(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if((data=elem[dataPriv.expando])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
elem[dataPriv.expando]=undefined;}
if(elem[dataUser.expando]){elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({domManip:domManip,detach:function(selector){return remove(this,selector,true);},remove:function(selector){return remove(this,selector);},text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.textContent="";}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var ignored=[];return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get());}
return this.pushStack(ret);};});var iframe,elemdisplay={HTML:"block",BODY:"block"};function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");elem.detach();return display;}
function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);doc=iframe[0].contentDocument;doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();}
elemdisplay[nodeName]=display;}
return display;}
var rmargin=(/^margin/);var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function(elem){var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}
return view.getComputedStyle(elem);};var swap=function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;};var documentElement=document.documentElement;(function(){var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");if(!div.style){return;}
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div);function computeStyleTests(){div.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px";div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);}
jQuery.extend(support,{pixelPosition:function(){computeStyleTests();return pixelPositionVal;},boxSizingReliable:function(){if(boxSizingReliableVal==null){computeStyleTests();}
return boxSizingReliableVal;},pixelMarginRight:function(){if(boxSizingReliableVal==null){computeStyleTests();}
return pixelMarginRightVal;},reliableMarginLeft:function(){if(boxSizingReliableVal==null){computeStyleTests();}
return reliableMarginLeftVal;},reliableMarginRight:function(){var ret,marginDiv=div.appendChild(document.createElement("div"));marginDiv.style.cssText=div.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;"+"display:block;margin:0;border:0;padding:0";marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";documentElement.appendChild(container);ret=!parseFloat(window.getComputedStyle(marginDiv).marginRight);documentElement.removeChild(container);div.removeChild(marginDiv);return ret;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed.getPropertyValue(name)||computed[name]:undefined;if((ret===""||ret===undefined)&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}
if(computed){if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret!==undefined?ret+"":ret;}
function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;return;}
return(this.get=hookFn).apply(this,arguments);}};}
var
rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"],emptyStyle=document.createElement("div").style;function vendorPropName(name){if(name in emptyStyle){return name;}
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}
function setPositiveNumber(elem,value,subtract){var matches=rcssNum.exec(value);return matches?Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}
if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
return val;}
function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}
if(rnumnonpx.test(val)){return val;}
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);val=parseFloat(val)||0;}
return(val+
augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px";}
function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
values[index]=dataPriv.get(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display="";}
if(elem.style.display===""&&isHidden(elem)){values[index]=dataPriv.access(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else{hidden=isHidden(elem);if(display!=="none"||!hidden){dataPriv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
return elements;}
jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":"cssFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);type="number";}
if(value==null||value!==value){return;}
if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}
return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles);if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}
return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return(fxNow=jQuery.now());}
function genFx(type,includeWidth){var which,i=0,attrs={height:type};includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=dataPriv.get(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];display=jQuery.css(elem,"display");checkDisplay=display==="none"?dataPriv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block";}}
if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}
for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}else{display=undefined;}}
if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
anim.done(function(){var prop;dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}
return result;}}
jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}
jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnotwhite);}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){window.clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";support.checkOn=input.value!=="";support.optSelected=opt.selected;select.disabled=true;support.optDisabled=!opt.disabled;input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}
if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
elem.setAttribute(name,value+"");return value;}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){elem[propName]=false;}
elem.removeAttribute(name);}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle;if(!isXML){handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}
return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
return(elem[name]=value);}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
return elem[name];},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}});if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}
return null;},set:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});var rclass=/[\t\r\n\f]/g;function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}
jQuery.fn.extend({addClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}
if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
return this;},removeClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}
if(!arguments.length){return this.attr("class","");}
if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}
finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}
if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}
return this.each(function(){var className,i,self,classNames;if(type==="string"){i=0;self=jQuery(this);classNames=value.match(rnotwhite)||[];while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){dataPriv.set(this,"__className__",className);}
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function(selector){var className,elem,i=0;className=" "+selector+" ";while((elem=this[i++])){if(elem.nodeType===1&&(" "+getClass(elem)+" ").replace(rclass," ").indexOf(className)>-1){return true;}}
return false;}});var rreturn=/\r/g,rspaces=/[\x20\t\r\n\f]+/g;jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:jQuery.trim(jQuery.text(elem)).replace(rspaces," ");}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}}
if(!optionSet){elem.selectedIndex=-1;}
return values;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin"in window;if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}
dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}
var location=window.location;var nonce=jQuery.now();var rquery=(/\?/);jQuery.parseJSON=function(data){return JSON.parse(data+"");};jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}
try{xml=(new window.DOMParser()).parseFromString(data,"text/xml");}catch(e){xml=undefined;}
if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;};var
rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,prefilters={},transports={},allTypes="*/".concat("*"),originAnchor=document.createElement("a");originAnchor.href=location.href;function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,urlAnchor,fireGlobals,i,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match==null?null:match;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]];}}else{jqXHR.always(map[jqXHR.status]);}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||location.href)+"").replace(rhash,"").replace(rprotocol,location.protocol+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];if(s.crossDomain==null){urlAnchor=document.createElement("a");try{urlAnchor.href=s.url;urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){s.crossDomain=true;}}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR;}
fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data);delete s.data;}
if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+nonce++):cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;}}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort();}
strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(state===2){return jqXHR;}
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{throw e;}}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return;}
state=2;if(timeoutTimer){window.clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function(html){var wrap;if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden=function(elem){return!jQuery.expr.filters.visible(elem);};jQuery.expr.filters.visible=function(elem){return elem.offsetWidth>0||elem.offsetHeight>0||elem.getClientRects().length>0;};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback,errorCallback;if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
for(i in headers){xhr.setRequestHeader(i,headers[i]);}
callback=function(type){return function(){if(callback){callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};xhr.onload=callback();errorCallback=xhr.onerror=callback("error");if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){if(xhr.readyState===4){window.setTimeout(function(){if(callback){errorCallback();}});}};}
callback=callback("abort");try{xhr.send(options.hasContent&&options.data||null);}catch(e){if(callback){throw e;}}},abort:function(){if(callback){callback();}}};}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,callback;return{send:function(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});document.head.appendChild(script[0]);},abort:function(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){if(overwritten===undefined){jQuery(window).removeProp(callbackName);}else{window[callbackName]=overwritten;}
if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}
if(typeof context==="boolean"){keepScripts=context;context=false;}
context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);};var _load=jQuery.fn.load;jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=jQuery.trim(url.slice(off));url=url.slice(0,off);}
if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type||"GET",dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}
return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}
jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative";}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,jQuery.extend({},curOffset));}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;if(!doc){return;}
docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box;}
box=elem.getBoundingClientRect();win=getWindow(doc);return{top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft};},position:function(){if(!this[0]){return;}
var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}
return offsetParent||documentElement;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}
if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},size:function(){return this.length;}});jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
var
_jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;};if(!noGlobal){window.jQuery=window.$=jQuery;}
return jQuery;}));;
/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){factory(require('jquery'));}else{factory(jQuery);}}(function(jQuery){var S2=(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd){var S2=jQuery.fn.select2.amd;}
var S2;(function(){if(!S2||!S2.requirejs){if(!S2){S2={};}else{require=S2;}
var requirejs,require,define;(function(undef){var main,req,makeMap,handlers,defined={},waiting={},config={},defining={},hasOwn=Object.prototype.hasOwnProperty,aps=[].slice,jsSuffixRegExp=/\.js$/;function hasProp(obj,prop){return hasOwn.call(obj,prop);}
function normalize(name,baseName){var nameParts,nameSegment,mapValue,foundMap,lastIndex,foundI,foundStarMap,starI,i,j,part,baseParts=baseName&&baseName.split("/"),map=config.map,starMap=(map&&map['*'])||{};if(name&&name.charAt(0)==="."){if(baseName){name=name.split('/');lastIndex=name.length-1;if(config.nodeIdCompat&&jsSuffixRegExp.test(name[lastIndex])){name[lastIndex]=name[lastIndex].replace(jsSuffixRegExp,'');}
name=baseParts.slice(0,baseParts.length-1).concat(name);for(i=0;i<name.length;i+=1){part=name[i];if(part==="."){name.splice(i,1);i-=1;}else if(part===".."){if(i===1&&(name[2]==='..'||name[0]==='..')){break;}else if(i>0){name.splice(i-1,2);i-=2;}}}
name=name.join("/");}else if(name.indexOf('./')===0){name=name.substring(2);}}
if((baseParts||starMap)&&map){nameParts=name.split('/');for(i=nameParts.length;i>0;i-=1){nameSegment=nameParts.slice(0,i).join("/");if(baseParts){for(j=baseParts.length;j>0;j-=1){mapValue=map[baseParts.slice(0,j).join('/')];if(mapValue){mapValue=mapValue[nameSegment];if(mapValue){foundMap=mapValue;foundI=i;break;}}}}
if(foundMap){break;}
if(!foundStarMap&&starMap&&starMap[nameSegment]){foundStarMap=starMap[nameSegment];starI=i;}}
if(!foundMap&&foundStarMap){foundMap=foundStarMap;foundI=starI;}
if(foundMap){nameParts.splice(0,foundI,foundMap);name=nameParts.join('/');}}
return name;}
function makeRequire(relName,forceSync){return function(){var args=aps.call(arguments,0);if(typeof args[0]!=='string'&&args.length===1){args.push(null);}
return req.apply(undef,args.concat([relName,forceSync]));};}
function makeNormalize(relName){return function(name){return normalize(name,relName);};}
function makeLoad(depName){return function(value){defined[depName]=value;};}
function callDep(name){if(hasProp(waiting,name)){var args=waiting[name];delete waiting[name];defining[name]=true;main.apply(undef,args);}
if(!hasProp(defined,name)&&!hasProp(defining,name)){throw new Error('No '+name);}
return defined[name];}
function splitPrefix(name){var prefix,index=name?name.indexOf('!'):-1;if(index>-1){prefix=name.substring(0,index);name=name.substring(index+1,name.length);}
return[prefix,name];}
makeMap=function(name,relName){var plugin,parts=splitPrefix(name),prefix=parts[0];name=parts[1];if(prefix){prefix=normalize(prefix,relName);plugin=callDep(prefix);}
if(prefix){if(plugin&&plugin.normalize){name=plugin.normalize(name,makeNormalize(relName));}else{name=normalize(name,relName);}}else{name=normalize(name,relName);parts=splitPrefix(name);prefix=parts[0];name=parts[1];if(prefix){plugin=callDep(prefix);}}
return{f:prefix?prefix+'!'+name:name,n:name,pr:prefix,p:plugin};};function makeConfig(name){return function(){return(config&&config.config&&config.config[name])||{};};}
handlers={require:function(name){return makeRequire(name);},exports:function(name){var e=defined[name];if(typeof e!=='undefined'){return e;}else{return(defined[name]={});}},module:function(name){return{id:name,uri:'',exports:defined[name],config:makeConfig(name)};}};main=function(name,deps,callback,relName){var cjsModule,depName,ret,map,i,args=[],callbackType=typeof callback,usingExports;relName=relName||name;if(callbackType==='undefined'||callbackType==='function'){deps=!deps.length&&callback.length?['require','exports','module']:deps;for(i=0;i<deps.length;i+=1){map=makeMap(deps[i],relName);depName=map.f;if(depName==="require"){args[i]=handlers.require(name);}else if(depName==="exports"){args[i]=handlers.exports(name);usingExports=true;}else if(depName==="module"){cjsModule=args[i]=handlers.module(name);}else if(hasProp(defined,depName)||hasProp(waiting,depName)||hasProp(defining,depName)){args[i]=callDep(depName);}else if(map.p){map.p.load(map.n,makeRequire(relName,true),makeLoad(depName),{});args[i]=defined[depName];}else{throw new Error(name+' missing '+depName);}}
ret=callback?callback.apply(defined[name],args):undefined;if(name){if(cjsModule&&cjsModule.exports!==undef&&cjsModule.exports!==defined[name]){defined[name]=cjsModule.exports;}else if(ret!==undef||!usingExports){defined[name]=ret;}}}else if(name){defined[name]=callback;}};requirejs=require=req=function(deps,callback,relName,forceSync,alt){if(typeof deps==="string"){if(handlers[deps]){return handlers[deps](callback);}
return callDep(makeMap(deps,callback).f);}else if(!deps.splice){config=deps;if(config.deps){req(config.deps,config.callback);}
if(!callback){return;}
if(callback.splice){deps=callback;callback=relName;relName=null;}else{deps=undef;}}
callback=callback||function(){};if(typeof relName==='function'){relName=forceSync;forceSync=alt;}
if(forceSync){main(undef,deps,callback,relName);}else{setTimeout(function(){main(undef,deps,callback,relName);},4);}
return req;};req.config=function(cfg){return req(cfg);};requirejs._defined=defined;define=function(name,deps,callback){if(typeof name!=='string'){throw new Error('See almond README: incorrect module build, no module name');}
if(!deps.splice){callback=deps;deps=[];}
if(!hasProp(defined,name)&&!hasProp(waiting,name)){waiting[name]=[name,deps,callback];}};define.amd={jQuery:true};}());S2.requirejs=requirejs;S2.require=require;S2.define=define;}}());S2.define("almond",function(){});S2.define('jquery',[],function(){var _$=jQuery||$;if(_$==null&&console&&console.error){console.error('Select2: An instance of jQuery or a jQuery-compatible library was not '+'found. Make sure that you are including jQuery before Select2 on your '+'web page.');}
return _$;});S2.define('select2/utils',['jquery'],function($){var Utils={};Utils.Extend=function(ChildClass,SuperClass){var __hasProp={}.hasOwnProperty;function BaseConstructor(){this.constructor=ChildClass;}
for(var key in SuperClass){if(__hasProp.call(SuperClass,key)){ChildClass[key]=SuperClass[key];}}
BaseConstructor.prototype=SuperClass.prototype;ChildClass.prototype=new BaseConstructor();ChildClass.__super__=SuperClass.prototype;return ChildClass;};function getMethods(theClass){var proto=theClass.prototype;var methods=[];for(var methodName in proto){var m=proto[methodName];if(typeof m!=='function'){continue;}
if(methodName==='constructor'){continue;}
methods.push(methodName);}
return methods;}
Utils.Decorate=function(SuperClass,DecoratorClass){var decoratedMethods=getMethods(DecoratorClass);var superMethods=getMethods(SuperClass);function DecoratedClass(){var unshift=Array.prototype.unshift;var argCount=DecoratorClass.prototype.constructor.length;var calledConstructor=SuperClass.prototype.constructor;if(argCount>0){unshift.call(arguments,SuperClass.prototype.constructor);calledConstructor=DecoratorClass.prototype.constructor;}
calledConstructor.apply(this,arguments);}
DecoratorClass.displayName=SuperClass.displayName;function ctr(){this.constructor=DecoratedClass;}
DecoratedClass.prototype=new ctr();for(var m=0;m<superMethods.length;m++){var superMethod=superMethods[m];DecoratedClass.prototype[superMethod]=SuperClass.prototype[superMethod];}
var calledMethod=function(methodName){var originalMethod=function(){};if(methodName in DecoratedClass.prototype){originalMethod=DecoratedClass.prototype[methodName];}
var decoratedMethod=DecoratorClass.prototype[methodName];return function(){var unshift=Array.prototype.unshift;unshift.call(arguments,originalMethod);return decoratedMethod.apply(this,arguments);};};for(var d=0;d<decoratedMethods.length;d++){var decoratedMethod=decoratedMethods[d];DecoratedClass.prototype[decoratedMethod]=calledMethod(decoratedMethod);}
return DecoratedClass;};var Observable=function(){this.listeners={};};Observable.prototype.on=function(event,callback){this.listeners=this.listeners||{};if(event in this.listeners){this.listeners[event].push(callback);}else{this.listeners[event]=[callback];}};Observable.prototype.trigger=function(event){var slice=Array.prototype.slice;var params=slice.call(arguments,1);this.listeners=this.listeners||{};if(params==null){params=[];}
if(params.length===0){params.push({});}
params[0]._type=event;if(event in this.listeners){this.invoke(this.listeners[event],slice.call(arguments,1));}
if('*'in this.listeners){this.invoke(this.listeners['*'],arguments);}};Observable.prototype.invoke=function(listeners,params){for(var i=0,len=listeners.length;i<len;i++){listeners[i].apply(this,params);}};Utils.Observable=Observable;Utils.generateChars=function(length){var chars='';for(var i=0;i<length;i++){var randomChar=Math.floor(Math.random()*36);chars+=randomChar.toString(36);}
return chars;};Utils.bind=function(func,context){return function(){func.apply(context,arguments);};};Utils._convertData=function(data){for(var originalKey in data){var keys=originalKey.split('-');var dataLevel=data;if(keys.length===1){continue;}
for(var k=0;k<keys.length;k++){var key=keys[k];key=key.substring(0,1).toLowerCase()+key.substring(1);if(!(key in dataLevel)){dataLevel[key]={};}
if(k==keys.length-1){dataLevel[key]=data[originalKey];}
dataLevel=dataLevel[key];}
delete data[originalKey];}
return data;};Utils.hasScroll=function(index,el){var $el=$(el);var overflowX=el.style.overflowX;var overflowY=el.style.overflowY;if(overflowX===overflowY&&(overflowY==='hidden'||overflowY==='visible')){return false;}
if(overflowX==='scroll'||overflowY==='scroll'){return true;}
return($el.innerHeight()<el.scrollHeight||$el.innerWidth()<el.scrollWidth);};Utils.escapeMarkup=function(markup){var replaceMap={'\\':'&#92;','&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;','/':'&#47;'};if(typeof markup!=='string'){return markup;}
return String(markup).replace(/[&<>"'\/\\]/g,function(match){return replaceMap[match];});};Utils.appendMany=function($element,$nodes){if($.fn.jquery.substr(0,3)==='1.7'){var $jqNodes=$();$.map($nodes,function(node){$jqNodes=$jqNodes.add(node);});$nodes=$jqNodes;}
$element.append($nodes);};return Utils;});S2.define('select2/results',['jquery','./utils'],function($,Utils){function Results($element,options,dataAdapter){this.$element=$element;this.data=dataAdapter;this.options=options;Results.__super__.constructor.call(this);}
Utils.Extend(Results,Utils.Observable);Results.prototype.render=function(){var $results=$('<ul class="select2-results__options" role="tree"></ul>');if(this.options.get('multiple')){$results.attr('aria-multiselectable','true');}
this.$results=$results;return $results;};Results.prototype.clear=function(){this.$results.empty();};Results.prototype.displayMessage=function(params){var escapeMarkup=this.options.get('escapeMarkup');this.clear();this.hideLoading();var $message=$('<li role="treeitem" aria-live="assertive"'+' class="select2-results__option"></li>');var message=this.options.get('translations').get(params.message);$message.append(escapeMarkup(message(params.args)));$message[0].className+=' select2-results__message';this.$results.append($message);};Results.prototype.hideMessages=function(){this.$results.find('.select2-results__message').remove();};Results.prototype.append=function(data){this.hideLoading();var $options=[];if(data.results==null||data.results.length===0){if(this.$results.children().length===0){this.trigger('results:message',{message:'noResults'});}
return;}
data.results=this.sort(data.results);for(var d=0;d<data.results.length;d++){var item=data.results[d];var $option=this.option(item);$options.push($option);}
this.$results.append($options);};Results.prototype.position=function($results,$dropdown){var $resultsContainer=$dropdown.find('.select2-results');$resultsContainer.append($results);};Results.prototype.sort=function(data){var sorter=this.options.get('sorter');return sorter(data);};Results.prototype.highlightFirstItem=function(){var $options=this.$results.find('.select2-results__option[aria-selected]');var $selected=$options.filter('[aria-selected=true]');if($selected.length>0){$selected.first().trigger('mouseenter');}else{$options.first().trigger('mouseenter');}
this.ensureHighlightVisible();};Results.prototype.setClasses=function(){var self=this;this.data.current(function(selected){var selectedIds=$.map(selected,function(s){return s.id.toString();});var $options=self.$results.find('.select2-results__option[aria-selected]');$options.each(function(){var $option=$(this);var item=$.data(this,'data');var id=''+item.id;if((item.element!=null&&item.element.selected)||(item.element==null&&$.inArray(id,selectedIds)>-1)){$option.attr('aria-selected','true');}else{$option.attr('aria-selected','false');}});});};Results.prototype.showLoading=function(params){this.hideLoading();var loadingMore=this.options.get('translations').get('searching');var loading={disabled:true,loading:true,text:loadingMore(params)};var $loading=this.option(loading);$loading.className+=' loading-results';this.$results.prepend($loading);};Results.prototype.hideLoading=function(){this.$results.find('.loading-results').remove();};Results.prototype.option=function(data){var option=document.createElement('li');option.className='select2-results__option';var attrs={'role':'treeitem','aria-selected':'false'};if(data.disabled){delete attrs['aria-selected'];attrs['aria-disabled']='true';}
if(data.id==null){delete attrs['aria-selected'];}
if(data._resultId!=null){option.id=data._resultId;}
if(data.title){option.title=data.title;}
if(data.children){attrs.role='group';attrs['aria-label']=data.text;delete attrs['aria-selected'];}
for(var attr in attrs){var val=attrs[attr];option.setAttribute(attr,val);}
if(data.children){var $option=$(option);var label=document.createElement('strong');label.className='select2-results__group';var $label=$(label);this.template(data,label);var $children=[];for(var c=0;c<data.children.length;c++){var child=data.children[c];var $child=this.option(child);$children.push($child);}
var $childrenContainer=$('<ul></ul>',{'class':'select2-results__options select2-results__options--nested'});$childrenContainer.append($children);$option.append(label);$option.append($childrenContainer);}else{this.template(data,option);}
$.data(option,'data',data);return option;};Results.prototype.bind=function(container,$container){var self=this;var id=container.id+'-results';this.$results.attr('id',id);container.on('results:all',function(params){self.clear();self.append(params.data);if(container.isOpen()){self.setClasses();self.highlightFirstItem();}});container.on('results:append',function(params){self.append(params.data);if(container.isOpen()){self.setClasses();}});container.on('query',function(params){self.hideMessages();self.showLoading(params);});container.on('select',function(){if(!container.isOpen()){return;}
self.setClasses();self.highlightFirstItem();});container.on('unselect',function(){if(!container.isOpen()){return;}
self.setClasses();self.highlightFirstItem();});container.on('open',function(){self.$results.attr('aria-expanded','true');self.$results.attr('aria-hidden','false');self.setClasses();self.ensureHighlightVisible();});container.on('close',function(){self.$results.attr('aria-expanded','false');self.$results.attr('aria-hidden','true');self.$results.removeAttr('aria-activedescendant');});container.on('results:toggle',function(){var $highlighted=self.getHighlightedResults();if($highlighted.length===0){return;}
$highlighted.trigger('mouseup');});container.on('results:select',function(){var $highlighted=self.getHighlightedResults();if($highlighted.length===0){return;}
var data=$highlighted.data('data');if($highlighted.attr('aria-selected')=='true'){self.trigger('close',{});}else{self.trigger('select',{data:data});}});container.on('results:previous',function(){var $highlighted=self.getHighlightedResults();var $options=self.$results.find('[aria-selected]');var currentIndex=$options.index($highlighted);if(currentIndex===0){return;}
var nextIndex=currentIndex-1;if($highlighted.length===0){nextIndex=0;}
var $next=$options.eq(nextIndex);$next.trigger('mouseenter');var currentOffset=self.$results.offset().top;var nextTop=$next.offset().top;var nextOffset=self.$results.scrollTop()+(nextTop-currentOffset);if(nextIndex===0){self.$results.scrollTop(0);}else if(nextTop-currentOffset<0){self.$results.scrollTop(nextOffset);}});container.on('results:next',function(){var $highlighted=self.getHighlightedResults();var $options=self.$results.find('[aria-selected]');var currentIndex=$options.index($highlighted);var nextIndex=currentIndex+1;if(nextIndex>=$options.length){return;}
var $next=$options.eq(nextIndex);$next.trigger('mouseenter');var currentOffset=self.$results.offset().top+
self.$results.outerHeight(false);var nextBottom=$next.offset().top+$next.outerHeight(false);var nextOffset=self.$results.scrollTop()+nextBottom-currentOffset;if(nextIndex===0){self.$results.scrollTop(0);}else if(nextBottom>currentOffset){self.$results.scrollTop(nextOffset);}});container.on('results:focus',function(params){params.element.addClass('select2-results__option--highlighted');});container.on('results:message',function(params){self.displayMessage(params);});if($.fn.mousewheel){this.$results.on('mousewheel',function(e){var top=self.$results.scrollTop();var bottom=self.$results.get(0).scrollHeight-top+e.deltaY;var isAtTop=e.deltaY>0&&top-e.deltaY<=0;var isAtBottom=e.deltaY<0&&bottom<=self.$results.height();if(isAtTop){self.$results.scrollTop(0);e.preventDefault();e.stopPropagation();}else if(isAtBottom){self.$results.scrollTop(self.$results.get(0).scrollHeight-self.$results.height());e.preventDefault();e.stopPropagation();}});}
this.$results.on('mouseup','.select2-results__option[aria-selected]',function(evt){var $this=$(this);var data=$this.data('data');if($this.attr('aria-selected')==='true'){if(self.options.get('multiple')){self.trigger('unselect',{originalEvent:evt,data:data});}else{self.trigger('close',{});}
return;}
self.trigger('select',{originalEvent:evt,data:data});});this.$results.on('mouseenter','.select2-results__option[aria-selected]',function(evt){var data=$(this).data('data');self.getHighlightedResults().removeClass('select2-results__option--highlighted');self.trigger('results:focus',{data:data,element:$(this)});});};Results.prototype.getHighlightedResults=function(){var $highlighted=this.$results.find('.select2-results__option--highlighted');return $highlighted;};Results.prototype.destroy=function(){this.$results.remove();};Results.prototype.ensureHighlightVisible=function(){var $highlighted=this.getHighlightedResults();if($highlighted.length===0){return;}
var $options=this.$results.find('[aria-selected]');var currentIndex=$options.index($highlighted);var currentOffset=this.$results.offset().top;var nextTop=$highlighted.offset().top;var nextOffset=this.$results.scrollTop()+(nextTop-currentOffset);var offsetDelta=nextTop-currentOffset;nextOffset-=$highlighted.outerHeight(false)*2;if(currentIndex<=2){this.$results.scrollTop(0);}else if(offsetDelta>this.$results.outerHeight()||offsetDelta<0){this.$results.scrollTop(nextOffset);}};Results.prototype.template=function(result,container){var template=this.options.get('templateResult');var escapeMarkup=this.options.get('escapeMarkup');var content=template(result,container);if(content==null){container.style.display='none';}else if(typeof content==='string'){container.innerHTML=escapeMarkup(content);}else{$(container).append(content);}};return Results;});S2.define('select2/keys',[],function(){var KEYS={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return KEYS;});S2.define('select2/selection/base',['jquery','../utils','../keys'],function($,Utils,KEYS){function BaseSelection($element,options){this.$element=$element;this.options=options;BaseSelection.__super__.constructor.call(this);}
Utils.Extend(BaseSelection,Utils.Observable);BaseSelection.prototype.render=function(){var $selection=$('<span class="select2-selection" role="combobox" '+' aria-haspopup="true" aria-expanded="false">'+'</span>');this._tabindex=0;if(this.$element.data('old-tabindex')!=null){this._tabindex=this.$element.data('old-tabindex');}else if(this.$element.attr('tabindex')!=null){this._tabindex=this.$element.attr('tabindex');}
$selection.attr('title',this.$element.attr('title'));$selection.attr('tabindex',this._tabindex);this.$selection=$selection;return $selection;};BaseSelection.prototype.bind=function(container,$container){var self=this;var id=container.id+'-container';var resultsId=container.id+'-results';this.container=container;this.$selection.on('focus',function(evt){self.trigger('focus',evt);});this.$selection.on('blur',function(evt){self._handleBlur(evt);});this.$selection.on('keydown',function(evt){self.trigger('keypress',evt);if(evt.which===KEYS.SPACE){evt.preventDefault();}});container.on('results:focus',function(params){self.$selection.attr('aria-activedescendant',params.data._resultId);});container.on('selection:update',function(params){self.update(params.data);});container.on('open',function(){self.$selection.attr('aria-expanded','true');self.$selection.attr('aria-owns',resultsId);self._attachCloseHandler(container);});container.on('close',function(){self.$selection.attr('aria-expanded','false');self.$selection.removeAttr('aria-activedescendant');self.$selection.removeAttr('aria-owns');self.$selection.focus();self._detachCloseHandler(container);});container.on('enable',function(){self.$selection.attr('tabindex',self._tabindex);});container.on('disable',function(){self.$selection.attr('tabindex','-1');});};BaseSelection.prototype._handleBlur=function(evt){var self=this;window.setTimeout(function(){if((document.activeElement==self.$selection[0])||($.contains(self.$selection[0],document.activeElement))){return;}
self.trigger('blur',evt);},1);};BaseSelection.prototype._attachCloseHandler=function(container){var self=this;$(document.body).on('mousedown.select2.'+container.id,function(e){var $target=$(e.target);var $select=$target.closest('.select2');var $all=$('.select2.select2-container--open');$all.each(function(){var $this=$(this);if(this==$select[0]){return;}
var $element=$this.data('element');$element.select2('close');});});};BaseSelection.prototype._detachCloseHandler=function(container){$(document.body).off('mousedown.select2.'+container.id);};BaseSelection.prototype.position=function($selection,$container){var $selectionContainer=$container.find('.selection');$selectionContainer.append($selection);};BaseSelection.prototype.destroy=function(){this._detachCloseHandler(this.container);};BaseSelection.prototype.update=function(data){throw new Error('The `update` method must be defined in child classes.');};return BaseSelection;});S2.define('select2/selection/single',['jquery','./base','../utils','../keys'],function($,BaseSelection,Utils,KEYS){function SingleSelection(){SingleSelection.__super__.constructor.apply(this,arguments);}
Utils.Extend(SingleSelection,BaseSelection);SingleSelection.prototype.render=function(){var $selection=SingleSelection.__super__.render.call(this);$selection.addClass('select2-selection--single');$selection.html('<span class="select2-selection__rendered"></span>'+'<span class="select2-selection__arrow" role="presentation">'+'<b role="presentation"></b>'+'</span>');return $selection;};SingleSelection.prototype.bind=function(container,$container){var self=this;SingleSelection.__super__.bind.apply(this,arguments);var id=container.id+'-container';this.$selection.find('.select2-selection__rendered').attr('id',id);this.$selection.attr('aria-labelledby',id);this.$selection.on('mousedown',function(evt){if(evt.which!==1){return;}
self.trigger('toggle',{originalEvent:evt});});this.$selection.on('focus',function(evt){});this.$selection.on('blur',function(evt){});container.on('focus',function(evt){if(!container.isOpen()){self.$selection.focus();}});container.on('selection:update',function(params){self.update(params.data);});};SingleSelection.prototype.clear=function(){this.$selection.find('.select2-selection__rendered').empty();};SingleSelection.prototype.display=function(data,container){var template=this.options.get('templateSelection');var escapeMarkup=this.options.get('escapeMarkup');return escapeMarkup(template(data,container));};SingleSelection.prototype.selectionContainer=function(){return $('<span></span>');};SingleSelection.prototype.update=function(data){if(data.length===0){this.clear();return;}
var selection=data[0];var $rendered=this.$selection.find('.select2-selection__rendered');var formatted=this.display(selection,$rendered);$rendered.empty().append(formatted);$rendered.prop('title',selection.title||selection.text);};return SingleSelection;});S2.define('select2/selection/multiple',['jquery','./base','../utils'],function($,BaseSelection,Utils){function MultipleSelection($element,options){MultipleSelection.__super__.constructor.apply(this,arguments);}
Utils.Extend(MultipleSelection,BaseSelection);MultipleSelection.prototype.render=function(){var $selection=MultipleSelection.__super__.render.call(this);$selection.addClass('select2-selection--multiple');$selection.html('<ul class="select2-selection__rendered"></ul>');return $selection;};MultipleSelection.prototype.bind=function(container,$container){var self=this;MultipleSelection.__super__.bind.apply(this,arguments);this.$selection.on('click',function(evt){self.trigger('toggle',{originalEvent:evt});});this.$selection.on('click','.select2-selection__choice__remove',function(evt){if(self.options.get('disabled')){return;}
var $remove=$(this);var $selection=$remove.parent();var data=$selection.data('data');self.trigger('unselect',{originalEvent:evt,data:data});});};MultipleSelection.prototype.clear=function(){this.$selection.find('.select2-selection__rendered').empty();};MultipleSelection.prototype.display=function(data,container){var template=this.options.get('templateSelection');var escapeMarkup=this.options.get('escapeMarkup');return escapeMarkup(template(data,container));};MultipleSelection.prototype.selectionContainer=function(){var $container=$('<li class="select2-selection__choice">'+'<span class="select2-selection__choice__remove" role="presentation">'+'&times;'+'</span>'+'</li>');return $container;};MultipleSelection.prototype.update=function(data){this.clear();if(data.length===0){return;}
var $selections=[];for(var d=0;d<data.length;d++){var selection=data[d];var $selection=this.selectionContainer();var formatted=this.display(selection,$selection);$selection.append(formatted);$selection.prop('title',selection.title||selection.text);$selection.data('data',selection);$selections.push($selection);}
var $rendered=this.$selection.find('.select2-selection__rendered');Utils.appendMany($rendered,$selections);};return MultipleSelection;});S2.define('select2/selection/placeholder',['../utils'],function(Utils){function Placeholder(decorated,$element,options){this.placeholder=this.normalizePlaceholder(options.get('placeholder'));decorated.call(this,$element,options);}
Placeholder.prototype.normalizePlaceholder=function(_,placeholder){if(typeof placeholder==='string'){placeholder={id:'',text:placeholder};}
return placeholder;};Placeholder.prototype.createPlaceholder=function(decorated,placeholder){var $placeholder=this.selectionContainer();$placeholder.html(this.display(placeholder));$placeholder.addClass('select2-selection__placeholder').removeClass('select2-selection__choice');return $placeholder;};Placeholder.prototype.update=function(decorated,data){var singlePlaceholder=(data.length==1&&data[0].id!=this.placeholder.id);var multipleSelections=data.length>1;if(multipleSelections||singlePlaceholder){return decorated.call(this,data);}
this.clear();var $placeholder=this.createPlaceholder(this.placeholder);this.$selection.find('.select2-selection__rendered').append($placeholder);};return Placeholder;});S2.define('select2/selection/allowClear',['jquery','../keys'],function($,KEYS){function AllowClear(){}
AllowClear.prototype.bind=function(decorated,container,$container){var self=this;decorated.call(this,container,$container);if(this.placeholder==null){if(this.options.get('debug')&&window.console&&console.error){console.error('Select2: The `allowClear` option should be used in combination '+'with the `placeholder` option.');}}
this.$selection.on('mousedown','.select2-selection__clear',function(evt){self._handleClear(evt);});container.on('keypress',function(evt){self._handleKeyboardClear(evt,container);});};AllowClear.prototype._handleClear=function(_,evt){if(this.options.get('disabled')){return;}
var $clear=this.$selection.find('.select2-selection__clear');if($clear.length===0){return;}
evt.stopPropagation();var data=$clear.data('data');for(var d=0;d<data.length;d++){var unselectData={data:data[d]};this.trigger('unselect',unselectData);if(unselectData.prevented){return;}}
this.$element.val(this.placeholder.id).trigger('change');this.trigger('toggle',{});};AllowClear.prototype._handleKeyboardClear=function(_,evt,container){if(container.isOpen()){return;}
if(evt.which==KEYS.DELETE||evt.which==KEYS.BACKSPACE){this._handleClear(evt);}};AllowClear.prototype.update=function(decorated,data){decorated.call(this,data);if(this.$selection.find('.select2-selection__placeholder').length>0||data.length===0){return;}
var $remove=$('<span class="select2-selection__clear">'+'&times;'+'</span>');$remove.data('data',data);this.$selection.find('.select2-selection__rendered').prepend($remove);};return AllowClear;});S2.define('select2/selection/search',['jquery','../utils','../keys'],function($,Utils,KEYS){function Search(decorated,$element,options){decorated.call(this,$element,options);}
Search.prototype.render=function(decorated){var $search=$('<li class="select2-search select2-search--inline">'+'<input class="select2-search__field" type="search" tabindex="-1"'+' autocomplete="off" autocorrect="off" autocapitalize="off"'+' spellcheck="false" role="textbox" aria-autocomplete="list" />'+'</li>');this.$searchContainer=$search;this.$search=$search.find('input');var $rendered=decorated.call(this);this._transferTabIndex();return $rendered;};Search.prototype.bind=function(decorated,container,$container){var self=this;decorated.call(this,container,$container);container.on('open',function(){self.$search.trigger('focus');});container.on('close',function(){self.$search.val('');self.$search.removeAttr('aria-activedescendant');self.$search.trigger('focus');});container.on('enable',function(){self.$search.prop('disabled',false);self._transferTabIndex();});container.on('disable',function(){self.$search.prop('disabled',true);});container.on('focus',function(evt){self.$search.trigger('focus');});container.on('results:focus',function(params){self.$search.attr('aria-activedescendant',params.id);});this.$selection.on('focusin','.select2-search--inline',function(evt){self.trigger('focus',evt);});this.$selection.on('focusout','.select2-search--inline',function(evt){self._handleBlur(evt);});this.$selection.on('keydown','.select2-search--inline',function(evt){evt.stopPropagation();self.trigger('keypress',evt);self._keyUpPrevented=evt.isDefaultPrevented();var key=evt.which;if(key===KEYS.BACKSPACE&&self.$search.val()===''){var $previousChoice=self.$searchContainer.prev('.select2-selection__choice');if($previousChoice.length>0){var item=$previousChoice.data('data');self.searchRemoveChoice(item);evt.preventDefault();}}});var msie=document.documentMode;var disableInputEvents=msie&&msie<=11;this.$selection.on('input.searchcheck','.select2-search--inline',function(evt){if(disableInputEvents){self.$selection.off('input.search input.searchcheck');return;}
self.$selection.off('keyup.search');});this.$selection.on('keyup.search input.search','.select2-search--inline',function(evt){if(disableInputEvents&&evt.type==='input'){self.$selection.off('input.search input.searchcheck');return;}
var key=evt.which;if(key==KEYS.SHIFT||key==KEYS.CTRL||key==KEYS.ALT){return;}
if(key==KEYS.TAB){return;}
self.handleSearch(evt);});};Search.prototype._transferTabIndex=function(decorated){this.$search.attr('tabindex',this.$selection.attr('tabindex'));this.$selection.attr('tabindex','-1');};Search.prototype.createPlaceholder=function(decorated,placeholder){this.$search.attr('placeholder',placeholder.text);};Search.prototype.update=function(decorated,data){var searchHadFocus=this.$search[0]==document.activeElement;this.$search.attr('placeholder','');decorated.call(this,data);this.$selection.find('.select2-selection__rendered').append(this.$searchContainer);this.resizeSearch();if(searchHadFocus){this.$search.focus();}};Search.prototype.handleSearch=function(){this.resizeSearch();if(!this._keyUpPrevented){var input=this.$search.val();this.trigger('query',{term:input});}
this._keyUpPrevented=false;};Search.prototype.searchRemoveChoice=function(decorated,item){this.trigger('unselect',{data:item});this.$search.val(item.text);this.handleSearch();};Search.prototype.resizeSearch=function(){this.$search.css('width','25px');var width='';if(this.$search.attr('placeholder')!==''){width=this.$selection.find('.select2-selection__rendered').innerWidth();}else{var minimumWidth=this.$search.val().length+1;width=(minimumWidth*0.75)+'em';}
this.$search.css('width',width);};return Search;});S2.define('select2/selection/eventRelay',['jquery'],function($){function EventRelay(){}
EventRelay.prototype.bind=function(decorated,container,$container){var self=this;var relayEvents=['open','opening','close','closing','select','selecting','unselect','unselecting'];var preventableEvents=['opening','closing','selecting','unselecting'];decorated.call(this,container,$container);container.on('*',function(name,params){if($.inArray(name,relayEvents)===-1){return;}
params=params||{};var evt=$.Event('select2:'+name,{params:params});self.$element.trigger(evt);if($.inArray(name,preventableEvents)===-1){return;}
params.prevented=evt.isDefaultPrevented();});};return EventRelay;});S2.define('select2/translation',['jquery','require'],function($,require){function Translation(dict){this.dict=dict||{};}
Translation.prototype.all=function(){return this.dict;};Translation.prototype.get=function(key){return this.dict[key];};Translation.prototype.extend=function(translation){this.dict=$.extend({},translation.all(),this.dict);};Translation._cache={};Translation.loadPath=function(path){if(!(path in Translation._cache)){var translations=require(path);Translation._cache[path]=translations;}
return new Translation(Translation._cache[path]);};return Translation;});S2.define('select2/diacritics',[],function(){var diacritics={'\u24B6':'A','\uFF21':'A','\u00C0':'A','\u00C1':'A','\u00C2':'A','\u1EA6':'A','\u1EA4':'A','\u1EAA':'A','\u1EA8':'A','\u00C3':'A','\u0100':'A','\u0102':'A','\u1EB0':'A','\u1EAE':'A','\u1EB4':'A','\u1EB2':'A','\u0226':'A','\u01E0':'A','\u00C4':'A','\u01DE':'A','\u1EA2':'A','\u00C5':'A','\u01FA':'A','\u01CD':'A','\u0200':'A','\u0202':'A','\u1EA0':'A','\u1EAC':'A','\u1EB6':'A','\u1E00':'A','\u0104':'A','\u023A':'A','\u2C6F':'A','\uA732':'AA','\u00C6':'AE','\u01FC':'AE','\u01E2':'AE','\uA734':'AO','\uA736':'AU','\uA738':'AV','\uA73A':'AV','\uA73C':'AY','\u24B7':'B','\uFF22':'B','\u1E02':'B','\u1E04':'B','\u1E06':'B','\u0243':'B','\u0182':'B','\u0181':'B','\u24B8':'C','\uFF23':'C','\u0106':'C','\u0108':'C','\u010A':'C','\u010C':'C','\u00C7':'C','\u1E08':'C','\u0187':'C','\u023B':'C','\uA73E':'C','\u24B9':'D','\uFF24':'D','\u1E0A':'D','\u010E':'D','\u1E0C':'D','\u1E10':'D','\u1E12':'D','\u1E0E':'D','\u0110':'D','\u018B':'D','\u018A':'D','\u0189':'D','\uA779':'D','\u01F1':'DZ','\u01C4':'DZ','\u01F2':'Dz','\u01C5':'Dz','\u24BA':'E','\uFF25':'E','\u00C8':'E','\u00C9':'E','\u00CA':'E','\u1EC0':'E','\u1EBE':'E','\u1EC4':'E','\u1EC2':'E','\u1EBC':'E','\u0112':'E','\u1E14':'E','\u1E16':'E','\u0114':'E','\u0116':'E','\u00CB':'E','\u1EBA':'E','\u011A':'E','\u0204':'E','\u0206':'E','\u1EB8':'E','\u1EC6':'E','\u0228':'E','\u1E1C':'E','\u0118':'E','\u1E18':'E','\u1E1A':'E','\u0190':'E','\u018E':'E','\u24BB':'F','\uFF26':'F','\u1E1E':'F','\u0191':'F','\uA77B':'F','\u24BC':'G','\uFF27':'G','\u01F4':'G','\u011C':'G','\u1E20':'G','\u011E':'G','\u0120':'G','\u01E6':'G','\u0122':'G','\u01E4':'G','\u0193':'G','\uA7A0':'G','\uA77D':'G','\uA77E':'G','\u24BD':'H','\uFF28':'H','\u0124':'H','\u1E22':'H','\u1E26':'H','\u021E':'H','\u1E24':'H','\u1E28':'H','\u1E2A':'H','\u0126':'H','\u2C67':'H','\u2C75':'H','\uA78D':'H','\u24BE':'I','\uFF29':'I','\u00CC':'I','\u00CD':'I','\u00CE':'I','\u0128':'I','\u012A':'I','\u012C':'I','\u0130':'I','\u00CF':'I','\u1E2E':'I','\u1EC8':'I','\u01CF':'I','\u0208':'I','\u020A':'I','\u1ECA':'I','\u012E':'I','\u1E2C':'I','\u0197':'I','\u24BF':'J','\uFF2A':'J','\u0134':'J','\u0248':'J','\u24C0':'K','\uFF2B':'K','\u1E30':'K','\u01E8':'K','\u1E32':'K','\u0136':'K','\u1E34':'K','\u0198':'K','\u2C69':'K','\uA740':'K','\uA742':'K','\uA744':'K','\uA7A2':'K','\u24C1':'L','\uFF2C':'L','\u013F':'L','\u0139':'L','\u013D':'L','\u1E36':'L','\u1E38':'L','\u013B':'L','\u1E3C':'L','\u1E3A':'L','\u0141':'L','\u023D':'L','\u2C62':'L','\u2C60':'L','\uA748':'L','\uA746':'L','\uA780':'L','\u01C7':'LJ','\u01C8':'Lj','\u24C2':'M','\uFF2D':'M','\u1E3E':'M','\u1E40':'M','\u1E42':'M','\u2C6E':'M','\u019C':'M','\u24C3':'N','\uFF2E':'N','\u01F8':'N','\u0143':'N','\u00D1':'N','\u1E44':'N','\u0147':'N','\u1E46':'N','\u0145':'N','\u1E4A':'N','\u1E48':'N','\u0220':'N','\u019D':'N','\uA790':'N','\uA7A4':'N','\u01CA':'NJ','\u01CB':'Nj','\u24C4':'O','\uFF2F':'O','\u00D2':'O','\u00D3':'O','\u00D4':'O','\u1ED2':'O','\u1ED0':'O','\u1ED6':'O','\u1ED4':'O','\u00D5':'O','\u1E4C':'O','\u022C':'O','\u1E4E':'O','\u014C':'O','\u1E50':'O','\u1E52':'O','\u014E':'O','\u022E':'O','\u0230':'O','\u00D6':'O','\u022A':'O','\u1ECE':'O','\u0150':'O','\u01D1':'O','\u020C':'O','\u020E':'O','\u01A0':'O','\u1EDC':'O','\u1EDA':'O','\u1EE0':'O','\u1EDE':'O','\u1EE2':'O','\u1ECC':'O','\u1ED8':'O','\u01EA':'O','\u01EC':'O','\u00D8':'O','\u01FE':'O','\u0186':'O','\u019F':'O','\uA74A':'O','\uA74C':'O','\u01A2':'OI','\uA74E':'OO','\u0222':'OU','\u24C5':'P','\uFF30':'P','\u1E54':'P','\u1E56':'P','\u01A4':'P','\u2C63':'P','\uA750':'P','\uA752':'P','\uA754':'P','\u24C6':'Q','\uFF31':'Q','\uA756':'Q','\uA758':'Q','\u024A':'Q','\u24C7':'R','\uFF32':'R','\u0154':'R','\u1E58':'R','\u0158':'R','\u0210':'R','\u0212':'R','\u1E5A':'R','\u1E5C':'R','\u0156':'R','\u1E5E':'R','\u024C':'R','\u2C64':'R','\uA75A':'R','\uA7A6':'R','\uA782':'R','\u24C8':'S','\uFF33':'S','\u1E9E':'S','\u015A':'S','\u1E64':'S','\u015C':'S','\u1E60':'S','\u0160':'S','\u1E66':'S','\u1E62':'S','\u1E68':'S','\u0218':'S','\u015E':'S','\u2C7E':'S','\uA7A8':'S','\uA784':'S','\u24C9':'T','\uFF34':'T','\u1E6A':'T','\u0164':'T','\u1E6C':'T','\u021A':'T','\u0162':'T','\u1E70':'T','\u1E6E':'T','\u0166':'T','\u01AC':'T','\u01AE':'T','\u023E':'T','\uA786':'T','\uA728':'TZ','\u24CA':'U','\uFF35':'U','\u00D9':'U','\u00DA':'U','\u00DB':'U','\u0168':'U','\u1E78':'U','\u016A':'U','\u1E7A':'U','\u016C':'U','\u00DC':'U','\u01DB':'U','\u01D7':'U','\u01D5':'U','\u01D9':'U','\u1EE6':'U','\u016E':'U','\u0170':'U','\u01D3':'U','\u0214':'U','\u0216':'U','\u01AF':'U','\u1EEA':'U','\u1EE8':'U','\u1EEE':'U','\u1EEC':'U','\u1EF0':'U','\u1EE4':'U','\u1E72':'U','\u0172':'U','\u1E76':'U','\u1E74':'U','\u0244':'U','\u24CB':'V','\uFF36':'V','\u1E7C':'V','\u1E7E':'V','\u01B2':'V','\uA75E':'V','\u0245':'V','\uA760':'VY','\u24CC':'W','\uFF37':'W','\u1E80':'W','\u1E82':'W','\u0174':'W','\u1E86':'W','\u1E84':'W','\u1E88':'W','\u2C72':'W','\u24CD':'X','\uFF38':'X','\u1E8A':'X','\u1E8C':'X','\u24CE':'Y','\uFF39':'Y','\u1EF2':'Y','\u00DD':'Y','\u0176':'Y','\u1EF8':'Y','\u0232':'Y','\u1E8E':'Y','\u0178':'Y','\u1EF6':'Y','\u1EF4':'Y','\u01B3':'Y','\u024E':'Y','\u1EFE':'Y','\u24CF':'Z','\uFF3A':'Z','\u0179':'Z','\u1E90':'Z','\u017B':'Z','\u017D':'Z','\u1E92':'Z','\u1E94':'Z','\u01B5':'Z','\u0224':'Z','\u2C7F':'Z','\u2C6B':'Z','\uA762':'Z','\u24D0':'a','\uFF41':'a','\u1E9A':'a','\u00E0':'a','\u00E1':'a','\u00E2':'a','\u1EA7':'a','\u1EA5':'a','\u1EAB':'a','\u1EA9':'a','\u00E3':'a','\u0101':'a','\u0103':'a','\u1EB1':'a','\u1EAF':'a','\u1EB5':'a','\u1EB3':'a','\u0227':'a','\u01E1':'a','\u00E4':'a','\u01DF':'a','\u1EA3':'a','\u00E5':'a','\u01FB':'a','\u01CE':'a','\u0201':'a','\u0203':'a','\u1EA1':'a','\u1EAD':'a','\u1EB7':'a','\u1E01':'a','\u0105':'a','\u2C65':'a','\u0250':'a','\uA733':'aa','\u00E6':'ae','\u01FD':'ae','\u01E3':'ae','\uA735':'ao','\uA737':'au','\uA739':'av','\uA73B':'av','\uA73D':'ay','\u24D1':'b','\uFF42':'b','\u1E03':'b','\u1E05':'b','\u1E07':'b','\u0180':'b','\u0183':'b','\u0253':'b','\u24D2':'c','\uFF43':'c','\u0107':'c','\u0109':'c','\u010B':'c','\u010D':'c','\u00E7':'c','\u1E09':'c','\u0188':'c','\u023C':'c','\uA73F':'c','\u2184':'c','\u24D3':'d','\uFF44':'d','\u1E0B':'d','\u010F':'d','\u1E0D':'d','\u1E11':'d','\u1E13':'d','\u1E0F':'d','\u0111':'d','\u018C':'d','\u0256':'d','\u0257':'d','\uA77A':'d','\u01F3':'dz','\u01C6':'dz','\u24D4':'e','\uFF45':'e','\u00E8':'e','\u00E9':'e','\u00EA':'e','\u1EC1':'e','\u1EBF':'e','\u1EC5':'e','\u1EC3':'e','\u1EBD':'e','\u0113':'e','\u1E15':'e','\u1E17':'e','\u0115':'e','\u0117':'e','\u00EB':'e','\u1EBB':'e','\u011B':'e','\u0205':'e','\u0207':'e','\u1EB9':'e','\u1EC7':'e','\u0229':'e','\u1E1D':'e','\u0119':'e','\u1E19':'e','\u1E1B':'e','\u0247':'e','\u025B':'e','\u01DD':'e','\u24D5':'f','\uFF46':'f','\u1E1F':'f','\u0192':'f','\uA77C':'f','\u24D6':'g','\uFF47':'g','\u01F5':'g','\u011D':'g','\u1E21':'g','\u011F':'g','\u0121':'g','\u01E7':'g','\u0123':'g','\u01E5':'g','\u0260':'g','\uA7A1':'g','\u1D79':'g','\uA77F':'g','\u24D7':'h','\uFF48':'h','\u0125':'h','\u1E23':'h','\u1E27':'h','\u021F':'h','\u1E25':'h','\u1E29':'h','\u1E2B':'h','\u1E96':'h','\u0127':'h','\u2C68':'h','\u2C76':'h','\u0265':'h','\u0195':'hv','\u24D8':'i','\uFF49':'i','\u00EC':'i','\u00ED':'i','\u00EE':'i','\u0129':'i','\u012B':'i','\u012D':'i','\u00EF':'i','\u1E2F':'i','\u1EC9':'i','\u01D0':'i','\u0209':'i','\u020B':'i','\u1ECB':'i','\u012F':'i','\u1E2D':'i','\u0268':'i','\u0131':'i','\u24D9':'j','\uFF4A':'j','\u0135':'j','\u01F0':'j','\u0249':'j','\u24DA':'k','\uFF4B':'k','\u1E31':'k','\u01E9':'k','\u1E33':'k','\u0137':'k','\u1E35':'k','\u0199':'k','\u2C6A':'k','\uA741':'k','\uA743':'k','\uA745':'k','\uA7A3':'k','\u24DB':'l','\uFF4C':'l','\u0140':'l','\u013A':'l','\u013E':'l','\u1E37':'l','\u1E39':'l','\u013C':'l','\u1E3D':'l','\u1E3B':'l','\u017F':'l','\u0142':'l','\u019A':'l','\u026B':'l','\u2C61':'l','\uA749':'l','\uA781':'l','\uA747':'l','\u01C9':'lj','\u24DC':'m','\uFF4D':'m','\u1E3F':'m','\u1E41':'m','\u1E43':'m','\u0271':'m','\u026F':'m','\u24DD':'n','\uFF4E':'n','\u01F9':'n','\u0144':'n','\u00F1':'n','\u1E45':'n','\u0148':'n','\u1E47':'n','\u0146':'n','\u1E4B':'n','\u1E49':'n','\u019E':'n','\u0272':'n','\u0149':'n','\uA791':'n','\uA7A5':'n','\u01CC':'nj','\u24DE':'o','\uFF4F':'o','\u00F2':'o','\u00F3':'o','\u00F4':'o','\u1ED3':'o','\u1ED1':'o','\u1ED7':'o','\u1ED5':'o','\u00F5':'o','\u1E4D':'o','\u022D':'o','\u1E4F':'o','\u014D':'o','\u1E51':'o','\u1E53':'o','\u014F':'o','\u022F':'o','\u0231':'o','\u00F6':'o','\u022B':'o','\u1ECF':'o','\u0151':'o','\u01D2':'o','\u020D':'o','\u020F':'o','\u01A1':'o','\u1EDD':'o','\u1EDB':'o','\u1EE1':'o','\u1EDF':'o','\u1EE3':'o','\u1ECD':'o','\u1ED9':'o','\u01EB':'o','\u01ED':'o','\u00F8':'o','\u01FF':'o','\u0254':'o','\uA74B':'o','\uA74D':'o','\u0275':'o','\u01A3':'oi','\u0223':'ou','\uA74F':'oo','\u24DF':'p','\uFF50':'p','\u1E55':'p','\u1E57':'p','\u01A5':'p','\u1D7D':'p','\uA751':'p','\uA753':'p','\uA755':'p','\u24E0':'q','\uFF51':'q','\u024B':'q','\uA757':'q','\uA759':'q','\u24E1':'r','\uFF52':'r','\u0155':'r','\u1E59':'r','\u0159':'r','\u0211':'r','\u0213':'r','\u1E5B':'r','\u1E5D':'r','\u0157':'r','\u1E5F':'r','\u024D':'r','\u027D':'r','\uA75B':'r','\uA7A7':'r','\uA783':'r','\u24E2':'s','\uFF53':'s','\u00DF':'s','\u015B':'s','\u1E65':'s','\u015D':'s','\u1E61':'s','\u0161':'s','\u1E67':'s','\u1E63':'s','\u1E69':'s','\u0219':'s','\u015F':'s','\u023F':'s','\uA7A9':'s','\uA785':'s','\u1E9B':'s','\u24E3':'t','\uFF54':'t','\u1E6B':'t','\u1E97':'t','\u0165':'t','\u1E6D':'t','\u021B':'t','\u0163':'t','\u1E71':'t','\u1E6F':'t','\u0167':'t','\u01AD':'t','\u0288':'t','\u2C66':'t','\uA787':'t','\uA729':'tz','\u24E4':'u','\uFF55':'u','\u00F9':'u','\u00FA':'u','\u00FB':'u','\u0169':'u','\u1E79':'u','\u016B':'u','\u1E7B':'u','\u016D':'u','\u00FC':'u','\u01DC':'u','\u01D8':'u','\u01D6':'u','\u01DA':'u','\u1EE7':'u','\u016F':'u','\u0171':'u','\u01D4':'u','\u0215':'u','\u0217':'u','\u01B0':'u','\u1EEB':'u','\u1EE9':'u','\u1EEF':'u','\u1EED':'u','\u1EF1':'u','\u1EE5':'u','\u1E73':'u','\u0173':'u','\u1E77':'u','\u1E75':'u','\u0289':'u','\u24E5':'v','\uFF56':'v','\u1E7D':'v','\u1E7F':'v','\u028B':'v','\uA75F':'v','\u028C':'v','\uA761':'vy','\u24E6':'w','\uFF57':'w','\u1E81':'w','\u1E83':'w','\u0175':'w','\u1E87':'w','\u1E85':'w','\u1E98':'w','\u1E89':'w','\u2C73':'w','\u24E7':'x','\uFF58':'x','\u1E8B':'x','\u1E8D':'x','\u24E8':'y','\uFF59':'y','\u1EF3':'y','\u00FD':'y','\u0177':'y','\u1EF9':'y','\u0233':'y','\u1E8F':'y','\u00FF':'y','\u1EF7':'y','\u1E99':'y','\u1EF5':'y','\u01B4':'y','\u024F':'y','\u1EFF':'y','\u24E9':'z','\uFF5A':'z','\u017A':'z','\u1E91':'z','\u017C':'z','\u017E':'z','\u1E93':'z','\u1E95':'z','\u01B6':'z','\u0225':'z','\u0240':'z','\u2C6C':'z','\uA763':'z','\u0386':'\u0391','\u0388':'\u0395','\u0389':'\u0397','\u038A':'\u0399','\u03AA':'\u0399','\u038C':'\u039F','\u038E':'\u03A5','\u03AB':'\u03A5','\u038F':'\u03A9','\u03AC':'\u03B1','\u03AD':'\u03B5','\u03AE':'\u03B7','\u03AF':'\u03B9','\u03CA':'\u03B9','\u0390':'\u03B9','\u03CC':'\u03BF','\u03CD':'\u03C5','\u03CB':'\u03C5','\u03B0':'\u03C5','\u03C9':'\u03C9','\u03C2':'\u03C3'};return diacritics;});S2.define('select2/data/base',['../utils'],function(Utils){function BaseAdapter($element,options){BaseAdapter.__super__.constructor.call(this);}
Utils.Extend(BaseAdapter,Utils.Observable);BaseAdapter.prototype.current=function(callback){throw new Error('The `current` method must be defined in child classes.');};BaseAdapter.prototype.query=function(params,callback){throw new Error('The `query` method must be defined in child classes.');};BaseAdapter.prototype.bind=function(container,$container){};BaseAdapter.prototype.destroy=function(){};BaseAdapter.prototype.generateResultId=function(container,data){var id=container.id+'-result-';id+=Utils.generateChars(4);if(data.id!=null){id+='-'+data.id.toString();}else{id+='-'+Utils.generateChars(4);}
return id;};return BaseAdapter;});S2.define('select2/data/select',['./base','../utils','jquery'],function(BaseAdapter,Utils,$){function SelectAdapter($element,options){this.$element=$element;this.options=options;SelectAdapter.__super__.constructor.call(this);}
Utils.Extend(SelectAdapter,BaseAdapter);SelectAdapter.prototype.current=function(callback){var data=[];var self=this;this.$element.find(':selected').each(function(){var $option=$(this);var option=self.item($option);data.push(option);});callback(data);};SelectAdapter.prototype.select=function(data){var self=this;data.selected=true;if($(data.element).is('option')){data.element.selected=true;this.$element.trigger('change');return;}
if(this.$element.prop('multiple')){this.current(function(currentData){var val=[];data=[data];data.push.apply(data,currentData);for(var d=0;d<data.length;d++){var id=data[d].id;if($.inArray(id,val)===-1){val.push(id);}}
self.$element.val(val);self.$element.trigger('change');});}else{var val=data.id;this.$element.val(val);this.$element.trigger('change');}};SelectAdapter.prototype.unselect=function(data){var self=this;if(!this.$element.prop('multiple')){return;}
data.selected=false;if($(data.element).is('option')){data.element.selected=false;this.$element.trigger('change');return;}
this.current(function(currentData){var val=[];for(var d=0;d<currentData.length;d++){var id=currentData[d].id;if(id!==data.id&&$.inArray(id,val)===-1){val.push(id);}}
self.$element.val(val);self.$element.trigger('change');});};SelectAdapter.prototype.bind=function(container,$container){var self=this;this.container=container;container.on('select',function(params){self.select(params.data);});container.on('unselect',function(params){self.unselect(params.data);});};SelectAdapter.prototype.destroy=function(){this.$element.find('*').each(function(){$.removeData(this,'data');});};SelectAdapter.prototype.query=function(params,callback){var data=[];var self=this;var $options=this.$element.children();$options.each(function(){var $option=$(this);if(!$option.is('option')&&!$option.is('optgroup')){return;}
var option=self.item($option);var matches=self.matches(params,option);if(matches!==null){data.push(matches);}});callback({results:data});};SelectAdapter.prototype.addOptions=function($options){Utils.appendMany(this.$element,$options);};SelectAdapter.prototype.option=function(data){var option;if(data.children){option=document.createElement('optgroup');option.label=data.text;}else{option=document.createElement('option');if(option.textContent!==undefined){option.textContent=data.text;}else{option.innerText=data.text;}}
if(data.id){option.value=data.id;}
if(data.disabled){option.disabled=true;}
if(data.selected){option.selected=true;}
if(data.title){option.title=data.title;}
var $option=$(option);var normalizedData=this._normalizeItem(data);normalizedData.element=option;$.data(option,'data',normalizedData);return $option;};SelectAdapter.prototype.item=function($option){var data={};data=$.data($option[0],'data');if(data!=null){return data;}
if($option.is('option')){data={id:$option.val(),text:$option.text(),disabled:$option.prop('disabled'),selected:$option.prop('selected'),title:$option.prop('title')};}else if($option.is('optgroup')){data={text:$option.prop('label'),children:[],title:$option.prop('title')};var $children=$option.children('option');var children=[];for(var c=0;c<$children.length;c++){var $child=$($children[c]);var child=this.item($child);children.push(child);}
data.children=children;}
data=this._normalizeItem(data);data.element=$option[0];$.data($option[0],'data',data);return data;};SelectAdapter.prototype._normalizeItem=function(item){if(!$.isPlainObject(item)){item={id:item,text:item};}
item=$.extend({},{text:''},item);var defaults={selected:false,disabled:false};if(item.id!=null){item.id=item.id.toString();}
if(item.text!=null){item.text=item.text.toString();}
if(item._resultId==null&&item.id&&this.container!=null){item._resultId=this.generateResultId(this.container,item);}
return $.extend({},defaults,item);};SelectAdapter.prototype.matches=function(params,data){var matcher=this.options.get('matcher');return matcher(params,data);};return SelectAdapter;});S2.define('select2/data/array',['./select','../utils','jquery'],function(SelectAdapter,Utils,$){function ArrayAdapter($element,options){var data=options.get('data')||[];ArrayAdapter.__super__.constructor.call(this,$element,options);this.addOptions(this.convertToOptions(data));}
Utils.Extend(ArrayAdapter,SelectAdapter);ArrayAdapter.prototype.select=function(data){var $option=this.$element.find('option').filter(function(i,elm){return elm.value==data.id.toString();});if($option.length===0){$option=this.option(data);this.addOptions($option);}
ArrayAdapter.__super__.select.call(this,data);};ArrayAdapter.prototype.convertToOptions=function(data){var self=this;var $existing=this.$element.find('option');var existingIds=$existing.map(function(){return self.item($(this)).id;}).get();var $options=[];function onlyItem(item){return function(){return $(this).val()==item.id;};}
for(var d=0;d<data.length;d++){var item=this._normalizeItem(data[d]);if($.inArray(item.id,existingIds)>=0){var $existingOption=$existing.filter(onlyItem(item));var existingData=this.item($existingOption);var newData=$.extend(true,{},item,existingData);var $newOption=this.option(newData);$existingOption.replaceWith($newOption);continue;}
var $option=this.option(item);if(item.children){var $children=this.convertToOptions(item.children);Utils.appendMany($option,$children);}
$options.push($option);}
return $options;};return ArrayAdapter;});S2.define('select2/data/ajax',['./array','../utils','jquery'],function(ArrayAdapter,Utils,$){function AjaxAdapter($element,options){this.ajaxOptions=this._applyDefaults(options.get('ajax'));if(this.ajaxOptions.processResults!=null){this.processResults=this.ajaxOptions.processResults;}
AjaxAdapter.__super__.constructor.call(this,$element,options);}
Utils.Extend(AjaxAdapter,ArrayAdapter);AjaxAdapter.prototype._applyDefaults=function(options){var defaults={data:function(params){return $.extend({},params,{q:params.term});},transport:function(params,success,failure){var $request=$.ajax(params);$request.then(success);$request.fail(failure);return $request;}};return $.extend({},defaults,options,true);};AjaxAdapter.prototype.processResults=function(results){return results;};AjaxAdapter.prototype.query=function(params,callback){var matches=[];var self=this;if(this._request!=null){if($.isFunction(this._request.abort)){this._request.abort();}
this._request=null;}
var options=$.extend({type:'GET'},this.ajaxOptions);if(typeof options.url==='function'){options.url=options.url.call(this.$element,params);}
if(typeof options.data==='function'){options.data=options.data.call(this.$element,params);}
function request(){var $request=options.transport(options,function(data){var results=self.processResults(data,params);if(self.options.get('debug')&&window.console&&console.error){if(!results||!results.results||!$.isArray(results.results)){console.error('Select2: The AJAX results did not return an array in the '+'`results` key of the response.');}}
callback(results);},function(){if($request.status&&$request.status==='0'){return;}
self.trigger('results:message',{message:'errorLoading'});});self._request=$request;}
if(this.ajaxOptions.delay&&params.term!=null){if(this._queryTimeout){window.clearTimeout(this._queryTimeout);}
this._queryTimeout=window.setTimeout(request,this.ajaxOptions.delay);}else{request();}};return AjaxAdapter;});S2.define('select2/data/tags',['jquery'],function($){function Tags(decorated,$element,options){var tags=options.get('tags');var createTag=options.get('createTag');if(createTag!==undefined){this.createTag=createTag;}
var insertTag=options.get('insertTag');if(insertTag!==undefined){this.insertTag=insertTag;}
decorated.call(this,$element,options);if($.isArray(tags)){for(var t=0;t<tags.length;t++){var tag=tags[t];var item=this._normalizeItem(tag);var $option=this.option(item);this.$element.append($option);}}}
Tags.prototype.query=function(decorated,params,callback){var self=this;this._removeOldTags();if(params.term==null||params.page!=null){decorated.call(this,params,callback);return;}
function wrapper(obj,child){var data=obj.results;for(var i=0;i<data.length;i++){var option=data[i];var checkChildren=(option.children!=null&&!wrapper({results:option.children},true));var checkText=option.text===params.term;if(checkText||checkChildren){if(child){return false;}
obj.data=data;callback(obj);return;}}
if(child){return true;}
var tag=self.createTag(params);if(tag!=null){var $option=self.option(tag);$option.attr('data-select2-tag',true);self.addOptions([$option]);self.insertTag(data,tag);}
obj.results=data;callback(obj);}
decorated.call(this,params,wrapper);};Tags.prototype.createTag=function(decorated,params){var term=$.trim(params.term);if(term===''){return null;}
return{id:term,text:term};};Tags.prototype.insertTag=function(_,data,tag){data.unshift(tag);};Tags.prototype._removeOldTags=function(_){var tag=this._lastTag;var $options=this.$element.find('option[data-select2-tag]');$options.each(function(){if(this.selected){return;}
$(this).remove();});};return Tags;});S2.define('select2/data/tokenizer',['jquery'],function($){function Tokenizer(decorated,$element,options){var tokenizer=options.get('tokenizer');if(tokenizer!==undefined){this.tokenizer=tokenizer;}
decorated.call(this,$element,options);}
Tokenizer.prototype.bind=function(decorated,container,$container){decorated.call(this,container,$container);this.$search=container.dropdown.$search||container.selection.$search||$container.find('.select2-search__field');};Tokenizer.prototype.query=function(decorated,params,callback){var self=this;function createAndSelect(data){var item=self._normalizeItem(data);var $existingOptions=self.$element.find('option').filter(function(){return $(this).val()===item.id;});if(!$existingOptions.length){var $option=self.option(item);$option.attr('data-select2-tag',true);self._removeOldTags();self.addOptions([$option]);}
select(item);}
function select(data){self.trigger('select',{data:data});}
params.term=params.term||'';var tokenData=this.tokenizer(params,this.options,createAndSelect);if(tokenData.term!==params.term){if(this.$search.length){this.$search.val(tokenData.term);this.$search.focus();}
params.term=tokenData.term;}
decorated.call(this,params,callback);};Tokenizer.prototype.tokenizer=function(_,params,options,callback){var separators=options.get('tokenSeparators')||[];var term=params.term;var i=0;var createTag=this.createTag||function(params){return{id:params.term,text:params.term};};while(i<term.length){var termChar=term[i];if($.inArray(termChar,separators)===-1){i++;continue;}
var part=term.substr(0,i);var partParams=$.extend({},params,{term:part});var data=createTag(partParams);if(data==null){i++;continue;}
callback(data);term=term.substr(i+1)||'';i=0;}
return{term:term};};return Tokenizer;});S2.define('select2/data/minimumInputLength',[],function(){function MinimumInputLength(decorated,$e,options){this.minimumInputLength=options.get('minimumInputLength');decorated.call(this,$e,options);}
MinimumInputLength.prototype.query=function(decorated,params,callback){params.term=params.term||'';if(params.term.length<this.minimumInputLength){this.trigger('results:message',{message:'inputTooShort',args:{minimum:this.minimumInputLength,input:params.term,params:params}});return;}
decorated.call(this,params,callback);};return MinimumInputLength;});S2.define('select2/data/maximumInputLength',[],function(){function MaximumInputLength(decorated,$e,options){this.maximumInputLength=options.get('maximumInputLength');decorated.call(this,$e,options);}
MaximumInputLength.prototype.query=function(decorated,params,callback){params.term=params.term||'';if(this.maximumInputLength>0&&params.term.length>this.maximumInputLength){this.trigger('results:message',{message:'inputTooLong',args:{maximum:this.maximumInputLength,input:params.term,params:params}});return;}
decorated.call(this,params,callback);};return MaximumInputLength;});S2.define('select2/data/maximumSelectionLength',[],function(){function MaximumSelectionLength(decorated,$e,options){this.maximumSelectionLength=options.get('maximumSelectionLength');decorated.call(this,$e,options);}
MaximumSelectionLength.prototype.query=function(decorated,params,callback){var self=this;this.current(function(currentData){var count=currentData!=null?currentData.length:0;if(self.maximumSelectionLength>0&&count>=self.maximumSelectionLength){self.trigger('results:message',{message:'maximumSelected',args:{maximum:self.maximumSelectionLength}});return;}
decorated.call(self,params,callback);});};return MaximumSelectionLength;});S2.define('select2/dropdown',['jquery','./utils'],function($,Utils){function Dropdown($element,options){this.$element=$element;this.options=options;Dropdown.__super__.constructor.call(this);}
Utils.Extend(Dropdown,Utils.Observable);Dropdown.prototype.render=function(){var $dropdown=$('<span class="select2-dropdown">'+'<span class="select2-results"></span>'+'</span>');$dropdown.attr('dir',this.options.get('dir'));this.$dropdown=$dropdown;return $dropdown;};Dropdown.prototype.bind=function(){};Dropdown.prototype.position=function($dropdown,$container){};Dropdown.prototype.destroy=function(){this.$dropdown.remove();};return Dropdown;});S2.define('select2/dropdown/search',['jquery','../utils'],function($,Utils){function Search(){}
Search.prototype.render=function(decorated){var $rendered=decorated.call(this);var $search=$('<span class="select2-search select2-search--dropdown">'+'<input class="select2-search__field" type="search" tabindex="-1"'+' autocomplete="off" autocorrect="off" autocapitalize="off"'+' spellcheck="false" role="textbox" />'+'</span>');this.$searchContainer=$search;this.$search=$search.find('input');$rendered.prepend($search);return $rendered;};Search.prototype.bind=function(decorated,container,$container){var self=this;decorated.call(this,container,$container);this.$search.on('keydown',function(evt){self.trigger('keypress',evt);self._keyUpPrevented=evt.isDefaultPrevented();});this.$search.on('input',function(evt){$(this).off('keyup');});this.$search.on('keyup input',function(evt){self.handleSearch(evt);});container.on('open',function(){self.$search.attr('tabindex',0);self.$search.focus();window.setTimeout(function(){self.$search.focus();},0);});container.on('close',function(){self.$search.attr('tabindex',-1);self.$search.val('');});container.on('focus',function(){if(container.isOpen()){self.$search.focus();}});container.on('results:all',function(params){if(params.query.term==null||params.query.term===''){var showSearch=self.showSearch(params);if(showSearch){self.$searchContainer.removeClass('select2-search--hide');}else{self.$searchContainer.addClass('select2-search--hide');}}});};Search.prototype.handleSearch=function(evt){if(!this._keyUpPrevented){var input=this.$search.val();this.trigger('query',{term:input});}
this._keyUpPrevented=false;};Search.prototype.showSearch=function(_,params){return true;};return Search;});S2.define('select2/dropdown/hidePlaceholder',[],function(){function HidePlaceholder(decorated,$element,options,dataAdapter){this.placeholder=this.normalizePlaceholder(options.get('placeholder'));decorated.call(this,$element,options,dataAdapter);}
HidePlaceholder.prototype.append=function(decorated,data){data.results=this.removePlaceholder(data.results);decorated.call(this,data);};HidePlaceholder.prototype.normalizePlaceholder=function(_,placeholder){if(typeof placeholder==='string'){placeholder={id:'',text:placeholder};}
return placeholder;};HidePlaceholder.prototype.removePlaceholder=function(_,data){var modifiedData=data.slice(0);for(var d=data.length-1;d>=0;d--){var item=data[d];if(this.placeholder.id===item.id){modifiedData.splice(d,1);}}
return modifiedData;};return HidePlaceholder;});S2.define('select2/dropdown/infiniteScroll',['jquery'],function($){function InfiniteScroll(decorated,$element,options,dataAdapter){this.lastParams={};decorated.call(this,$element,options,dataAdapter);this.$loadingMore=this.createLoadingMore();this.loading=false;}
InfiniteScroll.prototype.append=function(decorated,data){this.$loadingMore.remove();this.loading=false;decorated.call(this,data);if(this.showLoadingMore(data)){this.$results.append(this.$loadingMore);}};InfiniteScroll.prototype.bind=function(decorated,container,$container){var self=this;decorated.call(this,container,$container);container.on('query',function(params){self.lastParams=params;self.loading=true;});container.on('query:append',function(params){self.lastParams=params;self.loading=true;});this.$results.on('scroll',function(){var isLoadMoreVisible=$.contains(document.documentElement,self.$loadingMore[0]);if(self.loading||!isLoadMoreVisible){return;}
var currentOffset=self.$results.offset().top+
self.$results.outerHeight(false);var loadingMoreOffset=self.$loadingMore.offset().top+
self.$loadingMore.outerHeight(false);if(currentOffset+50>=loadingMoreOffset){self.loadMore();}});};InfiniteScroll.prototype.loadMore=function(){this.loading=true;var params=$.extend({},{page:1},this.lastParams);params.page++;this.trigger('query:append',params);};InfiniteScroll.prototype.showLoadingMore=function(_,data){return data.pagination&&data.pagination.more;};InfiniteScroll.prototype.createLoadingMore=function(){var $option=$('<li '+'class="select2-results__option select2-results__option--load-more"'+'role="treeitem" aria-disabled="true"></li>');var message=this.options.get('translations').get('loadingMore');$option.html(message(this.lastParams));return $option;};return InfiniteScroll;});S2.define('select2/dropdown/attachBody',['jquery','../utils'],function($,Utils){function AttachBody(decorated,$element,options){this.$dropdownParent=options.get('dropdownParent')||$(document.body);decorated.call(this,$element,options);}
AttachBody.prototype.bind=function(decorated,container,$container){var self=this;var setupResultsEvents=false;decorated.call(this,container,$container);container.on('open',function(){self._showDropdown();self._attachPositioningHandler(container);if(!setupResultsEvents){setupResultsEvents=true;container.on('results:all',function(){self._positionDropdown();self._resizeDropdown();});container.on('results:append',function(){self._positionDropdown();self._resizeDropdown();});}});container.on('close',function(){self._hideDropdown();self._detachPositioningHandler(container);});this.$dropdownContainer.on('mousedown',function(evt){evt.stopPropagation();});};AttachBody.prototype.destroy=function(decorated){decorated.call(this);this.$dropdownContainer.remove();};AttachBody.prototype.position=function(decorated,$dropdown,$container){$dropdown.attr('class',$container.attr('class'));$dropdown.removeClass('select2');$dropdown.addClass('select2-container--open');$dropdown.css({position:'absolute',top:-999999});this.$container=$container;};AttachBody.prototype.render=function(decorated){var $container=$('<span></span>');var $dropdown=decorated.call(this);$container.append($dropdown);this.$dropdownContainer=$container;return $container;};AttachBody.prototype._hideDropdown=function(decorated){this.$dropdownContainer.detach();};AttachBody.prototype._attachPositioningHandler=function(decorated,container){var self=this;var scrollEvent='scroll.select2.'+container.id;var resizeEvent='resize.select2.'+container.id;var orientationEvent='orientationchange.select2.'+container.id;var $watchers=this.$container.parents().filter(Utils.hasScroll);$watchers.each(function(){$(this).data('select2-scroll-position',{x:$(this).scrollLeft(),y:$(this).scrollTop()});});$watchers.on(scrollEvent,function(ev){var position=$(this).data('select2-scroll-position');$(this).scrollTop(position.y);});$(window).on(scrollEvent+' '+resizeEvent+' '+orientationEvent,function(e){self._positionDropdown();self._resizeDropdown();});};AttachBody.prototype._detachPositioningHandler=function(decorated,container){var scrollEvent='scroll.select2.'+container.id;var resizeEvent='resize.select2.'+container.id;var orientationEvent='orientationchange.select2.'+container.id;var $watchers=this.$container.parents().filter(Utils.hasScroll);$watchers.off(scrollEvent);$(window).off(scrollEvent+' '+resizeEvent+' '+orientationEvent);};AttachBody.prototype._positionDropdown=function(){var $window=$(window);var isCurrentlyAbove=this.$dropdown.hasClass('select2-dropdown--above');var isCurrentlyBelow=this.$dropdown.hasClass('select2-dropdown--below');var newDirection=null;var offset=this.$container.offset();offset.bottom=offset.top+this.$container.outerHeight(false);var container={height:this.$container.outerHeight(false)};container.top=offset.top;container.bottom=offset.top+container.height;var dropdown={height:this.$dropdown.outerHeight(false)};var viewport={top:$window.scrollTop(),bottom:$window.scrollTop()+$window.height()};var enoughRoomAbove=viewport.top<(offset.top-dropdown.height);var enoughRoomBelow=viewport.bottom>(offset.bottom+dropdown.height);var css={left:offset.left,top:container.bottom};var $offsetParent=this.$dropdownParent;if($offsetParent.css('position')==='static'){$offsetParent=$offsetParent.offsetParent();}
var parentOffset=$offsetParent.offset();css.top-=parentOffset.top;css.left-=parentOffset.left;if(!isCurrentlyAbove&&!isCurrentlyBelow){newDirection='below';}
if(!enoughRoomBelow&&enoughRoomAbove&&!isCurrentlyAbove){newDirection='above';}else if(!enoughRoomAbove&&enoughRoomBelow&&isCurrentlyAbove){newDirection='below';}
if(newDirection=='above'||(isCurrentlyAbove&&newDirection!=='below')){css.top=container.top-parentOffset.top-dropdown.height;}
if(newDirection!=null){this.$dropdown.removeClass('select2-dropdown--below select2-dropdown--above').addClass('select2-dropdown--'+newDirection);this.$container.removeClass('select2-container--below select2-container--above').addClass('select2-container--'+newDirection);}
this.$dropdownContainer.css(css);};AttachBody.prototype._resizeDropdown=function(){var css={width:this.$container.outerWidth(false)+'px'};if(this.options.get('dropdownAutoWidth')){css.minWidth=css.width;css.position='relative';css.width='auto';}
this.$dropdown.css(css);};AttachBody.prototype._showDropdown=function(decorated){this.$dropdownContainer.appendTo(this.$dropdownParent);this._positionDropdown();this._resizeDropdown();};return AttachBody;});S2.define('select2/dropdown/minimumResultsForSearch',[],function(){function countResults(data){var count=0;for(var d=0;d<data.length;d++){var item=data[d];if(item.children){count+=countResults(item.children);}else{count++;}}
return count;}
function MinimumResultsForSearch(decorated,$element,options,dataAdapter){this.minimumResultsForSearch=options.get('minimumResultsForSearch');if(this.minimumResultsForSearch<0){this.minimumResultsForSearch=Infinity;}
decorated.call(this,$element,options,dataAdapter);}
MinimumResultsForSearch.prototype.showSearch=function(decorated,params){if(countResults(params.data.results)<this.minimumResultsForSearch){return false;}
return decorated.call(this,params);};return MinimumResultsForSearch;});S2.define('select2/dropdown/selectOnClose',[],function(){function SelectOnClose(){}
SelectOnClose.prototype.bind=function(decorated,container,$container){var self=this;decorated.call(this,container,$container);container.on('close',function(params){self._handleSelectOnClose(params);});};SelectOnClose.prototype._handleSelectOnClose=function(_,params){if(params&&params.originalSelect2Event!=null){var event=params.originalSelect2Event;if(event._type==='select'||event._type==='unselect'){return;}}
var $highlightedResults=this.getHighlightedResults();if($highlightedResults.length<1){return;}
var data=$highlightedResults.data('data');if((data.element!=null&&data.element.selected)||(data.element==null&&data.selected)){return;}
this.trigger('select',{data:data});};return SelectOnClose;});S2.define('select2/dropdown/closeOnSelect',[],function(){function CloseOnSelect(){}
CloseOnSelect.prototype.bind=function(decorated,container,$container){var self=this;decorated.call(this,container,$container);container.on('select',function(evt){self._selectTriggered(evt);});container.on('unselect',function(evt){self._selectTriggered(evt);});};CloseOnSelect.prototype._selectTriggered=function(_,evt){var originalEvent=evt.originalEvent;if(originalEvent&&originalEvent.ctrlKey){return;}
this.trigger('close',{originalEvent:originalEvent,originalSelect2Event:evt});};return CloseOnSelect;});S2.define('select2/i18n/en',[],function(){return{errorLoading:function(){return'The results could not be loaded.';},inputTooLong:function(args){var overChars=args.input.length-args.maximum;var message='Please delete '+overChars+' character';if(overChars!=1){message+='s';}
return message;},inputTooShort:function(args){var remainingChars=args.minimum-args.input.length;var message='Please enter '+remainingChars+' or more characters';return message;},loadingMore:function(){return'Loading more results…';},maximumSelected:function(args){var message='You can only select '+args.maximum+' item';if(args.maximum!=1){message+='s';}
return message;},noResults:function(){return'No results found';},searching:function(){return'Searching…';}};});S2.define('select2/defaults',['jquery','require','./results','./selection/single','./selection/multiple','./selection/placeholder','./selection/allowClear','./selection/search','./selection/eventRelay','./utils','./translation','./diacritics','./data/select','./data/array','./data/ajax','./data/tags','./data/tokenizer','./data/minimumInputLength','./data/maximumInputLength','./data/maximumSelectionLength','./dropdown','./dropdown/search','./dropdown/hidePlaceholder','./dropdown/infiniteScroll','./dropdown/attachBody','./dropdown/minimumResultsForSearch','./dropdown/selectOnClose','./dropdown/closeOnSelect','./i18n/en'],function($,require,ResultsList,SingleSelection,MultipleSelection,Placeholder,AllowClear,SelectionSearch,EventRelay,Utils,Translation,DIACRITICS,SelectData,ArrayData,AjaxData,Tags,Tokenizer,MinimumInputLength,MaximumInputLength,MaximumSelectionLength,Dropdown,DropdownSearch,HidePlaceholder,InfiniteScroll,AttachBody,MinimumResultsForSearch,SelectOnClose,CloseOnSelect,EnglishTranslation){function Defaults(){this.reset();}
Defaults.prototype.apply=function(options){options=$.extend(true,{},this.defaults,options);if(options.dataAdapter==null){if(options.ajax!=null){options.dataAdapter=AjaxData;}else if(options.data!=null){options.dataAdapter=ArrayData;}else{options.dataAdapter=SelectData;}
if(options.minimumInputLength>0){options.dataAdapter=Utils.Decorate(options.dataAdapter,MinimumInputLength);}
if(options.maximumInputLength>0){options.dataAdapter=Utils.Decorate(options.dataAdapter,MaximumInputLength);}
if(options.maximumSelectionLength>0){options.dataAdapter=Utils.Decorate(options.dataAdapter,MaximumSelectionLength);}
if(options.tags){options.dataAdapter=Utils.Decorate(options.dataAdapter,Tags);}
if(options.tokenSeparators!=null||options.tokenizer!=null){options.dataAdapter=Utils.Decorate(options.dataAdapter,Tokenizer);}
if(options.query!=null){var Query=require(options.amdBase+'compat/query');options.dataAdapter=Utils.Decorate(options.dataAdapter,Query);}
if(options.initSelection!=null){var InitSelection=require(options.amdBase+'compat/initSelection');options.dataAdapter=Utils.Decorate(options.dataAdapter,InitSelection);}}
if(options.resultsAdapter==null){options.resultsAdapter=ResultsList;if(options.ajax!=null){options.resultsAdapter=Utils.Decorate(options.resultsAdapter,InfiniteScroll);}
if(options.placeholder!=null){options.resultsAdapter=Utils.Decorate(options.resultsAdapter,HidePlaceholder);}
if(options.selectOnClose){options.resultsAdapter=Utils.Decorate(options.resultsAdapter,SelectOnClose);}}
if(options.dropdownAdapter==null){if(options.multiple){options.dropdownAdapter=Dropdown;}else{var SearchableDropdown=Utils.Decorate(Dropdown,DropdownSearch);options.dropdownAdapter=SearchableDropdown;}
if(options.minimumResultsForSearch!==0){options.dropdownAdapter=Utils.Decorate(options.dropdownAdapter,MinimumResultsForSearch);}
if(options.closeOnSelect){options.dropdownAdapter=Utils.Decorate(options.dropdownAdapter,CloseOnSelect);}
if(options.dropdownCssClass!=null||options.dropdownCss!=null||options.adaptDropdownCssClass!=null){var DropdownCSS=require(options.amdBase+'compat/dropdownCss');options.dropdownAdapter=Utils.Decorate(options.dropdownAdapter,DropdownCSS);}
options.dropdownAdapter=Utils.Decorate(options.dropdownAdapter,AttachBody);}
if(options.selectionAdapter==null){if(options.multiple){options.selectionAdapter=MultipleSelection;}else{options.selectionAdapter=SingleSelection;}
if(options.placeholder!=null){options.selectionAdapter=Utils.Decorate(options.selectionAdapter,Placeholder);}
if(options.allowClear){options.selectionAdapter=Utils.Decorate(options.selectionAdapter,AllowClear);}
if(options.multiple){options.selectionAdapter=Utils.Decorate(options.selectionAdapter,SelectionSearch);}
if(options.containerCssClass!=null||options.containerCss!=null||options.adaptContainerCssClass!=null){var ContainerCSS=require(options.amdBase+'compat/containerCss');options.selectionAdapter=Utils.Decorate(options.selectionAdapter,ContainerCSS);}
options.selectionAdapter=Utils.Decorate(options.selectionAdapter,EventRelay);}
if(typeof options.language==='string'){if(options.language.indexOf('-')>0){var languageParts=options.language.split('-');var baseLanguage=languageParts[0];options.language=[options.language,baseLanguage];}else{options.language=[options.language];}}
if($.isArray(options.language)){var languages=new Translation();options.language.push('en');var languageNames=options.language;for(var l=0;l<languageNames.length;l++){var name=languageNames[l];var language={};try{language=Translation.loadPath(name);}catch(e){try{name=this.defaults.amdLanguageBase+name;language=Translation.loadPath(name);}catch(ex){if(options.debug&&window.console&&console.warn){console.warn('Select2: The language file for "'+name+'" could not be '+'automatically loaded. A fallback will be used instead.');}
continue;}}
languages.extend(language);}
options.translations=languages;}else{var baseTranslation=Translation.loadPath(this.defaults.amdLanguageBase+'en');var customTranslation=new Translation(options.language);customTranslation.extend(baseTranslation);options.translations=customTranslation;}
return options;};Defaults.prototype.reset=function(){function stripDiacritics(text){function match(a){return DIACRITICS[a]||a;}
return text.replace(/[^\u0000-\u007E]/g,match);}
function matcher(params,data){if($.trim(params.term)===''){return data;}
if(data.children&&data.children.length>0){var match=$.extend(true,{},data);for(var c=data.children.length-1;c>=0;c--){var child=data.children[c];var matches=matcher(params,child);if(matches==null){match.children.splice(c,1);}}
if(match.children.length>0){return match;}
return matcher(params,match);}
var original=stripDiacritics(data.text).toUpperCase();var term=stripDiacritics(params.term).toUpperCase();if(original.indexOf(term)>-1){return data;}
return null;}
this.defaults={amdBase:'./',amdLanguageBase:'./i18n/',closeOnSelect:true,debug:false,dropdownAutoWidth:false,escapeMarkup:Utils.escapeMarkup,language:EnglishTranslation,matcher:matcher,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:false,sorter:function(data){return data;},templateResult:function(result){return result.text;},templateSelection:function(selection){return selection.text;},theme:'default',width:'resolve'};};Defaults.prototype.set=function(key,value){var camelKey=$.camelCase(key);var data={};data[camelKey]=value;var convertedData=Utils._convertData(data);$.extend(this.defaults,convertedData);};var defaults=new Defaults();return defaults;});S2.define('select2/options',['require','jquery','./defaults','./utils'],function(require,$,Defaults,Utils){function Options(options,$element){this.options=options;if($element!=null){this.fromElement($element);}
this.options=Defaults.apply(this.options);if($element&&$element.is('input')){var InputCompat=require(this.get('amdBase')+'compat/inputData');this.options.dataAdapter=Utils.Decorate(this.options.dataAdapter,InputCompat);}}
Options.prototype.fromElement=function($e){var excludedData=['select2'];if(this.options.multiple==null){this.options.multiple=$e.prop('multiple');}
if(this.options.disabled==null){this.options.disabled=$e.prop('disabled');}
if(this.options.language==null){if($e.prop('lang')){this.options.language=$e.prop('lang').toLowerCase();}else if($e.closest('[lang]').prop('lang')){this.options.language=$e.closest('[lang]').prop('lang');}}
if(this.options.dir==null){if($e.prop('dir')){this.options.dir=$e.prop('dir');}else if($e.closest('[dir]').prop('dir')){this.options.dir=$e.closest('[dir]').prop('dir');}else{this.options.dir='ltr';}}
$e.prop('disabled',this.options.disabled);$e.prop('multiple',this.options.multiple);if($e.data('select2Tags')){if(this.options.debug&&window.console&&console.warn){console.warn('Select2: The `data-select2-tags` attribute has been changed to '+'use the `data-data` and `data-tags="true"` attributes and will be '+'removed in future versions of Select2.');}
$e.data('data',$e.data('select2Tags'));$e.data('tags',true);}
if($e.data('ajaxUrl')){if(this.options.debug&&window.console&&console.warn){console.warn('Select2: The `data-ajax-url` attribute has been changed to '+'`data-ajax--url` and support for the old attribute will be removed'+' in future versions of Select2.');}
$e.attr('ajax--url',$e.data('ajaxUrl'));$e.data('ajax--url',$e.data('ajaxUrl'));}
var dataset={};if($.fn.jquery&&$.fn.jquery.substr(0,2)=='1.'&&$e[0].dataset){dataset=$.extend(true,{},$e[0].dataset,$e.data());}else{dataset=$e.data();}
var data=$.extend(true,{},dataset);data=Utils._convertData(data);for(var key in data){if($.inArray(key,excludedData)>-1){continue;}
if($.isPlainObject(this.options[key])){$.extend(this.options[key],data[key]);}else{this.options[key]=data[key];}}
return this;};Options.prototype.get=function(key){return this.options[key];};Options.prototype.set=function(key,val){this.options[key]=val;};return Options;});S2.define('select2/core',['jquery','./options','./utils','./keys'],function($,Options,Utils,KEYS){var Select2=function($element,options){if($element.data('select2')!=null){$element.data('select2').destroy();}
this.$element=$element;this.id=this._generateId($element);options=options||{};this.options=new Options(options,$element);Select2.__super__.constructor.call(this);var tabindex=$element.attr('tabindex')||0;$element.data('old-tabindex',tabindex);$element.attr('tabindex','-1');var DataAdapter=this.options.get('dataAdapter');this.dataAdapter=new DataAdapter($element,this.options);var $container=this.render();this._placeContainer($container);var SelectionAdapter=this.options.get('selectionAdapter');this.selection=new SelectionAdapter($element,this.options);this.$selection=this.selection.render();this.selection.position(this.$selection,$container);var DropdownAdapter=this.options.get('dropdownAdapter');this.dropdown=new DropdownAdapter($element,this.options);this.$dropdown=this.dropdown.render();this.dropdown.position(this.$dropdown,$container);var ResultsAdapter=this.options.get('resultsAdapter');this.results=new ResultsAdapter($element,this.options,this.dataAdapter);this.$results=this.results.render();this.results.position(this.$results,this.$dropdown);var self=this;this._bindAdapters();this._registerDomEvents();this._registerDataEvents();this._registerSelectionEvents();this._registerDropdownEvents();this._registerResultsEvents();this._registerEvents();this.dataAdapter.current(function(initialData){self.trigger('selection:update',{data:initialData});});$element.addClass('select2-hidden-accessible');$element.attr('aria-hidden','true');this._syncAttributes();$element.data('select2',this);};Utils.Extend(Select2,Utils.Observable);Select2.prototype._generateId=function($element){var id='';if($element.attr('id')!=null){id=$element.attr('id');}else if($element.attr('name')!=null){id=$element.attr('name')+'-'+Utils.generateChars(2);}else{id=Utils.generateChars(4);}
id=id.replace(/(:|\.|\[|\]|,)/g,'');id='select2-'+id;return id;};Select2.prototype._placeContainer=function($container){$container.insertAfter(this.$element);var width=this._resolveWidth(this.$element,this.options.get('width'));if(width!=null){$container.css('width',width);}};Select2.prototype._resolveWidth=function($element,method){var WIDTH=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if(method=='resolve'){var styleWidth=this._resolveWidth($element,'style');if(styleWidth!=null){return styleWidth;}
return this._resolveWidth($element,'element');}
if(method=='element'){var elementWidth=$element.outerWidth(false);if(elementWidth<=0){return'auto';}
return elementWidth+'px';}
if(method=='style'){var style=$element.attr('style');if(typeof(style)!=='string'){return null;}
var attrs=style.split(';');for(var i=0,l=attrs.length;i<l;i=i+1){var attr=attrs[i].replace(/\s/g,'');var matches=attr.match(WIDTH);if(matches!==null&&matches.length>=1){return matches[1];}}
return null;}
return method;};Select2.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container);this.selection.bind(this,this.$container);this.dropdown.bind(this,this.$container);this.results.bind(this,this.$container);};Select2.prototype._registerDomEvents=function(){var self=this;this.$element.on('change.select2',function(){self.dataAdapter.current(function(data){self.trigger('selection:update',{data:data});});});this.$element.on('focus.select2',function(evt){self.trigger('focus',evt);});this._syncA=Utils.bind(this._syncAttributes,this);this._syncS=Utils.bind(this._syncSubtree,this);if(this.$element[0].attachEvent){this.$element[0].attachEvent('onpropertychange',this._syncA);}
var observer=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(observer!=null){this._observer=new observer(function(mutations){$.each(mutations,self._syncA);$.each(mutations,self._syncS);});this._observer.observe(this.$element[0],{attributes:true,childList:true,subtree:false});}else if(this.$element[0].addEventListener){this.$element[0].addEventListener('DOMAttrModified',self._syncA,false);this.$element[0].addEventListener('DOMNodeInserted',self._syncS,false);this.$element[0].addEventListener('DOMNodeRemoved',self._syncS,false);}};Select2.prototype._registerDataEvents=function(){var self=this;this.dataAdapter.on('*',function(name,params){self.trigger(name,params);});};Select2.prototype._registerSelectionEvents=function(){var self=this;var nonRelayEvents=['toggle','focus'];this.selection.on('toggle',function(){self.toggleDropdown();});this.selection.on('focus',function(params){self.focus(params);});this.selection.on('*',function(name,params){if($.inArray(name,nonRelayEvents)!==-1){return;}
self.trigger(name,params);});};Select2.prototype._registerDropdownEvents=function(){var self=this;this.dropdown.on('*',function(name,params){self.trigger(name,params);});};Select2.prototype._registerResultsEvents=function(){var self=this;this.results.on('*',function(name,params){self.trigger(name,params);});};Select2.prototype._registerEvents=function(){var self=this;this.on('open',function(){self.$container.addClass('select2-container--open');});this.on('close',function(){self.$container.removeClass('select2-container--open');});this.on('enable',function(){self.$container.removeClass('select2-container--disabled');});this.on('disable',function(){self.$container.addClass('select2-container--disabled');});this.on('blur',function(){self.$container.removeClass('select2-container--focus');});this.on('query',function(params){if(!self.isOpen()){self.trigger('open',{});}
this.dataAdapter.query(params,function(data){self.trigger('results:all',{data:data,query:params});});});this.on('query:append',function(params){this.dataAdapter.query(params,function(data){self.trigger('results:append',{data:data,query:params});});});this.on('keypress',function(evt){var key=evt.which;if(self.isOpen()){if(key===KEYS.ESC||key===KEYS.TAB||(key===KEYS.UP&&evt.altKey)){self.close();evt.preventDefault();}else if(key===KEYS.ENTER){self.trigger('results:select',{});evt.preventDefault();}else if((key===KEYS.SPACE&&evt.ctrlKey)){self.trigger('results:toggle',{});evt.preventDefault();}else if(key===KEYS.UP){self.trigger('results:previous',{});evt.preventDefault();}else if(key===KEYS.DOWN){self.trigger('results:next',{});evt.preventDefault();}}else{if(key===KEYS.ENTER||key===KEYS.SPACE||(key===KEYS.DOWN&&evt.altKey)){self.open();evt.preventDefault();}}});};Select2.prototype._syncAttributes=function(){this.options.set('disabled',this.$element.prop('disabled'));if(this.options.get('disabled')){if(this.isOpen()){this.close();}
this.trigger('disable',{});}else{this.trigger('enable',{});}};Select2.prototype._syncSubtree=function(evt,mutations){var changed=false;var self=this;if(evt&&evt.target&&(evt.target.nodeName!=='OPTION'&&evt.target.nodeName!=='OPTGROUP')){return;}
if(!mutations){changed=true;}else if(mutations.addedNodes&&mutations.addedNodes.length>0){for(var n=0;n<mutations.addedNodes.length;n++){var node=mutations.addedNodes[n];if(node.selected){changed=true;}}}else if(mutations.removedNodes&&mutations.removedNodes.length>0){changed=true;}
if(changed){this.dataAdapter.current(function(currentData){self.trigger('selection:update',{data:currentData});});}};Select2.prototype.trigger=function(name,args){var actualTrigger=Select2.__super__.trigger;var preTriggerMap={'open':'opening','close':'closing','select':'selecting','unselect':'unselecting'};if(args===undefined){args={};}
if(name in preTriggerMap){var preTriggerName=preTriggerMap[name];var preTriggerArgs={prevented:false,name:name,args:args};actualTrigger.call(this,preTriggerName,preTriggerArgs);if(preTriggerArgs.prevented){args.prevented=true;return;}}
actualTrigger.call(this,name,args);};Select2.prototype.toggleDropdown=function(){if(this.options.get('disabled')){return;}
if(this.isOpen()){this.close();}else{this.open();}};Select2.prototype.open=function(){if(this.isOpen()){return;}
this.trigger('query',{});};Select2.prototype.close=function(){if(!this.isOpen()){return;}
this.trigger('close',{});};Select2.prototype.isOpen=function(){return this.$container.hasClass('select2-container--open');};Select2.prototype.hasFocus=function(){return this.$container.hasClass('select2-container--focus');};Select2.prototype.focus=function(data){if(this.hasFocus()){return;}
this.$container.addClass('select2-container--focus');this.trigger('focus',{});};Select2.prototype.enable=function(args){if(this.options.get('debug')&&window.console&&console.warn){console.warn('Select2: The `select2("enable")` method has been deprecated and will'+' be removed in later Select2 versions. Use $element.prop("disabled")'+' instead.');}
if(args==null||args.length===0){args=[true];}
var disabled=!args[0];this.$element.prop('disabled',disabled);};Select2.prototype.data=function(){if(this.options.get('debug')&&arguments.length>0&&window.console&&console.warn){console.warn('Select2: Data can no longer be set using `select2("data")`. You '+'should consider setting the value instead using `$element.val()`.');}
var data=[];this.dataAdapter.current(function(currentData){data=currentData;});return data;};Select2.prototype.val=function(args){if(this.options.get('debug')&&window.console&&console.warn){console.warn('Select2: The `select2("val")` method has been deprecated and will be'+' removed in later Select2 versions. Use $element.val() instead.');}
if(args==null||args.length===0){return this.$element.val();}
var newVal=args[0];if($.isArray(newVal)){newVal=$.map(newVal,function(obj){return obj.toString();});}
this.$element.val(newVal).trigger('change');};Select2.prototype.destroy=function(){this.$container.remove();if(this.$element[0].detachEvent){this.$element[0].detachEvent('onpropertychange',this._syncA);}
if(this._observer!=null){this._observer.disconnect();this._observer=null;}else if(this.$element[0].removeEventListener){this.$element[0].removeEventListener('DOMAttrModified',this._syncA,false);this.$element[0].removeEventListener('DOMNodeInserted',this._syncS,false);this.$element[0].removeEventListener('DOMNodeRemoved',this._syncS,false);}
this._syncA=null;this._syncS=null;this.$element.off('.select2');this.$element.attr('tabindex',this.$element.data('old-tabindex'));this.$element.removeClass('select2-hidden-accessible');this.$element.attr('aria-hidden','false');this.$element.removeData('select2');this.dataAdapter.destroy();this.selection.destroy();this.dropdown.destroy();this.results.destroy();this.dataAdapter=null;this.selection=null;this.dropdown=null;this.results=null;};Select2.prototype.render=function(){var $container=$('<span class="select2 select2-container">'+'<span class="selection"></span>'+'<span class="dropdown-wrapper" aria-hidden="true"></span>'+'</span>');$container.attr('dir',this.options.get('dir'));this.$container=$container;this.$container.addClass('select2-container--'+this.options.get('theme'));$container.data('element',this.$element);return $container;};return Select2;});S2.define('select2/compat/utils',['jquery'],function($){function syncCssClasses($dest,$src,adapter){var classes,replacements=[],adapted;classes=$.trim($dest.attr('class'));if(classes){classes=''+classes;$(classes.split(/\s+/)).each(function(){if(this.indexOf('select2-')===0){replacements.push(this);}});}
classes=$.trim($src.attr('class'));if(classes){classes=''+classes;$(classes.split(/\s+/)).each(function(){if(this.indexOf('select2-')!==0){adapted=adapter(this);if(adapted!=null){replacements.push(adapted);}}});}
$dest.attr('class',replacements.join(' '));}
return{syncCssClasses:syncCssClasses};});S2.define('select2/compat/containerCss',['jquery','./utils'],function($,CompatUtils){function _containerAdapter(clazz){return null;}
function ContainerCSS(){}
ContainerCSS.prototype.render=function(decorated){var $container=decorated.call(this);var containerCssClass=this.options.get('containerCssClass')||'';if($.isFunction(containerCssClass)){containerCssClass=containerCssClass(this.$element);}
var containerCssAdapter=this.options.get('adaptContainerCssClass');containerCssAdapter=containerCssAdapter||_containerAdapter;if(containerCssClass.indexOf(':all:')!==-1){containerCssClass=containerCssClass.replace(':all:','');var _cssAdapter=containerCssAdapter;containerCssAdapter=function(clazz){var adapted=_cssAdapter(clazz);if(adapted!=null){return adapted+' '+clazz;}
return clazz;};}
var containerCss=this.options.get('containerCss')||{};if($.isFunction(containerCss)){containerCss=containerCss(this.$element);}
CompatUtils.syncCssClasses($container,this.$element,containerCssAdapter);$container.css(containerCss);$container.addClass(containerCssClass);return $container;};return ContainerCSS;});S2.define('select2/compat/dropdownCss',['jquery','./utils'],function($,CompatUtils){function _dropdownAdapter(clazz){return null;}
function DropdownCSS(){}
DropdownCSS.prototype.render=function(decorated){var $dropdown=decorated.call(this);var dropdownCssClass=this.options.get('dropdownCssClass')||'';if($.isFunction(dropdownCssClass)){dropdownCssClass=dropdownCssClass(this.$element);}
var dropdownCssAdapter=this.options.get('adaptDropdownCssClass');dropdownCssAdapter=dropdownCssAdapter||_dropdownAdapter;if(dropdownCssClass.indexOf(':all:')!==-1){dropdownCssClass=dropdownCssClass.replace(':all:','');var _cssAdapter=dropdownCssAdapter;dropdownCssAdapter=function(clazz){var adapted=_cssAdapter(clazz);if(adapted!=null){return adapted+' '+clazz;}
return clazz;};}
var dropdownCss=this.options.get('dropdownCss')||{};if($.isFunction(dropdownCss)){dropdownCss=dropdownCss(this.$element);}
CompatUtils.syncCssClasses($dropdown,this.$element,dropdownCssAdapter);$dropdown.css(dropdownCss);$dropdown.addClass(dropdownCssClass);return $dropdown;};return DropdownCSS;});S2.define('select2/compat/initSelection',['jquery'],function($){function InitSelection(decorated,$element,options){if(options.get('debug')&&window.console&&console.warn){console.warn('Select2: The `initSelection` option has been deprecated in favor'+' of a custom data adapter that overrides the `current` method. '+'This method is now called multiple times instead of a single '+'time when the instance is initialized. Support will be removed '+'for the `initSelection` option in future versions of Select2');}
this.initSelection=options.get('initSelection');this._isInitialized=false;decorated.call(this,$element,options);}
InitSelection.prototype.current=function(decorated,callback){var self=this;if(this._isInitialized){decorated.call(this,callback);return;}
this.initSelection.call(null,this.$element,function(data){self._isInitialized=true;if(!$.isArray(data)){data=[data];}
callback(data);});};return InitSelection;});S2.define('select2/compat/inputData',['jquery'],function($){function InputData(decorated,$element,options){this._currentData=[];this._valueSeparator=options.get('valueSeparator')||',';if($element.prop('type')==='hidden'){if(options.get('debug')&&console&&console.warn){console.warn('Select2: Using a hidden input with Select2 is no longer '+'supported and may stop working in the future. It is recommended '+'to use a `<select>` element instead.');}}
decorated.call(this,$element,options);}
InputData.prototype.current=function(_,callback){function getSelected(data,selectedIds){var selected=[];if(data.selected||$.inArray(data.id,selectedIds)!==-1){data.selected=true;selected.push(data);}else{data.selected=false;}
if(data.children){selected.push.apply(selected,getSelected(data.children,selectedIds));}
return selected;}
var selected=[];for(var d=0;d<this._currentData.length;d++){var data=this._currentData[d];selected.push.apply(selected,getSelected(data,this.$element.val().split(this._valueSeparator)));}
callback(selected);};InputData.prototype.select=function(_,data){if(!this.options.get('multiple')){this.current(function(allData){$.map(allData,function(data){data.selected=false;});});this.$element.val(data.id);this.$element.trigger('change');}else{var value=this.$element.val();value+=this._valueSeparator+data.id;this.$element.val(value);this.$element.trigger('change');}};InputData.prototype.unselect=function(_,data){var self=this;data.selected=false;this.current(function(allData){var values=[];for(var d=0;d<allData.length;d++){var item=allData[d];if(data.id==item.id){continue;}
values.push(item.id);}
self.$element.val(values.join(self._valueSeparator));self.$element.trigger('change');});};InputData.prototype.query=function(_,params,callback){var results=[];for(var d=0;d<this._currentData.length;d++){var data=this._currentData[d];var matches=this.matches(params,data);if(matches!==null){results.push(matches);}}
callback({results:results});};InputData.prototype.addOptions=function(_,$options){var options=$.map($options,function($option){return $.data($option[0],'data');});this._currentData.push.apply(this._currentData,options);};return InputData;});S2.define('select2/compat/matcher',['jquery'],function($){function oldMatcher(matcher){function wrappedMatcher(params,data){var match=$.extend(true,{},data);if(params.term==null||$.trim(params.term)===''){return match;}
if(data.children){for(var c=data.children.length-1;c>=0;c--){var child=data.children[c];var doesMatch=matcher(params.term,child.text,child);if(!doesMatch){match.children.splice(c,1);}}
if(match.children.length>0){return match;}}
if(matcher(params.term,data.text,data)){return match;}
return null;}
return wrappedMatcher;}
return oldMatcher;});S2.define('select2/compat/query',[],function(){function Query(decorated,$element,options){if(options.get('debug')&&window.console&&console.warn){console.warn('Select2: The `query` option has been deprecated in favor of a '+'custom data adapter that overrides the `query` method. Support '+'will be removed for the `query` option in future versions of '+'Select2.');}
decorated.call(this,$element,options);}
Query.prototype.query=function(_,params,callback){params.callback=callback;var query=this.options.get('query');query.call(null,params);};return Query;});S2.define('select2/dropdown/attachContainer',[],function(){function AttachContainer(decorated,$element,options){decorated.call(this,$element,options);}
AttachContainer.prototype.position=function(decorated,$dropdown,$container){var $dropdownContainer=$container.find('.dropdown-wrapper');$dropdownContainer.append($dropdown);$dropdown.addClass('select2-dropdown--below');$container.addClass('select2-container--below');};return AttachContainer;});S2.define('select2/dropdown/stopPropagation',[],function(){function StopPropagation(){}
StopPropagation.prototype.bind=function(decorated,container,$container){decorated.call(this,container,$container);var stoppedEvents=['blur','change','click','dblclick','focus','focusin','focusout','input','keydown','keyup','keypress','mousedown','mouseenter','mouseleave','mousemove','mouseover','mouseup','search','touchend','touchstart'];this.$dropdown.on(stoppedEvents.join(' '),function(evt){evt.stopPropagation();});};return StopPropagation;});S2.define('select2/selection/stopPropagation',[],function(){function StopPropagation(){}
StopPropagation.prototype.bind=function(decorated,container,$container){decorated.call(this,container,$container);var stoppedEvents=['blur','change','click','dblclick','focus','focusin','focusout','input','keydown','keyup','keypress','mousedown','mouseenter','mouseleave','mousemove','mouseover','mouseup','search','touchend','touchstart'];this.$selection.on(stoppedEvents.join(' '),function(evt){evt.stopPropagation();});};return StopPropagation;});
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */
(function(factory){if(typeof S2.define==='function'&&S2.define.amd){S2.define('jquery-mousewheel',['jquery'],factory);}else if(typeof exports==='object'){module.exports=factory;}else{factory(jQuery);}}(function($){var toFix=['wheel','mousewheel','DOMMouseScroll','MozMousePixelScroll'],toBind=('onwheel'in document||document.documentMode>=9)?['wheel']:['mousewheel','DomMouseScroll','MozMousePixelScroll'],slice=Array.prototype.slice,nullLowestDeltaTimeout,lowestDelta;if($.event.fixHooks){for(var i=toFix.length;i;){$.event.fixHooks[toFix[--i]]=$.event.mouseHooks;}}
var special=$.event.special.mousewheel={version:'3.1.12',setup:function(){if(this.addEventListener){for(var i=toBind.length;i;){this.addEventListener(toBind[--i],handler,false);}}else{this.onmousewheel=handler;}
$.data(this,'mousewheel-line-height',special.getLineHeight(this));$.data(this,'mousewheel-page-height',special.getPageHeight(this));},teardown:function(){if(this.removeEventListener){for(var i=toBind.length;i;){this.removeEventListener(toBind[--i],handler,false);}}else{this.onmousewheel=null;}
$.removeData(this,'mousewheel-line-height');$.removeData(this,'mousewheel-page-height');},getLineHeight:function(elem){var $elem=$(elem),$parent=$elem['offsetParent'in $.fn?'offsetParent':'parent']();if(!$parent.length){$parent=$('body');}
return parseInt($parent.css('fontSize'),10)||parseInt($elem.css('fontSize'),10)||16;},getPageHeight:function(elem){return $(elem).height();},settings:{adjustOldDeltas:true,normalizeOffset:true}};$.fn.extend({mousewheel:function(fn){return fn?this.bind('mousewheel',fn):this.trigger('mousewheel');},unmousewheel:function(fn){return this.unbind('mousewheel',fn);}});function handler(event){var orgEvent=event||window.event,args=slice.call(arguments,1),delta=0,deltaX=0,deltaY=0,absDelta=0,offsetX=0,offsetY=0;event=$.event.fix(orgEvent);event.type='mousewheel';if('detail'in orgEvent){deltaY=orgEvent.detail*-1;}
if('wheelDelta'in orgEvent){deltaY=orgEvent.wheelDelta;}
if('wheelDeltaY'in orgEvent){deltaY=orgEvent.wheelDeltaY;}
if('wheelDeltaX'in orgEvent){deltaX=orgEvent.wheelDeltaX*-1;}
if('axis'in orgEvent&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaX=deltaY*-1;deltaY=0;}
delta=deltaY===0?deltaX:deltaY;if('deltaY'in orgEvent){deltaY=orgEvent.deltaY*-1;delta=deltaY;}
if('deltaX'in orgEvent){deltaX=orgEvent.deltaX;if(deltaY===0){delta=deltaX*-1;}}
if(deltaY===0&&deltaX===0){return;}
if(orgEvent.deltaMode===1){var lineHeight=$.data(this,'mousewheel-line-height');delta*=lineHeight;deltaY*=lineHeight;deltaX*=lineHeight;}else if(orgEvent.deltaMode===2){var pageHeight=$.data(this,'mousewheel-page-height');delta*=pageHeight;deltaY*=pageHeight;deltaX*=pageHeight;}
absDelta=Math.max(Math.abs(deltaY),Math.abs(deltaX));if(!lowestDelta||absDelta<lowestDelta){lowestDelta=absDelta;if(shouldAdjustOldDeltas(orgEvent,absDelta)){lowestDelta/=40;}}
if(shouldAdjustOldDeltas(orgEvent,absDelta)){delta/=40;deltaX/=40;deltaY/=40;}
delta=Math[delta>=1?'floor':'ceil'](delta/lowestDelta);deltaX=Math[deltaX>=1?'floor':'ceil'](deltaX/lowestDelta);deltaY=Math[deltaY>=1?'floor':'ceil'](deltaY/lowestDelta);if(special.settings.normalizeOffset&&this.getBoundingClientRect){var boundingRect=this.getBoundingClientRect();offsetX=event.clientX-boundingRect.left;offsetY=event.clientY-boundingRect.top;}
event.deltaX=deltaX;event.deltaY=deltaY;event.deltaFactor=lowestDelta;event.offsetX=offsetX;event.offsetY=offsetY;event.deltaMode=0;args.unshift(event,delta,deltaX,deltaY);if(nullLowestDeltaTimeout){clearTimeout(nullLowestDeltaTimeout);}
nullLowestDeltaTimeout=setTimeout(nullLowestDelta,200);return($.event.dispatch||$.event.handle).apply(this,args);}
function nullLowestDelta(){lowestDelta=null;}
function shouldAdjustOldDeltas(orgEvent,absDelta){return special.settings.adjustOldDeltas&&orgEvent.type==='mousewheel'&&absDelta%120===0;}}));S2.define('jquery.select2',['jquery','jquery-mousewheel','./select2/core','./select2/defaults'],function($,_,Select2,Defaults){if($.fn.select2==null){var thisMethods=['open','close','destroy'];$.fn.select2=function(options){options=options||{};if(typeof options==='object'){this.each(function(){var instanceOptions=$.extend(true,{},options);var instance=new Select2($(this),instanceOptions);});return this;}else if(typeof options==='string'){var ret;var args=Array.prototype.slice.call(arguments,1);this.each(function(){var instance=$(this).data('select2');if(instance==null&&window.console&&console.error){console.error('The select2(\''+options+'\') method was called on an '+'element that is not using Select2.');}
ret=instance[options].apply(instance,args);});if($.inArray(options,thisMethods)>-1){return this;}
return ret;}else{throw new Error('Invalid arguments for Select2: '+options);}};}
if($.fn.select2.defaults==null){$.fn.select2.defaults=Defaults;}
return Select2;});return{define:S2.define,require:S2.require};}());var select2=S2.require('jquery.select2');jQuery.fn.select2.amd=S2;return select2;}));;
/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2016
 * @version 2.0.9
 *
 * Additional enhancements for Select2 widget extension for Yii 2.0.
 *
 * Author: Kartik Visweswaran
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */
var initS2ToggleAll=function(){},initS2Order=function(){},initS2Loading=function(){},initS2Open=function(){},initS2Unselect=function(){};(function(factory){"use strict";if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else{if(typeof module==='object'&&module.exports){module.exports=factory(require('jquery'));}else{factory(window.jQuery);}}}(function($){"use strict";initS2ToggleAll=function(id){var $el=$('#'+id),togId='#'+'s2-togall-'+id,$tog=$(togId);if(!$el.attr('multiple')){return;}
$el.on('select2:open.krajees2',function(){if($tog.parent().attr('id')==='parent-'+togId||!$el.attr('multiple')){return;}
$('#select2-'+id+'-results').closest('.select2-dropdown').prepend($tog);$('#parent-'+togId).remove();}).on('change.krajeeselect2',function(){if(!$el.attr('multiple')){return;}
var tot=0,sel=$el.val()?$el.val().length:0;$tog.removeClass('s2-togall-select s2-togall-unselect');$el.find('option:enabled').each(function(){if($(this).val().length){tot++;}});if(tot===0||sel!==tot){$tog.addClass('s2-togall-select');}else{$tog.addClass('s2-togall-unselect');}});$tog.off('.krajees2').on('click.krajees2',function(){var isSelect=$tog.hasClass('s2-togall-select'),flag=true,ev='selectall';if(!isSelect){flag=false;ev='unselectall';}
$el.find('option').each(function(){var $opt=$(this);if(!$opt.attr('disabled')&&$opt.val().length){$opt.prop('selected',flag);}});$el.select2('close').trigger('krajeeselect2:'+ev).trigger('change');});};initS2Open=function(){var $el=$(this),$drop=$(".select2-container--open"),cssClasses,i,$src=$el.parents("[class*='has-']");if($src.length){cssClasses=$src[0].className.split(/\s+/);for(i=0;i<cssClasses.length;i++){if(cssClasses[i].match("has-")){$drop.removeClass("has-success has-error has-warning").addClass(cssClasses[i]);}}}
if($el.data('unselecting')){$el.removeData('unselecting');$el.select2('close').trigger('krajeeselect2:cleared');}};initS2Unselect=function(){$(this).data('unselecting',true);};initS2Order=function(id,val){var $el=$('#'+id);if(val&&val.length){$.each(val,function(k,v){$el.find('option[value="'+v+'"]').appendTo($el);});$el.find('option:not(:selected)').appendTo($el);}};initS2Loading=function(id,optVar){var opts=window[optVar]||{},themeCss=opts.themeCss,sizeCss=opts.sizeCss,doOrder=opts.doOrder,doReset=opts.doReset,doToggle=opts.doToggle,$el=$('#'+id),$container=$(themeCss),$loading=$('.kv-plugin-loading.loading-'+id),$group=$('.group-'+id);$el.off('.krajees2');if(!$container.length){$el.show();}
if($group.length){$group.removeClass('kv-input-group-hide').removeClass('.group-'+id);}
if($loading.length){$loading.remove();}
if(sizeCss){$el.next(themeCss).removeClass(sizeCss).addClass(sizeCss);}
if(doReset){$el.closest("form").off('.krajees2').on("reset.krajees2",function(){setTimeout(function(){$el.trigger("change").trigger("krajeeselect2:reset");},100);});}
if(doToggle){initS2ToggleAll(id);}
if(doOrder){$el.on('select2:select.krajees2 select2:unselect.krajees2',function(evt){var $selected=$(evt.params.data.element);if(!$selected||!$selected.length){return;}
$selected.detach();$el.append($selected).find('option:not(:selected)').appendTo($el);});}
$el.on('select2:open.krajees2',initS2Open).on('select2:unselecting.krajees2',initS2Unselect);};}));;
/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/ru",[],function(){function e(e,t,n,r){return e%10<5&&e%10>0&&e%100<5||e%100>20?e%10>1?n:t:r}return{errorLoading:function(){return"Невозможно загрузить результаты"},inputTooLong:function(t){var n=t.input.length-t.maximum,r="Пожалуйста, введите на "+n+" символ";return r+=e(n,"","a","ов"),r+=" меньше",r},inputTooShort:function(t){var n=t.minimum-t.input.length,r="Пожалуйста, введите еще хотя бы "+n+" символ";return r+=e(n,"","a","ов"),r},loadingMore:function(){return"Загрузка данных…"},maximumSelected:function(t){var n="Вы можете выбрать не более "+t.maximum+" элемент";return n+=e(t.maximum,"","a","ов"),n},noResults:function(){return"Совпадений не найдено"},searching:function(){return"Поиск…"}}}),{define:e.define,require:e.require}})();;
/*!
 * @package    yii2-krajee-base
 * @subpackage yii2-widget-activeform
 * @author     Kartik Visweswaran <kartikv2@gmail.com>
 * @copyright  Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2016
 * @version    1.8.5
 *
 * Common client validation file for all Krajee widgets.
 *
 * For more JQuery/Bootstrap plugins and demos visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */
var kvInitPlugin,kvListenEvent,kvInitHtml5;(function($){"use strict";$.fn.kvSelector=function(){var $node=$(this),id,sel='',len=1;if(!$node.length){return'';}
id=$node.attr('id');if(id){return'#'+id;}
id=$node.attr('data-kv-id');if(id){return'[data-kv-id="'+id+'"]';}
while(len){id='kv-'+Math.round(new Date().getTime()+(Math.random()*100));sel='[data-kv-id="'+id+'"]';len=$(sel).length;}
$node.attr('data-kv-id',id);return sel;};kvInitPlugin=function(selector,callback){var $body=$(document.body);if($body.length){$body.on('load',selector,callback());}else{callback();}};kvListenEvent=function(event,selector,callback){$(selector).on(event,callback);};kvInitHtml5=function(idCap,idInp){var $caption=$(idCap),$input=$(idInp);$(document).on('change',idCap,function(){$input.val(this.value);}).on('input change',idInp,function(e){$caption.val(this.value);if(e.type==='change'){$caption.trigger('change');}});};})(window.jQuery);;yii=(function($){var pub={reloadableScripts:[],clickableSelector:'button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',changeableSelector:'select, input, textarea',getCsrfParam:function(){return $('meta[name=csrf-param]').attr('content');},getCsrfToken:function(){return $('meta[name=csrf-token]').attr('content');},setCsrfToken:function(name,value){$('meta[name=csrf-param]').attr('content',name);$('meta[name=csrf-token]').attr('content',value);},refreshCsrfToken:function(){var token=pub.getCsrfToken();if(token){$('form input[name="'+pub.getCsrfParam()+'"]').val(token);}},confirm:function(message,ok,cancel){if(confirm(message)){!ok||ok();}else{!cancel||cancel();}},handleAction:function($e,event){var $form=$e.attr('data-form')?$('#'+$e.attr('data-form')):$e.closest('form'),method=!$e.data('method')&&$form?$form.attr('method'):$e.data('method'),action=$e.attr('href'),params=$e.data('params'),pjax=$e.data('pjax'),pjaxPushState=!!$e.data('pjax-push-state'),pjaxReplaceState=!!$e.data('pjax-replace-state'),pjaxTimeout=$e.data('pjax-timeout'),pjaxScrollTo=$e.data('pjax-scrollto'),pjaxPushRedirect=$e.data('pjax-push-redirect'),pjaxReplaceRedirect=$e.data('pjax-replace-redirect'),pjaxSkipOuterContainers=$e.data('pjax-skip-outer-containers'),pjaxContainer,pjaxOptions={};if(pjax!==undefined&&$.support.pjax){if($e.data('pjax-container')){pjaxContainer=$e.data('pjax-container');}else{pjaxContainer=$e.closest('[data-pjax-container=""]');}
if(!pjaxContainer.length){pjaxContainer=$('body');}
pjaxOptions={container:pjaxContainer,push:pjaxPushState,replace:pjaxReplaceState,scrollTo:pjaxScrollTo,pushRedirect:pjaxPushRedirect,replaceRedirect:pjaxReplaceRedirect,pjaxSkipOuterContainers:pjaxSkipOuterContainers,timeout:pjaxTimeout,originalEvent:event,originalTarget:$e}}
if(method===undefined){if(action&&action!='#'){if(pjax!==undefined&&$.support.pjax){$.pjax.click(event,pjaxOptions);}else{window.location=action;}}else if($e.is(':submit')&&$form.length){if(pjax!==undefined&&$.support.pjax){$form.on('submit',function(e){$.pjax.submit(e,pjaxOptions);})}
$form.trigger('submit');}
return;}
var newForm=!$form.length;if(newForm){if(!action||!action.match(/(^\/|:\/\/)/)){action=window.location.href;}
$form=$('<form/>',{method:method,action:action});var target=$e.attr('target');if(target){$form.attr('target',target);}
if(!method.match(/(get|post)/i)){$form.append($('<input/>',{name:'_method',value:method,type:'hidden'}));method='POST';}
if(!method.match(/(get|head|options)/i)){var csrfParam=pub.getCsrfParam();if(csrfParam){$form.append($('<input/>',{name:csrfParam,value:pub.getCsrfToken(),type:'hidden'}));}}
$form.hide().appendTo('body');}
var activeFormData=$form.data('yiiActiveForm');if(activeFormData){activeFormData.submitObject=$e;}
if(params&&$.isPlainObject(params)){$.each(params,function(idx,obj){$form.append($('<input/>').attr({name:idx,value:obj,type:'hidden'}));});}
var oldMethod=$form.attr('method');$form.attr('method',method);var oldAction=null;if(action&&action!='#'){oldAction=$form.attr('action');$form.attr('action',action);}
if(pjax!==undefined&&$.support.pjax){$form.on('submit',function(e){$.pjax.submit(e,pjaxOptions);})}
$form.trigger('submit');$.when($form.data('yiiSubmitFinalizePromise')).then(function(){if(oldAction!=null){$form.attr('action',oldAction);}
$form.attr('method',oldMethod);if(params&&$.isPlainObject(params)){$.each(params,function(idx,obj){$('input[name="'+idx+'"]',$form).remove();});}
if(newForm){$form.remove();}});},getQueryParams:function(url){var pos=url.indexOf('?');if(pos<0){return{};}
var pairs=url.substring(pos+1).split('#')[0].split('&'),params={},pair,i;for(i=0;i<pairs.length;i++){pair=pairs[i].split('=');var name=decodeURIComponent(pair[0]);var value=decodeURIComponent(pair[1]);if(name.length){if(params[name]!==undefined){if(!$.isArray(params[name])){params[name]=[params[name]];}
params[name].push(value||'');}else{params[name]=value||'';}}}
return params;},initModule:function(module){if(module.isActive===undefined||module.isActive){if($.isFunction(module.init)){module.init();}
$.each(module,function(){if($.isPlainObject(this)){pub.initModule(this);}});}},init:function(){initCsrfHandler();initRedirectHandler();initScriptFilter();initDataMethods();}};function initRedirectHandler(){$(document).ajaxComplete(function(event,xhr,settings){var url=xhr&&xhr.getResponseHeader('X-Redirect');if(url){window.location=url;}});}
function initCsrfHandler(){$.ajaxPrefilter(function(options,originalOptions,xhr){if(!options.crossDomain&&pub.getCsrfParam()){xhr.setRequestHeader('X-CSRF-Token',pub.getCsrfToken());}});pub.refreshCsrfToken();}
function initDataMethods(){var handler=function(event){var $this=$(this),method=$this.data('method'),message=$this.data('confirm'),form=$this.data('form');if(method===undefined&&message===undefined&&form===undefined){return true;}
if(message!==undefined){$.proxy(pub.confirm,this)(message,function(){pub.handleAction($this,event);});}else{pub.handleAction($this,event);}
event.stopImmediatePropagation();return false;};$(document).on('click.yii',pub.clickableSelector,handler).on('change.yii',pub.changeableSelector,handler);}
function initScriptFilter(){var hostInfo=location.protocol+'//'+location.host;var loadedScripts=$('script[src]').map(function(){return this.src.charAt(0)==='/'?hostInfo+this.src:this.src;}).toArray();$.ajaxPrefilter('script',function(options,originalOptions,xhr){if(options.dataType=='jsonp'){return;}
var url=options.url.charAt(0)==='/'?hostInfo+options.url:options.url;if($.inArray(url,loadedScripts)===-1){loadedScripts.push(url);}else{var isReloadable=$.inArray(url,$.map(pub.reloadableScripts,function(script){return script.charAt(0)==='/'?hostInfo+script:script;}))!==-1;if(!isReloadable){xhr.abort();}}});$(document).ajaxComplete(function(event,xhr,settings){var styleSheets=[];$('link[rel=stylesheet]').each(function(){if($.inArray(this.href,pub.reloadableScripts)!==-1){return;}
if($.inArray(this.href,styleSheets)==-1){styleSheets.push(this.href)}else{$(this).remove();}})});}
return pub;})(jQuery);jQuery(document).ready(function(){yii.initModule(yii);});;(function($){$.fn.yiiGridView=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}else{$.error('Method '+method+' does not exist on jQuery.yiiGridView');return false;}};var defaults={filterUrl:undefined,filterSelector:undefined};var gridData={};var gridEvents={beforeFilter:'beforeFilter',afterFilter:'afterFilter'};var methods={init:function(options){return this.each(function(){var $e=$(this);var settings=$.extend({},defaults,options||{});var id=$e.attr('id');if(gridData[id]===undefined){gridData[id]={};}
gridData[id]=$.extend(gridData[id],{settings:settings});var enterPressed=false;$(document).off('change.yiiGridView keydown.yiiGridView',settings.filterSelector).on('change.yiiGridView keydown.yiiGridView',settings.filterSelector,function(event){if(event.type==='keydown'){if(event.keyCode!==13){return;}else{enterPressed=true;}}else{if(enterPressed){enterPressed=false;return;}}
methods.applyFilter.apply($e);return false;});});},applyFilter:function(){var $grid=$(this),event;var settings=gridData[$grid.attr('id')].settings;var data={};$.each($(settings.filterSelector).serializeArray(),function(){if(!(this.name in data)){data[this.name]=[];}
data[this.name].push(this.value);});var namesInFilter=Object.keys(data);$.each(yii.getQueryParams(settings.filterUrl),function(name,value){if(namesInFilter.indexOf(name)===-1&&namesInFilter.indexOf(name.replace(/\[\]$/,''))===-1){if(!$.isArray(value)){value=[value];}
if(!(name in data)){data[name]=value;}else{$.each(value,function(i,val){if($.inArray(val,data[name])){data[name].push(val);}});}}});var pos=settings.filterUrl.indexOf('?');var url=pos<0?settings.filterUrl:settings.filterUrl.substring(0,pos);$grid.find('form.gridview-filter-form').remove();var $form=$('<form/>',{action:url,method:'get','class':'gridview-filter-form',style:'display:none','data-pjax':''}).appendTo($grid);$.each(data,function(name,values){$.each(values,function(index,value){$form.append($('<input/>').attr({type:'hidden',name:name,value:value}));});});event=$.Event(gridEvents.beforeFilter);$grid.trigger(event);if(event.result===false){return;}
$form.submit();$grid.trigger(gridEvents.afterFilter);},setSelectionColumn:function(options){var $grid=$(this);var id=$(this).attr('id');if(gridData[id]===undefined){gridData[id]={};}
gridData[id].selectionColumn=options.name;if(!options.multiple||!options.checkAll){return;}
var checkAll="#"+id+" input[name='"+options.checkAll+"']";var inputs=options.class?"input."+options.class:"input[name='"+options.name+"']";var inputsEnabled="#"+id+" "+inputs+":enabled";$(document).off('click.yiiGridView',checkAll).on('click.yiiGridView',checkAll,function(){$grid.find(inputs+":enabled").prop('checked',this.checked);});$(document).off('click.yiiGridView',inputsEnabled).on('click.yiiGridView',inputsEnabled,function(){var all=$grid.find(inputs).length==$grid.find(inputs+":checked").length;$grid.find("input[name='"+options.checkAll+"']").prop('checked',all);});},getSelectedRows:function(){var $grid=$(this);var data=gridData[$grid.attr('id')];var keys=[];if(data.selectionColumn){$grid.find("input[name='"+data.selectionColumn+"']:checked").each(function(){keys.push($(this).parent().closest('tr').data('key'));});}
return keys;},destroy:function(){return this.each(function(){$(window).unbind('.yiiGridView');$(this).removeData('yiiGridView');});},data:function(){var id=$(this).attr('id');return gridData[id];}};})(window.jQuery);;
/*!
 * Copyright 2012, Chris Wanstrath
 * Released under the MIT License
 * https://github.com/defunkt/jquery-pjax
 */
(function($){function fnPjax(selector,container,options){var context=this
return this.on('click.pjax',selector,function(event){var opts=$.extend({history:true},optionsFor(container,options))
if(!opts.container)
opts.container=$(this).attr('data-pjax')||context
handleClick(event,opts)})}
function handleClick(event,container,options){options=optionsFor(container,options)
var link=event.currentTarget
if($(link).data('pjax')==0){return;}
if(link.tagName.toUpperCase()!=='A')
throw"$.fn.pjax or $.pjax.click requires an anchor element"
if(event.which>1||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)
return
if(location.protocol!==link.protocol||location.hostname!==link.hostname)
return
if(link.href.indexOf('#')>-1&&stripHash(link)==stripHash(location))
return
if(event.isDefaultPrevented())
return
var defaults={url:link.href,container:$(link).attr('data-pjax'),target:link}
var opts=$.extend({},defaults,options)
var clickEvent=$.Event('pjax:click')
$(link).trigger(clickEvent,[opts])
if(!clickEvent.isDefaultPrevented()){pjax(opts)
event.preventDefault()
$(link).trigger('pjax:clicked',[opts])}}
function handleSubmit(event,container,options){options=optionsFor(container,options)
var form=event.currentTarget
var $form=$(form)
if(form.tagName.toUpperCase()!=='FORM')
throw"$.pjax.submit requires a form element"
var defaults={type:($form.attr('method')||'GET').toUpperCase(),url:$form.attr('action'),container:$form.attr('data-pjax'),target:form}
if(defaults.type!=='GET'&&window.FormData!==undefined){defaults.data=new FormData(form);defaults.processData=false;defaults.contentType=false;}else{if($(form).find(':file').length){return;}
defaults.data=$(form).serializeArray();}
pjax($.extend({},defaults,options))
event.preventDefault()}
function pjax(options){options=$.extend(true,{},$.ajaxSettings,pjax.defaults,options)
if($.isFunction(options.url)){options.url=options.url()}
var target=options.target
var hash=parseURL(options.url).hash
var context=options.context=findContainerFor(options.container)
if(!options.data)options.data={}
if($.isArray(options.data)){options.data=$.grep(options.data,function(obj){return'_pjax'!==obj.name})
options.data.push({name:'_pjax',value:context.selector})}else{options.data._pjax=context.selector}
function fire(type,args,props){if(!props)props={}
props.relatedTarget=target
var event=$.Event(type,props)
context.trigger(event,args)
return!event.isDefaultPrevented()}
var timeoutTimer
options.beforeSend=function(xhr,settings){if(settings.type!=='GET'){settings.timeout=0}
xhr.setRequestHeader('X-PJAX','true')
xhr.setRequestHeader('X-PJAX-Container',context.selector)
if(settings.ieRedirectCompatibility){var ua=window.navigator.userAgent
if(ua.indexOf('MSIE ')>0||ua.indexOf('Trident/')>0||ua.indexOf('Edge/')>0){xhr.setRequestHeader('X-Ie-Redirect-Compatibility','true')}}
if(!fire('pjax:beforeSend',[xhr,settings]))
return false
if(settings.timeout>0){timeoutTimer=setTimeout(function(){if(fire('pjax:timeout',[xhr,options]))
xhr.abort('timeout')},settings.timeout)
settings.timeout=0}
var url=parseURL(settings.url)
if(hash)url.hash=hash
options.requestUrl=stripInternalParams(url)}
options.complete=function(xhr,textStatus){if(timeoutTimer)
clearTimeout(timeoutTimer)
fire('pjax:complete',[xhr,textStatus,options])
fire('pjax:end',[xhr,options])}
options.error=function(xhr,textStatus,errorThrown){var container=extractContainer("",xhr,options)
var redirect=(xhr.status>=301&&xhr.status<=303)
var allowed=redirect||fire('pjax:error',[xhr,textStatus,errorThrown,options])
if(redirect||options.type=='GET'&&textStatus!=='abort'&&allowed){if(options.replaceRedirect){locationReplace(container.url)}else if(options.pushRedirect){window.history.pushState(null,"",container.url)
window.location.replace(container.url)}}}
options.success=function(data,status,xhr){var previousState=pjax.state;var currentVersion=(typeof $.pjax.defaults.version==='function')?$.pjax.defaults.version():$.pjax.defaults.version
var latestVersion=xhr.getResponseHeader('X-PJAX-Version')
var container=extractContainer(data,xhr,options)
var url=parseURL(container.url)
if(hash){url.hash=hash
container.url=url.href}
if(currentVersion&&latestVersion&&currentVersion!==latestVersion){locationReplace(container.url)
return}
if(!container.contents){locationReplace(container.url)
return}
pjax.state={id:options.id||uniqueId(),url:container.url,title:container.title,container:context.selector,fragment:options.fragment,timeout:options.timeout,cache:options.cache}
if(options.history&&(options.push||options.replace)){window.history.replaceState(pjax.state,container.title,container.url)}
var blurFocus=$.contains(options.container,document.activeElement)
if(blurFocus){try{document.activeElement.blur()}catch(e){}}
if(container.title)document.title=container.title
fire('pjax:beforeReplace',[container.contents,options],{state:pjax.state,previousState:previousState})
context.html(container.contents)
var autofocusEl=context.find('input[autofocus], textarea[autofocus]').last()[0]
if(autofocusEl&&document.activeElement!==autofocusEl){autofocusEl.focus();}
executeScriptTags(container.scripts,context)
var scrollTo=options.scrollTo
if(hash){var name=decodeURIComponent(hash.slice(1))
var target=document.getElementById(name)||document.getElementsByName(name)[0]
if(target)scrollTo=$(target).offset().top}
if(typeof scrollTo=='number')$(window).scrollTop(scrollTo)
fire('pjax:success',[data,status,xhr,options])}
if(!pjax.state){pjax.state={id:uniqueId(),url:window.location.href,title:document.title,container:context.selector,fragment:options.fragment,timeout:options.timeout,cache:options.cache}
window.history.replaceState(pjax.state,document.title)}
if(pjax.xhr&&pjax.xhr.readyState<4&&pjax.options.skipOuterContainers){return}
abortXHR(pjax.xhr)
pjax.options=options
var xhr=pjax.xhr=$.ajax(options)
if(xhr.readyState>0){if(options.history&&(options.push&&!options.replace)){cachePush(pjax.state.id,cloneContents(context))
window.history.pushState(null,"",options.requestUrl)}
fire('pjax:start',[xhr,options])
fire('pjax:send',[xhr,options])}
return pjax.xhr}
function pjaxReload(container,options){var defaults={url:window.location.href,push:false,replace:true,scrollTo:false}
return pjax($.extend(defaults,optionsFor(container,options)))}
function locationReplace(url){if(!pjax.options.history)return;window.history.replaceState(null,"",pjax.state.url)
window.location.replace(url)}
var initialPop=true
var initialURL=window.location.href
var initialState=window.history.state
if(initialState&&initialState.container){pjax.state=initialState}
if('state'in window.history){initialPop=false}
function onPjaxPopstate(event){if(!initialPop){abortXHR(pjax.xhr)}
var previousState=pjax.state
var state=event.state
var direction
if(state&&state.container){if(initialPop&&initialURL==state.url)return
if(previousState){if(previousState.id===state.id)return
direction=previousState.id<state.id?'forward':'back'}
var cache=cacheMapping[state.id]||[]
var container=$(cache[0]||state.container),contents=cache[1]
if(container.length){var options={id:state.id,url:state.url,container:container,push:false,fragment:state.fragment,timeout:state.timeout,cache:state.cache,scrollTo:false}
if(previousState&&options.cache){cachePop(direction,previousState.id,cloneContents(container))}
var popstateEvent=$.Event('pjax:popstate',{state:state,direction:direction})
container.trigger(popstateEvent)
if(contents){container.trigger('pjax:start',[null,options])
pjax.state=state
if(state.title)document.title=state.title
var beforeReplaceEvent=$.Event('pjax:beforeReplace',{state:state,previousState:previousState})
container.trigger(beforeReplaceEvent,[contents,options])
container.html(contents)
container.trigger('pjax:end',[null,options])}else{pjax(options)}
container[0].offsetHeight}else{locationReplace(location.href)}}
initialPop=false}
function fallbackPjax(options){var url=$.isFunction(options.url)?options.url():options.url,method=options.type?options.type.toUpperCase():'GET'
var form=$('<form>',{method:method==='GET'?'GET':'POST',action:url,style:'display:none'})
if(method!=='GET'&&method!=='POST'){form.append($('<input>',{type:'hidden',name:'_method',value:method.toLowerCase()}))}
var data=options.data
if(typeof data==='string'){$.each(data.split('&'),function(index,value){var pair=value.split('=')
form.append($('<input>',{type:'hidden',name:pair[0],value:pair[1]}))})}else if($.isArray(data)){$.each(data,function(index,value){form.append($('<input>',{type:'hidden',name:value.name,value:value.value}))})}else if(typeof data==='object'){var key
for(key in data)
form.append($('<input>',{type:'hidden',name:key,value:data[key]}))}
$(document.body).append(form)
form.submit()}
function abortXHR(xhr){if(xhr&&xhr.readyState<4){xhr.onreadystatechange=$.noop
xhr.abort()}}
function uniqueId(){return(new Date).getTime()}
function cloneContents(container){var cloned=container.clone()
cloned.find('script').each(function(){if(!this.src)jQuery._data(this,'globalEval',false)})
return[container.selector,cloned.contents()]}
function stripInternalParams(url){url.search=url.search.replace(/([?&])(_pjax|_)=[^&]*/g,'')
return url.href.replace(/\?($|#)/,'$1')}
function parseURL(url){var a=document.createElement('a')
a.href=url
return a}
function stripHash(location){return location.href.replace(/#.*/,'')}
function optionsFor(container,options){if(container&&options)
options.container=container
else if($.isPlainObject(container))
options=container
else
options={container:container}
if(options.container)
options.container=findContainerFor(options.container)
return options}
function findContainerFor(container){container=$(container)
if(!container.length){throw"no pjax container for "+container.selector}else if(container.selector!==''&&container.context===document){return container}else if(container.attr('id')){return $('#'+container.attr('id'))}else{throw"cant get selector for pjax container!"}}
function findAll(elems,selector){return elems.filter(selector).add(elems.find(selector));}
function parseHTML(html){return $.parseHTML(html,document,true)}
function extractContainer(data,xhr,options){var obj={},fullDocument=/<html/i.test(data)
var serverUrl=xhr.getResponseHeader('X-PJAX-URL')
obj.url=serverUrl?stripInternalParams(parseURL(serverUrl)):options.requestUrl
if(fullDocument){var $head=$(parseHTML(data.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]))
var $body=$(parseHTML(data.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]))}else{var $head=$body=$(parseHTML(data))}
if($body.length===0)
return obj
obj.title=findAll($head,'title').last().text()
if(options.fragment){if(options.fragment==='body'){var $fragment=$body}else{var $fragment=findAll($body,options.fragment).first()}
if($fragment.length){obj.contents=options.fragment==='body'?$fragment:$fragment.contents()
if(!obj.title)
obj.title=$fragment.attr('title')||$fragment.data('title')}}else if(!fullDocument){obj.contents=$body}
if(obj.contents){obj.contents=obj.contents.not(function(){return $(this).is('title')})
obj.contents.find('title').remove()
obj.scripts=findAll(obj.contents,'script').remove()
obj.contents=obj.contents.not(obj.scripts)}
if(obj.title)obj.title=$.trim(obj.title)
return obj}
function executeScriptTags(scripts,context){if(!scripts)return
var existingScripts=$('script[src]')
var cb=function(next){var src=this.src
var matchedScripts=existingScripts.filter(function(){return this.src===src})
if(matchedScripts.length){next()
return}
if(src){$.getScript(src).done(next).fail(next)
document.head.appendChild(this)}else{context.append(this)
next()}}
var i=0;var next=function(){if(i>=scripts.length){return}
var script=scripts[i]
i++
cb.call(script,next)}
next()}
var cacheMapping={}
var cacheForwardStack=[]
var cacheBackStack=[]
function cachePush(id,value){if(!pjax.options.cache){return;}
cacheMapping[id]=value
cacheBackStack.push(id)
trimCacheStack(cacheForwardStack,0)
trimCacheStack(cacheBackStack,pjax.defaults.maxCacheLength)}
function cachePop(direction,id,value){var pushStack,popStack
cacheMapping[id]=value
if(direction==='forward'){pushStack=cacheBackStack
popStack=cacheForwardStack}else{pushStack=cacheForwardStack
popStack=cacheBackStack}
pushStack.push(id)
if(id=popStack.pop())
delete cacheMapping[id]
trimCacheStack(pushStack,pjax.defaults.maxCacheLength)}
function trimCacheStack(stack,length){while(stack.length>length)
delete cacheMapping[stack.shift()]}
function findVersion(){return $('meta').filter(function(){var name=$(this).attr('http-equiv')
return name&&name.toUpperCase()==='X-PJAX-VERSION'}).attr('content')}
function enable(){$.fn.pjax=fnPjax
$.pjax=pjax
$.pjax.enable=$.noop
$.pjax.disable=disable
$.pjax.click=handleClick
$.pjax.submit=handleSubmit
$.pjax.reload=pjaxReload
$.pjax.defaults={history:true,cache:true,timeout:650,push:true,replace:false,type:'GET',dataType:'html',scrollTo:0,maxCacheLength:20,version:findVersion,pushRedirect:false,replaceRedirect:true,skipOuterContainers:false,ieRedirectCompatibility:true}
$(window).on('popstate.pjax',onPjaxPopstate)}
function disable(){$.fn.pjax=function(){return this}
$.pjax=fallbackPjax
$.pjax.enable=enable
$.pjax.disable=$.noop
$.pjax.click=$.noop
$.pjax.submit=$.noop
$.pjax.reload=function(){window.location.reload()}
$(window).off('popstate.pjax',onPjaxPopstate)}
if($.inArray('state',$.event.props)<0)
$.event.props.push('state')
$.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)
$.support.pjax?enable():disable()})(jQuery);;
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){'use strict';var version=$.fn.jquery.split(' ')[0].split('.')
if((version[0]<2&&version[1]<9)||(version[0]==1&&version[1]==9&&version[2]<1)||(version[0]>3)){throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')}}(jQuery);+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false
var $el=this
$(this).one('bsTransitionEnd',function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()
if(!$.support.transition)return
$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.VERSION='3.3.7'
Alert.TRANSITION_DURATION=150
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=$(selector==='#'?[]:selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.closest('.alert')}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.alert
$.fn.alert=Plugin
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.VERSION='3.3.7'
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state+='Text'
if(data.resetText==null)$el.data('resetText',$el[val]())
setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state])
if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d).prop(d,true)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d).prop(d,false)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked'))changed=false
$parent.find('.active').removeClass('active')
this.$element.addClass('active')}else if($input.prop('type')=='checkbox'){if(($input.prop('checked'))!==this.$element.hasClass('active'))changed=false
this.$element.toggleClass('active')}
$input.prop('checked',this.$element.hasClass('active'))
if(changed)$input.trigger('change')}else{this.$element.attr('aria-pressed',!this.$element.hasClass('active'))
this.$element.toggleClass('active')}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
var old=$.fn.button
$.fn.button=Plugin
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target).closest('.btn')
Plugin.call($btn,'toggle')
if(!($(e.target).is('input[type="radio"], input[type="checkbox"]'))){e.preventDefault()
if($btn.is('input,button'))$btn.trigger('focus')
else $btn.find('input:visible,button:visible').first().trigger('focus')}}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type))})}(jQuery);+function($){'use strict';var Carousel=function(element,options){this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=null
this.sliding=null
this.interval=null
this.$active=null
this.$items=null
this.options.keyboard&&this.$element.on('keydown.bs.carousel',$.proxy(this.keydown,this))
this.options.pause=='hover'&&!('ontouchstart'in document.documentElement)&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))}
Carousel.VERSION='3.3.7'
Carousel.TRANSITION_DURATION=600
Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true,keyboard:true}
Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return
switch(e.which){case 37:this.prev();break
case 39:this.next();break
default:return}
e.preventDefault()}
Carousel.prototype.cycle=function(e){e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this}
Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item')
return this.$items.index(item||this.$active)}
Carousel.prototype.getItemForDirection=function(direction,active){var activeIndex=this.getItemIndex(active)
var willWrap=(direction=='prev'&&activeIndex===0)||(direction=='next'&&activeIndex==(this.$items.length-1))
if(willWrap&&!this.options.wrap)return active
var delta=direction=='prev'?-1:1
var itemIndex=(activeIndex+delta)%this.$items.length
return this.$items.eq(itemIndex)}
Carousel.prototype.to=function(pos){var that=this
var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'))
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
if(activeIndex==pos)return this.pause().cycle()
return this.slide(pos>activeIndex?'next':'prev',this.$items.eq(pos))}
Carousel.prototype.pause=function(e){e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
this.cycle(true)}
this.interval=clearInterval(this.interval)
return this}
Carousel.prototype.next=function(){if(this.sliding)return
return this.slide('next')}
Carousel.prototype.prev=function(){if(this.sliding)return
return this.slide('prev')}
Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
var $next=next||this.getItemForDirection(type,$active)
var isCycling=this.interval
var direction=type=='next'?'left':'right'
var that=this
if($next.hasClass('active'))return(this.sliding=false)
var relatedTarget=$next[0]
var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
this.$element.trigger(slideEvent)
if(slideEvent.isDefaultPrevented())return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)])
$nextIndicator&&$nextIndicator.addClass('active')}
var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)}else{$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger(slidEvent)}
isCycling&&this.cycle()
return this}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
var action=typeof option=='string'?option:options.slide
if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
var old=$.fn.carousel
$.fn.carousel=Plugin
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
var clickHandler=function(e){var href
var $this=$(this)
var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))
if(!$target.hasClass('carousel'))return
var options=$.extend({},$target.data(),$this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex)options.interval=false
Plugin.call($target,options)
if(slideIndex){$target.data('bs.carousel').to(slideIndex)}
e.preventDefault()}
$(document).on('click.bs.carousel.data-api','[data-slide]',clickHandler).on('click.bs.carousel.data-api','[data-slide-to]',clickHandler)
$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
Plugin.call($carousel,$carousel.data())})})}(jQuery);+function($){'use strict';var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},Collapse.DEFAULTS,options)
this.$trigger=$('[data-toggle="collapse"][href="#'+element.id+'"],'+'[data-toggle="collapse"][data-target="#'+element.id+'"]')
this.transitioning=null
if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}
if(this.options.toggle)this.toggle()}
Collapse.VERSION='3.3.7'
Collapse.TRANSITION_DURATION=350
Collapse.DEFAULTS={toggle:true}
Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'}
Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
var activesData
var actives=this.$parent&&this.$parent.children('.panel').children('.in, .collapsing')
if(actives&&actives.length){activesData=actives.data('bs.collapse')
if(activesData&&activesData.transitioning)return}
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
if(actives&&actives.length){Plugin.call(actives,'hide')
activesData||actives.data('bs.collapse',null)}
var dimension=this.dimension()
this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded',true)
this.$trigger.removeClass('collapsed').attr('aria-expanded',true)
this.transitioning=1
var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
this.transitioning=0
this.$element.trigger('shown.bs.collapse')}
if(!$.support.transition)return complete.call(this)
var scrollSize=$.camelCase(['scroll',dimension].join('-'))
this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])}
Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var dimension=this.dimension()
this.$element[dimension](this.$element[dimension]())[0].offsetHeight
this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded',false)
this.$trigger.addClass('collapsed').attr('aria-expanded',false)
this.transitioning=1
var complete=function(){this.transitioning=0
this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')}
if(!$.support.transition)return complete.call(this)
this.$element
[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)}
Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}
Collapse.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element)
this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element)},this)).end()}
Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass('in')
$element.attr('aria-expanded',isOpen)
$trigger.toggleClass('collapsed',!isOpen).attr('aria-expanded',isOpen)}
function getTargetFromTrigger($trigger){var href
var target=$trigger.attr('data-target')||(href=$trigger.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
return $(target)}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data&&options.toggle&&/show|hide/.test(option))options.toggle=false
if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.collapse
$.fn.collapse=Plugin
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var $this=$(this)
if(!$this.attr('data-target'))e.preventDefault()
var $target=getTargetFromTrigger($this)
var data=$target.data('bs.collapse')
var option=data?'toggle':$this.data()
Plugin.call($target,option)})}(jQuery);+function($){'use strict';var backdrop='.dropdown-backdrop'
var toggle='[data-toggle="dropdown"]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.VERSION='3.3.7'
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=selector&&$(selector)
return $parent&&$parent.length?$parent:$this.parent()}
function clearMenus(e){if(e&&e.which===3)return
$(backdrop).remove()
$(toggle).each(function(){var $this=$(this)
var $parent=getParent($this)
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
if(e&&e.type=='click'&&/input|textarea/i.test(e.target.tagName)&&$.contains($parent[0],e.target))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.attr('aria-expanded','false')
$parent.removeClass('open').trigger($.Event('hidden.bs.dropdown',relatedTarget))})}
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.trigger('focus').attr('aria-expanded','true')
$parent.toggleClass('open').trigger($.Event('shown.bs.dropdown',relatedTarget))}
return false}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if(!isActive&&e.which!=27||isActive&&e.which==27){if(e.which==27)$parent.find(toggle).trigger('focus')
return $this.trigger('click')}
var desc=' li:not(.disabled):visible a'
var $items=$parent.find('.dropdown-menu'+desc)
if(!$items.length)return
var index=$items.index(e.target)
if(e.which==38&&index>0)index--
if(e.which==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).trigger('focus')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.dropdown
$.fn.dropdown=Plugin
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','.dropdown-menu',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$dialog=this.$element.find('.modal-dialog')
this.$backdrop=null
this.isShown=null
this.originalBodyPad=null
this.scrollbarWidth=0
this.ignoreBackdropClick=false
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.3.7'
Modal.TRANSITION_DURATION=300
Modal.BACKDROP_TRANSITION_DURATION=150
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.setScrollbar()
this.$body.addClass('modal-open')
this.escape()
this.resize()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.$dialog.on('mousedown.dismiss.bs.modal',function(){that.$element.one('mouseup.dismiss.bs.modal',function(e){if($(e.target).is(that.$element))that.ignoreBackdropClick=true})})
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
that.$element.show().scrollTop(0)
that.adjustDialog()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in')
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$dialog.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
this.resize()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal')
this.$dialog.off('mousedown.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(document!==e.target&&this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal')}}
Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else{$(window).off('resize.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$body.removeClass('modal-open')
that.resetAdjustments()
that.resetScrollbar()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$(document.createElement('div')).addClass('modal-backdrop '+animate).appendTo(this.$body)
this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false
return}
if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus():this.hide()},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback){callback()}}
Modal.prototype.handleUpdate=function(){this.adjustDialog()}
Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})}
Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})}
Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth
if(!fullWindowWidth){var documentElementRect=document.documentElement.getBoundingClientRect()
fullWindowWidth=documentElementRect.right-Math.abs(documentElementRect.left)}
this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth
this.scrollbarWidth=this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
this.originalBodyPad=document.body.style.paddingRight||''
if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right',this.originalBodyPad)}
Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';var Tooltip=function(element,options){this.type=null
this.options=null
this.enabled=null
this.timeout=null
this.hoverState=null
this.$element=null
this.inState=null
this.init('tooltip',element,options)}
Tooltip.VERSION='3.3.7'
Tooltip.TRANSITION_DURATION=150
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.$viewport=this.options.viewport&&$($.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):(this.options.viewport.selector||this.options.viewport))
this.inState={click:false,hover:false,focus:false}
if(this.$element[0]instanceof document.constructor&&!this.options.selector){throw new Error('`selector` option must be specified when initializing '+this.type+' on the window.document object!')}
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
if(obj instanceof $.Event){self.inState[obj.type=='focusin'?'focus':'hover']=true}
if(self.tip().hasClass('in')||self.hoverState=='in'){self.hoverState='in'
return}
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.isInStateTrue=function(){for(var key in this.inState){if(this.inState[key])return true}
return false}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
if(obj instanceof $.Event){self.inState[obj.type=='focusout'?'focus':'hover']=false}
if(self.isInStateTrue())return
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!inDom)return
var that=this
var $tip=this.tip()
var tipId=this.getUID(this.type)
this.setContent()
$tip.attr('id',tipId)
this.$element.attr('aria-describedby',tipId)
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this)
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
this.$element.trigger('inserted.bs.'+this.type)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var orgPlacement=placement
var viewportDim=this.getPosition(this.$viewport)
placement=placement=='bottom'&&pos.bottom+actualHeight>viewportDim.bottom?'top':placement=='top'&&pos.top-actualHeight<viewportDim.top?'bottom':placement=='right'&&pos.right+actualWidth>viewportDim.width?'left':placement=='left'&&pos.left-actualWidth<viewportDim.left?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
var complete=function(){var prevHoverState=that.hoverState
that.$element.trigger('shown.bs.'+that.type)
that.hoverState=null
if(prevHoverState=='out')that.leave(that)}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10)
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top+=marginTop
offset.left+=marginLeft
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight}
var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight)
if(delta.left)offset.left+=delta.left
else offset.top+=delta.top
var isVertical=/top|bottom/.test(placement)
var arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight
var arrowOffsetPosition=isVertical?'offsetWidth':'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)}
Tooltip.prototype.replaceArrow=function(delta,dimension,isVertical){this.arrow().css(isVertical?'left':'top',50*(1-delta/dimension)+'%').css(isVertical?'top':'left','')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(callback){var that=this
var $tip=$(this.$tip)
var e=$.Event('hide.bs.'+this.type)
function complete(){if(that.hoverState!='in')$tip.detach()
if(that.$element){that.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+that.type)}
callback&&callback()}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof $e.attr('data-original-title')!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function($element){$element=$element||this.$element
var el=$element[0]
var isBody=el.tagName=='BODY'
var elRect=el.getBoundingClientRect()
if(elRect.width==null){elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top})}
var isSvg=window.SVGElement&&el instanceof window.SVGElement
var elOffset=isBody?{top:0,left:0}:(isSvg?null:$element.offset())
var scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()}
var outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null
return $.extend({},elRect,scroll,outerDims,elOffset)}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0}
if(!this.$viewport)return delta
var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
var viewportDimensions=this.getPosition(this.$viewport)
if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll
var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight
if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}else{var leftEdgeOffset=pos.left-viewportPadding
var rightEdgeOffset=pos.left+viewportPadding+actualWidth
if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.right){delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}
return delta}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.getUID=function(prefix){do prefix+=~~(Math.random()*1000000)
while(document.getElementById(prefix))
return prefix}
Tooltip.prototype.tip=function(){if(!this.$tip){this.$tip=$(this.options.template)
if(this.$tip.length!=1){throw new Error(this.type+' `template` option must consist of exactly 1 top-level element!')}}
return this.$tip}
Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=this
if(e){self=$(e.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions())
$(e.currentTarget).data('bs.'+this.type,self)}}
if(e){self.inState.click=!self.inState.click
if(self.isInStateTrue())self.enter(self)
else self.leave(self)}else{self.tip().hasClass('in')?self.leave(self):self.enter(self)}}
Tooltip.prototype.destroy=function(){var that=this
clearTimeout(this.timeout)
this.hide(function(){that.$element.off('.'+that.type).removeData('bs.'+that.type)
if(that.$tip){that.$tip.detach()}
that.$tip=null
that.$arrow=null
that.$viewport=null
that.$element=null})}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tooltip
$.fn.tooltip=Plugin
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.VERSION='3.3.7'
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content').children().detach().end()[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.popover
$.fn.popover=Plugin
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);+function($){'use strict';function ScrollSpy(element,options){this.$body=$(document.body)
this.$scrollElement=$(element).is(document.body)?$(window):$(element)
this.options=$.extend({},ScrollSpy.DEFAULTS,options)
this.selector=(this.options.target||'')+' .nav li > a'
this.offsets=[]
this.targets=[]
this.activeTarget=null
this.scrollHeight=0
this.$scrollElement.on('scroll.bs.scrollspy',$.proxy(this.process,this))
this.refresh()
this.process()}
ScrollSpy.VERSION='3.3.7'
ScrollSpy.DEFAULTS={offset:10}
ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)}
ScrollSpy.prototype.refresh=function(){var that=this
var offsetMethod='offset'
var offsetBase=0
this.offsets=[]
this.targets=[]
this.scrollHeight=this.getScrollHeight()
if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position'
offsetBase=this.$scrollElement.scrollTop()}
this.$body.find(this.selector).map(function(){var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){that.offsets.push(this[0])
that.targets.push(this[1])})}
ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
var scrollHeight=this.getScrollHeight()
var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(this.scrollHeight!=scrollHeight){this.refresh()}
if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i)}
if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null
return this.clear()}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(offsets[i+1]===undefined||scrollTop<offsets[i+1])&&this.activate(targets[i])}}
ScrollSpy.prototype.activate=function(target){this.activeTarget=target
this.clear()
var selector=this.selector+'[data-target="'+target+'"],'+
this.selector+'[href="'+target+'"]'
var active=$(selector).parents('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate.bs.scrollspy')}
ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.scrollspy
$.fn.scrollspy=Plugin
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
Plugin.call($spy,$spy.data())})})}(jQuery);+function($){'use strict';var Tab=function(element){this.element=$(element)}
Tab.VERSION='3.3.7'
Tab.TRANSITION_DURATION=150
Tab.prototype.show=function(){var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
var $previous=$ul.find('.active:last a')
var hideEvent=$.Event('hide.bs.tab',{relatedTarget:$this[0]})
var showEvent=$.Event('show.bs.tab',{relatedTarget:$previous[0]})
$previous.trigger(hideEvent)
$this.trigger(showEvent)
if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented())return
var $target=$(selector)
this.activate($this.closest('li'),$ul)
this.activate($target,$target.parent(),function(){$previous.trigger({type:'hidden.bs.tab',relatedTarget:$this[0]})
$this.trigger({type:'shown.bs.tab',relatedTarget:$previous[0]})})}
Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
var transition=callback&&$.support.transition&&($active.length&&$active.hasClass('fade')||!!container.find('> .fade').length)
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',false)
element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded',true)
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu').length){element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',true)}
callback&&callback()}
$active.length&&transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next()
$active.removeClass('in')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tab')
if(!data)$this.data('bs.tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tab
$.fn.tab=Plugin
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
var clickHandler=function(e){e.preventDefault()
Plugin.call($(this),'show')}
$(document).on('click.bs.tab.data-api','[data-toggle="tab"]',clickHandler).on('click.bs.tab.data-api','[data-toggle="pill"]',clickHandler)}(jQuery);+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
this.$element=$(element)
this.affixed=null
this.unpin=null
this.pinnedOffset=null
this.checkPosition()}
Affix.VERSION='3.3.7'
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={offset:0,target:window}
Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
var targetHeight=this.$target.height()
if(offsetTop!=null&&this.affixed=='top')return scrollTop<offsetTop?'top':false
if(this.affixed=='bottom'){if(offsetTop!=null)return(scrollTop+this.unpin<=position.top)?false:'bottom'
return(scrollTop+targetHeight<=scrollHeight-offsetBottom)?false:'bottom'}
var initializing=this.affixed==null
var colliderTop=initializing?scrollTop:position.top
var colliderHeight=initializing?targetHeight:height
if(offsetTop!=null&&scrollTop<=offsetTop)return'top'
if(offsetBottom!=null&&(colliderTop+colliderHeight>=scrollHeight-offsetBottom))return'bottom'
return false}
Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
return(this.pinnedOffset=position.top-scrollTop)}
Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var height=this.$element.height()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
var scrollHeight=Math.max($(document).height(),$(document.body).height())
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom)
if(this.affixed!=affix){if(this.unpin!=null)this.$element.css('top','')
var affixType='affix'+(affix?'-'+affix:'')
var e=$.Event(affixType+'.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.affixed=affix
this.unpin=affix=='bottom'?this.getPinnedOffset():null
this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix','affixed')+'.bs.affix')}
if(affix=='bottom'){this.$element.offset({top:scrollHeight-height-offsetBottom})}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.affix
$.fn.affix=Plugin
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom!=null)data.offset.bottom=data.offsetBottom
if(data.offsetTop!=null)data.offset.top=data.offsetTop
Plugin.call($spy,data)})})}(jQuery);;
/*! AdminLTE app.js
 * ================
 * Main JS application file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive AdminLTE plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <abdullah@almsaeedstudio.com>
 * @version 2.3.6
 * @license MIT <http://opensource.org/licenses/MIT>
 */
function _init(){"use strict";$.AdminLTE.layout={activate:function(){var a=this;a.fix(),a.fixSidebar(),$(window,".wrapper").resize(function(){a.fix(),a.fixSidebar()})},fix:function(){var a=$(".main-header").outerHeight()+$(".main-footer").outerHeight(),b=$(window).height(),c=$(".sidebar").height();if($("body").hasClass("fixed"))$(".content-wrapper, .right-side").css("min-height",b-$(".main-footer").outerHeight());else{var d;b>=c?($(".content-wrapper, .right-side").css("min-height",b-a),d=b-a):($(".content-wrapper, .right-side").css("min-height",c),d=c);var e=$($.AdminLTE.options.controlSidebarOptions.selector);"undefined"!=typeof e&&e.height()>d&&$(".content-wrapper, .right-side").css("min-height",e.height())}},fixSidebar:function(){return $("body").hasClass("fixed")?("undefined"==typeof $.fn.slimScroll&&window.console&&window.console.error("Error: the fixed layout requires the slimscroll plugin!"),void($.AdminLTE.options.sidebarSlimScroll&&"undefined"!=typeof $.fn.slimScroll&&($(".sidebar").slimScroll({destroy:!0}).height("auto"),$(".sidebar").slimscroll({height:$(window).height()-$(".main-header").height()+"px",color:"rgba(0,0,0,0.2)",size:"3px"})))):void("undefined"!=typeof $.fn.slimScroll&&$(".sidebar").slimScroll({destroy:!0}).height("auto"))}},$.AdminLTE.pushMenu={activate:function(a){var b=$.AdminLTE.options.screenSizes;$(document).on("click",a,function(a){a.preventDefault(),$(window).width()>b.sm-1?$("body").hasClass("sidebar-collapse")?$("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu"):$("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").hasClass("sidebar-open")?$("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").addClass("sidebar-open").trigger("expanded.pushMenu")}),$(".content-wrapper").click(function(){$(window).width()<=b.sm-1&&$("body").hasClass("sidebar-open")&&$("body").removeClass("sidebar-open")}),($.AdminLTE.options.sidebarExpandOnHover||$("body").hasClass("fixed")&&$("body").hasClass("sidebar-mini"))&&this.expandOnHover()},expandOnHover:function(){var a=this,b=$.AdminLTE.options.screenSizes.sm-1;$(".main-sidebar").hover(function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-collapse")&&$(window).width()>b&&a.expand()},function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-expanded-on-hover")&&$(window).width()>b&&a.collapse()})},expand:function(){$("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover")},collapse:function(){$("body").hasClass("sidebar-expanded-on-hover")&&$("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse")}},$.AdminLTE.tree=function(a){var b=this,c=$.AdminLTE.options.animationSpeed;$(document).off("click",a+" li a").on("click",a+" li a",function(a){var d=$(this),e=d.next();if(e.is(".treeview-menu")&&e.is(":visible")&&!$("body").hasClass("sidebar-collapse"))e.slideUp(c,function(){e.removeClass("menu-open")}),e.parent("li").removeClass("active");else if(e.is(".treeview-menu")&&!e.is(":visible")){var f=d.parents("ul").first(),g=f.find("ul:visible").slideUp(c);g.removeClass("menu-open");var h=d.parent("li");e.slideDown(c,function(){e.addClass("menu-open"),f.find("li.active").removeClass("active"),h.addClass("active"),b.layout.fix()})}e.is(".treeview-menu")&&a.preventDefault()})},$.AdminLTE.controlSidebar={activate:function(){var a=this,b=$.AdminLTE.options.controlSidebarOptions,c=$(b.selector),d=$(b.toggleBtnSelector);d.on("click",function(d){d.preventDefault(),c.hasClass("control-sidebar-open")||$("body").hasClass("control-sidebar-open")?a.close(c,b.slide):a.open(c,b.slide)});var e=$(".control-sidebar-bg");a._fix(e),$("body").hasClass("fixed")?a._fixForFixed(c):$(".content-wrapper, .right-side").height()<c.height()&&a._fixForContent(c)},open:function(a,b){b?a.addClass("control-sidebar-open"):$("body").addClass("control-sidebar-open")},close:function(a,b){b?a.removeClass("control-sidebar-open"):$("body").removeClass("control-sidebar-open")},_fix:function(a){var b=this;if($("body").hasClass("layout-boxed")){if(a.css("position","absolute"),a.height($(".wrapper").height()),b.hasBindedResize)return;$(window).resize(function(){b._fix(a)}),b.hasBindedResize=!0}else a.css({position:"fixed",height:"auto"})},_fixForFixed:function(a){a.css({position:"fixed","max-height":"100%",overflow:"auto","padding-bottom":"50px"})},_fixForContent:function(a){$(".content-wrapper, .right-side").css("min-height",a.height())}},$.AdminLTE.boxWidget={selectors:$.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,icons:$.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,animationSpeed:$.AdminLTE.options.animationSpeed,activate:function(a){var b=this;a||(a=document),$(a).on("click",b.selectors.collapse,function(a){a.preventDefault(),b.collapse($(this))}),$(a).on("click",b.selectors.remove,function(a){a.preventDefault(),b.remove($(this))})},collapse:function(a){var b=this,c=a.parents(".box").first(),d=c.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");c.hasClass("collapsed-box")?(a.children(":first").removeClass(b.icons.open).addClass(b.icons.collapse),d.slideDown(b.animationSpeed,function(){c.removeClass("collapsed-box")})):(a.children(":first").removeClass(b.icons.collapse).addClass(b.icons.open),d.slideUp(b.animationSpeed,function(){c.addClass("collapsed-box")}))},remove:function(a){var b=a.parents(".box").first();b.slideUp(this.animationSpeed)}}}if("undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery");$.AdminLTE={},$.AdminLTE.options={navbarMenuSlimscroll:!0,navbarMenuSlimscrollWidth:"3px",navbarMenuHeight:"200px",animationSpeed:500,sidebarToggleSelector:"[data-toggle='offcanvas']",sidebarPushMenu:!0,sidebarSlimScroll:!0,sidebarExpandOnHover:!1,enableBoxRefresh:!0,enableBSToppltip:!0,BSTooltipSelector:"[data-toggle='tooltip']",enableFastclick:!1,enableControlSidebar:!0,controlSidebarOptions:{toggleBtnSelector:"[data-toggle='control-sidebar']",selector:".control-sidebar",slide:!0},enableBoxWidget:!0,boxWidgetOptions:{boxWidgetIcons:{collapse:"fa-minus",open:"fa-plus",remove:"fa-times"},boxWidgetSelectors:{remove:'[data-widget="remove"]',collapse:'[data-widget="collapse"]'}},directChat:{enable:!0,contactToggleSelector:'[data-widget="chat-pane-toggle"]'},colors:{lightBlue:"#3c8dbc",red:"#f56954",green:"#00a65a",aqua:"#00c0ef",yellow:"#f39c12",blue:"#0073b7",navy:"#001F3F",teal:"#39CCCC",olive:"#3D9970",lime:"#01FF70",orange:"#FF851B",fuchsia:"#F012BE",purple:"#8E24AA",maroon:"#D81B60",black:"#222222",gray:"#d2d6de"},screenSizes:{xs:480,sm:768,md:992,lg:1200}},$(function(){"use strict";$("body").removeClass("hold-transition"),"undefined"!=typeof AdminLTEOptions&&$.extend(!0,$.AdminLTE.options,AdminLTEOptions);var a=$.AdminLTE.options;_init(),$.AdminLTE.layout.activate(),$.AdminLTE.tree(".sidebar"),a.enableControlSidebar&&$.AdminLTE.controlSidebar.activate(),a.navbarMenuSlimscroll&&"undefined"!=typeof $.fn.slimscroll&&$(".navbar .menu").slimscroll({height:a.navbarMenuHeight,alwaysVisible:!1,size:a.navbarMenuSlimscrollWidth}).css("width","100%"),a.sidebarPushMenu&&$.AdminLTE.pushMenu.activate(a.sidebarToggleSelector),a.enableBSToppltip&&$("body").tooltip({selector:a.BSTooltipSelector}),a.enableBoxWidget&&$.AdminLTE.boxWidget.activate(),a.enableFastclick&&"undefined"!=typeof FastClick&&FastClick.attach(document.body),a.directChat.enable&&$(document).on("click",a.directChat.contactToggleSelector,function(){var a=$(this).parents(".direct-chat").first();a.toggleClass("direct-chat-contacts-open")}),$('.btn-group[data-toggle="btn-toggle"]').each(function(){var a=$(this);$(this).find(".btn").on("click",function(b){a.find(".btn.active").removeClass("active"),$(this).addClass("active"),b.preventDefault()})})}),function(a){"use strict";a.fn.boxRefresh=function(b){function c(a){a.append(f),e.onLoadStart.call(a)}function d(a){a.find(f).remove(),e.onLoadDone.call(a)}var e=a.extend({trigger:".refresh-btn",source:"",onLoadStart:function(a){return a},onLoadDone:function(a){return a}},b),f=a('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');return this.each(function(){if(""===e.source)return void(window.console&&window.console.log("Please specify a source first - boxRefresh()"));var b=a(this),f=b.find(e.trigger).first();f.on("click",function(a){a.preventDefault(),c(b),b.find(".box-body").load(e.source,function(){d(b)})})})}}(jQuery),function(a){"use strict";a.fn.activateBox=function(){a.AdminLTE.boxWidget.activate(this)},a.fn.toggleBox=function(){var b=a(a.AdminLTE.boxWidget.selectors.collapse,this);a.AdminLTE.boxWidget.collapse(b)},a.fn.removeBox=function(){var b=a(a.AdminLTE.boxWidget.selectors.remove,this);a.AdminLTE.boxWidget.remove(b)}}(jQuery),function(a){"use strict";a.fn.todolist=function(b){var c=a.extend({onCheck:function(a){return a},onUncheck:function(a){return a}},b);return this.each(function(){"undefined"!=typeof a.fn.iCheck?(a("input",this).on("ifChecked",function(){var b=a(this).parents("li").first();b.toggleClass("done"),c.onCheck.call(b)}),a("input",this).on("ifUnchecked",function(){var b=a(this).parents("li").first();b.toggleClass("done"),c.onUncheck.call(b)})):a("input",this).on("change",function(){var b=a(this).parents("li").first();b.toggleClass("done"),a("input",b).is(":checked")?c.onCheck.call(b):c.onUncheck.call(b)})})}}(jQuery);;(function(){var AjaxMonitor,Bar,DocumentMonitor,ElementMonitor,ElementTracker,EventLagMonitor,Evented,Events,NoTargetError,Pace,RequestIntercept,SOURCE_KEYS,Scaler,SocketRequestTracker,XHRRequestTracker,animation,avgAmplitude,bar,cancelAnimation,cancelAnimationFrame,defaultOptions,extend,extendNative,getFromDOM,getIntercept,handlePushState,ignoreStack,init,now,options,requestAnimationFrame,result,runAnimation,scalers,shouldIgnoreURL,shouldTrack,source,sources,uniScaler,_WebSocket,_XDomainRequest,_XMLHttpRequest,_i,_intercept,_len,_pushState,_ref,_ref1,_replaceState,__slice=[].slice,__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;};defaultOptions={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:true,restartOnPushState:true,restartOnRequestAfter:500,target:'body',elements:{checkInterval:100,selectors:['body']},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:['GET'],trackWebSockets:false,ignoreURLs:[]}};now=function(){var _ref;return(_ref=typeof performance!=="undefined"&&performance!==null?typeof performance.now==="function"?performance.now():void 0:void 0)!=null?_ref:+(new Date);};requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame;if(requestAnimationFrame==null){requestAnimationFrame=function(fn){return setTimeout(fn,50);};cancelAnimationFrame=function(id){return clearTimeout(id);};}
runAnimation=function(fn){var last,tick;last=now();tick=function(){var diff;diff=now()-last;if(diff>=33){last=now();return fn(diff,function(){return requestAnimationFrame(tick);});}else{return setTimeout(tick,33-diff);}};return tick();};result=function(){var args,key,obj;obj=arguments[0],key=arguments[1],args=3<=arguments.length?__slice.call(arguments,2):[];if(typeof obj[key]==='function'){return obj[key].apply(obj,args);}else{return obj[key];}};extend=function(){var key,out,source,sources,val,_i,_len;out=arguments[0],sources=2<=arguments.length?__slice.call(arguments,1):[];for(_i=0,_len=sources.length;_i<_len;_i++){source=sources[_i];if(source){for(key in source){if(!__hasProp.call(source,key))continue;val=source[key];if((out[key]!=null)&&typeof out[key]==='object'&&(val!=null)&&typeof val==='object'){extend(out[key],val);}else{out[key]=val;}}}}
return out;};avgAmplitude=function(arr){var count,sum,v,_i,_len;sum=count=0;for(_i=0,_len=arr.length;_i<_len;_i++){v=arr[_i];sum+=Math.abs(v);count++;}
return sum/count;};getFromDOM=function(key,json){var data,e,el;if(key==null){key='options';}
if(json==null){json=true;}
el=document.querySelector("[data-pace-"+key+"]");if(!el){return;}
data=el.getAttribute("data-pace-"+key);if(!json){return data;}
try{return JSON.parse(data);}catch(_error){e=_error;return typeof console!=="undefined"&&console!==null?console.error("Error parsing inline pace options",e):void 0;}};Evented=(function(){function Evented(){}
Evented.prototype.on=function(event,handler,ctx,once){var _base;if(once==null){once=false;}
if(this.bindings==null){this.bindings={};}
if((_base=this.bindings)[event]==null){_base[event]=[];}
return this.bindings[event].push({handler:handler,ctx:ctx,once:once});};Evented.prototype.once=function(event,handler,ctx){return this.on(event,handler,ctx,true);};Evented.prototype.off=function(event,handler){var i,_ref,_results;if(((_ref=this.bindings)!=null?_ref[event]:void 0)==null){return;}
if(handler==null){return delete this.bindings[event];}else{i=0;_results=[];while(i<this.bindings[event].length){if(this.bindings[event][i].handler===handler){_results.push(this.bindings[event].splice(i,1));}else{_results.push(i++);}}
return _results;}};Evented.prototype.trigger=function(){var args,ctx,event,handler,i,once,_ref,_ref1,_results;event=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];if((_ref=this.bindings)!=null?_ref[event]:void 0){i=0;_results=[];while(i<this.bindings[event].length){_ref1=this.bindings[event][i],handler=_ref1.handler,ctx=_ref1.ctx,once=_ref1.once;handler.apply(ctx!=null?ctx:this,args);if(once){_results.push(this.bindings[event].splice(i,1));}else{_results.push(i++);}}
return _results;}};return Evented;})();Pace=window.Pace||{};window.Pace=Pace;extend(Pace,Evented.prototype);options=Pace.options=extend({},defaultOptions,window.paceOptions,getFromDOM());_ref=['ajax','document','eventLag','elements'];for(_i=0,_len=_ref.length;_i<_len;_i++){source=_ref[_i];if(options[source]===true){options[source]=defaultOptions[source];}}
NoTargetError=(function(_super){__extends(NoTargetError,_super);function NoTargetError(){_ref1=NoTargetError.__super__.constructor.apply(this,arguments);return _ref1;}
return NoTargetError;})(Error);Bar=(function(){function Bar(){this.progress=0;}
Bar.prototype.getElement=function(){var targetElement;if(this.el==null){targetElement=document.querySelector(options.target);if(!targetElement){throw new NoTargetError;}
this.el=document.createElement('div');this.el.className="pace pace-active";document.body.className=document.body.className.replace(/pace-done/g,'');document.body.className+=' pace-running';this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';if(targetElement.firstChild!=null){targetElement.insertBefore(this.el,targetElement.firstChild);}else{targetElement.appendChild(this.el);}}
return this.el;};Bar.prototype.finish=function(){var el;el=this.getElement();el.className=el.className.replace('pace-active','');el.className+=' pace-inactive';document.body.className=document.body.className.replace('pace-running','');return document.body.className+=' pace-done';};Bar.prototype.update=function(prog){this.progress=prog;return this.render();};Bar.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement());}catch(_error){NoTargetError=_error;}
return this.el=void 0;};Bar.prototype.render=function(){var el,key,progressStr,transform,_j,_len1,_ref2;if(document.querySelector(options.target)==null){return false;}
el=this.getElement();transform="translate3d("+this.progress+"%, 0, 0)";_ref2=['webkitTransform','msTransform','transform'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){key=_ref2[_j];el.children[0].style[key]=transform;}
if(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0){el.children[0].setAttribute('data-progress-text',""+(this.progress|0)+"%");if(this.progress>=100){progressStr='99';}else{progressStr=this.progress<10?"0":"";progressStr+=this.progress|0;}
el.children[0].setAttribute('data-progress',""+progressStr);}
return this.lastRenderedProgress=this.progress;};Bar.prototype.done=function(){return this.progress>=100;};return Bar;})();Events=(function(){function Events(){this.bindings={};}
Events.prototype.trigger=function(name,val){var binding,_j,_len1,_ref2,_results;if(this.bindings[name]!=null){_ref2=this.bindings[name];_results=[];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){binding=_ref2[_j];_results.push(binding.call(this,val));}
return _results;}};Events.prototype.on=function(name,fn){var _base;if((_base=this.bindings)[name]==null){_base[name]=[];}
return this.bindings[name].push(fn);};return Events;})();_XMLHttpRequest=window.XMLHttpRequest;_XDomainRequest=window.XDomainRequest;_WebSocket=window.WebSocket;extendNative=function(to,from){var e,key,_results;_results=[];for(key in from.prototype){try{if((to[key]==null)&&typeof from[key]!=='function'){if(typeof Object.defineProperty==='function'){_results.push(Object.defineProperty(to,key,{get:function(){return from.prototype[key];},configurable:true,enumerable:true}));}else{_results.push(to[key]=from.prototype[key]);}}else{_results.push(void 0);}}catch(_error){e=_error;}}
return _results;};ignoreStack=[];Pace.ignore=function(){var args,fn,ret;fn=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];ignoreStack.unshift('ignore');ret=fn.apply(null,args);ignoreStack.shift();return ret;};Pace.track=function(){var args,fn,ret;fn=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];ignoreStack.unshift('track');ret=fn.apply(null,args);ignoreStack.shift();return ret;};shouldTrack=function(method){var _ref2;if(method==null){method='GET';}
if(ignoreStack[0]==='track'){return'force';}
if(!ignoreStack.length&&options.ajax){if(method==='socket'&&options.ajax.trackWebSockets){return true;}else if(_ref2=method.toUpperCase(),__indexOf.call(options.ajax.trackMethods,_ref2)>=0){return true;}}
return false;};RequestIntercept=(function(_super){__extends(RequestIntercept,_super);function RequestIntercept(){var monitorXHR,_this=this;RequestIntercept.__super__.constructor.apply(this,arguments);monitorXHR=function(req){var _open;_open=req.open;return req.open=function(type,url,async){if(shouldTrack(type)){_this.trigger('request',{type:type,url:url,request:req});}
return _open.apply(req,arguments);};};window.XMLHttpRequest=function(flags){var req;req=new _XMLHttpRequest(flags);monitorXHR(req);return req;};try{extendNative(window.XMLHttpRequest,_XMLHttpRequest);}catch(_error){}
if(_XDomainRequest!=null){window.XDomainRequest=function(){var req;req=new _XDomainRequest;monitorXHR(req);return req;};try{extendNative(window.XDomainRequest,_XDomainRequest);}catch(_error){}}
if((_WebSocket!=null)&&options.ajax.trackWebSockets){window.WebSocket=function(url,protocols){var req;if(protocols!=null){req=new _WebSocket(url,protocols);}else{req=new _WebSocket(url);}
if(shouldTrack('socket')){_this.trigger('request',{type:'socket',url:url,protocols:protocols,request:req});}
return req;};try{extendNative(window.WebSocket,_WebSocket);}catch(_error){}}}
return RequestIntercept;})(Events);_intercept=null;getIntercept=function(){if(_intercept==null){_intercept=new RequestIntercept;}
return _intercept;};shouldIgnoreURL=function(url){var pattern,_j,_len1,_ref2;_ref2=options.ajax.ignoreURLs;for(_j=0,_len1=_ref2.length;_j<_len1;_j++){pattern=_ref2[_j];if(typeof pattern==='string'){if(url.indexOf(pattern)!==-1){return true;}}else{if(pattern.test(url)){return true;}}}
return false;};getIntercept().on('request',function(_arg){var after,args,request,type,url;type=_arg.type,request=_arg.request,url=_arg.url;if(shouldIgnoreURL(url)){return;}
if(!Pace.running&&(options.restartOnRequestAfter!==false||shouldTrack(type)==='force')){args=arguments;after=options.restartOnRequestAfter||0;if(typeof after==='boolean'){after=0;}
return setTimeout(function(){var stillActive,_j,_len1,_ref2,_ref3,_results;if(type==='socket'){stillActive=request.readyState<2;}else{stillActive=(0<(_ref2=request.readyState)&&_ref2<4);}
if(stillActive){Pace.restart();_ref3=Pace.sources;_results=[];for(_j=0,_len1=_ref3.length;_j<_len1;_j++){source=_ref3[_j];if(source instanceof AjaxMonitor){source.watch.apply(source,args);break;}else{_results.push(void 0);}}
return _results;}},after);}});AjaxMonitor=(function(){function AjaxMonitor(){var _this=this;this.elements=[];getIntercept().on('request',function(){return _this.watch.apply(_this,arguments);});}
AjaxMonitor.prototype.watch=function(_arg){var request,tracker,type,url;type=_arg.type,request=_arg.request,url=_arg.url;if(shouldIgnoreURL(url)){return;}
if(type==='socket'){tracker=new SocketRequestTracker(request);}else{tracker=new XHRRequestTracker(request);}
return this.elements.push(tracker);};return AjaxMonitor;})();XHRRequestTracker=(function(){function XHRRequestTracker(request){var event,size,_j,_len1,_onreadystatechange,_ref2,_this=this;this.progress=0;if(window.ProgressEvent!=null){size=null;request.addEventListener('progress',function(evt){if(evt.lengthComputable){return _this.progress=100*evt.loaded/evt.total;}else{return _this.progress=_this.progress+(100-_this.progress)/2;}},false);_ref2=['load','abort','timeout','error'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){event=_ref2[_j];request.addEventListener(event,function(){return _this.progress=100;},false);}}else{_onreadystatechange=request.onreadystatechange;request.onreadystatechange=function(){var _ref3;if((_ref3=request.readyState)===0||_ref3===4){_this.progress=100;}else if(request.readyState===3){_this.progress=50;}
return typeof _onreadystatechange==="function"?_onreadystatechange.apply(null,arguments):void 0;};}}
return XHRRequestTracker;})();SocketRequestTracker=(function(){function SocketRequestTracker(request){var event,_j,_len1,_ref2,_this=this;this.progress=0;_ref2=['error','open'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){event=_ref2[_j];request.addEventListener(event,function(){return _this.progress=100;},false);}}
return SocketRequestTracker;})();ElementMonitor=(function(){function ElementMonitor(options){var selector,_j,_len1,_ref2;if(options==null){options={};}
this.elements=[];if(options.selectors==null){options.selectors=[];}
_ref2=options.selectors;for(_j=0,_len1=_ref2.length;_j<_len1;_j++){selector=_ref2[_j];this.elements.push(new ElementTracker(selector));}}
return ElementMonitor;})();ElementTracker=(function(){function ElementTracker(selector){this.selector=selector;this.progress=0;this.check();}
ElementTracker.prototype.check=function(){var _this=this;if(document.querySelector(this.selector)){return this.done();}else{return setTimeout((function(){return _this.check();}),options.elements.checkInterval);}};ElementTracker.prototype.done=function(){return this.progress=100;};return ElementTracker;})();DocumentMonitor=(function(){DocumentMonitor.prototype.states={loading:0,interactive:50,complete:100};function DocumentMonitor(){var _onreadystatechange,_ref2,_this=this;this.progress=(_ref2=this.states[document.readyState])!=null?_ref2:100;_onreadystatechange=document.onreadystatechange;document.onreadystatechange=function(){if(_this.states[document.readyState]!=null){_this.progress=_this.states[document.readyState];}
return typeof _onreadystatechange==="function"?_onreadystatechange.apply(null,arguments):void 0;};}
return DocumentMonitor;})();EventLagMonitor=(function(){function EventLagMonitor(){var avg,interval,last,points,samples,_this=this;this.progress=0;avg=0;samples=[];points=0;last=now();interval=setInterval(function(){var diff;diff=now()-last-50;last=now();samples.push(diff);if(samples.length>options.eventLag.sampleCount){samples.shift();}
avg=avgAmplitude(samples);if(++points>=options.eventLag.minSamples&&avg<options.eventLag.lagThreshold){_this.progress=100;return clearInterval(interval);}else{return _this.progress=100*(3/(avg+3));}},50);}
return EventLagMonitor;})();Scaler=(function(){function Scaler(source){this.source=source;this.last=this.sinceLastUpdate=0;this.rate=options.initialRate;this.catchup=0;this.progress=this.lastProgress=0;if(this.source!=null){this.progress=result(this.source,'progress');}}
Scaler.prototype.tick=function(frameTime,val){var scaling;if(val==null){val=result(this.source,'progress');}
if(val>=100){this.done=true;}
if(val===this.last){this.sinceLastUpdate+=frameTime;}else{if(this.sinceLastUpdate){this.rate=(val-this.last)/this.sinceLastUpdate;}
this.catchup=(val-this.progress)/options.catchupTime;this.sinceLastUpdate=0;this.last=val;}
if(val>this.progress){this.progress+=this.catchup*frameTime;}
scaling=1-Math.pow(this.progress/100,options.easeFactor);this.progress+=scaling*this.rate*frameTime;this.progress=Math.min(this.lastProgress+options.maxProgressPerFrame,this.progress);this.progress=Math.max(0,this.progress);this.progress=Math.min(100,this.progress);this.lastProgress=this.progress;return this.progress;};return Scaler;})();sources=null;scalers=null;bar=null;uniScaler=null;animation=null;cancelAnimation=null;Pace.running=false;handlePushState=function(){if(options.restartOnPushState){return Pace.restart();}};if(window.history.pushState!=null){_pushState=window.history.pushState;window.history.pushState=function(){handlePushState();return _pushState.apply(window.history,arguments);};}
if(window.history.replaceState!=null){_replaceState=window.history.replaceState;window.history.replaceState=function(){handlePushState();return _replaceState.apply(window.history,arguments);};}
SOURCE_KEYS={ajax:AjaxMonitor,elements:ElementMonitor,document:DocumentMonitor,eventLag:EventLagMonitor};(init=function(){var type,_j,_k,_len1,_len2,_ref2,_ref3,_ref4;Pace.sources=sources=[];_ref2=['ajax','elements','document','eventLag'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){type=_ref2[_j];if(options[type]!==false){sources.push(new SOURCE_KEYS[type](options[type]));}}
_ref4=(_ref3=options.extraSources)!=null?_ref3:[];for(_k=0,_len2=_ref4.length;_k<_len2;_k++){source=_ref4[_k];sources.push(new source(options));}
Pace.bar=bar=new Bar;scalers=[];return uniScaler=new Scaler;})();Pace.stop=function(){Pace.trigger('stop');Pace.running=false;bar.destroy();cancelAnimation=true;if(animation!=null){if(typeof cancelAnimationFrame==="function"){cancelAnimationFrame(animation);}
animation=null;}
return init();};Pace.restart=function(){Pace.trigger('restart');Pace.stop();return Pace.start();};Pace.go=function(){var start;Pace.running=true;bar.render();start=now();cancelAnimation=false;return animation=runAnimation(function(frameTime,enqueueNextFrame){var avg,count,done,element,elements,i,j,remaining,scaler,scalerList,sum,_j,_k,_len1,_len2,_ref2;remaining=100-bar.progress;count=sum=0;done=true;for(i=_j=0,_len1=sources.length;_j<_len1;i=++_j){source=sources[i];scalerList=scalers[i]!=null?scalers[i]:scalers[i]=[];elements=(_ref2=source.elements)!=null?_ref2:[source];for(j=_k=0,_len2=elements.length;_k<_len2;j=++_k){element=elements[j];scaler=scalerList[j]!=null?scalerList[j]:scalerList[j]=new Scaler(element);done&=scaler.done;if(scaler.done){continue;}
count++;sum+=scaler.tick(frameTime);}}
avg=sum/count;bar.update(uniScaler.tick(frameTime,avg));if(bar.done()||done||cancelAnimation){bar.update(100);Pace.trigger('done');return setTimeout(function(){bar.finish();Pace.running=false;return Pace.trigger('hide');},Math.max(options.ghostTime,Math.max(options.minTime-(now()-start),0)));}else{return enqueueNextFrame();}});};Pace.start=function(_options){extend(options,_options);Pace.running=true;try{bar.render();}catch(_error){NoTargetError=_error;}
if(!document.querySelector('.pace')){return setTimeout(Pace.start,50);}else{Pace.trigger('start');return Pace.go();}};if(typeof define==='function'&&define.amd){define(['pace'],function(){return Pace;});}else if(typeof exports==='object'){module.exports=Pace;}else{if(options.startOnPageLoad){Pace.start();}}}).call(this);;$(document).on("click",".modal-btn",function(){var button=$(this);$('#modal-content').load(button.attr('value'));$('span#modal-header').html(button.attr('data-modal-header'));$('#modal-view').modal('show');});$(document).on("click",".pjax-btn",function(){var button=$(this);$.get(button.attr("value"),function(data){if(data==1){$.pjax.reload({container:"#"+button.attr("data-container")});}});});var collapse=localStorage.getItem('collapse-menu');if(collapse==1){$('body').addClass('sidebar-collapse');}
$(document).on('click','.sidebar-toggle',function(){if($('body').hasClass('sidebar-collapse')){localStorage.setItem('collapse-menu','0');}
else{localStorage.setItem('collapse-menu','1');}});var boxed=localStorage.getItem('layout-boxed');if(boxed==0){$('body').removeClass('layout-boxed');}
else{$('body').addClass('layout-boxed');}
$(document).on('click','.change-layout',function(){if($('body').hasClass('layout-boxed')){$('body').removeClass('layout-boxed');localStorage.setItem('layout-boxed','0');}
else{$('body').addClass('layout-boxed');localStorage.setItem('layout-boxed','1');}});;