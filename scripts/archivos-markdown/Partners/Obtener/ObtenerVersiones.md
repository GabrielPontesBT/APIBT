---
title: Obtener Versiones
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
::: note Método para retornar las versiones del modelo.

**Nombre publicación:** BTPartners.ObtenerVersiones

**Programa:** RBTPNV05

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPartner | [sBTPartnerInReq](#sbtpartnerinreq) | Datos del usuario.
modeloUId | Long | Identificador del modelo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtVersiones | [sBTVersion](#sbtversion) | Listado de versiones.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió Partner ni canal.
30002 | El Partner no se encuentra habilitado.
30003 | No existe Partner con ese identificador.
30012 | No se recibió punto de venta.
30013 | No se recibió vendedor.
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
      <bts:BTPartners.ObtenerVersiones>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>DF1F942C6EC60E8B95BBEA69</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>2</bts:puntoVentaUId>
            <bts:vendedorUId>0</bts:vendedorUId>
            <bts:partnerUId>1</bts:partnerUId>
         </bts:sdtPartner>
         <bts:modeloUId>1</bts:modeloUId>
      </bts:BTPartners.ObtenerVersiones>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ObtenerVersiones' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "3JPL6DC33CD84655A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
    "sdtPartner": {
        "puntoVentaUId": 2,
        "vendedorUId": 3,
        "partnerUId": 1
    },
    "modeloUId": 1
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
      <BTPartners.ObtenerVersionesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <sdtVersiones>
            <sBTVersion>
               <nombreVersion>3.0 TFSI (SQ5)</nombreVersion>
               <anio>2023</anio>
               <puertas>5</puertas>
               <combustibleId>1</combustibleId>
               <transmisionId>1</transmisionId>
               <versionUId>1</versionUId>
               <condicion/>
               <precioUS>50000.00</precioUS>
               <precioMN>2000000.00</precioMN>
               <condicionId>1</condicionId>
               <combustible>Nafta</combustible>
               <transmision>Automática</transmision>
               <modeloUId>1</modeloUId>
               <puertasId>4</puertasId>
               <marcaUId>1</marcaUId>
            </sBTVersion>
         </sdtVersiones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16874</Numero>
            <Servicio>BTPartners.ObtenerVersiones</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-27</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>17:48:46</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ObtenerVersionesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtVersiones": {
        "sBTVersion": {
        "nombreVersion": "3.0 TFSI (SQ5)",
        "anio": 2023,
        "puertas": 5,
        "combustibleId": 1,
        "transmisionId": 1,
        "versionUId": 1,
        "condicion": "",
        "precioUS": 50000,
        "precioMN": 2000000,
        "condicionId": 1,
        "combustible": "Nafta",
        "transmision": "Automática",
        "modeloUId": 1,
        "puertasId": 4,
        "marcaUId": 1
        }
    },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPartners.ObtenerVersiones",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "17:08:56"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->

::: details sBTPartnerInReq  

### sBTPartnerInReq

::: center 
Los campos del tipo de dato estructurado sBTPartnerInReq son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
partnerUId | Int | Identificador del Partner.
puntoVentaUId | Int | Identificador del punto de venta.
vendedorUId | Int | Identificador del vendedor.
:::

::: details sBTVersion  

### sBTVersion

::: center 
Los campos del tipo de dato estructurado sBTVersion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
anio | Short | Año.
combustibleId | Short | Identificador del combustible.
condicion | String | Condición.
condicionId | Short | Identificador de la condición.
nombreVersion | String | Nombre de versión.
precioMN | Duble | Precio moneda nacional.
precioUS | Double | Precio moneda USA.
puertas | String | Puertas.
transmisionId | Short | Identificador de la trasmisión.
versionUId | Long | Identificador de la versión.
:::
<!-- CIERRA SDT -->