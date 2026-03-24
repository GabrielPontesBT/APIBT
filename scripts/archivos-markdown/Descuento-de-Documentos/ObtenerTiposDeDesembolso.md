---
title: Obtener Tipos de Desembolso
icon: /assets/image/nuevo.svg
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
::: note Método para obtener los tipos de desembolso.

**Nombre publicación:** BTDescuentoDocumentos.ObtenerTiposDeDesembolso

**Programa:** RBTPG578

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtTiposDesembolso | [sBTTipoDesembolso](#sbttipodesembolso)  | Listado de tipos de desembolso.

@tab Errores

Código | Descripción
:--------- | :-----------
40001 | No hay tipos de desembolsos parametrizados.
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
      <bts:BTDescuentoDocumentos.ObtenerTiposDeDesembolso>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>A7F3401198A610A75018BA88</bts:Token>
         </bts:Btinreq>
      </bts:BTDescuentoDocumentos.ObtenerTiposDeDesembolso>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDescuentoDocumentos?ObtenerTiposDeDesembolso=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "GZ",
          "Canal": "BTDIGITAL",
          "Usuario": "INSTALADOR",
          "Token": "BE98B0157319F32A4ACF3501"
    },
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
      <BTDescuentoDocumentos.ObtenerTiposDeDesembolsoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>A7F3401198A610A75018BA88</Token>
         </Btinreq>
         <sdtTiposDesembolso>
            <sBTTipoDesembolso>
               <papelDesembolso>0</papelDesembolso>
               <simboloMonedaDesembolso>$</simboloMonedaDesembolso>
               <referencia/>
               <descripcion>Cuentas Corrientes:</descripcion>
               <rubro>0</rubro>
               <simboloPapelDesembolso>$</simboloPapelDesembolso>
               <monedaDesembolso>0</monedaDesembolso>
               <pideCuenta>4</pideCuenta>
               <modulo>20</modulo>
               <pideOperacion>S</pideOperacion>
               <tipo>0</tipo>
               <pideSucursal>N</pideSucursal>
               <pideCheque>N</pideCheque>
               <identificador>1</identificador>
            </sBTTipoDesembolso>
            <sBTTipoDesembolso>
               <papelDesembolso>0</papelDesembolso>
               <simboloMonedaDesembolso>$</simboloMonedaDesembolso>
               <referencia/>
               <descripcion>Cuenta Ahorros</descripcion>
               <rubro>0</rubro>
               <simboloPapelDesembolso>$</simboloPapelDesembolso>
               <monedaDesembolso>0</monedaDesembolso>
               <pideCuenta>4</pideCuenta>
               <modulo>21</modulo>
               <pideOperacion>S</pideOperacion>
               <tipo>0</tipo>
               <pideSucursal>N</pideSucursal>
               <pideCheque>N</pideCheque>
               <identificador>2</identificador>
            </sBTTipoDesembolso>
            <sBTTipoDesembolso>
               <papelDesembolso>0</papelDesembolso>
               <simboloMonedaDesembolso>$</simboloMonedaDesembolso>
               <referencia/>
               <descripcion>Efectivo</descripcion>
               <rubro>101002001</rubro>
               <simboloPapelDesembolso>$</simboloPapelDesembolso>
               <monedaDesembolso>0</monedaDesembolso>
               <pideCuenta>0</pideCuenta>
               <modulo>0</modulo>
               <pideOperacion>N</pideOperacion>
               <tipo>0</tipo>
               <pideSucursal>N</pideSucursal>
               <pideCheque>N</pideCheque>
               <identificador>3</identificador>
            </sBTTipoDesembolso>
            <sBTTipoDesembolso>
               <papelDesembolso>0</papelDesembolso>
               <simboloMonedaDesembolso>$</simboloMonedaDesembolso>
               <referencia/>
               <descripcion>Cuenta Corresponsal:</descripcion>
               <rubro>0</rubro>
               <simboloPapelDesembolso>$</simboloPapelDesembolso>
               <monedaDesembolso>0</monedaDesembolso>
               <pideCuenta>4</pideCuenta>
               <modulo>93</modulo>
               <pideOperacion>S</pideOperacion>
               <tipo>0</tipo>
               <pideSucursal>N</pideSucursal>
               <pideCheque>N</pideCheque>
               <identificador>4</identificador>
            </sBTTipoDesembolso>
         </sdtTiposDesembolso>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>34720</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDescuentoDocumentos.ObtenerTiposDeDesembolso</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-03-25</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>16:35:48</Hora>
         </Btoutreq>
      </BTDescuentoDocumentos.ObtenerTiposDeDesembolsoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
   "Btinreq": {
      "Canal": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Device": "GZ",
      "Requerimiento": "1",
      "Token": "BE98B0157319F32A4ACF3501"
   },
   "sdtTiposDesembolso": {
      "sBTTipoDesembolso": [
         {
            "papelDesembolso": 0,
            "simboloMonedaDesembolso": "$",
            "referencia": "",
            "descripcion": "Cuentas Corrientes:",
            "rubro": 0,
            "simboloPapelDesembolso": "$",
            "monedaDesembolso": 0,
            "pideCuenta": 4,
            "modulo": 20,
            "pideOperacion": "S",
            "tipo": 0,
            "pideSucursal": "N",
            "pideCheque": "N",
            "identificador": 1
         },
         {
            "papelDesembolso": 0,
            "simboloMonedaDesembolso": "$",
            "referencia": "",
            "descripcion": "Cuenta Ahorros",
            "rubro": 0,
            "simboloPapelDesembolso": "$",
            "monedaDesembolso": 0,
            "pideCuenta": 4,
            "modulo": 21,
            "pideOperacion": "S",
            "tipo": 0,
            "pideSucursal": "N",
            "pideCheque": "N",
            "identificador": 2
         },
         {
            "papelDesembolso": 0,
            "simboloMonedaDesembolso": "$",
            "referencia": "",
            "descripcion": "Efectivo",
            "rubro": 101002001,
            "simboloPapelDesembolso": "$",
            "monedaDesembolso": 0,
            "pideCuenta": 0,
            "modulo": 0,
            "pideOperacion": "N",
            "tipo": 0,
            "pideSucursal": "N",
            "pideCheque": "N",
            "identificador": 3
         },
         {
            "papelDesembolso": 0,
            "simboloMonedaDesembolso": "$",
            "referencia": "",
            "descripcion": "Cuenta Corresponsal:",
            "rubro": 0,
            "simboloPapelDesembolso": "$",
            "monedaDesembolso": 0,
            "pideCuenta": 4,
            "modulo": 93,
            "pideOperacion": "S",
            "tipo": 0,
            "pideSucursal": "N",
            "pideCheque": "N",
            "identificador": 4
         }
      ]
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Estado": "OK",
      "Fecha": "2024-11-07",
      "Hora": "13:16:44",
      "Numero": "25167",
      "Servicio": "BTDescuentoDocumentos.ObtenerTiposDeDesembolso",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTipoDesembolso  

### sBTTipoDesembolso

::: center 
Los campos del tipo de dato estructurado sBTTipoDesembolso son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción del tipo de desembolso.
identificador | Short | Identificador del tipo de desembolso.
modulo | Int | Modulo.
monedaDesembolso | Short | Moneda del tipo de desembolso.
papelDesembolso | Int | Papel del tipo de desembolso.
pideCheque | String | ¿Pide cheque? (S = Si / N = No).
pideCuenta | String | ¿Pide cuenta? (S = Si / N = No).
pideOperacion | String | ¿Pide operación? (S = Si / N = No).
pideSucursal | String | ¿Pide sucursal? (S = Si / N = No).
referencia | String | Referencia.
rubro | Long | Rubro.
simboloMonedaDesembolso | String | Símbolo de la moneda del tipo de desembolso.
simboloPapelDesembolso | String | Símbolo del papel del tipo de desembolso.
tipo | Byte | Tipo.
:::
<!-- CIERRA SDT -->