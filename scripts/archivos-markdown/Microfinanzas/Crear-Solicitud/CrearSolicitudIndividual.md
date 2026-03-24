---
title: Crear Solicitud Individual
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
::: note Método para crear una solicitud de crédito individual.

**Nombre publicación:** BTMicrofinanzas.CrearSolicitudIndividual

**Programa:** RBTPG410

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
procesoId | Short | [Hidden: Identificador de proceso Workflow].
tareaId | Short | [Hidden: Identificador de tarea Workflow].
tipoSolicitud | Byte | [Hidden: Identificador de tipo de solicitud 'Nueva'].
usuarioIngreso | String | Usuario que ingresa la solicitud. En caso de no especificarse, se asigna el usuario conectado.
fechaIngreso | Date | Fecha en la que se ingresa la solicitud. En caso de no especificarse, se asigna fecha apertura.
usuarioAsignacion | String | Usuario al que queda asignada la tarea de solicitud. En caso de no especificarse, se asigna al Asesor de créditos.
datosSolicitud | [sBTSolicitudIndividual](#sbtsolicitudindividual) | Datos de la solicitud.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
solicitudUId | Long | Identificador de instancia Workflow.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de proceso.
30002 | No se recibió el identificador de tarea.
30003 | No se recibió el identificador del cliente.
30004 | No se recuperó la cuenta para el Identificador de cliente.
30011 | No existe FSD008 para la cuenta [Número de cuenta].
30012 | No se obtuvo el titular representativo de la cuenta [Número de cuenta].
30013 | No se pudo determinar la sucursal de la solicitud.
30014 | No se pudo determinar el asesor de la solicitud.
30015 | El código de campaña no existe.
30016 | El código de origen de captación no existe.
30020 en adelante | Controles de regla de negocio.
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
      <bts:BTMicrofinanzas.CrearSolicitudIndividual>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>419385365CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:usuarioIngreso>INSTALADOR</bts:usuarioIngreso>
         <bts:fechaIngreso></bts:fechaIngreso>
         <bts:usuarioAsignacion>INSTALADOR</bts:usuarioAsignacion>
         <bts:datosSolicitud>
            <bts:clienteUId>4</bts:clienteUId>
            <bts:asesorId>1</bts:asesorId>
            <bts:sucursalId>1</bts:sucursalId>
            <bts:origenCaptacion>5</bts:origenCaptacion>
            <bts:asunto>SIN ASUNTO</bts:asunto>
            <bts:comentario>SOLICITUD DESDE API</bts:comentario>
         </bts:datosSolicitud>
      </bts:BTMicrofinanzas.CrearSolicitudIndividual>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?CrearSolicitudIndividual \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "usuarioIngreso": "INSTALADOR",
    "usuarioAsignacion": "INSTALADOR",
    "datosSolicitud": {
        "clienteUId": "4",
        "asesorId": "1",
        "sucursalId": "1",
        "origenCaptacion": "5",
        "asunto": "SIN ASUNTO",
        "comentario": "SOLICITUD DESDE API",
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
      <BTMicrofinanzas.CrearSolicitudIndividualResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>419385365CD285A89A23FBEE</Token>
            <Device>GP</Device>
         </Btinreq>
         <solicitudUId>10847</solicitudUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.CrearSolicitudIndividual</Servicio>
            <Fecha>2019-09-10</Fecha>
            <Hora>14:31:41</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>121</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.CrearSolicitudIndividualResponse>
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
      "solicitudUId": "10847",
      "Btoutreq": {
         "Canal": "BTDIGITAL",
         "Servicio": "BTMicrofinanzas.CrearSolicitudIndividual",
         "Fecha": "2019-09-10",
         "Hora": "14:31:41",
         "Requerimiento": "95",
         "Numero": "121",
         "Estado": "OK"
      }
}'   
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSolicitudIndividual  

### sBTSolicitudIndividual

::: center 
Los campos del tipo de dato estructurado sBTSolicitudIndividual son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
asesorId | Int | Identificador del Asesor de la solicitud. En caso de no especificarse, se asigna el Asesor del cliente. 
asunto | String | Asunto de la solicitud.
clienteUId | Long | Identificador único de cliente que solicita el préstamo. 
comentario | String | Comentario de la solicitud.
origenCaptacion | Int | Identificador de origen captación. 
sucursalId | Int | Sucursal de la solicitud. En caso de no especificarse, se asigna la sucursal del cliente. 
:::
<!-- CIERRA SDT -->