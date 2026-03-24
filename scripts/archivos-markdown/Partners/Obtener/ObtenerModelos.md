---
title: Obtener Modelos
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
::: note Método para retornar los modelos de una marca.

**Nombre publicación:** BTPartners.ObtenerModelos

**Programa:** RBTPNV04

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPartner | [sBTPartnerInReq](#sbtpartnerinreq) | Datos del usuario.
marcaUId | Long | Identificador de la marca.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtModelos | [sBTModelo](#sbtmodelo) | Listado de los modelos de una marca.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió Partner ni canal.
30002 | El Partner no se encuentra habilitado.
30003 | No existe Partner con ese identificador.
30012 | No se recibió punto de venta.
30013 | No se recibió vendedor.
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
      <bts:BTPartners.ObtenerModelos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>DF1F942C6EC60E8B95BBEA69</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>2</bts:puntoVentaUId>
            <bts:vendedorUId>0</bts:vendedorUId>
            <bts:partnerUId>1</bts:partnerUId>
         </bts:sdtPartner>
         <bts:marcaUId>1</bts:marcaUId>
      </bts:BTPartners.ObtenerModelos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ObtenerModelos' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "3JPL6DC33CD84655A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"sdtPartner": {
          "puntoVentaUId": 2,
          "vendedorUId": 0,
          "partnerUId": 1
   },
   "marcaUId": 1
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
      <BTPartners.ObtenerModelosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <sdtModelos>
            <sBTModelo>
               <carroceria>Opción 3</carroceria>
               <modeloUId>1</modeloUId>
               <gpsObligatorio>S</gpsObligatorio>
               <tipoVehiculo>Opción 2</tipoVehiculo>
               <tipoVehiculoId>2</tipoVehiculoId>
               <carroceriaId>3</carroceriaId>
               <marcaUId>1</marcaUId>
               <nombreModelo>Q5</nombreModelo>
            </sBTModelo>
         </sdtModelos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16858</Numero>
            <Servicio>BTPartners.ObtenerModelos</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-27</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>12:11:18</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ObtenerModelosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtModelos": {
      "sBTModelo": {
      "carroceria": "Opción 3",
      "modeloUId": 1,
      "gpsObligatorio": "S",
      "tipoVehiculo": "Opción 2",
      "tipoVehiculoId": 2,
      "carroceriaId": 3,
      "marcaUId": 1,
      "nombreModelo": "Q5"
      }
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPartners.ObtenerModelos",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "17:08:56"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPartnerInReq  

### sBTPartnerInReq

::: center 
Los campos del tipo de dato estructurado sBTPartnerInReq son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
partnerUId | Int | Identificador del Partner.
puntoVentaUId	 | Int | Identificador del punto de venta.
vendedorUId	 | Int | Identificador del vendedor.
:::

::: details sBTModelo  

### sBTModelo

::: center 
Los campos del tipo de dato estructurado sBTModelo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
carroceria | String | Carrocería.
carroceriaId | Short | Identificador de la carrocería.
gpsObligatorio | String | ¿Es el GPS obligatorio? (S/N)
marcaUId | Long | Identificador de la marca.
modeloUId | Long | Identificador del modelo.
nombreModelo | String | Nombre del modelo.
tipoVehiculo | String | Tipo de vehículo.
tipoVehiculoId | Short | Identificador del tipo de vehículo.
:::
<!-- CIERRA SDT -->