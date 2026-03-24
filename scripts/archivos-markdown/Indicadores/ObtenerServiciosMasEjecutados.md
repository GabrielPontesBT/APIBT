---
title: Obtener Servicios Más Ejecutados
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
::: note Método para obtener un listado de los servicios más ejecutados y sus estadísticas.

**Nombre publicación:** BTIndicadores.ObtenerServiciosMasEjecutados

**Programa:** RBTPG712

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
servicio | String | [Hidden: Valor fijo vacío para este método].
cantidadDeRegistros | Int | [Hidden: Valor por defecto '10' para este método].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtEstadisticasServicios | [sBTEstadisticasServicioMetodo](#sbtestadisticasserviciometodo) | Colección de datos de servicios y sus estadísticas.
 
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
      <bts:BTIndicadores.ObtenerServiciosMasEjecutados>
         <bts:Btinreq>
            <bts:Device>MC</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>3</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>3483F7F3C05B0DDF791C90A3</bts:Token>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerServiciosMasEjecutados>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerServiciosMasEjecutados' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
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
      <BTIndicadores.ObtenerServiciosMasEjecutadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>MC</Device>
            <Requerimiento>3</Requerimiento>
            <Token>3483F7F3C05B0DDF791C90A3</Token>
         </Btinreq>
         <sdtEstadisticasServicios>
            <sBTEstadisticasServicio>
               <tiempoMaximo>69748</tiempoMaximo>
               <tiempoMinimo>19</tiempoMinimo>
               <metodo/>
               <servicio>BTIndicadores</servicio>
               <tiempoPromedio>781</tiempoPromedio>
               <cantidadEjecuciones>10317</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>90108</tiempoMaximo>
               <tiempoMinimo>19</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>BTPersonas</servicio>
               <tiempoPromedio>427</tiempoPromedio>
               <cantidadEjecuciones>3210</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>131448</tiempoMaximo>
               <tiempoMinimo>0</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>Authenticate</servicio>
               <tiempoPromedio>1169</tiempoPromedio>
               <cantidadEjecuciones>2510</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>386266</tiempoMaximo>
               <tiempoMinimo>15</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>BTClientes</servicio>
               <tiempoPromedio>887</tiempoPromedio>
               <cantidadEjecuciones>2059</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>59187</tiempoMaximo>
               <tiempoMinimo>0</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>BTPrestamos</servicio>
               <tiempoPromedio>2784</tiempoPromedio>
               <cantidadEjecuciones>1784</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>70079</tiempoMaximo>
               <tiempoMinimo>0</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>BTCuentasVista</servicio>
               <tiempoPromedio>1180</tiempoPromedio>
               <cantidadEjecuciones>1386</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>36946</tiempoMaximo>
               <tiempoMinimo>9</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>BPServicios</servicio>
               <tiempoPromedio>193</tiempoPromedio>
               <cantidadEjecuciones>1333</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>110646</tiempoMaximo>
               <tiempoMinimo>0</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>BTConfiguracionBantotal</servicio>
               <tiempoPromedio>666</tiempoPromedio>
               <cantidadEjecuciones>429</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>5797</tiempoMaximo>
               <tiempoMinimo>31</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>BTCuentasCorrientes</servicio>
               <tiempoPromedio>390</tiempoPromedio>
               <cantidadEjecuciones>300</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>4329</tiempoMaximo>
               <tiempoMinimo>78</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>Prueba</servicio>
               <tiempoPromedio>471</tiempoPromedio>
               <cantidadEjecuciones>290</cantidadEjecuciones>
            </sBTEstadisticasServicio>
         </sdtEstadisticasServicios>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-05-31</Fecha>
            <Hora>17:15:43</Hora>
            <Numero>25898</Numero>
            <Servicio>BTIndicadores.ObtenerServiciosMasEjecutados</Servicio>
            <Requerimiento>3</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTIndicadores.ObtenerServiciosMasEjecutadosResponse>
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
	"sdtEstadisticasServicios": {
		"sBTEstadisticasServicioMetodo": [
			{
				"tiempoMaximo": "69748",
				"tiempoMinimo": "19",
				"metodo": "",
				"servicio": "BTIndicadores",
				"tiempoPromedio": "781",
				"cantidadEjecuciones": "10317"
			},
			{
				"tiempoMaximo": "90108",
				"tiempoMinimo": "19",
				"metodo": "No aplica",
				"servicio": "BTPersonas",
				"tiempoPromedio": "427",
				"cantidadEjecuciones": "3210"
			},
			{
				"tiempoMaximo": "131448",
				"tiempoMinimo": "0",
				"metodo": "No aplica",
				"servicio": "Authenticate",
				"tiempoPromedio": "1169",
				"cantidadEjecuciones": "2510"
			},
			{
				"tiempoMaximo": "386266",
				"tiempoMinimo": "15",
				"metodo": "No aplica",
				"servicio": "BTClientes",
				"tiempoPromedio": "887",
				"cantidadEjecuciones": "2059"
			},
			{
				"tiempoMaximo": "59187",
				"tiempoMinimo": "0",
				"metodo": "No aplica",
				"servicio": "BTPrestamos",
				"tiempoPromedio": "2784",
				"cantidadEjecuciones": "1784"
			},
			{
				"tiempoMaximo": "70079",
				"tiempoMinimo": "0",
				"metodo": "No aplica",
				"servicio": "BTCuentasVista",
				"tiempoPromedio": "1180",
				"cantidadEjecuciones": "1386"
			},
			{
				"tiempoMaximo": "36946",
				"tiempoMinimo": "9",
				"metodo": "No aplica",
				"servicio": "BPServicios",
				"tiempoPromedio": "193",
				"cantidadEjecuciones": "1333"
			},
			{
				"tiempoMaximo": "110646",
				"tiempoMinimo": "0",
				"metodo": "No aplica",
				"servicio": "BTConfiguracionBantotal",
				"tiempoPromedio": "666",
				"cantidadEjecuciones": "429"
			},
			{
				"tiempoMaximo": "5797",
				"tiempoMinimo": "31",
				"metodo": "No aplica",
				"servicio": "BTCuentasCorrientes",
				"tiempoPromedio": "390",
				"cantidadEjecuciones": "300"
			},
			{
				"tiempoMaximo": "4329",
				"tiempoMinimo": "78",
				"metodo": "No aplica",
				"servicio": "Prueba",
				"tiempoPromedio": "471",
				"cantidadEjecuciones": "290"
			}
		]
	},
    "Btoutreq": {
        "Numero": "397",
        "Estado": "OK",
        "Servicio": "BTIndicadores.ObtenerServiciosMasEjecutados",
        "Fecha": "2018-05-02",
        "Requerimiento": "1",
        "Hora": "18:40:30",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT --> 
::: details sBTEstadisticasServicioMetodo  

### sBTEstadisticasServicioMetodo

::: center 
Los campos del tipo de dato estructurado sBTEstadisticasServicioMetodo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
cantidadEjecuciones | Long | Cantidad de ejecuciones.
metodo       | String | Método del servicio.
servicio 	 | String | Identificador del servicio
tiempoMaximo | Int | Tiempo máximo registrado para los métodos del servicio.
tiempoMinimo | Int | Tiempo mínimo registrado para los métodos del servicio.
tiempoPromedio | Int | Tiempo promedio de las ejecuciones a los métodos del servicio.
:::
<!-- CIERRA SDT --> 