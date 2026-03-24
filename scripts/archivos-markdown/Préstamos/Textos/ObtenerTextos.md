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
::: note Método para obtener los textos de un préstamo.

**Nombre publicación:** BTPrestamos.ObtenerTextos

**Programa:** RBTPG561

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtTextos | [sBTTextoOperacion](#sbttextooperacion) | Listado de textos de la operación.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la operación.
30011 | No se recupero la operación para el identificador recibido.

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
      <bts:BTPrestamos.ObtenerTextos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>0E93EA2F1B3F9ED212A0449F</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>49</bts:operacionUId>
      </bts:BTPrestamos.ObtenerTextos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerTextos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
      "operacionUId": 49
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
      <BTPrestamos.ObtenerTextosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>0E93EA2F1B3F9ED212A0449F</Token>
         </Btinreq>
         <sdtTextos>
            <sBTTextoOperacion>
               <renglon>1</renglon>
               <texto>Copia Comision Cuota</texto>
               <descripcion>NOMBRE DE CURSO</descripcion>
               <codigo>8</codigo>
            </sBTTextoOperacion>
            <sBTTextoOperacion>
               <renglon>2</renglon>
               <texto>Copia Comision Operación</texto>
               <descripcion>NOMBRE DE CURSO</descripcion>
               <codigo>8</codigo>
            </sBTTextoOperacion>
            <sBTTextoOperacion>
               <renglon>20</renglon>
               <texto>Copia Seguros</texto>
               <descripcion>NOMBRE DE CURSO</descripcion>
               <codigo>8</codigo>
            </sBTTextoOperacion>
            <sBTTextoOperacion>
               <renglon>1</renglon>
               <texto>34</texto>
               <descripcion/>
               <codigo>120</codigo>
            </sBTTextoOperacion>
         </sdtTextos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-09</Fecha>
            <Hora>11:34:17</Hora>
            <Numero>24968</Numero>
            <Servicio>BTPrestamos.ObtenerTextos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerTextosResponse>
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
    "sdtTextos": {
         "sBTTextoOperacion": [
         {
            "renglon": 1,
            "texto": "Copia Comision Cuota",
            "descripcion": "NOMBRE DE CURSO",
            "codigo": 8
         },
         {
            "renglon": 2,
            "texto": "Copia Comision Operación",
            "descripcion": "NOMBRE DE CURSO",
            "codigo": 8
         },
         {
            "renglon": 20,
            "texto": "Copia Seguros",
            "descripcion": "NOMBRE DE CURSO",
            "codigo": 8
         },
         {
            "renglon": 1,
            "texto": 34,
            "descripcion": "",
            "codigo": 120
         }
         ]
      },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTPrestamos.ObtenerTextos",
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