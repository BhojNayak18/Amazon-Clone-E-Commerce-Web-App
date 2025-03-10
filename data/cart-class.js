class Cart {
    cartItems;
    #localStorageKey;

    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    #loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
    
        if (!this.cartItems) {
            this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId : '1'
            }, {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId : '2'
            }];
        }
    }

    saveToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId, quantity) {
        let matchingItem;
    
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId === productId) {
                matchingItem = cartItem;
            }
        });
    
        if (matchingItem) {
            matchingItem.quantity += quantity;
        } else {
            this.cartItems.push({
                productId,
                quantity,
                deliveryOptionId : '1' // default delivery option for now, replace with actual delivery option from API
            });
        }
    
        this.saveToStorage();
    }

    removeFromCart(productId) {
        this.cartItems.forEach((cartItem, index) => {
            if (cartItem.productId === productId) {
                this.cartItems.splice(index, 1);
            }
        });
    
        this.saveToStorage();
    }

    calculateCartQuantity() {
        let cartQuantity = 0;
    
        this.cartItems.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
        });
    
        return cartQuantity;
    }

    updateQuantity(productId, newQuantity) {
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId === productId) {
                cartItem.quantity = newQuantity;
            }
        });
        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId === productId) {
                cartItem.deliveryOptionId = deliveryOptionId;
            }
        });
        this.saveToStorage();
    }
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);