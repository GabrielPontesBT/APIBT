---
title: Recepción de Tarjeta
breadcrumb: false
pageInfo: false
toc: false
contributors: false
editLink: false
lastUpdated: false
prev: false
next: false
comment: false
footer: false
backtotop: false
---

<!-- ABRE DATOS DEL MÉTODO -->
::: note Método para recepcionar un número de tarjeta.

**Nombre publicación:** BTPayCaddy.RecepcionTarjeta

**Programa:** RBTBPTD02

**Global/País:** Panamá
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre            | Tipo   | Comentarios |
:--------- | :--------- | :---------
CarId            | String | Identificador único de la tarjeta.
Pan              | String | Número de la tarjeta.
FechaVencimiento | String | Fecha de vencimiento en formato.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :---------
50001 | Error, ingresar carId.
50002 | Error, ingresar Pan.
50003 | Error, ingresar caFechaVencimientorId.

::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab xml
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      </bts:BTPayCaddy.RecepcionTarjeta>
         <bts:Btinreq>
            <Canal>BTINTERNO</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>088459081EF05E4F9E3B2B7A</Token>
         </bts:Btinreq>
         <bts:carId>16843331-08d3-4ed1-a101-0192df055e86</bts:carId>
         <bts:Pan>4507993276461234</bts:Pan>
         <bts:FechaVencimiento>12/28</bts:FechaVencimiento>
      </bts:BTPayCaddy.RecepcionTarjeta>
   </soapenv:Body>
</soapenv:Envelope>
```

:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab xml
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPayCaddy.RecepcionTarjetaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>088459081EF05E4F9E3B2B7A</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2026-05-06</Fecha>
            <Hora>12:40:45</Hora>
            <Numero>920208</Numero>
            <Servicio>BTPayCaddy.RecepcionTarjeta</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPayCaddy.RecepcionTarjetaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->
