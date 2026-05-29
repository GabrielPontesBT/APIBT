---
title:  Eliminar Partner
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
::: note Método para eliminar un Partner.

**Nombre publicación:** BTPartners.EliminarPartner

**Programa:** RBTPN021

**Alcance:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
partnerUId | Int | Identificador único del partner.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001  | Debe ingresar el identificador del Partner.
40004  | No existe un Partner con el código indicado para eliminar.
40007  | No se pudo eliminar. Tiene puntos de venta asociados.
40008  | No se pudo eliminar. Tiene vendedores asociados.
40009  | No se pudo eliminar. Tiene creadas excepciones de productos.
40010  | No se pudo eliminar. Tiene creadas excepciones de servicios.
40011  | No se pudo eliminar. El Partner ha creado contrapartes.
40012  | No se pudo eliminar. El Partner ha creado operaciones.
40013  | No se pudo eliminar. El Partner tiene saldos asociados.
40014  | No se pudo eliminar. El Partner tiene entradas en el Log de habilitaciones.
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
      <bts:BTPartners.EliminarPartner>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>FPAIS</Device>
            <Requerimiento>1</Requerimiento>
            <Token>0A4505C5C795F276A390FC46</Token>
         </Btinreq>
         <bts:partnerUId>12</bts:partnerUId>
      </bts:BTPartners.EliminarPartner>
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
  "partnerUId": 12
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
      <BTPartners.EliminarPartnerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FPAIS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0A4505C5C795F276A390FC46</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>38478</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.EliminarPartner</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2026-05-21</Fecha>
            <Hora>15:01:24</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.EliminarPartnerResponse>
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
    "Numero": 38478,
    "Estado": "OK",
    "Servicio": "BTPartners.EliminarPartner",
    "Requerimiento": 1,
    "Fecha": "2026-05-21",
    "Hora": "15:01:24",
    "Canal": "BTDIGITAL"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->