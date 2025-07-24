import RegisterPage from '../pages/RegisterPage';

describe('Registro de Usuario', () => {

  it('registrar un nuevo usuario exitosamente', () => {
    const email = `nuevo${Date.now()}@gmail.com`;
    const text = 'Nuevo Usuario';
    const password = 'Test1234.';
    

    RegisterPage.visit();
    RegisterPage.fillForm(email, text, password);
    RegisterPage.submit();
    
    // Verifica que el registro fue exitoso
    RegisterPage.assertRegistrationSuccess();
  });

});
