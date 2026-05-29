---
title: Actualizar Datos Envío
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
::: note Método para actualizar los datos de envío de estado de cuenta.

**Nombre publicación:** BTCuentasVista.ActualizarDatosEnvioEECC

**Programa:** RBTPG640

**Alcance:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
operacionUId | Long | Identificador único de operación.
sdtEnvioEstadoCuenta | [sBTEnvioEstadoCuenta](#sbtenvioestadocuenta) |  Datos de envío de estado de cuenta.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30003 | No se recibió el identificador de Cuenta Vista.
30004 | No se recuperó la Cuenta Vista para el identificador: [Número de identificador]. 
40001 | La frecuencia enviada no es correcta.
40002 | El valor ingresado para recibe estado de cuenta no es correcto.
40003 | El valor enviado ingresado para la forma de envío no es correcta. Debe ser (M-Correo, P-Correo postal).
40004 | El código de domicilio ingresado no es valido.
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
      <bts:BTCuentasVista.ActualizarDatosEnvioEECC>
         <bts:Btinreq>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Device>AS</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>74BC0CF92E9F6D66D80B3AFB</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
         </bts:Btinreq>
         <bts:operacionUId>1142</bts:operacionUId>
         <bts:sdtEnvioEstadoCuenta>
            <bts:formaEnvio>Envío Físico</bts:formaEnvio>
            <bts:frecuencia>Cuatrimestral</bts:frecuencia>
            <bts:recibeEstado>S</bts:recibeEstado>
            <bts:emailId></bts:emailId>
            <bts:domicilioId>1</bts:domicilioId>
            <bts:formaEnvioId>P</bts:formaEnvioId>
            <bts:email></bts:email>
            <bts:frecuenciaId>9</bts:frecuenciaId>
            <bts:domicilio>AVENIDA ITALIA MANZANA 2144</bts:domicilio>
         </bts:sdtEnvioEstadoCuenta>
      </bts:BTCuentasVista.ActualizarDatosEnvioEECC>
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
    "Token": "B0EFB6BF27264672AD43324E"
  },
  "operacionUId": "1142",
  "sdtEnvioEstadoCuenta": {
    "domicilio": "AVENIDA ITALIA MANZANA 2144",
    "domicilioId": "1",
    "email": "",
    "emailId": "",
    "formaEnvio": "Envío Físico",
    "formaEnvioId": "P",
    "frecuencia": "Cuatrimestral",
    "frecuenciaId": "9",
    "recibeEstado": "S"
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
      <BTCuentasVista.ActualizarDatosEnvioEECCResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>74BC0CF92E9F6D66D80B3AFB</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>38499</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.ActualizarDatosEnvioEECC</Servicio>
            <Requerimiento/>
            <Fecha>2026-05-27</Fecha>
            <Hora>14:56:22</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ActualizarDatosEnvioEECCResponse>
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
    "Token": "B0EFB6BF27264672AD43324E"
  },
  "Erroresnegocio": [],
  "Btoutreq": {
    "Numero": 38498,
    "Estado": "OK",
    "Servicio": "BTCuentasVista.ActualizarDatosEnvioEECC",
    "Requerimiento": "1",
    "Fecha": "2026-05-27",
    "Hora": "14:54:36",
    "Canal": "BTDIGITAL"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTEnvioEstadoCuenta

### sBTEnvioEstadoCuenta

::: center
Los campos del tipo de dato estructurado sBTEnvioEstadoCuenta son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
domicilioId | Byte | Identificador de domicilio.
domicilio | String | Domicilio.
emailId | Int | Identificador de email.
email | String | Email.
formaEnvioId | String | Identificador de forma de envío.
formaEnvio | String | Forma de envío (M: Correo, P: Correo Postal).
frecuenciaId | Byte | Identificador de frecuencia.
frecuencia | String | Frecuencia.
recibeEstado | String | Recibe estado (S: Si / N: No).
:::
<!-- CIERRA SDT -->
