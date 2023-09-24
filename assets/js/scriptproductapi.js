// Ini Menggunakan Mockapi.io
// Menyimpan data produk dalam bentuk array
const productGallery = document.getElementById('product-gallery');

// Fetch data from MockAPI.io endpoint
fetch('https://650f6f4b54d18aabfe9a10d0.mockapi.io/api/products')
  .then((response) => response.json())
  .then((data) => {
    // Loop dan buat product card
    data.forEach((product) => {
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
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


/* Ini Menggunakan fakestoreapi
// Fetch data dari fakestoreapi.com API
fetch('https://fakestoreapi.com/products')
.then((response) => response.json())
.then((data) => {
  // Product-list container
  const productList = document.getElementById('product-list');

  // Loop dan buat product card
  data.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    // Buat konten product card
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
    `;

    // Tambahkan product card ke product-list container
    productList.appendChild(productCard);
  });
})
.catch((error) => console.error('Error fetching data:', error));

*/