---
title: Agregar Perfil Transaccional
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
::: note Método para agregar un perfil transaccional a una cuenta vista.

**Nombre publicación:** BTCuentasVista.AgregarPerfilTransaccional

**Programa:** RBTPG624

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.
sdtPerfilTransaccional | [sBTDatosPerfilTransaccional](#sbtdatosperfiltransaccional) | Datos del perfil transaccional.
modo | String | [Hidden: Valor fijo 'INS' para este método].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
totalCantidadDepositos | Int | Total de movimientos de depósitos.
totalCantidadRetiros | Int | Total de movimientos de retiros.
totalMontoDepositos | Double | Total de importes de depósitos.
totalMontoRetiros | Double | Total de importes de retiros.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de operación.
30002 | No se recibió la cantidad de depósitos en efectivo.
30003 | No se recibió el monto de depósitos en efectivo.
30004 | No se recibió la cantidad de retiros en efectivo.
30005 | No se recibió el monto de retiros en efectivo.
30006 | No se recibió el origen de los Fondos.
30007 | La operación ingresada no corresponde a una cuenta vista.
30021 | No se recuperó la operación para el Identificador: [Número de identificador].
40001 | Producto a consultar no existe.
40002 | El identificador de país [Número de identificador] no existe.
40003 | El identificador de orígenes de fondo [Número de identificador] no existe.
40004 | El perfil transaccional ya existe.
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
      <bts:BTCuentasVista.AgregarPerfilTransaccional>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GP</Device>
            <Requerimiento>1</Requerimiento>
            <Token>1EA88623CBDC6645284505C9</Token>
         </Btinreq>
         <bts:operacionUId>1</bts:operacionUId>
         <bts:sdtPerfilTransaccional>
            <bts:origenDeFondosId>1</bts:origenDeFondosId>
            <bts:origenDeFondos></bts:origenDeFondos>
            <bts:movimientosMensuales>
               <bts:conCheque>
                  <bts:montoRetiros>400</bts:montoRetiros>
                  <bts:montoDepositos>300</bts:montoDepositos>
                  <bts:cantidadDepositos>3</bts:cantidadDepositos>
                  <bts:cantidadRetiros>4</bts:cantidadRetiros>
               </bts:conCheque>
               <bts:transferenciaLocal>
                  <bts:montoRetiros>500</bts:montoRetiros>
                  <bts:montoDepositos>500</bts:montoDepositos>
                  <bts:cantidadDepositos>5</bts:cantidadDepositos>
                  <bts:cantidadRetiros>6</bts:cantidadRetiros>
               </bts:transferenciaLocal>
               <bts:transferenciaInternacional>
                  <bts:montoRetiros>800</bts:montoRetiros>
                  <bts:paisOrigen></bts:paisOrigen>
                  <bts:paisDestinoId>248</bts:paisDestinoId>
                  <bts:montoDepositos>700</bts:montoDepositos>
                  <bts:cantidadDepositos>7</bts:cantidadDepositos>
                  <bts:paisDestino></bts:paisDestino>
                  <bts:cantidadRetiros>8</bts:cantidadRetiros>
                  <bts:paisOrigenId>591</bts:paisOrigenId>
               </bts:transferenciaInternacional>
               <bts:enEfectivo>
                  <bts:montoRetiros>200.00</bts:montoRetiros>
                  <bts:montoDepositos>100.00</bts:montoDepositos>
                  <bts:cantidadDepositos>1</bts:cantidadDepositos>
                  <bts:cantidadRetiros>2</bts:cantidadRetiros>
               </bts:enEfectivo>
            </bts:movimientosMensuales>
         </bts:sdtPerfilTransaccional>
      </bts:BTCuentasVista.AgregarPerfilTransaccional>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?AgregarPerfilTransaccional=' \
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
    "operacionUId": 1,
    "sdtPerfilTransaccional": {
        "origenDeFondosId": 1,
        "origenDeFondos": "",
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
                "paisOrigen": "",
                "paisDestinoId": 248,
                "montoDepositos": 700,
                "cantidadDepositos": 7,
                "paisDestino": "",
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
    }
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
      <BTCuentasVista.AgregarPerfilTransaccionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GP</Device>
            <Requerimiento>1</Requerimiento>
            <Token>1EA88623CBDC6645284505C9</Token>
         </Btinreq>
         <totalCantidadDepositos>16</totalCantidadDepositos>
         <totalCantidadRetiros>20</totalCantidadRetiros>
         <totalMontoDepositos>1600.0</totalMontoDepositos>
         <totalMontoRetiros>1900.0</totalMontoRetiros>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-09-18</Fecha>
            <Hora>09:53:04</Hora>
            <Numero>6203</Numero>
            <Servicio>BTCuentasVista.AgregarPerfilTransaccional</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.AgregarPerfilTransaccionalResponse>
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
      "Servicio": "BTCuentasVista.AgregarPerfilTransaccional",
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