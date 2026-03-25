---
title: Obtener Evolución de Saldos
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
::: note Método para obtener la evolución del saldo de un producto de cuenta de ahorro.

**Nombre publicación:** BTCuentasDeAhorro.ObtenerEvolucionDeSaldos

**Programa:** RBTPG005

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtEvolucionSaldo | [sBTEvolucionSaldos](#sbtevolucionsaldos) | Datos de la evolución de saldos.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador único de operación.
30002 | No se recuperó Operación para el identificador: [Número de identificador].
30003 | La operación ingresada no corresponde a una cuenta de ahorro.
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
      <bts:BTCuentasDeAhorro.ObtenerEvolucionDeSaldos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>9</bts:operacionUId>
      </bts:BTCuentasDeAhorro.ObtenerEvolucionDeSaldos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ObtenerEvolucionDeSaldos=' \
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
    "operacionUId": 9
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
      <BTCuentasDeAhorro.ObtenerEvolucionDeSaldosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtEvolucionSaldo>
            <productoUId>9</productoUId>
            <saldos>
               <sBTSaldoMensual>
                  <anio>2018</anio>
                  <mes>9</mes>
                  <saldo>0.00</saldo>
               </sBTSaldoMensual>
               <sBTSaldoMensual>
                  <anio>2018</anio>
                  <mes>8</mes>
                  <saldo>0.00</saldo>
               </sBTSaldoMensual>
               ...
            </saldos>
         </sdtEvolucionSaldo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>930</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasDeAhorro.ObtenerEvolucionDeSaldos</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:35:25</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasDeAhorro.ObtenerEvolucionDeSaldosResponse>
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
    "sdtEvolucionSaldo": {
        "productoUId": "9",
        "saldos": {
            "sBTSaldoMensual": [
                {
                    "saldo": "0.00",
                    "mes": "9",
                    "anio": "2018"
                },
                {
                    "saldo": "0.00",
                    "mes": "8",
                    "anio": "2018"
                },
                ...
            ]
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "931",
        "Estado": "OK",
        "Servicio": "BTCuentasDeAhorro.ObtenerEvolucionDeSaldos",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "17:35:37",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTEvolucionSaldos  

### sBTEvolucionSaldos

::: center 
Los campos del tipo de dato estructurado sBTEvolucionSaldos son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
productoUId | Long | Identificador único de producto. 
saldos | [sBTSaldoMensual](#sbtsaldomensual) | Listado de saldo mensual. 
 
### sBTSaldoMensual

::: center 
Los campos del tipo de dato estructurado sBTSaldoMensual son los siguientes:  

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
anio | Short | Año. 
mes | Byte | Mes. 
saldo | Double | Saldo mensual. 
:::
<!-- CIERRA SDT -->