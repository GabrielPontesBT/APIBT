---
title: Vendedor Adhesion
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
::: note Método para adhesión de un vendedor Debin.

**Nombre publicación:** BTCOELSAGestionDebin.VendedorAdhesion

**Programa:** RBTPAR53

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
vendedor | [sBTVendedorAdhesion](#sbtvendedoradhesion) | Datos de adhesión de un vendedor.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
vendedorRespuesta | [sBTRespDebin](#sbtrespdebin) | Datos de respuesta Debin.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió CUIT.
30002 | No se recibió Endpoint.
30003 | No se recibió CBU de la cuenta.
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
      <bts:BTCOELSAGestionDebin.VendedorAdhesion>
            <Btinreq>
               <Canal>BTDIGITAL</Canal>
               <Requerimiento>1</Requerimiento>
               <Usuario>INSTALADOR</Usuario>
               <Token>1095768874CD285A89A23FBE</Token>
               <Device>ABC</Device>
            </Btinreq>
         <bts:Vendedor>
            <bts:sucursal>003</bts:sucursal>
            <bts:emailContacto>veronicamariateresa@gmail.com</bts:emailContacto>
            <bts:rubro>VARIOS</bts:rubro>
            <bts:nombre_fantasia>veronicamariateresa</bts:nombre_fantasia>
            <bts:ctaCbu>4320001020003185180008</bts:ctaCbu>
            <bts:endpoint>0202</bts:endpoint>
            <bts:cuit>30716226308</bts:cuit>
         </bts:Vendedor>
      </bts:BTCOELSAGestionDebin.VendedorAdhesion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
No aplica
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
      <BTCOELSAGestionDebin.VendedorAdhesionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1095768874CD285A89A23FBE</Token>
            <Device>ABC</Device>
         </Btinreq>
         <vendedorRespuesta>
            <descripcion>VENDEDOR ADHERIDO</descripcion>
            <codigo>00</codigo>
         </vendedorRespuesta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCOELSAGestionDebin.VendedorAdhesion</Servicio>
            <Fecha>2024-08-21</Fecha>
            <Hora>12:50:08</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>1038864</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCOELSAGestionDebin.VendedorAdhesionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
No aplica
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->