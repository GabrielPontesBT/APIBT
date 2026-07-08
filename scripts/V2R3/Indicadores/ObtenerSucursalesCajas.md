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
sdtSucursalesCajas | [sBTSucursalesCajas](#sbtsucursalescajas) | Listado de sucursales y cajas.

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
            <totalSucursales>3</totalSucursales>
            <sucursalesCerradas>1</sucursalesCerradas>
            <sucursalesAbiertas>2</sucursalesAbiertas>
            <porcentajeSucursalesC>33.33</porcentajeSucursalesC>
            <porcentajeSucursalesA>66.66</porcentajeSucursalesA>
            <listadoSucursalesC>
               <sBTSucursal>
                  <telefono/>
                  <descripcion>Sucursal 25634</descripcion>
                  <direccion/>
                  <identificador>25634</identificador>
                  <longitud>0E-14</longitud>
                  <latitud>0E-14</latitud>
               </sBTSucursal>
            </listadoSucursalesC>
            <listadoSucursalesA>
               <sBTSucursal>
                  <telefono/>
                  <descripcion>Casa Matriz</descripcion>
                  <direccion/>
                  <identificador>1</identificador>
                  <longitud>0E-14</longitud>
                  <latitud>0E-14</latitud>
               </sBTSucursal>
               <sBTSucursal>
                  <telefono/>
                  <descripcion>Sucursal Ciudad de la Costa</descripcion>
                  <direccion/>
                  <identificador>1000</identificador>
                  <longitud>0E-14</longitud>
                  <latitud>0E-14</latitud>
               </sBTSucursal>
            </listadoSucursalesA>
            <totalCajas>13</totalCajas>
            <cajasCerradas>0</cajasCerradas>
            <cajasAbiertas>13</cajasAbiertas>
            <porcentajeCajasC>0.00</porcentajeCajasC>
            <porcentajeCajasA>100.00</porcentajeCajasA>
            <listadoCajasC>
               <sBTCaja>
                  <usuario></usuario>
                  <nombre></nombre>
                  <indicador>0</indicador>
                  <sucursalId>0</sucursalId>
               </sBTCaja>
            </listadoCajasC>
            <listadoCajasA>
               <sBTCaja>
                  <usuario>ASESOR</usuario>
                  <nombre>ASESOR</nombre>
                  <indicador>400</indicador>
                  <sucursalId>1</sucursalId>
               </sBTCaja>
               <sBTCaja>
                  <usuario>BANTOTAL</usuario>
                  <nombre>BANTOTAL</nombre>
                  <indicador>111</indicador>
                  <sucursalId>1</sucursalId>
               </sBTCaja>
               <sBTCaja>
                  <usuario>CAJERO</usuario>
                  <nombre>CAJERO</nombre>
                  <indicador>402</indicador>
                  <sucursalId>1</sucursalId>
               </sBTCaja>
               <sBTCaja>
                  <usuario>CAPTACCONF</usuario>
                  <nombre>CAPTACCONF</nombre>
                  <indicador>350</indicador>
                  <sucursalId>1</sucursalId>
               </sBTCaja>
               <sBTCaja>
                  <usuario>CAPTACION</usuario>
                  <nombre>CAPTACION</nombre>
                  <indicador>401</indicador>
                  <sucursalId>1000</sucursalId>
               </sBTCaja>
               <sBTCaja>
                  <usuario>EJECCUENTA</usuario>
                  <nombre>EJECCUENTA</nombre>
                  <indicador>23</indicador>
                  <sucursalId>1000</sucursalId>
               </sBTCaja>
               <sBTCaja>
                  <usuario>GERENTE</usuario>
                  <nombre>GERENTE</nombre>
                  <indicador>400</indicador>
                  <sucursalId>1</sucursalId>
               </sBTCaja>
               <sBTCaja>
                  <usuario>INSTALADOR</usuario>
                  <nombre>INSTALADOR</nombre>
                  <indicador>400</indicador>
                  <sucursalId>1</sucursalId>
               </sBTCaja>
               <sBTCaja>
                  <usuario>INSTALADORBANTOTAL</usuario>
                  <nombre>INSTALADOR BANTOTAL2</nombre>
                  <indicador>5000</indicador>
                  <sucursalId>1000</sucursalId>
               </sBTCaja>
               <sBTCaja>
                  <usuario>JEFE</usuario>
                  <nombre>JEFE</nombre>
                  <indicador>400</indicador>
                  <sucursalId>1</sucursalId>
               </sBTCaja>
               <sBTCaja>
                  <usuario>SEGURIDAD</usuario>
                  <nombre>SEGURIDAD</nombre>
                  <indicador>55</indicador>
                  <sucursalId>1000</sucursalId>
               </sBTCaja>
               <sBTCaja>
                  <usuario>TESORSUC</usuario>
                  <nombre>TESORSUC</nombre>
                  <indicador>403</indicador>
                  <sucursalId>1000</sucursalId>
               </sBTCaja>
               <sBTCaja>
                  <usuario>USUARIOBIT</usuario>
                  <nombre/>
                  <indicador>17</indicador>
                  <sucursalId>1</sucursalId>
               </sBTCaja>
            </listadoCajasA>
         </sdtSucursalesCajas>
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
    "totalSucursales": 3,
    "sucursalesCerradas": 1,
    "sucursalesAbiertas": 2,
    "porcentajeSucursalesC": 33.33,
    "porcentajeSucursalesA": 66.66,
    "listadoSucursalesC": {
      "sBTSucursal": [
        {
          "telefono": "",
          "descripcion": "Sucursal 25634",
          "direccion": "",
          "identificador": 25634,
          "longitud": 0,
          "latitud": 0
        }
      ]
    },
    "listadoSucursalesA": {
      "sBTSucursal": [
        {
          "telefono": "",
          "descripcion": "Casa Matriz",
          "direccion": "",
          "identificador": 1,
          "longitud": 0,
          "latitud": 0
        },
        {
          "telefono": "",
          "descripcion": "Sucursal Ciudad de la Costa",
          "direccion": "",
          "identificador": 1000,
          "longitud": 0,
          "latitud": 0
        }
      ]
    },
    "totalCajas": 13,
    "cajasCerradas": 0,
    "cajasAbiertas": 13,
    "porcentajeCajasC": 0.00,
    "porcentajeCajasA": 100.00,
    "listadoCajasC": {
      "sBTCaja": [
        {
          "usuario": "",
          "nombre": "",
          "indicador": 0,
          "sucursalId": 0
        }
      ]
    },
    "listadoCajasA": {
      "sBTCaja": [
        {
          "usuario": "ASESOR",
          "nombre": "ASESOR",
          "indicador": 400,
          "sucursalId": 1
        },
        {
          "usuario": "BANTOTAL",
          "nombre": "BANTOTAL",
          "indicador": 111,
          "sucursalId": 1
        },
        {
          "usuario": "CAJERO",
          "nombre": "CAJERO",
          "indicador": 402,
          "sucursalId": 1
        },
        {
          "usuario": "CAPTACCONF",
          "nombre": "CAPTACCONF",
          "indicador": 350,
          "sucursalId": 1
        },
        {
          "usuario": "CAPTACION",
          "nombre": "CAPTACION",
          "indicador": 401,
          "sucursalId": 1000
        },
        {
          "usuario": "EJECCUENTA",
          "nombre": "EJECCUENTA",
          "indicador": 23,
          "sucursalId": 1000
        },
        {
          "usuario": "GERENTE",
          "nombre": "GERENTE",
          "indicador": 400,
          "sucursalId": 1
        },
        {
          "usuario": "INSTALADOR",
          "nombre": "INSTALADOR",
          "indicador": 400,
          "sucursalId": 1
        },
        {
          "usuario": "INSTALADORBANTOTAL",
          "nombre": "INSTALADOR BANTOTAL2",
          "indicador": 5000,
          "sucursalId": 1000
        },
        {
          "usuario": "JEFE",
          "nombre": "JEFE",
          "indicador": 400,
          "sucursalId": 1
        },
        {
          "usuario": "SEGURIDAD",
          "nombre": "SEGURIDAD",
          "indicador": 55,
          "sucursalId": 1000
        },
        {
          "usuario": "TESORSUC",
          "nombre": "TESORSUC",
          "indicador": 403,
          "sucursalId": 1000
        },
        {
          "usuario": "USUARIOBIT",
          "nombre": "",
          "indicador": 17,
          "sucursalId": 1
        }
      ]
    }
  }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSucursalesCajas

### sBTSucursalesCajas

::: center 
Los campos del tipo de dato estructurado sBTSucursalesCajas son los siguientes: 

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
:::

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