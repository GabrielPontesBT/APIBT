---
title: Modificar 
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
::: note Método para modificar un usuario.

**Nombre publicación:** BTUsuarios.Modificar

**Programa:** RBTPG120

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtUsuario | [sBTUsuarioBT](#sbtusuariobt) | Datos de usuario Bantotal.
modo | String | [Hidden: Valor fijo 'UPD' para este método].

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :---------
30000 | Parámetro modo incorrecto.
30001 | Debe ingresar Usuario.
30003 | No existe Usuario.
30004 | Debe ingresar Nombre.
30005 | Debe ingresar Email.
30006 | Debe ingresar Nro de Caja.
30007 | Valor incorrecto para cantidad de sesiones abiertas.
30008 | Valor incorrecto para Nivel.
30009 | Debe ingresar Programa Inicial.
30010 | El Programa Inicial no existe.
30011 | Debe ingresar Sucursal.
30012 | La Sucursal no existe.
40011 | La Empresa para el Usuario no existe.
40012 | Número de Cajero ya asignado.
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
      <bts:BTUsuarios.Modificar>
		<bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtUsuario>
            <bts:Nombre>Natalia Parrilla</bts:nombre>
            <bts:Usuario>PARRILLAN</bts:usuario>
            <bts:Email>nparrilla@prueba.com</bts:email>
            <bts:Telefono>26012777</bts:Telefono>
            <bts:CantidadSesionesAbiertas>0</bts:cantidadSesionesAbiertas>
            <bts:EspaciosTrabajo>0</bts:espaciosTrabajo>
            <bts:ProgramaInicial>HPRUEBA</bts:programaInicial>
            <bts:Nivel>9</bts:nivel>
            <bts:Sucursal>1</bts:sucursal>
            <bts:Cajero>N</bts:cajero>
            <bts:NumeroCaja>0</bts:numeroCaja>
         </bts:sdtUsuario>
      </bts:BTUsuarios.Modificar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?Modificar' \
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
   "sdtUsuario": {
		"Nombre": "Carlos Dutra",
		"Usuario": "DUTRAC",
		"Email": "cdutra@prueba.com",
      "Telefono": "26012777",
		"CantidadSesionesAbiertas": 0,
		"EspaciosTrabajo": 0,
		"ProgramaInicial": "HPRUEBA",
		"Nivel": 9,
		"Sucursal": 1,
		"Cajero": "N",
		"NumeroCaja": 0
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
      <BTUsuarios.ModificarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d2dc7b1654A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>98</Numero>
            <Estado>OK</Estado>
            <Servicio>BTUsuarios.Modificar</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-04</Fecha>
            <Hora>16:50:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTUsuarios.ModificarResponse>
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
        "Numero": "99",
        "Estado": "OK",
        "Servicio": "BTUsuarios.Modificar",
        "Requerimiento": "1",
        "Fecha": "2018-05-04",
        "Hora": "16:51:22",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT --> 
::: details sBTUsuarioBT  

### sBTUsuarioBT

::: center 
Los campos del tipo de dato estructurado sBTUsuarioBT son los siguientes: 

Campo | Tipo | Comentarios 
:--------- | :--------- | :--------- 
Cajero | String | Indica si el usuario es cajero (S/N). 
CantidadSesionesAbiertas | Short | Cantidad máxima de sesiones que puede tener abiertas un mismo usuario Bantotal. 
Email | String | Email del usuario. 
EspaciosTrabajo | Int | Cantidad máxima de espacios de trabajos que puede tener abierta el usuario (0 - Para indicar que no tiene límites). 
Nivel | Short | Nivel del usuario. 
Nombre | String | Nombre del usuario. 
NumeroCaja | Int | Número de caja que utiliza el cajero. 
ProgramaInicial | String | Nombre de programa inicial que se invoca al acceder a Bantotal. 
Sucursal | Int | Identificador de sucursal. 
Telefono | String | Teléfono del usuario.  
Usuario | String | Identificador del usuario. 
:::
<!-- CIERRA SDT -->