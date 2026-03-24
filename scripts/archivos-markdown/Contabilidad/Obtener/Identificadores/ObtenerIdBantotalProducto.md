---
title: Obtener Identificador Bantotal de Producto
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
::: note Método para obtener la clave de identificación Bantotal de un producto.

**Nombre publicación:** BTContabilidad.ObtenerIdBantotalProducto

**Programa:** RBTPG450

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
productoUId | Long | Identificador único de producto.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
empresaId | Short | Identificador de empresa.
moduloId | Int | Módulo Bantotal.
tipoOperacionBT | Short | Tipo de operación Bantotal.
monedaId | Short | Identificador de moneda.
papelId | Int | Identificador de papel.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió productoUId.
40001 | No existe una empresa con los datos ingresados.
40002 | No se pudo resolver la empresa del usuario.
40003 | No existe registro para el identificador único.
40004 | No existe registro para el producto indicado.
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
      <bts:BTContabilidad.ObtenerIdBantotalProducto>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>papa</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>A917FB55555C334FB65C4E0C</bts:Token>
         </bts:Btinreq>
         <bts:productoUId>187</bts:productoUId>
      </bts:BTContabilidad.ObtenerIdBantotalProducto>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?ObtenerIdBantotalProducto' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
          "Requerimiento": 0,
          "Canal": "BTDIGITAL",
          "Device": "papa",
          "Usuario": "INSTALADOR",
          "Token": "A917FB55555C334FB65C4E0C"
        },
        "productoUId": 187
      }'
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
      <BTContabilidad.ObtenerIdBantotalProductoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Requerimiento>0</Requerimiento>
            <Device>papa</Device>
            <Usuario>INSTALADOR</Usuario>
            <Token>A917FB55555C334FB65C4E0C</Token>
            <Canal>BTDIGITAL</Canal>
         </Btinreq>
         <empresa>1</empresa>
         <modulo>101</modulo>
         <tipoOperacion>3</tipoOperacion>
         <moneda>0</moneda>
         <papel>50</papel>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Requerimiento>0</Requerimiento>
            <Estado>OK</Estado>
            <Fecha>2022-10-27</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTContabilidad.ObtenerIdBantotalProducto</Servicio>
            <Hora>14:46:26</Hora>
            <Numero>225416</Numero>
         </Btoutreq>
      </BTContabilidad.ObtenerIdBantotalProductoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
        "Btinreq": {
          "Requerimiento": 0,
          "Device": "papa",
          "Usuario": "INSTALADOR",
          "Token": "A917FB55555C334FB65C4E0C",
          "Canal": "BTDIGITAL"
        },
        "empresa": 1,
        "modulo": 101,
        "tipoOperacion": 3,
        "moneda": 0,
        "papel": 50,
        "Erroresnegocio": "",
        "Btoutreq": {
          "Requerimiento": 0,
          "Estado": "OK",
          "Fecha": "2022-10-27",
          "Canal": "BTDIGITAL",
          "Servicio": "BTContabilidad.ObtenerIdBantotalProducto",
          "Hora": "14:46:26",
          "Numero": 225416
        }
      }'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->