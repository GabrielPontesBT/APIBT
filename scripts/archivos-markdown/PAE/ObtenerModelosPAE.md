---
title: Obtener Modelos PAE
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
::: note Método para obtener los modelos PAE.

**Nombre publicación:** BTPAE.ObtenerModelosPAE

**Programa:** RBTPGP51

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
sdtModelosPAE | [sBTModeloPAE](#sbtmodelopae) | Listado de modelos PAE.

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
      <bts:BTPAE.ObtenerModelosPAE>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>12106639094A8B5C60A82434</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
      </bts:BTPAE.ObtenerModelosPAE>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPAE?ObtenerModelosPAE' \
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
      <BTPAE.ObtenerModelosPAEResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>12106639094A8B5C60A82434</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtModelosPAE>
            <SdtsBTModeloPAE>
               <modeloID>1</modeloID>
               <descripcion>Politicas - Solicitud</descripcion>
               <tipoModelo>P-Politicas</tipoModelo>
            </SdtsBTModeloPAE>
         </sdtModelosPAE>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPAE.ObtenerModelosPAE</Servicio>
            <Fecha>2022-06-01</Fecha>
            <Hora>15:38:59</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8881</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPAE.ObtenerModelosPAEResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "c2cfd09eff4A8B5C60A82434"
    },
    "sdtModelosPAE": {
        "SdtsBTModeloPAE": [
        { 
            "modeloID": "1", 
            "descripcion": "Politicas - Solicitud", 
            "tipoModelo": "P-Politicas" 
        }, 
        ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPAE.ObtenerModelosPAE", 
        "Fecha": "2022-06-01", 
        "Hora": "15:38:59", 
        "Requerimiento": "1", 
        "Numero": "8881", 
        "Estado": "OK" 
    } 
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTModeloPAE  

### sBTModeloPAE

::: center 
Los campos del tipo de dato estructurado sBTModeloPAE son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción de modelo. 
modeloId | Short | Código de modelo. 
tipoModelo | String | Tipo de modelo. 
:::
<!-- CIERRA SDT -->