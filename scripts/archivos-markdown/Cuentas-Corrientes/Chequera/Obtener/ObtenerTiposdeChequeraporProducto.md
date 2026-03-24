---
title: Obtener Tipos de Chequera por Producto
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
::: note Método para obtener un listado de las chequeras que se pueden asignar a un determinado producto.

**Nombre publicación:** BTCuentasCorrientes.ObtenerTiposDeChequeraPorProducto

**Programa:** RBTPG254

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
productoUId | Long | Identificador único de producto.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtTiposChequera | [sBTTipoChequera](#sbttipochequera) | Listado de tipos de chequera.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de producto.
30003 | No existe registro para el identificador único.
40001 | El producto no tiene habilitado el manejo de chequeras.
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
      <bts:BTCuentasCorrientes.ObtenerTiposDeChequeraPorProducto>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>GP</bts:Device>
            <bts:Token>7b789d76ae4A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:productoUId>43</bts:productoUId>
      </bts:BTCuentasCorrientes.ObtenerTiposDeChequeraPorProducto>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerTiposDeChequeraPorProducto' \
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
      "productoUId": "43"
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
      <BTCuentasCorrientes.ObtenerTiposDeChequeraPorProductoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>7b789d76ae4A8B5C60A82434</Token>
         </Btinreq>
         <sdtTiposChequera>
            <SdtsBTTipoChequera>
               <descripcion>Chequera Común 25 / Pesos</descripcion>
               <identificador>1</identificador>
            </SdtsBTTipoChequera>
            <SdtsBTTipoChequera>
               <descripcion>Chequeras Diferidas 25 /Pesos</descripcion>
               <identificador>2</identificador>
            </SdtsBTTipoChequera>
         </sdtTiposChequera>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>429</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.ObtenerTiposDeChequeraPorProducto</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-08-09</Fecha>
            <Hora>14:38:57</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerTiposDeChequeraPorProductoResponse>
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
      "sdtTiposChequera": {
        "SdtsBTTipoChequera": [
          {
            "descripcion": "Chequera Común 25 / Pesos",
            "identificador": "1"
          },
          {
            "descripcion": "Chequeras Diferidas 25 /Pesos",
            "identificador": "2"
          }
        ]
      },
      "Btoutreq": {
        "Numero": "429",
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.ObtenerTiposDeChequeraPorProducto",
        "Requerimiento": "1",
        "Fecha": "2019-08-09",
        "Hora": "14:38:57",
        "Canal": "BTDIGITAL"
      }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTipoChequera

### sBTTipoChequera

::: center
Los campos del tipo de dato estructurado sBTTipoChequera son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
descripcion | String | Descripción de tipo de chequera.
identificador | Int | Identificador de tipo de chequera.
:::
<!-- CIERRA SDT -->