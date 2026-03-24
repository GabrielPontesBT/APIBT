---
title: Contratar
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
::: note Método para contratar una nueva cuenta bolsillo.

**Nombre publicación:** BTCuentasBolsillo.Contratar

**Programa:** RBTPG609

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
cuentaPrincipalUId | Long | Identificador único de la operación de cuenta principal.
productoUId | Long | Identificador único del producto.
nombreSubCuenta | String | Nombre de la sub cuenta.
metaAhorro | Double | Monto de la meta de ahorro.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
operacionUId | Long | Identificador único de la operación.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de la Cuenta principal.
30002 | No se recuperó la clave de operación para el Identificador: [Número de identificador].
30003 | No se recibió el identificador único de producto.
30004 | No existe registro para el identificador único de producto.
30005 | El producto ingresado no corresponde a una cuenta bolsillo.
30011 | Cuenta principal no es un producto admitido.
30012 | Debe indicar nombre de subcuenta.
30013 | Debe indicar meta de ahorro.
30019 | Superó cantidad máxima de cuentas bolsillos.
30020 | No existe cuenta de acreditación asociada.
30021 | Cuenta principal no permite operar.
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
      <bts:BTCuentasBolsillo.Contratar>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>3E7C0C38BBBB8ECFE4C31B86</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>7</bts:Requerimiento>
         </bts:Btinreq>
         <bts:cuentaPrincipalUId>1137</bts:cuentaPrincipalUId>
         <bts:productoUId>511</bts:productoUId>
         <bts:nombreSubCuenta>Contratacion</bts:nombreSubCuenta>
         <bts:metaAhorro>10000</bts:metaAhorro>
      </bts:BTCuentasBolsillo.Contratar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasBolsillo?Contratar' \
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
    "cuentaPrincipalUId": 1137,
    "productoUId": 511,
    "nombreSubCuenta": "Contratacion",
    "metaAhorro": 10000
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
      <BTCuentasBolsillo.ContratarResponse xmlns=http://uy.com.dlya.bantotal/BTSOA/>
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>7</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>3E7C0C38BBBB8ECFE4C31B86</Token>
         </Btinreq>
         <operacionUId>19170</operacionUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>228493</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasBolsillo.Contratar</Servicio>
            <Requerimiento>7</Requerimiento>
            <Fecha>2023-11-01</Fecha>
            <Hora>10:23:59</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasBolsillo.ContratarResponse>
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
    "operacionUId": 19170,
    "Btoutreq": {
        "Numero": "111399",
        "Estado": "OK",
        "Servicio": "BTCuentasBolsillo.Contratar",
        "Requerimiento": "1",
        "Fecha": "2023-05-10",
        "Canal": "BTDIGITAL",
        "Hora": "15:10:52"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->