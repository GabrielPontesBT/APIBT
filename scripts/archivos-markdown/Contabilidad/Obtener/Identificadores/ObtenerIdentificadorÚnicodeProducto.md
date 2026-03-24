---
title: Obtener Identificador Único de Producto
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
::: note Método para obtener el identificador único de un producto.

**Nombre publicación:** BTContabilidad.ObtenerIdentificadorUnicoProducto

**Programa:** RBTPG837

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
empresaId | Short | Identificador de empresa.
moduloId | Int | Módulo Bantotal.
tipoOperacionBT | Short | Tipo de operación Bantotal.
monedaId | Short | Identificador de moneda.
papelId | Int | Identificador de papel.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
productoUId | Long | Identificador único de producto.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió módulo.
30002 | No se recibió tipo de operación.
30003 | Moneda no existe.
30004 | Papel no existe.
30005 | No se recibió empresa.
30006 | Producto no existe.
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
      <bts:BTContabilidad.ObtenerIdentificadorUnicoProducto>
         <bts:Btinreq>
            <bts:Device>bms</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:empresaId>1</bts:empresaId>
         <bts:moduloId>20</bts:moduloId>
         <bts:tipoOperacionBT>36</bts:tipoOperacionBT>  
         <bts:monedaId>80</bts:monedaId>
         <bts:papelId>0</bts:papelId>
      </bts:BTContabilidad.ObtenerIdentificadorUnicoProducto>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerIdentificadorUnicoProducto' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
    "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "faa36bd33f4A8B5C60A82434"
    },
    "empresa": "1",
    "moduloId": "20",
    "tipoOperacionBT": "36",
    "monedaId": "80",
    "papelId": "0"
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
      <BTContabilidad.ObtenerIdentificadorUnicoProductoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>bms</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f99a68ce154A8B5C60A82434</Token>
         </Btinreq>
         <productoUId>1</productoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1103</Numero>
            <Servicio>BTContabilidad.ObtenerIdentificadorUnicoProducto</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-10-30</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>20:28:19</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTContabilidad.ObtenerIdentificadorUnicoProductoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
    "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "faa36bd33f4A8B5C60A82434" 
    }, 
    "productoUId": 1, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 1109, 
        "Servicio": "BTContabilidad.ObtenerIdentificadorUnicoProducto", 
        "Estado": "OK", 
        "Fecha": "2020-11-02", 
        "Requerimiento": "0", 
        "Hora": "18:27:46", 
        "Canal": "BTDIGITAL" 
    } 
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->