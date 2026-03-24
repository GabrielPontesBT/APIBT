---
title: Obtener Cuentas Cliente
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
::: note Método para obtener un listado de las cuentas de una persona.

**Nombre publicación:** BTPersonas.ObtenerCuentasCliente

**Programa:** RBTPG182

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
:--------- | :----------- | :-----------
sdtCuentasCliente | [sBTCuentaCliente](#sbtcuentacliente) | Listado de cuentas cliente.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
30002 | No se pudo obtener identificador único de la cuenta.
30015 | No se recibió identificador de cuenta a consultar.
30023 | No existe registro para el identificador único.
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
      <bts:BTPersonas.ObtenerCuentasCliente>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>69bc094e014A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>41</bts:personaUId>
      </bts:BTPersonas.ObtenerCuentasCliente>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerCuentasCliente' \
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
	"personaUId": "41",
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
      <BTPersonas.ObtenerCuentasClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>69bc094e014A8B5C60A82434</Token>
         </Btinreq>
         <sdtCuentasCliente>
            <sBTCuentaCliente>
               <clienteUId>21</clienteUId>
               <titularidad>
                  <identificador>1</identificador>
                  <descripcion>Titular</descripcion>
               </titularidad>
               <representativo>N</representativo>
            </sBTCuentaCliente>
            <sBTCuentaCliente>
               <clienteUId>242</clienteUId>
               <titularidad>
                  <identificador>4</identificador>
                  <descripcion>Vice Presidente</descripcion>
               </titularidad>
               <representativo>N</representativo>
            </sBTCuentaCliente>
         </sdtCuentasCliente>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2724</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerCuentasCliente</Servicio>
            <Fecha>2018-10-26</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>15:58:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerCuentasClienteResponse>
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
    "sdtCuentasCliente": {
        "sBTCuentaCliente": [ {
            "clienteUId": "21",
            "titularidad": {
               "descripcion": "Titular",
               "identificador": "1"
            },
            "representativo": "N"
         },
         {
            "clienteUId": "242",
            "titularidad": {
               "descripcion": "Vice Presidente",
               "identificador": "4"
            },
            "representativo": "N"
         } ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "2722",
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerCuentasCliente",
        "Fecha": "2018-10-26",
        "Requerimiento": "1",
        "Hora": "15:56:11",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCuentaCliente  

### sBTCuentaCliente

::: center 
Los campos del tipo de dato estructurado sBTCuentaCliente son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clienteUId | Long | Identificador único de cuenta. 
representativo | String | Indica si es titular representativo (S/N). 
titularidad | [sBTTipoIntegrante](#sbttipointegrante) | Datos de tipo de integrante. 

### sBTTipoIntegrante

::: center 
Los campos del tipo de dato estructurado sBTTipoIntegrante son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción del integrante. 
identificador | Int | Identificador del integrante. 
:::
<!-- CIERRA SDT -->