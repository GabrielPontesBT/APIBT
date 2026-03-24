---
title: Obtener Servicios
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
::: note Método para obtener un listado de los servicios de CASH.

**Nombre publicación:** BTCASHManagement.ObtenerServicios

**Programa:** RBTPGC17

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtServicios | [sBTConvServicioCASH](#sbtconvserviciocash) | Listados de los servicios del contrato.
 
@tab Errores

No aplica.
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
      <bts:BTCASHManagement.ObtenerServicios>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>744307195e99865B3A2E76CF</bts:Token>
         </bts:Btinreq>
      </bts:BTCASHManagement.ObtenerServicios>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?ObtenerServicios=' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 5671946f-3030-43ca-9d7b-58d54d588d21,a454ff51-cf63-4795-a47b-05a16d861dcd' \
  -H 'cache-control: no-cache' \
  -d '{
	"Btinreq": {
		"Device": "GZ",
		"Usuario": "Instalador",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
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
      <BTCASHManagement.ObtenerServiciosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>744307195e99865B3A2E76CF</Token>
         </Btinreq>
         <sdtServicios>
            <sBTConvServicioCASH>
               <tipoServicio>P</tipoServicio>
               <contratoId>0</contratoId>
               <servicio>15</servicio>
               <descripcionServicio>Transferencias Individuales</descripcionServicio>
            </sBTConvServicioCASH>
            <sBTConvServicioCASH>
               <tipoServicio>P</tipoServicio>
               <contratoId>0</contratoId>
               <servicio>20</servicio>
               <descripcionServicio>Nomina</descripcionServicio>
            </sBTConvServicioCASH>
            <sBTConvServicioCASH>
               <tipoServicio>P</tipoServicio>
               <contratoId>0</contratoId>
               <servicio>50</servicio>
               <descripcionServicio>Proveedores</descripcionServicio>
            </sBTConvServicioCASH>
            <sBTConvServicioCASH>
               <tipoServicio>P</tipoServicio>
               <contratoId>0</contratoId>
               <servicio>101</servicio>
               <descripcionServicio>Debitos Automaticos</descripcionServicio>
            </sBTConvServicioCASH>
            <sBTConvServicioCASH>
               <tipoServicio>P</tipoServicio>
               <contratoId>0</contratoId>
               <servicio>301</servicio>
               <descripcionServicio>Cobro masivos de prestamos</descripcionServicio>
            </sBTConvServicioCASH>
            <sBTConvServicioCASH>
               <tipoServicio>P</tipoServicio>
               <contratoId>0</contratoId>
               <servicio>302</servicio>
               <descripcionServicio>Cob.indiv.prestamos</descripcionServicio>
            </sBTConvServicioCASH>
            <sBTConvServicioCASH>
               <tipoServicio>C</tipoServicio>
               <contratoId>0</contratoId>
               <servicio>500</servicio>
               <descripcionServicio>Recaudaciones por Debito Automatico</descripcionServicio>
            </sBTConvServicioCASH>
            <sBTConvServicioCASH>
               <tipoServicio>C</tipoServicio>
               <contratoId>0</contratoId>
               <servicio>505</servicio>
               <descripcionServicio>Recaudaciones por Canales</descripcionServicio>
            </sBTConvServicioCASH>
            <sBTConvServicioCASH>
               <tipoServicio>C</tipoServicio>
               <contratoId>0</contratoId>
               <servicio>515</servicio>
               <descripcionServicio>Recaudaciones por Caja(Codigo de Barras)</descripcionServicio>
            </sBTConvServicioCASH>
            <sBTConvServicioCASH>
               <tipoServicio>C</tipoServicio>
               <contratoId>0</contratoId>
               <servicio>516</servicio>
               <descripcionServicio>Recaudaciones T.C. (Codigo de Barras)</descripcionServicio>
            </sBTConvServicioCASH>
            <sBTConvServicioCASH>
               <tipoServicio>C</tipoServicio>
               <contratoId>0</contratoId>
               <servicio>520</servicio>
               <descripcionServicio>Recaudos con Base</descripcionServicio>
            </sBTConvServicioCASH>
         </sdtServicios>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>254025</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCASHManagement.ObtenerServicios</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-11-27</Fecha>
            <Hora>15:53:05</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.ObtenerServiciosResponse>
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
   "sdtServicios": {
      "sBTConvServicioCASH": [
      {
         "tipoServicio": "P",
         "contratoId": 0,
         "servicio": 15,
         "descripcionServicio": "Transferencias Individuales"
      },
      {
         "tipoServicio": "P",
         "contratoId": 0,
         "servicio": 20,
         "descripcionServicio": "Nomina"
      },
      {
         "tipoServicio": "P",
         "contratoId": 0,
         "servicio": 50,
         "descripcionServicio": "Proveedores"
      },
      {
         "tipoServicio": "P",
         "contratoId": 0,
         "servicio": 101,
         "descripcionServicio": "Debitos Automaticos"
      },
      {
         "tipoServicio": "P",
         "contratoId": 0,
         "servicio": 301,
         "descripcionServicio": "Cobro masivos de prestamos"
      },
      {
         "tipoServicio": "P",
         "contratoId": 0,
         "servicio": 302,
         "descripcionServicio": "Cob.indiv.prestamos"
      },
      {
         "tipoServicio": "C",
         "contratoId": 0,
         "servicio": 500,
         "descripcionServicio": "Recaudaciones por Debito Automatico"
      },
      {
         "tipoServicio": "C",
         "contratoId": 0,
         "servicio": 505,
         "descripcionServicio": "Recaudaciones por Canales"
      },
      {
         "tipoServicio": "C",
         "contratoId": 0,
         "servicio": 515,
         "descripcionServicio": "Recaudaciones por Caja(Codigo de Barras)"
      },
      {
         "tipoServicio": "C",
         "contratoId": 0,
         "servicio": 516,
         "descripcionServicio": "Recaudaciones T.C. (Codigo de Barras)"
      },
      {
         "tipoServicio": "C",
         "contratoId": 0,
         "servicio": 520,
         "descripcionServicio": "Recaudos con Base"
      }
      ]
   },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 7174,
        "Estado": "OK",
        "Servicio": "BTCASHManagement.ObtenerServicios",
        "Requerimiento": "1",
        "Fecha": "2019-04-24",
        "Hora": "15:23:16",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTConvServicioCASH  

### sBTConvServicioCASH

::: center 
Los campos del tipo de dato estructurado sBTConvServicioCASH son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descServicio | String | Descripción de servicios.
idContrato | Long | Identificador del contrato CASH.
servicio | Short | Servicio CASH.
tipoServicio | String | Tipo de servicio.
:::
<!-- CIERRA SDT -->