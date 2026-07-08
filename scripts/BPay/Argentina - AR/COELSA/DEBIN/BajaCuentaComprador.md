---
title: Baja Cuenta Comprador
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
::: note Método para dar de baja a una cuenta de un comprador.

**Nombre publicación:** BTCOELSAGestionDebin.CompradorCuentaBaja

**Programa:** RBTPAR55

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
CompradorBaja | [sBTCompradorBaja](#sbtcompradorbaja) | Datos para dar de baja un comprador.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
compradorBajaRespuesta | [sBTRespDebin](#sbtrespdebin) | Datos de respuesta.

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
      <bts:BTCOELSAGestionDebin.CompradorCuentaBaja>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>IVRISSO</bts:Usuario>
            <bts:Token>f65cf3d548464D4650046918</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>10.12.10.40</bts:Device>
         </bts:Btinreq>
         <bts:CompradorBaja>
            <bts:cuit>23112903879</bts:cuit>
            <bts:ctaCBU>0940099312000605600019</bts:ctaCBU>
         </bts:CompradorBaja>
      </bts:BTCOELSAGestionDebin.CompradorCuentaBaja>
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
      <BTCOELSAGestionDebin.CompradorCuentaBajaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1095768874CD285A89A23FBE</Token>
            <Device>ABC</Device>
         </Btinreq>
         <compradorBajaRespuesta>
            <descripcion>COMPRADOR DADO DE BAJA</descripcion>
            <codigo>00</codigo>
         </compradorBajaRespuesta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCOELSAGestionDebin.CompradorCuentaBaja</Servicio>
            <Fecha>2024-08-21</Fecha>
            <Hora>15:50:42</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>1038922</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCOELSAGestionDebin.CompradorCuentaBajaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCompradorBaja  

### sBTCompradorBaja

::: center 
Los campos del tipo de dato estructurado sBTCompradorBaja son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cuit | String | Clave única de identificación tributaria.
ctaCBU | String | Clave Bancaria Uniforme. 
:::
 
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