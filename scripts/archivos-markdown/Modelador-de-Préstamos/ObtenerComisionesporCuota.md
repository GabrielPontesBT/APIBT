---
title: Obtener Comisiones por Cuota
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
::: note Método para obtener las comisiones parametrizadas por cuota para un producto de préstamos.

**Nombre publicación:** BTModeladorPrestamos.ObtenerComisionesCuota

**Programa:** RBTPG522

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
productoUId | Long | Identificador único de producto

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtComisionesCuota | [sBTComisionPrestamo](#sbtcomisionprestamo) | Listado de comisiones

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
      <bts:BTModeladorPrestamos.ObtenerComisionesCuota>
         <bts:Btinreq>
            <bts:Token>e85b0edaecCD285A89A23FBE</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>GP</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:productoUId>51</bts:productoUId>
      </bts:BTModeladorPrestamos.ObtenerComisionesCuota>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTModeladorPrestamos?ObtenerComisionesCuota' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cFC33CD93505A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"productoUId": "51"
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
      <BTModeladorPrestamos.ObtenerComisionesCuotaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>e85b0edaecCD285A89A23FBE</Token>
         </Btinreq>
         <sdtComisionesCuota>
            <sBTComisionPrestamo>
               <porcentaje>0.0000</porcentaje>
               <descripcion>Portes</descripcion>
               <importe>0.00</importe>
               <codigo>251</codigo>
            </sBTComisionPrestamo>
         </sdtComisionesCuota>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>13117</Numero>
            <Servicio>BTModeladorPrestamos.ObtenerComisionesCuota</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-23</Fecha>
            <Hora>10:15:42</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTModeladorPrestamos.ObtenerComisionesCuotaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
    "Btinreq": { 
        "Device": "1", 
        "Usuario": "MINSTALADOR", 
        "Token": "16c1cFC33CD93505A5382434", 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "1" 
    }, 
    "sdtComisionesCuota": { 
        "sBTComisionPrestamo": { 
        "porcentaje": "0.0000", 
        "descripcion": "Portes", 
        "importe": "0.00", 
        "codigo": "251" 
        } 
    }, 
    "Btoutreq": { 
        "Numero": "111399", 
        "Estado": "OK", 
        "Servicio": "BTModeladorPrestamos.ObtenerComisionesCuota", 
        "Requerimiento": "1", 
        "Fecha": "2023-05-10", 
        "Canal": "BTDIGITAL", 
        "Hora": "15:10:52" 
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTComisionPrestamo  

### sBTComisionPrestamo

::: center 
Los campos del tipo de dato estructurado sBTComisionPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Int | Código de comisión.
descripcion | String | Descripción de la comisión. 
importe | Double | Importe de la comisión. 
porcentaje | Double | Porcentaje de comisión. 
:::
<!-- CIERRA SDT -->