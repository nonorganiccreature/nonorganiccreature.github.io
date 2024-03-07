var q=Object.defineProperty;var tt=(s,t,i)=>t in s?q(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var L=(s,t,i)=>(tt(s,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&e(h)}).observe(document,{childList:!0,subtree:!0});function i(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(n){if(n.ep)return;n.ep=!0;const l=i(n);fetch(n.href,l)}})();/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class B{constructor(t,i,e,n,l="div"){this.parent=t,this.object=i,this.property=e,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(l),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),B.nextNameID=B.nextNameID||0,this.$name.id=`lil-gui-name-${++B.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(e)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class it extends B{constructor(t,i,e){super(t,i,e,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function H(s){let t,i;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),i?"#"+i:!1}const et={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:H,toHexString:H},k={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},nt={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,t,i=1){const e=k.fromHexString(s);t[0]=(e>>16&255)/255*i,t[1]=(e>>8&255)/255*i,t[2]=(e&255)/255*i},toHexString([s,t,i],e=1){e=255/e;const n=s*e<<16^t*e<<8^i*e<<0;return k.toHexString(n)}},st={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,i=1){const e=k.fromHexString(s);t.r=(e>>16&255)/255*i,t.g=(e>>8&255)/255*i,t.b=(e&255)/255*i},toHexString({r:s,g:t,b:i},e=1){e=255/e;const n=s*e<<16^t*e<<8^i*e<<0;return k.toHexString(n)}},ot=[et,k,nt,st];function rt(s){return ot.find(t=>t.match(s))}class lt extends B{constructor(t,i,e,n){super(t,i,e,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=rt(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const l=H(this.$text.value);l&&this._setValueFromHexString(l)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class I extends B{constructor(t,i,e){super(t,i,e,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class at extends B{constructor(t,i,e,n,l,h){super(t,i,e,"number"),this._initInput(),this.min(n),this.max(l);const d=h!==void 0;this.step(d?h:this._getImplicitStep(),d),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const i=()=>{let o=parseFloat(this.$input.value);isNaN(o)||(this._stepExplicit&&(o=this._snap(o)),this.setValue(this._clamp(o)))},e=o=>{const g=parseFloat(this.$input.value);isNaN(g)||(this._snapClampSetValue(g+o),this.$input.value=this.getValue())},n=o=>{o.key==="Enter"&&this.$input.blur(),o.code==="ArrowUp"&&(o.preventDefault(),e(this._step*this._arrowKeyMultiplier(o))),o.code==="ArrowDown"&&(o.preventDefault(),e(this._step*this._arrowKeyMultiplier(o)*-1))},l=o=>{this._inputFocused&&(o.preventDefault(),e(this._step*this._normalizeMouseWheel(o)))};let h=!1,d,b,c,a,u;const m=5,y=o=>{d=o.clientX,b=c=o.clientY,h=!0,a=this.getValue(),u=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",p)},_=o=>{if(h){const g=o.clientX-d,w=o.clientY-b;Math.abs(w)>m?(o.preventDefault(),this.$input.blur(),h=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(g)>m&&p()}if(!h){const g=o.clientY-c;u-=g*this._step*this._arrowKeyMultiplier(o),a+u>this._max?u=this._max-a:a+u<this._min&&(u=this._min-a),this._snapClampSetValue(a+u)}c=o.clientY},p=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",p)},x=()=>{this._inputFocused=!0},r=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",i),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",l,{passive:!1}),this.$input.addEventListener("mousedown",y),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",r)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(r,o,g,w,A)=>(r-o)/(g-o)*(A-w)+w,i=r=>{const o=this.$slider.getBoundingClientRect();let g=t(r,o.left,o.right,this._min,this._max);this._snapClampSetValue(g)},e=r=>{this._setDraggingStyle(!0),i(r.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",l)},n=r=>{i(r.clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",l)};let h=!1,d,b;const c=r=>{r.preventDefault(),this._setDraggingStyle(!0),i(r.touches[0].clientX),h=!1},a=r=>{r.touches.length>1||(this._hasScrollBar?(d=r.touches[0].clientX,b=r.touches[0].clientY,h=!0):c(r),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",m))},u=r=>{if(h){const o=r.touches[0].clientX-d,g=r.touches[0].clientY-b;Math.abs(o)>Math.abs(g)?c(r):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",m))}else r.preventDefault(),i(r.touches[0].clientX)},m=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",m)},y=this._callOnFinishChange.bind(this),_=400;let p;const x=r=>{if(Math.abs(r.deltaX)<Math.abs(r.deltaY)&&this._hasScrollBar)return;r.preventDefault();const g=this._normalizeMouseWheel(r)*this._step;this._snapClampSetValue(this.getValue()+g),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(y,_)};this.$slider.addEventListener("mousedown",e),this.$slider.addEventListener("touchstart",a,{passive:!1}),this.$slider.addEventListener("wheel",x,{passive:!1})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${i}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:e}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,e=-t.wheelDelta/120,e*=this._stepExplicit?1:10),i+-e}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){const i=Math.round(t/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ht extends B{constructor(t,i,e,n){super(t,i,e,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(i=>{const e=document.createElement("option");e.textContent=i,this.$select.appendChild(e)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.textContent=i===-1?t:this._names[i],this}}class ct extends B{constructor(t,i,e){super(t,i,e,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const dt=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function ut(s){const t=document.createElement("style");t.innerHTML=s;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}let K=!1;class U{constructor({parent:t,autoPlace:i=t===void 0,container:e,width:n,title:l="Controls",closeFolders:h=!1,injectStyles:d=!0,touchStyles:b=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(l),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),b&&this.domElement.classList.add("allow-touch-styles"),!K&&d&&(ut(dt),K=!0),e?e.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=h}add(t,i,e,n,l){if(Object(e)===e)return new ht(this,t,i,e);const h=t[i];switch(typeof h){case"number":return new at(this,t,i,e,n,l);case"boolean":return new it(this,t,i);case"string":return new ct(this,t,i);case"function":return new I(this,t,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,t,`
	value:`,h)}addColor(t,i,e=1){return new lt(this,t,i,e)}addFolder(t){const i=new U({parent:this,title:t});return this.root._closeFolders&&i.close(),i}load(t,i=!0){return t.controllers&&this.controllers.forEach(e=>{e instanceof I||e._name in t.controllers&&e.load(t.controllers[e._name])}),i&&t.folders&&this.folders.forEach(e=>{e._title in t.folders&&e.load(t.folders[e._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof I)){if(e._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${e._name}"`);i.controllers[e._name]=e.save()}}),t&&this.folders.forEach(e=>{if(e._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${e._title}"`);i.folders[e._title]=e.save()}),i}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const e=l=>{l.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",e))};this.$children.addEventListener("transitionend",e);const n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}const j=(s,t,i)=>{const e=s.createShader(t);if(!e){console.log(`WebGL couldn't createShader with source: ${i}`);return}if(s.shaderSource(e,i),s.compileShader(e),s.getShaderParameter(e,s.COMPILE_STATUS))return e;console.log(s.getShaderInfoLog(e)),s.deleteShader(e)},pt=(s,t,i)=>{const e=s.createProgram();if(!e){console.log("Error while gl.createProgram()");return}if(s.attachShader(e,t),s.attachShader(e,i),s.linkProgram(e),s.getProgramParameter(e,s.LINK_STATUS))return e;console.log(s.getProgramInfoLog(e)),s.deleteProgram(e)},gt=(s,t,i)=>{const e=window.devicePixelRatio||1;i.style.width=`${s}px`,i.style.height=`${t}px`,i.width=s*e,i.height=t*e},E=(s,t,i,e,n)=>e+(s-t)*(n-e)/(i-t),J=(s,t,i)=>s>=t&&s<=i?s:s<t?t:s>i?i:s,V=(s,t,i,e)=>{s.onmousedown=n=>{s.style.cursor=i,s.onmousemove=l=>{for(const h of t)h(n,l)},s.onmouseleave=()=>{s.style.cursor=e,s.onmousemove=null},s.onmouseup=()=>{s.style.cursor=e,s.onmousemove=null}}};class f{constructor(t,i){L(this,"x",0);L(this,"y",0);this.x=t,this.y=i}normalize(){const t=Math.sqrt(this.x*this.x+this.y*this.y);return this.x/=t,this.y/=t,this}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}multiplyScalar(t){return this.x*=t,this.y*=t,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}applyMatrix(t){const i=this.x,e=this.y,n=t.values;return this.x=i*n[0]+e*n[1]+n[2],this.y=i*n[3]+e*n[4]+n[5],this}sub(t){return this.x-=t.x,this.y-=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}static intersection(t,i,e,n){const l=t.x,h=i.x,d=e.x,b=n.x,c=t.y,a=i.y,u=e.y,m=n.y,y=(l-h)*(u-m)-(c-a)*(d-b);return new f(((l*a-c*h)*(d-b)-(l-h)*(d*m-u*b))/y,((l*a-c*h)*(u-m)-(c-a)*(d*m-u*b))/y)}clone(){return new f(this.x,this.y)}}class ft{constructor(t,i){L(this,"axisXLabelsHTMLElement",null);L(this,"axisYLabelsHTMLElement",null);L(this,"config");L(this,"chartContainerHTMLElement",null);this.config=t,this.chartContainerHTMLElement=i}initialize(){this.createLabelsWrappers()}createLabelsWrappers(){if(!this.chartContainerHTMLElement)return;this.chartContainerHTMLElement.style.position="relative";const t=window.getComputedStyle(this.chartContainerHTMLElement),i=document.createElement("div"),e=document.createElement("div");this.axisXLabelsHTMLElement=i,this.axisYLabelsHTMLElement=e,i.className="chart-labels-x",e.className="chart-labels-y",this.chartContainerHTMLElement.appendChild(i),this.chartContainerHTMLElement.appendChild(e);const n=t.paddingLeft,l=t.paddingBottom;i.style.position="absolute",i.style.width=`${this.config.width}px`,i.style.height=`${parseFloat(this.config.labels.x.size)}px`,i.style.left=`${parseFloat(n)}px`,i.style.bottom="0px",i.style.userSelect="none",i.style.cursor="e-resize",i.style.position="absolute",i.style.display="flex",i.style.flexFlow="row nowrap",i.style.justifyContent="space-between",i.style.alignItems="center",e.style.width=`${parseFloat(this.config.labels.y.size)}px`,e.style.height=`${this.config.height}px`,e.style.left=`${parseFloat(n)-parseFloat(this.config.labels.y.size)*1.5}px`,e.style.top=`${parseFloat(l)}px`,e.style.userSelect="none",e.style.cursor="n-resize",e.style.position="absolute",e.style.display="flex",e.style.flexFlow="column-reverse nowrap",e.style.justifyContent="space-between",e.style.alignItems="center",this.axisXLabelsHTMLElement=i,this.axisYLabelsHTMLElement=e}setOnResizeXAxis(t){this.axisXLabelsHTMLElement&&V(this.axisXLabelsHTMLElement,[t],"e-resize","e-resize")}setOnResizeYAxis(t){this.axisYLabelsHTMLElement&&V(this.axisYLabelsHTMLElement,[t],"n-resize","n-resize")}draw(t,i,e,n,l,h,d){this.clearLabelsContent();const b=this.chartContainerHTMLElement,c=this.axisXLabelsHTMLElement,a=this.axisYLabelsHTMLElement;if(!b||!c||!a)return;const u=window.getComputedStyle(b),m=u.paddingLeft,y=u.paddingBottom;c.style.width=`${this.config.width}px`,c.style.height=`${parseFloat(this.config.labels.x.size)}px`,c.style.left=`${parseFloat(m)}px`,c.style.bottom="0px",a.style.width=`${parseFloat(this.config.labels.y.size)}px`,a.style.height=`${this.config.height}px`,a.style.left=`${parseFloat(m)-parseFloat(this.config.labels.y.size)*1.5}px`,a.style.top=`${parseFloat(y)}px`,this.config.labels.x.color&&(c.style.color=`
      rgba(${this.config.labels.x.color[0]}, 
        ${this.config.labels.x.color[1]}, 
        ${this.config.labels.x.color[2]}, 
        ${this.config.labels.x.color[3]})
      `),this.config.labels.y.color&&(a.style.color=`
      rgba(${this.config.labels.y.color[0]}, 
        ${this.config.labels.y.color[1]}, 
        ${this.config.labels.y.color[2]}, 
        ${this.config.labels.y.color[3]})
      `);const _=E(d,0,this.config.width,t,e),p=Math.floor((t-_)/l),x=Math.floor((e-_)/l),r=this.config.labels.x.count-1,o=(x-p)%r/r,g=(x-p-o)/r;for(let Y=p,R=0;Y<=x;Y+=g,R+=1){let M=c.childNodes[R],D=Math.ceil(Y);M||(M=document.createElement("span"),c.appendChild(M));const X=Math.log(D)*Math.LOG10E+1|0,z=Math.pow(10,X-Math.ceil(X/2));M.textContent=(D-D%z).toFixed(0).toString()}this.config.labels.x&&(c.style.bottom=`${-this.config.labels.x.offset.y}px`);const w=Math.floor(i/h),A=Math.floor(n/h),v=this.config.labels.y.count-1,C=(A-w)%v/v,S=(A-w-C)/v;let O=-1;for(let Y=w,R=0;Y<=A;Y+=S,R+=1){let M=a.childNodes[R],D=Math.ceil(Y);M||(M=document.createElement("span"),a.appendChild(M));const X=Math.log(D)*Math.LOG10E+1|0,z=Math.pow(10,X-Math.ceil(X/2));M.textContent=(D-D%z).toFixed(0).toString(),O=parseFloat(getComputedStyle(M).width)}a.style.width=`${O}px`,a.style.left=`${parseFloat(m)-O}px`,this.config.labels&&(a.style.left=`${parseFloat(a.style.left)+this.config.labels.y.offset.x}px`),this.clearEmptyNodes()}clearLabelsContent(){const t=this.axisXLabelsHTMLElement,i=this.axisYLabelsHTMLElement;!t||!i||(t.childNodes.forEach(e=>{e.textContent=""}),i.childNodes.forEach(e=>{e.textContent=""}))}clearEmptyNodes(){const t=this.axisXLabelsHTMLElement,i=this.axisYLabelsHTMLElement;!t||!i||(t.childNodes.forEach(e=>{e.textContent===""&&t.removeChild(e)}),i.childNodes.forEach(e=>{e.textContent===""&&i.removeChild(e)}))}}const mt=`precision mediump float;\r
\r
attribute vec2 a_position;\r
attribute vec4 a_color;\r
\r
uniform vec2 u_min_value;\r
uniform vec2 u_max_value;\r
uniform vec2 u_resolution;\r
uniform vec2 u_chart_scale;\r
\r
varying vec4 v_color;\r
float map(float value,float min1,float max1,float min2,float max2){\r
  return min2+(value-min1)*(max2-min2)/(max1-min1);\r
}\r
\r
void main(){\r
  \r
  // '/u_resolution' => 0->1 , '*2.0' => 0->2, '-1.0' => -1->+1\r
  vec2 clipSpace=(vec2(\r
      a_position.x/u_resolution.x,\r
      a_position.y/u_resolution.y\r
    )*2.-1.);\r
    \r
    v_color=a_color;\r
    gl_Position=vec4(clipSpace,0,1);\r
  }`,bt=`precision mediump float;\r
\r
varying vec4 v_color;\r
\r
void main(){\r
  gl_FragColor=vec4(v_color);\r
}`;class yt{constructor(t){L(this,"config");L(this,"maxPointX",-1);L(this,"maxPointY",-1);L(this,"minPointX",-1);L(this,"minPointY",-1);L(this,"sortedPointsX",[]);L(this,"sortedPointsY",[]);L(this,"scaleX",1);L(this,"scaleY",1);L(this,"translationX",0);L(this,"axisXLabelsHTMLElement",null);L(this,"axisYLabelsHTMLElement",null);L(this,"chartContainerHTMLElement",null);L(this,"chartLabels",null);L(this,"graphicsAPI",null);L(this,"graphicsWebGLData",{context:null,program:null,positionBuffer:null,positionAttribute:-1,colorBuffer:null,colorAttribute:-1,resolutionUniformLocation:null,scaleUniformLocation:null,minChartValuesUniformLocation:null,maxChartValuesUniformLocation:null});L(this,"graphicsCanvasData",{});this.config=t}initialize(){return this.initializeData(this.config),this.initializeAdditionalStyles(),this.initializeMouseEvents(),this.initializeDOMRefs(),this.initializeLabels(),Promise.resolve(this.initializeGraphicsAPI())}initializeLabels(){this.chartContainerHTMLElement&&(this.chartLabels=new ft(this.config,this.chartContainerHTMLElement),this.chartLabels.initialize(),this.chartLabels.setOnResizeXAxis(this.scaleXOnMouseMove.bind(this)),this.chartLabels.setOnResizeYAxis(this.scaleYOnMouseMove.bind(this)))}initializeMouseEvents(){V(this.config.canvasHTMLElement,[this.translationXOnMouseMove.bind(this)],"grabbing","grab")}initializeAdditionalStyles(){this.config.canvasHTMLElement.style.cursor="grab"}initializeDOMRefs(){const t=document.querySelector(this.config.containerSelector);this.chartContainerHTMLElement=t}async initializeGraphicsAPI(){const t=this.config.canvasHTMLElement,i=t.getContext("webgl",{alpha:!1,stencil:!0});if(this.config.renderType||(i||(this.config.renderType="canvas"),i&&(this.config.renderType="webgl")),this.config.renderType==="webgl"&&i){this.graphicsWebGLData.context=i;const e=mt,n=bt,l=j(i,i.VERTEX_SHADER,e),h=j(i,i.FRAGMENT_SHADER,n);if(l&&h){const d=pt(i,l,h);if(d){this.graphicsWebGLData.program=d,this.graphicsWebGLData.resolutionUniformLocation=i.getUniformLocation(d,"u_resolution"),this.graphicsWebGLData.minChartValuesUniformLocation=i.getUniformLocation(d,"u_min_value"),this.graphicsWebGLData.maxChartValuesUniformLocation=i.getUniformLocation(d,"u_max_value"),this.graphicsWebGLData.scaleUniformLocation=i.getUniformLocation(d,"u_chart_scale"),this.graphicsWebGLData.colorAttribute=i.getAttribLocation(d,"a_color"),this.graphicsWebGLData.colorBuffer=i.createBuffer(),this.graphicsWebGLData.positionAttribute=i.getAttribLocation(d,"a_position"),this.graphicsWebGLData.positionBuffer=i.createBuffer(),i.bindBuffer(i.ARRAY_BUFFER,this.graphicsWebGLData.positionBuffer),i.bufferData(i.ARRAY_BUFFER,new Float32Array(this.config.points.map(y=>[y.x,y.y]).flat()),i.STATIC_DRAW),gt(this.config.width,this.config.height,t),i.viewport(0,0,i.canvas.width,i.canvas.height),i.clearColor(0,0,0,1),i.clear(i.COLOR_BUFFER_BIT),i.useProgram(d),i.enableVertexAttribArray(this.graphicsWebGLData.positionAttribute),i.bindBuffer(i.ARRAY_BUFFER,this.graphicsWebGLData.positionBuffer);const b=2,c=i.FLOAT;i.vertexAttribPointer(this.graphicsWebGLData.positionAttribute,b,c,!1,0,0),this.graphicsAPI=d,this.updateWebGLUniforms()}}}}findMinMaxPoints(){this.sortedPointsY=this.config.points.sort((t,i)=>t.y-i.y),this.minPointY=this.sortedPointsY[0].y,this.maxPointY=this.sortedPointsY[this.sortedPointsY.length-1].y,this.sortedPointsX=this.config.points.sort((t,i)=>t.x-i.x),this.minPointX=this.sortedPointsX[0].x,this.maxPointX=this.sortedPointsX[this.sortedPointsX.length-1].x}initializeData(t){this.updateConfig(t)}updateConfig(t){this.config=t,this.findMinMaxPoints()}scaleXOnMouseMove(t,i){const e=t.movementX-i.movementX;this.scaleX+=-e*.001,this.scaleX=J(this.scaleX,-10,10),this.draw()}scaleYOnMouseMove(t,i){const e=t.movementY-i.movementY;this.scaleY+=e*.001,this.scaleY=J(this.scaleY,-10,10),this.draw()}translationXOnMouseMove(t,i){const e=t.movementX-i.movementX;this.translationX+=e*.5,this.draw()}get minX(){return typeof this.config.minX<"u"&&this.config.minX<this.minPointX?this.config.minX:this.minPointX||0}get maxX(){return typeof this.config.maxX>"u"?this.config.width||0:this.config.maxX}get minY(){return typeof this.config.minY<"u"&&this.config.minY<this.minPointY?this.config.minY:this.minPointY||0}get maxY(){return typeof this.config.maxY>"u"?this.config.height||0:this.config.maxY}updateWebGLUniforms(){const t=this.graphicsWebGLData.context;t&&(t.uniform2f(this.graphicsWebGLData.scaleUniformLocation,this.scaleX,this.scaleY),t.uniform2f(this.graphicsWebGLData.resolutionUniformLocation,this.config.width,this.config.height),t.uniform2f(this.graphicsWebGLData.minChartValuesUniformLocation,this.minX,this.minY),t.uniform2f(this.graphicsWebGLData.maxChartValuesUniformLocation,this.maxX,this.maxY))}drawGrid(){if(this.config.renderType==="webgl"&&this.config.grid){const t=this.graphicsWebGLData.context,i=this.config.grid.x.width,e=this.config.grid.y.width,n=this.config.grid.x.count-1,l=this.config.grid.y.count-1,h=new f(1,0),d=new f(-1,0),b=new f(0,1),c=new f(0,-1),a=(this.maxX-this.minX)%n,u=(this.maxY-this.minY)%l,m=(this.maxX-this.minX-a*n)/n,y=(this.maxY-this.minY-u*l)/l;let _=[];const p=[];for(let x=0;x<=n;x++){const r=new f(E(x*(m+a),this.minX,this.maxX,0,this.config.width),this.config.height),o=new f(E(x*(m+a),this.minX,this.maxX,0,this.config.width),0),g=r.x===0&&o.x===0;if(g){const A=new f(0,0).add(h.clone().multiplyScalar(2)).multiplyScalar(i),v=o.clone().add(A),C=r.clone().add(A);_.push(o,v,r,C,r,v)}const w=r.x===this.config.width&&o.x===this.config.width;if(w){const A=new f(0,0).add(d.clone().multiplyScalar(2)).multiplyScalar(i),v=o.clone().add(A),C=r.clone().add(A);_.push(o,v,r,C,r,v)}if(!g&&!w){const A=o.clone().add(d.clone().multiplyScalar(i)),v=o.clone().add(h.clone().multiplyScalar(i)),C=r.clone().add(d.clone().multiplyScalar(i)),S=r.clone().add(h.clone().multiplyScalar(i));_.push(A,v,C,C,S,v)}p.push(...this.config.grid.y.color,...this.config.grid.y.color,...this.config.grid.y.color,...this.config.grid.y.color,...this.config.grid.y.color,...this.config.grid.y.color)}for(let x=0;x<=l;x++){const r=new f(this.config.width,E(x*(y+u),this.minY,this.maxY,0,this.config.height)),o=new f(0,E(x*(y+u),this.minY,this.maxY,0,this.config.height)),g=o.y===0&&r.y===0;if(g){const A=new f(0,0).add(b.clone().multiplyScalar(2)).multiplyScalar(e),v=o.clone().add(A),C=r.clone().add(A);_.push(o,v,r,r,C,v)}const w=o.y===this.config.height&&r.y===this.config.height;if(w){const A=new f(0,0).add(c.clone().multiplyScalar(2)).multiplyScalar(e),v=o.clone().add(A),C=r.clone().add(A);_.push(o,v,r,r,C,v)}if(!g&&!w){const A=o.clone().add(c.clone().multiplyScalar(e)),v=o.clone().add(b.clone().multiplyScalar(e)),C=r.clone().add(c.clone().multiplyScalar(e)),S=r.clone().add(b.clone().multiplyScalar(e));_.push(A,v,C,C,S,v)}p.push(...this.config.grid.y.color,...this.config.grid.y.color,...this.config.grid.y.color,...this.config.grid.y.color,...this.config.grid.y.color,...this.config.grid.y.color)}if(t){t.enableVertexAttribArray(this.graphicsWebGLData.colorAttribute),t.bindBuffer(t.ARRAY_BUFFER,this.graphicsWebGLData.colorBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(p),t.STATIC_DRAW);let x=4,r=t.FLOAT,o=!1,g=0,w=0;t.vertexAttribPointer(this.graphicsWebGLData.colorAttribute,x,r,o,g,w),t.enableVertexAttribArray(this.graphicsWebGLData.positionAttribute),x=2,r=t.FLOAT,o=!1,g=0,w=0,t.bindBuffer(t.ARRAY_BUFFER,this.graphicsWebGLData.positionBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(_.map(A=>[A.x,A.y]).flat()),t.STATIC_DRAW),t.vertexAttribPointer(this.graphicsWebGLData.positionAttribute,x,r,o,g,w),t.drawArrays(t.TRIANGLES,0,_.length)}}}draw(){if(this.config.points.length!==0&&this.config.renderType==="webgl"){this.updateWebGLUniforms();const t=this.graphicsWebGLData.context;t&&(t.viewport(0,0,t.canvas.width,t.canvas.height),t.clearColor(.2,.2,.2,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT),t.clearStencil(0),t.useProgram(this.graphicsWebGLData.program),this.chartLabels&&this.chartLabels.draw(this.minX,this.minY,this.maxX,this.maxY,this.scaleX,this.scaleY,this.translationX),this.drawGrid(),this.config.fillAreaUnderLine&&this.drawAreaGradient())}}}class P{constructor(){L(this,"values",[])}identity(){return this.values=[1,0,0,0,1,0,0,0,1],this}translate(t,i){return this.values=[1,0,t,0,1,i,0,0,1],this}scale(t,i){return this.values=[t,0,0,0,i,0,0,0,1],this}rotation(t){const i=Math.sin(t),e=Math.cos(t);return this.values=[e,i,0,-i,e,0,0,0,1],this}multiply(t){const i=new Array(9).fill(0),e=this.values,n=t.values;return i[0]=e[0]*n[0]+e[3]*n[1]+e[6]*n[2],i[1]=e[0]*n[3]+e[3]*n[4]+e[6]*n[5],i[2]=e[0]*n[6]+e[3]*n[7]+e[6]*n[8],i[3]=e[1]*n[0]+e[4]*n[1]+e[7]*n[2],i[4]=e[1]*n[3]+e[4]*n[4]+e[7]*n[5],i[5]=e[1]*n[6]+e[4]*n[7]+e[7]*n[8],i[6]=e[2]*n[0]+e[5]*n[1]+e[8]*n[2],i[7]=e[2]*n[3]+e[5]*n[4]+e[8]*n[5],i[8]=e[2]*n[6]+e[5]*n[7]+e[8]*n[8],this.values=i,this}}class xt extends yt{draw(){if(super.draw(),this.config.renderType==="webgl"){const t=this.graphicsWebGLData.context,i=this.config.points,e=[],n=[],l=new P;l.scale(this.scaleX,this.scaleY);const h=new P;h.translate(this.translationX,0);const d=new P;d.rotation(Math.PI/2);const b=new P().identity();b.multiply(h).multiply(l);const c=new P().identity();c.multiply(d);for(let a=0;a<i.length-1;a+=1){const u=[],m=[],y=[],_=new f(E(i[a].x,this.minX,this.maxX,0,this.config.width),E(i[a].y,this.minY,this.maxY,0,this.config.height)).clone().applyMatrix(b),p=new f(E(i[a+1].x,this.minX,this.maxX,0,this.config.width),E(i[a+1].y,this.minY,this.maxY,0,this.config.height)).clone().applyMatrix(b),x=i[a+2]?new f(E(i[a+2].x,this.minX,this.maxX,0,this.config.width),E(i[a+2].y,this.minY,this.maxY,0,this.config.height)).clone().applyMatrix(b):null,r=!!x,g=p.clone().sub(_).clone().normalize(),w=g.clone().multiplyScalar(.5).applyMatrix(c),A=w.clone().multiplyScalar(this.config.lineLength).add(_.clone()),v=w.clone().multiplyScalar(-this.config.lineLength).add(_.clone()),C=w.clone().multiplyScalar(this.config.lineLength).add(p.clone()),S=w.clone().multiplyScalar(-this.config.lineLength).add(p.clone());if(u.push({x:A.x,y:A.y},{x:v.x,y:v.y},{x:C.x,y:C.y}),m.push({x:v.x,y:v.y},{x:S.x,y:S.y},{x:C.x,y:C.y}),e.push(...u,...m),n.push(...this.config.lineColor,...this.config.lineColor,...this.config.lineColor,...this.config.lineColor,...this.config.lineColor,...this.config.lineColor),r){n.push(...this.config.lineColor,...this.config.lineColor,...this.config.lineColor,...this.config.lineColor,...this.config.lineColor,...this.config.lineColor);const Y=x.clone().sub(p).clone().normalize(),R=Y.clone().multiplyScalar(.5).applyMatrix(c),M=R.clone().multiplyScalar(this.config.lineLength).add(p.clone()),D=R.clone().multiplyScalar(-this.config.lineLength).add(p.clone()),X=R.clone().multiplyScalar(this.config.lineLength).add(x.clone()),z=R.clone().multiplyScalar(-this.config.lineLength).add(x.clone());let T=new f(0,0);const Z=g.y/g.x,Q=Y.y/Y.x,N=Z<=Q;N&&(T=f.intersection(S,v,D,z),y.push({x:T.x,y:T.y},{x:S.x,y:S.y},{x:p.x,y:p.y},{x:T.x,y:T.y},{x:D.x,y:D.y},{x:p.x,y:p.y})),N||(T=f.intersection(C,A,M,X),y.push({x:T.x,y:T.y},{x:C.x,y:C.y},{x:p.x,y:p.y},{x:T.x,y:T.y},{x:M.x,y:M.y},{x:p.x,y:p.y})),e.push(...y)}}if(t){t.enableVertexAttribArray(this.graphicsWebGLData.colorAttribute),t.bindBuffer(t.ARRAY_BUFFER,this.graphicsWebGLData.colorBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW);let a=4,u=t.FLOAT;t.vertexAttribPointer(this.graphicsWebGLData.colorAttribute,a,u,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,this.graphicsWebGLData.positionBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e.map(p=>[p.x,p.y]).flat()),t.STATIC_DRAW),t.drawArrays(t.TRIANGLES,0,e.length)}}}drawAreaGradient(){if(this.config.renderType==="webgl"){const t=this.graphicsWebGLData.context,i=this.config.points;let e=[],n=[];const l=[],h=[],d=new P;d.scale(this.scaleX,this.scaleY);const b=new P;b.translate(this.translationX,0);const c=new P().identity();c.multiply(b).multiply(d);for(let a=0;a<i.length-1;a+=1){const u=new f(E(i[a].x,this.minX,this.maxX,0,this.config.width),E(i[a].y,this.minY,this.maxY,0,this.config.height)).clone().applyMatrix(c),m=new f(E(i[a+1].x,this.minX,this.maxX,0,this.config.width),E(i[a+1].y,this.minY,this.maxY,0,this.config.height)).clone().applyMatrix(c);n.push(u.clone(),m.clone(),new f(u.x,this.minPointY),m.clone(),new f(u.x,this.minPointY),new f(m.x,this.minPointY));const y=[0,0,0,0];h.push(...y,...y,...y,...y,...y,...y)}if(t){const a=[...this.config.lineColor];a[3]=.8;const u=[...this.config.lineColor];u[3]=0,l.push(...a,...a,...u,...u,...u,...a);const m=new f(E(i[0].x,this.minX,this.maxX,0,this.config.width),E(i[0].y,this.minY,this.maxY,0,this.config.height)).clone(),y=new f(E(i[i.length-1].x,this.minX,this.maxX,0,this.config.width),E(i[i.length-1].y,this.minY,this.maxY,0,this.config.height)).clone(),_=m.clone().applyMatrix(c),p=new f(m.x,this.maxPointY).applyMatrix(c),x=new f(y.x,this.maxPointY).applyMatrix(c),r=new f(y.x,this.minPointY).applyMatrix(c),o=[p,x,_,_,r,x];e.push(...o),t.enable(t.BLEND),t.enable(t.STENCIL_TEST),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.stencilFunc(t.ALWAYS,1,255),t.stencilOp(t.KEEP,t.KEEP,t.REPLACE),t.stencilMask(255),t.depthMask(!1),t.colorMask(!1,!1,!1,!1),t.enableVertexAttribArray(this.graphicsWebGLData.colorAttribute),t.bindBuffer(t.ARRAY_BUFFER,this.graphicsWebGLData.colorBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(h),t.STATIC_DRAW),t.vertexAttribPointer(this.graphicsWebGLData.colorAttribute,4,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,this.graphicsWebGLData.positionBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n.map(S=>[S.x,S.y]).flat()),t.STATIC_DRAW),t.drawArrays(t.TRIANGLES,0,n.length),t.stencilFunc(t.EQUAL,1,255),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.stencilMask(0),t.depthMask(!0),t.colorMask(!0,!0,!0,!0),t.enableVertexAttribArray(this.graphicsWebGLData.colorAttribute),t.bindBuffer(t.ARRAY_BUFFER,this.graphicsWebGLData.colorBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(l),t.STATIC_DRAW);let g=4,w=t.FLOAT;t.vertexAttribPointer(this.graphicsWebGLData.colorAttribute,g,w,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,this.graphicsWebGLData.positionBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e.map(S=>[S.x,S.y]).flat()),t.STATIC_DRAW),t.drawArrays(t.TRIANGLES,0,e.length),t.disable(t.STENCIL_TEST)}}}}const At=document.querySelector("#c"),$={canvasHTMLElement:At,renderType:"webgl",width:900,height:500,minX:0,minY:0,maxX:16356,maxY:500,points:[{x:1280,y:20},{x:3274,y:450},{x:4280,y:450},{x:5290,y:461},{x:6350,y:50},{x:7450,y:40},{x:8654,y:200},{x:9664,y:323},{x:10742,y:400},{x:15780,y:420}],lineColor:[.1961,.7333,.7333,1],lineLength:3,labels:{x:{display:!0,offset:{x:0,y:5},font:"",size:"16px",count:5,color:[255,255,255,1]},y:{display:!0,offset:{x:-5,y:0},font:"",size:"16px",count:4,color:[255,255,255,1]}},containerSelector:"#chart_container",grid:{x:{display:!0,color:[.35,.35,.35,1],count:8,width:.5},y:{display:!0,color:[.35,.35,.35,1],count:8,width:.5}},fillAreaUnderLine:!0},F=new xt($);F.initialize();F.draw();const W=new U({title:"Chart config parameters",width:500}),G={showArea:!0,addRandomPoint:()=>{},gridCountX:8,gridCountY:8,lineColor:[.1961,.7333,.7333],labelsCountX:5,labelsCountY:5};W.add(G,"showArea").name("Fill area under chart line").onChange(s=>{$.fillAreaUnderLine=s,F.updateConfig($),F.draw()});W.add(G,"gridCountX",2,20,1).name("Grid line count x axis").onChange(s=>{$.grid&&($.grid.x.count=s,F.updateConfig($),F.draw())});W.add(G,"gridCountY",2,20,1).name("Grid line count y axis").onChange(s=>{$.grid&&($.grid.y.count=s,F.updateConfig($),F.draw())});W.add(G,"labelsCountX",2,20,1).name("Labels count x axis").onChange(s=>{$.grid&&($.labels.x.count=s,F.updateConfig($),F.draw())});W.add(G,"labelsCountY",2,20,1).name("Labels count y axis").onChange(s=>{$.grid&&($.labels.y.count=s,F.updateConfig($),F.draw())});const vt={array:[.1961,.7333,.7333]};W.addColor(vt,"array").name("Line color").onChange(s=>{$.lineColor[0]=s[0],$.lineColor[1]=s[1],$.lineColor[2]=s[2],F.updateConfig($),F.draw()});
