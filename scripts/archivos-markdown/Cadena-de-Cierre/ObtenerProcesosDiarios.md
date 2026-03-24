---
title: Obtener Procesos Diarios
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
::: note Método para obtener un listado de los procesos diarios de la cadena de cierre.

**Nombre publicación:** BTCadenaCierre.ObtenerProcesosDiarios

**Programa:** RBTPG501

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtProcesosBatch | [sBTProcesoBatch](#sbtprocesobatch) | Listado de procesos diarios de cadena de cierre.

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
      <bts:BTCadenaCierre.ObtenerProcesosDiarios>
        <bts:Btinreq>
            <bts:Device>mc</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6964034201CD285A89A23FBE</bts:Token>
         </bts:Btinreq>
      </bts:BTCadenaCierre.ObtenerProcesosDiarios>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCadenaCierre?ProcesosDiarios' \
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
      <BTCadenaCierre.ObtenerProcesosDiariosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>mc</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6964034201CD285A89A23FBE</Token>
         </Btinreq>
         <sdtProcesosBatch>
            <SdtsBTProcesoBatch>
               <identificador>1</identificador>
               <nombre>PCAPD08</nombre>
               <descripcion>Paralelizador Cadena de cierre</descripcion>
               <periodicidad>DIARIA</periodicidad>
               <parametrosExtendidos>SI</parametrosExtendidos>
               <esReprocesable>No reprocesar nunca</esReprocesable>
            </SdtsBTProcesoBatch>
            <SdtsBTProcesoBatch>
               <identificador>10</identificador>
               <nombre>PCADENA</nombre>
               <descripcion>MENSAJE INICIO2</descripcion>
               <periodicidad>DIARIA</periodicidad>
               <parametrosExtendidos>NO</parametrosExtendidos>
               <esReprocesable>No reprocesar nunca</esReprocesable>
            </SdtsBTProcesoBatch>
            <SdtsBTProcesoBatch>
               <identificador>20</identificador>
               <nombre>PCADENA</nombre>
               <descripcion>PCADENA</descripcion>
               <periodicidad>DIARIA</periodicidad>
               <parametrosExtendidos>NO</parametrosExtendidos>
               <esReprocesable>No reprocesar nunca</esReprocesable>
            </SdtsBTProcesoBatch>
            <SdtsBTProcesoBatch>
               <identificador>69</identificador>
               <nombre>PCLE252</nombre>
               <descripcion>Generación de C. Gerencia</descripcion>
               <periodicidad>DIARIA</periodicidad>
               <parametrosExtendidos>SI</parametrosExtendidos>
               <esReprocesable>Reprocesar siempre</esReprocesable>
            </SdtsBTProcesoBatch>
            <SdtsBTProcesoBatch>
               <identificador>80</identificador>
               <nombre>PCF0030</nombre>
               <descripcion>Cobro de Cajas de Seguridad</descripcion>
               <periodicidad>DIARIA</periodicidad>
               <parametrosExtendidos>SI</parametrosExtendidos>
               <esReprocesable>No reprocesar nunca</esReprocesable>
            </SdtsBTProcesoBatch>
            <SdtsBTProcesoBatch>
               <identificador>90</identificador>
               <nombre>PCF0040</nombre>
               <descripcion>Devengado de Comisiones Adel.</descripcion>
               <periodicidad>DIARIA</periodicidad>
               <parametrosExtendidos>SI</parametrosExtendidos>
               <esReprocesable>Reprocesar siempre</esReprocesable>
            </SdtsBTProcesoBatch>
            <SdtsBTProcesoBatch>
               <identificador>92</identificador>
               <nombre>POCDE000</nombre>
               <descripcion>Depura FOCDE02 y FOCDE03</descripcion>
               <periodicidad>DIARIA</periodicidad>
               <parametrosExtendidos>SI</parametrosExtendidos>
               <esReprocesable>No reprocesar nunca</esReprocesable>
            </SdtsBTProcesoBatch>
            <SdtsBTProcesoBatch>
               <identificador>93</identificador>
               <nombre>POCDE002</nombre>
               <descripcion>Busca Indicios OCODEí</descripcion>
               <periodicidad>DIARIA</periodicidad>
               <parametrosExtendidos>SI</parametrosExtendidos>
               <esReprocesable>No reprocesar nunca</esReprocesable>
            </SdtsBTProcesoBatch>
            <SdtsBTProcesoBatch>
               <identificador>97</identificador>
               <nombre>PB098541</nombre>
               <descripcion>Acredita recaudaciones Cash</descripcion>
               <periodicidad>DIARIA</periodicidad>
               <parametrosExtendidos>SI</parametrosExtendidos>
               <esReprocesable>No reprocesar nunca</esReprocesable>
            </SdtsBTProcesoBatch>
         </sdtProcesosBatch>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>42085</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCadenaCierre.ObtenerProcesosDiarios</Servicio>
            <Fecha>2022-06-01</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:38:02</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCadenaCierre.ObtenerProcesosDiariosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
"Btinreq": {
      "Device": "mc",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6964034201CD285A89A23FBE"
    },
    "sdtProcesosBatch": {
      "SdtsBTProcesoBatch": [
        {
          "identificador": "1",
          "nombre": "PCAPD08",
          "descripcion": "Paralelizador Cadena de cierre",
          "periodicidad": "DIARIA",
          "parametrosExtendidos": "SI",
          "esReprocesable": "No reprocesar nunca"
        },
        {
          "identificador": "10",
          "nombre": "PCADENA",
          "descripcion": "MENSAJE INICIO2",
          "periodicidad": "DIARIA",
          "parametrosExtendidos": "NO",
          "esReprocesable": "No reprocesar nunca"
        },
        {
          "identificador": "20",
          "nombre": "PCADENA",
          "descripcion": "PCADENA",
          "periodicidad": "DIARIA",
          "parametrosExtendidos": "NO",
          "esReprocesable": "No reprocesar nunca"
        },
        {
          "identificador": "69",
          "nombre": "PCLE252",
          "descripcion": "Generación de C. Gerencia",
          "periodicidad": "DIARIA",
          "parametrosExtendidos": "SI",
          "esReprocesable": "Reprocesar siempre"
        },
        {
          "identificador": "80",
          "nombre": "PCF0030",
          "descripcion": "Cobro de Cajas de Seguridad",
          "periodicidad": "DIARIA",
          "parametrosExtendidos": "SI",
          "esReprocesable": "No reprocesar nunca"
        },
        {
          "identificador": "90",
          "nombre": "PCF0040",
          "descripcion": "Devengado de Comisiones Adel.",
          "periodicidad": "DIARIA",
          "parametrosExtendidos": "SI",
          "esReprocesable": "Reprocesar siempre"
        },
        {
          "identificador": "92",
          "nombre": "POCDE000",
          "descripcion": "Depura FOCDE02 y FOCDE03",
          "periodicidad": "DIARIA",
          "parametrosExtendidos": "SI",
          "esReprocesable": "No reprocesar nunca"
        },
        {
          "identificador": "93",
          "nombre": "POCDE002",
          "descripcion": "Busca Indicios OCODEí",
          "periodicidad": "DIARIA",
          "parametrosExtendidos": "SI",
          "esReprocesable": "No reprocesar nunca"
        },
        {
          "identificador": "97",
          "nombre": "PB098541",
          "descripcion": "Acredita recaudaciones Cash",
          "periodicidad": "DIARIA",
          "parametrosExtendidos": "SI",
          "esReprocesable": "No reprocesar nunca"
        }
      ]
    },
    "Erroresnegocio": {
    },
    "Btoutreq": {
      "Numero": "42085",
      "Estado": "OK",
      "Servicio": "BTCadenaCierre.ObtenerProcesosDiarios",
      "Fecha": "2022-06-01",
      "Requerimiento": "1",
      "Hora": "12:38:02",
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