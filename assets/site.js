(function(){
var d=document,root=d.documentElement;
var btn=d.querySelector('.hamburger');
function setOpen(o){root.classList.toggle('mob-open',o);d.body.classList.toggle('mob-open',o);root.style.overflow=o?'hidden':'';if(btn)btn.setAttribute('aria-expanded',o?'true':'false');}
if(btn)btn.addEventListener('click',function(){setOpen(!d.body.classList.contains('mob-open'));});
d.querySelectorAll('[data-close]').forEach(function(e){e.addEventListener('click',function(){setOpen(false);});});
d.querySelectorAll('.mob-drawer a').forEach(function(a){a.addEventListener('click',function(){setOpen(false);});});
d.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false);});
window.addEventListener('resize',function(){if(window.innerWidth>768)setOpen(false);});
d.querySelectorAll('.faq .q').forEach(function(q){q.addEventListener('click',function(){
var qa=q.parentNode,a=qa.querySelector('.a'),open=qa.classList.toggle('open');
q.setAttribute('aria-expanded',open?'true':'false');a.style.maxHeight=open?a.scrollHeight+'px':'0px';});});
})();
