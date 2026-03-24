---
title: Obtener Contactos
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
::: note Método para obtener los contactos de una persona.

**Nombre publicación:** BTPersonas.ObtenerContactos

**Programa:** RBTPG307

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
sdtContactos | [sBTContactoJuridico](#sbtcontactojuridico) | Listado de contactos.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | Identificador de persona requerido.
30002 | No existe persona con el identificador ingresado.
40001 | No existe Contactos para la persona en consulta.
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
      <bts:BTPersonas.ObtenerContactos>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>0d402C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>51</bts:personaUId>
      </bts:BTPersonas.ObtenerContactos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerContactos' \
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
	"personaUId":"51"
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
      <BTPersonas.ObtenerContactosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d402C60A82434</Token>
         </Btinreq>
         <sdtContactos>
            <sBTContactoJuridico>
               <domicilio3/>
               <domicilio2/>
               <telefono>1234 5678</telefono>
               <domicilio1>18 de Julio 1234</domicilio1>
               <vinculoId>3</vinculoId>
               <correlativo>1</correlativo>
               <nombre>Rodolfo Rías</nombre>
               <vinculo>Director</vinculo>
            </sBTContactoJuridico>
         </sdtContactos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8492</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerContactos</Servicio>
            <Fecha>2019-05-08</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>18:40:36</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerContactosResponse>
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
	"sdtContactos": {
		"sBTContactoJuridico": {
			"vinculoId": "3",
			"domicilio3": "",
			"domicilio2": "",
			"domicilio1": "18 de Julio 1234",
			"tipoId": "P",
			"correlativo": "1",
			"tipo": "Personal",
			"telefono": "1234 5678",
			"nombre": "Rodolfo Rías",
			"vinculo": "Director"
		}
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerContactos",
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
::: details sBTContactoJuridico  

### sBTContactoJuridico

::: center 
Los campos del tipo de dato estructurado sBTContactoJuridico son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
correlativo	| Short | Correlativo. 
domicilio1 | String | Domicilio 1. 
domicilio2 | String | Domicilio 2. 
domicilio3 | String | Domicilio 3. 
nombre | String | Nombre completo de la referencia. 
telefono	| String   | Número de teléfono. 
vinculo | String | Vínculo. 
vinculoId | Short | Identificador de vínculo. 
:::
<!-- CIERRA SDT -->