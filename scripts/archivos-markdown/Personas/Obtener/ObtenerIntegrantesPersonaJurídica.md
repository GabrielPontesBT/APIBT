---
title: Obtener Integrantes Persona Jurídica
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
::: note Método para obtener un listado de los integrantes de una persona jurídica.

**Nombre publicación:** BTPersonas.ObtenerIntegrantesPersonaJuridica

**Programa:** RBTPG385

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtIntegrantesJuridicos | [sBTIntegranteJuridico](#sbtintegrantejuridico) | Listado de integrantes jurídicos.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de persona.
40001 | La persona jurídica no existe.
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
      <bts:BTPersonas.ObtenerIntegrantesPersonaJuridica>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>3214436424A8B5C60A82434C</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>10017</bts:personaUId>
      </bts:BTPersonas.ObtenerIntegrantesPersonaJuridica>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerIntegrantesPersonaJuridica' \
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
    "personaUId": 10017,
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
      <BTPersonas.ObtenerIntegrantesPersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>3214436424A8B5C60A82434C</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtIntegrantesJuridicos>
            <SdtsBTIntegranteJuridico>
               <paisId>845</paisId>
               <pais>URUGUAY</pais>
               <tipoDocumentoId>1</tipoDocumentoId>
               <tipoDocumento>Cédula Identidad</tipoDocumento>
               <nroDocumento>27928980</nroDocumento>
               <nombre>PRANKA VISENTIN ERIKA</nombre>
               <vinculoId>1</vinculoId>
               <vinculo>Presidente</vinculo>
               <participacion>0.0000</participacion>
               <personaUId>1</personaUId>
            </SdtsBTIntegranteJuridico>
         </sdtIntegrantesJuridicos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ObtenerIntegrantesPersonaJuridica</Servicio>
            <Fecha>2022-05-31</Fecha>
            <Hora>16:29:14</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8862</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ObtenerIntegrantesPersonaJuridicaResponse>
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
    "sdtIntegrantesJuridicos": {
        "SdtsBTIntegranteJuridico": {
        "paisId": "845",
        "pais": "URUGUAY",
        "tipoDocumentoId": "1",
        "tipoDocumento": "Cédula Identidad",
        "nroDocumento": "27928980",
        "nombre": "PRANKA VISENTIN ERIKA",
        "vinculoId": "1",
        "vinculo": "Presidente",
        "participacion": "0.0000",
        "personaUId": "1"
        }
    },
    "Erroresnegocio": {
    },
    "Btoutreq": {
        "Numero": "839",
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerIntegrantesPersonaJuridica",
        "Requerimiento": "1",
        "Fecha": "2022-05-12",
        "Hora": "15:35:54",
        "Canal": "BTDIGITAL"
    }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTIntegranteJuridico  

### sBTIntegranteJuridico

::: center 
Los campos del tipo de dato estructurado sBTIntegranteJuridico son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
nombre | String | Nombre de la persona. 
nroDocumento | String | Número de documento. 
pais | String | Nombre del país. 
paisId | Short | Identificador del país. 
participacion | Double | Porcentaje de participación del integrante. 
personaUId | Long | Identificador único de persona. 
tipoDocumento | String | Nombre del tipo de documento. 
tipoDocumentoId | Short | Identificador del tipo de documento. 
vinculo | String | Descripción del vínculo. 
vinculoId | Short | Identificador de vínculo. 
:::
<!-- CIERRA SDT -->