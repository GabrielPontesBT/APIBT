---
title: Agregar Información Financiera
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
::: note Método para agregar la información financiera de una persona.

**Nombre publicación:** BTPersonas.AgregarInformacionFinanciera

**Programa:** RBTPCO01

**Global/País:** Colombia
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
sdtInformacionFinanciera | [sBTPCOInformacionFinanciera](#sbtpcoinformacionfinanciera) | Datos de información financiera de la persona.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de persona.
40001 | Debe ingresar ingresos mensuales.
40002 | Los ingresos mensuales deben ser mayor a [Importe parametrizado].
40003 | El campo ¿Cuales? debe ser [alfabético / numérico].
40004 | Debe ingresar valor en campo ¿Cuales?.
40005 | Debe ingresar total de egresos.
40006 | El total de egresos debe ser mayor a [Importe parametrizado].
40007 | Debe ingresar total de activos.
40008 | El total de activos debe ser mayor a [Importe parametrizado].
40009 | Debe ingresar valor en origen de recursos.
40010 | Debe ingresar cual es el país de origen de recursos.
40011 | El país de origen de recursos ingresado no es válido.
40012 | El valor ingresado en el campo Origen Recursos no es válido.
40013 | Debe ingresar si opera o no en moneda extranjera.
40014 | Debe ingresar tipo de operación.
40015 | El campo tipo de operación debe ser [alfabético / numérico].
40016 | Debe ingresar tipo de producto.
40017 | El campo tipo de producto debe ser [alfabético / numérico].
40018 | El tipo de producto ingresado no es válido.
40019 | Debe ingresar número de producto.
40020 | El campo número de producto debe ser [alfabético / numérico].
40021 | Debe ingresar nombre de entidad.
40022 | El campo nombre de entidad debe ser [alfabético / numérico].
40023 | Debe ingresar moneda.
40024 | La moneda ingresada no es válida.
40025 | Debe ingresar monto.
40026 | El monto no puede ser menor a 0.
40027 | Debe ingresar país de operaciones internacionales.
40028 | El país de operaciones internacionales ingresado no es válido.
40029 | Debe ingresar ciudad de operaciones internacionales.
40030 | La ciudad ingresada no es válida.
40031 | El valor ingresado en Opera en Moneda Extranjera no es válido.
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
      <bts:BTPersonas.AgregarInformacionFinanciera>
         <bts:Btinreq>
            <bts:Token>042638a184CD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>42</bts:personaUId>
         <bts:sdtInformacionFinanciera>
            <bts:paisOrigenRecursos></bts:paisOrigenRecursos>
            <bts:otrosIngresosMensualesDesc>Alquileres</bts:otrosIngresosMensualesDesc>
            <bts:operacionesInternacionales>
               <bts:tipoProducto>CDT</bts:tipoProducto>
               <bts:moneda></bts:moneda>
               <bts:ciudadId>1465</bts:ciudadId>
               <bts:nombreEntidad>Nombre Entidad Prueba</bts:nombreEntidad>
               <bts:monto>884561.00</bts:monto>
               <bts:pais></bts:pais>
               <bts:ciudad></bts:ciudad>
               <bts:operaMonedaExtranjera>S</bts:operaMonedaExtranjera>
               <bts:numeroProducto>AAALLL</bts:numeroProducto>
               <bts:tipoOperacion>Inversiones</bts:tipoOperacion>
               <bts:monedaId>801</bts:monedaId>
               <bts:paisId>845</bts:paisId>
            </bts:operacionesInternacionales>
            <bts:totalPasivos>450000.00</bts:totalPasivos>
            <bts:origenRecursos>C</bts:origenRecursos>
            <bts:totalIngresosMensuales>550015.00</bts:totalIngresosMensuales>
            <bts:egresosMensuales>380000.00</bts:egresosMensuales>
            <bts:otrosIngresosMensuales>450015.00</bts:otrosIngresosMensuales>
            <bts:ingresosMensuales>100000.00</bts:ingresosMensuales>
            <bts:totalActivos>950000.00</bts:totalActivos>
            <bts:paisOrigenRecursosId></bts:paisOrigenRecursosId>
         </bts:sdtInformacionFinanciera>
      </bts:BTPersonas.AgregarInformacionFinanciera>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarInformacionFinanciera \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId": "42",
	"totalPasivos": "450000.00",
	"origenRecursos": "C",
	"totalIngresosMensuales": "550015.00",
	"egresosMensuales": "380000.00",
	"otrosIngresosMensuales": "450015.00",
	"ingresosMensuales": "100000.00",
	"totalActivos": "950000.00",
	"sdtInformacionFinanciera": {
	  "otrosIngresosMensualesDesc": "Alquileres",
	  "operacionesInternacionales": {
		"tipoProducto": "CDT",
		"ciudadId": "1465",
		"nombreEntidad": "Nombre Entidad Prueba",
		"monto": "884561.00",
		"operaMonedaExtranjera": "S",
		"numeroProducto": "AAALLL",
		"tipoOperacion": "Inversiones",
		"monedaId": "801",
		"paisId": "845"
	  },   
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
      <BTPersonas.AgregarInformacionFinancieraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>042638a184CD285A89A23FBE</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2098</Numero>
            <Servicio>BTPersonas.AgregarInformacionFinanciera</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-03-10</Fecha>
            <Hora>08:54:28</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.AgregarInformacionFinancieraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"Btoutreq": {
	  "Numero": "2098",
	  "Servicio": "BTPersonas.AgregarInformacionFinanciera",
	  "Estado": "OK",
	  "Requerimiento": "1",
	  "Fecha": "2020-03-10",
	  "Hora": "08:54:28",
	  "Canal": "BTDIGITAL"
	}
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPCOInformacionFinanciera

### sBTPCOInformacionFinanciera

::: center 
Los campos del tipo de dato estructurado sBTPCOInformacionFinanciera son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
egresosMensuales | Double | Importe de egresos mensuales. 
ingresosMensuales | Double | Importe de ingresos mensuales. 
operacionesInternacionales | [sBTPCOOperacionesInternacionales](#sbtpcooperacionesinternacionales) | Datos de operaciones internacionales. 
origenRecursos | String | (C = Colombia / O = Otro). 
otrosIngresosMensuales | Double | Importe de otros ingresos mensuales. 
otrosIngresosMensualesDesc | String | Descripción de otros ingresos mensuales (Se ingresa si se ingresó valor en el campo otrosIngresosMensuales). 
paisOrigenRecursos | String | País (Se pide si el país de origen de recursos es O = Otro). 
paisOrigenRecursosId | Short | Identificador de país (Se pide si el país de origen de recursos es O = Otro). 
totalActivos | Double | Importe del total de activos. 
totalIngresosMensuales | Double | Importe del total de ingresos mensuales. 
totalPasivos | Double | Importe del total de pasivos. 

### sBTPCOOperacionesInternacionales

::: center 
Los campos del tipo de dato estructurado sBTPCOOperacionesInternacionales son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
ciudad | String | Nombre de ciudad. 
ciudadId | Short | Identificador de ciudad. 
departamentoId | Int | Identificador de departamento. 
moneda | String | Nombre de moneda. 
monedaId | Short | Identificador de moneda. 
monto | Double | Monto. 
nombreEntidad | String | Nombre de la entidad. 
numeroProducto | String | Número del producto. 
operaMonedaExtranjera | String | (S = Si / N = No) (El resto de los datos solo se piden si se indica S = Si). 
pais | String | Nombre de país. 
paisId | Short | Identificador de país. 
tipoOperacion | String | Tipo de operación (Se puede ingresar uno que no se encuentre en la guía de proceso). 
tipoProducto | String | Tipo de producto. 
:::
<!-- CIERRA SDT -->