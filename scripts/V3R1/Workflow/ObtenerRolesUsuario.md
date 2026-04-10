---
title: Obtener Roles Usuario
icon: /assets/image/nuevo.svg
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
::: note Método para obtener los roles workflow que tiene asignado un usuario.

**Nombre publicación:** BTWorkflow.ObtenerRolesUsuario

**Programa:** RBTPG583

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
usuario | String | Usuario.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtRoles | [sBTRolWF](#sbtrolwF) | Listado de roles.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió usuario.

::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope
	xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
	<soapenv:Header/>
	<soapenv:Body>
		<bts:BTWorkflow.ObtenerRolesUsuario>
			<bts:Btinreq>
				<bts:Usuario>INSTALADOR</bts:Usuario>
				<bts:Device>GP</bts:Device>
				<bts:Requerimiento>1</bts:Requerimiento>
				<bts:Token>5FE07FD2DCE53B0DC365AA02</bts:Token>
				<bts:Canal>BTDIGITAL</bts:Canal>
			</bts:Btinreq>
			<bts:usuario>INSTALADOR</bts:usuario>
		</bts:BTWorkflow.ObtenerRolesUsuario>
	</soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTWorkflow_v1?ObtenerRolesUsuario' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"usuario": "INSTALADOR"
}'
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope
	xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<SOAP-ENV:Body>
		<BTWorkflow.ObtenerRolesUsuarioResponse
			xmlns="http://uy.com.dlya.bantotal/BTSOA/">
			<Btinreq>
				<Device>GP</Device>
				<Usuario>INSTALADOR</Usuario>
				<Requerimiento>1</Requerimiento>
				<Canal>BTDIGITAL</Canal>
				<Token>5FE07FD2DCE53B0DC365AA02</Token>
			</Btinreq>
			<sdtRoles>
				<sBTRolWF>
					<descripcion>GXflow Public</descripcion>
					<codigo>0</codigo>
				</sBTRolWF>
				<sBTRolWF>
					<descripcion>Operativo Sucursal</descripcion>
					<codigo>1</codigo>
				</sBTRolWF>
				<sBTRolWF>
					<descripcion>Oficial Operaciones</descripcion>
					<codigo>2</codigo>
				</sBTRolWF>
				<sBTRolWF>
					<descripcion>Digitador</descripcion>
					<codigo>4</codigo>
				</sBTRolWF>
				<sBTRolWF>
					<descripcion>Autorizante</descripcion>
					<codigo>5</codigo>
				</sBTRolWF>
				<sBTRolWF>
					<descripcion>Asesor de Créditos</descripcion>
					<codigo>6</codigo>
				</sBTRolWF>
				<sBTRolWF>
					<descripcion>Gte. Microfinanzas</descripcion>
					<codigo>7</codigo>
				</sBTRolWF>
				<sBTRolWF>
					<descripcion>Vendedor</descripcion>
					<codigo>41</codigo>
				</sBTRolWF>
				<sBTRolWF>
					<descripcion>Notarial</descripcion>
					<codigo>42</codigo>
				</sBTRolWF>
				<sBTRolWF>
					<descripcion>GXflow Prototyper</descripcion>
					<codigo>9995</codigo>
				</sBTRolWF>
			</sdtRoles>
			<Erroresnegocio></Erroresnegocio>
			<Btoutreq>
				<Numero>36641</Numero>
				<Estado>OK</Estado>
				<Servicio>BTWorkflow.ObtenerRolesUsuario</Servicio>
				<Requerimiento>1</Requerimiento>
				<Fecha>2025-11-10</Fecha>
				<Hora>17:24:02</Hora>
				<Canal>BTDIGITAL</Canal>
			</Btoutreq>
		</BTWorkflow.ObtenerRolesUsuarioResponse>
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
   "sdtRoles": {
      "sBTRolWF": [
      {
         "descripcion": "GXflow Public",
         "codigo": 0
      },
      {
         "descripcion": "Operativo Sucursal",
         "codigo": 1
      },
      {
         "descripcion": "Oficial Operaciones",
         "codigo": 2
      },
      {
         "descripcion": "Digitador",
         "codigo": 4
      },
      {
         "descripcion": "Autorizante",
         "codigo": 5
      },
      {
         "descripcion": "Asesor de Créditos",
         "codigo": 6
      },
      {
         "descripcion": "Gte. Microfinanzas",
         "codigo": 7
      },
      {
         "descripcion": "Vendedor",
         "codigo": 41
      },
      {
         "descripcion": "Notarial",
         "codigo": 42
      },
      {
         "descripcion": "GXflow Prototyper",
         "codigo": 9995
      }
      ]
   },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8418,
        "Estado": "OK",
        "Servicio": "BTWorkflow.EliminarRolesUsuario",
        "Requerimiento": 1,
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
::: details sBTRolWF  

### sBTRolWF

::: center 
Los campos del tipo de dato estructurado sBTRolWF son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
codigo | Int | Código del rol.
descripcion | String | Descripción del rol.

:::
<!-- CIERRA SDT -->