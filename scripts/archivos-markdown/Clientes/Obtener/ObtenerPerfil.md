---
title: Obtener Perfil
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
::: note Método para obtener los datos de la persona titular de una cuenta cliente.

**Nombre publicación:** BTClientes.ObtenerPerfil

**Programa:** RBTPG002

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
:--------- | :----------- | :-----------
sCTPersona | [sCTPersona](#sctpersona) | Datos de cliente.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el Identificador.
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
      <bts:BTClientes.ObtenerPerfil>
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
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPerfil=' \
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
      <BTClientes.ObtenerPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.118</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>7d434761a1F955E77534D3E0</Token>
         </Btinreq>
         <sCTPersona>
            <profesion/>
            <estadoCivil/>
            <domicilio>
               <localidad>LOS CHILCOS</localidad>
               <departamento>BUENOS AIRES</departamento>
               <direccion>? 123 ?</direccion>
               <pais>ARGENTINA, REPUBLICA</pais>
               <barrio/>
               <propietario/>
               <longitud>0E-9.000000000</longitud>
               <zona/>
               <codPostal/>
               <latitud>0E-9.000000000</latitud>
            </domicilio>
            <fechaNacimiento>1950-12-12</fechaNacimiento>
            <apellidos>Prueba Pruebass</apellidos>
            <personaUId>0</personaUId>
            <sexo>Masculino</sexo>
            <actividad>Familias y Personas Fisicas</actividad>
            <telefono>55555555</telefono>
            <ingresoMensual>0.00</ingresoMensual>
            <email/>
            <ocupacion/>
            <hijos>0</hijos>
            <documento>
               <tipoDocumento>LIBRE</tipoDocumento>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <nombreTipoDocumento>LIBRETA CIVICA</nombreTipoDocumento>
               <nroDocumento>5832073</nroDocumento>
               <pais>ARGENTINA, REPUBLICA</pais>
            </documento>
            <nacionalidad/>
            <celular/>
            <antiguedadLaboral>0</antiguedadLaboral>
            <nivelEducativo/>
            <nombres>Probando Pruebas</nombres>
            <otrosIngresos>0.00</otrosIngresos>
         </sCTPersona>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2181</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerPerfil</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-02-13</Fecha>
            <Hora>16:02:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerPerfilResponse>
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
    "sCTPersona": {
        "profesion": "",
        "estadoCivil": "Soltero/a",
        "domicilio": {
            "localidad": "",
            "departamento": "BUENOS AIRES",
            "direccion": "18 de Julio 25",
            "pais": "ARGENTINA, REPUBLICA",
            "barrio": "",
            "propietario": "",
            "longitud": 0,
            "zona": "",
            "codPostal": "",
            "latitud": 0
        },
        "fechaNacimiento": "1901-01-01",
        "apellidos": "Bengoechea Morena",
        "personaUId": 0,
        "sexo": "",
        "actividad": "",
        "telefono": "",
        "ingresoMensual": 0,
        "email": "",
        "ocupacion": "",
        "hijos": 0,
        "documento": {
            "tipoDocumento": "D.N.I",
            "fechaVencimiento": "0000-00-00",
            "nombreTipoDocumento": "D.N.I.",
            "nroDocumento": "10001848",
            "pais": "ARGENTINA, REPUBLICA"
        },
        "nacionalidad": "",
        "celular": "",
        "antiguedadLaboral": 0,
        "nivelEducativo": "",
        "nombres": "Pablo Javier",
        "otrosIngresos": 0
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 2207,
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerPerfil",
        "Requerimiento": "",
        "Fecha": "2019-02-13",
        "Hora": "16:34:42",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sCTPersona  

### sCTPersona

::: center 
Los campos del tipo de dato estructurado sCTPersona son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
actividad | String | Actividad laboral. 
antiguedadLaboral | Short | Antigüedad laboral. 
apellidos | String | Apellidos. 
celular | String | Celular. 
documento | [sCTDocumento](#sctdocumento) | Datos del documento. 
domicilio | [sCTDomicilio](#sctdomicilio) | Datos de domicilio. 
email | String | Corre electrónico. 
estadoCivil | String | Estado civil. 
fechaNacimiento | Date | Fecha de nacimiento. 
hijos | Byte | Cantidad de hijos. 
ingresoMensual | Double | Ingreso mensual. 
nacionalidad | String | Nacionalidad. 
nivelEducativo | String | Nivel de educación. 
nombres | String | Nombres. 
ocupacion | String | Ocupación de la persona. 
otrosIngresos | Double | Otros ingresos. 
personaUId | Long | Identificador único de persona. 
profesion | String | Profesión. 
sexo | String | Sexo (M/F). 
telefono | String | Teléfono. 

### sCTDomicilio

::: center 
Los campos del tipo de dato estructurado sCTDomicilio son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
barrio | String | Barrio. 
codPostal | String | Código postal. 
departamento | String | Departamento del domicilio. 
direccion | String | Dirección. 
latitud | Double | Latitud del domicilio. 
localidad | String | Localidad del domicilio. 
longitud | Double | Longitud del domicilio. 
pais | String | País del domicilio. 
propietario | String | Propietario del domicilio. 
zona | String | Zona del domicilio. 

### sCTDocumento

::: center 
Los campos del tipo de dato estructurado sCTDocumento son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
fechaVencimiento | Date | Fecha de vencimiento del documento. 
nombreTipoDocumento | String | Nombre del tipo de documento. 
nroDocumento | String | Número de documento. 
pais | String | País del documento. 
tipoDocumento | String | Tipo del documento. 
:::
<!-- CIERRA SDT -->