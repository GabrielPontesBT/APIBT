---
title: Obtener Integrantes de Grupo
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
::: note Método para obtener los integrantes de un grupo de crédito.

**Nombre publicación:** BTMicrofinanzas.ObtenerIntegrantesGrupo

**Programa:** RBTPG435

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
grupoId | Int | Código de grupo

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtIntegrantesGrupo | [sBTIntegranteGrupo](#sbtintegrantegrupo) | Listado de integrantes.

@tab Errores

Código | Descripción
:--------- | :-----------
30011 | No se recibió código de grupo.
30012 | El grupo ingresado no contiene integrantes.
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
      <bts:BTMicrofinanzas.ObtenerIntegrantesGrupo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1414147105CD285A89A23FBE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:grupoId>3</bts:grupoId>
      </bts:BTMicrofinanzas.ObtenerIntegrantesGrupo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerIntegrantesGrupo=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"grupoId": 3
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
      <BTMicrofinanzas.ObtenerIntegrantesGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1414147105CD285A89A23FBE</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtIntegrantesGrupo>
            <sBTIntegranteGrupo>
               <clienteUId>27</clienteUId>
               <cuenta>GONZALEZ DUARTE MARÍA LUISA</cuenta>
               <tipoIntegranteId>2</tipoIntegranteId>
               <tipoIntegrante>Integrantes</tipoIntegrante>
               <fechaAlta>2019-05-23</fechaAlta>
               <fechaBaja>0000-00-00</fechaBaja>
               <vigente>S</vigente>
               <identificacionAlternativa/>
            </sBTIntegranteGrupo>
            <sBTIntegranteGrupo>
               <clienteUId>28</clienteUId>
               <cuenta>ILARIO BRAN</cuenta>
               <tipoIntegranteId>2</tipoIntegranteId>
               <tipoIntegrante>Integrantes</tipoIntegrante>
               <fechaAlta>2019-05-23</fechaAlta>
               <fechaBaja>0000-00-00</fechaBaja>
               <vigente>S</vigente>
               <identificacionAlternativa/>
            </sBTIntegranteGrupo>
         </sdtIntegrantesGrupo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ObtenerIntegrantesGrupo</Servicio>
            <Fecha>2020-04-20</Fecha>
            <Hora>17:20:58</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>5016</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerIntegrantesGrupoResponse>
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
	"sdtIntegrantesGrupo": {
		"sBTIntegranteGrupo": [
		  {
			"clienteUId": "27",
			"cuenta": "GONZALEZ DUARTE MARÍA LUISA",
			"tipoIntegranteId": "2",
			"tipoIntegrante": "Integrantes",
			"fechaAlta": "2019-05-23",
			"fechaBaja": "0000-00-00",
			"vigente": "S"
		  },
		  {
			"clienteUId": "28",
			"cuenta": "ILARIO BRAN",
			"tipoIntegranteId": "2",
			"tipoIntegrante": "Integrantes",
			"fechaAlta": "2019-05-23",
			"fechaBaja": "0000-00-00",
			"vigente": "S"
		  }
		]
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "786",
        "Estado": "OK",
        "Servicio": "BTMicrofinanzas.ObtenerIntegrantesGrupo",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "16:35:22",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTIntegranteGrupo  

### sBTIntegranteGrupo

::: center 
Los campos del tipo de dato estructurado sBTIntegranteGrupo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clienteUId | Long | Identificador único del cliente. 
cuenta | String | Nombre de la cuenta. 
fechaAlta | Date | Fecha de alta del integrante. 
fechaBaja | Date | Fecha de baja del integrante. 
identificacionAlternativa | String | Identificación alternativa del integrante. 
tipoIntegrante | String | Descripción del tipo de integrante. 
tipoIntegranteId | Short | Tipo de integrante a ser agregado. 
:::
<!-- CIERRA SDT -->