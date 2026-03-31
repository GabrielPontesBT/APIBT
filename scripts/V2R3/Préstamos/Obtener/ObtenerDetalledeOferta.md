---
title: Obtener Detalle de Oferta
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
::: note Método para obtener el detalle de una oferta de préstamo simulada.

**Nombre publicación:** BTPrestamos.ObtenerDetalleOferta

**Programa:** RBTPG125

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
simulacionUId | Long | Identificador único de la simulación.
clienteUId | Long | Identificador único del cliente.
cantidadCuotas | Int | Cantidad de cuotas.
actividad | Long | Destino del crédito.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtOferta | [sBTSimulacionPrestamoOferta](#sbtsimulacionprestamooferta) | Detalle de la oferta de préstamo.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | No se recibió el identificador de simulación.
30003 | No se recuperó la cuenta para el Identificador: [Número de Identificador].
30004 | La simulación no corresponde al cliente: [Número de Cliente].
30005 | La cantidad de cuotas indicada no forma parte de las ofertas.
30012 | La simulación no existe.
40238 | El Código de Actividad indicado es incorrecto.
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
      <bts:BTPrestamos.ObtenerDetalleOferta>
         <bts:Btinreq>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token>
         </bts:Btinreq>
         <bts:simulacionUId>47</bts:simulacionUId>
         <bts:clienteUId>1</bts:clienteUId>
         <bts:cantidadCuotas>12</bts:cantidadCuotas>
         <bts:actividad>1111</bts:actividad>
      </bts:BTPrestamos.ObtenerDetalleOferta>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ObtenerDetalleOferta=' \
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
	"simulacionUId": 47,
    "clienteUId": "1",
	"cantidadCuotas": "12",
	"actividad": 1111
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
      <BTPrestamos.ObtenerDetalleOfertaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>52005b89a6F955E77534D3E0</Token>
         </Btinreq>
         <sdtOferta>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2019-11-25</fechaValor>
            <capital>1000.00</capital>
            <cronograma>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-05-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               ...
            </cronograma>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>279.90</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>3223.97</totalPrestamo>
            <valorCuota>268.67</valorCuota>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <operacionUId>194</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2020-05-05</fechaPrimerPago>
            <idOperacionBT>0010100000101000000000000000004200000000000418001</idOperacionBT>
            <fechaVencimiento>2021-04-05</fechaVencimiento>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>43</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <plazo>497</plazo>
         </sdtOferta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>697</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDetalleOferta</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-04-24</Fecha>
            <Hora>12:42:27</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleOfertaResponse>
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
	"sdtOferta": { 
		"otrosConceptos" : {}, 
		"fechaValor": "2019-11-25", 
		"capital": "1000.00", 
		"cronograma": { 
		  "sBTCuotaSimulacion": [ 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-05-05", 
			  "seguros": "0.00" 
			}, 
			...
		  ] 
		}, 
		"tasaEfectiva": "0.000000", 
		"intereses": "279.90", 
		"tasaNominalAnual": "23.000000", 
		"totalPrestamo": "3223.97", 
		"valorCuota": "268.67", 
		"tasaEfectivaAnual": "25.590075", 
		"operacionUId": "194", 
		"tasa": "23.000000", 
		"fechaPrimerPago": "2020-05-05", 
		"idOperacionBT": "0010100000101000000000000000004200000000000418001", 
		"fechaVencimiento": "2021-04-05", 
		"producto": { 
		  "moneda": "$", 
		  "papel": "$", 
		  "productoUId": "43", 
		  "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
		}, 
		"plazo": "497" 
	},
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPrestamos.ObtenerDetalleOferta", 
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
::: details sBTSimulacionPrestamoOferta  

### sBTSimulacionPrestamoOferta

::: center 
Los campos del tipo de dato estructurado sBTSimulacionPrestamoOferta son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
capital | Double | Capital total. 
cronograma | [sBTCuotaSimulacion](#sbtcuotasimulacion) | Cronograma del préstamo. 
fechaPrimerPago | Date | Fecha primer pago. 
fechaValor | Date | Fecha valor. 
fechaVencimiento | Date | Fecha vencimiento. 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
intereses | Double | Intereses totales. 
operacionUId | Long | Identificador único de la operación. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Otros conceptos de la simulación. 
plazo | Int | Plazo del préstamo. 
producto | [sBTProducto](#sbtproducto) | Descripción del producto. 
tasa | Double | Tasa del préstamo. 
tasaEfectiva | Double | Tasa efectiva. 
tasaEfectivaAnual | Double | Tasa efectiva anual. 
tasaNominalAnual | Double | Tasa nominal anual. 
totalPrestamo | Double | Total del préstamo. 
valorCuota | Double | Valor cuota. 
:::
 
### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
concepto | String | Concepto. 
texto | String | Texto. 
valor | Double | Importe. 
:::

### sBTCuotaSimulacion

::: center 
Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
capital | Double | Monto de capital en la cuota. 
concepto | String | Concepto. 
cuota | Double | Importe total de la cuota. 
fechaPago | Date | Fecha de pago. 
impuestos | Double | Monto de impuestos en la cuota. 
interes | Double | Monto de intereses en la cuota. 
otrosConceptos | Double | Importe correspondiente a otros conceptos. 
seguros | Double | Monto de seguros en la cuota. 
tipoCuota | String | Tipo de la cuota (Capital/Interés). 
:::

### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
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