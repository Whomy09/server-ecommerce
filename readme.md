# API Liquidación de polizas

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Index

- [Badges](#badges)
- [Descripción](#descripción)
- [Características](#características)
- [API de referencia](#api-de-referencia)
- [Acceso al proyecto](#acceso-al-proyecto)
- [Stack tecnológico](#stack-tecnológico)
- [Tests](#tests)
- [Autores](#autores)
- [Licensia](#licensia)
- [Conclusión](#conclusión)

## Descripción

Este proyecto es una API para la liquidación de pólizas de seguros, que permite calcular el valor de las primas asociadas a distintos tipos de
coberturas (amparos) según los datos de los asegurados. Desarrollado en Java utilizando Spring Boot, el sistema recibe los datos de un asegurado,
incluyendo su tipo y número de identificación, y el valor asegurado, y devuelve un desglose de las primas correspondientes a las coberturas aplicables.

Esta API está diseñada para gestionar la creación de productos y órdenes en un e-commerce. Desarrollada con TypeScript para asegurar un código robusto y mantenible, la API utiliza Express como framework para manejar las rutas y solicitudes HTTP. La validación de los datos se realiza a través de Zod, lo que garantiza que los datos enviados cumplan con los esquemas esperados, reduciendo errores y asegurando consistencia. Además, la API se integra con Firebase para gestionar la base de datos en tiempo real, proporcionando almacenamiento seguro y escalable, así como autenticación y notificaciones si es necesario.

## Características

- Creación de Productos: La API permite agregar nuevos productos con detalles específicos como nombre, descripción y precio, asegurando que la información sea válida mediante esquemas de validación definidos con Zod.

- Gestión de Órdenes: Facilita la creación de órdenes vinculadas a los productos disponibles, permitiendo manejar la información de los pedidos, incluyendo los productos seleccionados.

## API de referencia

[Documentación del API en Postman](https://documenter.getpostman.com/view/28200281/2sAXxWa9D2)

## Acceso al proyecto

1. Clonar el repositorio desde GitHub

```bash
  https://github.com/Whomy09/server-ecommerce
```

3. Descargar las dependencias con `npm`

```bash
  npm install
```

4. Configación: Necesitara acceso a las variables de entorno y cuenta de servicio de firebase, puede contactar con el creador del proyecto para tener acceso a estas.

## Tecnologías usadas

1. Node.js
2. TypeScript
3. Zod
4. Express
5. Firebase

## Autores

- [@Whomy09](https://github.com/Whomy09)

## Licensia

- [MIT](https://choosealicense.com/licenses/mit/)

## Conclusión

Esta API para la gestión de productos y órdenes en un e-commerce proporciona una solución robusta y escalable, gracias al uso de tecnologías modernas como TypeScript, Express y Firebase. La implementación de Zod para la validación de datos asegura que las solicitudes sean consistentes y seguras, minimizando errores en la entrada de datos. Además, la integración con Firebase ofrece un almacenamiento en tiempo real y un sistema de autenticación eficiente, facilitando la expansión del proyecto a futuro.
