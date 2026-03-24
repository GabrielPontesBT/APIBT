---
title: Autorizar Excepción
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
::: note Método para autorizar una excepción.

**Nombre publicación:** BTSeguridad.AutorizarExcepcion

**Programa:** RBTPG088

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
idExcepcion | Int | Identificador de excepción.
usuario | String | Usuario.
contraseña | String | Contraseña.
autoriza | String | Autoriza [Hidden: Valor fijo 'S' para este método].

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | Excepción asignada a otro Usuario
30011 | No se recibió el identificador de excepción.
30012 | No se recibió Usuario.
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
      <bts:BTSeguridad.AutorizarExcepcion>
         <bts:Btinreq>             
            <bts:Device>ES</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>dac8c7fdec4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:idExcepcion>1853</bts:idExcepcion>
         <bts:usuario>BANTOTAL</bts:Usuario>
         <bts:contraseña>z0na#1357</bts:Contraseña>
      </bts:BTSeguridad.AutorizarExcepcion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSeguridad?AutorizarExcepcion=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 08206ddb-aee6-e62e-eb5a-0eb81f95e87f' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "idExcepcion": 1854,
    "usuario": "BANTOTAL",
    "contraseña": "z0na#1357"
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
      <BTSeguridad.AutorizarExcepcionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>ES</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>dac8c7fdec4A8B5C60A82434</Token>
         </Btinreq>
		 <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>893</Numero>
            <Estado>OK</Estado>
            <Servicio>BTSeguridad.AutorizarExcepcion</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2017-12-20</Fecha>
            <Hora>16:40:55</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTSeguridad.AutorizarExcepcionResponse>
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
        "Numero": "959",
        "Estado": "OK",
        "Servicio": "BTSeguridad.AutorizarExcepcion",
        "Fecha": "2017-12-22",
        "Requerimiento": "",
        "Hora": "10:58:58",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->