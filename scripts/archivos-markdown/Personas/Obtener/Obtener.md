---
title: Obtener
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
::: note Método para obtener los datos de una persona.

**Nombre publicación:** BTPersonas.Obtener

**Programa:** RBTPG085

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtPersona | [sBTPersonaFisica](#sbtpersonafisica) | Datos de la persona física.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de persona.
30002 | El identificador no corresponde a una persona física
30013 | No existe registro para el identificador único.
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
      <bts:BTPersonas.Obtener>
         <bts:Btinreq>
            <bts:Device>AS</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>E90CADA1F3E3690DCCF3217A</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>239</bts:personaUId>
      </bts:BTPersonas.Obtener>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?Obtener' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
   "Btinreq": {
      "Device": "AS",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "",
      "Canal": "BTDIGITAL",
      "Token": "jh2c02c95a4A8B5C60A82434"
   },
   "personaUId": "239",
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
      <BTPersonas.ObtenerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>E90CADA1F3E3690DCCF3217A</Token>
         </Btinreq>
         <sdtPersona>
            <nroDocumento>73284906</nroDocumento>
            <estadoCivil>Soltero/a</estadoCivil>
            <segundoNombre>LUCIA</segundoNombre>
            <fechaInicioActividad>2023-05-09</fechaInicioActividad>
            <fechaVencimiento>2030-10-12</fechaVencimiento>
            <segundoApellido>GOMEZ</segundoApellido>
            <fechaNacimiento>1989-04-10</fechaNacimiento>
            <telefonoCelular>095376512</telefonoCelular>
            <tipoDocumentoId>1</tipoDocumentoId>
            <actividadLaboral>67110 Administración de mercados financieros</actividadLaboral>
            <clasificacionInternaId>0</clasificacionInternaId>
            <sexo>F</sexo>
            <clasificacionInterna/>
            <primerNombre>ANA</primerNombre>
            <paisDocumentoId>845</paisDocumentoId>
            <telefonoFijo>42235681</telefonoFijo>
            <primerApellido>LOPEZ</primerApellido>
            <ocupacion>Asalariado</ocupacion>
            <sector/>
            <paisDocumento>URUGUAY</paisDocumento>
            <ocupacionId>1</ocupacionId>
            <sueldo>65000.0</sueldo>
            <nacionalidad>URUGUAY</nacionalidad>
            <comentarioCorreo/>
            <domicilios>
               <SdtsBTDomicilioCompleto>
                  <coloniaId>0</coloniaId>
                  <agrupador1Id>1</agrupador1Id>
                  <agrupador5/>
                  <departamento>Montevideo</departamento>
                  <agrupador4>301</agrupador4>
                  <agrupador3Id>4</agrupador3Id>
                  <detalleUbicacion/>
                  <barrio>Centro</barrio>
                  <agrupador3>3</agrupador3>
                  <agrupador2>1147</agrupador2>
                  <agrupador1>18 de julio</agrupador1>
                  <agrupador5Id>0</agrupador5Id>
                  <tipoDomicilio>Residencia</tipoDomicilio>
                  <ubicacionDesde>2010-01-01</ubicacionDesde>
                  <direccion>AVENIDA 18 DE JULIO NO. PUERTA 1147 PISO 3 OFICINA 301</direccion>
                  <colonia/>
                  <paisId>845</paisId>
                  <tipoVivienda>Propietario</tipoVivienda>
                  <pais>URUGUAY</pais>
                  <agrupador2Id>1</agrupador2Id>
                  <codigoPostal>11800</codigoPostal>
                  <tipoViviendaId>1</tipoViviendaId>
                  <agrupador4Id>1</agrupador4Id>
                  <barrioId>330</barrioId>
                  <localidadId>10</localidadId>
                  <localidad>Montevideo</localidad>
                  <tipoDomicilioId>1</tipoDomicilioId>
                  <departamentoId>10</departamentoId>
               </SdtsBTDomicilioCompleto>
            </domicilios>
            <datosAdicionales></datosAdicionales>
            <correoElectronico>alucia@gmail.com</correoElectronico>
            <sectorId>0</sectorId>
            <actividadLaboralId>67110</actividadLaboralId>
            <tipoDocumento>Cédula Identidad</tipoDocumento>
            <nacionalidadId>845</nacionalidadId>
            <estadoCivilId>1</estadoCivilId>
         </sdtPersona>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35202</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.Obtener</Servicio>
            <Requerimiento/>
            <Fecha>2025-05-13</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:19:37</Hora>
         </Btoutreq>
      </BTPersonas.ObtenerResponse>
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
         "Token": "E90CADA1F3E3690DCCF3217A"
      },
      "sdtPersona": {
         "nroDocumento": "73284906",
         "estadoCivil": "Soltero/a",
         "segundoNombre": "LUCIA",
         "fechaInicioActividad": "2023-05-09",
         "fechaVencimiento": "2030-10-12",
         "segundoApellido": "GOMEZ",
         "fechaNacimiento": "1989-04-10",
         "telefonoCelular": "095376512",
         "tipoDocumentoId": "1",
         "actividadLaboral": "67110 Administración de mercados financieros",
         "clasificacionInternaId": "0",
         "sexo": "F",
         "clasificacionInterna": "",
         "primerNombre": "ANA",
         "paisDocumentoId": "845",
         "telefonoFijo": "42235681",
         "primerApellido": "LOPEZ",
         "ocupacion": "Asalariado",
         "sector": "",
         "paisDocumento": "URUGUAY",
         "ocupacionId": "1",
         "sueldo": "65000.0",
         "nacionalidad": "URUGUAY",
         "comentarioCorreo": "",
         "domicilios": {
            "SdtsBTDomicilioCompleto": {
               "coloniaId": "0",
               "agrupador1Id": "1",
               "agrupador5": "",
               "departamento": "Montevideo",
               "agrupador4": "301",
               "agrupador3Id": "4",
               "detalleUbicacion": "",
               "barrio": "Centro",
               "agrupador3": "3",
               "agrupador2": "1147",
               "agrupador1": "18 de julio",
               "agrupador5Id": "0",
               "tipoDomicilio": "Residencia",
               "ubicacionDesde": "2010-01-01",
               "direccion": "AVENIDA 18 DE JULIO NO. PUERTA 1147 PISO 3 OFICINA 301",
               "colonia": "",
               "paisId": "845",
               "tipoVivienda": "Propietario",
               "pais": "URUGUAY",
               "agrupador2Id": "1",
               "codigoPostal": "11800",
               "tipoViviendaId": "1",
               "agrupador4Id": "1",
               "barrioId": "330",
               "localidadId": "10",
               "localidad": "Montevideo",
               "tipoDomicilioId": "1",
               "departamentoId": "10"
            }
         },
         "datosAdicionales": "",
         "correoElectronico": "alucia@gmail.com",
         "sectorId": "0",
         "actividadLaboralId": "67110",
         "tipoDocumento": "Cédula Identidad",
         "nacionalidadId": "845",
         "estadoCivilId": "1"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "35202",
         "Estado": "OK",
         "Servicio": "BTPersonas.Obtener",
         "Requerimiento": "",
         "Fecha": "2025-05-13",
         "Canal": "BTDIGITAL",
         "Hora": "10:19:37"
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