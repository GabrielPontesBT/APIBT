---
title: Obtener Sucursales
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
::: note Método para obtener un listado de las sucursales ingresadas en Bantotal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerSucursales

**Programa:** RBTPG035

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
sdtSucursales | [sBTSucursal](#sbtsucursal) | Listado de sucursales.

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
      <bts:BTConfiguracionBantotal.ObtenerSucursales>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerSucursales>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerSucursales=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 44ba1342-ce61-303e-bd55-62945147dfe0' \
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
      <BTConfiguracionBantotal.ObtenerSucursalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSucursales>
            <sBTSucursal>
               <identificador>1</identificador>
               <descripcion>Sucursal Beta</descripcion>
               <direccion>10222141</direccion>
               <telefono>15554454</telefono>
               <latitud>0E-14</latitud>
               <longitud>0E-14</longitud>
            </sBTSucursal>
            <sBTSucursal>
               <identificador>1000</identificador>
               <descripcion>Casa Matriz</descripcion>
               <direccion>102141</direccion>
               <telefono>25182777 int.127</telefono>
               <latitud>0E-14</latitud>
               <longitud>0E-14</longitud>
            </sBTSucursal>
            <sBTSucursal>
               <identificador>25634</identificador>
               <descripcion>Sucursal 25634</descripcion>
               <direccion>10448</direccion>
               <telefono>4503614</telefono>
               <latitud>0E-14</latitud>
               <longitud>0E-14</longitud>
            </sBTSucursal>
         </sdtSucursales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>808</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerSucursales</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>18:09:39</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerSucursalesResponse>
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
   "sdtSucursales": {
      "sBTSucursal": [
         {
         "telefono": "15554454",
         "descripcion": "Sucursal Beta",
         "direccion": "10222141",
         "identificador": "1",
         "latitud": "0E-14",
         "longitud": "0E-14"
         },
         {
         "telefono": "25182777 int.127",
         "descripcion": "Casa Matriz",
         "direccion": "102141",
         "identificador": "1000",
         "latitud": "0E-14",
         "longitud": "0E-14"
         },
         {
         "telefono": "4503614",
         "descripcion": "Sucursal 25634",
         "direccion": "10448",
         "identificador": "25634",
         "latitud": "0E-14",
         "longitud": "0E-14"
         }
      ]
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "809",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerSucursales",
      "Fecha": "2017-12-17",
      "Requerimiento": "",
      "Hora": "18:09:55",
      "Canal": "BTDIGITAL"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSucursal  

### sBTSucursal

::: center 
Los campos del tipo de dato estructurado sBTSucursal son los siguientes:

Campo | Tipo | Comentarios
:--------- | :--------- | :---------
descripcion | String | Descripción de sucursal.
direccion | String | Dirección de sucursal.
identificador | Int | Identificador de sucursal.
latitud | Long | Latitud de sucursal.
longitud | Long | Longitud de sucursal.
telefono | String | Teléfono de sucursal.
:::
<!-- CIERRA SDT -->
