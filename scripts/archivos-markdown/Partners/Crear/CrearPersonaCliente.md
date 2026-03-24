---
title: Crear Persona Cliente
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
::: note Método para crear persona de Partner.

**Nombre publicación:** BTPartners.CrearPersonaCliente

**Programa:** RBTPN006

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPartner | [sBTPartnerInReq](#sbtpartnerinreq) | Datos del usuario.
sdtPersona | [sBTPersonaFisica](#sbtpersonafisica) | Datos de persona física.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
clienteUId | Long | Identificador único de cliente.

@tab Errores

Código | Descripción
:--------- | :-----------
30002 | La Contraparte ya está relacionada al Partner: [Número del Partner] - [Nombre del Partner].
30003 | No se pudo obtener identificador único de la cuenta.
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
      <bts:BTPartners.CrearPersonaCliente>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1222A10B1A106FB813BD7AE9</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>3</bts:puntoVentaUId>
            <bts:vendedorUId>56</bts:vendedorUId>
            <bts:partnerUId>23</bts:partnerUId>
         </bts:sdtPartner>
         <bts:sdtPersona>
            <bts:nroDocumento>7896328</bts:nroDocumento>
            <bts:estadoCivil></bts:estadoCivil>
            <bts:segundoNombre>Carlos</bts:segundoNombre>
            <bts:fechaInicioActividad>2023-09-26</bts:fechaInicioActividad>
            <bts:fechaVencimiento>2024-09-26</bts:fechaVencimiento>
            <bts:segundoApellido>Gimenez</bts:segundoApellido>
            <bts:fechaNacimiento>1998-09-26</bts:fechaNacimiento>
            <bts:telefonoCelular>025874532</bts:telefonoCelular>
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
            <bts:actividadLaboral></bts:actividadLaboral>
            <bts:clasificacionInternaId>2</bts:clasificacionInternaId>
            <bts:sexo>M</bts:sexo>
            <bts:primerNombre>Luis</bts:primerNombre>
            <bts:clasificacionInterna></bts:clasificacionInterna>
            <bts:paisDocumentoId>845</bts:paisDocumentoId>
            <bts:telefonoFijo>874525</bts:telefonoFijo>
            <bts:primerApellido>Gonzales</bts:primerApellido>
            <bts:ocupacion></bts:ocupacion>
            <bts:sector></bts:sector>
            <bts:paisDocumento></bts:paisDocumento>
            <bts:ocupacionId>8</bts:ocupacionId>
            <bts:nacionalidad></bts:nacionalidad>
            <bts:sueldo>7845</bts:sueldo>
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
            <bts:correoElectronico>juanLui@mail.com</bts:correoElectronico>
            <bts:sectorId>2</bts:sectorId>
            <bts:actividadLaboralId>3</bts:actividadLaboralId>
            <bts:tipoDocumento></bts:tipoDocumento>
            <bts:nacionalidadId>4</bts:nacionalidadId>
            <bts:estadoCivilId>1</bts:estadoCivilId>
         </bts:sdtPersona>
      </bts:BTPartners.CrearPersonaCliente>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?CrearPersonaCliente' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "3JPL6DC33CD84655A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
   "sdtPartner": {
      "puntoVentaUId": 3,
      "vendedorUId": 56,
      "partnerUId": 23
   },
   "sdtPersona": {
      "nroDocumento": 7896328,
      "estadoCivil": "",
      "segundoNombre": "Carlos",
      "fechaInicioActividad": "2023-09-26",
      "fechaVencimiento": "2024-09-26",
      "segundoApellido": "Gimenez",
      "fechaNacimiento": "1998-09-26",
      "telefonoCelular": 25874532,
      "tipoDocumentoId": 1,
      "actividadLaboral": "",
      "clasificacionInternaId": 2,
      "sexo": "M",
      "primerNombre": "Luis",
      "clasificacionInterna": "",
      "paisDocumentoId": 845,
      "telefonoFijo": 874525,
      "primerApellido": "Gonzales",
      "ocupacion": "",
      "sector": "",
      "paisDocumento": "",
      "ocupacionId": 8,
      "nacionalidad": "",
      "sueldo": 7845,
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
      },
      "correoElectronico": "juanLui@mail.com",
      "sectorId": 2,
      "actividadLaboralId": 3,
      "tipoDocumento": "",
      "nacionalidadId": 4,
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
      <BTPartners.CrearPersonaClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <clienteUId>181</clienteUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>770</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.CrearPersonaCliente</Servicio>
            <Fecha>2017-12-14</Fecha>
            <Requerimiento/>
            <Hora>18:17:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.CrearPersonaClienteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "clienteUId": "202",
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPartners.CrearPersonaCliente",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "17:08:56"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->

::: details sBTPartnerInReq  

### sBTPartnerInReq

::: center 
Los campos del tipo de dato estructurado sBTPartnerInReq son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
partnerUId | Int | Identificador del Partner.
puntoVentaUId	 | Int | Identificador del punto de venta.
vendedorUId	 | Int | Identificador del vendedor.
:::

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
correoElectronico | String | Correo electronico.
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

::: details sBTDomicilioCompleto  

### sBTDomicilioCompleto

::: center 
Los campos del tipo de dato estructurado sBTDomicilioCompleto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
agrupador1 | String | Nombre agrupador 1.
agrupador1Id | Short | Identificador agrupador 1.
agrupador2 | String | Nombre agrupador 2.
agrupador2Id | Short | Identificador agrupador 1.
agrupador3 | String | Nombre agrupador 3.
agrupador3Id | Short | Identificador agrupador 3.
agrupador4 | String | Nombre agrupador 4.
agrupador4Id | Short | Identificador agrupador 4.
agrupador5 | String | Nombre agrupador 5.
agrupador5Id | Short | Identificador agrupador 1.
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
:::
<!-- CIERRA SDT -->