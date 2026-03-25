---
title: Obtener Préstamos con Avance
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
::: note Método para obtener los productos de préstamo que tiene contratado un cliente, con su correspondiente avance.

**Nombre publicación:** BTClientes.ObtenerPrestamosConAvance

**Programa:** RBTPG259

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :---------  
Correlativo 1 | 3
Correlativo 2 | 1 
Valor específico 1 | Identificador del módulo a incluir. 

Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :---------  
Correlativo 1 | 3
Correlativo 2 | 2 
Valor específico 1 | Módulo del tipo de operación a excluir. 
Valor específico 2 | Tipo de operación a excluir.	 

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPrestamos | [sBTProgresoPrestamo](#sbtprogresoprestamo) | Listado de préstamos.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el Identificador: [Número de identificador].
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
      <bts:BTClientes.ObtenerPrestamosConAvance>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>324915377F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
      </bts:BTClientes.ObtenerPrestamosConAvance>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPrestamosConAvance=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "324915377F955E77534D3E02"
	},
    "clienteUId": "1",
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
      <BTClientes.ObtenerPrestamosConAvanceResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>324915377F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPrestamos>
            <sBTProgresoPrestamo>
               <operacionUId>10</operacionUId>
               <idOperacionFmt>0000000170-000</idOperacionFmt>
               <idOperacionBT>0010000100101000000000000000002700000000000170003</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amort. Libre UI_Empresa</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Sucursal Beta</sucursal>
               <estado>Cobro Judicial</estado>
               <cantidadCuotas>12</cantidadCuotas>
               <cantidadCuotasPagas>2</cantidadCuotasPagas>
               <capitalDesembolsado>100000.00</capitalDesembolsado>
               <capitalCancelado>16666.67</capitalCancelado>
            </sBTProgresoPrestamo>
            <sBTProgresoPrestamo>
               <operacionUId>11</operacionUId>
               <idOperacionFmt>0000000048-000</idOperacionFmt>
               <idOperacionBT>0010100000101000000000000000002700000000000048001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <estado>Normal</estado>
               <cantidadCuotas>12</cantidadCuotas>
               <cantidadCuotasPagas>0</cantidadCuotasPagas>
               <capitalDesembolsado>515000.00</capitalDesembolsado>
               <capitalCancelado>16666.67</capitalCancelado>
            </sBTProgresoPrestamo>
            <sBTProgresoPrestamo>
               <operacionUId>12</operacionUId>
               <idOperacionFmt>0000000080-000</idOperacionFmt>
               <idOperacionBT>0010100000101000000000000000002700000000000080001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <estado>Normal</estado>
               <cantidadCuotas>12</cantidadCuotas>
               <cantidadCuotasPagas>6</cantidadCuotasPagas>
               <capitalDesembolsado>765000.00</capitalDesembolsado>
               <capitalCancelado>142470.83</capitalCancelado>
            </sBTProgresoPrestamo>
         </sdtPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTClientes.ObtenerPrestamosConAvance</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Hora>12:58:57</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6923</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTClientes.ObtenerPrestamosConAvanceResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "BANTOTAL", 
        "Token": "324915377F955E77534D3E02", 
        "Device": "AC" 
    }, 
    "sdtPrestamos": { 
        "sBTProgresoPrestamo": [ 
            { 
                "operacionUId": 10, 
                "idOperacionFmt": "0000000170-000", 
                "idOperacionBT": "0010000100101000000000000000002700000000000170003", 
                "producto": { 
                    "productoUId": 0, 
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amort. Libre UI_Empresa", 
                    "moneda": "$", 
                    "papel": "" 
                }, 
                "sucursal": "Sucursal Beta", 
                "estado": "Cobro Judicial", 
                "cantidadCuotas": 12, 
                "cantidadCuotasPagas": 2, 
                "capitalDesembolsado": 100000.00, 
                "capitalCancelado": 16666.67 
            }, 
            { 
                "operacionUId": 11, 
                "idOperacionFmt": "0000000048-000", 
                "idOperacionBT": "0010100000101000000000000000002700000000000048001", 
                "producto": { 
                    "productoUId": 0, 
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF", 
                    "moneda": "$", 
                    "papel": "" 
                }, 
                "sucursal": "Casa Matriz", 
                "estado": "Normal", 
                "cantidadCuotas": 12, 
                "cantidadCuotasPagas": 0, 
                "capitalDesembolsado": 515000.00, 
                "capitalCancelado": 16666.67 
            }, 
            { 
                "operacionUId": 12, 
                "idOperacionFmt": "0000000080-000", 
                "idOperacionBT": "0010100000101000000000000000002700000000000080001", 
                "producto": { 
                    "productoUId": 0, 
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF", 
                    "moneda": "$", 
                    "papel": "" 
                }, 
                "sucursal": "Casa Matriz", 
                "estado": "Normal", 
                "cantidadCuotas": 12, 
                "cantidadCuotasPagas": 6, 
                "capitalDesembolsado": 765000.00, 
                "capitalCancelado": 142470.83 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTClientes.ObtenerPrestamosConAvance", 
        "Fecha": "2019-11-19", 
        "Hora": "13:05:22", 
        "Requerimiento": "", 
        "Numero": 6924, 
        "Estado": "OK" 
    } 
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTProgresoPrestamo  

### sBTProgresoPrestamo

::: center 
Los campos del tipo de dato estructurado sBTProgresoPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cantidadCuotas | Short | Cantidad de cuotas del préstamo. 
cantidadCuotasPagas | Short | Cantidad de cuotas pagas del préstamo. 
capitalCancelado | Double | Capital cancelado del préstamo. 
capitalDesembolsado | Double | Capital desembolsado del préstamo. 
estado | String | Descrición de estado de la operación. 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
idOperacionFMT | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
operacionUId | Long | Identificador. 
producto | [sBTProducto](#sBTProducto) | Datos del producto. 
sucursal | String | Nombre de la sucursal de alta. 

### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
papel | String | Símbolo del papel. 
productoUId | Long | Identificador único de producto. 

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.
:::
<!-- CIERRA SDT -->