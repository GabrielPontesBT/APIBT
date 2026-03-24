---
title: Obtener Límites
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
::: note Método para obtener los límites de una tarjeta de débito.

**Nombre publicación:** BTTarjetasDeDebito.ObtenerLimites

**Programa:** RBTPG144

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
tarjetaUId | Long | Identificador único de la tarjeta de débito.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtLimites | [sBTLimiteTarjeta](#sbtlimitetarjeta) | Datos de los límites de la tarjeta.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de tarjeta.
40001 | No existe la tarjeta.
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
      <bts:BTTarjetasDeDebito.ObtenerLimites>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1820366692F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:tarjetaUId>2000002050</bts:tarjetaUId>
      </bts:BTTarjetasDeDebito.ObtenerLimites>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerLimites' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1820366692F955E77534D3E0",
	  "Device": "AC"
	},
	"tarjetaUId": "2000002050"
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
      <BTTarjetasDeDebito.ObtenerLimitesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1820366692F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtLimites>
            <SdtsBTLimiteTarjeta>
               <identificador>1</identificador>
               <moneda>0</moneda>
               <limiteEMV>30000.00</limiteEMV>
               <limiteBandaMagnetica>15000.00</limiteBandaMagnetica>
               <limiteNoPresencial>10000.00</limiteNoPresencial>
            </SdtsBTLimiteTarjeta>
         </sdtLimites>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTTarjetasDeDebito.ObtenerLimites</Servicio>
            <Fecha>2020-11-13</Fecha>
            <Hora>15:48:52</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7910</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerLimitesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1820366692F955E77534D3E0",
	  "Device": "AC"
	},
	"sdtLimites": {
	  "SdtsBTLimiteTarjeta": {
		"identificador": "1",
		"moneda": "0",
		"limiteEMV": "30000.00",
		"limiteBandaMagnetica": "15000.00",
		"limiteNoPresencial": "10000.00"
	  }
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTTarjetasDeDebito.ObtenerLimites",
	  "Fecha": "2020-11-13",
	  "Hora": "15:48:52",
	  "Requerimiento": "1",
	  "Numero": "7910",
	  "Estado": "OK"
	}
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTLimiteTarjeta  

### sBTLimiteTarjeta

::: center 
Los campos del tipo de dato estructurado sBTLimiteTarjeta son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
identificador | Short | Código de límite. 
limiteBandaMagnetica | Double | Monto límite en banda magnética. 
limiteEMV | Double | Monto límite EMV. 
limiteNoPresencial | Double | Monto límite no presencial. 
moneda | Short | Código de moneda. 
:::
<!-- CIERRA SDT -->