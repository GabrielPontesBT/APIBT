---
title: Eliminar DEBIN
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
::: note Método para eliminar un Debin.

**Nombre publicación:** BTCOELSAGestionDebin.DebinEliminar

**Programa:** RBTPAR61

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
EliminarDebinReq | [sBTEliminarDebinReq](#sbteliminardebinreq) | Datos para eliminar un Debin.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
eliminarDebinRespuesta | [sBTRespDebin](#sbtrespdebin) | Datos de respuesta de Debin.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió ID de Debin.
30002 | No se recibió CUIT de Vendedor/Creador a eliminar.
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
      <bts:BTCOELSAGestionDebin.EliminarDebin>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>IVRISSO</Usuario>
            <Device>10.12.10.40</Device>
            <Requerimiento>1</Requerimiento>
            <Token>02cb4baaac464D4650046918</Token>
         </Btinreq>
         <bts:EliminarDebinReq>
            <bts:cuitVendedor>27337167255</bts:cuitVendedor>
            <bts:idDebin>GWY7ZEPN6ZW0WR4NQ0M51O</bts:idDebin>
         </bts:EliminarDebinReq>
      </bts:BTCOELSAGestionDebin.EliminarDebin>
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
      <BTCOELSAGestionDebin.DebinEliminarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1095768874CD285A89A23FBE</Token>
            <Device>ABC</Device>
         </Btinreq>
         <eliminarDebinRespuesta>
            <descripcion>DEBIN ELIMINADO</descripcion>
            <codigo>00</codigo>
         </eliminarDebinRespuesta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCOELSAGestionDebin.DebinEliminar</Servicio>
            <Fecha>2024-08-21</Fecha>
            <Hora>17:19:35</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>1038934</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCOELSAGestionDebin.DebinEliminarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>

```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->


## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTEliminarDebinReq  

### sBTEliminarDebinReq

::: center 
Los campos del tipo de dato estructurado sBTEliminarDebinReq son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cuitVendedor | Short | Clave única de identificación tributaria del vendedor.
idDebin | Character | Id de Debin.
:::

::: details sBTRespDebin  

### sBTRespDebin

::: center 
Los campos del tipo de dato estructurado sBTRespDebin son los siguientes: 

Campo | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción de respuesta. 
codigo | String | Código de respuesta. 
:::
<!-- CIERRA SDT -->