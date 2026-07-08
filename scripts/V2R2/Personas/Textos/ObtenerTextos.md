---
title: Obtener Textos
icon: /assets/image/nuevo.svg
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
::: note Método para obtener los textos a una persona.

**Nombre publicación:** BTPersonas.ObtenerTextos

**Programa:** RBTPG594

**Global/País:** Global :::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de la persona.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtTextos | [sBTTextoPersona](#sbttextoPersona) | Listado de textos de la persona.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de persona.
40008 | El texto no existe.


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
      <bts:BTPersonas.ObtenerTextos>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>FC</bts:Device>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>D2868674D8C3483A48324170</bts:Token>

         </bts:Btinreq>
         <bts:personaUId>143</bts:personaUId>
      </bts:BTPersonas.ObtenerTextos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerTextos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
  "Btinreq": {
    "Canal": "BTDIGITAL",
    "Usuario": "INSTALADOR",
    "Device": "FC",
    "Requerimiento": "0",
    "Token": "D2868674D8C3483A48324170"
  },
  "personaUId": "143"
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
      <BTPersonas.ObtenerTextosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>D2868674D8C3483A48324170</Token>
         </Btinreq>
         <sdtTextos>
            <SdtsBTTextoPersona>
               <renglon>2</renglon>
               <texto>ALEX</texto>
               <descripcion>NOMBRE DEL BENEFICIARIO:</descripcion>
               <codigo>11</codigo>
            </SdtsBTTextoPersona>
            <SdtsBTTextoPersona>
               <renglon>1</renglon>
               <texto>Rodriguez</texto>
               <descripcion>APELLIDOS DEL CÓNYUGE</descripcion>
               <codigo>491</codigo>
            </SdtsBTTextoPersona>
            <SdtsBTTextoPersona>
               <renglon>2</renglon>
               <texto>Rodriguez</texto>
               <descripcion>APELLIDOS DEL CÓNYUGE</descripcion>
               <codigo>491</codigo>
            </SdtsBTTextoPersona>
         </sdtTextos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>36637</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerTextos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-11-07</Fecha>
            <Hora>15:51:35</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerTextosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "FC",
    "Usuario": "INSTALADOR",
    "Requerimiento": "0",
    "Canal": "BTDIGITAL",
    "Token": "D2868674D8C3483A48324170"
  },
  "sdtTextos": {
    "codigo": 0,
    "descripcion": "",
    "renglon": 0,
    "texto": ""
  },
  "Erroresnegocio": "",
  "Btoutreq": {
    "Numero": "36637",
    "Estado": "OK",
    "Servicio": "BTPersonas.ObtenerTextos",
    "Requerimiento": "0",
    "Fecha": "2025-11-07",
    "Hora": "15:51:35",
    "Canal": "BTDIGITAL"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTextoPersona  

### sBTTextoPersona

::: center 
Los campos del tipo de dato estructurado sBTTextoPersona son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
codigo | Short | Código.
descripcion | String | Descripción.
renglon | Short | Renglón.
texto | String | Texto.

:::
<!-- CIERRA SDT -->