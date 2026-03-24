---
title: Visualizar Lista de Órdenes con su Resumen
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
::: note Método para obtener la lista de órdenes con su resumen de información de un archivo CASH.

**Nombre publicación:** BTCASHManagement.VisualizarListaResumenCabezalOrden

**Programa:** RBTPGC25

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
archivoId | Long | Identificador de archivo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
listaResumenOrdenes | [sBTResumenCabezal](#sbtresumencabezal) | Listados de resumen de ordenes.

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
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.VisualizarListaResumenCabezalOrden>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:archivoId>279</bts:archivoId>
      </bts:BTCASHManagement.VisualizarListaResumenCabezalOrden>
   </soapenv:Body>
</soapenv:Envelope>

```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?VisualizarListaResumenCabezalOrden=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "archivoId": 279
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
      <BTCASHManagement.VisualizarListaResumenCabezalOrdenResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <listaResumenOrdenes>
            <sBTResumenCabezal>
               <moneda>0</moneda>
               <cuentaDebito>825</cuentaDebito>
               <estado>S</estado>
               <nombreArchivo>archivoWS.txt</nombreArchivo>
               <referencia/>
               <cantidadLineas>2</cantidadLineas>
               <ordenId>352</ordenId>
               <servicio>100</servicio>
               <contratoId>60</contratoId>
               <importe>400.0</importe>
               <mensajesError></mensajesError>
               <archivoId>279</archivoId>
               <fechaPago/>
            </sBTResumenCabezal>
         </listaResumenOrdenes>
         <Erroresnegocio/>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-19</Fecha>
            <Hora>08:57:07</Hora>
            <Numero>26090</Numero>
            <Servicio>BTCASHManagement.VisualizarListaResumenCabezalOrden</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.VisualizarListaResumenCabezalOrdenResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "listaResumenOrdenes": {
      "sBTResumenCabezal": {
         "moneda": 0,
         "cuentaDebito": 825,
         "estado": "S",
         "nombreArchivo": "archivoWS.txt",
         "referencia": "",
         "cantidadLineas": 2,
         "ordenId": 352,
         "servicio": 100,
         "contratoId": 60,
         "importe": 400,
         "mensajesError": "",
         "archivoId": 279,
         "fechaPago": ""
      }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.VisualizarListaResumenCabezalOrden",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTResumenCabezal  

### sBTResumenCabezal

::: center 
Los campos del tipo de dato estructurado sBTResumenCabezal son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
archivoId | Long | Identificador de archivo.
cantidadLineas | Int | Cantidad de líneas del archivo.
contratoId | Int | Identificador del contrato CASH.
cuentaDebito | Long | Identificador único de la cuenta débito.
estado | String | Estado del archivo.
fechaPago | Date | Fecha de pago o cobro.
importe | Double | Importe total.
mensajesError | String | Lista de mensajes de la línea.
moneda | Short | Moneda.
nombreArchivo | String | Nombre del archivo.
ordenId | Long | Identificador de orden CASH.
referencia | String | Referencia del pago o cobro.
servicio | Short | Servicio CASH.

:::
<!-- CIERRA SDT -->
