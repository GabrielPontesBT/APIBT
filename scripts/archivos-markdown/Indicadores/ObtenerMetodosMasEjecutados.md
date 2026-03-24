---
title: Obtener Métodos Más Ejecutados
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
::: note Método para obtener un listado de los métodos más ejecutados para un servicio dado y sus estadísticas.

**Nombre publicación:** BTIndicadores.ObtenerMetodosMasEjecutados

**Programa:** RBTPG712

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
servicio | String | Identificador del servicio.
cantidadDeRegistros | Int | [Hidden: Valor por defecto '10' para este método].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtEstadisticasMetodos | [sBTEstadisticasServicioMetodo](#sbtestadisticasserviciometodo) | Colección de datos de métodos y sus estadísticas.

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
      <bts:BTIndicadores.ObtenerMetodosMasEjecutados>
         <bts:Btinreq>
            <bts:Device>MC</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>3</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>3483F7F3C05B0DDF791C90A3</bts:Token>
         </bts:Btinreq>		 
         <bts:servicio>BTClientes</bts:servicio>
      </bts:BTIndicadores.ObtenerMetodosMasEjecutados>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerMetodosMasEjecutados' \
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
	},
	"servicio": "BTClientes"
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
      <BTIndicadores.ObtenerMetodosMasEjecutadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>MC</Device>
            <Requerimiento>3</Requerimiento>
            <Token>3483F7F3C05B0DDF791C90A3</Token>
         </Btinreq>
         <sdtEstadisticasMetodos>
            <sBTEstadisticasMetodo>
               <tiempoMaximo>2063</tiempoMaximo>
               <tiempoMinimo>54</tiempoMinimo>
               <metodo>ObtenerCuentasCorrientes</metodo>
               <servicio>BTClientes</servicio>
               <tiempoPromedio>277</tiempoPromedio>
               <cantidadEjecuciones>313</cantidadEjecuciones>
            </sBTEstadisticasMetodo>
            <sBTEstadisticasMetodo>
               <tiempoMaximo>3316</tiempoMaximo>
               <tiempoMinimo>91</tiempoMinimo>
               <metodo>ObtenerPrestamos</metodo>
               <servicio>BTClientes</servicio>
               <tiempoPromedio>392</tiempoPromedio>
               <cantidadEjecuciones>296</cantidadEjecuciones>
            </sBTEstadisticasMetodo>
            <sBTEstadisticasMetodo>
               <tiempoMaximo>3312</tiempoMaximo>
               <tiempoMinimo>67</tiempoMinimo>
               <metodo>ObtenerPlazosFijos</metodo>
               <servicio>BTClientes</servicio>
               <tiempoPromedio>293</tiempoPromedio>
               <cantidadEjecuciones>295</cantidadEjecuciones>
            </sBTEstadisticasMetodo>
            <sBTEstadisticasMetodo>
               <tiempoMaximo>5739</tiempoMaximo>
               <tiempoMinimo>74</tiempoMinimo>
               <metodo>ObtenerCuentasAhorro</metodo>
               <servicio>BTClientes</servicio>
               <tiempoPromedio>364</tiempoPromedio>
               <cantidadEjecuciones>241</cantidadEjecuciones>
            </sBTEstadisticasMetodo>
            <sBTEstadisticasMetodo>
               <tiempoMaximo>842</tiempoMaximo>
               <tiempoMinimo>52</tiempoMinimo>
               <metodo>ObtenerIntegrantes</metodo>
               <servicio>BTClientes</servicio>
               <tiempoPromedio>175</tiempoPromedio>
               <cantidadEjecuciones>124</cantidadEjecuciones>
            </sBTEstadisticasMetodo>
            <sBTEstadisticasMetodo>
               <tiempoMaximo>4547</tiempoMaximo>
               <tiempoMinimo>311</tiempoMinimo>
               <metodo>Crear</metodo>
               <servicio>BTClientes</servicio>
               <tiempoPromedio>1222</tiempoPromedio>
               <cantidadEjecuciones>109</cantidadEjecuciones>
            </sBTEstadisticasMetodo>
            <sBTEstadisticasMetodo>
               <tiempoMaximo>10156</tiempoMaximo>
               <tiempoMinimo>219</tiempoMinimo>
               <metodo>ActualizarTelefono</metodo>
               <servicio>BTClientes</servicio>
               <tiempoPromedio>621</tiempoPromedio>
               <cantidadEjecuciones>64</cantidadEjecuciones>
            </sBTEstadisticasMetodo>
            <sBTEstadisticasMetodo>
               <tiempoMaximo>11589</tiempoMaximo>
               <tiempoMinimo>33</tiempoMinimo>
               <metodo>Obtener</metodo>
               <servicio>BTClientes</servicio>
               <tiempoPromedio>976</tiempoPromedio>
               <cantidadEjecuciones>47</cantidadEjecuciones>
            </sBTEstadisticasMetodo>
            <sBTEstadisticasMetodo>
               <tiempoMaximo>1221</tiempoMaximo>
               <tiempoMinimo>216</tiempoMinimo>
               <metodo>ObtenerIdentificadorUnico</metodo>
               <servicio>BTClientes</servicio>
               <tiempoPromedio>497</tiempoPromedio>
               <cantidadEjecuciones>33</cantidadEjecuciones>
            </sBTEstadisticasMetodo>
            <sBTEstadisticasMetodo>
               <tiempoMaximo>711</tiempoMaximo>
               <tiempoMinimo>203</tiempoMinimo>
               <metodo>ObtenerTelefonos</metodo>
               <servicio>BTClientes</servicio>
               <tiempoPromedio>353</tiempoPromedio>
               <cantidadEjecuciones>32</cantidadEjecuciones>
            </sBTEstadisticasMetodo>
         </sdtEstadisticasMetodos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-05-31</Fecha>
            <Hora>17:15:32</Hora>
            <Numero>25897</Numero>
            <Servicio>BTIndicadores.ObtenerMetodosMasEjecutados</Servicio>
            <Requerimiento>3</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTIndicadores.ObtenerMetodosMasEjecutadosResponse>
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
	"sdtEstadisticasMetodos": {
		"sBTEstadisticasServicioMetodo": [
			{
				"tiempoMaximo": "2063",
				"tiempoMinimo": "54",
				"metodo": "ObtenerCuentasCorrientes",
				"servicio": "BTClientes",
				"tiempoPromedio": "277",
				"cantidadEjecuciones": "313"
			},
			{
				"tiempoMaximo": "3316",
				"tiempoMinimo": "91",
				"metodo": "ObtenerPrestamos",
				"servicio": "BTClientes",
				"tiempoPromedio": "392",
				"cantidadEjecuciones": "296"
			},
			{
				"tiempoMaximo": "3312",
				"tiempoMinimo": "67",
				"metodo": "ObtenerPlazosFijos",
				"servicio": "BTClientes",
				"tiempoPromedio": "293",
				"cantidadEjecuciones": "295"
			},
			{
				"tiempoMaximo": "5739",
				"tiempoMinimo": "74",
				"metodo": "ObtenerCuentasAhorro",
				"servicio": "BTClientes",
				"tiempoPromedio": "364",
				"cantidadEjecuciones": "241"
			},
			{
				"tiempoMaximo": "842",
				"tiempoMinimo": "52",
				"metodo": "ObtenerIntegrantes",
				"servicio": "BTClientes",
				"tiempoPromedio": "175",
				"cantidadEjecuciones": "124"
			},
			{
				"tiempoMaximo": "4547",
				"tiempoMinimo": "311",
				"metodo": "Crear",
				"servicio": "BTClientes",
				"tiempoPromedio": "1222",
				"cantidadEjecuciones": "109"
			},
			{
				"tiempoMaximo": "10156",
				"tiempoMinimo": "219",
				"metodo": "ActualizarTelefono",
				"servicio": "BTClientes",
				"tiempoPromedio": "621",
				"cantidadEjecuciones": "64"
			},
			{
				"tiempoMaximo": "11589",
				"tiempoMinimo": "33",
				"metodo": "Obtener",
				"servicio": "BTClientes",
				"tiempoPromedio": "976",
				"cantidadEjecuciones": "47"
			},
			{
				"tiempoMaximo": "1221",
				"tiempoMinimo": "216",
				"metodo": "ObtenerIdentificadorUnico",
				"servicio": "BTClientes",
				"tiempoPromedio": "497",
				"cantidadEjecuciones": "33"
			},
			{
				"tiempoMaximo": "711",
				"tiempoMinimo": "203",
				"metodo": "ObtenerTelefonos",
				"servicio": "BTClientes",
				"tiempoPromedio": "353",
				"cantidadEjecuciones": "32"
			}
		]
	},
    "Btoutreq": {
        "Numero": "397",
        "Estado": "OK",
        "Servicio": "BTIndicadores.ObtenerMetodosMasEjecutados",
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