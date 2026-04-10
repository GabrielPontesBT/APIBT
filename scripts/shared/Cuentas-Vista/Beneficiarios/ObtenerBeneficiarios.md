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
::: note Método para obtener los beneficiarios de una cuenta vista.

**Nombre publicación:** BTCuentasVista.ObtenerBeneficiarios

**Programa:** RBTPG630

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
sdtBeneficiarios | [sBTBeneficiario](#sbtbeneficiario) | Listado de los beneficiarios.

@tab Errores

Código | Descripción
:--------- | :---------
30002 | No se recibió el identificador único de la operación.
30003 | No se recuperó la operación origen para el Identificador: [Número de Identificador].
30004 | La operación ingresada no corresponde a una cuenta vista.
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
      <bts:BTCuentasVista.ObtenerBeneficiarios>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>54878527AF5867CA94C680B0</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>789</bts:operacionUId>
      </bts:BTCuentasVista.ObtenerBeneficiarios>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerBeneficiarios' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "INSTALADOR",
        "Token": "54878527AF5867CA94C680B0"
    },
    "operacionUId": 789
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
      <BTCuentasVista.ObtenerBeneficiariosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>54878527AF5867CA94C680B0</Token>
         </Btinreq>
         <sdtBeneficiarios>
            <sBTBeneficiario>
               <numeroDocumento>13348789</numeroDocumento>
               <parentesco>Padre</parentesco>
               <pais>URUGUAY</pais>
               <tipoDocumentoId>1</tipoDocumentoId>
               <participacion>100.0</participacion>
               <tipoDocumento>Cédula Identidad</tipoDocumento>
               <paisDocumentoId>845</paisDocumentoId>
               <personaUId>193</personaUId>
               <correlativo>1</correlativo>
               <telefono>64211</telefono>
               <nombre>Prueba</nombre>
               <parentescoId>41</parentescoId>
               <apellido/>
            </sBTBeneficiario>
         </sdtBeneficiarios>
         <Erroresnegocio/>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-22</Fecha>
            <Hora>13:14:24</Hora>
            <Numero>26946</Numero>
            <Servicio>BTCuentasVista.ObtenerBeneficiarios</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ObtenerBeneficiariosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Usuario": "INSTALADOR",
        "Device": "GZ",
        "Requerimiento": 0,
        "Token": "54878527AF5867CA94C680B0"
    },
    "sdtBeneficiarios": {
        "sBTBeneficiario": {
            "numeroDocumento": 13348789,
            "parentesco": "Padre",
            "pais": "URUGUAY",
            "tipoDocumentoId": 1,
            "participacion": 100.0,
            "tipoDocumento": "Cédula Identidad",
            "paisDocumentoId": 845,
            "personaUId": 193,
            "correlativo": 1,
            "telefono": 64211,
            "nombre": "Prueba",
            "parentescoId": 41,
            "apellido": ""
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Estado": "OK",
        "Fecha": "2024-11-22",
        "Hora": "13:14:24",
        "Numero": 26946,
        "Servicio": "BTCuentasVista.ObtenerBeneficiarios",
        "Requerimiento": 0,
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
:--------- | :--------- | :--------- 
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