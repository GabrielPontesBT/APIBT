---
title: Traspasar Entre Cuentas Propias
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
::: note Método para realizar un traspaso entre cuentas propias.

**Nombre publicación:** BTCuentasVista.TraspasarEntreCuentasPropias

**Programa:** RBTPG031

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

1) Definir la transacción de traspaso, teniendo en cuenta que:

   - La cuenta vista origen se almacena en el preformato 1.

   - La cuenta vista destino en el preformato 2.

   - El importe a transferir se almacena en el preformato 1.

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T):

   - Se debe indicar los ordinales donde se encuentra definida la cuenta origen y destino.

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->


<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
sdtTraspaso | [sBTTraspaso](#sbttraspaso) | Datos del traspaso.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtResultadoTraspaso | [sBTResultadoTraspaso](#sbtresultadotraspaso) | Datos resultado del traspaso.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador único de operación de origen.
30002 | No se recibió el identificador único de operación de destino.
30003 | Debe ingresar importe.
30004 | No se recuperó la operación origen para el Identificador: [Número de identificador]
30005 | No se recuperó la operación destino para el Identificador: [Número de identificador]
30006 | No se recibió el identificador de cliente.
30007 | No se recuperó la cuenta para el Identificador de cliente: [Número de identificador]
30008 | La cuenta destino no pertenece al cliente [Número de cuenta].
30009 | La operación origen no pertenece al cliente.
51005 | La moneda del traspaso debe coincidir con la moneda de la operación origen
51008 | Error de configuración: No se definió transacción a ejecutar.
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
      <bts:BTCuentasVista.TraspasarEntreCuentasPropias>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>40</bts:clienteUId>
         <bts:sdtTraspaso>
            <bts:operacionUIdOrigen>281</bts:operacionUIdOrigen>
            <bts:importe>500</bts:importe>
            <bts:operacionUIdDestino>282</bts:operacionUIdDestino>
            <bts:monedaId></bts:monedaId>
            <bts:concepto>Traspaso</bts:concepto>
         </bts:sdtTraspaso>
      </bts:BTCuentasVista.TraspasarEntreCuentasPropias>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?TraspasarEntreCuentasPropias=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: fde8ae30-8752-c0fe-cf77-f8761a5ddcff' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "clienteUId": 40,
	"sdtTraspaso": {
		"operacionUIdOrigen": 281,
		"operacionUIdDestino": 282,
		"importe": 500,
		"concepto": "Traspaso"
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
      <BTCuentasVista.TraspasarEntreCuentasPropiasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtResultadoTraspaso>
            <operacionUIdOrigen>281</operacionUIdOrigen>
            <idMovimiento>00100001000500075000000003720180706</idMovimiento>
            <operacionUIdDestino>282</operacionUIdDestino>
            <saldoOperacionOrigen>7432900.28</saldoOperacionOrigen>
            <movimientoUId>141</movimientoUId>
         </sdtResultadoTraspaso>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>864</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.TraspasarEntreCuentasPropias</Servicio>
            <Requerimiento/>
            <Fecha>2017-12-18</Fecha>
            <Hora>17:07:19</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.TraspasarEntreCuentasPropiasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtResultadoTraspaso": {
        "operacionUIdOrigen": 281,
        "idMovimiento": "00100001000500075000000003820180809",
        "operacionUIdDestino": 282,
        "saldoOperacionOrigen": 7432400.28,
        "movimientoUId": 142
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 868,
        "Estado": "OK",
        "Servicio": "BTCuentasVista.TraspasarEntreCuentasPropias",
        "Requerimiento": 1,
        "Fecha": "2017-12-18",
        "Hora": "17:15:28",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTraspaso

### sBTTraspaso

::: center
Los campos del tipo de dato estructurado sBTTraspaso son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
concepto | String | Concepto del traspaso.
importe | Double | Importe del movimiento.
monedaId | Short | Identificador de moneda.
operacionUIdDestino | Long | Identificador único de operación destino del traspaso.
operacionUIdOrigen | long | Identificador único de operación de origen del traspaso.
:::

::: details sBTResultadoTraspaso

### sBTResultadoTraspaso

::: center
Los campos del tipo de dato estructurado sBTResultadoTraspaso son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
idMovimiento | String | Identificador de movimiento string.
movimientoUId | Long | Identificador único de movimiento.
operacionUIdDestino | Long | Identificador único de operación destino del traspaso.
operacionUIdOrigen | Long | Identificador único de operación de origen del traspaso.
saldoOperacionOrigen | Double | Saldo actual de operación de origen.
:::
<!-- CIERRA SDT -->