---
title: Obtener Operaciones a Cancelar
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
::: note Método para obtener las operaciones seleccionadas a cancelar para una solicitud de créditos.

**Nombre publicación:** BTMicrofinanzas.ObtenerOperacionesACancelar

**Programa:** RBTPG364

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
solicitudUId | Long | Identificador de instancia Workflow.
clienteUId | Long | Identificador único del cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtOperaciones | [sBTOperacionWF](#sbtoperacionwf) | Listado de operaciones.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de solicitud.
30002 | No se recibió el identificador de cliente.
30003 | No se recuperó la cuenta para el identificador de cliente: [Número de identificador].
40001 | La solicitud ingresada no existe.
40002 | El cliente ingresado no corresponde con la solicitud.
40003 | No se encontraron operaciones para cancelar.
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
      <bts:BTMicrofinanzas.ObtenerOperacionesACancelar>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>dbfad05a474A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:solicitudUId>11887</bts:solicitudUId>
         <bts:clienteUId>862</bts:clienteUId>
      </bts:BTMicrofinanzas.ObtenerOperacionesACancelar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas?ObtenerOperacionesACancelar' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "GP",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"solicitudUId": "11887",
	"clienteUId": "862"
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
      <BTMicrofinanzas.ObtenerOperacionesACancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>dbfad05a474A8B5C60A82434</Token>
         </Btinreq>
         <sdtOperaciones>
            <sBTOperacionWF>
               <fechaUltimoPago>2016-03-01</fechaUltimoPago>
               <diasMora>1674</diasMora>
               <saldo>-30340.61</saldo>
               <fechaVencimiento>2016-01-02</fechaVencimiento>
               <montoCancelacion>511820.42</montoCancelacion>
               <operacionUId>1724</operacionUId>
               <fechaValor>2020-03-13</fechaValor>
            </sBTOperacionWF>
            <sBTOperacionWF>
               <fechaUltimoPago>2017-11-14</fechaUltimoPago>
               <diasMora>0</diasMora>
               <saldo>-15000.00</saldo>
               <fechaVencimiento>2016-01-02</fechaVencimiento>
               <montoCancelacion>0.00</montoCancelacion>
               <operacionUId>1727</operacionUId>
               <fechaValor>2020-03-13</fechaValor>
            </sBTOperacionWF>
         </sdtOperaciones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>111406</Numero>
            <Estado>OK</Estado>
            <Servicio>BTMicrofinanzas.ObtenerOperacionesACancelar</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2021-10-18</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>09:09:54</Hora>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerOperacionesACancelarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": "GP",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cc9b534A8B5C60A82434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtOperaciones": {
      "sBTOperacionWF": [
      {
         "fechaUltimoPago": "2016-03-01",
         "diasMora": "1674",
         "saldo": "-30340.61",
         "fechaVencimiento": "2016-01-02",
         "montoCancelacion": "511820.42",
         "operacionUId": "1724",
         "fechaValor": "2020-03-13"
      },
      {
         "fechaUltimoPago": "2017-11-14",
         "diasMora": "0",
         "saldo": "-15000.00",
         "fechaVencimiento": "2016-01-02",
         "montoCancelacion": "0.00",
         "operacionUId": "1727",
         "fechaValor": "2020-03-13"
      }
      ]
   },
   "Btoutreq": {
      "Numero": "111406",
      "Estado": "OK",
      "Servicio": "BTMicrofinanzas.ObtenerOperacionesACancelar",
      "Requerimiento": "1",
      "Fecha": "2021-10-18",
      "Canal": "BTDIGITAL",
      "Hora": "09:09:54"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTOperacionWF  

### sBTOperacionWF

::: center 
Los campos del tipo de dato estructurado sBTOperacionWF son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
diasMora | Int | Días de mora de la operación. 
fechaUltimoPago | Date | Fecha de último pago de la operación. 
fechaValor | Date | Fecha valor de la operación. 
fechaVencimiento | Date | Fecha de vencimiento de la operación. 
montoCancelacion | Double | Monto de cancelación de la operación. 
operacionUId | Long | Identificador único de operación. 
saldo | Double | Saldo de la operación. 
:::
<!-- CIERRA SDT -->