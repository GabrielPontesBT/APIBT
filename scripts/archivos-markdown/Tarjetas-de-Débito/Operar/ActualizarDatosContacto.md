---
title: Actualizar Datos de Contacto
icon: /assets/image/nuevo.svg
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
::: note Método para actualizar los datos de contacto de una tarjeta de débito.

**Nombre publicación:** BTTarjetasDeDebito.ActualizarDatosContacto

**Programa:** RBTPG633

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
tarjetaUId | Long | Identificador único de tarjeta.
sdtDatosContacto | [sBTDatosContacto](#sbtdatoscontacto) | Datos del contacto de tarjeta.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de tarjeta de débito
30001 | No se recibió código de domicilio a actualizar.
30001 | No se recibió correo electrónico a actualizar.
30001 | No se recibió numero de teléfono a actualizar.
40001 | El código de domicilio ingresado no es válido.
40002 | No existe una tarjeta con el identificador ingresado.
40003 | El tarjeta habiente no tiene un domicilio con el código ingresado.
42005 | Funcionalidad inexistente TDD025.
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
      <bts:BTTarjetasDeDebito.ActualizarDatosContacto>
         <bts:Btinreq>
            <bts:Device>AS</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>E6B6A4E746ABD90893FEEF74</bts:Token>
         </bts:Btinreq>
         <bts:tarjetaUId>2000002083</bts:tarjetaUId>
         <bts:sdtDatosContacto>
            <bts:codigoDomicilio>1</bts:codigoDomicilio>
            <bts:correoElectronico>BenitoSA@GMAIL.COM</bts:correoElectronico>
            <bts:numeroTelefono>422306581</bts:numeroTelefono>
         </bts:sdtDatosContacto>
      </bts:BTTarjetasDeDebito.ActualizarDatosContacto>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ActualizarDatosContacto' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 71bsg5zc-e117-59h4-1df0-35ha197v1109' \
  -d '{
   "Btinreq": {
      "Device": "AS",
      "Usuario": "INSTALADOR",
      "Requerimiento": "",
      "Canal": "BTDIGITAL",
      "Token": "jh2c02c95a4A8B5C60A82434"
   },
   "tarjetaUId": 2000002083,
   "sdtDatosContacto": {
      "codigoDomicilio": 1,
      "correoElectronico": "BenitoSA@GMAIL.COM",
      "numeroTelefono": 422306581
   }
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
      <BTTarjetasDeDebito.ActualizarDatosContactoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>E6B6A4E746ABD90893FEEF74</Token>
         </Btinreq>
         <sdtDatosContacto>
            <codigoDomicilio>1</codigoDomicilio>
            <correoElectronico>AJBantotal@HOTMAIL.COM.UY</correoElectronico>
            <numeroTelefono>422306581</numeroTelefono>
         </sdtDatosContacto>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
         <Numero>35569</Numero>
            <Servicio>BTTarjetaDebito.ActualizarInformacionContacto</Servicio>
            <Estado>OK</Estado>
            <Fecha>2025-05-26</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>16:41:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.ActualizarDatosContactoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
   "Btinreq": {
        "Device": "AS",
        "Usuario": "INSTALADOR",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "E6B6A4E746ABD90893FEEF74"
      },
      "sdtDatosContacto": {
            "codigoDomicilio": "1",
            "correoElectronico": "AJBantotal@HOTMAIL.COM.UY",
            "numeroTelefono": "422306581"
        },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "35569",
        "Servicio": "BTTarjetaDebito.ActualizarInformacionContacto",
        "Estado": "OK",
        "Fecha": "2025-05-26",
        "Requerimiento": "1",
        "Hora": "16:41:12",
        "Canal": "BTDIGITAL"
        }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sbtDatosContacto  

### sBTDatosContacto

::: center 
Los campos del tipo de dato estructurado sBTDatosContacto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
codigoDomicilio | Byte | Identificador del tipo de domicilio.
correoElectronico | String | Correo electrónico.
numeroTelefono | String | Teléfono.
:::
<!-- CIERRA SDT -->