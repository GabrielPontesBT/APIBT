---
title: Crear
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
::: note Método para crear una persona y su cuenta cliente.

**Nombre publicación:** BTClientes.Crear

**Programa:** RBTPG596

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPersona | [sBTPersonaFisica](#sbtpersonafisica) | Datos de la persona física.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.

@tab Errores

Código | Descripción
:--------- | :---------
30003 | No se pudo obtener identificador único de la cuenta.
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
40119 | Debe ingresar País del Domicilio.
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
      <bts:BTClientes.Crear>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>FC</bts:Device>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>437DAC2305E671B72E8F8124</bts:Token>
         </bts:Btinreq>
         <bts:sdtPersona>
            <bts:nroDocumento>52797003</bts:nroDocumento>
            <bts:estadoCivil>Soltero/a</bts:estadoCivil>
            <bts:fechaInicioActividad>2008-01-01</bts:fechaInicioActividad>
            <bts:segundoNombre></bts:segundoNombre>
            <bts:fechaVencimiento>2035-08-01</bts:fechaVencimiento>
            <bts:segundoApellido></bts:segundoApellido>
            <bts:fechaNacimiento>1975-02-01</bts:fechaNacimiento>
            <bts:sueldo>100000.0</bts:sueldo>
            <bts:telefonoCelular>099585858</bts:telefonoCelular>
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
            <bts:actividadLaboral>10300 Extracción y aglomeración de turba</bts:actividadLaboral>
            <bts:clasificacionInternaId>1</bts:clasificacionInternaId>
            <bts:sexo>F</bts:sexo>
            <bts:primerNombre>ISABEL</bts:primerNombre>
            <bts:clasificacionInterna>IFE - Actividades bursátiles</bts:clasificacionInterna>
            <bts:paisDocumentoId>845</bts:paisDocumentoId>
            <bts:telefonoFijo></bts:telefonoFijo>
            <bts:primerApellido>PUIG</bts:primerApellido>
            <bts:ocupacion>Asalariado</bts:ocupacion>
            <bts:sector>Privado no Financiero</bts:sector>
            <bts:paisDocumento>URUGUAY</bts:paisDocumento>
            <bts:ocupacionId>1</bts:ocupacionId>
            <bts:nacionalidad>URUGUAY</bts:nacionalidad>
            <bts:domicilios>
                <bts:sBTDomicilioCompleto>
                    <bts:coloniaId>0</bts:coloniaId>
                    <bts:agrupador1Id>1</bts:agrupador1Id>
                    <bts:agrupador5></bts:agrupador5>
                    <bts:departamento>Montevideo</bts:departamento>
                    <bts:agrupador4></bts:agrupador4>
                    <bts:agrupador3Id>0</bts:agrupador3Id>
                    <bts:detalleUbicacion></bts:detalleUbicacion>
                    <bts:barrio>Barrio Coppola</bts:barrio>
                    <bts:agrupador3></bts:agrupador3>
                    <bts:agrupador2>1585</bts:agrupador2>
                    <bts:agrupador1>rivera</bts:agrupador1>
                    <bts:agrupador5Id>0</bts:agrupador5Id>
                    <bts:tipoDomicilio>Residencia</bts:tipoDomicilio>
                    <bts:ubicacionDesde>2006-01-01</bts:ubicacionDesde>
                    <bts:direccion>AVENIDA RIVERA NO. PUERTA 1585</bts:direccion>
                    <bts:colonia></bts:colonia>
                    <bts:paisId>845</bts:paisId>
                    <bts:tipoVivienda>Propietario</bts:tipoVivienda>
                    <bts:pais>URUGUAY</bts:pais>
                    <bts:agrupador2Id>1</bts:agrupador2Id>
                    <bts:codigoPostal></bts:codigoPostal>
                    <bts:tipoViviendaId>1</bts:tipoViviendaId>
                    <bts:agrupador4Id>0</bts:agrupador4Id>
                    <bts:barrioId>110</bts:barrioId>
                    <bts:localidadId>10</bts:localidadId>
                    <bts:localidad>Montevideo</bts:localidad>
                    <bts:tipoDomicilioId>1</bts:tipoDomicilioId>
                    <bts:departamentoId>10</bts:departamentoId>
                </bts:sBTDomicilioCompleto>
            </bts:domicilios>
            <bts:datosAdicionales>
                <bts:sBTDatoLista>
                    <bts:clave>dato1</bts:clave>
                    <bts:valor>valor1</bts:valor>
                </bts:sBTDatoLista>
            </bts:datosAdicionales>
            <bts:sectorId>1</bts:sectorId>
            <bts:correoElectronico>ipuig@dlya.com.uy</bts:correoElectronico>
            <bts:actividadLaboralId>10300</bts:actividadLaboralId>
            <bts:tipoDocumento>Cédula Identidad</bts:tipoDocumento>
            <bts:nacionalidadId>845</bts:nacionalidadId>
            <bts:estadoCivilId>1</bts:estadoCivilId>
         </bts:sdtPersona>
      </bts:BTClientes.Crear>
   </soapenv:Body>
</soapenv:Envelope>

```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?Crear' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
    "Btinreq": {
      "Canal": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Device": "FC",
      "Requerimiento": 0,
      "Token": "437DAC2305E671B72E8F8124"
    },
    "sdtPersona": {
      "nroDocumento": 52797003,
      "estadoCivil": "Soltero/a",
      "fechaInicioActividad": "2008-01-01",
      "segundoNombre": "",
      "fechaVencimiento": "2035-08-01",
      "segundoApellido": "",
      "fechaNacimiento": "1975-02-01",
      "sueldo": 100000.0,
      "telefonoCelular": "099585858",
      "tipoDocumentoId": 1,
      "actividadLaboral": "10300 Extracción y aglomeración de turba",
      "clasificacionInternaId": 1,
      "sexo": "F",
      "primerNombre": "ISABEL",
      "clasificacionInterna": "IFE - Actividades bursátiles",
      "paisDocumentoId": 845,
      "telefonoFijo": "",
      "primerApellido": "PUIG",
      "ocupacion": "Asalariado",
      "sector": "Privado no Financiero",
      "paisDocumento": "URUGUAY",
      "ocupacionId": 1,
      "nacionalidad": "URUGUAY",
      "domicilios": {
        "sBTDomicilioCompleto": [
          {
            "coloniaId": 0,
            "agrupador1Id": 1,
            "agrupador5": "",
            "departamento": "Montevideo",
            "agrupador4": "",
            "agrupador3Id": 0,
            "detalleUbicacion": "",
            "barrio": "Barrio Coppola",
            "agrupador3": "",
            "agrupador2": "1585",
            "agrupador1": "rivera",
            "agrupador5Id": 0,
            "tipoDomicilio": "Residencia",
            "ubicacionDesde": "2006-01-01",
            "direccion": "AVENIDA RIVERA NO. PUERTA 1585",
            "colonia": "",
            "paisId": 845,
            "tipoVivienda": "Propietario",
            "pais": "URUGUAY",
            "agrupador2Id": 1,
            "codigoPostal": "",
            "tipoViviendaId": 1,
            "agrupador4Id": 0,
            "barrioId": 110,
            "localidadId": 10,
            "localidad": "Montevideo",
            "tipoDomicilioId": 1,
            "departamentoId": 10
          }
        ]
      },
      "datosAdicionales": {
        "sBTDatoLista": [
          {
            "clave": "dato1",
            "valor": "valor1"
          }
        ]
      },
      "sectorId": 1,
      "correoElectronico": "ipuig@dlya.com.uy",
      "actividadLaboralId": 10300,
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
      <BTClientes.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>437DAC2305E671B72E8F8124</Token>
         </Btinreq>
         <clienteUId>400</clienteUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>36678</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.Crear</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-11-18</Fecha>
            <Hora>12:16:37</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.CrearResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
  "Btinreq": {
    "Device": "FC",
    "Usuario": "INSTALADOR",
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Token": "437DAC2305E671B72E8F8124"
  },
  "clienteUId": 400,
  "Erroresnegocio": {
    "BTErrorNegocio": []
  },
  "Btoutreq": {
    "Numero": 36678,
    "Estado": "OK",
    "Servicio": "BTClientes.Crear",
    "Requerimiento": 0,
    "Fecha": "2025-11-18",
    "Hora": "12:16:37",
    "Canal": "BTDIGITAL"
  }
}
'
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
