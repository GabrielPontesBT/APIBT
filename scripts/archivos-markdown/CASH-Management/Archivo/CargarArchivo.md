---
title: Cargar Archivo
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
::: note Método para realizar la carga de un archivo.

**Nombre publicación:** BTCASHManagement.CargarArchivo

**Programa:** RBTPG360

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
contrato | Int | Identificador del contrato CASH.
servicio | Short | Servicio CASH.
archivo | String | Nombre del archivo a subir.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
archivoId | Long | Identificador de archivo.
estado | String | Estado del archivo.
cantidadLineas | Int | Cantidad de líneas del archivo.

@tab Errores

Código | Descripción
:--------- | :-----------
1030701 | El servicio no existe.
1030702 | El archivo esta vacío.
1030703 | No hay informacion en el archivo.
1030704 | Id de contrato cliente desconocido.
1030706 | El contrato no esta activo.
1030707 | Error al abrir el archivo.
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
      <bts:BTCASHManagement.CargarArchivo>
         <bts:Btinreq>
            <bts:Device>001</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:contrato>94</bts:contrato>
         <bts:servicio>33</bts:servicio>
         <bts:archivo>nomina201903.txt</bts:archivo>
      </bts:BTCASHManagement.CargarArchivo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?CargarArchivo=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'Postman-Token: 71f989b4-091e-46eb-943e-2f53f669b9bb,685d27e3-9d5e-48c2-866a-030669223f5d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "contrato": "94",
    "servicio": "33",
    "archivo": "ACH.txt"
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
      <BTCASHManagement.CargarArchivoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>001</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1e39d33c824A8B5C60A82434</Token>
         </Btinreq>
         <archivoId>179</archivoId>
         <estado>P</estado>
         <cantidadLineas>2</cantidadLineas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>7157</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCASHManagement.CargarArchivo</Servicio>
            <Fecha>2019-04-23</Fecha>
            <Requerimiento>?</Requerimiento>
            <Hora>17:21:58</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.CargarArchivoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
   "Btinreq":{
      "Device":"001",
      "Usuario":"MINSTALADOR",
      "Requerimiento":"1",
      "Canal":"BTDIGITAL",
      "Token":"1e39d33c824A8B5C60A82434"
   },
   "archivoId":181,
   "estado":"N",
   "cantidadLineas":2,
   "Erroresnegocio":{
      "BTErrorNegocio":[

      ]
   },
   "Btoutreq":{
      "Numero":7167,
      "Estado":"OK",
      "Servicio":"BTCASHManagement.CargarArchivo",
      "Requerimiento":"1",
      "Fecha":"2019-04-24",
      "Hora":"11:43:15",
      "Canal":"BTDIGITAL"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->