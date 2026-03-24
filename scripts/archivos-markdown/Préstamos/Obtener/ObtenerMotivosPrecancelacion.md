---
title: Obtener Motivos de Precancelación
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
::: note Método para obtener los motivos de precancelación.

**Nombre publicación:** BTPrestamos.ObtenerMotivosPrecancelacion

**Programa:** RBTPG571

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
productoUId | Long | Identificador único del producto.
tipoPrecancelacion | String | Tipo de precancelación. Se pueden enviar los siguientes [valores](#valores1).

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtMotivosPrecancelacion | [sBTValorCampo](#sbtvalorcampo) | Listado de motivos de precancelación.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único del producto.
30002 | El identificador único del producto es incorrecto.
30010 | No se ingresó el tipo de precancelación.
30011 | El valor del campo tipoPrecancelacion tiene que ser P o T.
40001 | No se encontró el registro.
::: 
<!-- CIERRA TABLA DE DATOS -->

<!-- ABRE VALORES -->
::: details Valores Tipo de Precancelación

### Valores1

::: center 

Este campo tiene dos opciones:

Valor | Comentarios
:--------- | :-----------
P | Parcial.
T | Total.
:::

<!-- CIERRA VALORES -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:prueba.ObtenerMotivosPreCancelacion>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>A1F224CC3030A4926AB6945F</Token>
         </Btinreq>
         <bts:productoUId>120</bts:productoUId>
         <bts:tipoPrecancelacion>T</bts:tipoPrecancelacion>
      </bts:prueba.ObtenerMotivosPreCancelacion>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerMotivosPreCancelacion=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "GZ",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
      "productoUId": 167,
      "tipoPrecancelacion": 5,
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
      <prueba.ObtenerMotivosPreCancelacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>A1F224CC3030A4926AB6945F</Token>
         </Btinreq>
         <sdtMotivosPrecancelacion>
            <sBTCampo>
               <identificador>1</identificador>
               <descripcion>Por Solicitud del cliente</descripcion>
            </sBTCampo>
         </sdtMotivosPrecancelacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2025-04-02</Fecha>
            <Hora>15:56:52</Hora>
            <Numero>64542</Numero>
            <Servicio>prueba.ObtenerMotivosPreCancelacion</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </prueba.ObtenerMotivosPreCancelacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "sdtMotivosPrecancelacion": {
         "sBTCampo": {
         "identificador": 1,
         "descripcion": "Por Solicitud del cliente"
         }
      },
    "Erroresnegocio":,
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTPrestamos.ObtenerMotivosPreCancelacion",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTValorCampo  

### sBTValorCampo

::: center 
Los campos del tipo de dato estructurado sBTValorCampo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción del campo.
identificador | Long | Identificador del campo.
:::
<!-- CIERRA SDT -->