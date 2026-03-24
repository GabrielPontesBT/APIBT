---
title: Eliminar Información Adicional
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
::: note Método para eliminar la información adicional de un préstamo.

**Nombre publicación:** BTPrestamos.EliminarInformacionAdicional

**Programa:** RBTPG469

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de prestamo.
sdtInformacionAdicional | [sBTDatoLista](#sbtdatolista) | Listado de datos.
modo | String | [Hidden: Valor fijo 'DLT' para este método].

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | Debe ingresar identificador de operación.
30002 | Debe ingresar al menos un valor de metadata.
30002 | Debe ingresar un dato en el campo atributo.
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
      <bts:BTPrestamos.EliminarInformacionAdicional>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>e2db881814CD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>2</bts:operacionUId>
         <bts:sdtInformacionAdicional>
            <bts:sBTDatoLista>
               <bts:clave>CUENTA_ST</bts:clave>
               <bts:valor></bts:valor>
            </bts:sBTDatoLista>
         </bts:sdtInformacionAdicional>
      </bts:BTPrestamos.EliminarInformacionAdicional>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?EliminarInformacionAdicional' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "INSTALADOR",
	  "Token": "e2db881814CD285A89A23FBE",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	 "operacionUId": 202,
        "sdtInformacionAdicional": {
          "sBTDatoLista": {
            "clave": "CUENTA_ST",
            "valor": ""
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
      <BTPrestamos.EliminarInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>e2db881814CD285A89A23FBE</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>589871</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.EliminarInformacionAdicional</Servicio>
            <Fecha>2023-10-11</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>08:55:31</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.EliminarInformacionAdicionalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
   "Btinreq": { 
      "Device": "1", 
      "Usuario": "INSTALADOR", 
      "Token": "e2db881814CD285A89A23FBE", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 

   "Btoutreq": { 
      "Numero": "111399", 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.EliminarInformacionAdicional", 
      "Requerimiento": "1", 
      "Fecha": "2023-10-11", 
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