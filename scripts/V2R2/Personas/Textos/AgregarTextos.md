---
title: Agregar Textos
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
::: note Método para agregar textos a una persona.

**Nombre publicación:** BTPersonas.AgregarTextos

**Programa:** RBTPG593

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de la persona.
sdtTextos | [sBTTextoPersona](#sBTTextoPersona) | Listado de textos de la persona.
modo | String | [Hidden: Valor fijo "INS" para este método].

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de persona.
40001 | No existe texto para el código ingresado.
40002 | No se ingresó el código del texto.
40003 | No se ingresó el renglón del texto.
40004 | No se ingresó el texto.
40005 | El texto ya existe.
40009 | El código y renglón ya tiene texto ingresado.

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
      <bts:BTPersonas.AgregarTextos>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>FC</bts:Device>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>D2868674D8C3483A48324170</bts:Token>
         </bts:Btinreq>
         <bts:PersonaUId>143</bts:PersonaUId>
         <bts:sbtTextos>
            <bts:SdtsBTTextoPersona>
               <bts:renglon>2</bts:renglon>
               <bts:texto>ALEX</bts:texto>
               <bts:descripcion>NOMBRE DEL BENEFICIARIO:</bts:descripcion>
               <bts:codigo>11</bts:codigo>
            </bts:SdtsBTTextoPersona>
            <bts:SdtsBTTextoPersona>
               <bts:renglon>2</bts:renglon>
               <bts:texto>Rodriguez</bts:texto>
               <bts:descripcion>APELLIDO DE CONYUGE:</bts:descripcion>
               <bts:codigo>491</bts:codigo>
            </bts:SdtsBTTextoPersona>

         </bts:sbtTextos>
      </bts:BTPersonas.AgregarTextos>
   </soapenv:Body>
</soapenv:Envelope>

```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarTextos' \
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
  "PersonaUId": "143",
  "sbtTextos": [
    {
      "renglon": "2",
      "texto": "ALEX",
      "descripcion": "NOMBRE DEL BENEFICIARIO:",
      "codigo": "11"
    },
    {
      "renglon": "2",
      "texto": "Rodriguez",
      "descripcion": "APELLIDO DE CONYUGE:",
      "codigo": "491"
    }
  ]
}

'
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
      <BTPersonas.AgregarTextosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>D2868674D8C3483A48324170</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>36635</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.AgregarTextos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-11-07</Fecha>
            <Hora>15:30:00</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.AgregarTextosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
  "Btinreq": {
    "Device": "FC",
    "Usuario": "INSTALADOR",
    "Requerimiento": "0",
    "Canal": "BTDIGITAL",
    "Token": "D2868674D8C3483A48324170"
  },
  "Erroresnegocio": "",
  "Btoutreq": {
    "Numero": "36635",
    "Estado": "OK",
    "Servicio": "BTPersonas.AgregarTextos",
    "Requerimiento": "0",
    "Fecha": "2025-11-07",
    "Hora": "15:30:00",
    "Canal": "BTDIGITAL"
  }
}
'
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