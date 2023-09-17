// Menyimpan data produk dalam bentuk array
const products = [
    {
        name: 'VIVO Y22',
        description: 'HP VIVO adalah smartphone canggih dengan berbagai fitur terbaru.',
        price: 'Rp1.980.000',
        rating: '&#9733; &#9733; &#9733; &#9733; &#9733;',
        imageSrc: '../assets/image/vivo1.jpg',
        link: '#'
    },
    {
        name: 'VIVO Y16',
        description: 'HP VIVO adalah smartphone canggih dengan berbagai fitur terbaru.',
        price: 'Rp1.494.000',
        rating: '&#9733; &#9733; &#9733; &#9733; &#9733;',
        imageSrc: '../assets/image/vivo2.png',
        link: '#'
    },
    {
        name: 'VIVO Y17',
        description: 'HP VIVO adalah smartphone canggih dengan berbagai fitur terbaru.',
        price: 'Rp824.000',
        rating: '&#9733; &#9733; &#9733; &#9733; &#9734;',
        imageSrc: '../assets/image/vivo3.jpg',
        link: '#'
    },
    {
        name: 'VIVO 20s',
        description: 'HP VIVO adalah smartphone canggih dengan berbagai fitur terbaru.',
        price: 'Rp1.110.000',
        rating: '&#9733; &#9733; &#9733; &#9733; &#9734;',
        imageSrc: '../assets/image/vivo4.jpg',
        link: '#'
    },
    {
        name: 'OPPO A57',
        description: 'HP OPPO adalah smartphone canggih dengan berbagai fitur terbaru.',
        price: 'Rp2.399.000',
        rating: '&#9733; &#9733; &#9733; &#9733; &#9733;',
        imageSrc: '../assets/image/oppo1.jpg',
        link: '#'
    }, 
    {
        name: 'OPPO A78',
        description: 'HP OPPO adalah smartphone canggih dengan berbagai fitur terbaru.',
        price: 'Rp3.999.000',
        rating: '&#9733; &#9733; &#9733; &#9733; &#9733;',
        imageSrc: '../assets/image/oppo2.jpg',
        link: '#'
    }, 
    {
        name: 'Samsung A34',
        description: 'HP Samsung adalah smartphone canggih dengan berbagai fitur terbaru.',
        price: 'Rp5.399.000',
        rating: '&#9733; &#9733; &#9733; &#9733; &#9733;',
        imageSrc: '../assets/image/samsung1.jpg',
        link: '#'
    }, 
    {
        name: 'Samsung Z Flip 5',
        description: 'HP Samsung adalah smartphone canggih dengan berbagai fitur terbaru.',
        price: 'Rp17.999.000',
        rating: '&#9733; &#9733; &#9733; &#9733; &#9733;',
        imageSrc: '../assets/image/samsung2.jpg',
        link: '#'
    }, 
];

// Menambahkan produk ke dalam galeri produk
const productGallery = document.getElementById('product-gallery');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <img src="${product.imageSrc}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: ${product.price}</p>
        <button class="beli-btn">Buy</button>
        <div class="rating">${product.rating}</div>
        <a href="${product.link}">Selengkapnya</a>
    `;

    productGallery.appendChild(productCard);
});



