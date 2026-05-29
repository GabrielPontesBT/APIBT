---
title:  Crear Partner
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
::: note Método para crear un Partner.

**Nombre publicación:** BTPartners.CrearPartner

**Programa:** RBTPN019

**Alcance:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtPartner | [sBTPartner](#sbtpartner) | Datos del partner. 

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001  | Debe ingresar el identificador del Partner.
30002  | Debe ingresar el nombre del Partner.
30003  | Debe ingresar un tipo de Partner.
30004  | Debe ingresar nivel.
30005  | Si el Partner quedará habilitado entonces se debe ingresar un canal para poder operar.
30006  | No se recibió identificador de cliente.
30007  | Si el Partner no maneja vendedores no puede registrar el tipo de vendedor.
40001  | Ya existe un Partner con el código indicado.
40002  | La cuenta cliente no existe.
40015  | El código de comisión no existe.
40016  | La sucursal no existe.
40017  | Los canales no pueden ser compartidos por los Partners.
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
      <bts:BTPartners.CrearPartner>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>FPAIS</Device>
            <Requerimiento>1</Requerimiento>
            <Token>0A4505C5C795F276A390FC46</Token>
          </Btinreq>
         <bts:sdtPartner>
            <bts:tipoUId>1</bts:tipoUId>
            <bts:tipo></bts:tipo>
            <bts:nivelUId>1</bts:nivelUId>
            <bts:nivel></bts:nivel>
            <bts:habilitado>S</bts:habilitado>
            <bts:clienteUId>345</bts:clienteUId>
            <bts:partnerUId>12</bts:partnerUId>
            <bts:canal>CANAL 1</bts:canal>
            <bts:codigoComision>1</bts:codigoComision>
            <bts:nombre>Prueba</bts:nombre>
            <bts:tipoRegistroVendedor>U</bts:tipoRegistroVendedor>
            <bts:sucursal>1</bts:sucursal>
            <bts:manejaVendedores>N</bts:manejaVendedores>
         </bts:sdtPartner>
      </bts:BTPartners.CrearPartner>
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
  "sdtPartner": {
    "tipoUId": 1,
    "nivelUId": 1,
    "habilitado": "S",
    "clienteUId": 345,
    "partnerUId": 12,
    "canal": "CANAL 1",
    "tipo": "",
    "codigoComision": 1,
    "nivel": "",
    "nombre": "Prueba",
    "tipoRegistroVendedor": "U",
    "sucursal": 1,
    "manejaVendedores": "N"
  }
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
      <BTPartners.CrearPartnerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FPAIS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0A4505C5C795F276A390FC46</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>38464</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.CrearPartner</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2026-05-21</Fecha>
            <Hora>14:39:33</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.CrearPartnerResponse>
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
    "Numero": 38464,
    "Estado": "OK",
    "Servicio": "BTPartners.CrearPartner",
    "Requerimiento": 1,
    "Fecha": "2026-05-21",
    "Hora": "14:39:33",
    "Canal": "BTDIGITAL"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPartner

### sBTPartner

::: center
Los campos del tipo de dato estructurado sBTPartner son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
canal | String | Canal de comunicación.
clienteUId | Long | Identificador único del cliente en Bantotal.
codigoComision | Int | Código de comisión asignado al partner.
habilitado | String | Indica si el partner está habilitado (S: Si, N: No).
manejaVendedores | String | Indica si el partner maneja vendedores (S: Si, N: No).
nivel | String | Descripción del nivel del partner.
nivelUId | Byte | Identificador único del nivel.
nombre | String | Nombre del partner.
partnerUId | Int | Identificador único del partner.
sucursal | Int | Número de sucursal asociada.
tipo | String | Descripción del tipo de partner.
tipoRegistroVendedor | String | Tipo de registro del vendedor. Se pueden enviar los siguientes [valores](#valores).
tipoUId | Short | Identificador único del tipo de partner.
:::
<!-- CIERRA SDT -->

<!-- ABRE VALORES -->

### Valores

Clave | Valor | Comentarios
:--------- | :--------- | :--------- 
tipoRegistroVendedor | [U,P,C,A,B] | **[Opcional]** Define el tipo de registro permitido para los vendedores del Partner. U: Deben ser solo usuarios en Bantotal. P: Deben ser solo personas en Bantotal. C: Deben ser solo contraparte (y persona) en Bantotal. A: Deben ser a la vez usuarios y personas en Bantotal. B: Deben ser usuarios y contraparte (y persona) en Bantotal.
:::
<!-- CIERRA VALORES -->