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
::: note Método para agregar un domicilio a un cliente.

**Nombre publicación:** BTClientes.AgregarDomicilio

**Programa:** RBTPG239

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
:--------- | :---------
30001 | No se recibió el identificador de la cuenta.
30006 | No existe registro con el identificador indicado.
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
      <bts:BTClientes.AgregarDomicilio>
		<bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>da17de64124A834</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
		</bts:Btinreq>
		<bts:clienteUId>21</bts:clienteUId>
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
      </bts:BTClientes.AgregarDomicilio>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?AgregarDomicilio' \
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
	"clienteUId":"21",
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
      <BTClientes.AgregarDomicilioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>da17de64124A834</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8439</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.AgregarDomicilio</Servicio>
            <Fecha>2019-05-07</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>18:31:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.AgregarDomicilioResponse>
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
        "Servicio": "BTClientes.AgregarDomicilio",
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
tipoDeDomicilioId | Byte | Identificador del tipo de domicilio.
:::
<!-- CIERRA SDT -->