---
title: Habilitar
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
::: note Método para habilitar una cuenta cliente que se encuentra inhabilitada.

**Nombre publicación:** BTClientes.Habilitar

**Programa:** RBTPG499

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | Debe ingresar identificador de cliente.
40001 | No se puede habilitar la cuenta porque está cerrada.
40002 | La cuenta ya se encuentra habilitada.
40003 | La cuenta ingresada no existe.
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
      <bts:BTClientes.Habilitar>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>GP</bts:Device>
            <bts:Token>f3fced1925CD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
         </bts:Btinreq>
         <bts:clienteUId>882</bts:clienteUId>
      </bts:BTClientes.Habilitar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?Habilitar' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "GP",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "f3fced1925CD285A89A23FBE"
	},
	"clienteUId": 882,
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
      <BTClientes.HabilitarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Token>f3fced1925CD285A89A23FBE</Token>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Requerimiento>1</Requerimiento>
            <Numero>16651</Numero>
            <Servicio>BTClientes.Habilitar</Servicio>
            <Hora>08:58:44</Hora>
            <Canal>BTDIGITAL</Canal>
            <Fecha>2022-10-04</Fecha>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTClientes.HabilitarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	 "Btinreq": {
        "Device": "GP",
        "Token": "f3fced1925CD285A89A23FBE",
        "Canal": "BTDIGITAL",
        "Usuario": "INSTALADOR",
        "Requerimiento": "1"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Requerimiento": "1",
        "Numero": "16651",
        "Servicio": "BTClientes.Habilitar",
        "Hora": "08:58:44",
        "Canal": "BTDIGITAL",
        "Fecha": "2022-10-04",
        "Estado": "OK"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->