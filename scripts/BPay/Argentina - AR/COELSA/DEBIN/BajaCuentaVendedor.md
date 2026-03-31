---
title: Baja Cuenta Vendedor
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
::: note Método para dar de baja una cuenta de vendedor Debin.

**Nombre publicación:** BTCOELSAGestionDebin.VendedorCuentaBaja

**Programa:** RBTPAR56

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
cuit | String | Clave única de identificación tributaria.
ctaCbu | String | Clave Bancaria Uniforme.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
vendedorBajaResp | [sBTRespDebin](#sbtrespdebin) | Datos listados de respuesta.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió CUIT.
30002 | No se recibió CBU de la cuenta.
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
      <bts:BTCOELSAGestionDebin.VendedorCuentaBaja>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1095768874CD285A89A23FBE</Token>
            <Device>ABC</Device>
         </Btinreq>
         <bts:vendedorBaja>
            <bts:cuit>30716226308</bts:cuit>
            <bts:ctaCbu>4320001010003005710010</bts:ctaCbu>
         </bts:vendedorBaja>
      </bts:BTCOELSAGestionDebin.VendedorCuentaBaja>
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
      <BTCOELSAGestionDebin.VendedorCuentaBajaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1095768874CD285A89A23FBE</Token>
            <Device>ABC</Device>
         </Btinreq>
         <vendedorBajaResp>
            <descripcion>VENDEDOR DADO DE BAJA</descripcion>
            <codigo>00</codigo>
         </vendedorBajaResp>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCOELSAGestionDebin.VendedorCuentaBaja</Servicio>
            <Fecha>2024-08-21</Fecha>
            <Hora>15:55:35</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>1038924</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCOELSAGestionDebin.VendedorCuentaBajaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTRespDebin

### sBTRespDebin

::: center 
Los campos del tipo de dato estructurado sBTRespDebin son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción. 
codigo | String | Código. 
:::
<!-- CIERRA SDT -->