---
title: Obtener Datos de Envío 
---

<!-- ABRE DATOS DEL MÉTODO -->
::: note Método para obtener los datos de envío de estado de cuenta.

**Nombre publicación:** BTCuentasVista.ObtenerDatosEnvioEECC

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

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtEnvioEstadoCuenta | [sBTEnvioEstadoCuenta](#sbtenvioestadocuenta) | Datos de envío de estado de cuenta.

@tab Errores

Código | Descripción
:--------- | :-----------
30003 | No se recibió el identificador de la cuenta vista.
30004 | No se recuperó la cuenta vista para el identificador: [Número de identificador]. 

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
      <bts:BTCuentasVista.ObtenerDatosEnvioEECC>
         <bts:Btinreq>
            <bts:Device>AS</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>74BC0CF92E9F6D66D80B3AFB</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>1142</bts:operacionUId>
      </bts:BTCuentasVista.ObtenerDatosEnvioEECC>
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
    "Token": "F7814AFD1A10F481ED759114"
  },
  "operacionUId": "1142"
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
      <BTCuentasVista.ObtenerDatosEnvioEECCResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>74BC0CF92E9F6D66D80B3AFB</Token>
         </Btinreq>
         <sdtEnvioEstadoCuenta>
            <formaEnvio>Email</formaEnvio>
            <frecuencia>Cuatrimestral</frecuencia> 
            <recibeEstado>S</recibeEstado>
            <emailId>1</emailId>
            <domicilioId>0</domicilioId>
            <formaEnvioId>M</formaEnvioId>
            <email>acastro@dlya.com.uy</email>
            <frecuenciaId>9</frecuenciaId>
            <domicilio/>
         </sdtEnvioEstadoCuenta>
         <Erroresnegocio/>
         <Btoutreq>
            <Numero>38493</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.ObtenerDatosEnvioEECC</Servicio>
            <Requerimiento/>
            <Fecha>2026-05-27</Fecha>
            <Hora>14:48:11</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ObtenerDatosEnvioEECCResponse>
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
    "Token": "F7814AFD1A10F481ED759114"
  },
  "sdtEnvioEstadoCuenta": {
    "formaEnvio": "Email",
    "frecuencia": "Cuatrimestral",
    "recibeEstado": "S",
    "emailId": 1,
    "domicilioId": 0,
    "formaEnvioId": "M",
    "email": "acastro@dlya.com.uy",
    "frecuenciaId": 9,
    "domicilio": ""
  },
  "Erroresnegocio": [],
  "Btoutreq": {
    "Numero": 38490,
    "Estado": "OK",
    "Servicio": "BTCuentasVista.ObtenerDatosEnvioEECC",
    "Requerimiento": "1",
    "Fecha": "2026-05-27",
    "Hora": "14:40:32",
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
formaEnvio | String | Forma de envío (M:Correo, P:Correo Postal).
frecuenciaId | Byte | Identificador de frecuencia.
frecuencia | String | Frecuencia.
recibeEstado | String | Recibe estado (S: Si / N: No).
:::
<!-- CIERRA SDT -->
