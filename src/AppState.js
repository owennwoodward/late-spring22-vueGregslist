import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  cars: [
    // NOTE fake data until you get data
    // {make: 'honda', model: 'car', year: 2022, price: 50000, img: 'https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2020/12/21-accord-hybrid.jpg', color: '#fff', description: "it's a car yo, buy it.  I could really use the money to buy gas."},
    // {make: 'honda', model: 'car', year: 2022, price: 50000, img: 'https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2020/12/21-accord-hybrid.jpg', color: '#fff', description: "it's a car yo, buy it.  I could really use the money to buy gas."},
    // {make: 'honda', model: 'car', year: 2022, price: 50000, img: 'https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2020/12/21-accord-hybrid.jpg', color: '#fff', description: "it's a car yo, buy it.  I could really use the money to buy gas."}
  ],
  houses: [
    // { color: 'Brown', bedrooms: 3, bathrooms: 3, yearbuilt: '1999', description: 'Huge', imgUrl: 'https://cdn.carrot.com/uploads/sites/36899/2021/02/an-ugly-house.jpg' }
  ]
})
