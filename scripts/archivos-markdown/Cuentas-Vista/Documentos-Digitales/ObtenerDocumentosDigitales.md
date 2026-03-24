---
title: Obtener Documentos Digitales
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
::: note Método para obtener un listado de los documentos digitales asociados a una cuenta vista.

**Nombre publicación:** BTCuentasVista.ObtenerDocumentosDigitales

**Programa:** RBTPG199

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

Si no se ingresa valor en el parámetro 'sucursalId', su valor se asume de la cuenta cliente. Si la opción general 3282 está activada se tomará la sucursal del usuario que ejecuta el servicio.

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtDocumentosDigitales | [sBTDocumentoDigital](#sbtdocumentodigital) | Listado de documentos digitales.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la operación.
30004 | La operación ingresada no corresponde a una cuenta vista.
30021 | No se recuperó la operación para el identificador recibido.
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
      <bts:BTCuentasVista.ObtenerDocumentosDigitales>
         <bts:Btinreq>
		  <bts:Device>10.12.10.159</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>1355f5da724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>21</bts:operacionUId>
      </bts:BTCuentasVista.ObtenerDocumentosDigitales>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerDocumentosDigitales=' \
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
	"operacionUId": "21",
}'
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <SOAP-ENV:Body>
      <BTCuentasVista.ObtenerDocumentosDigitalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1355f5da724A8B5C60A82434</Token>
         </Btinreq>
         <sdtDocumentosDigitales>
            <sBTDocumentoDigitalns:sBTDocumentoDigital xmlns:sBTDocumentoDigitalns="http://uy.com.dlya.bantotal/BTSOA/" xmlns="ServiciosBT">
               <DocumentoId>87</DocumentoId>
               <TipoDocumentoDigital>Contrato</TipoDocumentoDigital>
               <Titulo>Prueba Asociar Contrato</Titulo>
               <FechaActualizacion>2020-10-10</FechaActualizacion>
               <FechaVencimiento>2010-10-10</FechaVencimiento>
            </sBTDocumentoDigitalns:sBTDocumentoDigital>
         </sdtDocumentosDigitales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>3090</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.ObtenerDocumentosDigitales</Servicio>
            <Fecha>2018-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>17:59:40</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ObtenerDocumentosDigitalesResponse>
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
    "sdtDocumentosDigitales": {
        "sBTDocumentoDigital": [
            {
                "Titulo": "Prueba Asociar Contrato",
                "FechaActualizacion": "2020-10-10",
                "FechaVencimiento": "2010-10-10",
                "TipoDocumentoDigital": "Contrato",
                "DocumentoId": "87"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "3091",
        "Estado": "OK",
        "Servicio": "BTCuentasVista.ObtenerDocumentosDigitales",
        "Fecha": "2018-11-20",
        "Requerimiento": "1",
        "Hora": "18:01:45",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDocumentoDigital  

### sBTDocumentoDigital

::: center 
Los campos del tipo de dato estructurado sBTDocumentoDigital son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
documentoId | Long | documentoId del documento digital.
fechaActualizacion | Date | Fecha de actualización del documento digital. 
fechaVencimiento | Date | Fecha de vencimiento del documento digital. 
tipoDocumentoDigital | String | Tipo del documento digital. 
titulo | String | Titulo del documento digital. 
:::
<!-- CIERRA SDT -->