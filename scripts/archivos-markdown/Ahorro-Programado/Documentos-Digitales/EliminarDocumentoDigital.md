---
title: Eliminar Documento Digital
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
::: note Método para eliminar un documento digital de un ahorro programado.

**Nombre publicación:** BTAhorroProgramado.EliminarDocumentoDigital

**Programa:** RBTPG566

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.
documentoId | Long | Identificador del documento digital.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de instancia de documento digital.
30002 | No se recibió el identificador de la operación.
30003 | La operación ingresada no corresponde a un ahorro programado.
30021 | No se recuperó la operación para el identificador recibido.
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
      <bts:BTAhorroProgramado.EliminarDocumentoDigital>
         <bts:Btinreq>
		  <bts:Device>10.12.10.159</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b98a5858014A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>21</bts:operacionUId>
         <bts:documentoId>87</bts:documentoId>
      </bts:BTAhorroProgramado.EliminarDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?EliminarDocumentoDigital=' \
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
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTAhorroProgramado.EliminarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
		    <bts:Device>10.12.10.159</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b98a5858014A8B5C60A82434</bts:Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>3110</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.EliminarDocumentoDigital</Servicio>
            <Fecha>2018-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:12:07</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.EliminarDocumentoDigitalResponse>
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
        "Numero": "3109",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.EliminarDocumentoDigital",
        "Fecha": "2018-11-21",
        "Requerimiento": "1",
        "Hora": "12:11:36",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->