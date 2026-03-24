---
title: Actualizar Beneficiarios
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
::: note Método para actualizar el listado de beneficiarios de un depósito a plazo. Luego de la ejecución, se eliminarán los beneficiarios previamente registrados, y se asociarán los ingresados en el listado.

**Nombre publicación:** BTDepositosAPlazo.ActualizarBeneficiarios

**Programa:** RBTPG622

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.
sdtBeneficiarios | [sBTBeneficiario](#sbtbeneficiario) | Listado de beneficiarios del depósito a plazo.
modo | String | [Hidden: Valor fijo 'UPD' para este método].

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30002 | No se recibió el identificador único de la operación.
30003 | No se recupero la operación para el identificador [Número de Identificador].
30004 | Se tiene que ingresar al menos un beneficiario.
30005 | Debe ingresar identificador único de la persona o número de documento completo, pero no ambos.
30006 | No se recibió el porcentaje de participación para la persona ingresada.
30007 | No se recibió el identificador de parentesco para la persona ingresada.
40001 | Debe ingresar País del Documento.
40002 | El País del Documento no existe.
40003 | El identificador de parentesco [Número de Identificador] no es correcto.
40004 | El Tipo de Documento no existe.
40005 | Debe ingresar Nro de Documento.
40006 | La sumatoria de porcentajes de beneficiarios supera el 100%.
40007 | El porcentaje de participación acumulado difiere del 100%.

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
      <bts:BTDepositosAPlazo.ActualizarBeneficiarios>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9060352790A5422FE377DB47</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>791</bts:operacionUId>
         <bts:sdtBeneficiarios>
            <bts:sBTBeneficiario>
               <bts:numeroDocumento></bts:numeroDocumento>
               <bts:parentesco></bts:parentesco>
               <bts:pais></bts:pais>
               <bts:tipoDocumentoId></bts:tipoDocumentoId>
               <bts:participacion>100</bts:participacion>
               <bts:tipoDocumento></bts:tipoDocumento>
               <bts:paisDocumentoId></bts:paisDocumentoId>
               <bts:personaUId>229</bts:personaUId>
               <bts:correlativo></bts:correlativo>
               <bts:telefono></bts:telefono>
               <bts:nombre></bts:nombre>
               <bts:parentescoId>43</bts:parentescoId>
               <bts:apellido></bts:apellido>
            </bts:sBTBeneficiario>
         </bts:sdtBeneficiarios>
      </bts:BTDepositosAPlazo.ActualizarBeneficiarios>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ActualizarBeneficiarios=' \
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
      "operacionUId": 791,
      "sdtBeneficiarios": {
         "sBTBeneficiario": {
         "numeroDocumento": "",
         "parentesco": "",
         "pais": "",
         "tipoDocumentoId": "",
         "participacion": 100,
         "tipoDocumento": "",
         "paisDocumentoId": "",
         "personaUId": 229,
         "correlativo": "",
         "telefono": "",
         "nombre": "",
         "parentescoId": 43,
         "apellido": ""
         }
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
      <BTDepositosAPlazo.ActualizarBeneficiariosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>9060352790A5422FE377DB47</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-10</Fecha>
            <Hora>17:06:36</Hora>
            <Numero>24976</Numero>
            <Servicio>BTDepositosAPlazo.ActualizarBeneficiarios</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ActualizarBeneficiariosResponse>
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
      "Servicio": "BTDepositosAPlazo.ActualizarBeneficiarios",
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
numeroDocumento | String | Numero de documento del beneficiario. 
parentesco | String | Parentesco del beneficiario.
pais | String | País.
tipoDocumentoId | Short | Identificador del tipo de documento.
participacion | Double | Porcentaje de participación del beneficiario.
tipoDocumento | String | Tipo de documento.
paisDocumentoId | Short | Identificador del país del documento.
personaUId | Long | Identificador único de la persona.
correlativo | Short | Correlativo.
telefono | String | Teléfono.
nombre | String | Nombre.
parentescoId | Short | Identificador del parentesco.
apellido | String | Apellido.

:::
<!-- CIERRA SDT -->