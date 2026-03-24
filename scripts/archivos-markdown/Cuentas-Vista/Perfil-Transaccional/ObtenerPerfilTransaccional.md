---
title: Obtener Perfil Transaccional
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
::: note Método para obtener el perfil transaccional de una cuenta vista.

**Nombre publicación:** BTCuentasVista.ObtenerPerfilTransaccional

**Programa:** RBTPG625

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPerfilTransaccional | [sBTDatosPerfilTransaccional](#sbtdatosperfiltransaccional) | Datos del perfil transaccional.
totalCantidadDepositos | Int | Total de movimientos de depósitos.
totalCantidadRetiros | Int | Total de movimientos de retiros.
totalMontoDepositos | Double | Total de importes de depósitos.
totalMontoRetiros | Double | Total de importes de retiros.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de operación.
30021 | No se recuperó la operación para el Identificador: [Número de identificador].
40001 | Producto a consultar no existe.
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
      <bts:BTCuentasVista.ObtenerPerfilTransaccional>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GP</Device>
            <Requerimiento>1</Requerimiento>
            <Token>1EA88623CBDC6645284505C9</Token>
         </Btinreq>
         <bts:operaionUId>2</bts:operaionUId>
      </bts:BTCuentasVista.ObtenerPerfilTransaccional>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerPerfilTransaccional=' \
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
    "operacionUId": 1
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
      <BTCuentasVista.ObtenerPerfilTransaccionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GP</Device>
            <Requerimiento>1</Requerimiento>
            <Token>1EA88623CBDC6645284505C9</Token>
         </Btinreq>
         <sdtPerfilTransaccional>
            <origenDeFondosId>1</origenDeFondosId>
            <origenDeFondos>Asalariado</origenDeFondos>
            <movimientosMensuales>
               <conCheque>
                  <montoRetiros>400.0</montoRetiros>
                  <montoDepositos>300.0</montoDepositos>
                  <cantidadDepositos>3</cantidadDepositos>
                  <cantidadRetiros>4</cantidadRetiros>
               </conCheque>
               <transferenciaLocal>
                  <montoRetiros>500.0</montoRetiros>
                  <montoDepositos>500.0</montoDepositos>
                  <cantidadDepositos>5</cantidadDepositos>
                  <cantidadRetiros>6</cantidadRetiros>
               </transferenciaLocal>
               <transferenciaInternacional>
                  <montoRetiros>800.0</montoRetiros>
                  <paisOrigen>PANAMA</paisOrigen>
                  <paisDestinoId>248</paisDestinoId>
                  <montoDepositos>700.0</montoDepositos>
                  <cantidadDepositos>7</cantidadDepositos>
                  <paisDestino>ALAND</paisDestino>
                  <cantidadRetiros>8</cantidadRetiros>
                  <paisOrigenId>591</paisOrigenId>
               </transferenciaInternacional>
               <enEfectivo>
                  <montoRetiros>200.0</montoRetiros>
                  <montoDepositos>100.0</montoDepositos>
                  <cantidadDepositos>1</cantidadDepositos>
                  <cantidadRetiros>2</cantidadRetiros>
               </enEfectivo>
            </movimientosMensuales>
         </sdtPerfilTransaccional>
         <totalCantidadDepositos>16</totalCantidadDepositos>
         <totalCantidadRetiros>20</totalCantidadRetiros>
         <totalMontoDepositos>1600.0</totalMontoDepositos>
         <totalMontoRetiros>1900.0</totalMontoRetiros>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-09-18</Fecha>
            <Hora>09:51:04</Hora>
            <Numero>6201</Numero>
            <Servicio>BTCuentasVista.ObtenerPerfilTransaccional</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ObtenerPerfilTransaccionalResponse>
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
    "sdtPerfilTransaccional": {
        "origenDeFondosId": 1,
        "origenDeFondos": "Asalariado",
        "movimientosMensuales": {
        "conCheque": {
            "montoRetiros": 400,
            "montoDepositos": 300,
            "cantidadDepositos": 3,
            "cantidadRetiros": 4
        },
        "transferenciaLocal": {
            "montoRetiros": 500,
            "montoDepositos": 500,
            "cantidadDepositos": 5,
            "cantidadRetiros": 6
        },
        "transferenciaInternacional": {
            "montoRetiros": 800,
            "paisOrigen": "PANAMA",
            "paisDestinoId": 248,
            "montoDepositos": 700,
            "cantidadDepositos": 7,
            "paisDestino": "ALAND",
            "cantidadRetiros": 8,
            "paisOrigenId": 591
        },
        "enEfectivo": {
            "montoRetiros": 200,
            "montoDepositos": 100,
            "cantidadDepositos": 1,
            "cantidadRetiros": 2
        }
        }
    },
    "totalCantidadDepositos": 16,
    "totalCantidadRetiros": 20,
    "totalMontoDepositos": 1600,
    "totalMontoRetiros": 1900,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCuentasVista.ObtenerPerfilTransaccional",
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
::: details sBTDatosPerfilTransaccional  

### sBTDatosPerfilTransaccional

::: center 
Los campos del tipo de dato estructurado sBTDatosPerfilTransaccional son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
origenDeFondosId | Short | Identificador del origen de los fondos. 
origenDeFondos | String | Origen de los fondos. 
movimientosMensuales | [sBTPerfilTrnMovimientosMensuales](#sbtperfiltrnmovimientosmensuales) | Datos de los movimientos mensuales.


### sBTPerfilTrnMovimientosMensuales
 
Los campos del tipo de dato estructurado sBTPerfilTrnMovimientosMensuales son los siguientes:

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
enEfectivo | [sBTPerfilTrnDatosMovimientos](#sbtperfiltrndatosmovimientos) | Datos de los movimientos mensuales en efectivo.
conCheque | [sBTPerfilTrnDatosMovimientos](#sbtperfiltrndatosmovimientos) | Datos de los movimientos mensuales con cheques.
transferenciaLocal | [sBTPerfilTrnDatosMovimientos](#sbtperfiltrndatosmovimientos) | Datos de los movimientos mensuales de transferencias locales.
transferenciaInternacional | [sBTPerfilTrnDatosMovInternacionales](#sbtperfiltrndatosmovinternacionales) | Datos de los movimientos mensuales de transferencias internacionales.

### sBTPerfilTrnDatosMovimientos
 
Los campos del tipo de dato estructurado sBTPerfilTrnDatosMovimientos son los siguientes:

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
montoRetiros | Double | Total de importes de retiros.
montoDepositos | Double | Total de importes de depósitos.
cantidadDepositos | int | Cantidad de movimientos de depósitos.
cantidadRetiros | int | Cantidad de movimientos de retiros.


### sBTPerfilTrnDatosMovInternacionales
 
Los campos del tipo de dato estructurado sBTPerfilTrnDatosMovInternacionales son los siguientes:

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
montoRetiros | Double | Total de importes de retiros.
montoDepositos | Double | Total de importes de depósitos.
cantidadDepositos | int | Cantidad de movimientos de depósitos.
cantidadRetiros | int | Cantidad de movimientos de retiros.
paisOrigenId | int | Identificador del país.
paisOrigen | String | Nombre del país.
paisDestinoId | int | Identificador del país.
paisDestino | String | Nombre del país.

:::
<!-- CIERRA SDT -->