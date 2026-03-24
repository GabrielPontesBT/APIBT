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
::: note Método para realizar la liquidación de una cuenta vista.

**Nombre publicación:** BTCuentasVista.Cancelar

**Programa:** RBTPG474

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cuenta cliente.
cuentaLiquidacionUId | Long | Identificador único de la cuenta vista a cancelar.
cuentaAcreditacionUId | Long | Identificador único de la cuenta vista de acreditación/cobro de la liquidación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
movimientoUId | Long | Identificador único del movimiento realizado.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador del cliente.
30002 | La cuenta indicada no existe.
30003 | No se recibió el identificador de la cuenta.
30004 | La cuenta indicada no existe.
30005 | La cuenta a liquidar y la cuenta de acreditación no pueden ser la misma.
30007 | La cuenta indicada no pertenece al cliente.
30006 | La cuenta de cobro indicada no existe.
30008 | Las monedas de la cuenta a liquidar y la cuenta de acreditación deben ser la misma.
30009 | No se pudo obtener el identificador para el movimiento realizado.
30100 | Error en la contabilización.
40001 | Operativa fuera de horario
40003 | Producto cancelado.
40004 | No se definió transacción a ejecutar.
40006 | La Operación tiene Bloqueos; no puede ser liquidada.
40007 | El producto se encuentra sobregirado, no es posible realizar la liquidación.
40008 | La cuenta tiene Tarjeta de débito asociada; no puede ser liquidada.
40009 | El producto paga la comisión del paquete, debe modificarse la instrucción.
40010 | NO SE DEFINIÓ LA CARPETA EN LA QUE SE GUARDARÁ EL ARCHIVO.
40013 | Usuario no autorizado a consultar esta Cuenta.
40014 | Usuario no autorizado a consultar esta Cuenta.
40015 | No es posible realizar la liquidación.
40016 | El titular de la cuenta no es una persona física.
40017 | No es posible operar con una cuenta conjunta.
40018 | La operación no permite operar.
40019 | La operación de acreditación no permite operar.
40020 | No se indicó cuenta de cobro/acreditación.
40021 | La operación a liquidar no puede ser CTS.
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
      <bts:BTCuentasVista.Cancelar>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GP</bts:Device>
            <bts:Token>65386256C895CD01D7DC796E</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:clienteUId>201</bts:clienteUId>
         <bts:cuentaLiquidacionUId>310</bts:cuentaLiquidacionUId>
         <bts:cuentaAcreditacionUId>311</bts:cuentaAcreditacionUId>
      </bts:BTCuentasVista.Cancelar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \   
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?Cancelar' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"clienteUId": "201",
	"cuentaLiquidacionUId": "310",
	"cuentaAcreditacionUId": "311",
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
      <BTCuentasVista.CancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>65386256C895CD01D7DC796E</Token>
         </Btinreq>
         <movimientoUId>1032</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>12044</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.Cancelar</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-23</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>15:19:22</Hora>
         </Btoutreq>
      </BTCuentasVista.CancelarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "movimientoUId": 1032,
    "Btoutreq": {
        "Numero": 823,
        "Estado": "OK",
        "Servicio": "BTCuentasVista.Cancelar",
        "Requerimiento": "1",
        "Fecha": "2018-11-12",
        "Hora": "17:47:27",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->