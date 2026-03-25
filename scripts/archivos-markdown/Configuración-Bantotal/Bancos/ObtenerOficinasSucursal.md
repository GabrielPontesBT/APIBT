---
title: Obtener Oficinas de Sucursal
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
::: note Método para obtener las oficinas de una sucursal.

**Nombre publicación:** BTConfiguracionBantotal.ObtenerOficinasSucursal

**Programa:** RBTPG586

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sucursalId | Int | Identificador de la sucursal.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtOficinas | [sBTSucursal](#sbtsucursal)  | Listado de las oficinas.

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
      <bts:BTConfiguracionBantotal.ObtenerOficinasSucursal>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>GP</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>6B4647555001A737F61D4995</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
         </bts:Btinreq>
         <bts:sucursalId>3</bts:sucursalId>
      </bts:BTConfiguracionBantotal.ObtenerOficinasSucursal>
   </soapenv:Body>
</soapenv:Envelope>

```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerOficinasSucursal' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
  "Btinreq": {
    "Canal": "BTDIGITAL",
    "Usuario": "INSTALADOR",
    "Device": "FC",
    "Requerimiento": "0",
    "Token": "D2868674D8C3483A48324170"
  },
  "sucursalId": "3",
}
'
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
      <BTConfiguracionBantotal.ObtenerOficinasSucursalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6B4647555001A737F61D4995</Token>
         </Btinreq>
         <sdtOficinas>
            <sBTSucursal>
               <telefono>15554454</telefono>
               <descripcion>Casa Matriz</descripcion>
               <identificador>1</identificador>
               <direccion>1022, Pedro Cosio 2141</direccion>
               <latitud>-30.407849</latitud>
               <longitud>-56.474655</longitud>
            </sBTSucursal>
            <sBTSucursal>
               <telefono>25182777 int.127</telefono>
               <descripcion>Sucursal Ciudad de la Costa</descripcion>
               <identificador>1000</identificador>
               <direccion>10, Pedro Cosio 2141</direccion>
               <latitud>0.0</latitud>
               <longitud>0.0</longitud>
            </sBTSucursal>
         </sdtOficinas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35110</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerOficinasSucursal</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2025-05-05</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>15:58:51</Hora>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerOficinasSucursalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
  "Btinreq": {
    "Device": "FC",
    "Usuario": "INSTALADOR",
    "Requerimiento": "0",
    "Canal": "BTDIGITAL",
    "Token": "D2868674D8C3483A48324170"
  },
  "sdtOficinas": [
    {
      "telefono": "15554454",
      "descripcion": "Casa Matriz",
      "identificador": 1,
      "direccion": "1022, Pedro Cosio 2141",
      "latitud": -30.407849,
      "longitud": -56.474655
    },
    {
      "telefono": "25182777 int.127",
      "descripcion": "Sucursal Ciudad de la Costa",
      "identificador": 1000,
      "direccion": "10, Pedro Cosio 2141",
      "latitud": 0.0,
      "longitud": 0.0
    }
  ],
  "Erroresnegocio": "",
  "Btoutreq": {
    "Numero": "36634",
    "Estado": "OK",
    "Servicio": "BTConfiguracionBantotal.ObtenerOficinasSucursal",
    "Requerimiento": "0",
    "Fecha": "2025-11-07",
    "Hora": "15:12:57",
    "Canal": "BTDIGITAL"
  }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSucursal  

### sBTSucursal

::: center 
Los campos del tipo de dato estructurado sBTSucursal son los siguíentes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción de sucursal. 
direccion | String | Dirección de sucursal. 
identificador | Int | Identificador de sucursal. 
latitud | Long | Latitud de sucursal. 
longitud | Long | Longitud de sucursal. 
telefono | String | Teléfono de sucursal. 

:::

<!-- CIERRA SDT -->