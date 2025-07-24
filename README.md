# Estrategia de Automatización – Cypress QA Challenge  
**Autor:** Andres Ledesma  

---

## 1. 🎯 Objetivo

Este documento presenta la estrategia de automatización para el reto de QA asignado por **Huge Inc**.  
El objetivo es validar funcionalidades críticas del sitio [https://www.laboratoriodetesting.com](https://www.laboratoriodetesting.com) mediante el uso de **Cypress** con **JavaScript**.  

Se busca:
- Contribuir a la detección temprana de errores funcionales.
- Mantener la calidad del producto.
- Establecer una base escalable para futuras automatizaciones.

---

## 2. 📌 Alcance

La automatización cubre **tres escenarios funcionales clave**, seleccionados con base en:

- **Módulos con bugs reportados:** Registro de usuario  
- **Módulos críticos de acceso:** Login  
- **Flujo de compra esencial:** Agregar producto y mostrar carrito (aside)

| Escenario                               | Justificación                                                                 |
|----------------------------------------|-------------------------------------------------------------------------------|
| **Registro de usuario**                | Tiene bugs reportados por clientes. Validar errores, restricciones y flujos válidos. |
| **Inicio de sesión**                   | Flujo fundamental para cualquier acción del usuario registrado.               |
| **Agregar producto y mostrar carrito** | Paso esencial antes del checkout. Se valida que el producto esté reflejado correctamente en el aside. |

---

## 3. 🛠 Herramientas

| Herramienta           | Uso                                              |
|-----------------------|----------------------------------------------------|
| **Cypress**           | Framework de automatización end-to-end              |
| **JavaScript**        | Lenguaje base del proyecto                       |
| **Page Object Model** | Patrón para organizar código y separar lógica    |
| **Visual Studio Code**| Editor de desarrollo                            |
| **Git**               | Control de versiones                             |
| **Google Chrome**     | Navegador para ejecución de pruebas              |

---

## 4. 🗂 Estructura del Proyecto
project-root/
│
├── cypress/
│ ├── e2e/ # Casos de prueba automatizados
│ ├── pages/ # Clases para cada página (POM)
│ └── support/ # Comandos personalizados y helpers
│
├── cypress.config.js # Configuración base de Cypress
├── package.json # Dependencias y scripts
└── README.md # Instrucciones del proyecto

---

## 5. 🧪 Datos de Prueba

Se utilizarán los datos de prueba proporcionados oficialmente:

**Usuario 1**
- Email: `huge.test@gmail.com`  
- Contraseña: `Huge2025.`  
- Tarjeta: `4301 8223 7592 5071`  
  - Exp: `2029-09`  
  - CVV: `668`

**Usuario 2**
- Email: `huge2.test@gmail.com`  
- Contraseña: `Monday12.`  
- Tarjeta: `5840 2543 5387 0254`  
  - Exp: `2028-11`  
  - CVV: `637`

---

## 6. ✅ Buenas Prácticas Aplicadas

- Uso de **Page Object Model** para separar lógica de test y selectores.
- Reutilización de comandos en `support/commands.js`.
- Nombres de tests y archivos **descriptivos** y legibles.
- Uso de **esperas activas** por estado del DOM (`cy.get().should()`) en lugar de `cy.wait()`.
- Validación de comportamientos **positivos y negativos**.
- Manejo claro de credenciales y datos sensibles (evitando exposición en consola).

---

## 7. 🧱 Estrategia de Mantenimiento

Para garantizar escalabilidad:

- Selectores **centralizados** en clases (`LoginPage.js`, `RegisterPage.js`, etc.).
- Separación de lógica en:
  - Acciones (`login()`, `registerUser()`)
  - Verificaciones (`assertLoggedIn()`, `assertProductInCart()`)
- Instrucciones claras en el README para **extender pruebas**.

---

## 8. 🔮 Consideraciones Futuras

El sitio se encuentra en el **Sprint 6 de 18**, y se identifican próximos cambios:

- Checkout con nuevos métodos de pago.
- Rediseño visual de la homepage.

Por ello, se implementa una **estrategia modular** que:
- Facilite extensión del coverage a nuevos módulos.
- Evite rehacer código ante cambios visuales menores.

---

## 9. 🚫 Fuera del Alcance

Por razones de tiempo y enfoque:

- ❌ Flujo completo de compra con validación en historial.
- ❌ Validación visual (sin uso de Applitools o Percy).
- ❌ Pruebas de API (aunque el sistema las usa internamente).

---

## 10. 🧩 Conclusión

Esta estrategia busca entregar una solución:

- ✅ Efectiva  
- ✅ Confiable  
- ✅ Fácil de mantener  

para validar funcionalidades críticas del sitio e-commerce de pruebas.  
Se priorizó el **impacto funcional** y la **calidad del código** sobre la cantidad de pruebas.

---

---

## ⚙️ Instalación y ejecución local

Sigue estos pasos para clonar el proyecto y ejecutar las pruebas en tu entorno local:

### 1. Clona el repositorio

```bash
git clone https://github.com/Loboledesma/cypressassessment.git
cd Automation-Cypress-Clean
```

### 2. Instala las dependencias 

```bash
npm install 
```

### 3. Ejecuta Cypress

```bash
npx cypress open
npx cypress run
```
