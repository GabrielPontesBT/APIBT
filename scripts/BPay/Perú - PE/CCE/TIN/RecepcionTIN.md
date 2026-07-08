---
title: Recepción Transferencias
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
::: note Método para recepción de mensajes AV2, CT2, CT5.

**Nombre publicación:** BTCCETIN.RecepcionTransferencias

**Programa:** RBTPG500

**Global/País:** Perú
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatoriedad | Comentarios
:--------- | :--------- | :--------- | :---------
IDCamara | Int		| M | Id cámara.
PayLoad	 | String	| M	| Json AV2, CT2, CT5.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
PayLoad		| String | Respuesta AV3, CT3, CT5.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | Códigos de respuesta Rechazo - GUÍA DE INTEGRACIÓN A IPS.

@tab Diagrama de Flujo

![](/assets/image/Diagramas_Flujo/BTCCETIN.RecepcionTransferencias.png)
::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab AV2
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
    <soapenv:Header />
    <soapenv:Body>        
		<bts:BTCCETIN.RecepcionTransferencias>
			<bts:Btinreq>
				<bts:Canal>BTDIGITAL</bts:Canal>
				<bts:Usuario>INSTALADOR</bts:Usuario>
				<bts:Device>1</bts:Device>
				<bts:Requerimiento>1</bts:Requerimiento>
				<bts:Token>94CC69812C4DB70C55177749</bts:Token>
			</bts:Btinreq>
			<bts:idCamara>2</bts:idCamara>
			<bts:payload>{"AV2":{ "debtorParticipantCode":"0009", "creditorParticipantCode":"0802", "creationDate":"20230119", "creationTime":"151500", "terminalId":"ABC00001", "retrievalReferenteNumber":"010315560014", "trace":"123456", "debtorName":"Pedro Gamero Butorac", "debtorId":"42102129", "debtorIdCode":"2", "debtorPhoneNumber":"2255784", "debtorAddressLine":"Av. Eduardo Ordoñez 379 - 101", "debtorMobileNumber":"999913014", "transactionType":"320", "channel":"15", "creditorAddressLine":"Av. Los Pinos 444", "creditorPhoneNumber":"3461229", "creditorMobileNumber":"999666333", "creditorCCI":"80200100001582700187", "creditorCreditCard":"", "debtorTypeOfPerson":"N", "currency":"604", "proxyValue":"999666333", "proxyType":"MSISDN", "instructionId":"M0421101152000011811587654321000012", "branchId":"1001" }}</bts:payload>
		</bts:BTCCETIN.RecepcionTransferencias>
    </soapenv:Body>
</soapenv:Envelope>
```

@tab CT2
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
    <soapenv:Header />
    <soapenv:Body>        
		<bts:BTCCETIN.RecepcionTransferencias>
			<bts:Btinreq>
				<bts:Canal>BTDIGITAL</bts:Canal>
				<bts:Usuario>INSTALADOR</bts:Usuario>
				<bts:Device>1</bts:Device>
				<bts:Requerimiento>1</bts:Requerimiento>
				<bts:Token>94CC69812C4DB70C55177749</bts:Token>
			</bts:Btinreq>
			<bts:idCamara>2</bts:idCamara>
			<bts:payload>{    "CT2": {        "debtorParticipantCode": "0009",        "creditorParticipantCode": "0802",        "creationDate": "20230119",        "creationTime": "101500",        "terminalId": "ABC00001",        "retrievalReferenteNumber": "010315560014",        "trace": "123456",        "channel": "15",        "amount": "50000",        "currency": "604",        "transactionReference": "1234567890",        "referenceTransactionId": "M0421101152000011811587654321000012",        "transactionType": "320",        "feeAmount": "1000",        "feeCode": "COMM ",        "applicationCriteria": "M",        "debtorTypeOfPerson": "N",        "debtorName": "Pedro Gamero Butorac",        "debtorAddressLine": "Av. Eduardo Ordoñez 379 - 101",        "debtorIdCode": "2",        "debtorId": "42102129",        "debtorPhoneNumber": "2255784",        "debtorMobileNumber": "999913014",        "debtorCCI": "00966120661224063400",        "creditorName": "VIGO VENEROS ELIDA DEL CARMEN ELIZABET",        "creditorAddressLine": "Av  Los Pinos 444",        "creditorPhoneNumber": "3461229",        "creditorMobileNumber": "999666333",        "creditorCCI": "80200100001582700187",        "creditorCreditCard": "",        "sameCustomerFlag": "O",        "purposeCode": "ADMG",        "unstructuredInformation": "Transferencia inmediata",        "grossSalaryAmount": "",        "salaryPaymentIndicator": "5",        "monthOfThePayment": "",        "yearOfThePayment": "",        "branchId": "1001",        "settlementDate": "20230119",        "instructionId": "M0421101152000011811587654321000012",        "interbankSettlementAmount": "51000"    }}</bts:payload>
		</bts:BTCCETIN.RecepcionTransferencias>
    </soapenv:Body>
</soapenv:Envelope>
```

@tab CT5
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
    <soapenv:Header />
    <soapenv:Body>        
		<bts:BTCCETIN.RecepcionTransferencias>
			<bts:Btinreq>
				<bts:Canal>BTDIGITAL</bts:Canal>
				<bts:Usuario>INSTALADOR</bts:Usuario>
				<bts:Device>1</bts:Device>
				<bts:Requerimiento>1</bts:Requerimiento>
				<bts:Token>94CC69812C4DB70C55177749</bts:Token>
			</bts:Btinreq>
			<bts:idCamara>2</bts:idCamara>
			<bts:payload>{    "CT5": {        "debtorParticipantCode": "0009",        "creditorParticipantCode": "0802",        "responseDate": "20230119",        "responseTime": "101005",        "terminalId": "ABC00001",        "retrievalReferenteNumber": "010315560014",        "trace": "123456",        "amount": 50000,        "currency": "604",        "transactionReference": "1234567890",        "responseCode": "00",        "feeAmount": 1000,        "settlementDate": "20220119",        "transactionType": "320",        "debtorCCI": "00966120661224063400",        "creditorCCI": "80200100001582700187",        "creditorCreditCard": "",        "sameCustomerFlag": "O",        "instructionId": "M0421101152000011811587654321000012",        "creationDate": "20230119",        "creationTime": "101000",        "channel": "15",        "interbankSettlementAmount": 501000    }}</bts:payload>
		</bts:BTCCETIN.RecepcionTransferencias>
    </soapenv:Body>
</soapenv:Envelope>
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab AV2
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
		      <BTCCETIN.recepcionTransferenciasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>BANTOTAL</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>8234EA193DE7251CBF9B7E1A</Token>
         </Btinreq>
         <payload>{    "AV3": {        "debtorParticipantCode": "0009",        "creditorParticipantCode": "0802",        "creationDate": "20230119",        "creationTime": "151500",        "terminalId": "ABC00001",        "retrievalReferenceNumber": "",        "trace": "123456",        "branchId": "1001",        "debtorName": "Pedro Gamero Butorac",        "debtorId": "42102129",        "debtorIdCode": "2",        "debtorPhoneNumber": "2255784",        "debtorAddressLine": "Av  Los Pinos 444",        "debtorMobileNumber": "999913014",        "transactionType": "320",        "channel": "15",        "instructionId": "M0421101152000011811587654321000012",        "responseCode": "00",        "creditorName": "VIGO VENEROS ELIDA DEL CARMEN ELIZABET",        "creditorAddressLine": "Av  Los Pinos 444",        "creditorId": "40465858",        "creditorIdCode": "2",        "creditorPhoneNumber": "3461229",        "creditorMobileNumber": "999666333",        "creditorCCI": "80200100001582700187",        "sameCustomerFlag": "O",        "proxyValue": "999666333",        "proxyType": "MSISDN",        "currency": "604"    }}</payload>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2025-05-29</Fecha>
            <Hora>14:38:12</Hora>
            <Numero>7468392</Numero>
            <Servicio>BTCCETIN.recepcionTransferencias</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCCETIN.recepcionTransferenciasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
@tab CT2
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
		      <BTCCETIN.recepcionTransferenciasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>BANTOTAL</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>8234EA193DE7251CBF9B7E1A</Token>
         </Btinreq>
         <payload>{    "CT3": {        "debtorParticipantCode": "0009",        "creditorParticipantCode": "0802",        "responseDate": "20250529",        "responseTime": "145005",        "terminalId": "ABC00001",        "retrievalReferenceNumber": "",        "trace": "123456",        "amount": "50000",        "currency": "604",        "transactionReference": "1234567890",        "responseCode": "00",        "feeAmount": "1000",        "settlementDate": "51000",        "transactionType": "320",        "debtorCCI": "00966120661224063400",        "creditorCCI": "80200100001582700187",        "sameCustomerFlag": "O",        "branchId": "1001",        "instructionId": "M0421101152000011811587654321000012"    }}</payload>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2025-05-29</Fecha>
            <Hora>14:38:12</Hora>
            <Numero>7468392</Numero>
            <Servicio>BTCCETIN.recepcionTransferencias</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCCETIN.recepcionTransferenciasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab CT5
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
		      <BTCCETIN.recepcionTransferenciasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>BANTOTAL</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>8234EA193DE7251CBF9B7E1A</Token>
         </Btinreq>
         <payload>{    "CT5": {        "responseCode": "00"    }}</payload>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2025-05-29</Fecha>
            <Hora>14:38:12</Hora>
            <Numero>7468392</Numero>
            <Servicio>BTCCETIN.recepcionTransferencias</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCCETIN.recepcionTransferenciasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

