import LoginPage from '../pages/LoginPage';

describe('Login de Usuario', () => {

  it('Iniciar sesión correctamente con credenciales válidas', () => {
    LoginPage.visit();
    LoginPage.login('huge.test@gmail.com', 'Huge2025.');
    LoginPage.assertLoginSuccess();
  });

  it('Mostrar error con credenciales inválidas', () => {
    LoginPage.visit();
    LoginPage.login('usuario@invalido.com', 'claveIncorrecta!');
    LoginPage.assertLoginError(); 
  });

});
