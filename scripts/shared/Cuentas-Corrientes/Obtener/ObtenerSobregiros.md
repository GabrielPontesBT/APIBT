---
title: Obtener Sobregiros
icon: /assets/image/nuevo.svg
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
::: note Método para obtener los sobregiros de una cuenta corriente.

**Nombre publicación:** BTCuentasCorrientes.ObtenerSobregiros

**Programa:** RBTPG587

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de la operación.
anio | Short | Año. 
mes | Byte | Mes.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtSobregiros | [sBTSobregiro](#sbtsobregiro) | Listado de los sobregiros.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de operación.
30002 | No se recuperó la operación para el identificador: [Número de identificador].
30003 | La operación ingresada no corresponde a una cuenta Corriente.
30004 | El valor del campo mes no puede ser menor a 1 o mayor a 12.

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
      <bts:BTCuentasCorrientes.ObtenerSobregiros>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>8B2DAF8BCFD755A866C37214</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>958</bts:operacionUId>
         <bts:anio></bts:anio>
         <bts:mes></bts:mes>
      </bts:BTCuentasCorrientes.ObtenerSobregiros>
   </soapenv:Body>
</soapenv:Envelope>

```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerSobregiros' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"operacionUId": 958,
   "anio": "",
   "mes": ""
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
      <BTCuentasCorrientes.ObtenerSobregirosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>8B2DAF8BCFD755A866C37214</Token>
         </Btinreq>
         <sdtSobregiros>
            <sBTSobregiro>
               <fecha>2025-09-01</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-02</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-03</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-04</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-05</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-06</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-07</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-08</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-09</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-10</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-11</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-12</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-13</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-14</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-15</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-16</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-17</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-18</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-19</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-20</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-21</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-22</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-23</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-24</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
            <sBTSobregiro>
               <fecha>2025-09-11</fecha>
               <sobregiro>-9966.17</sobregiro>
            </sBTSobregiro>
         </sdtSobregiros>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>36491</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.ObtenerSobregiros</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-10-28</Fecha>
            <Hora>15:45:24</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerSobregirosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"sdtSobregiros": {
      "sBTSobregiro": [
      {
         "fecha": "2025-09-01",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-02",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-03",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-04",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-05",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-06",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-07",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-08",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-09",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-10",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-11",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-12",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-13",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-14",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-15",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-16",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-17",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-18",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-19",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-20",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-21",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-22",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-23",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-24",
         "sobregiro": -9966.17
      },
      {
         "fecha": "2025-09-11",
         "sobregiro": -9966.17
      }
      ]
   },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8418,
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.ObtenerSobregiros",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSobregiro  

### sBTSobregiro

::: center 
Los campos del tipo de dato estructurado sBTSobregiro son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
fecha | Date | Fecha del sobregiro. 
sobregiro | Double | Valor del sobregiro.
:::
<!-- CIERRA SDT -->