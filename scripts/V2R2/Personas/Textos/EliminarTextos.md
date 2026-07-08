---
title: Eliminar Textos
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
::: note Método para eliminar los textos a una persona.

**Nombre publicación:** BTPersonas.EliminarTextos

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
modo | String | [Hidden: Valor fijo "DLT" para este método].

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de persona.
40001 | No existe texto para el código ingresado.
40002 | No se ingresó el código del texto.
40003 | No se ingresó el renglón del texto.
40005 | El texto no existe.
40007 | El texto a eliminar no existe.

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
      <bts:BTPersonas.EliminarTextos>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>FC</bts:Device>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>D2868674D8C3483A48324170</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>143</bts:personaUId>
         <bts:sdtTextos>
            <bts:SdtsBTTextoPersona>
               <bts:renglon>1</bts:renglon>
               <bts:texto></bts:texto>
               <bts:descripcion></bts:descripcion>
               <bts:codigo>11</bts:codigo>
            </bts:SdtsBTTextoPersona>
         </bts:sdtTextos>
      </bts:BTPersonas.EliminarTextos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Canal": "BTDIGITAL",
    "Usuario": "INSTALADOR",
    "Device": "FC",
    "Requerimiento": "0",
    "Token": "D2868674D8C3483A48324170"
  },
  "personaUId": "143",
  "sdtTextos": {
    "codigo": 0,
    "descripcion": "",
    "renglon": 0,
    "texto": ""
  }
}
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
      <BTPersonas.EliminarTextosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>D2868674D8C3483A48324170</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>36636</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.EliminarTextos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-11-07</Fecha>
            <Hora>15:46:54</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.EliminarTextosResponse>
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
    "Numero": "36636",
    "Estado": "OK",
    "Servicio": "BTPersonas.EliminarTextos",
    "Requerimiento": "0",
    "Fecha": "2025-11-07",
    "Hora": "15:46:54",
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