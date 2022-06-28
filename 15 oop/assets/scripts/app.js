class Product {
  // title = 'DEFAULT'
  // imageUrl
  // price
  // description

  constructor(title, image, price, desc) {
    this.title = title
    this.imageUrl = image
    this.price = price
    this.description = desc
  }
}

class ElementAttribute {
  constructor(attributeName, attributeValue) {
    this.name = attributeName
    this.value = attributeValue
  }
}

class Components {
  constructor(renderHook) {
    this.hookId = renderHookId
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag)
    if (cssClasses) {
      rootElement.className = cssClasses
    }
    if (attributes && attributes.length > 0) {
      for (const attribute of attributes) {
        rootElement.setAttribute(attribute.name, attribute.value)
      }
    }
    document.getElementById(this.hookId).append(rootElement)
    return this.rootElement
  }
}

class ShoppingCart extends Components {
  items = []

  set cartItems(value) {
    this.items = value
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`
  }

  get totalAmount() {
    const sum = this.items.reduce((prevValue, curItem) => {
      return prevValue + curItem.price
    }, 0)
    return sum
  }

  addProduct(product) {
    const updatedItems = [...this.items]
    updatedItems.push(product)
    this.cartItems = updatedItems
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart')
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `
    this.totalOutput = cartEl.querySelector('h2')
    return cartEl
  }
}

class ProductItem {
  constructor(product) {
    this.product = product
  }

  addToCart() {
    App.addProductToCart(this.product)
  }

  render() {
    const prodEl = document.createElement('li')
    prodEl.className = 'product-item'
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `
    const addCartButton = prodEl.querySelector('button')
    addCartButton.addEventListener('click', this.addToCart.bind(this))
    return prodEl
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
    const prodList = document.createElement('ul')
    prodList.className = 'product-item'
    for (const prod of this.products) {
      const productItem = new ProductItem(prod)
      const prodEl = productItem.render()
      prodList.append(prodEl)
    }
    return prodList
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app')

    this.cart = new ShoppingCart()
    const cartEl = this.cart.render()
    const productList = new ProductList()
    const prodListEl = productList.render()

    renderHook.append(cartEl)
    renderHook.append(prodListEl)
  }
}

class App {
  static cart

  static init() {
    const shop = new Shop()
    shop.render()
    this.cart = shop.cart
  }

  static addProductToCart(product) {
    this.cart.addProduct(product)
  }
}

App.init()
