---
title: Alta Cuenta Especial 
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
::: note Método para dar de alta una cuenta especial Debin.

**Nombre publicación:** BTCOELSAGestionDebin.CuentaEspecialAlta

**Programa:** RBTPAR62

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
altaCuentaEntrada | [sBTAltaCtaReq](#sbtaltactareq) | Datos para alta de cuenta especial Debin.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
altaCuentaRespuesta | [sBTRespDebin](#sbtrespdebin) | Datos de respuesta Debin.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió CUIT.
30002 | No se recibió CBU de la cuenta.
30003 | No se recibió Estado de la cuenta.
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
      <bts:BTCOELSAGestionDebin.CuentaEspecialAlta>
         <bts:Btinreq>
             <bts:Device>10.12.10.40</bts:Device>
            <bts:Token>8f4120fb56464D4650046918</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>IVRISSO</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:altaCuentaEntrada>
            <bts:ctaCbu>0940099312000605600019</bts:ctaCbu>
            <bts:ctaCuit>23112903879</bts:ctaCuit>
            <bts:activo>OK</bts:activo>
         </bts:altaCuentaEntrada>
      </bts:BTCOELSAGestionDebin.CuentaEspecialAlta>
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
      <BTCOELSAGestionDebin.CuentaEspecialAltaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1095768874CD285A89A23FBE</Token>
            <Device>ABC</Device>
         </Btinreq>
         <altaCuentaRespuesta>
            <descripcion>CUENTA ESPECIAL ADHERIDA</descripcion>
            <codigo>2300</codigo>
         </altaCuentaRespuesta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCOELSAGestionDebin.CuentaEspecialAlta</Servicio>
            <Fecha>2024-08-21</Fecha>
            <Hora>17:34:58</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>1038938</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCOELSAGestionDebin.CuentaEspecialAltaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTAltaCtaReq  

### sBTAltaCtaReq

::: center 
Los campos del tipo de dato estructurado sBTAltaCtaReq son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
ctaCbu | String | Clave Bancaria Uniforme. 
ctaCuit | String | Clave única de identificación tributaria de la cuenta. 
activo | String | Estado de la cuenta. 
:::

::: details sBTRespDebin  

### sBTRespDebin

::: center 
Los campos del tipo de dato estructurado sBTRespDebin son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción de respuesta. 
codigo | String | Código de respuesta. 
:::
<!-- CIERRA SDT -->