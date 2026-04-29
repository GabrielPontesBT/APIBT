---
title: Obtener Excepciones
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
::: note Método para obtener un listado de las excepciones por usuario.

**Nombre publicación:** BTSeguridad.ObtenerExcepciones

**Programa:** RBTPG086

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
usuario | String | Usuario.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
excepciones | [sBTExcepcion](#sbtexcepcion) | Listado de excepciones.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el usuario.
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
      <bts:BTSeguridad.ObtenerExcepciones>
         <bts:Btinreq>
            <bts:Device>ES</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>dac8c7fdec4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:usuario>BANTOTAL</bts:usuario>
      </bts:BTSeguridad.ObtenerExcepciones>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSeguridad?ObtenerExcepciones=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: e024d37c-0177-05ca-8f99-25dbfae4abbb' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "usuario": "BANTOTAL"
}'
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <SOAP-ENV:Body>
      <BTSeguridad.ObtenerExcepcionesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>ES</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>dac8c7fdec4A8B5C60A82434</Token>
         </Btinreq>
         <excepciones>
            <sBTExcepcion>
               <identificador>1853</identificador>
               <descripcion>Autorización T.Cbio./Arbitraje</descripcion>
               <usuario>INSTALADOR</usuario>
               <nombreUsuario>INSTALADOR</nombreUsuario>
               <movimientoUId>0</movimientoUId>
               <descripcionMovimiento>Compra USD Caja</descripcionMovimiento>
               <nombreSucursal>Casa Matriz</nombreSucursal>
               <ligada>N</ligada>
            </sBTExcepcion>
         </excepciones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>891</Numero>
            <Estado>OK</Estado>
            <Servicio>BTSeguridad.ObtenerExcepciones</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2017-12-20</Fecha>
            <Hora>16:40:06</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTSeguridad.ObtenerExcepcionesResponse>
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
    "excepciones": {
      "sBTExcepcion": [
         {
         "nombreUsuario": "INSTALADOR",
         "descripcion": "Autorización T.Cbio./Arbitraje",
         "identificador": "1854",
         "usuario": "INSTALADOR",
         "ligada": "N",
         "movimientoUId": "0",
         "nombreSucursal": "Casa Matriz",
         "descripcionMovimiento": "Compra USD Caja"
         }
      ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "956",
        "Estado": "OK",
        "Servicio": "BTSeguridad.ObtenerExcepciones",
        "Fecha": "2017-12-22",
        "Requerimiento": "",
        "Hora": "10:54:51",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTExcepcion

### sBTExcepcion

::: center
Los campos del tipo de dato estructurado sBTExcepcion son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
descripcion | String | Descripción de la excepción.
descripcionMovimiento | String | Descripción del movimiento.
identificador | Int | Identificador de excepción.
ligada | String | Ligada (S/N).
movimientoUId | Long | Identificador único de movimiento.
nombreSucursal | String | Nombre de la sucursal.
nombreUsuario | String | Nombre del usuario.
usuario | String | Usuario.
:::
<!-- CIERRA SDT -->