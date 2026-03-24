---
title: Obtener Detalle de Pago de una Orden
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
::: note Método para obtener la información de las lineas del detalle del pago para una orden.

**Nombre publicación:** BTCASHManagement.ObtenerDetallePagoOrden

**Programa:** RBTPGC23

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
cuentaDebito | Long | Operación de débito.
cantidadLineas | Int | Cantidad de líneas del archivo.
moneda | Short | Moneda.
importe | Double | Importe total.
referencia | String | Referencia del pago o cobro.
fechaPago | Date | Fecha de pago o cobro.
estado | String | Estado del archivo.
erroresPago | String | Lista de mensajes del cabezal de pago.
detallePagos | [sBTDetallePago](#sbtdetallepago) | Lista de información del archivo con su estado y mensaje.

@tab Errores

Código | Descripción
:--------- | :-----------
1030753 | No se encontró la orden para el identificador recibido.

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
      <bts:BTCASHManagement.ObtenerDetallePagoOrden>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:ordenId>345</bts:ordenId>
      </bts:BTCASHManagement.ObtenerDetallePagoOrden>
   </soapenv:Body>
</soapenv:Envelope>

```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?ObtenerDetallePagoOrden=' \
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
      <BTCASHManagement.ObtenerDetallePagoOrdenResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <cuentaDebito>825</cuentaDebito>
         <cantidadLineas>2</cantidadLineas>
         <moneda>0</moneda>
         <importe>400.0</importe>
         <referencia/>
         <fechaPago>2024-11-01</fechaPago>
         <estado>S</estado>
         <erroresPago></erroresPago>
         <detallePagos>
            <sBTDetallePago>
               <moneda>0</moneda>
               <beneficiarioCuenta>Pago Caja</beneficiarioCuenta>
               <estado>C</estado>
               <beneficiarioBanco/>
               <mensajesError/>
               <beneficiarioId/>
               <importe>100.0</importe>
               <fechaPago>2024-11-01</fechaPago>
               <nombre/>
            </sBTDetallePago>
            <sBTDetallePago>
               <moneda>0</moneda>
               <beneficiarioCuenta>Pago Caja</beneficiarioCuenta>
               <estado>C</estado>
               <beneficiarioBanco/>
               <mensajesError/>
               <beneficiarioId/>
               <importe>300.0</importe>
               <fechaPago>2024-11-01</fechaPago>
               <nombre/>
            </sBTDetallePago>
         </detallePagos>
         <Erroresnegocio/>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-18</Fecha>
            <Hora>12:46:29</Hora>
            <Numero>26013</Numero>
            <Servicio>BTCASHManagement.ObtenerDetallePagoOrden</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.ObtenerDetallePagoOrdenResponse>
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
      "cuentaDebito": 825,
      "cantidadLineas": 2,
      "moneda": 0,
      "importe": 400,
      "referencia": "",
      "fechaPago": "2024-11-01",
      "estado": "S",
      "erroresPago": "",
      "detallePagos": {
         "sBTDetallePago": [
         {
            "moneda": 0,
            "beneficiarioCuenta": "Pago Caja",
            "estado": "C",
            "beneficiarioBanco": "",
            "mensajesError": "",
            "beneficiarioId": "",
            "importe": 100,
            "fechaPago": "2024-11-01",
            "nombre": ""
         },
         {
            "moneda": 0,
            "beneficiarioCuenta": "Pago Caja",
            "estado": "C",
            "beneficiarioBanco": "",
            "mensajesError": "",
            "beneficiarioId": "",
            "importe": 300,
            "fechaPago": "2024-11-01",
            "nombre": ""
         }
      ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.ObtenerDetallePagoOrden",
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
::: details sBTDetallePago  

### sBTDetallePago

::: center 
Los campos del tipo de dato estructurado sBTDetallePago son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
nombre | String | Nombre del Beneficiario de Pago.
beneficiarioId | String | Identificador de Beneficiario.
beneficiarioCuenta | String | Cuenta del Beneficiario.
beneficiarioBanco | String | Banco del Beneficiario.
fechaPago | Date | Fecha de Pago o Cobro.
moneda | Short | Moneda.
importe | Double | Importe.
estado | String | Estado de la línea.
mensajesError | String | Lista de mensajes de la línea.

:::
<!-- CIERRA SDT -->

