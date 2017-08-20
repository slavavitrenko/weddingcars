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
return jQuery;}));;yii=(function($){var pub={reloadableScripts:[],clickableSelector:'button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',changeableSelector:'select, input, textarea',getCsrfParam:function(){return $('meta[name=csrf-param]').attr('content');},getCsrfToken:function(){return $('meta[name=csrf-token]').attr('content');},setCsrfToken:function(name,value){$('meta[name=csrf-param]').attr('content',name);$('meta[name=csrf-token]').attr('content',value);},refreshCsrfToken:function(){var token=pub.getCsrfToken();if(token){$('form input[name="'+pub.getCsrfParam()+'"]').val(token);}},confirm:function(message,ok,cancel){if(confirm(message)){!ok||ok();}else{!cancel||cancel();}},handleAction:function($e,event){var $form=$e.attr('data-form')?$('#'+$e.attr('data-form')):$e.closest('form'),method=!$e.data('method')&&$form?$form.attr('method'):$e.data('method'),action=$e.attr('href'),params=$e.data('params'),pjax=$e.data('pjax'),pjaxPushState=!!$e.data('pjax-push-state'),pjaxReplaceState=!!$e.data('pjax-replace-state'),pjaxTimeout=$e.data('pjax-timeout'),pjaxScrollTo=$e.data('pjax-scrollto'),pjaxPushRedirect=$e.data('pjax-push-redirect'),pjaxReplaceRedirect=$e.data('pjax-replace-redirect'),pjaxSkipOuterContainers=$e.data('pjax-skip-outer-containers'),pjaxContainer,pjaxOptions={};if(pjax!==undefined&&$.support.pjax){if($e.data('pjax-container')){pjaxContainer=$e.data('pjax-container');}else{pjaxContainer=$e.closest('[data-pjax-container=""]');}
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
return pub;})(jQuery);jQuery(document).ready(function(){yii.initModule(yii);});;yii.validation=(function($){var pub={isEmpty:function(value){return value===null||value===undefined||value==[]||value==='';},addMessage:function(messages,message,value){messages.push(message.replace(/\{value\}/g,value));},required:function(value,messages,options){var valid=false;if(options.requiredValue===undefined){var isString=typeof value=='string'||value instanceof String;if(options.strict&&value!==undefined||!options.strict&&!pub.isEmpty(isString?$.trim(value):value)){valid=true;}}else if(!options.strict&&value==options.requiredValue||options.strict&&value===options.requiredValue){valid=true;}
if(!valid){pub.addMessage(messages,options.message,value);}},'boolean':function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var valid=!options.strict&&(value==options.trueValue||value==options.falseValue)||options.strict&&(value===options.trueValue||value===options.falseValue);if(!valid){pub.addMessage(messages,options.message,value);}},string:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(typeof value!=='string'){pub.addMessage(messages,options.message,value);return;}
if(options.min!==undefined&&value.length<options.min){pub.addMessage(messages,options.tooShort,value);}
if(options.max!==undefined&&value.length>options.max){pub.addMessage(messages,options.tooLong,value);}
if(options.is!==undefined&&value.length!=options.is){pub.addMessage(messages,options.notEqual,value);}},file:function(attribute,messages,options){var files=getUploadedFiles(attribute,messages,options);$.each(files,function(i,file){validateFile(file,messages,options);});},image:function(attribute,messages,options,deferred){var files=getUploadedFiles(attribute,messages,options);$.each(files,function(i,file){validateFile(file,messages,options);if(typeof FileReader==="undefined"){return;}
var def=$.Deferred(),fr=new FileReader(),img=new Image();img.onload=function(){if(options.minWidth&&this.width<options.minWidth){messages.push(options.underWidth.replace(/\{file\}/g,file.name));}
if(options.maxWidth&&this.width>options.maxWidth){messages.push(options.overWidth.replace(/\{file\}/g,file.name));}
if(options.minHeight&&this.height<options.minHeight){messages.push(options.underHeight.replace(/\{file\}/g,file.name));}
if(options.maxHeight&&this.height>options.maxHeight){messages.push(options.overHeight.replace(/\{file\}/g,file.name));}
def.resolve();};img.onerror=function(){messages.push(options.notImage.replace(/\{file\}/g,file.name));def.resolve();};fr.onload=function(){img.src=fr.result;};fr.onerror=function(){def.resolve();};fr.readAsDataURL(file);deferred.push(def);});},number:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(typeof value==='string'&&!value.match(options.pattern)){pub.addMessage(messages,options.message,value);return;}
if(options.min!==undefined&&value<options.min){pub.addMessage(messages,options.tooSmall,value);}
if(options.max!==undefined&&value>options.max){pub.addMessage(messages,options.tooBig,value);}},range:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(!options.allowArray&&$.isArray(value)){pub.addMessage(messages,options.message,value);return;}
var inArray=true;$.each($.isArray(value)?value:[value],function(i,v){if($.inArray(v,options.range)==-1){inArray=false;return false;}else{return true;}});if(options.not===inArray){pub.addMessage(messages,options.message,value);}},regularExpression:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(!options.not&&!value.match(options.pattern)||options.not&&value.match(options.pattern)){pub.addMessage(messages,options.message,value);}},email:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var valid=true;var regexp=/^((?:"?([^"]*)"?\s)?)(?:\s+)?(?:(<?)((.+)@([^>]+))(>?))$/,matches=regexp.exec(value);if(matches===null){valid=false}else{if(options.enableIDN){matches[5]=punycode.toASCII(matches[5]);matches[6]=punycode.toASCII(matches[6]);value=matches[1]+matches[3]+matches[5]+'@'+matches[6]+matches[7];}
if(matches[5].length>64){valid=false;}else if((matches[5]+'@'+matches[6]).length>254){valid=false;}else{valid=value.match(options.pattern)||(options.allowName&&value.match(options.fullPattern));}}
if(!valid){pub.addMessage(messages,options.message,value);}},url:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
if(options.defaultScheme&&!value.match(/:\/\//)){value=options.defaultScheme+'://'+value;}
var valid=true;if(options.enableIDN){var regexp=/^([^:]+):\/\/([^\/]+)(.*)$/,matches=regexp.exec(value);if(matches===null){valid=false;}else{value=matches[1]+'://'+punycode.toASCII(matches[2])+matches[3];}}
if(!valid||!value.match(options.pattern)){pub.addMessage(messages,options.message,value);}},trim:function($form,attribute,options){var $input=$form.find(attribute.input);var value=$input.val();if(!options.skipOnEmpty||!pub.isEmpty(value)){value=$.trim(value);$input.val(value);}
return value;},captcha:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var hash=$('body').data(options.hashKey);if(hash==null){hash=options.hash;}else{hash=hash[options.caseSensitive?0:1];}
var v=options.caseSensitive?value:value.toLowerCase();for(var i=v.length-1,h=0;i>=0;--i){h+=v.charCodeAt(i);}
if(h!=hash){pub.addMessage(messages,options.message,value);}},compare:function(value,messages,options){if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var compareValue,valid=true;if(options.compareAttribute===undefined){compareValue=options.compareValue;}else{compareValue=$('#'+options.compareAttribute).val();}
if(options.type==='number'){value=parseFloat(value);compareValue=parseFloat(compareValue);}
switch(options.operator){case'==':valid=value==compareValue;break;case'===':valid=value===compareValue;break;case'!=':valid=value!=compareValue;break;case'!==':valid=value!==compareValue;break;case'>':valid=value>compareValue;break;case'>=':valid=value>=compareValue;break;case'<':valid=value<compareValue;break;case'<=':valid=value<=compareValue;break;default:valid=false;break;}
if(!valid){pub.addMessage(messages,options.message,value);}},ip:function(value,messages,options){var getIpVersion=function(value){return value.indexOf(':')===-1?4:6;};var negation=null,cidr=null;if(options.skipOnEmpty&&pub.isEmpty(value)){return;}
var matches=new RegExp(options.ipParsePattern).exec(value);if(matches){negation=matches[1]||null;value=matches[2];cidr=matches[4]||null;}
if(options.subnet===true&&cidr===null){pub.addMessage(messages,options.messages.noSubnet,value);return;}
if(options.subnet===false&&cidr!==null){pub.addMessage(messages,options.messages.hasSubnet,value);return;}
if(options.negation===false&&negation!==null){pub.addMessage(messages,options.messages.message,value);return;}
if(getIpVersion(value)==6){if(!options.ipv6){pub.addMessage(messages,options.messages.ipv6NotAllowed,value);}
if(!(new RegExp(options.ipv6Pattern)).test(value)){pub.addMessage(messages,options.messages.message,value);}}else{if(!options.ipv4){pub.addMessage(messages,options.messages.ipv4NotAllowed,value);}
if(!(new RegExp(options.ipv4Pattern)).test(value)){pub.addMessage(messages,options.messages.message,value);}}}};function getUploadedFiles(attribute,messages,options){if(typeof File==="undefined"){return[];}
var files=$(attribute.input,attribute.$form).get(0).files;if(!files){messages.push(options.message);return[];}
if(files.length===0){if(!options.skipOnEmpty){messages.push(options.uploadRequired);}
return[];}
if(options.maxFiles&&options.maxFiles<files.length){messages.push(options.tooMany);return[];}
return files;}
function validateFile(file,messages,options){if(options.extensions&&options.extensions.length>0){var index,ext;index=file.name.lastIndexOf('.');if(!~index){ext='';}else{ext=file.name.substr(index+1,file.name.length).toLowerCase();}
if(!~options.extensions.indexOf(ext)){messages.push(options.wrongExtension.replace(/\{file\}/g,file.name));}}
if(options.mimeTypes&&options.mimeTypes.length>0){if(!validateMimeType(options.mimeTypes,file.type)){messages.push(options.wrongMimeType.replace(/\{file\}/g,file.name));}}
if(options.maxSize&&options.maxSize<file.size){messages.push(options.tooBig.replace(/\{file\}/g,file.name));}
if(options.minSize&&options.minSize>file.size){messages.push(options.tooSmall.replace(/\{file\}/g,file.name));}}
function validateMimeType(mimeTypes,fileType){for(var i=0,len=mimeTypes.length;i<len;i++){if(new RegExp(mimeTypes[i]).test(fileType)){return true;}}
return false;}
return pub;})(jQuery);;(function($)
{'use strict';if(!Function.prototype.bind)
{Function.prototype.bind=function(scope)
{var fn=this;return function()
{return fn.apply(scope);};};}
var uuid=0;$.fn.redactor=function(options)
{var val=[];var args=Array.prototype.slice.call(arguments,1);if(typeof options==='string')
{this.each(function()
{var instance=$.data(this,'redactor');var func;if(options.search(/\./)!='-1')
{func=options.split('.');if(typeof instance[func[0]]!='undefined')
{func=instance[func[0]][func[1]];}}
else
{func=instance[options];}
if(typeof instance!=='undefined'&&$.isFunction(func))
{var methodVal=func.apply(instance,args);if(methodVal!==undefined&&methodVal!==instance)
{val.push(methodVal);}}
else
{$.error('No such method "'+options+'" for Redactor');}});}
else
{this.each(function()
{$.data(this,'redactor',{});$.data(this,'redactor',Redactor(this,options));});}
if(val.length===0)return this;else if(val.length===1)return val[0];else return val;};function Redactor(el,options)
{return new Redactor.prototype.init(el,options);}
$.Redactor=Redactor;$.Redactor.VERSION='10.2.2';$.Redactor.modules=['alignment','autosave','block','buffer','build','button','caret','clean','code','core','dropdown','file','focus','image','indent','inline','insert','keydown','keyup','lang','line','link','linkify','list','modal','observe','paragraphize','paste','placeholder','progress','selection','shortcuts','tabifier','tidy','toolbar','upload','utils'];$.Redactor.opts={lang:'en',direction:'ltr',plugins:false,focus:false,focusEnd:false,placeholder:false,visual:true,tabindex:false,minHeight:false,maxHeight:false,linebreaks:false,replaceDivs:true,paragraphize:true,cleanStyleOnEnter:false,enterKey:true,cleanOnPaste:true,cleanSpaces:true,pastePlainText:false,autosave:false,autosaveName:false,autosaveInterval:60,autosaveOnChange:false,autosaveFields:false,linkTooltip:true,linkProtocol:'http',linkNofollow:false,linkSize:50,imageEditable:true,imageLink:true,imagePosition:true,imageFloatMargin:'10px',imageResizable:true,imageUpload:null,imageUploadParam:'file',uploadImageField:false,dragImageUpload:true,fileUpload:null,fileUploadParam:'file',dragFileUpload:true,s3:false,convertLinks:true,convertUrlLinks:true,convertImageLinks:true,convertVideoLinks:true,preSpaces:4,tabAsSpaces:false,tabKey:true,scrollTarget:false,toolbar:true,toolbarFixed:true,toolbarFixedTarget:document,toolbarFixedTopOffset:0,toolbarExternal:false,toolbarOverflow:false,source:true,buttons:['html','formatting','bold','italic','deleted','unorderedlist','orderedlist','outdent','indent','image','file','link','alignment','horizontalrule'],buttonsHide:[],buttonsHideOnMobile:[],formatting:['p','blockquote','pre','h1','h2','h3','h4','h5','h6'],formattingAdd:false,tabifier:true,deniedTags:['script','style'],allowedTags:false,paragraphizeBlocks:['table','div','pre','form','ul','ol','h1','h2','h3','h4','h5','h6','dl','blockquote','figcaption','address','section','header','footer','aside','article','object','style','script','iframe','select','input','textarea','button','option','map','area','math','hr','fieldset','legend','hgroup','nav','figure','details','menu','summary','p'],removeComments:false,replaceTags:[['strike','del'],['b','strong']],replaceStyles:[['font-weight:\\s?bold',"strong"],['font-style:\\s?italic',"em"],['text-decoration:\\s?underline',"u"],['text-decoration:\\s?line-through','del']],removeDataAttr:false,removeAttr:false,allowedAttr:false,removeWithoutAttr:['span'],removeEmpty:['p'],activeButtons:['deleted','italic','bold','underline','unorderedlist','orderedlist','alignleft','aligncenter','alignright','justify'],activeButtonsStates:{b:'bold',strong:'bold',i:'italic',em:'italic',del:'deleted',strike:'deleted',ul:'unorderedlist',ol:'orderedlist',u:'underline'},shortcuts:{'ctrl+shift+m, meta+shift+m':{func:'inline.removeFormat'},'ctrl+b, meta+b':{func:'inline.format',params:['bold']},'ctrl+i, meta+i':{func:'inline.format',params:['italic']},'ctrl+h, meta+h':{func:'inline.format',params:['superscript']},'ctrl+l, meta+l':{func:'inline.format',params:['subscript']},'ctrl+k, meta+k':{func:'link.show'},'ctrl+shift+7':{func:'list.toggle',params:['orderedlist']},'ctrl+shift+8':{func:'list.toggle',params:['unorderedlist']}},shortcutsAdd:false,buffer:[],rebuffer:[],emptyHtml:'<p>&#x200b;</p>',invisibleSpace:'&#x200b;',imageTypes:['image/png','image/jpeg','image/gif'],indentValue:20,verifiedTags:['a','img','b','strong','sub','sup','i','em','u','small','strike','del','cite','ul','ol','li'],inlineTags:['strong','b','u','em','i','code','del','ins','samp','kbd','sup','sub','mark','var','cite','small'],alignmentTags:['P','H1','H2','H3','H4','H5','H6','DL','DT','DD','DIV','TD','BLOCKQUOTE','OUTPUT','FIGCAPTION','ADDRESS','SECTION','HEADER','FOOTER','ASIDE','ARTICLE'],blockLevelElements:['PRE','UL','OL','LI'],highContrast:false,observe:{dropdowns:[]},langs:{en:{html:'HTML',video:'Insert Video',image:'Insert Image',table:'Table',link:'Link',link_insert:'Insert link',link_edit:'Edit link',unlink:'Unlink',formatting:'Formatting',paragraph:'Normal text',quote:'Quote',code:'Code',header1:'Header 1',header2:'Header 2',header3:'Header 3',header4:'Header 4',header5:'Header 5',bold:'Bold',italic:'Italic',fontcolor:'Font Color',backcolor:'Back Color',unorderedlist:'Unordered List',orderedlist:'Ordered List',outdent:'Outdent',indent:'Indent',cancel:'Cancel',insert:'Insert',save:'Save',_delete:'Delete',insert_table:'Insert Table',insert_row_above:'Add Row Above',insert_row_below:'Add Row Below',insert_column_left:'Add Column Left',insert_column_right:'Add Column Right',delete_column:'Delete Column',delete_row:'Delete Row',delete_table:'Delete Table',rows:'Rows',columns:'Columns',add_head:'Add Head',delete_head:'Delete Head',title:'Title',image_position:'Position',none:'None',left:'Left',right:'Right',center:'Center',image_web_link:'Image Web Link',text:'Text',mailto:'Email',web:'URL',video_html_code:'Video Embed Code or Youtube/Vimeo Link',file:'Insert File',upload:'Upload',download:'Download',choose:'Choose',or_choose:'Or choose',drop_file_here:'Drop file here',align_left:'Align text to the left',align_center:'Center text',align_right:'Align text to the right',align_justify:'Justify text',horizontalrule:'Insert Horizontal Rule',deleted:'Deleted',anchor:'Anchor',link_new_tab:'Open link in new tab',underline:'Underline',alignment:'Alignment',filename:'Name (optional)',edit:'Edit',upload_label:'Drop file here or '}},linkify:{regexps:{youtube:/https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com\S*[^\w\-\s])([\w\-]{11})(?=[^\w\-]|$)(?![?=&+%\w.\-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig,vimeo:/https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/,image:/((https?|www)[^\s]+\.)(jpe?g|png|gif)(\?[^\s-]+)?/ig,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/ig,}},codemirror:false};Redactor.fn=$.Redactor.prototype={keyCode:{BACKSPACE:8,DELETE:46,UP:38,DOWN:40,ENTER:13,SPACE:32,ESC:27,TAB:9,CTRL:17,META:91,SHIFT:16,ALT:18,RIGHT:39,LEFT:37,LEFT_WIN:91},init:function(el,options)
{this.$element=$(el);this.uuid=uuid++;this.rtePaste=false;this.$pasteBox=false;this.loadOptions(options);this.loadModules();this.formatting={};$.merge(this.opts.blockLevelElements,this.opts.alignmentTags);this.reIsBlock=new RegExp('^('+this.opts.blockLevelElements.join('|')+')$','i');this.tidy.setupAllowed();if(this.opts.deniedTags!==false)
{var tags=['html','head','link','body','meta','applet'];for(var i=0;i<tags.length;i++)
{this.opts.deniedTags.push(tags[i]);}}
this.lang.load();$.extend(this.opts.shortcuts,this.opts.shortcutsAdd);this.core.setCallback('start');this.start=true;this.build.run();},loadOptions:function(options)
{this.opts=$.extend({},$.extend(true,{},$.Redactor.opts),this.$element.data(),options);},getModuleMethods:function(object)
{return Object.getOwnPropertyNames(object).filter(function(property)
{return typeof object[property]=='function';});},loadModules:function()
{var len=$.Redactor.modules.length;for(var i=0;i<len;i++)
{this.bindModuleMethods($.Redactor.modules[i]);}},bindModuleMethods:function(module)
{if(typeof this[module]=='undefined')return;this[module]=this[module]();var methods=this.getModuleMethods(this[module]);var len=methods.length;for(var z=0;z<len;z++)
{this[module][methods[z]]=this[module][methods[z]].bind(this);}},alignment:function()
{return{left:function()
{this.alignment.set('');},right:function()
{this.alignment.set('right');},center:function()
{this.alignment.set('center');},justify:function()
{this.alignment.set('justify');},set:function(type)
{if(!this.utils.browser('msie'))this.$editor.focus();this.buffer.set();this.selection.save();this.alignment.blocks=this.selection.getBlocks();this.alignment.type=type;if(this.alignment.isLinebreaksOrNoBlocks())
{this.alignment.setText();}
else
{this.alignment.setBlocks();}
this.selection.restore();this.code.sync();},setText:function()
{var wrapper=this.selection.wrap('div');$(wrapper).attr('data-tagblock','redactor').css('text-align',this.alignment.type);},setBlocks:function()
{$.each(this.alignment.blocks,$.proxy(function(i,el)
{var $el=this.utils.getAlignmentElement(el);if(!$el)return;if(this.alignment.isNeedReplaceElement($el))
{this.alignment.replaceElement($el);}
else
{this.alignment.alignElement($el);}},this));},isLinebreaksOrNoBlocks:function()
{return(this.opts.linebreaks&&this.alignment.blocks[0]===false);},isNeedReplaceElement:function($el)
{return(this.alignment.type===''&&typeof($el.data('tagblock'))!=='undefined');},replaceElement:function($el)
{$el.replaceWith($el.html());},alignElement:function($el)
{$el.css('text-align',this.alignment.type);this.utils.removeEmptyAttr($el,'style');}};},autosave:function()
{return{html:false,enable:function()
{if(!this.opts.autosave)return;this.autosave.name=(this.opts.autosaveName)?this.opts.autosaveName:this.$textarea.attr('name');if(this.opts.autosaveOnChange)return;this.autosaveInterval=setInterval(this.autosave.load,this.opts.autosaveInterval*1000);},onChange:function()
{if(!this.opts.autosaveOnChange)return;this.autosave.load();},load:function()
{this.autosave.source=this.code.get();if(this.autosave.html===this.autosave.source)return;var data={};data['name']=this.autosave.name;data[this.autosave.name]=this.autosave.source;data=this.autosave.getHiddenFields(data);var jsxhr=$.ajax({url:this.opts.autosave,type:'post',data:data});jsxhr.done(this.autosave.success);},getHiddenFields:function(data)
{if(this.opts.autosaveFields===false||typeof this.opts.autosaveFields!=='object')
{return data;}
$.each(this.opts.autosaveFields,$.proxy(function(k,v)
{if(v!==null&&v.toString().indexOf('#')===0)v=$(v).val();data[k]=v;},this));return data;},success:function(data)
{var json;try
{json=$.parseJSON(data);}
catch(e)
{json=data;}
var callbackName=(typeof json.error=='undefined')?'autosave':'autosaveError';this.core.setCallback(callbackName,this.autosave.name,json);this.autosave.html=this.autosave.source;},disable:function()
{clearInterval(this.autosaveInterval);}};},block:function()
{return{formatting:function(name)
{this.block.clearStyle=false;var type,value;if(typeof this.formatting[name].data!='undefined')type='data';else if(typeof this.formatting[name].attr!='undefined')type='attr';else if(typeof this.formatting[name]['class']!='undefined')type='class';if(typeof this.formatting[name].clear!='undefined')
{this.block.clearStyle=true;}
if(type)value=this.formatting[name][type];this.block.format(this.formatting[name].tag,type,value);},format:function(tag,type,value)
{if(tag=='quote')tag='blockquote';var formatTags=['p','pre','blockquote','h1','h2','h3','h4','h5','h6'];if($.inArray(tag,formatTags)==-1)return;this.block.isRemoveInline=(tag=='pre'||tag.search(/h[1-6]/i)!=-1);if(!this.utils.browser('msie'))this.$editor.focus();var html=$.trim(this.$editor.html());this.block.isEmpty=this.utils.isEmpty(html);if(this.utils.browser('mozilla')&&!this.focus.isFocused())
{if(this.block.isEmpty)
{var $first;if(!this.opts.linebreaks)
{$first=this.$editor.children().first();this.caret.setEnd($first);}}}
this.block.blocks=this.selection.getBlocks();this.block.blocksSize=this.block.blocks.length;this.block.type=type;this.block.value=value;this.buffer.set();this.selection.save();this.block.set(tag);this.selection.restore();this.code.sync();this.observe.load();},set:function(tag)
{this.selection.get();this.block.containerTag=this.range.commonAncestorContainer.tagName;if(this.range.collapsed)
{this.block.setCollapsed(tag);}
else
{this.block.setMultiple(tag);}},setCollapsed:function(tag)
{if(this.opts.linebreaks&&this.block.isEmpty&&tag!='p')
{var node=document.createElement(tag);this.$editor.html(node);this.caret.setEnd(node);return;}
var block=this.block.blocks[0];if(block===false)return;if(block.tagName=='LI')
{if(tag!='blockquote')return;this.block.formatListToBlockquote();return;}
var isContainerTable=(this.block.containerTag=='TD'||this.block.containerTag=='TH');if(isContainerTable&&!this.opts.linebreaks)
{document.execCommand('formatblock',false,'<'+tag+'>');block=this.selection.getBlock();this.block.toggle($(block));}
else if(block.tagName.toLowerCase()!=tag)
{if(this.opts.linebreaks&&tag=='p')
{$(block).append('<br>');this.utils.replaceWithContents(block);}
else
{var $formatted=this.utils.replaceToTag(block,tag);this.block.toggle($formatted);if(tag!='p'&&tag!='blockquote')$formatted.find('img').remove();if(this.block.isRemoveInline)this.utils.removeInlineTags($formatted);if(tag=='p'||this.block.headTag)$formatted.find('p').contents().unwrap();this.block.formatTableWrapping($formatted);}}
else if(tag=='blockquote'&&block.tagName.toLowerCase()==tag)
{if(this.opts.linebreaks)
{$(block).append('<br>');this.utils.replaceWithContents(block);}
else
{var $el=this.utils.replaceToTag(block,'p');this.block.toggle($el);}}
else if(block.tagName.toLowerCase()==tag)
{this.block.toggle($(block));}
if(typeof this.block.type=='undefined'&&typeof this.block.value=='undefined')
{$(block).removeAttr('class').removeAttr('style');}},setMultiple:function(tag)
{var block=this.block.blocks[0];var isContainerTable=(this.block.containerTag=='TD'||this.block.containerTag=='TH');if(block!==false&&this.block.blocksSize===1)
{if(block.tagName.toLowerCase()==tag&&tag=='blockquote')
{if(this.opts.linebreaks)
{$(block).append('<br>');this.utils.replaceWithContents(block);}
else
{var $el=this.utils.replaceToTag(block,'p');this.block.toggle($el);}}
else if(block.tagName=='LI')
{if(tag!='blockquote')return;this.block.formatListToBlockquote();}
else if(this.block.containerTag=='BLOCKQUOTE')
{this.block.formatBlockquote(tag);}
else if(this.opts.linebreaks&&((isContainerTable)||(this.range.commonAncestorContainer!=block)))
{this.block.formatWrap(tag);}
else
{if(this.opts.linebreaks&&tag=='p')
{$(block).prepend('<br>').append('<br>');this.utils.replaceWithContents(block);}
else if(block.tagName==='TD')
{this.block.formatWrap(tag);}
else
{var $formatted=this.utils.replaceToTag(block,tag);this.block.toggle($formatted);if(this.block.isRemoveInline)this.utils.removeInlineTags($formatted);if(tag=='p'||this.block.headTag)$formatted.find('p').contents().unwrap();}}}
else
{if(this.opts.linebreaks||tag!='p')
{if(tag=='blockquote')
{var count=0;for(var i=0;i<this.block.blocksSize;i++)
{if(this.block.blocks[i].tagName=='BLOCKQUOTE')count++;}
if(count==this.block.blocksSize)
{$.each(this.block.blocks,$.proxy(function(i,s)
{var $formatted=false;if(this.opts.linebreaks)
{$(s).prepend('<br>').append('<br>');$formatted=this.utils.replaceWithContents(s);}
else
{$formatted=this.utils.replaceToTag(s,'p');}
if($formatted&&typeof this.block.type=='undefined'&&typeof this.block.value=='undefined')
{$formatted.removeAttr('class').removeAttr('style');}},this));return;}}
this.block.formatWrap(tag);}
else
{var classSize=0;var toggleType=false;if(this.block.type=='class')
{toggleType='toggle';classSize=$(this.block.blocks).filter('.'+this.block.value).length;if(this.block.blocksSize==classSize)toggleType='toggle';else if(this.block.blocksSize>classSize)toggleType='set';else if(classSize===0)toggleType='set';}
var exceptTags=['ul','ol','li','td','th','dl','dt','dd'];$.each(this.block.blocks,$.proxy(function(i,s)
{if($.inArray(s.tagName.toLowerCase(),exceptTags)!=-1)return;var $formatted=this.utils.replaceToTag(s,tag);if(toggleType)
{if(toggleType=='toggle')this.block.toggle($formatted);else if(toggleType=='remove')this.block.remove($formatted);else if(toggleType=='set')this.block.setForce($formatted);}
else this.block.toggle($formatted);if(tag!='p'&&tag!='blockquote')$formatted.find('img').remove();if(this.block.isRemoveInline)this.utils.removeInlineTags($formatted);if(tag=='p'||this.block.headTag)$formatted.find('p').contents().unwrap();if(typeof this.block.type=='undefined'&&typeof this.block.value=='undefined')
{$formatted.removeAttr('class').removeAttr('style');}},this));}}},setForce:function($el)
{if(this.block.clearStyle)
{$el.removeAttr('class').removeAttr('style');}
if(this.block.type=='class')
{$el.addClass(this.block.value);return;}
else if(this.block.type=='attr'||this.block.type=='data')
{$el.attr(this.block.value.name,this.block.value.value);return;}},toggle:function($el)
{if(this.block.clearStyle)
{$el.removeAttr('class').removeAttr('style');}
if(this.block.type=='class')
{$el.toggleClass(this.block.value);return;}
else if(this.block.type=='attr'||this.block.type=='data')
{if($el.attr(this.block.value.name)==this.block.value.value)
{$el.removeAttr(this.block.value.name);}
else
{$el.attr(this.block.value.name,this.block.value.value);}
return;}
else
{$el.removeAttr('style class');return;}},remove:function($el)
{$el.removeClass(this.block.value);},formatListToBlockquote:function()
{var block=$(this.block.blocks[0]).closest('ul, ol',this.$editor[0]);$(block).find('ul, ol').contents().unwrap();$(block).find('li').append($('<br>')).contents().unwrap();var $el=this.utils.replaceToTag(block,'blockquote');this.block.toggle($el);},formatBlockquote:function(tag)
{document.execCommand('outdent');document.execCommand('formatblock',false,tag);this.clean.clearUnverified();this.$editor.find('p:empty').remove();var formatted=this.selection.getBlock();if(tag!='p')
{$(formatted).find('img').remove();}
if(!this.opts.linebreaks)
{this.block.toggle($(formatted));}
this.$editor.find('ul, ol, tr, blockquote, p').each($.proxy(this.utils.removeEmpty,this));if(this.opts.linebreaks&&tag=='p')
{this.utils.replaceWithContents(formatted);}},formatWrap:function(tag)
{if(this.block.containerTag=='UL'||this.block.containerTag=='OL')
{if(tag=='blockquote')
{this.block.formatListToBlockquote();}
else
{return;}}
var formatted=this.selection.wrap(tag);if(formatted===false)return;var $formatted=$(formatted);this.block.formatTableWrapping($formatted);var $elements=$formatted.find(this.opts.blockLevelElements.join(',')+', td, table, thead, tbody, tfoot, th, tr');$elements.contents().unwrap();if(tag!='p'&&tag!='blockquote')$formatted.find('img').remove();$.each(this.block.blocks,$.proxy(this.utils.removeEmpty,this));$formatted.append(this.selection.getMarker(2));if(!this.opts.linebreaks)
{this.block.toggle($formatted);}
this.$editor.find('ul, ol, tr, blockquote, p').each($.proxy(this.utils.removeEmpty,this));$formatted.find('blockquote:empty').remove();if(this.block.isRemoveInline)
{this.utils.removeInlineTags($formatted);}
if(this.opts.linebreaks&&tag=='p')
{this.utils.replaceWithContents($formatted);}
if(this.opts.linebreaks)
{var $next=$formatted.next().next();if($next.size()!=0&&$next[0].tagName==='BR')
{$next.remove();}}},formatTableWrapping:function($formatted)
{if($formatted.closest('table',this.$editor[0]).length===0)return;if($formatted.closest('tr',this.$editor[0]).length===0)$formatted.wrap('<tr>');if($formatted.closest('td',this.$editor[0]).length===0&&$formatted.closest('th').length===0)
{$formatted.wrap('<td>');}},removeData:function(name,value)
{var blocks=this.selection.getBlocks();$(blocks).removeAttr('data-'+name);this.code.sync();},setData:function(name,value)
{var blocks=this.selection.getBlocks();$(blocks).attr('data-'+name,value);this.code.sync();},toggleData:function(name,value)
{var blocks=this.selection.getBlocks();$.each(blocks,function()
{if($(this).attr('data-'+name))
{$(this).removeAttr('data-'+name);}
else
{$(this).attr('data-'+name,value);}});},removeAttr:function(attr,value)
{var blocks=this.selection.getBlocks();$(blocks).removeAttr(attr);this.code.sync();},setAttr:function(attr,value)
{var blocks=this.selection.getBlocks();$(blocks).attr(attr,value);this.code.sync();},toggleAttr:function(attr,value)
{var blocks=this.selection.getBlocks();$.each(blocks,function()
{if($(this).attr(name))
{$(this).removeAttr(name);}
else
{$(this).attr(name,value);}});},removeClass:function(className)
{var blocks=this.selection.getBlocks();$(blocks).removeClass(className);this.utils.removeEmptyAttr(blocks,'class');this.code.sync();},setClass:function(className)
{var blocks=this.selection.getBlocks();$(blocks).addClass(className);this.code.sync();},toggleClass:function(className)
{var blocks=this.selection.getBlocks();$(blocks).toggleClass(className);this.code.sync();}};},buffer:function()
{return{set:function(type)
{if(typeof type=='undefined'||type=='undo')
{this.buffer.setUndo();}
else
{this.buffer.setRedo();}},setUndo:function()
{this.selection.save();this.opts.buffer.push(this.$editor.html());this.selection.restore();},setRedo:function()
{this.selection.save();this.opts.rebuffer.push(this.$editor.html());this.selection.restore();},getUndo:function()
{this.$editor.html(this.opts.buffer.pop());},getRedo:function()
{this.$editor.html(this.opts.rebuffer.pop());},add:function()
{this.opts.buffer.push(this.$editor.html());},undo:function()
{if(this.opts.buffer.length===0)return;this.buffer.set('redo');this.buffer.getUndo();this.selection.restore();setTimeout($.proxy(this.observe.load,this),50);},redo:function()
{if(this.opts.rebuffer.length===0)return;this.buffer.set('undo');this.buffer.getRedo();this.selection.restore();setTimeout($.proxy(this.observe.load,this),50);}};},build:function()
{return{run:function()
{this.build.createContainerBox();this.build.loadContent();this.build.loadEditor();this.build.enableEditor();this.build.setCodeAndCall();},isTextarea:function()
{return(this.$element[0].tagName==='TEXTAREA');},createContainerBox:function()
{this.$box=$('<div class="redactor-box" role="application" />');},createTextarea:function()
{this.$textarea=$('<textarea />').attr('name',this.build.getTextareaName());},getTextareaName:function()
{return((typeof(name)=='undefined'))?'content-'+this.uuid:this.$element.attr('id');},loadContent:function()
{var func=(this.build.isTextarea())?'val':'html';this.content=$.trim(this.$element[func]());},enableEditor:function()
{this.$editor.attr({'contenteditable':true,'dir':this.opts.direction});},loadEditor:function()
{var func=(this.build.isTextarea())?'fromTextarea':'fromElement';this.build[func]();},fromTextarea:function()
{this.$editor=$('<div />');this.$textarea=this.$element;this.$box.insertAfter(this.$element).append(this.$editor).append(this.$element);this.$editor.addClass('redactor-editor');this.$element.hide();},fromElement:function()
{this.$editor=this.$element;this.build.createTextarea();this.$box.insertAfter(this.$editor).append(this.$editor).append(this.$textarea);this.$editor.addClass('redactor-editor');this.$textarea.hide();},setCodeAndCall:function()
{this.code.set(this.content);this.build.setOptions();this.build.callEditor();if(this.opts.visual)return;setTimeout($.proxy(this.code.showCode,this),200);},callEditor:function()
{this.build.disableMozillaEditing();this.build.disableIeLinks();this.build.setEvents();this.build.setHelpers();if(this.opts.toolbar)
{this.opts.toolbar=this.toolbar.init();this.toolbar.build();}
this.modal.loadTemplates();this.build.plugins();setTimeout($.proxy(this.observe.load,this),4);this.core.setCallback('init');},setOptions:function()
{$(this.$textarea).attr('dir',this.opts.direction);if(this.opts.linebreaks)this.$editor.addClass('redactor-linebreaks');if(this.opts.tabindex)this.$editor.attr('tabindex',this.opts.tabindex);if(this.opts.minHeight)this.$editor.css('minHeight',this.opts.minHeight);if(this.opts.maxHeight)this.$editor.css('maxHeight',this.opts.maxHeight);},setEventDropUpload:function(e)
{e.preventDefault();if(!this.opts.dragImageUpload||!this.opts.dragFileUpload)return;var files=e.dataTransfer.files;this.upload.directUpload(files[0],e);},setEventDrop:function(e)
{this.code.sync();setTimeout(this.clean.clearUnverified,1);this.core.setCallback('drop',e);},setEvents:function()
{this.$editor.on('drop.redactor',$.proxy(function(e)
{e=e.originalEvent||e;if(window.FormData===undefined||!e.dataTransfer)return true;if(e.dataTransfer.files.length===0)
{return this.build.setEventDrop(e);}
else
{this.build.setEventDropUpload(e);}
setTimeout(this.clean.clearUnverified,1);this.core.setCallback('drop',e);},this));this.$editor.on('click.redactor',$.proxy(function(e)
{var event=this.core.getEvent();var type=(event=='click'||event=='arrow')?false:'click';this.core.addEvent(type);this.utils.disableSelectAll();this.core.setCallback('click',e);},this));this.$editor.on('paste.redactor',$.proxy(this.paste.init,this));this.$editor.on('cut.redactor',$.proxy(this.code.sync,this));this.$editor.on('keydown.redactor',$.proxy(this.keydown.init,this));this.$editor.on('keyup.redactor',$.proxy(this.keyup.init,this));if($.isFunction(this.opts.codeKeydownCallback))
{this.$textarea.on('keydown.redactor-textarea',$.proxy(this.opts.codeKeydownCallback,this));}
if($.isFunction(this.opts.codeKeyupCallback))
{this.$textarea.on('keyup.redactor-textarea',$.proxy(this.opts.codeKeyupCallback,this));}
if($.isFunction(this.opts.focusCallback))
{this.$editor.on('focus.redactor',$.proxy(this.opts.focusCallback,this));}
$(document).on('mousedown.redactor.'+this.uuid,$.proxy(function(e){this.blurClickedElement=e.target;},this));this.$editor.on('blur.redactor',$.proxy(function(e)
{if(this.start)return;if(this.rtePaste)return;if(!this.build.isBlured())return;this.utils.disableSelectAll();if($.isFunction(this.opts.blurCallback))this.core.setCallback('blur',e);},this));},isBlured:function()
{if(this.blurClickedElement===true)return true;var $el=$(this.blurClickedElement);return(!$el.hasClass('redactor-toolbar, redactor-dropdown')&&!$el.is('#redactor-modal')&&$el.parents('.redactor-toolbar, .redactor-dropdown, #redactor-modal').length===0);},setHelpers:function()
{if(this.linkify.isEnabled())
{this.linkify.format();}
this.placeholder.enable();if(this.opts.focus)setTimeout(this.focus.setStart,100);if(this.opts.focusEnd)setTimeout(this.focus.setEnd,100);},plugins:function()
{if(!this.opts.plugins)return;$.each(this.opts.plugins,$.proxy(function(i,s)
{var func=(typeof RedactorPlugins!=='undefined'&&typeof RedactorPlugins[s]!=='undefined')?RedactorPlugins:Redactor.fn;if(!$.isFunction(func[s]))
{return;}
this[s]=func[s]();var methods=this.getModuleMethods(this[s]);var len=methods.length;for(var z=0;z<len;z++)
{this[s][methods[z]]=this[s][methods[z]].bind(this);}
if($.isFunction(this[s].init))
{this[s].init();}},this));},disableMozillaEditing:function()
{if(!this.utils.browser('mozilla'))return;try{document.execCommand('enableObjectResizing',false,false);document.execCommand('enableInlineTableEditing',false,false);}catch(e){}},disableIeLinks:function()
{if(!this.utils.browser('msie'))return;document.execCommand("AutoUrlDetect",false,false);}};},button:function()
{return{build:function(btnName,btnObject)
{var $button=$('<a href="#" class="re-icon re-'+btnName+'" rel="'+btnName+'" />').attr({'role':'button','aria-label':btnObject.title,'tabindex':'-1'});if(btnObject.func||btnObject.command||btnObject.dropdown)
{this.button.setEvent($button,btnName,btnObject);}
if(btnObject.dropdown)
{$button.addClass('redactor-toolbar-link-dropdown').attr('aria-haspopup',true);var $dropdown=$('<div class="redactor-dropdown redactor-dropdown-'+this.uuid+' redactor-dropdown-box-'+btnName+'" style="display: none;">');$button.data('dropdown',$dropdown);this.dropdown.build(btnName,$dropdown,btnObject.dropdown);}
if(this.utils.isDesktop())
{this.button.createTooltip($button,btnName,btnObject.title);}
return $button;},setEvent:function($button,btnName,btnObject)
{$button.on('touchstart click',$.proxy(function(e)
{if($button.hasClass('redactor-button-disabled'))return false;var type='func';var callback=btnObject.func;if(btnObject.command)
{type='command';callback=btnObject.command;}
else if(btnObject.dropdown)
{type='dropdown';callback=false;}
this.button.onClick(e,btnName,type,callback);},this));},createTooltip:function($button,name,title)
{var $tooltip=$('<span>').addClass('redactor-toolbar-tooltip redactor-toolbar-tooltip-'+this.uuid+' redactor-toolbar-tooltip-'+name).hide().html(title);$tooltip.appendTo('body');$button.on('mouseover',function()
{if($(this).hasClass('redactor-button-disabled'))return;var pos=$button.offset();$tooltip.show();$tooltip.css({top:(pos.top+$button.innerHeight())+'px',left:(pos.left+$button.innerWidth()/2-$tooltip.innerWidth()/2)+'px'});});$button.on('mouseout',function()
{$tooltip.hide();});},onClick:function(e,btnName,type,callback)
{this.button.caretOffset=this.caret.getOffset();e.preventDefault();if(this.utils.browser('msie'))e.returnValue=false;if(type=='command')this.inline.format(callback);else if(type=='dropdown')this.dropdown.show(e,btnName);else this.button.onClickCallback(e,callback,btnName);},onClickCallback:function(e,callback,btnName)
{var func;this.blurClickedElement=true;if($.isFunction(callback))callback.call(this,btnName);else if(callback.search(/\./)!='-1')
{func=callback.split('.');if(typeof this[func[0]]=='undefined')return;this[func[0]][func[1]](btnName);}
else this[callback](btnName);this.observe.buttons(e,btnName);},get:function(key)
{return this.$toolbar.find('a.re-'+key);},setActive:function(key)
{this.button.get(key).addClass('redactor-act');},setInactive:function(key)
{this.button.get(key).removeClass('redactor-act');},setInactiveAll:function(key)
{if(typeof key==='undefined')
{this.$toolbar.find('a.re-icon').removeClass('redactor-act');}
else
{this.$toolbar.find('a.re-icon').not('.re-'+key).removeClass('redactor-act');}},setActiveInVisual:function()
{this.$toolbar.find('a.re-icon').not('a.re-html, a.re-fullscreen').removeClass('redactor-button-disabled');},setInactiveInCode:function()
{this.$toolbar.find('a.re-icon').not('a.re-html, a.re-fullscreen').addClass('redactor-button-disabled');},changeIcon:function(key,classname)
{this.button.get(key).addClass('re-'+classname);},removeIcon:function(key,classname)
{this.button.get(key).removeClass('re-'+classname);},setAwesome:function(key,name)
{var $button=this.button.get(key);$button.removeClass('redactor-btn-image').addClass('fa-redactor-btn');$button.html('<i class="fa '+name+'"></i>');},addCallback:function($btn,callback)
{if($btn=="buffer")return;var type=(callback=='dropdown')?'dropdown':'func';var key=$btn.attr('rel');$btn.on('touchstart click',$.proxy(function(e)
{if($btn.hasClass('redactor-button-disabled'))return false;this.button.onClick(e,key,type,callback);},this));},addDropdown:function($btn,dropdown)
{$btn.addClass('redactor-toolbar-link-dropdown').attr('aria-haspopup',true);var key=$btn.attr('rel');this.button.addCallback($btn,'dropdown');var $dropdown=$('<div class="redactor-dropdown redactor-dropdown-'+this.uuid+' redactor-dropdown-box-'+key+'" style="display: none;">');$btn.data('dropdown',$dropdown);if(dropdown)this.dropdown.build(key,$dropdown,dropdown);return $dropdown;},add:function(key,title)
{if(!this.opts.toolbar)return;if(this.button.isMobileUndoRedo(key))return"buffer";var btn=this.button.build(key,{title:title});btn.addClass('redactor-btn-image');this.$toolbar.append($('<li>').append(btn));return btn;},addFirst:function(key,title)
{if(!this.opts.toolbar)return;if(this.button.isMobileUndoRedo(key))return"buffer";var btn=this.button.build(key,{title:title});btn.addClass('redactor-btn-image');this.$toolbar.prepend($('<li>').append(btn));return btn;},addAfter:function(afterkey,key,title)
{if(!this.opts.toolbar)return;if(this.button.isMobileUndoRedo(key))return"buffer";var btn=this.button.build(key,{title:title});btn.addClass('redactor-btn-image');var $btn=this.button.get(afterkey);if($btn.length!==0)$btn.parent().after($('<li>').append(btn));else this.$toolbar.append($('<li>').append(btn));return btn;},addBefore:function(beforekey,key,title)
{if(!this.opts.toolbar)return;if(this.button.isMobileUndoRedo(key))return"buffer";var btn=this.button.build(key,{title:title});btn.addClass('redactor-btn-image');var $btn=this.button.get(beforekey);if($btn.length!==0)$btn.parent().before($('<li>').append(btn));else this.$toolbar.append($('<li>').append(btn));return btn;},remove:function(key)
{this.button.get(key).remove();},isMobileUndoRedo:function(key)
{return(key=="undo"||key=="redo")&&!this.utils.isDesktop();}};},caret:function()
{return{setStart:function(node)
{if(!this.utils.isBlock(node))
{var space=this.utils.createSpaceElement();$(node).prepend(space);this.caret.setEnd(space);}
else
{this.caret.set(node,0,node,0);}},setEnd:function(node)
{node=node[0]||node;if(node.lastChild.nodeType==1)
{return this.caret.setAfter(node.lastChild);}
this.caret.set(node,1,node,1);},set:function(orgn,orgo,focn,foco)
{orgn=orgn[0]||orgn;focn=focn[0]||focn;if(this.utils.isBlockTag(orgn.tagName)&&orgn.innerHTML==='')
{orgn.innerHTML=this.opts.invisibleSpace;}
if(orgn.tagName=='BR'&&this.opts.linebreaks===false)
{var parent=$(this.opts.emptyHtml)[0];$(orgn).replaceWith(parent);orgn=parent;focn=orgn;}
this.selection.get();try
{this.range.setStart(orgn,orgo);this.range.setEnd(focn,foco);}
catch(e){}
this.selection.addRange();},setAfter:function(node)
{try
{var tag=$(node)[0].tagName;if(tag!='BR'&&!this.utils.isBlock(node))
{var space=this.utils.createSpaceElement();$(node).after(space);this.caret.setEnd(space);}
else
{if(tag!='BR'&&this.utils.browser('msie'))
{this.caret.setStart($(node).next());}
else
{this.caret.setAfterOrBefore(node,'after');}}}
catch(e)
{var space=this.utils.createSpaceElement();$(node).after(space);this.caret.setEnd(space);}},setBefore:function(node)
{if(this.utils.isBlock(node))
{this.caret.setEnd($(node).prev());}
else
{this.caret.setAfterOrBefore(node,'before');}},setAfterOrBefore:function(node,type)
{if(!this.utils.browser('msie'))this.$editor.focus();node=node[0]||node;this.selection.get();if(type=='after')
{try{this.range.setStartAfter(node);this.range.setEndAfter(node);}
catch(e){}}
else
{try{this.range.setStartBefore(node);this.range.setEndBefore(node);}
catch(e){}}
this.range.collapse(false);this.selection.addRange();},getOffsetOfElement:function(node)
{node=node[0]||node;this.selection.get();var cloned=this.range.cloneRange();cloned.selectNodeContents(node);cloned.setEnd(this.range.endContainer,this.range.endOffset);return $.trim(cloned.toString()).length;},getOffset:function()
{var offset=0;var sel=window.getSelection();if(sel.rangeCount>0)
{var range=window.getSelection().getRangeAt(0);var caretRange=range.cloneRange();caretRange.selectNodeContents(this.$editor[0]);caretRange.setEnd(range.endContainer,range.endOffset);offset=caretRange.toString().length;}
return offset;},setOffset:function(start,end)
{if(typeof end=='undefined')end=start;if(!this.focus.isFocused())this.focus.setStart();var sel=this.selection.get();var node,offset=0;var walker=document.createTreeWalker(this.$editor[0],NodeFilter.SHOW_TEXT,null,null);while(node==walker.nextNode())
{offset+=node.nodeValue.length;if(offset>start)
{this.range.setStart(node,node.nodeValue.length+start-offset);start=Infinity;}
if(offset>=end)
{this.range.setEnd(node,node.nodeValue.length+end-offset);break;}}
this.range.collapse(false);this.selection.addRange();},setToPoint:function(start,end)
{this.caret.setOffset(start,end);},getCoords:function()
{return this.caret.getOffset();}};},clean:function()
{return{onSet:function(html)
{html=html.replace(/<script(.*?[^>]?)>([\w\W]*?)<\/script>/gi,'<pre class="redactor-script-tag" style="display: none;" $1>$2</pre>');html=html.replace(/\$/g,'&#36;');html=html.replace(/<a href="(.*?[^>]?)®(.*?[^>]?)">/gi,'<a href="$1&reg$2">');if(this.opts.replaceDivs)html=this.clean.replaceDivs(html);if(this.opts.linebreaks)html=this.clean.replaceParagraphsToBr(html);html=this.clean.saveFormTags(html);var $div=$('<div>');$div.html(html);var fonts=$div.find('font[style]');if(fonts.length!==0)
{fonts.replaceWith(function()
{var $el=$(this);var $span=$('<span>').attr('style',$el.attr('style'));return $span.append($el.contents());});html=$div.html();}
$div.remove();html=html.replace(/<font(.*?[^<])>/gi,'');html=html.replace(/<\/font>/gi,'');html=this.tidy.load(html);if(this.opts.paragraphize)html=this.paragraphize.load(html);html=this.clean.setVerified(html);html=this.clean.convertInline(html);html=html.replace(/&amp;/g,'&');return html;},onSync:function(html)
{html=html.replace(/\u200B/g,'');html=html.replace(/&#x200b;/gi,'');if(this.opts.cleanSpaces)
{html=html.replace(/&nbsp;/gi,' ');}
if(html.search(/^<p>(||\s||<br\s?\/?>||&nbsp;)<\/p>$/i)!=-1)
{return'';}
html=html.replace(/<pre class="redactor-script-tag" style="display: none;"(.*?[^>]?)>([\w\W]*?)<\/pre>/gi,'<script$1>$2</script>');html=this.clean.restoreFormTags(html);var chars={'\u2122':'&trade;','\u00a9':'&copy;','\u2026':'&hellip;','\u2014':'&mdash;','\u2010':'&dash;'};$.each(chars,function(i,s)
{html=html.replace(new RegExp(i,'g'),s);});if(this.utils.browser('mozilla'))
{html=html.replace(/<br\s?\/?>$/gi,'');}
html=html.replace(new RegExp('<br\\s?/?></li>','gi'),'</li>');html=html.replace(new RegExp('</li><br\\s?/?>','gi'),'</li>');html=html.replace(/<(.*?)rel="\s*?"(.*?[^>]?)>/gi,'<$1$2">');html=html.replace(/<(.*?)style="\s*?"(.*?[^>]?)>/gi,'<$1$2">');html=html.replace(/="">/gi,'>');html=html.replace(/""">/gi,'">');html=html.replace(/"">/gi,'">');html=html.replace(/<div(.*?[^>]) data-tagblock="redactor"(.*?[^>])>/gi,'<div$1$2>');html=html.replace(/<(.*?) data-verified="redactor"(.*?[^>])>/gi,'<$1$2>');var $div=$("<div/>").html($.parseHTML(html,document,true));$div.find("span").removeAttr("rel");$div.find('pre .redactor-invisible-space').each(function()
{$(this).contents().unwrap();});html=$div.html();html=html.replace(/<img(.*?[^>])rel="(.*?[^>])"(.*?[^>])>/gi,'<img$1$3>');html=html.replace(/<span class="redactor-invisible-space">(.*?)<\/span>/gi,'$1');html=html.replace(/ data-save-url="(.*?[^>])"/gi,'');html=html.replace(/<span(.*?)id="redactor-image-box"(.*?[^>])>([\w\W]*?)<img(.*?)><\/span>/gi,'$3<img$4>');html=html.replace(/<span(.*?)id="redactor-image-resizer"(.*?[^>])>(.*?)<\/span>/gi,'');html=html.replace(/<span(.*?)id="redactor-image-editter"(.*?[^>])>(.*?)<\/span>/gi,'');html=html.replace(/<font(.*?[^<])>/gi,'');html=html.replace(/<\/font>/gi,'');html=this.tidy.load(html);if(this.opts.linkNofollow)
{html=html.replace(/<a(.*?)rel="nofollow"(.*?[^>])>/gi,'<a$1$2>');html=html.replace(/<a(.*?[^>])>/gi,'<a$1 rel="nofollow">');}
html=html.replace(/\sdata-redactor-(tag|class|style)="(.*?[^>])"/gi,'');html=html.replace(new RegExp('<(.*?) data-verified="redactor"(.*?[^>])>','gi'),'<$1$2>');html=html.replace(new RegExp('<(.*?) data-verified="redactor">','gi'),'<$1>');html=html.replace(/&amp;/g,'&');return html;},onPaste:function(html,setMode)
{html=$.trim(html);html=html.replace(/\$/g,'&#36;');html=html.replace(/<span class="s[0-9]">/gi,'<span>');html=html.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi,' ');html=html.replace(/<span class="Apple-tab-span"[^>]*>\t<\/span>/gi,'\t');html=html.replace(/<span[^>]*>(\s|&nbsp;)<\/span>/gi,' ');if(this.opts.pastePlainText)
{return this.clean.getPlainText(html);}
if(!this.utils.isSelectAll()&&typeof setMode=='undefined')
{if(this.utils.isCurrentOrParent(['FIGCAPTION','A']))
{return this.clean.getPlainText(html,false);}
if(this.utils.isCurrentOrParent('PRE'))
{html=html.replace(/”/g,'"');html=html.replace(/“/g,'"');html=html.replace(/‘/g,'\'');html=html.replace(/’/g,'\'');return this.clean.getPreCode(html);}
if(this.utils.isCurrentOrParent(['BLOCKQUOTE','H1','H2','H3','H4','H5','H6']))
{html=this.clean.getOnlyImages(html);if(!this.utils.browser('msie'))
{var block=this.selection.getBlock();if(block&&block.tagName=='P')
{html=html.replace(/<img(.*?)>/gi,'<p><img$1></p>');}}
return html;}
if(this.utils.isCurrentOrParent(['TD']))
{html=this.clean.onPasteTidy(html,'td');if(this.opts.linebreaks)html=this.clean.replaceParagraphsToBr(html);html=this.clean.replaceDivsToBr(html);return html;}
if(this.utils.isCurrentOrParent(['LI']))
{return this.clean.onPasteTidy(html,'li');}}
html=this.clean.isSingleLine(html,setMode);if(!this.clean.singleLine)
{if(this.opts.linebreaks)html=this.clean.replaceParagraphsToBr(html);if(this.opts.replaceDivs)html=this.clean.replaceDivs(html);html=this.clean.saveFormTags(html);}
html=this.clean.onPasteWord(html);html=this.clean.onPasteExtra(html);html=this.clean.onPasteTidy(html,'all');if(!this.clean.singleLine&&this.opts.paragraphize)
{html=this.paragraphize.load(html);}
html=this.clean.removeDirtyStyles(html);html=this.clean.onPasteRemoveSpans(html);html=this.clean.onPasteRemoveEmpty(html);html=this.clean.convertInline(html);return html;},onPasteWord:function(html)
{html=html.replace(/<!--[\s\S]*?-->/gi,'');html=html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi,'');html=html.replace(/<o\:p[^>]*>[\s\S]*?<\/o\:p>/gi,'');if(html.match(/class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i))
{html=html.replace(/<!--[\s\S]+?-->/gi,'');html=html.replace(/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,'');html=html.replace(/<(\/?)s>/gi,"<$1strike>");html=html.replace(/ /gi,' ');html=html.replace(/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(str,spaces){return(spaces.length>0)?spaces.replace(/./," ").slice(Math.floor(spaces.length/2)).split("").join("\u00a0"):'';});html=this.clean.onPasteIeFixLinks(html);html=html.replace(/<img(.*?)v:shapes=(.*?)>/gi,'');html=html.replace(/src="file\:\/\/(.*?)"/,'src=""');var $div=$("<div/>").html(html);var lastList=false;var lastLevel=1;var listsIds=[];$div.find("p[style]").each(function()
{var matches=$(this).attr('style').match(/mso\-list\:l([0-9]+)\slevel([0-9]+)/);if(matches)
{var currentList=parseInt(matches[1]);var currentLevel=parseInt(matches[2]);var listType=$(this).html().match(/^[\w]+\./)?"ol":"ul";var $li=$("<li/>").html($(this).html());$li.html($li.html().replace(/^([\w\.]+)</,'<'));$li.find("span:first").remove();if(currentLevel==1&&$.inArray(currentList,listsIds)==-1)
{var $list=$("<"+listType+"/>").attr({"data-level":currentLevel,"data-list":currentList}).html($li);$(this).replaceWith($list);lastList=currentList;listsIds.push(currentList);}
else
{if(currentLevel>lastLevel)
{var $prevList=$div.find('[data-level="'+lastLevel+'"][data-list="'+lastList+'"]');var $lastList=$prevList;for(var i=lastLevel;i<currentLevel;i++)
{$list=$("<"+listType+"/>");$list.appendTo($lastList.find("li").last());$lastList=$list;}
$lastList.attr({"data-level":currentLevel,"data-list":currentList}).html($li);}
else
{var $prevList=$div.find('[data-level="'+currentLevel+'"][data-list="'+currentList+'"]').last();$prevList.append($li);}
lastLevel=currentLevel;lastList=currentList;$(this).remove();}}});$div.find('[data-level][data-list]').removeAttr('data-level data-list');html=$div.html();html=html.replace(/·/g,'');html=html.replace(/<p class="Mso(.*?)"/gi,'<p');html=html.replace(/ class=\"(mso[^\"]*)\"/gi,"");html=html.replace(/ class=(mso\w+)/gi,"");html=html.replace(/<o:p(.*?)>([\w\W]*?)<\/o:p>/gi,'$2');html=html.replace(/\n/g,' ');html=html.replace(/<p>\n?<li>/gi,'<li>');}
return html;},onPasteExtra:function(html)
{html=html.replace(/<b\sid="internal-source-marker(.*?)">([\w\W]*?)<\/b>/gi,"$2");html=html.replace(/<b(.*?)id="docs-internal-guid(.*?)">([\w\W]*?)<\/b>/gi,"$3");html=html.replace(/<span[^>]*(font-style: italic; font-weight: bold|font-weight: bold; font-style: italic)[^>]*>/gi,'<span style="font-weight: bold;"><span style="font-style: italic;">');html=html.replace(/<span[^>]*font-style: italic[^>]*>/gi,'<span style="font-style: italic;">');html=html.replace(/<span[^>]*font-weight: bold[^>]*>/gi,'<span style="font-weight: bold;">');html=html.replace(/<span[^>]*text-decoration: underline[^>]*>/gi,'<span style="text-decoration: underline;">');html=html.replace(/<img>/gi,'');html=html.replace(/\n{3,}/gi,'\n');html=html.replace(/<font(.*?)>([\w\W]*?)<\/font>/gi,'$2');html=html.replace(/<p><p>/gi,'<p>');html=html.replace(/<\/p><\/p>/gi,'</p>');html=html.replace(/<li>(\s*|\t*|\n*)<p>/gi,'<li>');html=html.replace(/<\/p>(\s*|\t*|\n*)<\/li>/gi,'</li>');html=html.replace(/<\/p>\s<p/gi,'<\/p><p');html=html.replace(/<img src="webkit-fake-url\:\/\/(.*?)"(.*?)>/gi,'');html=html.replace(/<p>•([\w\W]*?)<\/p>/gi,'<li>$1</li>');if(this.utils.browser('mozilla'))
{html=html.replace(/<br\s?\/?>$/gi,'');}
return html;},onPasteTidy:function(html,type)
{var tags=['span','a','pre','blockquote','small','em','strong','code','kbd','mark','address','cite','var','samp','dfn','sup','sub','b','i','u','del','ol','ul','li','dl','dt','dd','p','br','video','audio','iframe','embed','param','object','img','table','td','th','tr','tbody','tfoot','thead','h1','h2','h3','h4','h5','h6'];var tagsEmpty=false;var attrAllowed=[['a','*'],['img',['src','alt']],['span',['class','rel','data-verified']],['iframe','*'],['video','*'],['audio','*'],['embed','*'],['object','*'],['param','*'],['source','*']];if(type=='all')
{tagsEmpty=['p','span','h1','h2','h3','h4','h5','h6'];attrAllowed=[['table','class'],['td',['colspan','rowspan']],['a','*'],['img',['src','alt','data-redactor-inserted-image']],['span',['class','rel','data-verified']],['iframe','*'],['video','*'],['audio','*'],['embed','*'],['object','*'],['param','*'],['source','*']];}
else if(type=='td')
{tags=['ul','ol','li','span','a','small','em','strong','code','kbd','mark','cite','var','samp','dfn','sup','sub','b','i','u','del','ol','ul','li','dl','dt','dd','br','iframe','video','audio','embed','param','object','img','h1','h2','h3','h4','h5','h6'];}
else if(type=='li')
{tags=['ul','ol','li','span','a','small','em','strong','code','kbd','mark','cite','var','samp','dfn','sup','sub','b','i','u','del','br','iframe','video','audio','embed','param','object','img'];}
var options={deniedTags:(this.opts.deniedTags)?this.opts.deniedTags:false,allowedTags:(this.opts.allowedTags)?this.opts.allowedTags:tags,removeComments:true,removePhp:true,removeAttr:(this.opts.removeAttr)?this.opts.removeAttr:false,allowedAttr:(this.opts.allowedAttr)?this.opts.allowedAttr:attrAllowed,removeEmpty:tagsEmpty};return this.tidy.load(html,options);},onPasteRemoveEmpty:function(html)
{html=html.replace(/<(p|h[1-6])>(|\s|\n|\t|<br\s?\/?>)<\/(p|h[1-6])>/gi,'');if(!this.opts.linebreaks)html=html.replace(/<br>$/i,'');return html;},onPasteRemoveSpans:function(html)
{html=html.replace(/<span>(.*?)<\/span>/gi,'$1');html=html.replace(/<span[^>]*>\s|&nbsp;<\/span>/gi,' ');return html;},onPasteIeFixLinks:function(html)
{if(!this.utils.browser('msie'))return html;var tmp=$.trim(html);if(tmp.search(/^<a(.*?)>(.*?)<\/a>$/i)===0)
{html=html.replace(/^<a(.*?)>(.*?)<\/a>$/i,"$2");}
return html;},isSingleLine:function(html,setMode)
{this.clean.singleLine=false;if(!this.utils.isSelectAll()&&typeof setMode=='undefined')
{var blocks=this.opts.blockLevelElements.join('|').replace('P|','').replace('DIV|','');var matchBlocks=html.match(new RegExp('</('+blocks+')>','gi'));var matchContainers=html.match(/<\/(p|div)>/gi);if(!matchBlocks&&(matchContainers===null||(matchContainers&&matchContainers.length<=1)))
{var matchBR=html.match(/<br\s?\/?>/gi);if(!matchBR)
{this.clean.singleLine=true;html=html.replace(/<\/?(p|div)(.*?)>/gi,'');}}}
return html;},stripTags:function(input,allowed)
{allowed=(((allowed||'')+'').toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join('');var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;return input.replace(tags,function($0,$1){return allowed.indexOf('<'+$1.toLowerCase()+'>')>-1?$0:'';});},savePreCode:function(html)
{html=this.clean.savePreFormatting(html);html=this.clean.saveCodeFormatting(html);html=this.clean.restoreSelectionMarker(html);return html;},savePreFormatting:function(html)
{var pre=html.match(/<pre(.*?)>([\w\W]*?)<\/pre>/gi);if(pre!==null)
{$.each(pre,$.proxy(function(i,s)
{var arr=s.match(/<pre(.*?)>([\w\W]*?)<\/pre>/i);arr[2]=arr[2].replace(/<br\s?\/?>/g,'\n');arr[2]=arr[2].replace(/&nbsp;/g,' ');if(this.opts.preSpaces)
{arr[2]=arr[2].replace(/\t/g,Array(this.opts.preSpaces+1).join(' '));}
arr[2]=this.clean.encodeEntities(arr[2]);arr[2]=arr[2].replace(/\$/g,'&#36;');html=html.replace(s,'<pre'+arr[1]+'>'+arr[2]+'</pre>');},this));}
return html;},saveCodeFormatting:function(html)
{var code=html.match(/<code(.*?)>([\w\W]*?)<\/code>/gi);if(code!==null)
{$.each(code,$.proxy(function(i,s)
{var arr=s.match(/<code(.*?)>([\w\W]*?)<\/code>/i);arr[2]=arr[2].replace(/&nbsp;/g,' ');arr[2]=this.clean.encodeEntities(arr[2]);arr[2]=arr[2].replace(/\$/g,'&#36;');html=html.replace(s,'<code'+arr[1]+'>'+arr[2]+'</code>');},this));}
return html;},restoreSelectionMarker:function(html)
{html=html.replace(/&lt;span id=&quot;selection-marker-([0-9])&quot; class=&quot;redactor-selection-marker&quot; data-verified=&quot;redactor&quot;&gt;​&lt;\/span&gt;/g,'<span id="selection-marker-$1" class="redactor-selection-marker" data-verified="redactor">​</span>');return html;},getTextFromHtml:function(html)
{html=html.replace(/<br\s?\/?>|<\/H[1-6]>|<\/p>|<\/div>|<\/li>|<\/td>/gi,'\n');var tmp=document.createElement('div');tmp.innerHTML=html;html=tmp.textContent||tmp.innerText;return $.trim(html);},getPlainText:function(html,paragraphize)
{html=this.clean.getTextFromHtml(html);html=html.replace(/\n/g,'<br />');if(this.opts.paragraphize&&typeof paragraphize=='undefined'&&!this.utils.browser('mozilla'))
{html=this.paragraphize.load(html);}
return html;},getPreCode:function(html)
{html=html.replace(/<img(.*?) style="(.*?)"(.*?[^>])>/gi,'<img$1$3>');html=html.replace(/<img(.*?)>/gi,'&lt;img$1&gt;');html=this.clean.getTextFromHtml(html);if(this.opts.preSpaces)
{html=html.replace(/\t/g,Array(this.opts.preSpaces+1).join(' '));}
html=this.clean.encodeEntities(html);return html;},getOnlyImages:function(html)
{html=html.replace(/<img(.*?)>/gi,'[img$1]');html=html.replace(/<([Ss]*?)>/gi,'');html=html.replace(/\[img(.*?)\]/gi,'<img$1>');return html;},getOnlyLinksAndImages:function(html)
{html=html.replace(/<a(.*?)href="(.*?)"(.*?)>([\w\W]*?)<\/a>/gi,'[a href="$2"]$4[/a]');html=html.replace(/<img(.*?)>/gi,'[img$1]');html=html.replace(/<(.*?)>/gi,'');html=html.replace(/\[a href="(.*?)"\]([\w\W]*?)\[\/a\]/gi,'<a href="$1">$2</a>');html=html.replace(/\[img(.*?)\]/gi,'<img$1>');return html;},encodeEntities:function(str)
{str=String(str).replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"');return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');},removeDirtyStyles:function(html)
{if(this.utils.browser('msie'))return html;var div=document.createElement('div');div.innerHTML=html;this.clean.clearUnverifiedRemove($(div));html=div.innerHTML;$(div).remove();return html;},clearUnverified:function()
{if(this.utils.browser('msie'))return;this.clean.clearUnverifiedRemove(this.$editor);var headers=this.$editor.find('h1, h2, h3, h4, h5, h6');headers.find('span').removeAttr('style');headers.find(this.opts.verifiedTags.join(', ')).removeAttr('style');this.code.sync();},clearUnverifiedRemove:function($editor)
{$editor.find(this.opts.verifiedTags.join(', ')).removeAttr('style');$editor.find('span').not('[data-verified="redactor"]').removeAttr('style');$editor.find('span[data-verified="redactor"], img[data-verified="redactor"]').each(function(i,s)
{var $s=$(s);$s.attr('style',$s.attr('rel'));});},cleanEmptyParagraph:function()
{},setVerified:function(html)
{if(this.utils.browser('msie'))return html;html=html.replace(new RegExp('<img(.*?[^>])>','gi'),'<img$1 data-verified="redactor">');html=html.replace(new RegExp('<span(.*?[^>])>','gi'),'<span$1 data-verified="redactor">');var matches=html.match(new RegExp('<(span|img)(.*?)style="(.*?)"(.*?[^>])>','gi'));if(matches)
{var len=matches.length;for(var i=0;i<len;i++)
{try{var newTag=matches[i].replace(/style="(.*?)"/i,'style="$1" rel="$1"');html=html.replace(matches[i],newTag);}
catch(e){}}}
return html;},convertInline:function(html)
{var $div=$('<div />').html(html);var tags=this.opts.inlineTags;tags.push('span');$div.find(tags.join(',')).each(function()
{var $el=$(this);var tag=this.tagName.toLowerCase();$el.attr('data-redactor-tag',tag);if(tag=='span')
{if($el.attr('style'))$el.attr('data-redactor-style',$el.attr('style'));else if($el.attr('class'))$el.attr('data-redactor-class',$el.attr('class'));}});html=$div.html();$div.remove();return html;},normalizeLists:function()
{this.$editor.find('li').each(function(i,s)
{var $next=$(s).next();if($next.length!==0&&($next[0].tagName=='UL'||$next[0].tagName=='OL'))
{$(s).append($next);}});},removeSpaces:function(html)
{html=html.replace(/\n/g,'');html=html.replace(/[\t]*/g,'');html=html.replace(/\n\s*\n/g,"\n");html=html.replace(/^[\s\n]*/g,' ');html=html.replace(/[\s\n]*$/g,' ');html=html.replace(/>\s{2,}</g,'> <');html=html.replace(/\n\n/g,"\n");html=html.replace(/\u200B/g,'');return html;},replaceDivs:function(html)
{if(this.opts.linebreaks)
{html=html.replace(/<div><br\s?\/?><\/div>/gi,'<br />');html=html.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi,'$2<br />');}
else
{html=html.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi,'<p$1>$2</p>');}
html=html.replace(/<div(.*?[^>])>/gi,'');html=html.replace(/<\/div>/gi,'');return html;},replaceDivsToBr:function(html)
{html=html.replace(/<div\s(.*?)>/gi,'<p>');html=html.replace(/<div><br\s?\/?><\/div>/gi,'<br /><br />');html=html.replace(/<div>([\w\W]*?)<\/div>/gi,'$1<br /><br />');return html;},replaceParagraphsToBr:function(html)
{html=html.replace(/<p\s(.*?)>/gi,'<p>');html=html.replace(/<p><br\s?\/?><\/p>/gi,'<br />');html=html.replace(/<p>([\w\W]*?)<\/p>/gi,'$1<br /><br />');html=html.replace(/(<br\s?\/?>){1,}\n?<\/blockquote>/gi,'</blockquote>');return html;},saveFormTags:function(html)
{return html.replace(/<form(.*?)>([\w\W]*?)<\/form>/gi,'<section$1 rel="redactor-form-tag">$2</section>');},restoreFormTags:function(html)
{return html.replace(/<section(.*?) rel="redactor-form-tag"(.*?)>([\w\W]*?)<\/section>/gi,'<form$1$2>$3</form>');}};},code:function()
{return{set:function(html)
{html=$.trim(html.toString());html=this.clean.onSet(html);if(this.utils.browser('msie'))
{html=html.replace(/<span(.*?)id="selection-marker-(1|2)"(.*?)><\/span>;/gi,'');}
this.$editor.html(html);this.code.sync();if(html!=='')this.placeholder.remove();setTimeout($.proxy(this.buffer.add,this),15);if(this.start===false)this.observe.load();},get:function()
{var code=this.$textarea.val();if(this.opts.replaceDivs)code=this.clean.replaceDivs(code);if(this.opts.linebreaks)code=this.clean.replaceParagraphsToBr(code);code=this.tabifier.get(code);return code;},sync:function()
{setTimeout($.proxy(this.code.startSync,this),10);},startSync:function()
{var html=this.$editor.html();if(this.code.syncCode&&this.code.syncCode==html)
{return;}
this.code.syncCode=html;html=this.core.setCallback('syncBefore',html);html=this.clean.onSync(html);this.$textarea.val(html);this.core.setCallback('sync',html);if(this.start===false)
{this.core.setCallback('change',html);}
this.start=false;if(this.autosave.html==false)
{this.autosave.html=this.code.get();}
if(this.opts.codemirror)
{this.$textarea.next('.CodeMirror').each(function(i,el)
{el.CodeMirror.setValue(html);});}
this.autosave.onChange();this.autosave.enable();},toggle:function()
{if(this.opts.visual)
{this.code.showCode();}
else
{this.code.showVisual();}},showCode:function()
{this.selection.save();this.code.offset=this.caret.getOffset();var scroll=$(window).scrollTop();var width=this.$editor.innerWidth(),height=this.$editor.innerHeight();this.$editor.hide();var html=this.$textarea.val();this.modified=this.clean.removeSpaces(html);html=this.tabifier.get(html);var start=0,end=0;var $editorDiv=$("<div/>").append($.parseHTML(this.clean.onSync(this.$editor.html()),document,true));var $selectionMarkers=$editorDiv.find("span.redactor-selection-marker");if($selectionMarkers.length>0)
{var editorHtml=this.tabifier.get($editorDiv.html()).replace(/&amp;/g,'&');if($selectionMarkers.length==1)
{start=this.utils.strpos(editorHtml,$editorDiv.find("#selection-marker-1").prop("outerHTML"));end=start;}
else if($selectionMarkers.length==2)
{start=this.utils.strpos(editorHtml,$editorDiv.find("#selection-marker-1").prop("outerHTML"));end=this.utils.strpos(editorHtml,$editorDiv.find("#selection-marker-2").prop("outerHTML"))-$editorDiv.find("#selection-marker-1").prop("outerHTML").toString().length;}}
this.selection.removeMarkers();this.$textarea.val(html);if(this.opts.codemirror)
{this.$textarea.next('.CodeMirror').each(function(i,el)
{$(el).show();el.CodeMirror.setValue(html);el.CodeMirror.setSize('100%',height);el.CodeMirror.refresh();if(start==end)
{el.CodeMirror.setCursor(el.CodeMirror.posFromIndex(start).line,el.CodeMirror.posFromIndex(end).ch);}
else
{el.CodeMirror.setSelection({line:el.CodeMirror.posFromIndex(start).line,ch:el.CodeMirror.posFromIndex(start).ch},{line:el.CodeMirror.posFromIndex(end).line,ch:el.CodeMirror.posFromIndex(end).ch});}
el.CodeMirror.focus();});}
else
{this.$textarea.height(height).show().focus();this.$textarea.on('keydown.redactor-textarea-indenting',this.code.textareaIndenting);$(window).scrollTop(scroll);if(this.$textarea[0].setSelectionRange)
{this.$textarea[0].setSelectionRange(start,end);}
this.$textarea[0].scrollTop=0;}
this.opts.visual=false;this.button.setInactiveInCode();this.button.setActive('html');this.core.setCallback('source',html);},showVisual:function()
{var html;if(this.opts.visual)return;var start=0,end=0;if(this.opts.codemirror)
{var selection;this.$textarea.next('.CodeMirror').each(function(i,el)
{selection=el.CodeMirror.listSelections();start=el.CodeMirror.indexFromPos(selection[0].anchor);end=el.CodeMirror.indexFromPos(selection[0].head);html=el.CodeMirror.getValue();});}
else
{start=this.$textarea.get(0).selectionStart;end=this.$textarea.get(0).selectionEnd;html=this.$textarea.hide().val();}
if(start>end&&end>0)
{var tempStart=end;var tempEnd=start;start=tempStart;end=tempEnd;}
start=this.code.enlargeOffset(html,start);end=this.code.enlargeOffset(html,end);html=html.substr(0,start)+this.selection.getMarkerAsHtml(1)+html.substr(start);if(end>start)
{var markerLength=this.selection.getMarkerAsHtml(1).toString().length;html=html.substr(0,end+markerLength)+this.selection.getMarkerAsHtml(2)+html.substr(end+markerLength);}
if(this.modified!==this.clean.removeSpaces(html))
{this.code.set(html);}
if(this.opts.codemirror)
{this.$textarea.next('.CodeMirror').hide();}
this.$editor.show();if(!this.utils.isEmpty(html))
{this.placeholder.remove();}
this.selection.restore();this.$textarea.off('keydown.redactor-textarea-indenting');this.button.setActiveInVisual();this.button.setInactive('html');this.observe.load();this.opts.visual=true;this.core.setCallback('visual',html);},textareaIndenting:function(e)
{if(e.keyCode!==9)return true;var $el=this.$textarea;var start=$el.get(0).selectionStart;$el.val($el.val().substring(0,start)+"\t"+$el.val().substring($el.get(0).selectionEnd));$el.get(0).selectionStart=$el.get(0).selectionEnd=start+1;return false;},enlargeOffset:function(html,offset)
{var htmlLength=html.length;var c=0;if(html[offset]=='>')
{c++;}
else
{for(var i=offset;i<=htmlLength;i++)
{c++;if(html[i]=='>')
{break;}
else if(html[i]=='<'||i==htmlLength)
{c=0;break;}}}
return offset+c;}};},core:function()
{return{getObject:function()
{return $.extend({},this);},getEditor:function()
{return this.$editor;},getBox:function()
{return this.$box;},getElement:function()
{return this.$element;},getTextarea:function()
{return this.$textarea;},getToolbar:function()
{return(this.$toolbar)?this.$toolbar:false;},addEvent:function(name)
{this.core.event=name;},getEvent:function()
{return this.core.event;},setCallback:function(type,e,data)
{var eventName=type+'Callback';var eventNamespace='redactor';var callback=this.opts[eventName];if(this.$textarea)
{var returnValue=false;var events=$._data(this.$textarea[0],'events');if(typeof events!='undefined'&&typeof events[eventName]!='undefined')
{$.each(events[eventName],$.proxy(function(key,value)
{if(value['namespace']==eventNamespace)
{var data=(typeof data=='undefined')?[e]:[e,data];returnValue=(typeof data=='undefined')?value.handler.call(this,e):value.handler.call(this,e,data);}},this));}
if(returnValue)return returnValue;}
if($.isFunction(callback))
{return(typeof data=='undefined')?callback.call(this,e):callback.call(this,e,data);}
else
{return(typeof data=='undefined')?e:data;}},destroy:function()
{this.opts.destroyed=true;this.core.setCallback('destroy');this.$element.off('.redactor').removeData('redactor');this.$editor.off('.redactor');$(document).off('mousedown.redactor.'+this.uuid);$(document).off('click.redactor-image-delete.'+this.uuid);$(document).off('click.redactor-image-resize-hide.'+this.uuid);$(document).off('touchstart.redactor.'+this.uuid+' click.redactor.'+this.uuid);$("body").off('scroll.redactor.'+this.uuid);$(this.opts.toolbarFixedTarget).off('scroll.redactor.'+this.uuid);this.$editor.removeClass('redactor-editor redactor-linebreaks redactor-placeholder');this.$editor.removeAttr('contenteditable');var html=this.code.get();if(this.opts.toolbar)
{this.$toolbar.find('a').each(function()
{var $el=$(this);if($el.data('dropdown'))
{$el.data('dropdown').remove();$el.data('dropdown',{});}});}
if(this.build.isTextarea())
{this.$box.after(this.$element);this.$box.remove();this.$element.val(html).show();}
else
{this.$box.after(this.$editor);this.$box.remove();this.$element.html(html).show();}
if(this.$pasteBox)this.$pasteBox.remove();if(this.$modalBox)this.$modalBox.remove();if(this.$modalOverlay)this.$modalOverlay.remove();$('.redactor-toolbar-tooltip-'+this.uuid).remove();clearInterval(this.autosaveInterval);}};},dropdown:function()
{return{build:function(name,$dropdown,dropdownObject)
{if(name=='formatting'&&this.opts.formattingAdd)
{$.each(this.opts.formattingAdd,$.proxy(function(i,s)
{var name=s.tag,func;if(typeof s['class']!='undefined')
{name=name+'-'+s['class'];}
s.type=(this.utils.isBlockTag(s.tag))?'block':'inline';if(typeof s.func!=="undefined")
{func=s.func;}
else
{func=(s.type=='inline')?'inline.formatting':'block.formatting';}
if(this.opts.linebreaks&&s.type=='block'&&s.tag=='p')return;this.formatting[name]={tag:s.tag,style:s.style,'class':s['class'],attr:s.attr,data:s.data,clear:s.clear};dropdownObject[name]={func:func,title:s.title};},this));}
$.each(dropdownObject,$.proxy(function(btnName,btnObject)
{var $item=$('<a href="#" class="redactor-dropdown-'+btnName+'" role="button">'+btnObject.title+'</a>');if(name=='formatting')$item.addClass('redactor-formatting-'+btnName);$item.on('click',$.proxy(function(e)
{e.preventDefault();var type='func';var callback=btnObject.func;if(btnObject.command)
{type='command';callback=btnObject.command;}
else if(btnObject.dropdown)
{type='dropdown';callback=btnObject.dropdown;}
if($(e.target).hasClass('redactor-dropdown-link-inactive'))return;this.button.onClick(e,btnName,type,callback);this.dropdown.hideAll();},this));this.observe.addDropdown($item,btnName,btnObject);$dropdown.append($item);},this));},show:function(e,key)
{if(!this.opts.visual)
{e.preventDefault();return false;}
var $button=this.button.get(key);var $dropdown=$button.data('dropdown').appendTo(document.body);if(this.opts.highContrast)
{$dropdown.addClass("redactor-dropdown-contrast");}
if($button.hasClass('dropact'))
{this.dropdown.hideAll();}
else
{this.dropdown.hideAll();this.observe.dropdowns();this.core.setCallback('dropdownShow',{dropdown:$dropdown,key:key,button:$button});this.button.setActive(key);$button.addClass('dropact');var keyPosition=$button.offset();var dropdownWidth=$dropdown.width();if((keyPosition.left+dropdownWidth)>$(document).width())
{keyPosition.left=Math.max(0,keyPosition.left-dropdownWidth);}
var left=keyPosition.left+'px';if(this.$toolbar.hasClass('toolbar-fixed-box'))
{var top=this.$toolbar.innerHeight()+this.opts.toolbarFixedTopOffset;var position='fixed';if(this.opts.toolbarFixedTarget!==document)
{top=(this.$toolbar.innerHeight()+this.$toolbar.offset().top)+this.opts.toolbarFixedTopOffset;position='absolute';}
$dropdown.css({position:position,left:left,top:top+'px'}).show();}
else
{var top=($button.innerHeight()+keyPosition.top)+'px';$dropdown.css({position:'absolute',left:left,top:top}).show();}
this.core.setCallback('dropdownShown',{dropdown:$dropdown,key:key,button:$button});this.$dropdown=$dropdown;}
$(document).one('click.redactor-dropdown',$.proxy(this.dropdown.hide,this));this.$editor.one('click.redactor-dropdown',$.proxy(this.dropdown.hide,this));$(document).one('keyup.redactor-dropdown',$.proxy(this.dropdown.closeHandler,this));$dropdown.on('mouseover.redactor-dropdown',$.proxy(this.utils.disableBodyScroll,this)).on('mouseout.redactor-dropdown',$.proxy(this.utils.enableBodyScroll,this));e.stopPropagation();},closeHandler:function(e)
{if(e.which!=this.keyCode.ESC)return;this.dropdown.hideAll();this.$editor.focus();},hideAll:function()
{this.$toolbar.find('a.dropact').removeClass('redactor-act').removeClass('dropact');this.utils.enableBodyScroll();$('.redactor-dropdown-'+this.uuid).hide();$('.redactor-dropdown-link-selected').removeClass('redactor-dropdown-link-selected');if(this.$dropdown)
{this.$dropdown.off('.redactor-dropdown');this.core.setCallback('dropdownHide',this.$dropdown);this.$dropdown=false;}},hide:function(e)
{var $dropdown=$(e.target);if(!$dropdown.hasClass('dropact')&&!$dropdown.hasClass('redactor-dropdown-link-inactive'))
{$dropdown.removeClass('dropact');$dropdown.off('mouseover mouseout');this.dropdown.hideAll();}}};},file:function()
{return{show:function()
{this.modal.load('file',this.lang.get('file'),700);this.upload.init('#redactor-modal-file-upload',this.opts.fileUpload,this.file.insert);this.selection.save();this.selection.get();var text=this.sel.toString();$('#redactor-filename').val(text);this.modal.show();},insert:function(json,direct,e)
{if(typeof json.error!='undefined')
{this.modal.close();this.selection.restore();this.core.setCallback('fileUploadError',json);return;}
var link;if(typeof json=='string')
{link=json;}
else
{var text=$('#redactor-filename').val();if(typeof text=='undefined'||text==='')text=json.filename;link='<a href="'+json.filelink+'" id="filelink-marker">'+text+'</a>';}
if(direct)
{this.selection.removeMarkers();var marker=this.selection.getMarker();this.insert.nodeToCaretPositionFromPoint(e,marker);}
else
{this.modal.close();}
this.selection.restore();this.buffer.set();this.insert.htmlWithoutClean(link);if(typeof json=='string')return;var linkmarker=$(this.$editor.find('a#filelink-marker'));if(linkmarker.length!==0)
{linkmarker.removeAttr('id').removeAttr('style');}
else linkmarker=false;this.core.setCallback('fileUpload',linkmarker,json);}};},focus:function()
{return{setStart:function()
{this.$editor.focus();var first=this.$editor.children().first();if(first.length===0)return;if(first[0].length===0||first[0].tagName=='BR'||first[0].nodeType==3)
{return;}
if(first[0].tagName=='UL'||first[0].tagName=='OL')
{var child=first.find('li').first();if(!this.utils.isBlock(child)&&child.text()==='')
{this.caret.setStart(child);return;}}
if(this.opts.linebreaks&&!this.utils.isBlockTag(first[0].tagName))
{this.selection.get();this.range.setStart(this.$editor[0],0);this.range.setEnd(this.$editor[0],0);this.selection.addRange();return;}
this.caret.setStart(first);},setEnd:function()
{var last=this.$editor.children().last();this.$editor.focus();if(last.size()===0)return;if(this.utils.isEmpty(this.$editor.html()))
{this.selection.get();this.range.collapse(true);this.range.setStartAfter(last[0]);this.range.setEnd(last[0],0);this.selection.addRange();}
else
{this.selection.get();this.range.selectNodeContents(last[0]);this.range.collapse(false);this.selection.addRange();}},isFocused:function()
{var focusNode=document.getSelection().focusNode;if(focusNode===null)return false;if(this.opts.linebreaks&&$(focusNode.parentNode).hasClass('redactor-linebreaks'))return true;else if(!this.utils.isRedactorParent(focusNode.parentNode))return false;return this.$editor.is(':focus');}};},image:function()
{return{show:function()
{this.modal.load('image',this.lang.get('image'),700);this.upload.init('#redactor-modal-image-droparea',this.opts.imageUpload,this.image.insert);this.selection.save();this.modal.show();},showEdit:function($image)
{var $link=$image.closest('a',this.$editor[0]);this.modal.load('imageEdit',this.lang.get('edit'),705);this.modal.createCancelButton();this.image.buttonDelete=this.modal.createDeleteButton(this.lang.get('_delete'));this.image.buttonSave=this.modal.createActionButton(this.lang.get('save'));this.image.buttonDelete.on('click',$.proxy(function()
{this.image.remove($image);},this));this.image.buttonSave.on('click',$.proxy(function()
{this.image.update($image);},this));$('.redactor-link-tooltip').remove();$('#redactor-image-title').val($image.attr('alt'));if(!this.opts.imageLink)$('.redactor-image-link-option').hide();else
{var $redactorImageLink=$('#redactor-image-link');$redactorImageLink.attr('href',$image.attr('src'));if($link.length!==0)
{$redactorImageLink.val($link.attr('href'));if($link.attr('target')=='_blank')$('#redactor-image-link-blank').prop('checked',true);}}
if(!this.opts.imagePosition)$('.redactor-image-position-option').hide();else
{var floatValue=($image.css('display')=='block'&&$image.css('float')=='none')?'center':$image.css('float');$('#redactor-image-align').val(floatValue);}
this.modal.show();$('#redactor-image-title').focus();},setFloating:function($image)
{var floating=$('#redactor-image-align').val();var imageFloat='';var imageDisplay='';var imageMargin='';switch(floating)
{case'left':imageFloat='left';imageMargin='0 '+this.opts.imageFloatMargin+' '+this.opts.imageFloatMargin+' 0';break;case'right':imageFloat='right';imageMargin='0 0 '+this.opts.imageFloatMargin+' '+this.opts.imageFloatMargin;break;case'center':imageDisplay='block';imageMargin='auto';break;}
$image.css({'float':imageFloat,display:imageDisplay,margin:imageMargin});$image.attr('rel',$image.attr('style'));},update:function($image)
{this.image.hideResize();this.buffer.set();var $link=$image.closest('a',this.$editor[0]);var title=$('#redactor-image-title').val().replace(/(<([^>]+)>)/ig,"");$image.attr('alt',title);this.image.setFloating($image);var link=$.trim($('#redactor-image-link').val());var link=link.replace(/(<([^>]+)>)/ig,"");if(link!=='')
{var pattern='((xn--)?[a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}';var re=new RegExp('^(http|ftp|https)://'+pattern,'i');var re2=new RegExp('^'+pattern,'i');if(link.search(re)==-1&&link.search(re2)===0&&this.opts.linkProtocol)
{link=this.opts.linkProtocol+'://'+link;}
var target=($('#redactor-image-link-blank').prop('checked'))?true:false;if($link.length===0)
{var a=$('<a href="'+link+'">'+this.utils.getOuterHtml($image)+'</a>');if(target)a.attr('target','_blank');$image.replaceWith(a);}
else
{$link.attr('href',link);if(target)
{$link.attr('target','_blank');}
else
{$link.removeAttr('target');}}}
else if($link.length!==0)
{$link.replaceWith(this.utils.getOuterHtml($image));}
this.modal.close();this.observe.images();this.code.sync();},setEditable:function($image)
{if(this.opts.imageEditable)
{$image.on('dragstart',$.proxy(this.image.onDrag,this));}
var handler=$.proxy(function(e)
{this.observe.image=$image;this.image.resizer=this.image.loadEditableControls($image);$(document).on('mousedown.redactor-image-resize-hide.'+this.uuid,$.proxy(this.image.hideResize,this));if(!this.opts.imageResizable)return;this.image.resizer.on('mousedown.redactor touchstart.redactor',$.proxy(function(e)
{this.image.setResizable(e,$image);},this));},this);$image.off('mousedown.redactor').on('mousedown.redactor',$.proxy(this.image.hideResize,this));$image.off('click.redactor touchstart.redactor').on('click.redactor touchstart.redactor',handler);},setResizable:function(e,$image)
{e.preventDefault();this.image.resizeHandle={x:e.pageX,y:e.pageY,el:$image,ratio:$image.width()/$image.height(),h:$image.height()};e=e.originalEvent||e;if(e.targetTouches)
{this.image.resizeHandle.x=e.targetTouches[0].pageX;this.image.resizeHandle.y=e.targetTouches[0].pageY;}
this.image.startResize();},startResize:function()
{$(document).on('mousemove.redactor-image-resize touchmove.redactor-image-resize',$.proxy(this.image.moveResize,this));$(document).on('mouseup.redactor-image-resize touchend.redactor-image-resize',$.proxy(this.image.stopResize,this));},moveResize:function(e)
{e.preventDefault();e=e.originalEvent||e;var height=this.image.resizeHandle.h;if(e.targetTouches)height+=(e.targetTouches[0].pageY-this.image.resizeHandle.y);else height+=(e.pageY-this.image.resizeHandle.y);var width=Math.round(height*this.image.resizeHandle.ratio);if(height<50||width<100)return;var height=Math.round(this.image.resizeHandle.el.width()/this.image.resizeHandle.ratio);this.image.resizeHandle.el.attr({width:width,height:height});this.image.resizeHandle.el.width(width);this.image.resizeHandle.el.height(height);this.code.sync();},stopResize:function()
{this.handle=false;$(document).off('.redactor-image-resize');this.image.hideResize();},onDrag:function(e)
{if(this.$editor.find('#redactor-image-box').length!==0)
{e.preventDefault();return false;}
this.$editor.on('drop.redactor-image-inside-drop',$.proxy(function()
{setTimeout($.proxy(this.image.onDrop,this),1);},this));},onDrop:function()
{this.image.fixImageSourceAfterDrop();this.observe.images();this.$editor.off('drop.redactor-image-inside-drop');this.clean.clearUnverified();this.code.sync();},fixImageSourceAfterDrop:function()
{this.$editor.find('img[data-save-url]').each(function()
{var $el=$(this);$el.attr('src',$el.attr('data-save-url'));$el.removeAttr('data-save-url');});},hideResize:function(e)
{if(e&&$(e.target).closest('#redactor-image-box',this.$editor[0]).length!==0)return;if(e&&e.target.tagName=='IMG')
{var $image=$(e.target);$image.attr('data-save-url',$image.attr('src'));}
var imageBox=this.$editor.find('#redactor-image-box');if(imageBox.length===0)return;$('#redactor-image-editter').remove();$('#redactor-image-resizer').remove();imageBox.find('img').css({marginTop:imageBox[0].style.marginTop,marginBottom:imageBox[0].style.marginBottom,marginLeft:imageBox[0].style.marginLeft,marginRight:imageBox[0].style.marginRight});imageBox.css('margin','');imageBox.find('img').css('opacity','');imageBox.replaceWith(function()
{return $(this).contents();});$(document).off('mousedown.redactor-image-resize-hide.'+this.uuid);if(typeof this.image.resizeHandle!=='undefined')
{this.image.resizeHandle.el.attr('rel',this.image.resizeHandle.el.attr('style'));}
this.code.sync();},loadResizableControls:function($image,imageBox)
{if(this.opts.imageResizable&&!this.utils.isMobile())
{var imageResizer=$('<span id="redactor-image-resizer" data-redactor="verified"></span>');if(!this.utils.isDesktop())
{imageResizer.css({width:'15px',height:'15px'});}
imageResizer.attr('contenteditable',false);imageBox.append(imageResizer);imageBox.append($image);return imageResizer;}
else
{imageBox.append($image);return false;}},loadEditableControls:function($image)
{var imageBox=$('<span id="redactor-image-box" data-redactor="verified">');imageBox.css('float',$image.css('float')).attr('contenteditable',false);if($image[0].style.margin!='auto')
{imageBox.css({marginTop:$image[0].style.marginTop,marginBottom:$image[0].style.marginBottom,marginLeft:$image[0].style.marginLeft,marginRight:$image[0].style.marginRight});$image.css('margin','');}
else
{imageBox.css({'display':'block','margin':'auto'});}
$image.css('opacity','.5').after(imageBox);if(this.opts.imageEditable)
{this.image.editter=$('<span id="redactor-image-editter" data-redactor="verified">'+this.lang.get('edit')+'</span>');this.image.editter.attr('contenteditable',false);this.image.editter.on('click',$.proxy(function()
{this.image.showEdit($image);},this));imageBox.append(this.image.editter);var editerWidth=this.image.editter.innerWidth();this.image.editter.css('margin-left','-'+editerWidth/2+'px');}
return this.image.loadResizableControls($image,imageBox);},remove:function(image)
{var $image=$(image);var $link=$image.closest('a',this.$editor[0]);var $figure=$image.closest('figure',this.$editor[0]);var $parent=$image.parent();if($('#redactor-image-box').length!==0)
{$parent=$('#redactor-image-box').parent();}
var $next;if($figure.length!==0)
{$next=$figure.next();$figure.remove();}
else if($link.length!==0)
{$parent=$link.parent();$link.remove();}
else
{$image.remove();}
$('#redactor-image-box').remove();if($figure.length!==0)
{this.caret.setStart($next);}
else
{this.caret.setStart($parent);}
this.core.setCallback('imageDelete',$image[0].src,$image);this.modal.close();this.code.sync();},insert:function(json,direct,e)
{if(typeof json.error!='undefined')
{this.modal.close();this.selection.restore();this.core.setCallback('imageUploadError',json);return;}
var $img;if(typeof json=='string')
{$img=$(json).attr('data-redactor-inserted-image','true');}
else
{$img=$('<img>');$img.attr('src',json.filelink).attr('data-redactor-inserted-image','true');}
var node=$img;var isP=this.utils.isCurrentOrParent('P');if(isP)
{node=$('<blockquote />').append($img);}
if(direct)
{this.selection.removeMarkers();var marker=this.selection.getMarker();this.insert.nodeToCaretPositionFromPoint(e,marker);}
else
{this.modal.close();}
this.selection.restore();this.buffer.set();this.insert.html(this.utils.getOuterHtml(node),false);var $image=this.$editor.find('img[data-redactor-inserted-image=true]').removeAttr('data-redactor-inserted-image');if(isP)
{$image.parent().contents().unwrap().wrap('<p />');}
else if(this.opts.linebreaks)
{if(!this.utils.isEmpty(this.code.get()))
{$image.before('<br>');}
$image.after('<br>');}
if(typeof json=='string')return;this.core.setCallback('imageUpload',$image,json);}};},indent:function()
{return{increase:function()
{if(!this.utils.browser('msie'))this.$editor.focus();this.buffer.set();this.selection.save();var block=this.selection.getBlock();if(block&&block.tagName=='LI')
{this.indent.increaseLists();}
else if(block===false&&this.opts.linebreaks)
{this.indent.increaseText();}
else
{this.indent.increaseBlocks();}
this.selection.restore();this.code.sync();},increaseLists:function()
{document.execCommand('indent');this.indent.fixEmptyIndent();this.clean.normalizeLists();this.clean.clearUnverified();},increaseBlocks:function()
{$.each(this.selection.getBlocks(),$.proxy(function(i,elem)
{if(elem.tagName==='TD'||elem.tagName==='TH')return;var $el=this.utils.getAlignmentElement(elem);var left=this.utils.normalize($el.css('margin-left'))+this.opts.indentValue;$el.css('margin-left',left+'px');},this));},increaseText:function()
{var wrapper=this.selection.wrap('div');$(wrapper).attr('data-tagblock','redactor');$(wrapper).css('margin-left',this.opts.indentValue+'px');},decrease:function()
{this.buffer.set();this.selection.save();var block=this.selection.getBlock();if(block&&block.tagName=='LI')
{this.indent.decreaseLists();}
else
{this.indent.decreaseBlocks();}
this.selection.restore();this.code.sync();},decreaseLists:function()
{document.execCommand('outdent');var current=this.selection.getCurrent();var $item=$(current).closest('li',this.$editor[0]);this.indent.fixEmptyIndent();if(!this.opts.linebreaks&&$item.length===0)
{document.execCommand('formatblock',false,'p');this.$editor.find('ul, ol, blockquote, p').each($.proxy(this.utils.removeEmpty,this));}
this.clean.clearUnverified();},decreaseBlocks:function()
{$.each(this.selection.getBlocks(),$.proxy(function(i,elem)
{var $el=this.utils.getAlignmentElement(elem);var left=this.utils.normalize($el.css('margin-left'))-this.opts.indentValue;if(left<=0)
{if(this.opts.linebreaks&&typeof($el.data('tagblock'))!=='undefined')
{$el.replaceWith($el.html()+'<br />');}
else
{$el.css('margin-left','');this.utils.removeEmptyAttr($el,'style');}}
else
{$el.css('margin-left',left+'px');}},this));},fixEmptyIndent:function()
{var block=this.selection.getBlock();if(this.range.collapsed&&block&&block.tagName=='LI'&&this.utils.isEmpty($(block).text()))
{var $block=$(block);$block.find('span').not('.redactor-selection-marker').contents().unwrap();$block.append('<br>');}}};},inline:function()
{return{formatting:function(name)
{var type,value;if(typeof this.formatting[name].style!='undefined')type='style';else if(typeof this.formatting[name]['class']!='undefined')type='class';if(type)value=this.formatting[name][type];this.inline.format(this.formatting[name].tag,type,value);},format:function(tag,type,value)
{var current=this.selection.getCurrent();if(current&&current.tagName==='TR')return;this.blurClickedElement=true;if(this.utils.isCurrentOrParent('PRE')||this.utils.isCurrentOrParentHeader())return;var tags=['b','bold','i','italic','underline','strikethrough','deleted','superscript','subscript'];var replaced=['strong','strong','em','em','u','del','del','sup','sub'];for(var i=0;i<tags.length;i++)
{if(tag==tags[i])tag=replaced[i];}
if(this.opts.allowedTags)
{if($.inArray(tag,this.opts.allowedTags)==-1)return;}
else
{if($.inArray(tag,this.opts.deniedTags)!==-1)return;}
this.inline.type=type||false;this.inline.value=value||false;this.buffer.set();if(!this.utils.browser('msie'))
{this.$editor.focus();}
this.selection.get();if(this.range.collapsed)
{this.inline.formatCollapsed(tag);}
else
{this.inline.formatMultiple(tag);}},formatCollapsed:function(tag)
{var current=this.selection.getCurrent();var $parent=$(current).closest(tag+'[data-redactor-tag='+tag+']',this.$editor[0]);if($parent.length!==0&&(this.inline.type!='style'&&$parent[0].tagName!='SPAN'))
{if(this.utils.isEmpty($parent.text()))
{this.caret.setAfter($parent[0]);$parent.remove();this.code.sync();}
else if(this.utils.isEndOfElement($parent))
{this.caret.setAfter($parent[0]);}
return;}
var node=$('<'+tag+'>').attr('data-verified','redactor').attr('data-redactor-tag',tag);node.html(this.opts.invisibleSpace);node=this.inline.setFormat(node);var node=this.insert.node(node);this.caret.setEnd(node);this.code.sync();},formatMultiple:function(tag)
{this.inline.formatConvert(tag);this.selection.save();document.execCommand('strikethrough');this.$editor.find('strike').each($.proxy(function(i,s)
{var $el=$(s);this.inline.formatRemoveSameChildren($el,tag);var $span;if(this.inline.type)
{$span=$('<span>').attr('data-redactor-tag',tag).attr('data-verified','redactor');$span=this.inline.setFormat($span);}
else
{$span=$('<'+tag+'>').attr('data-redactor-tag',tag).attr('data-verified','redactor');}
$el.replaceWith($span.html($el.contents()));var $parent=$span.parent();if($parent&&$parent[0].tagName==='U')
{$span.parent().replaceWith($span);}
if(tag=='span')
{if($parent&&$parent[0].tagName==='SPAN'&&this.inline.type==='style')
{var arr=this.inline.value.split(';');for(var z=0;z<arr.length;z++)
{if(arr[z]==='')return;var style=arr[z].split(':');$parent.css(style[0],'');if(this.utils.removeEmptyAttr($parent,'style'))
{$parent.replaceWith($parent.contents());}}}}},this));if(tag!='span')
{this.$editor.find(this.opts.inlineTags.join(', ')).each($.proxy(function(i,s)
{var $el=$(s);if(s.tagName==='U'&&s.attributes.length===0)
{$el.replaceWith($el.contents());return;}
var property=$el.css('text-decoration');if(property==='line-through')
{$el.css('text-decoration','');this.utils.removeEmptyAttr($el,'style');}},this));}
if(tag!='del')
{var _this=this;this.$editor.find('inline').each(function(i,s)
{_this.utils.replaceToTag(s,'del');});}
this.selection.restore();this.code.sync();},formatRemoveSameChildren:function($el,tag)
{var self=this;$el.children(tag).each(function()
{var $child=$(this);if(!$child.hasClass('redactor-selection-marker'))
{if(self.inline.type=='style')
{var arr=self.inline.value.split(';');for(var z=0;z<arr.length;z++)
{if(arr[z]==='')return;var style=arr[z].split(':');$child.css(style[0],'');if(self.utils.removeEmptyAttr($child,'style'))
{$child.replaceWith($child.contents());}}}
else
{$child.contents().unwrap();}}});},formatConvert:function(tag)
{this.selection.save();var find='';if(this.inline.type=='class')find='[data-redactor-class='+this.inline.value+']';else if(this.inline.type=='style')
{find='[data-redactor-style="'+this.inline.value+'"]';}
var self=this;if(tag!='del')
{this.$editor.find('del').each(function(i,s)
{self.utils.replaceToTag(s,'inline');});}
if(tag!='span')
{this.$editor.find(tag).each(function()
{var $el=$(this);$el.replaceWith($('<strike />').html($el.contents()));});}
this.$editor.find('[data-redactor-tag="'+tag+'"]'+find).each(function()
{if(find===''&&tag=='span'&&this.tagName.toLowerCase()==tag)return;var $el=$(this);$el.replaceWith($('<strike />').html($el.contents()));});this.selection.restore();},setFormat:function(node)
{switch(this.inline.type)
{case'class':if(node.hasClass(this.inline.value))
{node.removeClass(this.inline.value);node.removeAttr('data-redactor-class');}
else
{node.addClass(this.inline.value);node.attr('data-redactor-class',this.inline.value);}
break;case'style':node[0].style.cssText=this.inline.value;node.attr('data-redactor-style',this.inline.value);break;}
return node;},removeStyle:function()
{this.buffer.set();var current=this.selection.getCurrent();var nodes=this.selection.getInlines();this.selection.save();if(current&&current.tagName==='SPAN')
{var $s=$(current);$s.removeAttr('style');if($s[0].attributes.length===0)
{$s.replaceWith($s.contents());}}
$.each(nodes,$.proxy(function(i,s)
{var $s=$(s);if($.inArray(s.tagName.toLowerCase(),this.opts.inlineTags)!=-1&&!$s.hasClass('redactor-selection-marker'))
{$s.removeAttr('style');if($s[0].attributes.length===0)
{$s.replaceWith($s.contents());}}},this));this.selection.restore();this.code.sync();},removeStyleRule:function(name)
{this.buffer.set();var parent=this.selection.getParent();var nodes=this.selection.getInlines();this.selection.save();if(parent&&parent.tagName==='SPAN')
{var $s=$(parent);$s.css(name,'');this.utils.removeEmptyAttr($s,'style');if($s[0].attributes.length===0)
{$s.replaceWith($s.contents());}}
$.each(nodes,$.proxy(function(i,s)
{var $s=$(s);if($.inArray(s.tagName.toLowerCase(),this.opts.inlineTags)!=-1&&!$s.hasClass('redactor-selection-marker'))
{$s.css(name,'');this.utils.removeEmptyAttr($s,'style');if($s[0].attributes.length===0)
{$s.replaceWith($s.contents());}}},this));this.selection.restore();this.code.sync();},removeFormat:function()
{this.buffer.set();var current=this.selection.getCurrent();this.selection.save();document.execCommand('removeFormat');if(current&&current.tagName==='SPAN')
{$(current).replaceWith($(current).contents());}
$.each(this.selection.getNodes(),$.proxy(function(i,s)
{var $s=$(s);if($.inArray(s.tagName.toLowerCase(),this.opts.inlineTags)!=-1&&!$s.hasClass('redactor-selection-marker'))
{$s.replaceWith($s.contents());}},this));this.selection.restore();this.code.sync();},toggleClass:function(className)
{this.inline.format('span','class',className);},toggleStyle:function(value)
{this.inline.format('span','style',value);}};},insert:function()
{return{set:function(html,clean)
{this.placeholder.remove();html=this.clean.setVerified(html);if(typeof clean=='undefined')
{html=this.clean.onPaste(html,false);}
this.$editor.html(html);this.selection.remove();this.focus.setEnd();this.clean.normalizeLists();this.code.sync();this.observe.load();if(typeof clean=='undefined')
{setTimeout($.proxy(this.clean.clearUnverified,this),10);}},text:function(text)
{this.placeholder.remove();text=text.toString();text=$.trim(text);text=this.clean.getPlainText(text,false);this.$editor.focus();if(this.utils.browser('msie'))
{this.insert.htmlIe(text);}
else
{this.selection.get();this.range.deleteContents();var el=document.createElement("div");el.innerHTML=text;var frag=document.createDocumentFragment(),node,lastNode;while((node=el.firstChild))
{lastNode=frag.appendChild(node);}
this.range.insertNode(frag);if(lastNode)
{var range=this.range.cloneRange();range.setStartAfter(lastNode);range.collapse(true);this.sel.removeAllRanges();this.sel.addRange(range);}}
this.code.sync();this.clean.clearUnverified();},htmlWithoutClean:function(html)
{this.insert.html(html,false);},html:function(html,clean)
{this.placeholder.remove();if(typeof clean=='undefined')clean=true;this.$editor.focus();html=this.clean.setVerified(html);if(clean)
{html=this.clean.onPaste(html);}
if(this.utils.browser('msie'))
{this.insert.htmlIe(html);}
else
{if(this.clean.singleLine)this.insert.execHtml(html);else document.execCommand('insertHTML',false,html);this.insert.htmlFixMozilla();}
this.clean.normalizeLists();if(!this.opts.linebreaks)
{this.$editor.find('p').each($.proxy(this.utils.removeEmpty,this));}
this.code.sync();this.observe.load();if(clean)
{this.clean.clearUnverified();}},htmlFixMozilla:function()
{if(!this.utils.browser('mozilla'))return;var $next=$(this.selection.getBlock()).next();if($next.length>0&&$next[0].tagName=='P'&&$next.html()==='')
{$next.remove();}},htmlIe:function(html)
{if(this.utils.isIe11())
{var parent=this.utils.isCurrentOrParent('P');var $html=$('<div>').append(html);var blocksMatch=$html.contents().is('p, :header, dl, ul, ol, div, table, td, blockquote, pre, address, section, header, footer, aside, article');if(parent&&blocksMatch)this.insert.ie11FixInserting(parent,html);else this.insert.ie11PasteFrag(html);return;}
document.selection.createRange().pasteHTML(html);},execHtml:function(html)
{html=this.clean.setVerified(html);this.selection.get();this.range.deleteContents();var el=document.createElement('div');el.innerHTML=html;var frag=document.createDocumentFragment(),node,lastNode;while((node=el.firstChild))
{lastNode=frag.appendChild(node);}
this.range.insertNode(frag);this.range.collapse(true);this.caret.setAfter(lastNode);},node:function(node,deleteContents)
{node=node[0]||node;var html=this.utils.getOuterHtml(node);html=this.clean.setVerified(html);if(html.match(/</g)!==null)
{node=$(html)[0];}
this.selection.get();if(deleteContents!==false)
{this.range.deleteContents();}
this.range.insertNode(node);this.range.collapse(false);this.selection.addRange();return node;},nodeToPoint:function(node,x,y)
{node=node[0]||node;this.selection.get();var range;if(document.caretPositionFromPoint)
{var pos=document.caretPositionFromPoint(x,y);this.range.setStart(pos.offsetNode,pos.offset);this.range.collapse(true);this.range.insertNode(node);}
else if(document.caretRangeFromPoint)
{range=document.caretRangeFromPoint(x,y);range.insertNode(node);}
else if(typeof document.body.createTextRange!="undefined")
{range=document.body.createTextRange();range.moveToPoint(x,y);var endRange=range.duplicate();endRange.moveToPoint(x,y);range.setEndPoint("EndToEnd",endRange);range.select();}},nodeToCaretPositionFromPoint:function(e,node)
{node=node[0]||node;var range;var x=e.clientX,y=e.clientY;if(document.caretPositionFromPoint)
{var pos=document.caretPositionFromPoint(x,y);var sel=document.getSelection();range=sel.getRangeAt(0);range.setStart(pos.offsetNode,pos.offset);range.collapse(true);range.insertNode(node);}
else if(document.caretRangeFromPoint)
{range=document.caretRangeFromPoint(x,y);range.insertNode(node);}
else if(typeof document.body.createTextRange!="undefined")
{range=document.body.createTextRange();range.moveToPoint(x,y);var endRange=range.duplicate();endRange.moveToPoint(x,y);range.setEndPoint("EndToEnd",endRange);range.select();}},ie11FixInserting:function(parent,html)
{var node=document.createElement('span');node.className='redactor-ie-paste';this.insert.node(node);var parHtml=$(parent).html();parHtml='<p>'+parHtml.replace(/<span class="redactor-ie-paste"><\/span>/gi,'</p>'+html+'<p>')+'</p>';parHtml=parHtml.replace(/<p><\/p>/gi,'');$(parent).replaceWith(parHtml);},ie11PasteFrag:function(html)
{this.selection.get();this.range.deleteContents();var el=document.createElement("div");el.innerHTML=html;var frag=document.createDocumentFragment(),node,lastNode;while((node=el.firstChild))
{lastNode=frag.appendChild(node);}
this.range.insertNode(frag);this.range.collapse(false);this.selection.addRange();}};},keydown:function()
{return{init:function(e)
{if(this.rtePaste)return;var key=e.which;var arrow=(key>=37&&key<=40);this.keydown.ctrl=e.ctrlKey||e.metaKey;this.keydown.current=this.selection.getCurrent();this.keydown.parent=this.selection.getParent();this.keydown.block=this.selection.getBlock();this.keydown.pre=this.utils.isTag(this.keydown.current,'pre');this.keydown.blockquote=this.utils.isTag(this.keydown.current,'blockquote');this.keydown.figcaption=this.utils.isTag(this.keydown.current,'figcaption');this.shortcuts.init(e,key);if(this.utils.isDesktop())
{this.keydown.checkEvents(arrow,key);this.keydown.setupBuffer(e,key);}
this.keydown.addArrowsEvent(arrow);this.keydown.setupSelectAll(e,key);var keydownStop=this.core.setCallback('keydown',e);if(keydownStop===false)
{e.preventDefault();return false;}
if(this.opts.enterKey&&(this.utils.browser('msie')||this.utils.browser('mozilla'))&&(key===this.keyCode.DOWN||key===this.keyCode.RIGHT))
{var isEndOfTable=false;var $table=false;if(this.keydown.block&&this.keydown.block.tagName==='TD')
{$table=$(this.keydown.block).closest('table',this.$editor[0]);}
if($table&&$table.find('td').last()[0]===this.keydown.block)
{isEndOfTable=true;}
if(this.utils.isEndOfElement()&&isEndOfTable)
{var node=$(this.opts.emptyHtml);$table.after(node);this.caret.setStart(node);}}
if(this.opts.enterKey&&key===this.keyCode.DOWN)
{this.keydown.onArrowDown();}
if(!this.opts.enterKey&&key===this.keyCode.ENTER)
{e.preventDefault();if(!this.range.collapsed)this.range.deleteContents();return;}
if(key==this.keyCode.ENTER&&!e.shiftKey&&!e.ctrlKey&&!e.metaKey)
{var stop=this.core.setCallback('enter',e);if(stop===false)
{e.preventDefault();return false;}
if(this.keydown.blockquote&&this.keydown.exitFromBlockquote(e)===true)
{return false;}
var current,$next;if(this.keydown.pre)
{return this.keydown.insertNewLine(e);}
else if(this.keydown.blockquote||this.keydown.figcaption)
{current=this.selection.getCurrent();$next=$(current).next();if($next.length!==0&&$next[0].tagName=='BR')
{return this.keydown.insertBreakLine(e);}
else if(this.utils.isEndOfElement()&&(current&&current!='SPAN'))
{return this.keydown.insertDblBreakLine(e);}
else
{return this.keydown.insertBreakLine(e);}}
else if(this.opts.linebreaks&&!this.keydown.block)
{current=this.selection.getCurrent();$next=$(this.keydown.current).next();if($next.length!==0&&$next[0].tagName=='BR')
{return this.keydown.insertBreakLine(e);}
else if(current!==false&&$(current).hasClass('redactor-invisible-space'))
{this.caret.setAfter(current);$(current).contents().unwrap();return this.keydown.insertDblBreakLine(e);}
else
{if(this.utils.isEndOfEditor())
{return this.keydown.insertDblBreakLine(e);}
else if($next.length===0&&current===false&&typeof $next.context!='undefined')
{return this.keydown.insertBreakLine(e);}
return this.keydown.insertBreakLine(e);}}
else if(this.opts.linebreaks&&this.keydown.block)
{setTimeout($.proxy(this.keydown.replaceDivToBreakLine,this),1);}
else if(!this.opts.linebreaks&&this.keydown.block)
{setTimeout($.proxy(this.keydown.replaceDivToParagraph,this),1);if(this.keydown.block.tagName==='LI')
{current=this.selection.getCurrent();var $parent=$(current).closest('li',this.$editor[0]);var $list=$parent.closest('ul,ol',this.$editor[0]);if($parent.length!==0&&this.utils.isEmpty($parent.html())&&$list.next().length===0&&this.utils.isEmpty($list.find("li").last().html()))
{$list.find("li").last().remove();var node=$(this.opts.emptyHtml);$list.after(node);this.caret.setStart(node);return false;}}}
else if(!this.opts.linebreaks&&!this.keydown.block)
{return this.keydown.insertParagraph(e);}}
if(key===this.keyCode.ENTER&&(e.ctrlKey||e.shiftKey))
{return this.keydown.onShiftEnter(e);}
if(key===this.keyCode.TAB||e.metaKey&&key===221||e.metaKey&&key===219)
{return this.keydown.onTab(e,key);}
if(key===this.keyCode.BACKSPACE||key===this.keyCode.DELETE)
{var nodes=this.selection.getNodes();if(nodes)
{var len=nodes.length;var last;for(var i=0;i<len;i++)
{var children=$(nodes[i]).children('img');if(children.length!==0)
{var self=this;$.each(children,function(z,s)
{var $s=$(s);if($s.css('float')!='none')return;self.core.setCallback('imageDelete',s.src,$s);last=s;});}
else if(nodes[i].tagName=='IMG')
{if(last!=nodes[i])
{this.core.setCallback('imageDelete',nodes[i].src,$(nodes[i]));last=nodes[i];}}}}}
if(key===this.keyCode.BACKSPACE)
{var block=this.selection.getBlock();var indented=($(block).css('margin-left')!=='0px');if(block&&indented&&this.range.collapsed&&this.utils.isStartOfElement())
{this.indent.decrease();e.preventDefault();return;}
if(this.utils.browser('mozilla'))
{var prev=this.selection.getPrev();var prev2=$(prev).prev()[0];if(prev&&prev.tagName==='HR')$(prev).remove();if(prev2&&prev2.tagName==='HR')$(prev2).remove();}
this.keydown.removeInvisibleSpace();this.keydown.removeEmptyListInTable(e);}
this.code.sync();},checkEvents:function(arrow,key)
{if(!arrow&&(this.core.getEvent()=='click'||this.core.getEvent()=='arrow'))
{this.core.addEvent(false);if(this.keydown.checkKeyEvents(key))
{this.buffer.set();}}},checkKeyEvents:function(key)
{var k=this.keyCode;var keys=[k.BACKSPACE,k.DELETE,k.ENTER,k.SPACE,k.ESC,k.TAB,k.CTRL,k.META,k.ALT,k.SHIFT];return($.inArray(key,keys)==-1)?true:false;},addArrowsEvent:function(arrow)
{if(!arrow)return;if((this.core.getEvent()=='click'||this.core.getEvent()=='arrow'))
{this.core.addEvent(false);return;}
this.core.addEvent('arrow');},setupBuffer:function(e,key)
{if(this.keydown.ctrl&&key===90&&!e.shiftKey&&!e.altKey&&this.opts.buffer.length)
{e.preventDefault();this.buffer.undo();return;}
else if(this.keydown.ctrl&&key===90&&e.shiftKey&&!e.altKey&&this.opts.rebuffer.length!==0)
{e.preventDefault();this.buffer.redo();return;}
else if(!this.keydown.ctrl)
{if(key==this.keyCode.BACKSPACE||key==this.keyCode.DELETE||(key==this.keyCode.ENTER&&!e.ctrlKey&&!e.shiftKey)||key==this.keyCode.SPACE)
{this.buffer.set();}}},setupSelectAll:function(e,key)
{if(this.keydown.ctrl&&key===65)
{this.utils.enableSelectAll();}
else if(key!=this.keyCode.LEFT_WIN&&!this.keydown.ctrl)
{this.utils.disableSelectAll();}},onArrowDown:function()
{var tags=[this.keydown.blockquote,this.keydown.pre,this.keydown.figcaption];for(var i=0;i<tags.length;i++)
{if(tags[i])
{this.keydown.insertAfterLastElement(tags[i]);return false;}}},onShiftEnter:function(e)
{this.buffer.set();if(this.utils.isEndOfElement())
{return this.keydown.insertDblBreakLine(e);}
return this.keydown.insertBreakLine(e);},onTab:function(e,key)
{if(!this.opts.tabKey)return true;if(this.utils.isEmpty(this.code.get())&&this.opts.tabAsSpaces===false)return true;e.preventDefault();var node;if(this.keydown.pre&&!e.shiftKey)
{node=(this.opts.preSpaces)?document.createTextNode(Array(this.opts.preSpaces+1).join('\u00a0')):document.createTextNode('\t');this.insert.node(node);this.code.sync();}
else if(this.opts.tabAsSpaces!==false)
{node=document.createTextNode(Array(this.opts.tabAsSpaces+1).join('\u00a0'));this.insert.node(node);this.code.sync();}
else
{if(e.metaKey&&key===219)this.indent.decrease();else if(e.metaKey&&key===221)this.indent.increase();else if(!e.shiftKey)this.indent.increase();else this.indent.decrease();}
return false;},replaceDivToBreakLine:function()
{var blockElem=this.selection.getBlock();var blockHtml=blockElem.innerHTML.replace(/<br\s?\/?>/gi,'');if((blockElem.tagName==='DIV'||blockElem.tagName==='P')&&blockHtml===''&&!$(blockElem).hasClass('redactor-editor'))
{var br=document.createElement('br');$(blockElem).replaceWith(br);this.caret.setBefore(br);this.code.sync();return false;}},replaceDivToParagraph:function()
{var blockElem=this.selection.getBlock();var blockHtml=blockElem.innerHTML.replace(/<br\s?\/?>/gi,'');if(blockElem.tagName==='DIV'&&this.utils.isEmpty(blockHtml)&&!$(blockElem).hasClass('redactor-editor'))
{var p=document.createElement('p');p.innerHTML=this.opts.invisibleSpace;$(blockElem).replaceWith(p);this.caret.setStart(p);this.code.sync();return false;}
else if(this.opts.cleanStyleOnEnter&&blockElem.tagName=='P')
{$(blockElem).removeAttr('class').removeAttr('style');}},insertParagraph:function(e)
{e.preventDefault();this.selection.get();var p=document.createElement('p');p.innerHTML=this.opts.invisibleSpace;this.range.deleteContents();this.range.insertNode(p);this.caret.setStart(p);this.code.sync();return false;},exitFromBlockquote:function(e)
{if(!this.utils.isEndOfElement())return;var tmp=$.trim($(this.keydown.block).html());if(tmp.search(/(<br\s?\/?>){2}$/i)!=-1)
{e.preventDefault();if(this.opts.linebreaks)
{var br=document.createElement('br');$(this.keydown.blockquote).after(br);this.caret.setBefore(br);$(this.keydown.block).html(tmp.replace(/<br\s?\/?>$/i,''));}
else
{var node=$(this.opts.emptyHtml);$(this.keydown.blockquote).after(node);this.caret.setStart(node);}
return true;}
return;},insertAfterLastElement:function(element)
{if(!this.utils.isEndOfElement())return;this.buffer.set();if(this.opts.linebreaks)
{var contents=$('<div>').append($.trim(this.$editor.html())).contents();var last=contents.last()[0];if(last.tagName=='SPAN'&&last.innerHTML==='')
{last=contents.prev()[0];}
if(this.utils.getOuterHtml(last)!=this.utils.getOuterHtml(element))return;var br=document.createElement('br');$(element).after(br);this.caret.setAfter(br);}
else
{if(this.$editor.contents().last()[0]!==element)return;var node=$(this.opts.emptyHtml);$(element).after(node);this.caret.setStart(node);}},insertNewLine:function(e)
{e.preventDefault();var node=document.createTextNode('\n');this.selection.get();this.range.deleteContents();this.range.insertNode(node);this.caret.setAfter(node);this.code.sync();return false;},insertBreakLine:function(e)
{return this.keydown.insertBreakLineProcessing(e);},insertDblBreakLine:function(e)
{return this.keydown.insertBreakLineProcessing(e,true);},insertBreakLineProcessing:function(e,dbl)
{e.stopPropagation();this.selection.get();var br1=document.createElement('br');if(this.utils.browser('msie'))
{this.range.collapse(false);this.range.setEnd(this.range.endContainer,this.range.endOffset);}
else
{this.range.deleteContents();}
this.range.insertNode(br1);var $parentA=$(br1).parent("a");if($parentA.length>0)
{$parentA.find(br1).remove();$parentA.after(br1);}
if(dbl===true)
{var $next=$(br1).next();if($next.length!==0&&$next[0].tagName==='BR'&&this.utils.isEndOfEditor())
{this.caret.setAfter(br1);this.code.sync();return false;}
var br2=document.createElement('br');this.range.insertNode(br2);this.caret.setAfter(br2);}
else
{if(this.utils.browser('msie'))
{var space=document.createElement('span');space.innerHTML='&#x200b;';$(br1).after(space);this.caret.setAfter(space);$(space).remove();}
else
{var range=document.createRange();range.setStartAfter(br1);range.collapse(true);var selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);}}
this.code.sync();return false;},removeInvisibleSpace:function()
{var $current=$(this.keydown.current);if($current.text().search(/^\u200B$/g)===0)
{$current.remove();}},removeEmptyListInTable:function(e)
{var $current=$(this.keydown.current);var $parent=$(this.keydown.parent);var td=$current.closest('td',this.$editor[0]);if(td.length!==0&&$current.closest('li',this.$editor[0])&&$parent.children('li').length===1)
{if(!this.utils.isEmpty($current.text()))return;e.preventDefault();$current.remove();$parent.remove();this.caret.setStart(td);}}};},keyup:function()
{return{init:function(e)
{if(this.rtePaste)return;var key=e.which;this.keyup.current=this.selection.getCurrent();this.keyup.parent=this.selection.getParent();var $parent=this.utils.isRedactorParent($(this.keyup.parent).parent());var keyupStop=this.core.setCallback('keyup',e);if(keyupStop===false)
{e.preventDefault();return false;}
if(!this.opts.linebreaks&&this.keyup.current.nodeType==3&&this.keyup.current.length<=1&&(this.keyup.parent===false||this.keyup.parent.tagName=='BODY'))
{this.keyup.replaceToParagraph();}
if(!this.opts.linebreaks&&this.utils.isRedactorParent(this.keyup.current)&&this.keyup.current.tagName==='DIV')
{this.keyup.replaceToParagraph(false);}
if(!this.opts.linebreaks&&$(this.keyup.parent).hasClass('redactor-invisible-space')&&($parent===false||$parent[0].tagName=='BODY'))
{$(this.keyup.parent).contents().unwrap();this.keyup.replaceToParagraph();}
if(this.linkify.isEnabled()&&this.linkify.isKey(key))this.linkify.format();if(key===this.keyCode.DELETE||key===this.keyCode.BACKSPACE)
{if(this.utils.browser('mozilla'))
{var td=$(this.keydown.current).closest('td',this.$editor[0]);if(td.size()!==0&&td.text()!=='')
{e.preventDefault();return false;}}
this.clean.clearUnverified();if(this.observe.image)
{e.preventDefault();this.image.hideResize();this.buffer.set();this.image.remove(this.observe.image);this.observe.image=false;return false;}
this.$editor.find('p').each($.proxy(function(i,s)
{this.utils.removeEmpty(i,$(s).html());},this));if(this.opts.linebreaks&&this.keyup.current&&this.keyup.current.tagName=='DIV'&&this.utils.isEmpty(this.keyup.current.innerHTML))
{$(this.keyup.current).after(this.selection.getMarkerAsHtml());this.selection.restore();$(this.keyup.current).remove();}
return this.keyup.formatEmpty(e);}},replaceToParagraph:function(clone)
{var $current=$(this.keyup.current);var node;if(clone===false)
{node=$('<p>').append($current.html());}
else
{node=$('<p>').append($current.clone());}
$current.replaceWith(node);var next=$(node).next();if(typeof(next[0])!=='undefined'&&next[0].tagName=='BR')
{next.remove();}
this.caret.setEnd(node);},formatEmpty:function(e)
{var html=$.trim(this.$editor.html());if(!this.utils.isEmpty(html))return;e.preventDefault();if(this.opts.linebreaks)
{this.$editor.html(this.selection.getMarkerAsHtml());this.selection.restore();}
else
{this.$editor.html(this.opts.emptyHtml);this.focus.setStart();}
this.code.sync();return false;}};},lang:function()
{return{load:function()
{this.opts.curLang=this.opts.langs[this.opts.lang];},get:function(name)
{return(typeof this.opts.curLang[name]!='undefined')?this.opts.curLang[name]:'';}};},line:function()
{return{insert:function()
{this.buffer.set();var blocks=this.selection.getBlocks();if(blocks[0]!==false&&this.line.isExceptLastOrFirst(blocks))
{if(!this.utils.browser('msie'))this.$editor.focus();return;}
if(this.utils.browser('msie'))
{this.line.insertInIe();}
else
{this.line.insertInOthersBrowsers();}},isExceptLastOrFirst:function(blocks)
{var exceptTags=['li','td','th','blockquote','figcaption','pre','dl','dt','dd'];var first=blocks[0].tagName.toLowerCase();var last=this.selection.getLastBlock();last=(typeof last=='undefined')?first:last.tagName.toLowerCase();var firstFound=$.inArray(first,exceptTags)!=-1;var lastFound=$.inArray(last,exceptTags)!=-1;if((firstFound&&lastFound)||firstFound)
{return true;}},insertInIe:function()
{this.utils.saveScroll();this.buffer.set();this.insert.node(document.createElement('hr'));this.utils.restoreScroll();this.code.sync();},insertInOthersBrowsers:function()
{this.buffer.set();var extra='<p id="redactor-insert-line"><br /></p>';if(this.opts.linebreaks)extra='<br id="redactor-insert-line">';document.execCommand('insertHtml',false,'<hr>'+extra);this.line.setFocus();this.code.sync();},setFocus:function()
{var node=this.$editor.find('#redactor-insert-line');var next=$(node).next()[0];var target=next;if(this.utils.browser('mozilla')&&next&&next.innerHTML==='')
{target=$(next).next()[0];$(next).remove();}
if(target)
{node.remove();if(!this.opts.linebreaks)
{this.$editor.focus();this.line.setStart(target);}}
else
{node.removeAttr('id');this.line.setStart(node[0]);}},setStart:function(node)
{if(typeof node==='undefined')return;var textNode=document.createTextNode('\u200B');this.selection.get();this.range.setStart(node,0);this.range.insertNode(textNode);this.range.collapse(true);this.selection.addRange();}};},link:function()
{return{show:function(e)
{if(typeof e!='undefined'&&e.preventDefault)e.preventDefault();if(!this.observe.isCurrent('a'))
{this.modal.load('link',this.lang.get('link_insert'),600);}
else
{this.modal.load('link',this.lang.get('link_edit'),600);}
this.modal.createCancelButton();var buttonText=!this.observe.isCurrent('a')?this.lang.get('insert'):this.lang.get('edit');this.link.buttonInsert=this.modal.createActionButton(buttonText);this.selection.get();this.link.getData();this.link.cleanUrl();if(this.link.target=='_blank')$('#redactor-link-blank').prop('checked',true);this.link.$inputUrl=$('#redactor-link-url');this.link.$inputText=$('#redactor-link-url-text');this.link.$inputText.val(this.link.text);this.link.$inputUrl.val(this.link.url);this.link.buttonInsert.on('click',$.proxy(this.link.insert,this));$('.redactor-link-tooltip').remove();this.selection.save();this.modal.show();this.link.$inputUrl.focus();},cleanUrl:function()
{var thref=self.location.href.replace(/\/$/i,'');if(typeof this.link.url!=="undefined")
{this.link.url=this.link.url.replace(thref,'');this.link.url=this.link.url.replace(/^\/#/,'#');this.link.url=this.link.url.replace('mailto:','');if(!this.opts.linkProtocol)
{var re=new RegExp('^(http|ftp|https)://'+self.location.host,'i');this.link.url=this.link.url.replace(re,'');}}},getData:function()
{this.link.$node=false;var $el=$(this.selection.getCurrent()).closest('a',this.$editor[0]);if($el.length!==0&&$el[0].tagName==='A')
{this.link.$node=$el;this.link.url=$el.attr('href');this.link.text=$el.text();this.link.target=$el.attr('target');}
else
{this.link.text=this.sel.toString();this.link.url='';this.link.target='';}},insert:function()
{this.placeholder.remove();var target='';var link=this.link.$inputUrl.val();var text=this.link.$inputText.val().replace(/(<([^>]+)>)/ig,"");if($.trim(link)==='')
{this.link.$inputUrl.addClass('redactor-input-error').on('keyup',function()
{$(this).removeClass('redactor-input-error');$(this).off('keyup');});return;}
if(link.search('@')!=-1&&/(http|ftp|https):\/\//i.test(link)===false)
{link='mailto:'+link;}
else if(link.search('#')!==0)
{if($('#redactor-link-blank').prop('checked'))
{target='_blank';}
var pattern='((xn--)?[a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}';var re=new RegExp('^(http|ftp|https)://'+pattern,'i');var re2=new RegExp('^'+pattern,'i');var re3=new RegExp('\.(html|php)$','i');if(link.search(re)==-1&&link.search(re3)==-1&&link.search(re2)===0&&this.opts.linkProtocol)
{link=this.opts.linkProtocol+'://'+link;}}
this.link.set(text,link,target);this.modal.close();},set:function(text,link,target)
{text=$.trim(text.replace(/<|>/g,''));this.selection.restore();var blocks=this.selection.getBlocks();if(text===''&&link==='')return;if(text===''&&link!=='')text=link;if(this.link.$node)
{this.buffer.set();var $link=this.link.$node,$el=$link.children();if($el.length>0)
{while($el.length)
{$el=$el.children();}
$el=$el.end();}
else
{$el=$link;}
$link.attr('href',link);$el.text(text);if(target!=='')
{$link.attr('target',target);}
else
{$link.removeAttr('target');}
this.selection.selectElement($link);this.code.sync();}
else
{if(this.utils.browser('mozilla')&&this.link.text==='')
{var $a=$('<a />').attr('href',link).text(text);if(target!=='')$a.attr('target',target);this.insert.node($a);this.selection.selectElement($a);}
else
{var $a;if(this.utils.browser('msie'))
{$a=$('<a href="'+link+'">').text(text);if(target!=='')$a.attr('target',target);$a=$(this.insert.node($a));if(this.selection.getText().match(/\s$/))
{$a.after(" ");}
this.selection.selectElement($a);}
else
{document.execCommand('createLink',false,link);$a=$(this.selection.getCurrent()).closest('a',this.$editor[0]);if(this.utils.browser('mozilla'))
{$a=$('a[_moz_dirty=""]');}
if(target!=='')$a.attr('target',target);$a.removeAttr('style').removeAttr('_moz_dirty');if(this.selection.getText().match(/\s$/))
{$a.after(" ");}
if(this.link.text!==''||this.link.text!=text)
{if(!this.opts.linebreaks&&blocks&&blocks.length<=1)
{$a.text(text);}
this.selection.selectElement($a);}}}
this.code.sync();this.core.setCallback('insertedLink',$a);}
setTimeout($.proxy(function()
{this.observe.links();},this),5);},unlink:function(e)
{if(typeof e!='undefined'&&e.preventDefault)
{e.preventDefault();}
var nodes=this.selection.getNodes();if(!nodes)return;this.buffer.set();var len=nodes.length;var links=[];for(var i=0;i<len;i++)
{if(nodes[i].tagName==='A')
{links.push(nodes[i]);}
var $node=$(nodes[i]).closest('a',this.$editor[0]);$node.replaceWith($node.contents());}
this.core.setCallback('deletedLink',links);$('.redactor-link-tooltip').remove();this.code.sync();},toggleClass:function(className)
{this.link.setClass(className,'toggleClass');},addClass:function(className)
{this.link.setClass(className,'addClass');},removeClass:function(className)
{this.link.setClass(className,'removeClass');},setClass:function(className,func)
{var links=this.selection.getInlinesTags(['a']);if(links===false)return;$.each(links,function()
{$(this)[func](className);});}};},linkify:function()
{return{isKey:function(key)
{return key==this.keyCode.ENTER||key==this.keyCode.SPACE;},isEnabled:function()
{return this.opts.convertLinks&&(this.opts.convertUrlLinks||this.opts.convertImageLinks||this.opts.convertVideoLinks)&&!this.utils.isCurrentOrParent('PRE');},format:function()
{var linkify=this.linkify,opts=this.opts;this.$editor.find(":not(iframe,img,a,pre)").addBack().contents().filter(function()
{return this.nodeType===3&&$.trim(this.nodeValue)!=""&&!$(this).parent().is("pre")&&(this.nodeValue.match(opts.linkify.regexps.youtube)||this.nodeValue.match(opts.linkify.regexps.vimeo)||this.nodeValue.match(opts.linkify.regexps.image)||this.nodeValue.match(opts.linkify.regexps.url));}).each(function()
{var text=$(this).text(),html=text;if(opts.convertVideoLinks&&(html.match(opts.linkify.regexps.youtube)||html.match(opts.linkify.regexps.vimeo)))
{html=linkify.convertVideoLinks(html);}
else if(opts.convertImageLinks&&html.match(opts.linkify.regexps.image))
{html=linkify.convertImages(html);}
else if(opts.convertUrlLinks)
{html=linkify.convertLinks(html);}
$(this).before(text.replace(text,html)).remove();});var objects=this.$editor.find('.redactor-linkify-object').each(function()
{var $el=$(this);$el.removeClass('redactor-linkify-object');if($el.attr('class')==='')$el.removeAttr('class');return $el[0];});this.core.setCallback('linkify',objects);this.code.sync();},convertVideoLinks:function(html)
{var iframeStart='<iframe class="redactor-linkify-object" width="500" height="281" src="',iframeEnd='" frameborder="0" allowfullscreen></iframe>';if(html.match(this.opts.linkify.regexps.youtube))
{html=html.replace(this.opts.linkify.regexps.youtube,iframeStart+'//www.youtube.com/embed/$1'+iframeEnd);}
if(html.match(this.opts.linkify.regexps.vimeo))
{html=html.replace(this.opts.linkify.regexps.vimeo,iframeStart+'//player.vimeo.com/video/$2'+iframeEnd);}
return html;},convertImages:function(html)
{var matches=html.match(this.opts.linkify.regexps.image);if(matches)
{html=html.replace(html,'<img src="'+matches+'" class="redactor-linkify-object" />');if(this.opts.linebreaks)
{if(!this.utils.isEmpty(this.code.get()))
{html='<br>'+html;}}
html+='<br>';}
return html;},convertLinks:function(html)
{var matches=html.match(this.opts.linkify.regexps.url);if(matches)
{matches=$.grep(matches,function(v,k){return $.inArray(v,matches)===k;});var length=matches.length;for(var i=0;i<length;i++)
{var href=matches[i],text=href,linkProtocol=this.opts.linkProtocol+'://';if(href.match(/(https?|ftp):\/\//i)!==null)
{linkProtocol="";}
if(text.length>this.opts.linkSize)
{text=text.substring(0,this.opts.linkSize)+'...';}
text=decodeURIComponent(text);var regexB="\\b";if($.inArray(href.slice(-1),["/","&","="])!=-1)
{regexB="";}
var regexp=new RegExp('('+href.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")+regexB+')','g');html=html.replace(regexp,'<a href="'+linkProtocol+$.trim(href)+'" class="redactor-linkify-object">'+$.trim(text)+'</a>');}}
return html;}};},list:function()
{return{toggle:function(cmd)
{this.placeholder.remove();if(!this.utils.browser('msie'))this.$editor.focus();this.buffer.set();this.selection.save();var parent=this.selection.getParent();var $list=$(parent).closest('ol, ul',this.$editor[0]);if(!this.utils.isRedactorParent($list)&&$list.length!==0)
{$list=false;}
var isUnorderedCmdOrdered,isOrderedCmdUnordered;var remove=false;if($list&&$list.length)
{remove=true;var listTag=$list[0].tagName;isUnorderedCmdOrdered=(cmd==='orderedlist'&&listTag==='UL');isOrderedCmdUnordered=(cmd==='unorderedlist'&&listTag==='OL');}
if(isUnorderedCmdOrdered)
{this.utils.replaceToTag($list,'ol');}
else if(isOrderedCmdUnordered)
{this.utils.replaceToTag($list,'ul');}
else
{if(remove)
{this.list.remove(cmd,$list);}
else
{this.list.insert(cmd);}}
this.selection.restore();this.code.sync();},insert:function(cmd)
{var current=this.selection.getCurrent();var $td=$(current).closest('td, th',this.$editor[0]);if(this.utils.browser('msie')&&this.opts.linebreaks)
{this.list.insertInIe(cmd);}
else
{document.execCommand('insert'+cmd);}
var parent=this.selection.getParent();var $list=$(parent).closest('ol, ul',this.$editor[0]);if($td.length!==0)
{var newTd=$td.clone();$td.after(newTd).remove('');}
if(this.utils.isEmpty($list.find('li').text()))
{var $children=$list.children('li');$children.find('br').remove();$children.append(this.selection.getMarkerAsHtml());if(this.opts.linebreaks&&this.utils.browser('mozilla')&&$children.size()==2&&this.utils.isEmpty($children.eq(1).text()))
{$children.eq(1).remove();}}
if($list.length)
{var $listParent=$list.parent();if(this.utils.isRedactorParent($listParent)&&$listParent[0].tagName!='LI'&&this.utils.isBlock($listParent[0]))
{$listParent.replaceWith($listParent.contents());}}
if(!this.utils.browser('msie'))
{this.$editor.focus();}
this.clean.clearUnverified();},insertInIe:function(cmd)
{var wrapper=this.selection.wrap('div');var wrapperHtml=$(wrapper).html();var tmpList=(cmd=='orderedlist')?$('<ol>'):$('<ul>');var tmpLi=$('<li>');if($.trim(wrapperHtml)==='')
{tmpLi.append(this.selection.getMarkerAsHtml());tmpList.append(tmpLi);this.$editor.find('#selection-marker-1').replaceWith(tmpList);}
else
{var items=wrapperHtml.split(/<br\s?\/?>/gi);if(items)
{for(var i=0;i<items.length;i++)
{if($.trim(items[i])!=='')
{tmpList.append($('<li>').html(items[i]));}}}
else
{tmpLi.append(wrapperHtml);tmpList.append(tmpLi);}
$(wrapper).replaceWith(tmpList);}},remove:function(cmd,$list)
{if($.inArray('ul',this.selection.getBlocks()))cmd='unorderedlist';document.execCommand('insert'+cmd);var $current=$(this.selection.getCurrent());this.indent.fixEmptyIndent();if(!this.opts.linebreaks&&$current.closest('li, th, td',this.$editor[0]).length===0)
{document.execCommand('formatblock',false,'p');this.$editor.find('ul, ol, blockquote').each($.proxy(this.utils.removeEmpty,this));}
var $table=$(this.selection.getCurrent()).closest('table',this.$editor[0]);var $prev=$table.prev();if(!this.opts.linebreaks&&$table.length!==0&&$prev.length!==0&&$prev[0].tagName=='BR')
{$prev.remove();}
this.clean.clearUnverified();}};},modal:function()
{return{callbacks:{},loadTemplates:function()
{this.opts.modal={imageEdit:String()
+'<section id="redactor-modal-image-edit">'
+'<label>'+this.lang.get('title')+'</label>'
+'<input type="text" id="redactor-image-title" />'
+'<label class="redactor-image-link-option">'+this.lang.get('link')+'</label>'
+'<input type="text" id="redactor-image-link" class="redactor-image-link-option" aria-label="'+this.lang.get('link')+'" />'
+'<label class="redactor-image-link-option"><input type="checkbox" id="redactor-image-link-blank" aria-label="'+this.lang.get('link_new_tab')+'"> '+this.lang.get('link_new_tab')+'</label>'
+'<label class="redactor-image-position-option">'+this.lang.get('image_position')+'</label>'
+'<select class="redactor-image-position-option" id="redactor-image-align" aria-label="'+this.lang.get('image_position')+'">'
+'<option value="none">'+this.lang.get('none')+'</option>'
+'<option value="left">'+this.lang.get('left')+'</option>'
+'<option value="center">'+this.lang.get('center')+'</option>'
+'<option value="right">'+this.lang.get('right')+'</option>'
+'</select>'
+'</section>',image:String()
+'<section id="redactor-modal-image-insert">'
+'<div id="redactor-modal-image-droparea"></div>'
+'</section>',file:String()
+'<section id="redactor-modal-file-insert">'
+'<div id="redactor-modal-file-upload-box">'
+'<label>'+this.lang.get('filename')+'</label>'
+'<input type="text" id="redactor-filename" aria-label="'+this.lang.get('filename')+'" /><br><br>'
+'<div id="redactor-modal-file-upload"></div>'
+'</div>'
+'</section>',link:String()
+'<section id="redactor-modal-link-insert">'
+'<label>URL</label>'
+'<input type="url" id="redactor-link-url" aria-label="URL" />'
+'<label>'+this.lang.get('text')+'</label>'
+'<input type="text" id="redactor-link-url-text" aria-label="'+this.lang.get('text')+'" />'
+'<label><input type="checkbox" id="redactor-link-blank"> '+this.lang.get('link_new_tab')+'</label>'
+'</section>'};$.extend(this.opts,this.opts.modal);},addCallback:function(name,callback)
{this.modal.callbacks[name]=callback;},createTabber:function($modal)
{this.modal.$tabber=$('<div>').attr('id','redactor-modal-tabber');$modal.prepend(this.modal.$tabber);},addTab:function(id,name,active)
{var $tab=$('<a href="#" rel="tab'+id+'">').text(name);if(active)
{$tab.addClass('active');}
var self=this;$tab.on('click',function(e)
{e.preventDefault();$('.redactor-tab').hide();$('.redactor-'+$(this).attr('rel')).show();self.modal.$tabber.find('a').removeClass('active');$(this).addClass('active');});this.modal.$tabber.append($tab);},addTemplate:function(name,template)
{this.opts.modal[name]=template;},getTemplate:function(name)
{return this.opts.modal[name];},getModal:function()
{return this.$modalBody.find('section');},load:function(templateName,title,width)
{this.modal.templateName=templateName;this.modal.width=width;this.modal.build();this.modal.enableEvents();this.modal.setTitle(title);this.modal.setDraggable();this.modal.setContent();if(typeof this.modal.callbacks[templateName]!='undefined')
{this.modal.callbacks[templateName].call(this);}},show:function()
{this.utils.disableBodyScroll();if(this.utils.isMobile())
{this.modal.showOnMobile();}
else
{this.modal.showOnDesktop();}
if(this.opts.highContrast)
{this.$modalBox.addClass("redactor-modal-contrast");}
this.$modalOverlay.show();this.$modalBox.show();this.$modal.attr('tabindex','-1');this.$modal.focus();this.modal.setButtonsWidth();this.utils.saveScroll();if(!this.utils.isMobile())
{setTimeout($.proxy(this.modal.showOnDesktop,this),0);$(window).on('resize.redactor-modal',$.proxy(this.modal.resize,this));}
this.core.setCallback('modalOpened',this.modal.templateName,this.$modal);$(document).off('focusin.modal');this.$modal.find('input[type=text],input[type=url],input[type=email]').on('keydown.redactor-modal',$.proxy(this.modal.setEnter,this));},showOnDesktop:function()
{var height=this.$modal.outerHeight();var windowHeight=$(window).height();var windowWidth=$(window).width();if(this.modal.width>windowWidth)
{this.$modal.css({width:'96%',marginTop:(windowHeight/2-height/2)+'px'});return;}
if(height>windowHeight)
{this.$modal.css({width:this.modal.width+'px',marginTop:'20px'});}
else
{this.$modal.css({width:this.modal.width+'px',marginTop:(windowHeight/2-height/2)+'px'});}},showOnMobile:function()
{this.$modal.css({width:'96%',marginTop:'2%'});},resize:function()
{if(this.utils.isMobile())
{this.modal.showOnMobile();}
else
{this.modal.showOnDesktop();}},setTitle:function(title)
{this.$modalHeader.html(title);},setContent:function()
{this.$modalBody.html(this.modal.getTemplate(this.modal.templateName));},setDraggable:function()
{if(typeof $.fn.draggable==='undefined')return;this.$modal.draggable({handle:this.$modalHeader});this.$modalHeader.css('cursor','move');},setEnter:function(e)
{if(e.which!=13)return;e.preventDefault();this.$modal.find('button.redactor-modal-action-btn').click();},createCancelButton:function()
{var button=$('<button>').addClass('redactor-modal-btn redactor-modal-close-btn').html(this.lang.get('cancel'));button.on('click',$.proxy(this.modal.close,this));this.$modalFooter.append(button);},createDeleteButton:function(label)
{return this.modal.createButton(label,'delete');},createActionButton:function(label)
{return this.modal.createButton(label,'action');},createButton:function(label,className)
{var button=$('<button>').addClass('redactor-modal-btn').addClass('redactor-modal-'+className+'-btn').html(label);this.$modalFooter.append(button);return button;},setButtonsWidth:function()
{var buttons=this.$modalFooter.find('button');var buttonsSize=buttons.length;if(buttonsSize===0)return;buttons.css('width',(100/buttonsSize)+'%');},build:function()
{this.modal.buildOverlay();this.$modalBox=$('<div id="redactor-modal-box"/>').hide();this.$modal=$('<div id="redactor-modal" role="dialog" aria-labelledby="redactor-modal-header" />');this.$modalHeader=$('<header id="redactor-modal-header"/>');this.$modalClose=$('<button type="button" id="redactor-modal-close" tabindex="1" aria-label="Close" />').html('&times;');this.$modalBody=$('<div id="redactor-modal-body" />');this.$modalFooter=$('<footer />');this.$modal.append(this.$modalHeader);this.$modal.append(this.$modalClose);this.$modal.append(this.$modalBody);this.$modal.append(this.$modalFooter);this.$modalBox.append(this.$modal);this.$modalBox.appendTo(document.body);},buildOverlay:function()
{this.$modalOverlay=$('<div id="redactor-modal-overlay">').hide();$('body').prepend(this.$modalOverlay);},enableEvents:function()
{this.$modalClose.on('click.redactor-modal',$.proxy(this.modal.close,this));$(document).on('keyup.redactor-modal',$.proxy(this.modal.closeHandler,this));this.$editor.on('keyup.redactor-modal',$.proxy(this.modal.closeHandler,this));this.$modalBox.on('click.redactor-modal',$.proxy(this.modal.close,this));},disableEvents:function()
{this.$modalClose.off('click.redactor-modal');$(document).off('keyup.redactor-modal');this.$editor.off('keyup.redactor-modal');this.$modalBox.off('click.redactor-modal');$(window).off('resize.redactor-modal');},closeHandler:function(e)
{if(e.which!=this.keyCode.ESC)return;this.modal.close(false);},close:function(e)
{if(e)
{if(!$(e.target).hasClass('redactor-modal-close-btn')&&e.target!=this.$modalClose[0]&&e.target!=this.$modalBox[0])
{return;}
e.preventDefault();}
if(!this.$modalBox)return;this.modal.disableEvents();this.utils.enableBodyScroll();this.$modalOverlay.remove();this.$modalBox.fadeOut('fast',$.proxy(function()
{this.$modalBox.remove();setTimeout($.proxy(this.utils.restoreScroll,this),0);if(e!==undefined)this.selection.restore();$(document.body).css('overflow',this.modal.bodyOveflow);this.core.setCallback('modalClosed',this.modal.templateName);},this));}};},observe:function()
{return{load:function()
{if(typeof this.opts.destroyed!="undefined")return;if(this.utils.browser('msie'))
{var self=this;this.$editor.find('pre, code').on('mouseover',function()
{self.$editor.attr('contenteditable',false);$(this).attr('contenteditable',true);}).on('mouseout',function()
{self.$editor.attr('contenteditable',true);$(this).removeAttr('contenteditable');});}
this.observe.images();this.observe.links();},toolbar:function(e,btnName)
{this.observe.buttons(e,btnName);this.observe.dropdowns();},isCurrent:function($el,$current)
{if(typeof $current=='undefined')
{var $current=$(this.selection.getCurrent());}
return $current.is($el)||$current.parents($el).length>0;},dropdowns:function()
{var $current=$(this.selection.getCurrent());$.each(this.opts.observe.dropdowns,$.proxy(function(key,value)
{var observe=value.observe,element=observe.element,$item=value.item,inValues=typeof observe['in']!='undefined'?observe['in']:false,outValues=typeof observe['out']!='undefined'?observe['out']:false;if($current.closest(element).size()>0)
{this.observe.setDropdownProperties($item,inValues,outValues);}
else
{this.observe.setDropdownProperties($item,outValues,inValues);}},this));},setDropdownProperties:function($item,addProperties,deleteProperties)
{if(deleteProperties&&typeof deleteProperties['attr']!='undefined')
{this.observe.setDropdownAttr($item,deleteProperties.attr,true);}
if(typeof addProperties['attr']!='undefined')
{this.observe.setDropdownAttr($item,addProperties.attr);}
if(typeof addProperties['title']!='undefined')
{$item.text(addProperties['title']);}},setDropdownAttr:function($item,properties,isDelete)
{$.each(properties,function(key,value)
{if(key=='class')
{if(!isDelete)
{$item.addClass(value);}
else
{$item.removeClass(value);}}
else
{if(!isDelete)
{$item.attr(key,value);}
else
{$item.removeAttr(key);}}});},addDropdown:function($item,btnName,btnObject)
{if(typeof btnObject.observe=="undefined")return;btnObject.item=$item;this.opts.observe.dropdowns.push(btnObject);},buttons:function(e,btnName)
{var current=this.selection.getCurrent();var parent=this.selection.getParent();if(e!==false)
{this.button.setInactiveAll();}
else
{this.button.setInactiveAll(btnName);}
if(e===false&&btnName!=='html')
{if($.inArray(btnName,this.opts.activeButtons)!=-1)this.button.toggleActive(btnName);return;}
$.each(this.opts.activeButtonsStates,$.proxy(function(key,value)
{var parentEl=$(parent).closest(key,this.$editor[0]);var currentEl=$(current).closest(key,this.$editor[0]);if(parentEl.length!==0&&!this.utils.isRedactorParent(parentEl))return;if(!this.utils.isRedactorParent(currentEl))return;if(parentEl.length!==0||currentEl.closest(key,this.$editor[0]).length!==0)
{this.button.setActive(value);}},this));var $parent=$(parent).closest(this.opts.alignmentTags.toString().toLowerCase(),this.$editor[0]);if(this.utils.isRedactorParent(parent)&&$parent.length)
{var align=($parent.css('text-align')==='')?'left':$parent.css('text-align');this.button.setActive('align'+align);}},addButton:function(tag,btnName)
{this.opts.activeButtons.push(btnName);this.opts.activeButtonsStates[tag]=btnName;},images:function()
{this.$editor.find('img').each($.proxy(function(i,img)
{var $img=$(img);$img.closest('a',this.$editor[0]).on('click',function(e){e.preventDefault();});if(this.utils.browser('msie'))$img.attr('unselectable','on');this.image.setEditable($img);},this));$(document).on('click.redactor-image-delete.'+this.uuid,$.proxy(function(e)
{this.observe.image=false;if(e.target.tagName=='IMG'&&this.utils.isRedactorParent(e.target))
{this.observe.image=(this.observe.image&&this.observe.image==e.target)?false:e.target;}},this));},links:function()
{if(!this.opts.linkTooltip)return;this.$editor.find('a').on('touchstart.redactor.'+this.uuid+' click.redactor.'+this.uuid,$.proxy(this.observe.showTooltip,this));this.$editor.on('touchstart.redactor.'+this.uuid+' click.redactor.'+this.uuid,$.proxy(this.observe.closeTooltip,this));$(document).on('touchstart.redactor.'+this.uuid+' click.redactor.'+this.uuid,$.proxy(this.observe.closeTooltip,this));},getTooltipPosition:function($link)
{return $link.offset();},showTooltip:function(e)
{var $el=$(e.target);if($el[0].tagName=='IMG')
return;if($el[0].tagName!=='A')
$el=$el.closest('a',this.$editor[0]);if($el[0].tagName!=='A')
return;var $link=$el;var pos=this.observe.getTooltipPosition($link);var tooltip=$('<span class="redactor-link-tooltip"></span>');var href=$link.attr('href');if(href===undefined)
{href='';}
if(href.length>24)href=href.substring(0,24)+'...';var aLink=$('<a href="'+$link.attr('href')+'" target="_blank" />').html(href).addClass('redactor-link-tooltip-action');var aEdit=$('<a href="#" />').html(this.lang.get('edit')).on('click',$.proxy(this.link.show,this)).addClass('redactor-link-tooltip-action');var aUnlink=$('<a href="#" />').html(this.lang.get('unlink')).on('click',$.proxy(this.link.unlink,this)).addClass('redactor-link-tooltip-action');tooltip.append(aLink).append(' | ').append(aEdit).append(' | ').append(aUnlink);tooltip.css({top:(pos.top+parseInt($link.css('line-height'),10))+'px',left:pos.left+'px'});$('.redactor-link-tooltip').remove();$('body').append(tooltip);},closeTooltip:function(e)
{e=e.originalEvent||e;var target=e.target;var $parent=$(target).closest('a',this.$editor[0]);if($parent.length!==0&&$parent[0].tagName==='A'&&target.tagName!=='A')
{return;}
else if((target.tagName==='A'&&this.utils.isRedactorParent(target))||$(target).hasClass('redactor-link-tooltip-action'))
{return;}
$('.redactor-link-tooltip').remove();}};},paragraphize:function()
{return{load:function(html)
{if(this.opts.linebreaks)return html;if(html===''||html==='<p></p>')return this.opts.emptyHtml;html=html+"\n";this.paragraphize.safes=[];this.paragraphize.z=0;html=html.replace(/(<br\s?\/?>){1,}\n?<\/blockquote>/gi,'</blockquote>');html=this.paragraphize.getSafes(html);html=this.paragraphize.getSafesComments(html);html=this.paragraphize.replaceBreaksToNewLines(html);html=this.paragraphize.replaceBreaksToParagraphs(html);html=this.paragraphize.clear(html);html=this.paragraphize.restoreSafes(html);html=html.replace(new RegExp('<br\\s?/?>\n?<('+this.opts.paragraphizeBlocks.join('|')+')(.*?[^>])>','gi'),'<p><br /></p>\n<$1$2>');return $.trim(html);},getSafes:function(html)
{var $div=$('<div />').append(html);$div.find('blockquote p').replaceWith(function()
{return $(this).append('<br />').contents();});html=$div.html();$div.find(this.opts.paragraphizeBlocks.join(', ')).each($.proxy(function(i,s)
{this.paragraphize.z++;this.paragraphize.safes[this.paragraphize.z]=s.outerHTML;html=html.replace(s.outerHTML,'\n{replace'+this.paragraphize.z+'}');},this));return html;},getSafesComments:function(html)
{var commentsMatches=html.match(/<!--([\w\W]*?)-->/gi);if(!commentsMatches)return html;$.each(commentsMatches,$.proxy(function(i,s)
{this.paragraphize.z++;this.paragraphize.safes[this.paragraphize.z]=s;html=html.replace(s,'\n{replace'+this.paragraphize.z+'}');},this));return html;},restoreSafes:function(html)
{$.each(this.paragraphize.safes,function(i,s)
{s=(typeof s!=='undefined')?s.replace(/\$/g,'&#36;'):s;html=html.replace('{replace'+i+'}',s);});return html;},replaceBreaksToParagraphs:function(html)
{var htmls=html.split(new RegExp('\n','g'),-1);html='';if(htmls)
{var len=htmls.length;for(var i=0;i<len;i++)
{if(!htmls.hasOwnProperty(i))return;if(htmls[i].search('{replace')==-1)
{htmls[i]=htmls[i].replace(/<p>\n\t?<\/p>/gi,'');htmls[i]=htmls[i].replace(/<p><\/p>/gi,'');if(htmls[i]!=='')
{html+='<p>'+htmls[i].replace(/^\n+|\n+$/g,"")+"</p>";}}
else html+=htmls[i];}}
return html;},replaceBreaksToNewLines:function(html)
{html=html.replace(/<br \/>\s*<br \/>/gi,"\n\n");html=html.replace(/<br\s?\/?>\n?<br\s?\/?>/gi,"\n<br /><br />");html=html.replace(new RegExp("\r\n",'g'),"\n");html=html.replace(new RegExp("\r",'g'),"\n");html=html.replace(new RegExp("/\n\n+/"),'g',"\n\n");return html;},clear:function(html)
{html=html.replace(new RegExp('</blockquote></p>','gi'),'</blockquote>');html=html.replace(new RegExp('<p></blockquote>','gi'),'</blockquote>');html=html.replace(new RegExp('<p><blockquote>','gi'),'<blockquote>');html=html.replace(new RegExp('<blockquote></p>','gi'),'<blockquote>');html=html.replace(new RegExp('<p><p ','gi'),'<p ');html=html.replace(new RegExp('<p><p>','gi'),'<p>');html=html.replace(new RegExp('</p></p>','gi'),'</p>');html=html.replace(new RegExp('<p>\\s?</p>','gi'),'');html=html.replace(new RegExp("\n</p>",'gi'),'</p>');html=html.replace(new RegExp('<p>\t?\t?\n?<p>','gi'),'<p>');html=html.replace(new RegExp('<p>\t*</p>','gi'),'');return html;}};},paste:function()
{return{init:function(e)
{if(!this.opts.cleanOnPaste)
{setTimeout($.proxy(this.code.sync,this),1);return;}
this.rtePaste=true;this.buffer.set();this.selection.save();this.utils.saveScroll();this.paste.createPasteBox();$(window).on('scroll.redactor-freeze',$.proxy(function()
{$(window).scrollTop(this.saveBodyScroll);},this));setTimeout($.proxy(function()
{var html=this.$pasteBox.html();this.$pasteBox.remove();this.selection.restore();this.utils.restoreScroll();this.paste.insert(html);$(window).off('scroll.redactor-freeze');if(this.linkify.isEnabled())
this.linkify.format();},this),1);},createPasteBox:function()
{this.$pasteBox=$('<div>').html('').attr('contenteditable','true').css({position:'fixed',width:0,top:0,left:'-9999px'});if(this.utils.browser('msie'))
{this.$box.append(this.$pasteBox);}
else
{if($('.modal-body').length>0)
{$('.modal-body').append(this.$pasteBox);}
else
{$('body').append(this.$pasteBox);}}
this.$pasteBox.focus();},insert:function(html)
{html=this.core.setCallback('pasteBefore',html);html=(this.utils.isSelectAll())?this.clean.onPaste(html,false):this.clean.onPaste(html);html=this.core.setCallback('paste',html);if(this.utils.isSelectAll())
{this.insert.set(html,false);}
else
{this.insert.html(html,false);}
this.utils.disableSelectAll();this.rtePaste=false;setTimeout($.proxy(this.clean.clearUnverified,this),10);setTimeout($.proxy(function()
{var spans=this.$editor.find('span');$.each(spans,function(i,s)
{var html=s.innerHTML.replace(/\u200B/,'');if(html===''&&s.attributes.length===0)$(s).remove();});},this),10);}};},placeholder:function()
{return{enable:function()
{if(!this.placeholder.is())return;this.$editor.attr('placeholder',this.$element.attr('placeholder'));this.placeholder.toggle();this.$editor.on('keydown.redactor-placeholder',$.proxy(this.placeholder.toggle,this));},toggle:function()
{setTimeout($.proxy(function()
{var func=this.utils.isEmpty(this.$editor.html(),false)?'addClass':'removeClass';this.$editor[func]('redactor-placeholder');},this),5);},remove:function()
{this.$editor.removeClass('redactor-placeholder');},is:function()
{if(this.opts.placeholder)
{return this.$element.attr('placeholder',this.opts.placeholder);}
else
{return!(typeof this.$element.attr('placeholder')=='undefined'||this.$element.attr('placeholder')==='');}}};},progress:function()
{return{show:function()
{$(document.body).append($('<div id="redactor-progress"><span></span></div>'));$('#redactor-progress').fadeIn();},hide:function()
{$('#redactor-progress').fadeOut(1500,function()
{$(this).remove();});}};},selection:function()
{return{get:function()
{this.sel=document.getSelection();if(document.getSelection&&this.sel.getRangeAt&&this.sel.rangeCount)
{this.range=this.sel.getRangeAt(0);}
else
{this.range=document.createRange();}},addRange:function()
{try{this.sel.removeAllRanges();}catch(e){}
this.sel.addRange(this.range);},getCurrent:function()
{var el=false;this.selection.get();if(this.sel&&this.sel.rangeCount>0)
{el=this.sel.getRangeAt(0).startContainer;}
return this.utils.isRedactorParent(el);},getParent:function(elem)
{elem=elem||this.selection.getCurrent();if(elem)
{return this.utils.isRedactorParent($(elem).parent()[0]);}
return false;},getPrev:function()
{return window.getSelection().anchorNode.previousSibling;},getNext:function()
{return window.getSelection().anchorNode.nextSibling;},getBlock:function(node)
{node=node||this.selection.getCurrent();while(node)
{if(this.utils.isBlockTag(node.tagName))
{return($(node).hasClass('redactor-editor'))?false:node;}
node=node.parentNode;}
return false;},getInlines:function(nodes,tags)
{this.selection.get();if(this.range&&this.range.collapsed)
{return false;}
var inlines=[];nodes=(typeof nodes=='undefined'||nodes===false)?this.selection.getNodes():nodes;var inlineTags=this.opts.inlineTags;inlineTags.push('span');if(typeof tags!=='undefined')
{for(var i=0;i<tags.length;i++)
{inlineTags.push(tags[i]);}}
$.each(nodes,$.proxy(function(i,node)
{if($.inArray(node.tagName.toLowerCase(),inlineTags)!=-1)
{inlines.push(node);}},this));return(inlines.length===0)?false:inlines;},getInlinesTags:function(tags)
{this.selection.get();if(this.range&&this.range.collapsed)
{return false;}
var inlines=[];var nodes=this.selection.getNodes();$.each(nodes,$.proxy(function(i,node)
{if($.inArray(node.tagName.toLowerCase(),tags)!=-1)
{inlines.push(node);}},this));return(inlines.length===0)?false:inlines;},getBlocks:function(nodes)
{this.selection.get();if(this.range&&this.range.collapsed)
{return[this.selection.getBlock()];}
var blocks=[];nodes=(typeof nodes=='undefined')?this.selection.getNodes():nodes;$.each(nodes,$.proxy(function(i,node)
{if(this.utils.isBlock(node))
{this.selection.lastBlock=node;blocks.push(node);}},this));return(blocks.length===0)?[this.selection.getBlock()]:blocks;},getLastBlock:function()
{return this.selection.lastBlock;},getNodes:function()
{this.selection.get();var startNode=this.selection.getNodesMarker(1);var endNode=this.selection.getNodesMarker(2);if(this.range.collapsed===false)
{if(window.getSelection){var sel=window.getSelection();if(sel.rangeCount>0){var range=sel.getRangeAt(0);var startPointNode=range.startContainer,startOffset=range.startOffset;var boundaryRange=range.cloneRange();boundaryRange.collapse(false);boundaryRange.insertNode(endNode);boundaryRange.setStart(startPointNode,startOffset);boundaryRange.collapse(true);boundaryRange.insertNode(startNode);range.setStartAfter(startNode);range.setEndBefore(endNode);sel.removeAllRanges();sel.addRange(range);}}}
else
{this.selection.setNodesMarker(this.range,startNode,true);endNode=startNode;}
var nodes=[];var counter=0;var self=this;this.$editor.find('*').each(function()
{if(this==startNode)
{var parent=$(this).parent();if(parent.length!==0&&parent[0].tagName!='BODY'&&self.utils.isRedactorParent(parent[0]))
{nodes.push(parent[0]);}
nodes.push(this);counter=1;}
else
{if(counter>0)
{nodes.push(this);counter=counter+1;}}
if(this==endNode)
{return false;}});var finalNodes=[];var len=nodes.length;for(var i=0;i<len;i++)
{if(nodes[i].id!='nodes-marker-1'&&nodes[i].id!='nodes-marker-2')
{finalNodes.push(nodes[i]);}}
this.selection.removeNodesMarkers();return finalNodes;},getNodesMarker:function(num)
{return $('<span id="nodes-marker-'+num+'" class="redactor-nodes-marker" data-verified="redactor">'+this.opts.invisibleSpace+'</span>')[0];},setNodesMarker:function(range,node,type)
{var range=range.cloneRange();try{range.collapse(type);range.insertNode(node);}
catch(e){}},removeNodesMarkers:function()
{$(document).find('span.redactor-nodes-marker').remove();this.$editor.find('span.redactor-nodes-marker').remove();},fromPoint:function(start,end)
{this.caret.setOffset(start,end);},wrap:function(tag)
{this.selection.get();if(this.range.collapsed)return false;var wrapper=document.createElement(tag);wrapper.appendChild(this.range.extractContents());this.range.insertNode(wrapper);return wrapper;},selectElement:function(node)
{if(this.utils.browser('mozilla'))
{node=node[0]||node;var range=document.createRange();range.selectNodeContents(node);}
else
{this.caret.set(node,0,node,1);}},selectAll:function()
{this.selection.get();this.range.selectNodeContents(this.$editor[0]);this.selection.addRange();},remove:function()
{this.selection.get();this.sel.removeAllRanges();},save:function()
{this.selection.createMarkers();},createMarkers:function()
{this.selection.get();var node1=this.selection.getMarker(1);this.selection.setMarker(this.range,node1,true);if(this.range.collapsed===false)
{var node2=this.selection.getMarker(2);this.selection.setMarker(this.range,node2,false);}
this.savedSel=this.$editor.html();},getMarker:function(num)
{if(typeof num=='undefined')num=1;return $('<span id="selection-marker-'+num+'" class="redactor-selection-marker"  data-verified="redactor">'+this.opts.invisibleSpace+'</span>')[0];},getMarkerAsHtml:function(num)
{return this.utils.getOuterHtml(this.selection.getMarker(num));},setMarker:function(range,node,type)
{range=range.cloneRange();try{range.collapse(type);range.insertNode(node);}
catch(e)
{this.focus.setStart();}},restore:function()
{var node1=this.$editor.find('span#selection-marker-1');var node2=this.$editor.find('span#selection-marker-2');if(this.utils.browser('mozilla'))
{this.$editor.focus();}
if(node1.length!==0&&node2.length!==0)
{this.caret.set(node1,0,node2,0);}
else if(node1.length!==0)
{this.caret.set(node1,0,node1,0);}
else
{this.$editor.focus();}
this.selection.removeMarkers();this.savedSel=false;},removeMarkers:function()
{this.$editor.find('span.redactor-selection-marker').each(function(i,s)
{var text=$(s).text().replace(/\u200B/g,'');if(text==='')$(s).remove();else $(s).replaceWith(function(){return $(this).contents();});});},getText:function()
{this.selection.get();return this.sel.toString();},getHtml:function()
{var html='';this.selection.get();if(this.sel.rangeCount)
{var container=document.createElement('div');var len=this.sel.rangeCount;for(var i=0;i<len;++i)
{container.appendChild(this.sel.getRangeAt(i).cloneContents());}
html=container.innerHTML;}
return this.clean.onSync(html);},replaceSelection:function(html)
{this.selection.get();this.range.deleteContents();var div=document.createElement("div");div.innerHTML=html;var frag=document.createDocumentFragment(),child;while((child=div.firstChild)){frag.appendChild(child);}
this.range.insertNode(frag);},replaceWithHtml:function(html)
{html=this.selection.getMarkerAsHtml(1)+html+this.selection.getMarkerAsHtml(2);this.selection.get();if(window.getSelection&&window.getSelection().getRangeAt)
{this.selection.replaceSelection(html);}
else if(document.selection&&document.selection.createRange)
{this.range.pasteHTML(html);}
this.selection.restore();this.code.sync();}};},shortcuts:function()
{return{init:function(e,key)
{if(!this.opts.shortcuts)
{if((e.ctrlKey||e.metaKey)&&(key===66||key===73))e.preventDefault();return false;}
$.each(this.opts.shortcuts,$.proxy(function(str,command)
{var keys=str.split(',');var len=keys.length;for(var i=0;i<len;i++)
{if(typeof keys[i]==='string')
{this.shortcuts.handler(e,$.trim(keys[i]),$.proxy(function()
{var func;if(command.func.search(/\./)!='-1')
{func=command.func.split('.');if(typeof this[func[0]]!='undefined')
{this[func[0]][func[1]].apply(this,command.params);}}
else
{this[command.func].apply(this,command.params);}},this));}}},this));},handler:function(e,keys,origHandler)
{var hotkeysSpecialKeys={8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"};var hotkeysShiftNums={"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":": ","'":"\"",",":"<",".":">","/":"?","\\":"|"};keys=keys.toLowerCase().split(" ");var special=hotkeysSpecialKeys[e.keyCode],character=String.fromCharCode(e.which).toLowerCase(),modif="",possible={};$.each(["alt","ctrl","meta","shift"],function(index,specialKey)
{if(e[specialKey+'Key']&&special!==specialKey)
{modif+=specialKey+'+';}});if(special)possible[modif+special]=true;if(character)
{possible[modif+character]=true;possible[modif+hotkeysShiftNums[character]]=true;if(modif==="shift+")
{possible[hotkeysShiftNums[character]]=true;}}
for(var i=0,len=keys.length;i<len;i++)
{if(possible[keys[i]])
{e.preventDefault();return origHandler.apply(this,arguments);}}}};},tabifier:function()
{return{get:function(code)
{if(!this.opts.tabifier)return code;var ownLine=['area','body','head','hr','i?frame','link','meta','noscript','style','script','table','tbody','thead','tfoot'];var contOwnLine=['li','dt','dt','h[1-6]','option','script'];var newLevel=['p','blockquote','div','dl','fieldset','form','frameset','map','ol','pre','select','td','th','tr','ul'];this.tabifier.lineBefore=new RegExp('^<(/?'+ownLine.join('|/?')+'|'+contOwnLine.join('|')+')[ >]');this.tabifier.lineAfter=new RegExp('^<(br|/?'+ownLine.join('|/?')+'|/'+contOwnLine.join('|/')+')[ >]');this.tabifier.newLevel=new RegExp('^</?('+newLevel.join('|')+')[ >]');var i=0,codeLength=code.length,point=0,start=null,end=null,tag='',out='',cont='';this.tabifier.cleanlevel=0;for(;i<codeLength;i++)
{point=i;if(-1==code.substr(i).indexOf('<'))
{out+=code.substr(i);return this.tabifier.finish(out);}
while(point<codeLength&&code.charAt(point)!='<')
{point++;}
if(i!=point)
{cont=code.substr(i,point-i);if(!cont.match(/^\s{2,}$/g))
{if('\n'==out.charAt(out.length-1))out+=this.tabifier.getTabs();else if('\n'==cont.charAt(0))
{out+='\n'+this.tabifier.getTabs();cont=cont.replace(/^\s+/,'');}
out+=cont;}
if(cont.match(/\n/))out+='\n'+this.tabifier.getTabs();}
start=point;while(point<codeLength&&'>'!=code.charAt(point))
{point++;}
tag=code.substr(start,point-start);i=point;var t;if('!--'==tag.substr(1,3))
{if(!tag.match(/--$/))
{while('-->'!=code.substr(point,3))
{point++;}
point+=2;tag=code.substr(start,point-start);i=point;}
if('\n'!=out.charAt(out.length-1))out+='\n';out+=this.tabifier.getTabs();out+=tag+'>\n';}
else if('!'==tag[1])
{out=this.tabifier.placeTag(tag+'>',out);}
else if('?'==tag[1])
{out+=tag+'>\n';}
else if(t=tag.match(/^<(script|style|pre)/i))
{t[1]=t[1].toLowerCase();tag=this.tabifier.cleanTag(tag);out=this.tabifier.placeTag(tag,out);end=String(code.substr(i+1)).toLowerCase().indexOf('</'+t[1]);if(end)
{cont=code.substr(i+1,end);i+=end;out+=cont;}}
else
{tag=this.tabifier.cleanTag(tag);out=this.tabifier.placeTag(tag,out);}}
return this.tabifier.finish(out);},getTabs:function()
{var s='';for(var j=0;j<this.tabifier.cleanlevel;j++)
{s+='\t';}
return s;},finish:function(code)
{code=code.replace(/\n\s*\n/g,'\n');code=code.replace(/^[\s\n]*/,'');code=code.replace(/[\s\n]*$/,'');code=code.replace(/<script(.*?)>\n<\/script>/gi,'<script$1></script>');this.tabifier.cleanlevel=0;return code;},cleanTag:function(tag)
{var tagout='';tag=tag.replace(/\n/g,' ');tag=tag.replace(/\s{2,}/g,' ');tag=tag.replace(/^\s+|\s+$/g,' ');var suffix='';if(tag.match(/\/$/))
{suffix='/';tag=tag.replace(/\/+$/,'');}
var m;while(m=/\s*([^= ]+)(?:=((['"']).*?\3|[^ ]+))?/.exec(tag))
{if(m[2])tagout+=m[1].toLowerCase()+'='+m[2];else if(m[1])tagout+=m[1].toLowerCase();tagout+=' ';tag=tag.substr(m[0].length);}
return tagout.replace(/\s*$/,'')+suffix+'>';},placeTag:function(tag,out)
{var nl=tag.match(this.tabifier.newLevel);if(tag.match(this.tabifier.lineBefore)||nl)
{out=out.replace(/\s*$/,'');out+='\n';}
if(nl&&'/'==tag.charAt(1))this.tabifier.cleanlevel--;if('\n'==out.charAt(out.length-1))out+=this.tabifier.getTabs();if(nl&&'/'!=tag.charAt(1))this.tabifier.cleanlevel++;out+=tag;if(tag.match(this.tabifier.lineAfter)||tag.match(this.tabifier.newLevel))
{out=out.replace(/ *$/,'');}
return out;}};},tidy:function()
{return{setupAllowed:function()
{if(this.opts.allowedTags)this.opts.deniedTags=false;if(this.opts.allowedAttr)this.opts.removeAttr=false;if(this.opts.linebreaks)return;var tags=['p','section'];if(this.opts.allowedTags)this.tidy.addToAllowed(tags);if(this.opts.deniedTags)this.tidy.removeFromDenied(tags);},addToAllowed:function(tags)
{var len=tags.length;for(var i=0;i<len;i++)
{if($.inArray(tags[i],this.opts.allowedTags)==-1)
{this.opts.allowedTags.push(tags[i]);}}},removeFromDenied:function(tags)
{var len=tags.length;for(var i=0;i<len;i++)
{var pos=$.inArray(tags[i],this.opts.deniedTags);if(pos!=-1)
{this.opts.deniedTags.splice(pos,1);}}},load:function(html,options)
{this.tidy.settings={deniedTags:this.opts.deniedTags,allowedTags:this.opts.allowedTags,removeComments:this.opts.removeComments,replaceTags:this.opts.replaceTags,replaceStyles:this.opts.replaceStyles,removeDataAttr:this.opts.removeDataAttr,removeAttr:this.opts.removeAttr,allowedAttr:this.opts.allowedAttr,removeWithoutAttr:this.opts.removeWithoutAttr,removeEmpty:this.opts.removeEmpty};$.extend(this.tidy.settings,options);html=this.tidy.removeComments(html);this.tidy.$div=$('<div />').append(html);this.tidy.replaceTags();this.tidy.replaceStyles();this.tidy.removeTags();this.tidy.removeAttr();this.tidy.removeEmpty();this.tidy.removeParagraphsInLists();this.tidy.removeDataAttr();this.tidy.removeWithoutAttr();html=this.tidy.$div.html();this.tidy.$div.remove();return html;},removeComments:function(html)
{if(!this.tidy.settings.removeComments)return html;return html.replace(/<!--[\s\S]*?-->/gi,'');},replaceTags:function(html)
{if(!this.tidy.settings.replaceTags)return html;var len=this.tidy.settings.replaceTags.length;var replacement=[],rTags=[];for(var i=0;i<len;i++)
{rTags.push(this.tidy.settings.replaceTags[i][1]);replacement.push(this.tidy.settings.replaceTags[i][0]);}
$.each(replacement,$.proxy(function(key,value)
{this.tidy.$div.find(value).replaceWith(function()
{return $("<"+rTags[key]+" />",{html:$(this).html()});});},this));},replaceStyles:function()
{if(!this.tidy.settings.replaceStyles)return;var len=this.tidy.settings.replaceStyles.length;this.tidy.$div.find('span').each($.proxy(function(n,s)
{var $el=$(s);var style=$el.attr('style');for(var i=0;i<len;i++)
{if(style&&style.match(new RegExp('^'+this.tidy.settings.replaceStyles[i][0],'i')))
{var tagName=this.tidy.settings.replaceStyles[i][1];$el.replaceWith(function()
{var tag=document.createElement(tagName);return $(tag).append($(this).contents());});}}},this));},removeTags:function()
{if(!this.tidy.settings.deniedTags&&this.tidy.settings.allowedTags)
{this.tidy.$div.find('*').not(this.tidy.settings.allowedTags.join(',')).each(function(i,s)
{if(s.innerHTML==='')$(s).remove();else $(s).contents().unwrap();});}
if(this.tidy.settings.deniedTags)
{this.tidy.$div.find(this.tidy.settings.deniedTags.join(',')).each(function(i,s)
{if($(s).hasClass('redactor-script-tag')||$(s).hasClass('redactor-selection-marker'))return;if(s.innerHTML==='')$(s).remove();else $(s).contents().unwrap();});}},removeAttr:function()
{var len;if(!this.tidy.settings.removeAttr&&this.tidy.settings.allowedAttr)
{var allowedAttrTags=[],allowedAttrData=[];len=this.tidy.settings.allowedAttr.length;for(var i=0;i<len;i++)
{allowedAttrTags.push(this.tidy.settings.allowedAttr[i][0]);allowedAttrData.push(this.tidy.settings.allowedAttr[i][1]);}
this.tidy.$div.find('*').each($.proxy(function(n,s)
{var $el=$(s);var pos=$.inArray($el[0].tagName.toLowerCase(),allowedAttrTags);var attributesRemove=this.tidy.removeAttrGetRemoves(pos,allowedAttrData,$el);if(attributesRemove)
{$.each(attributesRemove,function(z,f){$el.removeAttr(f);});}},this));}
if(this.tidy.settings.removeAttr)
{len=this.tidy.settings.removeAttr.length;for(var i=0;i<len;i++)
{var attrs=this.tidy.settings.removeAttr[i][1];if($.isArray(attrs))attrs=attrs.join(' ');this.tidy.$div.find(this.tidy.settings.removeAttr[i][0]).removeAttr(attrs);}}},removeAttrGetRemoves:function(pos,allowed,$el)
{var attributesRemove=[];if(pos==-1)
{$.each($el[0].attributes,function(i,item)
{attributesRemove.push(item.name);});}
else if(allowed[pos]=='*')
{attributesRemove=[];}
else
{$.each($el[0].attributes,function(i,item)
{if($.isArray(allowed[pos]))
{if($.inArray(item.name,allowed[pos])==-1)
{attributesRemove.push(item.name);}}
else if(allowed[pos]!=item.name)
{attributesRemove.push(item.name);}});}
return attributesRemove;},removeAttrs:function(el,regex)
{regex=new RegExp(regex,"g");return el.each(function()
{var self=$(this);var len=this.attributes.length-1;for(var i=len;i>=0;i--)
{var item=this.attributes[i];if(item&&item.specified&&item.name.search(regex)>=0)
{self.removeAttr(item.name);}}});},removeEmpty:function()
{if(!this.tidy.settings.removeEmpty)return;this.tidy.$div.find(this.tidy.settings.removeEmpty.join(',')).each(function()
{var $el=$(this);var text=$el.text();text=text.replace(/\u200B/g,'');text=text.replace(/&nbsp;/gi,'');text=text.replace(/\s/g,'');if(text===''&&$el.children().length===0)
{$el.remove();}});},removeParagraphsInLists:function()
{this.tidy.$div.find('li p').contents().unwrap();},removeDataAttr:function()
{if(!this.tidy.settings.removeDataAttr)return;var tags=this.tidy.settings.removeDataAttr;if($.isArray(this.tidy.settings.removeDataAttr))tags=this.tidy.settings.removeDataAttr.join(',');this.tidy.removeAttrs(this.tidy.$div.find(tags),'^(data-)');},removeWithoutAttr:function()
{if(!this.tidy.settings.removeWithoutAttr)return;this.tidy.$div.find(this.tidy.settings.removeWithoutAttr.join(',')).each(function()
{if(this.attributes.length===0)
{$(this).contents().unwrap();}});}};},toolbar:function()
{return{init:function()
{return{html:{title:this.lang.get('html'),func:'code.toggle'},formatting:{title:this.lang.get('formatting'),dropdown:{p:{title:this.lang.get('paragraph'),func:'block.format'},blockquote:{title:this.lang.get('quote'),func:'block.format'},pre:{title:this.lang.get('code'),func:'block.format'},h1:{title:this.lang.get('header1'),func:'block.format'},h2:{title:this.lang.get('header2'),func:'block.format'},h3:{title:this.lang.get('header3'),func:'block.format'},h4:{title:this.lang.get('header4'),func:'block.format'},h5:{title:this.lang.get('header5'),func:'block.format'}}},bold:{title:this.lang.get('bold'),func:'inline.format'},italic:{title:this.lang.get('italic'),func:'inline.format'},deleted:{title:this.lang.get('deleted'),func:'inline.format'},underline:{title:this.lang.get('underline'),func:'inline.format'},unorderedlist:{title:'&bull; '+this.lang.get('unorderedlist'),func:'list.toggle'},orderedlist:{title:'1. '+this.lang.get('orderedlist'),func:'list.toggle'},outdent:{title:'< '+this.lang.get('outdent'),func:'indent.decrease'},indent:{title:'> '+this.lang.get('indent'),func:'indent.increase'},image:{title:this.lang.get('image'),func:'image.show'},file:{title:this.lang.get('file'),func:'file.show'},link:{title:this.lang.get('link'),dropdown:{link:{title:this.lang.get('link_insert'),func:'link.show',observe:{element:'a',in:{title:this.lang.get('link_edit'),},out:{title:this.lang.get('link_insert')}}},unlink:{title:this.lang.get('unlink'),func:'link.unlink',observe:{element:'a',out:{attr:{'class':'redactor-dropdown-link-inactive','aria-disabled':true}}}}}},alignment:{title:this.lang.get('alignment'),dropdown:{left:{title:this.lang.get('align_left'),func:'alignment.left'},center:{title:this.lang.get('align_center'),func:'alignment.center'},right:{title:this.lang.get('align_right'),func:'alignment.right'},justify:{title:this.lang.get('align_justify'),func:'alignment.justify'}}},horizontalrule:{title:this.lang.get('horizontalrule'),func:'line.insert'}};},build:function()
{this.toolbar.hideButtons();this.toolbar.hideButtonsOnMobile();this.toolbar.isButtonSourceNeeded();if(this.opts.buttons.length===0)return;this.$toolbar=this.toolbar.createContainer();this.toolbar.setOverflow();this.toolbar.append();this.toolbar.setFormattingTags();this.toolbar.loadButtons();this.toolbar.setFixed();if(this.opts.activeButtons)
{this.$editor.on('mouseup.redactor keyup.redactor focus.redactor',$.proxy(this.observe.toolbar,this));}},createContainer:function()
{return $('<ul>').addClass('redactor-toolbar').attr({'id':'redactor-toolbar-'+this.uuid,'role':'toolbar'});},setFormattingTags:function()
{$.each(this.opts.toolbar.formatting.dropdown,$.proxy(function(i,s)
{if($.inArray(i,this.opts.formatting)==-1)delete this.opts.toolbar.formatting.dropdown[i];},this));},loadButtons:function()
{$.each(this.opts.buttons,$.proxy(function(i,btnName)
{if(!this.opts.toolbar[btnName])return;if(btnName==='file')
{if(this.opts.fileUpload===false)return;else if(!this.opts.fileUpload&&this.opts.s3===false)return;}
if(btnName==='image')
{if(this.opts.imageUpload===false)return;else if(!this.opts.imageUpload&&this.opts.s3===false)return;}
var btnObject=this.opts.toolbar[btnName];this.$toolbar.append($('<li>').append(this.button.build(btnName,btnObject)));},this));},append:function()
{if(this.opts.toolbarExternal)
{this.$toolbar.addClass('redactor-toolbar-external');$(this.opts.toolbarExternal).html(this.$toolbar);}
else
{this.$box.prepend(this.$toolbar);}},setFixed:function()
{if(!this.utils.isDesktop())return;if(this.opts.toolbarExternal)return;if(!this.opts.toolbarFixed)return;this.toolbar.observeScroll();$(this.opts.toolbarFixedTarget).on('scroll.redactor.'+this.uuid,$.proxy(this.toolbar.observeScroll,this));},setOverflow:function()
{if(this.utils.isMobile()&&this.opts.toolbarOverflow)
{this.$toolbar.addClass('redactor-toolbar-overflow');}},isButtonSourceNeeded:function()
{if(this.opts.source)return;var index=this.opts.buttons.indexOf('html');if(index!==-1)
{this.opts.buttons.splice(index,1);}},hideButtons:function()
{if(this.opts.buttonsHide.length===0)return;$.each(this.opts.buttonsHide,$.proxy(function(i,s)
{var index=this.opts.buttons.indexOf(s);this.opts.buttons.splice(index,1);},this));},hideButtonsOnMobile:function()
{if(!this.utils.isMobile()||this.opts.buttonsHideOnMobile.length===0)return;$.each(this.opts.buttonsHideOnMobile,$.proxy(function(i,s)
{var index=this.opts.buttons.indexOf(s);this.opts.buttons.splice(index,1);},this));},observeScroll:function()
{var scrollTop=$(this.opts.toolbarFixedTarget).scrollTop();var boxTop=1;if(this.opts.toolbarFixedTarget===document)
{boxTop=this.$box.offset().top;}
if((scrollTop+this.opts.toolbarFixedTopOffset)>boxTop)
{this.toolbar.observeScrollEnable(scrollTop,boxTop);}
else
{this.toolbar.observeScrollDisable();}},observeScrollEnable:function(scrollTop,boxTop)
{var top=this.opts.toolbarFixedTopOffset+scrollTop-boxTop;var left=0;var end=boxTop+this.$box.height()-32;var width=this.$box.innerWidth();this.$toolbar.addClass('toolbar-fixed-box');this.$toolbar.css({position:'absolute',width:width,top:top+'px',left:left});if(scrollTop>end)
$('.redactor-dropdown-'+this.uuid+':visible').hide();this.toolbar.setDropdownsFixed();this.$toolbar.css('visibility',(scrollTop<end)?'visible':'hidden');},observeScrollDisable:function()
{this.$toolbar.css({position:'relative',width:'auto',top:0,left:0,visibility:'visible'});this.toolbar.unsetDropdownsFixed();this.$toolbar.removeClass('toolbar-fixed-box');},setDropdownsFixed:function()
{var top=this.$toolbar.innerHeight()+this.opts.toolbarFixedTopOffset;var position='fixed';if(this.opts.toolbarFixedTarget!==document)
{top=(this.$toolbar.innerHeight()+this.$toolbar.offset().top)+this.opts.toolbarFixedTopOffset;position='absolute';}
$('.redactor-dropdown-'+this.uuid).each(function()
{$(this).css({position:position,top:top+'px'});});},unsetDropdownsFixed:function()
{var top=(this.$toolbar.innerHeight()+this.$toolbar.offset().top);$('.redactor-dropdown-'+this.uuid).each(function()
{$(this).css({position:'absolute',top:top+'px'});});}};},upload:function()
{return{init:function(id,url,callback)
{this.upload.direct=false;this.upload.callback=callback;this.upload.url=url;this.upload.$el=$(id);this.upload.$droparea=$('<div id="redactor-droparea" />');this.upload.$placeholdler=$('<div id="redactor-droparea-placeholder" />').text(this.lang.get('upload_label'));this.upload.$input=$('<input type="file" name="file" />');this.upload.$placeholdler.append(this.upload.$input);this.upload.$droparea.append(this.upload.$placeholdler);this.upload.$el.append(this.upload.$droparea);this.upload.$droparea.off('redactor.upload');this.upload.$input.off('redactor.upload');this.upload.$droparea.on('dragover.redactor.upload',$.proxy(this.upload.onDrag,this));this.upload.$droparea.on('dragleave.redactor.upload',$.proxy(this.upload.onDragLeave,this));this.upload.$input.on('change.redactor.upload',$.proxy(function(e)
{e=e.originalEvent||e;this.upload.traverseFile(this.upload.$input[0].files[0],e);},this));this.upload.$droparea.on('drop.redactor.upload',$.proxy(function(e)
{e.preventDefault();this.upload.$droparea.removeClass('drag-hover').addClass('drag-drop');this.upload.onDrop(e);},this));},directUpload:function(file,e)
{this.upload.direct=true;this.upload.traverseFile(file,e);},onDrop:function(e)
{e=e.originalEvent||e;var files=e.dataTransfer.files;this.upload.traverseFile(files[0],e);},traverseFile:function(file,e)
{if(this.opts.s3)
{this.upload.setConfig(file);this.upload.s3uploadFile(file);return;}
var formData=!!window.FormData?new FormData():null;if(window.FormData)
{this.upload.setConfig(file);var name=(this.upload.type=='image')?this.opts.imageUploadParam:this.opts.fileUploadParam;formData.append(name,file);}
this.progress.show();this.core.setCallback('uploadStart',e,formData);this.upload.sendData(formData,e);},setConfig:function(file)
{this.upload.getType(file);if(this.upload.direct)
{this.upload.url=(this.upload.type=='image')?this.opts.imageUpload:this.opts.fileUpload;this.upload.callback=(this.upload.type=='image')?this.image.insert:this.file.insert;}},getType:function(file)
{this.upload.type='image';if(this.opts.imageTypes.indexOf(file.type)==-1)
{this.upload.type='file';}},getHiddenFields:function(obj,fd)
{if(obj===false||typeof obj!=='object')return fd;$.each(obj,$.proxy(function(k,v)
{if(v!==null&&v.toString().indexOf('#')===0)v=$(v).val();fd.append(k,v);},this));return fd;},sendData:function(formData,e)
{if(this.upload.type=='image')
{formData=this.upload.getHiddenFields(this.opts.uploadImageFields,formData);formData=this.upload.getHiddenFields(this.upload.imageFields,formData);}
else
{formData=this.upload.getHiddenFields(this.opts.uploadFileFields,formData);formData=this.upload.getHiddenFields(this.upload.fileFields,formData);}
var xhr=new XMLHttpRequest();xhr.open('POST',this.upload.url);xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");xhr.onreadystatechange=$.proxy(function()
{if(xhr.readyState==4)
{var data=xhr.responseText;data=data.replace(/^\[/,'');data=data.replace(/\]$/,'');var json;try
{json=(typeof data==='string'?$.parseJSON(data):data);}
catch(err)
{json={error:true};}
this.progress.hide();if(!this.upload.direct)
{this.upload.$droparea.removeClass('drag-drop');}
this.upload.callback(json,this.upload.direct,e);}},this);xhr.send(formData);},onDrag:function(e)
{e.preventDefault();this.upload.$droparea.addClass('drag-hover');},onDragLeave:function(e)
{e.preventDefault();this.upload.$droparea.removeClass('drag-hover');},clearImageFields:function()
{this.upload.imageFields={};},addImageFields:function(name,value)
{this.upload.imageFields[name]=value;},removeImageFields:function(name)
{delete this.upload.imageFields[name];},clearFileFields:function()
{this.upload.fileFields={};},addFileFields:function(name,value)
{this.upload.fileFields[name]=value;},removeFileFields:function(name)
{delete this.upload.fileFields[name];},s3uploadFile:function(file)
{this.upload.s3executeOnSignedUrl(file,$.proxy(function(signedURL)
{this.upload.s3uploadToS3(file,signedURL);},this));},s3executeOnSignedUrl:function(file,callback)
{var xhr=new XMLHttpRequest();var mark='?';if(this.opts.s3.search(/\?/)!='-1')mark='&';xhr.open('GET',this.opts.s3+mark+'name='+file.name+'&type='+file.type,true);if(xhr.overrideMimeType)xhr.overrideMimeType('text/plain; charset=x-user-defined');var that=this;xhr.onreadystatechange=function(e)
{if(this.readyState==4&&this.status==200)
{that.progress.show();callback(decodeURIComponent(this.responseText));}
else if(this.readyState==4&&this.status!=200)
{}};xhr.send();},s3createCORSRequest:function(method,url)
{var xhr=new XMLHttpRequest();if("withCredentials"in xhr)
{xhr.open(method,url,true);}
else if(typeof XDomainRequest!="undefined")
{xhr=new XDomainRequest();xhr.open(method,url);}
else
{xhr=null;}
return xhr;},s3uploadToS3:function(file,url)
{var xhr=this.upload.s3createCORSRequest('PUT',url);if(!xhr)
{}
else
{xhr.onload=$.proxy(function()
{if(xhr.status==200)
{this.progress.hide();var s3file=url.split('?');if(!s3file[0])
{return false;}
if(!this.upload.direct)
{this.upload.$droparea.removeClass('drag-drop');}
var json={filelink:s3file[0]};if(this.upload.type=='file')
{var arr=s3file[0].split('/');json.filename=arr[arr.length-1];}
this.upload.callback(json,this.upload.direct,false);}
else
{}},this);xhr.onerror=function()
{};xhr.upload.onprogress=function(e)
{};xhr.setRequestHeader('Content-Type',file.type);xhr.setRequestHeader('x-amz-acl','public-read');xhr.send(file);}}};},utils:function()
{return{isMobile:function()
{return/(iPhone|iPod|BlackBerry|Android)/.test(navigator.userAgent);},isDesktop:function()
{return!/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent);},isString:function(obj)
{return Object.prototype.toString.call(obj)=='[object String]';},isEmpty:function(html,removeEmptyTags)
{html=html.replace(/[\u200B-\u200D\uFEFF]/g,'');html=html.replace(/&nbsp;/gi,'');html=html.replace(/<\/?br\s?\/?>/g,'');html=html.replace(/\s/g,'');html=html.replace(/^<p>[^\W\w\D\d]*?<\/p>$/i,'');html=html.replace(/<iframe(.*?[^>])>$/i,'iframe');html=html.replace(/<source(.*?[^>])>$/i,'source');if(removeEmptyTags!==false)
{html=html.replace(/<[^\/>][^>]*><\/[^>]+>/gi,'');html=html.replace(/<[^\/>][^>]*><\/[^>]+>/gi,'');}
html=$.trim(html);return html==='';},normalize:function(str)
{if(typeof(str)==='undefined')return 0;return parseInt(str.replace('px',''),10);},hexToRgb:function(hex)
{if(typeof hex=='undefined')return;if(hex.search(/^#/)==-1)return hex;var shorthandRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex=hex.replace(shorthandRegex,function(m,r,g,b)
{return r+r+g+g+b+b;});var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return'rgb('+parseInt(result[1],16)+', '+parseInt(result[2],16)+', '+parseInt(result[3],16)+')';},getOuterHtml:function(el)
{return $('<div>').append($(el).eq(0).clone()).html();},getAlignmentElement:function(el)
{if($.inArray(el.tagName,this.opts.alignmentTags)!==-1)
{return $(el);}
else
{return $(el).closest(this.opts.alignmentTags.toString().toLowerCase(),this.$editor[0]);}},removeEmptyAttr:function(el,attr)
{var $el=$(el);if(typeof $el.attr(attr)=='undefined')
{return true;}
if($el.attr(attr)==='')
{$el.removeAttr(attr);return true;}
return false;},removeEmpty:function(i,s)
{var $s=$($.parseHTML(s));$s.find('.redactor-invisible-space').removeAttr('style').removeAttr('class');if($s.find('hr, br, img, iframe, source').length!==0)return;var text=$.trim($s.text());if(this.utils.isEmpty(text,false))
{$s.remove();}},saveScroll:function()
{this.saveEditorScroll=this.$editor.scrollTop();this.saveBodyScroll=$(window).scrollTop();if(this.opts.scrollTarget)this.saveTargetScroll=$(this.opts.scrollTarget).scrollTop();},restoreScroll:function()
{if(typeof this.saveScroll==='undefined'&&typeof this.saveBodyScroll==='undefined')return;$(window).scrollTop(this.saveBodyScroll);this.$editor.scrollTop(this.saveEditorScroll);if(this.opts.scrollTarget)$(this.opts.scrollTarget).scrollTop(this.saveTargetScroll);},createSpaceElement:function()
{var space=document.createElement('span');space.className='redactor-invisible-space';space.innerHTML=this.opts.invisibleSpace;return space;},removeInlineTags:function(node)
{var tags=this.opts.inlineTags;tags.push('span');if(node.tagName=='PRE')tags.push('a');$(node).find(tags.join(',')).not('span.redactor-selection-marker').contents().unwrap();},replaceWithContents:function(node,removeInlineTags)
{var self=this;$(node).replaceWith(function()
{if(removeInlineTags===true)self.utils.removeInlineTags(this);return $(this).contents();});return $(node);},replaceToTag:function(node,tag,removeInlineTags)
{var replacement;var self=this;$(node).replaceWith(function()
{replacement=$('<'+tag+' />').append($(this).contents());for(var i=0;i<this.attributes.length;i++)
{replacement.attr(this.attributes[i].name,this.attributes[i].value);}
if(removeInlineTags===true)self.utils.removeInlineTags(replacement);return replacement;});return replacement;},isStartOfElement:function()
{var block=this.selection.getBlock();if(!block)return false;var offset=this.caret.getOffsetOfElement(block);return(offset===0)?true:false;},isEndOfElement:function(element)
{if(typeof element=='undefined')
{var element=this.selection.getBlock();if(!element)return false;}
var offset=this.caret.getOffsetOfElement(element);var text=$.trim($(element).text()).replace(/\n\r\n/g,'');return(offset==text.length)?true:false;},isEndOfEditor:function()
{var block=this.$editor[0];var offset=this.caret.getOffsetOfElement(block);var text=$.trim($(block).html().replace(/(<([^>]+)>)/gi,''));return(offset==text.length)?true:false;},isBlock:function(block)
{block=block[0]||block;return block&&this.utils.isBlockTag(block.tagName);},isBlockTag:function(tag)
{if(typeof tag=='undefined')return false;return this.reIsBlock.test(tag);},isTag:function(current,tag)
{var element=$(current).closest(tag,this.$editor[0]);if(element.length==1)
{return element[0];}
return false;},isSelectAll:function()
{return this.selectAll;},enableSelectAll:function()
{this.selectAll=true;},disableSelectAll:function()
{this.selectAll=false;},isRedactorParent:function(el)
{if(!el)
{return false;}
if($(el).parents('.redactor-editor').length===0||$(el).hasClass('redactor-editor'))
{return false;}
return el;},isCurrentOrParentHeader:function()
{return this.utils.isCurrentOrParent(['H1','H2','H3','H4','H5','H6']);},isCurrentOrParent:function(tagName)
{var parent=this.selection.getParent();var current=this.selection.getCurrent();if($.isArray(tagName))
{var matched=0;$.each(tagName,$.proxy(function(i,s)
{if(this.utils.isCurrentOrParentOne(current,parent,s))
{matched++;}},this));return(matched===0)?false:true;}
else
{return this.utils.isCurrentOrParentOne(current,parent,tagName);}},isCurrentOrParentOne:function(current,parent,tagName)
{tagName=tagName.toUpperCase();return parent&&parent.tagName===tagName?parent:current&&current.tagName===tagName?current:false;},isOldIe:function()
{return(this.utils.browser('msie')&&parseInt(this.utils.browser('version'),10)<9)?true:false;},isLessIe10:function()
{return(this.utils.browser('msie')&&parseInt(this.utils.browser('version'),10)<10)?true:false;},isIe11:function()
{return!!navigator.userAgent.match(/Trident\/7\./);},browser:function(browser)
{var ua=navigator.userAgent.toLowerCase();var match=/(opr)[\/]([\w.]+)/.exec(ua)||/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||ua.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(ua)||ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||[];if(browser=='safari')return(typeof match[3]!='undefined')?match[3]=='safari':false;if(browser=='version')return match[2];if(browser=='webkit')return(match[1]=='chrome'||match[1]=='opr'||match[1]=='webkit');if(match[1]=='rv')return browser=='msie';if(match[1]=='opr')return browser=='webkit';return browser==match[1];},strpos:function(haystack,needle,offset)
{var i=haystack.indexOf(needle,offset);return i>=0?i:false;},disableBodyScroll:function()
{var $body=$('html');var windowWidth=window.innerWidth;if(!windowWidth)
{var documentElementRect=document.documentElement.getBoundingClientRect();windowWidth=documentElementRect.right-Math.abs(documentElementRect.left);}
var isOverflowing=document.body.clientWidth<windowWidth;var scrollbarWidth=this.utils.measureScrollbar();$body.css('overflow','hidden');if(isOverflowing)$body.css('padding-right',scrollbarWidth);},measureScrollbar:function()
{var $body=$('body');var scrollDiv=document.createElement('div');scrollDiv.className='redactor-scrollbar-measure';$body.append(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;$body[0].removeChild(scrollDiv);return scrollbarWidth;},enableBodyScroll:function()
{$('html').css({'overflow':'','padding-right':''});$('body').remove('redactor-scrollbar-measure');}};}};$(window).on('load.tools.redactor',function()
{$('[data-tools="redactor"]').redactor();});Redactor.prototype.init.prototype=Redactor.prototype;})(jQuery);;(function($){$.Redactor.opts.langs['ru']={html:'Код',video:'Видео',image:'Изображение',table:'Таблица',link:'Ссылка',link_insert:'Вставить ссылку ...',link_edit:'Изменить ссылку',unlink:'Удалить ссылку',formatting:'Форматирование',paragraph:'Обычный текст',quote:'Цитата',code:'Код',header1:'Заголовок 1',header2:'Заголовок 2',header3:'Заголовок 3',header4:'Заголовок 4',header5:'Заголовок 5',bold:'Полужирный',italic:'Наклонный',fontcolor:'Цвет текста',backcolor:'Заливка текста',unorderedlist:'Обычный список',orderedlist:'Нумерованный список',outdent:'Уменьшить отступ',indent:'Увеличить отступ',cancel:'Отменить',insert:'Вставить',save:'Сохранить',_delete:'Удалить',insert_table:'Вставить таблицу',insert_row_above:'Добавить строку сверху',insert_row_below:'Добавить строку снизу',insert_column_left:'Добавить столбец слева',insert_column_right:'Добавить столбец справа',delete_column:'Удалить столбец',delete_row:'Удалить строку',delete_table:'Удалить таблицу',rows:'Строки',columns:'Столбцы',add_head:'Добавить заголовок',delete_head:'Удалить заголовок',title:'Подсказка',image_position:'Обтекание текстом',none:'Нет',left:'Cлева',right:'Cправа',image_web_link:'Cсылка на изображение',text:'Текст',mailto:'Эл. почта',web:'URL',video_html_code:'Код видео ролика',file:'Файл',upload:'Загрузить',download:'Скачать',choose:'Выбрать',or_choose:'Или выберите',drop_file_here:'Перетащите файл сюда',align_left:'По левому краю',align_center:'По центру',align_right:'По правому краю',align_justify:'Выровнять текст по ширине',horizontalrule:'Горизонтальная линейка',fullscreen:'Во весь экран',deleted:'Зачеркнутый',anchor:'Якорь',link_new_tab:'Открывать в новой вкладке',underline:'Подчеркнутый',alignment:'Выравнивание',filename:'Название (необязательно)',edit:'Ред.',center:'По центру'};})(jQuery);;(function($){$.fn.yiiActiveForm=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}else{$.error('Method '+method+' does not exist on jQuery.yiiActiveForm');return false;}};var events={beforeValidate:'beforeValidate',afterValidate:'afterValidate',beforeValidateAttribute:'beforeValidateAttribute',afterValidateAttribute:'afterValidateAttribute',beforeSubmit:'beforeSubmit',ajaxBeforeSend:'ajaxBeforeSend',ajaxComplete:'ajaxComplete'};var defaults={encodeErrorSummary:true,errorSummary:'.error-summary',validateOnSubmit:true,errorCssClass:'has-error',successCssClass:'has-success',validatingCssClass:'validating',ajaxParam:'ajax',ajaxDataType:'json',validationUrl:undefined,scrollToError:true};var attributeDefaults={id:undefined,name:undefined,container:undefined,input:undefined,error:'.help-block',encodeError:true,validateOnChange:true,validateOnBlur:true,validateOnType:false,validationDelay:500,enableAjaxValidation:false,validate:undefined,status:0,cancelled:false,value:undefined};var submitDefer;var setSubmitFinalizeDefer=function($form){submitDefer=$.Deferred();$form.data('yiiSubmitFinalizePromise',submitDefer.promise());};var submitFinalize=function($form){if(submitDefer){submitDefer.resolve();submitDefer=undefined;$form.removeData('yiiSubmitFinalizePromise');}};var methods={init:function(attributes,options){return this.each(function(){var $form=$(this);if($form.data('yiiActiveForm')){return;}
var settings=$.extend({},defaults,options||{});if(settings.validationUrl===undefined){settings.validationUrl=$form.attr('action');}
$.each(attributes,function(i){attributes[i]=$.extend({value:getValue($form,this)},attributeDefaults,this);watchAttribute($form,attributes[i]);});$form.data('yiiActiveForm',{settings:settings,attributes:attributes,submitting:false,validated:false,options:getFormOptions($form)});$form.bind('reset.yiiActiveForm',methods.resetForm);if(settings.validateOnSubmit){$form.on('mouseup.yiiActiveForm keyup.yiiActiveForm',':submit',function(){$form.data('yiiActiveForm').submitObject=$(this);});$form.on('submit.yiiActiveForm',methods.submitForm);}});},add:function(attribute){var $form=$(this);attribute=$.extend({value:getValue($form,attribute)},attributeDefaults,attribute);$form.data('yiiActiveForm').attributes.push(attribute);watchAttribute($form,attribute);},remove:function(id){var $form=$(this),attributes=$form.data('yiiActiveForm').attributes,index=-1,attribute=undefined;$.each(attributes,function(i){if(attributes[i]['id']==id){index=i;attribute=attributes[i];return false;}});if(index>=0){attributes.splice(index,1);unwatchAttribute($form,attribute);}
return attribute;},validateAttribute:function(id){var attribute=methods.find.call(this,id);if(attribute!=undefined){validateAttribute($(this),attribute,true);}},find:function(id){var attributes=$(this).data('yiiActiveForm').attributes,result=undefined;$.each(attributes,function(i){if(attributes[i]['id']==id){result=attributes[i];return false;}});return result;},destroy:function(){return this.each(function(){$(this).unbind('.yiiActiveForm');$(this).removeData('yiiActiveForm');});},data:function(){return this.data('yiiActiveForm');},validate:function(){var $form=$(this),data=$form.data('yiiActiveForm'),needAjaxValidation=false,messages={},deferreds=deferredArray(),submitting=data.submitting;if(submitting){var event=$.Event(events.beforeValidate);$form.trigger(event,[messages,deferreds]);if(event.result===false){data.submitting=false;submitFinalize($form);return;}}
$.each(data.attributes,function(){this.$form=$form;if(!$(this.input).is(":disabled")){this.cancelled=false;if(data.submitting||this.status===2||this.status===3){var msg=messages[this.id];if(msg===undefined){msg=[];messages[this.id]=msg;}
var event=$.Event(events.beforeValidateAttribute);$form.trigger(event,[this,msg,deferreds]);if(event.result!==false){if(this.validate){this.validate(this,getValue($form,this),msg,deferreds,$form);}
if(this.enableAjaxValidation){needAjaxValidation=true;}}else{this.cancelled=true;}}}});$.when.apply(this,deferreds).always(function(){for(var i in messages){if(0===messages[i].length){delete messages[i];}}
if($.isEmptyObject(messages)&&needAjaxValidation){var $button=data.submitObject,extData='&'+data.settings.ajaxParam+'='+$form.attr('id');if($button&&$button.length&&$button.attr('name')){extData+='&'+$button.attr('name')+'='+$button.attr('value');}
$.ajax({url:data.settings.validationUrl,type:$form.attr('method'),data:$form.serialize()+extData,dataType:data.settings.ajaxDataType,complete:function(jqXHR,textStatus){$form.trigger(events.ajaxComplete,[jqXHR,textStatus]);},beforeSend:function(jqXHR,settings){$form.trigger(events.ajaxBeforeSend,[jqXHR,settings]);},success:function(msgs){if(msgs!==null&&typeof msgs==='object'){$.each(data.attributes,function(){if(!this.enableAjaxValidation||this.cancelled){delete msgs[this.id];}});updateInputs($form,$.extend(messages,msgs),submitting);}else{updateInputs($form,messages,submitting);}},error:function(){data.submitting=false;submitFinalize($form);}});}else if(data.submitting){setTimeout(function(){updateInputs($form,messages,submitting);},200);}else{updateInputs($form,messages,submitting);}});},submitForm:function(){var $form=$(this),data=$form.data('yiiActiveForm');if(data.validated){data.submitting=false;var event=$.Event(events.beforeSubmit);$form.trigger(event);if(event.result===false){data.validated=false;submitFinalize($form);return false;}
updateHiddenButton($form);return true;}else{setSubmitFinalizeDefer($form);if(data.settings.timer!==undefined){clearTimeout(data.settings.timer);}
data.submitting=true;methods.validate.call($form);return false;}},resetForm:function(){var $form=$(this);var data=$form.data('yiiActiveForm');setTimeout(function(){$.each(data.attributes,function(){this.value=getValue($form,this);this.status=0;var $container=$form.find(this.container);$container.removeClass(data.settings.validatingCssClass+' '+
data.settings.errorCssClass+' '+
data.settings.successCssClass);$container.find(this.error).html('');});$form.find(data.settings.errorSummary).hide().find('ul').html('');},1);},updateMessages:function(messages,summary){var $form=$(this);var data=$form.data('yiiActiveForm');$.each(data.attributes,function(){updateInput($form,this,messages);});if(summary){updateSummary($form,messages);}},updateAttribute:function(id,messages){var attribute=methods.find.call(this,id);if(attribute!=undefined){var msg={};msg[id]=messages;updateInput($(this),attribute,msg);}}};var watchAttribute=function($form,attribute){var $input=findInput($form,attribute);if(attribute.validateOnChange){$input.on('change.yiiActiveForm',function(){validateAttribute($form,attribute,false);});}
if(attribute.validateOnBlur){$input.on('blur.yiiActiveForm',function(){if(attribute.status==0||attribute.status==1){validateAttribute($form,attribute,true);}});}
if(attribute.validateOnType){$input.on('keyup.yiiActiveForm',function(e){if($.inArray(e.which,[16,17,18,37,38,39,40])!==-1){return;}
if(attribute.value!==getValue($form,attribute)){validateAttribute($form,attribute,false,attribute.validationDelay);}});}};var unwatchAttribute=function($form,attribute){findInput($form,attribute).off('.yiiActiveForm');};var validateAttribute=function($form,attribute,forceValidate,validationDelay){var data=$form.data('yiiActiveForm');if(forceValidate){attribute.status=2;}
$.each(data.attributes,function(){if(this.value!==getValue($form,this)){this.status=2;forceValidate=true;}});if(!forceValidate){return;}
if(data.settings.timer!==undefined){clearTimeout(data.settings.timer);}
data.settings.timer=setTimeout(function(){if(data.submitting||$form.is(':hidden')){return;}
$.each(data.attributes,function(){if(this.status===2){this.status=3;$form.find(this.container).addClass(data.settings.validatingCssClass);}});methods.validate.call($form);},validationDelay?validationDelay:200);};var deferredArray=function(){var array=[];array.add=function(callback){this.push(new $.Deferred(callback));};return array;};var buttonOptions=['action','target','method','enctype'];var getFormOptions=function($form){var attributes={};for(var i in buttonOptions){attributes[buttonOptions[i]]=$form.attr(buttonOptions[i]);}
return attributes;};var applyButtonOptions=function($form,$button){for(var i in buttonOptions){var value=$button.attr('form'+buttonOptions[i]);if(value){$form.attr(buttonOptions[i],value);}}};var restoreButtonOptions=function($form){var data=$form.data('yiiActiveForm');for(var i in buttonOptions){$form.attr(buttonOptions[i],data.options[buttonOptions[i]]||null);}};var updateInputs=function($form,messages,submitting){var data=$form.data('yiiActiveForm');if(submitting){var errorAttributes=[];$.each(data.attributes,function(){if(!$(this.input).is(":disabled")&&!this.cancelled&&updateInput($form,this,messages)){errorAttributes.push(this);}});$form.trigger(events.afterValidate,[messages,errorAttributes]);updateSummary($form,messages);if(errorAttributes.length){if(data.settings.scrollToError){var top=$form.find($.map(errorAttributes,function(attribute){return attribute.input;}).join(',')).first().closest(':visible').offset().top;var wtop=$(window).scrollTop();if(top<wtop||top>wtop+$(window).height()){$(window).scrollTop(top);}}
data.submitting=false;}else{data.validated=true;if(data.submitObject){data.submitObject.trigger("click");}else{$form.submit();}}}else{$.each(data.attributes,function(){if(!this.cancelled&&(this.status===2||this.status===3)){updateInput($form,this,messages);}});}
submitFinalize($form);};var updateHiddenButton=function($form){var data=$form.data('yiiActiveForm');var $button=data.submitObject||$form.find(':submit:first');if($button.length&&$button.attr('type')=='submit'&&$button.attr('name')){var $hiddenButton=$('input[type="hidden"][name="'+$button.attr('name')+'"]',$form);if(!$hiddenButton.length){$('<input>').attr({type:'hidden',name:$button.attr('name'),value:$button.attr('value')}).appendTo($form);}else{$hiddenButton.attr('value',$button.attr('value'));}}};var updateInput=function($form,attribute,messages){var data=$form.data('yiiActiveForm'),$input=findInput($form,attribute),hasError=false;if(!$.isArray(messages[attribute.id])){messages[attribute.id]=[];}
$form.trigger(events.afterValidateAttribute,[attribute,messages[attribute.id]]);attribute.status=1;if($input.length){hasError=messages[attribute.id].length>0;var $container=$form.find(attribute.container);var $error=$container.find(attribute.error);if(hasError){if(attribute.encodeError){$error.text(messages[attribute.id][0]);}else{$error.html(messages[attribute.id][0]);}
$container.removeClass(data.settings.validatingCssClass+' '+data.settings.successCssClass).addClass(data.settings.errorCssClass);}else{$error.empty();$container.removeClass(data.settings.validatingCssClass+' '+data.settings.errorCssClass+' ').addClass(data.settings.successCssClass);}
attribute.value=getValue($form,attribute);}
return hasError;};var updateSummary=function($form,messages){var data=$form.data('yiiActiveForm'),$summary=$form.find(data.settings.errorSummary),$ul=$summary.find('ul').empty();if($summary.length&&messages){$.each(data.attributes,function(){if($.isArray(messages[this.id])&&messages[this.id].length){var error=$('<li/>');if(data.settings.encodeErrorSummary){error.text(messages[this.id][0]);}else{error.html(messages[this.id][0]);}
$ul.append(error);}});$summary.toggle($ul.find('li').length>0);}};var getValue=function($form,attribute){var $input=findInput($form,attribute);var type=$input.attr('type');if(type==='checkbox'||type==='radio'){var $realInput=$input.filter(':checked');if(!$realInput.length){$realInput=$form.find('input[type=hidden][name="'+$input.attr('name')+'"]');}
return $realInput.val();}else{return $input.val();}};var findInput=function($form,attribute){var $input=$form.find(attribute.input);if($input.length&&$input[0].tagName.toLowerCase()==='div'){return $input.find('input');}else{return $input;}};})(window.jQuery);;
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