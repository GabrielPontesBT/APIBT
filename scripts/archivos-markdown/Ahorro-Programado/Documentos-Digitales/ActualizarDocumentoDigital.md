---
title: Actualizar Documento Digital
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
::: note Método para actualizar un documento digital para un ahorro programado.

**Nombre publicación:** BTAhorroProgramado.ActualizarDocumentoDigital

**Programa:** RBTPG565

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
documentoId | Long | Identificador del documento digital.
nombre | String | Nombre del documento.
archivoCodificado | String | Archivo a asociar codificado en Base 64.
fechaEmision | Date | Fecha de emisión del documento (en caso que corresponda).
fechaVencimiento | Date | Fecha de vencimiento del documento (en caso que corresponda).

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de instancia de documento digital.
30002 | No se recibió nombre.
30003 | No se recibió el identificador de la operación.
30004 | La operación ingresada no corresponde a un ahorro programado.
30021 | No se recuperó el identificador para la operación recibida.
40101 | Ocurrió un error al recibir el archivo, puede que el mismo este corrupto.
40993 | Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío.
40994 | Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora.
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
      <bts:BTAhorroProgramado.ActualizarDocumentoDigital>
         <bts:Btinreq>
		  <bts:Device>10.12.10.159</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>4724b65a9d4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>21</bts:operacionUId>
         <bts:documentoId>86</bts:documentoId>
         <bts:nombre>Prueba actualizar</bts:nombre>
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado>
         <bts:fechaVencimiento>2020-10-10</bts:fechaVencimiento>
         <bts:fechaEmision>2010-10-10</bts:fechaEmision>
      </bts:BTAhorroProgramado.ActualizarDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ActualizarDocumentoDigital=' \
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
	"operacionUId":"21",
    "documentoId":"86",
    "nombre":"Prueba actualizar",
    "archivoCodificado":"RG9jdW1lbnRvIGRlIGVqZW1wbG8=",
    "fechaEmision":"2010-10-10",
    "fechaVencimiento": "2020-10-10"
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
      <BTAhorroProgramado.ActualizarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b98a5858014A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>3105</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ActualizarDocumentoDigital</Servicio>
            <Fecha>2018-11-21</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:00:50</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ActualizarDocumentoDigitalResponse>
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
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "3103",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ActualizarDocumentoDigital",
        "Fecha": "2018-11-21",
        "Requerimiento": "1",
        "Hora": "12:00:07",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->