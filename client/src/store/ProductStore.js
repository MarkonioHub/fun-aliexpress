import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._products = []
        this._activeCategory = ''
        this._categories = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }

    setProducts(products) {
        this._products = products
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setActiveCategory(category) {
        this._activeCategory = category
    }

    get categories() {
        return this._categories
    }

    get products() {
        return this._products
    }

    get activeCategory() {
        return this._activeCategory
    }

    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
