
---

# Pruebas Unitarias

Este proyecto contiene pruebas unitarias para los componentes clave de la aplicación. Las pruebas se realizan utilizando el framework de pruebas Jasmine y la herramienta de testing de Angular.

## Estructura del Proyecto

- **src/app/login/login.component.spec.ts**: Contiene las pruebas unitarias para el componente LoginComponent.
- **src/app/auth.guard.spec.ts**: Contiene las pruebas unitarias para el guard AuthGuard.
- **src/app/fake-api.interceptor.spec.ts**: Contiene las pruebas unitarias para el interceptor FakeApiInterceptor.

## Ejecución de las Pruebas

Para ejecutar las pruebas unitarias, sigue estos pasos:

1. Asegúrate de tener todas las dependencias instaladas ejecutando `npm install`.
2. Ejecuta `ng test` para ejecutar las pruebas unitarias.
3. Observa los resultados en la consola. Deberías ver una salida indicando si las pruebas pasaron o fallaron.

## LoginComponent

El archivo de pruebas `login.component.spec.ts` contiene las pruebas para el componente LoginComponent. Estas pruebas comprueban la creación del componente, la validación del formulario, el manejo de errores de inicio de sesión, y el comportamiento de redirección después de un inicio de sesión exitoso.

## AuthGuard

El archivo de pruebas `auth.guard.spec.ts` contiene las pruebas para el guard AuthGuard. Estas pruebas comprueban que el guard redirige correctamente a la página de inicio de sesión cuando el usuario no está autenticado.

## FakeApiInterceptor

El archivo de pruebas `fake-api.interceptor.spec.ts` contiene las pruebas para el interceptor FakeApiInterceptor. Estas pruebas comprueban el comportamiento del interceptor al interceptar las peticiones HTTP a la API falsa y manejar las respuestas.

---

Este README proporciona una descripción general de las pruebas unitarias en el proyecto y cómo ejecutarlas, así como detalles específicos sobre las pruebas para cada componente o funcionalidad importante.
