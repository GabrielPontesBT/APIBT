---
title: Emitir Cheque Electrónico
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
::: note Método para emitir un cheque electrónico de una chequera. Si la chequera no existe, crea una.

**Nombre publicación:** BTCuentasCorrientes.EmitirChequeElectronico

**Programa:** RBTPAR27

**Global/País:** Argentina
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación de subcuenta.
importe | Double | Importe.
cantidadCheques | Short | Cantidad de cheques a emitir.
CUITBeneficiario | String | CUIT del beneficiario.
paisBeneficiarioId | Short | Identificador de país del beneficiario.
tipoDocumentoBeneficiarioId | Byte | Identificador de tipo de documento del beneficiario.
fechaPago | Date | Fecha de pago

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
listaCheques | [sBTChequeElectronico](#sbtchequeelectronico) | Listado de cheques.

@tab Errores 

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la operación.
30002 | No existe registro con el identificador indicado.
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
      <bts:BTCuentasCorrientes.EmitirChequeElectronico>
         <bts:Btinreq>
           <bts:Device>10</bts:Device>
            <bts:Usuario>BA</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>ec8CE93AA1</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>15</bts:operacionUId>
         <bts:cantidadCheques>1</bts:cantidadCheques>
         <bts:importe>5000</bts:importe>
         <bts:CUITBeneficiario>3435262644</bts:CUITBeneficiario>
         <bts:paisBeneficiarioId>243</bts:paisBeneficiarioId>
         <bts:tipoDocumentoBeneficiarioId>2</bts:tipoDocumentoBeneficiarioId>
         <bts:fechaPago>2019-05-05</bts:fechaPago>
      </bts:BTCuentasCorrientes.EmitirChequeElectronico>
   </soapenv:Body>
</soapenv:Envelope></soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?EmitirChequeElectronico' \
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
	"operacionUId": "15",
	"cantidadCheques": "5",
	"importe": "5000",
	"CUITBeneficiario": "3435262644",
	"paisBeneficiarioId": "243",
	"tipoDocumentoBeneficiarioId": "2",
	"fechaPago": "2019-05-05"
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
      <BTCuentasCorrientes.EmitirChequeElectronicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>BA</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ec8CE93AA1</Token>
         </Btinreq>
         <listaCheques>
            <sBTChequeElectronico>
               <beneficiario>3435262644</beneficiario>
               <numeroCheque>4009969</numeroCheque>
               <importe>1000.00</importe>
               <numeroChequera>50243</numeroChequera>
               <CMC7>00110010030400996900000000747</CMC7>
           </sBTChequeElectronico>
            <sBTChequeElectronico>
               <beneficiario>3435262644</beneficiario>
               <numeroCheque>4009970</numeroCheque>
               <importe>1000.00</importe>
               <numeroChequera>50243</numeroChequera>
               <CMC7>00110010030400997000000000747</CMC7>
            </sBTChequeElectronico>
            <sBTChequeElectronico>
               <beneficiario>3435262644</beneficiario>
               <numeroCheque>4009971</numeroCheque>
               <importe>1000.00</importe>
               <numeroChequera>50243</numeroChequera>
               <CMC7>00110010030400997100000000747</CMC7>
            </sBTChequeElectronico>
            <sBTChequeElectronico>
               <beneficiario>3435262644</beneficiario>
               <numeroCheque>4009972</numeroCheque>
               <importe>1000.00</importe>
               <numeroChequera>50243</numeroChequera>
               <CMC7>00110010030400997200000000747</CMC7>
            </sBTChequeElectronico>
            <sBTChequeElectronico>
               <beneficiario>3435262644</beneficiario>
               <numeroCheque>4009973</numeroCheque>
               <importe>1000.00</importe>
               <numeroChequera>50243</numeroChequera>
               <CMC7>00110010030400997300000000747</CMC7>
            </sBTChequeElectronico>
         </listaCheques>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2565</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.EmitirChequeElectronico</Servicio>
            <Fecha>2019-05-28</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:40:41</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.EmitirChequeElectronicoResponse>
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
	"listaCheques": {
		"sBTChequeElectronico": [
			{
				"beneficiario": "3435262644",
				"NumeroCheque": "4009969",
				"importe": "1000.00",
				"numeroChequera": "50243",
				"CMC7": "00110010030400996900000000747"
			},
			{
				"beneficiario": "3435262644",
				"numeroCheque": "4009970",
				"importe": "1000.00",
				"numeroChequera": "50243",
				"CMC7": "00110010030400997000000000747"
			},
			{
				"beneficiario": "3435262644",
				"numeroCheque": "4009971",
				"importe": "1000.00",
				"numeroChequera": "50243",
				"CMC7": "00110010030400997100000000747"
			},
			{
				"beneficiario": "3435262644",
				"numeroCheque": "4009972",
				"importe": "1000.00",
				"numeroChequera": "50243",
				"CMC7": "00110010030400997200000000747"
			},
			{
				"beneficiario": "3435262644",
				"numeroCheque": "4009973",
				"importe": "1000.00",
				"numeroChequera": "50243",
				"CMC7": "00110010030400997300000000747"
			}
		]
	}
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.EmitirChequeElectronico",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTChequeElectronico

### sBTChequeElectronico

::: center
Los campos del tipo de dato estructurado sBTChequeElectronico son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
beneficiario | String | Nombre del beneficiario.
CMC7 | Long | Identificador CMC7 de cheque electrónico.
importe | Double | Importe.
numerocheque | Long | Numero de cheque electrónico.
numerochequera | Long | Numero de chequera electrónica.
:::
<!-- CIERRA SDT -->