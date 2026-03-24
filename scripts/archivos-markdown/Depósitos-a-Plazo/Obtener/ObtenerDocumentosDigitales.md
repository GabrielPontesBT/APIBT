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
::: note Método para obtener un listado de los documentos digitales asociados a una operación de depósitos a plazo.

**Nombre publicación:** BTDepositosAPlazo.ObtenerDocumentosDigitales

**Programa:** RBTPG482

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

Se puede parametrizar la opción general por módulo 1416. En caso de estar en 'S', se inhabilitará el control de existencia de la operación en la tabla FSD011.
 
:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.
codigoSistema | Short | [Hidden: Valor fijo '3' para este método].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtDocumentosDigitales | [sBTDocumentoDigital](#sbtdocumentodigital) | Listado de documentos digitales.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la operación.
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
      <bts:BTDepositosAPlazo.ObtenerDocumentosDigitales>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GP</bts:Device>
            <bts:Token>65386256C895CD01D7DC796E</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>1018</bts:operacionUId>
      </bts:BTDepositosAPlazo.ObtenerDocumentosDigitales>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerDocumentosDigitales' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"operacionUId": "1018",
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
      <BTDepositosAPlazo.ObtenerDocumentosDigitalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>65386256C895CD01D7DC796E</Token>
         </Btinreq>
         <sdtDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>PRUEBA</Titulo>
               <FechaActualizacion>2015-01-01</FechaActualizacion>
               <FechaVencimiento/>
               <TipoDocumentoDigital>Plan de Pagos</TipoDocumentoDigital>
               <DocumentoId>265</DocumentoId>
            </sBTDocumentoDigital>
         </sdtDocumentoDigital>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>12028</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ObtenerDocumentosDigitales</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-23</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:50:30</Hora>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerDocumentosDigitalesResponse>
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
    "sdtDocumentoDigital": {
        "sBTDocumentoDigital": {
            "Titulo": "PRUEBA GABO",
            "FechaActualizacion": "2015-01-01",
            "FechaVencimiento": "",
            "TipoDocumentoDigital": "Plan de Pagos",
            "DocumentoId": "265"
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 823,
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ObtenerDocumentosDigitales",
        "Requerimiento": "1",
        "Fecha": "2018-11-12",
        "Hora": "17:47:27",
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
documentoId | Long | Identificador del documento digital. 
fechaActualizacion | Date | Fecha de actualización del documento digital. 
fechaVencimiento | Date | Fecha de vencimiento del documento digital. 
tipoDocumentoDigital | String | Tipo del documento digital. 
titulo | String | Titulo del documento digital. 
:::
<!-- CIERRA SDT -->