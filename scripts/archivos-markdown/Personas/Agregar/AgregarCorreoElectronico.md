---
title: Agregar Correo Electrónico
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
::: note Método para agregar un correo electrónico a una persona.

**Nombre publicación:** BTPersonas.AgregarCorreoElectronico

**Programa:** RBTPG722

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de la persona.
sdtCorreoElectronico | [sBTCorreoElectronico](#sbtcorreoelectronico) | Datos del correo electrónico.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se ingresó el usuario del correo electrónico.
30002 | Caracteres inválidos en el dominio.
30003 | No se ingresó dominio.
30004 | Dominio inválido.
30005 | No se recibió el identificador único de persona.
30006 | El correo electrónico ya existe (Correlativo [Número del correlativo]).
40003 | No existe registro para el identificador único.
60001 | El registro ya existe.
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
      <bts:BTPersonas.AgregarCorreoElectronico>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>41</bts:personaUId>
         <bts:sdtCorreoElectronico>           
            <bts:correoElectronico>AABB@GMAIL.COM</bts:correoElectronico>
            <bts:correlativo>1</bts:correlativo>
         </bts:sdtCorreoElectronico>
      </bts:BTPersonas.AgregarCorreoElectronico>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?AgregarCorreoElectronico' \
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
    "personaUId": 227,
    "sdtCorreoElectronico": {
        "correoElectronico": "AABB@GMAIL.COM",
        "correlativo": 1
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
      <BTPersonas.AgregarCorreoElectronicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9436BF7CB5B5BB404CC6E5A7</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20275</Numero>
            <Servicio>BTPersonas.AgregarCorreoElectronico</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>0</Requerimiento>
            <Fecha>2024-05-06</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>15:39:36</Hora>
         </Btoutreq>
      </BTPersonas.AgregarCorreoElectronicoResponse>
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
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPersonas.AgregarCorreoElectronico",
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
::: details sBTCorreoElectronico  

### sBTCorreoElectronico

::: center 
Los campos del tipo de dato estructurado sBTCorreoElectronico son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
correlativo | Int | Correlativo de correo electrónico.
correoElectronico | String | Correo electrónico.
:::
<!-- CIERRA SDT -->