---
title: Autenticación
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
---

Para poder utilizar los servicios es necesario autenticarse a efectos de obtener el SessionToken.

::: warning Ejemplo de Invocación
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:Authenticate.Execute>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token></bts:Token>
         </bts:Btinreq>
         <bts:UserId>MINSTALADOR</bts:UserId>
         <bts:UserPassword>Bantotal2015</bts:UserPassword>
      </bts:Authenticate.Execute>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_Authenticate_v1?Execute' \
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
	"UserId": "BANTOTAL",
    "UserPassword": "z0na#1357"
}'
```
:::

::: warning Ejemplo de Respuesta
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <Authenticate.ExecuteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token/>
         </Btinreq>
         <SessionToken>7f582501004A8B5C60A82434</SessionToken>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>722</Numero>
            <Estado>OK</Estado>
            <Servicio>Authenticate.Execute</Servicio>
            <Fecha>2017-11-24</Fecha>
            <Requerimiento/>
            <Hora>12:52:24</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </Authenticate.ExecuteResponse>
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
    "SessionToken": "991ba47aac4A8B5C60A82434",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 46,
        "Servicio": "Authenticate.Execute",
        "Estado": "OK",
        "Fecha": "2019-10-24",
        "Requerimiento": "",
        "Hora": "20:55:06",
        "Canal": "BTDIGITAL"
    }
}'
```
:::