--- 
title: Obtener Roles de Tarea 
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
::: note Método para obtener los roles de una determinada tarea de Workflow.

**Nombre publicación:** BTWorkflow.ObtenerRolesDeTarea

**Programa:** RBTPG465

**Global/País:** Global
:::
<!-- CIERRA LOS DATOS DEL MÉTODO -->

<!-- ABRE LA TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
procesoId | Int | Identificador de proceso Workflow.
tareaId | Int | Identificador de tarea Workflow.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtRoles | [sBTRolWF](#sbtrolwf) | Listado de roles de Workflow.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de proceso.
30002 | No se recibió el identificador de tarea.
40001 | El proceso ingresado no existe.
40002 | La tarea ingresada no existe para el proceso.
40003 | No existen roles en el sistema para la tarea ingresada.
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
      <bts:BTWorkflow.ObtenerRolesDeTarea>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>GP</bts:Device>
            <bts:Token>151D0C3440510F1D04029085</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
         </bts:Btinreq>
         <bts:procesoId>1</bts:procesoId>
         <bts:tareaId>11</bts:tareaId>
      </bts:BTWorkflow.ObtenerRolesDeTarea>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTWorkflow_v1?ObtenerRolesDeTarea \
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
   "procesoId": "1",
   "tareaId": "11"
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
      <BTWorkflow.ObtenerRolesDeTareaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Token>151D0C3440510F1D04029085</Token>
            <Canal>BTDIGITAL</Canal>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
         </Btinreq>
         <sdtRoles>
            <sBTRolWF>
               <descripcion>Gerente de Sucursal</descripcion>
               <codigo>3</codigo>
            </sBTRolWF>
            <sBTRolWF>
               <descripcion>Asesor de Créditos</descripcion>
               <codigo>6</codigo>
            </sBTRolWF>
            <sBTRolWF>
               <descripcion>Gte. Microfinanzas</descripcion>
               <codigo>7</codigo>
            </sBTRolWF>
            <sBTRolWF>
               <descripcion>Gerente Consumo</descripcion>
               <codigo>8</codigo>
            </sBTRolWF>
            <sBTRolWF>
               <descripcion>Gerente Comercial</descripcion>
               <codigo>9</codigo>
            </sBTRolWF>
            <sBTRolWF>
               <descripcion>Comité de Crédito</descripcion>
               <codigo>10</codigo>
            </sBTRolWF>
         </sdtRoles>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Canal>BTDIGITAL</Canal>
            <Fecha>2022-11-29</Fecha>
            <Servicio>BTWorkflow.ObtenerRolesDeTarea</Servicio>
            <Hora>13:11:02</Hora>
            <Numero>225658</Numero>
            <Requerimiento>1</Requerimiento>
         </Btoutreq>
      </BTWorkflow.ObtenerRolesDeTareaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
   "Btinreq": {
      "Device": "GP",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "47D750A861C4243EDE981344"
   },
   "sdtRoles": {
      "sBTRolWF": [
         {
            "descripcion": "Gerente de Sucursal",
            "codigo": "3"
         },
         {
            "descripcion": "Asesor de Créditos",
            "codigo": "6"
         },
         {
            "descripcion": "Gte. Microfinanzas",
            "codigo": "7"
         },
         {
            "descripcion": "Gerente Consumo",
            "codigo": "8"
         },
         {
            "descripcion": "Gerente Comercial",
            "codigo": "9"
         },
         {
            "descripcion": "Comité de Crédito",
            "codigo": "10"
         }
      ]
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Estado": "OK",
      "Canal": "BTDIGITAL",
      "Fecha": "2022-11-29",
      "Servicio": "BTWorkflow.ObtenerRolesDeTarea",
      "Hora": "13:11:02",
      "Numero": "225658",
      "Requerimiento": "1"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT --> 
::: details sBTRolWF  

### sBTRolWF

::: center 
Los campos del tipo de dato estructurado sBTRolWF son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
codigo | Int | Código del rol.
descripcion | String | Descripción del rol.
:::
<!-- CIERRA SDT -->