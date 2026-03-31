---
title: Actualizar Domicilio
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
::: note Método para actualizar los datos del domicilio de una persona.

**Nombre publicación:** BTPersonas.ActualizarDomicilio

**Programa:** RBTPG196

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
30011 | Código de domicilio no válido.
31011 | No existe el domicilio de la persona.
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
      <bts:BTPersonas.ActualizarDomicilio>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0868626a064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>10.12.10.159</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>22</bts:personaUId>
         <bts:domicilio>
            <bts:localidad></bts:localidad>
            <bts:paisDomicilio/>
            <bts:barrioId>0</bts:barrioId>
            <bts:departamento/>
            <bts:numeroPuerta>0</bts:numeroPuerta>
            <bts:barrio/>
            <bts:localidadId>1245</bts:localidadId>
            <bts:tipoDeDomicilioId>2</bts:tipoDeDomicilioId>
            <bts:codigoPostal>56000</bts:codigoPostal>
            <bts:calle>Calle 2</bts:calle>
            <bts:apartamento/>
            <bts:tipoDeDomicilio></bts:tipoDeDomicilio>
            <bts:departamentoId>11</bts:departamentoId>
            <bts:paisDomicilioId>845</bts:paisDomicilioId>
            <bts:direccion></bts:direccion>
            <bts:referencia>Casa Azul</bts:referencia>
         </bts:domicilio>
      </bts:BTPersonas.ActualizarDomicilio>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarDomicilio=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 44ba1342-ce61-303e-bd55-62945147dfe0' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId": "22",
   "domicilio": {
      "localidad": "",
      "paisDomicilio": "",
      "barrioId": "0",
      "departamento": "",
      "numeroPuerta": "0",
      "barrio": "",
      "localidadId": "1245",
      "tipoDeDomicilioId": "2",
      "codigoPostal": "56000",
      "calle": "Calle 2",
      "apartamento": "",
      "tipoDeDomicilio": "",
      "departamentoId": "11",
      "paisDomicilioId": "845",
      "direccion": "",
      "referencia": "Casa Azul"
   },
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
      <BTPersonas.ActualizarDomicilioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0868626a064A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>920</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ActualizarDomicilio</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-13</Fecha>
            <Hora>16:19:14</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ActualizarDomicilioResponse>
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
      "Numero": 922,
      "Estado": "OK",
      "Servicio": "BTPersonas.ActualizarDomicilio",
      "Requerimiento": "1",
      "Fecha": "2018-11-13",
      "Hora": "16:21:00",
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
dirección | String | Dirección. 
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