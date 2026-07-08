---
title: Simular
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
::: note Método para simular el alta de un préstamo amortizable.

**Nombre publicación:** BTPrestamos.Simular

**Programa:** RBTPG075

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

Si la opción general de procesos 3281 se encuentra activada, el servicio considera la sucursal del usuario de conexión, en caso contrario, simula con la sucursal de la cuenta cliente. 

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPrestamo | [sBTPrestamoAlta](#sbtprestamoalta) | Datos de la simulación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtSimulacion | [sBTSimulacionPrestamo](#sbtsimulacionprestamo) | Datos del préstamo simulado

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | No se recibió el identificador de producto.
30003 | No se recuperó la cuenta para el Identificador.
30004 | El Identificador único de Producto es incorrecto.
30005 | No se resolvió el identificador único de la operación.
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
40021 | El período entre Cuotas indicado es mayor al máximo permitido
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
      <bts:BTPrestamos.Simular>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>72e34bcd9d4A8B5C60A82434</bts:Token>
            <bts:Device>AV</bts:Device>          
         </bts:Btinreq>
         <bts:sdtPrestamo>
            <bts:fechaPrimerPago>2019-01-12</bts:fechaPrimerPago>
            <bts:monto>10000</bts:monto>
            <bts:tasa>0</bts:tasa>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
            <bts:productoUId>61</bts:productoUId>
            <bts:pizarra>0</bts:pizarra>
            <bts:clienteUId>4</bts:clienteUId>
            <bts:actividad>11200</bts:actividad>
         </bts:sdtPrestamo>
      </bts:BTPrestamos.Simular>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?Simular=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
	"Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "1",
      "Usuario": "MINSTALADOR",
      "Token": "72e34bcd9d4A8B5C60A82434",
      "Device": "AV"
    },
    "sdtPrestamo": {
      "fechaPrimerPago": "2019-01-12",
      "monto": "10000",
      "tasa": "0",
      "periodoCuotas": "30",
      "cantidadCuotas": "12",
      "productoUId": "61",
      "pizarra": "0",
      "clienteUId": "4",
      "actividad": "11200"
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
      <BTPrestamos.SimularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>72e34bcd9d4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-01-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-02-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-03-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-04-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-05-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-06-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-07-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-08-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-09-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-10-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-11-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.04</importe>
                  <fechaPago>2019-12-12</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <fechaValor>2018-12-11</fechaValor>
            <capital>10000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>1288.18</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>14328.15</totalPrestamo>
            <valorCuota>1194.01</valorCuota>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <operacionUId>1</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2019-01-12</fechaPrimerPago>
            <fechaVencimiento>2019-12-12</fechaVencimiento>
            <plazo>361</plazo>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>61</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>623</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.Simular</Servicio>
            <Fecha>2019-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>09:23:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "AV",
    "Usuario": "MINSTALADOR",
    "Requerimiento": "1",
    "Canal": "BTDIGITAL",
    "Token": "72e34bcd9d4A8B5C60A82434"
  },
  "sdtSimulacion": {
    "otrosConceptos": {
      "concepto": "",
      "texto": "",
      "valor": 0
    },
    "cronograma": {
      "sBTCuotaPrestamoAlta": [
        {
          "importe": "1194.01",
          "fechaPago": "2019-01-12"
        },
        {
          "importe": "1194.01",
          "fechaPago": "2019-02-12"
        },
        {
          "importe": "1194.01",
          "fechaPago": "2019-03-12"
        },
        {
          "importe": "1194.01",
          "fechaPago": "2019-04-12"
        },
        {
          "importe": "1194.01",
          "fechaPago": "2019-05-12"
        },
        {
          "importe": "1194.01",
          "fechaPago": "2019-06-12"
        },
        {
          "importe": "1194.01",
          "fechaPago": "2019-07-12"
        },
        {
          "importe": "1194.01",
          "fechaPago": "2019-08-12"
        },
        {
          "importe": "1194.01",
          "fechaPago": "2019-09-12"
        },
        {
          "importe": "1194.01",
          "fechaPago": "2019-10-12"
        },
        {
          "importe": "1194.01",
          "fechaPago": "2019-11-12"
        },
        {
          "importe": "1194.04",
          "fechaPago": "2019-12-12"
        }
      ]
    },
    "fechaValor": "2018-12-11",
    "capital": "10000.00",
    "tasaEfectiva": "0.000000",
    "intereses": "1288.18",
    "tasaNominalAnual": "23.000000",
    "totalPrestamo": "14328.15",
    "valorCuota": "1194.01",
    "tasaEfectivaAnual": "25.590075",
    "operacionUId": "1",
    "tasa": "23.000000",
    "fechaPrimerPago": "2019-01-12",
    "fechaVencimiento": "2019-12-12",
    "plazo": "361",
    "producto": {
      "papel": "$",
      "moneda": "$",
      "productoUId": "61",
      "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
    }
  },
  "Erroresnegocio": {},
  "Btoutreq": {
    "Numero": "623",
    "Estado": "OK",
    "Servicio": "BTPrestamos.Simular",
    "Fecha": "2019-11-20",
    "Requerimiento": "1",
    "Hora": "09:23:04",
    "Canal": "BTDIGITAL"
  }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTPrestamoAlta

### sBTPrestamoAlta

::: center
Los campos del tipo de dato estructurado sBTPrestamoAlta son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
actividad | Long | Código de actividad (Destino del crédito). 
cantidadCuotas | Int | Cantidad de cuotas. 
clienteUId | Long | Identificador único de cliente. 
fechaPrimerPago | Date | Fecha de primer pago. 
monto | Double | Capital solicitado. 
periodoCuotas | Int | Período entre las cuotas. 
pizarra | Short | Tipo de pizarra. Si no se indica toma la preseteada para el producto. 
productoUId | Long | Identificador único de producto. 
tasa | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra. 
:::

::: details sBTSimulacionPrestamo

### sBTSimulacionPrestamo

::: center
Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
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
:::

::: details sBTProducto

### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
papel | String | Símbolo del papel. 
productoUId | Long | Identificador único de producto.
:::

::: details sBTConcepto

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.
:::

::: details sBTCuotaPrestamoAlta

### sBTCuotaPrestamoAlta

Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
fechaPago | Date | Fecha de pago de la cuota. 
importe | Double | Importe de la cuota.
:::

<!-- CIERRA SDT -->

