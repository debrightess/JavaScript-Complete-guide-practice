const productList = {
  products: [
    {
      title: 'Headphone',
      imageUrl:
        'https://cdn.pixabay.com/photo/2013/07/13/12/17/headphone-159569__340.png',
      price: 128,
      description: 'Noise cancelling headphone',
    },
    {
      title: 'Shoe',
      imageUrl:
        'https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310__340.png',
      price: 80,
      description: 'High top shoe for men',
    },
  ],

  render() {
    const renderHook = document.getElementById('app')
    const prodList = document.createElement('ul')
    prodList.className = 'product-item'
    for (const prod of this.products) {
      const prodEl = document.createElement('li')
      prodEl.className = 'product-item'
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="prod.title">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to Cart</button>
        </div>

      </div>
    `
      prodList.append(prodEl)
    }
    renderHook.append(prodList)
  },
}

productList.render()
