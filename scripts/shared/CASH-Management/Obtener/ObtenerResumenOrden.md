---
title: Obtener Resumen de una Orden
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
::: note Método para obtener el resumen de la información de la orden recibida.

**Nombre publicación:** BTCASHManagement.ObtenerResumenOrden

**Programa:** RBTPGC24

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
ordenId | Long | Identificador de la orden.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtResumenCabezal | [sBTResumenCabezal](#sbtresumencabezal) | Listado de cabezales de los resúmenes.

@tab Errores

Código | Descripción
:--------- | :---------
1030705 | Cuenta cliente sin contrato vinculado.
1030708 | Estado de archivo desconocido.
1030709 | Se requiere identificación de cuenta cliente.
1030712 | Se requiere cuenta para recuperar la información.
1030714 | El contrato consultado no corresponde al servicio recibido.

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
      <bts:BTCASHManagement.ObtenerResumenOrden>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>F971DE0C3D4C96A5ABC22DAD</bts:Token>
         </bts:Btinreq>
         <bts:ordenId>345</bts:ordenId>
      </bts:BTCASHManagement.ObtenerResumenOrden>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?ObtenerResumenOrden' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Usuario": "INSTALADOR",
        "Device": "1",
        "Requerimiento": 1,
        "Token": "F971DE0C3D4C96A5ABC22DAD"
    },
    "ordenId": 345
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
      <BTCASHManagement.ObtenerResumenOrdenResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <sdtResumenCabezal>
            <moneda>0</moneda>
            <cuentaDebito>825</cuentaDebito>
            <estado>S</estado>
            <nombreArchivo>Serv100Pcaja.txt</nombreArchivo>
            <referencia/>
            <cantidadLineas>2</cantidadLineas>
            <ordenId>345</ordenId>
            <servicio>100</servicio>
            <contratoId>60</contratoId>
            <importe>400.0</importe>
            <mensajesError></mensajesError>
            <archivoId>272</archivoId>
            <fechaPago>2024-11-01</fechaPago>
         </sdtResumenCabezal>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-18</Fecha>
            <Hora>12:47:36</Hora>
            <Numero>26014</Numero>
            <Servicio>BTCASHManagement.ObtenerResumenOrden</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.ObtenerResumenOrdenResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>

```

@tab JSON
```json
'{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Usuario": "INSTALADOR",
        "Device": "1",
        "Requerimiento": 1,
        "Token": "F971DE0C3D4C96A5ABC22DAD"
    },
    "sdtResumenCabezal": {
        "moneda": 0,
        "cuentaDebito": 825,
        "estado": "S",
        "nombreArchivo": "Serv100Pcaja.txt",
        "referencia": "",
        "cantidadLineas": 2,
        "ordenId": 345,
        "servicio": 100,
        "contratoId": 60,
        "importe": 400.0,
        "mensajesError": "",
        "archivoId": 272,
        "fechaPago": "2024-11-01"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Estado": "OK",
        "Fecha": "2024-11-18",
        "Hora": "12:47:36",
        "Numero": 26014,
        "Servicio": "BTCASHManagement.ObtenerResumenOrden",
        "Requerimiento": 1,
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
:--------- | :--------- | :--------- 
archivoId | Long | Identificador de archivo.
contratoId | Int | Identificador del contrato CASH.
servicio | Short | Servicio CASH.
ordenId | Long | Identificador de orden CASH.
cuentaDebito | Long | Identificador único de la cuenta débito.
fechaPago | Date | Fecha de pago o cobro.
estado | String | Estado del archivo.
cantidadLineas | Int | Cantidad de líneas del archivo.
moneda | Short | Moneda.
importe | Double | Importe total.
referencia | String | Referencia del pago o cobro.
nombreArchivo | String | Nombre del archivo.
mensajesError | String | Lista de mensajes de la línea.

:::
<!-- CIERRA SDT -->

