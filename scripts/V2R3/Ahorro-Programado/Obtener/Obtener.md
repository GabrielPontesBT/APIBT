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
::: note Método para obtener los datos del ahorro.

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
:--------- | :--------- | :---------
sdtDetalleAhorro | [sBTDetalleAhorro](#sbtdetalleahorro) | Datos del ahorro.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió identificador de la operación.
30011 | No se recuperó la operación para el identificador recibido.
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
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDetalleAhorro  

### sBTDetalleAhorro

::: center 
Los campos del tipo de dato estructurado sBTDetalleAhorro son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
clienteid | Long | identificador único del cliente.  
productoid | Long | identificador único de producto.  
ahorroid | Long | identificador único del ahorro.  
fechavencimiento | Date | fecha del vencimiento del ahorro.  
periodicidad | Short | periodicidad (en días) del ahorro.  
diadeincremento | Short | día en que se da el incremento.  
abono | Double | abono.  
intentosdeincrementohabilitados | Short | intentos de incremento habilitados.  
intentosdeincrementoutilizados | Short | intentos de incremento utilizados.  
periodosdegraciautilizados | Short | períodos de gracia utilizados.  
periodosdegraciahabilitados | Short | períodos de gracia habilitados.  
tasaoriginal | Double | tasa original.  
tasaactual | Double | tasa actual.  
tipotasa | String | tipo de tasa.  
saldoactual | Double | saldo actual del ahorro.  
fechaproximoincremento | Date | fecha del próximo incremento.  
fechaproximarenovacion | Date | fecha del próximo incremento.  
estado | String | estado del ahorro.  
renueva | String | ¿renueva? (s/n).  
observacion | String | observación.  
tipodedia | String | tipo de día utilizado.  
operacionuidorigen | Long | identificador único de la operación de orígen.  
operacionuiddestino | Long | identificador único de la operación de destino.  
plazo | Short | plazo para el ahorro.  
fechaaltasolicitud | Date | fecha de alta de la solicitud.  
fechavalor | Date | fecha valor del ahorro.  
montometa | Double | monto meta del ahorro.  
fechameta | Date | fecha meta del ahorro.  
motivometa | String | motivo de la meta.  

:::
<!-- CIERRA SDT -->