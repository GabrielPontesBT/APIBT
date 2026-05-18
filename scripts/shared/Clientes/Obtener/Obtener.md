---
title: Obtener
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
::: note Método para obtener los datos de un cliente.

**Nombre publicación:** BTClientes.Obtener

**Programa:** RBTPG089

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

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPersona | [sBTPersona1](#sbtpersona1) | Datos del cliente.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el identificador.
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
      <bts:BTClientes.Obtener>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0306ebbd9c4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>181</bts:clienteUId>
      </bts:BTClientes.Obtener>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?Obtener=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: dc197965-60bc-3f23-3367-5902a0392e1d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 181
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
      <BTClientes.ObtenerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>0306ebbd9c4A8B5C60A82434</Token>
         </Btinreq>
         <sdtPersona>
            <apartamento>13B</apartamento>
            <paisDocumentoId>845</paisDocumentoId>
            <sectorId>3</sectorId>
            <tipoDocumentoId>1</tipoDocumentoId>
            <ingresos>1500.00</ingresos>
            <nacionalidad>URUGUAY</nacionalidad>
            <ocupacionId>1</ocupacionId>
            <sexo>M</sexo>
            <barrio/>
            <estadoCivil/>
            <nroDocumento>27573084</nroDocumento>
            <localidad>Montevideo</localidad>
            <clasificacionInternaId>1</clasificacionInternaId>
            <segundoNombre/>
            <telefonoCelular/>
            <departamentoId>10</departamentoId>
            <actividadLaboral>01112 Trigo</actividadLaboral>
            <nacionalidadId>845</nacionalidadId>
            <localidadId>10</localidadId>
            <clasificacionInterna>IFE - Actividades bursátiles</clasificacionInterna>
            <paisDomicilioId>845</paisDomicilioId>
            <sector>Público Nacional</sector>
            <telefonoFijo>26004288</telefonoFijo>
            <codigoPostal/>
            <primerNombre>ALEJANDRO</primerNombre>
            <fechaNacimiento>1976-02-26</fechaNacimiento>
            <actividadLaboralId>1112</actividadLaboralId>
            <primerApellido>VAZQUEZ</primerApellido>
            <estadoCivilId>Soltero/a</estadoCivilId>
            <segundoApellido>SZENTANDRASI</segundoApellido>
            <paisDocumento>URUGUAY</paisDocumento>
            <fechaInicioActividad>0000-00-00</fechaInicioActividad>
            <ocupacion>Empleado</ocupacion>
            <paisDomicilio>URUGUAY</paisDomicilio>
            <departamento>Montevideo</departamento>
            <fechaVencimiento>0000-00-00</fechaVencimiento>
            <correoElectronico>AV@GMAIL.COM</correoElectronico>
            <numeroPuerta>7216</numeroPuerta>
            <calle>BAZZURRO</calle>
            <barrioId>0</barrioId>
            <tipoDocumento>Cédula Identidad</tipoDocumento>
            <bts:direccion>1</bts:direccion>
            <bts:referencia>Juan Perez</bts:referencia>
            <bts:piso>123</bts:piso>			 
         </sdtPersona>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>775</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.Obtener</Servicio>
            <Fecha>2017-12-14</Fecha>
            <Requerimiento/>
            <Hora>18:57:42</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerResponse>
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
   "sdtPersona": {
      "apartamento": "13B",
      "paisDocumentoId": "845",
      "sectorId": "3",
      "tipoDocumentoId": "1",
      "ingresos": "1500.00",
      "nacionalidad": "URUGUAY",
      "ocupacionId": "1",
      "sexo": "M",
      "barrio": "",
      "estadoCivil": "",
      "nroDocumento": "27573084",
      "localidad": "Montevideo",
      "clasificacionInternaId": "1",
      "segundoNombre": "",
      "telefonoCelular": "",
      "departamentoId": "10",
      "actividadLaboral": "01112 Trigo",
      "nacionalidadId": "845",
      "localidadId": "10",
      "clasificacionInterna": "IFE - Actividades bursátiles",
      "paisDomicilioId": "845",
      "sector": "Público Nacional",
      "telefonoFijo": "26004288",
      "codigoPostal": "",
      "primerNombre": "ALEJANDRO",
      "fechaNacimiento": "1976-02-26",
      "actividadLaboralId": "1112",
      "primerApellido": "vVAZQUEZ",
      "estadoCivilId": "Soltero/a",
      "segundoApellido": "SZENTANDRASI",
      "paisDocumento": "URUGUAY",
      "fechaInicioActividad": "0000-00-00",
      "ocupacion": "Empleado",
      "paisDomicilio": "URUGUAY",
      "departamento": "Montevideo",
      "fechaVencimiento": "0000-00-00",
      "correoElectronico": "AV@GMAIL.COM",
      "numeroPuerta": "7216",
      "calle": "BAZZURRO",
      "barrioId": "0",
      "tipoDocumento": "Cédula Identidad",
      "dirección": ,
      "referencia": "EN LA ESQUINA",
      "piso": "123"
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "778",
      "Estado": "OK",
      "Servicio": "BTClientes.Obtener",
      "Fecha": "2017-12-15",
      "Requerimiento": "",
      "Hora": "11:08:57",
      "Canal": "BTDIGITAL"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPersona1  

### sBTPersona1

::: center 
Los campos del tipo de dato estructurado sBTPersona1 son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
actividadLaboralId | Int | Identificador de actividad. 
apartamento | String | Apartamento. 
barrioId | Int | Identificador de localidad. 
calle | String | Calle. 
clasificacionInternaId | Short | Identificador de clasificación interna. 
codigoPostal | String | Código postal. 
correoElectronico | String | Correo electrónico. 
departamentoId | Int | Identificador de departamento. 
direccion | String | Dirección del domicilio. 
ejecutivoId | Int | Identificador del ejecutivo. 
estadoCivil | String | Descripción de estado civil. 
estadoCivilId | String | Identificador de estado civil. 
fechaInicioActividad | Date | Fecha inicio actividad. 
fechaNacimiento | Date | Fecha de nacimiento. 
fechaVencimiento | Date | Fecha de vencimiento de documento. 
ingresos | Double | Ingresos. 
localidadId | Int | Identificador de localidad. 
nacionalidadId | Short | Identificador de país. 
nroDocumento | String | Número de documento. 
numeroPuerta | String | Número de puerta. 
ocupacionId | Int | Identificador de ocupación. 
paisDocumentoId | Short | Identificador de país del documento. 
paisDomicilioId | Short | Identificador de país de domicilio. 
piso | String | Piso del domicilio. 
primerApellido | String | Primer apellido. 
primerNombre | String | Primer nombre. 
referencia | String | Referencia del domicilio.
sectorId | Short | Identificador de sector. 
segundoApellido | String | Segundo apellido. 
segundoNombre | String | Segundo nombre. 
sexo | String | Sexo (M/F). 
telefonoCelular | String | Teléfono celular. 
telefonoFijo | String | Teléfono fijo. 
tipoDocumentoId | Short | Identificador de tipo de documento. 
:::
<!-- CIERRA SDT -->