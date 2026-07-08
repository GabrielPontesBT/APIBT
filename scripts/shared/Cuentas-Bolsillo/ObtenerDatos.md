---
title: Obtener Datos
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
::: note Método para obtener los datos de una cuenta bolsillo.

**Nombre publicación:** BTCuentasBolsillo.ObtenerDatos

**Programa:** RBTPG616

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
bolsilloUId | Long | Identificador único del bolsillo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtInformacionBolsillo | [sBTInfBolsillo](#sbtinfbolsillo) | Información del bolsillo.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador único de operación.
30002 | No se recuperó la operación para el identificador: [Número de identificador].
30003 | La operación ingresada no corresponde a una cuenta bolsillo.
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
      <bts:BTCuentasBolsillo.ObtenerDatos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>CC6345192D8633F531F01D1D</bts:Token>
         </bts:Btinreq>
         <bts:bolsilloUId>18843</bts:bolsilloUId>
      </bts:BTCuentasBolsillo.ObtenerDatos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasBolsillo?ObtenerDatos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "INSTALADOR",
        "Token": "CC6345192D8633F531F01D1D"
    },
    "bolsilloUId": 18843
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
      <BTCuentasBolsillo.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>CC6345192D8633F531F01D1D</Token>
         </Btinreq>
         <sdtInformacionBolsillo>
            <cuentaPrincipalUId>19150</cuentaPrincipalUId>
            <fechaBaja>0001-01-01</fechaBaja>
            <instruccionUId>19150</instruccionUId>
            <estado>0</estado>
            <fechaApert>2020-04-08</fechaApert>
            <saldo>910000.00</saldo>
            <operacionBolsilloUId>18843</operacionBolsilloUId>
            <nombreProducto>CUENTAS BOLSILLO, Bolsillo Ahorro</nombreProducto>
            <parametros>
               <heredaCondiciones>N</heredaCondiciones>
               <metaAhorro>990.00</metaAhorro>
               <tasa>0.00</tasa>
               <pagaIntereses>S</pagaIntereses>
            </parametros>
            <nombreSubcuenta>golozo</nombreSubcuenta>
            <productoBolsilloId>511</productoBolsilloId>
         </sdtInformacionBolsillo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>228462</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasBolsillo.ObtenerDatos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-10-31</Fecha>
            <Hora>17:29:45</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasBolsillo.ObtenerDatosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Device": "GZ",
        "Usuario": "INSTALADOR",
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Token": "CC6345192D8633F531F01D1D"
    },
    "sdtInformacionBolsillo": {
        "cuentaPrincipalUId": 19150,
        "fechaBaja": "0001-01-01",
        "instruccionUId": 19150,
        "estado": 0,
        "fechaApert": "2020-04-08",
        "saldo": 910000.00,
        "operacionBolsilloUId": 18843,
        "nombreProducto": "CUENTAS BOLSILLO, Bolsillo Ahorro",
        "parametros": {
            "heredaCondiciones": "N",
            "metaAhorro": 990.00,
            "tasa": 0.00,
            "pagaIntereses": "S"
        },
        "nombreSubcuenta": "golozo",
        "productoBolsilloId": 511
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 228462,
        "Estado": "OK",
        "Servicio": "BTCuentasBolsillo.ObtenerDatos",
        "Requerimiento": 0,
        "Fecha": "2023-10-31",
        "Hora": "17:29:45",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTInfBolsillo  

### sBTInfBolsillo

::: center 
Los campos del tipo de dato estructurado sBTInfBolsillo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cuentaPrincipalUId | Long | Identificador único de la operación principal.
estado | Byte | Estado.
fechaApert | Date | Fecha de apertura.
fechaBaja | Date | Fecha de la baja.
instruccionUId | Long | Identificador de la instrucción.
nombreProducto | String | Nombre del producto.
nombreSubcuenta | String | Nombre de la subcuenta.
operacionBolsilloUId | Long | Identificador único de la operación de bolsillo.
parametros | [sBTParamBolsillo](#sbtparambolsillo)
productoBolsilloId | Short | Identificador único del producto del bolsillo.
saldo | Double | Saldo.
:::

::: details sBTParamBolsillo

### sBTParamBolsillo

::: center 
Los campos del tipo de dato estructurado sBTParamBolsillo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
heredaCondiciones | String | ¿Hereda condiciones? (S/N).
metaAhorro | Double | Meta de ahorro de la cuenta.
pagaIntereses | String | ¿Paga intereses? (S/N).
tasa | Double | Tasa.
:::

<!-- CIERRA SDT -->

