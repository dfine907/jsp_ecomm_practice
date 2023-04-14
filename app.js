const main = document.querySelector('.main')
const totalDiv = document.querySelector('.total')

let grandTotal = 0

// function renderProducts() {
//   for (let i = 0; i < data.length; i += 1) {
//     let card = document.createElement('div')
//     card.classList.add('product-card')
//     main.append(card)

//     let itemTitle = document.createElement('p')
//     itemTitle.classList.add('list-items')
//     itemTitle.innerHTML += ` ${data[i].title}`
//     card.append(itemTitle)

//     let itemPrice = document.createElement('p')
//     itemPrice.classList.add('list-items')
//     itemPrice.innerHTML += ` ${data[i].price}`
//     card.append(itemPrice)

// let itemImg = document.createElement('img')
// itemImg.classList.add('list-items')
// itemImg.src = `${data[i].image}`
// card.append(itemImg)

// let buyButton = document.createElement('button')
// buyButton.innerHTML = 'BUY'
// buyButton.classList.add('buy-btn')

// buyButton.setAttribute('price', ` ${data[i].price}`)

// const addTotals = (price) => {
//   grandTotal += price
//   totalDiv.innerHTML = `Total: $ ${grandTotal}`
// }

// buyButton.addEventListener('click', function () {
//   console.log('Works')
//   addTotals(Number((data[i].price).toFixed(2)))
// })

//     card.append(buyButton)
//   }
// }

// renderProducts()

// *************   USING FETCH API USING THE FAKE DATA API TO GET THE DATA  APr 1 ******/

const URL_API = 'https://fakestoreapi.com/products'

function getData(url) {
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(typeof data);
      data.forEach((product) => {
        const display = document.createElement('div')
        display.classList.add('display-card')
        display.innerHTML += `${product.title}`
        main.append(display)

        let itemImg = document.createElement('img')
        itemImg.classList.add('list-items')
        itemImg.src = `${product.image}`
        display.append(itemImg)

        let buyButton = document.createElement('button')
        buyButton.innerHTML = 'BUY'
        buyButton.classList.add('buy-btn')

        buyButton.setAttribute('price', ` ${product.price}`)

        const addTotals = (price) => {
          grandTotal += price
          totalDiv.innerHTML = `Total: $ ${grandTotal}`
        }

        buyButton.addEventListener('click', function () {
          console.log('Works')
          addTotals(Number(product.price.toFixed(2)))
        })

        display.append(buyButton)
      })
    })
    .catch((error) => console.error(error))
}

getData(URL_API)


//   ***********************  async / await  ****************** /



  const getApiData = async () => {
  const response = await fetch(URL_API)
  const jsonStr = await response.json()

  jsonStr.forEach(item => {
    console.log(item)
  })
}

getApiData()