---
title: Agregar Domicilio
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
::: note Método para agregar un domicilio a una persona.

**Nombre publicación:** BTPersonas.AgregarDomicilio

**Programa:** RBTPG238

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
domicilio | [sBTDomicilio1](#sbtdomicilio1) | Datos de domicilio.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de la persona.
30002 | El identificador de la persona no es correcto.
30013 | No existe registro con el identificador indicado.
40001 | Código de domicilio no válido.
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
      <bts:BTPersonas.AgregarDomicilio>
         <bts:Btinreq>
            <bts:Device>10.12.10.118</bts:Device>
            <bts:Token>0d402ef5c94</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>21</bts:personaUId>
         <bts:domicilio>
            <bts:localidad></bts:localidad>
            <bts:paisDomicilio></bts:paisDomicilio>
            <bts:barrioId></bts:barrioId>
            <bts:departamento></bts:departamento>
            <bts:numeroPuerta>10</bts:numeroPuerta>
            <bts:barrio></bts:barrio>
            <bts:localidadId>1111</bts:localidadId>
            <bts:tipoDeDomicilioId>1</bts:tipoDeDomicilioId>
            <bts:codigoPostal>1</bts:codigoPostal>
            <bts:calle>14 de julio</bts:calle>
            <bts:apartamento>14B</bts:apartamento>
            <bts:tipoDeDomicilio></bts:tipoDeDomicilio>
            <bts:departamentoId>10</bts:departamentoId>
            <bts:paisDomicilioId>845</bts:paisDomicilioId>
            <bts:direccion></bts:direccion>
            <bts:referencia>Casa Azul</bts:referencia>
		   </bts:domicilio>
      </bts:BTPersonas.AgregarDomicilio>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarDomicilio' \
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
	"personaUId":"21",
	"domicilio": {
		"localidad": "",
		"paisDomicilio": "",
		"barrioId": "10",
		"departamento": "",
		"numeroPuerta": "1111",
		"barrio": "",
		"localidadId": "10",
		"tipoDeDomicilioId": "1",
		"codigoPostal": "1",
		"calle": "14 de julio",
		"apartamento": "14B",
		"tipoDeDomicilio": "",
		"departamentoId": "10",
		"paisDomicilioId": "845",
      "direccion": "",
      "referencia": "Casa Azul"
	}	 
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
      <BTPersonas.AgregarDomicilioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d402ef5c94</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8472</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.AgregarDomicilio</Servicio>
            <Fecha>2019-05-08</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>16:44:23</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.AgregarDomicilioResponse>
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
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTPersonas.AgregarDomicilio",
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
::: details sBTDomicilio1  

### sBTDomicilio1

::: center 
Los campos del tipo de dato estructurado sBTDomicilio1 son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
apartamento | String | Número de apartamento. 
barrio | String | Nombre del barrio. 
barrioId | Int | Identificador del barrio. 
calle | String | Calle del domicilio. 
codigoPostal | String | Código postal. 
departamento | String | Nombre del departamento. 
departamentoId | Int | Identificador del departamento. 
direccion | String | Dirección. 
localidad | String | Nombre de la localidad. 
localidadId | Int | Identificador de la localidad. 
numeroPuerta | String | Número de puerta. 
paisDomicilio | String | Nombre del país. 
paisDomicilioId | Short | Identificador del país. 
referencia | String | Referencia. 
tipoDeDomicilio | String | Nombre del tipo de domicilio. 
tipoDeDomicilioId | Short | Identificador del tipo de domicilio. 
:::
<!-- CIERRA SDT -->