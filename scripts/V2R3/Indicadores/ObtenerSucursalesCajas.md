---
title: Obtener Sucursales Cajas
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
::: note Método para obtener porcentajes y listados de sucursales y cajas del sistema.

**Nombre publicación:** BTIndicadores.ObtenerSucursalesCajas

**Programa:** RBTPG705

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
totalSucursales | Int | Número total de sucursales.
sucursalesCerradas | Int | Número de sucursales cerradas.
sucursalesAbiertas | Int | Número de sucursales abiertas.
porcentajeSucursalesC | Int | Porcentaje de sucursales cerradas.
porcentajeSucursalesA | Int | Porcentaje de sucursales abiertas.
listadoSucursalesC | [sBTSucursal](#sbtsucursal) | Listado de sucursales cerradas.
listadoSucursalesA | [sBTSucursal](#sbtsucursal) | Listado de sucursales abiertas.
totalCajas | Int | Número total de cajas.
cajasCerradas | Int | Número de cajas cerradas.
cajasAbiertas | Int | Número de cajas abiertas.
porcentajeCajasC | Int | Porcentaje de cajas cerradas.
porcentajeCajasA | Int | Porcentaje de cajas abiertas.
listadoCajasC | [sBTCaja](#sbtcaja) | Listado de cajas cerradas.
listadoCajasA | [sBTCaja](#sbtcaja) | Listado de cajas abiertas.

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
      <bts:BTIndicadores.ObtenerSucursalesCajas>
         <bts:Btinreq>
           <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>?</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerSucursalesCajas>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerSucursalesCajas' \
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
      <BTIndicadores.ObtenerSucursalesCajasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>?</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>959C2E0AEF210ABC0D8AA8F7</Token>
         </Btinreq>
         <sdtSucursalesCajas>
            <cajasCerradas>0</cajasCerradas>
            <porcentajeCajasA>100.00</porcentajeCajasA>
            <listadoCajasA>
               <sBTCaja>
                  <usuario>ASESOR</usuario>
                  <nombre>ASESOR</nombre>
                  <indicador>400</indicador>
                  <sucursalId>1</sucursalId>
               </sBTCaja>
               ...
            </listadoCajasA>
            ...
         </sdtSucursalesCajas>
         ...
      </BTIndicadores.ObtenerSucursalesCajasResponse>
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
   "sdtSucursalesCajas": {
      "cajasCerradas": 0,
      "porcentajeCajasA": 100,
      "listadoCajasA": {
      "sBTCaja": [
         {
            "usuario": "ASESOR",
            "nombre": "ASESOR",
            "indicador": 400,
            "sucursalId": 1
         },
         ...
      ]
      },
      ...
   },
   ...
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSucursal  

### sBTSucursal

::: center 
Los campos del tipo de dato estructurado sBTSucursal son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción de la sucursal. 
direccion | String | Dirección de la sucursal. 
identificador | Int | Identificador de sucursal. 
latitud | Int | Latitud de la sucursal. 
longitud | Int | Longitud de la sucursal. 
telefono | String | Teléfono de la sucursal. 
:::
 
::: details sBTCaja  

### sBTCaja

::: center 
Los campos del tipo de dato estructurado sBTCaja son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
indicador | Int | Indicador de la caja. 
nombre | String | Nombre de la caja. 
sucursalId | Int | Identificador de la sucursal. 
usuario | String | Usuario de la caja. 
:::
<!-- CIERRA SDT -->