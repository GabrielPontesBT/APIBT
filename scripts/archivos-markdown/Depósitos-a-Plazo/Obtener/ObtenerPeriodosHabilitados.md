---
title: Obtener Períodos Habilitados
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
::: note Método para obtener los períodos habilitados de un deposito a plazo.

**Nombre publicación:** BTDepositosAPlazo.ObtenerPeriodosHabilitados

**Programa:** RBTPG492

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
productoUId | Long | Identificador único del producto.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtDatosExtendidos | [sBTDatoExtendido](#sbtdatoextendido) | Listado de datos complementarios.
sdtPeriodos | [sBTPeriodoHabilitado](#sbtperiodohabilitado) | Listado de períodos habilitados.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador del Producto. 
30006 | No existe registro para el identificador único. 
40001 | El producto no corresponde a un producto de depósito a plazo. 
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
      <bts:BTDepositosAPlazo.ObtenerPeriodosHabilitados>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>45A5647518BC5FBB73003EA9</bts:Token>
         </bts:Btinreq>
         <bts:productoUId>184</bts:productoUId>
      </bts:BTDepositosAPlazo.ObtenerPeriodosHabilitados>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerPeriodosHabilitados=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "GZ",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "productoUId": 184
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
      <BTDepositosAPlazo.ObtenerPeriodosHabilitadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>45A5647518BC5FBB73003EA9</Token>
         </Btinreq>
         <sdtDatosExtendidos></sdtDatosExtendidos>
         <sdtPeriodos>
            <sBTPeriodoHabilitado>
               <descripcion>Semanal</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>7</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Quincenal</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>14</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Mensual</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>30</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Bimestral</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>60</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Trimestral</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>90</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Cuatrimestral</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>120</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Quintumestral</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>150</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Semestral</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>180</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Anual</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>360</periodo>
            </sBTPeriodoHabilitado>
         </sdtPeriodos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16830</Numero>
            <Servicio>BTDepositosAPlazo.ObtenerPeriodosHabilitados</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-25</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>18:12:09</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerPeriodosHabilitadosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "GZ",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtDatosExtendidos": "",
    "sdtPeriodos": {
        "sBTPeriodoHabilitado": [
        {
            "descripcion": "Semanal",
            "datosExtendidos": "",
            "periodo": 7
        },
        {
            "descripcion": "Quincenal",
            "datosExtendidos": "",
            "periodo": 14
        },
        {
            "descripcion": "Mensual",
            "datosExtendidos": "",
            "periodo": 30
        },
        {
            "descripcion": "Bimestral",
            "datosExtendidos": "",
            "periodo": 60
        },
        {
            "descripcion": "Trimestral",
            "datosExtendidos": "",
            "periodo": 90
        },
        {
            "descripcion": "Cuatrimestral",
            "datosExtendidos": "",
            "periodo": 120
        },
        {
            "descripcion": "Quintumestral",
            "datosExtendidos": "",
            "periodo": 150
        },
        {
            "descripcion": "Semestral",
            "datosExtendidos": "",
            "periodo": 180
        },
        {
            "descripcion": "Anual",
            "datosExtendidos": "",
            "periodo": 360
        }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "145",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ObtenerPeriodosHabilitados",
        "Fecha": "2023-03-01",
        "Requerimiento": "1",
        "Hora": "12:04:07",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->

::: details sBTDatoExtendido  

### sBTDatoExtendido

::: center 
Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clave | String | Clave del dato extendido. 
lista | [sBTDatosLista](#sbtdatolista) | Lista de datos. 
tipo | String | Tipo de dato extendido. 
valor | String | Valor de dato extendido. 

### sBTDatoLista

::: center 
Los campos del tipo de dato estructurado sBTDatoLista son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clave | String | Identificador de información adicional. 
valor | String | Valor de información adicional. 
:::

::: details sBTPeriodoHabilitado  

### sBTPeriodoHabilitado

::: center 
Los campos del tipo de dato estructurado sBTPeriodoHabilitado son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
datosExtendidos | [sBTDatoExtendido](#sbtdatoextendidosalida) | Listado de datos complementarios. 
descripcion | String | Descripción. 
periodo | Int | Período. 

### sBTDatoExtendidoSalida

::: center 
Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clave | String | Clave del dato extendido. 
lista | [sBTDatosLista](#sbtdatolistasalida) | Lista de datos. 
tipo | String | Tipo de dato extendido. 
valor | String | Valor de dato extendido. 

### sBTDatoListaSalida

::: center 
Los campos del tipo de dato estructurado sBTDatoLista son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clave | String | Identificador de información adicional. 
valor | String | Valor de información adicional. 
:::
<!-- CIERRA SDT -->