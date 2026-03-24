---
title: Obtener Concepto
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
::: note Método para obtener los conceptos de los programas de personas.

**Nombre publicación:** BTPersonas.ObtenerConcepto

**Programa:** RBTPG529

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
programa | String | Nombre del programa.
conceptoId | Long | Identificador del concepto.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtValorCampo | [sBTValorCampo](#sbtvalorcampo) | Listado de conceptos del programa.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el nombre del programa.
30002 | No se recibió el identificador del campo.
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
      <bts:BTPersonas.ObtenerConcepto>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>45A5647518BC5FBB73003EA9</bts:Token>
         </bts:Btinreq>
         <bts:programa>HDECOCPD</bts:programa>
         <bts:conceptoId>11</bts:conceptoId>
      </bts:BTPersonas.ObtenerConcepto>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerConcepto=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "programa":"HDECOCPD",
   "conceptoId": 11
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
      <BTPersonas.ObtenerConceptoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <sdtValorCampo>
            <sBTValorCampo>
               <descripcion>Cliente</descripcion>
               <identificador>1</identificador>
            </sBTValorCampo>
            <sBTValorCampo>
               <descripcion>Agencia</descripcion>
               <identificador>2</identificador>
            </sBTValorCampo>
         </sdtValorCampo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16846</Numero>
            <Servicio>BTPersonas.ObtenerConcepto</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-26</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>11:44:45</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerConceptoResponse>
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
   "sdtValorCampo": {
        "sBTValorCampo": [
        {
            "descripcion": "Cliente",
            "identificador": 1
        },
        {
            "descripcion": "Agencia",
            "identificador": 2
        }
        ]
    },  
   "Erroresnegocio": {
       "BTErrorNegocio": []
   },
   "Btoutreq": {
       "Numero": "835",
       "Estado": "OK",
       "Servicio": "BTPersonas.ObtenerConcepto",
       "Fecha": "2023-12-18",
       "Requerimiento": "",
       "Hora": "01:48:53",
       "Canal": "BTDIGITAL"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTValorCampo  

### sBTValorCampo

::: center 
Los campos del tipo de dato estructurado sBTValorCampo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción. 
identificador | Int | Identificador. 
:::
<!-- CIERRA SDT -->