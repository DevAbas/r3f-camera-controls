import{r as l,C as y,R as j}from"./fiber-c6f35777.js";import{b as v,C as _,F as k,G as N,E as S,c as f,d as L}from"./drei-6f430ccc.js";import{u,b as a,L as E}from"./leva-a7e5785d.js";import"./three-168d7ccc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}})();var g={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=l,P=Symbol.for("react.element"),T=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,C=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I={key:!0,ref:!0,__self:!0,__source:!0};function b(s,t,i){var o,r={},n=null,d=null;i!==void 0&&(n=""+i),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(d=t.ref);for(o in t)O.call(t,o)&&!I.hasOwnProperty(o)&&(r[o]=t[o]);if(s&&s.defaultProps)for(o in t=s.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:P,type:s,key:n,ref:d,props:r,_owner:C.current}}x.Fragment=T;x.jsx=b;x.jsxs=b;g.exports=x;var e=g.exports;const M=Math.PI/180;function h(s){return s*M}const c=["intro","titanium","camera","action-button"],A=({section:s,onSectionChange:t})=>{const[i,o]=l.useState(!1);return l.useEffect(()=>{setTimeout(()=>{o(!0)},2e3)},[]),e.jsxs("main",{className:"fixed inset-0 flex flex-col p-6 pointer-events-none select-none",children:[e.jsxs("div",{className:"flex flex-1 items-center justify-between text-white",children:[e.jsx("button",{"aria-label":"Previous section",className:"pointer-events-auto inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/25 transition-[background,transform,opacity] duration-200 shadow-lg backdrop-blur-md ring-1 ring-white/15 hover:-translate-x-0.5",onClick:()=>t(s===0?c.length-1:s-1),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,className:"w-4 h-4 drop-shadow",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})})}),e.jsxs("div",{className:"relative flex-1 h-full",children:[e.jsx("section",{className:`absolute inset-4 flex flex-col items-center justify-center text-center transition-opacity duration-1000 ${c[s]==="intro"&&i?"opacity-100":"opacity-0"}`,children:e.jsxs("div",{className:"mx-auto max-w-xl rounded-xl bg-black/20 backdrop-blur-md ring-1 ring-white/10 px-5 py-4 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]",children:[e.jsx("h1",{className:"text-xl md:text-2xl font-semibold text-white tracking-tight",children:"iPhone 17 Pro Max"}),e.jsx("p",{className:"mt-1 text-3xl md:text-5xl font-bold text-white/90 tracking-tight leading-none",children:"Cosmic Orange"})]})}),e.jsx("section",{className:`absolute inset-4 flex flex-col justify-end text-center transition-opacity duration-1000 ${c[s]==="titanium"?"opacity-100":"opacity-0"}`,children:e.jsxs("div",{className:"mx-auto max-w-md rounded-xl bg-black/25 backdrop-blur-md ring-1 ring-white/10 px-5 py-4 shadow-[0_8px_25px_-10px_rgba(0,0,0,0.6)]",children:[e.jsx("h1",{className:"text-lg font-semibold text-white tracking-tight",children:"Titanium Strength"}),e.jsx("p",{className:"text-white/80 mt-1 text-sm",children:"Built to last."})]})}),e.jsx("section",{className:`absolute inset-4 flex flex-col justify-end text-center transition-opacity duration-1000 ${c[s]==="camera"?"opacity-100":"opacity-0"}`,children:e.jsxs("div",{className:"mx-auto max-w-md rounded-xl bg-black/25 backdrop-blur-md ring-1 ring-white/10 px-5 py-4 shadow-[0_8px_25px_-10px_rgba(0,0,0,0.6)]",children:[e.jsx("h1",{className:"text-lg font-semibold text-white tracking-tight",children:"Pro Camera"}),e.jsx("p",{className:"text-white/80 mt-1 text-sm",children:"Every shot, perfect."})]})}),e.jsx("section",{className:`absolute inset-4 flex flex-col justify-end text-center transition-opacity duration-1000 ${c[s]==="action-button"?"opacity-100":"opacity-0"}`,children:e.jsxs("div",{className:"mx-auto max-w-md rounded-xl bg-black/25 backdrop-blur-md ring-1 ring-white/10 px-5 py-4 shadow-[0_8px_25px_-10px_rgba(0,0,0,0.6)]",children:[e.jsx("h1",{className:"text-lg font-semibold text-white tracking-tight",children:"Action Button"}),e.jsx("p",{className:"text-white/80 mt-1 text-sm",children:"Press. Hold. Go."})]})})]}),e.jsx("button",{"aria-label":"Next section",className:"pointer-events-auto inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/25 transition-[background,transform,opacity] duration-200 shadow-lg backdrop-blur-md ring-1 ring-white/15 hover:translate-x-0.5",onClick:()=>t(s===c.length-1?0:s+1),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,className:"w-4 h-4 drop-shadow",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"})})})]}),e.jsx("div",{className:"flex justify-center items-center gap-2 mt-3",children:c.map((r,n)=>e.jsx("button",{"aria-label":`Go to ${r}`,className:`pointer-events-auto group inline-flex items-center h-2.5 rounded-full border border-white/50 overflow-hidden transition-[width,opacity,background] duration-200 ${s===n?"w-5 bg-white":"w-2.5 bg-transparent hover:bg-white/30"}`,onClick:()=>t(n),children:e.jsx("span",{className:"sr-only",children:r})},r))})]})},B={intro:[-.8408130777453015,-.5579311237409535,-1.2494838493879465,.09186000885066517,-.013170057989714374,-.15707536590700685],titanium:[-.2022697040455287,-.26852559537182874,-.19356238473511142,-.06024400385902626,-.013170057989714379,-.027212479301132964],camera:[-.05686373257404011,.05459247759151993,-.4174079876311954,.007651361152447588,.1738224439733183,-.10971973822747505],"action-button":[-.88612937193474,-.4964915367233699,.003459464080557469,-.015160554557400105,.16977404132378549,.0015889919991764756]},F={intro:[-.9168650841001468,-.5579311237409535,-1.18455240608501,.015808002495819512,-.013170057989714375,-.09214392260406992],titanium:[-.1708158290825758,-.5937539065692604,-.4482987464721301,-.06614990520729945,-.04334453556892756,-.13251272669096392],camera:[-.06895429178639603,-.11184089815513104,-.3512963624485244,.04067845278335647,.15194615506419323,.018620683161410793],"action-button":[-.6259770949105332,-.2529443173252278,-.004747347677011271,-.02485857424975495,.1912378489798071,-.013710853350645076]},$=900,G=({section:s})=>{const t=l.useRef(),i=l.useRef(),o=l.useRef();u("settings",{smoothTime:{value:.35,min:.1,max:2,step:.01,onChange:m=>t.current.smoothTime=m}}),u("dolly",{in:a(()=>{t.current.dolly(.2,!0)}),out:a(()=>{t.current.dolly(-.2,!0)})}),u("truck",{up:a(()=>{t.current.truck(0,-.1,!0)}),left:a(()=>{t.current.truck(-.1,0,!0)}),down:a(()=>{t.current.truck(0,.1,!0)}),right:a(()=>{t.current.truck(.1,0,!0)})}),u("rotate",{up:a(()=>{t.current.rotate(0,-.5,!0)}),down:a(()=>{t.current.rotate(0,.5,!0)}),left:a(()=>{t.current.rotate(-.5,0,!0)}),right:a(()=>{t.current.rotate(.5,0,!0)})}),u("fit",{fitToBox:a(()=>{t.current.fitToSphere(i.current,!0)}),fitToSphere:a(()=>{t.current.fitToSphere(o.current,!1)})});const[r,n]=l.useState(!1),d=async()=>{t.current.setLookAt(0,0,5,0,0,0,!1),await t.current.dolly(3,!0),await t.current.rotate(h(45),h(25),!0),n(!0),p()},p=()=>{window.innerWidth>$?t.current.setLookAt(...B[c[s]],!0):t.current.setLookAt(...F[c[s]],!0)};return u("Helper",{getLookAt:a(()=>{const m=t.current.getPosition(),w=t.current.getTarget();console.log([...m,...w])}),toJson:a(()=>console.log(t.current.toJSON()))}),l.useEffect(()=>{d()},[]),l.useEffect(()=>{r&&p()},[s]),e.jsxs(e.Fragment,{children:[e.jsx(_,{ref:t,mouseButtons:{left:0,middle:0,right:0,wheel:0},touches:{one:0,two:0,three:0}}),e.jsxs("mesh",{ref:i,visible:!1,children:[e.jsx("boxGeometry",{args:[.5,.8,.2]}),e.jsx("meshBasicMaterial",{color:"mediumpurple",wireframe:!0})]}),e.jsxs("mesh",{ref:o,visible:!1,children:[e.jsx("sphereGeometry",{args:[.36,64]}),e.jsx("meshBasicMaterial",{color:"hotpink",wireframe:!0})]}),e.jsx(k,{speed:.5,rotationIntensity:1.5,floatIntensity:1.5,enabled:!1,children:e.jsx(N,{position:[0,0,0],scale:3,src:"models/apple_iphone_17_pro_max.glb"})}),e.jsx("group",{"rotation-y":Math.PI,children:e.jsx(S,{preset:"warehouse",blur:!0})})]})};v.preload("models/apple_iphone_17_pro_max.glb");function D(){const{progress:s,active:t}=f(),[i,o]=l.useState(!0),r=Math.round(s);return l.useEffect(()=>{if(t)i||o(!0);else{const n=setTimeout(()=>o(!1),600);return()=>clearTimeout(n)}},[t]),i?e.jsxs("div",{className:`loading-screen ${t?"":"loading-screen--hidden"}`,children:[e.jsx("div",{className:"loading-screen__container",children:e.jsx("div",{className:"progress__container",children:e.jsx("div",{className:"progress__bar",style:{width:`${r}%`}})})}),e.jsx("div",{className:"loader-progress-big",children:r}),e.jsx("style",{children:`
        .loading-screen {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(17,17,17,0.95);
          z-index: 9999;
          transition: opacity 0.6s ease;
        }
        .loading-screen--hidden {
          opacity: 0;
          pointer-events: none;
        }
        .loading-screen__container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
          min-width: 260px;
          padding: 2rem 2.5rem;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          color: #fff;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
        }
        .progress__container {
          width: 100%;
          height: 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.15);
          overflow: hidden;
        }
        .progress__bar {
          height: 100%;
          border-radius: 12px;
          background: linear-gradient(90deg, #ff6a00, #ff9400);
          transition: width 0.3s ease;
        }
        .loader-progress-big {
          position: fixed;
          right: 2.5rem;
          bottom: 2.5rem;
          font-size: 6rem;
          font-weight: 900;
          color: #fff;
          opacity: 0.95;
          letter-spacing: 0.05em;
          pointer-events: none;
          user-select: none;
          text-shadow: 0 4px 30px rgba(0,0,0,0.25);
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        }
      `})]}):null}function U(){const[s,t]=l.useState(0),{active:i}=f();return e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx(E,{hidden:!0}),e.jsxs(y,{camera:{position:[0,0,3],fov:30},children:[e.jsx("color",{attach:"background",args:["#111"]}),e.jsx(l.Suspense,{fallback:null,children:e.jsx("group",{children:e.jsx(G,{section:s})})})]}),!i&&e.jsx(A,{section:s,onSectionChange:t})]})}L.createRoot(document.getElementById("root")).render(e.jsx(j.StrictMode,{children:e.jsx(U,{})}));
