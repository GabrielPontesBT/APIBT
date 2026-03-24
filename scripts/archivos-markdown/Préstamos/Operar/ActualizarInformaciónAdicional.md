---
title: Actualizar Información Adicional
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
::: note Método para actualizar la información adicional de un préstamo.

**Nombre publicación:** BTPrestamos.ActualizarInformacionAdicional

**Programa:** RBTPG469

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de préstamo.
sdtInformacionAdicional | [sBTDatoLista](#sbtdatolista) | Listado de datos.
modo | String | [Hidden: Valor fijo 'UPD' para este método].

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | Debe ingresar identificador de operación.
30004 | No se recuperó la operación para el identificador recibido.
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
      <bts:BTPrestamos.ActualizarInformacionAdicional>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>D06C78346B58598896F7D739</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>202</bts:operacionUId>
         <bts:sdtInformacionAdicional>
            <bts:sBTDatoLista>
               <bts:clave>Impuesto s/Intereses en Cuota </bts:clave>
               <bts:valor>N</bts:valor>
            </bts:sBTDatoLista>
         </bts:sdtInformacionAdicional>
      </bts:BTPrestamos.ActualizarInformacionAdicional>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ActualizarInformacionAdicional' \
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
	 "operacionUId": 202,
        "sdtInformacionAdicional": {
          "sBTDatoLista": {
            "clave": "Impuesto s/Intereses en Cuota",
            "valor": "N"
          }
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
      <BTPrestamos.ActualizarInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>D06C78346B58598896F7D739</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10762</Numero>
            <Servicio>BTPrestamos.ActualizarInformacionAdicional</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-16</Fecha>
            <Hora>16:28:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ActualizarInformacionAdicionalResponse>
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

   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPrestamos.ActualizarInformacionAdicional",
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