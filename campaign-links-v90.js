(function(){
'use strict';
const routes={"walls that raised us":"/campaign/walls-that-raised-us/","find the faces":"/campaign/find-the-faces/","read the note":"/campaign/read-the-note/","city in a frame":"/campaign/city-in-a-frame/"};
const sourceIds={"1lSHOJPShvMnURQ8giRIUlkvf_QCHCecH8t2dMP7KHo4":routes["walls that raised us"],"11RS1gev0TcPj8QUzv5wmP6pkhakjkK2Apy_ZxtaGvPM":routes["city in a frame"],"1nYYxb5wsK63dwNZx8IzCCW3vhPfbouLb":routes["find the faces"]};
function key(s){return (s||'').toLowerCase().replace(/[.\s]+/g,' ').trim();}
function link(){
 document.querySelectorAll('a[href]').forEach(a=>{const dest=routes[key(a.textContent)]||Object.entries(sourceIds).find(([id])=>a.getAttribute('href').includes(id))?.[1];if(dest&&a.getAttribute('href')!==dest)a.setAttribute('href',dest);});
 document.querySelectorAll('.nk-piece').forEach(card=>{const title=card.querySelector('h3');const dest=routes[key(title?.textContent)];if(!dest)return;card.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')!==dest)a.setAttribute('href',dest);});[title].forEach(node=>{if(!node||node.closest('a')||node.querySelector('a'))return;const a=document.createElement('a');a.href=dest;a.className='campaign-case-link';a.setAttribute('aria-label','Open '+title.textContent+' case study');while(node.firstChild)a.append(node.firstChild);node.append(a);});const cover=card.querySelector(':scope > .cv');if(cover){const a=document.createElement('a');a.href=dest;a.className='campaign-case-cover';a.setAttribute('aria-label','Open '+title.textContent+' case study');cover.before(a);a.append(cover);}});
}
const style=document.createElement('style');style.textContent='.campaign-case-link{color:inherit;text-decoration:inherit;display:block}.campaign-case-cover{display:block;color:inherit;text-decoration:none;min-width:0}.campaign-case-cover>.cv{height:100%}.campaign-case-cover:focus-visible,.campaign-case-link:focus-visible{outline:3px solid #833cff;outline-offset:4px}';document.head.append(style);
link();new MutationObserver(link).observe(document.getElementById('root')||document.body,{childList:true,subtree:true});
})();
