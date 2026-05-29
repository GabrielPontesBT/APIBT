---
title:  Eliminar Punto Venta
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
::: note Método para eliminar un punto de venta de Partner.

**Nombre publicación:** BTPartners.EliminarPuntoVenta

**Programa:** RBTPN023

**Alcance:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
partnerUId | Int | Identificador único del partner.
puntoVentaUId | Int | Identificador único del punto de venta.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001  | Debe ingresar el identificador del Partner.
30002  | Debe ingresar el identificador del punto de venta.
40003  | El Partner no tiene un punto de venta con el identificador que se quiere eliminar.
40006  | Existe al menos una contraparte dada de alta en el punto de venta.
40007  | Existe al menos una operación dada de alta en el punto de venta.
40008  | Tiene al menos un saldo asociado.
40009  | Tiene entradas en el log de habilitaciones.
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
      <bts:BTPartners.EliminarPuntoVenta>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>FPAIS</Device>
            <Requerimiento>1</Requerimiento>
            <Token>0A4505C5C795F276A390FC46</Token>
          </Btinreq>
         <bts:partnerUId>1</bts:partnerUId>
         <bts:puntoVentaUId>5</bts:puntoVentaUId>
      </bts:BTPartners.EliminarPuntoVenta>
   </soapenv:Body>
</soapenv:Envelope>
```
@tab JSON
```json
{
   "Btinreq": {
      "Canal": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Device": "FPAIS",
      "Requerimiento": 1,
      "Token": "0A4505C5C795F276A390FC46"
   },
   "partnerUId": 1,
   "puntoVentaUId": 5
}
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
      <BTPartners.EliminarPuntoVentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FPAIS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0A4505C5C795F276A390FC46</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>38479</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.EliminarPuntoVenta</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2026-05-21</Fecha>
            <Hora>15:03:46</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.EliminarPuntoVentaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
@tab JSON
```json
{
  "Btinreq": {
    "Device": "FPAIS",
    "Usuario": "INSTALADOR",
    "Requerimiento": 1,
    "Canal": "BTDIGITAL",
    "Token": "0A4505C5C795F276A390FC46"
  },
  "Erroresnegocio": {},
  "Btoutreq": {
    "Numero": 38479,
    "Estado": "OK",
    "Servicio": "BTPartners.EliminarPuntoVenta",
    "Requerimiento": 1,
    "Fecha": "2026-05-21",
    "Hora": "15:03:46",
    "Canal": "BTDIGITAL"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->