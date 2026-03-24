---
title: Simular Plazo Fijo
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
::: note Método para simular el alta de un préstamo plazo fijo.

**Nombre publicación:** BTPrestamos.SimularPlazoFijo

**Programa:** RBTPG230

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPrestamoPlazoFijo | [sBTPrestamoAltaPF](#sbtprestamoaltapf) | Datos de la simulación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtSimulacion | [sBTSimulacionPrestamo](#sbtsimulacionprestamo) | Datos del préstamo simulado.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de cliente.
30002 | No se recibió el identificador de producto.
30003 | No se recuperó la cuenta para el Identificador.
30004 | El Identificador único de Producto es incorrecto.
30005 | No se recibió la Fecha de Primer Pago desde el origen.
30006 | No se recibió el Monto de Capital desde el origen.
31001 | La simulación no está vigente.
31002 | La simulación no existe.
40001 | La Cuenta indicada es incorrecta.
40012 | La Fecha de Primer Pago indicada es menor a la Fecha Valor.
40013 | La Fecha de Vencimiento indicada es menor a la Fecha Valor.
40014 | La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento.
40015 | El Plazo Total indicado es incorrecto.
40016 | La Cantidad de Cuotas indicada es menor al mínimo permitido.
40017 | La Cantidad de Cuotas indicada es mayor al máximo permitido.
40018 | La Cantidad de Cuotas indicada es incorrecta.
40019 | La Cantidad de Cuotas indicada no está preseteada.
40020 | El período entre Cuotas indicado es menor al mínimo permitido.
40021 | El período entre Cuotas indicado es mayor al máximo permitido.
40022 | El período entre Cuotas indicado es incorrecto.
40023 | El período entre Cuotas indicado no está preseteado.
40024 | El Valor Cuota indicado es incorrecto.
40025 | El Capital indicado es menor al mínimo permitido.
40026 | El Capital indicado es mayor al máximo permitido.
40027 | El Capital indicado es incorrecto.
40037 | La Clase de Tasa indicada es incorrecta.
40040 | La Tasa Fija indicada está fuera de tolerancia.
40041 | La Tasa indicada es mayor a la Tasa de Usura.
40048 | El período indicado es incorrecto.
40049 | El Tipo de Tasa indicado es incorrecto.
40054 | La Tasa indicada es incorrecta.
40071 | El Plazo Total de la Operación es mayor al máximo permitido.
40072 | El Plazo Total de la Operación es menor al mínimo permitido.
40076 | El Producto indicado no está Preseteado.
40147 | No se cumple el período mínimo entre Fecha Valor y Fecha de Primer Pago.
40148 | El Capital indicado debe ser mayor al Valor Cuota.
40149 | No se cumple el período máximo entre Fecha Valor y Fecha de Primer Pago.
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
      <bts:BTPrestamos.SimularPlazoFijo>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>3252eea5d94A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtPrestamoPlazoFijo>
            <bts:clienteUId>221</bts:clienteUId>
            <bts:monto>10000</bts:monto>
            <bts:tasa/>
            <bts:fechaVencimiento/>
            <bts:plazo>360</bts:plazo>
            <bts:productoUId>79</bts:productoUId>
            <bts:pizarra/>
            <bts:actividad>1111</bts:actividad>
         </bts:sdtPrestamoPlazoFijo>
      </bts:BTPrestamos.SimularPlazoFijo>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularPlazoFijo' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtPrestamoPlazoFijo": {
        "clienteUId": 221,
        "productoUId": 79,
        "fechaPrimerPago": "",
        "monto": 10000,
        "plazo": 360,
        "pizarra": 0,
        "tasa": 0,
        "actividad": 1111
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
      <BTPrestamos.SimularPlazoFijoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>3252eea5d94A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2020-03-13</fechaValor>
            <capital>10000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>1200.00</intereses>
            <tasaNominalAnual>12.000000</tasaNominalAnual>
            <totalPrestamo>11200.00</totalPrestamo>
            <tasaEfectivaAnual>12.000000</tasaEfectivaAnual>
            <valorCuota>11200.00</valorCuota>
            <operacionUId>661</operacionUId>
            <tasa>12.000000</tasa>
            <fechaPrimerPago>2021-03-08</fechaPrimerPago>
            <fechaVencimiento>2021-03-08</fechaVencimiento>
            <plazo>360</plazo>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>0</productoUId>
               <nombre>PRÉSTAMOS CAPITAL DE TRABAJO, Plazo Fijo</nombre>
               <otrosConceptos></otrosConceptos>
            </producto>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <fechaPago>2017-08-10</fechaPago>
                  <importe>10000.00</importe>
               </sBTCuotaPrestamoAlta>
            </cronograma>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>12535</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularPlazoFijo</Servicio>
            <Requerimiento/>
            <Fecha>2019-02-25</Fecha>
            <Hora>14:47:13</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularPlazoFijoResponse>
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
    "sdtSimulacion": {
        "otrosConceptos": {
            "sBTConcepto": []
        },
        "fechaValor": "2020-03-13",
        "capital": "10000.00",
        "tasaEfectiva": "0.000000",
        "intereses": "1200.00",
        "tasaNominalAnual": "12.000000",
        "totalPrestamo": "11200.00",
        "tasaEfectivaAnual": "12.000000",
        "valorCuota": "11200.00",
        "operacionUId": "662",
        "tasa": "12.000000",
        "fechaPrimerPago": "2021-03-08",
        "fechaVencimiento": "2021-03-08",
        "plazo": "360",
        "producto": {
            "moneda": "$",
            "papel": "$",
            "productoUId": "0",
            "nombre": "PRÉSTAMOS CAPITAL DE TRABAJO, Plazo Fijo",
            "otrosConceptos":""
        }
        "cronograma": {
            "sBTCuotaPrestamoAlta": [
                {
                    "fechaPago": "2017-08-10",
                    "importe": 10000.00
                }
            ]
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "12536",
        "Estado": "OK",
        "Servicio": "BTPrestamos.SimularPlazoFijo",
        "Requerimiento": "",
        "Fecha": "2019-02-25",
        "Hora": "15:13:12",
        "Canal": "BTDIGITAL"
    }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->

::: details sBTPrestamoAltaPF  

### sBTPrestamoAltaPF

::: center 
Los campos del tipo de dato estructurado sBTPrestamoAltaPF son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
actividad | Long | Código de actividad (Destino del crédito). 
clienteUId | Long | Identificador único de cliente. 
fechaVencimiento | Date | Fecha de Vencimiento (Obligatorio si no se carga plazo). 
monto | Double | Capital solicitado. 
pizarra | Short | Tipo de pizarra. Si no se indica toma la preseteada para el producto. 
plazo | Int | Plazo (Obligatorio si no se carga Fecha de Vencimiento). 
productoUId | Long | Identificador único de producto. 
tasa | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra. 
:::
 
::: details sBTSimulacionPrestamo

### sBTSimulacionPrestamo

::: center
Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
capital | Double | Capital del préstamo. 
cronograma | [sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta) | Cronograma del préstamo. 
fechaPrimerPago | Date | Fecha de primer pago. 
fechaValor | Date | Fecha valor. 
fechaVencimiento | Date | Fecha de vencimiento. 
intereses | Double | Intereses. 
operacionUId | Long | Identificador único de operación. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Otros conceptos. 
plazo | Int | Plazo del préstamo. 
producto | [sBTProducto](#sbtproducto) | Datos del producto. 
tasa | Double | Tasa. 
tasaEfectiva | Double | Tasa efectiva. 
tasaEfectivaAnual | Double | Tasa efectiva anual. 
tasaNominalAnual | Double | Tasa nominal anual. 
totalPrestamo | Double | Total a pagar. 
valorCuota | Double | Valor cuota. 

### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
papel | String | Símbolo del papel. 
productoUId | Long | Identificador único de producto. 

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.

### sBTCuotaPrestamoAlta

Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
fechaPago | Date | Fecha de pago de la cuota. 
importe | Double | Importe de la cuota. 
:::
<!-- CIERRA SDT -->