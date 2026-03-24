---
title: Obtener Detalle de Proceso
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
::: note Método para obtener el detalle de un proceso de la cadena de cierre.

**Nombre publicación:** BTCadenaCierre.ObtenerDetalleProceso

**Programa:** RBTPG503

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
identificador | Int | Identificador de proceso batch.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
procesosBatch | [sBTProcesoBatch](#sbtprocesobatch) | Datos de proceso de cadena de cierre.

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
      <bts:BTCadenaCierre.ObtenerDetalleProceso>
         <bts:Btinreq>
            <bts:Device>mc</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6964034201CD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:identificador>93</bts:identificador>
      </bts:BTCadenaCierre.ObtenerDetalleProceso>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCadenaCierre?ObtenerDetalleProceso' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "bc8b678bc44A8B5C60A82434"
    }, 
    "identificador":"93",
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
      <BTCadenaCierre.ObtenerDetalleProcesoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>mc</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6964034201CD285A89A23FBE</Token>
         </Btinreq>
         <sBTProcesoBatch>
            <identificador>93</identificador>
            <nombre>POCDE002</nombre>
            <descripcion>Busca Indicios OCODEí</descripcion>
            <periodicidad>DIARIA</periodicidad>
            <parametrosExtendidos>SI</parametrosExtendidos>
            <esReprocesable>No reprocesar nunca</esReprocesable>
         </sBTProcesoBatch>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>42156</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCadenaCierre.ObtenerDetalleProceso</Servicio>
            <Fecha>2022-06-01</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>13:44:21</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCadenaCierre.ObtenerDetalleProcesoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
    "Btinreq": { 
      "Device": "mc", 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "1", 
      "Canal": "BTDIGITAL", 
      "Token": "6964034201CD285A89A23FBE" 
    }, 
    "sBTProcesoBatch": { 
      "identificador": "93", 
      "nombre": "POCDE002", 
      "descripcion": "Busca Indicios OCODEí", 
      "periodicidad": "DIARIA", 
      "parametrosExtendidos": "SI", 
      "esReprocesable": "No reprocesar nunca" 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Numero": "42156", 
      "Estado": "OK", 
      "Servicio": "BTCadenaCierre.ObtenerDetalleProceso", 
      "Fecha": "2022-06-01", 
      "Requerimiento": "1", 
      "Hora": "13:44:21", 
      "Canal": "BTDIGITAL" 
    } 
  }, 
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
:--------- | :----------- | :----------- 
descripcion | String | Descripción. 
esReprocesable | String | Descripción para reprocesamiento. 
identificador | Int | Identificador de proceso batch. 
nombre | String | Nombre del proceso. 
parametrosExtendidos | String | ¿Utiliza parámetros extendidos? (SI / NO) 
periodicidad | String | Periodicidad. 
:::
<!-- CIERRA SDT -->