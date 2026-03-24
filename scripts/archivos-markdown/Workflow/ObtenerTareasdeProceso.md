---
title: Obtener Tareas de Proceso
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

<!-- ABRE LOS DATOS DEL MÉTODO -->
::: note Método para obtener las tareas de un determinado proceso de Workflow.

**Nombre publicación:** BTWorkflow.ObtenerTareasDeProceso

**Programa:** RBTPG462

**Global/País:** Global
:::
<!-- CIERRA LOS DATOS DEL MÉTODO -->

<!-- ABRE LA TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
procesoId | Int | Identificador de proceso Workflow.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtTareas | [sBTTareaWF](#sbttareawf) | Listado de tareas Workflow.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de proceso.
40001 | El proceso ingresado no existe.
40002 | No se encontraron tareas para el proceso ingresado.
:::
<!-- CIERRA LA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTWorkflow.ObtenerTareasDeProceso>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>GP</bts:Device>
            <bts:Token>151D0C3440510F1D04029085</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
         </bts:Btinreq>
         <bts:procesoId>1</bts:procesoId>
      </bts:BTWorkflow.ObtenerTareasDeProceso>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTWorkflow_v1?ObtenerTareasDeProceso \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
   "Btinreq": {
      "Canal": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Device": "GP",
      "Requerimiento": "1",
      "Token": "200f0b8b654A8B5C60A82434"
   },
   "procesoId": "1"
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
      <BTWorkflow.ObtenerTareasDeProcesoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Token>151D0C3440510F1D04029085</Token>
            <Canal>BTDIGITAL</Canal>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
         </Btinreq>
         <sdtTareas>
            <sBTTareaWF>
               <descripcion>Solicitud</descripcion>
               <warning>0.00</warning>
               <deadline>0.00</deadline>
               <tareaId>3</tareaId>
               <nombre>Solicitud</nombre>
               <programaPostcondicional/>
            </sBTTareaWF>
            <sBTTareaWF>
               <descripcion>Evaluación / Propuesta</descripcion>
               <warning>0.00</warning>
               <deadline>0.00</deadline>
               <tareaId>7</tareaId>
               <nombre>Evaluación / Propuesta</nombre>
               <programaPostcondicional>ASNG449</programaPostcondicional>
            </sBTTareaWF>
            <sBTTareaWF>
               <descripcion>Aprobación</descripcion>
               <warning>0.00</warning>
               <deadline>0.00</deadline>
               <tareaId>11</tareaId>
               <nombre>Aprobación</nombre>
               <programaPostcondicional/>
            </sBTTareaWF>
            <sBTTareaWF>
               <descripcion>Desembolso</descripcion>
               <warning>0.00</warning>
               <deadline>43200.00</deadline>
               <tareaId>55</tareaId>
               <nombre>Desembolso</nombre>
               <programaPostcondicional/>
            </sBTTareaWF>
         </sdtTareas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Canal>BTDIGITAL</Canal>
            <Fecha>2022-11-29</Fecha>
            <Servicio>BTWorkflow.ObtenerTareasDeProceso</Servicio>
            <Hora>14:57:20</Hora>
            <Numero>225671</Numero>
            <Requerimiento>1</Requerimiento>
         </Btoutreq>
      </BTWorkflow.ObtenerTareasDeProcesoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'
{
   "Btinreq": {
      "Device": "GP",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "47D750A861C4243EDE981344"
   },
   "sdtTareas": {
      "sBTTareaWF": [
      {
         "descripcion": "Solicitud",
         "warning": "0.00",
         "deadline": "0.00",
         "tareaId": "3",
         "nombre": "Solicitud",
         "programaPostcondicional": ""
      },
      {
         "descripcion": "Evaluación / Propuesta",
         "warning": "0.00",
         "deadline": "0.00",
         "tareaId": "7",
         "nombre": "Evaluación / Propuesta",
         "programaPostcondicional": "ASNG449"
      },
      {
         "descripcion": "Aprobación",
         "warning": "0.00",
         "deadline": "0.00",
         "tareaId": "11",
         "nombre": "Aprobación",
         "programaPostcondicional": ""
      },
      {
         "descripcion": "Desembolso",
         "warning": "0.00",
         "deadline": "43200.00",
         "tareaId": "55",
         "nombre": "Desembolso",
         "programaPostcondicional": ""
      }
      ]
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Estado": "OK",
      "Canal": "BTDIGITAL",
      "Fecha": "2022-11-29",
      "Servicio": "BTWorkflow.ObtenerTareasDeProceso",
      "Hora": "14:57:20",
      "Numero": "225671",
      "Requerimiento": "1"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

<!-- ABRE SDT --> 
## **Tipos de Dato Estructurado**

::: details sBTTareaWF  

### sBTTareaWF

::: center 
Los campos del tipo de dato estructurado sBTTareaWF son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
deadline | Double | Tiempo de deadline.
descripcion | String | Descripción de la tarea.
nombre | String | Nombre de la tarea.
programaPostcondicional | String | Programa postcondicional.
tareaId | Int | Identificador de tarea Workflow.
warning | Double | Tiempo de warning.
:::
<!-- CIERRA SDT -->