---
title: Comprador Adhesión
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
::: note Método para la adhesión de un comprador.

**Nombre publicación:** BTCOELSAGestionDebin.CompradorAdhesion

**Programa:** RBTPAR54

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
comprador | [sBTCompradorAdhesion](#sbtcompradoradhesion) | Datos de comprador para adhesión.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
compradorRespuesta | [sBTRespDebin](#sbtrespdebin) | Datos de respuesta Debin.

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
    <soapenv:Header />
    <soapenv:Body>
        <bts:BTCOELSAGestionDebin.CompradorAdhesion>
            <bts:Btinreq>
                <bts:Device>10.12.10.40</bts:Device>
                <bts:Token>3db8e5f45c464D4650046918</bts:Token>
                <bts:Canal>BTDIGITAL</bts:Canal>
                <bts:Usuario>IVRISSO</bts:Usuario>
                <bts:Requerimiento>1</bts:Requerimiento>
            </bts:Btinreq>
            <bts:Comprador>
                <bts:emailContacto>kdominguez@mail.com</bts:emailContacto>
                <bts:ctaCbu>0940099312000605600019</bts:ctaCbu>
                <bts:endpoint>0202</bts:endpoint>
                <bts:cuit>23112903879</bts:cuit>
            </bts:Comprador>
        </bts:BTCOELSAGestionDebin.CompradorAdhesion>
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
      <BTCOELSAGestionDebin.CompradorAdhesionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1095768874CD285A89A23FBE</Token>
            <Device>ABC</Device>
         </Btinreq>
         <compradorRespuesta>
            <descripcion>COMPRADOR ADHERIDO</descripcion>
            <codigo>00</codigo>
         </compradorRespuesta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCOELSAGestionDebin.CompradorAdhesion</Servicio>
            <Fecha>2024-08-21</Fecha>
            <Hora>12:28:00</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>1038862</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCOELSAGestionDebin.CompradorAdhesionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCompradorAdhesion  

### sBTCompradorAdhesion

::: center 
Los campos del tipo de dato estructurado sBTCompradorAdhesion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cuit | String | Clave única de identificación tributaria. 
endpoint | String | Código de endpoint de COELSA. 
ctaCbu | String | Clave Bancaria Uniforme. 
emailContacto | String | Email de contacto. 
:::
 
::: details sBTRespDebin  

### sBTRespDebin

::: center 
Los campos del tipo de dato estructurado sBTRespDebin son los siguientes: 

Campo | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción. 
codigo | String | Código. 
:::
 
<!-- CIERRA SDT -->