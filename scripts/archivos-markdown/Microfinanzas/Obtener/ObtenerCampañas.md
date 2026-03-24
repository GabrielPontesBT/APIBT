---
title: Obtener Campañas
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
::: note Método para obtener las campañas de crédito.

**Nombre publicación:** BTMicrofinanzas.ObtenerCampanias

**Programa:** RBTPG425

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único del cliente fiador.
fecha | Date | Fecha de inicio de campaña.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtCampanias | [sBTCampania](#sbtcampania) | Listado de campañas.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador del cliente.
30002 | No se recuperó la cuenta para el Identificador de cliente.
30011 | No se obtuvo el titular representativo de la cuenta.
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
      <bts:BTMicrofinanzas.ObtenerCampanias>
         <bts:Btinreq>
            <bts:Canal>BTINTERNO</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>419385365CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>3</bts:clienteUId>
         <bts:fecha>2019-01-01</bts:fecha>
      </bts:BTMicrofinanzas.ObtenerCampanias>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerCampanias \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "clienteUId": "3",
   "fecha": "2019-01-01"
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
      <BTMicrofinanzas.ObtenerCampaniasResponse>
         <Btinreq>
            <Canal>BTINTERNO</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>419385365CD285A89A23FBEE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtCampanias>
            <sBTCampania>
               <codigo>1</codigo>
               <descripcion>Campaña Uno</descripcion>
            </sBTCampania>
         </sdtCampanias>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ObtenerCampanias</Servicio>
            <Fecha>2019-09-25</Fecha>
            <Hora>10:06:27</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>246</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerCampaniasResponse>
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
        "sdtCampanias": {
          "sBTCampania": {
            "codigo": "1",
            "descripcion": "Campaña Uno"
          }
        },
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTMicrofinanzas.ObtenerCampanias",
          "Fecha": "2019-09-25",
          "Hora": "10:06:27",
          "Requerimiento": "95",
          "Numero": "246",
          "Estado": "OK"
        }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCampania  

### sBTCampania

::: center 
Los campos del tipo de dato estructurado sBTCampania son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Short | Identificador de campaña. 
descripcion | String | Descripción de campaña. 
:::
<!-- CIERRA SDT -->