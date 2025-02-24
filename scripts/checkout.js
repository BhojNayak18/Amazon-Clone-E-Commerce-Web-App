import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch } from "../data/cart.js";
//import '../data/cart-class.js'
//import '../data/backend-practice.js'

async function loadPage() {
    // throw 'error1';

    try {
        await Promise.all([
            loadProductsFetch(),
            loadCartFetch()
        ]);
        
    } catch(error) {
        console.log(error);
    }
    
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage()

/*
Promise.all([
    // new Promise((resolve) => {
    //     loadProducts(() => {
    //         resolve('value1');
    //     });
    // }),

    loadProductsFetch(),

    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
]).then((values) => {
    console.log(values);
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value');
    });
}).then((value) => {
    console.log(value);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
}).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
loadProducts(() => {
    loadCart(() => {
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/
