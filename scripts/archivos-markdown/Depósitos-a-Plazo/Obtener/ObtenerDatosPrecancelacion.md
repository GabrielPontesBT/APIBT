---
title: Obtener Datos de Precancelación
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
::: note Método para obtener la simulación de la precancelación de un depósito a plazo para una fecha dada.

**Nombre publicación:** BTDepositosAPlazo.ObtenerDatosPrecancelacion

**Programa:** RBTPG636

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.
fecha | Date | Fecha de la precancelación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtPrecancelar | [sBTDatoPrecancelar](#sbtdatoprecancelar) | Datos de la precancelación.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de operación.
30002 | No se recibió la fecha.
40003 | La operación no corresponde a un depósito a plazo.

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
      <bts:BTDepositosAPlazo.ObtenerDatosPrecancelacion>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>853547DAE3BFB2C1EC0A3148</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>100</bts:operacionUId>
         <bts:fecha>2024-11-11</bts:fecha>
      </bts:BTDepositosAPlazo.ObtenerDatosPrecancelacion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerDatosPrecancelacion=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: dc197965-60bc-3f23-3367-5902a0392e1d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"operacionUId": 100,
   "fecha": "2024-11-11"
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
      <BTDepositosAPlazo.ObtenerDatosPrecancelacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>MC</Device>
            <Requerimiento>1</Requerimiento>
            <Token>853547DAE3BFB2C1EC0A3148</Token>
         </Btinreq>
         <sdtPrecancelar>
            <tasaDescripcion>Efectiva Anual</tasaDescripcion>
            <fechaVencimiento>2020-06-19</fechaVencimiento>
            <datosAdicionales>
               <detalle/>
            </datosAdicionales>
            <plazo>90</plazo>
            <valorInicial>12000.0</valorInicial>
            <tasaOriginal>3.0</tasaOriginal>
            <tasaPrecancelacion>3.0</tasaPrecancelacion>
         </sdtPrecancelar>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-26</Fecha>
            <Hora>16:19:41</Hora>
            <Numero>30628</Numero>
            <Servicio>BTDepositosAPlazo.ObtenerDatosPrecancelacion</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerDatosPrecancelacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtPrecancelar": {
      "tasaDescripcion": "Efectiva Anual",
      "fechaVencimiento": "2020-06-19",
      "datosAdicionales": {
         "detalle": ""
      },
      "plazo": 90,
      "valorInicial": 12000,
      "tasaOriginal": 3,
      "tasaPrecancelacion": 3
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "3108",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ObtenerDocumentoDigital",
        "Fecha": "2018-11-21",
        "Requerimiento": "1",
        "Hora": "12:09:09",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDatoPrecancelar  

### sBTDatoPrecancelar

::: center 
Los campos del tipo de dato estructurado sBTDatoPrecancelar son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
tasaDescripcion | String | Descripción de la tasa. 
fechaVencimiento | Date | Fecha de vencimiento. 
datosAdicionales | [sBTDatoAdicional](#sbtdatoAdicional) | Listado de datos adicionales. 
plazo | Int | Plazo. 
valorInicial | Double | Valor inicial. 
tasaOriginal | Double | Tasa original. 
tasaPrecancelacion | Double | Tasa de precancelación. 

### sBTDatoAdicional
 
Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes:

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
detalle | String | Detalle.

:::
<!-- CIERRA SDT -->