---
title: Crear
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
::: note Método para dar de alta una tarjeta de débito para un cliente.

**Nombre publicación:** BTTarjetasDeDebito.Crear

**Programa:** RBTPG066

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
tipoTarjeta | String | Tipo de tarjeta.
nombreTarjeta | String | Nombre de tarjeta.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
tarjetaUId | Long | Identificador único de tarjeta.
numeroTarjeta | String | Número de tarjeta.
fechaExpiracion | Date | Fecha de vencimiento.
estadoTarjeta | String | Estado de la tarjeta.
estadoPlastico | String | Estado del plástico.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | Debe ingresar el identificador de cuenta.
40001 | Tipo de tarjeta inexistente TDD015.
40002 | El titular excede la cantidad máxima de tarjetas activas.
40003 | El titular no existe en FSD001.
40004 | Cuenta de costo no pertenece al titular.
40005 | Cuenta de costo no existe en FSD011.
40006 | Código de domicilio invalido para el titular.
40007 | Cuenta a asociar a tarjeta no pertenece al titular.
40010 | Número de tarjeta no es válido.
40011 | TD nominada, no se debe informar TDD003TAR.
40020 | Funcionalidad inexistente en TDD025.
40021 | Funcionalidad inhabilitada en TDD025.
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
      <bts:BTTarjetasDeDebito.Crear>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>161</bts:clienteUId>
         <bts:tipoTarjeta>MNO</bts:tipoTarjeta>
         <bts:nombreTarjeta>AV</bts:nombreTarjeta>
      </bts:BTTarjetasDeDebito.Crear>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?Crear=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9e695134-73f4-1576-72fd-f05ff93d9fba' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "clienteUId": 4,
   "tipoTarjeta": "MNO",
   "nombreTarjeta": "Mi tarjeta"
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
      <BTTarjetasDeDebito.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>be9fc8708b4A8B5C60A82434</Token>
         </Btinreq>
         <tarjetaUId>2000002072</tarjetaUId>
         <numeroTarjeta>5010730101000001203</numeroTarjeta>
         <fechaExpiracion>2028-10-31</fechaExpiracion>
         <estadoTarjeta>INACTIVA</estadoTarjeta>
         <estadoPlastico>A EMITIR</estadoPlastico>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>967</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTarjetasDeDebito.Crear</Servicio>
            <Fecha>2017-12-22</Fecha>
            <Requerimiento/>
            <Hora>12:26:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.CrearResponse>
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
   "tarjetaUId": "2000002073",
   "numeroTarjeta": "5010730101000001211",
   "fechaExpiracion": "2028-10-31",
   "estadoTarjeta": "INACTIVA",
   "estadoPlastico": "A EMITIR       ",
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "968",
      "Estado": "OK",
      "Servicio": "BTTarjetasDeDebito.Crear",
      "Fecha": "2017-12-22",
      "Requerimiento": "",
      "Hora": "12:34:25",
      "Canal": "BTDIGITAL"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->