---
title: Registrar Pago de Deuda
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
::: note Método para registrar el pago de una factura realizado en canal externo.

**Nombre publicación:** BTCASHManagement.RegistrarPagoDeuda

**Programa:** RBTPGC62

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
moneda | Short | Identificador de moneda.
importePago | Double | Importe pagado.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
transaccionId | Long | Identificador de transacción.

@tab Errores

Código | Descripción
:--------- | :---------
1030610 | Debe indicar el numero de la orden.
1030611 | Debe indicar el numero de linea en la orden.
1030612 | El valor recibido no corresponde a un numero de orden.
1030614 | Canal no habilitado para el servicio.
1030615 | Canal no habilitado para el contrato.
1030616 | Numero de linea de la orden no existe.
1030617 | Estado de la linea de la orden no permite pago.
1030618 | El importe debe ser mayor a cero.
1030619 | Código de Moneda desconocido.
1030620 | El importe del pago es inferior a la deuda.
1030621 | El importe del pago supera a la deuda.
1030751 | Estado de la orden no permite procesar.
1030761 | No se obtuvo Canal CASH para el canal que invoca.
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
      <bts:BTCASHManagement.RegistrarPagoDeuda>
         <bts:Btinreq>
            <bts:Canal>AGENTECORRESPONSAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>4A287DE2D400320135CCA4E5</bts:Token>
         </bts:Btinreq>
         <bts:ordenId>293</bts:ordenId>
         <bts:nroLineaOrden>1</bts:nroLineaOrden>
         <bts:moneda>0</bts:moneda>
         <bts:importePago>100</bts:importePago>
      </bts:BTCASHManagement.RegistrarPagoDeuda>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?RegistrarPagoDeuda' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Canal": "AGENTECORRESPONSAL",
        "Usuario": "INSTALADOR",
        "Device": "1",
        "Requerimiento": 1,
        "Token": "4A287DE2D400320135CCA4E5"
    },
    "ordenId": 293,
    "nroLineaOrden": 1,
    "moneda": 0,
    "importePago": 100
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
      <BTCASHManagement.RegistrarPagoDeudaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>AGENTECORRESPONSAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>4A287DE2D400320135CCA4E5</Token>
         </Btinreq>
         <transaccionId>95</transaccionId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-19</Fecha>
            <Hora>11:12:48</Hora>
            <Numero>26123</Numero>
            <Servicio>BTCASHManagement.RegistrarPagoDeuda</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>AGENTECORRESPONSAL</Canal>
         </Btoutreq>
      </BTCASHManagement.RegistrarPagoDeudaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Canal": "AGENTECORRESPONSAL",
        "Usuario": "INSTALADOR",
        "Device": "1",
        "Requerimiento": 1,
        "Token": "4A287DE2D400320135CCA4E5"
    },
    "transaccionId": 95,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Estado": "OK",
        "Fecha": "2024-11-19",
        "Hora": "11:12:48",
        "Numero": 26123,
        "Servicio": "BTCASHManagement.RegistrarPagoDeuda",
        "Requerimiento": 1,
        "Canal": "AGENTECORRESPONSAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

