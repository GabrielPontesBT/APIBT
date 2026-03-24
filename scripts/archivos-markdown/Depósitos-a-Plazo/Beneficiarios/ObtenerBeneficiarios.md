---
title: Obtener Beneficiarios
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
::: note Método para obtener los beneficiarios de un depósito a plazo.

**Nombre publicación:** BTDepositosAPlazo.ObtenerBeneficiarios

**Programa:** RBTPG623

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
sdtBeneficiarios | [sBTBeneficiario](#sbtbeneficiario) | Listado de beneficiarios del depósito a plazo.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la operación.
30003 | No se recupero la operación para el identificador [Número de Identificador].
40001 | No se encontraron beneficiaros para el identificador ingresado.

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
      <bts:BTDepositosAPlazo.ObtenerBeneficiarios>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9060352790A5422FE377DB47</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>790</bts:operacionUId>
      </bts:BTDepositosAPlazo.ObtenerBeneficiarios>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerBeneficiarios=' \
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
      "operacionUId": 790
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
      <BTDepositosAPlazo.ObtenerBeneficiariosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>9060352790A5422FE377DB47</Token>
         </Btinreq>
         <sdtBeneficiarios>
            <sBTBeneficiario>
               <numeroDocumento>12344321</numeroDocumento>
               <parentesco>Presidente</parentesco>
               <pais>COSTA RICA</pais>
               <tipoDocumentoId>1</tipoDocumentoId>
               <participacion>80.0</participacion>
               <tipoDocumento>Cédula Identidad</tipoDocumento>
               <paisDocumentoId>196</paisDocumentoId>
               <personaUId>227</personaUId>
               <correlativo>1</correlativo>
               <telefono/>
               <nombre/>
               <parentescoId>1</parentescoId>
               <apellido/>
            </sBTBeneficiario>
            <sBTBeneficiario>
               <numeroDocumento>45676541</numeroDocumento>
               <parentesco>Hijo</parentesco>
               <pais>COSTA RICA</pais>
               <tipoDocumentoId>1</tipoDocumentoId>
               <participacion>20.0</participacion>
               <tipoDocumento>Cédula Identidad</tipoDocumento>
               <paisDocumentoId>196</paisDocumentoId>
               <personaUId>228</personaUId>
               <correlativo>2</correlativo>
               <telefono/>
               <nombre/>
               <parentescoId>43</parentescoId>
               <apellido/>
            </sBTBeneficiario>
         </sdtBeneficiarios>
         <Erroresnegocio/>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-10</Fecha>
            <Hora>16:02:17</Hora>
            <Numero>24971</Numero>
            <Servicio>BTDepositosAPlazo.ObtenerBeneficiarios</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerBeneficiariosResponse>
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
    "sdtBeneficiarios": {
         "sBTBeneficiario": [
         {
            "numeroDocumento": 12344321,
            "parentesco": "Presidente",
            "pais": "COSTA RICA",
            "tipoDocumentoId": 1,
            "participacion": 80,
            "tipoDocumento": "Cédula Identidad",
            "paisDocumentoId": 196,
            "personaUId": 227,
            "correlativo": 1,
            "telefono": "",
            "nombre": "",
            "parentescoId": 1,
            "apellido": ""
         },
         {
            "numeroDocumento": 45676541,
            "parentesco": "Hijo",
            "pais": "COSTA RICA",
            "tipoDocumentoId": 1,
            "participacion": 20,
            "tipoDocumento": "Cédula Identidad",
            "paisDocumentoId": 196,
            "personaUId": 228,
            "correlativo": 2,
            "telefono": "",
            "nombre": "",
            "parentescoId": 43,
            "apellido": ""
         }
         ]
      },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTDepositosAPlazo.ObtenerBeneficiarios",
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
::: details sBTBeneficiario  

### sBTBeneficiario

::: center 
Los campos del tipo de dato estructurado sBTBeneficiario son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
apellido | String | Apellido.
correlativo | Short | Correlativo.
nombre | String | Nombre.
numeroDocumento | String | Numero de documento del beneficiario. 
pais | String | País.
paisDocumentoId | Short | Identificador del país del documento.
parentesco | String | Parentesco del beneficiario.
parentescoId | Short | Identificador del parentesco.
participacion | Double | Porcentaje de participación del beneficiario.
personaUId | Long | Identificador único de la persona.
telefono | String | Teléfono.
tipoDocumento | String | Tipo de documento.
tipoDocumentoId | Short | Identificador del tipo de documento.

:::
<!-- CIERRA SDT -->