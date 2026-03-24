---
title: Agregar Integrante a Grupo
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
::: note Método para agregar un integrante a un grupo de crédito.

**Nombre publicación:** BTMicrofinanzas.AgregarIntegranteAGrupo

**Programa:** RBTPG433

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
grupoId | Int | Código de grupo
sdtIntegranteGrupo | [sBTIntegranteGrupo](#sbtintegrantegrupo) | Datos del integrante

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de grupo
30002 | No se recibió el identificador de cliente
30014 | No existe registro con el identificador indicado
40005 | Debe ingresar un tipo de integrante válido para el grupo
40006 | Excedió la cantidad de integrantes Coordinador permitidos para el tipo de grupo
40008 | La cuenta ya integra el grupo
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
      <bts:BTMicrofinanzas.AgregarIntegranteAGrupo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1414147105CD285A89A23FBE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:grupoId>3</bts:grupoId>
         <bts:sdtIntegranteGrupo>
            <bts:clienteUId>157</bts:clienteUId>
            <bts:cuenta></bts:cuenta>
            <bts:tipoIntegranteId>2</bts:tipoIntegranteId>
            <bts:tipoIntegrante></bts:tipoIntegrante>
            <bts:fechaAlta>2020-04-20</bts:fechaAlta>
            <bts:fechaBaja></bts:fechaBaja>
            <bts:vigente>S</bts:vigente>
            <bts:identificacionAlternativa></bts:identificacionAlternativa>
         </bts:sdtIntegranteGrupo>
      </bts:BTMicrofinanzas.AgregarIntegranteAGrupo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?AgregarIntegranteAGrupo=' \
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
	"grupoId": 3,
	"sdtIntegranteGrupo": {
		"clienteUId": "157",
		"tipoIntegranteId": "2",
		"tipoIntegrante": "",
		"fechaAlta": "2020-04-20",
		"vigente": "S"
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
      <BTMicrofinanzas.AgregarIntegranteAGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1414147105CD285A89A23FBE</Token>
            <Device>AC</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.AgregarIntegranteAGrupo</Servicio>
            <Fecha>2020-04-20</Fecha>
            <Hora>16:59:02</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>5004</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.AgregarIntegranteAGrupoResponse>
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
        "Numero": "786",
        "Estado": "OK",
        "Servicio": "BTMicrofinanzas.AgregarIntegranteAGrupo",
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