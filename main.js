Vue.component('product', {
    template: `
        <div class="product">
            <div class="product-image">
                <!-- 
                    v-bind dynamically binds an attribute to an expression
                    attribute is src and expression is "image"
                    shorthand is written as :src (w/o the "v-bind")
                -->
                <img v-bind:src="image">
            </div>
            <div class="product-info">
                <h1>{{title}} <span v-show="onSale">- On Sale!</span></h1>
                <p>You'll love these {{product}}, they are the best {{product}} around</p>
                <p>{{inventoryMessage}}</p>
                <p v-show="newItem">NEW ITEM!!</p>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <div v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    class="color-box"
                    :style="{backgroundColor: variant.variantColor}"
                    @mouseover="updateProduct(index)">
                    <!-- @ is the shorthand for "v-on:" -->
                </div>
                <ul>
                    <li v-for="size in sizes">{{size}}</li>
                </ul>
                <button v-on:click="addToCart" 
                    :disabled="!inStock"
                    :class="{disabledButton: !inStock}">
                    Add to Cart
                </button>
                <div class="cart">
                    <p>Cart: {{cart}}</p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
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
        }
    },
    methods: {
        addToCart: function () {
            this.cart += 1
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


var app = new Vue({
    // new Vue creates a new Vue instance - 
    // within it is an "OPTIONS" object with optional properties 
    // properties can store data and perform actions
    el: '#app',
    // element property, app connects to div with id="app"
    
})