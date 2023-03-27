let main = document.querySelector('.main')

function renderProducts() {
  let productCard = document.querySelector('.product-card')
  main.append(productCard)

  let productList = document.querySelector('.product-list')
  productCard.append(productList)

  for (let i = 0; i < data.length; i += 1) {
    let itemsList = document.createElement('li')
    itemsList.innerHTML = `Item: ${data[i].title}<br>
   Price each: ${data[i].price}
   ${data[i].image}
   `






    productCard.append(itemsList)
  }

  productCard.innerHTML += `<p>Item 1 is: ${data[0].title}</p>`
}

let productsBtn = document.querySelector('#display-button')
productsBtn.addEventListener('click', renderProducts)
