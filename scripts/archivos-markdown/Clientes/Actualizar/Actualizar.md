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
::: note Método para actualizar los datos de un cliente.

**Nombre publicación:** BTClientes.Actualizar

**Programa:** RBTPG092

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
sdtPersona | [sBTPersonaFisica](#sbtpersonafisica) | Datos de cliente.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001	| No se recibió el identificador del cliente.
30002	| No se recuperó la cuenta para el identificador de cliente: [Número de Identificador].
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
40035	| Debe ingresar Segmento.
40036	| El código de Segmento no existe.
40037	| Debe ingresar clasificación interna.
40038	| El código de clasificación interna no existe.
40039	| Debe ingresar código de sector.
40040	| El código de Sector no existe.
40041	| Debe ingresar Actividad Laboral.
40042	| El código de Actividad Laboral no existe.
40043	| El País de la nacionalidad no existe.
40044	| El sexo ingresado no es válido.
40049	| Error al obtener el número de cuenta Bantotal.
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
      <bts:BTClientes.Actualizar>
         <bts:Btinreq>
            <bts:Device>AS</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>8301C31B4F2699A90D39F77E</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>301</bts:clienteUId>
         <bts:sdtPersona>
            <bts:nroDocumento>52487610</bts:nroDocumento>
            <bts:estadoCivil></bts:estadoCivil>
            <bts:fechaInicioActividad>2019-09-21</bts:fechaInicioActividad>
            <bts:segundoNombre>Mauricio</bts:segundoNombre>
            <bts:fechaVencimiento>2019-03-15</bts:fechaVencimiento>
            <bts:segundoApellido>HERNANDEZ</bts:segundoApellido>
            <bts:fechaNacimiento>1995-11-05</bts:fechaNacimiento>
            <bts:telefonoCelular>098712654</bts:telefonoCelular>
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
            <bts:actividadLaboral></bts:actividadLaboral>
            <bts:clasificacionInternaId>17</bts:clasificacionInternaId>
            <bts:sexo>M</bts:sexo>
            <bts:primerNombre>ANDRES</bts:primerNombre>
            <bts:clasificacionInterna></bts:clasificacionInterna>
            <bts:paisDocumentoId>845</bts:paisDocumentoId>
            <bts:telefonoFijo>42276832</bts:telefonoFijo>
            <bts:primerApellido>PEREIRA</bts:primerApellido>
            <bts:ocupacion></bts:ocupacion>
            <bts:sector></bts:sector>
            <bts:paisDocumento></bts:paisDocumento>
            <bts:ocupacionId>1</bts:ocupacionId>
            <bts:sueldo>15000</bts:sueldo>
            <bts:nacionalidad></bts:nacionalidad>
            <bts:comentarioCorreo>Correo Profesional</bts:comentarioCorreo>
            <bts:domicilios>
               <bts:SdtsBTDomicilioCompleto>
                  <bts:coloniaId>1</bts:coloniaId>
                  <bts:agrupador1Id>3</bts:agrupador1Id>
                  <bts:agrupador5></bts:agrupador5>
                  <bts:departamento></bts:departamento>
                  <bts:agrupador4>Cerrito</bts:agrupador4>
                  <bts:agrupador3Id>1</bts:agrupador3Id>
                  <bts:detalleUbicacion>ENFRENTE A CAFE LA FARMACIA</bts:detalleUbicacion>
                  <bts:barrio></bts:barrio>
                  <bts:agrupador3>06</bts:agrupador3>
                  <bts:agrupador2>1500</bts:agrupador2>
                  <bts:agrupador1>Ituzaingó</bts:agrupador1>
                  <bts:agrupador5Id></bts:agrupador5Id>
                  <bts:tipoDomicilio></bts:tipoDomicilio>
                  <bts:ubicacionDesde>2023-09-17</bts:ubicacionDesde>
                  <bts:direccion></bts:direccion>
                  <bts:colonia></bts:colonia>
                  <bts:paisId>845</bts:paisId>
                  <bts:tipoVivienda></bts:tipoVivienda>
                  <bts:pais></bts:pais>
                  <bts:agrupador2Id>1</bts:agrupador2Id>
                  <bts:codigoPostal>11800</bts:codigoPostal>
                  <bts:tipoViviendaId>5</bts:tipoViviendaId>
                  <bts:agrupador4Id>1</bts:agrupador4Id>
                  <bts:barrioId>380</bts:barrioId>
                  <bts:localidadId>10</bts:localidadId>
                  <bts:localidad></bts:localidad>
                  <bts:tipoDomicilioId>1</bts:tipoDomicilioId>
                  <bts:departamentoId>10</bts:departamentoId>
               </bts:SdtsBTDomicilioCompleto>
            </bts:domicilios>
            <bts:datosAdicionales>
               <bts:SdtsBTDatoLista>
                  <bts:valor></bts:valor>
                  <bts:clave></bts:clave>
               </bts:SdtsBTDatoLista>
            </bts:datosAdicionales>
            <bts:correoElectronico>Andres@hotmail.com</bts:correoElectronico>
            <bts:sectorId>1</bts:sectorId>
            <bts:actividadLaboralId>74220</bts:actividadLaboralId>
            <bts:tipoDocumento></bts:tipoDocumento>
            <bts:nacionalidadId>845</bts:nacionalidadId>
            <bts:estadoCivilId>1</bts:estadoCivilId>
         </bts:sdtPersona>
      </bts:BTClientes.Actualizar>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?Actualizar=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 531f48b0-2c02-1cfc-7v5c-a063d4hl5nb8' \
  -d '{
	"Btinreq": {
          "Device": "AS",
          "Usuario": "INSTALADOR",
          "Requerimiento": "",
          "Canal": "BTDIGITAL",
          "Token": "8301C31B4F2699A90D39F77E"
        },
        "clienteUId": 301,
        "sdtPersona": {
          "nroDocumento": 52487610,
          "estadoCivil": "",
          "fechaInicioActividad": "2019-09-21",
          "segundoNombre": "Mauricio",
          "fechaVencimiento": "2019-03-15",
          "segundoApellido": "HERNANDEZ",
          "fechaNacimiento": "1995-11-05",
          "telefonoCelular": 98712654,
          "tipoDocumentoId": 1,
          "actividadLaboral": "",
          "clasificacionInternaId": 17,
          "sexo": "M",
          "primerNombre": "ANDRES",
          "clasificacionInterna": "",
          "paisDocumentoId": 845,
          "telefonoFijo": 42276832,
          "primerApellido": "PEREIRA",
          "ocupacion": "",
          "sector": "",
          "paisDocumento": "",
          "ocupacionId": 1,
          "sueldo": 15000,
          "nacionalidad": "",
          "comentarioCorreo": "Correo Profesional",
          "domicilios": {
            "SdtsBTDomicilioCompleto": {
              "coloniaId": 1,
              "agrupador1Id": 3,
              "agrupador5": "",  
              "departamento": "",
              "agrupador4": "Cerrito",
              "agrupador3Id": 1,
              "detalleUbicacion": "ENFRENTE A CAFE LA FARMACIA",
              "barrio": "",
              "agrupador3": 6,
              "agrupador2": 1500,
              "agrupador1": "Ituzaingó",
              "agrupador5Id": "",
              "tipoDomicilio": "",
              "ubicacionDesde": "2023-09-17",
              "direccion": "",
              "colonia": "",
              "paisId": 845,
              "tipoVivienda": "",
              "pais": "",
              "agrupador2Id": 1,
              "codigoPostal": 11800,
              "tipoViviendaId": 5,
              "agrupador4Id": 1,
              "barrioId": 380,
              "localidadId": 10,
              "localidad": "",
              "tipoDomicilioId": 1,
              "departamentoId": 10
            }
          },
          "datosAdicionales": {
            "SdtsBTDatoLista": {
              "valor": "",
              "clave": ""
            }
          },
          "correoElectronico": "Andres@hotmail.com",
          "sectorId": 1,
          "actividadLaboralId": 74220,
          "tipoDocumento": "",
          "nacionalidadId": 845,
          "estadoCivilId": 1
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
      <BTClientes.ActualizarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>8301C31B4F2699A90D39F77E</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35494</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.Actualizar</Servicio>
            <Requerimiento/>
            <Fecha>2025-05-20</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:27:47</Hora>
         </Btoutreq>
      </BTClientes.ActualizarResponse>
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
          "Token": "8301C31B4F2699A90D39F77E"
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Numero": 35494,
          "Estado": "OK",
          "Servicio": "BTClientes.Actualizar",
          "Requerimiento": "",
          "Fecha": "2025-05-20",
          "Canal": "BTDIGITAL",
          "Hora": "11:27:47"
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