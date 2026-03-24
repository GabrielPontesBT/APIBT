---
title: Activar
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
::: note Método para activar una cuenta vista.

**Nombre publicación:** BTCuentasVista.Activar

**Programa:** RBTPG442

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.
nuevoEstado | Short | Nuevo estado [Hidden: Valor fijo '0'].
fechaVencimientoEstado | Date | Fecha de vencimiento del estado.
observaciones | String | Observaciones.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de operación.
30002 | No se recuperó la operación para el Identificador: [Número de Identificador].
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
      <bts:BTCuentasVista.Activar>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>GP</bts:Device>
            <bts:Token>2772EB28927EAC58EF950EBA</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
         </bts:Btinreq>
         <bts:operacionUId>1215</bts:operacionUId>
         <bts:fechaFencimientoEstado></bts:fechaFencimientoEstado>
         <bts:observaciones>Cuenta Activa</bts:observaciones>
      </bts:BTCuentasVista.Activar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?Activar' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
          "Requerimiento": 1,
          "Device": "GP",
          "Token": "2772EB28927EAC58EF950EBA",
          "Usuario": "INSTALADOR",
          "Canal": "BTDIGITAL"
        },
        "operacionUId": 1215,
        "fechaFencimientoEstado": "",
        "observaciones": "Cuenta Activa"
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
      <BTCuentasVista.ActivarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Token>2772EB28927EAC58EF950EBA</Token>
            <Canal>BTDIGITAL</Canal>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Canal>BTDIGITAL</Canal>
            <Fecha>2022-12-01</Fecha>
            <Servicio>BTCuentasVista.CambiarEstado</Servicio>
            <Hora>14:44:52</Hora>
            <Numero>225689</Numero>
            <Requerimiento>1</Requerimiento>
         </Btoutreq>
      </BTCuentasVista.ActivarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
          "Token": "2772EB28927EAC58EF950EBA",
          "Canal": "BTDIGITAL",
          "Device": "GP",
          "Usuario": "INSTALADOR",
          "Requerimiento": 1
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Estado": "OK",
          "Canal": "BTDIGITAL",
          "Fecha": "2022-12-01",
          "Servicio": "BTCuentasVista.CambiarEstado",
          "Hora": "14:44:52",
          "Numero": 225689,
          "Requerimiento": 1
        }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->