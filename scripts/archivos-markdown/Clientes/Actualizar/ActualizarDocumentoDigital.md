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
::: note Método para actualizar el documento digital de una cuenta cliente.

**Nombre publicación:** BTClientes.ActualizarDocumentoDigital

**Programa:** RBTPG167

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cuenta.
documentoId | Long | Identificador del documento.
nombre | String | Nombre del documento.
archivoCodificado | String | Archivo a asociar codificado en Base 64.
fechaEmision | Date | Fecha de emisión del documento (en caso que corresponda).
fechaVencimiento | Date | Fecha de emisión del documento (en caso que corresponda).

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de instancia de documento digital.
30002 | No se recibió nombre.
30004 | No se recibió el identificador de cliente.
30013 | No existe registro para el identificador indicado.
30041 | Debe ingresar la fecha de emisión del documento.
30042 | Debe ingresar la fecha de vencimiento del documento.
30130 | Ocurrió un error al recibir el archivo, puede que el mismo este corrupto.
31013 | Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío.
31024 | Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora.
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
      <bts:BTClientes.ActualizarDocumentoDigital>
        <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>5744be79064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:clienteUId>81</bts:clienteUId>
         <bts:documentoId>107</bts:documentoId>
         <bts:nombre>ejemplo</bts:nombre>
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado>
         <bts:fechaEmision>2010-10-10</bts:fechaEmision>
         <bts:fechaVencimiento>2020-10-10</bts:fechaVencimiento>
      </bts:BTClientes.ActualizarDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ActualizarDocumentoDigital' \
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
	 "clienteUId":"81",
    "documentoId":"107",
    "nombre":"ejemplo",
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
      <BTClientes.ActualizarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>5744be79064A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>762</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ActualizarDocumentoDigital</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-12</Fecha>
            <Hora>15:49:21</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ActualizarDocumentoDigitalResponse>
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
        "Numero": 767,
        "Estado": "OK",
        "Servicio": "BTClientes.ActualizarDocumentoDigital",
        "Requerimiento": "1",
        "Fecha": "2018-11-12",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->