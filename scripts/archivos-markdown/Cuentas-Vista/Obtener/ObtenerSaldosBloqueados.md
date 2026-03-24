---
title: Obtener Saldos Bloqueados
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
::: note Método para obtener los saldos bloqueados de una cuenta vista.

**Nombre publicación:** BTCuentasVista.ObtenerSaldosBloqueados

**Programa:** RBTPG551

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
:--------- | :----------- | :-----------
sdtSaldosBloqueados | [sBTBloqueoSaldo](#sbtbloqueosaldo) | Listado de saldos bloqueados.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de operación.
30002 | No se encontró el identificador de la operación para la cuenta vista bloqueada.
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
      <bts:BTCuentasVista.ObtenerSaldosBloqueados>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9436BF7CB5B5BB404CC6E5A7</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>213</bts:operacionUId>
      </bts:BTCuentasVista.ObtenerSaldosBloqueados>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerSaldosBloqueados' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "operacionUId": 213,
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
      <BTCuentasVista.ObtenerSaldosBloqueadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9436BF7CB5B5BB404CC6E5A7</Token>
         </Btinreq>
         <sdtSaldosBloqueados>
            <sBTBloqueoSaldo>
               <fechaVencimiento>2025-10-15T00:00:00</fechaVencimiento>
               <motivo/>
               <importe>50000.00</importe>
               <bloqueoId>7</bloqueoId>
            </sBTBloqueoSaldo>
            <sBTBloqueoSaldo>
               <fechaVencimiento>2025-10-15T00:00:00</fechaVencimiento>
               <motivo/>
               <importe>50000.00</importe>
               <bloqueoId>8</bloqueoId>
            </sBTBloqueoSaldo>
         </sdtSaldosBloqueados>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20364</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.ObtenerSaldosBloqueados</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2024-05-07</Fecha>
            <Hora>17:56:50</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ObtenerSaldosBloqueadosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "sdtSaldosBloqueados": {
    "sBTBloqueoSaldo": [
      {
        "fechaVencimiento": "2025-10-15T00:00:00",
        "motivo": "",
        "importe": 50000,
        "bloqueoId": 7
      },
      {
        "fechaVencimiento": "2025-10-15T00:00:00",
        "motivo": "",
        "importe": 50000,
        "bloqueoId": 8
      }
    ]
  },
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTCuentasVista.ObtenerSaldosBloqueados",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTBloqueoSaldo  

### sBTBloqueoSaldo

::: center 
Los campos del tipo de dato estructurado sBTBloqueoSaldo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
bloqueoId | Long | Identificador del bloqueo.
fechaVencimiento | Date | Fecha de vencimiento.
importe | Double | Importe.
motivo | String | Motivo.
:::
<!-- CIERRA SDT -->