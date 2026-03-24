---
title: Obtener Titulares de Teléfono
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
::: note Método para obtener los titulares de un teléfono.

**Nombre publicación:** BTPersonas.ObtenerTitularesDelTelefono

**Programa:** RBTPG552

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
numeroTelefono | String | Número de teléfono de la persona.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtTitulares | [sBTTitularTelefono](#sbttitulartelefono) | Listado de titulares del teléfono.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el número de telefono.
40001 | No existe número de celular.
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
      <bts:BTPersonas.ObtenerTitularesDelTelefono>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9436BF7CB5B5BB404CC6E5A7</bts:Token>
         </bts:Btinreq>
         <bts:numeroTelefono>099099890</bts:numeroTelefono>
      </bts:BTPersonas.ObtenerTitularesDelTelefono>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerTitularesDelTelefono' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "numeroTelefono": 99099890
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
      <BTPersonas.ObtenerTitularesDelTelefonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9436BF7CB5B5BB404CC6E5A7</Token>
         </Btinreq>
         <sdtTitulares>
            <sBTTitularTelefono>
               <datosAdicionales></datosAdicionales>
               <personaUId>227</personaUId>
               <nombre>RIVERA PERALTA FLORENCIA</nombre>
            </sBTTitularTelefono>
         </sdtTitulares>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20054</Numero>
            <Servicio>BTPersonas.ObtenerTitularesDelTelefono</Servicio>
            <Estado>OK</Estado>
            <Fecha>2024-04-23</Fecha>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:00:04</Hora>
         </Btoutreq>
      </BTPersonas.ObtenerTitularesDelTelefonoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "sdtTitulares": {
          "sBTTitularTelefono": {
            "datosAdicionales": "",
            "personaUId": 227,
            "nombre": "RIVERA PERALTA FLORENCIA"
        }
    },
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerTitularesDelTelefono",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->

::: details sBTTitularTelefono  

### sBTTitularTelefono

::: center 
Los campos del tipo de dato estructurado sBTTitularTelefono son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
datosAdicionales | [sBTDatoAdicional](#sbtdatoadicional) | Listado de datos adicionales.
nombre | String | Nombre de la persona.
personaUId | Long | Identificador único de la persona.

### sBTDatoAdicional

::: center 
Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
detalle | String | Detalle.
:::
<!-- CIERRA SDT -->