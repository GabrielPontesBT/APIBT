---
title: Simular Ofertas
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
::: note Método para simular ofertas de préstamos.

**Nombre publicación:** BTPrestamos.SimularOfertas

**Programa:** RBTPG124

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

Si la opción general de procesos 3281 se encuentra activada, el servicio considera la sucursal del usuario de conexión, caso contrario, simula con la sucursal de la cuenta cliente. 

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único del cliente.
sdtSimulacion | [sBTDatosSimulacion](#sbtdatossimulacion) | Datos necesarios para la simulación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
simulacionUId | Long | Identificador único de la simulación.
sdtOfertasPrestamo | [sBTOfertaPrestamo](#sbtofertaprestamo) | Colección de ofertas de préstamo.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de cliente.
30002 | No se recibió el identificador de producto.
30003 | No se recuperó la cuenta para el Identificador: [Número de Identificador].
30004 | El Identificador único de Producto es incorrecto
30005 | No se recibió Lista de cuotas a simular.
30006 | No se recibió el Monto de Capital desde el origen.
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
      <bts:BTPrestamos.SimularOfertas>
         <bts:Btinreq>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
         <bts:sdtSimulacion>
            <bts:fechaPrimerPago>2020-05-05</bts:fechaPrimerPago>
            <bts:monto>1000</bts:monto>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:productoUId>43</bts:productoUId>
            <bts:cuotas>
               <bts:sBTCuota>
                  <bts:cantidadCuotas>12</bts:cantidadCuotas>
               </bts:sBTCuota>
            </bts:cuotas>
         </bts:sdtSimulacion>
      </bts:BTPrestamos.SimularOfertas>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularOfertas=' \
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
	"sdtSimulacion": {
		"fechaPrimerPago": "2020-05-05",
		"monto": "1000",
		"periodoCuotas": "30",
		"productoUId": "43",
		"cuotas": {
		  "sBTCuota": {  
			"cantidadCuotas": "12"  
			}
		}
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
      <BTPrestamos.SimularOfertasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>52005b89a6F955E77534D3E0</Token>
         </Btinreq>
         <simulacionUId>39</simulacionUId>
         <sdtOfertasPrestamo>
            <sBTOfertaPrestamo>
               <otrosConceptos>0.00</otrosConceptos>
               <fechaValor>2019-11-25</fechaValor>
               <capital>1000.00</capital>
               <totalComisiones>0.00</totalComisiones>
               <valorCuota>101.81</valorCuota>
               <cantidadCuotas>12</cantidadCuotas>
               <tasa>23.000000</tasa>
               <totalSeguros>0.00</totalSeguros>
               <fechaPrimerPago>2020-05-05</fechaPrimerPago>
               <totalIntereses>221.74</totalIntereses>
               <fechaVencimiento>2021-04-05</fechaVencimiento>
               <tea>25.590075</tea>
               <plazo>497</plazo>
               <totalAPagar>1221.74</totalAPagar>
               <totalImpuestos>0.00</totalImpuestos>
               <cft>25.030000</cft>
            </sBTOfertaPrestamo>
         </sdtOfertasPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>677</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularOfertas</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-04-23</Fecha>
            <Hora>16:17:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularOfertasResponse>
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
	"simulacionUId": 39, 
	"sdtOfertasPrestamo": { 
		"sBTOfertaPrestamo": { 
		  "otrosConceptos": "0.00", 
		  "fechaValor": "2019-11-25", 
		  "capital": "1000.00", 
		  "totalComisiones": "0.00", 
		  "valorCuota": "101.81", 
		  "cantidadCuotas": "12", 
		  "tasa": "23.000000", 
		  "totalSeguros": "0.00", 
		  "fechaPrimerPago": "2020-05-05", 
		  "totalIntereses": "221.74", 
		  "fechaVencimiento": "2021-04-05", 
		  "tea": "25.590075", 
		  "plazo": "497", 
		  "totalAPagar": "1221.74", 
		  "totalImpuestos": "0.00", 
		  "cft": "25.030000" 
		} 
	},
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPrestamos.SimularOfertas", 
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
::: details sBTDatosSimulacion  

### sBTDatosSimulacion

::: center 
Los campos del tipo de dato estructurado sBTDatosSimulacion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
cuotas | [sBTCuota](#sbtcuota) | Colección de cantidad de cuotas para simular. 
fechaPrimerPago | Date | Fecha de primer pago. 
monto | Double | Monto del préstamo. 
periodoCuotas | Int | Período entre cuotas. 
productoUId | Long | Identificador único del producto. 

### sBTCuota

::: center 
Los campos del tipo de dato estructurado sBTCuota son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
cantidadCuotas | Int | Cantidad de cuotas. 
:::

::: details sBTOfertaPrestamo  

### sBTOfertaPrestamo

::: center 
Los campos del tipo de dato estructurado sBTOfertaPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
cantidadCuotas | Int | Cantidad de las cuotas. 
capital | Double | Capital del préstamo. 
cft | Double | CFT del préstamo. 
fechaPrimerPago | Date | Fecha de primer pago. 
fechaValor | Date | Fecha valor. 
fechaVencimiento | Date | Fecha de vencimiento. 
otrosConceptos | Double | Monto para otros conceptos. 
plazo | Int | Plazo para el préstamo. 
tasa | Double | Tasa del préstamo. 
tea | Double | TEA del préstamo. 
totalAPagar | Double | Total a pagar. 
totalComisiones | Double | Monto total para comisiones. 
totalImpuestos | Double | Monto total para impuestos. 
totalIntereses | Double | Monto total para intereses. 
totalSeguros | Double | Monto total para seguros. 
valorCuota | Double | Valor cuota. 
:::
<!-- CIERRA SDT -->