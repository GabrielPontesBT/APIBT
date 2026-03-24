---
title: Contratar Vehicular
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
::: note Método para contratar un préstamo vehicular.

**Nombre publicación:** BTPartners.ContratarVehicular

**Programa:** RBTPNV10

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPartner | [sBTPartnerInReq](#sbtpartnerinreq) | Datos del usuario.
operacionUId | Long | Identificador único de la operación.
clienteUId | Long | Identificador único del cliente.
sdtDatosVehiculo | [sBTDatosAltaVeh](#sbtdatosaltaveh) | Datos del vehículo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
movimientoUId | Long | Identificador único del movimiento.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de operación de préstamo.
30002 | No se recibió el identificador de cliente.
30003 | No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador].
30004 | No se recuperó el préstamo para el identificador: [Número de Identificador].
30005 | El préstamo no pertenece al cliente.
30007 | El Partner no se encuentra habilitado.
30009 | No existe Partner con ese identificador.
30010 | No se obtuvo la persona para el identificador [Número de Identificador].
30012 | No se obtuvo el fiador para el identificador [Número de Identificador].
30017 | No se recibió punto de venta.
30018 | No se recibió vendedor.
30100 | Error en la contabilización.
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
      <bts:BTPartners.ContratarVehicular>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9436BF7CB5B5BB404CC6E5A7</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>1</bts:puntoVentaUId>
            <bts:vendedorUId>1</bts:vendedorUId>
            <bts:partnerUId>1</bts:partnerUId>
         </bts:sdtPartner>
         <bts:operacionUId>123</bts:operacionUId>
         <bts:clienteUId>342</bts:clienteUId>
         <bts:sdtDatosVehiculo>
            <bts:color>1</bts:color>
            <bts:datosAdicionales>
               <bts:SdtsBTConcepto>
                  <bts:texto></bts:texto>
                  <bts:valor></bts:valor>
                  <bts:concepto></bts:concepto>
               </bts:SdtsBTConcepto>
            </bts:datosAdicionales>
            <bts:placa>AAA</bts:placa>
            <bts:fiadores>
               <bts:Long></bts:Long>
            </bts:fiadores>
            <bts:numeroMotor>23</bts:numeroMotor>
            <bts:compraPara>62</bts:compraPara>
            <bts:anioConstruccion>2003</bts:anioConstruccion>
         </bts:sdtDatosVehiculo>
      </bts:BTPartners.ContratarVehicular>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ContratarVehicular' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "sdtPartner": {
          "puntoVentaUId": 1,
          "vendedorUId": 1,
          "partnerUId": 1
        },
        "operacionUId": 123,
        "clienteUId": 342,
        "sdtDatosVehiculo": {
          "color": 1,
          "datosAdicionales": {
            "SdtsBTConcepto": {
              "texto": "",
              "valor": "",
              "concepto": ""
            }
          },
          "placa": "AAA",
          "fiadores": {
            "Long": ""
          },
          "numeroMotor": 23,
          "compraPara": 62,
          "anioConstruccion": 2003
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
      <BTPartners.ContratarVehicularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b6a06c447cCD285A89A23FBE</Token>
         </Btinreq>
         <bts:movimientoUId>36</bts:movimientoUId>
         <Btoutreq>
            <Numero>269</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.ContratarVehicular</Servicio>
            <Fecha>2024-05-07</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>12:42:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ContratarVehicularResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "movimientoUId": 36,
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPartners.ContratarVehicular",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPartnerInReq  

### sBTPartnerInReq

::: center 
Los campos del tipo de dato estructurado sBTPartnerInReq son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
partnerUId | Int | Identificador del Partner.
puntoVentaUId	 | Int | Identificador del punto de venta.
vendedorUId	 | Int | Identificador del vendedor.
:::

::: details sBTDatosAltaVeh  

### sBTDatosAltaVeh

::: center 
Los campos del tipo de dato estructurado sBTDatosAltaVeh son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
anioConstruccion | Short | Año de construcción.
color | Int | Número del color.
compraPara | Long | Propietario del vehículo.
datosAdicionales | [sBTConcepto](#sbtconcepto) | Datos de otros datos.
fiadores | Long | Listado de fiadores.
numeroMotor | String | Número del motor.
placa | String | Placa.

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.
:::
<!-- CIERRA SDT -->