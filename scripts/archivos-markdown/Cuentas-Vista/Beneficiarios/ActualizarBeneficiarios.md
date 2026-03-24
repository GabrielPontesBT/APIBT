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
::: note Método para actualizar el listado de beneficiarios de una cuenta vista. Luego de la ejecución, se eliminarán los beneficiarios previamente registrados, y se asociarán los ingresados en el listado.

**Nombre publicación:** BTCuentasVista.ActualizarBeneficiarios

**Programa:** RBTPG631

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.
sdtBeneficiarios | [sBTBeneficiario](#sbtbeneficiario) | Listado de los beneficiarios.

@tab Datos de Salida

No aplica.


@tab Errores

Código | Descripción
:--------- | :-----------
30002 | No se recibió el identificador único de la operación.
30003 | No se recuperó la operación origen para el Identificador: [Número de Identificador].
30004 | Se tiene que ingresar al menos un beneficiario.
30005 | Debe ingresar identificador único de la persona o número de documento completo.
30006 | No se recibió el porcentaje de participación para la persona ingresada.
30007 | No se recibió el identificador de parentesco para la persona ingresada.
30008 | Debe ingresar identificador único de la persona o número de documento completo, pero no ambos.
30009 | La operación ingresada no corresponde a una cuenta vista.
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
      <bts:BTCuentasVista.ActualizarBeneficiarios>
		<bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>54878527AF5867CA94C680B0</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>789</bts:operacionUId>
         <bts:sdtBeneficiarios>
            <bts:sBTBeneficiario>
               <bts:numeroDocumento></bts:numeroDocumento>
               <bts:parentesco></bts:parentesco>
               <bts:pais></bts:pais>
               <bts:tipoDocumentoId></bts:tipoDocumentoId>
               <bts:participacion>100</bts:participacion>
               <bts:tipoDocumento></bts:tipoDocumento>
               <bts:paisDocumentoId></bts:paisDocumentoId>
               <bts:personaUId>193</bts:personaUId>
               <bts:correlativo>?</bts:correlativo>
               <bts:telefono>64211</bts:telefono>
               <bts:nombre>Prueba</bts:nombre>
               <bts:parentescoId>41</bts:parentescoId>
               <bts:apellido></bts:apellido>
            </bts:sBTBeneficiario>
         </bts:sdtBeneficiarios>
      </bts:BTCuentasVista.ActualizarBeneficiarios>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ActualizarBeneficiarios=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "operacionUId": 789,
      "sdtBeneficiarios": {
         "sBTBeneficiario": {
         "numeroDocumento": "",
         "parentesco": "",
         "pais": "",
         "tipoDocumentoId": "",
         "participacion": 100,
         "tipoDocumento": "",
         "paisDocumentoId": "",
         "personaUId": 193,
         "correlativo": "?",
         "telefono": 64211,
         "nombre": "Prueba",
         "parentescoId": 41,
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
      <BTCuentasVista.ActualizarBeneficiariosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>54878527AF5867CA94C680B0</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-22</Fecha>
            <Hora>13:14:16</Hora>
            <Numero>26945</Numero>
            <Servicio>BTCuentasVista.ActualizarBeneficiarios</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ActualizarBeneficiariosResponse>
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
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCuentasVista.ActualizarBeneficiarios",
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