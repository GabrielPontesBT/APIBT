---
title: Asociar Documento Digital
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
::: note Método para asociar un documento digital a una cuenta.

**Nombre publicación:** BTClientes.AsociarDocumentoDigital

**Programa:** RBTPG166

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
tipoDocumentoId | Long | Identificador del tipo de documento.
nombre | String | Nombre del documento.
archivoCodificado | String | Archivo a asociar codificado en Base 64.
fechaEmision | Date | Fecha de emisión del documento (en caso que corresponda).
fechaVencimiento | Date | Fecha de emisión del documento (en caso que corresponda).

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
documentoId | Long | Identificador del documento asociado.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de tipo de documento digital.
30002 | No se recibió nombre.
30004 | No se recibió el identificador de cliente.
30013 | No existe registro para el identificador indicado.
30041 | Debe ingresar la fecha de emisión del documento.
30042 | Debe ingresar la fecha de vencimiento del documento.
31030 | Ocurrió un error al recibir el archivo, puede que el mismo este corrupto.
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
      <bts:BTClientes.AsociarDocumentoDigital>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>5744be79064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:clienteUId>81</bts:clienteUId>
         <bts:tipoDocumentoId>6</bts:tipoDocumentoId>
         <bts:nombre>Ejemplo</bts:nombre>
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado>
         <bts:fechaEmision>2010-10-10</bts:fechaEmision>
         <bts:fechaVencimiento>2020-10-10</bts:fechaVencimiento>
      </bts:BTClientes.AsociarDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?AsociarDocumentoDigital' \
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
    "tipoDocumentoId":"6",
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
      <BTClientes.AsociarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>5744be79064A8B5C60A82434</Token>
         </Btinreq>
         <documentoId>107</documentoId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>746</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.AsociarDocumentoDigital</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-12</Fecha>
            <Hora>13:19:49</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.AsociarDocumentoDigitalResponse>
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
    "documentoId": 110,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 752,
        "Estado": "OK",
        "Servicio": "BTClientes.AsociarDocumentoDigital",
        "Requerimiento": "1",
        "Fecha": "2018-11-12",
        "Hora": "13:40:53",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->