---
title: Obtener Procesos Mensuales
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
::: note Método para obtener un listado de los procesos mensuales de la cadena de cierre.

**Nombre publicación:** BTCadenaCierre.ObtenerProcesosMensuales

**Programa:** RBTPG502

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtProcesosBatch | [sBTProcesoBatch](#sbtprocesobatch) | Colección de procesos de cadena de cierre.

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
      <bts:BTCadenaCierre.ObtenerProcesosMensuales>
        <bts:Btinreq>
            <bts:Device>mc</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6964034201CD285A89A23FBE</bts:Token>
         </bts:Btinreq>
      </bts:BTCadenaCierre.ObtenerProcesosMensuales>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCadenaCierre?ObtenerProcesosMensuales' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Device": "mc",
        "Usuario": "INSTALADOR",
        "Requerimiento": 1,
        "Canal": "BTDIGITAL",
        "Token": "6964034201CD285A89A23FBE"
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
      <BTCadenaCierre.ObtenerProcesosMensualesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>mc</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6964034201CD285A89A23FBE</Token>
         </Btinreq>
         <sdtProcesosBatch>
            <sBTProcesoBatch>
               <identificador>2900</identificador>
               <nombre>PCC00094</nombre>
               <descripcion>Cobro de Comision Inact. CC/CA</descripcion>
               <periodicidad>MENSUAL</periodicidad>
               <parametrosExtendidos>SI</parametrosExtendidos>
               <esReprocesable>No reprocesar nunca</esReprocesable>
            </sBTProcesoBatch>
            ...
         </sdtProcesosBatch>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>42086</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCadenaCierre.ObtenerProcesosMensuales</Servicio>
            <Fecha>2022-06-01</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>13:09:29</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCadenaCierre.ObtenerProcesosMensualesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Device": "mc",
        "Usuario": "INSTALADOR",
        "Requerimiento": 1,
        "Canal": "BTDIGITAL",
        "Token": "6964034201CD285A89A23FBE"
    },
    "sdtProcesosBatch": {
        "sBTProcesoBatch": {
            "identificador": 2900,
            "nombre": "PCC00094",
            "descripcion": "Cobro de Comision Inact. CC/CA",
            "periodicidad": "MENSUAL",
            "parametrosExtendidos": "SI",
            "esReprocesable": "No reprocesar nunca"
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 42086,
        "Estado": "OK",
        "Servicio": "BTCadenaCierre.ObtenerProcesosMensuales",
        "Fecha": "2022-06-01",
        "Requerimiento": 1,
        "Hora": "13:09:29",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTProcesoBatch  

### sBTProcesoBatch

::: center 
Los campos del tipo de dato estructurado sBTProcesoBatch son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción. 
esReprocesable | String | Descripción para reprocesamiento. 
identificador | Int | Identificador de proceso batch. 
nombre | String | Nombre del proceso. 
parametrosExtendidos | String | ¿Utiliza parámetros extendidos? (SI / NO) 
periodicidad | String | Periodicidad. 
:::
<!-- CIERRA SDT -->