---
title: Traspasar con Tipo de Cambio Especial
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
::: note Método para realizar un traspaso entre cuentas de diferente moneda ingresando un tipo de cambio especial.

**Nombre publicación:** BTCuentasVista.TraspasarConTipoDeCambioEspecial 

**Programa:** RBTPG569

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend
 
1) Definir la transacción de compra-venta, teniendo en cuenta que:

	- La cuenta vista origen se almacena en el preformato 1.
	
	- La cuenta vista destino en el preformato 2.
	
	- El importe a transferir y el tipo de cambio se almacenan en el preformato 1.
	
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
sdtTraspaso | [sBTTraspasoMoneda](#sbttraspasomoneda) | Datos de traspaso.
tipoCambioEspecial | Short | Identificador del tipo de cambio especial a aplicar.
modoCambio | String | Modo del tipo de cambio a aplicar ('CC': Compra cierre, 'VC': Venta cierre).

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtResultadoTraspaso | [sBTResultadoTraspaso](#sbtresultadotraspaso) | Resultado del traspaso.

@tab Errores

Código | Descripción
:--------- | :---------
31001 | No se recibió el identificador de cliente.
31002 | No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].
31003 | No se recibió el identificador único de operación de origen.
31004 | No se recibió el identificador único de operación de destino.
31011 | La operación origen y operación destino no pueden ser iguales.
31007 | No se recuperó la operación origen para el Identificador: [Número de identificador]. 
31008 | La operación origen no pertenece al cliente.
31009 | No se recuperó la operación destino para el Identificador: [Número de identificador]. 
31005 | Debe ingresar importe.
31012 | Debe ingresar importe a debitar o a acreditar, pero no ambos.
30001 | Moneda Origen y Moneda Destino no pueden ser la misma.
30002 | Debe ingresar tipo de cotización.
30003 | El tipo de cotización ingresado no es correcto.
30100 | Error en la contabilización.

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
        <bts:BTCuentasVista.TraspasarConTipoDeCambioEspecial>
            <bts:Btinreq>
                <bts:Device>AV</bts:Device>
                <bts:Usuario>MINSTALADOR</bts:Usuario>
                <bts:Requerimiento></bts:Requerimiento>
                <bts:Canal>BTDIGITAL</bts:Canal>
                <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
            </bts:Btinreq>
            <bts:clienteUId>21</bts:clienteUId>
            <bts:sdtTraspaso>
                <bts:operacionUIdOrigen>281</bts:operacionUIdOrigen>
                <bts:operacionUIdDestino>282</bts:operacionUIdDestino>
                <bts:monedaId></bts:monedaId>
                <bts:concepto>Traspaso</bts:concepto>
                <bts:importeDebito>5000</bts:importeDebito>
                <bts:importeCredito>500</bts:importeCredito>
            </bts:sdtTraspaso>
			<tipoCambioEspecial>1</tipoCambioEspecial>
			<modoCambio>CC</modoCambio>
        </bts:BTCuentasVista.TraspasarConTipoDeCambioEspecial>
    </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?TraspasarConTipoDeCambioEspecial \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
    "Btinreq": {
        "Requerimiento": 1,
        "Device": "GP",
        "Token": "b4ae55b35c4A8B5C60A82434",
        "Usuario": "MINSTALADOR",
        "Canal": "BTDIGITAL"
    },
    "clienteUId": 21,
    "sdtTraspaso":
    {
        "operacionUIdOrigen": 281,
        "importeDebito": 5000,
        "importeCredito": 500,
        "operacionUIdDestino": 282,
        "monedaId": "",
        "concepto": "Traspaso"
    },
	"tipoCambioEspecial": 1,
	"modoCambio": "CC"
}'

```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAPENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAPENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Body>
        <BTCuentasVista.TraspasarConTipoDeCambioEspecialResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
            <Btinreq>
                <Device>AV</Device>
                <Usuario>MINSTALADOR</Usuario>
                <Requerimiento/>
                <Canal>BTDIGITAL</Canal>
                <Token>268b6d23eb4A8B5C60A82434</Token>
            </Btinreq>
            <sdtResultadoTraspaso>
                <operacionUIdOrigen>281</operacionUIdOrigen>
                <idMovimiento>0010000100050007003720180706</idMovimiento>
                <operacionUIdDestino>282</operacionUIdDestino>
                <saldoOperacionOrigen>7432900.28</saldoOperacionOrigen>
                <movimientoUId>141</movimientoUId>
            </sdtResultadoTraspaso>
            <Erroresnegocio></Erroresnegocio>
            <Btoutreq>
                <Numero>864</Numero>
                <Estado>OK</Estado>
                <Servicio>BTCuentasVista.TraspasarConTipoDeCambioEspecial</Servicio>
                <Requerimiento/>
                <Fecha>2017-12-18</Fecha>
                <Hora>17:07:19</Hora>
                <Canal>BTDIGITAL</Canal>
            </Btoutreq>
        </BTCuentasVista.TraspasarConTipoDeCambioEspecialResponse>
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
    "sdtResultadoTraspaso":
    {
        "operacionUIdOrigen": 281,
        "idMovimiento": "0010000100050007003720180706",
        "operacionUIdDestino": 282,
        "saldoOperacionOrigen": 7432900.28,
        "movimientoUId": 141
    },
    "Btoutreq": {
        "Numero": 864,
        "Estado": "OK",
        "Servicio": "BTCuentasVista.TraspasarConTipoDeCambioEspecial",
        "Requerimiento": 1,
        "Fecha": "2019-07-22",
        "Canal": "BTDIGITAL",
        "Hora": "16:00:37"
    }
}'

```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTraspasoMoneda  

### sBTTraspasoMoneda

::: center 
Los campos del tipo de dato estructurado sBTTraspasoMoneda son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
concepto | String | Concepto del Traspaso
importeCredito | Double | Importe a acreditar.
importeDebito | Double | Importe a debitar.
monedaId | Short | Identificador de Moneda.
operacionUIdDestino | Long | Identificador de operación de origen del traspaso.
operacionUIdOrigen | Long | Identificador de operación de destino del traspaso.
:::
<!-- CIERRA SDT -->

<!-- ABRE SDT -->
::: details sBTResultadoTraspaso  

### sBTResultadoTraspaso

::: center 
Los campos del tipo de dato estructurado sBTResultadoTraspaso son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
idMovimiento | String | Identificador de Movimiento String.
movimientoUId | Long | Identificador de Movimiento.
operacionUIdDestino | Long | Identificador de operación de destino del traspaso.
operacionUIdOrigen | Long | Identificador de operación de origen del traspaso.
saldoOperacionOrigen | Double | Saldo Actual de operación de origen.
:::
<!-- CIERRA SDT -->


