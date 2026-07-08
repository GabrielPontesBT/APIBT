---
title: Obtener Usuarios Para Perfil
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
::: note Método para obtener un listado de los usuarios que tiene asociados un determinado perfil.

**Nombre publicación:** BTUsuarios.ObtenerUsuariosParaPerfil

**Programa:** RBTPG392

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
perfil | String | Perfil de usuario.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtUsuarios | [sBTDetalleUsuario](#sbtdetalleusuario) | Listado de usuarios.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | Debe ingresar perfil.
40001 | No existe el perfil ingresado.
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
      <bts:BTUsuarios.ObtenerUsuariosParaPerfil>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>20130357454A8B5C60A82434</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:perfil>CAJERO</bts:perfil>
      </bts:BTUsuarios.ObtenerUsuariosParaPerfil>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Canal": "BTDIGITAL",
    "Requerimiento": 1,
    "Usuario": "MINSTALADOR",
    "Token": "20130357454A8B5C60A82434",
    "Device": "GP"
  },
  "perfil": "CAJERO",
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
      <BTPersonas.ObtenerUsuariosParaPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Token>c2cfd09eff4A8B5C60A82434</Token>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
         </Btinreq>
         <sdtUsuarios>
            <sBTDetalleUsuario>
               <empresa>1</empresa>
               <usuario>GERENTE</usuario>
               <nombre>GERENTE</nombre>
               <ultimoAvisoActividad>2018-03-21, 12:51:10</ultimoAvisoActividad>
            </sBTDetalleUsuario>
            <sBTDetalleUsuario>
               <empresa>1 - BTV2R3 Uruguay</empresa>
               <usuario>BANTOTAL</usuario>
               <nombre>BANTOTAL</nombre>
               <ultimoAvisoActividad>2022-05-26, 13:46:09</ultimoAvisoActividad>
            </sBTDetalleUsuario>
            <sBTDetalleUsuario>
               <empresa>1</empresa>
               <usuario>COLOCACION</usuario>
               <nombre>COLOCACION</nombre>
               <ultimoAvisoActividad>2018-02-26, 17:03:16</ultimoAvisoActividad>
            </sBTDetalleUsuario>
            <sBTDetalleUsuario>
               <empresa>1</empresa>
               <usuario>CAJERO</usuario>
               <nombre>CAJERO</nombre>
               <ultimoAvisoActividad>2022-05-26, 13:40:24</ultimoAvisoActividad>
            </sBTDetalleUsuario>
            <sBTDetalleUsuario>
               <empresa>1</empresa>
               <usuario>OPERADOR</usuario>
               <nombre>OPERADOR</nombre>
               <ultimoAvisoActividad>2001-01-01, 15:29:13</ultimoAvisoActividad>
            </sBTDetalleUsuario>
         </sdtUsuarios>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16576</Numero>
            <Hora>12:36:58</Hora>
            <Fecha>2022-05-26</Fecha>
            <Servicio>BTPersonas.ObtenerUsuariosParaPerfil</Servicio>
            <Estado>OK</Estado>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
         </Btoutreq>
      </BTPersonas.ObtenerUsuariosParaPerfilResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Token": "c2cfd09eff4A8B5C60A82434",
        "Canal": "BTDIGITAL",
        "Requerimiento": 1
    },
    "sdtUsuarios": {
        "sBTDetalleUsuario": [
            {
                "empresa": 1,
                "usuario": "GERENTE",
                "nombre": "GERENTE",
                "ultimoAvisoActividad": "2018-03-21, 12:51:10"
            },
            {
                "empresa": "1 - BTV2R3 Uruguay",
                "usuario": "BANTOTAL",
                "nombre": "BANTOTAL",
                "ultimoAvisoActividad": "2022-05-26, 13:46:09"
            },
            {
                "empresa": 1,
                "usuario": "COLOCACION",
                "nombre": "COLOCACION",
                "ultimoAvisoActividad": "2018-02-26, 17:03:16"
            },
            {
                "empresa": 1,
                "usuario": "CAJERO",
                "nombre": "CAJERO",
                "ultimoAvisoActividad": "2022-05-26, 13:40:24"
            },
            {
                "empresa": 1,
                "usuario": "OPERADOR",
                "nombre": "OPERADOR",
                "ultimoAvisoActividad": "2001-01-01, 15:29:13"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 16576,
        "Hora": "12:36:58",
        "Fecha": "2022-05-26",
        "Servicio": "BTPersonas.ObtenerUsuariosParaPerfil",
        "Estado": "OK",
        "Canal": "BTDIGITAL",
        "Requerimiento": 1
    }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT --> 
::: details sBTDetalleUsuario  

### sBTDetalleUsuario

::: center 
Los campos del tipo de dato estructurado sBTDetalleUsuario son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
empresa | String | Nombre de la empresa. 
nombre | String | Nombre del usuario. 
ultimoAvisoActividad | String | Último aviso de actividad del usuario.  
usuario | String | Código del usuario. 
:::
<!-- CIERRA SDT -->
