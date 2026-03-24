---
title: Obtener Documento Digital
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
::: note Método para obtener los datos de un documento digital de un ahorro programado.

**Nombre publicación:** BTAhorroProgramado.ObtenerDocumentoDigital

**Programa:** RBTPG567

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
documentoId | Long | Identificador de documento.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtDocumentoDigital | [sBTVersionDocumentoDigital](#sbtversiondocumentodigital) | Versión de documento digital.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la operación.
30002 | No se recibió el identificador de documento.
30003 | La operación ingresada no corresponde a un ahorro programado.
30021 | No se recuperó la operación para el identificador recibido.
30031 | El documento digital no existe.
30032 | Ocurrió un error al obtener la última versión del documento.
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
      <bts:BTAhorroProgramado.ObtenerDocumentoDigital>
         <bts:Btinreq>
		  <bts:Device>10.12.10.159</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b98a5858014A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>21</bts:operacionUId>
         <bts:documentoId>87</bts:documentoId>
      </bts:BTAhorroProgramado.ObtenerDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerDocumentoDigital=' \
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
	"documentoId": "87",
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
      <BTAhorroProgramado.ObtenerDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b98a5858014A8B5C60A82434</Token>
         </Btinreq>
         <sBTVersionDocumentoDigital>
            <DocumentoId>87</DocumentoId>
            <TipoDocumentoDigital>Contrato</TipoDocumentoDigital>
            <Nombre>Prueba Asociar Contrato</Nombre>
            <Version>1</Version>
            <FechaEmision>2020-10-10</FechaEmision>
            <FechaVencimiento>2010-10-10</FechaVencimiento>
            <Archivo>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</Archivo>
         </sBTVersionDocumentoDigital>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>3107</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ObtenerDocumentoDigital</Servicio>
            <Fecha>2018-11-21</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:08:19</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ObtenerDocumentoDigitalResponse>
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
   "sBTVersionDocumentoDigital": {
         "FechaEmision": "2020-10-10",
         "Archivo": "RG9jdW1lbnRvIGRlIGVqZW1wbG8=",
         "FechaVencimiento": "2010-10-10",
         "TipoDocumentoDigital": "Contrato",
         "Version": "1",
         "Nombre": "Prueba Asociar Contrato",
         "DocumentoId": "87"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "3108",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ObtenerDocumentoDigital",
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
::: details sBTVersionDocumentoDigital  

### sBTVersionDocumentoDigital

::: center 
Los campos del tipo de dato estructurado sBTVersionDocumentoDigital son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
archivo | String | Documento digital codificado en base 64. 
documentoId | Long | Titulo del documento digital. 
fechaEmision | Date | Fecha de emisión del documento digital. 
fechaVencimiento | Date | Fecha de vencimiento del documento digital. 
nombre | String | Nombre del documento digital. 
tipoDocumentoDigital | String | Tipo del documento digital. 
version | Int | Número de versión del documento digital. 
:::
<!-- CIERRA SDT -->