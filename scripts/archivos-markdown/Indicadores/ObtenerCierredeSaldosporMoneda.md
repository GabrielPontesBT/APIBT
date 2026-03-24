---
title: Obtener Cierre de Saldos por Moneda
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
::: note Método para obtener el cierre de saldos por moneda.

**Nombre publicación:** BTIndicadores.ObtenerCierreSaldosPorMoneda

**Programa:** RBTPG707

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtBalanceMonedaSaldos | [sBTBalanceMonedaSaldo](#sbtbalancemonedasaldo) | Listado de cierre de saldos por moneda.

@tab Errores

No aplica.
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
      <bts:BTIndicadores.ObtenerCierreSaldosPorMoneda>
       <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>?</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerCierreSaldosPorMoneda>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerCierreSaldosPorMoneda' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
   "Btinreq": {
      "Device": 1,
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7",
      "Usuario": "INSTALADOR",
      "Requerimiento": "?"
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
      <BTIndicadores.ObtenerCierreSaldosPorMonedaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>?</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>7424D284FA89585C01D4EA34</Token>
         </Btinreq>
         <sdtBalanceMonedaSaldos>
            <sBTBalanceMonedaSaldo>
               <saldo>1002305670465.91</saldo>
               <signo>$</signo>
               <codigo>0</codigo>
               <nombre>Pesos</nombre>
            </sBTBalanceMonedaSaldo>
            <sBTBalanceMonedaSaldo>
               <saldo>0.00</saldo>
               <signo>AUD</signo>
               <codigo>105</codigo>
               <nombre>DOLAR AUSTRALIANO</nombre>
            </sBTBalanceMonedaSaldo>
            <sBTBalanceMonedaSaldo>
               <saldo>10000.00</saldo>
               <signo>ARS</signo>
               <codigo>500</codigo>
               <nombre>PESOS ARGENTINOS</nombre>
            </sBTBalanceMonedaSaldo>
            <sBTBalanceMonedaSaldo>
               <saldo>1000616680.88</saldo>
               <signo>EUR</signo>
               <codigo>1111</codigo>
               <nombre>EURO</nombre>
            </sBTBalanceMonedaSaldo>
            <sBTBalanceMonedaSaldo>
               <saldo>2111507066.93</saldo>
               <signo>USD</signo>
               <codigo>2222</codigo>
               <nombre>DÓLAR ESTADOUNIDENSE</nombre>
            </sBTBalanceMonedaSaldo>
            <sBTBalanceMonedaSaldo>
               <saldo>0.00</saldo>
               <signo>U$D</signo>
               <codigo>2225</codigo>
               <nombre>DÓLAR ESTADOUNIDENSE - BILLETE</nombre>
            </sBTBalanceMonedaSaldo>
            <sBTBalanceMonedaSaldo>
               <saldo>0.00</saldo>
               <signo>JPY</signo>
               <codigo>3600</codigo>
               <nombre>YENS</nombre>
            </sBTBalanceMonedaSaldo>
         </sdtBalanceMonedaSaldos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>12040</Numero>
            <Estado>OK</Estado>
            <Servicio>BTIndicadores.ObtenerCierreSaldosPorMoneda</Servicio>
            <Requerimiento>?</Requerimiento>
            <Fecha>2023-05-23</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>15:14:49</Hora>
         </Btoutreq>
      </BTIndicadores.ObtenerCierreSaldosPorMonedaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": 1,
      "Usuario": "INSTALADOR",
      "Requerimiento": "?",
      "Canal": "BTDIGITAL",
      "Token": "7424D284FA89585C01D4EA34"
   },
   "sdtBalanceMonedaSaldos": {
      "sBTBalanceMonedaSaldo": [
      {
         "saldo": 1002305670465.91,
         "signo": "$",
         "codigo": 0,
         "nombre": "Pesos"
      },
      {
         "saldo": 0,
         "signo": "AUD",
         "codigo": 105,
         "nombre": "DOLAR AUSTRALIANO"
      },
      {
         "saldo": 10000,
         "signo": "ARS",
         "codigo": 500,
         "nombre": "PESOS ARGENTINOS"
      },
      {
         "saldo": 1000616680.88,
         "signo": "EUR",
         "codigo": 1111,
         "nombre": "EURO"
      },
      {
         "saldo": 2111507066.93,
         "signo": "USD",
         "codigo": 2222,
         "nombre": "DÓLAR ESTADOUNIDENSE"
      },
      {
         "saldo": 0,
         "signo": "U$D",
         "codigo": 2225,
         "nombre": "DÓLAR ESTADOUNIDENSE - BILLETE"
      },
      {
         "saldo": 0,
         "signo": "JPY",
         "codigo": 3600,
         "nombre": "YENS"
      }
      ]
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": 12040,
      "Estado": "OK",
      "Servicio": "BTIndicadores.ObtenerCierreSaldosPorMoneda",
      "Requerimiento": "?",
      "Fecha": "2023-05-23",
      "Canal": "BTDIGITAL",
      "Hora": "15:14:49"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTBalanceMonedaSaldo

### sBTBalanceMonedaSaldo

::: center 
Los campos del tipo de dato estructurado sBTBalanceMonedaSaldo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Int | Código de la moneda. 
nombre | String | Nombre de moneda. 
saldo | Int | Saldo de cierre de moneda. 
signo | String | Signo de moneda. 
:::
<!-- CIERRA SDT -->