---
title: Alta Tarjeta
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
::: note Método para dar de alta una tarjeta.

**Nombre publicación:** BTPayCaddy.AltaTarjeta

**Programa:** RBTBPT01

**Global/País:** Panamá
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre            | Tipo   | Obligatorio | Comentarios |
:--------- | :--------- | :--------- | :---------
 OperationUID      | Long   | S              | OperacionUID referenciada a la cuenta.        
 Email             | String | S              | Email.             
 Nombre            | String | N              | Nombre.             
 Apellido          | String | N              | Apellido.             
 Ocupacion         | String | N              | Ocupación.             
 LugarTrabajo      | String | N              | Lugar en el que ejerce su trabajo.             
 Pep               | String | N              | Persona expuesta políticamente.            
 Salario           | Double | N              | Salario.             
 Telefono          | String | N              | Teléfono.             
 Direccion1        | String | S              | Dirección 1.             
 Direccion2        | String | S              | Dirección 2.               
 NumeroPuerta      | String | S              | Número de puerta domicilio.             
 Ciudad            | String | S              | Ciudad.             
 Region            | String | S              | Region.             
 CodigoPostal      | String | S              | Código Postal.             
 Pais              | String | S              | País.             
 UrlFront          | String | S              | URL Front.             
 UrlBack           | String | S              | URL Back.             
 ResidencePoof     | String | S              | Prueba residencia.             
 MonedaWallet      | String | N              | Moneda de cartera.             
 DescripcionWallet | String | N              | Descripción de cartera.             
 TarjetaFisica     | String | N              | Tarjeta física.             

@tab Datos de Salida

Nombre            | Tipo   | Comentarios |
:--------- | :--------- | :--------- | :---------
 WalletId       | String     | -                           
 UserId         | String     | -                            
 CardId         | String     | -                            

@tab Errores

Código | Descripción
:--------- | :---------
30000 | No se recibió el Email.
30007 | No se recibió la Dirección 1.
30008 | No se recibió el Número de Puerta.
30009 | No se recibió la Ciudad.
30010 | No se recibió la Región.
30011 | No se recibió el Código Postal.
30012 | No se recibió el País.
30013 | No se recibió la URL Front.
30014 | No se recibió la URL Back.

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
      <bts:BTPayCaddy.AltaTarjeta>
         <bts:Btinreq>
            <Canal>BTINTERNO</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>088459081EF05E4F9E3B2B7A</Token>
         </bts:Btinreq>
         <bts:OperacionUID>42</bts:OperacionUID>
         <bts:Email>Prueba@gmail.com</bts:Email>
         <bts:Direccion1>Av Italia </bts:Direccion1>
         <bts:Direccion2>403</bts:Direccion2>
         <bts:NumeroPuerta>620</bts:NumeroPuerta>
         <bts:Ciudad>Monteviddeo</bts:Ciudad>
         <bts:Region>Centro</bts:Region>
         <bts:CodigoPostal>11400</bts:CodigoPostal>
         <bts:Pais>Panama</bts:Pais>
         <bts:UrlFront>URL</bts:UrlFront>
         <bts:UrlBack>URL</bts:UrlBack>
         <bts:ResidencePoof></bts:ResidencePoof>
      </bts:BTPayCaddy.AltaTarjeta>
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
      <BTPayCaddy.AltaTarjetaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>088459081EF05E4F9E3B2B7A</Token>
         </Btinreq>
		     <WalletId>eeb50228-19a2-40a0-95e9-019bbe42ff87</WalletId>
         <UserId>684eb09c-c107-483b-8fe1-0192df03519c</UserId>
         <CardId>16843331-08d3-4ed1-a101-0192df055e86</CardId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2026-05-06</Fecha>
            <Hora>12:40:45</Hora>
            <Numero>920208</Numero>
            <Servicio>BTPayCaddy.AltaTarjeta</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPayCaddy.AltaTarjetaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->
