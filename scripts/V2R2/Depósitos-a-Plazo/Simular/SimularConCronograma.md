---
title: Simular Con Cronograma
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
::: note Método para simular el alta de un depósito a plazo con cronograma.

**Nombre publicación:** BTDepositosAPlazo.SimularConCronograma

**Programa:** RBTPG454

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

Para configurar los productos habilitados, se debe agregar un registro en la guía especial 70100 para cada producto de la siguiente manera: 

Campo | Valor 
:--------- | :---------  
Correlativo 1 | Valor incremental. 
Correlativo 2 | Módulo. 
Correlativo 3 | Tipo de operación. 
Valor específico 1 | Moneda. 
Valor específico 2 | Papel. 
Valor específico 3 | Tipo de producto (1- Depósito al vencimiento, 2- Pago periódico de intereses). 
Importe específico 1 | Tipo de día para el cálculo del plazo (1 - Comercial, 2 - Calendario). 
Importe específico 2 | Tipo de año para el cálculo de intereses (1 - Comercial, 2 - Calendario).
Importe específico 3 | Ajuste de día al vencimiento (0 - No ajusta, 1 - Ajuste día anterior, 2 - Ajuste día posterior).

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente. 
productoUId | Long | Identificador único de producto. 
Capital | Double | Importe capital. 
Plazo | Int | Plazo. 
Periodicidad | Int | Período entre pagos de intereses. 
sdtDatosExtendidos | [sBTDatoExtendido](#sbtdatoextendido) | Listado de datos complementarios. Se pueden enviar los siguientes [valores.](#valores)

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtDatosExtendidos | [sBTDatoExtendido](#sbtdatoextendido) | Listado de datos complementarios. 
sBTSimulacionDepositoAPlazo | [sBTSimulacionDepositoAPlazo](#sbtsimulaciondepositoaplazo) | Datos de simulación del depósito. 

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente. 
30002 | No se recibió el identificador del Producto. 
30003 | No se recibió el capital del Producto. 
30004 | No se recibió el plazo del Producto. 
40001 | El plazo ingresado es menor al plazo mínimo parametrizado para el producto. 
40003 | El plazo ingresado es mayor al plazo máximo parametrizado para el producto. 
40004 | El monto ingresado es menor al monto mínimo parametrizado para el producto. 
40005 | El monto ingresado es mayor al monto máximo parametrizado para el producto. 
40006 | No se encontró Tasa para el producto a Simular. 
::: 
<!-- CIERRA TABLA DE DATOS -->

<!-- ABRE VALORES -->
::: details Valores sdtDatosExtendidos

### Valores

Clave | Valor | Comentarios
:--------- | :--------- | :--------- 
CAPITALIZA_INTERESES | [S,N] (Valor por omisión "N") | **[Opcional]** Permite simular un depósito a plazo con capitalización periódica de intereses.

:::
<!-- CIERRA VALORES -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.SimularConCronograma>
       <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>30F74741A02C318CEFD55684</bts:Token>
            <bts:Device>GL</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10009</bts:clienteUId>
         <bts:productoUId>132</bts:productoUId>
         <bts:Capital>20000</bts:Capital>
         <bts:Plazo>360</bts:Plazo>
         <bts:Periodicidad>30</bts:Periodicidad>
         <bts:sdtDatosExtendidos/>
      </bts:BTDepositosAPlazo.SimularConCronograma>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Canal": "BTDIGITAL",
    "Requerimiento": 1,
    "Usuario": "INSTALADOR",
    "Token": "30F74741A02C318CEFD55684",
    "Device": "GL"
  },
  "clienteUId": 10009,
  "productoUId": 132,
  "Capital": 20000,
  "Plazo": 360,
  "Periodicidad": 30,
  "sdtDatosExtendidos": {}
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
      <BTDepositosAPlazo.SimularConCronograma xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>30F74741A02C318CEFD55684</Token>
            <Device>GL</Device>
         </Btinreq>
         <sBTSimulacionDepositoAPlazo>
            <simulacionId>92</simulacionId>
            <producto>
               <productoUId>132</productoUId>
               <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.</nombre>
               <moneda>S/.</moneda>
               <papel>$</papel>
            </producto>
            <clienteUId>10009</clienteUId>
            <Sucursal>Sucursal Principal</Sucursal>
            <TipoProducto>PP</TipoProducto>
            <Capital>20000.00</Capital>
            <ValorNominal>0.00</ValorNominal>
            <Precio>0.00000000</Precio>
            <TipoTasa>Efectiva Anual</TipoTasa>
            <Tasa>11.200000</Tasa>
            <TipoAnio>360 Días</TipoAnio>
            <Plazo>360</Plazo>
            <TipoDia>Días Comerciales</TipoDia>
            <FechaInicio>2022-04-21</FechaInicio>
            <FechaVencimiento>2023-04-21</FechaVencimiento>
            <Periodicidad>30</Periodicidad>
            <Intereses>2132.71</Intereses>
            <Impuestos>
               <SdtsBTConcepto>
                  <concepto>GANANCIA</concepto>
                  <valor>106.65</valor>
                  <texto>Impuestos a las ganancias Totales</texto>
               </SdtsBTConcepto>
            </Impuestos>
            <otrosConceptos></otrosConceptos>
            <Cronograma>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-05-23</FechaPago>
                  <Plazo>32</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>189.62</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.48</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-06-23</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-07-25</FechaPago>
                  <Plazo>32</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>189.62</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.48</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-08-25</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-09-26</FechaPago>
                  <Plazo>31</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>183.67</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.18</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-10-26</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-11-28</FechaPago>
                  <Plazo>32</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>189.62</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.48</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-12-28</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2023-01-30</FechaPago>
                  <Plazo>32</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>189.62</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.48</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2023-02-28</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2023-03-31</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2023-04-21</FechaPago>
                  <Plazo>21</Plazo>
                  <TipoCuota>M</TipoCuota>
                  <Capital>20000.00</Capital>
                  <Interes>124.24</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>6.21</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
            </Cronograma>
         </sBTSimulacionDepositoAPlazo>
         <sdtDatosExtendidos></sdtDatosExtendidos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTDepositosAPlazo.SimularConCronograma</Servicio>
            <Fecha>2022-11-29</Fecha>
            <Hora>10:43:24</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>497</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTDepositosAPlazo.SimularConCronograma>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Canal": "BTDIGITAL",
    "Requerimiento": 1,
    "Usuario": "INSTALADOR",
    "Token": "30F74741A02C318CEFD55684",
    "Device": "GL"
  },
  "sBTSimulacionDepositoAPlazo": {
    "simulacionId": 92,
    "producto": {
      "productoUId": 132,
      "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.",
      "moneda": "S/.",
      "papel": "$",
      "otrosConceptos": {
        "concepto": "",
        "texto": "",
        "valor": 0
      }
    },
    "clienteUId": 10009,
    "Sucursal": "Sucursal Principal",
    "TipoProducto": "PP",
    "Capital": 20000,
    "ValorNominal": 0,
    "Precio": 0,
    "TipoTasa": "Efectiva Anual",
    "Tasa": 11.2,
    "TipoAnio": "360 Días",
    "Plazo": 360,
    "TipoDia": "Días Comerciales",
    "FechaInicio": "2022-04-21",
    "FechaVencimiento": "2023-04-21",
    "Periodicidad": 30,
    "Intereses": 2132.71,
    "Impuestos": {
      "SdtsBTConcepto": {
        "concepto": "GANANCIA",
        "valor": 106.65,
        "texto": "Impuestos a las ganancias Totales"
      }
    },
    "Cronograma": {
      "SdtsBTCuotaPlanDeposito": [
        {
          "Plazo": 32,
          "Capital": 0,
          "Impuestos": {
            "SdtsBTConcepto": {
              "concepto": "GANANCIA",
              "valor": 9.48,
              "texto": "Impuestos a las ganancias"
            }
          },
          "fechaPago": "2022-05-23",
          "interes": 189.62,
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          },
          "tipoCuota": "I"
        },
        {
          "Plazo": 30,
          "Capital": 0,
          "Impuestos": {
            "SdtsBTConcepto": {
              "concepto": "GANANCIA",
              "valor": 8.89,
              "texto": "Impuestos a las ganancias"
            }
          },
          "fechaPago": "2022-06-23",
          "interes": 177.72,
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          },
          "tipoCuota": "I"
        },
        {
          "Plazo": 32,
          "Capital": 0,
          "Impuestos": {
            "SdtsBTConcepto": {
              "concepto": "GANANCIA",
              "valor": 9.48,
              "texto": "Impuestos a las ganancias"
            }
          },
          "fechaPago": "2022-07-25",
          "interes": 189.62,
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          },
          "tipoCuota": "I"
        },
        {
          "Plazo": 30,
          "Capital": 0,
          "Impuestos": {
            "SdtsBTConcepto": {
              "concepto": "GANANCIA",
              "valor": 8.89,
              "texto": "Impuestos a las ganancias"
            }
          },
          "fechaPago": "2022-08-25",
          "interes": 177.72,
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          },
          "tipoCuota": "I"
        },
        {
          "Plazo": 31,
          "Capital": 0,
          "Impuestos": {
            "SdtsBTConcepto": {
              "concepto": "GANANCIA",
              "valor": 9.18,
              "texto": "Impuestos a las ganancias"
            }
          },
          "fechaPago": "2022-09-26",
          "interes": 183.67,
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          },
          "tipoCuota": "I"
        },
        {
          "Plazo": 30,
          "Capital": 0,
          "Impuestos": {
            "SdtsBTConcepto": {
              "concepto": "GANANCIA",
              "valor": 8.89,
              "texto": "Impuestos a las ganancias"
            }
          },
          "fechaPago": "2022-10-26",
          "interes": 177.72,
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          },
          "tipoCuota": "I"
        },
        {
          "Plazo": 32,
          "Capital": 0,
          "Impuestos": {
            "SdtsBTConcepto": {
              "concepto": "GANANCIA",
              "valor": 9.48,
              "texto": "Impuestos a las ganancias"
            }
          },
          "fechaPago": "2022-11-28",
          "interes": 189.62,
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          },
          "tipoCuota": "I"
        },
        {
          "Plazo": 30,
          "Capital": 0,
          "Impuestos": {
            "SdtsBTConcepto": {
              "concepto": "GANANCIA",
              "valor": 8.89,
              "texto": "Impuestos a las ganancias"
            }
          },
          "fechaPago": "2022-12-28",
          "interes": 177.72,
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          },
          "tipoCuota": "I"
        },
        {
          "Plazo": 32,
          "Capital": 0,
          "Impuestos": {
            "SdtsBTConcepto": {
              "concepto": "GANANCIA",
              "valor": 9.48,
              "texto": "Impuestos a las ganancias"
            }
          },
          "fechaPago": "2023-01-30",
          "interes": 189.62,
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          },
          "tipoCuota": "I"
        },
        {
          "Plazo": 30,
          "Capital": 0,
          "Impuestos": {
            "SdtsBTConcepto": {
              "concepto": "GANANCIA",
              "valor": 8.89,
              "texto": "Impuestos a las ganancias"
            }
          },
          "fechaPago": "2023-02-28",
          "interes": 177.72,
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          },
          "tipoCuota": "I"
        },
        {
          "Plazo": 30,
          "Capital": 0,
          "Impuestos": {
            "SdtsBTConcepto": {
              "concepto": "GANANCIA",
              "valor": 8.89,
              "texto": "Impuestos a las ganancias"
            }
          },
          "fechaPago": "2023-03-31",
          "interes": 177.72,
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          },
          "tipoCuota": "I"
        },
        {
          "Plazo": 21,
          "Capital": 20000,
          "Impuestos": {
            "SdtsBTConcepto": {
              "concepto": "GANANCIA",
              "valor": 6.21,
              "texto": "Impuestos a las ganancias"
            }
          },
          "fechaPago": "2023-04-21",
          "interes": 124.24,
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          },
          "tipoCuota": "M"
        }
      ]
    },
    "otrosConceptos": {
      "concepto": "",
      "texto": "",
      "valor": 0
    }
  },
  "sdtDatosExtendidos": {}
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDatoExtendido  

### sBTDatoExtendido

::: center 
Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
clave | String | Clave del dato extendido. 
lista | [sBTDatoLista](#sbtdatolista) | Lista de datos. 
tipo | String | Tipo de dato extendido. 
valor | String | Valor de dato extendido.
:::

::: details sBTDatoLista

### sBTDatoLista

::: center 
Los campos del tipo de dato estructurado sBTDatoLista son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
clave | String | Identificador de información adicional. 
valor | String | Valor de información adicional.
:::

::: details sBTSimulacionDepositoAPlazo  

### sBTSimulacionDepositoAPlazo

::: center 
Los campos del tipo de dato estructurado sBTSimulacionDepositoAPlazo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
Capital | Double | Capital del cronograma. 
clienteUId | Long | Identificador de cliente. 
Cronograma | [sBTCuotaPlanDeposito](#sbtcuotaplandeposito) | Cronograma del préstamo. 
FechaInicio | Date | Fecha de inicio. 
FechaVencimiento | Date | Fecha de vencimiento. 
Impuestos | [sBTConcepto](#sbtconcepto) | Datos de impuestos. 
Intereses | Double | Intereses. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Otros conceptos. 
Periodicidad | Long | Periodicidad. 
Plazo | Long |  Plazo. 
Precio | Long | Precio. 
producto | [sBTProducto](#sbtproducto) | Datos del producto. 
simulacionId | Long | Identificador de simulación. 
Sucursal | String | Sucursal. 
Tasa | Long |  Tasa. 
TipoAnio | String | Tipo de año. 
TipoDia | String | Tipo de día. 
TipoProducto | String | Tipo de producto. 
TipoTasa | String | Tipo de tasa. 
ValorNominal | Double | Valor nominal.
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

::: details sBTCuotaPlanDeposito

### sBTCuotaPlanDeposito

::: center 
Los campos del tipo de dato estructurado sBTCuotaPlanDeposito son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
Capital | Double | Capital. 
fechaPago | Date | Fecha de pago. 
Impuestos | [sBTConcepto](#sbtconcepto) | Datos de impuestos. 
interes | Double | Interés. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Otros conceptos. 
Plazo | Long |  Plazo. 
tipoCuota | String | Tipo de cuota.
:::

<!-- CIERRA SDT -->

