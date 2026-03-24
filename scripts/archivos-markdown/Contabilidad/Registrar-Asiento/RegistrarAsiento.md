---
title: Registrar Asiento
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
::: note Método para registrar en el sistema un movimiento entre dos operaciones genéricas.

**Nombre publicación:** BTContabilidad.RegistrarAsiento

**Programa:** RBTPG029

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

1) Definir la transacción a contabilizar, teniendo en cuenta que la operaciónUId1 y el importe1 se almacena en el preformato 1, la operaciónUId2 y el importe2 se almacena en el preformato 2 y así sucesivamente.

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtDatosAsiento | [sBTDatosAsiento](#sbtdatosasiento) | Datos del movimiento

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
movimientoUId | Long | Identificador único de movimiento.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | Debe ingresar al menos una operación.
30004 | No se recuperó la operación origen para el Identificador:
30100 | Error en la contabilización.
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
      <bts:BTContabilidad.RegistrarAsiento>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1244265502F955E77534D3E0</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:sdtDatosAsiento>
            <bts:operacionUId1>10140</bts:operacionUId1>
            <bts:operacionUId2>10141</bts:operacionUId2>
            <bts:operacionUId3></bts:operacionUId3>
            <bts:operacionUId4></bts:operacionUId4>
            <bts:operacionUId5></bts:operacionUId5>
            <bts:importe1>1000</bts:importe1>
            <bts:importe2>5220</bts:importe2>
            <bts:importe3></bts:importe3>
            <bts:importe4></bts:importe4>
            <bts:importe5></bts:importe5>
            <bts:importe6></bts:importe6>
            <bts:importe7></bts:importe7>
            <bts:importe8></bts:importe8>
            <bts:concepto></bts:concepto>
         </bts:sdtDatosAsiento>
      </bts:BTContabilidad.RegistrarAsiento>
   </soapenv:Body>
``` 

@tab JSON
```json
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?RegistrarAsiento=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fde8ae30-8752-c0fe-cf77-f8761a5ddcff' \ 
  -d '{
"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
    }, 
	"sdtDatosAsiento": { 
		"operacionUId1": "10140", 
		"operacionUId2": "10141", 
		"operacionUId3": "", 
		"operacionUId4": "", 
		"operacionUId5": "", 
		"importe1": "1000", 
		"importe2": "5220", 
		"importe3": "", 
		"importe4": "", 
		"importe5": "", 
		"importe6": "", 
		"importe7": "", 
		"importe8": "", 
		"concepto": "" 
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
      <BTContabilidad.RegistrarAsientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
		 <movimientoUId>141</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>864</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTContabilidad.RegistrarAsiento</Servicio> 
            <Requerimiento/> 
            <Fecha>2017-12-18</Fecha> 
            <Hora>17:07:19</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTContabilidad.RegistrarAsientoResponse> 
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
``` 

@tab JSON
```json
{ 
    "Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
    }, 
	"movimientoUId": "142", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "868", 
        "Estado": "OK", 
        "Servicio": "BTContabilidad.RegistrarAsiento", 
        "Requerimiento": "", 
        "Fecha": "2017-12-18", 
        "Hora": "17:15:28", 
        "Canal": "BTDIGITAL" 
    } 
}
``` 
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->

::: details sBTDatosAsiento  

### sBTDatosAsiento

::: center 
Los campos del tipo de dato estructurado sBTDatosAsiento son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
concepto | String | Concepto del movimiento.
importe1 | Double | Importe 1 del movimiento. 
importe2 | Double | Importe 2 del movimiento.
importe3 | Double | Importe 3 del movimiento.
importe4 | Double | Importe 4 del movimiento. 
importe5 | Double | Importe 5 del movimiento. 
importe6 | Double | Importe 6 del movimiento. 
importe7 | Double | Importe 7 del movimiento. 
importe8 | Double | Importe 8 del movimiento. 
operacionUId1 | Long | Identificador único de operación 1. 
operacionUId2 | Long | Identificador único de operación 2. 
operacionUId3 | Long | Identificador único de operación 3. 
operacionUId4 | Long | Identificador único de operación 4. 
operacionUId5 | Long | Identificador único de operación 5. 
:::
<!-- CIERRA SDT -->