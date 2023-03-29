PLANNING NOTES


STEP 1:

 1.Use the data from the fake store API:
 https://fakestoreapi.com/products

 - Create a file to store the array data of products and attach to index.html


2. Match the design below or feel free to display the data in another way. At minimum display:
-Title
-Price
-Image
-Button that reads “Buy”


- Create card div that will be a place to hold the information for each product as well as a button.
 --Use an html element to add each of the items
 --Use a loop 
    The loop needs to access each data item wanted and render ontp the page.
    A button for each item must also be created.

STEP 2

1. Add a “Total” at the top of the page
- Create a h3 div? that will contain all the added prices.
    Use reduce method to access each price in the area.

2. Every time a user clicks on the “Buy” button, the total should be incremented
- loop through each item and add each price +=

**************************************************

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

    
     
     let buyButton = document.createElement('button')
     productList.append(buyButton)
     productList.innerText += "BUY"

      productCard.append(itemsList)
    
  }
}
renderProducts()

If a render page button is needed
let productsBtn = document.querySelector('#display-button')
 productsBtn.addEventListener('click', renderProducts)