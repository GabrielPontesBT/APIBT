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
::: note Método para obtener un listado de los documentos digitales asociados a un préstamo.

**Nombre publicación:** BTPrestamos.ObtenerDocumentosDigitales

**Programa:** RBTPG180

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

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtDocumentosDigitales | [sBTDocumentoDigital](#sbtdocumentodigital) | Listado de documentos digitales.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la operación.
30021 | No se recupero la operación para el identificador recibido.
30031 | La operación seleccionada no corresponde a un producto de préstamos.
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
      <bts:BTPrestamos.ObtenerDocumentosDigitales>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0868626a064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>10.12.10.159</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
      </bts:BTPrestamos.ObtenerDocumentosDigitales>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDocumentosDigitales' \
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
	"operacionUId": "121",
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
      <BTPrestamos.ObtenerDocumentosDigitalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0868626a064A8B5C60A82434</Token>
         </Btinreq>
         <sdtDocumentosDigitales>
            <sBTDocumentoDigital>
               <Titulo>Plan de Pagos</Titulo>
               <FechaActualizacion>2016-08-09</FechaActualizacion>
               <FechaVencimiento>0000-00-00</FechaVencimiento>
               <TipoDocumentoDigital>Plan de Pagos</TipoDocumentoDigital>
               <documentoId>35</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>Contrato</Titulo>
               <FechaActualizacion>2017-12-08</FechaActualizacion>
               <FechaVencimiento>2019-08-22</FechaVencimiento>
               <TipoDocumentoDigital>Contrato</TipoDocumentoDigital>
               <documentoId>36</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>Constitución</Titulo>
               <FechaActualizacion>2017-03-28</FechaActualizacion>
               <FechaVencimiento>0000-00-00</FechaVencimiento>
               <TipoDocumentoDigital>Constitución de Prenda</TipoDocumentoDigital>
               <documentoId>74</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>constitución 2</Titulo>
               <FechaActualizacion>2017-03-28</FechaActualizacion>
               <FechaVencimiento>2018-03-28</FechaVencimiento>
               <TipoDocumentoDigital>Constitución de Prenda</TipoDocumentoDigital>
               <documentoId>75</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>contarto</Titulo>
               <FechaActualizacion>0000-00-00</FechaActualizacion>
               <FechaVencimiento>0000-00-00</FechaVencimiento>
               <TipoDocumentoDigital>Contrato de Cesión</TipoDocumentoDigital>
               <documentoId>78</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>contarto 2</Titulo>
               <FechaActualizacion>0000-00-00</FechaActualizacion>
               <FechaVencimiento>0000-00-00</FechaVencimiento>
               <TipoDocumentoDigital>Contrato de Cesión</TipoDocumentoDigital>
               <documentoId>79</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>Prueba Asociar</Titulo>
               <FechaActualizacion>2017-10-11</FechaActualizacion>
               <FechaVencimiento>2018-12-08</FechaVencimiento>
               <TipoDocumentoDigital>Contrato de Cesión</TipoDocumentoDigital>
               <documentoId>103</documentoId>
            </sBTDocumentoDigital>
         </sdtDocumentosDigitales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>832</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDocumentosDigitales</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-13</Fecha>
            <Hora>11:57:08</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDocumentosDigitalesResponse>
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
                "Titulo": "Plan de Pagos",
                "FechaActualizacion": "2016-08-09",
                "FechaVencimiento": "0000-00-00",
                "TipoDocumentoDigital": "Plan de Pagos",
                "documentoId": 35
            },
            {
                "Titulo": "Contrato",
                "FechaActualizacion": "2017-12-08",
                "FechaVencimiento": "2019-08-22",
                "TipoDocumentoDigital": "Contrato",
                "documentoId": 36
            },
            {
                "Titulo": "Constitución",
                "FechaActualizacion": "2017-03-28",
                "FechaVencimiento": "0000-00-00",
                "TipoDocumentoDigital": "Constitución de Prenda",
                "documentoId": 74
            },
            {
                "Titulo": "constitución 2",
                "FechaActualizacion": "2017-03-28",
                "FechaVencimiento": "2018-03-28",
                "TipoDocumentoDigital": "Constitución de Prenda",
                "documentoId": 75
            },
            {
                "Titulo": "contarto",
                "FechaActualizacion": "0000-00-00",
                "FechaVencimiento": "0000-00-00",
                "TipoDocumentoDigital": "Contrato de Cesión",
                "documentoId": 78
            },
            {
                "Titulo": "contarto 2",
                "FechaActualizacion": "0000-00-00",
                "FechaVencimiento": "0000-00-00",
                "TipoDocumentoDigital": "Contrato de Cesión",
                "documentoId": 79
            },
            {
                "Titulo": "Prueba Asociar",
                "FechaActualizacion": "2017-10-11",
                "FechaVencimiento": "2018-12-08",
                "TipoDocumentoDigital": "Contrato de Cesión",
                "documentoId": 103
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 823,
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDocumentosDigitales",
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
titulo | String | Título del documento digital. 
:::
<!-- CIERRA SDT -->