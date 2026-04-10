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
::: note Método para obtener los datos de un producto de depósito a plazo.

**Nombre publicación:** BTDepositosAPlazo.ObtenerDatos

**Programa:** RBTPG014

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.
expresadoEn | String | [Hidden: Valores M-Moneda / E-Especie]

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPlazoFijo | [sBTPlazoFijo](#sbtplazofijo) | Datos del depósito a plazo.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de operación.
30002 | No se recuperó la operación para el identificador.
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
      <bts:BTDepositosAPlazo.ObtenerDatos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>5</bts:operacionUId>
      </bts:BTDepositosAPlazo.ObtenerDatos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerDatos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "operacionUId": 5
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
      <BTDepositosAPlazo.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>be9fc8708b4A8B5C60A82434</Token>
         </Btinreq>
         <sdtPlazoFijo>
            <plazo>360</plazo>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <periodicidad>0</periodicidad>
            <simboloMoneda>$</simboloMoneda>
            <fechaVencimiento>2016-12-22</fechaVencimiento>
            <producto>
               <papel/>
               <moneda>$</moneda>
               <productoUId>0</productoUId>
               <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre>
            </producto>
            <intereses>55465.38</intereses>
            <fechaProximoVencimiento>0000-00-00</fechaProximoVencimiento>
            <tasaVigente>3.750000</tasaVigente>
            <idOperacionBT>0010100000022000000000000000002700000000000085001</idOperacionBT>
            <renovacionAutomatica>N</renovacionAutomatica>
            <idOperacionFmt>85-0</idOperacionFmt>
            <interesesPendientes>0.00</interesesPendientes>
            <cantidadRenovaciones>0</cantidadRenovaciones>
            <tasaOriginal>3.750000</tasaOriginal>
            <interesesAcreditados>0.00</interesesAcreditados>
            <tipoTasa>Efectiva Anual</tipoTasa>
            <acreditacionPeriodicaIntereses>N</acreditacionPeriodicaIntereses>
            <cuentaContable/>
            <operacionUId>5</operacionUId>
            <instruccionVencimiento>
               <sucursal>Casa Matriz</sucursal>
               <producto>
                  <papel/>
                  <moneda>$</moneda>
                  <productoUId>0</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
               </producto>
               <descripcion>Cancelar y Acreditar al vto.</descripcion>
               <operacionUId>9</operacionUId>
               <idOperacionFmt>000000027_001</idOperacionFmt>
            </instruccionVencimiento>
            <instruccionAcreditacion>
               <sucursal/>
               <producto>
                  <papel/>
                  <moneda/>
                  <productoUId>0</productoUId>
                  <nombre/>
               </producto>
               <descripcion/>
               <operacionUId>0</operacionUId>
               <idOperacionFmt/>
            </instruccionAcreditacion>
            <saldo>0.00</saldo>
            <montoInicial>1500000.00</montoInicial>
            <estado/>
            <diasHastaVencimiento>0</diasHastaVencimiento>
            <montoFinal>0.00</montoFinal>
            <sucursal>Casa Matriz</sucursal>
            <fechaValor>2015-12-28</fechaValor>
         </sdtPlazoFijo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>986</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ObtenerDatos</Servicio>
            <Requerimiento/>
            <Fecha>2017-12-22</Fecha>
            <Hora>14:57:24</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerDatosResponse>
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
    "sdtPlazoFijo": {
      "plazo": 360,
      "tasaEfectiva": 0.000000,
      "periodicidad": 0,
      "simboloMoneda": "$",
      "fechaVencimiento": "2016-12-22",
      "producto": {
        "papel": "",
        "moneda": "$",
        "productoUId": 0,
        "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible"
      },
      "intereses": 55465.38,
      "fechaProximoVencimiento": "0000-00-00",
      "tasaVigente": 3.750000,
      "idOperacionBT": "0010100000022000000000000000002700000000000085001",
      "renovacionAutomatica": "N",
      "idOperacionFmt": "85-0",
      "interesesPendientes": 0.00,
      "cantidadRenovaciones": 0,
      "tasaOriginal": 3.750000,
      "interesesAcreditados": 0.00,
      "tipoTasa": "Efectiva Anual",
      "acreditacionPeriodicaIntereses": "N",
      "cuentaContable": "",
      "operacionUId": 5,
      "instruccionVencimiento": {
        "sucursal": "Casa Matriz",
        "producto": {
          "papel": "",
          "moneda": "$",
          "productoUId": 0,
          "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
        },
        "descripcion": "Cancelar y Acreditar al vto.",
        "operacionUId": 9,
        "idOperacionFmt": "000000027_001"
      },
      "instruccionAcreditacion": {
        "sucursal": "",
        "producto": {
          "papel": "",
          "moneda": "",
          "productoUId": 0,
          "nombre": ""
        },
        "descripcion": "",
        "operacionUId": 0,
        "idOperacionFmt": ""
      },
      "saldo": 0.00,
      "montoInicial": 1500000.00,
      "estado": "",
      "diasHastaVencimiento": 0,
      "montoFinal": 0.00,
      "sucursal": "Casa Matriz",
      "fechaValor": "2015-12-28"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": 986,
      "Estado": "OK",
      "Servicio": "BTDepositosAPlazo.ObtenerDatos",
      "Requerimiento": 1,
      "Fecha": "2017-12-22",
      "Hora": "14:57:24",
      "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPlazoFijo  

### sBTPlazoFijo

::: center 
Los campos del tipo de dato estructurado sBTPlazoFijo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
acreditacionPeriodicaIntereses | String | Acredita periódicamente intereses (S/N). 
cantidadRenovaciones | Short | Cantidad de renovaciones del depósito. 
cuentaContable | String | Nombre de la cuenta contable. 
diasHastaVencimiento | Int | Dias restantes hasta el vencimiento. 
estado | String | Descripción de estado. 
fechaProximoVencimiento | Date | Fecha para proximo vencimiento. 
fechaValor | Date | Fecha de alta. 
fechaVencimiento | Date | Fecha de vencimiento. 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
instruccionAcreditacion | [sBTInstruccion](#sbtinstruccion) | Datos de la instrucción de acreditación. 
instruccionVencimiento | [sBTInstruccion](#sbtinstruccion) | Datos de la instrucción al vencimiento. 
intereses | Double | Total de intereses del depósito. 
interesesAcreditados | Double | Intereses acreditados. 
interesesPendientes | Double | Intereses pendientes. 
montoInicial | Double | Capital inicial del depósito. 
operacionUId | Long | Identificador único de operación. 
periodicidad | Int | Periodicidad de acreditación de intereses. 
plazo | Int | Plazo en días. 
producto | [sBTProducto](#sbtproducto) | Datos del producto. 
renovacionAutomatica | String | Renovación automatica (S/N). 
saldo | Double | Saldo Actual. 
simboloMoneda | String | Símbolo moneda. 
sucursal | String | Nombre de la sucursal de alta. 
tasaEfectiva | Double | Tasa efectiva. 
tasaOriginal | Double | Tasa original. 
tasaVigente | Double | Tasa vigente. 
tipoTasa | String | Tipo de tasa. 
 
### sBTInstruccion

::: center 
Los campos del tipo de dato estructurado sBTInstruccion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción de la instrucción. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
operacionUId | Long | Identificador único de operación. 
producto | [sBTProducto](#sbtproducto) | Datos de producto. 
sucursal | String | Nombre de la Sucursal de la operación. 

### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
papel | String | Símbolo del papel. 
productoUId | Long | Identificador único de producto. 

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.
:::
<!-- CIERRA SDT -->