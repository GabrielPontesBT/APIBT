---
title: Obtener Condiciones Generales
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
::: note Método para obtener las condiciones generales ingresadas en el sistema.

**Nombre publicación:** BTIndicadores.ObtenerCondicionesGenerales

**Programa:** RBTPG703

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtCondicionesGenerales | [sBTCondicionesGenerales](#sbtcondicionesgenerales) | Listado de las Condiciones Generales.

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
      <bts:BTIndicadores.ObtenerCondicionesGenerales>
         <bts:Btinreq>
           <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>?</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerCondicionesGenerales>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerCondicionesGenerales' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
      "Btinreq": {
         "Device": 1,
         "Canal": "BTDIGITAL",
         "Token": "959C2E0AEF210ABC0D8AA8F7",
         "Usuario": "INSTALADOR",
         "Requerimiento": "?"
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
      <BTIndicadores.ObtenerCondicionesGeneralesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>?</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>959C2E0AEF210ABC0D8AA8F7</Token>
         </Btinreq>
         <sdtCondicionesGenerales>
            <parametrosGeneralesWF>NO</parametrosGeneralesWF>
            <reglasNegocio>SI</reglasNegocio>
            <debug>SI</debug>
            <opcionPAE>NO</opcionPAE>
            <fechaCierreCanales>2022-10-12</fechaCierreCanales>
            <fechaCierre>2020-10-12</fechaCierre>
            <fechaAperturaCanales>2022-10-13</fechaAperturaCanales>
            <empresasIguales>NO</empresasIguales>
            <opcionWorkFlow>SI</opcionWorkFlow>
            <cantidadPAE>21</cantidadPAE>
            <opcion7x24>SI</opcion7x24>
            <fechaApertura>2020-10-13</fechaApertura>
            <cantidadReglas>294</cantidadReglas>
            <periodo7x24/>
         </sdtCondicionesGenerales>
         <Erroresnegocio/>
         <Btoutreq>
            <Numero>11990</Numero>
            <Estado>OK</Estado>
            <Servicio>BTIndicadores.ObtenerCondicionesGenerales</Servicio>
            <Requerimiento>?</Requerimiento>
            <Fecha>2023-05-22</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>14:55:00</Hora>
         </Btoutreq>
      </BTIndicadores.ObtenerCondicionesGeneralesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": 1,
      "Usuario": "INSTALADOR",
      "Requerimiento": "?",
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7"
   },
   "sdtCondicionesGenerales": {
      "parametrosGeneralesWF": "NO",
      "reglasNegocio": "SI",
      "debug": "SI",
      "opcionPAE": "NO",
      "fechaCierreCanales": "2022-10-12",
      "fechaCierre": "2020-10-12",
      "fechaAperturaCanales": "2022-10-13",
      "empresasIguales": "NO",
      "opcionWorkFlow": "SI",
      "cantidadPAE": 21,
      "opcion7x24": "SI",
      "fechaApertura": "2020-10-13",
      "cantidadReglas": 294,
      "periodo7x24": ""
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": 11990,
      "Estado": "OK",
      "Servicio": "BTIndicadores.ObtenerCondicionesGenerales",
      "Requerimiento": "?",
      "Fecha": "2023-05-22",
      "Canal": "BTDIGITAL",
      "Hora": "14:55:00"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCondicionesGenerales  

### sBTCondicionesGenerales

::: center 
Los campos del tipo de dato estructurado sBTCondicionesGenerales son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
cantidadPAE | Int | Cantidad PAE. 
cantidadReglas | Int | Cantidad reglas. 
debug | String | Opción debug. 
empresasIguales | String | Empresas iguales. 
fechaApertura | Date | Fecha de apertura. 
fechaAperturaCanales | Date | Fecha de apertura de canales. 
fechaCierre | Date | Fecha de cierre. 
fechaCierreCanales | Date | Fecha de cierre de canales. 
opcion7x24 | String | Opción 7x24. 
opcionPAE | String | Opción PAE. 
opcionWorkFlow | String | Opción Workflow. 
parametrosGeneralesWF | String | Parámetros Generales de Workflow. 
periodo7x24 | String | Periodo 7x24. 
reglasNegocio | String | Opción reglas de negocio. 
:::
<!-- CIERRA SDT -->