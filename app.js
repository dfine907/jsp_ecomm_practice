let main = document.querySelector('.main')

let grandTotal = 0

function renderProducts() {
  for (let i = 0; i < data.length; i += 1) {
    let card = document.createElement('div')
    card.classList.add('product-card')
    main.append(card)

    let itemTitle = document.createElement('p')
    itemTitle.classList.add('list-items')
    itemTitle.innerHTML += ` ${data[i].title}`
    card.append(itemTitle)

    let itemPrice = document.createElement('p')
    itemPrice.classList.add('list-items')
    itemPrice.innerHTML += ` ${data[i].price}`
    card.append(itemPrice)

    let itemImg = document.createElement('img')
    itemImg.classList.add('list-items')
    itemImg.src = `${data[i].image}`
    card.append(itemImg)

    let buyButton = document.createElement('button')
    buyButton.innerHTML = 'BUY'
    buyButton.classList.add('buy-btn')
    card.append(buyButton)

    // const addTotals = (price) => {
    //   let finalSum = (grandTotal += price)
    //   console.log(finalSum)
    // }

    const addTotals = (price) => {
      return () => {
        grandTotal += price
      }
    }

    buyButton.addEventListener('click', function () {
      addTotals(data[i].price)
    })
  }
}
renderProducts()

// function addTotals(price) {
//   console.log(price)
// }
