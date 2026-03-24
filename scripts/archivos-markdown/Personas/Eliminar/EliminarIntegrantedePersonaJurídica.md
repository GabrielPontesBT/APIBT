---
title: Eliminar Integrante de Persona Jurídica
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
::: note Método para eliminar un integrante de una persona jurídica.

**Nombre publicación:** BTPersonas.EliminarIntegrantePersonaJuridica

**Programa:** RBTPG281

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaJuridicaUId | Long | Identificador único de persona jurídica.
personaIntegranteUId | Long | Identificador único de persona física.

@tab Datos de Salida

No aplica.

@tab Errores

No aplica.
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
      <bts:BTPersonas.EliminarIntegrantePersonaJuridica>
        <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1429807273CD285A89A23FBE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:personaJuridicaUId>2</bts:personaJuridicaUId>
         <bts:personaIntegranteUId>1</bts:personaIntegranteUId>
      </bts:BTPersonas.EliminarIntegrantePersonaJuridica>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?EliminarIntegrantePersonaJuridica' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	 "Btinreq": {
		"Canal": "BTDIGITAL",
		"Requerimiento": "1",
		"Usuario": "INSTALADOR",
		"Token": "1429807273CD285A89A23FBE",
		"Device": "MC"
	 },
	 "personaJuridicaUId": "2",
	 "personaIntegranteUId": "1"
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
      <BTPersonas.EliminarIntegrantePersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1429807273CD285A89A23FBE</Token>
            <Device>MC</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.EliminarIntegrantePersonaJuridica</Servicio>
            <Fecha>2020-11-02</Fecha>
            <Hora>12:06:37</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10140</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.EliminarIntegrantePersonaJuridicaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
	 "Btinreq": { 
		"Canal": "BTDIGITAL", 
		"Requerimiento": "1", 
		"Usuario": "INSTALADOR", 
		"Token": "1429807273CD285A89A23FBE", 
		"Device": "MC" 
	 }, 
	 "Erroresnegocio": null, 
	 "Btoutreq": { 
		"Canal": "BTDIGITAL", 
		"Servicio": "BTPersonas.EliminarIntegrantePersonaJuridica", 
		"Fecha": "2020-11-02", 
		"Hora": "12:06:37", 
		"Requerimiento": "1", 
		"Numero": "10140", 
		"Estado": "OK" 
	 } 
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->