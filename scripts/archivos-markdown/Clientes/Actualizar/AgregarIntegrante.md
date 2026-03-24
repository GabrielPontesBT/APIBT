---
title: Agregar Integrante
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
::: note Método para agregar un integrante a una cuenta cliente.

**Nombre publicación:** BTClientes.AgregarIntegrante

**Programa:** RBTPG186

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
personaUId | Long | Identificador único de persona.
codigoDeTitularidad | Byte | Código de titularidad.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de cliente.
30002 | No se recibió el identificador de persona.
30003 | No se recibió código de titularidad.
30004 | No se recuperó la cuenta para el identificador de cliente: [Número de identificador].
30014 | No existe registro con el identificador indicado.
30023 | No existe registro para el identificador único.
30032 | La persona tiene que haber sido ingresado con Alta Normal para poder integrar una cuenta.
30033 | Persona inhabilitada por Banco Central.
30034 | La persona seleccionada no tiene segmento asociado.
30036 | La persona se encuentra en la lista de inhabilitados: [Número de identificador].
30037 | La persona se encuentra en la lista de inhabilitados: [Número de identificador].
30038 | La persona seleccionada figura como fallecida.
30039 | Persona seleccionada no tiene domicilio legal.
30040 | Código de Titularidad Incorrecto.
30041 | La persona no tiene condición ante el impuesto.
30042 | La persona tiene alta inconclusa no puede asociarse.
30043 | La persona seleccionada no tiene actividad económica.
30046 | La cuenta [Número de identificador] tiene la misma integración que la cuenta actual.
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
      <bts:BTClientes.AgregarIntegrante>
         <bts:Btinreq>
            <bts:Device>10.12.10.159</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>d19fba5fa44A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>21</bts:clienteUId>
         <bts:personaUId>61</bts:personaUId>
         <bts:codigoDeTitularidad>1</bts:codigoDeTitularidad>
      </bts:BTClientes.AgregarIntegrante>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?AgregarIntegrante=' \
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
    "clienteUId": "21",
    "personaUId": "41",
    "codigoDeTitularidad": "1"
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
      <BTClientes.AgregarIntegranteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>d19fba5fa44A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2701</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.AgregarIntegrante</Servicio>
            <Fecha>2018-10-26</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:48:44</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.AgregarIntegranteResponse>
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
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "2719",
        "Estado": "OK",
        "Servicio": "BTClientes.AgregarIntegrante",
        "Fecha": "2018-10-26",
        "Requerimiento": "1",
        "Hora": "15:31:49",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->