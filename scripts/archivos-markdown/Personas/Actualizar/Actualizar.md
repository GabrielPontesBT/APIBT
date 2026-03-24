---
title: Actualizar
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
::: note Método para actualizar los datos de una persona.

**Nombre publicación:** BTPersonas.Actualizar

**Programa:** RBTPG398

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
sdtPersona | [sBTPersonaFisica](#sbtpersonafisica) | Datos de la persona física.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
30002 | No se recuperó la persona para el identificador de persona: [Número de Identificador].
40001 | Debe ingresar País del Documento.
40002 | El País del Documento no existe.
40003 | Debe ingresar Tipo de Documento.
40004 | El Tipo de Documento no existe.
40005 | Debe ingresar Nro de Documento.
40006 | Número de Documento incorrecto.
40007 | Debe ingresar Primer Apellido.
40008 | Debe ingresar Primer Nombre.
40009 | Debe ingresar Fecha de Nacimiento.
40010 | La Fecha de Nacimiento no puede ser posterior a hoy.
40011 | La persona no es mayor de [Edad mínima] años.
40012 | Debe ingresar Sexo.
40013 | Debe ingresar Ocupación.
40014 | El código de Ocupación no existe.
40015 | La Fecha de Inicio de Actividad no puede ser posterior a hoy.
40016 | Caracteres incorrectos en nombre/apellido.
40028 | Debe ingresar al menos un Teléfono.
40029 | Email inválido.
40030 | La persona se encuentra en la lista de Inhabilitados: [Descripción lista].
40041 | Debe ingresar Actividad Laboral.
40042 | El código de Actividad Laboral no existe.
40043 | El País de la nacionalidad no existe.
40044 | El sexo ingresado no es válido.
40051 | La persona ya existe.
40101 | Código de domicilio no válido.
40119 | Debe ingresar País del Domicilio
40120 | El País del Domicilio no existe.
40121 | Debe ingresar Departamento.
40122 | El Departamento no existe.
40123 | Debe ingresar Localidad.
40124 | La Localidad no existe.
40125 | El barrio no existe.
40126 | Debe ingresar calle.
40127 | Debe ingresar número de puerta.
40128 | Debe ingresar código postal.
40130 | El domicilio ingresado ya existe.
40131 | El domicilio ingresado no existe.
40132 | El número de puerta no puede superar los 5 dígitos.
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
      <bts:BTPersonas.Actualizar>
         <bts:Btinreq>
            <bts:Device>AS</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>571F9E08C47490ACEBE3A263</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>219</bts:personaUId>
         <bts:sdtPersona>
            <nroDocumento>13348799</nroDocumento>
            <estadoCivil>Soltero/a</estadoCivil>
            <segundoNombre>Batista</segundoNombre>
            <fechaInicioActividad>2021-03-15</fechaInicioActividad>
            <fechaVencimiento>2045-01-01</fechaVencimiento>
            <segundoApellido>Rodriguez</segundoApellido>
            <fechaNacimiento>1890-01-20</fechaNacimiento>
            <telefonoCelular>099876531</telefonoCelular>
            <tipoDocumentoId>1</tipoDocumentoId>
            <actividadLaboral>92410 Actividades deportivas</actividadLaboral>
            <clasificacionInternaId>1</clasificacionInternaId>
            <sexo>M</sexo>
            <clasificacionInterna/>
            <primerNombre>JULIO</primerNombre>
            <paisDocumentoId>845</paisDocumentoId>
            <telefonoFijo>24044040</telefonoFijo>
            <primerApellido>ALVAREZ</primerApellido>
            <ocupacion>Pensionado</ocupacion>
            <sector/>
            <paisDocumento>URUGUAY</paisDocumento>
            <ocupacionId>2</ocupacionId>
            <sueldo>100000.0</sueldo>
            <nacionalidad>URUGUAY</nacionalidad>
            <bts:comentarioCorreo>Correo Personal</bts:comentarioCorreo>
            <bts:domicilios>
               <bts:SdtsBTDomicilioCompleto>
                  <bts:coloniaId>1</bts:coloniaId>
                  <bts:agrupador1Id>3</bts:agrupador1Id>
                  <bts:agrupador5></bts:agrupador5>
                  <bts:departamento>Montevideo</bts:departamento>
                  <bts:agrupador4>Ejidio</bts:agrupador4>
                  <bts:agrupador3Id>1</bts:agrupador3Id>
                  <bts:detalleUbicacion>ENFRENTE A PANADERIA</bts:detalleUbicacion>
                  <bts:barrio></bts:barrio>
                  <bts:agrupador3>4</bts:agrupador3>
                  <bts:agrupador2>1190</bts:agrupador2>
                  <bts:agrupador1>Maldonado</bts:agrupador1>
                  <bts:agrupador5Id></bts:agrupador5Id>
                  <bts:tipoDomicilio></bts:tipoDomicilio>
                  <bts:ubicacionDesde>2024-08-17</bts:ubicacionDesde>
                  <bts:direccion></bts:direccion>
                  <bts:colonia></bts:colonia>
                  <bts:paisId>845</bts:paisId>
                  <bts:tipoVivienda>Inquilino</bts:tipoVivienda>
                  <bts:pais></bts:pais>
                  <bts:agrupador2Id>1</bts:agrupador2Id>
                  <bts:codigoPostal>19870</bts:codigoPostal>
                  <bts:tipoViviendaId>2</bts:tipoViviendaId>
                  <bts:agrupador4Id>1</bts:agrupador4Id>
                  <bts:barrioId>140</bts:barrioId>
                  <bts:localidadId>10</bts:localidadId>
                  <bts:localidad>Montevideo</bts:localidad>
                  <bts:tipoDomicilioId>1</bts:tipoDomicilioId>
                  <bts:departamentoId>10</bts:departamentoId>
               </bts:SdtsBTDomicilioCompleto>
            </bts:domicilios>
            <bts:datosAdicionales>
               <bts:SdtsBTDatoAdicional>
                  <bts:detalle></bts:detalle>
               </bts:SdtsBTDatoAdicional>
            </bts:datosAdicionales>
            <bts:correoElectronico>JULIOB@GMAIL.COM</bts:correoElectronico>
            <bts:sectorId>1</bts:sectorId>
            <bts:actividadLaboralId>92410</bts:actividadLaboralId>
            <bts:tipoDocumento></bts:tipoDocumento>
            <bts:nacionalidadId>845</bts:nacionalidadId>
            <bts:estadoCivilId>1</bts:estadoCivilId>
         </bts:sdtPersona>
      </bts:BTPersonas.Actualizar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?Actualizar=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8' \
  -d '{
	"Btinreq": {
          "Device": "AS",
          "Usuario": "INSTALADOR",
          "Requerimiento": "",
          "Canal": "BTDIGITAL",
          "Token": "571F9E08C47490ACEBE3A263"
        },
        "personaUId": 219,
        "sdtPersona": {
          "nroDocumento": 13348799,
          "estadoCivil": "Soltero/a",
          "segundoNombre": "Batista",
          "fechaInicioActividad": "2021-03-15",
          "fechaVencimiento": "2045-01-01",
          "segundoApellido": "Rodriguez",
          "fechaNacimiento": "1890-01-20",
          "telefonoCelular": 99876531,
          "tipoDocumentoId": 1,
          "actividadLaboral": "92410 Actividades deportivas",
          "clasificacionInternaId": 1,
          "sexo": "M",
          "clasificacionInterna": "",
          "primerNombre": "JULIO",
          "paisDocumentoId": 845,
          "telefonoFijo": 24044040,
          "primerApellido": "ALVAREZ",
          "ocupacion": "Pensionado",
          "sector": "",
          "paisDocumento": "URUGUAY",
          "ocupacionId": 2,
          "sueldo": 100000,
          "nacionalidad": "URUGUAY", 
          "comentarioCorreo": "Correo Personal",
          "domicilios": {
            "SdtsBTDomicilioCompleto": {
              "coloniaId": 1,
              "agrupador1Id": 3,
              "agrupador5": "",
              "departamento": "Montevideo",
              "agrupador4": "Ejidio",
              "agrupador3Id": 1,
              "detalleUbicacion": "ENFRENTE A PANADERIA",
              "barrio": "",
              "agrupador3": 4,
              "agrupador2": 1190,
              "agrupador1": "Maldonado",
              "agrupador5Id": "",
              "tipoDomicilio": "",
              "ubicacionDesde": "2024-08-17",
              "direccion": "",
              "colonia": "",
              "paisId": 845,
              "tipoVivienda": "Inquilino",
              "pais": "",
              "agrupador2Id": 1,
              "codigoPostal": 19870,
              "tipoViviendaId": 2,
              "agrupador4Id": 1,
              "barrioId": 140,
              "localidadId": 10,
              "localidad": "Montevideo",
              "tipoDomicilioId": 1,
              "departamentoId": 10
            }
          },
          "datosAdicionales": {
            "SdtsBTDatoAdicional": {
              "detalle": ""
            }
          },
          "correoElectronico": "JULIOB@GMAIL.COM",
          "sectorId": 1,
          "actividadLaboralId": 92410,
          "tipoDocumento": "",
          "nacionalidadId": 845,
          "estadoCivilId": 1
        }
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
      <BTPersonas.ActualizarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>571F9E08C47490ACEBE3A263</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35461</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.Actualizar</Servicio>
            <Requerimiento/>
            <Fecha>2025-05-20</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>09:35:42</Hora>
         </Btoutreq>
      </BTPersonas.ActualizarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
          "Device": "AS",
          "Usuario": "INSTALADOR",
          "Requerimiento": "",
          "Canal": "BTDIGITAL",
          "Token": "571F9E08C47490ACEBE3A263"
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Numero": 35461,
          "Estado": "OK",
          "Servicio": "BTPersonas.Actualizar",
          "Requerimiento": "",
          "Fecha": "2025-05-20",
          "Canal": "BTDIGITAL",
          "Hora": "09:35:42"
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
:--------- | :----------- | :----------- 
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
<!-- CIERRA SDT -->