---
title: Acreditar en Cuenta
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
::: note Método para realizar una acreditación a una cuenta vista determinada.

**Nombre publicación:** BTCuentasVista.AcreditarEnCuenta 

**Programa:** RBTPG569

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend
 
1) Definir la transacción de compra, teniendo en cuenta que:

	- La cuenta vista origen se almacena en el preformato 1.
		
	- Los diferentes importes se almacenan en los preformatos 1, 2, 3, y 4 respectivamente.
	
	- Los diferentes conceptos se almacenan en los preformatos 1, 2, 3, y 4 respectivamente.
	
	- Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.
	
2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T):

	- Se debe indicar los ordinales donde se encuentra definida la cuenta origen y destino.
 
:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtDatosAcreditar | [sBTDatosAcreditarDebitar](#sbtdatosacreditardebitar) | Datos de la acreditación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
movimientoUId | Long | Identificador del movimiento realizado.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | Debe ingresar una operación.
30002 | Debe ingresar al menos un importe.
30004 | No se recuperó la operación origen para el Identificador: X.
30004 | No se recuperó la cuenta cliente origen para el Identificador: X.


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
      <bts:BTCuentasVista.AcreditarEnCuenta>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1244265502F955E77534D3E0</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:sdtDatosAcreditar>
            <bts:clienteUId>140</bts:clienteUId>
            <bts:operacionUId>10140</bts:operacionUId>
            <bts:importe1>1000</bts:importe1>
            <bts:importe2>5220</bts:importe2>
            <bts:importe3></bts:importe3>
            <bts:importe4></bts:importe4>
            <bts:concepto1>test</bts:concepto1>
            <bts:concepto2></bts:concepto2>
            <bts:concepto3></bts:concepto3>
            <bts:concepto4></bts:concepto4>
         </bts:sdtDatosAcreditar>
      </bts:BTCuentasVista.AcreditarEnCuenta>
   </soapenv:Body>

```

@tab JSON
```json
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?AcreditarEnCuenta=' \ 
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
	"sdtDatosAcreditar": { 
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
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?AcreditarEnCuenta=' \ 
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
	"sdtDatosAcreditar": { 
		"clienteUId": "140",
		"operacionUId": "10140", 
		"importe1": "1000", 
		"importe2": "5220", 
		"importe3": "", 
		"importe4": "", 
		"concepto1": "test",
		"concepto2": "",
		"concepto3": "",
		"concepto4": ""
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
<SOAP-ENV:Envelope xmlns:SOAPENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAPENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Body>
        <BTCuentasVista.AcreditarEnCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
                <Servicio>BTCuentasVista.AcreditarEnCuenta</Servicio>
                <Requerimiento/>
                <Fecha>2017-12-18</Fecha>
                <Hora>17:07:19</Hora>
                <Canal>BTDIGITAL</Canal>
            </Btoutreq>
        </BTCuentasVista.AcreditarEnCuentaResponse>
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
    "movimientoUId": "141",
    "Btoutreq": {
        "Numero": "103",
        "Estado": "OK",
        "Servicio": "BTCuentasVista.AcreditarEnCuenta",
        "Requerimiento": "1",
        "Fecha": "2019-07-22",
        "Canal": "BTDIGITAL",
        "Hora": "16:00:37"
    }
}'

```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDatosAcreditarDebitar  

### sBTDatosAcreditarDebitar

::: center 
Los campos del tipo de dato estructurado sBTDatosAcreditarDebitar son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clienteUId |	Long|	Identificador único de cliente.
concepto1	|String	|Concepto 1 del movimiento.
concepto2	|String	|Concepto 2 del movimiento.
concepto3	|String	|Concepto 3 del movimiento.
concepto4	|String	|Concepto 4 del movimiento.
importe1	|Double	|Importe 1 del movimiento.
importe2	|Double	|Importe 2 del movimiento.
importe3	|Double	|Importe 3 del movimiento.
importe4	|Double	|Importe 4 del movimiento.
operacionUId |	Long|	Identificador único de operación.
:::
<!-- CIERRA SDT -->



