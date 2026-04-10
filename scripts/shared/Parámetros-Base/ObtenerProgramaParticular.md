---
title: Obtener Programa Particular
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
::: note Método para obtener el programa particular a ejecutar según el programa estándar ingresado.

**Nombre publicación:** BTParametrosBase.ObtenerProgramaParticular

**Programa:** RBTPG444

**Global/País:** Institucional
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
empresaId | Short | Código de empresa [Hidden].
programaStandard | String | Nombre de programa Standard.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtProgramaParticular | [sBTProgramaParticular](#sbtprogramaparticular) | Datos del programa particular.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió identificador de empresa.
30002 | No se recibió el programa standard.
40001 | No existe programa particular para el programa standard ingresado.
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
      <bts:BTParametrosBase.ObtenerProgramaParticular>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GP</bts:Device>
            <bts:Token>7d3fb9540aCD285A89A23FBE</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:programaStandard>BLOCKING1</bts:programaStandard>
      </bts:BTParametrosBase.ObtenerProgramaParticular>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase?ObtenerProgramaParticular' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Usuario": "INSTALADOR",
        "Canal": "BTDIGITAL",
        "Device": "GP",
        "Token": "7d3fb9540aCD285A89A23FBE",
        "Requerimiento": 1
    },
    "programaStandard": "BLOCKING1"
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
      <BTParametrosBase.ObtenerProgramaParticularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>7d3fb9540aCD285A89A23FBE</Token>
         </Btinreq>
         <sdtProgramaParticular>
            <descripcion>PRUEBA BLOQUEO</descripcion>
            <programaParticular>10834</programaParticular>
            <programaStandard>BLOCKING1</programaStandard>
            <valorCaracteres>11</valorCaracteres>
            <valorNumerico>25</valorNumerico>
         </sdtProgramaParticular>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1895</Numero>
            <Servicio>BTParametrosBase.ObtenerProgramaParticular</Servicio>
            <Estado>OK</Estado>
            <Fecha>2022-11-22</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>09:25:20</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTParametrosBase.ObtenerProgramaParticularResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "INSTALADOR",
        "Requerimiento": 1,
        "Canal": "BTDIGITAL",
        "Token": "7d3fb9540aCD285A89A23FBE"
    },
    "sdtProgramaParticular": {
        "descripcion": "PRUEBA BLOQUEO",
        "programaParticular": 10834,
        "programaStandard": "BLOCKING1",
        "valorCaracteres": 11,
        "valorNumerico": 25
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1895,
        "Servicio": "BTParametrosBase.ObtenerProgramaParticular",
        "Estado": "OK",
        "Fecha": "2022-11-22",
        "Requerimiento": 1,
        "Hora": "09:25:20",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTProgramaParticular  

### sBTProgramaParticular

::: center 
Los campos del tipo de dato estructurado sBTProgramaParticular son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción de la opción general de procesos. 
programaParticular | String | Nombre de programa particular. 
programaStandard | String | Nombre de programa standard. 
valorCaracteres | String | Valor caracteres. 
valorNumerico | Int | Valor numérico. 
:::
<!-- CIERRA SDT -->