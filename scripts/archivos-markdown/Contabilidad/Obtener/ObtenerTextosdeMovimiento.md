---
title: Obtener Textos de Movimiento
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
::: note Método para obtener un listado de los textos asociados a un movimiento.

**Nombre publicación:** BTContabilidad.ObtenerTextosMovimiento

**Programa:** RBTPG097

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
movimientoUId | Long | Identificador único de movimiento.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtTextosMovimiento | [sBTTextoMovimiento](#sbttextomovimiento) | Listado de textos del movimiento.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de movimiento. 
40003 | No existe registro para el identificador único. 
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
      <bts:BTContabilidad.ObtenerTextosMovimiento>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BA</bts:Usuario>
            <bts:Token>0211202010280000399672</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:movimientoUId>1</bts:movimientoUId>
      </bts:BTContabilidad.ObtenerTextosMovimiento>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerTextosMovimiento' \
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
	 },
	 "movimientoUId": "1"
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
      <BTContabilidad.ObtenerTextosMovimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BA</Usuario>
            <Token>0211202010280000399672</Token>
            <Device>MC</Device>
         </Btinreq>
         <sdtTextosMovimiento>
            <sBTTextoMovimiento>
               <codigo>2</codigo>
               <descripcion>MOTIVOS DEL EMBARGO</descripcion>
               <renglon>1</renglon>
               <texto>MOTIVOS DEL EMBARGO</texto>
            </sBTTextoMovimiento>
         </sdtTextosMovimiento>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTContabilidad.ObtenerTextosMovimiento</Servicio>
            <Fecha>2020-11-02</Fecha>
            <Hora>12:27:51</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10143</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTContabilidad.ObtenerTextosMovimientoResponse>
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
   "sdtTextosMovimiento": {
      "sBTTextoMovimiento": {
         "codigo": "2",
         "descripcion": "MOTIVOS DEL EMBARGO",
         "renglon": "1",
         "texto": "MOTIVOS DEL EMBARGO"
      }
   },
   "Erroresnegocio": null,
   "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTContabilidad.ObtenerTextosMovimiento",
      "Fecha": "2020-11-02",
      "Hora": "12:27:51",
      "Requerimiento": "1",
      "Numero": "10143",
      "Estado": "OK"
   }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTextoMovimiento  

### sBTTextoMovimiento

::: center 
Los campos del tipo de dato estructurado sBTTextoMovimiento son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Short | Código del texto. 
descripcion | String | Descripción del tipo de texto. 
renglon | Short | Renglón. 
texto | String | Texto asociado. 
:::
<!-- CIERRA SDT -->