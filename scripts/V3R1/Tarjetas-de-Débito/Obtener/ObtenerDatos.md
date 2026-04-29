---
title: Obtener Datos
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
::: note Método para obtener los datos de un producto de tarjeta de débito.

**Nombre publicación:** BTTarjetasDeDebito.ObtenerDatos

**Programa:** RBTPG016

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
sdtEntidadTarjetaDebito | [sBDTarjetaDebito](#sbdtarjetadebito) | Datos de tarjeta de débito.

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
      <bts:BTTarjetasDeDebito.ObtenerDatos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:tarjetaUId>3</bts:tarjetaUId>
      </bts:BTTarjetasDeDebito.ObtenerDatos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerDatos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 8ab15c2a-49b2-bedc-bcdf-df8d950d94a9' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
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
      <BTTarjetasDeDebito.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtEntidadTarjetaDebito>
            <limites></limites>
            <paquete>N</paquete>
            <diasHastaVencimiento>2730</diasHastaVencimiento>
            <tarjetaUId>3</tarjetaUId>
            <estadoPlastico>ENTREGADO</estadoPlastico>
            <descPaquete/>
            <tipoTarjeta>MAESTRO NOMINADA</tipoTarjeta>
            <estadoTarjeta>Activa</estadoTarjeta>
            <numeroTarjeta>5010730101000000098</numeroTarjeta>
            <fechaVencimiento>2026-03-31</fechaVencimiento>
            <sucursal>Sucursal Beta</sucursal>
            <nombreTarjeta>PEREZ SOSA JUAN</nombreTarjeta>
         </sdtEntidadTarjetaDebito>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>936</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTarjetasDeDebito.ObtenerDatos</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:40:29</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerDatosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtEntidadTarjetaDebito": {
      "limites": {
         "sBDLimitesTarjeta.it": []
      },
      "paquete": "N",
      "diasHastaVencimiento": "2730",
      "tarjetaUId": "3",
      "estadoPlastico": "ENTREGADO",
      "descPaquete": "",
      "tipoTarjeta": "MAESTRO NOMINADA",
      "estadoTarjeta": "Activa",
      "numeroTarjeta": "5010730101000000098",
      "fechaVencimiento": "2026-03-31",
      "sucursal": "Sucursal Beta",
      "nombreTarjeta": "PEREZ SOSA JUAN"
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "937",
      "Estado": "OK",
      "Servicio": "BTTarjetasDeDebito.ObtenerDatos",
      "Fecha": "2017-12-21",
      "Requerimiento": 1,
      "Hora": "17:41:23",
      "Canal": "BTDIGITAL"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBDTarjetaDebito  

### sBDTarjetaDebito

::: center 
Los campos del tipo de dato estructurado sBDTarjetaDebito son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descPaquete | String | Descripción de paquete. 
diasHastaVencimiento | Int | Días restantes para el vencimiento. 
estadoPlastico | String | Descripción de estado del plástico. 
estadoTarjeta | String | Descripción de estado de la tarjeta. 
fechaVencimiento | Date | Fecha de vencimiento. 
limites | [sBDLimitesTarjeta](#sbdlimitestarjeta) | Listado de límites de la tarjeta. 
nombreTarjeta | String | Nombre de la tarjeta. 
numeroTarjeta | String | Número de tarjeta. 
paquete | String | ¿Tiene paquete? (S/N). 
sucursal | String | Nombre de la sucursal. 
tarjetaUId | Long | Identificador único de tarjeta. 
tipoTarjeta |  String | Tipo de tarjeta. 
 
### sBDLimitesTarjeta

Los campos del tipo de dato estructurado sBDLimitesTarjeta son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción del límite. 
limiteBandaMagnetica | Double | Monto del límite por banda magnética. 
limiteChip | Double | Monto del límite por chip. 
limiteNoPresencial | Double | Monto del límite no presencial. 
moneda | String | Símbolo de la moneda. 
:::
<!-- CIERRA SDT -->