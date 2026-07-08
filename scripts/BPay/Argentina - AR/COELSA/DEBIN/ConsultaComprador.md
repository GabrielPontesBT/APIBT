---
title: Consultar Comprador
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
::: note Método para realizar la consulta de un comprador.

**Nombre publicación:** BTCOELSAGestionDebin.CompradorConsulta

**Programa:** RBTPAR57

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
cuit | String | Documento de la persona.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
Comprador | [sBTConsultaComprador](#sbtconsultacomprador) | Datos de un comprador.
Cuenta | [sBTConsultaCompradorCuenta](#sbtconsultacompradorcuenta) | Datos de la cuenta.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió CUIT.
::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCOELSAGestionDebin.CompradorConsulta>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>IVRISSO</bts:Usuario>
            <bts:Token>f65cf3d548464D4650046918</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>10.12.10.40</bts:Device>
         </bts:Btinreq>
         <bts:cuit>23112903879</bts:cuit>
      </bts:BTCOELSAGestionDebin.CompradorConsulta>
   </soapenv:Body>
</soapenv:Envelope>
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCOELSAGestionDebin.CompradorConsultaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>IVRISSO</Usuario>
            <Device>10.12.10.40</Device>
            <Requerimiento>1</Requerimiento>
            <Token>f65cf3d548464D4650046918</Token>
         </Btinreq>
         <Comprador>
            <Descripcion>COMPRADOR ENCONTRADO</Descripcion>
            <Titular>VARGAS LUIS ARTURO</Titular>
            <Codigo>00</Codigo>
            <Cuit>23112903879</Cuit>
            <Email>kdominguez@mail.com</Email>
         </Comprador>
         <Cuenta>
            <cuenta>
               <Sucursal>0099</Sucursal>
               <Tipo>20</Tipo>
               <Alta>2024-07-26T15:44:12.09</Alta>
               <Moneda>032</Moneda>
               <Banco>094</Banco>
               <Cbu>0940099312000605600019</Cbu>
               <Endpoint>0000</Endpoint>
            <Cuit></Cuit>
            </cuenta>
         </Cuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-08-01</Fecha>
            <Hora>14:49:21</Hora>
            <Numero>171266110</Numero>
            <Servicio>BTCOELSAGestionDebin.ConsultaComprador</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCOELSAGestionDebin.CompradorConsultaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTConsultaComprador  

### sBTConsultaComprador

::: center 
Los campos del tipo de dato estructurado sBTConsultaComprador son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
Descripcion | String | Descripción de consulta. 
Codigo | String | Código de consulta. 
Email | String | Email. 
Cuit | String | Documento. 
Titular | String | Nombre del titular. 
:::

::: details sBTConsultaCompradorCuenta  

### sBTConsultaCompradorCuenta

::: center 
Los campos del tipo de dato estructurado sBTConsultaCompradorCuenta son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
Sucursal | String | Sucursal. 
Tipo | String | Tipo de cuenta. 
Alta | String | Fecha de Alta. 
Cuit | String | Documento. 
Moneda | String | Moneda. 
Banco | String | Código de banco. 
Cbu | String | Clave Bancaria Uniforme. 
Endpoint | String | Código de endpoint de COELSA. 
:::
<!-- CIERRA SDT -->