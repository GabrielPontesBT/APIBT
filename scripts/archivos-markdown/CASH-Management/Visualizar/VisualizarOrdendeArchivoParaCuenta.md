---
title: Visualizar Orden de Archivo Para Cuenta
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
::: note Método para visualizar las ordenes de un archivo de una cuenta.

**Nombre publicación:** BTCASHManagement.VisualizarOrdenArchivoCuenta

**Programa:** RBTPGC25F

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
idArchivo | Long | Identificador de archivo.
clienteUId | Long | Identificador único de cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
listaResumenOrdenes | [sBTResumenCabezal](#sbtresumencabezal) | Listados de resumen de ordenes.

@tab Errores

Código | Descripción
:--------- | :-----------
1030712 | Se requiere cuenta para recuperar la información. 
1030770 | No se recuperó información para la cuenta recibida. 
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
      <bts:BTCASHManagement.VisualizarOrdenArchivoCuenta>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>744307195e99865B3A2E76CF</bts:Token>
         </bts:Btinreq>
         <bts:idArchivo>204</bts:idArchivo>
         <bts:clienteUId>376</bts:clienteUId>
      </bts:BTCASHManagement.VisualizarOrdenArchivoCuenta>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?VisualizarOrdenArchivoCuenta=' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 5671946f-3030-43ca-9d7b-58d54d588d21,a454ff51-cf63-4795-a47b-05a16d861dcd' \
  -H 'cache-control: no-cache' \
  -d '{
	"Btinreq": {
		"Device": "GZ",
		"Usuario": "Instalador",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "idArchivo": "204",
    "clienteUId": "376"
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
      <BTCASHManagement.VisualizarOrdenArchivoCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>744307195e99865B3A2E76CF</Token>
         </Btinreq>
         <listaResumenOrdenes>
            <sBTResumenCabezal>
               <archivoId>56</archivoId>
               <contratoId>7</contratoId>
               <servicio>20</servicio>
               <ordenId>121</ordenId>
               <cuentaDebito>1</cuentaDebito>
               <fechaPago>2019-11-29</fechaPago>
               <estado>N</estado>
               <cantidadLineas>6</cantidadLineas>
               <moneda>101</moneda>
               <importe>2600.00</importe>
               <referencia/>
               <nombreArchivo>Servicio20_001.csv</nombreArchivo>
               <mensajesError>
                  <item>El monto total es distinto al importe del cabezal</item>
               </mensajesError>
            </sBTResumenCabezal>
            <sBTResumenCabezal>
               <archivoId>57</archivoId>
               <contratoId>7</contratoId>
               <servicio>20</servicio>
               <ordenId>122</ordenId>
               <cuentaDebito>1</cuentaDebito>
               <fechaPago>2019-11-29</fechaPago>
               <estado>N</estado>
               <cantidadLineas>4</cantidadLineas>
               <moneda>101</moneda>
               <importe>2600.00</importe>
               <referencia/>
               <nombreArchivo>Servicio20_001.csv</nombreArchivo>
               <mensajesError></mensajesError>
            </sBTResumenCabezal>
            <sBTResumenCabezal>
               <archivoId>58</archivoId>
               <contratoId>7</contratoId>
               <servicio>20</servicio>
               <ordenId>123</ordenId>
               <cuentaDebito>1</cuentaDebito>
               <fechaPago>2019-11-29</fechaPago>
               <estado>P</estado>
               <cantidadLineas>4</cantidadLineas>
               <moneda>101</moneda>
               <importe>2600.00</importe>
               <referencia/>
               <nombreArchivo>Servicio20_001.csv</nombreArchivo>
               <mensajesError></mensajesError>
            </sBTResumenCabezal>
         </listaResumenOrdenes>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>254026</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCASHManagement.VisualizarOrdenArchivoCuenta</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-11-27</Fecha>
            <Hora>16:25:57</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.VisualizarOrdenArchivoCuentaResponse>
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
    "listaResumenOrdenes": {
         "sBTResumenCabezal": [
         {
            "archivoId": 56,
            "contratoId": 7,
            "servicio": 20,
            "ordenId": 121,
            "cuentaDebito": 1,
            "fechaPago": "2019-11-29",
            "estado": "N",
            "cantidadLineas": 6,
            "moneda": 101,
            "importe": 2600,
            "referencia": "",
            "nombreArchivo": "Servicio20_001.csv",
            "mensajesError": {
               "item": "El monto total es distinto al importe del cabezal"
            }
         },
         {
            "archivoId": 57,
            "contratoId": 7,
            "servicio": 20,
            "ordenId": 122,
            "cuentaDebito": 1,
            "fechaPago": "2019-11-29",
            "estado": "N",
            "cantidadLineas": 4,
            "moneda": 101,
            "importe": 2600,
            "referencia": "",
            "nombreArchivo": "Servicio20_001.csv",
            "mensajesError": ""
         },
         {
            "archivoId": 58,
            "contratoId": 7,
            "servicio": 20,
            "ordenId": 123,
            "cuentaDebito": 1,
            "fechaPago": "2019-11-29",
            "estado": "P",
            "cantidadLineas": 4,
            "moneda": 101,
            "importe": 2600,
            "referencia": "",
            "nombreArchivo": "Servicio20_001.csv",
            "mensajesError": ""
         }
         ]
      },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 7174,
        "Estado": "OK",
        "Servicio": "BTCASHManagement.VisualizarOrdenArchivoCuenta",
        "Requerimiento": "1",
        "Fecha": "2019-04-24",
        "Hora": "15:23:16",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTResumenCabezal  

### sBTResumenCabezal

::: center 
Los campos del tipo de dato estructurado sBTResumenCabezal son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
archivoId | Long | Identificador de archivo.
cantidadLineas | Int | Cantidad de líneas del archivo.
contratoId | Int | Identificador del contrato CASH.
cuentaDebito | Long | Identificador único de la cuenta débito.
estado | String | Estado del archivo.
fechaPago | Date | Fecha de pago o cobro.
importe | Double | Importe total.
mensajesError | String | Lista de mensajes de la línea.
moneda | Short | Moneda.
nombreArchivo | String | Nombre del archivo.
ordenId | Long | Identificador de orden CASH.
referencia | String | Referencia del pago o cobro.
servicio | Short | Servicio CASH.
:::
 
<!-- CIERRA SDT -->