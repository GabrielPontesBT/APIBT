---
title: Obtener Barrios y Colonias
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
::: note Método para obtener un listado de los barrios/colonias ingresados en Bantotal para una determinada ciudad de un país.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerBarriosColonias

**Programa:** RBTPG045

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
pais | Short | Identificador de país.
estado | Int | Identificador de estado.
ciudad | Int | Identificador de ciudad.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtBarrios | [sBTBarrio](#sbtbarrio) | Listado de barrios.

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
      <bts:BTConfiguracionBantotal.ObtenerBarriosColonias>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:pais>845</bts:pais>
         <bts:estado>10</bts:estado>
         <bts:ciudad>10</bts:ciudad>
      </bts:BTConfiguracionBantotal.ObtenerBarriosColonias>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerBarriosColonias=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 31d2b4c2-4885-03aa-98ba-969ccb380b6d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "pais": 845,
    "estado": 10,
    "ciudad": 10
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
      <BTConfiguracionBantotal.ObtenerBarriosColoniasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtBarrios>             
            <sBTBarrio> 
               <identificador>910</identificador> 
               <descripcion>Paso de la Arena</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>920</identificador> 
               <descripcion>Paso Molino</descripcion> 
            </sBTBarrio> 
            ...
         </sdtBarrios> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>795</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerBarriosColonias</Servicio> 
            <Fecha>2017-12-17</Fecha> 
            <Requerimiento/> 
            <Hora>17:52:51</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerBarriosColoniasResponse>
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
   "sdtBarrios": {
      "sBTBarrio": [
         {
               "descripcion": "Santa Catalina",
               "identificador": "1100"
         },
         {
               "descripcion": "Santiago Vazquez",
               "identificador": "1110"
         },
         {
               "descripcion": "Sarandi",
               "identificador": "1120"
         },
         {
               "descripcion": "Sayago",
               "identificador": "1130"
         },
         {
               "descripcion": "Toledo Chico",
               "identificador": "1140"
         },
         {
               "descripcion": "Tres Cruces",
               "identificador": "1150"
         },
         {
               "descripcion": "Tres Esquinas",
               "identificador": "1160"
         },
         {
               "descripcion": "Tres Ombúes",
               "identificador": "1170"
         },
         {
               "descripcion": "Tres Palmas",
               "identificador": "1180"
         },
         {
               "descripcion": "Trouville",
               "identificador": "1190"
         },
         {
               "descripcion": "Unión",
               "identificador": "1200"
         },
         {
               "descripcion": "Villa Colon",
               "identificador": "1210"
         },
         {
               "descripcion": "Villa del Cerro",
               "identificador": "1220"
         },
         {
               "descripcion": "Villa Dolores",
               "identificador": "1230"
         },
         {
               "descripcion": "Villa García",
               "identificador": "1240"
         },
         {
               "descripcion": "Villa Muñoz",
               "identificador": "1250"
         },
         {
               "descripcion": "Villa Prosperidad",
               "identificador": "1260"
         },
         {
               "descripcion": "Villa Teresa",
               "identificador": "1270"
         },
         {
               "descripcion": "Otro",
               "identificador": "2000"
         }
      ]
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "797",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerBarriosColonias",
      "Fecha": "2017-12-17",
      "Requerimiento": "",
      "Hora": "17:58:50",
      "Canal": "BTDIGITAL"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTBarrio  

### sBTBarrio

::: center 
Los campos del tipo de dato estructurado sBTBarrio son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripcion de barrio.
identificador | Int | Identificador de barrio.
:::
<!-- CIERRA SDT -->