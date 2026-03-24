---
title: Registrar Pago en Linea
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
::: note Método para registrar el pago de una deuda en línea, realizado mediante canal externo.

**Nombre publicación:** BTCASHManagement.RegistrarPagoEnLinea

**Programa:** RBTPGC64

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
contrato | Short | Identificador del contrato.
servicio | Short | Servicio CASH.
deuda | String | Identificador de la deuda.
moneda | Short | Identificador de la moneda.
importe | Double | Importe.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
transaccionId | Long | Identificador de transacción.
ordenId | Long | Identificador de la orden.
nroLineaOrden | Int | Número de línea de orden CASH.

@tab Errores

Código | Descripción
:--------- | :-----------
1030614 | Canal no habilitado para el servicio.
1030615 | Canal no habilitado para el contrato.
1030618 | El importe debe ser mayor a cero.
1030619 | Código de Moneda desconocido.
1030701 | El Servicio no existe.
1030704 | Id de contrato cliente desconocido.
1030706 | El contrato no esta activo.
1030761 | No se obtuvo Canal CASH para el canal que invoca.
1030762 | El servicio no es de recaudos.
1030763 | Debe indicar el identificador de la deuda.
1030764 | El servicio no es en linea, no se crea el cobro.
1030765 | La moneda del pago difiere con la del convenio.
1030766 | No se pudo dar de alta la orden.
1039999 | No se determino módulo/transacción en la regla: [Número de regla].

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
      <bts:BTCASHManagement.RegistrarPagoEnLinea>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>54878527AF5867CA94C680B0</bts:Token>
         </bts:Btinreq>
         <bts:contrato>8</bts:contrato>
         <bts:servicio>240</bts:servicio>
         <bts:deuda>4</bts:deuda>
         <bts:moneda>0</bts:moneda>
         <bts:importe>543</bts:importe>
      </bts:BTCASHManagement.RegistrarPagoEnLinea>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?RegistrarPagoEnLinea=' \
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
    "contrato": 8,
    "servicio": 240,
    "deuda": 4,
    "moneda": 0,
    "importe": 543
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
      <BTCASHManagement.RegistrarPagoEnLineaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>BANTOTAL</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>E362E52FED059AA3BF86A6E3</Token>
         </Btinreq>
         <transaccionId>124</transaccionId>
         <ordenId>532</ordenId>
         <nroLineaOrden>4</nroLineaOrden>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-08</Fecha>
            <Hora>12:27:14</Hora>
            <Numero>742</Numero>
            <Servicio>BTCASHManagement.RegistrarPagoEnLinea</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.RegistrarPagoEnLineaResponse>
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
    "transaccionId": 124,
    "ordenId": 532,
    "nroLineaOrden": 4,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.RegistrarPagoEnLinea",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

