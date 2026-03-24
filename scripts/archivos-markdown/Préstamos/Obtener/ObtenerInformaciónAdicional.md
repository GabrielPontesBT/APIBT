---
title: Obtener Información Adicional
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
::: note Método para obtener la información adicional de un préstamo.

**Nombre publicación:** BTPrestamos.ObtenerInformacionAdicional

**Programa:** RBTPG468

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtInformacionAdicional | [sBTDatoLista](#sbtdatolista) | Información Adicional de datos.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | Debe ingresar identificador de operación.
30013 | No existe registro para el identificador único.
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
      <bts:BTPrestamos.ObtenerInformacionAdicional>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>D6F899CBE6D99B71A5E627F1</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>61</bts:operacionUId>
      </bts:BTPrestamos.ObtenerInformacionAdicional>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerInformacionAdicional' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cFC33CD93505A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"operacionUId": "101",
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
      <BTPrestamos.ObtenerInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>976EB9CBE6D99B71A5E627F1</Token>
         </Btinreq>
         <sdtInformacionAdicional>
            <sBTDatoLista>
		   <clave>Impuesto s/Intereses en Cuota</clave>
               <valor>S</valor>
            </sBTDatoLista>
            <sBTDatoLista>
		   <clave>Renovar a 30 dias</clave>
               <valor>N</valor>
            </sBTDatoLista>
         </sdtInformacionAdicional>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11261</Numero>
            <Servicio>BTPrestamos.ObtenerInformacionAdicional</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-16</Fecha>
            <Hora>15:48:08</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerInformacionAdicionalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "27c9bFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtInformacionAdicional": {
      "sBTDatoLista": [
      {
         "clave": "Impuesto s/Intereses en Cuota",
         "valor": "S"
      },
      {
          "clave": "Renovar a 30 dias",
          "valor": "N"
      }
      ]
   },
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPrestamos.ObtenerInformacionAdicional",
      "Requerimiento": "1",
      "Fecha": "2023-05-16",
      "Canal": "BTDIGITAL",
      "Hora": "16:01:52"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDatoLista  

### sBTDatoLista

::: center 
Los campos del tipo de dato estructurado sBTDatoLista son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clave | String | Identificador de información adicional. 
valor | String | Valor de información adicional.
:::
<!-- CIERRA SDT -->