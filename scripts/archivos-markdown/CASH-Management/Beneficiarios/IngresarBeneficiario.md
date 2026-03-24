---
title: Ingresar Beneficiario
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
::: note Método para ingresar un beneficiario a la agenda.

**Nombre publicación:** BTCASHManagement.IngresarBeneficiario

**Programa:** RBTPGC72

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
contratoId | Int | Identificador del contrato CASH del cliente.
servicio | Short | Servicio de pago CASH.
clienteUId | Long | Identificador único de cliente.
agendaId | Short | Identificador del tipo de agenda.
beneficiarioDatos | [sBTValorCampoCASH](#sbtvalorcampocash) | Datos de Beneficiario con sus valores.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
contratoIdO | Int | Identificador del Contrato CASH.
servicioIdO | Short | Servicio de Pago CASH.
agendaIdO | Short | Identificador del tipo de agenda.
beneficiarioId | String | Se devuelve el Id que identifica el Beneficiario.
beneficiarioCorr | Int | Correlativo asignado en la Agenda al nuevo Beneficiario.

@tab Errores

Código | Descripción
:--------- | :-----------
1030701 | El Servicio no existe.
1030704 | Id de contrato cliente desconocido.
1030770 | No se recupero información para la cuenta recibida.
1030774 | No se recibió Identificador de Cliente ni de Contrato. Por lo menos uno debe tener valor.
1030777 | Error al validar Beneficiario.

::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope	xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"	xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
	<soapenv:Header/>
	<soapenv:Body>
		<bts:BTCASHManagement.IngresarBeneficiario>
			<bts:Btinreq>
				<Canal>BTDIGITAL</Canal>
				<Usuario>INSTALADOR</Usuario>
				<Device>1</Device>
				<Requerimiento>1</Requerimiento>
				<Token>F971DE0C3D4C96A5ABC22DAD</Token>
			</bts:Btinreq>
			<bts:contratoId>8</bts:contratoId>
			<bts:servicioId>240</bts:servicioId>
			<bts:clienteUId></bts:clienteUId>
			<bts:agendaId></bts:agendaId>
			<bts:beneficiarioDatos>
				<bts:sBTValorCampoCash>
					<bts:tag>BENEF_ID</bts:tag>
					<bts:valor>ABC123</bts:valor>
				</bts:sBTValorCampoCash>
				<bts:sBTValorCampoCash>
					<bts:tag>BENEF_NOM</bts:tag>
					<bts:valor>JUAN PEREZ</bts:valor>
				</bts:sBTValorCampoCash>
				<bts:sBTValorCampoCash>
					<bts:tag>PAIS</bts:tag>
					<bts:valor>UY</bts:valor>
				</bts:sBTValorCampoCash>
				<bts:sBTValorCampoCash>
					<bts:tag>TIPO_DOC</bts:tag>
					<bts:valor>3</bts:valor>
				</bts:sBTValorCampoCash>
				<bts:sBTValorCampoCash>
					<bts:tag>NUM_DOC</bts:tag>
					<bts:valor>2546545498</bts:valor>
				</bts:sBTValorCampoCash>
				<bts:sBTValorCampoCash>
					<bts:tag>BENEF_DIR</bts:tag>
					<bts:valor>Avenida Italia 6201</bts:valor>
				</bts:sBTValorCampoCash>
				<bts:sBTValorCampoCash>
					<bts:tag>FORMA_PAGO</bts:tag>
					<bts:valor>PB</bts:valor>
				</bts:sBTValorCampoCash>
				<bts:sBTValorCampoCash>
					<bts:tag>CUENTA</bts:tag>
					<bts:valor>11200001</bts:valor>
				</bts:sBTValorCampoCash>
				<bts:sBTValorCampoCash>
					<bts:tag>MONEDA</bts:tag>
					<bts:valor>$</bts:valor>
				</bts:sBTValorCampoCash>
			</bts:beneficiarioDatos>
		</bts:BTCASHManagement.IngresarBeneficiario>
	</soapenv:Body>
</soapenv:Envelope>		
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?IngresarBeneficiario=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
      "contratoId": 8,
      "servicioId": 240,
      "clienteUId": "",
      "agendaId": "",
      "beneficiarioDatos": {
         "sBTValorCampoCash": [
            {
               "tag": "BENEF_ID",
               "valor": "ABC123"
            },
            {
               "tag": "BENEF_NOM",
               "valor": "JUAN PEREZ"
            },
            {
               "tag": "PAIS",
               "valor": "UY"
            },
            {
               "tag": "TIPO_DOC",
               "valor": 3
            },
            {
               "tag": "NUM_DOC",
               "valor": 2546545498
            },
            {
               "tag": "BENEF_DIR",
               "valor": "Avenida Italia 6201"
            },
            {
               "tag": "FORMA_PAGO",
               "valor": "PB"
            },
            {
               "tag": "CUENTA",
               "valor": 11200001
            },
            {
               "tag": "MONEDA",
               "valor": "$"
            }
         ]    
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
      <BTCASHManagement.IngresarBeneficiarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <contratoIdO>8</contratoIdO>
         <servicioIdO>240</servicioIdO>
         <agendaIdO>1</agendaIdO>
         <beneficiarioId>ABC123</beneficiarioId>
         <beneficiarioCorrelativo>12</beneficiarioCorrelativo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-20</Fecha>
            <Hora>09:21:57</Hora>
            <Numero>26765</Numero>
            <Servicio>BTCASHManagement.IngresarBeneficiario</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.IngresarBeneficiarioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "contratoIdO": 8,
    "servicioIdO": 240,
    "agendaIdO": 1,
    "beneficiarioId": "ABC123",
    "beneficiarioCorrelativo": 12,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.IngresarBeneficiario",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTValorCampoCASH  

### sBTValorCampoCASH

::: center 
Los campos del tipo de dato estructurado sBTValorCampoCASH son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
tag | String | Tag del campo CASH.
valor | String | Valor del campo CASH.

:::
<!-- CIERRA SDT -->

