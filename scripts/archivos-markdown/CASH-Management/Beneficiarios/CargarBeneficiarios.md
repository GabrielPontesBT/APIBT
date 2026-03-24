---
title: Cargar Beneficiarios
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
::: note Método para cargar un archivo con los beneficiarios de los pagos.

**Nombre publicación:** BTCASHManagement.CargarBeneficiarios

**Programa:** RBTPGC70

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
contratoId | Int | Identificador del contrato CASH del cliente.
servicio | Short | Servicio de pago CASH.
clienteUId | Long | Identificador único de cliente.
agendaId | Short | Identificador del tipo de agenda.
nomArchBeneficiarios | String | Nombre del Archivo de beneficiarios a subir.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
archivoId | Long | Identificador de archivo subido.
lineasCant | Int | Cantidad de líneas del archivo recibido.

@tab Errores

Código | Descripción
:--------- | :-----------
1030701 | El Servicio no existe.
1030704 | Id de contrato cliente desconocido.
1030713 | El contrato consultado no corresponde a la cuenta recibida.
1030770 | No se recupero información para la cuenta recibida.
1030774 | No se recibió Identificador de Cliente ni de Contrato. Por lo menos uno debe tener valor.
1030775 | No se identifico servicio para la Agenda.
1030776 | No se identifico la Agenda para la cual se realiza la Carga.
1030702 | El archivo esta vacío.
1030703 | No hay información en el archivo.
1030707 | Error al abrir el archivo.

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
      <bts:BTCASHManagement.CargarBeneficiarios>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:contratoId>8</bts:contratoId>
         <bts:servicio>240</bts:servicio>
         <bts:clienteUId></bts:clienteUId>
         <bts:agendaId></bts:agendaId>
         <bts:nomArchBeneficiarios>Agenda_8_240.xls</bts:nomArchBeneficiarios>
      </bts:BTCASHManagement.CargarBeneficiarios>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?CargarBeneficiarios=' \
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
    "contratoId": 8,
    "servicio": 240,
    "clienteUId": "",
    "agendaId": "",
    "nomArchBeneficiarios": "Agenda_8_240.xls"
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
      <BTCASHManagement.CargarBeneficiariosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <archivoId>322</archivoId>
         <lineasCant>1</lineasCant>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-20</Fecha>
            <Hora>12:20:19</Hora>
            <Numero>26771</Numero>
            <Servicio>BTCASHManagement.CargarBeneficiarios</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.CargarBeneficiariosResponse>
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
    "archivoId": 322,
    "lineasCant": 1,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.CargarBeneficiarios",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

