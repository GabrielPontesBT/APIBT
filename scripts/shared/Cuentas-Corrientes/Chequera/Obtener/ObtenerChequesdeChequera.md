---
title: Obtener Cheques de Chequera
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
::: note Método para obtener un listado de los cheques de una chequera.

**Nombre publicación:** BTCuentasCorrientes.ObtenerChequesDeChequera

**Programa:** RBTPG142

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación de subcuenta.
chequeraId | Long | Identificador de solicitud de chequera.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtCheques | [sBTCheque](#sbtcheque) | Listado de cheques.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió identificador de operación.
30002 | No se recibió identificador de chequera.
30011 | No se recuperó la operación para el identificador recibido.
40003 | La chequera no pertenece a la operación.
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
      <bts:BTCuentasCorrientes.ObtenerChequesDeChequera>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1820366692F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10176</bts:operacionUId>
         <bts:chequeraId>21</bts:chequeraId>
      </bts:BTCuentasCorrientes.ObtenerChequesDeChequera>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerChequesDeChequera' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": 1,
        "Usuario": "BANTOTAL",
        "Token": "1820366692F955E77534D3E0",
        "Device": "AC"
    },
    "operacionUId": 10176,
    "chequeraId": 21
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
      <BTCuentasCorrientes.ObtenerChequesDeChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1820366692F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtCheques>
            <sBTCheque>
               <numero>1326</numero>
               <estado>1</estado>
               <descripcion>Pago</descripcion>
            </sBTCheque>
            <sBTCheque>
               <numero>1327</numero>
               <estado>1</estado>
               <descripcion>Pago</descripcion>
            </sBTCheque>
            ...
         </sdtCheques>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasCorrientes.ObtenerChequesDeChequera</Servicio>
            <Fecha>2020-11-13</Fecha>
            <Hora>15:25:51</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7904</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerChequesDeChequeraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": 1,
        "Usuario": "BANTOTAL",
        "Token": "1820366692F955E77534D3E0",
        "Device": "AC"
    },
    "sdtCheques": {
        "sBTCheque": [
            {
                "numero": 1326,
                "estado": 1,
                "descripcion": "Pago"
            },
            {
                "numero": 1327,
                "estado": 1,
                "descripcion": "Pago"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTCuentasCorrientes.ObtenerChequesDeChequera",
        "Fecha": "2020-11-13",
        "Hora": "15:25:51",
        "Requerimiento": 1,
        "Numero": 7904,
        "Estado": "OK"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCheque  

### sBTCheque

::: center 
Los campos del tipo de dato estructurado sBTCheque son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción. 
estado | Short | Estado del cheque. 
numero | Int | Número de cheque. 
:::
<!-- CIERRA SDT -->