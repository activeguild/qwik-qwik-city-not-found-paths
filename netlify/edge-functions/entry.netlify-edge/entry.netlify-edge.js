import{getNotFound as Ne}from"./@qwik-city-not-found-paths.js";import{isStaticPath as Te}from"./@qwik-city-static-paths.js";import{j as f,r as Le,_ as Ae,F as J,s as Re,c as ge,i as Q,u as Oe,a as ze,b as H,d as fe,e as Pe,R as $e,S as De,Q as Fe,q as Ye}from"./assets/@qwik-city-plan.72abd514.js";var me={lax:"Lax",none:"None",strict:"Strict"},Be={seconds:1,minutes:1*60,hours:1*60*60,days:1*60*60*24,weeks:1*60*60*24*7},Ue=(e,t,n)=>{const s=[`${e}=${t}`];return typeof n.domain=="string"&&s.push(`Domain=${n.domain}`),typeof n.maxAge=="number"?s.push(`Max-Age=${n.maxAge}`):Array.isArray(n.maxAge)?s.push(`Max-Age=${n.maxAge[0]*Be[n.maxAge[1]]}`):typeof n.expires=="number"||typeof n.expires=="string"?s.push(`Expires=${n.expires}`):n.expires instanceof Date&&s.push(`Expires=${n.expires.toUTCString()}`),n.httpOnly&&s.push("HttpOnly"),typeof n.path=="string"&&s.push(`Path=${n.path}`),n.sameSite&&me[n.sameSite]&&s.push(`SameSite=${me[n.sameSite]}`),n.secure&&s.push("Secure"),s.join("; ")},He=e=>{const t={};if(typeof e=="string"&&e!==""){const n=e.split(";");for(const s of n){const r=s.split("=");if(r.length>1){const o=decodeURIComponent(r[0].trim()),i=decodeURIComponent(r[1].trim());t[o]=i}}}return t},M=Symbol("request-cookies"),V=Symbol("response-cookies"),qe,D=class{constructor(e){this[qe]={},this[M]=He(e)}get(e){const t=this[M][e];return t?{value:t,json(){return JSON.parse(t)},number(){return Number(t)}}:null}has(e){return!!this[M][e]}set(e,t,n={}){const s=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[V][e]=Ue(e,s,n)}delete(e,t){this.set(e,"deleted",{...t,maxAge:0})}headers(){return Object.values(this[V])}};qe=V;var Me=(e,t)=>{const n=t.headers();if(n.length>0){const s=new Headers(e);for(const r of n)s.append("Set-Cookie",r);return s}return e},g=Symbol("headers"),pe,We=class{constructor(){this[pe]={}}[(pe=g,Symbol.iterator)](){return this.entries()}*keys(){for(const e of Object.keys(this[g]))yield e}*values(){for(const e of Object.values(this[g]))yield e}*entries(){for(const e of Object.keys(this[g]))yield[e,this.get(e)]}get(e){return this[g][A(e)]||null}set(e,t){const n=A(e);this[g][n]=typeof t!="string"?String(t):t}append(e,t){const n=A(e),s=this.has(n)?`${this.get(n)}, ${t}`:t;this.set(e,s)}delete(e){if(!this.has(e))return;const t=A(e);delete this[g][t]}all(){return this[g]}has(e){return this[g].hasOwnProperty(A(e))}forEach(e,t){for(const n in this[g])this[g].hasOwnProperty(n)&&e.call(t,this[g][n],n,this)}},Ke=/[^a-z0-9\-#$%&'*+.^_`|~]/i;function A(e){if(typeof e!="string"&&(e=String(e)),Ke.test(e)||e.trim()==="")throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function F(){return new(typeof Headers=="function"?Headers:We)}var $=class extends Error{constructor(e,t){super(t),this.status=e}};function Qe(e,t){const s=_e(500,t),r=F();return r.set("Content-Type","text/html; charset=utf-8"),e.response(500,r,new D,async o=>{o.write(s)},t)}function Ve(e,t){const n=ke(t.status,t.message,t.stack),s=F();return s.set("Content-Type","text/html; charset=utf-8"),e.response(t.status,s,new D,async r=>{r.write(n)},t)}function _e(e,t){let n="Server Error",s;return t!=null&&(typeof t=="object"?(typeof t.message=="string"&&(n=t.message),t.stack!=null&&(s=String(t.stack))):n=String(t)),ke(e,n,s)}function ke(e,t,n){const s=typeof t=="string"?"600px":"300px",r=e>=500?Je:Ze;return e<500&&(n=""),`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}"/>
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${s}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
    pre { max-width: 580px; margin: 0 auto; }
  </style>
</head>
<body>
  <p><strong>${e}</strong> <span>${t}</span></p>${n?`
  <pre><code>${n}</code></pre>`:""}
</body>
</html>`}var Ze="#006ce9",Je="#713fc2";function Ge(e,t){const{pendingBody:n,resolvedBody:s,status:r,headers:o,cookie:i}=t,{response:a}=e;if(n===void 0&&s===void 0)return a(r,o,i,Xe);o.has("Content-Type")||o.set("Content-Type","application/json; charset=utf-8");const c=o.get("Content-Type").includes("json");return a(r,o,i,async({write:d})=>{const l=n!==void 0?await n:s;if(l!==void 0)if(c)d(JSON.stringify(l));else{const u=typeof l;d(u==="string"?l:u==="number"||u==="boolean"?String(l):l)}})}var Xe=async()=>{},R=class{constructor(e,t,n,s){this.url=e,this.location=e,this.status=xe(t)?t:302,this.headers=n!=null?n:F(),this.headers.set("Location",this.location),this.headers.delete("Cache-Control"),this.cookies=s!=null?s:new D}};function et(e,t){return e.response(t.status,t.headers,t.cookies,async()=>{})}function xe(e){return typeof e=="number"&&e>=301&&e<=308}async function tt(e,t,n,s,r="/"){if(n.length===0)throw new $(404,"Not Found");const{request:o,url:i,platform:a}=e,{pathname:c}=i,{method:d,headers:l}=o,u=rt(n),p=u&&c.endsWith(G),h=!p&&st(d,l.get("Accept"),l.get("Content-Type")),q=new D(l.get("cookie")),m={type:p?"pagedata":u&&!h?"pagehtml":"endpoint",url:i,params:t,status:200,headers:F(),resolvedBody:void 0,pendingBody:void 0,cookie:q,aborted:!1};let b=!1;if(u&&!p&&c!==r&&!c.endsWith(".html")){if(s){if(!c.endsWith("/"))throw new R(c+"/"+i.search,302)}else if(c.endsWith("/"))throw new R(c.slice(0,c.length-1)+i.search,302)}let y=-1;const E=()=>{y=he},I=async()=>{for(y++;y<n.length;){const _=n[y];let w;switch(d){case"GET":{w=_.onGet;break}case"POST":{w=_.onPost;break}case"PUT":{w=_.onPut;break}case"PATCH":{w=_.onPatch;break}case"DELETE":{w=_.onDelete;break}case"OPTIONS":{w=_.onOptions;break}case"HEAD":{w=_.onHead;break}}if(w=w||_.onRequest,typeof w=="function"){b=!0;const z=new nt(m,e),P={request:o,url:new URL(i),params:{...t},response:z,platform:a,cookie:q,next:I,abort:E},k=w(P);if(typeof k=="function")m.pendingBody=ye(k);else if(k!==null&&typeof k=="object"&&typeof k.then=="function"){const T=await k;typeof T=="function"?m.pendingBody=ye(T):m.resolvedBody=T}else m.resolvedBody=k}y++}};if(await I(),m.aborted=y>=he,!p&&xe(m.status)&&m.headers.has("Location"))throw new R(m.headers.get("Location"),m.status,m.headers,m.cookie);if(b)u&&d==="GET"&&(m.headers.has("Vary")||m.headers.set("Vary","Content-Type, Accept"));else if(h&&!p||!u)throw new $(405,"Method Not Allowed");return m}var N=Symbol("UserResponse"),W=Symbol("RequestContext"),nt=class{constructor(e,t){this[N]=e,this[W]=t}get status(){return this[N].status}set status(e){this[N].status=e}get headers(){return this[N].headers}get locale(){return this[W].locale}set locale(e){this[W].locale=e}redirect(e,t){return new R(e,t,this[N].headers,this[N].cookie)}error(e,t){return new $(e,t)}};function st(e,t,n){if(e==="GET"||e==="POST"){if(n&&n.includes("application/json"))return!0;if(t){const s=t.indexOf("text/html");if(s===0)return!1;const r=t.indexOf("application/json");if(r>-1)return s>-1?r<s:!0}return!1}else return!0}function ye(e){return new Promise((t,n)=>{try{const s=e();s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(t,n):t(s)}catch(s){n(s)}})}function rt(e){const t=e[e.length-1];return t&&typeof t.default=="function"}function ot(e,t){if(e.endsWith(G)){const n=e.length-it+(t?1:0);e=e.slice(0,n),e===""&&(e="/")}return e}var G="/q-data.json",it=G.length,he=999999999,be=new WeakMap,at=async(e,t,n,s)=>{if(Array.isArray(e))for(const r of e){const o=r[0].exec(s);if(o){const i=r[1],a=lt(r[2],o),c=r[4],d=new Array(i.length),l=[],u=ct(t,s);let p;return i.forEach((h,q)=>{ve(h,l,m=>d[q]=m,n)}),ve(u,l,h=>p=h==null?void 0:h.default,n),l.length>0&&await Promise.all(l),[a,d,p,c]}}return null},ve=(e,t,n,s)=>{if(typeof e=="function"){const r=be.get(e);if(r)n(r);else{const o=e();typeof o.then=="function"?t.push(o.then(i=>{s!==!1&&be.set(e,i),n(i)})):o&&n(o)}}},ct=(e,t)=>{if(e){const n=e.find(s=>s[0]===t||t.startsWith(s[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}},lt=(e,t)=>{const n={};if(e)for(let s=0;s<e.length;s++)n[e[s]]=t?t[s+1]:"";return n};function dt(e,t,n,s,r){const{status:o,headers:i,cookie:a}=t,{response:c}=e,d=t.type==="pagedata",l={};return e.request.headers.forEach((u,p)=>l[p]=u),d?i.set("Content-Type","application/json; charset=utf-8"):i.has("Content-Type")||i.set("Content-Type","text/html; charset=utf-8"),c(d?200:o,i,a,async u=>{try{const p=await n({stream:d?mt:u,envData:ft(l,t,e.locale,e.mode),...s});d?u.write(JSON.stringify(await we(t,p,r))):(typeof p).html==="string"&&u.write(p.html),typeof u.clientData=="function"&&u.clientData(await we(t,p,r))}catch(p){const h=_e(500,p);u.write(h)}})}async function we(e,t,n){const s=ut(t,n),r=t.isStatic;return{body:e.pendingBody?await e.pendingBody:e.resolvedBody,status:e.status!==200?e.status:void 0,redirect:e.status>=301&&e.status<=308&&e.headers.get("location")||void 0,isStatic:r,prefetch:s.length>0?s:void 0}}function ut(e,t){const n=[],s=a=>{a&&!n.includes(a)&&n.push(a)},r=a=>{if(Array.isArray(a))for(const c of a){const d=c.url.split("/").pop();d&&!n.includes(d)&&(s(d),r(c.imports))}};r(e.prefetchResources);const o=e.manifest||e._manifest,i=e._symbols;if(o&&i)for(const a of i){const c=o.symbols[a];c&&c.ctxName==="component$"&&s(o.mapping[a])}if(t)for(const a of t)s(a);return n}function ft(e,t,n,s){const{url:r,params:o,pendingBody:i,resolvedBody:a,status:c}=t;return{url:r.href,requestHeaders:e,locale:n,qwikcity:{mode:s,params:{...o},response:{body:i||a,status:c}}}}var mt={write:()=>{}};async function pt(e,t){try{const{render:n,qwikCityPlan:s}=t,{routes:r,menus:o,cacheModules:i,trailingSlash:a,basePathname:c}=s,d=ot(e.url.pathname,a),l=await at(r,o,i,d);if(l){const[u,p,h,q]=l,m=await tt(e,u,p,a,c);return m.aborted?null:m.type==="endpoint"?await Ge(e,m):await dt(e,m,n,t,q)}}catch(n){return n instanceof R?et(e,n):n instanceof $?Ve(e,n):Qe(e,n)}return null}function yt(e){async function t(n,s){try{const r=new URL(n.url);if(Te(r.pathname)||r.pathname.startsWith("/.netlify"))return s.next();const i=await pt({mode:"server",locale:void 0,url:r,request:n,response:(c,d,l,u)=>new Promise(p=>{let h=!1;const{readable:q,writable:m}=new TransformStream,b=m.getWriter(),y=new Response(q,{status:c,headers:Me(d,l)});u({write:E=>{if(h||(h=!0,p(y)),typeof E=="string"){const I=new TextEncoder;b.write(I.encode(E))}else b.write(E)}}).finally(()=>{h||(h=!0,p(y)),b.close()})}),platform:s},e);if(i)return i;const a=Ne(r.pathname);return new Response(a,{status:404,headers:{"Content-Type":"text/html; charset=utf-8","X-Not-Found":r.pathname}})}catch(r){return console.error(r),new Response(String(r||"Error"),{status:500,headers:{"Content-Type":"text/plain; charset=utf-8","X-Error":"netlify-edge"}})}}return t}/**
 * @license
 * @builder.io/qwik/server 0.14.1
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */if(typeof global>"u"){const e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:{};e.global=e}var ht=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function K(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function je(e){let t=e.base;return typeof t=="string"?(t.endsWith("/")||(t+="/"),t):"/build/"}function bt(e,t){const n=t==null?void 0:t.mapper,s=e.symbolMapper?e.symbolMapper:o=>{if(n){const i=Ee(o),a=n[i];return a||console.error("Cannot resolve symbol",o,"in",n),a}};return{isServer:!0,async importSymbol(o,i,a){let c=String(i);c.endsWith(".js")||(c+=".js");const d=ht(c);if(!(a in d))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${c}'.`);return d[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(i=>{setTimeout(()=>{i(o())})}),chunkForSymbol(o){return s(o,n)}}}async function vt(e,t){const n=bt(e,t);Re(n)}var Ee=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e},wt='((e,t)=>{const n="__q_context__",o=window,i=new Set,s=t=>e.querySelectorAll(t),r=(e,t,n=t.type)=>{s("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},a=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===a(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,i,s=i.type)=>{const r="on"+o+":"+s;t.hasAttribute("preventdefault:"+s)&&i.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===r));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,i],(()=>t.isConnected))(i,t);return}const d=a(t,r);if(d){const o=t.closest("[q\\\\:container]"),s=new URL(a(o,"q:base"),e.baseURI);for(const r of d.split("\\n")){const a=new URL(r,s),c=a.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),d=import(a.href.split("#")[0]);l(o);const p=b(await d,c),w=e[n];if(t.isConnected)try{e[n]=[t,i,a],u("qsymbol",{symbol:c,element:t,reqTime:f}),await p(i,t)}finally{e[n]=w}}}},u=(t,n)=>{e.dispatchEvent(c(t,n))},b=(e,t)=>{if(t in e)return e[t];for(const n of Object.values(e))if("object"==typeof n&&n&&t in n)return n[t]},d=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=d(e.type),n=e.target;for(r("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},w=e=>{r("-window",e,d(e.type))},q=()=>{var n;const r=e.readyState;if(!t&&("interactive"==r||"complete"==r)&&(t=1,u("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>u("qidle"))),i.has("qvisible"))){const e=s("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},v=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),y=t=>{for(const n of t)i.has(n)||(v(e,n,p,!0),v(o,n,w),i.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&y(t),o.qwikevents={push:(...e)=>y(e)},v(e,"readystatechange",q),q()}})(document);',gt=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = findSymbol(await module, symbolName);
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findSymbol = (module, symbol) => {
            if (symbol in module) {
                return module[symbol];
            }
            for (const v of Object.values(module)) {
                if ("object" == typeof v && v && symbol in v) {
                    return v[symbol];
                }
            }
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,qt='((e,t)=>{const n="__q_context__",o=window,i=new Set,s=t=>e.querySelectorAll(t),r=(e,t,n=t.type)=>{s("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},a=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===a(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,i,s=i.type)=>{const r="on"+o+":"+s;t.hasAttribute("preventdefault:"+s)&&i.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===r));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,i],(()=>t.isConnected))(i,t);return}const d=a(t,r);if(d){const o=t.closest("[q\\\\:container]"),s=new URL(a(o,"q:base"),e.baseURI);for(const r of d.split("\\n")){const a=new URL(r,s),c=a.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),d=import(a.href.split("#")[0]);l(o);const p=b(await d,c),w=e[n];if(t.isConnected)try{e[n]=[t,i,a],u("qsymbol",{symbol:c,element:t,reqTime:f}),await p(i,t)}finally{e[n]=w}}}},u=(t,n)=>{e.dispatchEvent(c(t,n))},b=(e,t)=>{if(t in e)return e[t];for(const n of Object.values(e))if("object"==typeof n&&n&&t in n)return n[t]},d=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=d(e.type),n=e.target;for(r("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},w=e=>{r("-window",e,d(e.type))},q=()=>{var n;const r=e.readyState;if(!t&&("interactive"==r||"complete"==r)&&(t=1,u("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>u("qidle"))),i.has("qvisible"))){const e=s("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},v=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),y=t=>{for(const n of t)i.has(n)||(v(e,n,p,!0),v(o,n,w),i.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&y(t),o.qwikevents={push:(...e)=>y(e)},v(e,"readystatechange",q),q()}})(document);',_t=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = findSymbol(await module, symbolName);
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findSymbol = (module, symbol) => {
            if (symbol in module) {
                return module[symbol];
            }
            for (const v of Object.values(module)) {
                if ("object" == typeof v && v && symbol in v) {
                    return v[symbol];
                }
            }
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function kt(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?_t:qt).replace("window.qEvents",JSON.stringify(e.events)):e.debug?gt:wt}function xt(e,t,n){if(!n)return[];const s=t.prefetchStrategy,r=je(t);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return jt(e,n,r);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:n.manifest})}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}}return[]}function jt(e,t,n){const s=[],r=e==null?void 0:e.qrls,{mapper:o,manifest:i}=t,a=new Set;if(Array.isArray(r))for(const c of r){const d=c.getHash(),l=o[d];l&&Se(i,a,s,n,l[1])}return s}function Se(e,t,n,s,r){const o=s+r;if(!t.has(o)){t.add(o);const i=e.bundles[r];if(i){const a={url:o,imports:[]};if(n.push(a),Array.isArray(i.imports))for(const c of i.imports)Se(e,t,a.imports,s,c)}}}var O=globalThis.qDev===!0,Et=[],Ie={};O&&(Object.freeze(Et),Object.freeze(Ie),Error.stackTraceLimit=9999);["click","dblclick","contextmenu","auxclick","pointerdown","pointerup","pointermove","pointerover","pointerenter","pointerleave","pointerout","pointercancel","gotpointercapture","lostpointercapture","touchstart","touchend","touchmove","touchcancel","mousedown","mouseup","mousemove","mouseenter","mouseleave","mouseover","mouseout","wheel","gesturestart","gesturechange","gestureend","keydown","keyup","keypress","input","change","search","invalid","beforeinput","select","focusin","focusout","focus","blur","submit","reset","scroll"].map(e=>`on${e.toLowerCase()}$`);["useWatch$","useClientEffect$","useEffect$","component$","useStyles$","useStylesScoped$"].map(e=>e.toLowerCase());function St(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function Z(){let r=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return r+="w.postMessage(u.map(u=>new URL(u,origin)+''));",r+="w.onmessage=()=>{w.terminate()};",r}function It(e){const t={bundles:Y(e).map(n=>n.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(t)}}))`}function Y(e){const t=[],n=s=>{if(Array.isArray(s))for(const r of s)t.includes(r.url)||(t.push(r.url),n(r.imports))};return n(e),t}function Ct(e,t){const n=Rt(e==null?void 0:e.implementation),s=[];return n.prefetchEvent==="always"&&Nt(s,t),n.linkInsert==="html-append"&&Tt(s,t,n),n.linkInsert==="js-append"?Lt(s,t,n):n.workerFetchInsert==="always"&&At(s,t),s.length>0?f(J,{children:s}):null}function Nt(e,t){e.push(f("script",{type:"module",dangerouslySetInnerHTML:It(t)}))}function Tt(e,t,n){const s=Y(t),r=n.linkRel||"prefetch";for(const o of s){const i={};i.href=o,i.rel=r,(r==="prefetch"||r==="preload")&&o.endsWith(".js")&&(i.as="script"),e.push(f("link",i,void 0))}}function Lt(e,t,n){const s=n.linkRel||"prefetch";let r="";n.workerFetchInsert==="no-link-support"&&(r+="let supportsLinkRel = true;"),r+=`const u=${JSON.stringify(Y(t))};`,r+="u.map((u,i)=>{",r+="const l=document.createElement('link');",r+='l.setAttribute("href",u);',r+=`l.setAttribute("rel","${s}");`,n.workerFetchInsert==="no-link-support"&&(r+="if(i===0){",r+="try{",r+=`supportsLinkRel=l.relList.supports("${s}");`,r+="}catch(e){}",r+="}"),r+="document.body.appendChild(l);",r+="});",n.workerFetchInsert==="no-link-support"&&(r+="if(!supportsLinkRel){",r+=Z(),r+="}"),n.workerFetchInsert==="always"&&(r+=Z()),e.push(f("script",{type:"module",dangerouslySetInnerHTML:r}))}function At(e,t){let n=`const u=${JSON.stringify(Y(t))};`;n+=Z(),e.push(f("script",{type:"module",dangerouslySetInnerHTML:n}))}function Rt(e){if(typeof e=="string"){switch(e){case"link-prefetch-html":return S(e,"linkInsert"),{linkInsert:"html-append",linkRel:"prefetch",workerFetchInsert:null,prefetchEvent:null};case"link-prefetch":return S(e,"linkInsert"),{linkInsert:"js-append",linkRel:"prefetch",workerFetchInsert:"no-link-support",prefetchEvent:null};case"link-preload-html":return S(e,"linkInsert"),{linkInsert:"html-append",linkRel:"preload",workerFetchInsert:null,prefetchEvent:null};case"link-preload":return S(e,"linkInsert"),{linkInsert:"js-append",linkRel:"preload",workerFetchInsert:"no-link-support",prefetchEvent:null};case"link-modulepreload-html":return S(e,"linkInsert"),{linkInsert:"html-append",linkRel:"modulepreload",workerFetchInsert:null,prefetchEvent:null};case"link-modulepreload":return S(e,"linkInsert"),{linkInsert:"js-append",linkRel:"modulepreload",workerFetchInsert:"no-link-support",prefetchEvent:null}}return S(e,"workerFetchInsert"),{linkInsert:null,linkRel:null,workerFetchInsert:"always",prefetchEvent:null}}return e&&typeof e=="object"?e:Ot}var Ot={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"};function S(e,t){console.warn(`The Prefetch Strategy Implementation "${e}" has been deprecated and will be removed in an upcoming release. Please update to use the "prefetchStrategy.implementation.${t}" interface.`)}var zt=e=>e&&typeof e.nodeType=="number",Pt=e=>e.nodeType===1,$t=O?"background: #564CE0; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;":"",Dt=(e,...t)=>{const n=e instanceof Error?e:new Error(e);return console.error("%cQWIK ERROR",$t,n.message,...Bt(t),n.stack),n},Ft=(e,...t)=>{const n=Dt(e,...t);debugger;return n},Yt=e=>e._qc_,Bt=e=>O?e.map(t=>zt(t)&&Pt(t)?Ut(t):t):e,Ut=e=>{var s;const t=Yt(e),n=(()=>typeof process<"u"&&!!process.versions&&!!process.versions.node)();return{tagName:e.tagName,renderQRL:(s=t==null?void 0:t.$componentQrl$)==null?void 0:s.getSymbol(),element:n?void 0:e,ctx:n?void 0:t}};function Ht(e,t,...n){if(O){if(e!=null)return;throw Ft(t,...n)}}var Mt="<!DOCTYPE html>";async function Wt(e,t){var X,ee,te,ne,se,re;t=Zt(t);let n=t.stream,s=0,r=0,o=0,i=0;const a=(ee=(X=t.streaming)==null?void 0:X.inOrder)!=null?ee:{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},c=(te=t.containerTagName)!=null?te:"html",d=(ne=t.containerAttributes)!=null?ne:{};let l="";const u=n,p=K();function h(){l&&(u.write(l),l="",s=0,o++,o===1&&(i=p()))}function q(v){s+=v.length,r+=v.length,l+=v}switch(a.strategy){case"disabled":n={write:q};break;case"direct":n=u;break;case"auto":let v=0,x=!1;const B=(se=a.maximunChunk)!=null?se:0,U=(re=a.maximunInitialChunk)!=null?re:0;n={write(C){C==="<!--qkssr-f-->"?x||(x=!0):C==="<!--qkssr-pu-->"?v++:C==="<!--qkssr-po-->"?v--:q(C),v===0&&(x||s>=(o===0?U:B))&&(x=!1,h())}};break}c==="html"?n.write(Mt):(n.write("<!--cq-->"),t.qwikLoader?(t.qwikLoader.include===void 0&&(t.qwikLoader.include="never"),t.qwikLoader.position===void 0&&(t.qwikLoader.position="bottom")):t.qwikLoader={include:"never"}),t.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build.");const m=je(t),b=Kt(t.manifest);await vt(t,b);let y;const E=b==null?void 0:b.manifest.injections,I=E?E.map(v=>{var x;return f(v.tag,(x=v.attributes)!=null?x:Ie)}):void 0,_=K(),w=[];let z=0,P=0,k=!1;await Le(e,{stream:n,containerTagName:c,containerAttributes:d,envData:t.envData,base:m,beforeContent:I,beforeClose:async(v,x,B)=>{var ce,le,de;z=_();const U=K();k=B,y=await Ae(v,x);const C=JSON.stringify(y.state,void 0,O?"  ":void 0),L=[f("script",{type:"qwik/json",dangerouslySetInnerHTML:Qt(C)})];if(t.prefetchStrategy!==null){const j=xt(y,t,b);if(j.length>0){const ue=Ct(t.prefetchStrategy,j);ue&&L.push(ue)}}const Ce=!y||y.mode!=="static",oe=(le=(ce=t.qwikLoader)==null?void 0:ce.include)!=null?le:"auto",ie=oe==="always"||oe==="auto"&&Ce;if(ie){const j=kt({events:(de=t.qwikLoader)==null?void 0:de.events,debug:t.debug});L.push(f("script",{id:"qwikloader",dangerouslySetInnerHTML:j}))}const ae=Array.from(x.$events$,j=>JSON.stringify(j));if(ae.length>0){let j=`window.qwikevents.push(${ae.join(", ")})`;ie||(j=`window.qwikevents||=[];${j}`),L.push(f("script",{dangerouslySetInnerHTML:j}))}return Vt(w,v),P=U(),f(J,{children:L})}}),c!=="html"&&n.write("<!--/cq-->"),h(),Ht(y,"snapshotResult must be defined");const T=!k&&!y.resources.some(v=>v._cache!==1/0);return{prefetchResources:void 0,snapshotResult:y,flushes:o,manifest:b==null?void 0:b.manifest,size:r,isStatic:T,timing:{render:z,snapshot:P,firstFlush:i},_symbols:w}}function Kt(e){if(!!e){if("mapper"in e)return e;if(e=St(e),e){const t={};return Object.entries(e.mapping).forEach(([n,s])=>{t[Ee(n)]=[n,s]}),{mapper:t,manifest:e}}}}var Qt=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Vt(e,t){var n;for(const s of t){const r=(n=s.$componentQrl$)==null?void 0:n.getSymbol();r&&!e.includes(r)&&e.push(r)}}function Zt(e){const t={...e};return e&&typeof e.base=="function"&&(t.base=e.base(t)),t}const Jt={symbols:{s_kzjavhDI3L0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_a_onClick",canonicalFilename:"s_kzjavhdi3l0",hash:"kzjavhDI3L0",ctxKind:"event",ctxName:"onClick$",captures:!0,parent:"s_8gdLBszqbaM"},s_yiXwCC0m3jY:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_a_onMouseOver",canonicalFilename:"s_yixwcc0m3jy",hash:"yiXwCC0m3jY",ctxKind:"event",ctxName:"onMouseOver$",captures:!1,parent:"s_8gdLBszqbaM"},s_dznIGAlrcag:{origin:"routes/flower/index.tsx",displayName:"flower_component__Fragment_input_onInput",canonicalFilename:"s_dznigalrcag",hash:"dznIGAlrcag",ctxKind:"event",ctxName:"onInput$",captures:!0,parent:"s_OW4nu0I1yZ8"},s_EpaZ5qQ4Lg4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_a_onQVisible",canonicalFilename:"s_epaz5qq4lg4",hash:"EpaZ5qQ4Lg4",ctxKind:"event",ctxName:"onQVisible$",captures:!1,parent:"s_8gdLBszqbaM"},s_2Eo7WCpaqI8:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useWatch",canonicalFilename:"s_2eo7wcpaqi8",hash:"2Eo7WCpaqI8",ctxKind:"function",ctxName:"useWatch$",captures:!0,parent:"s_TxCFOy819ag"},s_V0Y6u0VD1eY:{origin:"routes/flower/index.tsx",displayName:"flower_component_useClientEffect",canonicalFilename:"s_v0y6u0vd1ey",hash:"V0Y6u0VD1eY",ctxKind:"function",ctxName:"useClientEffect$",captures:!0,parent:"s_OW4nu0I1yZ8"},s_3sccYCDd1Z0:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_3sccycdd1z0",hash:"3sccYCDd1Z0",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_AKetNByE5TM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_aketnbye5tm",hash:"AKetNByE5TM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_OW4nu0I1yZ8:{origin:"routes/flower/index.tsx",displayName:"flower_component",canonicalFilename:"s_ow4nu0i1yz8",hash:"OW4nu0I1yZ8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_VkLNXphUh5s:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vklnxphuh5s",hash:"VkLNXphUh5s",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_ceU05TscGYE:{origin:"components/header/header.tsx",displayName:"header_component",canonicalFilename:"s_ceu05tscgye",hash:"ceU05TscGYE",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_xYL1qOwPyDI:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_xyl1qowpydi",hash:"xYL1qOwPyDI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_zrbrqoaqXSY:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_zrbrqoaqxsy",hash:"zrbrqoaqXSY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_hO3b5j0m2ZI:{origin:"root.tsx",displayName:"root_component_useStyles",canonicalFilename:"s_ho3b5j0m2zi",hash:"hO3b5j0m2ZI",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_3sccYCDd1Z0"},s_N39ca0w8E8Y:{origin:"components/header/header.tsx",displayName:"header_component_useStylesScoped",canonicalFilename:"s_n39ca0w8e8y",hash:"N39ca0w8E8Y",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_ceU05TscGYE"},s_p4UiTwsJc7c:{origin:"routes/flower/index.tsx",displayName:"flower_component_useStylesScoped",canonicalFilename:"s_p4uitwsjc7c",hash:"p4UiTwsJc7c",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_OW4nu0I1yZ8"},s_u0YVoxt2aTY:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_useOnDocument",canonicalFilename:"s_u0yvoxt2aty",hash:"u0YVoxt2aTY",ctxKind:"function",ctxName:"useOnDocument",captures:!1,parent:"s_8gdLBszqbaM"}},mapping:{s_kzjavhDI3L0:"q-a06e4491.js",s_yiXwCC0m3jY:"q-a06e4491.js",s_dznIGAlrcag:"q-389299d2.js",s_EpaZ5qQ4Lg4:"q-a06e4491.js",s_2Eo7WCpaqI8:"q-e6e7d10f.js",s_V0Y6u0VD1eY:"q-389299d2.js",s_3sccYCDd1Z0:"q-b6f1a699.js",s_8gdLBszqbaM:"q-a06e4491.js",s_AKetNByE5TM:"q-61efbf06.js",s_OW4nu0I1yZ8:"q-389299d2.js",s_TxCFOy819ag:"q-e6e7d10f.js",s_VkLNXphUh5s:"q-e9483fb8.js",s_WmYC5H00wtI:"q-acebbe94.js",s_ceU05TscGYE:"q-1e65fd63.js",s_xYL1qOwPyDI:"q-c6d6991f.js",s_zrbrqoaqXSY:"q-27c99dd2.js",s_hO3b5j0m2ZI:"q-b6f1a699.js",s_N39ca0w8E8Y:"q-1e65fd63.js",s_p4UiTwsJc7c:"q-389299d2.js",s_u0YVoxt2aTY:"q-a06e4491.js"},bundles:{"q-1d4e3858.js":{size:2536,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-1e65fd63.js":{size:4115,imports:["q-9b3caba5.js","q-f33dafd1.js"],origins:["src/components/header/header.css?used&inline","src/components/icons/qwik.tsx","src/entry_header.js","src/s_ceu05tscgye.js","src/s_n39ca0w8e8y.js"],symbols:["s_ceU05TscGYE","s_N39ca0w8E8Y"]},"q-27c99dd2.js":{size:656,imports:["q-9b3caba5.js","q-f33dafd1.js","q-f800c3c5.js"],origins:["src/entry_RouterHead.js","src/s_zrbrqoaqxsy.js"],symbols:["s_zrbrqoaqXSY"]},"q-389299d2.js":{size:2499,imports:["q-9b3caba5.js","q-f33dafd1.js","q-f800c3c5.js"],origins:["src/entry_flower.js","src/routes/flower/flower.css?used&inline","src/s_dznigalrcag.js","src/s_ow4nu0i1yz8.js","src/s_p4uitwsjc7c.js","src/s_v0y6u0vd1ey.js"],symbols:["s_dznIGAlrcag","s_OW4nu0I1yZ8","s_p4UiTwsJc7c","s_V0Y6u0VD1eY"]},"q-5fd88046.js":{size:258,imports:["q-9b3caba5.js","q-f33dafd1.js"],dynamicImports:["q-b6f1a699.js"],origins:["src/root.tsx"]},"q-61efbf06.js":{size:293,imports:["q-9b3caba5.js","q-f33dafd1.js","q-f800c3c5.js"],origins:["src/entry_RouterOutlet.js","src/s_aketnbye5tm.js"],symbols:["s_AKetNByE5TM"]},"q-7335928b.js":{size:38054,imports:["q-5fd88046.js","q-9b3caba5.js","q-e18f66f9.js","q-f33dafd1.js"],origins:["node_modules/@builder.io/qwik-city/middleware/netlify-edge/index.mjs","node_modules/@builder.io/qwik/server.mjs","src/entry.netlify-edge.tsx","src/entry.ssr.tsx","src/root.tsx/@qwik-client-manifest"]},"q-95a5fa57.js":{size:236,imports:["q-9b3caba5.js","q-f33dafd1.js"],dynamicImports:["q-e9483fb8.js"],origins:["src/routes/layout.tsx"]},"q-9b3caba5.js":{size:53280,imports:["q-f33dafd1.js"],origins:["node_modules/@builder.io/qwik/core.min.mjs"]},"q-a06e4491.js":{size:1138,imports:["q-9b3caba5.js","q-f33dafd1.js","q-f800c3c5.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_epaz5qq4lg4.js","src/s_kzjavhdi3l0.js","src/s_u0yvoxt2aty.js","src/s_yixwcc0m3jy.js"],symbols:["s_8gdLBszqbaM","s_EpaZ5qQ4Lg4","s_kzjavhDI3L0","s_u0YVoxt2aTY","s_yiXwCC0m3jY"]},"q-acebbe94.js":{size:520,imports:["q-9b3caba5.js","q-f33dafd1.js","q-f800c3c5.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_wmyc5h00wti.js"],symbols:["s_WmYC5H00wtI"]},"q-b04fd3ed.js":{size:112,imports:["q-f33dafd1.js"],dynamicImports:["q-1d4e3858.js"],origins:["@qwik-city-entries"]},"q-b6f1a699.js":{size:2348,imports:["q-9b3caba5.js","q-f33dafd1.js","q-f800c3c5.js"],dynamicImports:["q-27c99dd2.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/global.css?used&inline","src/s_3sccycdd1z0.js","src/s_ho3b5j0m2zi.js"],symbols:["s_3sccYCDd1Z0","s_hO3b5j0m2ZI"]},"q-c6d6991f.js":{size:2911,imports:["q-9b3caba5.js","q-f33dafd1.js","q-f800c3c5.js"],origins:["src/entry_routes.js","src/s_xyl1qowpydi.js"],symbols:["s_xYL1qOwPyDI"]},"q-e18f66f9.js":{size:678,imports:["q-f33dafd1.js"],dynamicImports:["q-95a5fa57.js","q-b04fd3ed.js","q-e8232657.js","q-ebcedef4.js"],origins:["@qwik-city-plan"]},"q-e6e7d10f.js":{size:1580,imports:["q-9b3caba5.js","q-f33dafd1.js","q-f800c3c5.js"],dynamicImports:["q-e18f66f9.js"],origins:["@builder.io/qwik/build","src/entry_QwikCityProvider.js","src/s_2eo7wcpaqi8.js","src/s_txcfoy819ag.js"],symbols:["s_2Eo7WCpaqI8","s_TxCFOy819ag"]},"q-e8232657.js":{size:356,imports:["q-9b3caba5.js","q-f33dafd1.js"],dynamicImports:["q-c6d6991f.js"],origins:["src/routes/index.tsx"]},"q-e9483fb8.js":{size:471,imports:["q-9b3caba5.js","q-f33dafd1.js"],dynamicImports:["q-1e65fd63.js"],origins:["src/components/header/header.tsx","src/entry_layout.js","src/s_vklnxphuh5s.js"],symbols:["s_VkLNXphUh5s"]},"q-ebcedef4.js":{size:292,imports:["q-9b3caba5.js","q-f33dafd1.js"],dynamicImports:["q-389299d2.js"],origins:["src/routes/flower/index.tsx"]},"q-f33dafd1.js":{size:863,origins:["\0vite/preload-helper"]},"q-f800c3c5.js":{size:4350,imports:["q-9b3caba5.js","q-f33dafd1.js"],dynamicImports:["q-61efbf06.js","q-a06e4491.js","q-acebbe94.js","q-e6e7d10f.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]}},injections:[],version:"1",options:{target:"client",buildMode:"production",forceFullBuild:!0,entryStrategy:{type:"smart"}},platform:{qwik:"0.14.1",vite:"",rollup:"2.79.1",env:"node",os:"darwin",node:"16.15.1"}},Gt=ge(Q(()=>{const e=Oe(),t=ze();return f(J,{children:[f("title",{children:H(e,"title")}),f("link",{rel:"canonical",get href(){return t.href},[fe]:{href:H(t,"href")}}),f("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),f("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),e.meta.map(n=>f("meta",{...n})),e.links.map(n=>f("link",{...n})),e.styles.map(n=>f("style",{...n.props,get dangerouslySetInnerHTML(){return n.style},[fe]:{dangerouslySetInnerHTML:H(n,"style")}}))]})},"s_zrbrqoaqXSY")),Xt=`:root{--qwik-dark-blue: #006ce9;--qwik-light-blue: #18b6f6;--qwik-light-purple: #ac7ff4;--qwik-dark-purple: #713fc2}body{background-color:#fafafa;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,sans-serif;padding:20px 20px 40px}main{max-width:760px;margin:0 auto;background-color:#fff;border-radius:5px;box-shadow:0 0 130px -50px var(--qwik-light-purple);overflow:hidden}h1,h2{margin:0 0 5px}.lightning{filter:hue-rotate(180deg)}section{padding:20px;border-bottom:10px solid var(--qwik-dark-blue)}ul{list-style-type:square;margin:5px 0 30px;padding-left:25px}li{padding:8px 0}li::marker{color:var(--qwik-light-blue)}a,a:visited{color:var(--qwik-dark-blue)}a:hover{text-decoration:none}table.commands{margin:0 0 30px}.commands td{padding:5px}.commands td:first-child{white-space:nowrap;padding-right:20px}code{font-family:Menlo,Monaco,Courier New,monospace;font-size:.9em;background-color:#e0e0e0;padding:2px 4px;border-radius:3px;border-bottom:2px solid #bfbfbf}footer{padding:15px;text-align:center;font-size:.8em}footer a{text-decoration:none}footer a:hover{text-decoration:underline}a.mindblow{margin:0 auto;display:block;background:var(--qwik-light-purple);padding:10px 20px;border-radius:10px;border:0;color:#fff;text-decoration:none;font-size:20px;width:fit-content;border-bottom:4px solid black;cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>\\1f92f</text></svg>") 16 0,auto}a.mindblow:hover{border-bottom-width:0px;margin-bottom:4px;transform:translateY(4px)}
`,en=ge(Q(()=>(Pe(Q(Xt,"s_hO3b5j0m2ZI")),f(Fe,{children:[f("head",{children:[f("meta",{charSet:"utf-8"}),f("link",{rel:"manifest",href:"/manifest.json"}),f(Gt,{})]}),f("body",{lang:"en",children:[f($e,{}),f(De,{})]})]})),"s_3sccYCDd1Z0"));function tn(e){return Wt(f(en,{}),{manifest:Jt,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}const an=(e,t)=>yt({render:tn,qwikCityPlan:Ye})(e,t);export{an as default};
