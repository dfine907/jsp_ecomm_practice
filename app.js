let main = document.querySelector('.main')

function renderProducts() {
  
  for(let i = 0; i < data.length; i +=1 ) {
    let card = document.createElement('div')
    card.classList.add('product-card')
    main.append(card)

    let mainList = document.createElement('ul')
    card.append(mainList)

    let product = document.createElement('li')
    product.classList.add('list-items')
    mainList.append(product)

    product.innerHTML += `Item: ${data[i].title}<br>
     Price each: ${data[i].price} <br>
     <img src=${data[i].image}>`

    let buyButton = document.createElement('button')
    buyButton.innerHTML = "BUY"
    buyButton.classList.add('buy-btn')
    product.append(buyButton)
    buyButton.addEventListener('click', function () {
      addTotals()
    })

  }


}
renderProducts()

function addTotals() {
  console.log("It works")
}