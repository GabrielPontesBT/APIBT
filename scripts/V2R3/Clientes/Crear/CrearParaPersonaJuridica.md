---
title: Crear Para Persona Jurídica
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
::: note Método para crear una persona jurídica y su cuenta cliente.

**Nombre publicación:** BTClientes.CrearParaPersonaJuridica

**Programa:** RBTPG282

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPersonaJuridica | [sBTPersonaJuridica1](#sbtpersonajuridica1) | Datos de la persona jurídica.
sdtIntegrantesJuridicosAlta | [sBTIntegranteJuridicoAlta](#sbtintegrantejuridicoalta) | Listado de personas físicas integrantes de la persona jurídica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | Debe ingresar al menos un integrante.
30002 | Debe ingresar identificador de vínculo.
30003 | No se pudo obtener identificador único de la persona.
30004 | No se pudo recuperar el número de cuenta.
30005 | No se pudo obtener identificador único de la cuenta.
40001 | Ya existe persona con los datos ingresados.
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
      <bts:BTClientes.CrearParaPersonaJuridica>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>247d9cc0a3CD285A89A23FBE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:sdtPersonaJuridica>
            <bts:nroDocumento>219999990016</bts:nroDocumento>
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
         <bts:sdtIntegrantesJuridicosAlta>
            <bts:sBTIntegranteJuridicoAlta>
               <bts:vinculoId>1</bts:vinculoId>
               <bts:personaUId>141</bts:personaUId>
               <bts:participacion></bts:participacion>
            </bts:sBTIntegranteJuridicoAlta>
         </bts:sdtIntegrantesJuridicosAlta>
      </bts:BTClientes.CrearParaPersonaJuridica>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Canal": "BTDIGITAL",
    "Requerimiento": "1",
    "Usuario": "INSTALADOR",
    "Token": "247d9cc0a3CD285A89A23FBE",
    "Device": "MC"
  },
  "sdtPersonaJuridica": {
    "nroDocumento": "219999990016",
    "numeroPuerta": "1",
    "nombreReducido": "prueba",
    "paisDomicilio": null,
    "razonSocial": "EMPRESA",
    "departamento": null,
    "nroRegistro": null,
    "naturalezaJuridica": "1",
    "barrio": "1",
    "apartamento": null,
    "tipoDocumentoId": "2",
    "tipoActividadId": "1",
    "fechaConstitucion": "2020-01-01",
    "paisId": "845",
    "actividad": null,
    "paisDomicilioId": "845",
    "pais": null,
    "codigoPostal": "91000",
    "tipoActividad": null,
    "barrioId": "1",
    "localidad": null,
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
  "sdtIntegrantesJuridicosAlta": {
    "sBTIntegranteJuridicoAlta": [
      {
        "vinculoId": "1",
        "personaUId": "141",
        "participacion": ""
      }
    ]
  }
}
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
      <BTClientes.CrearParaPersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>MC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>247d9cc0a3CD285A89A23FBE</Token>
         </Btinreq>
         <clienteUId>783</clienteUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>107355</Numero>
            <Servicio>BTClientes.CrearParaPersonaJuridica</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-11-06</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:42:14</Hora>
         </Btoutreq>
      </BTClientes.CrearParaPersonaJuridicaResponse>
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
	 "clienteUId": "783", 
	 "Erroresnegocio": null, 
	 "Btoutreq": { 
		"Numero": "107338", 
		"Servicio": "BTClientes.CrearParaPersonaJuridica", 
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
:--------- | :--------- | :---------
actividad | String | Nombre de actividad.
actividadId | Long | Identificador de actividad.
apartamento | String | Apartamento.
barrio | String | Nombre de barrio.
barrioId | Int | Identificador de barrio.
calle | String | Calle.
codigoPostal | String | Código postal.
correoElectronico | String | Correo electrónico
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

::: details sBTIntegranteJuridicoAlta  

### sBTIntegranteJuridicoAlta

::: center 
Los campos del tipo de dato estructurado sBTIntegranteJuridicoAlta son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
participacion | Double | Porcentaje de participación del integrante. 
personaUId | Long | Identificador único de persona. 
vinculoId | Short | Identificador de vínculo. 
:::
<!-- CIERRA SDT -->