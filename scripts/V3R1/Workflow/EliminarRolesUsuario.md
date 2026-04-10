---
title: Eliminar Roles Usuario
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
::: note Método para eliminar roles workflow de un usuario.

**Nombre publicación:** BTWorkflow.EliminarRolesUsuario

**Programa:** RBTPG584

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
usuario | String | Usuario.
sdtRoles | [sBTRolWF](#sbtrolwF) | Listado de roles.
modo | String | [Hidden: Valor fijo 'DLT' para este método].

@tab Datos de Salida

No aplica.

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
		<bts:BTWorkflow.EliminarRolesUsuario>
			<bts:Btinreq>
				<bts:Usuario>INSTALADOR</bts:Usuario>
				<bts:Device>GP</bts:Device>
				<bts:Requerimiento>1</bts:Requerimiento>
				<bts:Token>5FE07FD2DCE53B0DC365AA02</bts:Token>
				<bts:Canal>BTDIGITAL</bts:Canal>
			</bts:Btinreq>
			<bts:usuario>INSTALADOR</bts:usuario>
			<bts:sdtRoles>
				<bts:sBTRolWF>
					<bts:descripcion></bts:descripcion>
					<bts:codigo>4</bts:codigo>
				</bts:sBTRolWF>
				<bts:sBTRolWF>
					<bts:descripcion></bts:descripcion>
					<bts:codigo>5</bts:codigo>
				</bts:sBTRolWF>
			</bts:sdtRoles>
		</bts:BTWorkflow.EliminarRolesUsuario>
	</soapenv:Body>
</soapenv:Envelope>

```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTWorkflow_v1?EliminarRolesUsuario' \
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
	"usuario": "INSTALADOR",
   "sdtRoles": {
      "sBTRolWF": [
      {
         "descripcion": "",
         "codigo": 4
      },
      {
         "descripcion": "",
         "codigo": 5
      }
      ]
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
      <BTWorkflow.EliminarRolesUsuarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>376B514438F7B0C7820AF342</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>36608</Numero>
            <Estado>OK</Estado>
            <Servicio>BTWorkflow.EliminarRolesUsuario</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-11-04</Fecha>
            <Hora>17:24:39</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTWorkflow.EliminarRolesUsuarioResponse>
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