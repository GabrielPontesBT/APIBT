---
title: Crear con Persona Existente
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
::: note Método para crear una cuenta cliente a partir de una persona existente.

**Nombre publicación:** BTClientes.CrearConPersonaExistente

**Programa:** RBTPG218

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de la persona titular de la cuenta.
sectorId | Short | Identificador de sector.
clasificacionInternaId | Short | Identificador de clasificación interna.
ejecutivoId | Short | Identificador de ejecutivo de cuenta.
sdtDatosAdicionales | [sBTDatoLista](#sbtdatolista) | Listado de datos adicionales. Se pueden enviar los siguientes [valores.](#valores)

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
clienteUId | Long | Identificador único de cuenta creada.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
30002 | No se recibió el identificador del sector.
30003 | No se recibió el identificador de la clasificación interna.
30005 | Ya existe la cuenta.
::: 
<!-- CIERRA TABLA DE DATOS -->

<!-- ABRE VALORES -->
::: details Valores sdtDatosAdicionales

### Valores

Clave | Valor | Comentarios
:--------- | :----------- | :----------- 
NOMBRE_CUENTA | [Nombre de la cuenta] | **[Opcional]** Permite indicar un nombre específico a la cuenta.

:::
<!-- CIERRA VALORES -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.CrearConPersonaExistente>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>da17de0A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>22</bts:personaUId>
         <bts:sectorId>1</bts:sectorId>
         <bts:clasificacionInternaId>1</bts:clasificacionInternaId>
         <bts:ejecutivoId></bts:ejecutivoId>
         <bts:sdtDatosAdicionales></bts:sdtDatosAdicionales>
      </bts:BTClientes.CrearConPersonaExistente>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?CrearConPersonaExistente' \
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
	"personaUId":"22",
	"sectorId":"1",
	"clasificacionInternaId":"1",
	"ejecutivoId":"",
   "sdtDatosAdicionales":""
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
      <BTClientes.CrearConPersonaExistenteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>da17de0A82434</Token>
         </Btinreq>
         <clienteUId>201</clienteUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8449</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.CrearConPersonaExistente</Servicio>
            <Fecha>2019-05-07</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>19:12:18</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.CrearConPersonaExistenteResponse>
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
	"clienteUId": 201,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTClientes.AgregarTelefono",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDatoLista  

### sBTDatoLista

::: center 
Los campos del tipo de dato estructurado sBTDatoLista son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clave | String | Identificador de información adicional. 
valor | String | Valor de información adicional. 
:::
<!-- CIERRA SDT -->