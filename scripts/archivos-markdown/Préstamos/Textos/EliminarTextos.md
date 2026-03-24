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
::: note Método para eliminar los textos de un préstamo.

**Nombre publicación:** BTPrestamos.EliminarTextos

**Programa:** RBTPG562

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.
sdtTextos | [sBTTextoOperacion](#sbttextooperacion) | Listado de textos de la operación.
modo | String | [Hidden: Valor fijo "DLT" para este método].

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la operación.
30011 | No se recupero la operación para el identificador recibido.
40001 | No existe texto para el código [Número de identificador].
40002 | No se ingresó el código del texto.
40003 | No se ingresó el reglón del texto.
40004 | No se ingresó el texto.

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
      <bts:BTPrestamos.EliminarTextos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>0E93EA2F1B3F9ED212A0449F</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>49</bts:operacionUId>
         <bts:sdtTextos>
            <bts:sBTTextoOperacion>
               <texto>Prueba1nueva</texto>
               <renglon>3</renglon>
               <descripcion>NOMBRE DE CURSO</descripcion>
               <codigo>8</codigo>
            </bts:sBTTextoOperacion>
            <bts:sBTTextoOperacion>
               <texto>Prueba2nueva</texto>
               <renglon>4</renglon>
               <descripcion>NOMBRE DE CURSO</descripcion>
               <codigo>8</codigo>
            </bts:sBTTextoOperacion>
         </bts:sdtTextos>
      </bts:BTPrestamos.EliminarTextos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?EliminarTextos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
      "operacionUId": 49,
      "sdtTextos": {
         "sBTTextoOperacion": [
         {
            "texto": "Prueba1nueva",
            "renglon": 3,
            "descripcion": "NOMBRE DE CURSO",
            "codigo": 8
         },
         {
            "texto": "Prueba2nueva",
            "renglon": 4,
            "descripcion": "NOMBRE DE CURSO",
            "codigo": 8
         }
         ]
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
      <BTPrestamos.EliminarTextosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>0E93EA2F1B3F9ED212A0449F</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-09</Fecha>
            <Hora>11:14:07</Hora>
            <Numero>24967</Numero>
            <Servicio>BTPrestamos.EliminarTextos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.EliminarTextosResponse>
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
    
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTPrestamos.EliminarTextos",
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
::: details sBTTextoOperacion  

### sBTTextoOperacion

::: center 
Los campos del tipo de dato estructurado sBTTextoOperacion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Short | Código.
descripcion | String | Descripción.
renglon | Short | Renglón. 
texto | String | Texto.

:::
<!-- CIERRA SDT -->