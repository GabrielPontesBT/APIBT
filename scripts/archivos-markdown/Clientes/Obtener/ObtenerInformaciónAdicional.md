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
::: note Método para obtener la información adicional de una cuenta cliente.

**Nombre publicación:** BTClientes.ObtenerInformacionAdicional

**Programa:** RBTPG520

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtInformacionAdicional | [sBTDatoLista](#sbtdatolista) | Información Adicional de datos.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de cliente.
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
      <bts:BTClientes.ObtenerInformacionAdicional>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>976EB9CBE6D99B71A5E627F1</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
      </bts:BTClientes.ObtenerInformacionAdicional>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerInformacionAdicional' \
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
	"clienteUId": "101",
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
      <BTClientes.ObtenerInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>976EB9CBE6D99B71A5E627F1</Token>
         </Btinreq>
         <sdtInformacionAdicional>
            <sBTDatoLista>
               <valor>695</valor>
               <clave>Código Pais</clave>
            </sBTDatoLista>
            <sBTDatoLista>
               <valor>2</valor>
               <clave>Integrantes</clave>
            </sBTDatoLista>
         </sdtInformacionAdicional>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10787</Numero>
            <Servicio>BTClientes.ObtenerInformacionAdicional</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-10</Fecha>
            <Hora>15:48:08</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerInformacionAdicionalResponse>
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
   "sdtInformacionAdicional": {
      "sBTDatoLista": [
      {
         "clave": "Integrantes",
         "valor": "2"
      },
      {
          "clave": "Código Pais",
          "valor": "695"
      }
      ]
   },
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTClientes.ObtenerInformacionAdicional",
      "Requerimiento": "1",
      "Fecha": "2023-05-09",
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