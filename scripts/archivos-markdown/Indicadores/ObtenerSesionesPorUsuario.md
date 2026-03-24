---
title: Obtener Sesiones Por Usuario
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
::: note Método para obtener la cantidad de sesiones abiertas por usuario.

**Nombre publicación:** BTIndicadores.ObtenerSesionesPorUsuario

**Programa:** RBTPG711

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtSesionesPorUsuario | [sBTSesionesPorUsuario](#sbtsesionesporusuario) | Colección de datos de sesiones por usuario.

@tab Errores

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
      <bts:BTIndicadores.ObtenerSesionesPorUsuario>
         <bts:Btinreq>
            <bts:Device>MC</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>3</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>3483F7F3C05B0DDF791C90A3</bts:Token>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerSesionesPorUsuario>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerSesionesPorUsuario' \
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
      <BTIndicadores.ObtenerSesionesPorUsuarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>MC</Device>
            <Requerimiento>3</Requerimiento>
            <Token>3483F7F3C05B0DDF791C90A3</Token>
         </Btinreq>
         <sdtSesionesPorUsuario>
            <sBTSesionesPorUsuario>
               <cantidadSesiones>438</cantidadSesiones>
               <usuario>INSTALADOR</usuario>
            </sBTSesionesPorUsuario>
            <sBTSesionesPorUsuario>
               <cantidadSesiones>5</cantidadSesiones>
               <usuario>BANTOTAL</usuario>
            </sBTSesionesPorUsuario>
            <sBTSesionesPorUsuario>
               <cantidadSesiones>1</cantidadSesiones>
               <usuario>ASESOR</usuario>
            </sBTSesionesPorUsuario>
         </sdtSesionesPorUsuario>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-05-31</Fecha>
            <Hora>17:15:49</Hora>
            <Numero>25899</Numero>
            <Servicio>BTIndicadores.ObtenerSesionesPorUsuario</Servicio>
            <Requerimiento>3</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTIndicadores.ObtenerSesionesPorUsuarioResponse>
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
	"sdtSesionesPorUsuario": {
		"sBTSesionesPorUsuario": [
			{
				"cantidadSesiones": "438",
				"usuario": "INSTALADOR"
			},
			{
				"cantidadSesiones": "5",
				"usuario": "BANTOTAL"
			},
			{
				"cantidadSesiones": "1",
				"usuario": "ASESOR"
			}
		]
	},
    "Btoutreq": {
        "Numero": "397",
        "Estado": "OK",
        "Servicio": "BTIndicadores.ObtenerSesionesPorUsuario",
        "Fecha": "2018-05-02",
        "Requerimiento": "1",
        "Hora": "18:40:30",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSesionesPorUsuario  

### sBTSesionesPorUsuario

::: center 
Los campos del tipo de dato estructurado sBTSesionesPorUsuario son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
cantidadsesiones | Int | Cantidad de sesiones abiertas.
usuario | String | Identificador de usuario.
:::
<!-- CIERRA SDT -->