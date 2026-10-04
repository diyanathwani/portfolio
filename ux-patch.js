(function(){
function go(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}
function button(text,action,cls){const b=document.createElement('button');b.type='button';b.textContent=text;if(cls)b.className=cls;b.addEventListener('click',action);return b;}
function fix(){
 const bar=document.querySelector('.nk-bar');if(bar){const c=Array.from(bar.querySelectorAll('button')).find(b=>/let.s talk/i.test(b.textContent));if(c)c.textContent="Let's Chat";
 if(!document.querySelector('.ux-mobile-jumps')){const d=document.createElement('details');d.className='ux-mobile-jumps';const summary=document.createElement('summary');summary.textContent='Explore the portfolio';d.append(summary);const nav=document.createElement('nav');nav.setAttribute('aria-label','Mobile sections');[['about','About'],['results','Results'],['work','Work'],['journey','Journey'],['featured','Featured'],['media','Media'],['contact',"Let's Chat"]].forEach(([id,label])=>nav.append(button(label,()=>{d.open=false;go(id)})));d.append(nav);bar.after(d);}}
 const contact=document.querySelector('#contact .nk-form');if(contact&&!document.querySelector('.ux-book-end')){const d=document.createElement('div');d.className='ux-book-end is-wide';const p=document.createElement('p');p.textContent='Prefer a conversation?';const a=document.createElement('a');a.href='/book/';a.className='nk-btn is-yellow';a.textContent='Book a call';d.append(p,a);contact.append(d);}
 const foot=document.querySelector('.nk-end');if(foot&&!foot.querySelector('.ux-top'))foot.prepend(button('Back to top ↑',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}),'nk-btn is-outline ux-top'));
}
fix();new MutationObserver(fix).observe(document.querySelector('#root')||document.documentElement,{childList:true,subtree:true});
})();
