---
title: Obtener Telefonos
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
::: note Método para obtener los teléfonos de un cliente.

**Nombre publicación:** BTClientes.ObtenerTelefonos

**Programa:** RBTPG215

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtTelefonos | [sBTTelefono](#sbttelefono) | Listado de teléfonos.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de cliente.
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
      <bts:BTClientes.ObtenerTelefonos>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>da17de64124A</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:clienteUId>21</bts:clienteUId>
      </bts:BTClientes.ObtenerTelefonos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerTelefonos' \
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
	"clienteUId":"21"
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
      <BTClientes.ObtenerTelefonosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.118</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>da17de64124A8B5C60A82434</Token>
         </Btinreq>
         <sdtTelefonos>
            <sBTTelefono>
               <telefono>26004288</telefono>
               <tipoDeDomicilioId>1</tipoDeDomicilioId>
               <identificador>1</identificador>
               <tipoDeDomicilio>Casa</tipoDeDomicilio>
            </sBTTelefono>
            <sBTTelefono>
               <telefono>091897718</telefono>
               <tipoDeDomicilioId>1</tipoDeDomicilioId>
               <identificador>2</identificador>
               <tipoDeDomicilio>Casa</tipoDeDomicilio>
            </sBTTelefono>
            <sBTTelefono>
               <telefono>2134543</telefono>
               <tipoDeDomicilioId>1</tipoDeDomicilioId>
               <identificador>3</identificador>
               <tipoDeDomicilio>Casa</tipoDeDomicilio>
            </sBTTelefono>
            <sBTTelefono>
               <telefono>21345434</telefono>
               <tipoDeDomicilioId>1</tipoDeDomicilioId>
               <identificador>4</identificador>
               <tipoDeDomicilio>Casa</tipoDeDomicilio>
            </sBTTelefono>
         </sdtTelefonos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8434</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerTelefonos</Servicio>
            <Fecha>2019-05-07</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>17:42:25</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerTelefonosResponse>
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
	"sdtTelefonos": {
		"sBTTelefono": [
			{
				"telefono": "26004288",
				"tipoDeDomicilioId": "1",
				"identificador": "1",
				"tipoDeDomicilio": "Casa"
			},
			{
				"telefono": "091897718",
				"tipoDeDomicilioId": "1",
				"identificador": "2",
				"tipoDeDomicilio": "Casa"
			},
			{
				"telefono": "2134543",
				"tipoDeDomicilioId": "1",
				"identificador": "3",
				"tipoDeDomicilio": "Casa"
			},
			{
				"telefono": "21345434",
				"tipoDeDomicilioId": "1",
				"identificador": "4",
				"tipoDeDomicilio": "Casa"
			}
		]
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerTelefonos",
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
::: details sBTTelefono  

### sBTTelefono

::: center 
Los campos del tipo de dato estructurado sBTTelefono son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
identificador | Byte | Identificador correlativo de teléfono. 
telefono | String | Número de teléfono 
tipoDeDomicilio | String | Descripción de tipo de domicilio del teléfono. 
tipoDeDomicilioId | Byte | Identificador de tipo de domicilio del teléfono. 
:::
<!-- CIERRA SDT -->