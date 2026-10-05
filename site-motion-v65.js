(function(){
'use strict';
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
const style=document.createElement('style');style.textContent=`
.nk-btn,.nk-tabs button,.hub-back,.hub-more,.nk-piece,.hub-card,.nk-trophy-card,.nk-ecard,.cl-chip{transition:translate .2s ease,box-shadow .2s ease,background-color .2s ease,color .2s ease!important}
@media(hover:hover) and (pointer:fine){.nk-btn:hover,.nk-tabs button:hover,.hub-back:hover,.hub-more:hover{translate:0 -2px}.nk-piece:hover,.hub-card:hover,.nk-trophy-card:hover,.nk-ecard:hover,.cl-chip:hover{translate:0 -4px}}
.nk-btn:active,.nk-tabs button:active,.hub-back:active,.hub-more:active{translate:0 1px}
.nk-acc-item>button i{transition:rotate .2s ease!important}
.nk-acc-item.is-open>button i{rotate:180deg}
.hub-papers{transition:transform .3s cubic-bezier(.2,.7,.25,1)!important}.hub-paper{transition:transform .3s ease!important}
@media(prefers-reduced-motion:reduce){.hub-papers,.hub-paper{transition:none!important}.nk-btn,.nk-tabs button,.hub-back,.hub-more,.nk-piece,.hub-card,.nk-trophy-card,.nk-ecard,.cl-chip,.nk-acc-item>button i{transition:none!important;translate:none!important;rotate:none!important}}
`;document.head.append(style);
const revealed=new WeakSet();let observer;
function animate(node,keyframes,options){if(!reduce.matches&&node&&node.animate)node.animate(keyframes,options);}
function setup(){
 const root=document.querySelector('.nk-root');if(!root)return false;
 if('IntersectionObserver' in window){observer=new IntersectionObserver(entries=>{entries.forEach(({target,isIntersecting})=>{if(!isIntersecting||revealed.has(target))return;revealed.add(target);observer.unobserve(target);const box=target.getBoundingClientRect();if(box.top<80)return;animate(target,[{opacity:.72,translate:'0 12px'},{opacity:1,translate:'0 0'}],{duration:380,easing:'cubic-bezier(.2,.7,.25,1)'});});},{threshold:.08});root.querySelectorAll('section:not(.nk-hero):not(.nk-marquee-wrap)').forEach(n=>observer.observe(n));}
 let timer;
 root.addEventListener('click',event=>{const tab=event.target.closest('.nk-tabs button');const acc=event.target.closest('.nk-acc-item>button');const back=event.target.closest('.hub-back');if(!tab&&!acc&&!back)return;
  const scope=(tab||acc||back).closest('section');if(!scope)return;
  clearTimeout(timer);timer=setTimeout(()=>{let node;if(acc)node=acc.parentElement.querySelector('p');else if(back)node=scope.querySelector('.hub-folders');else if(tab.closest('[aria-label="Journey"]'))node=scope.querySelector('.nk-timeline,.jr-receipts,.jr-edu,.nk-clientlist');else node=scope.querySelector('.hub-open .hub-section,.hub-section[style],.nk-pieces');if(tab?.classList.contains('hub-tab'))node=scope.querySelector('.hub-section');animate(node,[{opacity:.65,translate:'0 8px'},{opacity:1,translate:'0 0'}],{duration:240,easing:'ease-out'});},0);
 });
 return true;
}
if(!setup()){const wait=new MutationObserver(()=>{if(setup())wait.disconnect();});wait.observe(document.getElementById('root')||document.body,{childList:true,subtree:true});}
})();
