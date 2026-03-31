---
title: Actualizar Reducido
icon: /assets/image/nuevo.svg
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
::: note Método para actualizar una persona de forma reducida.

**Nombre publicación:** BTPersonas.ActualizarReducido

**Programa:** RBTPG595

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de la persona.
sdtPersona | [sBTPersona1](#sbtpersona1) | Datos de la persona.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de persona.
30002 | Las opciones de categoría deben de ser S o N.
30003 | Los datos de identificación de la persona no coinciden con los del identificador único: [Número de identificador].
30004 | Debe ingresar apellido paterno.
30005 | Debe ingresar primer nombre.
30006 | Debe ingresar fecha de nacimiento.
30007 | Debe ingresar sexo.
40001	| Debe ingresar País del Documento.
40002	| El País del Documento no existe.
40003	| Debe ingresar Tipo de Documento.
40004	| El Tipo de Documento no existe.
40005	| Debe ingresar Nro de Documento.
40006	| Número de Documento incorrecto.
40007	| Debe ingresar Primer Apellido.
40008	| Debe ingresar Primer Nombre.
40009	| Debe ingresar Fecha de Nacimiento.
40010	| La Fecha de Nacimiento no puede ser posterior a hoy.
40011	| La persona no es mayor de [Edad mínima] años.
40012	| Debe ingresar Sexo.
40013	| Debe ingresar Ocupación.
40014	| El código de Ocupación no existe.
40015	| La Fecha de Inicio de Actividad no puede ser posterior a hoy.
40016	| Caracteres incorrectos en nombre/apellido.
40028	| Debe ingresar al menos un Teléfono.
40029	| Email inválido.
40030	| La persona se encuentra en la lista de Inhabilitados: [Descripción lista].
40041	| Debe ingresar Actividad Laboral.
40042	| El código de Actividad Laboral no existe.
40043	| El País de la nacionalidad no existe.
40044	| El sexo ingresado no es válido.
40051	| La persona ya existe.
40101	| Código de domicilio no válido.
40119	| Debe ingresar País del Domicilio
40120	| El País del Domicilio no existe.
40121	| Debe ingresar Departamento.
40122	| El Departamento no existe.
40123	| Debe ingresar Localidad.
40124	| La Localidad no existe.
40125	| El barrio no existe.
40126	| Debe ingresar calle.
40127	| Debe ingresar número de puerta.
40128	| Debe ingresar código postal.
40130	| El domicilio ingresado ya existe.
40131	| El domicilio ingresado no existe.
40132	| El número de puerta no puede superar los 5 dígitos.

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
      <bts:BTPersonas.ActualizarReducido>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0306ebbd9c4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
		 <bts:personaUId>2</bts:personaUId>
         <bts:sdtPersona>
            <bts:paisDocumentoId>845</bts:paisDocumentoId>
            <bts:paisDocumento></bts:paisDocumento>
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
            <bts:tipoDocumento></bts:tipoDocumento>
            <bts:nroDocumento>27573084</bts:nroDocumento>
            <bts:segundoNombre/>
            <bts:sexo>M</bts:sexo>
            <bts:estadoCivil>?</bts:estadoCivil>
            <bts:nacionalidad></bts:nacionalidad>
            <bts:ingresos>1500</bts:ingresos>
            <bts:ocupacionId>1</bts:ocupacionId>
            <bts:actividadLaboral></bts:actividadLaboral>
            <bts:apartamento>13B</bts:apartamento>
            <bts:localidad>10</bts:localidad>
            <bts:barrio/>
            <bts:telefonoCelular>091897718</bts:telefonoCelular>
            <bts:departamentoId>10</bts:departamentoId>
            <bts:nacionalidadId>845</bts:nacionalidadId>
            <bts:localidadId>10</bts:localidadId>
            <bts:clasificacionInterna></bts:clasificacionInterna>
            <bts:paisDomicilioId>845</bts:paisDomicilioId>
            <bts:sector></bts:sector>
            <bts:telefonoFijo>26004288</bts:telefonoFijo>
            <bts:codigoPostal/>
            <bts:primerNombre>aALEJANDRO</bts:primerNombre>
            <bts:fechaNacimiento>1976-02-26</bts:fechaNacimiento>
            <bts:actividadLaboralId>1112</bts:actividadLaboralId>
            <bts:primerApellido>vVAZQUEZ</bts:primerApellido>
            <bts:estadoCivilId>1</bts:estadoCivilId>
            <bts:segundoApellido>SZENTANDRASI</bts:segundoApellido>
            <bts:paisDocumento></bts:paisDocumento>
            <bts:fechaInicioActividad/>
            <bts:ocupacion></bts:ocupacion>
            <bts:paisDomicilio></bts:paisDomicilio>
            <bts:departamento></bts:departamento>
            <bts:fechaVencimiento></bts:fechaVencimiento>
            <bts:correoElectronico>AV@GMAIL.COM</bts:correoElectronico>
            <bts:numeroPuerta>7216</bts:numeroPuerta>
            <bts:calle>BAZZURRO</bts:calle>
            <bts:barrioId></bts:barrioId>
         </bts:sdtPersona>
      </bts:BTPersonas.ActualizarReducido>
   </soapenv:Body>
</soapenv:Envelope>

```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarReducido' \
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
	"personaUId":"2",
   "sdtPersona": {
      "paisDocumentoId": 845,
      "tipoDocumentoId": 1,
      "nroDocumento": "41875255",
      "ingresos": "1500.00",
      "nacionalidad": "URUGUAY",
      "sexo": "M",
      "segundoNombre": "",
      "telefonoCelular": "",
      "departamentoId": 10,
      "ocupacionId": "1",
      "actividadLaboralId": 1112,
      "nacionalidadId": 845,
      "localidadId": "10",
      "paisDomicilioId": 845,
      "telefonoFijo": "26004288",
      "codigoPostal": "",
      "primerNombre": "aALEJANDRO",
      "fechaNacimiento": "1976-02-26",
      "primerApellido": "vVAZQUEZ",
      "estadoCivilId": "1",
      "segundoApellido": "SZENTANDRASI",
      "paisDocumento": "URUGUAY",
      "fechaInicioActividad": "1980-01-01",
      "ocupacion": "Empleado",
      "paisDomicilio": "URUGUAY",
      "fechaVencimiento": "2025-01-01",
      "correoElectronico": "AV@GMAIL.COM",
      "numeroPuerta": "7216",
      "calle": "BAZZURRO",
      "apartamento": "13B",
      "barrioId": 0,
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
      <BTPersonas.ActualizarReducidoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>376B514438F7B0C7820AF342</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>36608</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ActualizarReducido</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-11-04</Fecha>
            <Hora>17:24:39</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ActualizarReducidoResponse>
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
   },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8418,
        "Estado": "OK",
        "Servicio": "BTPersonas.ActualizarReducido",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
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
sectorId | Short | Identificador de sector. 
segundoApellido | String | Segundo apellido. 
segundoNombre | String | Segundo nombre. 
sexo | String | Sexo (M/F). 
telefonoCelular | String | Teléfono celular. 
telefonoFijo | String | Teléfono fijo. 
tipoDocumentoId | Short | Identificador de tipo de documento. 
:::
<!-- CIERRA SDT -->