---
title: Actualizar Persona Jurídica
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
::: note Método para actualizar una persona jurídica.

**Nombre publicación:** BTPersonas.ActualizarPersonaJuridica

**Programa:** RBTPG479

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
sdtPersonaJuridica | [sBTPersonaJuridica1](#sbtpersonajuridica1) | Datos de la persona jurídica.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
30013 | No existe registro para el identificador único.
40001 | No existe persona con los datos ingresados.
40002 | Debe ingresar país.
40003 | El país ingresado no existe.
40004 | Debe ingresar tipo de documento.
40005 | El tipo de documento ingresado no existe.
40006 | El tipo de documento ingresado no aplica para una persona jurídica.
40007 | Debe ingresar número de documento.
40008 | Número de documento incorrecto.
40009 | Debe ingresar razón social.
40010 | Caracteres incorrectos en razón social.
40011 | Caracteres incorrectos en nombre reducido.
40012 | Debe ingresar naturaleza jurídica.
40013 | La naturaleza jurídica ingresada no existe.
40014 | Debe ingresar la fecha de constitución.
40015 | La fecha de constitución no puede ser posterior a la fecha de apertura.
40016 | Debe ingresar tipo de actividad.
40017 | El tipo de actividad ingresado no existe.
40018 | Debe ingresar actividad.
40019 | La actividad ingresada no existe.
40020 | Debe ingresar país del domicilio.
40021 | El país del domicilio no existe.
40022 | Debe ingresar departamento.
40023 | El departamento no existe.
40024 | Debe ingresar localidad.
40025 | La localidad no existe.
40026 | El barrio no existe.
40027 | Correo electrónico no valido.
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
      <bts:BTPersonas.ActualizarPersonaJuridica>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>IN</bts:Usuario>
            <bts:Token>247d9cc0aD285A89A23FBE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>103</bts:personaUId>
         <bts:sdtPersonaJuridica>
            <bts:nroDocumento>219999990016</bts:nroDocumento>
            <bts:fechaExpiracion>2030-31-31</bts:fechaExpiracion>
            <bts:numeroPuerta>1</bts:numeroPuerta>
            <bts:nombreReducido>prueba</bts:nombreReducido>
            <bts:paisDomicilio></bts:paisDomicilio>
            <bts:razonSocial>EMPRESA</bts:razonSocial>
            <bts:departamento></bts:departamento>
            <bts:nroRegistro></bts:nroRegistro>
            <bts:naturalezaJuridica>1</bts:naturalezaJuridica>
            <bts:barrio>1</bts:barrio>
            <bts:apartamento></bts:apartamento>
            <bts:tipoDocumentoId>2</bts:tipoDocumentoId>
            <bts:tipoActividadId>1</bts:tipoActividadId>
            <bts:fechaConstitucion>2020-01-01</bts:fechaConstitucion>
            <bts:paisId>845</bts:paisId>
            <bts:actividad></bts:actividad>
            <bts:paisDomicilioId>845</bts:paisDomicilioId>
            <bts:pais></bts:pais>
            <bts:codigoPostal>91000</bts:codigoPostal>
            <bts:tipoActividad></bts:tipoActividad>
            <bts:barrioId>1</bts:barrioId>
            <bts:localidad></bts:localidad>
            <bts:localidadId>1008</bts:localidadId>
            <bts:actividadId>1111</bts:actividadId>
            <bts:calle>1</bts:calle>
            <bts:tipoDocumento>2</bts:tipoDocumento>
            <bts:naturalezaJuridicaId>1</bts:naturalezaJuridicaId>
            <bts:departamentoId>2</bts:departamentoId>
            <bts:correoElectronico>AV@GMAIL.COM</bts:correoElectronico>
            <bts:telefonoFijo>3213342222</bts:telefonoFijo>
            <bts:piso>123</bts:piso>
         </bts:sdtPersonaJuridica>
      </bts:BTPersonas.ActualizarPersonaJuridica>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarPersonaJuridica' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
   "Btinreq": {
   "Canal": "BTDIGITAL",
   "Requerimiento": "1",
   "Usuario": "IN",
   "Token": "247d9cc0aD285A89A23FBE",
   "Device": "MC"
   },
   "personaUId": "103",
    "sdtPersonaJuridica": {
        "nroDocumento": "219999990016",
        "fechaExpiracion": "2030-31-31",
        "numeroPuerta": "1",
        "nombreReducido": "prueba",
        "paisDomicilio": "",
        "razonSocial": "EMPRESA",
        "departamento": "",
        "nroRegistro": "",
        "naturalezaJuridica": "1",
        "barrio": "1",
        "apartamento": "",
        "tipoDocumentoId": "2",
        "tipoActividadId": "1",
        "fechaConstitucion": "2020-01-01",
        "paisId": "845",
        "actividad": "",
        "paisDomicilioId": "845",
        "pais": "",
        "codigoPostal": "91000",
        "tipoActividad": "",
        "barrioId": "1",
        "localidad": "",
        "localidadId": "1008",
        "actividadId": "1111",
        "calle": "1",
        "tipoDocumento": "2",
        "naturalezaJuridicaId": "1",
        "departamentoId": "2",
        "correoElectronico": "AV@GMAIL.COM",
        "telefonoFijo": "3213342222",
        "piso": "123"
    },
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
      <BTPersonas.ActualizarPersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>MC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>247d9cc0a3CD285A89A23FBE</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>107338</Numero>
            <Servicio>BTPersonas.ActualizarPersonaJuridica</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-11-05</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:31:25</Hora>
         </Btoutreq>
      </BTPersonas.ActualizarPersonaJuridicaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
 { 
	 "Btinreq": { 
		"Device": "MC", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "247d9cc0a3CD285A89A23FBE" 
	 }, 
	 "Erroresnegocio": null, 
	 "Btoutreq": { 
		"Numero": "107338", 
		"Servicio": "BTPersonas.ActualizarPersonaJuridica", 
		"Estado": "OK", 
		"Fecha": "2020-11-05", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Hora": "12:31:25" 
	 } 
 }
``` 
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPersonaJuridica1  

### sBTPersonaJuridica1

::: center 
Los campos del tipo de dato estructurado sBTPersonaJuridica1 son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
actividad | String | Nombre de actividad. 
actividadId | Long | Identificador de actividad. 
apartamento | String | Apartamento. 
barrio | String | Nombre de barrio. 
barrioId | Int | Identificador de barrio. 
calle | String | Calle. 
codigoPostal | String | Código postal. 
correoElectronico | String | Correo electrónico. 
departamento | String | Nombre de departamento. 
departamentoId | Int | Identificador de departamento. 
fechaConstitucion | Date | Fecha de constitución. 
localidad | String | Nombre de localidad. 
localidadId | Int | Identificador de localidad. 
naturalezaJuridica | String | Nombre de naturaleza jurídica. 
naturalezaJuridicaId | Short | Identificador de naturaleza jurídica. 
nombreReducido | String | Nombre reducido. 
nroDocumento | String | Número de documento. 
nroRegistro | Long | Número de registro. 
numeroPuerta | String | Número de puerta. 
pais | String | Nombre del país. 
paisDomicilio | String | Nombre del país de domicilio. 
paisDomicilioId | Short | Identificador del país de domicilio. 
paisId | Short | Identificador del país. 
piso | String | Piso. 
razonSocial | String | Razón social. 
telefonoFijo | String | Número de teléfono fijo. 
tipoActividad | String | Nombre de tipo de actividad. 
tipoActividadId | Long | Identificador de tipo de actividad. 
tipoDocumento | String | Nombre del tipo de documento. 
tipoDocumentoId | Short | Identificador del tipo de documento. 
:::
<!-- CIERRA SDT -->