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
::: note Método para actualizar los datos del domicilio de un cliente.

**Nombre publicación:** BTClientes.ActualizarDomicilio

**Programa:** RBTPG183

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
domicilio | [sBTDomicilioCompleto](#sbtdomiciliocompleto) | Datos del domicilio.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la cuenta.
30002 | El identificador de la cuenta no es correcto.
30011 | Código de domicilio no válido.
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
      <bts:BTClientes.ActualizarDomicilio>
         <bts:Btinreq>
           <bts:Requerimiento>1</bts:Requerimiento>
           <bts:Canal>BTDIGITAL</bts:Canal>
           <bts:Token>0868626a064A8B5C60A82434</bts:Token>
           <bts:Usuario>MINSTALADOR</bts:Usuario>
           <bts:Device>10.12.10.159</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>102</bts:clienteUId>
         <bts:domicilio>
            <bts:agrupador1Id>1</bts:agrupador1Id>
            <bts:coloniaId>3</bts:coloniaId>
            <bts:departamento></bts:departamento>
            <bts:agrupador5></bts:agrupador5>
            <bts:agrupador4></bts:agrupador4>
            <bts:agrupador3Id>1</bts:agrupador3Id>
            <bts:agrupador3></bts:agrupador3>
            <bts:barrio></bts:barrio>
            <bts:detalleUbicacion></bts:detalleUbicacion>
            <bts:agrupador2></bts:agrupador2>
            <bts:agrupador1></bts:agrupador1>
            <bts:agrupador5Id>3</bts:agrupador5Id>
            <bts:ubicacionDesde></bts:ubicacionDesde>
            <bts:tipoDomicilio></bts:tipoDomicilio>
            <bts:direccion></bts:direccion>
            <bts:colonia></bts:colonia>
            <bts:paisId>845</bts:paisId>
            <bts:tipoVivienda></bts:tipoVivienda>
            <bts:pais></bts:pais>
            <bts:agrupador2Id>2</bts:agrupador2Id>
            <bts:codigoPostal>7852</bts:codigoPostal>
            <bts:tipoViviendaId>1</bts:tipoViviendaId>
            <bts:agrupador4Id>1</bts:agrupador4Id>
            <bts:barrioId>2</bts:barrioId>
            <bts:localidad></bts:localidad>
            <bts:localidadId>2</bts:localidadId>
            <bts:tipoDomicilioId>1</bts:tipoDomicilioId>
            <bts:departamentoId>1</bts:departamentoId>
         </bts:domicilio>
      </bts:BTClientes.ActualizarDomicilio>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ActualizarDomicilio=' \
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
	"clienteUId": "102",
   "domicilio": {
      "agrupador1Id": 1,
      "coloniaId": 3,
      "departamento": "",
      "agrupador5": "",
      "agrupador4": "",
      "agrupador3Id": 1,
      "agrupador3": "",
      "barrio": "",
      "detalleUbicacion": "",
      "agrupador2": "",
      "agrupador1": "",
      "agrupador5Id": 3,
      "ubicacionDesde": "",
      "tipoDomicilio": "",
      "direccion": "",
      "colonia": "",
      "paisId": 845,
      "tipoVivienda": "",
      "pais": "",
      "agrupador2Id": 2,
      "codigoPostal": 7852,
      "tipoViviendaId": 1,
      "agrupador4Id": 1,
      "barrioId": 2,
      "localidad": "",
      "localidadId": 2,
      "tipoDomicilioId": 1,
      "departamentoId": 1
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
      <BTClientes.ActualizarDomicilioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0868626a064A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>915</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ActualizarDomicilio</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-13</Fecha>
            <Hora>15:53:20</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ActualizarDomicilioResponse>
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
        "Numero": 917,
        "Estado": "OK",
        "Servicio": "BTClientes.ActualizarDomicilio",
        "Requerimiento": "1",
        "Fecha": "2018-11-13",
        "Hora": "16:07:25",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDomicilioCompleto  

### sBTDomicilioCompleto

::: center 
Los campos del tipo de dato estructurado sBTDomicilioCompleto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
agrupador1 | String | Nombre agrupador 1.
agrupador1Id | Short | Identificador agrupador 1.
agrupador2 | String | Nombre agrupador 2.
agrupador2Id | Short | Identificador agrupador 1.
agrupador3 | String | Nombre agrupador 3.
agrupador3Id | Short | Identificador agrupador 3.
agrupador4 | String | Nombre agrupador 4.
agrupador4Id | Short | Identificador agrupador 4.
agrupador5 | String | Nombre agrupador 5.
agrupador5Id | Short | Identificador agrupador 1.
barrio | String | Nombre del barrio.
barrioId | int | Identificador del barrio.
codigoPostal | String | Código postal.
colonia | String | Colonia.
coloniaId | int | Identificador de la colonia.
departamento | String | Nombre del departamento.
departamentoId | int | Identificador del departamento.
detalleUbicacion | String | Detalle de la ubicación.
direccion | String | Dirección.
localidad | String | Nombre de la localidad.
localidadId | int | Identificador de la localidad.
pais | String | Nombre del país.
paisId | Short | Identificador del país.
tipoDomicilio | String | Descripción del tipo de domicilio.
tipoDomicilioId | Byte | Identificador del tipo de domicilio.
tipoVivienda | String | Descripción del tipo de vivienda.
tipoViviendaId | String | Identificador del tipo de vivienda.
ubicacionDesde | Date | Fecha desde que reside en ese domicilio.
:::
<!-- CIERRA SDT -->