---
title: Obtener Naturalezas Jurídicas
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
::: note Método para obtener un listado de las naturalezas jurídicas ingresadas.

**Nombre publicación:** BTPersonas.ObtenerNaturalezasJuridicas

**Programa:** RBTPG311

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtNaturalezas | [sBTNaturalezaJuridica](#sbtnaturalezajuridica) | Listado de naturalezas jurídicas.

@tab Errores

No aplica.
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
      <bts:BTPersonas.ObtenerNaturalezasJuridicas>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>ccbe8f2e2434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTPersonas.ObtenerNaturalezasJuridicas>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerNaturalezasJuridicas' \
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
      <BTPersonas.ObtenerNaturalezasJuridicasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ccbe8f2e2434</Token>
         </Btinreq>
         <sdtNaturalezas>
            <sBTNaturalezaJuridica>
               <descripcion>Sociedad Anónima</descripcion>
               <identificador>1</identificador>
            </sBTNaturalezaJuridica>
            <sBTNaturalezaJuridica>
               <descripcion>Sociedad de Hecho</descripcion>
               <identificador>4</identificador>
            </sBTNaturalezaJuridica>
            <sBTNaturalezaJuridica>
               <descripcion>Soc.Comandita p/Acciones</descripcion>
               <identificador>5</identificador>
            </sBTNaturalezaJuridica>
            <sBTNaturalezaJuridica>
               <descripcion>Sociedad Colectiva</descripcion>
               <identificador>8</identificador>
            </sBTNaturalezaJuridica>
            <sBTNaturalezaJuridica>
               <descripcion>Cooperativa</descripcion>
               <identificador>9</identificador>
            </sBTNaturalezaJuridica>
            <sBTNaturalezaJuridica>
               <descripcion>Ente Público</descripcion>
               <identificador>10</identificador>
            </sBTNaturalezaJuridica>
            <sBTNaturalezaJuridica>
               <descripcion>Sociedad Extranjera</descripcion>
               <identificador>11</identificador>
            </sBTNaturalezaJuridica>
            <sBTNaturalezaJuridica>
               <descripcion>Unipersonal</descripcion>
               <identificador>17</identificador>
            </sBTNaturalezaJuridica>
            <sBTNaturalezaJuridica>
               <descripcion>No corresponde</descripcion>
               <identificador>99</identificador>
            </sBTNaturalezaJuridica>
         </sdtNaturalezas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8514</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerNaturalezasJuridicas</Servicio>
            <Fecha>2019-05-09</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:43:07</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerNaturalezasJuridicasResponse>
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
	"sdtNaturalezas": {
		"sBTNaturalezaJuridica": [
			{
				"descripcion": "Sociedad Anónima",
				"identificador": "1"
			},
			{
				"descripcion": "Sociedad de Hecho",
				"identificador": "4"
			},
			{
				"descripcion": "Soc.Comandita p/Acciones",
				"identificador": "5"
			},
			{
				"descripcion": "Sociedad Colectiva",
				"identificador": "8"
			},
			{
				"descripcion": "Cooperativa",
				"identificador": "9"
			},
			{
				"descripcion": "Ente Público",
				"identificador": "10"
			},
			{
				"descripcion": "Sociedad Extranjera",
				"identificador": "11"
			},
			{
				"descripcion": "Unipersonal",
				"identificador": "17"
			},
			{
				"descripcion": "No corresponde",
				"identificador": "99"
			}
		]
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerNaturalezasJuridicas",
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
::: details sBTNaturalezaJuridica  

### sBTNaturalezaJuridica

::: center 
Los campos del tipo de dato estructurado sBTNaturalezaJuridica son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion	| String	| Descripción de naturaleza jurídica. 
identificador | Long	| Identificador de naturaleza jurídica. 
:::
<!-- CIERRA SDT -->