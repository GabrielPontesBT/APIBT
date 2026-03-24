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
::: note Método para obtener los datos de un ahorro programado.

**Nombre publicación:** BTAhorroProgramado.Obtener

**Programa:** RBTPG256

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
ahorroUId | Long | Identificador único del ahorro.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtDetalleAhorro | [sBTDetalleAhorro](#sbtdetalleahorro) | Datos del ahorro.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de la operación.
30011 | No se recupero la operación para el identificador recibido.
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
      <bts:BTAhorroProgramado.Obtener>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>f22e83a6eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:ahorroUId>205</bts:ahorroUId>
      </bts:BTAhorroProgramado.Obtener>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?Obtener=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \
  -d '{
"Btinreq": {
   "Device": "AV",
   "Usuario": "MINSTALADOR",
   "Requerimiento": "",
   "Canal": "BTDIGITAL",
   "Token": "75e20bd1614A8B5C60A82434"
},
   "ahorroUId": 205
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
      <BTAhorroProgramado.ObtenerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f22e83a6eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtDetalleAhorro>
            <plazo>60</plazo>
            <ahorroUId>205</ahorroUId>
            <diaDeIncremento>9</diaDeIncremento>
            <periodicidad>1</periodicidad>
            <fechaAltaSolicitud>2017-03-06</fechaAltaSolicitud>
            <periodosDeGraciaHabilitados>3</periodosDeGraciaHabilitados>
            <fechaVencimiento>2017-05-08</fechaVencimiento>
            <fechaProximaRenovacion>0000-00-00</fechaProximaRenovacion>
            <clienteUId>61</clienteUId>
            <montoMeta>0.00</montoMeta>
            <intentosDeIncrementoUtilizados>0</intentosDeIncrementoUtilizados>
            <productoUId>82</productoUId>
            <periodosDeGraciaUtilizados>0</periodosDeGraciaUtilizados>
            <tasaActual>10.200000</tasaActual>
            <observacion/>
            <tipoDeDia>Días Calendario</tipoDeDia>
            <motivoMeta/>
            <intentosDeIncrementoHabilitados>30</intentosDeIncrementoHabilitados>
            <fechaMeta>0000-00-00</fechaMeta>
            <tasaOriginal>10.200000</tasaOriginal>
            <saldoActual>0.00</saldoActual>
            <tipoTasa>Lineal Anual</tipoTasa>
            <fechaProximoIncremento>2017-06-09</fechaProximoIncremento>
            <renueva>No</renueva>
            <operacionUIdOrigen>541</operacionUIdOrigen>
            <operacionUIdDestino>541</operacionUIdDestino>
            <estado>Cancelado</estado>
            <abono>5000.00</abono>
            <fechaValor>2017-03-09</fechaValor>
         </sdtDetalleAhorro>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>9360</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.Obtener</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:44:25</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ObtenerResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
    "Btinreq": { 
        "Device": "AV", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "75e20bd1614A8B5C60A82434" 
    }, 
    "sdtDetalleAhorro": { 
        "plazo": 60, 
        "ahorroUId": 205, 
        "diaDeIncremento": 9, 
        "periodicidad": 1, 
        "fechaAltaSolicitud": "2017-03-06", 
        "periodosDeGraciaHabilitados": 3, 
        "fechaVencimiento": "2017-05-08", 
        "fechaProximaRenovacion": "0000-00-00", 
        "clienteUId": 61, 
        "montoMeta": 0, 
        "intentosDeIncrementoUtilizados": 0, 
        "productoUId": 82, 
        "periodosDeGraciaUtilizados": 0, 
        "tasaActual": 10.2, 
        "observacion": "", 
        "tipoDeDia": "Días Calendario", 
        "motivoMeta": "", 
        "intentosDeIncrementoHabilitados": 30, 
        "fechaMeta": "0000-00-00", 
        "tasaOriginal": 10.2, 
        "saldoActual": 0, 
        "tipoTasa": "Lineal Anual", 
        "fechaProximoIncremento": "2017-06-09", 
        "renueva": "No", 
        "operacionUIdOrigen": 541, 
        "operacionUIdDestino": 541, 
        "estado": "Cancelado", 
        "abono": 0, 
        "fechaValor": "2017-03-09" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 9361, 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.Obtener", 
        "Fecha": "2019-11-19", 
        "Requerimiento": "", 
        "Hora": "11:46:44", 
        "Canal": "BTDIGITAL" 
    } 
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDetalleAhorro  

### sBTDetalleAhorro

::: center 
Los campos del tipo de dato estructurado sBTDetalleAhorro son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
abono | Double | Abono.
ahorroUId | Long | Identificador único del ahorro.
clienteUId | Long | Identificador único del cliente.
diadeIncremento | Short | Día en que se da el incremento.
estado | String | Estado del ahorro.
fechaAltaSolicitud | Date | Fecha de alta de la solicitud.
fechaMeta | Date | Fecha meta del ahorro.
fechaProximaRenovacion | Date | Fecha del próximo incremento.
fechaProximoIncremento | Date | Fecha del próximo incremento.
fechaValor | Date | Fecha valor del ahorro.
fechaVencimiento | Date | Fecha del vencimiento del ahorro.
intentosDeIncrementoHabilitados | Short | Intentos de incremento habilitados.
intentosDeIncrementoUtilizados | Short | Intentos de incremento utilizados.
montoMeta | Double | Monto meta del ahorro.
motivoMeta | String | Motivo de la meta.
observacion | String | Observación.
operacionUIddestino | Long | Identificador único de la operación de destino.
operacionUIdorigen | Long | Identificador único de la operación de origen.
periodicidad | Short | Periodicidad (en días) del ahorro.
periodosDeGraciaHabilitados | Short | Períodos de gracia habilitados.
periodosDeGraciaUtilizados | Short | Períodos de gracia utilizados.
plazo | Short | Plazo para el ahorro.
productoUId | Long | Identificador único de producto.
renueva | String | ¿Renueva? (S/N).
saldoActual | Double | Saldo actual del ahorro.
tasaActual | Double | Tasa actual.
tasaOriginal | Double | Tasa original.
tipoDeDia | String | Tipo de día utilizado.
tipoTasa | String | Tipo de tasa.
:::
<!-- CIERRA SDT -->