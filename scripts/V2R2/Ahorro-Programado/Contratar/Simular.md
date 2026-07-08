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
::: note Método para simular el alta de un ahorro programado.

**Nombre publicación:** BTAhorroProgramado.Simular

**Programa:** RBTPG446

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtSolicitudSimulacionAhorroProgramado | [sBTSolicitudSimulacionAhorro](#sbtsolicitudsimulacionahorro) | Datos de la simulación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtSimulacionAhorroProgramado | [sBTSimulacionAhorroProgramado](#sbtsimulacionahorroprogramado) | Simulación de ahorro programado.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de la persona.
30002 | No se recibió el identificador del cliente.
30003 | No se recibió el identificador del producto.
30008 | No se recuperó la persona para el identificador: [Número de Identificador].
30009 | No se recuperó la cuenta para el identificador de cliente: [Número de Identificador].
30012 | No se recuperó el producto de ahorro para el identificador: [Número de Identificador].
40150 | Ocurrió un error al actualizar la información del ahorro.
40955 | El deposito inicial es superior al total a ahorrar.
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
      <bts:BTAhorroProgramado.Simular>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>GL</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>01D45E9964612A4C8CCB1055</bts:Token>
         </bts:Btinreq>
         <bts:sdtSolicitudSimulacionAhorroProgramado>
            <bts:abono>10000</bts:abono>
            <bts:productoUId>82</bts:productoUId>
            <bts:montoTotalAhorrar>0</bts:montoTotalAhorrar>
            <bts:clienteUId>61</bts:clienteUId>
            <bts:personaUId>22</bts:personaUId>
            <bts:diaIncremento>5</bts:diaIncremento>
            <bts:depositoInicial>1000</bts:depositoInicial>
            <bts:fechaInicioAhorro></bts:fechaInicioAhorro>
            <bts:plazo>360</bts:plazo>
            <bts:periodicidadIncremento>1</bts:periodicidadIncremento>
         </bts:sdtSolicitudSimulacionAhorroProgramado>
      </bts:BTAhorroProgramado.Simular>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Canal": "BTDIGITAL",
    "Usuario": "MINSTALADOR",
    "Device": "GL",
    "Requerimiento": 1,
    "Token": "01D45E9964612A4C8CCB1055"
  },
  "sdtSolicitudSimulacionAhorroProgramado": {
    "abono": 10000,
    "productoUId": 82,
    "montoTotalAhorrar": 0,
    "clienteUId": 61,
    "personaUId": 22,
    "diaIncremento": 5,
    "depositoInicial": 1000,
    "fechaInicioAhorro": "",
    "plazo": 360,
    "periodicidadIncremento": 1
  }
}
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
      <BTAhorroProgramado.SimularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>MINSTALADOR</Usuario>
            <Device>GL</Device>
            <Requerimiento>1</Requerimiento>
            <Token>01D45E9964612A4C8CCB1055</Token>
         </Btinreq>
         <sdtSimulacionAhorroProgramado>
            <fechaInicio>2021-01-05</fechaInicio>
            <cronograma>  
               <sBTCuotaAhorro>  
                  <tasa>10.00</tasa>  
                  <impuestos>0.00</impuestos>  
                  <interes>8.49</interes>  
                  <otrosConceptos></otrosConceptos>  
                  <plazo>31</plazo>  
                  <fechaPago>2021-01-05</fechaPago>  
                  <capital>1000.00</capital>  
               </sBTCuotaAhorro>  
               <sBTCuotaAhorro>  
                  <tasa>10.00</tasa>  
                  <impuestos>0.00</impuestos>  
                  <interes>84.38</interes>  
                  <otrosConceptos></otrosConceptos>  
                  <plazo>59</plazo>  
                  <fechaPago>2021-02-05</fechaPago>  
                  <capital>10000.00</capital>  
               </sBTCuotaAhorro>  
               <sBTCuotaAhorro>  
                  <tasa>10.00</tasa>  
                  <impuestos>0.00</impuestos>  
                  <interes>178.36</interes>  
                  <otrosConceptos></otrosConceptos>  
                  <plazo>90</plazo>  
                  <fechaPago>2021-03-05</fechaPago>  
                  <capital>10000.00</capital>  
               </sBTCuotaAhorro>  
               <sBTCuotaAhorro>  
                  <tasa>10.00</tasa>  
                  <impuestos>0.00</impuestos>  
                  <interes>254.79</interes>  
                  <otrosConceptos></otrosConceptos>  
                  <plazo>120</plazo>  
                  <fechaPago>2021-04-05</fechaPago>  
                  <capital>10000.00</capital>  
               </sBTCuotaAhorro>  
               <sBTCuotaAhorro>  
                  <tasa>10.00</tasa>  
                  <impuestos>0.00</impuestos>  
                  <interes>370.68</interes>  
                  <otrosConceptos></otrosConceptos>  
                  <plazo>153</plazo>  
                  <fechaPago>2021-05-05</fechaPago>  
                  <capital>10000.00</capital>  
               </sBTCuotaAhorro>  
               <sBTCuotaAhorro>  
                  <tasa>10.00</tasa>  
                  <impuestos>0.00</impuestos>  
                  <interes>391.23</interes>  
                  <otrosConceptos></otrosConceptos>  
                  <plazo>181</plazo>  
                  <fechaPago>2021-06-07</fechaPago>  
                  <capital>10000.00</capital>  
               </sBTCuotaAhorro>  
               <sBTCuotaAhorro>  
                  <tasa>10.00</tasa>  
                  <impuestos>0.00</impuestos>  
                  <interes>518.08</interes>  
                  <otrosConceptos></otrosConceptos>  
                  <plazo>212</plazo>  
                  <fechaPago>2021-07-05</fechaPago>  
                  <capital>10000.00</capital>  
               </sBTCuotaAhorro>  
               <sBTCuotaAhorro>  
                  <tasa>10.00</tasa>  
                  <impuestos>0.00</impuestos>  
                  <interes>622.47</interes>  
                  <otrosConceptos></otrosConceptos>  
                  <plazo>244</plazo>  
                  <fechaPago>2021-08-05</fechaPago>  
                  <capital>10000.00</capital>  
               </sBTCuotaAhorro>  
               <sBTCuotaAhorro>  
                  <tasa>10.00</tasa>  
                  <impuestos>0.00</impuestos>  
                  <interes>643.56</interes>  
                  <otrosConceptos></otrosConceptos>  
                  <plazo>273</plazo>  
                  <fechaPago>2021-09-06</fechaPago>  
                  <capital>10000.00</capital>  
               </sBTCuotaAhorro>  
               <sBTCuotaAhorro>  
                  <tasa>10.00</tasa>  
                  <impuestos>0.00</impuestos>  
                  <interes>772.88</interes>  
                  <otrosConceptos></otrosConceptos>  
                  <plazo>304</plazo>  
                  <fechaPago>2021-10-05</fechaPago>  
                  <capital>10000.00</capital>  
               </sBTCuotaAhorro>  
               <sBTCuotaAhorro>  
                  <tasa>10.00</tasa>  
                  <impuestos>0.00</impuestos>  
                  <interes>857.81</interes>  
                  <otrosConceptos></otrosConceptos>  
                  <plazo>335</plazo>  
                  <fechaPago>2021-11-05</fechaPago>  
                  <capital>10000.00</capital>  
               </sBTCuotaAhorro>  
               <sBTCuotaAhorro>  
                  <tasa>10.00</tasa>  
                  <impuestos>0.00</impuestos>  
                  <interes>760.27</interes>  
                  <otrosConceptos></otrosConceptos>  
                  <plazo>360</plazo>  
                  <fechaPago>2021-12-06</fechaPago>  
                  <capital>10000.00</capital>  
               </sBTCuotaAhorro>  
            </cronograma> 
            <simulacionId>741</simulacionId>
            <depositoInicial>1000.00</depositoInicial>
            <tasaOriginal>10.00</tasaOriginal>
            <totalIntereses>5463.00</totalIntereses>
            <abono>10000.00</abono>
            <totalAhorro>111000.00</totalAhorro>
            <fechaVencimiento>2021-12-31</fechaVencimiento>
            <plazo>360</plazo>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>82</productoUId>
               <nombre>Ahorro en Sueldo Pesos</nombre>
            </producto>
            <periodicidadIncremento>1</periodicidadIncremento>
            <sucursal>Casa Matriz</sucursal>
            <totalImpuestos>0.00</totalImpuestos>
         </sdtSimulacionAhorroProgramado>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2022-11-29</Fecha>
            <Hora>17:21:52</Hora>
            <Numero>11095</Numero>
            <Servicio>BTAhorroProgramado.Simular</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.SimularResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Canal": "BTDIGITAL",
    "Usuario": "MINSTALADOR",
    "Device": "GL",
    "Requerimiento": 1,
    "Token": "01D45E9964612A4C8CCB1055"
  },
  "sdtSimulacionAhorroProgramado": {
    "fechaInicio": "2021-01-05",
    "cronograma": {
      "sBTCuotaAhorro": [
        {
          "tasa": 10,
          "impuestos": 0,
          "interes": 8.49,
          "otrosConceptos": "",
          "plazo": 31,
          "fechaPago": "2021-01-05",
          "capital": 1000,
          "sBTCronogramaAhorro": {
            "fechaPago": "",
            "plazo": 0,
            "capital": 0,
            "interes": 0,
            "impuestos": 0,
            "tasa": 0,
            "otrosConceptos": {
              "concepto": "",
              "valor": 0,
              "texto": ""
            }
          }
        },
        {
          "tasa": 10,
          "impuestos": 0,
          "interes": 84.38,
          "otrosConceptos": "",
          "plazo": 59,
          "fechaPago": "2021-02-05",
          "capital": 10000,
          "sBTCronogramaAhorro": {
            "fechaPago": "",
            "plazo": 0,
            "capital": 0,
            "interes": 0,
            "impuestos": 0,
            "tasa": 0,
            "otrosConceptos": {
              "concepto": "",
              "valor": 0,
              "texto": ""
            }
          }
        },
        {
          "tasa": 10,
          "impuestos": 0,
          "interes": 178.36,
          "otrosConceptos": "",
          "plazo": 90,
          "fechaPago": "2021-03-05",
          "capital": 10000,
          "sBTCronogramaAhorro": {
            "fechaPago": "",
            "plazo": 0,
            "capital": 0,
            "interes": 0,
            "impuestos": 0,
            "tasa": 0,
            "otrosConceptos": {
              "concepto": "",
              "valor": 0,
              "texto": ""
            }
          }
        },
        {
          "tasa": 10,
          "impuestos": 0,
          "interes": 254.79,
          "otrosConceptos": "",
          "plazo": 120,
          "fechaPago": "2021-04-05",
          "capital": 10000,
          "sBTCronogramaAhorro": {
            "fechaPago": "",
            "plazo": 0,
            "capital": 0,
            "interes": 0,
            "impuestos": 0,
            "tasa": 0,
            "otrosConceptos": {
              "concepto": "",
              "valor": 0,
              "texto": ""
            }
          }
        },
        {
          "tasa": 10,
          "impuestos": 0,
          "interes": 370.68,
          "otrosConceptos": "",
          "plazo": 153,
          "fechaPago": "2021-05-05",
          "capital": 10000,
          "sBTCronogramaAhorro": {
            "fechaPago": "",
            "plazo": 0,
            "capital": 0,
            "interes": 0,
            "impuestos": 0,
            "tasa": 0,
            "otrosConceptos": {
              "concepto": "",
              "valor": 0,
              "texto": ""
            }
          }
        },
        {
          "tasa": 10,
          "impuestos": 0,
          "interes": 391.23,
          "otrosConceptos": "",
          "plazo": 181,
          "fechaPago": "2021-06-07",
          "capital": 10000,
          "sBTCronogramaAhorro": {
            "fechaPago": "",
            "plazo": 0,
            "capital": 0,
            "interes": 0,
            "impuestos": 0,
            "tasa": 0,
            "otrosConceptos": {
              "concepto": "",
              "valor": 0,
              "texto": ""
            }
          }
        },
        {
          "tasa": 10,
          "impuestos": 0,
          "interes": 518.08,
          "otrosConceptos": "",
          "plazo": 212,
          "fechaPago": "2021-07-05",
          "capital": 10000,
          "sBTCronogramaAhorro": {
            "fechaPago": "",
            "plazo": 0,
            "capital": 0,
            "interes": 0,
            "impuestos": 0,
            "tasa": 0,
            "otrosConceptos": {
              "concepto": "",
              "valor": 0,
              "texto": ""
            }
          }
        },
        {
          "tasa": 10,
          "impuestos": 0,
          "interes": 622.47,
          "otrosConceptos": "",
          "plazo": 244,
          "fechaPago": "2021-08-05",
          "capital": 10000,
          "sBTCronogramaAhorro": {
            "fechaPago": "",
            "plazo": 0,
            "capital": 0,
            "interes": 0,
            "impuestos": 0,
            "tasa": 0,
            "otrosConceptos": {
              "concepto": "",
              "valor": 0,
              "texto": ""
            }
          }
        },
        {
          "tasa": 10,
          "impuestos": 0,
          "interes": 643.56,
          "otrosConceptos": "",
          "plazo": 273,
          "fechaPago": "2021-09-06",
          "capital": 10000,
          "sBTCronogramaAhorro": {
            "fechaPago": "",
            "plazo": 0,
            "capital": 0,
            "interes": 0,
            "impuestos": 0,
            "tasa": 0,
            "otrosConceptos": {
              "concepto": "",
              "valor": 0,
              "texto": ""
            }
          }
        },
        {
          "tasa": 10,
          "impuestos": 0,
          "interes": 772.88,
          "otrosConceptos": "",
          "plazo": 304,
          "fechaPago": "2021-10-05",
          "capital": 10000,
          "sBTCronogramaAhorro": {
            "fechaPago": "",
            "plazo": 0,
            "capital": 0,
            "interes": 0,
            "impuestos": 0,
            "tasa": 0,
            "otrosConceptos": {
              "concepto": "",
              "valor": 0,
              "texto": ""
            }
          }
        },
        {
          "tasa": 10,
          "impuestos": 0,
          "interes": 857.81,
          "otrosConceptos": "",
          "plazo": 335,
          "fechaPago": "2021-11-05",
          "capital": 10000,
          "sBTCronogramaAhorro": {
            "fechaPago": "",
            "plazo": 0,
            "capital": 0,
            "interes": 0,
            "impuestos": 0,
            "tasa": 0,
            "otrosConceptos": {
              "concepto": "",
              "valor": 0,
              "texto": ""
            }
          }
        },
        {
          "tasa": 10,
          "impuestos": 0,
          "interes": 760.27,
          "otrosConceptos": "",
          "plazo": 360,
          "fechaPago": "2021-12-06",
          "capital": 10000,
          "sBTCronogramaAhorro": {
            "fechaPago": "",
            "plazo": 0,
            "capital": 0,
            "interes": 0,
            "impuestos": 0,
            "tasa": 0,
            "otrosConceptos": {
              "concepto": "",
              "valor": 0,
              "texto": ""
            }
          }
        }
      ]
    },
    "simulacionId": 741,
    "depositoInicial": 1000,
    "tasaOriginal": 10,
    "totalIntereses": 5463,
    "abono": 10000,
    "totalAhorro": 111000,
    "fechaVencimiento": "2021-12-31",
    "plazo": 360,
    "producto": {
      "moneda": "$",
      "papel": "$",
      "productoUId": 82,
      "nombre": "Ahorro en Sueldo Pesos"
    },
    "periodicidadIncremento": 1,
    "sucursal": "Casa Matriz",
    "totalImpuestos": 0
  },
  "Erroresnegocio": "",
  "Btoutreq": {
    "Estado": "OK",
    "Fecha": "2022-11-29",
    "Hora": "17:21:52",
    "Numero": 11095,
    "Servicio": "BTAhorroProgramado.Simular",
    "Requerimiento": 1,
    "Canal": "BTDIGITAL"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTSolicitudSimulacionAhorro  

### sBTSolicitudSimulacionAhorro

::: center 
Los campos del tipo de dato estructurado sBTSolicitudSimulacionAhorro son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
clienteUId | Long | Identificador único de cliente.
productoUId | Long | Identificador único de producto.
fechaInicioAhorro | Date | Fecha de inicio del ahorro.
depositoInicial | Double | Depósito inicial.
montoTotalAhorrar | Double | Monto total del ahorro.
abono | Double | Abono.
diaIncremento | Int | Día de incremento.
periodicidadIncremento | Int | Periodicidad de incremento.
plazo | Int | Plazo.
:::

::: details sBTSimulacionAhorroProgramado

### sBTSimulacionAhorroProgramado

::: center 
Los campos del tipo de dato estructurado sBTSimulacionAhorroProgramado son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
simulacionId | Long | Identificador de simulación.
producto | [sBTProducto](#sbtproducto) | Datos del producto.
sucursal | String | Nombre de la sucursal.
periodicidadIncremento | Int | Periodicidad de incremento.
plazo | Int | Plazo.
fechaInicio | Date | Fecha de inicio.
depositoInicial | Double | Depósito inicial.
fechaVencimiento | Date | Fecha de vencimiento.
tasaOriginal | Double | Tasa original.
abono | Double | Abono.
cronograma | [sBTCronogramaAhorro](#sbtcronogramaahorro) | Detalle del cronograma de ahorro.
totalAhorro | Double | Total del ahorro.
totalImpuestos | Double | Total de impuestos.
totalIntereses | Double | Total de intereses.
:::

::: details sBTProducto

### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
productoUId | Long | Identificador único de producto.
nombre | String | Nombre del producto.
moneda | String | Símbolo de la moneda.
papel | String | Símbolo del papel.
:::

::: details sBTCronogramaAhorro

### sBTCronogramaAhorro

::: center 
Los campos del tipo de dato estructurado sBTCronogramaAhorro son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sBTCronogramaAhorro | [sBTCuotaAhorro](#sbtcuotaahorro) | Datos de la cuota de ahorro.
:::

::: details sBTCuotaAhorro

### sBTCuotaAhorro

::: center 
Los campos del tipo de dato estructurado sBTCuotaAhorro son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
fechaPago | Date | Fecha de pago.
plazo | Int | Plazo.
capital | Double | Capital.
interes | Double | Interés.
impuestos | Double | Impuestos.
tasa | Double | Tasa.
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
:::

::: details sBTConcepto

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
concepto | String | Concepto.
valor | Double | Importe.
texto | String | Texto.
<!-- CIERRA SDT -->
:::

