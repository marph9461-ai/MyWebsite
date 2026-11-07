/**
 * Ammar Alsheikh - Multilingual Frontend JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const siteNav = document.getElementById('siteNav');
    if (mobileBtn && siteNav) {
        mobileBtn.addEventListener('click', () => {
            siteNav.classList.toggle('open');
        });
    }

    updateCartBadges();
    if (document.getElementById('cartItemsList')) {
        renderCartPage();
    }
});

function getCart() {
    try {
        const raw = localStorage.getItem('ammar_cart');
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem('ammar_cart', JSON.stringify(cart));
    updateCartBadges();
}

function addToCart(id, title, price, image) {
    const cart = getCart();
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id, title, price, image, qty: 1 });
    }
    saveCart(cart);
    const isAr = document.documentElement.getAttribute('dir') === 'rtl';
    const msg = isAr ? ('تمت إضافة "' + title + '" إلى السلة!') : ('Added "' + title + '" to your cart!');
    showToast(msg);
}

function updateCartBadges() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const navBadge = document.getElementById('cartCountBadge');
    const floatBadge = document.getElementById('floatingBadge');
    if (navBadge) navBadge.textContent = count;
    if (floatBadge) floatBadge.textContent = count;
}

function renderCartPage() {
    const list = document.getElementById('cartItemsList');
    const emptyNotice = document.getElementById('emptyCartNotice');
    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');
    if (!list) return;

    const cart = getCart();
    if (cart.length === 0) {
        list.innerHTML = '';
        if (emptyNotice) emptyNotice.style.display = 'block';
        if (subtotalEl) subtotalEl.textContent = '$0.00';
        if (totalEl) totalEl.textContent = '$0.00';
        return;
    }

    if (emptyNotice) emptyNotice.style.display = 'none';

    let total = 0;
    list.innerHTML = cart.map((item, idx) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        return `
            <div class="cart-item-row" style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid #f1f5f9;">
                <div style="display:flex; align-items:center; gap:12px;">
                    <img src="${item.image}" alt="${item.title}" style="width:48px; height:48px; border-radius:8px; object-fit:cover;">
                    <div>
                        <div style="font-weight:700; font-size:0.95rem;">${item.title}</div>
                        <div style="color:#0284c7; font-weight:700;">$${item.price}</div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <button onclick="changeQty(${idx}, -1)" style="padding:4px 10px; border:1px solid #cbd5e1; background:#f8fafc; border-radius:4px; cursor:pointer;">&minus;</button>
                    <span style="font-weight:700;">${item.qty}</span>
                    <button onclick="changeQty(${idx}, 1)" style="padding:4px 10px; border:1px solid #cbd5e1; background:#f8fafc; border-radius:4px; cursor:pointer;">&plus;</button>
                    <button onclick="removeItem(${idx})" style="color:#ef4444; background:none; border:none; cursor:pointer; font-weight:700; margin-left:8px;">&times;</button>
                </div>
            </div>
        `;
    }).join('');

    if (subtotalEl) subtotalEl.textContent = '$' + total.toFixed(2);
    if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
}

function changeQty(index, delta) {
    const cart = getCart();
    if (cart[index]) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) cart.splice(index, 1);
        saveCart(cart);
        renderCartPage();
    }
}

function removeItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCartPage();
}

function clearCart() {
    const isAr = document.documentElement.getAttribute('dir') === 'rtl';
    const conf = isAr ? 'هل أنت متأكد من رغبتك في إفراغ السلة؟' : 'Are you sure you want to clear your cart?';
    if (confirm(conf)) {
        saveCart([]);
        renderCartPage();
    }
}

function checkoutWhatsApp() {
    const cart = getCart();
    const isAr = document.documentElement.getAttribute('dir') === 'rtl';
    if (cart.length === 0) {
        alert(isAr ? 'السلة فارغة حالياً.' : 'Your cart is empty.');
        return;
    }

    let text = isAr 
        ? "مرحباً عمار! أود تأكيد الطلب التالي من موقعك الإلكتروني:\n\n"
        : "Hello Ammar! I would like to place an order from your website:\n\n";
    
    let total = 0;
    cart.forEach(item => {
        text += "• " + item.title + " (العدد: " + item.qty + ") - $" + (item.price * item.qty) + "\n";
        total += item.price * item.qty;
    });
    
    text += isAr 
        ? ("\nالمجموع: $" + total + "\nالموقع: دمشق / تسليم عن بعد\nيرجى تأكيد الاستلام والتفاصيل.")
        : ("\nTotal: $" + total + "\nLocation: Damascus / Remote Delivery\nPlease confirm order availability.");

    window.open("https://wa.me/963981092422?text=" + encodeURIComponent(text), '_blank');
}

function checkoutEmail() {
    const cart = getCart();
    if (cart.length === 0) return;
    let body = "Hello Ammar,\n\nWebsite Order:\n";
    let total = 0;
    cart.forEach(item => {
        body += "- " + item.title + " x " + item.qty + " = $" + (item.price * item.qty) + "\n";
        total += item.price * item.qty;
    });
    body += "\nTotal: $" + total;
    window.location.href = "mailto:ammar_268009@svuonline.org?subject=Order&body=" + encodeURIComponent(body);
}

function showToast(message) {
    let toast = document.getElementById('siteToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'siteToast';
        toast.style.position = 'fixed';
        toast.style.bottom = '24px';
        toast.style.left = '24px';
        toast.style.background = '#0f172a';
        toast.style.color = '#ffffff';
        toast.style.padding = '12px 20px';
        toast.style.borderRadius = '8px';
        toast.style.zIndex = '9999';
        toast.style.fontSize = '0.9rem';
        toast.style.fontWeight = '600';
        toast.style.transition = 'opacity 0.3s ease';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}
