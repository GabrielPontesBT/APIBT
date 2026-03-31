---
title: Crear
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
::: note Método para crear un usuario.

**Nombre publicación:** BTUsuarios.Crear

**Programa:** RBTPG120

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtUsuario | [sBTUsuarioBT](#sbtusuariobt) | Datos de usuario Bantotal.
modo | String | [Hidden: Valor fijo 'INS' para este método].

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | Debe ingresar Usuario.
30002 | El Usuario ya existe.
30004 | Debe ingresar Nombre.
30005 | Debe ingresar Email.
30006 | Debe ingresar Nro de Caja.
30007 | Valor incorrecto para cantidad de sesiones abiertas.
30008 | Valor incorrecto para Nivel.
30009 | Debe ingresar Programa Inicial.
30010 | El Programa Inicial no existe.
30011 | Debe ingresar Sucursal.
30012 | La Sucursal no existe.
40012 | Número de Cajero ya asignado.
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
      <bts:BTUsuarios.Crear>
      <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtUsuario>
            <bts:cajero>S</bts:cajero>
            <bts:cantidadSesionesAbiertas>1</bts:cantidadSesionesAbiertas>
            <bts:email>prueba@bantotal.com</bts:email>
            <bts:espaciosTrabajo>1</bts:espaciosTrabajo>
            <bts:nivel>9</bts:nivel>
            <bts:nombre>USUARIO PRUEBA</bts:nombre>
            <bts:numeroCaja>1</bts:numeroCaja>
            <bts:programaInicial>HEJECUTA</bts:programaInicial>
            <bts:sucursal>1</bts:sucursal>
            <bts:usuario>PRUEBA</bts:usuario>
         </bts:sdtUsuario>
      </bts:BTUsuarios.Crear>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
   'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?Crear' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
   "Btinreq": {
      "Device": "AV",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "",
      "Canal": "BTDIGITAL",
      "Token": "fa2c02c95a4A8B5C60A82434"
   },
   "sdtUsuario": {
      "cajero": "S",
      "cantidadSesionesAbiertas": "1",
      "email": "prueba@bantotal.com",
      "espaciosTrabajo": "1",
      "nivel": "9",
      "nombre": "USUARIO PRUEBA",
      "numeroCaja": "1",
      "programaInicial": "HEJECUTA",
      "sucursal": "1",
      "usuario": "PRUEBA"
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
      <BTUsuarios.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d2dc7b1654A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>89</Numero>
            <Estado>OK</Estado>
            <Servicio>BTUsuarios.Crear</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-04</Fecha>
            <Hora>16:13:28</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTUsuarios.CrearResponse>
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
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "96",
        "Estado": "OK",
        "Servicio": "BTUsuarios.Crear",
        "Requerimiento": "1",
        "Fecha": "2018-05-04",
        "Hora": "16:18:56",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT --> 
::: details sBTUsuarioBT  

### sBTUsuarioBT

::: center 
Los campos del tipo de dato estructurado sBTUsuarioBT son los siguientes: 

Campo | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cajero | String | Indica si el usuario es cajero (S/N). 
cantidadSesionesAbiertas | Short | Cantidad máxima de sesiones que puede tener abiertas un mismo usuario Bantotal. 
email | String | Email de usuario. 
espaciosTrabajo | Int | Cantidad máxima de espacios de trabajos que puede tener abierta el usuario (0 - Para indicar que no tiene límites). 
nivel | Short | Nivel del usuario. 
nombre | String | Nombre del usuario. 
numeroCaja | Int | Número de caja que utiliza el cajero. 
programaInicial | String | Nombre de programa inicial que se invoca al acceder a Bantotal. 
sucursal | Int | Identificador de sucursal. 
usuario | String | Identificador del usuario. 
:::
<!-- CIERRA SDT -->