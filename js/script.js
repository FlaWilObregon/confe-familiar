let currentIndex = 0;

function moveCarousel(direction) {
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

let carrito = [];

function agregarAlCarrito(servicio) {
    // Servicio tiene nombre, precio y ruta de la imagen
    const itemCarrito = {
        nombre: servicio.nombre,
        precio: servicio.precio,
        img: servicio.img
    };

    carrito.push(itemCarrito);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoItemsContainer = document.querySelector('.carrito-items');
    carritoItemsContainer.innerHTML = ''; // Limpiar el contenedor

    let total = 0;

    carrito.forEach((item, index) => {
        total += item.precio;

        const itemElement = document.createElement('div');
        itemElement.classList.add('carrito-item');

        itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.nombre}">
            <p>${item.nombre}</p>
            <p>${item.precio.toFixed(2)} PEN</p>
        `;

        carritoItemsContainer.appendChild(itemElement);
    });

    document.getElementById('total-precio').textContent = total.toFixed(2);
}

// Ejemplo de agregar un servicio al carrito al hacer clic
document.querySelectorAll('.btn-servicio').forEach((button, index) => {
    button.addEventListener('click', () => {
        // Simulación de productos y precios
        const servicios = [
            { nombre: 'Confección de Ropa a Medida', precio: 150.00, img: 'img/servicio1.jpg' },
            { nombre: 'Arreglos y Modificaciones', precio: 80.00, img: 'img/servicio2.jpg' },
            { nombre: 'Diseño de Uniformes', precio: 200.00, img: 'img/servicio3.jpg' }
        ];

        agregarAlCarrito(servicios[index]);
    });
});
