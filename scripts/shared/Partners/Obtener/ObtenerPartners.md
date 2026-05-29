---
title: Obtener Partners
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
::: note Método para obtener los partners.

**Nombre publicación:** BTPartners.ObtenerPartners

**Programa:** RBTPN003

**Alcance:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtPartners | [sBTPartner](#sbtpartner) | Listado de Partners.

@tab Errores

Código | Descripción
:--------- | :-----------
No aplica.

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
      <bts:BTPartners.ObtenerPartners>
         <bts:Btinreq>
            <bts:Device>INSTALADOR</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>599B05BBD8DA84FEC631B5C3</bts:Token>
         </bts:Btinreq>
      </bts:BTPartners.ObtenerPartners>
   </soapenv:Body>
</soapenv:Envelope>
```
@tab JSON
```json
{
  "Btinreq": {
    "Canal": "BTDIGITAL",
    "Usuario": "INSTALADOR",
    "Device": "INSTALADOR",
    "Requerimiento": "1",
    "Token": "599B05BBD8DA84FEC631B5C3"
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
      <BTPartners.ObtenerPartnersResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>INSTALADOR</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>TOKEN_AQUI</Token>
         </Btinreq>
         <sdtPartners>
            <sBTPartner>
               <tipoUId>1</tipoUId>
               <tipo>Concesionario</tipo>
               <nivelUId>1</nivelUId>
               <nivel>Nivel 1A - Venta</nivel>
               <habilitado>S</habilitado>
               <clienteUId>24</clienteUId>
               <partnerUId>1</partnerUId>
               <canal>CANAL 1</canal>
               <codigoComision>35</codigoComision>
               <nombre>CELLULAR CENTER</nombre>
               <sucursal>1</sucursal>
               <tipoRegistroVendedor>U</tipoRegistroVendedor>
               <manejaVendedores>S</manejaVendedores>
            </sBTPartner>
            <sBTPartner>
               <tipoUId>1</tipoUId>
               <tipo>Concesionario</tipo>
               <nivelUId>3</nivelUId>
               <nivel>Nivel 3A - Venta, cobro y post-venta</nivel>
               <habilitado>S</habilitado>
               <clienteUId>47</clienteUId>
               <partnerUId>5</partnerUId>
               <canal>CANAL 2</canal>
               <codigoComision>35</codigoComision>
               <nombre>MUNDO PC</nombre>
               <sucursal>22</sucursal>
               <tipoRegistroVendedor>P</tipoRegistroVendedor>
               <manejaVendedores>S</manejaVendedores>
            </sBTPartner>
         </sdtPartners>
         <Erroresnegocio/>
         <Btoutreq>
            <Numero>00000000</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.ObtenerPartners</Servicio>
            <Requerimiento/>
            <Fecha>2026-01-01</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>00:00:00</Hora>
         </Btoutreq>
      </BTPartners.ObtenerPartnersResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
@tab JSON
```json
{
  "Btinreq": {
    "Device": "INSTALADOR",
    "Usuario": "INSTALADOR",
    "Requerimiento": "1",
    "Canal": "BTDIGITAL",
    "Token": "599B05BBD8DA84FEC631B5C3"
  },
  "sdtPartners": {
    "sBTPartner": [
      {
        "tipoUId": 1,
        "tipo": "Concesionario",
        "nivelUId": 1,
        "nivel": "Nivel 1A - Venta",
        "habilitado": "S",
        "clienteUId": 24,
        "partnerUId": 1,
        "canal": "CANAL 1",
        "codigoComision": 35,
        "nombre": "CELLULAR CENTER",
        "sucursal": 1,
        "tipoRegistroVendedor": "U",
        "manejaVendedores": "S"
      },
      {
        "tipoUId": 1,
        "tipo": "Concesionario",
        "nivelUId": 3,
        "nivel": "Nivel 3A - Venta, cobro y post-venta",
        "habilitado": "S",
        "clienteUId": 47,
        "partnerUId": 5,
        "canal": "CANAL 2",
        "codigoComision": 35,
        "nombre": "MUNDO PC",
        "sucursal": 22,
        "tipoRegistroVendedor": "P",
        "manejaVendedores": "S"
      }
    ]
  },
  "Erroresnegocio": [],
  "Btoutreq": {
    "Numero": 38483,
    "Estado": "OK",
    "Servicio": "BTPartners.ObtenerPartners",
    "Requerimiento": "1",
    "Fecha": "2026-05-22",
    "Hora": "14:34:37",
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
tipoRegistroVendedor | String | Tipo de registro del vendedor. Se pueden obtener los siguientes [valores.](#valores)
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