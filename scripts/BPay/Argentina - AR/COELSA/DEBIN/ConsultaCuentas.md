---
title: Consultar Cuentas
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
::: note Método para realizar una consulta de cuentas.

**Nombre publicación:** BTCOELSAGestionDebin.ConsultaCuentas

**Programa:** RBTPAR63

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
CollectionCuentas | [sBTCollectionCuentas](#sbtcollectioncuentas) | Respuesta de consulta de cuenta.
CuentasEspRespuesta | [sBTRespDebin](#sbtrespdebin) | Respuesta de código y descripción.

@tab Errores

No aplica.
::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
   xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header />
   <soapenv:Body>
      <bts:BTCOELSAGestionDebin.ConsultaCuentas>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>IVRISSO</Usuario>
            <Device>10.12.10.40</Device>
            <Requerimiento>1</Requerimiento>
            <Token>448d2e1ecc464D4650046918</Token>
         </Btinreq>
      </bts:BTCOELSAGestionDebin.ConsultaCuentas>
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
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
   xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCOELSAGestionDebin.ConsultaCuentasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>IVRISSO</Usuario>
            <Device>10.12.10.40</Device>
            <Requerimiento>1</Requerimiento>
            <Token>448d2e1ecc464D4650046918</Token>
         </Btinreq>
         <CollectionCuentas>
            <cuentas>
               <ctaCuit>30500010602</ctaCuit>
               <ctaCbu>0940099353000000011750</ctaCbu>
               <activo>true</activo>
            </cuentas>
         </CollectionCuentas>
         <CuentasEspRespuesta>
            <descripcion>CUENTA ESPECIAL ENCONTRADA</descripcion>
            <codigo>2400</codigo>
         </CuentasEspRespuesta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-08-21</Fecha>
            <Hora>17:29:30</Hora>
            <Numero>171329248</Numero>
            <Servicio>BTCOELSAGestionDebin.ConsultaCuentas</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCOELSAGestionDebin.ConsultaCuentasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCollectionCuentas  

### sBTCollectionCuentas

::: center 
Los campos del tipo de dato estructurado sBTCollectionCuentas son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
ctaCuit | String | Clave única de identificación tributaria de la cuenta.
ctaCbu | String | Clave Bancaria Uniforme de la cuenta.
activo | String | Si está activa la cuenta.
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