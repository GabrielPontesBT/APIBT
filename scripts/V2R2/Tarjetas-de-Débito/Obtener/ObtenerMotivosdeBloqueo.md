---
title: Obtener Motivos de Bloqueo
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
::: note Método para obtener los motivos de bloqueo de tarjetas de débito dados de alta en Bantotal.

**Nombre publicación:** BTTarjetasDeDebito.ObtenerMotivosBloqueo

**Programa:** RBTPG195

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtMotivosBloqueo | [sBTMotivoBloqueo](#sbtmotivobloqueo) | Listado de motivos de bloqueo.

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
      <bts:BTTarjetasDeDebito.ObtenerMotivosBloqueo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BA</bts:Usuario>
            <bts:Token>0211202010280000399672</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
      </bts:BTTarjetasDeDebito.ObtenerMotivosBloqueo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ObtenerMotivosBloqueo' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Canal": "BTDIGITAL",
		"Requerimiento": "1",
		"Usuario": "BA",
		"Token": "0211202010280000399672",
		"Device": "MC"
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
      <BTTarjetasDeDebito.ObtenerMotivosBloqueoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BA</Usuario>
            <Token>0211202010280000399672</Token>
            <Device>MC</Device>
         </Btinreq>
         <sdtMotivosBloqueo>
            <sBTMotivoBloqueo>
               <identificador>1</identificador>
               <descripcion>ROBO</descripcion>
            </sBTMotivoBloqueo>
            <sBTMotivoBloqueo>
               <identificador>2</identificador>
               <descripcion>PERDIDA</descripcion>
            </sBTMotivoBloqueo>
            <sBTMotivoBloqueo>
               <identificador>3</identificador>
               <descripcion>DECISION DEL CLIENTE</descripcion>
            </sBTMotivoBloqueo>
            <sBTMotivoBloqueo>
               <identificador>4</identificador>
               <descripcion>CIERRE DE CUENTA</descripcion>
            </sBTMotivoBloqueo>
         </sdtMotivosBloqueo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTTarjetasDeDebito.ObtenerMotivosBloqueo</Servicio>
            <Fecha>2020-11-02</Fecha>
            <Hora>10:59:14</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10139</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerMotivosBloqueoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "1",
      "Usuario": "BA",
      "Token": "0211202010280000399672",
      "Device": "MC"
   },
   "sdtMotivosBloqueo": {
      "sBTMotivoBloqueo": [
         {
            "identificador": "1",
            "descripcion": "ROBO"
         },
         {
            "identificador": "2",
            "descripcion": "PERDIDA"
         },
         {
            "identificador": "3",
            "descripcion": "DECISION DEL CLIENTE"
         },
         {
            "identificador": "4",
            "descripcion": "CIERRE DE CUENTA"
         }
      ]
   },
   "Erroresnegocio": null,
   "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTTarjetasDeDebito.ObtenerMotivosBloqueo",
      "Fecha": "2020-11-02",
      "Hora": "10:59:14",
      "Requerimiento": "1",
      "Numero": "10139",
      "Estado": "OK"
   }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->

::: details sBTMotivoBloqueo  

### sBTMotivoBloqueo

::: center 
Los campos del tipo de dato estructurado sBTMotivoBloqueo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción. 
identificador | Int | Identificador. 
<!-- CIERRA SDT -->