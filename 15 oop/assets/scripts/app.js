class Product {
  title = 'DEFAULT'
  imageUrl
  price
  description

  constructor(title, image, price, desc) {
    this.title = title
    this.imageUrl = image
    this.price = price
    this.description = desc
  }
}

class ProductList {
  products = [
    new Product(
      'Headphone',
      'https://cdn.pixabay.com/photo/2014/07/09/23/19/headphones-388674_960_720.jpg',
      88,
      'Noise cancelling headphone'
    ),
    new Product(
      'Shoe',
      'https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310__340.png',
      92,
      'High top male running shoes'
    ),
  ]

  constructor() {}

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
  }
}

const productList = new ProductList()
productList.render()
