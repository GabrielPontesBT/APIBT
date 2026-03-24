---
title: Autenticación
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
---

<!-- ABRE DATOS DEL MÉTODO -->
::: note Para poder utilizar los servicios es necesario autenticarse a efectos de obtener el SessionToken.

**Nombre publicación:** Authenticate.Execute

**Programa:** PBTIAUTHENTICATE

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
UserId | String | Usuario a autenticar.
UserPassword | String | Contraseña de usuario a autenticar.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
SessionToken | String | Token a utilizar para la ejecución de los servicios.

@tab Errores

Código | Descripción
:--------- | :-----------
10001 | Excepción de Plataforma.
10002 | Error en la ejecución del programa.
10011 | Sesión inválida.
10021 | Canal no declarado.
10022 | Canal se encuentra deshabilitado.
10023 | Servicio no habilitado en el canal.
10024 | Servicio no declarado en el canal.
10025 | Servicio no existe.
10026 | Usuario Bantotal no válido.
10027 | Usuario externo no tiene asignado usuario Bantotal.
10028 | Usuario no habilitado para el Servicio.
10029 | Usuario externo deshabilitado.
10030 | Usuario externo no asociado al servicio en el canal.
10031 | El usuario no coincide con el usuario de autenticación (UserId).
10031 | El usuario no coincide con el usuario de autenticación (UserId).
10032 | Error en la numeración del requerimiento.
10032 | Error en la numeración del requerimiento.
10033 | Error en llamado a RP0349.
10033 | Error en llamado a RP0349.
10034 | No se recibió la clave de idempotencia.
10035 | La clave de idempotencia excede el largo máximo.
10036 | La clave de idempotencia está siendo utilizada.
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
      <bts:Authenticate.Execute>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token></bts:Token>
         </bts:Btinreq>
         <bts:UserId>MINSTALADOR</bts:UserId>
         <bts:UserPassword>Bantotal2015</bts:UserPassword>
      </bts:Authenticate.Execute>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_Authenticate_v1?Execute' \
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
	"UserId": "BANTOTAL",
    "UserPassword": "z0na#1357"
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
      <Authenticate.ExecuteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token/>
         </Btinreq>
         <SessionToken>7f582501004A8B5C60A82434</SessionToken>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>722</Numero>
            <Estado>OK</Estado>
            <Servicio>Authenticate.Execute</Servicio>
            <Fecha>2017-11-24</Fecha>
            <Requerimiento/>
            <Hora>12:52:24</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </Authenticate.ExecuteResponse>
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
    "SessionToken": "991ba47aac4A8B5C60A82434",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 46,
        "Servicio": "Authenticate.Execute",
        "Estado": "OK",
        "Fecha": "2019-10-24",
        "Requerimiento": "",
        "Hora": "20:55:06",
        "Canal": "BTDIGITAL"
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->