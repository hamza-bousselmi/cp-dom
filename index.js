



let cartItems = [
    { id: 1, name: 'Item 1', price: 10, quantity: 1, liked: false },
    { id: 2, name: 'Item 2', price: 20, quantity: 1, liked: false },
    { id: 3, name: 'Item 3', price: 15, quantity: 1, liked: false },
  ];



  function displayCartItems() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';
  
    cartItems.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${item.name} - Price: $${item.price} - Quantity: ${item.quantity}</span>
        <button class="plus-btn" onclick="increaseQuantity(${item.id})">+</button>
        <button class="minus-btn" onclick="decreaseQuantity(${item.id})">-</button>
        <svg class="heart-icon ${item.liked ? 'favorite' : ''}" onclick="toggleLike(${item.id})" 
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.828c1.618-1.622 4.243-1.622 5.86 0 2.537 2.536 2.67 6.477.337 9.01l-6.197 6.195c-1.548 1.547-4.07 1.546-5.617-.002L6.8 13.839c-2.333-2.533-2.2-6.474.338-9.01zm0-2.83c-1.982 0-3.844.778-5.247 2.19-2.895 2.893-3.237 7.444-.853 10.728L12 21.857l5.101-5.098c2.384-3.283 2.042-7.835-.854-10.728C15.842 2.776 13.98 2 12 2z"/>
        </svg>`;
      cartList.appendChild(li);
    });

    updateTotalPrice();



  
  }


  function increaseQuantity(itemId) {
    const item = cartItems.find((item) => item.id === itemId);
    item.quantity++;
    displayCartItems();
  }
  
  function decreaseQuantity(itemId) {
    const item = cartItems.find((item) => item.id === itemId);
    if (item.quantity > 1) {
      item.quantity--;
      displayCartItems();
    }
  }

  function toggleLike(itemId) {
    const item = cartItems.find((item) => item.id === itemId);
    item.liked = !item.liked;
    displayCartItems();
  }

  function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    totalPriceElement.textContent = totalPrice;
  }

  displayCartItems();
