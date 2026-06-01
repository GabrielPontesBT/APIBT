---
title: Obtener Opción General Por Módulo
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
::: note Método para obtener los datos de una opción general de un determinado módulo.

**Nombre publicación:** BTParametrosBase.ObtenerOpcionGeneralPorModulo

**Programa:** RBTPG443

**Global/País:** Institucional
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
empresaId | Short | Código de empresa [Hidden].
modulo | Int | Identificador de módulo Bantotal.
codigo | Int | Código de la opción general de procesos.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtOpcionGeneralModulo | [sBTOpcionGeneral](#sbtopciongeneral) | Datos de la opción general de procesos.

@tab Errores

Código | Descripción
:--------- | :---------
30002 | No se recibió el módulo.
30003 | No se recibió identificador de opción general.
40001 | El módulo ingresado no es correcto.
40002 | No se encontró registro para la opción general ingresada.
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
      <bts:BTParametrosBase.ObtenerOpcionGeneralPorModulo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>47D750A861C4243EDE981344</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:modulo>21</bts:modulo>
         <bts:codigo>9</bts:codigo>
      </bts:BTParametrosBase.ObtenerOpcionGeneralPorModulo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase?ObtenerOpcionGeneralPorModulo' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": 1,
        "Usuario": "INSTALADOR",
        "Token": "47D750A861C4243EDE981344",
        "Device": "GP"
    },
    "modulo": 21,
    "codigo": 9
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
      <BTParametrosBase.ObtenerOpcionGeneralPorModuloResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>47D750A861C4243EDE981344</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtOpcionGeneralModulo>
            <identificador>9</identificador>
            <descripcion>Ajustar fecha fin de mes PCC3</descripcion>
            <valor>S</valor>
         </sdtOpcionGeneralModulo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTParametrosBase.ObtenerOpcionGeneralPorModulo</Servicio>
            <Fecha>2022-11-17</Fecha>
            <Hora>11:24:03</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>458</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTParametrosBase.ObtenerOpcionGeneralPorModuloResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": 1,
        "Usuario": "INSTALADOR",
        "Token": "47D750A861C4243EDE981344",
        "Device": "GP"
    },
    "sdtOpcionGeneralModulo": {
        "identificador": 9,
        "descripcion": "Ajustar fecha fin de mes PCC3",
        "valor": "S"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTParametrosBase.ObtenerOpcionGeneralPorModulo",
        "Fecha": "2022-11-17",
        "Hora": "11:24:03",
        "Requerimiento": 1,
        "Numero": 458,
        "Estado": "OK"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTOpcionGeneral  

### sBTOpcionGeneral

::: center 
Los campos del tipo de dato estructurado sBTOpcionGeneral son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción de la opción general de procesos. 
identificador | Int | Código de la opción general de procesos. 
valor | String | Valor de la opción general de procesos (S/N). 
:::
<!-- CIERRA SDT -->