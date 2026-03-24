---
title: Obtener Empresa
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
::: note Método para obtener información de la empresa.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerEmpresa

**Programa:** RBTPG320

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
sdtEmpresa | [sBTEmpresa](#sbtempresa) | Datos de la empresa.

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
      <bts:BTConfiguracionBantotal.ObtenerEmpresa>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>558273287F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerEmpresa>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerEmpresa' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"bts:Btinreq": {
	  "bts:Canal": "BTDIGITAL",
	  "bts:Requerimiento": "1",
	  "bts:Usuario": "BANTOTAL",
	  "bts:Token": "558273287F955E77534D3E02",
	  "bts:Device": "AC"
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
      <BTConfiguracionBantotal.ObtenerEmpresaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>558273287F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtEmpresa>
            <identificador>1</identificador>
            <nombre/>
            <casaCentral>
               <identificador>1</identificador>
               <descripcion>Sucursal Beta</descripcion>
               <direccion>1022, Pedro Cosio 2141</direccion>
               <telefono>15554454</telefono>
               <latitud>0.00000000000000</latitud>
               <longitud>0.00000000000000</longitud>
            </casaCentral>
            <monedaNacional>
               <identificador>0</identificador>
               <descripcion>PESOS</descripcion>
               <simbolo>$</simbolo>
            </monedaNacional>
            <monedaDolar>
               <identificador>2222</identificador>
               <descripcion>DÓLAR ESTADOUNIDENSE</descripcion>
               <simbolo>USD</simbolo>
            </monedaDolar>
            <fechaApertura>2020-03-05</fechaApertura>
            <fechaCierre>2018-06-13</fechaCierre>
            <fechaBalance>2014-06-30</fechaBalance>
         </sdtEmpresa>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTConfiguracionBantotal.ObtenerEmpresa</Servicio>
            <Fecha>2021-03-16</Fecha>
            <Hora>12:05:55</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8027</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerEmpresaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
 {
	"Btinreq": {
	  "Device": "AC",
	  "Usuario": "BANTOTAL",
	  "Requerimiento": "1",
	  "Canal": "BTDIGITAL",
	  "Token": "558273287F955E77534D3E02"
	},
	"sdtEmpresa": {
		"identificador": "1",
		"nombre": {
		"-self-closing": "true"
		},
		"casaCentral": {
		"identificador": "1",
		"descripcion": "Sucursal Beta",
		"direccion": "1022, Pedro Cosio 2141",
		"telefono": "15554454",
		"latitud": "0.00000000000000",
		"longitud": "0.00000000000000"
		},
		"monedaNacional": {
		"identificador": "0",
		"descripcion": "PESOS",
		"simbolo": "$"
		},
		"monedaDolar": {
		"identificador": "2222",
		"descripcion": "DÓLAR ESTADOUNIDENSE",
		"simbolo": "USD"
		},
		"fechaApertura": "2020-03-05",
		"fechaCierre": "2018-06-13",
		"fechaBalance": "2014-06-30"
	},
	"Erroresnegocio": {},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTConfiguracionBantotal.ObtenerEmpresa",
	  "Fecha": "2021-03-15",
	  "Hora": "14:29:49",
	  "Requerimiento": "1",
	  "Numero": "8025",
	  "Estado": "OK"
	}
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTEmpresa  

### sBTEmpresa

::: center 
Los campos del tipo de dato estructurado sBTEmpresa son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
casaCentral | [sBTSucursal](#sbtsucursal) | Datos sobre la sucursal indicada como casa central. 
fechaApertura | Date | Fecha de apertura. 
fechaBalance | Date | Fecha de balance. 
fechaCierre | Date | Fecha de cierre. 
identificador | Short | Identificador de la empresa. 
monedaDolar | [sBTMoneda](#sbtmoneda) | Código moneda dolar. 
monedaNacional | [sBTMoneda](#sbtmoneda) | Código moneda nacional. 
nombre | String | Nombre de la empresa. 

### sBTSucursal

::: center 
Los campos del tipo de dato estructurado sBTSucursal son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción de sucursal. 
direccion | String | Dirección de sucursal. 
identificador | Int | Identificador de sucursal. 
latitud | Long | Latitud de sucursal. 
longitud | Long | Longitud de sucursal. 
telefono | String | Teléfono de sucursal. 

### sBTMoneda

::: center 
Los campos del tipo de dato estructurado sBTMoneda son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
descripcion | String | Descripción de moneda. 
identificador | Short | Identificador de moneda. 
simbolo | String | Símbolo de moneda. 
:::
<!-- CIERRA SDT -->