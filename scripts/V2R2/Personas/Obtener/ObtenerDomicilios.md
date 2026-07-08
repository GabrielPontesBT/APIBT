---
title: Obtener Domicilios
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
::: note Método para obtener un listado de los domicilios de una persona.

**Nombre publicación:** BTPersonas.ObtenerDomicilios

**Programa:** RBTPG197

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtDomicilios | [sBTDomicilio1](#sbtdomicilio1) | Listado de domicilios.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de la persona.
30002 | El identificador de la persona no es correcto.
30011 | No se encontraron domicilios para la persona.
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
      <bts:BTPersonas.ObtenerDomicilios>
         <bts:Btinreq>
            <bts:Device>10.12.10.159</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>772a871c734A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>101</bts:personaUId>
      </bts:BTPersonas.ObtenerDomicilios>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDomicilios=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a12f013d-9875-6451-dd62-ad7bb0217b5c' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "personaUId": "101"
}'
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerDomiciliosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>772a871c734A8B5C60A82434</Token>
         </Btinreq>
         <sdtDomicilios>
            <sBTDomicilio1>
               <paisDomicilioId>845</paisDomicilioId>
               <paisDomicilio>URUGUAY</paisDomicilio>
               <departamentoId>4</departamentoId>
               <departamento>Colonia</departamento>
               <localidadId>1357</localidadId>
               <localidad>Riachuelo</localidad>
               <barrioId>0</barrioId>
               <barrio/>
               <calle>1</calle>
               <numeroPuerta>167</numeroPuerta>
               <apartamento/>
               <codigoPostal/>
               <tipoDeDomicilioId>1</tipoDeDomicilioId>
               <tipoDeDomicilio>Residencia</tipoDeDomicilio>
               <direccion>CALLE 1 NRO 167</direccion>
               <referencia>Casa Azul</referencia>
            </sBTDomicilio1>
         </sdtDomicilios>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2991</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerDomicilios</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-08</Fecha>
            <Hora>16:05:36</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerDomiciliosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "AV",
    "Usuario": "MINSTALADOR",
    "Requerimiento": "",
    "Canal": "BTDIGITAL",
    "Token": "fa2c02c95a4A8B5C60A82434"
  },
  "sdtDomicilios": {
    "sBTDomicilio1": [
      {
        "localidad": "Riachuelo",
        "paisDomicilio": "URUGUAY",
        "barrioId": "0",
        "departamento": "Colonia",
        "numeroPuerta": "167",
        "barrio": "",
        "localidadId": "1357",
        "tipoDeDomicilioId": "1",
        "codigoPostal": "",
        "calle": "1",
        "apartamento": "",
        "tipoDeDomicilio": "Residencia",
        "departamentoId": "4",
        "paisDomicilioId": "845",
        "direccion": "CALLE 1 NRO 167",
        "referencia": ""
      }
    ]
  },
  "Erroresnegocio": {
    "BTErrorNegocio": []
  },
  "Btoutreq": {
    "Numero": "2993",
    "Estado": "OK",
    "Servicio": "BTPersonas.ObtenerDomicilios",
    "Requerimiento": "1",
    "Fecha": "2018-11-08",
    "Hora": "16:07:57",
    "Canal": "BTDIGITAL"
  }
}
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