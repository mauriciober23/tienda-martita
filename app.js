const WHATSAPP_NUMBER = '593990854589';
const categories = {whisky:'Whisky',ron:'Ron',vodka:'Vodka',tequila:'Tequila y agave',aguardiente:'Aguardiente',saborizados:'Licores saborizados',vino:'Vinos',cocteles:'Cócteles y bebidas de frutas',cerveza:'Cervezas'};
const money = n => '$ '+n.toFixed(2);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function whatsappLink(p){
 const text=p?`Hola Tienda Martita, quisiera consultar ${p.name}. ¿Qué presentaciones tienen y cuál es el precio final?`:'Hola Tienda Martita, quisiera consultar por sus licores y cervezas.';
 return 'https://wa.me/'+WHATSAPP_NUMBER+'?text='+encodeURIComponent(text);
}
const grid=document.getElementById('productGrid');
function card(p){
 const media=p.asset?`<img class="bottle-image" src="${esc(p.asset)}" alt="${esc(p.name)}" loading="lazy">`:`<div class="product-placeholder">Imagen en preparación</div>`;
 const imageScale=Number(p.imageScale)||1.08;
 const flavors=Array.isArray(p.flavors)&&p.flavors.length?`<div class="flavor-block"><span>Sabores disponibles</span><div class="flavor-list">${p.flavors.map(f=>`<small>${esc(f)}</small>`).join('')}</div></div>`:'';
 return `<article class="product-card"><div class="individual-image" style="--product-scale:${imageScale}">${media}</div><div class="product-info"><span class="product-category">${esc(categories[p.category]||p.category)}</span><h3>${esc(p.name)}</h3>${p.note?`<p class="product-meta">${esc(p.note)}</p>`:''}${flavors}<div class="price-list">${p.prices.length?p.prices.map(v=>`<div class="price-row"><span>${esc(v.size)}</span><strong>${money(v.price)}</strong></div>`).join(''):'<p class="pending-price">Precio por confirmar</p>'}</div><a class="order-button" href="${whatsappLink(p)}" target="_blank" rel="noopener">Consultar por WhatsApp</a></div></article>`;
}
function render(filter='todos'){
 grid.innerHTML=Object.entries(categories).filter(([key])=>filter==='todos'||filter===key).map(([key,label])=>{const items=products.filter(p=>p.category===key);return `<section class="category-section"><h3 class="category-title">${label} <span>${items.length}</span></h3><div class="product-grid">${items.map(card).join('')}</div></section>`;}).join('');
}
const filters=document.getElementById('filters');
filters.innerHTML=Object.entries({todos:'Todos',...categories}).map(([key,label])=>`<button class="filter ${key==='todos'?'active':''}" data-filter="${key}" aria-pressed="${key==='todos'}">${label}</button>`).join('');
filters.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;filters.querySelectorAll('button').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});render(b.dataset.filter);});
document.getElementById('floatingWhatsapp').href=whatsappLink();
render();
