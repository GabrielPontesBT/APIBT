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
sdtPersona | [sBTPersonaFisica](#sbtpersonafisica) | Datos de la persona.

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
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>376B514438F7B0C7820AF342</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>255</bts:personaUId>
         <sdtPersona>
            <nroDocumento>72116339</nroDocumento>
            <estadoCivil>Soltero/a</estadoCivil>
            <fechaInicioActividad/>
            <segundoNombre/>
            <fechaVencimiento/>
            <segundoApellido/>
            <fechaNacimiento>1980-10-20</fechaNacimiento>
            <telefonoCelular/>
            <tipoDocumentoId>1</tipoDocumentoId>
            <actividadLaboral/>
            <clasificacionInternaId>0</clasificacionInternaId>
            <sexo>M</sexo>
            <primerNombre>GONZALO</primerNombre>
            <clasificacionInterna/>
            <paisDocumentoId>845</paisDocumentoId>
            <telefonoFijo/>
            <primerApellido>ZANELLI</primerApellido>
            <ocupacion/>
            <sector/>
            <paisDocumento>URUGUAY</paisDocumento>
            <ocupacionId>0</ocupacionId>
            <sueldo>0.0</sueldo>
            <nacionalidad>URUGUAY</nacionalidad>
            <comentarioCorreo/>
            <domicilios>
               <sBTDomicilioCompleto>
                  <coloniaId>0</coloniaId>
                  <agrupador1Id>1</agrupador1Id>
                  <agrupador5/>
                  <departamento>Artigas</departamento>
                  <agrupador3Id>0</agrupador3Id>
                  <agrupador4/>
                  <agrupador3/>
                  <barrio/>
                  <detalleUbicacion/>
                  <agrupador2/>
                  <agrupador1>prueba223</agrupador1>
                  <agrupador5Id>0</agrupador5Id>
                  <tipoDomicilio>Residencia</tipoDomicilio>
                  <ubicacionDesde/>
                  <direccion>Avenida prueba22</direccion>
                  <colonia/>
                  <paisId>845</paisId>
                  <tipoVivienda/>
                  <pais>URUGUAY</pais>
                  <agrupador2Id>0</agrupador2Id>
                  <codigoPostal/>
                  <tipoViviendaId/>
                  <barrioId>0</barrioId>
                  <agrupador4Id>0</agrupador4Id>
                  <localidad>Artigas</localidad>
                  <localidadId>1022</localidadId>
                  <tipoDomicilioId>1</tipoDomicilioId>
                  <departamentoId>1</departamentoId>
               </sBTDomicilioCompleto>
            </domicilios>
            <correoElectronico>mail@mail.com</correoElectronico>
            <sectorId>0</sectorId>
            <datosAdicionales></datosAdicionales>
            <actividadLaboralId>0</actividadLaboralId>
            <tipoDocumento>Cédula Identidad</tipoDocumento>
            <nacionalidadId>845</nacionalidadId>
            <estadoCivilId>1</estadoCivilId>
         </sdtPersona>
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
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId": 255,
   "sdtPersona": {
      "nroDocumento": "72116339",
      "estadoCivil": "Soltero/a",
      "fechaInicioActividad": "",
      "segundoNombre": "",
      "fechaVencimiento": "",
      "segundoApellido": "",
      "fechaNacimiento": "1980-10-20",
      "telefonoCelular": "",
      "tipoDocumentoId": 1,
      "actividadLaboral": "",
      "clasificacionInternaId": 0,
      "sexo": "M",
      "primerNombre": "GONZALO",
      "clasificacionInterna": "",
      "paisDocumentoId": 845,
      "telefonoFijo": "",
      "primerApellido": "ZANELLI",
      "ocupacion": "",
      "sector": "",
      "paisDocumento": "URUGUAY",
      "ocupacionId": 0,
      "sueldo": 0,
      "nacionalidad": "URUGUAY",
      "comentarioCorreo": "",
      "domicilios": {
      "sBTDomicilioCompleto": [{
         "coloniaId": 0,
         "agrupador1Id": 1,
         "agrupador5": "",
         "departamento": "Artigas",
         "agrupador3Id": 0,
         "agrupador4": "",
         "agrupador3": "",
         "barrio": "",
         "detalleUbicacion": "",
         "agrupador2": "",
         "agrupador1": "prueba223",
         "agrupador5Id": 0,
         "tipoDomicilio": "Residencia",
         "ubicacionDesde": "",
         "direccion": "Avenida prueba22",
         "colonia": "",
         "paisId": 845,
         "tipoVivienda": "",
         "pais": "URUGUAY",
         "agrupador2Id": 0,
         "codigoPostal": "",
         "tipoViviendaId": "",
         "barrioId": 0,
         "agrupador4Id": 0,
         "localidad": "Artigas",
         "localidadId": 1022,
         "tipoDomicilioId": 1,
         "departamentoId": 1
      }]
      },
      "correoElectronico": "mail@mail.com",
      "sectorId": 0,
      "datosAdicionales": {"sBTDatoLista": []},
      "actividadLaboralId": 0,
      "tipoDocumento": "Cédula Identidad",
      "nacionalidadId": 845,
      "estadoCivilId": 1
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
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
   },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 36608,
        "Estado": "OK",
        "Servicio": "BTPersonas.ActualizarReducido",
        "Requerimiento": 0,
        "Fecha": "2025-11-04",
        "Hora": "17:24:39",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPersonaFisica  

### sBTPersonaFisica

::: center 
Los campos del tipo de dato estructurado sBTPersonaFisica son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
actividadLaboral | String | Descripción de actividad laboral.
actividadLaboralId | Int | Identificador de la actividad laboral.
clasificacionInterna | String | Descripción de la clasificación interna.
clasificacionInternaId | Short | Identificador de la clasificación interna.
correoElectronico | String | Correo electrónico.
datosAdicionales | [sBTDatoLista](#sbtdatolista) | Listado de datos adicionales.
domicilios | [sBTDomicilioCompleto](#sbtdomiciliocompleto) | Listado de los domicilios.
estadoCivil | String | Descripción de estado civil.
estadoCivilId | String | Identificador de estado civil.
fechaInicioActividad | Date | Fecha de inicio de actividad.
fechaNacimiento | Date | Fecha de nacimiento.
fechaVencimiento | Date | Fecha de vencimiento.
nacionalidad | String | Nombre del país de nacimiento.
nacionalidadId | Short | Identificador del país de nacimiento.
nroDocumento | String | Número de documento.
ocupacion | String | Descripción de ocupación.
ocupacionId | Int | Identificador de ocupación.
paisDocumento | String | Nombre del país del documento.
paisDocumentoId | Short | Identificador del país del documento.
primerApellido | String | Primer apellido.
primerNombre | String | Primer nombre.
sector | String | Sector.
sectorId | Short | Identificador del sector.
segundoApellido | String | Segundo apellido.
segundoNombre | String | Segundo nombre.	
sexo | String | Sexo (M/F).
sueldo | Double | Sueldo.
telefonoCelular | String | Teléfono celular.
telefonoFijo | String | Teléfono fijo.
tipoDocumento | String | Nombre del tipo de documento.
tipoDocumentoId | Short | Identificador del tipo de documento.

### sBTDomicilioCompleto

Los campos del tipo de dato estructurado sBTDomicilioCompleto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :---------
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
:--------- | :--------- | :--------- 
clave | String | Identificador de información adicional. 
valor | String | Valor de información adicional.  
:::
<!-- CIERRA SDT -->