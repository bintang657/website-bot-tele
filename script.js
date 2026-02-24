// Simulasi Data API (Nanti diganti dengan fetch dari backend beneran)
const products = [
    { id: 1, name: "Premium Leather Jacket", price: 120, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80" },
    { id: 2, name: "Minimalist Watch", price: 85, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
    { id: 3, name: "Urban Sneakers", price: 95, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 4, name: "Designer Sunglasses", price: 60, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80" }
];

const productContainer = document.getElementById('product-container');

// 1. Render Produk ke dalam HTML secara dinamis
products.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="img-container">
            <img src="${product.img}" alt="${product.name}" class="product-image" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price}</p>
            <button class="btn-add">Add to Cart</button>
        </div>
    `;
    
    productContainer.appendChild(card);
});

// 2. Animasi Scroll Modern (Fade in & Slide up saat di-scroll)
const observerOptions = {
    threshold: 0.1, // Animasi mulai saat 10% elemen terlihat di layar
    rootMargin: "0px 0px -50px 0px"
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Memberikan jeda waktu (stagger) agar munculnya bergantian
            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 150); 
            
            // Berhenti memantau elemen setelah animasinya selesai
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Terapkan observer ke semua kartu produk
document.querySelectorAll('.product-card').forEach(card => {
    scrollObserver.observe(card);
});
