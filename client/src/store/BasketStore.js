import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._products = []
        makeAutoObservable(this)
    }

    get products() {
        return this._products
    }

    get count() {
        return this._products.length
    }

    get sum() {
        return this._products.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }

    setProducts(products) {
        this._products = products
    }

    updateQuantity(productId, quantity) {
        const changingProduct = this._products.find(item => item.id === productId)
        changingProduct.quantity = quantity
    }
}
