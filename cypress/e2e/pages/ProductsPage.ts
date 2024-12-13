class ProductsPage {
    elements = {
        addToCartBtn: () => cy.get('.pricebar .btn_primary'),
        pageTitle: () => cy.get('.title'),
        productItemDescription: () => cy.get('.inventory_item_desc'),
        productItemImg: () => cy.get('.inventory_item_img img'),
        productItemPrice: () => cy.get('.inventory_item_price'),
        productItemTitle: () => cy.get('.inventory_item_name'),
        removeBtn: () => cy.get('.btn_secondary'),
        sortDropdown: () => cy.get('.product_sort_container')
    }
    addToCartByItemName(itemName: string) {
        cy.get('.inventory_item')
            .contains('.inventory_item_name', itemName) // Find the item by its name
            .parents('.inventory_item') // Get the parent element (the whole inventory item)
            .find('.pricebar .btn_primary') // Find the "ADD TO CART" button inside that item
            .click(); // Click the "ADD TO CART" button
    }
}

export const productsPage = new ProductsPage()
