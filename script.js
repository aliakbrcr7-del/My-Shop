/* =========================================================
   AT7 STORE — APPLICATION
========================================================= */

(() => {
    "use strict";


    /* =====================================================
       DATA
    ===================================================== */

    const CATEGORIES = [
        { id: "mobile", title: "موبایل", icon: "📱" },
        { id: "laptop", title: "لپ‌تاپ", icon: "💻" },
        { id: "audio", title: "صوتی", icon: "🎧" },
        { id: "gaming", title: "گیمینگ", icon: "🎮" },
        { id: "wearable", title: "پوشیدنی", icon: "⌚" },
        { id: "computer", title: "کامپیوتر", icon: "🖥️" },
        { id: "accessories", title: "لوازم جانبی", icon: "🔌" },
        { id: "tv", title: "تلویزیون", icon: "📺" }
    ];


    const BRANDS = [
        "Apple",
        "Samsung",
        "Xiaomi",
        "Sony",
        "ASUS",
        "Lenovo",
        "Logitech"
    ];


    const PRODUCTS = [

        {
            id: 1,
            title: "iPhone 16 Pro",
            brand: "Apple",
            category: "mobile",
            price: 89900000,
            oldPrice: 94900000,
            rating: 4.8,
            reviews: 184,
            badge: "ویژه",
            image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=85",
            specs: {
                "حافظه": "256GB",
                "رم": "8GB",
                "نمایشگر": "6.3 اینچ",
                "دوربین": "48MP"
            },
            description: "پرچمدار قدرتمند اپل با طراحی حرفه‌ای، نمایشگر باکیفیت و عملکرد سریع."
        },

        {
            id: 2,
            title: "Galaxy S25 Ultra",
            brand: "Samsung",
            category: "mobile",
            price: 84900000,
            oldPrice: 91000000,
            rating: 4.9,
            reviews: 231,
            badge: "پرفروش",
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=85",
            specs: {
                "حافظه": "256GB",
                "رم": "12GB",
                "نمایشگر": "6.9 اینچ",
                "دوربین": "200MP"
            },
            description: "یکی از قدرتمندترین گوشی‌های اندرویدی با دوربین حرفه‌ای و نمایشگر بزرگ."
        },

        {
            id: 3,
            title: "MacBook Air M3",
            brand: "Apple",
            category: "laptop",
            price: 112900000,
            oldPrice: 119000000,
            rating: 4.9,
            reviews: 94,
            badge: "جدید",
            image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
            specs: {
                "پردازنده": "Apple M3",
                "رم": "16GB",
                "حافظه": "512GB SSD",
                "نمایشگر": "13.6 اینچ"
            },
            description: "لپ‌تاپ سبک و قدرتمند اپل برای کار، طراحی و استفاده حرفه‌ای."
        },

        {
            id: 4,
            title: "ROG Zephyrus G16",
            brand: "ASUS",
            category: "laptop",
            price: 145000000,
            oldPrice: 152000000,
            rating: 4.7,
            reviews: 52,
            badge: "گیمینگ",
            image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=85",
            specs: {
                "پردازنده": "Core Ultra 9",
                "رم": "32GB",
                "گرافیک": "RTX 4070",
                "نمایشگر": "16 اینچ"
            },
            description: "لپ‌تاپ گیمینگ قدرتمند برای اجرای بازی‌ها و نرم‌افزارهای سنگین."
        },

        {
            id: 5,
            title: "WH-1000XM5",
            brand: "Sony",
            category: "audio",
            price: 16900000,
            oldPrice: 18500000,
            rating: 4.8,
            reviews: 307,
            badge: "پرفروش",
            image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85",
            specs: {
                "نوع": "Over Ear",
                "اتصال": "Bluetooth",
                "باتری": "30 ساعت",
                "حذف نویز": "دارد"
            },
            description: "هدفون حرفه‌ای سونی با حذف نویز فعال و کیفیت صدای بسیار بالا."
        },

        {
            id: 6,
            title: "AirPods Pro 2",
            brand: "Apple",
            category: "audio",
            price: 14900000,
            oldPrice: 16400000,
            rating: 4.7,
            reviews: 416,
            badge: "ویژه",
            image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85",
            specs: {
                "اتصال": "Bluetooth",
                "باتری": "30 ساعت",
                "حذف نویز": "دارد",
                "درگاه": "USB-C"
            },
            description: "ایرباد حرفه‌ای اپل با صدای شفاف، حذف نویز و کیس شارژ USB-C."
        },

        {
            id: 7,
            title: "PlayStation 5 Slim",
            brand: "Sony",
            category: "gaming",
            price: 36500000,
            oldPrice: 38900000,
            rating: 4.9,
            reviews: 142,
            badge: "پرفروش",
            image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=85",
            specs: {
                "حافظه": "1TB",
                "رزولوشن": "4K",
                "نسل": "نسل نهم",
                "درایو": "دارد"
            },
            description: "نسخه Slim کنسول نسل نهم سونی با اجرای بازی‌های 4K."
        },

        {
            id: 8,
            title: "Logitech G Pro X",
            brand: "Logitech",
            category: "gaming",
            price: 8900000,
            oldPrice: 9800000,
            rating: 4.6,
            reviews: 78,
            badge: "جدید",
            image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=85",
            specs: {
                "نوع": "Gaming Headset",
                "اتصال": "USB / 3.5mm",
                "میکروفون": "دارد",
                "RGB": "دارد"
            },
            description: "هدست گیمینگ حرفه‌ای با میکروفون و صدای دقیق برای بازی."
        },

        {
            id: 9,
            title: "Galaxy Watch 7",
            brand: "Samsung",
            category: "wearable",
            price: 14900000,
            oldPrice: 16200000,
            rating: 4.6,
            reviews: 61,
            badge: "جدید",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
            specs: {
                "نمایشگر": "AMOLED",
                "اتصال": "Bluetooth",
                "ضدآب": "دارد",
                "GPS": "دارد"
            },
            description: "ساعت هوشمند سامسونگ با امکانات ورزشی و سلامتی متنوع."
        },

        {
            id: 10,
            title: "Xiaomi Watch S4",
            brand: "Xiaomi",
            category: "wearable",
            price: 8900000,
            oldPrice: 9700000,
            rating: 4.5,
            reviews: 44,
            badge: "ویژه",
            image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=900&q=85",
            specs: {
                "نمایشگر": "AMOLED",
                "باتری": "15 روز",
                "GPS": "دارد",
                "ضدآب": "دارد"
            },
            description: "ساعت هوشمند خوش‌قیمت با باتری قدرتمند و طراحی مدرن."
        },

        {
            id: 11,
            title: "MX Master 3S",
            brand: "Logitech",
            category: "accessories",
            price: 5400000,
            oldPrice: 5900000,
            rating: 4.8,
            reviews: 128,
            badge: "پرفروش",
            image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
            specs: {
                "اتصال": "Bluetooth",
                "DPI": "8000",
                "دکمه": "7 عدد",
                "باتری": "70 روز"
            },
            description: "ماوس حرفه‌ای لاجیتک برای کار طولانی و طراحی."
        },

        {
            id: 12,
            title: "Mechanical Keyboard",
            brand: "Logitech",
            category: "computer",
            price: 6900000,
            oldPrice: 7600000,
            rating: 4.6,
            reviews: 87,
            badge: "جدید",
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
            specs: {
                "نوع": "Mechanical",
                "اتصال": "USB-C",
                "نورپردازی": "RGB",
                "سوییچ": "Linear"
            },
            description: "کیبورد مکانیکال با طراحی حرفه‌ای برای گیمینگ و کار."
        },

        {
            id: 13,
            title: "27-inch 4K Monitor",
            brand: "LG",
            category: "computer",
            price: 24900000,
            oldPrice: 26800000,
            rating: 4.7,
            reviews: 39,
            badge: "ویژه",
            image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
            specs: {
                "اندازه": "27 اینچ",
                "رزولوشن": "4K",
                "پنل": "IPS",
                "رفرش": "60Hz"
            },
            description: "مانیتور 4K مناسب طراحی، تولید محتوا و استفاده حرفه‌ای."
        },

        {
            id: 14,
            title: "65-inch OLED TV",
            brand: "LG",
            category: "tv",
            price: 79900000,
            oldPrice: 85000000,
            rating: 4.9,
            reviews: 28,
            badge: "جدید",
            image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=85",
            specs: {
                "اندازه": "65 اینچ",
                "پنل": "OLED",
                "رزولوشن": "4K",
                "HDR": "دارد"
            },
            description: "تلویزیون OLED با کنتراست فوق‌العاده و کیفیت تصویر 4K."
        },

        {
            id: 15,
            title: "Portable Bluetooth Speaker",
            brand: "Sony",
            category: "audio",
            price: 7200000,
            oldPrice: 8100000,
            rating: 4.6,
            reviews: 92,
            badge: "پرفروش",
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
            specs: {
                "توان": "30W",
                "باتری": "24 ساعت",
                "ضدآب": "IP67",
                "اتصال": "Bluetooth"
            },
            description: "اسپیکر قابل حمل قدرتمند با صدای پرحجم و باتری بادوام."
        }

    ];


    /* =====================================================
       STATE
    ===================================================== */

    const state = {
        category: "all",
        sort: "newest",
        search: "",
        cart: loadStorage("at7-cart-v1", []),
        wishlist: loadStorage("at7-wishlist-v1", [])
    };


    /* =====================================================
       DOM
    ===================================================== */

    const dom = {
        categoryGrid: document.querySelector("#categoryGrid"),
        productGrid: document.querySelector("#productGrid"),
        dealGrid: document.querySelector("#dealGrid"),
        brandGrid: document.querySelector("#brandGrid"),
        filters: document.querySelector("#filters"),

        resultCount: document.querySelector("#productResultCount"),
        sortSelect: document.querySelector("#sortSelect"),

        cartCount: document.querySelector("#cartCount"),
        cartDrawer: document.querySelector("#cartDrawer"),
        cartItems: document.querySelector("#cartItems"),
        cartTotal: document.querySelector("#cartTotal"),

        overlay: document.querySelector("#overlay"),

        searchPanel: document.querySelector("#searchPanel"),
        searchInput: document.querySelector("#searchInput"),
        headerSearch: document.querySelector("#headerSearch"),
        searchResults: document.querySelector("#searchResults"),
        searchResultText: document.querySelector("#searchResultText"),

        productModal: document.querySelector("#productModal"),
        quickViewContent: document.querySelector("#quickViewContent"),

        mobileMenu: document.querySelector("#mobileMenu"),

        toastRegion: document.querySelector("#toastRegion"),

        dealHours: document.querySelector("#dealHours"),
        dealMinutes: document.querySelector("#dealMinutes"),
        dealSeconds: document.querySelector("#dealSeconds")
    };


    /* =====================================================
       STORAGE
    ===================================================== */

    function loadStorage(key, fallback) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : fallback;
        } catch {
            return fallback;
        }
    }


    function saveStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }


    /* =====================================================
       FORMATTERS
    ===================================================== */

    function formatPrice(value) {
        return new Intl.NumberFormat("fa-IR").format(value);
    }


    function getProduct(id) {
        return PRODUCTS.find(product => product.id === Number(id));
    }


    /* =====================================================
       CATEGORY RENDER
    ===================================================== */

    function renderCategories() {
        dom.categoryGrid.innerHTML = CATEGORIES.map(category => `
            <button
                class="category-card"
                data-category="${category.id}"
            >
                <span class="category-card__icon">
                    ${category.icon}
                </span>

                <span class="category-card__title">
                    ${category.title}
                </span>
            </button>
        `).join("");
    }


    function renderFilters() {
        const filters = [
            { id: "all", title: "همه" },
            ...CATEGORIES
        ];

        dom.filters.innerHTML = filters.map(item => `
            <button
                class="filter-btn ${state.category === item.id ? "active" : ""}"
                data-category="${item.id}"
            >
                ${item.title}
            </button>
        `).join("");
    }


    function renderBrands() {
        dom.brandGrid.innerHTML = BRANDS.map(brand => `
            <button
                class="brand-item"
                data-brand="${brand}"
            >
                ${brand}
            </button>
        `).join("");
    }


    /* =====================================================
       PRODUCT DATA
    ===================================================== */

    function getFilteredProducts() {
        let products = [...PRODUCTS];

        if (state.category !== "all") {
            products = products.filter(
                product => product.category === state.category
            );
        }

        if (state.search.trim()) {
            const query = state.search.trim().toLowerCase();

            products = products.filter(product =>
                product.title.toLowerCase().includes(query) ||
                product.brand.toLowerCase().includes(query)
            );
        }

        switch (state.sort) {

            case "price-low":
                products.sort((a, b) => a.price - b.price);
                break;

            case "price-high":
                products.sort((a, b) => b.price - a.price);
                break;

            case "rating":
                products.sort((a, b) => b.rating - a.rating);
                break;

            default:
                products.sort((a, b) => b.id - a.id);
        }

        return products;
    }


    /* =====================================================
       PRODUCT CARD
    ===================================================== */

    function productCard(product) {

        const wished = state.wishlist.includes(product.id);

        return `
            <article class="product-card">

                <div class="product-card__image">

                    <button
                        class="wishlist-btn ${wished ? "active" : ""}"
                        data-action="wishlist"
                        data-product-id="${product.id}"
                        aria-label="افزودن به علاقه‌مندی"
                    >
                        ${wished ? "♥" : "♡"}
                    </button>

                    <div class="product-card__badges">
                        <span class="product-badge">
                            ${product.badge}
                        </span>
                    </div>

                    <img
                        src="${product.image}"
                        alt="${product.title}"
                        loading="lazy"
                    >

                </div>


                <div class="product-card__body">

                    <div class="product-brand">
                        ${product.brand}
                    </div>

                    <button
                        class="product-title"
                        data-action="quick-view"
                        data-product-id="${product.id}"
                    >
                        ${product.title}
                    </button>

                    <div class="product-rating">
                        <span class="stars">★</span>
                        <strong>${product.rating}</strong>
                        <span class="rating-count">
                            (${product.reviews})
                        </span>
                    </div>

                    <div class="product-price">

                        <div>
                            <div class="price-old">
                                ${formatPrice(product.oldPrice)}
                            </div>

                            <div class="price-current">
                                ${formatPrice(product.price)}
                                <span class="price-currency">تومان</span>
                            </div>
                        </div>

                    </div>

                    <button
                        class="add-cart"
                        data-action="add-cart"
                        data-product-id="${product.id}"
                    >
                        افزودن به سبد خرید
                    </button>

                </div>

            </article>
        `;
    }


    /* =====================================================
       PRODUCT RENDER
    ===================================================== */

    function renderProducts() {
        const products = getFilteredProducts();

        dom.productGrid.innerHTML = products.length
            ? products.map(productCard).join("")
            : `
                <div class="empty-state">
                    محصولی با این مشخصات پیدا نشد.
                </div>
            `;

        dom.resultCount.textContent =
            `${formatPrice(products.length)} محصول`;

        renderFilters();
    }


    function renderDeals() {
        const deals = PRODUCTS
            .filter(product => product.oldPrice > product.price)
            .slice(0, 5);

        dom.dealGrid.innerHTML = deals.map(productCard).join("");
    }


    /* =====================================================
       CART
    ===================================================== */

    function addToCart(id) {

        const product = getProduct(id);

        if (!product) return;

        const existing = state.cart.find(
            item => item.id === product.id
        );

        if (existing) {
            existing.quantity += 1;
        } else {
            state.cart.push({
                id: product.id,
                quantity: 1
            });
        }

        saveStorage("at7-cart-v1", state.cart);

        updateCart();

        showToast(`${product.title} به سبد خرید اضافه شد`);
    }


    function removeFromCart(id) {
        state.cart = state.cart.filter(
            item => item.id !== Number(id)
        );

        saveStorage("at7-cart-v1", state.cart);

        updateCart();
    }


    function changeQuantity(id, amount) {

        const item = state.cart.find(
            cartItem => cartItem.id === Number(id)
        );

        if (!item) return;

        item.quantity += amount;

        if (item.quantity <= 0) {
            removeFromCart(id);
            return;
        }

        saveStorage("at7-cart-v1", state.cart);

        updateCart();
    }


    function getCartCount() {
        return state.cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );
    }


    function getCartTotal() {
        return state.cart.reduce((sum, item) => {

            const product = getProduct(item.id);

            return sum + (
                product
                    ? product.price * item.quantity
                    : 0
            );

        }, 0);
    }


    function updateCart() {

        dom.cartCount.textContent =
            formatPrice(getCartCount());

        if (!state.cart.length) {

            dom.cartItems.innerHTML = `
                <div class="empty-state">
                    <div>
                        <div style="font-size:45px;margin-bottom:15px">
                            🛒
                        </div>
                        سبد خریدت هنوز خالیه.
                    </div>
                </div>
            `;

        } else {

            dom.cartItems.innerHTML = state.cart.map(item => {

                const product = getProduct(item.id);

                if (!product) return "";

                return `
                    <div class="cart-item">

                        <img
                            src="${product.image}"
                            alt="${product.title}"
                        >

                        <div>

                            <h4>
                                ${product.title}
                            </h4>

                            <p>
                                ${formatPrice(product.price)}
                                تومان
                            </p>

                            <div class="cart-controls">

                                <button
                                    class="qty-btn"
                                    data-action="quantity"
                                    data-product-id="${product.id}"
                                    data-amount="1"
                                >
                                    +
                                </button>

                                <span>
                                    ${item.quantity}
                                </span>

                                <button
                                    class="qty-btn"
                                    data-action="quantity"
                                    data-product-id="${product.id}"
                                    data-amount="-1"
                                >
                                    −
                                </button>

                            </div>

                        </div>

                        <button
                            class="remove-item"
                            data-action="remove-cart"
                            data-product-id="${product.id}"
                        >
                            حذف
                        </button>

                    </div>
                `;

            }).join("");
        }

        dom.cartTotal.textContent =
            `${formatPrice(getCartTotal())} تومان`;
    }


    /* =====================================================
       WISHLIST
    ===================================================== */

    function toggleWishlist(id) {

        id = Number(id);

        const index = state.wishlist.indexOf(id);

        if (index === -1) {
            state.wishlist.push(id);
            showToast("به علاقه‌مندی‌ها اضافه شد");
        } else {
            state.wishlist.splice(index, 1);
            showToast("از علاقه‌مندی‌ها حذف شد");
        }

        saveStorage("at7-wishlist-v1", state.wishlist);

        renderProducts();
        renderDeals();
    }


    /* =====================================================
       SEARCH
    ===================================================== */

    function openSearch() {

        dom.searchPanel.classList.add("active");

        document.body.classList.add("no-scroll");

        setTimeout(() => {
            dom.searchInput.focus();
        }, 200);
    }


    function closeSearch() {

        dom.searchPanel.classList.remove("active");

        document.body.classList.remove("no-scroll");
    }


    function performSearch(value) {

        state.search = value;

        const query = value.trim().toLowerCase();

        const results = query
            ? PRODUCTS.filter(product =>
                product.title.toLowerCase().includes(query) ||
                product.brand.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            )
            : [];

        dom.searchResultText.textContent = query
            ? `${formatPrice(results.length)} نتیجه برای «${value}»`
            : "عبارت موردنظر را جستجو کنید";

        dom.searchResults.innerHTML = results.length
            ? results.map(productCard).join("")
            : query
                ? `<div class="empty-state">محصولی پیدا نشد.</div>`
                : "";
    }


    /* =====================================================
       QUICK VIEW
    ===================================================== */

    function openQuickView(id) {

        const product = getProduct(id);

        if (!product) return;

        const specs = Object.entries(product.specs)
            .map(([key, value]) => `
                <div class="spec-row">
                    <span>${key}</span>
                    <strong>${value}</strong>
                </div>
            `)
            .join("");

        dom.quickViewContent.innerHTML = `

            <div class="quick-view">

                <div class="quick-view__image">

                    <img
                        src="${product.image}"
                        alt="${product.title}"
                    >

                </div>

                <div class="quick-view__info">

                    <div class="quick-view__brand">
                        ${product.brand}
                    </div>

                    <h2 class="quick-view__title">
                        ${product.title}
                    </h2>

                    <div class="product-rating">
                        <span class="stars">★</span>
                        <strong>${product.rating}</strong>
                        <span class="rating-count">
                            ${product.reviews} نظر
                        </span>
                    </div>

                    <p class="quick-view__description">
                        ${product.description}
                    </p>

                    <div class="spec-list">
                        ${specs}
                    </div>

                    <div class="price-current">
                        ${formatPrice(product.price)}
                        <span class="price-currency">تومان</span>
                    </div>

                    <button
                        class="add-cart"
                        style="margin-top:20px;height:48px"
                        data-action="add-cart"
                        data-product-id="${product.id}"
                    >
                        افزودن به سبد خرید
                    </button>

                </div>

            </div>

        `;

        dom.productModal.classList.add("active");
        document.body.classList.add("no-scroll");
    }


    function closeModal() {

        dom.productModal.classList.remove("active");

        document.body.classList.remove("no-scroll");
    }


    /* =====================================================
       DRAWERS
    ===================================================== */

    function openCart() {

        dom.cartDrawer.classList.add("active");
        dom.overlay.classList.add("active");

        document.body.classList.add("no-scroll");
    }


    function closeCart() {

        dom.cartDrawer.classList.remove("active");
        dom.overlay.classList.remove("active");

        document.body.classList.remove("no-scroll");
    }


    function openMobileMenu() {

        dom.mobileMenu.classList.add("active");
        dom.overlay.classList.add("active");

        document.body.classList.add("no-scroll");
    }


    function closeMobileMenu() {

        dom.mobileMenu.classList.remove("active");
        dom.overlay.classList.remove("active");

        document.body.classList.remove("no-scroll");
    }


    /* =====================================================
       TOAST
    ===================================================== */

    function showToast(message) {

        const toast = document.createElement("div");

        toast.className = "toast";
        toast.textContent = message;

        dom.toastRegion.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 2500);
    }


    /* =====================================================
       CATEGORY FILTER
    ===================================================== */

    function selectCategory(category) {

        state.category = category;

        state.search = "";

        renderProducts();

        document
            .querySelector("#products")
            ?.scrollIntoView({
                behavior: "smooth"
            });
    }


    /* =====================================================
       BRAND FILTER
    ===================================================== */

    function selectBrand(brand) {

        state.search = brand;

        state.category = "all";

        renderProducts();

        document
            .querySelector("#products")
            ?.scrollIntoView({
                behavior: "smooth"
            });

        showToast(`محصولات ${brand}`);
    }


    /* =====================================================
       EVENTS
    ===================================================== */

    document.addEventListener("click", event => {

        const actionElement =
            event.target.closest("[data-action]");

        const categoryElement =
            event.target.closest("[data-category]");

        const brandElement =
            event.target.closest("[data-brand]");


        /* ---------------------------------------------
           ACTIONS
        --------------------------------------------- */

        if (actionElement) {

            const action =
                actionElement.dataset.action;

            const productId =
                actionElement.dataset.productId;


            switch (action) {

                case "add-cart":
                    addToCart(productId);
                    break;

                case "wishlist":
                    toggleWishlist(productId);
                    break;

                case "quick-view":
                    openQuickView(productId);
                    break;

                case "cart":
                    openCart();
                    break;

                case "close-cart":
                    closeCart();
                    break;

                case "search":
                    openSearch();
                    break;

                case "close-search":
                    closeSearch();
                    break;

                case "close-modal":
                    closeModal();
                    break;

                case "mobile-menu":
                    openMobileMenu();
                    break;

                case "close-mobile":
                    closeMobileMenu();
                    break;

                case "remove-cart":
                    removeFromCart(productId);
                    break;

                case "quantity":
                    changeQuantity(
                        productId,
                        Number(actionElement.dataset.amount)
                    );
                    break;

                case "account":
                    showToast("بخش حساب کاربری به‌زودی فعال می‌شود");
                    break;
            }
        }


        /* ---------------------------------------------
           CATEGORY
        --------------------------------------------- */

        if (
            categoryElement &&
            !actionElement
        ) {
            selectCategory(
                categoryElement.dataset.category
            );
        }


        /* ---------------------------------------------
           BRAND
        --------------------------------------------- */

        if (brandElement) {
            selectBrand(
                brandElement.dataset.brand
            );
        }

    });


    /* =====================================================
       SEARCH EVENTS
    ===================================================== */

    dom.headerSearch.addEventListener("focus", openSearch);

    dom.headerSearch.addEventListener("input", event => {

        dom.searchInput.value = event.target.value;

        openSearch();

        performSearch(event.target.value);
    });


    dom.searchInput.addEventListener("input", event => {

        performSearch(event.target.value);

        dom.headerSearch.value = event.target.value;
    });


    /* =====================================================
       SORT
    ===================================================== */

    dom.sortSelect.addEventListener("change", event => {

        state.sort = event.target.value;

        renderProducts();
    });


    /* =====================================================
       OVERLAY
    ===================================================== */

    dom.overlay.addEventListener("click", () => {

        closeCart();
        closeMobileMenu();

    });


    /* =====================================================
       MODAL OUTSIDE CLICK
    ===================================================== */

    dom.productModal.addEventListener("click", event => {

        if (event.target === dom.productModal) {
            closeModal();
        }

    });


    /* =====================================================
       KEYBOARD
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") return;

        closeSearch();
        closeModal();
        closeCart();
        closeMobileMenu();

    });


    /* =====================================================
       CHECKOUT
    ===================================================== */

    document
        .querySelector("#checkoutBtn")
        .addEventListener("click", () => {

            if (!state.cart.length) {
                showToast("سبد خریدت خالیه");
                return;
            }

            showToast(
                "مرحله پرداخت در نسخه بعدی فعال می‌شود"
            );
        });


    /* =====================================================
       DEAL TIMER
    ===================================================== */

    const dealEnd =
        Date.now() +
        (
            12 * 60 * 60 * 1000 +
            45 * 60 * 1000 +
            9 * 1000
        );


    function updateTimer() {

        const remaining =
            Math.max(0, dealEnd - Date.now());

        const hours =
            Math.floor(remaining / 3600000);

        const minutes =
            Math.floor(
                (remaining % 3600000) / 60000
            );

        const seconds =
            Math.floor(
                (remaining % 60000) / 1000
            );

        dom.dealHours.textContent =
            String(hours).padStart(2, "0");

        dom.dealMinutes.textContent =
            String(minutes).padStart(2, "0");

        dom.dealSeconds.textContent =
            String(seconds).padStart(2, "0");
    }


    setInterval(updateTimer, 1000);


    /* =====================================================
       SMOOTH PRODUCT HOVER
    ===================================================== */

    function setupImageMotion() {

        if (window.matchMedia("(max-width: 850px)").matches) {
            return;
        }

        document.addEventListener("mousemove", event => {

            const hero =
                document.querySelector(".hero-main");

            if (!hero) return;

            const rect =
                hero.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width - .5;

            const y =
                (event.clientY - rect.top) /
                rect.height - .5;

            const image =
                hero.querySelector(".hero-product");

            if (!image) return;

            image.style.transform =
                `rotate(${-8 + x * 3}deg)
                 translate(${x * 8}px, ${y * -8}px)`;
        });
    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    function setupReveal() {

        const items =
            document.querySelectorAll(
                ".section, .hero-main, .hero-card"
            );

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";

                        observer.unobserve(entry.target);

                    });

                },
                {
                    threshold: .08
                }
            );

        items.forEach(item => {

            item.style.opacity = "0";
            item.style.transform = "translateY(18px)";
            item.style.transition =
                "opacity .7s ease, transform .7s ease";

            observer.observe(item);
        });
    }


    /* =====================================================
       INITIALIZATION
    ===================================================== */

    function init() {

        renderCategories();

        renderBrands();

        renderProducts();

        renderDeals();

        updateCart();

        updateTimer();

        setupImageMotion();

        setupReveal();

    }


    document.addEventListener(
        "DOMContentLoaded",
        init
    );

})();