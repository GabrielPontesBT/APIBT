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
:--------- | :----------- | :-----------
clienteUId | Long | Identificador único de cliente.

@tab Errores

Código | Descripción
:--------- | :-----------
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
            <bts:nombreReducido>prueba</bts:nombreReducido>
            <bts:razonSocial>EMPRESA</bts:razonSocial>
            <bts:nroRegistro></bts:nroRegistro>
            <bts:naturalezaJuridica>1</bts:naturalezaJuridica>
            <bts:tipoDocumentoId>2</bts:tipoDocumentoId>
            <bts:tipoActividadId>1</bts:tipoActividadId>
            <bts:fechaConstitucion>2020-01-01</bts:fechaConstitucion>
            <bts:fechaExpiracion>2027-01-01</bts:fechaExpiracion>
            <bts:paisId>845</bts:paisId>
            <bts:actividad></bts:actividad>
            <bts:pais></bts:pais>
            <bts:tipoActividad></bts:tipoActividad>
            <bts:actividadId>1111</bts:actividadId>
            <bts:tipoDocumento>2</bts:tipoDocumento>
            <bts:naturalezaJuridicaId>1</bts:naturalezaJuridicaId>
            <bts:correoElectronico>AV@GMAIL.COM</bts:correoElectronico>
            <bts:telefonoFijo>3213342222</bts:telefonoFijo>
            <bts:telefonoCelular>05985423</bts:telefonoCelular>
            <bts:domicilios>
               <bts:SdtsBTDomicilioCompleto>
                  <bts:agrupador1Id>1</bts:agrupador1Id>
                  <bts:coloniaId>3</bts:coloniaId>
                  <bts:departamento></bts:departamento>
                  <bts:agrupador5></bts:agrupador5>
                  <bts:agrupador4></bts:agrupador4>
                  <bts:agrupador3Id>1</bts:agrupador3Id>
                  <bts:agrupador3></bts:agrupador3>
                  <bts:barrio></bts:barrio>
                  <bts:detalleUbicacion></bts:detalleUbicacion>
                  <bts:agrupador2></bts:agrupador2>
                  <bts:agrupador1></bts:agrupador1>
                  <bts:agrupador5Id>3</bts:agrupador5Id>
                  <bts:ubicacionDesde></bts:ubicacionDesde>
                  <bts:tipoDomicilio></bts:tipoDomicilio>
                  <bts:direccion></bts:direccion>
                  <bts:colonia></bts:colonia>
                  <bts:paisId>845</bts:paisId>
                  <bts:tipoVivienda></bts:tipoVivienda>
                  <bts:pais></bts:pais>
                  <bts:agrupador2Id>2</bts:agrupador2Id>
                  <bts:codigoPostal>7852</bts:codigoPostal>
                  <bts:tipoViviendaId>1</bts:tipoViviendaId>
                  <bts:agrupador4Id>1</bts:agrupador4Id>
                  <bts:barrioId>2</bts:barrioId>
                  <bts:localidad></bts:localidad>
                  <bts:localidadId>2</bts:localidadId>
                  <bts:tipoDomicilioId>1</bts:tipoDomicilioId>
                  <bts:departamentoId>1</bts:departamentoId>
               </bts:SdtsBTDomicilioCompleto>
            </bts:domicilios>
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
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?CrearParaPersonaJuridica' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
   "Btinreq": {
   "Canal": "BTDIGITAL",
   "Requerimiento": "1",
   "Usuario": "INSTALADOR",
   "Token": "247d9cc0a3CD285A89A23FBE",
   "Device": "MC"
   },
   "sdtPersonaJuridica": {
      "nroDocumento": 219999990016,
      "nombreReducido": "prueba",
      "razonSocial": "EMPRESA",
      "nroRegistro": "",
      "naturalezaJuridica": 1,
      "tipoDocumentoId": 2,
      "tipoActividadId": 1,
      "fechaConstitucion": "2020-01-01",
      "fechaExpiracion": "2027-01-01",
      "paisId": 845,
      "actividad": "",
      "pais": "",
      "tipoActividad": "",
      "actividadId": 1111,
      "tipoDocumento": 2,
      "naturalezaJuridicaId": 1,
      "correoElectronico": "AV@GMAIL.COM",
      "telefonoFijo": 3213342222,
      "telefonoCelular": 5985423,
      "domicilios": {
         "SdtsBTDomicilioCompleto": {
            "agrupador1Id": 1,
            "coloniaId": 3,
            "departamento": "",
            "agrupador5": "",
            "agrupador4": "",
            "agrupador3Id": 1,
            "agrupador3": "",
            "barrio": "",
            "detalleUbicacion": "",
            "agrupador2": "",
            "agrupador1": "",
            "agrupador5Id": 3,
            "ubicacionDesde": "",
            "tipoDomicilio": "",
            "direccion": "",
            "colonia": "",
            "paisId": 845,
            "tipoVivienda": "",
            "pais": "",
            "agrupador2Id": 2,
            "codigoPostal": 7852,
            "tipoViviendaId": 1,
            "agrupador4Id": 1,
            "barrioId": 2,
            "localidad": "",
            "localidadId": 2,
            "tipoDomicilioId": 1,
            "departamentoId": 1
         }
      }
   },
   "sdtIntegrantesJuridicosAlta": {
      "sBTIntegranteJuridicoAlta": {
         "vinculoId": 1,
         "personaUId": 141,
         "participacion": ""
      }
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
:--------- | :----------- | :-----------
actividad | String | Nombre de actividad.
actividadId | Long | Identificador de actividad.
correoElectronico | String | Correo electrónico.
datosAdicionales | [sBTDatoLista](#sbtdatolista) | Listado de datos adicionales.
domicilios | [sBTDomicilioCompleto](#sbtdomiciliocompleto) | Listado de los domicilios.
fechaConstitucion | Date | Fecha de constitución.
fechaExpiracion | Date | Fecha de expiración.
naturalezaJuridica | String | Nombre de naturaleza jurídica.
naturalezaJuridicaId | Short | Identificador de naturaleza jurídica.
nombreReducido | String | Nombre reducido.
nroDocumento | String | Número de documento.
nroRegistro | Long | Número de registro.
pais | String | Nombre del país.
paisId | Short | Identificador del país.
razonSocial | String | Razón social.
telefonoCelular | String | Número de teléfono celular.
telefonoFijo | String | Número de teléfono fijo.
tipoActividad | String | Nombre de tipo de actividad.
tipoActividadId | Long | Identificador de tipo de actividad.
tipoDocumento | String | Nombre del tipo de documento.
tipoDocumentoId | Short | Identificador del tipo de documento.

### sBTDomicilioCompleto

::: center 
Los campos del tipo de dato estructurado sBTDomicilioCompleto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
agrupador1 | String | Nombre agrupador 1.
agrupador1Id | Short | Identificador agrupador 1.
agrupador2 | String | Nombre agrupador 2.
agrupador2Id | Short | Identificador agrupador 2.
agrupador3 | String | Nombre agrupador 3.
agrupador3Id | Short | Identificador agrupador 3.
agrupador4 | String | Nombre agrupador 4.
agrupador4Id | Short | Identificador agrupador 4.
agrupador5 | String | Nombre agrupador 5.
agrupador5Id | Short | Identificador agrupador 5.
barrio | String | Nombre del barrio.
barrioId | int | Identificador del barrio.
codigoPostal | String | Código postal.
colonia | String | Colonia.
coloniaId | int | Identificador de la colonia.
departamento | String | Nombre del departamento.
departamentoId | int | Identificador del departamento.
detalleUbicacion | String | Detalle de la ubicación.
direccion | String | Dirección.
localidad | String | Nombre de la localidad.
localidadId | int | Identificador de la localidad.
pais | String | Nombre del país.
paisId | Short | Identificador del país.
tipoDomicilio | String | Descripción del tipo de domicilio.
tipoDomicilioId | Byte | Identificador del tipo de domicilio.
tipoVivienda | String | Descripción del tipo de vivienda.
tipoViviendaId | String | Identificador del tipo de vivienda.
ubicacionDesde | Date | Fecha desde que reside en ese domicilio.

### sBTDatoLista

::: center 
Los campos del tipo de dato estructurado sBTDatoLista son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
clave | String | Identificador de información adicional.
valor | String | Valor de información adicional.
:::

::: details sBTIntegranteJuridicoAlta  

### sBTIntegranteJuridicoAlta

::: center 
Los campos del tipo de dato estructurado sBTIntegranteJuridicoAlta son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
participacion | Double | Porcentaje de participación del integrante. 
personaUId | Long | Identificador único de persona. 
vinculoId | Short | Identificador de vínculo. 
:::
<!-- CIERRA SDT -->