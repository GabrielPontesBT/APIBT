---
title: Pagar Seguro
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

<!-- ABRE LOS DATOS DEL MÉTODO -->
::: note Método para pagar un seguro.

**Nombre publicación:** BTSegurosVoluntarios.PagarSeguro

**Programa:** RBTPG545

**Global/País:** Global
:::
<!-- CIERRA LOS DATOS DEL MÉTODO -->

<!-- ABRE LA TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
seguroUId | Long | Identificador único del seguro.
montoPago | Double | Monto a pagar.
operacionUIdCobro | Long | Identificador único de la operación de cobro.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
movimientoUId | long | Identificador único del movimiento.

@tab Errores

Código | Descripción
:--------- | :-----------
30002 | No se recibió el identificador de operación del seguro.
30003 | Se debe ingresar un monto.
30004 | No se recuperó la clave de operación para el identificador del seguro: [Número de Identificador].
30005 | No se recuperó la clave de operación de cobro para el identificador: [Número de Identificador].
50002 | La operación no existe.
50003 | La operación de cobro no existe.
50005 | Atención: No se pudo obtener el numerador para la transacción.
50006 | La operación esta cancelada.
50008 | La operación de cobro esta cancelada.
50010 | El monto ingresado supera al monto total de la deuda.
:::
<!-- CIERRA LA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSegurosVoluntarios.PagarSeguro>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>89B4F6D7BEFB0C7F653DB37A</bts:Token>
         </bts:Btinreq>
         <bts:seguroUId>286</bts:seguroUId>
         <bts:montoPago>543</bts:montoPago>
         <bts:operacionUIdCobro>22</bts:operacionUIdCobro>
      </bts:BTSegurosVoluntarios.PagarSeguro>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSegurosVoluntarios?ObtenerSeguros' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "AC",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "seguroUId": 286,
    "montoPago": 543,
    "operacionUIdCobro": 22
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
      <BTSegurosVoluntarios.PagarSeguroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>89B4F6D7BEFB0C7F653DB37A</Token>
         </Btinreq>
         <movimientoUId>125</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20473</Numero>
            <Estado>OK</Estado>
            <Servicio>BTSegurosVoluntarios.PagarSeguro</Servicio>
            <Fecha>2024-05-14</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>15:58:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTSegurosVoluntarios.PagarSeguroResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "BANTOTAL",
        "Token": "324915377F955E77534D3E02",
        "Device": "AC"
    },
    "movimientoUId": 125,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTSegurosVoluntarios.PagarSeguro",
        "Fecha": "2019-11-19",
        "Hora": "13:05:22",
        "Requerimiento": "",
        "Numero": 6924,
        "Estado": "OK"
    }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->