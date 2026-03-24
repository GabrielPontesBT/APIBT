---
title: Traspasar Entre Cuentas de la Misma Persona
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
::: note Método para realizar un traspaso entre cuentas cuyo titular sea la misma persona.

**Nombre publicación:** BTCuentasVista.TraspasarCuentasMismoTitular

**Programa:** RBTPG255

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
sdtTraspaso | [sBTTraspaso](#sbttraspaso) | Datos del traspaso.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtResultadoTraspaso | [sBTResultadoTraspaso](#sbtresultadotraspaso) | Datos resultado del traspaso.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador único de operación de origen.
30002 | No se recibió el identificador único de operación de destino.
30003 | Debe ingresar importe.
30004 | No se recuperó la operación origen para el Identificador.
30005 | No se recuperó la operación origen para el Identificador.
30006 | No se recibió el identificador de persona.
30007 | La operación origen y operación destino no pueden ser iguales.
31003 | No existe registro para el identificador único.
40001 | La persona no integra la cuenta de origen.
40002 | La persona no integra la cuenta de destino.
51005 | La moneda del traspaso debe coincidir con la moneda de la operación origen.
51006 | La operación origen no existe.
51007 | La operación destino no existe.
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
      <bts:BTCuentasVista.TraspasarCuentasMismoTitular>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>GP</bts:Device>
            <bts:Token>cec2eed9744A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:personaUId>101</bts:personaUId>
         <bts:sdtTraspaso>
            <bts:operacionUIdOrigen>461</bts:operacionUIdOrigen>
            <bts:operacionUIdDestino>465</bts:operacionUIdDestino>
            <bts:monedaId>0</bts:monedaId>
            <bts:importe>1000</bts:importe>
            <bts:concepto>?</bts:concepto>
         </bts:sdtTraspaso>
      </bts:BTCuentasVista.TraspasarCuentasMismoTitular>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?TraspasarCuentasMismoTitular \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
      "personaUId": "101",
      "sdtTraspaso": {
        "operacionUIdOrigen": "461",
        "operacionUIdDestino": "465",
        "monedaId": "0",
        "importe": "1000",
        "concepto": "?"
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
      <BTCuentasVista.TraspasarCuentasMismoTitularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>cec2eed9744A8B5C60A82434</Token>
         </Btinreq>
         <sdtResultadoTraspaso>
            <operacionUIdOrigen>461</operacionUIdOrigen>
            <idMovimiento>00100001000500075000000005320181210</idMovimiento>
            <operacionUIdDestino>465</operacionUIdDestino>
            <saldoOperacionOrigen>-1000.00</saldoOperacionOrigen>
            <movimientoUId>324</movimientoUId>
         </sdtResultadoTraspaso>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>490</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.TraspasarCuentasMismoTitular</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-08-14</Fecha>
            <Hora>15:03:15</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.TraspasarCuentasMismoTitularResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{  
   "Btinreq": {
      "Device": "GP",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "cec2eed9744A8B5C60A82434"
   },
   "sdtResultadoTraspaso": {
      "operacionUIdOrigen": "461",
      "idMovimiento": "00100001000500075000000005320181210",
      "operacionUIdDestino": "465",
      "saldoOperacionOrigen": "-1000.00",
      "movimientoUId": "324"
   },
   "Btoutreq": {
      "Numero": "490",
      "Estado": "OK",
      "Servicio": "BTCuentasVista.TraspasarCuentasMismoTitular",
      "Requerimiento": "1",
      "Fecha": "2019-08-14",
      "Hora": "15:03:15",
      "Canal": "BTDIGITAL"
   }
}
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
:--------- | :----------- | :----------- 
concepto | String | Concepto del traspaso. 
importe | Double | Importe del movimiento. 
monedaId | Short | Identificador de moneda. 
operacionUIdDestino | Long | Identificador de operación de destino del traspaso. 
operacionUIdOrigen | Long | Identificador de operación de origen del traspaso. 
:::
 
::: details sBTResultadoTraspaso  

### sBTResultadoTraspaso

::: center 
Los campos del tipo de dato estructurado sBTResultadoTraspaso son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
idMovimiento | String | Identificador de movimiento String. 
movimientoUId | Long | Identificador de movimiento. 
operacionUIdDestino | Long | Identificador de operación de destino del traspaso. 
operacionUIdOrigen | Long | Identificador de operación de origen del traspaso. 
saldoOperacionOrigen | Double | Saldo Actual de operación de origen. 
:::
<!-- CIERRA SDT -->