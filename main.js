var app = new Vue({ 
    // new Vue creates a new Vue instance - 
    // within it is an "OPTIONS" object with optional properties 
    // properties can store data and perform actions
    el: '#app',
    // element property, app connects to div with id="app"
    data: {
        brand: "SockMaster",
        product: "Socks",
        // image: './greensocks.jpg',
        selectedVariant: 0,
        // inventory: 5,
        newItem: true,
        onSale: false,
        details: ["80% cotton, 20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './greensocks.jpg',
                variantQuantity: 8,
            }, 
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './bluesocks.jpg',
                variantQuantity: 0,
            }
        ],
        sizes: ["S", "M", "L", "XL"],
        cart: 0,
    },
    methods: {
        addToCart: function () {
            this.cart +=1 
        },
        // ESX shorthand for functions
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index);
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        inventoryMessage() {
            if (this.variants[this.selectedVariant].variantQuantity <= 0) {
                return "Out of Stock"
            }
            else if (this.variants[this.selectedVariant].variantQuantity < 10 && this.variants[this.selectedVariant].variantQuantity > 0) {
                return "Only a few left, hurry to ensure you get these awesome socks!!"
            } 
            else {
                return "In Stock!"
            }
        }
    }
})