let main = document.querySelector('.main')

function renderProducts() {
  for (let i = 0; i < data.length; i += 1) {
    let productCard = document.querySelector('.product-card')
    main.append(productCard)

    let productList = document.querySelector('.product-list')
    productCard.append(productList)

    let itemsList = document.createElement('li')
    itemsList.innerHTML += `Item: ${data[i].title}<br>
     Price each: ${data[i].price} <br>
     <img src=${data[i].image}>`

    productCard.append(itemsList)
  }
}

let productsBtn = document.querySelector('#display-button')
productsBtn.addEventListener('click', renderProducts)
