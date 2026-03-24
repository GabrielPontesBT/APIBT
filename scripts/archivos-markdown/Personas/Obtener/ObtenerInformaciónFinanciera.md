---
title: Obtener Información Financiera
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
::: note Método para obtener la información financiera de una persona.

**Nombre publicación:** BTPersonas.ObtenerInformacionFinanciera

**Programa:** RBTPCO03

**Global/País:** Colombia
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtInformacionFinanciera | [sBTPCOInformacionFinanciera](#sbtpcoinformacionfinanciera) | Datos de información financiera de la persona.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de persona.
30002 | No existe el Registro.
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
      <bts:BTPersonas.ObtenerInformacionFinanciera>
         <bts:Btinreq>
            <bts:Token>098705dd29CD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>21</bts:personaUId>
      </bts:BTPersonas.ObtenerInformacionFinanciera>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerInformacionFinanciera \
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
	"personaUId": "21"
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
      <BTPersonas.ObtenerInformacionFinancieraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>098705dd29CD285A89A23FBE</Token>
         </Btinreq>
         <sdtInformacionFinanciera>
            <paisOrigenRecursos>URUGUAY</paisOrigenRecursos>
            <otrosIngresosMensualesDesc>Alquileres</otrosIngresosMensualesDesc>
            <operacionesInternacionales>
               <tipoProducto>Producto</tipoProducto>
               <moneda>FRANCO FRANCES EFECTIVO</moneda>
               <ciudadId>1465</ciudadId>
               <nombreEntidad>Nombre Entidad</nombreEntidad>
               <monto>884561.00</monto>
               <pais>URUGUAY</pais>
               <ciudad>Colonia Nicolich</ciudad>
               <operaMonedaExtranjera>S</operaMonedaExtranjera>
               <numeroProducto>AAALLL</numeroProducto>
               <tipoOperacion>Compra</tipoOperacion>
               <monedaId>801</monedaId>
               <paisId>845</paisId>
            </operacionesInternacionales>
            <totalPasivos>450000.00</totalPasivos>
            <origenRecursos>C</origenRecursos>
            <totalIngresosMensuales>450030.00</totalIngresosMensuales>
            <egresosMensuales>380000.00</egresosMensuales>
            <otrosIngresosMensuales>450015.00</otrosIngresosMensuales>
            <ingresosMensuales>15.00</ingresosMensuales>
            <totalActivos>950000.00</totalActivos>
            <paisOrigenRecursosId>845</paisOrigenRecursosId>
         </sdtInformacionFinanciera>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1803</Numero>
            <Servicio>BTPersonas.ObtenerInformacionFinanciera</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-03-06</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>08:36:34</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerInformacionFinancieraResponse>
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
	"sdtInformacionFinanciera": {
		"paisOrigenRecursos": "URUGUAY",
		"otrosIngresosMensualesDesc": "Alquileres",
		"totalPasivos": "450000.00",
		"origenRecursos": "C",
		"totalIngresosMensuales": "450030.00",
		"egresosMensuales": "380000.00",
		"otrosIngresosMensuales": "450015.00",
		"ingresosMensuales": "15.00",
		"totalActivos": "950000.00",
		"paisOrigenRecursosId": "845",
		"operacionesInternacionales": {
			  "tipoProducto": "Producto",
			  "moneda": "FRANCO FRANCES EFECTIVO",
			  "ciudadId": "1465",
			  "nombreEntidad": "Nombre Entidad",
			  "monto": "884561.00",
			  "pais": "URUGUAY",
			  "ciudad": "Colonia Nicolich",
			  "operaMonedaExtranjera": "S",
			  "numeroProducto": "AAALLL",
			  "tipoOperacion": "Compra",
			  "monedaId": "801",
			  "paisId": "845"
		},
	},
	"Btoutreq": {
	  "Numero": "1729",
	  "Estado": "OK",
	  "Servicio": "BTPersonas.ObtenerInformacionFinanciera",
	  "Requerimiento": "1",
	  "Fecha": "2020-03-05",
	  "Canal": "BTDIGITAL",
	  "Hora": "13:10:51"
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
otrosIngresosMensualesDesc | String | Descripción de otros ingresos mensuales. 
paisOrigenRecursos | String | Nombre de país. 
paisOrigenRecursosId | Short | Identificador de país.  
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
moneda | String | Nombre de moneda 
monedaId | Short | Identificador de moneda. 
monto | Double | Monto. 
nombreEntidad | String | Nombre de la entidad. 
numeroProducto | String | Número del producto. 
operaMonedaExtranjera | String | (S = Si / N = No). 
pais | String | Nombre de país. 
paisId | Short | Identificador de país. 
tipoOperacion | String | (Importación / Exportación / Inversiones / Préstamos / Otro). 
tipoProducto | String | (Cuenta de ahorros / Cuenta Corriente / CDT). 
:::
<!-- CIERRA SDT -->