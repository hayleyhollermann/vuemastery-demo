var app = new Vue({ 
    // new Vue creates a new Vue instance - 
    // within it is an "OPTIONS" object with optional properties 
    // properties can store data and perform actions
    el: '#app',
    // element property, app connects to div with id="app"
    data: {
        product: "Socks",
        image: './greensocks.jpg',
        inventory: 8,
        newItem: true,
        onSale: false,
        details: ["80% cotton, 20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './greensocks.jpg'
            }, 
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './bluesocks.jpg'
            }
        ],
        sizes: ["S", "M", "L", "XL"],
        cart: 0,
    },
    methods: {
        addToCart: function () {
            this.cart +=1 
        }
    }
})