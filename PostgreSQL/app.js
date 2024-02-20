const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'views')))

// Test data
let products = [
  {
    id: 1,
    name: 'apple'
  },
  {
    id: 2,
    name: "Clear Man Shampoo SIIIIMMMM"
  },
  {
    id: 3,
    name: "Boring Ham 100g packaged"
  }
]

let batches = [
  {
    id: 1,
    product_id: 1,
    purchase_id: 1,
    avg_item_amount: 50,
    expiration_date: "10/10/2024"
  },
  {
    id: 2,
    product_id: 2,
    purchase_id: 12,
    avg_item_amount: 24,
    expiration_date: "0"
  },
  {
    id: 3,
    product_id: 3,
    purchase_id: 100,
    avg_item_amount: 100,
    expiration_date: "23/02/2024"
  }
]

console.log(batches[0].id)


app.get('/', (req, res) => {
    res.render('index', { title: 'teste', batches: batches, products: products})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
