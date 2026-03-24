---
title: Obtener Pagos de un Préstamo
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
::: note Método para obtener el detalle de pagos de un préstamo.

**Nombre publicación:** BTPrestamos.ObtenerPagos

**Programa:** RBTPG096

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend 

Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :-----------  
Correlativo 1 | 3 
Correlativo 2 | 1 
Valor específico 1 | Identificador del módulo a incluir. 

Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :----------- 
Correlativo 1 | 3 
Correlativo 2 | 2 
Valor específico 1 | Módulo del tipo de operación a excluir. 
Valor específico 2 | Tipo de operación a excluir. 

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación del préstamo.
fechaHasta | Date | Fecha hasta la cual buscar pagos.
fechaDesde | Date | Fecha desde la cual buscar pagos.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtPagos | [sBTPagoPrestamo](#sbtpagoprestamo) | Listado de pagos del préstamo.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de operación.
30011 | No se recuperó la operación para el identificador recibido.
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
      <bts:BTPrestamos.ObtenerPagos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>361</bts:operacionUId>
         <bts:fechaHasta>2020-03-05</bts:fechaHasta>
         <bts:fechaDesde>2019-03-05</bts:fechaDesde>
      </bts:BTPrestamos.ObtenerPagos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPagos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 663f7ea1-30e7-309b-9c23-7792294641cc' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 361,
	 "fechaHasta": "2020-03-05",
	 "fechaDesde": "2019-03-05"
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
      <BTPrestamos.ObtenerPagosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtPagos>
            <sBTPagoPrestamo>
               <hora/>
               <fecha>2018-05-15</fecha>
               <operacionUIdCobro>0</operacionUIdCobro>
               <importe>25000.00</importe>
               <movimientoUId>0</movimientoUId>
            </sBTPagoPrestamo>
			<sBTPagoPrestamo>
               <hora/>
               <fecha>2018-06-15</fecha>
               <operacionUIdCobro>0</operacionUIdCobro>
               <importe>22199.00</importe>
               <movimientoUId>0</movimientoUId>
            </sBTPagoPrestamo>
			<sBTPagoPrestamo>
               <hora/>
               <fecha>2018-07-15</fecha>
               <operacionUIdCobro>0</operacionUIdCobro>
               <importe>34520.00</importe>
               <movimientoUId>0</movimientoUId>
            </sBTPagoPrestamo>
			<sBTPagoPrestamo>
               <hora/>
               <fecha>2018-08-15</fecha>
               <operacionUIdCobro>0</operacionUIdCobro>
               <importe>45680.00</importe>
               <movimientoUId>0</movimientoUId>
            </sBTPagoPrestamo>
         </sdtPagos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>905</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerPagos</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>13:05:51</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerPagosResponse>
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
    "sdtPagos": {
          "sBTPagoPrestamo": [
            {
              "fecha": "2018-05-15",
              "operacionUIdCobro": "0",
              "importe": "25000.00",
              "movimientoUId": "0"
            },
            {
              "fecha": "2018-06-15",
              "operacionUIdCobro": "0",
              "importe": "22199.00",
              "movimientoUId": "0"
            },
            {
              "fecha": "2018-07-15",
              "operacionUIdCobro": "0",
              "importe": "34520.00",
              "movimientoUId": "0"
            },
            {
              "fecha": "2018-08-15",
              "operacionUIdCobro": "0",
              "importe": "45680.00",
              "movimientoUId": "0"
            }
          ]
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "906",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerPagos",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "13:56:38",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPagoPrestamo  

### sBTPagoPrestamo

::: center 
Los campos del tipo de dato estructurado sBTPagoPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
fecha | Date | Fecha de pago. 
importe | Double | Importe pagado. 
movimientoUId | Long | Identificador único del movimiento. 
operacionUIdCobro | Long | Identificador único de la operación de cobro. 
:::
<!-- CIERRA SDT -->