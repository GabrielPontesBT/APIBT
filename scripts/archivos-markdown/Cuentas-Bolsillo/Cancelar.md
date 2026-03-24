---
title: Cancelar
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
::: note Método para realizar la liquidación y cierre de una cuenta bolsillo.

**Nombre publicación:** BTCuentasBolsillo.Cancelar

**Programa:** RBTPG613

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único del cliente.
bolsilloUId | Long | Identificador único del bolsillo.
operacionCobroUId | Long | Identificador único de la operación de cobro.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
movimientoUId | Long | Identificador único del movimiento.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador del cliente.
30002 | La cuenta indicada no existe.
30003 | No se recibió el identificador de la cuenta.
30004 | La cuenta indicada no existe.
30005 | La cuenta a liquidar y la cuenta de acreditación no pueden ser la misma.
30006 | La cuenta de cobro indicada no existe.
30007 | La cuenta indicada no pertenece al cliente.
30008 | Las monedas de la cuenta a liquidar y la cuenta de acreditación deben ser la misma.
30009 | No se pudo obtener el identificador para el movimiento realizado.
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
      <bts:BTCuentasBolsillo.Cancelar>
         <bts:Btinreq>
           <bts:Device>1</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>3E7C0C38BBBB8ECFE4C31B86</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>7</bts:Requerimiento>
         </bts:Btinreq>
         <bts:cuentaUId>322</bts:cuentaUId>
         <bts:bolsilloUId>18830</bts:bolsilloUId>
         <bts:operacionCobroUId>1133</bts:operacionCobroUId>
      </bts:BTCuentasBolsillo.Cancelar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasBolsillo?Cancelar' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cFC33CD93505A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
    "cuentaUId": 322,
    "bolsilloUId": 18830,
    "operacionCobroUId": 1133,
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
      <BTCuentasBolsillo.Cancelar xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>7</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>3E7C0C38BBBB8ECFE4C31B86</Token>
         </Btinreq>
         <movimientoUId>1843</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>228487</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasBolsillo.Cancelar</Servicio>
            <Requerimiento>7</Requerimiento>
            <Fecha>2023-11-01</Fecha>
            <Hora>10:03:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasBolsillo.Cancelar>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Device": "1",
        "Usuario": "MINSTALADOR",
        "Token": "16c1cFC33CD93505A5382434",
        "Canal": "BTDIGITAL",
        "Requerimiento": "1"
    },
    "movimientoUId":1843,
    "Btoutreq": {
        "Numero": "111399",
        "Estado": "OK",
        "Servicio": "BTCuentasBolsillo.Cancelar",
        "Requerimiento": "1",
        "Fecha": "2023-05-10",
        "Canal": "BTDIGITAL",
        "Hora": "15:10:52"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->