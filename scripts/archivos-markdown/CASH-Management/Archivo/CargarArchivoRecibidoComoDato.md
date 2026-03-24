---
title: Cargar Archivo Recibido Como Dato
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
::: note Método para cargar un archivo recibido como dato.

**Nombre publicación:** BTCASHManagement.CargarArchivoDato

**Programa:** RBTPG360D

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
contrato | Int | Identificador del contrato CASH del cliente.
servicio | Short | Servicio de pago CASH.
archivo | String | Nombre del archivo a subir.
archivoDato | String | Archivo recibido como dato comprimido expresado en Base 64.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
archivoId | Long | Identificacion de archivo.
estado | String | Estado del archivo.
cantidadLineas | Int | Cantidad de líneas del archivo.

@tab Errores

Código | Descripción
:--------- | :-----------
1030701 | El Servicio no existe.
1030702 | El archivo esta vacio.
1030703 | No hay informacion en el archivo.
1030710 | Error interno al procesar.
1030715 | No se procesa, este archivo ya fue recibido y procesado.
1030720 | Error procesando el archivo. Ver detalle.
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
      <bts:BTCASHManagement.CargarArchivoDato>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>311020191114150000216393</bts:Token>
            <bts:Device>001</bts:Device>
         </bts:Btinreq>
         <bts:contrato>6</bts:contrato>
         <bts:servicio>50</bts:servicio>
         <bts:archivo>Proveedores201910</bts:archivo>
         <bts:archivoDato>SDtQUk9WRUVEMTsxMDE7MjU7MzAvMDUvMjAxOTsyMDAwNTE4NDgxOzsyOwpEOzI7NDQ2Njg4NTUxMTsgREFOSUVMIFNBUlJ</bts:archivoDato>
      </bts:BTCASHManagement.CargarArchivoDato>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?CargarArchivoDato \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
        "Btinreq": {
          "Device": "AV",
          "Usuario": "MINSTALADOR",
          "Canal": "BTDIGITAL",
          "Token": "658fcb0b034A8B5C60A82434"
        },
		"contrato":6,
		"servicio":50,
		"archivo" : "Proveedores201910",
		"archivoDato" : "SDtQUk9WRUVEMTsxMDE7MjU7MzAvMDUvMjAxOTsyMDAwNTE4NDgxOzsyOwpEOzI7NDQ2Njg4NTUxMTsgREFOSUVMIFNBUlJ"
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
      <BTCASHManagement.CargarArchivoDatoResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>311020191114150000216393</Token>
            <Device>001</Device>
         </Btinreq>
         <archivoId>105</archivoId>
         <estado>N</estado>
         <cantidadLineas>3</cantidadLineas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCASHManagement.CargarArchivoDato</Servicio>
            <Fecha>2019-10-31</Fecha>
            <Hora>12:46:33</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>654</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCASHManagement.CargarArchivoDatoResponse>
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
	"archivoId":105,
	"estado" : "N",
	"cantidadLineas":3,
	"Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "13299",
        "Estado": "OK",
        "Servicio": "BTCASHManagement.CargarArchivoDato",
        "Fecha": "2019-04-24",
        "Requerimiento": "",
        "Hora": "10:35:16",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->