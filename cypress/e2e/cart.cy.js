import CartPage from '../pages/CartPage';

describe('Carrito - Vista lateral (Aside)', () => {

  it('debería agregar producto y reflejarlo en el carrito lateral', () => {
    cy.visit('/'); // Ir al home

    const productName = 'Balón de Fútbol Profesional';

    CartPage.addProductByName(productName);
    CartPage.assertProductInCart(productName, '2'); 

    CartPage.goToCheckout(); // Valida que el botón funcione
  });

});
