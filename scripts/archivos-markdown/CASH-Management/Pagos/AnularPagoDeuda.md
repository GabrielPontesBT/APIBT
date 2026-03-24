---
title: Anular Pago Deuda
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
::: note Método para anular un pago realizado de una factura.

**Nombre publicación:** BTCASHManagement.AnularPagoDeuda

**Programa:** RBTPGC63

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
1030616 | Numero de linea de la orden no existe.
1030622 | Estado de la linea no permite anulación.
1030623 | Solo se permiten anulaciones en el mismo dia.
1030624 | Error al procesar la anulación.

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
      <bts:BTCASHManagement.AnularPagoDeuda>
         <bts:Btinreq>
            <Canal>AGENTECORRESPONSAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>4A287DE2D400320135CCA4E5</Token>
         </bts:Btinreq>
         <bts:ordenId>293</bts:ordenId>
         <bts:nroLineaOrden>1</bts:nroLineaOrden>
      </bts:BTCASHManagement.AnularPagoDeuda>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?AnularPagoDeuda=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "1",
          "Canal": "AGENTECORRESPONSAL",
          "Usuario": "INSTALADOR",
          "Token": "4A287DE2D400320135CCA4E5"
    },
    "ordenId": 293,
    "nroLineaOrden": 1
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
      <BTCASHManagement.AnularPagoDeudaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>AGENTECORRESPONSAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>4A287DE2D400320135CCA4E5</Token>
         </Btinreq>
         <transaccionId>97</transaccionId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-19</Fecha>
            <Hora>11:16:08</Hora>
            <Numero>26124</Numero>
            <Servicio>BTCASHManagement.AnularPagoDeuda</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>AGENTECORRESPONSAL</Canal>
         </Btoutreq>
      </BTCASHManagement.AnularPagoDeudaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
      "Device": "1",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "AGENTECORRESPONSAL",
      "Token": "4A287DE2D400320135CCA4E5"
    },
    "transaccionId": 97,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.AnularPagoDeuda",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

