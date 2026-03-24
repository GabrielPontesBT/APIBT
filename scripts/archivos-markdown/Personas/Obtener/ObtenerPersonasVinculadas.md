---
title: Obtener Personas Vinculadas
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
::: note Método para obtener un listado de los vínculos de la persona.

**Nombre publicación:** BTPersonas.ObtenerPersonasVinculadas

**Programa:** RBTPG375

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
sdtPersonasVinculadas | [sBTPersonaVinculada](#sbtpersonavinculada) | Datos de la persona vinculada.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
31003 | No existe registro para el identificador único.
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
      <bts:BTPersonas.ObtenerPersonasVinculadas>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>120109606CD285A89A23FBEE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>1</bts:personaUId>
      </bts:BTPersonas.ObtenerPersonasVinculadas>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerPersonasVinculadas' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "GP",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"personaUId": "1",
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
      <BTPersonas.ObtenerPersonasVinculadasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>120109606CD285A89A23FBEE</Token>
            <Device>MC</Device>
         </Btinreq>
         <sdtPersonasVinculadas>
            <sBTPersonaVinculada>
               <personaUId>3</personaUId>
               <nombre>PEREZ MANRIQUE JORGE</nombre>
               <vinculo>
                  <identificador>41</identificador>
                  <descripcion>Padre</descripcion>
                  <tipo>C</tipo>
               </vinculo>
            </sBTPersonaVinculada>
            <sBTPersonaVinculada>
               <personaUId>2</personaUId>
               <nombre>ABARCA CARLOS</nombre>
               <vinculo>
                  <identificador>43</identificador>
                  <descripcion>Hijo</descripcion>
                  <tipo>C</tipo>
               </vinculo>
            </sBTPersonaVinculada>
         </sdtPersonasVinculadas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ObtenerPersonasVinculadas</Servicio>
            <Fecha>2021-11-30</Fecha>
            <Hora>11:04:47</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8767</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ObtenerPersonasVinculadasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>

```
@tab JSON
```json
{ 
    "Btinreq": { 
	    "Device": "GP", 
	    "Usuario": "MINSTALADOR", 
	    "Token": "16c1cc9b534A8B5C60A82434", 
	    "Canal": "BTDIGITAL", 
	    "Requerimiento": "1" 
    }, 
    "sdtPersonasVinculadas": { 
      "sBTPersonaVinculada": [ 
      { 
         "personaUId": "3", 
         "nombre": "PEREZ MANRIQUE JORGE", 
         "vinculo": { 
            "identificador": "41", 
            "descripcion": "Padre", 
            "tipo": "C" 
         } 
      }, 
      { 
         "personaUId": "2", 
         "nombre": "ABARCA CARLOS", 
         "vinculo": { 
            "identificador": "43", 
            "descripcion": "Hijo", 
            "tipo": "C" 
         } 
      } 
      ] 
    },   
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPersonas.ObtenerPersonasVinculadasResponse", 
        "Fecha": "2021-10-28", 
        "Hora": "15:39:53", 
        "Requerimiento": "1", 
        "Numero": "11003", 
        "Estado": "OK" 
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPersonaVinculada  

### sBTPersonaVinculada

::: center 
Los campos del tipo de dato estructurado sBTPersonaVinculada son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
nombre | String | Nombre de la persona. 
personaUId | Long | Identificador único de persona. 
vinculo | [sBTVinculo](#sbtvinculo) | Datos del vínculo. 

### sBTVinculo

::: center 
Los campos del tipo de dato estructurado sBTVinculo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción de vínculo. 
identificador | Short | Identificador de vínculo. 
tipo | String | Tipo de vínculo. 
:::
<!-- CIERRA SDT -->