---
title: Obtener Préstamos Sin Mora
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
::: note Método para retornar préstamos sin mora.

**Nombre publicación:** BTPrestamos.ObtenerPrestamosSinMora

**Programa:** RBTPG471

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
diasMoraDesde | Int | [Hidden: Valor fijo '0' para este método]. 
diasMoraHasta | Int | [Hidden: Valor fijo '0' para este método]. 
stringAux | String | [Hidden: Valor fijo 'SIN_MORA' para este método]. 
actualiza | String | [Hidden: Valor fijo 'N' para este método]. 
offset | Int | Valor desde donde empieza a contar la cantidad de préstamos. 
limit | int | Cantidad de préstamos que va a mostrar. 
contarRegistros | Sting | ¿Cuenta el total de préstamos? (S/N). 

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
quedanRegistros | String | ¿Quedan registros? (S/N). 
cantidadRegistros | Int | Muestra el total de préstamos sin mora. 
sdtDatosPrestamos | [sBTDatosPrestamo](#sbtdatosprestamo) | Listado de los préstamos sin mora. 

@tab Errores

Código | Descripción
:--------- | :---------
30003 | No existe registro para el producto indicado. 
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
      <bts:BTPrestamos.ObtenerPrestamosSinMora>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>papa</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>45A5647518BC5FBB73003EA9</bts:Token>
         </bts:Btinreq>
         <bts:offset>1</bts:offset>
         <bts:limit>5</bts:limit>
         <bts:contarRegistros>S</bts:contarRegistros>
      </bts:BTPrestamos.ObtenerPrestamosSinMora>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPrestamosSinMora=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \
  -d '{
	"Btinreq": {
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Device": "GZ",
    "Usuario": "Instalador",
    "Token": "d51ae0498699865B3A2E76CF"
  },
  "offset": 23,
  "limit": 100,
  "contarRegistros": "S"
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
      <BTPrestamos.ObtenerPrestamosSinMoraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>papa</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>45A5647518BC5FBB73003EA9</Token>
         </Btinreq>
         <quedanRegistros>S</quedanRegistros>
         <cantidadRegistros>154</cantidadRegistros>
         <sdtDatosPrestamos>
            <sBTDatosPrestamo>
               <plazo>422</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>2623560.33</deudaTotalVencida>
               <periodicidad>30</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2021-01-02</fechaVencimiento>
               <producto>
                  <moneda>CRC</moneda>
                  <papel>$</papel>
                  <otrosConceptos></otrosConceptos>
                  <productoUId>72</productoUId>
                  <nombre>PRÉSTAMOS-Amortización Automática TF</nombre>
               </producto>
               <clienteUId>4</clienteUId>
               <fechaProximoVencimiento/>
               <tasaVigente>10.000000</tasaVigente>
               <fechaPrimerCuotaImpaga>2020-02-07</fechaPrimerCuotaImpaga>
               <valorCuota>-34266.33</valorCuota>
               <saldoCapital>30000.00</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>12</cantidadCuotasVencidas>
               <capitalOriginal>30000.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>2623560.33</deudaCancelacionTotal>
               <diasMora>0</diasMora>
               <operacionUId>15</operacionUId>
               <cantidadCuotasImpagas>12</cantidadCuotasImpagas>
               <deudaTotalAFecha>2623560.33</deudaTotalAFecha>
               <nombreCliente>PRANKA ERIKA</nombreCliente>
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>10.000000</tasaMoraVigente>
               <sucursal>Casa Matriz</sucursal>
               <fechaValor>2019-11-07</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTDatosPrestamo>
            <sBTDatosPrestamo>
               <plazo>452</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>7255644.02</deudaTotalVencida>
               <periodicidad>30</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2021-03-05</fechaVencimiento>
               <producto>
                  <moneda>CRC</moneda>
                  <papel>$</papel>
                  <otrosConceptos></otrosConceptos>
                  <productoUId>72</productoUId>
                  <nombre>PRÉSTAMOS-Amortización Automática TF</nombre>
               </producto>
               <clienteUId>4</clienteUId>
               <fechaProximoVencimiento/>
               <tasaVigente>10.000000</tasaVigente>
               <fechaPrimerCuotaImpaga>2020-06-08</fechaPrimerCuotaImpaga>
               <valorCuota>21968.79</valorCuota>
               <saldoCapital>109602.47</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>10</cantidadCuotasVencidas>
               <capitalOriginal>120000.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>7255644.02</deudaCancelacionTotal>
               <diasMora>0</diasMora>
               <operacionUId>16</operacionUId>
               <cantidadCuotasImpagas>10</cantidadCuotasImpagas>
               <deudaTotalAFecha>7255644.02</deudaTotalAFecha>
               <nombreCliente>PRANKA ERIKA</nombreCliente>
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso>
               <fechaUltimoPago>2020-02-07</fechaUltimoPago>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>10.000000</tasaMoraVigente>
               <sucursal>Casa Matriz</sucursal>
               <fechaValor>2019-12-09</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTDatosPrestamo>
            <sBTDatosPrestamo>
               <plazo>360</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>1818126.01</deudaTotalVencida>
               <periodicidad>30</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2020-12-03</fechaVencimiento>
               <producto>
                  <moneda>CRC</moneda>
                  <papel>$</papel>
                  <otrosConceptos></otrosConceptos>
                  <productoUId>72</productoUId>
                  <nombre>PRÉSTAMOS-Amortización Automática TF</nombre>
               </producto>
               <clienteUId>4</clienteUId>
               <fechaProximoVencimiento/>
               <tasaVigente>10.000000</tasaVigente>
               <fechaPrimerCuotaImpaga/>
               <valorCuota>-48039.65</valorCuota>
               <saldoCapital>24289.29</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>0</cantidadCuotasVencidas>
               <capitalOriginal>38000.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>1818126.01</deudaCancelacionTotal>
               <diasMora>0</diasMora>
               <operacionUId>17</operacionUId>
               <cantidadCuotasImpagas>0</cantidadCuotasImpagas>
               <deudaTotalAFecha>1818126.01</deudaTotalAFecha>
               <nombreCliente>PRANKA ERIKA</nombreCliente>
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>10.000000</tasaMoraVigente>
               <sucursal>Casa Matriz</sucursal>
               <fechaValor>2019-12-09</fechaValor>
               <cantidadCuotas>0</cantidadCuotas>
            </sBTDatosPrestamo>
            <sBTDatosPrestamo>
               <plazo>452</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>6759733.33</deudaTotalVencida>
               <periodicidad>30</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2021-03-05</fechaVencimiento>
               <producto>
                  <moneda>CRC</moneda>
                  <papel>$</papel>
                  <otrosConceptos></otrosConceptos>
                  <productoUId>72</productoUId>
                  <nombre>PRÉSTAMOS-Amortización Automática TF</nombre>
               </producto>
               <clienteUId>4</clienteUId>
               <fechaProximoVencimiento/>
               <tasaVigente>10.000000</tasaVigente>
               <fechaPrimerCuotaImpaga>2020-01-08</fechaPrimerCuotaImpaga>
               <valorCuota>-113220.30</valorCuota>
               <saldoCapital>89000.00</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>12</cantidadCuotasVencidas>
               <capitalOriginal>89000.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>6759733.33</deudaCancelacionTotal>
               <diasMora>0</diasMora>
               <operacionUId>18</operacionUId>
               <cantidadCuotasImpagas>12</cantidadCuotasImpagas>
               <deudaTotalAFecha>6759733.33</deudaTotalAFecha>
               <nombreCliente>PRANKA ERIKA</nombreCliente>
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>10.000000</tasaMoraVigente>
               <sucursal>Casa Matriz</sucursal>
               <fechaValor>2019-12-09</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTDatosPrestamo>
         </sdtDatosPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16823</Numero>
            <Servicio>BTPrestamos.ObtenerPrestamosSinMora</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-25</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>17:00:21</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerPrestamosSinMoraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Device": "GZ",
    "Usuario": "Instalador",
    "Token": "d51ae0498699865B3A2E76CF"
  },
  "quedanRegistros": "S",
  "cantidadRegistros": 154,
  "sdtDatosPrestamos": {
    "sBTDatosPrestamo": [
      {
        "plazo": 422,
        "eventosPosteriores": "N",
        "deudaTotalVencida": 2623560.33,
        "periodicidad": 30,
        "simboloMoneda": "$",
        "fechaVencimiento": "2021-01-02",
        "producto": {
          "moneda": "CRC",
          "papel": "$",
          "productoUId": 72,
          "nombre": "PRÉSTAMOS-Amortización Automática TF",
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          }
        },
        "clienteUId": 4,
        "fechaProximoVencimiento": "",
        "tasaVigente": 10,
        "fechaPrimerCuotaImpaga": "2020-02-07",
        "valorCuota": -34266.33,
        "saldoCapital": 30000,
        "cantidadCuotasVencidas": 12,
        "capitalOriginal": 30000,
        "tir": 0,
        "deudaCancelacionTotal": 2623560.33,
        "diasMora": 0,
        "operacionUId": 15,
        "cantidadCuotasImpagas": 12,
        "deudaTotalAFecha": 2623560.33,
        "nombreCliente": "PRANKA ERIKA",
        "cuotasPagasConRetraso": 0,
        "fechaUltimoPago": "",
        "tipoAmortizacion": "Francés",
        "estado": "Normal",
        "tasaMoraVigente": 10,
        "sucursal": "Casa Matriz",
        "fechaValor": "2019-11-07",
        "cantidadCuotas": 12,
        "datosAdicionales": {
          "detalle": ""
        },
        "otrosConceptos": {
          "concepto": "",
          "texto": "",
          "valor": 0
        }
      },
      {
        "plazo": 452,
        "eventosPosteriores": "N",
        "deudaTotalVencida": 7255644.02,
        "periodicidad": 30,
        "simboloMoneda": "$",
        "fechaVencimiento": "2021-03-05",
        "producto": {
          "moneda": "CRC",
          "papel": "$",
          "productoUId": 72,
          "nombre": "PRÉSTAMOS-Amortización Automática TF",
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          }
        },
        "clienteUId": 4,
        "fechaProximoVencimiento": "",
        "tasaVigente": 10,
        "fechaPrimerCuotaImpaga": "2020-06-08",
        "valorCuota": 21968.79,
        "saldoCapital": 109602.47,
        "cantidadCuotasVencidas": 10,
        "capitalOriginal": 120000,
        "tir": 0,
        "deudaCancelacionTotal": 7255644.02,
        "diasMora": 0,
        "operacionUId": 16,
        "cantidadCuotasImpagas": 10,
        "deudaTotalAFecha": 7255644.02,
        "nombreCliente": "PRANKA ERIKA",
        "cuotasPagasConRetraso": 0,
        "fechaUltimoPago": "2020-02-07",
        "tipoAmortizacion": "Francés con Seg.e Impu.",
        "estado": "Normal",
        "tasaMoraVigente": 10,
        "sucursal": "Casa Matriz",
        "fechaValor": "2019-12-09",
        "cantidadCuotas": 12,
        "datosAdicionales": {
          "detalle": ""
        },
        "otrosConceptos": {
          "concepto": "",
          "texto": "",
          "valor": 0
        }
      },
      {
        "plazo": 360,
        "eventosPosteriores": "N",
        "deudaTotalVencida": 1818126.01,
        "periodicidad": 30,
        "simboloMoneda": "$",
        "fechaVencimiento": "2020-12-03",
        "producto": {
          "moneda": "CRC",
          "papel": "$",
          "productoUId": 72,
          "nombre": "PRÉSTAMOS-Amortización Automática TF",
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          }
        },
        "clienteUId": 4,
        "fechaProximoVencimiento": "",
        "tasaVigente": 10,
        "fechaPrimerCuotaImpaga": "",
        "valorCuota": -48039.65,
        "saldoCapital": 24289.29,
        "cantidadCuotasVencidas": 0,
        "capitalOriginal": 38000,
        "tir": 0,
        "deudaCancelacionTotal": 1818126.01,
        "diasMora": 0,
        "operacionUId": 17,
        "cantidadCuotasImpagas": 0,
        "deudaTotalAFecha": 1818126.01,
        "nombreCliente": "PRANKA ERIKA",
        "cuotasPagasConRetraso": 0,
        "fechaUltimoPago": "",
        "tipoAmortizacion": "Francés",
        "estado": "Normal",
        "tasaMoraVigente": 10,
        "sucursal": "Casa Matriz",
        "fechaValor": "2019-12-09",
        "cantidadCuotas": 0,
        "datosAdicionales": {
          "detalle": ""
        },
        "otrosConceptos": {
          "concepto": "",
          "texto": "",
          "valor": 0
        }
      },
      {
        "plazo": 452,
        "eventosPosteriores": "N",
        "deudaTotalVencida": 6759733.33,
        "periodicidad": 30,
        "simboloMoneda": "$",
        "fechaVencimiento": "2021-03-05",
        "producto": {
          "moneda": "CRC",
          "papel": "$",
          "productoUId": 72,
          "nombre": "PRÉSTAMOS-Amortización Automática TF",
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          }
        },
        "clienteUId": 4,
        "fechaProximoVencimiento": "",
        "tasaVigente": 10,
        "fechaPrimerCuotaImpaga": "2020-01-08",
        "valorCuota": -113220.3,
        "saldoCapital": 89000,
        "cantidadCuotasVencidas": 12,
        "capitalOriginal": 89000,
        "tir": 0,
        "deudaCancelacionTotal": 6759733.33,
        "diasMora": 0,
        "operacionUId": 18,
        "cantidadCuotasImpagas": 12,
        "deudaTotalAFecha": 6759733.33,
        "nombreCliente": "PRANKA ERIKA",
        "cuotasPagasConRetraso": 0,
        "fechaUltimoPago": "",
        "tipoAmortizacion": "Francés",
        "estado": "Normal",
        "tasaMoraVigente": 10,
        "sucursal": "Casa Matriz",
        "fechaValor": "2019-12-09",
        "cantidadCuotas": 12,
        "datosAdicionales": {
          "detalle": ""
        },
        "otrosConceptos": {
          "concepto": "",
          "texto": "",
          "valor": 0
        }
      },
      {
        "plazo": 360,
        "eventosPosteriores": "N",
        "deudaTotalVencida": 4996392.44,
        "periodicidad": 30,
        "simboloMoneda": "$",
        "fechaVencimiento": "2020-12-03",
        "producto": {
          "moneda": "CRC",
          "papel": "$",
          "productoUId": 72,
          "nombre": "PRÉSTAMOS-Amortización Automática TF",
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          }
        },
        "clienteUId": 4,
        "fechaProximoVencimiento": "",
        "tasaVigente": 10,
        "fechaPrimerCuotaImpaga": "",
        "valorCuota": -66151.03,
        "saldoCapital": 52000,
        "cantidadCuotasVencidas": 0,
        "capitalOriginal": 52000,
        "tir": 0,
        "deudaCancelacionTotal": 4996392.44,
        "diasMora": 0,
        "operacionUId": 19,
        "cantidadCuotasImpagas": 0,
        "deudaTotalAFecha": 4996392.44,
        "nombreCliente": "PRANKA ERIKA",
        "cuotasPagasConRetraso": 0,
        "fechaUltimoPago": "",
        "tipoAmortizacion": "Francés",
        "estado": "Normal",
        "tasaMoraVigente": 10,
        "sucursal": "Casa Matriz",
        "fechaValor": "2019-12-09",
        "cantidadCuotas": 0,
        "datosAdicionales": {
          "detalle": ""
        },
        "otrosConceptos": {
          "concepto": "",
          "texto": "",
          "valor": 0
        }
      }
    ]
  },
  "Erroresnegocio": {
    "BTErrorNegocio": []
  },
  "Btoutreq": {
    "Numero": "901",
    "Estado": "OK",
    "Servicio": "BTPrestamos.ObtenerPrestamosSinMora",
    "Fecha": "2023-10-25",
    "Requerimiento": 1,
    "Hora": "12:27:52",
    "Canal": "BTDIGITAL"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDatosPrestamo

### sBTDatosPrestamo

::: center
Los campos del tipo de dato estructurado sBTDatosPrestamo son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
cantidadCuotas | Int | Cantidad de cuotas del préstamo.
cantidadCuotasImpagas | Int | Cantidad de cuotas impagas.
cantidadCuotasVencidas | Int | Cantidad de cuotas vencidas.
capitalOriginal | Double | Capital original del préstamo.
clienteUId | Int | Identificador único del cliente.
cuotasPagasConRetraso | Int | Cantidad de cuotas pagas con retraso.
datosAdicionales | [sBTDatoAdicional](#sbtdatoadicional) | Listado de datos adicionales.
deudaCancelacionTotal | Double | Monto de cancelación total.
deudaTotalAFecha | Double | Monto a pagar para estar al día.
deudaTotalVencida | Double | Monto de la deuda vencida a la fecha.
diasMora | Int | Días de mora del préstamo.
estado | String | Estado.
eventosPosteriores | String | Hay eventos posteriores (S/N).
fechaPrimerCuotaImpaga | Date | Fecha de la primera cuota impaga.
fechaProximoVencimiento | Date | Fecha de vencimiento de la próxima cuota.
fechaUltimoPago | Date | Fecha de último pago de cuota.
fechaValor | Date | Fecha de alta del préstamo.
fechaVencimiento | Date | Fecha de vencimiento del préstamo.
operacionUId | Long | Identificador único de la operación.
otrosConceptos | [sBTConcepto](#sbtconcepto) | Otros conceptos del préstamo.
periodicidad | Int | Período entre cuotas.
plazo | Int | Plazo.
producto | [sBTProducto](#sbtproducto) | Descripción del producto.
saldoCapital | Double | Saldo de capital.
simboloMoneda | Sting | Símbolo monetario.
sucursal | String | Sucursal del préstamo.
tasaMoraVigente | Double | Tasa de mora vigente.
tasaVigente | Double | Tasa vigente.
tipoAmortizacion | String | Tipo de amortización.
tir | Double | Tir.
valorCuota | Double | Valor de la cuota.
:::

::: details sBTProducto

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

::: details sBTDatoAdicional

### sBTDatoAdicional

Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
detalle | String | Detalle de dato adicional.
:::

<!-- CIERRA SDT -->

