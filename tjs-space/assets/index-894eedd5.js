var pd=Object.defineProperty;var md=(i,e,t)=>e in i?pd(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ne=(i,e,t)=>(md(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function _l(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}function vo(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=yt(n)?vd(n):vo(n);if(s)for(const r in s)e[r]=s[r]}return e}else{if(yt(i))return i;if(at(i))return i}}const gd=/;(?![^(]*\))/g,_d=/:([^]+)/,xd=/\/\*.*?\*\//gs;function vd(i){const e={};return i.replace(xd,"").split(gd).forEach(t=>{if(t){const n=t.split(_d);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function xl(i){let e="";if(yt(i))e=i;else if(Ie(i))for(let t=0;t<i.length;t++){const n=xl(i[t]);n&&(e+=n+" ")}else if(at(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const yd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bd=_l(yd);function Th(i){return!!i||i===""}const Md=i=>yt(i)?i:i==null?"":Ie(i)||at(i)&&(i.toString===Lh||!Fe(i.toString))?JSON.stringify(i,Eh,2):String(i),Eh=(i,e)=>e&&e.__v_isRef?Eh(i,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s])=>(t[`${n} =>`]=s,t),{})}:Ah(e)?{[`Set(${e.size})`]:[...e.values()]}:at(e)&&!Ie(e)&&!Rh(e)?String(e):e,ot={},cs=[],mn=()=>{},Sd=()=>!1,wd=/^on[^a-z]/,yo=i=>wd.test(i),vl=i=>i.startsWith("onUpdate:"),Lt=Object.assign,yl=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Td=Object.prototype.hasOwnProperty,We=(i,e)=>Td.call(i,e),Ie=Array.isArray,us=i=>bo(i)==="[object Map]",Ah=i=>bo(i)==="[object Set]",Fe=i=>typeof i=="function",yt=i=>typeof i=="string",bl=i=>typeof i=="symbol",at=i=>i!==null&&typeof i=="object",Ch=i=>at(i)&&Fe(i.then)&&Fe(i.catch),Lh=Object.prototype.toString,bo=i=>Lh.call(i),Ed=i=>bo(i).slice(8,-1),Rh=i=>bo(i)==="[object Object]",Ml=i=>yt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,so=_l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mo=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Ad=/-(\w)/g,_s=Mo(i=>i.replace(Ad,(e,t)=>t?t.toUpperCase():"")),Cd=/\B([A-Z])/g,Cs=Mo(i=>i.replace(Cd,"-$1").toLowerCase()),Ph=Mo(i=>i.charAt(0).toUpperCase()+i.slice(1)),jo=Mo(i=>i?`on${Ph(i)}`:""),sr=(i,e)=>!Object.is(i,e),qo=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},uo=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Dh=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let rc;const Ld=()=>rc||(rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let yn;class Rd{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=yn,!e&&yn&&(this.index=(yn.scopes||(yn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=yn;try{return yn=this,e()}finally{yn=t}}}on(){yn=this}off(){yn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function Pd(i,e=yn){e&&e.active&&e.effects.push(i)}const Sl=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Ih=i=>(i.w&li)>0,Nh=i=>(i.n&li)>0,Dd=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=li},Id=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];Ih(s)&&!Nh(s)?s.delete(i):e[t++]=s,s.w&=~li,s.n&=~li}e.length=t}},ka=new WeakMap;let Ys=0,li=1;const Va=30;let un;const Ii=Symbol(""),Ha=Symbol("");class wl{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Pd(this,n)}run(){if(!this.active)return this.fn();let e=un,t=ri;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=un,un=this,ri=!0,li=1<<++Ys,Ys<=Va?Dd(this):oc(this),this.fn()}finally{Ys<=Va&&Id(this),li=1<<--Ys,un=this.parent,ri=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){un===this?this.deferStop=!0:this.active&&(oc(this),this.onStop&&this.onStop(),this.active=!1)}}function oc(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let ri=!0;const Oh=[];function Ls(){Oh.push(ri),ri=!1}function Rs(){const i=Oh.pop();ri=i===void 0?!0:i}function Kt(i,e,t){if(ri&&un){let n=ka.get(i);n||ka.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=Sl()),Fh(s)}}function Fh(i,e){let t=!1;Ys<=Va?Nh(i)||(i.n|=li,t=!Ih(i)):t=!i.has(un),t&&(i.add(un),un.deps.push(i))}function Hn(i,e,t,n,s,r){const o=ka.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(i)){const l=Dh(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(i)?Ml(t)&&a.push(o.get("length")):(a.push(o.get(Ii)),us(i)&&a.push(o.get(Ha)));break;case"delete":Ie(i)||(a.push(o.get(Ii)),us(i)&&a.push(o.get(Ha)));break;case"set":us(i)&&a.push(o.get(Ii));break}if(a.length===1)a[0]&&Ga(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ga(Sl(l))}}function Ga(i,e){const t=Ie(i)?i:[...i];for(const n of t)n.computed&&ac(n);for(const n of t)n.computed||ac(n)}function ac(i,e){(i!==un||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Nd=_l("__proto__,__v_isRef,__isVue"),Uh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(bl)),Od=Tl(),Fd=Tl(!1,!0),Ud=Tl(!0),lc=zd();function zd(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=$e(this);for(let r=0,o=this.length;r<o;r++)Kt(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map($e)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Ls();const n=$e(this)[e].apply(this,t);return Rs(),n}}),i}function Tl(i=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(i?e?ep:Hh:e?Vh:kh).get(n))return n;const o=Ie(n);if(!i&&o&&We(lc,s))return Reflect.get(lc,s,r);const a=Reflect.get(n,s,r);return(bl(s)?Uh.has(s):Nd(s))||(i||Kt(n,"get",s),e)?a:Ct(a)?o&&Ml(s)?a:a.value:at(a)?i?Gh(a):Gi(a):a}}const Bd=zh(),kd=zh(!0);function zh(i=!1){return function(t,n,s,r){let o=t[n];if(xs(o)&&Ct(o)&&!Ct(s))return!1;if(!i&&(!ho(s)&&!xs(s)&&(o=$e(o),s=$e(s)),!Ie(t)&&Ct(o)&&!Ct(s)))return o.value=s,!0;const a=Ie(t)&&Ml(n)?Number(n)<t.length:We(t,n),l=Reflect.set(t,n,s,r);return t===$e(r)&&(a?sr(s,o)&&Hn(t,"set",n,s):Hn(t,"add",n,s)),l}}function Vd(i,e){const t=We(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Hn(i,"delete",e,void 0),n}function Hd(i,e){const t=Reflect.has(i,e);return(!bl(e)||!Uh.has(e))&&Kt(i,"has",e),t}function Gd(i){return Kt(i,"iterate",Ie(i)?"length":Ii),Reflect.ownKeys(i)}const Bh={get:Od,set:Bd,deleteProperty:Vd,has:Hd,ownKeys:Gd},Wd={get:Ud,set(i,e){return!0},deleteProperty(i,e){return!0}},jd=Lt({},Bh,{get:Fd,set:kd}),El=i=>i,So=i=>Reflect.getPrototypeOf(i);function wr(i,e,t=!1,n=!1){i=i.__v_raw;const s=$e(i),r=$e(e);t||(e!==r&&Kt(s,"get",e),Kt(s,"get",r));const{has:o}=So(s),a=n?El:t?Ll:rr;if(o.call(s,e))return a(i.get(e));if(o.call(s,r))return a(i.get(r));i!==s&&i.get(e)}function Tr(i,e=!1){const t=this.__v_raw,n=$e(t),s=$e(i);return e||(i!==s&&Kt(n,"has",i),Kt(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function Er(i,e=!1){return i=i.__v_raw,!e&&Kt($e(i),"iterate",Ii),Reflect.get(i,"size",i)}function cc(i){i=$e(i);const e=$e(this);return So(e).has.call(e,i)||(e.add(i),Hn(e,"add",i,i)),this}function uc(i,e){e=$e(e);const t=$e(this),{has:n,get:s}=So(t);let r=n.call(t,i);r||(i=$e(i),r=n.call(t,i));const o=s.call(t,i);return t.set(i,e),r?sr(e,o)&&Hn(t,"set",i,e):Hn(t,"add",i,e),this}function hc(i){const e=$e(this),{has:t,get:n}=So(e);let s=t.call(e,i);s||(i=$e(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&Hn(e,"delete",i,void 0),r}function fc(){const i=$e(this),e=i.size!==0,t=i.clear();return e&&Hn(i,"clear",void 0,void 0),t}function Ar(i,e){return function(n,s){const r=this,o=r.__v_raw,a=$e(o),l=e?El:i?Ll:rr;return!i&&Kt(a,"iterate",Ii),o.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function Cr(i,e,t){return function(...n){const s=this.__v_raw,r=$e(s),o=us(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?El:e?Ll:rr;return!e&&Kt(r,"iterate",l?Ha:Ii),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Wn(i){return function(...e){return i==="delete"?!1:this}}function qd(){const i={get(r){return wr(this,r)},get size(){return Er(this)},has:Tr,add:cc,set:uc,delete:hc,clear:fc,forEach:Ar(!1,!1)},e={get(r){return wr(this,r,!1,!0)},get size(){return Er(this)},has:Tr,add:cc,set:uc,delete:hc,clear:fc,forEach:Ar(!1,!0)},t={get(r){return wr(this,r,!0)},get size(){return Er(this,!0)},has(r){return Tr.call(this,r,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:Ar(!0,!1)},n={get(r){return wr(this,r,!0,!0)},get size(){return Er(this,!0)},has(r){return Tr.call(this,r,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:Ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=Cr(r,!1,!1),t[r]=Cr(r,!0,!1),e[r]=Cr(r,!1,!0),n[r]=Cr(r,!0,!0)}),[i,t,e,n]}const[Xd,Kd,Yd,$d]=qd();function Al(i,e){const t=e?i?$d:Yd:i?Kd:Xd;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(We(t,s)&&s in n?t:n,s,r)}const Jd={get:Al(!1,!1)},Zd={get:Al(!1,!0)},Qd={get:Al(!0,!1)},kh=new WeakMap,Vh=new WeakMap,Hh=new WeakMap,ep=new WeakMap;function tp(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function np(i){return i.__v_skip||!Object.isExtensible(i)?0:tp(Ed(i))}function Gi(i){return xs(i)?i:Cl(i,!1,Bh,Jd,kh)}function ip(i){return Cl(i,!1,jd,Zd,Vh)}function Gh(i){return Cl(i,!0,Wd,Qd,Hh)}function Cl(i,e,t,n,s){if(!at(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=np(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function hs(i){return xs(i)?hs(i.__v_raw):!!(i&&i.__v_isReactive)}function xs(i){return!!(i&&i.__v_isReadonly)}function ho(i){return!!(i&&i.__v_isShallow)}function Wh(i){return hs(i)||xs(i)}function $e(i){const e=i&&i.__v_raw;return e?$e(e):i}function jh(i){return uo(i,"__v_skip",!0),i}const rr=i=>at(i)?Gi(i):i,Ll=i=>at(i)?Gh(i):i;function qh(i){ri&&un&&(i=$e(i),Fh(i.dep||(i.dep=Sl())))}function Xh(i,e){i=$e(i),i.dep&&Ga(i.dep)}function Ct(i){return!!(i&&i.__v_isRef===!0)}function Wa(i){return sp(i,!1)}function sp(i,e){return Ct(i)?i:new rp(i,e)}class rp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:$e(e),this._value=t?e:rr(e)}get value(){return qh(this),this._value}set value(e){const t=this.__v_isShallow||ho(e)||xs(e);e=t?e:$e(e),sr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:rr(e),Xh(this))}}function ei(i){return Ct(i)?i.value:i}const op={get:(i,e,t)=>ei(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return Ct(s)&&!Ct(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function Kh(i){return hs(i)?i:new Proxy(i,op)}var Yh;class ap{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Yh]=!1,this._dirty=!0,this.effect=new wl(e,()=>{this._dirty||(this._dirty=!0,Xh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=$e(this);return qh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Yh="__v_isReadonly";function lp(i,e,t=!1){let n,s;const r=Fe(i);return r?(n=i,s=mn):(n=i.get,s=i.set),new ap(n,s,r||!s,t)}function oi(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){wo(r,e,t)}return s}function nn(i,e,t,n){if(Fe(i)){const r=oi(i,e,t,n);return r&&Ch(r)&&r.catch(o=>{wo(o,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(nn(i[r],e,t,n));return s}function wo(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){oi(l,null,10,[i,o,a]);return}}cp(i,t,s,n)}function cp(i,e,t,n=!0){console.error(i)}let or=!1,ja=!1;const At=[];let wn=0;const fs=[];let Un=null,Ai=0;const $h=Promise.resolve();let Rl=null;function up(i){const e=Rl||$h;return i?e.then(this?i.bind(this):i):e}function hp(i){let e=wn+1,t=At.length;for(;e<t;){const n=e+t>>>1;ar(At[n])<i?e=n+1:t=n}return e}function Pl(i){(!At.length||!At.includes(i,or&&i.allowRecurse?wn+1:wn))&&(i.id==null?At.push(i):At.splice(hp(i.id),0,i),Jh())}function Jh(){!or&&!ja&&(ja=!0,Rl=$h.then(Qh))}function fp(i){const e=At.indexOf(i);e>wn&&At.splice(e,1)}function dp(i){Ie(i)?fs.push(...i):(!Un||!Un.includes(i,i.allowRecurse?Ai+1:Ai))&&fs.push(i),Jh()}function dc(i,e=or?wn+1:0){for(;e<At.length;e++){const t=At[e];t&&t.pre&&(At.splice(e,1),e--,t())}}function Zh(i){if(fs.length){const e=[...new Set(fs)];if(fs.length=0,Un){Un.push(...e);return}for(Un=e,Un.sort((t,n)=>ar(t)-ar(n)),Ai=0;Ai<Un.length;Ai++)Un[Ai]();Un=null,Ai=0}}const ar=i=>i.id==null?1/0:i.id,pp=(i,e)=>{const t=ar(i)-ar(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Qh(i){ja=!1,or=!0,At.sort(pp);const e=mn;try{for(wn=0;wn<At.length;wn++){const t=At[wn];t&&t.active!==!1&&oi(t,null,14)}}finally{wn=0,At.length=0,Zh(),or=!1,Rl=null,(At.length||fs.length)&&Qh()}}function mp(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||ot;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||ot;f&&(s=t.map(p=>yt(p)?p.trim():p)),h&&(s=t.map(Dh))}let a,l=n[a=jo(e)]||n[a=jo(_s(e))];!l&&r&&(l=n[a=jo(Cs(e))]),l&&nn(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,nn(c,i,6,s)}}function ef(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Fe(i)){const l=c=>{const u=ef(c,e,!0);u&&(a=!0,Lt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(at(i)&&n.set(i,null),null):(Ie(r)?r.forEach(l=>o[l]=null):Lt(o,r),at(i)&&n.set(i,o),o)}function To(i,e){return!i||!yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(i,e[0].toLowerCase()+e.slice(1))||We(i,Cs(e))||We(i,e))}let fn=null,Eo=null;function fo(i){const e=fn;return fn=i,Eo=i&&i.type.__scopeId||null,e}function gp(i){Eo=i}function _p(){Eo=null}function xp(i,e=fn,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Mc(-1);const r=fo(e);let o;try{o=i(...s)}finally{fo(r),n._d&&Mc(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Xo(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:m}=i;let d,_;const w=fo(i);try{if(t.shapeFlag&4){const M=s||n;d=Mn(u.call(M,M,h,r,p,f,g)),_=l}else{const M=e;d=Mn(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),_=e.props?l:vp(l)}}catch(M){Qs.length=0,wo(M,i,1),d=kt(gn)}let y=d;if(_&&m!==!1){const M=Object.keys(_),{shapeFlag:S}=y;M.length&&S&7&&(o&&M.some(vl)&&(_=yp(_,o)),y=ci(y,_))}return t.dirs&&(y=ci(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),d=y,fo(w),d}const vp=i=>{let e;for(const t in i)(t==="class"||t==="style"||yo(t))&&((e||(e={}))[t]=i[t]);return e},yp=(i,e)=>{const t={};for(const n in i)(!vl(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function bp(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?pc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!To(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?pc(n,o,c):!0:!!o;return!1}function pc(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!To(t,r))return!0}return!1}function Mp({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Sp=i=>i.__isSuspense;function wp(i,e){e&&e.pendingBranch?Ie(i)?e.effects.push(...i):e.effects.push(i):dp(i)}function Tp(i,e){if(Mt){let t=Mt.provides;const n=Mt.parent&&Mt.parent.provides;n===t&&(t=Mt.provides=Object.create(n)),t[i]=e}}function ro(i,e,t=!1){const n=Mt||fn;if(n){const s=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Fe(e)?e.call(n.proxy):e}}const Lr={};function ds(i,e,t){return tf(i,e,t)}function tf(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:o}=ot){const a=Mt;let l,c=!1,u=!1;if(Ct(i)?(l=()=>i.value,c=ho(i)):hs(i)?(l=()=>i,n=!0):Ie(i)?(u=!0,c=i.some(y=>hs(y)||ho(y)),l=()=>i.map(y=>{if(Ct(y))return y.value;if(hs(y))return as(y);if(Fe(y))return oi(y,a,2)})):Fe(i)?e?l=()=>oi(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),nn(i,a,3,[f])}:l=mn,e&&n){const y=l;l=()=>as(y())}let h,f=y=>{h=_.onStop=()=>{oi(y,a,4)}},p;if(cr)if(f=mn,e?t&&nn(e,a,3,[l(),u?[]:void 0,f]):l(),s==="sync"){const y=bm();p=y.__watcherHandles||(y.__watcherHandles=[])}else return mn;let g=u?new Array(i.length).fill(Lr):Lr;const m=()=>{if(!!_.active)if(e){const y=_.run();(n||c||(u?y.some((M,S)=>sr(M,g[S])):sr(y,g)))&&(h&&h(),nn(e,a,3,[y,g===Lr?void 0:u&&g[0]===Lr?[]:g,f]),g=y)}else _.run()};m.allowRecurse=!!e;let d;s==="sync"?d=m:s==="post"?d=()=>zt(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),d=()=>Pl(m));const _=new wl(l,d);e?t?m():g=_.run():s==="post"?zt(_.run.bind(_),a&&a.suspense):_.run();const w=()=>{_.stop(),a&&a.scope&&yl(a.scope.effects,_)};return p&&p.push(w),w}function Ep(i,e,t){const n=this.proxy,s=yt(i)?i.includes(".")?nf(n,i):()=>n[i]:i.bind(n,n);let r;Fe(e)?r=e:(r=e.handler,t=e);const o=Mt;vs(this);const a=tf(s,r.bind(n),t);return o?vs(o):Ni(),a}function nf(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function as(i,e){if(!at(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Ct(i))as(i.value,e);else if(Ie(i))for(let t=0;t<i.length;t++)as(i[t],e);else if(Ah(i)||us(i))i.forEach(t=>{as(t,e)});else if(Rh(i))for(const t in i)as(i[t],e);return i}function Ap(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xr(()=>{i.isMounted=!0}),af(()=>{i.isUnmounting=!0}),i}const $t=[Function,Array],Cp={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},setup(i,{slots:e}){const t=dm(),n=Ap();let s;return()=>{const r=e.default&&rf(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const m of r)if(m.type!==gn){o=m;break}}const a=$e(i),{mode:l}=a;if(n.isLeaving)return Ko(o);const c=mc(o);if(!c)return Ko(o);const u=qa(c,a,n,t);Xa(c,u);const h=t.subTree,f=h&&mc(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();s===void 0?s=m:m!==s&&(s=m,p=!0)}if(f&&f.type!==gn&&(!Ci(c,f)||p)){const m=qa(f,a,n,t);if(Xa(f,m),l==="out-in")return n.isLeaving=!0,m.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},Ko(o);l==="in-out"&&c.type!==gn&&(m.delayLeave=(d,_,w)=>{const y=sf(n,f);y[String(f.key)]=f,d._leaveCb=()=>{_(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},Lp=Cp;function sf(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function qa(i,e,t,n){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:d,onAfterAppear:_,onAppearCancelled:w}=e,y=String(i.key),M=sf(t,i),S=(x,L)=>{x&&nn(x,n,9,L)},R=(x,L)=>{const I=L[1];S(x,L),Ie(x)?x.every(X=>X.length<=1)&&I():x.length<=1&&I()},N={mode:r,persisted:o,beforeEnter(x){let L=a;if(!t.isMounted)if(s)L=m||a;else return;x._leaveCb&&x._leaveCb(!0);const I=M[y];I&&Ci(i,I)&&I.el._leaveCb&&I.el._leaveCb(),S(L,[x])},enter(x){let L=l,I=c,X=u;if(!t.isMounted)if(s)L=d||l,I=_||c,X=w||u;else return;let de=!1;const z=x._enterCb=O=>{de||(de=!0,O?S(X,[x]):S(I,[x]),N.delayedLeave&&N.delayedLeave(),x._enterCb=void 0)};L?R(L,[x,z]):z()},leave(x,L){const I=String(i.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return L();S(h,[x]);let X=!1;const de=x._leaveCb=z=>{X||(X=!0,L(),z?S(g,[x]):S(p,[x]),x._leaveCb=void 0,M[I]===i&&delete M[I])};M[I]=i,f?R(f,[x,de]):de()},clone(x){return qa(x,e,t,n)}};return N}function Ko(i){if(Co(i))return i=ci(i),i.children=null,i}function mc(i){return Co(i)?i.children?i.children[0]:void 0:i}function Xa(i,e){i.shapeFlag&6&&i.component?Xa(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function rf(i,e=!1,t){let n=[],s=0;for(let r=0;r<i.length;r++){let o=i[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===cn?(o.patchFlag&128&&s++,n=n.concat(rf(o.children,e,a))):(e||o.type!==gn)&&n.push(a!=null?ci(o,{key:a}):o)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Ao(i){return Fe(i)?{setup:i,name:i.name}:i}const oo=i=>!!i.type.__asyncLoader,Co=i=>i.type.__isKeepAlive;function Rp(i,e){of(i,"a",e)}function Pp(i,e){of(i,"da",e)}function of(i,e,t=Mt){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(Lo(e,n,t),t){let s=t.parent;for(;s&&s.parent;)Co(s.parent.vnode)&&Dp(n,e,t,s),s=s.parent}}function Dp(i,e,t,n){const s=Lo(e,i,n,!0);vr(()=>{yl(n[e],s)},t)}function Lo(i,e,t=Mt,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ls(),vs(t);const a=nn(e,t,i,o);return Ni(),Rs(),a});return n?s.unshift(r):s.push(r),r}}const Gn=i=>(e,t=Mt)=>(!cr||i==="sp")&&Lo(i,(...n)=>e(...n),t),Ip=Gn("bm"),xr=Gn("m"),Np=Gn("bu"),Op=Gn("u"),af=Gn("bum"),vr=Gn("um"),Fp=Gn("sp"),Up=Gn("rtg"),zp=Gn("rtc");function Bp(i,e=Mt){Lo("ec",i,e)}function mi(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Ls(),nn(l,t,8,[i.el,a,i,e]),Rs())}}const kp=Symbol(),Ka=i=>i?vf(i)?Ol(i)||i.proxy:Ka(i.parent):null,Zs=Lt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Ka(i.parent),$root:i=>Ka(i.root),$emit:i=>i.emit,$options:i=>Dl(i),$forceUpdate:i=>i.f||(i.f=()=>Pl(i.update)),$nextTick:i=>i.n||(i.n=up.bind(i.proxy)),$watch:i=>Ep.bind(i)}),Yo=(i,e)=>i!==ot&&!i.__isScriptSetup&&We(i,e),Vp={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Yo(n,e))return o[e]=1,n[e];if(s!==ot&&We(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&We(c,e))return o[e]=3,r[e];if(t!==ot&&We(t,e))return o[e]=4,t[e];Ya&&(o[e]=0)}}const u=Zs[e];let h,f;if(u)return e==="$attrs"&&Kt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ot&&We(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,We(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return Yo(s,e)?(s[e]=t,!0):n!==ot&&We(n,e)?(n[e]=t,!0):We(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==ot&&We(i,o)||Yo(e,o)||(a=r[0])&&We(a,o)||We(n,o)||We(Zs,o)||We(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:We(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let Ya=!0;function Hp(i){const e=Dl(i),t=i.proxy,n=i.ctx;Ya=!1,e.beforeCreate&&gc(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:w,destroyed:y,unmounted:M,render:S,renderTracked:R,renderTriggered:N,errorCaptured:x,serverPrefetch:L,expose:I,inheritAttrs:X,components:de,directives:z,filters:O}=e;if(c&&Gp(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const ee in o){const B=o[ee];Fe(B)&&(n[ee]=B.bind(t))}if(s){const ee=s.call(t,t);at(ee)&&(i.data=Gi(ee))}if(Ya=!0,r)for(const ee in r){const B=r[ee],ue=Fe(B)?B.bind(t,t):Fe(B.get)?B.get.bind(t,t):mn,oe=!Fe(B)&&Fe(B.set)?B.set.bind(t):mn,H=vm({get:ue,set:oe});Object.defineProperty(n,ee,{enumerable:!0,configurable:!0,get:()=>H.value,set:G=>H.value=G})}if(a)for(const ee in a)lf(a[ee],n,t,ee);if(l){const ee=Fe(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(B=>{Tp(B,ee[B])})}u&&gc(u,i,"c");function ie(ee,B){Ie(B)?B.forEach(ue=>ee(ue.bind(t))):B&&ee(B.bind(t))}if(ie(Ip,h),ie(xr,f),ie(Np,p),ie(Op,g),ie(Rp,m),ie(Pp,d),ie(Bp,x),ie(zp,R),ie(Up,N),ie(af,w),ie(vr,M),ie(Fp,L),Ie(I))if(I.length){const ee=i.exposed||(i.exposed={});I.forEach(B=>{Object.defineProperty(ee,B,{get:()=>t[B],set:ue=>t[B]=ue})})}else i.exposed||(i.exposed={});S&&i.render===mn&&(i.render=S),X!=null&&(i.inheritAttrs=X),de&&(i.components=de),z&&(i.directives=z)}function Gp(i,e,t=mn,n=!1){Ie(i)&&(i=$a(i));for(const s in i){const r=i[s];let o;at(r)?"default"in r?o=ro(r.from||s,r.default,!0):o=ro(r.from||s):o=ro(r),Ct(o)&&n?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function gc(i,e,t){nn(Ie(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function lf(i,e,t,n){const s=n.includes(".")?nf(t,n):()=>t[n];if(yt(i)){const r=e[i];Fe(r)&&ds(s,r)}else if(Fe(i))ds(s,i.bind(t));else if(at(i))if(Ie(i))i.forEach(r=>lf(r,e,t,n));else{const r=Fe(i.handler)?i.handler.bind(t):e[i.handler];Fe(r)&&ds(s,r,i)}}function Dl(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>po(l,c,o,!0)),po(l,e,o)),at(e)&&r.set(e,l),l}function po(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&po(i,r,t,!0),s&&s.forEach(o=>po(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Wp[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Wp={data:_c,props:wi,emits:wi,methods:wi,computed:wi,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:wi,directives:wi,watch:qp,provide:_c,inject:jp};function _c(i,e){return e?i?function(){return Lt(Fe(i)?i.call(this,this):i,Fe(e)?e.call(this,this):e)}:e:i}function jp(i,e){return wi($a(i),$a(e))}function $a(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function It(i,e){return i?[...new Set([].concat(i,e))]:e}function wi(i,e){return i?Lt(Lt(Object.create(null),i),e):e}function qp(i,e){if(!i)return e;if(!e)return i;const t=Lt(Object.create(null),i);for(const n in e)t[n]=It(i[n],e[n]);return t}function Xp(i,e,t,n=!1){const s={},r={};uo(r,Po,1),i.propsDefaults=Object.create(null),cf(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:ip(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Kp(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=$e(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(To(i.emitsOptions,f))continue;const p=e[f];if(l)if(We(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=_s(f);s[g]=Ja(l,a,g,p,i,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{cf(i,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!We(e,h)&&((u=Cs(h))===h||!We(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Ja(l,a,h,void 0,i,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!We(e,h)&&!0)&&(delete r[h],c=!0)}c&&Hn(i,"set","$attrs")}function cf(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(so(l))continue;const c=e[l];let u;s&&We(s,u=_s(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:To(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=$e(t),c=a||ot;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Ja(s,l,h,c[h],i,!We(c,h))}}return o}function Ja(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=We(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Fe(l)){const{propsDefaults:c}=s;t in c?n=c[t]:(vs(s),n=c[t]=l.call(null,e),Ni())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Cs(t))&&(n=!0))}return n}function uf(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Fe(i)){const u=h=>{l=!0;const[f,p]=uf(h,e,!0);Lt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return at(i)&&n.set(i,cs),cs;if(Ie(r))for(let u=0;u<r.length;u++){const h=_s(r[u]);xc(h)&&(o[h]=ot)}else if(r)for(const u in r){const h=_s(u);if(xc(h)){const f=r[u],p=o[h]=Ie(f)||Fe(f)?{type:f}:Object.assign({},f);if(p){const g=bc(Boolean,p.type),m=bc(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||We(p,"default"))&&a.push(h)}}}const c=[o,a];return at(i)&&n.set(i,c),c}function xc(i){return i[0]!=="$"}function vc(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function yc(i,e){return vc(i)===vc(e)}function bc(i,e){return Ie(e)?e.findIndex(t=>yc(t,i)):Fe(e)&&yc(e,i)?0:-1}const hf=i=>i[0]==="_"||i==="$stable",Il=i=>Ie(i)?i.map(Mn):[Mn(i)],Yp=(i,e,t)=>{if(e._n)return e;const n=xp((...s)=>Il(e(...s)),t);return n._c=!1,n},ff=(i,e,t)=>{const n=i._ctx;for(const s in i){if(hf(s))continue;const r=i[s];if(Fe(r))e[s]=Yp(s,r,n);else if(r!=null){const o=Il(r);e[s]=()=>o}}},df=(i,e)=>{const t=Il(e);i.slots.default=()=>t},$p=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=$e(e),uo(e,"_",t)):ff(e,i.slots={})}else i.slots={},e&&df(i,e);uo(i.slots,Po,1)},Jp=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=ot;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Lt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,ff(e,s)),o=e}else e&&(df(i,e),o={default:1});if(r)for(const a in s)!hf(a)&&!(a in o)&&delete s[a]};function pf(){return{app:null,config:{isNativeTag:Sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zp=0;function Qp(i,e){return function(n,s=null){Fe(n)||(n=Object.assign({},n)),s!=null&&!at(s)&&(s=null);const r=pf(),o=new Set;let a=!1;const l=r.app={_uid:Zp++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Mm,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Fe(c.install)?(o.add(c),c.install(l,...u)):Fe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=kt(n,s);return f.appContext=r,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Ol(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Za(i,e,t,n,s=!1){if(Ie(i)){i.forEach((f,p)=>Za(f,e&&(Ie(e)?e[p]:e),t,n,s));return}if(oo(n)&&!s)return;const r=n.shapeFlag&4?Ol(n.component)||n.component.proxy:n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===ot?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(yt(c)?(u[c]=null,We(h,c)&&(h[c]=null)):Ct(c)&&(c.value=null)),Fe(l))oi(l,a,12,[o,u]);else{const f=yt(l),p=Ct(l);if(f||p){const g=()=>{if(i.f){const m=f?We(h,l)?h[l]:u[l]:l.value;s?Ie(m)&&yl(m,r):Ie(m)?m.includes(r)||m.push(r):f?(u[l]=[r],We(h,l)&&(h[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,We(h,l)&&(h[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,zt(g,t)):g()}}}const zt=wp;function em(i){return tm(i)}function tm(i,e){const t=Ld();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=mn,insertStaticContent:g}=i,m=(E,C,k,J=null,$=null,se=null,le=!1,te=null,fe=!!C.dynamicChildren)=>{if(E===C)return;E&&!Ci(E,C)&&(J=Ue(E),G(E,$,se,!0),E=null),C.patchFlag===-2&&(fe=!1,C.dynamicChildren=null);const{type:ne,ref:b,shapeFlag:v}=C;switch(ne){case Ro:d(E,C,k,J);break;case gn:_(E,C,k,J);break;case $o:E==null&&w(C,k,J,le);break;case cn:de(E,C,k,J,$,se,le,te,fe);break;default:v&1?S(E,C,k,J,$,se,le,te,fe):v&6?z(E,C,k,J,$,se,le,te,fe):(v&64||v&128)&&ne.process(E,C,k,J,$,se,le,te,fe,Ae)}b!=null&&$&&Za(b,E&&E.ref,se,C||E,!C)},d=(E,C,k,J)=>{if(E==null)n(C.el=a(C.children),k,J);else{const $=C.el=E.el;C.children!==E.children&&c($,C.children)}},_=(E,C,k,J)=>{E==null?n(C.el=l(C.children||""),k,J):C.el=E.el},w=(E,C,k,J)=>{[E.el,E.anchor]=g(E.children,C,k,J,E.el,E.anchor)},y=({el:E,anchor:C},k,J)=>{let $;for(;E&&E!==C;)$=f(E),n(E,k,J),E=$;n(C,k,J)},M=({el:E,anchor:C})=>{let k;for(;E&&E!==C;)k=f(E),s(E),E=k;s(C)},S=(E,C,k,J,$,se,le,te,fe)=>{le=le||C.type==="svg",E==null?R(C,k,J,$,se,le,te,fe):L(E,C,$,se,le,te,fe)},R=(E,C,k,J,$,se,le,te)=>{let fe,ne;const{type:b,props:v,shapeFlag:D,transition:V,dirs:Z}=E;if(fe=E.el=o(E.type,se,v&&v.is,v),D&8?u(fe,E.children):D&16&&x(E.children,fe,null,J,$,se&&b!=="foreignObject",le,te),Z&&mi(E,null,J,"created"),v){for(const ge in v)ge!=="value"&&!so(ge)&&r(fe,ge,null,v[ge],se,E.children,J,$,W);"value"in v&&r(fe,"value",null,v.value),(ne=v.onVnodeBeforeMount)&&vn(ne,J,E)}N(fe,E,E.scopeId,le,J),Z&&mi(E,null,J,"beforeMount");const re=(!$||$&&!$.pendingBranch)&&V&&!V.persisted;re&&V.beforeEnter(fe),n(fe,C,k),((ne=v&&v.onVnodeMounted)||re||Z)&&zt(()=>{ne&&vn(ne,J,E),re&&V.enter(fe),Z&&mi(E,null,J,"mounted")},$)},N=(E,C,k,J,$)=>{if(k&&p(E,k),J)for(let se=0;se<J.length;se++)p(E,J[se]);if($){let se=$.subTree;if(C===se){const le=$.vnode;N(E,le,le.scopeId,le.slotScopeIds,$.parent)}}},x=(E,C,k,J,$,se,le,te,fe=0)=>{for(let ne=fe;ne<E.length;ne++){const b=E[ne]=te?ti(E[ne]):Mn(E[ne]);m(null,b,C,k,J,$,se,le,te)}},L=(E,C,k,J,$,se,le)=>{const te=C.el=E.el;let{patchFlag:fe,dynamicChildren:ne,dirs:b}=C;fe|=E.patchFlag&16;const v=E.props||ot,D=C.props||ot;let V;k&&gi(k,!1),(V=D.onVnodeBeforeUpdate)&&vn(V,k,C,E),b&&mi(C,E,k,"beforeUpdate"),k&&gi(k,!0);const Z=$&&C.type!=="foreignObject";if(ne?I(E.dynamicChildren,ne,te,k,J,Z,se):le||B(E,C,te,null,k,J,Z,se,!1),fe>0){if(fe&16)X(te,C,v,D,k,J,$);else if(fe&2&&v.class!==D.class&&r(te,"class",null,D.class,$),fe&4&&r(te,"style",v.style,D.style,$),fe&8){const re=C.dynamicProps;for(let ge=0;ge<re.length;ge++){const he=re[ge],j=v[he],we=D[he];(we!==j||he==="value")&&r(te,he,j,we,$,E.children,k,J,W)}}fe&1&&E.children!==C.children&&u(te,C.children)}else!le&&ne==null&&X(te,C,v,D,k,J,$);((V=D.onVnodeUpdated)||b)&&zt(()=>{V&&vn(V,k,C,E),b&&mi(C,E,k,"updated")},J)},I=(E,C,k,J,$,se,le)=>{for(let te=0;te<C.length;te++){const fe=E[te],ne=C[te],b=fe.el&&(fe.type===cn||!Ci(fe,ne)||fe.shapeFlag&70)?h(fe.el):k;m(fe,ne,b,null,J,$,se,le,!0)}},X=(E,C,k,J,$,se,le)=>{if(k!==J){if(k!==ot)for(const te in k)!so(te)&&!(te in J)&&r(E,te,k[te],null,le,C.children,$,se,W);for(const te in J){if(so(te))continue;const fe=J[te],ne=k[te];fe!==ne&&te!=="value"&&r(E,te,ne,fe,le,C.children,$,se,W)}"value"in J&&r(E,"value",k.value,J.value)}},de=(E,C,k,J,$,se,le,te,fe)=>{const ne=C.el=E?E.el:a(""),b=C.anchor=E?E.anchor:a("");let{patchFlag:v,dynamicChildren:D,slotScopeIds:V}=C;V&&(te=te?te.concat(V):V),E==null?(n(ne,k,J),n(b,k,J),x(C.children,k,b,$,se,le,te,fe)):v>0&&v&64&&D&&E.dynamicChildren?(I(E.dynamicChildren,D,k,$,se,le,te),(C.key!=null||$&&C===$.subTree)&&mf(E,C,!0)):B(E,C,k,b,$,se,le,te,fe)},z=(E,C,k,J,$,se,le,te,fe)=>{C.slotScopeIds=te,E==null?C.shapeFlag&512?$.ctx.activate(C,k,J,le,fe):O(C,k,J,$,se,le,fe):Y(E,C,fe)},O=(E,C,k,J,$,se,le)=>{const te=E.component=fm(E,J,$);if(Co(E)&&(te.ctx.renderer=Ae),pm(te),te.asyncDep){if($&&$.registerDep(te,ie),!E.el){const fe=te.subTree=kt(gn);_(null,fe,C,k)}return}ie(te,E,C,k,$,se,le)},Y=(E,C,k)=>{const J=C.component=E.component;if(bp(E,C,k))if(J.asyncDep&&!J.asyncResolved){ee(J,C,k);return}else J.next=C,fp(J.update),J.update();else C.el=E.el,J.vnode=C},ie=(E,C,k,J,$,se,le)=>{const te=()=>{if(E.isMounted){let{next:b,bu:v,u:D,parent:V,vnode:Z}=E,re=b,ge;gi(E,!1),b?(b.el=Z.el,ee(E,b,le)):b=Z,v&&qo(v),(ge=b.props&&b.props.onVnodeBeforeUpdate)&&vn(ge,V,b,Z),gi(E,!0);const he=Xo(E),j=E.subTree;E.subTree=he,m(j,he,h(j.el),Ue(j),E,$,se),b.el=he.el,re===null&&Mp(E,he.el),D&&zt(D,$),(ge=b.props&&b.props.onVnodeUpdated)&&zt(()=>vn(ge,V,b,Z),$)}else{let b;const{el:v,props:D}=C,{bm:V,m:Z,parent:re}=E,ge=oo(C);if(gi(E,!1),V&&qo(V),!ge&&(b=D&&D.onVnodeBeforeMount)&&vn(b,re,C),gi(E,!0),v&&Xe){const he=()=>{E.subTree=Xo(E),Xe(v,E.subTree,E,$,null)};ge?C.type.__asyncLoader().then(()=>!E.isUnmounted&&he()):he()}else{const he=E.subTree=Xo(E);m(null,he,k,J,E,$,se),C.el=he.el}if(Z&&zt(Z,$),!ge&&(b=D&&D.onVnodeMounted)){const he=C;zt(()=>vn(b,re,he),$)}(C.shapeFlag&256||re&&oo(re.vnode)&&re.vnode.shapeFlag&256)&&E.a&&zt(E.a,$),E.isMounted=!0,C=k=J=null}},fe=E.effect=new wl(te,()=>Pl(ne),E.scope),ne=E.update=()=>fe.run();ne.id=E.uid,gi(E,!0),ne()},ee=(E,C,k)=>{C.component=E;const J=E.vnode.props;E.vnode=C,E.next=null,Kp(E,C.props,J,k),Jp(E,C.children,k),Ls(),dc(),Rs()},B=(E,C,k,J,$,se,le,te,fe=!1)=>{const ne=E&&E.children,b=E?E.shapeFlag:0,v=C.children,{patchFlag:D,shapeFlag:V}=C;if(D>0){if(D&128){oe(ne,v,k,J,$,se,le,te,fe);return}else if(D&256){ue(ne,v,k,J,$,se,le,te,fe);return}}V&8?(b&16&&W(ne,$,se),v!==ne&&u(k,v)):b&16?V&16?oe(ne,v,k,J,$,se,le,te,fe):W(ne,$,se,!0):(b&8&&u(k,""),V&16&&x(v,k,J,$,se,le,te,fe))},ue=(E,C,k,J,$,se,le,te,fe)=>{E=E||cs,C=C||cs;const ne=E.length,b=C.length,v=Math.min(ne,b);let D;for(D=0;D<v;D++){const V=C[D]=fe?ti(C[D]):Mn(C[D]);m(E[D],V,k,null,$,se,le,te,fe)}ne>b?W(E,$,se,!0,!1,v):x(C,k,J,$,se,le,te,fe,v)},oe=(E,C,k,J,$,se,le,te,fe)=>{let ne=0;const b=C.length;let v=E.length-1,D=b-1;for(;ne<=v&&ne<=D;){const V=E[ne],Z=C[ne]=fe?ti(C[ne]):Mn(C[ne]);if(Ci(V,Z))m(V,Z,k,null,$,se,le,te,fe);else break;ne++}for(;ne<=v&&ne<=D;){const V=E[v],Z=C[D]=fe?ti(C[D]):Mn(C[D]);if(Ci(V,Z))m(V,Z,k,null,$,se,le,te,fe);else break;v--,D--}if(ne>v){if(ne<=D){const V=D+1,Z=V<b?C[V].el:J;for(;ne<=D;)m(null,C[ne]=fe?ti(C[ne]):Mn(C[ne]),k,Z,$,se,le,te,fe),ne++}}else if(ne>D)for(;ne<=v;)G(E[ne],$,se,!0),ne++;else{const V=ne,Z=ne,re=new Map;for(ne=Z;ne<=D;ne++){const xe=C[ne]=fe?ti(C[ne]):Mn(C[ne]);xe.key!=null&&re.set(xe.key,ne)}let ge,he=0;const j=D-Z+1;let we=!1,Le=0;const be=new Array(j);for(ne=0;ne<j;ne++)be[ne]=0;for(ne=V;ne<=v;ne++){const xe=E[ne];if(he>=j){G(xe,$,se,!0);continue}let Pe;if(xe.key!=null)Pe=re.get(xe.key);else for(ge=Z;ge<=D;ge++)if(be[ge-Z]===0&&Ci(xe,C[ge])){Pe=ge;break}Pe===void 0?G(xe,$,se,!0):(be[Pe-Z]=ne+1,Pe>=Le?Le=Pe:we=!0,m(xe,C[Pe],k,null,$,se,le,te,fe),he++)}const Ee=we?nm(be):cs;for(ge=Ee.length-1,ne=j-1;ne>=0;ne--){const xe=Z+ne,Pe=C[xe],tt=xe+1<b?C[xe+1].el:J;be[ne]===0?m(null,Pe,k,tt,$,se,le,te,fe):we&&(ge<0||ne!==Ee[ge]?H(Pe,k,tt,2):ge--)}}},H=(E,C,k,J,$=null)=>{const{el:se,type:le,transition:te,children:fe,shapeFlag:ne}=E;if(ne&6){H(E.component.subTree,C,k,J);return}if(ne&128){E.suspense.move(C,k,J);return}if(ne&64){le.move(E,C,k,Ae);return}if(le===cn){n(se,C,k);for(let v=0;v<fe.length;v++)H(fe[v],C,k,J);n(E.anchor,C,k);return}if(le===$o){y(E,C,k);return}if(J!==2&&ne&1&&te)if(J===0)te.beforeEnter(se),n(se,C,k),zt(()=>te.enter(se),$);else{const{leave:v,delayLeave:D,afterLeave:V}=te,Z=()=>n(se,C,k),re=()=>{v(se,()=>{Z(),V&&V()})};D?D(se,Z,re):re()}else n(se,C,k)},G=(E,C,k,J=!1,$=!1)=>{const{type:se,props:le,ref:te,children:fe,dynamicChildren:ne,shapeFlag:b,patchFlag:v,dirs:D}=E;if(te!=null&&Za(te,null,k,E,!0),b&256){C.ctx.deactivate(E);return}const V=b&1&&D,Z=!oo(E);let re;if(Z&&(re=le&&le.onVnodeBeforeUnmount)&&vn(re,C,E),b&6)_e(E.component,k,J);else{if(b&128){E.suspense.unmount(k,J);return}V&&mi(E,null,C,"beforeUnmount"),b&64?E.type.remove(E,C,k,$,Ae,J):ne&&(se!==cn||v>0&&v&64)?W(ne,C,k,!1,!0):(se===cn&&v&384||!$&&b&16)&&W(fe,C,k),J&&ae(E)}(Z&&(re=le&&le.onVnodeUnmounted)||V)&&zt(()=>{re&&vn(re,C,E),V&&mi(E,null,C,"unmounted")},k)},ae=E=>{const{type:C,el:k,anchor:J,transition:$}=E;if(C===cn){pe(k,J);return}if(C===$o){M(E);return}const se=()=>{s(k),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(E.shapeFlag&1&&$&&!$.persisted){const{leave:le,delayLeave:te}=$,fe=()=>le(k,se);te?te(E.el,se,fe):fe()}else se()},pe=(E,C)=>{let k;for(;E!==C;)k=f(E),s(E),E=k;s(C)},_e=(E,C,k)=>{const{bum:J,scope:$,update:se,subTree:le,um:te}=E;J&&qo(J),$.stop(),se&&(se.active=!1,G(le,E,C,k)),te&&zt(te,C),zt(()=>{E.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},W=(E,C,k,J=!1,$=!1,se=0)=>{for(let le=se;le<E.length;le++)G(E[le],C,k,J,$)},Ue=E=>E.shapeFlag&6?Ue(E.component.subTree):E.shapeFlag&128?E.suspense.next():f(E.anchor||E.el),Se=(E,C,k)=>{E==null?C._vnode&&G(C._vnode,null,null,!0):m(C._vnode||null,E,C,null,null,null,k),dc(),Zh(),C._vnode=E},Ae={p:m,um:G,m:H,r:ae,mt:O,mc:x,pc:B,pbc:I,n:Ue,o:i};let ye,Xe;return e&&([ye,Xe]=e(Ae)),{render:Se,hydrate:ye,createApp:Qp(Se,ye)}}function gi({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function mf(i,e,t=!1){const n=i.children,s=e.children;if(Ie(n)&&Ie(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ti(s[r]),a.el=o.el),t||mf(o,a)),a.type===Ro&&(a.el=o.el)}}function nm(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const im=i=>i.__isTeleport,cn=Symbol(void 0),Ro=Symbol(void 0),gn=Symbol(void 0),$o=Symbol(void 0),Qs=[];let dn=null;function hn(i=!1){Qs.push(dn=i?null:[])}function sm(){Qs.pop(),dn=Qs[Qs.length-1]||null}let lr=1;function Mc(i){lr+=i}function gf(i){return i.dynamicChildren=lr>0?dn||cs:null,sm(),lr>0&&dn&&dn.push(i),i}function Tn(i,e,t,n,s,r){return gf(vt(i,e,t,n,s,r,!0))}function rm(i,e,t,n,s){return gf(kt(i,e,t,n,s,!0))}function om(i){return i?i.__v_isVNode===!0:!1}function Ci(i,e){return i.type===e.type&&i.key===e.key}const Po="__vInternal",_f=({key:i})=>i??null,ao=({ref:i,ref_key:e,ref_for:t})=>i!=null?yt(i)||Ct(i)||Fe(i)?{i:fn,r:i,k:e,f:!!t}:i:null;function vt(i,e=null,t=null,n=0,s=null,r=i===cn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&_f(e),ref:e&&ao(e),scopeId:Eo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:fn};return a?(Nl(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=yt(t)?8:16),lr>0&&!o&&dn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&dn.push(l),l}const kt=am;function am(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===kp)&&(i=gn),om(i)){const a=ci(i,e,!0);return t&&Nl(a,t),lr>0&&!r&&dn&&(a.shapeFlag&6?dn[dn.indexOf(i)]=a:dn.push(a)),a.patchFlag|=-2,a}if(xm(i)&&(i=i.__vccOpts),e){e=lm(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=xl(a)),at(l)&&(Wh(l)&&!Ie(l)&&(l=Lt({},l)),e.style=vo(l))}const o=yt(i)?1:Sp(i)?128:im(i)?64:at(i)?4:Fe(i)?2:0;return vt(i,e,t,n,s,o,r,!0)}function lm(i){return i?Wh(i)||Po in i?Lt({},i):i:null}function ci(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:o}=i,a=e?cm(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&_f(a),ref:e&&e.ref?t&&s?Ie(s)?s.concat(ao(e)):[s,ao(e)]:ao(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==cn?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&ci(i.ssContent),ssFallback:i.ssFallback&&ci(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx}}function xf(i=" ",e=0){return kt(Ro,null,i,e)}function Rr(i="",e=!1){return e?(hn(),rm(gn,null,i)):kt(gn,null,i)}function Mn(i){return i==null||typeof i=="boolean"?kt(gn):Ie(i)?kt(cn,null,i.slice()):typeof i=="object"?ti(i):kt(Ro,null,String(i))}function ti(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:ci(i)}function Nl(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),Nl(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Po in e)?e._ctx=fn:s===3&&fn&&(fn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:fn},t=32):(e=String(e),n&64?(t=16,e=[xf(e)]):t=8);i.children=e,i.shapeFlag|=t}function cm(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=xl([e.class,n.class]));else if(s==="style")e.style=vo([e.style,n.style]);else if(yo(s)){const r=e[s],o=n[s];o&&r!==o&&!(Ie(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function vn(i,e,t,n=null){nn(i,e,7,[t,n])}const um=pf();let hm=0;function fm(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||um,r={uid:hm++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uf(n,s),emitsOptions:ef(n,s),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:n.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=mp.bind(null,r),i.ce&&i.ce(r),r}let Mt=null;const dm=()=>Mt||fn,vs=i=>{Mt=i,i.scope.on()},Ni=()=>{Mt&&Mt.scope.off(),Mt=null};function vf(i){return i.vnode.shapeFlag&4}let cr=!1;function pm(i,e=!1){cr=e;const{props:t,children:n}=i.vnode,s=vf(i);Xp(i,t,s,e),$p(i,n);const r=s?mm(i,e):void 0;return cr=!1,r}function mm(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=jh(new Proxy(i.ctx,Vp));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?_m(i):null;vs(i),Ls();const r=oi(n,i,0,[i.props,s]);if(Rs(),Ni(),Ch(r)){if(r.then(Ni,Ni),e)return r.then(o=>{Sc(i,o,e)}).catch(o=>{wo(o,i,0)});i.asyncDep=r}else Sc(i,r,e)}else yf(i,e)}function Sc(i,e,t){Fe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:at(e)&&(i.setupState=Kh(e)),yf(i,t)}let wc;function yf(i,e,t){const n=i.type;if(!i.render){if(!e&&wc&&!n.render){const s=n.template||Dl(i).template;if(s){const{isCustomElement:r,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Lt(Lt({isCustomElement:r,delimiters:a},o),l);n.render=wc(s,c)}}i.render=n.render||mn}vs(i),Ls(),Hp(i),Rs(),Ni()}function gm(i){return new Proxy(i.attrs,{get(e,t){return Kt(i,"get","$attrs"),e[t]}})}function _m(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=gm(i))},slots:i.slots,emit:i.emit,expose:e}}function Ol(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Kh(jh(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Zs)return Zs[t](i)},has(e,t){return t in e||t in Zs}}))}function xm(i){return Fe(i)&&"__vccOpts"in i}const vm=(i,e)=>lp(i,e,cr),ym=Symbol(""),bm=()=>ro(ym),Mm="3.2.45",Sm="http://www.w3.org/2000/svg",Li=typeof document<"u"?document:null,Tc=Li&&Li.createElement("template"),wm={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?Li.createElementNS(Sm,i):Li.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>Li.createTextNode(i),createComment:i=>Li.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Li.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Tc.innerHTML=n?`<svg>${i}</svg>`:i;const a=Tc.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Tm(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function Em(i,e,t){const n=i.style,s=yt(t);if(t&&!s){for(const r in t)Qa(n,r,t[r]);if(e&&!yt(e))for(const r in e)t[r]==null&&Qa(n,r,"")}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const Ec=/\s*!important$/;function Qa(i,e,t){if(Ie(t))t.forEach(n=>Qa(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Am(i,e);Ec.test(t)?i.setProperty(Cs(n),t.replace(Ec,""),"important"):i[n]=t}}const Ac=["Webkit","Moz","ms"],Jo={};function Am(i,e){const t=Jo[e];if(t)return t;let n=_s(e);if(n!=="filter"&&n in i)return Jo[e]=n;n=Ph(n);for(let s=0;s<Ac.length;s++){const r=Ac[s]+n;if(r in i)return Jo[e]=r}return e}const Cc="http://www.w3.org/1999/xlink";function Cm(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Cc,e.slice(6,e.length)):i.setAttributeNS(Cc,e,t);else{const r=bd(e);t==null||r&&!Th(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function Lm(i,e,t,n,s,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,s,r),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Th(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function Rm(i,e,t,n){i.addEventListener(e,t,n)}function Pm(i,e,t,n){i.removeEventListener(e,t,n)}function Dm(i,e,t,n,s=null){const r=i._vei||(i._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=Im(e);if(n){const c=r[e]=Fm(n,s);Rm(i,a,c,l)}else o&&(Pm(i,a,o,l),r[e]=void 0)}}const Lc=/(?:Once|Passive|Capture)$/;function Im(i){let e;if(Lc.test(i)){e={};let n;for(;n=i.match(Lc);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Cs(i.slice(2)),e]}let Zo=0;const Nm=Promise.resolve(),Om=()=>Zo||(Nm.then(()=>Zo=0),Zo=Date.now());function Fm(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;nn(Um(n,t.value),e,5,[n])};return t.value=i,t.attached=Om(),t}function Um(i,e){if(Ie(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const Rc=/^on[a-z]/,zm=(i,e,t,n,s=!1,r,o,a,l)=>{e==="class"?Tm(i,n,s):e==="style"?Em(i,t,n):yo(e)?vl(e)||Dm(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bm(i,e,n,s))?Lm(i,e,n,r,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Cm(i,e,n,s))};function Bm(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Rc.test(e)&&Fe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Rc.test(e)&&yt(t)?!1:e in i}const km={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Lp.props;const Vm=Lt({patchProp:zm},wm);let Pc;function Hm(){return Pc||(Pc=em(Vm))}const Gm=(...i)=>{const e=Hm().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=Wm(n);if(!s)return;const r=e._component;!Fe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Wm(i){return yt(i)?document.querySelector(i):i}const jm={class:"slider"},qm=Ao({__name:"Slider",props:{modelValue:null},emits:["progressChange","update:modelValue"],setup(i,{emit:e}){const t=i,n=Wa(),s=Wa(),r=Gi({thumbOffset:0,totalThumbPixelSpace:0,progress:t.modelValue}),o=u=>{document.removeEventListener("mousemove",a)},a=u=>{var h,f,p,g;r.thumbOffset+u.movementX>((h=s.value)==null?void 0:h.offsetWidth)-((f=n.value)==null?void 0:f.offsetWidth)/2||r.thumbOffset+u.movementX<-((p=n.value)==null?void 0:p.offsetWidth)/2||(r.thumbOffset+=u.movementX,r.progress=(r.thumbOffset+((g=n.value)==null?void 0:g.offsetWidth)/2)/r.totalThumbPixelSpace,e("progressChange",r.progress),e("update:modelValue",r.progress))},l=u=>{u.target===n.value&&(document.addEventListener("mousemove",a),n.value.addEventListener("mouseleave",o))},c=u=>{document.removeEventListener("mousemove",a)};return xr(()=>{var u,h,f,p;document.addEventListener("mousedown",l),document.addEventListener("mouseup",c),r.thumbOffset=-((u=n.value)==null?void 0:u.offsetWidth)/2+ +((h=s.value)==null?void 0:h.offsetWidth)*t.modelValue,r.totalThumbPixelSpace=+((f=s.value)==null?void 0:f.offsetWidth),r.progress=(r.thumbOffset+((p=n.value)==null?void 0:p.offsetWidth)/2+r.totalThumbPixelSpace*t.modelValue)/r.totalThumbPixelSpace}),vr(()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mousedown",a),document.removeEventListener("mouseup",a)}),(u,h)=>(hn(),Tn("div",jm,[vt("div",{class:"slider__track",ref_key:"trackRef",ref:s},[vt("div",{class:"slider__thumb",style:vo({transform:`translate(${r.thumbOffset}px, -50%)`}),ref_key:"thumbRef",ref:n},null,4)],512)]))}});const Do=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},Xm={},Km={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ym=vt("path",{d:"M21 19V12C21 7.02944 16.9706 3 12 3V3C7.02944 3 3 7.02944 3 12V19",stroke:"#2B3F6C","stroke-width":"1.5","stroke-linecap":"round"},null,-1),$m=vt("path",{d:"M16 15C16 13.8954 16.8954 13 18 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H18C16.8954 21 16 20.1046 16 19V15Z",fill:"#2B3F6C",stroke:"#2B3F6C","stroke-width":"1.5"},null,-1),Jm=vt("path",{d:"M8 15C8 13.8954 7.10457 13 6 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H6C7.10457 21 8 20.1046 8 19V15Z",fill:"#2B3F6C",stroke:"#2B3F6C","stroke-width":"1.5"},null,-1),Zm=[Ym,$m,Jm];function Qm(i,e){return hn(),Tn("svg",Km,Zm)}const eg=Do(Xm,[["render",Qm]]),tg={},ng={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ig=vt("path",{d:"M5.07178 7.99998C5.80947 6.72226 6.88612 5.67343 8.18271 4.96944C9.4793 4.26545 10.9453 3.93373 12.4187 4.01094C13.892 4.08816 15.3153 4.57131 16.5312 5.40697C17.7471 6.24264 18.7083 7.39826 19.3083 8.74609",stroke:"#2B3F6C","stroke-width":"1.5","stroke-linecap":"round"},null,-1),sg=vt("path",{d:"M3.23187 5.51544L3.96128 8.67497C4.08551 9.2131 4.62246 9.54864 5.16059 9.4244L8.32013 8.69499",stroke:"#2B3F6C","stroke-width":"1.5","stroke-linecap":"round"},null,-1),rg=vt("path",{d:"M18.9282 16C18.1905 17.2777 17.1139 18.3266 15.8173 19.0306C14.5207 19.7345 13.0547 20.0663 11.5813 19.9891C10.108 19.9118 8.68467 19.4287 7.46877 18.593C6.25287 17.7574 5.29175 16.6017 4.69166 15.2539",stroke:"#2B3F6C","stroke-width":"1.5","stroke-linecap":"round"},null,-1),og=vt("path",{d:"M20.7681 18.4846L20.0387 15.325C19.9145 14.7869 19.3775 14.4514 18.8394 14.5756L15.6799 15.305",stroke:"#2B3F6C","stroke-width":"1.5","stroke-linecap":"round"},null,-1),ag=[ig,sg,rg,og];function lg(i,e){return hn(),Tn("svg",ng,ag)}const cg=Do(tg,[["render",lg]]);const Fl="147",ug=0,Dc=1,hg=2,bf=1,fg=2,$s=3,zi=0,sn=1,pn=2,ai=0,ps=1,ys=2,Ic=3,Nc=4,dg=5,os=100,pg=101,mg=102,Oc=103,Fc=104,gg=200,_g=201,xg=202,vg=203,Mf=204,Sf=205,yg=206,bg=207,Mg=208,Sg=209,wg=210,Tg=0,Eg=1,Ag=2,el=3,Cg=4,Lg=5,Rg=6,Pg=7,wf=0,Dg=1,Ig=2,kn=0,Ng=1,Og=2,Fg=3,Ug=4,zg=5,Tf=300,bs=301,Ms=302,tl=303,nl=304,Io=306,Ss=1e3,en=1001,mo=1002,bt=1003,il=1004,sl=1005,Bt=1006,Ef=1007,Ps=1008,Bi=1009,Bg=1010,kg=1011,Af=1012,Vg=1013,Pi=1014,ii=1015,ur=1016,Hg=1017,Gg=1018,ms=1020,Wg=1021,jg=1022,tn=1023,qg=1024,Xg=1025,Oi=1026,ws=1027,Kg=1028,Yg=1029,$g=1030,Jg=1031,Zg=1033,Qo=33776,ea=33777,ta=33778,na=33779,Uc=35840,zc=35841,Bc=35842,kc=35843,Qg=36196,Vc=37492,Hc=37496,Gc=37808,Wc=37809,jc=37810,qc=37811,Xc=37812,Kc=37813,Yc=37814,$c=37815,Jc=37816,Zc=37817,Qc=37818,eu=37819,tu=37820,nu=37821,iu=36492,hr=2300,Ts=2301,ia=2302,su=2400,ru=2401,ou=2402,e_=2500,t_=1,Cf=2,ki=3e3,et=3001,n_=3200,i_=3201,Lf=0,s_=1,bn="srgb",fr="srgb-linear",sa=7680,r_=519,rl=35044,au="300 es",ol=1035;class Ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lu=1234567;const er=Math.PI/180,dr=180/Math.PI;function _n(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function Ul(i,e){return(i%e+e)%e}function o_(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function a_(i,e,t){return i!==e?(t-i)/(e-i):0}function tr(i,e,t){return(1-t)*i+t*e}function l_(i,e,t,n){return tr(i,e,1-Math.exp(-t*n))}function c_(i,e=1){return e-Math.abs(Ul(i,e*2)-e)}function u_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function h_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function f_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function d_(i,e){return i+Math.random()*(e-i)}function p_(i){return i*(.5-Math.random())}function m_(i){i!==void 0&&(lu=i);let e=lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function g_(i){return i*er}function __(i){return i*dr}function al(i){return(i&i-1)===0&&i!==0}function Rf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function go(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function x_(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ui=Object.freeze({__proto__:null,DEG2RAD:er,RAD2DEG:dr,generateUUID:_n,clamp:xt,euclideanModulo:Ul,mapLinear:o_,inverseLerp:a_,lerp:tr,damp:l_,pingpong:c_,smoothstep:u_,smootherstep:h_,randInt:f_,randFloat:d_,randFloatSpread:p_,seededRandom:m_,degToRad:g_,radToDeg:__,isPowerOfTwo:al,ceilPowerOfTwo:Rf,floorPowerOfTwo:go,setQuaternionFromProperEuler:x_,normalize:nt,denormalize:Bn});class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],m=s[0],d=s[3],_=s[6],w=s[1],y=s[4],M=s[7],S=s[2],R=s[5],N=s[8];return r[0]=o*m+a*w+l*S,r[3]=o*d+a*y+l*R,r[6]=o*_+a*M+l*N,r[1]=c*m+u*w+h*S,r[4]=c*d+u*y+h*R,r[7]=c*_+u*M+h*N,r[2]=f*m+p*w+g*S,r[5]=f*d+p*y+g*R,r[8]=f*_+p*M+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(s*c-u*n)*m,e[2]=(a*n-s*o)*m,e[3]=f*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new qt;function Pf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const oa={[bn]:{[fr]:Fi},[fr]:{[bn]:lo}},Pt={legacyMode:!0,get workingColorSpace(){return fr},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(oa[e]&&oa[e][t]!==void 0){const n=oa[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},on={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Dr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Pt.workingColorSpace){if(e=Ul(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=aa(o,r,e+1/3),this.g=aa(o,r,e),this.b=aa(o,r,e-1/3)}return Pt.toWorkingColorSpace(this,s),this}setStyle(e,t=bn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Pt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Pt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Pt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Pt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=bn){const n=Df[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Pt.fromWorkingColorSpace(Dr(this,ht),e),xt(ht.r*255,0,255)<<16^xt(ht.g*255,0,255)<<8^xt(ht.b*255,0,255)<<0}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Dr(this,ht),t);const n=ht.r,s=ht.g,r=ht.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Dr(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=bn){return Pt.fromWorkingColorSpace(Dr(this,ht),e),e!==bn?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(on),on.h+=e,on.s+=t,on.l+=n,this.setHSL(on.h,on.s,on.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(Pr);const n=tr(on.h,Pr.h,t),s=tr(on.s,Pr.s,t),r=tr(on.l,Pr.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Re.NAMES=Df;let qi;class If{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=pr("canvas")),qi.width=e.width,qi.height=e.height;const n=qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Nf{constructor(e=null){this.isSource=!0,this.uuid=_n(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(la(s[o].image)):r.push(la(s[o]))}else r=la(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function la(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?If.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let v_=0;class wt extends Ds{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=en,s=en,r=Bt,o=Ps,a=tn,l=Bi,c=wt.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=_n(),this.name="",this.source=new Nf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Tf;wt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,s=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(p+1)/2,S=(_+1)/2,R=(u+f)/4,N=(h+m)/4,x=(g+d)/4;return y>M&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=N/n):M>S?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=R/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=N/r,s=x/r),this.set(n,s,r,t),this}let w=Math.sqrt((d-g)*(d-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(d-g)/w,this.y=(h-m)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vi extends Ds{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Of extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class y_ extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==p||u!==g){let d=1-a;const _=l*f+c*p+u*g+h*m,w=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const S=Math.sqrt(y),R=Math.atan2(S,_*w);d=Math.sin(d*R)/S,a=Math.sin(a*R)/S}const M=a*w;if(l=l*d+f*M,c=c*d+p*M,u=u*d+g*M,h=h*d+m*M,d===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*n,u=l*n+a*t-r*s,h=l*s+r*n-o*t,f=-r*t-o*n-a*s;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new A,cu=new rn;class Is{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)_i.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(_i)}else n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox),ua.applyMatrix4(e.matrixWorld),this.union(ua);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Ir.subVectors(this.max,Vs),Xi.subVectors(e.a,Vs),Ki.subVectors(e.b,Vs),Yi.subVectors(e.c,Vs),jn.subVectors(Ki,Xi),qn.subVectors(Yi,Ki),xi.subVectors(Xi,Yi);let t=[0,-jn.z,jn.y,0,-qn.z,qn.y,0,-xi.z,xi.y,jn.z,0,-jn.x,qn.z,0,-qn.x,xi.z,0,-xi.x,-jn.y,jn.x,0,-qn.y,qn.x,0,-xi.y,xi.x,0];return!ha(t,Xi,Ki,Yi,Ir)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,Xi,Ki,Yi,Ir))?!1:(Nr.crossVectors(jn,qn),t=[Nr.x,Nr.y,Nr.z],ha(t,Xi,Ki,Yi,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _i.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new A,new A,new A,new A,new A,new A,new A,new A],_i=new A,ua=new Is,Xi=new A,Ki=new A,Yi=new A,jn=new A,qn=new A,xi=new A,Vs=new A,Ir=new A,Nr=new A,vi=new A;function ha(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vi.fromArray(i,r);const a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),u=n.dot(vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const b_=new Is,Hs=new A,fa=new A;class Ns{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):b_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(fa)),this.expandByPoint(Hs.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new A,da=new A,Or=new A,Xn=new A,pa=new A,Fr=new A,ma=new A;class No{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.direction).multiplyScalar(t).add(this.origin),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){da.copy(e).add(t).multiplyScalar(.5),Or.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Or),a=Xn.dot(this.direction),l=-Xn.dot(Or),c=Xn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(Or).multiplyScalar(f).add(da),p}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,s,r){pa.subVectors(t,e),Fr.subVectors(n,e),ma.crossVectors(pa,Fr);let o=this.direction.dot(ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);const l=a*this.direction.dot(Fr.crossVectors(Xn,Fr));if(l<0)return null;const c=a*this.direction.dot(pa.cross(Xn));if(c<0||l+c>o)return null;const u=-a*Xn.dot(ma);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,o,a,l,c,u,h,f,p,g,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M_,e,S_)}lookAt(e,t,n){const s=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Kn.crossVectors(n,Wt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Kn.crossVectors(n,Wt)),Kn.normalize(),Ur.crossVectors(Wt,Kn),s[0]=Kn.x,s[4]=Ur.x,s[8]=Wt.x,s[1]=Kn.y,s[5]=Ur.y,s[9]=Wt.y,s[2]=Kn.z,s[6]=Ur.z,s[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],m=n[6],d=n[10],_=n[14],w=n[3],y=n[7],M=n[11],S=n[15],R=s[0],N=s[4],x=s[8],L=s[12],I=s[1],X=s[5],de=s[9],z=s[13],O=s[2],Y=s[6],ie=s[10],ee=s[14],B=s[3],ue=s[7],oe=s[11],H=s[15];return r[0]=o*R+a*I+l*O+c*B,r[4]=o*N+a*X+l*Y+c*ue,r[8]=o*x+a*de+l*ie+c*oe,r[12]=o*L+a*z+l*ee+c*H,r[1]=u*R+h*I+f*O+p*B,r[5]=u*N+h*X+f*Y+p*ue,r[9]=u*x+h*de+f*ie+p*oe,r[13]=u*L+h*z+f*ee+p*H,r[2]=g*R+m*I+d*O+_*B,r[6]=g*N+m*X+d*Y+_*ue,r[10]=g*x+m*de+d*ie+_*oe,r[14]=g*L+m*z+d*ee+_*H,r[3]=w*R+y*I+M*O+S*B,r[7]=w*N+y*X+M*Y+S*ue,r[11]=w*x+y*de+M*ie+S*oe,r[15]=w*L+y*z+M*ee+S*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],m=e[7],d=e[11],_=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*p-n*l*p)+m*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+d*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+_*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],_=e[15],w=h*d*c-m*f*c+m*l*p-a*d*p-h*l*_+a*f*_,y=g*f*c-u*d*c-g*l*p+o*d*p+u*l*_-o*f*_,M=u*m*c-g*h*c+g*a*p-o*m*p-u*a*_+o*h*_,S=g*h*l-u*m*l-g*a*f+o*m*f+u*a*d-o*h*d,R=t*w+n*y+s*M+r*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=w*N,e[1]=(m*f*r-h*d*r-m*s*p+n*d*p+h*s*_-n*f*_)*N,e[2]=(a*d*r-m*l*r+m*s*c-n*d*c-a*s*_+n*l*_)*N,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*p-n*l*p)*N,e[4]=y*N,e[5]=(u*d*r-g*f*r+g*s*p-t*d*p-u*s*_+t*f*_)*N,e[6]=(g*l*r-o*d*r-g*s*c+t*d*c+o*s*_-t*l*_)*N,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*N,e[8]=M*N,e[9]=(g*h*r-u*m*r-g*n*p+t*m*p+u*n*_-t*h*_)*N,e[10]=(o*m*r-g*a*r+g*n*c-t*m*c-o*n*_+t*a*_)*N,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*N,e[12]=S*N,e[13]=(u*m*s-g*h*s+g*n*f-t*m*f-u*n*d+t*h*d)*N,e[14]=(g*a*s-o*m*s-g*n*l+t*m*l+o*n*d-t*a*d)*N,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,m=o*u,d=o*h,_=a*h,w=l*c,y=l*u,M=l*h,S=n.x,R=n.y,N=n.z;return s[0]=(1-(m+_))*S,s[1]=(p+M)*S,s[2]=(g-y)*S,s[3]=0,s[4]=(p-M)*R,s[5]=(1-(f+_))*R,s[6]=(d+w)*R,s[7]=0,s[8]=(g+y)*N,s[9]=(d-w)*N,s[10]=(1-(f+m))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);const c=1/r,u=1/o,h=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),f=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-r),h=(t+e)*l,f=(n+s)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new A,an=new Be,M_=new A(0,0,0),S_=new A(1,1,1),Kn=new A,Ur=new A,Wt=new A,uu=new Be,hu=new rn;class Os{constructor(e=0,t=0,n=0,s=Os.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hu.setFromEuler(this),this.setFromQuaternion(hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Os.DefaultOrder="XYZ";Os.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let w_=0;const fu=new A,Ji=new rn,In=new Be,zr=new A,Gs=new A,T_=new A,E_=new rn,du=new A(1,0,0),pu=new A(0,1,0),mu=new A(0,0,1),A_={type:"added"},gu={type:"removed"};class st extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DefaultUp.clone();const e=new A,t=new Os,n=new rn,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new qt}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=st.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=st.DefaultMatrixWorldAutoUpdate,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(pu,e)}rotateZ(e){return this.rotateOnAxis(mu,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(pu,e)}translateZ(e){return this.translateOnAxis(mu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zr.copy(e):zr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Gs,zr,this.up):In.lookAt(zr,Gs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(In),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(A_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(gu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,T_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,E_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}st.DefaultUp=new A(0,1,0);st.DefaultMatrixAutoUpdate=!0;st.DefaultMatrixWorldAutoUpdate=!0;const ln=new A,Nn=new A,ga=new A,On=new A,Zi=new A,Qi=new A,_u=new A,_a=new A,xa=new A,va=new A;class zn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ln.subVectors(e,t),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ln.subVectors(s,t),Nn.subVectors(n,t),ga.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(Nn),l=ln.dot(ga),c=Nn.dot(Nn),u=Nn.dot(ga),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,On),On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,On),l.set(0,0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l}static isFrontFacing(e,t,n,s){return ln.subVectors(n,t),Nn.subVectors(e,t),ln.cross(Nn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),ln.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return zn.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Zi.subVectors(s,n),Qi.subVectors(r,n),_a.subVectors(e,n);const l=Zi.dot(_a),c=Qi.dot(_a);if(l<=0&&c<=0)return t.copy(n);xa.subVectors(e,s);const u=Zi.dot(xa),h=Qi.dot(xa);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Zi,o);va.subVectors(e,r);const p=Zi.dot(va),g=Qi.dot(va);if(g>=0&&p<=g)return t.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Qi,a);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return _u.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(_u,a);const _=1/(d+m+f);return o=m*_,a=f*_,t.copy(n).addScaledVector(Zi,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let C_=0;class En extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=ps,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Mf,this.blendDst=Sf,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=el,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class si extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new A,Br=new Me;class Ut{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=rl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ff extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uf extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qe extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let L_=0;const Jt=new Be,ya=new st,es=new A,jt=new Is,Ws=new Is,_t=new A;class Vt extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pf(e)?Uf:Ff)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(jt.min,Ws.min),jt.expandByPoint(_t),_t.addVectors(jt.max,Ws.max),jt.expandByPoint(_t)):(jt.expandByPoint(Ws.min),jt.expandByPoint(Ws.max))}jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_t.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),_t.add(es)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new A,u[I]=new A;const h=new A,f=new A,p=new A,g=new Me,m=new Me,d=new Me,_=new A,w=new A;function y(I,X,de){h.fromArray(s,I*3),f.fromArray(s,X*3),p.fromArray(s,de*3),g.fromArray(o,I*2),m.fromArray(o,X*2),d.fromArray(o,de*2),f.sub(h),p.sub(h),m.sub(g),d.sub(g);const z=1/(m.x*d.y-d.x*m.y);!isFinite(z)||(_.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(z),w.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(z),c[I].add(_),c[X].add(_),c[de].add(_),u[I].add(w),u[X].add(w),u[de].add(w))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let I=0,X=M.length;I<X;++I){const de=M[I],z=de.start,O=de.count;for(let Y=z,ie=z+O;Y<ie;Y+=3)y(n[Y+0],n[Y+1],n[Y+2])}const S=new A,R=new A,N=new A,x=new A;function L(I){N.fromArray(r,I*3),x.copy(N);const X=c[I];S.copy(X),S.sub(N.multiplyScalar(N.dot(X))).normalize(),R.crossVectors(x,X);const z=R.dot(u[I])<0?-1:1;l[I*4]=S.x,l[I*4+1]=S.y,l[I*4+2]=S.z,l[I*4+3]=z}for(let I=0,X=M.length;I<X;++I){const de=M[I],z=de.start,O=de.count;for(let Y=z,ie=z+O;Y<ie;Y+=3)L(n[Y+0]),L(n[Y+1]),L(n[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,u=new A,h=new A;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),m=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new Ut(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const xu=new Be,ts=new No,ba=new Ns,Yn=new A,$n=new A,Jn=new A,Ma=new A,Sa=new A,wa=new A,kr=new A,Vr=new A,Hr=new A,Gr=new Me,Wr=new Me,jr=new Me,Ta=new A,qr=new A;class Xt extends st{constructor(e=new Vt,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),e.ray.intersectsSphere(ba)===!1)||(xu.copy(r).invert(),ts.copy(e.ray).applyMatrix4(xu),n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],w=s[_.materialIndex],y=Math.max(_.start,g.start),M=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let S=y,R=M;S<R;S+=3){const N=a.getX(S),x=a.getX(S+1),L=a.getX(S+2);o=Xr(this,w,e,ts,l,c,u,h,f,N,x,L),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=m,w=d;_<w;_+=3){const y=a.getX(_),M=a.getX(_+1),S=a.getX(_+2);o=Xr(this,s,e,ts,l,c,u,h,f,y,M,S),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],w=s[_.materialIndex],y=Math.max(_.start,g.start),M=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let S=y,R=M;S<R;S+=3){const N=S,x=S+1,L=S+2;o=Xr(this,w,e,ts,l,c,u,h,f,N,x,L),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=m,w=d;_<w;_+=3){const y=_,M=_+1,S=_+2;o=Xr(this,s,e,ts,l,c,u,h,f,y,M,S),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function R_(i,e,t,n,s,r,o,a){let l;if(e.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side!==pn,a),l===null)return null;qr.copy(a),qr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qr);return c<t.near||c>t.far?null:{distance:c,point:qr.clone(),object:i}}function Xr(i,e,t,n,s,r,o,a,l,c,u,h){Yn.fromBufferAttribute(s,c),$n.fromBufferAttribute(s,u),Jn.fromBufferAttribute(s,h);const f=i.morphTargetInfluences;if(r&&f){kr.set(0,0,0),Vr.set(0,0,0),Hr.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const d=f[g],_=r[g];d!==0&&(Ma.fromBufferAttribute(_,c),Sa.fromBufferAttribute(_,u),wa.fromBufferAttribute(_,h),o?(kr.addScaledVector(Ma,d),Vr.addScaledVector(Sa,d),Hr.addScaledVector(wa,d)):(kr.addScaledVector(Ma.sub(Yn),d),Vr.addScaledVector(Sa.sub($n),d),Hr.addScaledVector(wa.sub(Jn),d)))}Yn.add(kr),$n.add(Vr),Jn.add(Hr)}i.isSkinnedMesh&&(i.boneTransform(c,Yn),i.boneTransform(u,$n),i.boneTransform(h,Jn));const p=R_(i,e,t,n,Yn,$n,Jn,Ta);if(p){a&&(Gr.fromBufferAttribute(a,c),Wr.fromBufferAttribute(a,u),jr.fromBufferAttribute(a,h),p.uv=zn.getUV(Ta,Yn,$n,Jn,Gr,Wr,jr,new Me)),l&&(Gr.fromBufferAttribute(l,c),Wr.fromBufferAttribute(l,u),jr.fromBufferAttribute(l,h),p.uv2=zn.getUV(Ta,Yn,$n,Jn,Gr,Wr,jr,new Me));const g={a:c,b:u,c:h,normal:new A,materialIndex:0};zn.getNormal(Yn,$n,Jn,g.normal),p.face=g}return p}class yr extends Vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(h,2));function g(m,d,_,w,y,M,S,R,N,x,L){const I=M/N,X=S/x,de=M/2,z=S/2,O=R/2,Y=N+1,ie=x+1;let ee=0,B=0;const ue=new A;for(let oe=0;oe<ie;oe++){const H=oe*X-z;for(let G=0;G<Y;G++){const ae=G*I-de;ue[m]=ae*w,ue[d]=H*y,ue[_]=O,c.push(ue.x,ue.y,ue.z),ue[m]=0,ue[d]=0,ue[_]=R>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(G/N),h.push(1-oe/x),ee+=1}}for(let oe=0;oe<x;oe++)for(let H=0;H<N;H++){const G=f+H+Y*oe,ae=f+H+Y*(oe+1),pe=f+(H+1)+Y*(oe+1),_e=f+(H+1)+Y*oe;l.push(G,ae,_e),l.push(ae,pe,_e),B+=6}a.addGroup(p,B,L),p+=B,f+=ee}}static fromJSON(e){return new yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=Es(i[t]);for(const s in n)e[s]=n[s]}return e}function P_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zf(i){return i.getRenderTarget()===null&&i.outputEncoding===et?bn:fr}const D_={clone:Es,merge:Nt};var I_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I_,this.fragmentShader=N_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=P_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bf extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends Bf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class O_ extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new Ot(ns,is,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new Ot(ns,is,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Ot(ns,is,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ot(ns,is,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Ot(ns,is,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ot(ns,is,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=kn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Bl extends wt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:bs,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class F_ extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Bl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yr(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:ai});r.uniforms.tEquirect.value=t;const o=new Xt(s,r),a=t.minFilter;return t.minFilter===Ps&&(t.minFilter=Bt),new O_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ea=new A,U_=new A,z_=new qt;class Ti{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ea.subVectors(n,t).cross(U_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||z_.getNormalMatrix(e),s=this.coplanarPoint(Ea).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new Ns,Kr=new A;class Oo{constructor(e=new Ti,t=new Ti,n=new Ti,s=new Ti,r=new Ti,o=new Ti){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],m=n[11],d=n[12],_=n[13],w=n[14],y=n[15];return t[0].setComponents(a-s,h-l,m-f,y-d).normalize(),t[1].setComponents(a+s,h+l,m+f,y+d).normalize(),t[2].setComponents(a+r,h+c,m+p,y+_).normalize(),t[3].setComponents(a-r,h-c,m-p,y-_).normalize(),t[4].setComponents(a-o,h-u,m-g,y-w).normalize(),t[5].setComponents(a+o,h+u,m+g,y+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Kr.x=s.normal.x>0?e.max.x:e.min.x,Kr.y=s.normal.y>0?e.max.y:e.min.y,Kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function B_(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class kl extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const w=_*f-o;for(let y=0;y<c;y++){const M=y*h-r;g.push(M,-w,0),m.push(0,0,1),d.push(y/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let w=0;w<a;w++){const y=w+c*_,M=w+c*(_+1),S=w+1+c*(_+1),R=w+1+c*_;p.push(y,M,R),p.push(M,S,R)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(m,3)),this.setAttribute("uv",new Qe(d,2))}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var k_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,V_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,G_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q_="vec3 transformed = vec3( position );",X_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Y_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,r0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,o0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,a0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",d0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,v0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,O0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,B0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,G0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,J0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ex=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,rx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,lx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ux=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vx=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,yx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Rx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Px=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Dx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ix=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Nx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ox=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Fx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$x=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ov=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,av=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,gv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Oe={alphamap_fragment:k_,alphamap_pars_fragment:V_,alphatest_fragment:H_,alphatest_pars_fragment:G_,aomap_fragment:W_,aomap_pars_fragment:j_,begin_vertex:q_,beginnormal_vertex:X_,bsdfs:K_,iridescence_fragment:Y_,bumpmap_pars_fragment:$_,clipping_planes_fragment:J_,clipping_planes_pars_fragment:Z_,clipping_planes_pars_vertex:Q_,clipping_planes_vertex:e0,color_fragment:t0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:s0,common:r0,cube_uv_reflection_fragment:o0,defaultnormal_vertex:a0,displacementmap_pars_vertex:l0,displacementmap_vertex:c0,emissivemap_fragment:u0,emissivemap_pars_fragment:h0,encodings_fragment:f0,encodings_pars_fragment:d0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:L0,envmap_vertex:x0,fog_vertex:v0,fog_pars_vertex:y0,fog_fragment:b0,fog_pars_fragment:M0,gradientmap_pars_fragment:S0,lightmap_fragment:w0,lightmap_pars_fragment:T0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:A0,lights_pars_begin:C0,lights_toon_fragment:R0,lights_toon_pars_fragment:P0,lights_phong_fragment:D0,lights_phong_pars_fragment:I0,lights_physical_fragment:N0,lights_physical_pars_fragment:O0,lights_fragment_begin:F0,lights_fragment_maps:U0,lights_fragment_end:z0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:k0,logdepthbuf_pars_vertex:V0,logdepthbuf_vertex:H0,map_fragment:G0,map_pars_fragment:W0,map_particle_fragment:j0,map_particle_pars_fragment:q0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:K0,morphcolor_vertex:Y0,morphnormal_vertex:$0,morphtarget_pars_vertex:J0,morphtarget_vertex:Z0,normal_fragment_begin:Q0,normal_fragment_maps:ex,normal_pars_fragment:tx,normal_pars_vertex:nx,normal_vertex:ix,normalmap_pars_fragment:sx,clearcoat_normal_fragment_begin:rx,clearcoat_normal_fragment_maps:ox,clearcoat_pars_fragment:ax,iridescence_pars_fragment:lx,output_fragment:cx,packing:ux,premultiplied_alpha_fragment:hx,project_vertex:fx,dithering_fragment:dx,dithering_pars_fragment:px,roughnessmap_fragment:mx,roughnessmap_pars_fragment:gx,shadowmap_pars_fragment:_x,shadowmap_pars_vertex:xx,shadowmap_vertex:vx,shadowmask_pars_fragment:yx,skinbase_vertex:bx,skinning_pars_vertex:Mx,skinning_vertex:Sx,skinnormal_vertex:wx,specularmap_fragment:Tx,specularmap_pars_fragment:Ex,tonemapping_fragment:Ax,tonemapping_pars_fragment:Cx,transmission_fragment:Lx,transmission_pars_fragment:Rx,uv_pars_fragment:Px,uv_pars_vertex:Dx,uv_vertex:Ix,uv2_pars_fragment:Nx,uv2_pars_vertex:Ox,uv2_vertex:Fx,worldpos_vertex:Ux,background_vert:zx,background_frag:Bx,backgroundCube_vert:kx,backgroundCube_frag:Vx,cube_vert:Hx,cube_frag:Gx,depth_vert:Wx,depth_frag:jx,distanceRGBA_vert:qx,distanceRGBA_frag:Xx,equirect_vert:Kx,equirect_frag:Yx,linedashed_vert:$x,linedashed_frag:Jx,meshbasic_vert:Zx,meshbasic_frag:Qx,meshlambert_vert:ev,meshlambert_frag:tv,meshmatcap_vert:nv,meshmatcap_frag:iv,meshnormal_vert:sv,meshnormal_frag:rv,meshphong_vert:ov,meshphong_frag:av,meshphysical_vert:lv,meshphysical_frag:cv,meshtoon_vert:uv,meshtoon_frag:hv,points_vert:fv,points_frag:dv,shadow_vert:pv,shadow_frag:mv,sprite_vert:gv,sprite_frag:_v},me={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new qt},uv2Transform:{value:new qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}}},Sn={basic:{uniforms:Nt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Nt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Re(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Nt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Nt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Nt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Re(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Nt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Nt([me.points,me.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Nt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Nt([me.common,me.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Nt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Nt([me.sprite,me.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Nt([me.common,me.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Nt([me.lights,me.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Sn.physical={uniforms:Nt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Me(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Yr={r:0,b:0,g:0};function xv(i,e,t,n,s,r,o){const a=new Re(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(d,_){let w=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y));const M=i.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(y=null),y===null?m(a,l):y&&y.isColor&&(m(y,1),w=!0),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Io)?(u===void 0&&(u=new Xt(new yr(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Es(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,N,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(h!==y||f!==y.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Xt(new kl(2,2),new xn({name:"BackgroundMaterial",uniforms:Es(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function m(d,_){d.getRGB(Yr,zf(i)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(d,_=1){a.set(d),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,m(a,l)},render:g}}function vv(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=d(null);let c=l,u=!1;function h(O,Y,ie,ee,B){let ue=!1;if(o){const oe=m(ee,ie,Y);c!==oe&&(c=oe,p(c.object)),ue=_(O,ee,ie,B),ue&&w(O,ee,ie,B)}else{const oe=Y.wireframe===!0;(c.geometry!==ee.id||c.program!==ie.id||c.wireframe!==oe)&&(c.geometry=ee.id,c.program=ie.id,c.wireframe=oe,ue=!0)}B!==null&&t.update(B,34963),(ue||u)&&(u=!1,x(O,Y,ie,ee),B!==null&&i.bindBuffer(34963,t.get(B).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(O){return n.isWebGL2?i.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function m(O,Y,ie){const ee=ie.wireframe===!0;let B=a[O.id];B===void 0&&(B={},a[O.id]=B);let ue=B[Y.id];ue===void 0&&(ue={},B[Y.id]=ue);let oe=ue[ee];return oe===void 0&&(oe=d(f()),ue[ee]=oe),oe}function d(O){const Y=[],ie=[],ee=[];for(let B=0;B<s;B++)Y[B]=0,ie[B]=0,ee[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ie,attributeDivisors:ee,object:O,attributes:{},index:null}}function _(O,Y,ie,ee){const B=c.attributes,ue=Y.attributes;let oe=0;const H=ie.getAttributes();for(const G in H)if(H[G].location>=0){const pe=B[G];let _e=ue[G];if(_e===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(_e=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(_e=O.instanceColor)),pe===void 0||pe.attribute!==_e||_e&&pe.data!==_e.data)return!0;oe++}return c.attributesNum!==oe||c.index!==ee}function w(O,Y,ie,ee){const B={},ue=Y.attributes;let oe=0;const H=ie.getAttributes();for(const G in H)if(H[G].location>=0){let pe=ue[G];pe===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(pe=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(pe=O.instanceColor));const _e={};_e.attribute=pe,pe&&pe.data&&(_e.data=pe.data),B[G]=_e,oe++}c.attributes=B,c.attributesNum=oe,c.index=ee}function y(){const O=c.newAttributes;for(let Y=0,ie=O.length;Y<ie;Y++)O[Y]=0}function M(O){S(O,0)}function S(O,Y){const ie=c.newAttributes,ee=c.enabledAttributes,B=c.attributeDivisors;ie[O]=1,ee[O]===0&&(i.enableVertexAttribArray(O),ee[O]=1),B[O]!==Y&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,Y),B[O]=Y)}function R(){const O=c.newAttributes,Y=c.enabledAttributes;for(let ie=0,ee=Y.length;ie<ee;ie++)Y[ie]!==O[ie]&&(i.disableVertexAttribArray(ie),Y[ie]=0)}function N(O,Y,ie,ee,B,ue){n.isWebGL2===!0&&(ie===5124||ie===5125)?i.vertexAttribIPointer(O,Y,ie,B,ue):i.vertexAttribPointer(O,Y,ie,ee,B,ue)}function x(O,Y,ie,ee){if(n.isWebGL2===!1&&(O.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const B=ee.attributes,ue=ie.getAttributes(),oe=Y.defaultAttributeValues;for(const H in ue){const G=ue[H];if(G.location>=0){let ae=B[H];if(ae===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),ae!==void 0){const pe=ae.normalized,_e=ae.itemSize,W=t.get(ae);if(W===void 0)continue;const Ue=W.buffer,Se=W.type,Ae=W.bytesPerElement;if(ae.isInterleavedBufferAttribute){const ye=ae.data,Xe=ye.stride,E=ae.offset;if(ye.isInstancedInterleavedBuffer){for(let C=0;C<G.locationSize;C++)S(G.location+C,ye.meshPerAttribute);O.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let C=0;C<G.locationSize;C++)M(G.location+C);i.bindBuffer(34962,Ue);for(let C=0;C<G.locationSize;C++)N(G.location+C,_e/G.locationSize,Se,pe,Xe*Ae,(E+_e/G.locationSize*C)*Ae)}else{if(ae.isInstancedBufferAttribute){for(let ye=0;ye<G.locationSize;ye++)S(G.location+ye,ae.meshPerAttribute);O.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ye=0;ye<G.locationSize;ye++)M(G.location+ye);i.bindBuffer(34962,Ue);for(let ye=0;ye<G.locationSize;ye++)N(G.location+ye,_e/G.locationSize,Se,pe,_e*Ae,_e/G.locationSize*ye*Ae)}}else if(oe!==void 0){const pe=oe[H];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(G.location,pe);break;case 3:i.vertexAttrib3fv(G.location,pe);break;case 4:i.vertexAttrib4fv(G.location,pe);break;default:i.vertexAttrib1fv(G.location,pe)}}}}R()}function L(){de();for(const O in a){const Y=a[O];for(const ie in Y){const ee=Y[ie];for(const B in ee)g(ee[B].object),delete ee[B];delete Y[ie]}delete a[O]}}function I(O){if(a[O.id]===void 0)return;const Y=a[O.id];for(const ie in Y){const ee=Y[ie];for(const B in ee)g(ee[B].object),delete ee[B];delete Y[ie]}delete a[O.id]}function X(O){for(const Y in a){const ie=a[Y];if(ie[O.id]===void 0)continue;const ee=ie[O.id];for(const B in ee)g(ee[B].object),delete ee[B];delete ie[O.id]}}function de(){z(),u=!0,c!==l&&(c=l,p(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:de,resetDefaultState:z,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:X,initAttributes:y,enableAttribute:M,disableUnusedAttributes:R}}function yv(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(s)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function bv(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),w=i.getParameter(36349),y=f>0,M=o||e.has("OES_texture_float"),S=y&&M,R=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:R}}function Mv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ti,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||n!==0||s;return s=f,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,p){const g=h.clippingPlanes,m=h.clipIntersection,d=h.clipShadows,_=i.get(h);if(!s||g===null||g.length===0||r&&!d)r?u(null):c();else{const w=r?0:n,y=w*4;let M=_.clippingState||null;l.value=M,M=u(g,f,y,p);for(let S=0;S!==y;++S)M[S]=t[S];_.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const m=h!==null?h.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=p+m*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(d===null||d.length<_)&&(d=new Float32Array(_));for(let y=0,M=p;y!==m;++y,M+=4)o.copy(h[y]).applyMatrix4(w,a),o.normal.toArray(d,M),d[M+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function Sv(i){let e=new WeakMap;function t(o,a){return a===tl?o.mapping=bs:a===nl&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===tl||a===nl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new F_(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Vl extends Bf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ls=4,vu=[.125,.215,.35,.446,.526,.582],Ri=20,Aa=new Vl,yu=new Re;let Ca=null;const Ei=(1+Math.sqrt(5))/2,rs=1/Ei,bu=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Ei,rs),new A(0,Ei,-rs),new A(rs,0,Ei),new A(-rs,0,Ei),new A(Ei,rs,0),new A(-Ei,rs,0)];class Mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ca=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ca),e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ca=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:ur,format:tn,encoding:ki,depthBuffer:!1},s=Su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wv(r)),this._blurMaterial=Tv(r,e,t)}return s}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,n,s){const a=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(yu),u.toneMapping=kn,u.autoClear=!1;const p=new si({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new Xt(new yr,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(yu),m=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):w===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const y=this._cubeSize;$r(s,w*y,_>2?y:0,y,y),u.setRenderTarget(s),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===bs||e.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;$r(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=bu[(s-1)%bu.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),m=r/g,d=isFinite(r)?1+Math.floor(u*m):Ri;d>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ri}`);const _=[];let w=0;for(let N=0;N<Ri;++N){const x=N/m,L=Math.exp(-x*x/2);_.push(L),N===0?w+=L:N<d&&(w+=2*L)}for(let N=0;N<_.length;N++)_[N]=_[N]/w;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const M=this._sizeLods[s],S=3*M*(s>y-ls?s-y+ls:0),R=4*(this._cubeSize-M);$r(t,S,R,3*M,2*M),l.setRenderTarget(t),l.render(h,Aa)}}function wv(i){const e=[],t=[],n=[];let s=i;const r=i-ls+1+vu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ls?l=vu[o-i+ls-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,d=2,_=1,w=new Float32Array(m*g*p),y=new Float32Array(d*g*p),M=new Float32Array(_*g*p);for(let R=0;R<p;R++){const N=R%3*2/3-1,x=R>2?0:-1,L=[N,x,0,N+2/3,x,0,N+2/3,x+1,0,N,x,0,N+2/3,x+1,0,N,x+1,0];w.set(L,m*g*R),y.set(f,d*g*R);const I=[R,R,R,R,R,R];M.set(I,_*g*R)}const S=new Vt;S.setAttribute("position",new Ut(w,m)),S.setAttribute("uv",new Ut(y,d)),S.setAttribute("faceIndex",new Ut(M,_)),e.push(S),s>ls&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Su(i,e,t){const n=new Vi(i,e,t);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tv(i,e,t){const n=new Float32Array(Ri),s=new A(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function wu(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Tu(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ev(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===tl||l===nl,u=l===bs||l===Ms;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Mu(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Mu(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Av(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cv(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const w=p.array;m=p.version;for(let y=0,M=w.length;y<M;y+=3){const S=w[y+0],R=w[y+1],N=w[y+2];f.push(S,R,R,N,N,S)}}else{const w=g.array;m=g.version;for(let y=0,M=w.length/3-1;y<M;y+=3){const S=y+0,R=y+1,N=y+2;f.push(S,R,R,N,N,S)}}const d=new(Pf(f)?Uf:Ff)(f,1);d.version=m;const _=r.get(h);_&&e.remove(_),r.set(h,d)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Lv(i,e,t,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(r,p,a,f*l),t.update(p,r,1)}function h(f,p,g){if(g===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,a,f*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Rv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pv(i,e){return i[0]-e[0]}function Dv(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Iv(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new it,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==d){let ie=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",ie)};var g=ie;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,N=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let I=0;M===!0&&(I=1),S===!0&&(I=2),R===!0&&(I=3);let X=u.attributes.position.count*I,de=1;X>e.maxTextureSize&&(de=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const z=new Float32Array(X*de*4*d),O=new Of(z,X,de,d);O.type=ii,O.needsUpdate=!0;const Y=I*4;for(let ee=0;ee<d;ee++){const B=N[ee],ue=x[ee],oe=L[ee],H=X*de*4*ee;for(let G=0;G<B.count;G++){const ae=G*Y;M===!0&&(o.fromBufferAttribute(B,G),z[H+ae+0]=o.x,z[H+ae+1]=o.y,z[H+ae+2]=o.z,z[H+ae+3]=0),S===!0&&(o.fromBufferAttribute(ue,G),z[H+ae+4]=o.x,z[H+ae+5]=o.y,z[H+ae+6]=o.z,z[H+ae+7]=0),R===!0&&(o.fromBufferAttribute(oe,G),z[H+ae+8]=o.x,z[H+ae+9]=o.y,z[H+ae+10]=o.z,z[H+ae+11]=oe.itemSize===4?o.w:1)}}_={count:d,texture:O,size:new Me(X,de)},r.set(u,_),u.addEventListener("dispose",ie)}let w=0;for(let M=0;M<p.length;M++)w+=p[M];const y=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==m){d=[];for(let S=0;S<m;S++)d[S]=[S,0];n[u.id]=d}for(let S=0;S<m;S++){const R=d[S];R[0]=S,R[1]=p[S]}d.sort(Dv);for(let S=0;S<8;S++)S<m&&d[S][1]?(a[S][0]=d[S][0],a[S][1]=d[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Pv);const _=u.morphAttributes.position,w=u.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const R=a[S],N=R[0],x=R[1];N!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+S)!==_[N]&&u.setAttribute("morphTarget"+S,_[N]),w&&u.getAttribute("morphNormal"+S)!==w[N]&&u.setAttribute("morphNormal"+S,w[N]),s[S]=x,y+=x):(_&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),w&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const M=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Nv(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Vf=new wt,Hf=new Of,Gf=new y_,Wf=new Bl,Eu=[],Au=[],Cu=new Float32Array(16),Lu=new Float32Array(9),Ru=new Float32Array(4);function Fs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Eu[s];if(r===void 0&&(r=new Float32Array(s),Eu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fo(i,e){let t=Au[e];t===void 0&&(t=new Int32Array(e),Au[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ov(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function Uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function Bv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;Ru.set(n),i.uniformMatrix2fv(this.addr,!1,Ru),dt(t,n)}}function kv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;Lu.set(n),i.uniformMatrix3fv(this.addr,!1,Lu),dt(t,n)}}function Vv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;Cu.set(n),i.uniformMatrix4fv(this.addr,!1,Cu),dt(t,n)}}function Hv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function Wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function qv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function Kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function Yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function $v(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Vf,s)}function Jv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Gf,s)}function Zv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Wf,s)}function Qv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hf,s)}function ey(i){switch(i){case 5126:return Ov;case 35664:return Fv;case 35665:return Uv;case 35666:return zv;case 35674:return Bv;case 35675:return kv;case 35676:return Vv;case 5124:case 35670:return Hv;case 35667:case 35671:return Gv;case 35668:case 35672:return Wv;case 35669:case 35673:return jv;case 5125:return qv;case 36294:return Xv;case 36295:return Kv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Qv}}function ty(i,e){i.uniform1fv(this.addr,e)}function ny(i,e){const t=Fs(e,this.size,2);i.uniform2fv(this.addr,t)}function iy(i,e){const t=Fs(e,this.size,3);i.uniform3fv(this.addr,t)}function sy(i,e){const t=Fs(e,this.size,4);i.uniform4fv(this.addr,t)}function ry(i,e){const t=Fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function oy(i,e){const t=Fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ay(i,e){const t=Fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ly(i,e){i.uniform1iv(this.addr,e)}function cy(i,e){i.uniform2iv(this.addr,e)}function uy(i,e){i.uniform3iv(this.addr,e)}function hy(i,e){i.uniform4iv(this.addr,e)}function fy(i,e){i.uniform1uiv(this.addr,e)}function dy(i,e){i.uniform2uiv(this.addr,e)}function py(i,e){i.uniform3uiv(this.addr,e)}function my(i,e){i.uniform4uiv(this.addr,e)}function gy(i,e,t){const n=this.cache,s=e.length,r=Fo(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Vf,r[o])}function _y(i,e,t){const n=this.cache,s=e.length,r=Fo(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Gf,r[o])}function xy(i,e,t){const n=this.cache,s=e.length,r=Fo(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Wf,r[o])}function vy(i,e,t){const n=this.cache,s=e.length,r=Fo(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hf,r[o])}function yy(i){switch(i){case 5126:return ty;case 35664:return ny;case 35665:return iy;case 35666:return sy;case 35674:return ry;case 35675:return oy;case 35676:return ay;case 5124:case 35670:return ly;case 35667:case 35671:return cy;case 35668:case 35672:return uy;case 35669:case 35673:return hy;case 5125:return fy;case 36294:return dy;case 36295:return py;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return gy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return vy}}class by{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ey(t.type)}}class My{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=yy(t.type)}}class Sy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function Pu(i,e){i.seq.push(e),i.map[e.id]=e}function wy(i,e,t){const n=i.name,s=n.length;for(La.lastIndex=0;;){const r=La.exec(n),o=La.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Pu(t,c===void 0?new by(a,i,e):new My(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Sy(a),Pu(t,h)),t=h}}}class co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);wy(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Du(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Ty=0;function Ey(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ay(i){switch(i){case ki:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Iu(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ey(i.getShaderSource(e),o)}else return s}function Cy(i,e){const t=Ay(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ly(i,e){let t;switch(e){case Ng:t="Linear";break;case Og:t="Reinhard";break;case Fg:t="OptimizedCineon";break;case Ug:t="ACESFilmic";break;case zg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ry(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function Py(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dy(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Js(i){return i!==""}function Nu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ou(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(i){return i.replace(Iy,Ny)}function Ny(i,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ll(t)}const Oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(i){return i.replace(Oy,Fy)}function Fy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$s&&(e="SHADOWMAP_TYPE_VSM"),e}function zy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ms:e="ENVMAP_TYPE_CUBE";break;case Io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function By(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function ky(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wf:e="ENVMAP_BLENDING_MULTIPLY";break;case Dg:e="ENVMAP_BLENDING_MIX";break;case Ig:e="ENVMAP_BLENDING_ADD";break}return e}function Vy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hy(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Uy(t),c=zy(t),u=By(t),h=ky(t),f=Vy(t),p=t.isWebGL2?"":Ry(t),g=Py(r),m=s.createProgram();let d,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Js).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(Js).join(`
`),_.length>0&&(_+=`
`)):(d=[Uu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),_=[p,Uu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==kn?Ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,Cy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=ll(o),o=Nu(o,t),o=Ou(o,t),a=ll(a),a=Nu(a,t),a=Ou(a,t),o=Fu(o),a=Fu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=w+d+o,M=w+_+a,S=Du(s,35633,y),R=Du(s,35632,M);if(s.attachShader(m,S),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){const L=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(S).trim(),X=s.getShaderInfoLog(R).trim();let de=!0,z=!0;if(s.getProgramParameter(m,35714)===!1){de=!1;const O=Iu(s,S,"vertex"),Y=Iu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+L+`
`+O+`
`+Y)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||X==="")&&(z=!1);z&&(this.diagnostics={runnable:de,programLog:L,vertexShader:{log:I,prefix:d},fragmentShader:{log:X,prefix:_}})}s.deleteShader(S),s.deleteShader(R);let N;this.getUniforms=function(){return N===void 0&&(N=new co(s,m)),N};let x;return this.getAttributes=function(){return x===void 0&&(x=Dy(s,m)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Ty++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=R,this}let Gy=0;class Wy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jy(e),t.set(e,n)),n}}class jy{constructor(e){this.id=Gy++,this.code=e,this.usedTimes=0}}function qy(i,e,t,n,s,r,o){const a=new zl,l=new Wy,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x,L,I,X,de){const z=X.fog,O=de.geometry,Y=x.isMeshStandardMaterial?X.environment:null,ie=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),ee=!!ie&&ie.mapping===Io?ie.image.height:null,B=g[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const ue=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,oe=ue!==void 0?ue.length:0;let H=0;O.morphAttributes.position!==void 0&&(H=1),O.morphAttributes.normal!==void 0&&(H=2),O.morphAttributes.color!==void 0&&(H=3);let G,ae,pe,_e;if(B){const Xe=Sn[B];G=Xe.vertexShader,ae=Xe.fragmentShader}else G=x.vertexShader,ae=x.fragmentShader,l.update(x),pe=l.getVertexShaderID(x),_e=l.getFragmentShaderID(x);const W=i.getRenderTarget(),Ue=x.alphaTest>0,Se=x.clearcoat>0,Ae=x.iridescence>0;return{isWebGL2:u,shaderID:B,shaderName:x.type,vertexShader:G,fragmentShader:ae,defines:x.defines,customVertexShaderID:pe,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:de.isInstancedMesh===!0,instancingColor:de.isInstancedMesh===!0&&de.instanceColor!==null,supportsVertexTextures:f,outputEncoding:W===null?i.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:ki,map:!!x.map,matcap:!!x.matcap,envMap:!!ie,envMapMode:ie&&ie.mapping,envMapCubeUVHeight:ee,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===s_,tangentSpaceNormalMap:x.normalMapType===Lf,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===et,clearcoat:Se,clearcoatMap:Se&&!!x.clearcoatMap,clearcoatRoughnessMap:Se&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!x.clearcoatNormalMap,iridescence:Ae,iridescenceMap:Ae&&!!x.iridescenceMap,iridescenceThicknessMap:Ae&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===ps,alphaMap:!!x.alphaMap,alphaTest:Ue,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!O.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:de.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:H,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:kn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pn,flipSided:x.side===sn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const L=[];if(x.shaderID?L.push(x.shaderID):(L.push(x.customVertexShaderID),L.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)L.push(I),L.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(_(L,x),w(L,x),L.push(i.outputEncoding)),L.push(x.customProgramCacheKey),L.join()}function _(x,L){x.push(L.precision),x.push(L.outputEncoding),x.push(L.envMapMode),x.push(L.envMapCubeUVHeight),x.push(L.combine),x.push(L.vertexUvs),x.push(L.fogExp2),x.push(L.sizeAttenuation),x.push(L.morphTargetsCount),x.push(L.morphAttributeCount),x.push(L.numDirLights),x.push(L.numPointLights),x.push(L.numSpotLights),x.push(L.numSpotLightMaps),x.push(L.numHemiLights),x.push(L.numRectAreaLights),x.push(L.numDirLightShadows),x.push(L.numPointLightShadows),x.push(L.numSpotLightShadows),x.push(L.numSpotLightShadowsWithMaps),x.push(L.shadowMapType),x.push(L.toneMapping),x.push(L.numClippingPlanes),x.push(L.numClipIntersection),x.push(L.depthPacking)}function w(x,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.map&&a.enable(4),L.matcap&&a.enable(5),L.envMap&&a.enable(6),L.lightMap&&a.enable(7),L.aoMap&&a.enable(8),L.emissiveMap&&a.enable(9),L.bumpMap&&a.enable(10),L.normalMap&&a.enable(11),L.objectSpaceNormalMap&&a.enable(12),L.tangentSpaceNormalMap&&a.enable(13),L.clearcoat&&a.enable(14),L.clearcoatMap&&a.enable(15),L.clearcoatRoughnessMap&&a.enable(16),L.clearcoatNormalMap&&a.enable(17),L.iridescence&&a.enable(18),L.iridescenceMap&&a.enable(19),L.iridescenceThicknessMap&&a.enable(20),L.displacementMap&&a.enable(21),L.specularMap&&a.enable(22),L.roughnessMap&&a.enable(23),L.metalnessMap&&a.enable(24),L.gradientMap&&a.enable(25),L.alphaMap&&a.enable(26),L.alphaTest&&a.enable(27),L.vertexColors&&a.enable(28),L.vertexAlphas&&a.enable(29),L.vertexUvs&&a.enable(30),L.vertexTangents&&a.enable(31),L.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.physicallyCorrectLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.specularIntensityMap&&a.enable(15),L.specularColorMap&&a.enable(16),L.transmission&&a.enable(17),L.transmissionMap&&a.enable(18),L.thicknessMap&&a.enable(19),L.sheen&&a.enable(20),L.sheenColorMap&&a.enable(21),L.sheenRoughnessMap&&a.enable(22),L.decodeVideoTexture&&a.enable(23),L.opaque&&a.enable(24),x.push(a.mask)}function y(x){const L=g[x.type];let I;if(L){const X=Sn[L];I=D_.clone(X.uniforms)}else I=x.uniforms;return I}function M(x,L){let I;for(let X=0,de=c.length;X<de;X++){const z=c[X];if(z.cacheKey===L){I=z,++I.usedTimes;break}}return I===void 0&&(I=new Hy(i,L,x,r),c.push(I)),I}function S(x){if(--x.usedTimes===0){const L=c.indexOf(x);c[L]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:M,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:N}}function Xy(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Ky(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,p,g,m,d){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:d},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=d),e++,_}function a(h,f,p,g,m,d){const _=o(h,f,p,g,m,d);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function l(h,f,p,g,m,d){const _=o(h,f,p,g,m,d);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||Ky),n.length>1&&n.sort(f||zu),s.length>1&&s.sort(f||zu)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Yy(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Bu,i.set(n,[o])):s>=r.length?(o=new Bu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function $y(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Re};break;case"SpotLight":t={position:new A,direction:new A,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function Jy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zy=0;function Qy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function eb(i,e){const t=new $y,n=Jy(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new A);const r=new A,o=new Be,a=new Be;function l(u,h){let f=0,p=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let m=0,d=0,_=0,w=0,y=0,M=0,S=0,R=0,N=0,x=0;u.sort(Qy);const L=h!==!0?Math.PI:1;for(let X=0,de=u.length;X<de;X++){const z=u[X],O=z.color,Y=z.intensity,ie=z.distance,ee=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=O.r*Y*L,p+=O.g*Y*L,g+=O.b*Y*L;else if(z.isLightProbe)for(let B=0;B<9;B++)s.probe[B].addScaledVector(z.sh.coefficients[B],Y);else if(z.isDirectionalLight){const B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*L),z.castShadow){const ue=z.shadow,oe=n.get(z);oe.shadowBias=ue.bias,oe.shadowNormalBias=ue.normalBias,oe.shadowRadius=ue.radius,oe.shadowMapSize=ue.mapSize,s.directionalShadow[m]=oe,s.directionalShadowMap[m]=ee,s.directionalShadowMatrix[m]=z.shadow.matrix,M++}s.directional[m]=B,m++}else if(z.isSpotLight){const B=t.get(z);B.position.setFromMatrixPosition(z.matrixWorld),B.color.copy(O).multiplyScalar(Y*L),B.distance=ie,B.coneCos=Math.cos(z.angle),B.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),B.decay=z.decay,s.spot[_]=B;const ue=z.shadow;if(z.map&&(s.spotLightMap[N]=z.map,N++,ue.updateMatrices(z),z.castShadow&&x++),s.spotLightMatrix[_]=ue.matrix,z.castShadow){const oe=n.get(z);oe.shadowBias=ue.bias,oe.shadowNormalBias=ue.normalBias,oe.shadowRadius=ue.radius,oe.shadowMapSize=ue.mapSize,s.spotShadow[_]=oe,s.spotShadowMap[_]=ee,R++}_++}else if(z.isRectAreaLight){const B=t.get(z);B.color.copy(O).multiplyScalar(Y),B.halfWidth.set(z.width*.5,0,0),B.halfHeight.set(0,z.height*.5,0),s.rectArea[w]=B,w++}else if(z.isPointLight){const B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*L),B.distance=z.distance,B.decay=z.decay,z.castShadow){const ue=z.shadow,oe=n.get(z);oe.shadowBias=ue.bias,oe.shadowNormalBias=ue.normalBias,oe.shadowRadius=ue.radius,oe.shadowMapSize=ue.mapSize,oe.shadowCameraNear=ue.camera.near,oe.shadowCameraFar=ue.camera.far,s.pointShadow[d]=oe,s.pointShadowMap[d]=ee,s.pointShadowMatrix[d]=z.shadow.matrix,S++}s.point[d]=B,d++}else if(z.isHemisphereLight){const B=t.get(z);B.skyColor.copy(z.color).multiplyScalar(Y*L),B.groundColor.copy(z.groundColor).multiplyScalar(Y*L),s.hemi[y]=B,y++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;const I=s.hash;(I.directionalLength!==m||I.pointLength!==d||I.spotLength!==_||I.rectAreaLength!==w||I.hemiLength!==y||I.numDirectionalShadows!==M||I.numPointShadows!==S||I.numSpotShadows!==R||I.numSpotMaps!==N)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=w,s.point.length=d,s.hemi.length=y,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=R+N-x,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=x,I.directionalLength=m,I.pointLength=d,I.spotLength=_,I.rectAreaLength=w,I.hemiLength=y,I.numDirectionalShadows=M,I.numPointShadows=S,I.numSpotShadows=R,I.numSpotMaps=N,s.version=Zy++)}function c(u,h){let f=0,p=0,g=0,m=0,d=0;const _=h.matrixWorldInverse;for(let w=0,y=u.length;w<y;w++){const M=u[w];if(M.isDirectionalLight){const S=s.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(M.isSpotLight){const S=s.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const S=s.rectArea[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(M.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const S=s.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),p++}else if(M.isHemisphereLight){const S=s.hemi[d];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:s}}function ku(i,e){const t=new eb(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function tb(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new ku(i,e),t.set(r,[l])):o>=a.length?(l=new ku(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class nb extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ib extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new A,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ob(i,e,t){let n=new Oo;const s=new Me,r=new Me,o=new it,a=new nb({depthPacking:i_}),l=new ib,c={},u=t.maxTextureSize,h={0:sn,1:zi,2:pn},f=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:sb,fragmentShader:rb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Xt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bf,this.render=function(M,S,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||M.length===0)return;const N=i.getRenderTarget(),x=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ai),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let X=0,de=M.length;X<de;X++){const z=M[X],O=z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const Y=O.getFrameExtents();if(s.multiply(Y),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,O.mapSize.y=r.y)),O.map===null){const ee=this.type!==$s?{minFilter:bt,magFilter:bt}:{};O.map=new Vi(s.x,s.y,ee),O.map.texture.name=z.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const ie=O.getViewportCount();for(let ee=0;ee<ie;ee++){const B=O.getViewport(ee);o.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),I.viewport(o),O.updateMatrices(z,ee),n=O.getFrustum(),y(S,R,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===$s&&_(O,R),O.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(N,x,L)};function _(M,S){const R=e.update(m);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Vi(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(S,null,R,f,m,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(S,null,R,p,m,null)}function w(M,S,R,N,x,L){let I=null;const X=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(X!==void 0?I=X:I=R.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const de=I.uuid,z=S.uuid;let O=c[de];O===void 0&&(O={},c[de]=O);let Y=O[z];Y===void 0&&(Y=I.clone(),O[z]=Y),I=Y}return I.visible=S.visible,I.wireframe=S.wireframe,L===$s?I.side=S.shadowSide!==null?S.shadowSide:S.side:I.side=S.shadowSide!==null?S.shadowSide:h[S.side],I.alphaMap=S.alphaMap,I.alphaTest=S.alphaTest,I.map=S.map,I.clipShadows=S.clipShadows,I.clippingPlanes=S.clippingPlanes,I.clipIntersection=S.clipIntersection,I.displacementMap=S.displacementMap,I.displacementScale=S.displacementScale,I.displacementBias=S.displacementBias,I.wireframeLinewidth=S.wireframeLinewidth,I.linewidth=S.linewidth,R.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(R.matrixWorld),I.nearDistance=N,I.farDistance=x),I}function y(M,S,R,N,x){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===$s)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);const X=e.update(M),de=M.material;if(Array.isArray(de)){const z=X.groups;for(let O=0,Y=z.length;O<Y;O++){const ie=z[O],ee=de[ie.materialIndex];if(ee&&ee.visible){const B=w(M,ee,N,R.near,R.far,x);i.renderBufferDirect(R,null,X,B,M,ie)}}}else if(de.visible){const z=w(M,de,N,R.near,R.far,x);i.renderBufferDirect(R,null,X,z,M,null)}}const I=M.children;for(let X=0,de=I.length;X<de;X++)y(I[X],S,R,N,x)}}function ab(i,e,t){const n=t.isWebGL2;function s(){let P=!1;const K=new it;let ce=null;const ve=new it(0,0,0,0);return{setMask:function(Te){ce!==Te&&!P&&(i.colorMask(Te,Te,Te,Te),ce=Te)},setLocked:function(Te){P=Te},setClear:function(Te,Je,mt,Tt,hi){hi===!0&&(Te*=Tt,Je*=Tt,mt*=Tt),K.set(Te,Je,mt,Tt),ve.equals(K)===!1&&(i.clearColor(Te,Je,mt,Tt),ve.copy(K))},reset:function(){P=!1,ce=null,ve.set(-1,0,0,0)}}}function r(){let P=!1,K=null,ce=null,ve=null;return{setTest:function(Te){Te?Ue(2929):Se(2929)},setMask:function(Te){K!==Te&&!P&&(i.depthMask(Te),K=Te)},setFunc:function(Te){if(ce!==Te){switch(Te){case Tg:i.depthFunc(512);break;case Eg:i.depthFunc(519);break;case Ag:i.depthFunc(513);break;case el:i.depthFunc(515);break;case Cg:i.depthFunc(514);break;case Lg:i.depthFunc(518);break;case Rg:i.depthFunc(516);break;case Pg:i.depthFunc(517);break;default:i.depthFunc(515)}ce=Te}},setLocked:function(Te){P=Te},setClear:function(Te){ve!==Te&&(i.clearDepth(Te),ve=Te)},reset:function(){P=!1,K=null,ce=null,ve=null}}}function o(){let P=!1,K=null,ce=null,ve=null,Te=null,Je=null,mt=null,Tt=null,hi=null;return{setTest:function(rt){P||(rt?Ue(2960):Se(2960))},setMask:function(rt){K!==rt&&!P&&(i.stencilMask(rt),K=rt)},setFunc:function(rt,Ln,Yt){(ce!==rt||ve!==Ln||Te!==Yt)&&(i.stencilFunc(rt,Ln,Yt),ce=rt,ve=Ln,Te=Yt)},setOp:function(rt,Ln,Yt){(Je!==rt||mt!==Ln||Tt!==Yt)&&(i.stencilOp(rt,Ln,Yt),Je=rt,mt=Ln,Tt=Yt)},setLocked:function(rt){P=rt},setClear:function(rt){hi!==rt&&(i.clearStencil(rt),hi=rt)},reset:function(){P=!1,K=null,ce=null,ve=null,Te=null,Je=null,mt=null,Tt=null,hi=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,m=[],d=null,_=!1,w=null,y=null,M=null,S=null,R=null,N=null,x=null,L=!1,I=null,X=null,de=null,z=null,O=null;const Y=i.getParameter(35661);let ie=!1,ee=0;const B=i.getParameter(7938);B.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(B)[1]),ie=ee>=1):B.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ie=ee>=2);let ue=null,oe={};const H=i.getParameter(3088),G=i.getParameter(2978),ae=new it().fromArray(H),pe=new it().fromArray(G);function _e(P,K,ce){const ve=new Uint8Array(4),Te=i.createTexture();i.bindTexture(P,Te),i.texParameteri(P,10241,9728),i.texParameteri(P,10240,9728);for(let Je=0;Je<ce;Je++)i.texImage2D(K+Je,0,6408,1,1,0,6408,5121,ve);return Te}const W={};W[3553]=_e(3553,3553,1),W[34067]=_e(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(2929),l.setFunc(el),$(!1),se(Dc),Ue(2884),k(ai);function Ue(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function Se(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function Ae(P,K){return p[P]!==K?(i.bindFramebuffer(P,K),p[P]=K,n&&(P===36009&&(p[36160]=K),P===36160&&(p[36009]=K)),!0):!1}function ye(P,K){let ce=m,ve=!1;if(P)if(ce=g.get(K),ce===void 0&&(ce=[],g.set(K,ce)),P.isWebGLMultipleRenderTargets){const Te=P.texture;if(ce.length!==Te.length||ce[0]!==36064){for(let Je=0,mt=Te.length;Je<mt;Je++)ce[Je]=36064+Je;ce.length=Te.length,ve=!0}}else ce[0]!==36064&&(ce[0]=36064,ve=!0);else ce[0]!==1029&&(ce[0]=1029,ve=!0);ve&&(t.isWebGL2?i.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Xe(P){return d!==P?(i.useProgram(P),d=P,!0):!1}const E={[os]:32774,[pg]:32778,[mg]:32779};if(n)E[Oc]=32775,E[Fc]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(E[Oc]=P.MIN_EXT,E[Fc]=P.MAX_EXT)}const C={[gg]:0,[_g]:1,[xg]:768,[Mf]:770,[wg]:776,[Mg]:774,[yg]:772,[vg]:769,[Sf]:771,[Sg]:775,[bg]:773};function k(P,K,ce,ve,Te,Je,mt,Tt){if(P===ai){_===!0&&(Se(3042),_=!1);return}if(_===!1&&(Ue(3042),_=!0),P!==dg){if(P!==w||Tt!==L){if((y!==os||R!==os)&&(i.blendEquation(32774),y=os,R=os),Tt)switch(P){case ps:i.blendFuncSeparate(1,771,1,771);break;case ys:i.blendFunc(1,1);break;case Ic:i.blendFuncSeparate(0,769,0,1);break;case Nc:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ps:i.blendFuncSeparate(770,771,1,771);break;case ys:i.blendFunc(770,1);break;case Ic:i.blendFuncSeparate(0,769,0,1);break;case Nc:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,S=null,N=null,x=null,w=P,L=Tt}return}Te=Te||K,Je=Je||ce,mt=mt||ve,(K!==y||Te!==R)&&(i.blendEquationSeparate(E[K],E[Te]),y=K,R=Te),(ce!==M||ve!==S||Je!==N||mt!==x)&&(i.blendFuncSeparate(C[ce],C[ve],C[Je],C[mt]),M=ce,S=ve,N=Je,x=mt),w=P,L=!1}function J(P,K){P.side===pn?Se(2884):Ue(2884);let ce=P.side===sn;K&&(ce=!ce),$(ce),P.blending===ps&&P.transparent===!1?k(ai):k(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ve=P.stencilWrite;c.setTest(ve),ve&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),te(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ue(32926):Se(32926)}function $(P){I!==P&&(P?i.frontFace(2304):i.frontFace(2305),I=P)}function se(P){P!==ug?(Ue(2884),P!==X&&(P===Dc?i.cullFace(1029):P===hg?i.cullFace(1028):i.cullFace(1032))):Se(2884),X=P}function le(P){P!==de&&(ie&&i.lineWidth(P),de=P)}function te(P,K,ce){P?(Ue(32823),(z!==K||O!==ce)&&(i.polygonOffset(K,ce),z=K,O=ce)):Se(32823)}function fe(P){P?Ue(3089):Se(3089)}function ne(P){P===void 0&&(P=33984+Y-1),ue!==P&&(i.activeTexture(P),ue=P)}function b(P,K,ce){ce===void 0&&(ue===null?ce=33984+Y-1:ce=ue);let ve=oe[ce];ve===void 0&&(ve={type:void 0,texture:void 0},oe[ce]=ve),(ve.type!==P||ve.texture!==K)&&(ue!==ce&&(i.activeTexture(ce),ue=ce),i.bindTexture(P,K||W[P]),ve.type=P,ve.texture=K)}function v(){const P=oe[ue];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function D(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(P){ae.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ae.copy(P))}function xe(P){pe.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),pe.copy(P))}function Pe(P,K){let ce=h.get(K);ce===void 0&&(ce=new WeakMap,h.set(K,ce));let ve=ce.get(P);ve===void 0&&(ve=i.getUniformBlockIndex(K,P.name),ce.set(P,ve))}function tt(P,K){const ve=h.get(K).get(P);u.get(P)!==ve&&(i.uniformBlockBinding(K,ve,P.__bindingPointIndex),u.set(P,ve))}function pt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ue=null,oe={},p={},g=new WeakMap,m=[],d=null,_=!1,w=null,y=null,M=null,S=null,R=null,N=null,x=null,L=!1,I=null,X=null,de=null,z=null,O=null,ae.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ue,disable:Se,bindFramebuffer:Ae,drawBuffers:ye,useProgram:Xe,setBlending:k,setMaterial:J,setFlipSided:$,setCullFace:se,setLineWidth:le,setPolygonOffset:te,setScissorTest:fe,activeTexture:ne,bindTexture:b,unbindTexture:v,compressedTexImage2D:D,compressedTexImage3D:V,texImage2D:Le,texImage3D:be,updateUBOMapping:Pe,uniformBlockBinding:tt,texStorage2D:j,texStorage3D:we,texSubImage2D:Z,texSubImage3D:re,compressedTexSubImage2D:ge,compressedTexSubImage3D:he,scissor:Ee,viewport:xe,reset:pt}}function lb(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,v){return _?new OffscreenCanvas(b,v):pr("canvas")}function y(b,v,D,V){let Z=1;if((b.width>V||b.height>V)&&(Z=V/Math.max(b.width,b.height)),Z<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const re=v?go:Math.floor,ge=re(Z*b.width),he=re(Z*b.height);m===void 0&&(m=w(ge,he));const j=D?w(ge,he):m;return j.width=ge,j.height=he,j.getContext("2d").drawImage(b,0,0,ge,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ge+"x"+he+")."),j}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function M(b){return al(b.width)&&al(b.height)}function S(b){return a?!1:b.wrapS!==en||b.wrapT!==en||b.minFilter!==bt&&b.minFilter!==Bt}function R(b,v){return b.generateMipmaps&&v&&b.minFilter!==bt&&b.minFilter!==Bt}function N(b){i.generateMipmap(b)}function x(b,v,D,V,Z=!1){if(a===!1)return v;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=v;return v===6403&&(D===5126&&(re=33326),D===5131&&(re=33325),D===5121&&(re=33321)),v===33319&&(D===5126&&(re=33328),D===5131&&(re=33327),D===5121&&(re=33323)),v===6408&&(D===5126&&(re=34836),D===5131&&(re=34842),D===5121&&(re=V===et&&Z===!1?35907:32856),D===32819&&(re=32854),D===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function L(b,v,D){return R(b,D)===!0||b.isFramebufferTexture&&b.minFilter!==bt&&b.minFilter!==Bt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function I(b){return b===bt||b===il||b===sl?9728:9729}function X(b){const v=b.target;v.removeEventListener("dispose",X),z(v),v.isVideoTexture&&g.delete(v)}function de(b){const v=b.target;v.removeEventListener("dispose",de),Y(v)}function z(b){const v=n.get(b);if(v.__webglInit===void 0)return;const D=b.source,V=d.get(D);if(V){const Z=V[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&O(b),Object.keys(V).length===0&&d.delete(D)}n.remove(b)}function O(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const D=b.source,V=d.get(D);delete V[v.__cacheKey],o.memory.textures--}function Y(b){const v=b.texture,D=n.get(b),V=n.get(v);if(V.__webglTexture!==void 0&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)i.deleteFramebuffer(D.__webglFramebuffer[Z]),D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[Z]);else{if(i.deleteFramebuffer(D.__webglFramebuffer),D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Z=0;Z<D.__webglColorRenderbuffer.length;Z++)D.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[Z]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Z=0,re=v.length;Z<re;Z++){const ge=n.get(v[Z]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(v[Z])}n.remove(v),n.remove(b)}let ie=0;function ee(){ie=0}function B(){const b=ie;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),ie+=1,b}function ue(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.encoding),v.join()}function oe(b,v){const D=n.get(b);if(b.isVideoTexture&&fe(b),b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){const V=b.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(D,b,v);return}}t.bindTexture(3553,D.__webglTexture,33984+v)}function H(b,v){const D=n.get(b);if(b.version>0&&D.__version!==b.version){Se(D,b,v);return}t.bindTexture(35866,D.__webglTexture,33984+v)}function G(b,v){const D=n.get(b);if(b.version>0&&D.__version!==b.version){Se(D,b,v);return}t.bindTexture(32879,D.__webglTexture,33984+v)}function ae(b,v){const D=n.get(b);if(b.version>0&&D.__version!==b.version){Ae(D,b,v);return}t.bindTexture(34067,D.__webglTexture,33984+v)}const pe={[Ss]:10497,[en]:33071,[mo]:33648},_e={[bt]:9728,[il]:9984,[sl]:9986,[Bt]:9729,[Ef]:9985,[Ps]:9987};function W(b,v,D){if(D?(i.texParameteri(b,10242,pe[v.wrapS]),i.texParameteri(b,10243,pe[v.wrapT]),(b===32879||b===35866)&&i.texParameteri(b,32882,pe[v.wrapR]),i.texParameteri(b,10240,_e[v.magFilter]),i.texParameteri(b,10241,_e[v.minFilter])):(i.texParameteri(b,10242,33071),i.texParameteri(b,10243,33071),(b===32879||b===35866)&&i.texParameteri(b,32882,33071),(v.wrapS!==en||v.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,10240,I(v.magFilter)),i.texParameteri(b,10241,I(v.minFilter)),v.minFilter!==bt&&v.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");if(v.type===ii&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===ur&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(b,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Ue(b,v){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",X));const V=v.source;let Z=d.get(V);Z===void 0&&(Z={},d.set(V,Z));const re=ue(v);if(re!==b.__cacheKey){Z[re]===void 0&&(Z[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Z[re].usedTimes++;const ge=Z[b.__cacheKey];ge!==void 0&&(Z[b.__cacheKey].usedTimes--,ge.usedTimes===0&&O(v)),b.__cacheKey=re,b.__webglTexture=Z[re].texture}return D}function Se(b,v,D){let V=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=35866),v.isData3DTexture&&(V=32879);const Z=Ue(b,v),re=v.source;t.bindTexture(V,b.__webglTexture,33984+D);const ge=n.get(re);if(re.version!==ge.__version||Z===!0){t.activeTexture(33984+D),i.pixelStorei(37440,v.flipY),i.pixelStorei(37441,v.premultiplyAlpha),i.pixelStorei(3317,v.unpackAlignment),i.pixelStorei(37443,0);const he=S(v)&&M(v.image)===!1;let j=y(v.image,he,!1,u);j=ne(v,j);const we=M(j)||a,Le=r.convert(v.format,v.encoding);let be=r.convert(v.type),Ee=x(v.internalFormat,Le,be,v.encoding,v.isVideoTexture);W(V,v,we);let xe;const Pe=v.mipmaps,tt=a&&v.isVideoTexture!==!0,pt=ge.__version===void 0||Z===!0,P=L(v,j,we);if(v.isDepthTexture)Ee=6402,a?v.type===ii?Ee=36012:v.type===Pi?Ee=33190:v.type===ms?Ee=35056:Ee=33189:v.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Oi&&Ee===6402&&v.type!==Af&&v.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Pi,be=r.convert(v.type)),v.format===ws&&Ee===6402&&(Ee=34041,v.type!==ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ms,be=r.convert(v.type))),pt&&(tt?t.texStorage2D(3553,1,Ee,j.width,j.height):t.texImage2D(3553,0,Ee,j.width,j.height,0,Le,be,null));else if(v.isDataTexture)if(Pe.length>0&&we){tt&&pt&&t.texStorage2D(3553,P,Ee,Pe[0].width,Pe[0].height);for(let K=0,ce=Pe.length;K<ce;K++)xe=Pe[K],tt?t.texSubImage2D(3553,K,0,0,xe.width,xe.height,Le,be,xe.data):t.texImage2D(3553,K,Ee,xe.width,xe.height,0,Le,be,xe.data);v.generateMipmaps=!1}else tt?(pt&&t.texStorage2D(3553,P,Ee,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,Le,be,j.data)):t.texImage2D(3553,0,Ee,j.width,j.height,0,Le,be,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){tt&&pt&&t.texStorage3D(35866,P,Ee,Pe[0].width,Pe[0].height,j.depth);for(let K=0,ce=Pe.length;K<ce;K++)xe=Pe[K],v.format!==tn?Le!==null?tt?t.compressedTexSubImage3D(35866,K,0,0,0,xe.width,xe.height,j.depth,Le,xe.data,0,0):t.compressedTexImage3D(35866,K,Ee,xe.width,xe.height,j.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(35866,K,0,0,0,xe.width,xe.height,j.depth,Le,be,xe.data):t.texImage3D(35866,K,Ee,xe.width,xe.height,j.depth,0,Le,be,xe.data)}else{tt&&pt&&t.texStorage2D(3553,P,Ee,Pe[0].width,Pe[0].height);for(let K=0,ce=Pe.length;K<ce;K++)xe=Pe[K],v.format!==tn?Le!==null?tt?t.compressedTexSubImage2D(3553,K,0,0,xe.width,xe.height,Le,xe.data):t.compressedTexImage2D(3553,K,Ee,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(3553,K,0,0,xe.width,xe.height,Le,be,xe.data):t.texImage2D(3553,K,Ee,xe.width,xe.height,0,Le,be,xe.data)}else if(v.isDataArrayTexture)tt?(pt&&t.texStorage3D(35866,P,Ee,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,Le,be,j.data)):t.texImage3D(35866,0,Ee,j.width,j.height,j.depth,0,Le,be,j.data);else if(v.isData3DTexture)tt?(pt&&t.texStorage3D(32879,P,Ee,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,Le,be,j.data)):t.texImage3D(32879,0,Ee,j.width,j.height,j.depth,0,Le,be,j.data);else if(v.isFramebufferTexture){if(pt)if(tt)t.texStorage2D(3553,P,Ee,j.width,j.height);else{let K=j.width,ce=j.height;for(let ve=0;ve<P;ve++)t.texImage2D(3553,ve,Ee,K,ce,0,Le,be,null),K>>=1,ce>>=1}}else if(Pe.length>0&&we){tt&&pt&&t.texStorage2D(3553,P,Ee,Pe[0].width,Pe[0].height);for(let K=0,ce=Pe.length;K<ce;K++)xe=Pe[K],tt?t.texSubImage2D(3553,K,0,0,Le,be,xe):t.texImage2D(3553,K,Ee,Le,be,xe);v.generateMipmaps=!1}else tt?(pt&&t.texStorage2D(3553,P,Ee,j.width,j.height),t.texSubImage2D(3553,0,0,0,Le,be,j)):t.texImage2D(3553,0,Ee,Le,be,j);R(v,we)&&N(V),ge.__version=re.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ae(b,v,D){if(v.image.length!==6)return;const V=Ue(b,v),Z=v.source;t.bindTexture(34067,b.__webglTexture,33984+D);const re=n.get(Z);if(Z.version!==re.__version||V===!0){t.activeTexture(33984+D),i.pixelStorei(37440,v.flipY),i.pixelStorei(37441,v.premultiplyAlpha),i.pixelStorei(3317,v.unpackAlignment),i.pixelStorei(37443,0);const ge=v.isCompressedTexture||v.image[0].isCompressedTexture,he=v.image[0]&&v.image[0].isDataTexture,j=[];for(let K=0;K<6;K++)!ge&&!he?j[K]=y(v.image[K],!1,!0,c):j[K]=he?v.image[K].image:v.image[K],j[K]=ne(v,j[K]);const we=j[0],Le=M(we)||a,be=r.convert(v.format,v.encoding),Ee=r.convert(v.type),xe=x(v.internalFormat,be,Ee,v.encoding),Pe=a&&v.isVideoTexture!==!0,tt=re.__version===void 0||V===!0;let pt=L(v,we,Le);W(34067,v,Le);let P;if(ge){Pe&&tt&&t.texStorage2D(34067,pt,xe,we.width,we.height);for(let K=0;K<6;K++){P=j[K].mipmaps;for(let ce=0;ce<P.length;ce++){const ve=P[ce];v.format!==tn?be!==null?Pe?t.compressedTexSubImage2D(34069+K,ce,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(34069+K,ce,xe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+K,ce,0,0,ve.width,ve.height,be,Ee,ve.data):t.texImage2D(34069+K,ce,xe,ve.width,ve.height,0,be,Ee,ve.data)}}}else{P=v.mipmaps,Pe&&tt&&(P.length>0&&pt++,t.texStorage2D(34067,pt,xe,j[0].width,j[0].height));for(let K=0;K<6;K++)if(he){Pe?t.texSubImage2D(34069+K,0,0,0,j[K].width,j[K].height,be,Ee,j[K].data):t.texImage2D(34069+K,0,xe,j[K].width,j[K].height,0,be,Ee,j[K].data);for(let ce=0;ce<P.length;ce++){const Te=P[ce].image[K].image;Pe?t.texSubImage2D(34069+K,ce+1,0,0,Te.width,Te.height,be,Ee,Te.data):t.texImage2D(34069+K,ce+1,xe,Te.width,Te.height,0,be,Ee,Te.data)}}else{Pe?t.texSubImage2D(34069+K,0,0,0,be,Ee,j[K]):t.texImage2D(34069+K,0,xe,be,Ee,j[K]);for(let ce=0;ce<P.length;ce++){const ve=P[ce];Pe?t.texSubImage2D(34069+K,ce+1,0,0,be,Ee,ve.image[K]):t.texImage2D(34069+K,ce+1,xe,be,Ee,ve.image[K])}}}R(v,Le)&&N(34067),re.__version=Z.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ye(b,v,D,V,Z){const re=r.convert(D.format,D.encoding),ge=r.convert(D.type),he=x(D.internalFormat,re,ge,D.encoding);n.get(v).__hasExternalTextures||(Z===32879||Z===35866?t.texImage3D(Z,0,he,v.width,v.height,v.depth,0,re,ge,null):t.texImage2D(Z,0,he,v.width,v.height,0,re,ge,null)),t.bindFramebuffer(36160,b),te(v)?f.framebufferTexture2DMultisampleEXT(36160,V,Z,n.get(D).__webglTexture,0,le(v)):(Z===3553||Z>=34069&&Z<=34074)&&i.framebufferTexture2D(36160,V,Z,n.get(D).__webglTexture,0),t.bindFramebuffer(36160,null)}function Xe(b,v,D){if(i.bindRenderbuffer(36161,b),v.depthBuffer&&!v.stencilBuffer){let V=33189;if(D||te(v)){const Z=v.depthTexture;Z&&Z.isDepthTexture&&(Z.type===ii?V=36012:Z.type===Pi&&(V=33190));const re=le(v);te(v)?f.renderbufferStorageMultisampleEXT(36161,re,V,v.width,v.height):i.renderbufferStorageMultisample(36161,re,V,v.width,v.height)}else i.renderbufferStorage(36161,V,v.width,v.height);i.framebufferRenderbuffer(36160,36096,36161,b)}else if(v.depthBuffer&&v.stencilBuffer){const V=le(v);D&&te(v)===!1?i.renderbufferStorageMultisample(36161,V,35056,v.width,v.height):te(v)?f.renderbufferStorageMultisampleEXT(36161,V,35056,v.width,v.height):i.renderbufferStorage(36161,34041,v.width,v.height),i.framebufferRenderbuffer(36160,33306,36161,b)}else{const V=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Z=0;Z<V.length;Z++){const re=V[Z],ge=r.convert(re.format,re.encoding),he=r.convert(re.type),j=x(re.internalFormat,ge,he,re.encoding),we=le(v);D&&te(v)===!1?i.renderbufferStorageMultisample(36161,we,j,v.width,v.height):te(v)?f.renderbufferStorageMultisampleEXT(36161,we,j,v.width,v.height):i.renderbufferStorage(36161,j,v.width,v.height)}}i.bindRenderbuffer(36161,null)}function E(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),oe(v.depthTexture,0);const V=n.get(v.depthTexture).__webglTexture,Z=le(v);if(v.depthTexture.format===Oi)te(v)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,V,0,Z):i.framebufferTexture2D(36160,36096,3553,V,0);else if(v.depthTexture.format===ws)te(v)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,V,0,Z):i.framebufferTexture2D(36160,33306,3553,V,0);else throw new Error("Unknown depthTexture format")}function C(b){const v=n.get(b),D=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");E(v.__webglFramebuffer,b)}else if(D){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(36160,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]=i.createRenderbuffer(),Xe(v.__webglDepthbuffer[V],b,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Xe(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function k(b,v,D){const V=n.get(b);v!==void 0&&ye(V.__webglFramebuffer,b,b.texture,36064,3553),D!==void 0&&C(b)}function J(b){const v=b.texture,D=n.get(b),V=n.get(v);b.addEventListener("dispose",de),b.isWebGLMultipleRenderTargets!==!0&&(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=v.version,o.memory.textures++);const Z=b.isWebGLCubeRenderTarget===!0,re=b.isWebGLMultipleRenderTargets===!0,ge=M(b)||a;if(Z){D.__webglFramebuffer=[];for(let he=0;he<6;he++)D.__webglFramebuffer[he]=i.createFramebuffer()}else{if(D.__webglFramebuffer=i.createFramebuffer(),re)if(s.drawBuffers){const he=b.texture;for(let j=0,we=he.length;j<we;j++){const Le=n.get(he[j]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&te(b)===!1){const he=re?v:[v];D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer);for(let j=0;j<he.length;j++){const we=he[j];D.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(36161,D.__webglColorRenderbuffer[j]);const Le=r.convert(we.format,we.encoding),be=r.convert(we.type),Ee=x(we.internalFormat,Le,be,we.encoding,b.isXRRenderTarget===!0),xe=le(b);i.renderbufferStorageMultisample(36161,xe,Ee,b.width,b.height),i.framebufferRenderbuffer(36160,36064+j,36161,D.__webglColorRenderbuffer[j])}i.bindRenderbuffer(36161,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(D.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(Z){t.bindTexture(34067,V.__webglTexture),W(34067,v,ge);for(let he=0;he<6;he++)ye(D.__webglFramebuffer[he],b,v,36064,34069+he);R(v,ge)&&N(34067),t.unbindTexture()}else if(re){const he=b.texture;for(let j=0,we=he.length;j<we;j++){const Le=he[j],be=n.get(Le);t.bindTexture(3553,be.__webglTexture),W(3553,Le,ge),ye(D.__webglFramebuffer,b,Le,36064+j,3553),R(Le,ge)&&N(3553)}t.unbindTexture()}else{let he=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?he=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,V.__webglTexture),W(he,v,ge),ye(D.__webglFramebuffer,b,v,36064,he),R(v,ge)&&N(he),t.unbindTexture()}b.depthBuffer&&C(b)}function $(b){const v=M(b)||a,D=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let V=0,Z=D.length;V<Z;V++){const re=D[V];if(R(re,v)){const ge=b.isWebGLCubeRenderTarget?34067:3553,he=n.get(re).__webglTexture;t.bindTexture(ge,he),N(ge),t.unbindTexture()}}}function se(b){if(a&&b.samples>0&&te(b)===!1){const v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],D=b.width,V=b.height;let Z=16384;const re=[],ge=b.stencilBuffer?33306:36096,he=n.get(b),j=b.isWebGLMultipleRenderTargets===!0;if(j)for(let we=0;we<v.length;we++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),i.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let we=0;we<v.length;we++){re.push(36064+we),b.depthBuffer&&re.push(ge);const Le=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Le===!1&&(b.depthBuffer&&(Z|=256),b.stencilBuffer&&(Z|=1024)),j&&i.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[we]),Le===!0&&(i.invalidateFramebuffer(36008,[ge]),i.invalidateFramebuffer(36009,[ge])),j){const be=n.get(v[we]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,be,0)}i.blitFramebuffer(0,0,D,V,0,0,D,V,Z,9728),p&&i.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let we=0;we<v.length;we++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+we,36161,he.__webglColorRenderbuffer[we]);const Le=n.get(v[we]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),i.framebufferTexture2D(36009,36064+we,3553,Le,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function le(b){return Math.min(h,b.samples)}function te(b){const v=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function fe(b){const v=o.render.frame;g.get(b)!==v&&(g.set(b,v),b.update())}function ne(b,v){const D=b.encoding,V=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===ol||D!==ki&&(D===et?a===!1?e.has("EXT_sRGB")===!0&&V===tn?(b.format=ol,b.minFilter=Bt,b.generateMipmaps=!1):v=If.sRGBToLinear(v):(V!==tn||Z!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",D)),v}this.allocateTextureUnit=B,this.resetTextureUnits=ee,this.setTexture2D=oe,this.setTexture2DArray=H,this.setTexture3D=G,this.setTextureCube=ae,this.rebindTextures=k,this.setupRenderTarget=J,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=te}function cb(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===Bi)return 5121;if(r===Hg)return 32819;if(r===Gg)return 32820;if(r===Bg)return 5120;if(r===kg)return 5122;if(r===Af)return 5123;if(r===Vg)return 5124;if(r===Pi)return 5125;if(r===ii)return 5126;if(r===ur)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Wg)return 6406;if(r===tn)return 6408;if(r===qg)return 6409;if(r===Xg)return 6410;if(r===Oi)return 6402;if(r===ws)return 34041;if(r===jg)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ol)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Kg)return 6403;if(r===Yg)return 36244;if(r===$g)return 33319;if(r===Jg)return 33320;if(r===Zg)return 36249;if(r===Qo||r===ea||r===ta||r===na)if(o===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Qo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Qo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ea)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ta)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===na)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uc||r===zc||r===Bc||r===kc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Uc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vc||r===Hc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vc)return o===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Hc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gc||r===Wc||r===jc||r===qc||r===Xc||r===Kc||r===Yc||r===$c||r===Jc||r===Zc||r===Qc||r===eu||r===tu||r===nu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Gc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$c)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===iu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===iu)return o===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ms?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class ub extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Di extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hb={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n),_=this._getHandJoint(c,m);d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Di;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fb extends wt{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:Oi,u!==Oi&&u!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Oi&&(n=Pi),n===void 0&&u===ws&&(n=ms),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1}}class db extends Ds{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],w=[],y=new Set,M=new Map,S=new Ot;S.layers.enable(1),S.viewport=new it;const R=new Ot;R.layers.enable(2),R.viewport=new it;const N=[S,R],x=new ub;x.layers.enable(1),x.layers.enable(2);let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let G=_[H];return G===void 0&&(G=new Ra,_[H]=G),G.getTargetRaySpace()},this.getControllerGrip=function(H){let G=_[H];return G===void 0&&(G=new Ra,_[H]=G),G.getGripSpace()},this.getHand=function(H){let G=_[H];return G===void 0&&(G=new Ra,_[H]=G),G.getHandSpace()};function X(H){const G=w.indexOf(H.inputSource);if(G===-1)return;const ae=_[G];ae!==void 0&&ae.dispatchEvent({type:H.type,data:H.inputSource})}function de(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",de),s.removeEventListener("inputsourceschange",z);for(let H=0;H<_.length;H++){const G=w[H];G!==null&&(w[H]=null,_[H].disconnect(G))}L=null,I=null,e.setRenderTarget(m),f=null,h=null,u=null,s=null,d=null,oe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",de),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,G),s.updateRenderState({baseLayer:f}),d=new Vi(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Bi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let G=null,ae=null,pe=null;g.depth&&(pe=g.stencil?35056:33190,G=g.stencil?ws:Oi,ae=g.stencil?ms:Pi);const _e={colorFormat:32856,depthFormat:pe,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(_e),s.updateRenderState({layers:[h]}),d=new Vi(h.textureWidth,h.textureHeight,{format:tn,type:Bi,depthTexture:new fb(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const W=e.properties.get(d);W.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(H){for(let G=0;G<H.removed.length;G++){const ae=H.removed[G],pe=w.indexOf(ae);pe>=0&&(w[pe]=null,_[pe].disconnect(ae))}for(let G=0;G<H.added.length;G++){const ae=H.added[G];let pe=w.indexOf(ae);if(pe===-1){for(let W=0;W<_.length;W++)if(W>=w.length){w.push(ae),pe=W;break}else if(w[W]===null){w[W]=ae,pe=W;break}if(pe===-1)break}const _e=_[pe];_e&&_e.connect(ae)}}const O=new A,Y=new A;function ie(H,G,ae){O.setFromMatrixPosition(G.matrixWorld),Y.setFromMatrixPosition(ae.matrixWorld);const pe=O.distanceTo(Y),_e=G.projectionMatrix.elements,W=ae.projectionMatrix.elements,Ue=_e[14]/(_e[10]-1),Se=_e[14]/(_e[10]+1),Ae=(_e[9]+1)/_e[5],ye=(_e[9]-1)/_e[5],Xe=(_e[8]-1)/_e[0],E=(W[8]+1)/W[0],C=Ue*Xe,k=Ue*E,J=pe/(-Xe+E),$=J*-Xe;G.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX($),H.translateZ(J),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const se=Ue+J,le=Se+J,te=C-$,fe=k+(pe-$),ne=Ae*Se/le*se,b=ye*Se/le*se;H.projectionMatrix.makePerspective(te,fe,ne,b,se,le)}function ee(H,G){G===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(G.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;x.near=R.near=S.near=H.near,x.far=R.far=S.far=H.far,(L!==x.near||I!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,I=x.far);const G=H.parent,ae=x.cameras;ee(x,G);for(let _e=0;_e<ae.length;_e++)ee(ae[_e],G);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),H.matrix.copy(x.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const pe=H.children;for(let _e=0,W=pe.length;_e<W;_e++)pe[_e].updateMatrixWorld(!0);ae.length===2?ie(x,S,R):x.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(H){h!==null&&(h.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.getPlanes=function(){return y};let B=null;function ue(H,G){if(c=G.getViewerPose(l||o),p=G,c!==null){const ae=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let pe=!1;ae.length!==x.cameras.length&&(x.cameras.length=0,pe=!0);for(let _e=0;_e<ae.length;_e++){const W=ae[_e];let Ue=null;if(f!==null)Ue=f.getViewport(W);else{const Ae=u.getViewSubImage(h,W);Ue=Ae.viewport,_e===0&&(e.setRenderTargetTextures(d,Ae.colorTexture,h.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(d))}let Se=N[_e];Se===void 0&&(Se=new Ot,Se.layers.enable(_e),Se.viewport=new it,N[_e]=Se),Se.matrix.fromArray(W.transform.matrix),Se.projectionMatrix.fromArray(W.projectionMatrix),Se.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),_e===0&&x.matrix.copy(Se.matrix),pe===!0&&x.cameras.push(Se)}}for(let ae=0;ae<_.length;ae++){const pe=w[ae],_e=_[ae];pe!==null&&_e!==void 0&&_e.update(pe,G,l||o)}if(B&&B(H,G),G.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:G.detectedPlanes});let ae=null;for(const pe of y)G.detectedPlanes.has(pe)||(ae===null&&(ae=[]),ae.push(pe));if(ae!==null)for(const pe of ae)y.delete(pe),M.delete(pe),n.dispatchEvent({type:"planeremoved",data:pe});for(const pe of G.detectedPlanes)if(!y.has(pe))y.add(pe),M.set(pe,G.lastChangedTime),n.dispatchEvent({type:"planeadded",data:pe});else{const _e=M.get(pe);pe.lastChangedTime>_e&&(M.set(pe,pe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:pe}))}}p=null}const oe=new kf;oe.setAnimationLoop(ue),this.setAnimationLoop=function(H){B=H},this.dispose=function(){}}}function pb(i,e){function t(m,d){d.color.getRGB(m.fogColor.value,zf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,_,w,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),p(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,_,w):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===sn&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===sn&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const M=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*M}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let w;d.map?w=d.map:d.specularMap?w=d.specularMap:d.displacementMap?w=d.displacementMap:d.normalMap?w=d.normalMap:d.bumpMap?w=d.bumpMap:d.roughnessMap?w=d.roughnessMap:d.metalnessMap?w=d.metalnessMap:d.alphaMap?w=d.alphaMap:d.emissiveMap?w=d.emissiveMap:d.clearcoatMap?w=d.clearcoatMap:d.clearcoatNormalMap?w=d.clearcoatNormalMap:d.clearcoatRoughnessMap?w=d.clearcoatRoughnessMap:d.iridescenceMap?w=d.iridescenceMap:d.iridescenceThicknessMap?w=d.iridescenceThicknessMap:d.specularIntensityMap?w=d.specularIntensityMap:d.specularColorMap?w=d.specularColorMap:d.transmissionMap?w=d.transmissionMap:d.thicknessMap?w=d.thicknessMap:d.sheenColorMap?w=d.sheenColorMap:d.sheenRoughnessMap&&(w=d.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let y;d.aoMap?y=d.aoMap:d.lightMap&&(y=d.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uv2Transform.value.copy(y.matrix))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,_,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=w*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===sn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function mb(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(w,y){const M=y.program;n.uniformBlockBinding(w,M)}function c(w,y){let M=s[w.id];M===void 0&&(g(w),M=u(w),s[w.id]=M,w.addEventListener("dispose",d));const S=y.program;n.updateUBOMapping(w,S);const R=e.render.frame;r[w.id]!==R&&(f(w),r[w.id]=R)}function u(w){const y=h();w.__bindingPointIndex=y;const M=i.createBuffer(),S=w.__size,R=w.usage;return i.bindBuffer(35345,M),i.bufferData(35345,S,R),i.bindBuffer(35345,null),i.bindBufferBase(35345,y,M),M}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const y=s[w.id],M=w.uniforms,S=w.__cache;i.bindBuffer(35345,y);for(let R=0,N=M.length;R<N;R++){const x=M[R];if(p(x,R,S)===!0){const L=x.value,I=x.__offset;typeof L=="number"?(x.__data[0]=L,i.bufferSubData(35345,I,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):L.toArray(x.__data),i.bufferSubData(35345,I,x.__data))}}i.bindBuffer(35345,null)}function p(w,y,M){const S=w.value;if(M[y]===void 0)return typeof S=="number"?M[y]=S:M[y]=S.clone(),!0;if(typeof S=="number"){if(M[y]!==S)return M[y]=S,!0}else{const R=M[y];if(R.equals(S)===!1)return R.copy(S),!0}return!1}function g(w){const y=w.uniforms;let M=0;const S=16;let R=0;for(let N=0,x=y.length;N<x;N++){const L=y[N],I=m(L);if(L.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,N>0){R=M%S;const X=S-R;R!==0&&X-I.boundary<0&&(M+=S-R,L.__offset=M)}M+=I.storage}return R=M%S,R>0&&(M+=S-R),w.__size=M,w.__cache={},this}function m(w){const y=w.value,M={boundary:0,storage:0};return typeof y=="number"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function d(w){const y=w.target;y.removeEventListener("dispose",d);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function _(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function gb(){const i=pr("canvas");return i.style.display="block",i}function jf(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:gb(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ki,this.physicallyCorrectLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;const m=this;let d=!1,_=0,w=0,y=null,M=-1,S=null;const R=new it,N=new it;let x=null,L=e.width,I=e.height,X=1,de=null,z=null;const O=new it(0,0,L,I),Y=new it(0,0,L,I);let ie=!1;const ee=new Oo;let B=!1,ue=!1,oe=null;const H=new Be,G=new Me,ae=new A,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return y===null?X:1}let W=t;function Ue(T,U){for(let q=0;q<T.length;q++){const F=T[q],Q=e.getContext(F,U);if(Q!==null)return Q}return null}try{const T={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fl}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Pe,!1),W===null){const U=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&U.shift(),W=Ue(U,T),W===null)throw Ue(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,Ae,ye,Xe,E,C,k,J,$,se,le,te,fe,ne,b,v,D,V,Z,re,ge,he,j,we;function Le(){Se=new Av(W),Ae=new bv(W,Se,i),Se.init(Ae),he=new cb(W,Se,Ae),ye=new ab(W,Se,Ae),Xe=new Rv,E=new Xy,C=new lb(W,Se,ye,E,Ae,he,Xe),k=new Sv(m),J=new Ev(m),$=new B_(W,Ae),j=new vv(W,Se,$,Ae),se=new Cv(W,$,Xe,j),le=new Nv(W,se,$,Xe),Z=new Iv(W,Ae,C),v=new Mv(E),te=new qy(m,k,J,Se,Ae,j,v),fe=new pb(m,E),ne=new Yy,b=new tb(Se,Ae),V=new xv(m,k,J,ye,le,u,o),D=new ob(m,le,Ae),we=new mb(W,Xe,Ae,ye),re=new yv(W,Se,Xe,Ae),ge=new Lv(W,Se,Xe,Ae),Xe.programs=te.programs,m.capabilities=Ae,m.extensions=Se,m.properties=E,m.renderLists=ne,m.shadowMap=D,m.state=ye,m.info=Xe}Le();const be=new db(m,W);this.xr=be,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(L,I,!1))},this.getSize=function(T){return T.set(L,I)},this.setSize=function(T,U,q){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,I=U,e.width=Math.floor(T*X),e.height=Math.floor(U*X),q!==!1&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(L*X,I*X).floor()},this.setDrawingBufferSize=function(T,U,q){L=T,I=U,X=q,e.width=Math.floor(T*q),e.height=Math.floor(U*q),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(O)},this.setViewport=function(T,U,q,F){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,U,q,F),ye.viewport(R.copy(O).multiplyScalar(X).floor())},this.getScissor=function(T){return T.copy(Y)},this.setScissor=function(T,U,q,F){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,U,q,F),ye.scissor(N.copy(Y).multiplyScalar(X).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(T){ye.setScissorTest(ie=T)},this.setOpaqueSort=function(T){de=T},this.setTransparentSort=function(T){z=T},this.getClearColor=function(T){return T.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(T=!0,U=!0,q=!0){let F=0;T&&(F|=16384),U&&(F|=256),q&&(F|=1024),W.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Pe,!1),ne.dispose(),b.dispose(),E.dispose(),k.dispose(),J.dispose(),le.dispose(),j.dispose(),we.dispose(),te.dispose(),be.dispose(),be.removeEventListener("sessionstart",ve),be.removeEventListener("sessionend",Te),oe&&(oe.dispose(),oe=null),Je.stop()};function Ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=Xe.autoReset,U=D.enabled,q=D.autoUpdate,F=D.needsUpdate,Q=D.type;Le(),Xe.autoReset=T,D.enabled=U,D.autoUpdate=q,D.needsUpdate=F,D.type=Q}function Pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function tt(T){const U=T.target;U.removeEventListener("dispose",tt),pt(U)}function pt(T){P(T),E.remove(T)}function P(T){const U=E.get(T).programs;U!==void 0&&(U.forEach(function(q){te.releaseProgram(q)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,q,F,Q,Ce){U===null&&(U=pe);const De=Q.isMesh&&Q.matrixWorld.determinant()<0,ze=ud(T,U,q,F,Q);ye.setMaterial(F,De);let ke=q.index,Ke=1;F.wireframe===!0&&(ke=se.getWireframeAttribute(q),Ke=2);const Ve=q.drawRange,He=q.attributes.position;let lt=Ve.start*Ke,Ht=(Ve.start+Ve.count)*Ke;Ce!==null&&(lt=Math.max(lt,Ce.start*Ke),Ht=Math.min(Ht,(Ce.start+Ce.count)*Ke)),ke!==null?(lt=Math.max(lt,0),Ht=Math.min(Ht,ke.count)):He!=null&&(lt=Math.max(lt,0),Ht=Math.min(Ht,He.count));const Rn=Ht-lt;if(Rn<0||Rn===1/0)return;j.setup(Q,F,ze,q,ke);let fi,ct=re;if(ke!==null&&(fi=$.get(ke),ct=ge,ct.setIndex(fi)),Q.isMesh)F.wireframe===!0?(ye.setLineWidth(F.wireframeLinewidth*_e()),ct.setMode(1)):ct.setMode(4);else if(Q.isLine){let Ge=F.linewidth;Ge===void 0&&(Ge=1),ye.setLineWidth(Ge*_e()),Q.isLineSegments?ct.setMode(1):Q.isLineLoop?ct.setMode(2):ct.setMode(3)}else Q.isPoints?ct.setMode(0):Q.isSprite&&ct.setMode(4);if(Q.isInstancedMesh)ct.renderInstances(lt,Rn,Q.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Vo=Math.min(q.instanceCount,Ge);ct.renderInstances(lt,Rn,Vo)}else ct.render(lt,Rn)},this.compile=function(T,U){function q(F,Q,Ce){F.transparent===!0&&F.side===pn?(F.side=sn,F.needsUpdate=!0,Yt(F,Q,Ce),F.side=zi,F.needsUpdate=!0,Yt(F,Q,Ce),F.side=pn):Yt(F,Q,Ce)}f=b.get(T),f.init(),g.push(f),T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(m.physicallyCorrectLights),T.traverse(function(F){const Q=F.material;if(Q)if(Array.isArray(Q))for(let Ce=0;Ce<Q.length;Ce++){const De=Q[Ce];q(De,T,F)}else q(Q,T,F)}),g.pop(),f=null};let K=null;function ce(T){K&&K(T)}function ve(){Je.stop()}function Te(){Je.start()}const Je=new kf;Je.setAnimationLoop(ce),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(T){K=T,be.setAnimationLoop(T),T===null?Je.stop():Je.start()},be.addEventListener("sessionstart",ve),be.addEventListener("sessionend",Te),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(U),U=be.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,U,y),f=b.get(T,g.length),f.init(),g.push(f),H.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(H),ue=this.localClippingEnabled,B=v.init(this.clippingPlanes,ue,U),h=ne.get(T,p.length),h.init(),p.push(h),mt(T,U,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(de,z),B===!0&&v.beginShadows();const q=f.state.shadowsArray;if(D.render(q,T,U),B===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(h,T),f.setupLights(m.physicallyCorrectLights),U.isArrayCamera){const F=U.cameras;for(let Q=0,Ce=F.length;Q<Ce;Q++){const De=F[Q];Tt(h,T,De,De.viewport)}}else Tt(h,T,U);y!==null&&(C.updateMultisampleRenderTarget(y),C.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(m,T,U),j.resetDefaultState(),M=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function mt(T,U,q,F){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){F&&ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(H);const De=le.update(T),ze=T.material;ze.visible&&h.push(T,De,ze,q,ae.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Xe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Xe.render.frame),!T.frustumCulled||ee.intersectsObject(T))){F&&ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(H);const De=le.update(T),ze=T.material;if(Array.isArray(ze)){const ke=De.groups;for(let Ke=0,Ve=ke.length;Ke<Ve;Ke++){const He=ke[Ke],lt=ze[He.materialIndex];lt&&lt.visible&&h.push(T,De,lt,q,ae.z,He)}}else ze.visible&&h.push(T,De,ze,q,ae.z,null)}}const Ce=T.children;for(let De=0,ze=Ce.length;De<ze;De++)mt(Ce[De],U,q,F)}function Tt(T,U,q,F){const Q=T.opaque,Ce=T.transmissive,De=T.transparent;f.setupLightsView(q),Ce.length>0&&hi(Q,U,q),F&&ye.viewport(R.copy(F)),Q.length>0&&rt(Q,U,q),Ce.length>0&&rt(Ce,U,q),De.length>0&&rt(De,U,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function hi(T,U,q){const F=Ae.isWebGL2;oe===null&&(oe=new Vi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?ur:Bi,minFilter:Ps,samples:F&&r===!0?4:0})),m.getDrawingBufferSize(G),F?oe.setSize(G.x,G.y):oe.setSize(go(G.x),go(G.y));const Q=m.getRenderTarget();m.setRenderTarget(oe),m.clear();const Ce=m.toneMapping;m.toneMapping=kn,rt(T,U,q),m.toneMapping=Ce,C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe),m.setRenderTarget(Q)}function rt(T,U,q){const F=U.isScene===!0?U.overrideMaterial:null;for(let Q=0,Ce=T.length;Q<Ce;Q++){const De=T[Q],ze=De.object,ke=De.geometry,Ke=F===null?De.material:F,Ve=De.group;ze.layers.test(q.layers)&&Ln(ze,U,q,ke,Ke,Ve)}}function Ln(T,U,q,F,Q,Ce){T.onBeforeRender(m,U,q,F,Q,Ce),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(m,U,q,F,T,Ce),Q.transparent===!0&&Q.side===pn?(Q.side=sn,Q.needsUpdate=!0,m.renderBufferDirect(q,U,F,Q,T,Ce),Q.side=zi,Q.needsUpdate=!0,m.renderBufferDirect(q,U,F,Q,T,Ce),Q.side=pn):m.renderBufferDirect(q,U,F,Q,T,Ce),T.onAfterRender(m,U,q,F,Q,Ce)}function Yt(T,U,q){U.isScene!==!0&&(U=pe);const F=E.get(T),Q=f.state.lights,Ce=f.state.shadowsArray,De=Q.state.version,ze=te.getParameters(T,Q.state,Ce,U,q),ke=te.getProgramCacheKey(ze);let Ke=F.programs;F.environment=T.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(T.isMeshStandardMaterial?J:k).get(T.envMap||F.environment),Ke===void 0&&(T.addEventListener("dispose",tt),Ke=new Map,F.programs=Ke);let Ve=Ke.get(ke);if(Ve!==void 0){if(F.currentProgram===Ve&&F.lightsStateVersion===De)return nc(T,ze),Ve}else ze.uniforms=te.getUniforms(T),T.onBuild(q,ze,m),T.onBeforeCompile(ze,m),Ve=te.acquireProgram(ze,ke),Ke.set(ke,Ve),F.uniforms=ze.uniforms;const He=F.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=v.uniform),nc(T,ze),F.needsLights=fd(T),F.lightsStateVersion=De,F.needsLights&&(He.ambientLightColor.value=Q.state.ambient,He.lightProbe.value=Q.state.probe,He.directionalLights.value=Q.state.directional,He.directionalLightShadows.value=Q.state.directionalShadow,He.spotLights.value=Q.state.spot,He.spotLightShadows.value=Q.state.spotShadow,He.rectAreaLights.value=Q.state.rectArea,He.ltc_1.value=Q.state.rectAreaLTC1,He.ltc_2.value=Q.state.rectAreaLTC2,He.pointLights.value=Q.state.point,He.pointLightShadows.value=Q.state.pointShadow,He.hemisphereLights.value=Q.state.hemi,He.directionalShadowMap.value=Q.state.directionalShadowMap,He.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,He.spotShadowMap.value=Q.state.spotShadowMap,He.spotLightMatrix.value=Q.state.spotLightMatrix,He.spotLightMap.value=Q.state.spotLightMap,He.pointShadowMap.value=Q.state.pointShadowMap,He.pointShadowMatrix.value=Q.state.pointShadowMatrix);const lt=Ve.getUniforms(),Ht=co.seqWithValue(lt.seq,He);return F.currentProgram=Ve,F.uniformsList=Ht,Ve}function nc(T,U){const q=E.get(T);q.outputEncoding=U.outputEncoding,q.instancing=U.instancing,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function ud(T,U,q,F,Q){U.isScene!==!0&&(U=pe),C.resetTextureUnits();const Ce=U.fog,De=F.isMeshStandardMaterial?U.environment:null,ze=y===null?m.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:ki,ke=(F.isMeshStandardMaterial?J:k).get(F.envMap||De),Ke=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!F.normalMap&&!!q.attributes.tangent,He=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,Ht=!!q.morphAttributes.color,Rn=F.toneMapped?m.toneMapping:kn,fi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ct=fi!==void 0?fi.length:0,Ge=E.get(F),Vo=f.state.lights;if(B===!0&&(ue===!0||T!==S)){const Gt=T===S&&F.id===M;v.setState(F,T,Gt)}let gt=!1;F.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Vo.state.version||Ge.outputEncoding!==ze||Q.isInstancedMesh&&Ge.instancing===!1||!Q.isInstancedMesh&&Ge.instancing===!0||Q.isSkinnedMesh&&Ge.skinning===!1||!Q.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==ke||F.fog===!0&&Ge.fog!==Ce||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==v.numPlanes||Ge.numIntersection!==v.numIntersection)||Ge.vertexAlphas!==Ke||Ge.vertexTangents!==Ve||Ge.morphTargets!==He||Ge.morphNormals!==lt||Ge.morphColors!==Ht||Ge.toneMapping!==Rn||Ae.isWebGL2===!0&&Ge.morphTargetsCount!==ct)&&(gt=!0):(gt=!0,Ge.__version=F.version);let di=Ge.currentProgram;gt===!0&&(di=Yt(F,U,Q));let ic=!1,ks=!1,Ho=!1;const Rt=di.getUniforms(),pi=Ge.uniforms;if(ye.useProgram(di.program)&&(ic=!0,ks=!0,Ho=!0),F.id!==M&&(M=F.id,ks=!0),ic||S!==T){if(Rt.setValue(W,"projectionMatrix",T.projectionMatrix),Ae.logarithmicDepthBuffer&&Rt.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,ks=!0,Ho=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Gt=Rt.map.cameraPosition;Gt!==void 0&&Gt.setValue(W,ae.setFromMatrixPosition(T.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Rt.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Q.isSkinnedMesh)&&Rt.setValue(W,"viewMatrix",T.matrixWorldInverse)}if(Q.isSkinnedMesh){Rt.setOptional(W,Q,"bindMatrix"),Rt.setOptional(W,Q,"bindMatrixInverse");const Gt=Q.skeleton;Gt&&(Ae.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),Rt.setValue(W,"boneTexture",Gt.boneTexture,C),Rt.setValue(W,"boneTextureSize",Gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Go=q.morphAttributes;if((Go.position!==void 0||Go.normal!==void 0||Go.color!==void 0&&Ae.isWebGL2===!0)&&Z.update(Q,q,F,di),(ks||Ge.receiveShadow!==Q.receiveShadow)&&(Ge.receiveShadow=Q.receiveShadow,Rt.setValue(W,"receiveShadow",Q.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(pi.envMap.value=ke,pi.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ks&&(Rt.setValue(W,"toneMappingExposure",m.toneMappingExposure),Ge.needsLights&&hd(pi,Ho),Ce&&F.fog===!0&&fe.refreshFogUniforms(pi,Ce),fe.refreshMaterialUniforms(pi,F,X,I,oe),co.upload(W,Ge.uniformsList,pi,C)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(co.upload(W,Ge.uniformsList,pi,C),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Rt.setValue(W,"center",Q.center),Rt.setValue(W,"modelViewMatrix",Q.modelViewMatrix),Rt.setValue(W,"normalMatrix",Q.normalMatrix),Rt.setValue(W,"modelMatrix",Q.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Gt=F.uniformsGroups;for(let Wo=0,dd=Gt.length;Wo<dd;Wo++)if(Ae.isWebGL2){const sc=Gt[Wo];we.update(sc,di),we.bind(sc,di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return di}function hd(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function fd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,U,q){E.get(T.texture).__webglTexture=U,E.get(T.depthTexture).__webglTexture=q;const F=E.get(T);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const q=E.get(T);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,q=0){y=T,_=U,w=q;let F=!0,Q=null,Ce=!1,De=!1;if(T){const ke=E.get(T);ke.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),F=!1):ke.__webglFramebuffer===void 0?C.setupRenderTarget(T):ke.__hasExternalTextures&&C.rebindTextures(T,E.get(T.texture).__webglTexture,E.get(T.depthTexture).__webglTexture);const Ke=T.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(De=!0);const Ve=E.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Q=Ve[U],Ce=!0):Ae.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?Q=E.get(T).__webglMultisampledFramebuffer:Q=Ve,R.copy(T.viewport),N.copy(T.scissor),x=T.scissorTest}else R.copy(O).multiplyScalar(X).floor(),N.copy(Y).multiplyScalar(X).floor(),x=ie;if(ye.bindFramebuffer(36160,Q)&&Ae.drawBuffers&&F&&ye.drawBuffers(T,Q),ye.viewport(R),ye.scissor(N),ye.setScissorTest(x),Ce){const ke=E.get(T.texture);W.framebufferTexture2D(36160,36064,34069+U,ke.__webglTexture,q)}else if(De){const ke=E.get(T.texture),Ke=U||0;W.framebufferTextureLayer(36160,36064,ke.__webglTexture,q||0,Ke)}M=-1},this.readRenderTargetPixels=function(T,U,q,F,Q,Ce,De){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=E.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){ye.bindFramebuffer(36160,ze);try{const ke=T.texture,Ke=ke.format,Ve=ke.type;if(Ke!==tn&&he.convert(Ke)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ve===ur&&(Se.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ve!==Bi&&he.convert(Ve)!==W.getParameter(35738)&&!(Ve===ii&&(Ae.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-F&&q>=0&&q<=T.height-Q&&W.readPixels(U,q,F,Q,he.convert(Ke),he.convert(Ve),Ce)}finally{const ke=y!==null?E.get(y).__webglFramebuffer:null;ye.bindFramebuffer(36160,ke)}}},this.copyFramebufferToTexture=function(T,U,q=0){const F=Math.pow(2,-q),Q=Math.floor(U.image.width*F),Ce=Math.floor(U.image.height*F);C.setTexture2D(U,0),W.copyTexSubImage2D(3553,q,0,0,T.x,T.y,Q,Ce),ye.unbindTexture()},this.copyTextureToTexture=function(T,U,q,F=0){const Q=U.image.width,Ce=U.image.height,De=he.convert(q.format),ze=he.convert(q.type);C.setTexture2D(q,0),W.pixelStorei(37440,q.flipY),W.pixelStorei(37441,q.premultiplyAlpha),W.pixelStorei(3317,q.unpackAlignment),U.isDataTexture?W.texSubImage2D(3553,F,T.x,T.y,Q,Ce,De,ze,U.image.data):U.isCompressedTexture?W.compressedTexSubImage2D(3553,F,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,De,U.mipmaps[0].data):W.texSubImage2D(3553,F,T.x,T.y,De,ze,U.image),F===0&&q.generateMipmaps&&W.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,U,q,F,Q=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=T.max.x-T.min.x+1,De=T.max.y-T.min.y+1,ze=T.max.z-T.min.z+1,ke=he.convert(F.format),Ke=he.convert(F.type);let Ve;if(F.isData3DTexture)C.setTexture3D(F,0),Ve=32879;else if(F.isDataArrayTexture)C.setTexture2DArray(F,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,F.flipY),W.pixelStorei(37441,F.premultiplyAlpha),W.pixelStorei(3317,F.unpackAlignment);const He=W.getParameter(3314),lt=W.getParameter(32878),Ht=W.getParameter(3316),Rn=W.getParameter(3315),fi=W.getParameter(32877),ct=q.isCompressedTexture?q.mipmaps[0]:q.image;W.pixelStorei(3314,ct.width),W.pixelStorei(32878,ct.height),W.pixelStorei(3316,T.min.x),W.pixelStorei(3315,T.min.y),W.pixelStorei(32877,T.min.z),q.isDataTexture||q.isData3DTexture?W.texSubImage3D(Ve,Q,U.x,U.y,U.z,Ce,De,ze,ke,Ke,ct.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Ve,Q,U.x,U.y,U.z,Ce,De,ze,ke,ct.data)):W.texSubImage3D(Ve,Q,U.x,U.y,U.z,Ce,De,ze,ke,Ke,ct),W.pixelStorei(3314,He),W.pixelStorei(32878,lt),W.pixelStorei(3316,Ht),W.pixelStorei(3315,Rn),W.pixelStorei(32877,fi),Q===0&&F.generateMipmaps&&W.generateMipmap(Ve),ye.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){_=0,w=0,y=null,ye.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class _b extends jf{}_b.prototype.isWebGL1Renderer=!0;class xb extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class vb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new A;class Gl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vu=new A,Hu=new it,Gu=new it,yb=new A,Wu=new Be;class bb extends Xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Be,this.bindMatrixInverse=new Be}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;Hu.fromBufferAttribute(s.attributes.skinIndex,e),Gu.fromBufferAttribute(s.attributes.skinWeight,e),Vu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Gu.getComponent(r);if(o!==0){const a=Hu.getComponent(r);Wu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yb.copy(Vu).applyMatrix4(Wu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class qf extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Mb extends wt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=bt,u=bt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ju=new Be,Sb=new Be;class Wl{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Sb;ju.multiplyMatrices(a,t[r]),ju.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Wl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Rf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Mb(t,e,e,tn,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new qf),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class qu extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xu=new Be,Ku=new Be,Jr=[],wb=new Be,js=new Xt;class Tb extends Xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let s=0;s<n;s++)this.setMatrixAt(s,wb)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,Xu),Ku.multiplyMatrices(n,Xu),js.matrixWorld=Ku,js.raycast(e,Jr);for(let o=0,a=Jr.length;o<a;o++){const l=Jr[o];l.instanceId=r,l.object=this,t.push(l)}Jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Xf extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yu=new A,$u=new A,Ju=new Be,Pa=new No,Zr=new Ns;class jl extends st{constructor(e=new Vt,t=new Xf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Yu.fromBufferAttribute(t,s-1),$u.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Yu.distanceTo($u);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;Ju.copy(s).invert(),Pa.copy(e.ray).applyMatrix4(Ju);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new A,u=new A,h=new A,f=new A,p=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let y=_,M=w-1;y<M;y+=p){const S=g.getX(y),R=g.getX(y+1);if(c.fromBufferAttribute(d,S),u.fromBufferAttribute(d,R),Pa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),w=Math.min(d.count,o.start+o.count);for(let y=_,M=w-1;y<M;y+=p){if(c.fromBufferAttribute(d,y),u.fromBufferAttribute(d,y+1),Pa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Zu=new A,Qu=new A;class Eb extends jl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Zu.fromBufferAttribute(t,s),Qu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zu.distanceTo(Qu);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ab extends jl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Kf extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const eh=new Be,cl=new No,Qr=new Ns,eo=new A;class Uo extends st{constructor(e=new Vt,t=new Kf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;eh.copy(s).invert(),cl.copy(e.ray).applyMatrix4(eh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,m=p;g<m;g++){const d=c.getX(g);eo.fromBufferAttribute(h,d),th(eo,d,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p;g<m;g++)eo.fromBufferAttribute(h,g),th(eo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function th(i,e,t,n,s,r,o){const a=cl.distanceSqToPoint(i);if(a<t){const l=new A;cl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Me:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,s=[],r=[],o=[],a=new A,l=new Be;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(xt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(xt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ql extends An{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new Me,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Cb extends ql{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Xl(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const to=new A,Da=new Xl,Ia=new Xl,Na=new Xl;class Lb extends An{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(to.subVectors(s[0],s[1]).add(s[0]),c=to);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(to.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=to),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(u),p);m<1e-4&&(m=1),g<1e-4&&(g=m),d<1e-4&&(d=m),Da.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,d),Ia.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,d),Na.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,d)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ia.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Na.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Da.calc(l),Ia.calc(l),Na.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Rb(i,e){const t=1-i;return t*t*e}function Pb(i,e){return 2*(1-i)*i*e}function Db(i,e){return i*i*e}function nr(i,e,t,n){return Rb(i,e)+Pb(i,t)+Db(i,n)}function Ib(i,e){const t=1-i;return t*t*t*e}function Nb(i,e){const t=1-i;return 3*t*t*i*e}function Ob(i,e){return 3*(1-i)*i*i*e}function Fb(i,e){return i*i*i*e}function ir(i,e,t,n,s){return Ib(i,e)+Nb(i,t)+Ob(i,n)+Fb(i,s)}class Yf extends An{constructor(e=new Me,t=new Me,n=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Me){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ub extends An{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y),ir(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kl extends An{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new Me;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zb extends An{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $f extends An{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bb extends An{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y),nr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jf extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(nh(a,l.x,c.x,u.x,h.x),nh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Me().fromArray(s))}return this}}var kb=Object.freeze({__proto__:null,ArcCurve:Cb,CatmullRomCurve3:Lb,CubicBezierCurve:Yf,CubicBezierCurve3:Ub,EllipseCurve:ql,LineCurve:Kl,LineCurve3:zb,QuadraticBezierCurve:$f,QuadraticBezierCurve3:Bb,SplineCurve:Jf});class Vb extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Kl(t,e))}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new kb[s.type]().fromJSON(s))}return this}}class Hb extends Vb{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Kl(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new $f(this.currentPoint.clone(),new Me(e,t),new Me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Yf(this.currentPoint.clone(),new Me(e,t),new Me(n,s),new Me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Jf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new ql(e,t,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Yl extends Vt{constructor(e=[new Me(0,-.5),new Me(.5,0),new Me(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=xt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new A,f=new Me,p=new A,g=new A,m=new A;let d=0,_=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:d=e[w+1].x-e[w].x,_=e[w+1].y-e[w].y,p.x=_*1,p.y=-d,p.z=_*0,m.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:d=e[w+1].x-e[w].x,_=e[w+1].y-e[w].y,p.x=_*1,p.y=-d,p.z=_*0,g.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),l.push(p.x,p.y,p.z),m.copy(g)}for(let w=0;w<=t;w++){const y=n+w*u*s,M=Math.sin(y),S=Math.cos(y);for(let R=0;R<=e.length-1;R++){h.x=e[R].x*M,h.y=e[R].y,h.z=e[R].x*S,o.push(h.x,h.y,h.z),f.x=w/t,f.y=R/(e.length-1),a.push(f.x,f.y);const N=l[3*R+0]*M,x=l[3*R+1],L=l[3*R+0]*S;c.push(N,x,L)}}for(let w=0;w<t;w++)for(let y=0;y<e.length-1;y++){const M=y+w*e.length,S=M,R=M+e.length,N=M+e.length+1,x=M+1;r.push(S,R,x),r.push(N,x,R)}this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(a,2)),this.setAttribute("normal",new Qe(c,3))}static fromJSON(e){return new Yl(e.points,e.segments,e.phiStart,e.phiLength)}}class $l extends Yl{constructor(e=1,t=1,n=4,s=8){const r=new Hb;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new $l(e.radius,e.length,e.capSegments,e.radialSegments)}}class zo extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lf,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wi extends zo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Zn(i,e,t){return Zf(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function no(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Zf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gb(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ih(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Qf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class br{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wb extends br{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:su,endingEnd:su}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ru:r=e,a=2*t-n;break;case ou:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ru:o=e,l=2*n-t;break;case ou:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),m=g*g,d=m*g,_=-f*d+2*f*m-f*g,w=(1+f)*d+(-1.5-2*f)*m+(-.5+f)*g+1,y=(-1-p)*d+(1.5+p)*m+.5*g,M=p*d-p*m;for(let S=0;S!==a;++S)r[S]=_*o[u+S]+w*o[c+S]+y*o[l+S]+M*o[h+S];return r}}class jb extends br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class qb extends br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=no(t,this.TimeBufferType),this.values=no(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:no(e.times,Array),values:no(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hr:t=this.InterpolantFactoryMethodDiscrete;break;case Ts:t=this.InterpolantFactoryMethodLinear;break;case ia:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return Ts;case this.InterpolantFactoryMethodSmooth:return ia}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=Zn(n,r,o),this.values=Zn(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Zf(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Zn(this.times),t=Zn(this.values),n=this.getValueSize(),s=this.getInterpolation()===ia,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Zn(e,0,o),this.values=Zn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Zn(this.times,0),t=Zn(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Ts;class Us extends Cn{}Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=hr;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class ed extends Cn{}ed.prototype.ValueTypeName="color";class mr extends Cn{}mr.prototype.ValueTypeName="number";class Xb extends br{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)rn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Hi extends Cn{InterpolantFactoryMethodLinear(e){return new Xb(this.times,this.values,this.getValueSize(),e)}}Hi.prototype.ValueTypeName="quaternion";Hi.prototype.DefaultInterpolation=Ts;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Cn{}zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=hr;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends Cn{}gr.prototype.ValueTypeName="vector";class Kb{constructor(e,t=-1,n,s=e_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($b(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Cn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Gb(l);l=ih(l,1,u),c=ih(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new mr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,m){if(p.length!==0){const d=[],_=[];Qf(p,d,_,g),d.length!==0&&m.push(new h(f,d,_))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)p[f[g].morphTargets[m]]=-1;for(const m in p){const d=[],_=[];for(let w=0;w!==f[g].morphTargets.length;++w){const y=f[g];d.push(y.time),_.push(y.morphTarget===m?1:0)}s.push(new mr(".morphTargetInfluence["+m+"]",d,_))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(gr,p+".position",f,"pos",s),n(Hi,p+".quaternion",f,"rot",s),n(gr,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Yb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mr;case"vector":case"vector2":case"vector3":case"vector4":return gr;case"color":return ed;case"quaternion":return Hi;case"bool":case"boolean":return Us;case"string":return zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function $b(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Yb(i.type);if(i.times===void 0){const t=[],n=[];Qf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const As={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Jb{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Zb=new Jb;class ji{constructor(e){this.manager=e!==void 0?e:Zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Fn={};class Qb extends Error{constructor(e,t){super(e),this.response=t}}class Jl extends ji{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=As.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:n,onError:s});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Fn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let m=0;const d=new ReadableStream({start(_){w();function w(){h.read().then(({done:y,value:M})=>{if(y)_.close();else{m+=M.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let R=0,N=u.length;R<N;R++){const x=u[R];x.onProgress&&x.onProgress(S)}_.enqueue(M),w()}})}}});return new Response(d)}else throw new Qb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{As.add(e,c);const u=Fn[e];delete Fn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Fn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Fn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class td extends ji{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=As.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=pr("img");function l(){u(),As.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class eM extends ji{constructor(e){super(e)}load(e,t,n,s){const r=new Bl,o=new td(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}}class Mr extends ji{constructor(e){super(e)}load(e,t,n,s){const r=new wt,o=new td(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Bo extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Oa=new Be,sh=new A,rh=new A;class Zl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(sh),rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rh),t.updateMatrixWorld(),Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tM extends Zl{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=dr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class nM extends Bo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new tM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const oh=new Be,qs=new A,Fa=new A;class iM extends Zl{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(qs),Fa.copy(n.position),Fa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fa),n.updateMatrixWorld(),s.makeTranslation(-qs.x,-qs.y,-qs.z),oh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh)}}class sM extends Bo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new iM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rM extends Zl{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ql extends Bo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.target=new st,this.shadow=new rM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oM extends Bo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ui{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class aM extends ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=As.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){As.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}let io;class nd{static getContext(){return io===void 0&&(io=new(window.AudioContext||window.webkitAudioContext)),io}static setContext(e){io=e}}class lM extends ji{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new Jl(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);nd.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}}class cM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ah();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ah(){return(typeof performance>"u"?Date:performance).now()}const yi=new A,lh=new rn,uM=new A,bi=new A;class hM extends st{constructor(){super(),this.type="AudioListener",this.context=nd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new cM}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(yi,lh,uM),bi.set(0,0,-1).applyQuaternion(lh),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(yi.x,s),t.positionY.linearRampToValueAtTime(yi.y,s),t.positionZ.linearRampToValueAtTime(yi.z,s),t.forwardX.linearRampToValueAtTime(bi.x,s),t.forwardY.linearRampToValueAtTime(bi.y,s),t.forwardZ.linearRampToValueAtTime(bi.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(yi.x,yi.y,yi.z),t.setOrientation(bi.x,bi.y,bi.z,n.x,n.y,n.z)}}class ul extends st{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Mi=new A,ch=new rn,fM=new A,Si=new A;class dM extends ul{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Mi,ch,fM),Si.set(0,0,1).applyQuaternion(ch);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Mi.x,n),t.positionY.linearRampToValueAtTime(Mi.y,n),t.positionZ.linearRampToValueAtTime(Mi.z,n),t.orientationX.linearRampToValueAtTime(Si.x,n),t.orientationY.linearRampToValueAtTime(Si.y,n),t.orientationZ.linearRampToValueAtTime(Si.z,n)}else t.setPosition(Mi.x,Mi.y,Mi.z),t.setOrientation(Si.x,Si.y,Si.z)}}const ec="\\[\\]\\.:\\/",pM=new RegExp("["+ec+"]","g"),tc="[^"+ec+"]",mM="[^"+ec.replace("\\.","")+"]",gM=/((?:WC+[\/:])*)/.source.replace("WC",tc),_M=/(WCOD+)?/.source.replace("WCOD",mM),xM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tc),vM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tc),yM=new RegExp("^"+gM+_M+xM+vM+"$"),bM=["material","materials","bones","map"];class MM{constructor(e,t,n){const s=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pM,"")}static parseTrackName(e){const t=yM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);bM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=MM;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class id{constructor(e,t,n=0,s=1/0){this.ray=new No(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return hl(e,this,n,t),n.sort(uh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)hl(e[s],this,n,t);return n.sort(uh),n}}function uh(i,e){return i.distance-e.distance}function hl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)hl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);const Ye=Gi({score:0,gameOver:!1,showPauseButton:!0,showVolumeSettings:!1,showGameOver:!1,volume:.5});class SM extends ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new CM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new FM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new zM(t)})}load(e,t,n,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Ui.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Jl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Ui.decodeText(new Uint8Array(e,0,4))===sd){try{o[qe.KHR_BINARY_GLTF]=new BM(e)}catch(u){s&&s(u);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(Ui.decodeText(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new JM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const u=r.extensionsUsed[c],h=r.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:o[u]=new EM;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[u]=new kM(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[u]=new VM;break;case qe.KHR_MESH_QUANTIZATION:o[u]=new HM;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function wM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class TM{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Re(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ql(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new sM(u),c.distance=h;break;case"spot":c=new nM(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ni(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class EM{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return si}extendParams(e,t,n){const s=[];e.color=new Re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,et))}return Promise.all(s)}}class AM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class CM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(a,a)}return Promise.all(r)}}class LM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class RM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class PM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class DM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re(a[0],a[1],a[2]),Promise.all(r)}}class IM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class NM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,et)),Promise.all(r)}}class OM{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class FM{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class UM{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}}class zM{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Qt.TRIANGLES&&c.mode!==Qt.TRIANGLE_STRIP&&c.mode!==Qt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of h){const m=new Be,d=new A,_=new rn,w=new A(1,1,1),y=new Tb(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&d.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,M),l.SCALE&&w.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,m.compose(d,_,w));for(const M in l)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);st.prototype.copy.call(y,g),y.frustumCulled=!1,this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const sd="glTF",Xs=12,hh={JSON:1313821514,BIN:5130562};class BM{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xs);if(this.header={magic:Ui.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Xs,s=new DataView(e,Xs);let r=0;for(;r<n;){const o=s.getUint32(r,!0);r+=4;const a=s.getUint32(r,!0);if(r+=4,a===hh.JSON){const l=new Uint8Array(e,Xs+r,o);this.content=Ui.decodeText(l)}else if(a===hh.BIN){const l=Xs+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=fl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=fl[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],p=gs[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){s.decodeDracoFile(u,function(f){for(const p in f.attributes){const g=f.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}h(f)},a,c)})})}}class VM{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class HM{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class rd extends br{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,m=g-c,d=-2*p+3*f,_=p-f,w=1-d,y=_-f+h;for(let M=0;M!==a;M++){const S=o[m+M+a],R=o[m+M+l]*u,N=o[g+M+a],x=o[g+M]*u;r[M]=w*S+y*R+d*N+_*x}return r}}const GM=new rn;class WM extends rd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return GM.fromArray(r).normalize().toArray(r),r}}const Qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fh={9728:bt,9729:Bt,9984:il,9985:Ef,9986:sl,9987:Ps},dh={33071:en,33648:mo,10497:Ss},Ua={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jM={CUBICSPLINE:void 0,LINEAR:Ts,STEP:hr},za={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new zo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zi})),i.DefaultMaterial}function Ks(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ni(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function XM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function KM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function YM(i){const e=i.extensions&&i.extensions[qe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+ph(e.attributes):t=i.indices+":"+ph(i.attributes)+":"+i.mode,t}function ph(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function dl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $M(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class JM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wM,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new Mr(this.options.manager):this.textureLoader=new aM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};Ks(r,a,s),ni(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this.loadNode(t);break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Ui.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ua[s.type],a=gs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ut(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ua[s.type],c=gs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let m,d;if(p&&p!==h){const _=Math.floor(f/p),w="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let y=t.cache.get(w);y||(m=new c(a,_*p,s.count*p/u),y=new vb(m,p/u),t.cache.add(w,y)),d=new Gl(y,l,f%p/u,g)}else a===null?m=new c(s.count*l):m=new c(a,f,s.count*l),d=new Ut(m,l,g);if(s.sparse!==void 0){const _=Ua.SCALAR,w=gs[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,S=new w(o[1],y,s.sparse.count*_),R=new c(o[2],M,s.sparse.count*l);a!==null&&(d=new Ut(d.array.slice(),d.itemSize,d.normalized));for(let N=0,x=S.length;N<x;N++){const L=S[N];if(d.setX(L,R[N*l]),l>=2&&d.setY(L,R[N*l+1]),l>=3&&d.setZ(L,R[N*l+2]),l>=4&&d.setW(L,R[N*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return d})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=fh[f.magFilter]||Bt,u.minFilter=fh[f.minFilter]||Ps,u.wrapS=dh[f.wrapS]||Ss,u.wrapT=dh[f.wrapT]||Ss,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){const d=new wt(m);d.needsUpdate=!0,f(d)}),t.load(Ui.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||$M(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Kf,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Xf,En.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return zo}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=s[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,et)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=pn);const u=r.alphaMode||za.OPAQUE;if(u===za.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===za.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==si&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==si&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==si&&(a.emissive=new Re().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==si&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,et)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ni(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ks(s,h,r),h})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return mh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=YM(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=mh(new Vt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?qM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const m=u[p],d=o[p];let _;const w=c[p];if(d.mode===Qt.TRIANGLES||d.mode===Qt.TRIANGLE_STRIP||d.mode===Qt.TRIANGLE_FAN||d.mode===void 0)_=r.isSkinnedMesh===!0?new bb(m,w):new Xt(m,w),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),d.mode===Qt.TRIANGLE_STRIP?_.geometry=gh(_.geometry,t_):d.mode===Qt.TRIANGLE_FAN&&(_.geometry=gh(_.geometry,Cf));else if(d.mode===Qt.LINES)_=new Eb(m,w);else if(d.mode===Qt.LINE_STRIP)_=new jl(m,w);else if(d.mode===Qt.LINE_LOOP)_=new Ab(m,w);else if(d.mode===Qt.POINTS)_=new Uo(m,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(_.geometry.morphAttributes).length>0&&KM(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),ni(_,r),d.extensions&&Ks(s,_,d),t.assignFinalMaterial(_),h.push(_)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const f=new Di;t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(ui.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Vl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ni(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this.getDependency("node",t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Be;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Wl(a,l)})}loadAnimation(e){const n=this.json.animations[e],s=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],p=h.target,g=p.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,d=n.parameters!==void 0?n.parameters[f.output]:f.output;s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",d)),a.push(f),l.push(p)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],p=c[3],g=c[4],m=[];for(let _=0,w=u.length;_<w;_++){const y=u[_],M=h[_],S=f[_],R=p[_],N=g[_];if(y===void 0)continue;y.updateMatrix();let x;switch(Qn[N.path]){case Qn.weights:x=mr;break;case Qn.rotation:x=Hi;break;case Qn.position:case Qn.scale:default:x=gr;break}const L=y.name?y.name:y.uuid,I=R.interpolation!==void 0?jM[R.interpolation]:Ts,X=[];Qn[N.path]===Qn.weights?y.traverse(function(z){z.morphTargetInfluences&&X.push(z.name?z.name:z.uuid)}):X.push(L);let de=S.array;if(S.normalized){const z=dl(de.constructor),O=new Float32Array(de.length);for(let Y=0,ie=de.length;Y<ie;Y++)O[Y]=de[Y]*z;de=O}for(let z=0,O=X.length;z<O;z++){const Y=new x(X[z]+"."+Qn[N.path],M.array,de,I);R.interpolation==="CUBICSPLINE"&&(Y.createInterpolant=function(ee){const B=this instanceof Hi?WM:rd;return new B(this.times,this.values,this.getValueSize()/3,ee)},Y.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(Y)}}const d=n.name?n.name:"animation_"+e;return new Kb(d,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,s=this,r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"";return function(){const a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new qf:a.length>1?l=new Di:a.length===1?l=a[0]:l=new st,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=o),ni(l,r),r.extensions&&Ks(n,l,r),r.matrix!==void 0){const c=new Be;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return s.associations.has(l)||s.associations.set(l,{}),s.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,s=this.json.scenes[e],r=this,o=new Di;s.name&&(o.name=r.createUniqueName(s.name)),ni(o,s),s.extensions&&Ks(n,o,s);const a=s.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(od(a[c],o,t,r));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[f,p]of r.associations)(f instanceof En||f instanceof wt)&&h.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=c(o),o})}}function od(i,e,t,n){const s=t.nodes[i];return n.getDependency("node",i).then(function(r){return s.skin===void 0?r:n.getDependency("skin",s.skin).then(function(o){return r.traverse(function(a){!a.isSkinnedMesh||a.bind(o,a.matrixWorld)}),r})}).then(function(r){e.add(r);const o=[];if(s.children){const a=s.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];o.push(od(u,r,t,n))}}return Promise.all(o)})}function ZM(i,e,t){const n=e.attributes,s=new Is;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){const u=dl(gs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new A,l=new A;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const m=dl(gs[f.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Ns;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function mh(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=fl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ni(i,e),ZM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?XM(i,e.targets,t):i})}function gh(i,e){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Cf)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r}const _h=new SM,Sr=new xb,QM=new Ot(75,window.innerWidth/window.innerHeight,.1,1e3),pl=[];let eS=0;const tS=async()=>{const i=await Promise.all([_h.loadAsync("resources/ship.glb"),_h.loadAsync("resources/asteroid.glb")]);return new Promise((e,t)=>{i.forEach(n=>{pl.push({id:n.scene.children[0].name,model:n.scene.children[0]})}),e(pl)})},nS=new eM,iS=nS.load(["resources/right-x.png","resources/left-x.png","resources/up-y.png","resources/down-y.png","resources/left-z.png","resources/right-z.png"]);Sr.background=iS;const sS=new oM(new Re(16711680),.3),ad=new Ql(new Re(16777215),2.6),ld=new Ql(new Re(16777215),2.6);ld.lookAt(0,0,0);ad.position.set(0,-10,0);Sr.add(sS);Sr.add(ad);Sr.add(ld);const je={camera:QM,scene:Sr,models:pl,loadedModelsCount:eS,loadModels:tS};class rS{constructor(){Ne(this,"explosionBuffer",null);Ne(this,"shipFlyAudioBuffer",null);Ne(this,"laserBuffer",null);Ne(this,"soundShipFlyAudio",null);Ne(this,"listener");Ne(this,"audioLoader");Ne(this,"settingsMultiplier",Ye.volume);this.listener=new hM,this.audioLoader=new lM,je.camera.add(this.listener)}async loadResources(){const e=await Promise.all([this.audioLoader.loadAsync("resources/laser.mp3"),this.audioLoader.loadAsync("resources/shipFly.mp3"),this.audioLoader.loadAsync("resources/explosionAsteroid.mp3")]);return new Promise(t=>{this.laserBuffer=e[0],this.shipFlyAudioBuffer=e[1],this.explosionBuffer=e[2],this.createShipSound(),t(0)})}createExplosionSound(e){if(this.explosionBuffer){const t=new dM(this.listener);t.setBuffer(this.explosionBuffer),t.setRefDistance(20),t.setVolume(1*this.settingsMultiplier),t.duration=.6,t.hasPlaybackControl=!0,e.add(t)}}createShipSound(){this.shipFlyAudioBuffer&&(this.soundShipFlyAudio=new ul(this.listener),this.soundShipFlyAudio.setBuffer(this.shipFlyAudioBuffer),this.soundShipFlyAudio.loop=!0,this.soundShipFlyAudio.loopStart=1,this.soundShipFlyAudio.loopEnd=2.13,this.soundShipFlyAudio.setVolume(0),this.soundShipFlyAudio.play())}createLaserSound(e){if(this.laserBuffer){const t=new ul(this.listener);t.setBuffer(this.laserBuffer),t.duration=.2,t.setVolume(.05*this.settingsMultiplier),e.add(t)}}playShipMove(){this.soundShipFlyAudio&&this.soundShipFlyAudio.setVolume(.8*this.settingsMultiplier)}pauseShipMove(){this.soundShipFlyAudio&&this.soundShipFlyAudio.setVolume(0)}}const Vn=new rS;let ml={x:0,y:0},St={up:0,down:0,left:0,right:0,mouseLeft:0,mouseRight:0};const xh=i=>{ml.x=i.clientX/document.documentElement.offsetWidth*2-1,ml.y=i.clientY/document.documentElement.offsetHeight*2-1},vh=i=>{if(Ye.gameOver){St.mouseLeft=0,St.mouseRight=0;return}i.button===0&&(St.mouseLeft=1),i.button===2&&(St.mouseRight=1)},yh=i=>{if(Ye.gameOver){St.mouseLeft=0,St.mouseRight=0;return}i.button===0&&(St.mouseLeft=0),i.button===2&&(St.mouseRight=0)},bh=i=>{(i.key==="ArrowUp"||i.key==="w")&&(St.up=1),(i.key==="ArrowDown"||i.key==="s")&&(St.down=1),i.key==="ArrowLeft"&&(St.left=1),i.key==="ArrowRight"&&(St.right=1)},Mh=i=>{(i.key==="ArrowUp"||i.key==="w")&&(St.up=0),(i.key==="ArrowDown"||i.key==="s")&&(St.down=0),i.key==="ArrowLeft"&&(St.left=0),i.key==="ArrowRight"&&(St.right=0)},_o=()=>{document.removeEventListener("keydown",_o),document.removeEventListener("mousedown",_o)},oS=()=>{document.addEventListener("keydown",_o),document.addEventListener("mousedown",_o),document.addEventListener("mousemove",xh),document.addEventListener("keydown",bh),document.addEventListener("keyup",Mh),document.addEventListener("mousedown",vh),document.addEventListener("mouseup",yh),window.addEventListener("popstate",()=>{document.removeEventListener("mousemove",xh),document.removeEventListener("keydown",bh),document.removeEventListener("keyup",Mh),document.removeEventListener("mousedown",vh),document.removeEventListener("mouseup",yh)})},Zt={init:oS,mousePosition:ml,keysPressed:St};class Bs{constructor(){Ne(this,"tjsObject",new st);Ne(this,"position",new A);Ne(this,"rotation",new Os);Ne(this,"scale",new A);Ne(this,"alive",!0)}}class gl extends Bs{constructor(){var r;super();Ne(this,"ship");const t=new $l(.03,.3,16,16);t.rotateX(90*ui.DEG2RAD);const n=new zo({color:10529280,emissive:new Re(10529280),emissiveIntensity:256});this.tjsObject=new Xt(t,n);const s=(r=Ft.getEntityByClassName(_r))==null?void 0:r.tjsObject;this.ship=s}spawnLeft(){if(Ye.gameOver)return;const t=new A(-1,0,0);t.applyQuaternion(this.ship.quaternion),this.position.copy(this.ship.position),this.position.add(t),this.tjsObject.position.copy(this.position);const n=new A;je.camera.getWorldDirection(n),n.normalize();const s=new A;this.tjsObject.getWorldDirection(s),s.normalize();const r=new rn;r.setFromUnitVectors(s,n),this.tjsObject.quaternion.rotateTowards(r,Math.PI),this.position.copy(this.tjsObject.position)}spawnRight(){if(Ye.gameOver)return;const t=new A(1,0,0);t.applyQuaternion(this.ship.quaternion),this.position.copy(this.ship.position),this.position.add(t),this.tjsObject.position.copy(this.position);const n=new A;je.camera.getWorldDirection(n),n.normalize();const s=new A;this.tjsObject.getWorldDirection(s),s.normalize();const r=new rn;r.setFromUnitVectors(s,n),this.tjsObject.quaternion.rotateTowards(r,Math.PI),this.position.copy(this.tjsObject.position)}update(){if(Ye.gameOver)return;this.ship.position.distanceTo(this.tjsObject.position)>60&&(this.alive=!1,je.scene.remove(this.tjsObject));const t=new A;this.tjsObject.getWorldDirection(t),t.normalize(),t.divideScalar(.3),this.tjsObject.position.add(t)}}const aS=`
uniform float pointMultiplier;
attribute float size;
varying float vSize;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = 0.005 * pointMultiplier / gl_Position.w;
  vSize = size;
}`,lS=`
uniform sampler2D diffuseTexture;
varying float vSize;

void main() {
  vec2 coords = gl_PointCoord;
  gl_FragColor = texture2D(diffuseTexture, coords) * vSize;   
}`;class cS extends Bs{constructor(){super();Ne(this,"indicatorGeometry");Ne(this,"indicatorPoints");const t={diffuseTexture:{value:new Mr().load("resources/indicator.png")},pointMultiplier:{value:window.innerHeight/(2*Math.tan(.5*75*ui.DEG2RAD))}},n=new xn({uniforms:t,vertexShader:aS,fragmentShader:lS,blending:ys,depthTest:!1,depthWrite:!1,transparent:!0,side:pn});this.indicatorGeometry=new Vt,this.indicatorGeometry.setAttribute("position",new Qe([],3)),this.indicatorGeometry.setAttribute("size",new Qe([],1)),this.indicatorPoints=new Uo(this.indicatorGeometry,n),je.scene.add(this.indicatorPoints)}update(){}updateAttributes(t,n){this.indicatorGeometry.setAttribute("position",new Qe(n.toArray(),3)),this.indicatorGeometry.setAttribute("size",new Qe([t],1)),this.indicatorGeometry.computeBoundingBox(),this.indicatorGeometry.computeBoundingSphere(),this.indicatorGeometry.attributes.position.needsUpdate=!0}spawn(){}}class ko extends Bs{constructor(){super();Ne(this,"alive",!0);Ne(this,"offscreenIndicator");const t=je.models.find(n=>n.id==="asteroid");t?(this.tjsObject=t.model.clone(!0),this.tjsObject.material=new si({map:new Mr().load("resources/diffuseAsteroid.png")}),this.position.copy(this.tjsObject.position),this.scale.copy(this.tjsObject.scale),this.rotation.copy(this.tjsObject.quaternion)):console.warn("Asteroid model not found"),this.offscreenIndicator=new cS,Vn.createExplosionSound(this.tjsObject)}update(){const t=Ft.getEntitiesByClassName(gl),n=Ft.getEntityByClassName(_r);if(this.tjsObject&&this.alive&&(n==null?void 0:n.tjsObject.position)&&this.tjsObject.position.lerp(n==null?void 0:n.tjsObject.position,.015),t.length>0){let s;t.forEach(r=>{if(s)return;const o=new id,a=new A;r.tjsObject.getWorldDirection(a),o.set(r.tjsObject.position,a),o.intersectObject(this.tjsObject).length>0&&(s=r)}),s&&(this.tjsObject.traverse(r=>{r.play&&r.play()}),xo.createParticlesAt(this.tjsObject.position.clone()),this.tjsObject.visible=!1,s.tjsObject.visible=!1,je.scene.remove(this.tjsObject),je.scene.remove(s.tjsObject),s.alive=!1,this.alive=!1,Ye.score+=1)}}updateUniforms(){}}class _r extends Bs{constructor(){super();const e=je.models.find(t=>t.id==="ship");if(e){this.tjsObject=e.model.clone(!0);const t=this.tjsObject.children[2];t.visible=!1;const n=fetch("resources/shaders/turbineFragment.glsl"),s=fetch("resources/shaders/turbineVertex.glsl");Promise.all([n,s]).then(r=>{Promise.all([r[0].text(),r[1].text()]).then(o=>{const a=o[0],l=o[1],c=new xn({vertexShader:l,fragmentShader:a,transparent:!0,depthTest:!0,depthWrite:!1,blending:ys,uniforms:{isMoving:{value:Zt.keysPressed.up},timeElapsed:{value:Ft.getTotalTime()}}});c.uniformsNeedUpdate=!0,t.material=c,t.visible=!0})})}else console.warn("Ship model not found");this.tjsObject.scale.set(.3,.3,.3),this.position.copy(this.tjsObject.position),this.scale.copy(this.tjsObject.scale),this.rotation.copy(this.tjsObject.quaternion)}update(){if(Zt.keysPressed.up){const n=new A;this.tjsObject.getWorldDirection(n),n.divide(new A(-10,-10,-10)),this.position.add(n),Vn.playShipMove()}if(Zt.keysPressed.down){const n=new A;this.tjsObject.getWorldDirection(n),n.divide(new A(10,10,10)),this.position.add(n),Vn.playShipMove()}if(Zt.keysPressed.up||Zt.keysPressed.down||Vn.pauseShipMove(),!this.position.equals(this.tjsObject.position)){const n=this.tjsObject.position,s=this.position;this.tjsObject.position.lerpVectors(n,s,.1)}const e=Zt.mousePosition;this.tjsObject.rotateOnAxis(new A(1,0,0),Math.PI/100*-e.y),this.tjsObject.rotateOnAxis(new A(0,1,0),Math.PI/50*-e.x),this.tjsObject.rotateOnAxis(new A(0,0,1),-e.x*Math.PI/220),Ft.getEntitiesByClassName(ko).forEach(n=>{this.tjsObject.position.distanceTo(n.tjsObject.position)<2&&(xo.createParticlesAt(this.tjsObject.position),this.tjsObject.visible=!1,this.alive=!1,n.tjsObject.visible=!1,n.alive=!1,Ye.gameOver=!0,n.tjsObject.traverse(s=>{s.play&&s.play()}),setTimeout(()=>{Ye.showGameOver=!0,Ft.stop()},1e3))}),this.updateUniforms()}updateUniforms(){const e=this.tjsObject.children[2].material.uniforms;e&&(e.isMoving.value+=Zt.keysPressed.up/10+Zt.keysPressed.down/10,e.isMoving.value=ui.clamp(e.isMoving.value,0,1),!Zt.keysPressed.up&&!Zt.keysPressed.down&&(e.isMoving.value-=1/10,e.isMoving.value=ui.clamp(e.isMoving.value,0,1)),e.timeElapsed.value=Ft.getTotalTime())}}class Sh extends Bs{constructor(){var s;super();Ne(this,"ship");Ne(this,"cameraOffset");Ne(this,"initialCameraSet",!1);const t=je.camera;this.tjsObject=t,this.cameraOffset=new A(0,2,5);const n=(s=Ft.getEntityByClassName(_r))==null?void 0:s.tjsObject;this.ship=n,this.cameraOffset.applyQuaternion(this.ship.quaternion),this.cameraOffset.add(this.ship.position),this.tjsObject.position.copy(this.cameraOffset.clone()),this.position.copy(this.tjsObject.position),this.rotation.copy(this.tjsObject.quaternion),Vn.createLaserSound(this.tjsObject)}update(){const t=new A(0,2,5);if(t.applyQuaternion(this.ship.quaternion),t.add(this.ship.position),!this.initialCameraSet){this.initialCameraSet=!0,this.tjsObject.position.copy(this.position),this.tjsObject.quaternion.copy(this.ship.quaternion);return}this.position.lerp(t,.1),this.tjsObject.position.copy(this.position),this.tjsObject.quaternion.slerp(this.ship.quaternion,.1),Ft.getEntitiesByClassName(ko).forEach(s=>{je.camera.updateMatrix(),je.camera.updateMatrixWorld();const r=new Oo,o=new Be().multiplyMatrices(je.camera.projectionMatrix,je.camera.matrixWorldInverse);if(r.setFromProjectionMatrix(o),r.containsPoint(s.tjsObject.position))s.offscreenIndicator.updateAttributes(0,new A);else{const a=new A(0,0,0);a.x=window.innerWidth/2,a.y=window.innerHeight/2,new A(0,0,-1).clone().unproject(je.camera);const u=s.tjsObject.position.clone().project(je.camera).clone();u.z=0,u.normalize();const h=new A;je.camera.getWorldDirection(h);const f=s.tjsObject.position.clone();f.sub(je.camera.position.clone());const p=h.angleTo(f)*ui.RAD2DEG;p<180&&p>90&&u.multiplyScalar(-1);const g=1,m=u.clone().multiplyScalar(g/Math.abs(u.x)),d=u.clone().multiplyScalar(g/Math.abs(u.y));let _=new A;m.length()<d.length()?_=m:_=d,_.setZ(-.9);const w=_.clone().setX(Math.abs(_.x)).setY(Math.abs(_.y)).divideScalar(16);_.x=Math.sign(_.x)*(Math.abs(_.x)-w.x),_.y=Math.sign(_.y)*(Math.abs(_.y)-w.y),_.unproject(je.camera),s.offscreenIndicator.updateAttributes(1,_)}})}spawn(){}}class Ba{constructor(e){Ne(this,"_points");Ne(this,"_lerp");this._points=[],this._lerp=e}addPoint(e,t){this._points.push([e,t])}get(e){let t=0;for(let s=0;s<this._points.length&&!(this._points[s][0]>=e);s++)t=s;const n=Math.min(this._points.length-1,t+1);return t==n?this._points[t][1]:this._lerp((e-this._points[t][0])/(this._points[n][0]-this._points[t][0]),this._points[t][1],this._points[n][1])}}const uS=`
uniform float pointMultiplier;
attribute float size;
attribute float angle;
attribute vec4 colour;
varying vec4 vColour;
varying vec2 vAngle;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = size * pointMultiplier / gl_Position.w;
  vAngle = vec2(cos(angle), sin(angle));
  vColour = colour;
}`,hS=`
uniform sampler2D diffuseTexture;
varying vec4 vColour;
varying vec2 vAngle;

void main() {
  vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
  gl_FragColor = texture2D(diffuseTexture, coords) * vColour;   
}`;class fS{constructor(e){Ne(this,"camera");Ne(this,"material");Ne(this,"parent");Ne(this,"particles");Ne(this,"geometry");Ne(this,"points");Ne(this,"alphaSpline");Ne(this,"colorSpline");Ne(this,"sizeSpline");this.parent=e.parent;const t={diffuseTexture:{value:new Mr().load(e.texturePath)},pointMultiplier:{value:window.innerHeight/(2*Math.tan(.5*75*ui.DEG2RAD))}};this.material=new xn({uniforms:t,vertexShader:uS,fragmentShader:hS,blending:ys,depthTest:!0,depthWrite:!1,transparent:!0,vertexColors:!0}),this.camera=e.camera,this.particles=[],this.geometry=new Vt,this.geometry.setAttribute("position",new Qe([],3)),this.geometry.setAttribute("size",new Qe([],1)),this.geometry.setAttribute("color",new Qe([],4)),this.geometry.setAttribute("angle",new Qe([],1)),this.points=new Uo(this.geometry,this.material),this.parent.add(this.points),this.alphaSpline=new Ba((n,s,r)=>s+n*(r-s)),this.alphaSpline.addPoint(0,0),this.alphaSpline.addPoint(.1,1),this.alphaSpline.addPoint(.6,1),this.alphaSpline.addPoint(1,0),this.colorSpline=new Ba((n,s,r)=>s.clone().lerp(r,n)),this.colorSpline.addPoint(0,new Re(16777088)),this.colorSpline.addPoint(1,new Re(3355443)),this.sizeSpline=new Ba((n,s,r)=>s+n*(r-s)),this.sizeSpline.addPoint(0,1),this.sizeSpline.addPoint(.5,5),this.sizeSpline.addPoint(1,1),this.updateGeometry()}updateGeometry(){const e=[],t=[],n=[],s=[];for(let r of this.particles)e.push(r.position.x,r.position.y,r.position.z),n.push(r.color.r,r.color.g,r.color.b,r.alpha),t.push(r.currentSize),s.push(r.rotation);this.geometry.setAttribute("position",new Qe(e,3)),this.geometry.setAttribute("size",new Qe(t,1)),this.geometry.setAttribute("colour",new Qe(n,4)),this.geometry.setAttribute("angle",new Qe(s,1)),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.size.needsUpdate=!0,this.geometry.attributes.colour.needsUpdate=!0,this.geometry.attributes.angle.needsUpdate=!0,this.geometry.computeBoundingBox(),this.geometry.computeBoundingSphere()}updateParticles(e){for(let t of this.particles)t.life-=e;this.particles=this.particles.filter(t=>t.life>0);for(let t of this.particles){const n=1-t.life/t.totalLife;t.rotation+=e*.5,t.alpha=this.alphaSpline.get(n),t.currentSize=t.size*this.sizeSpline.get(n),t.color.copy(this.colorSpline.get(n)),t.position.add(t.velocity.clone().multiplyScalar(e));const s=t.velocity.clone();s.multiplyScalar(e*.1),s.x=Math.sign(t.velocity.x)*Math.min(Math.abs(s.x),Math.abs(t.velocity.x)),s.y=Math.sign(t.velocity.y)*Math.min(Math.abs(s.y),Math.abs(t.velocity.y)),s.z=Math.sign(t.velocity.z)*Math.min(Math.abs(s.z),Math.abs(t.velocity.z)),t.velocity.sub(s)}this.particles.sort((t,n)=>{const s=this.camera.position.distanceTo(t.position),r=this.camera.position.distanceTo(n.position);return s>r?-1:s<r?1:0})}}class dS extends fS{createParticlesAt(e){for(let t=0;t<60;t++){const n=Math.random()>.5?-1:1,s=Math.random()>.5?-1:1,r=Math.random()>.5?-1:1,o=Math.random()*15+1,a=Math.random()*15+1,l=Math.random()*15+1,c=new A(n*o,s*a,r*l),u=(Math.random()*.5+.5)*1;this.particles.push({position:e.clone(),size:u,currentSize:u,color:new Re,alpha:1,life:.45,totalLife:.45,rotation:Math.random()*2*Math.PI,velocity:c})}}}const pS=`
uniform float pointMultiplier;
attribute vec4 colour;
varying vec4 vColor;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = 0.006 * pointMultiplier / gl_Position.w;
  vColor = colour;
}`,mS=`
uniform sampler2D diffuseTexture;
varying float vSize;
varying vec4 vColor;

void main() {
  vec2 coords = gl_PointCoord;
  gl_FragColor = texture2D(diffuseTexture, coords) * vColor;   
}`;class wh extends Bs{constructor(){super();Ne(this,"indicatorGeometry");Ne(this,"indicatorPoints");const t={diffuseTexture:{value:new Mr().load("resources/pointer.png")},pointMultiplier:{value:window.innerHeight/(2*Math.tan(.5*75*ui.DEG2RAD))}},n=new xn({uniforms:t,vertexShader:pS,fragmentShader:mS,blending:ys,depthTest:!0,depthWrite:!0,transparent:!0,side:pn}),s=je.camera,r=new A(0,0,-1);r.unproject(s),this.indicatorGeometry=new Vt,this.indicatorGeometry.setAttribute("position",new Qe(r.toArray(),3)),this.indicatorGeometry.setAttribute("colour",new Qe([],3)),this.indicatorPoints=new Uo(this.indicatorGeometry,n),je.scene.add(this.indicatorPoints)}update(){const t=je.camera;t.updateMatrix(),t.updateMatrixWorld();const n=new A(0,0,-.9);n.unproject(t);const s=Ft.getEntitiesByClassName(ko),r=new id;r.setFromCamera(new Me(0,0),t),r.intersectObjects(s.map(a=>a.tjsObject)).length?this.indicatorGeometry.setAttribute("colour",new Qe(new Re(16711680).toArray(),3)):this.indicatorGeometry.setAttribute("colour",new Qe(new Re(16777215).toArray(),3)),this.indicatorGeometry.setAttribute("position",new Qe(n.toArray(),3)),this.indicatorGeometry.computeBoundingBox(),this.indicatorGeometry.computeBoundingSphere(),this.indicatorGeometry.attributes.position.needsUpdate=!0}}const xo=new dS({parent:je.scene,camera:je.camera,texturePath:"resources/fire.png"});class gS{constructor(){Ne(this,"entitiesToRender",[]);Ne(this,"gameWorldLoopRAF",-1);Ne(this,"totalTime",0);Ne(this,"lastRafTime",0);Ne(this,"lastBulletTimeSpawn",0);Ne(this,"lastAsteroidTimeSpawn",0)}start(){Ye.gameOver=!1,this.totalTime=0,this.entitiesToRender=[];const e=new _r;this.entitiesToRender.push(e);const t=new Sh;this.entitiesToRender.push(t);const n=new wh;this.entitiesToRender.push(n),je.scene.add(e.tjsObject),requestAnimationFrame(this.gameWorldLogicLoop.bind(this))}pause(){cancelAnimationFrame(this.gameWorldLoopRAF)}unpause(){requestAnimationFrame(this.gameWorldLogicLoop.bind(this))}getTotalTime(){return this.totalTime}filterNonAliveEntitiy(){this.entitiesToRender=this.entitiesToRender.filter(e=>e.alive)}stop(){var t;const e=(t=this.getEntityByClassName(wh))==null?void 0:t.tjsObject;e==null||e.removeFromParent(),this.entitiesToRender.forEach(n=>{n.tjsObject.removeFromParent()}),this.entitiesToRender=[],Vn.pauseShipMove(),this.totalTime=0,this.lastAsteroidTimeSpawn=0,this.lastBulletTimeSpawn=0,cancelAnimationFrame(this.gameWorldLoopRAF)}getEntityByClassName(e){return this.entitiesToRender.find(t=>Object.getPrototypeOf(t).constructor===e)}getEntitiesByClassName(e){return this.entitiesToRender.filter(t=>Object.getPrototypeOf(t).constructor===e)}gameWorldLogicLoop(e){const t=e-this.lastRafTime;this.totalTime+=t,this.gameWorldLoopRAF=requestAnimationFrame(this.gameWorldLogicLoop.bind(this)),this.entitiesToRender.forEach(n=>n.update()),this.userShipBulletSpawn(e),this.asteroidSpawn(e),this.filterNonAliveEntitiy(),this.updateExplosionParticles(t),this.lastRafTime=e}userShipBulletSpawn(e){var n;if(this.lastBulletTimeSpawn+=e-this.lastRafTime,this.lastBulletTimeSpawn>100&&Zt.keysPressed.mouseLeft){const s=new gl;s.spawnLeft();const r=new gl;r.spawnRight(),this.entitiesToRender.push(s),this.entitiesToRender.push(r),je.scene.add(s.tjsObject),je.scene.add(r.tjsObject),this.lastBulletTimeSpawn=0;const o=(n=this.getEntityByClassName(Sh))==null?void 0:n.tjsObject;o==null||o.traverse(a=>{const l=a;typeof l.play=="function"&&!l.isPlaying&&(l.setVolume(.05*Vn.settingsMultiplier),l.play())})}}asteroidSpawn(e){var s;const t=(s=this.getEntityByClassName(_r))==null?void 0:s.tjsObject;this.lastAsteroidTimeSpawn+=(e-Math.trunc(e))*50;const n=this.lastAsteroidTimeSpawn>5e3;if(t&&n){const r=new A;r.copy(t.position);const o=Math.random()>.5?-1:1,a=Math.random()>.5?-1:1,l=Math.random()>.5?-1:1,c=new A(o*Math.random()*25+o*23,a*Math.random()*25+a*23,l*Math.random()*25+l*23);r.add(c);const u=new ko;u.position.copy(r),u.tjsObject.position.copy(u.position),this.entitiesToRender.push(u),je.scene.add(u.tjsObject),this.lastAsteroidTimeSpawn=0}}updateExplosionParticles(e){xo.updateGeometry(),xo.updateParticles(e*.001)}}const Ft=new gS,cd=i=>(gp("data-v-82bac6da"),i=i(),_p(),i),_S={class:"hud"},xS={key:0,class:"hud__game-over"},vS=cd(()=>vt("span",{class:"hud__game-over-description"},"Game over",-1)),yS={key:1,class:"hud__score"},bS={class:"hud__score-value"},MS={key:2,class:"hud__pause-description"},SS=cd(()=>vt("span",null,"Press ESC for pause",-1)),wS=[SS],TS={key:3,class:"hud__pause"},ES={class:"hud__pause-volume-slider"},AS=Ao({__name:"HUD",emits:["onPauseClick"],setup(i,{emit:e}){const t=r=>{r.key==="Escape"&&n()},n=()=>{Ye.showPauseButton?(Ye.showPauseButton=!1,Ye.showVolumeSettings=!0,e("onPauseClick",!0),document.body.style.cursor="auto"):(Ye.showPauseButton=!0,Ye.showVolumeSettings=!1,e("onPauseClick",!1),document.body.style.cursor="none")},s=()=>{Ye.showGameOver=!1,Ye.score=0,Ye.showPauseButton=!0,document.body.style.cursor="none",Ft.start()};return xr(()=>{document.addEventListener("keydown",t)}),vr(()=>{document.removeEventListener("keydown",t)}),ds(()=>Ye.volume,()=>{Vn.settingsMultiplier=Ye.volume}),ds(()=>Ye.showGameOver,()=>{Ye.showGameOver&&(Ye.showPauseButton=!1,Ye.showGameOver=!0,document.body.style.cursor="auto")}),(r,o)=>(hn(),Tn("div",_S,[ei(Ye).showGameOver?(hn(),Tn("div",xS,[vS,vt("div",{class:"hud__game-over-button",onClick:s},[kt(cg)])])):Rr("",!0),ei(Ye).showPauseButton?(hn(),Tn("div",yS,[vt("span",null,[xf("Score: "),vt("span",bS,Md(ei(Ye).score),1)])])):Rr("",!0),ei(Ye).showPauseButton?(hn(),Tn("div",MS,wS)):Rr("",!0),ei(Ye).showVolumeSettings?(hn(),Tn("div",TS,[vt("div",{class:"hud__pause-button",onClick:n},"||"),vt("div",ES,[kt(eg,{class:"hud__volume-icon"}),kt(qm,{modelValue:ei(Ye).volume,"onUpdate:modelValue":o[0]||(o[0]=a=>ei(Ye).volume=a)},null,8,["modelValue"])])])):Rr("",!0)]))}});const CS=Do(AS,[["__scopeId","data-v-82bac6da"]]),LS=Ao({__name:"RendererWrapper",props:{gamePaused:{type:Boolean}},setup(i){const e=i,t=Gi({rendererRAF:-1}),n=Wa();let s=null;const r=()=>{t.rendererRAF=requestAnimationFrame(r),s.render(je.scene,je.camera)},o=()=>{if(s){const a=s.domElement,l=window.devicePixelRatio,c=a.clientWidth*l|0,u=a.clientHeight*l|0,h=a.width!==c||a.height!==u;return h&&(s.setSize(c,u,!1),je.camera.aspect=a.clientWidth/a.clientHeight,je.camera.updateProjectionMatrix()),h}};return xr(async()=>{Zt.init(),await Vn.loadResources(),await je.loadModels(),s=new jf({canvas:n.value}),o(),window.addEventListener("resize",o),r(),Ft.start()}),vr(()=>{window.removeEventListener("resize",o),Ft.stop(),cancelAnimationFrame(t.rendererRAF)}),ds(()=>e.gamePaused,()=>{e.gamePaused?(cancelAnimationFrame(t.rendererRAF),t.rendererRAF=-1,Ft.pause()):(r(),Ft.unpause())}),(a,l)=>(hn(),Tn("canvas",{id:"app_renderer",ref_key:"canvasRef",ref:n},null,512))}}),RS=Ao({__name:"App",setup(i){const e=Gi({gamePaused:!1});return(t,n)=>(hn(),Tn(cn,null,[kt(CS,{class:"hud",onOnPauseClick:n[0]||(n[0]=s=>e.gamePaused=s)}),kt(LS,{"game-paused":e.gamePaused},null,8,["game-paused"])],64))}});const PS=Do(RS,[["__scopeId","data-v-fbcfa74f"]]);Gm(PS).mount("#app");
