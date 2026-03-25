---
title: Obtener Tarjetas Adicionales
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
::: note Método para obtener las tarjetas adicionales que están asociadas a una tarjeta de débito.

**Nombre publicación:** BTTarjetasDeDebito.ObtenerTarjetasAdicionales

**Programa:** RBTPG018

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
tarjetaUId | Long | Identificador único de tarjeta.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtTarjetaDebitoAdicionales | [sBDTarjetasDebitoAdicionales](#sbdtarjetadebitoadicional) | Datos de la tarjeta de débito.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de tarjeta.
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
      <bts:BTTarjetasDeDebito.ObtenerTarjetasAdicionales>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:tarjetaUId>3</bts:tarjetaUId>
      </bts:BTTarjetasDeDebito.ObtenerTarjetasAdicionales>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerTarjetasAdicionales=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 94079d62-3b2f-c624-4677-6e00bde48a50' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "tarjetaUId": 3
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
      <BTTarjetasDeDebito.ObtenerTarjetasAdicionalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtTarjetaDebitoAdicionales>
            <adicionales></adicionales>
            <tarjetaUId>3</tarjetaUId>
         </sdtTarjetaDebitoAdicionales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>938</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTarjetasDeDebito.ObtenerTarjetasAdicionales</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:43:03</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerTarjetasAdicionalesResponse>
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
   "sdtTarjetaDebitoAdicionales": {
      "adicionales": {
         "sBDTarjetaDebitoAdicional": []
      },
      "tarjetaUId": "3"
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "939",
      "Estado": "OK",
      "Servicio": "BTTarjetasDeDebito.ObtenerTarjetasAdicionales",
      "Fecha": "2017-12-21",
      "Requerimiento": "",
      "Hora": "17:43:19",
      "Canal": "BTDIGITAL"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTarjetasDebitoAdicionales  

### sBTTarjetasDebitoAdicionales

::: center 
Los campos del tipo de dato estructurado sBTTarjetasDebitoAdicionales son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
adicionales | [sBDTarjetaDebitoAdicional](#sbdtarjetadebitoadicional) | Listado de tarjetas de débito adicionales. 
tarjetaUId | Long | Identificador único de tarjeta. 

### sBDTarjetaDebitoAdicional

::: center 
Los campos del tipo de dato estructurado sBDTarjetaDebitoAdicional son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
estado | String | Descripción de estado. 
fechaVencimiento | Date | Fecha de vencimiento. 
nombreTarjeta | String | Nombre de tarjeta. 
numeroTarjeta | String | Número de tarjeta. 
tarjetaUId | Long | Identificador único de tarjeta. 
:::
<!-- CIERRA SDT -->