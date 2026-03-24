---
title: Pagar Deuda Desde Cuenta
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
::: note Método para pagar una factura debitando desde una cuenta vista.

**Nombre publicación:** BTCASHManagement.PagarDeudaDesdeCuenta

**Programa:** RBTPGC65

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
ordenId | Long | Identificador de la orden.
nroLineaOrden | Int | Número de línea de orden CASH.
monedaId | Short | Identificador de la moneda.
importePago | Double | Importe.
operacionUId | Long | Identificador único de la operación de cuenta vista.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
transaccionId | Long | Identificador de transacción.

@tab Errores

Código | Descripción
:--------- | :-----------
1030610 | Debe indicar el numero de la orden.
1030611 | Debe indicar el numero de linea en la orden.
1030612 | El valor recibido no corresponde a un numero de orden.
1030614 | Canal no habilitado para el servicio.
1030615 | Canal no habilitado para el contrato.
1030616 | Numero de linea de la orden no existe.
1030617 | Estado de la linea de la orden no permite pago.
1030618 | El importe debe ser mayor a cero.
1030619 | código de Moneda desconocido
1030620 | El importe del pago es inferior a la deuda.
1030621 | El importe del pago supera a la deuda.
1030751 | Estado de la orden no permite procesar.
1030761 | No se obtuvo Canal CASH para el canal que invoca.
1030770 | No se recupero información para la cuenta recibida.
1030801 | Saldo insuficiente para realizar el pago.
1039999 | No se obtuvo Regla para determinar la Transacción a ejecutar.

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
      <bts:BTCASHManagement.PagarDeudaDesdeCuenta>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:ordenId>293</bts:ordenId>
         <bts:nroLineaOrden>1</bts:nroLineaOrden>
         <bts:monedaId>0</bts:monedaId>
         <bts:importePago>100</bts:importePago>
         <bts:operacionUId>835</bts:operacionUId>
      </bts:BTCASHManagement.PagarDeudaDesdeCuenta>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?PagarDeudaDesdeCuenta=' \
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
    "ordenId": 293,
    "nroLineaOrden": 1,
    "monedaId": 0,
    "importePago": 100,
    "operacionUId": 835
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
      <BTCASHManagement.PagarDeudaDesdeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <transaccionId>98</transaccionId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-19</Fecha>
            <Hora>11:36:57</Hora>
            <Numero>26133</Numero>
            <Servicio>BTCASHManagement.PagarDeudaDesdeCuenta</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.PagarDeudaDesdeCuentaResponse>
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
    "transaccionId": 98,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.PagarDeudaDesdeCuenta",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

