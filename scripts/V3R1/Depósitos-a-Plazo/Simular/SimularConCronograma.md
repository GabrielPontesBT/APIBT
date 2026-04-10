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
capital | Double | Importe capital. 
plazo | Int | Plazo. 
periodicidad | Int | Período entre pagos de intereses. 
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
         <bts:capital>20000</bts:capital>
         <bts:plazo>360</bts:plazo>
         <bts:periodicidad>30</bts:periodicidad>
         <bts:sBTDatosExtendidos/>
      </bts:BTDepositosAPlazo.SimularConCronograma>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
         "Canal": "BTDIGITAL",
         "Requerimiento": 1,
         "Usuario": "INSTALADOR",
         "Token": "30F74741A02C318CEFD55684",
         "Device": "GL"
      },
      "clienteUId": 10009,
      "productoUId": 132,
      "capital": 20000,
      "plazo": 360,
      "periodicidad": 30,
      "sBTDatosExtendidos": ""
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
      <BTDepositosAPlazo.SimularConCronograma xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>30F74741A02C318CEFD55684</Token>
            <Device>GL</Device>
         </Btinreq>
         <sBTDatosExtendidos></sBTDatosExtendidos>
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
               <sBTConcepto>
                  <concepto>GANANCIA</concepto>
                  <valor>106.65</valor>
                  <texto>Impuestos a las ganancias Totales</texto>
               </sBTConcepto>
            </Impuestos>
            <otrosConceptos></otrosConceptos>
            <Cronograma>
               <sBTCuotaPlanDeposito>
                  <FechaPago>2022-05-23</FechaPago>
                  <Plazo>32</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>189.62</Interes>
                  <Impuestos>
                     <sBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.48</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </sBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </sBTCuotaPlanDeposito>
               <sBTCuotaPlanDeposito>
                  <FechaPago>2022-06-23</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <sBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </sBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </sBTCuotaPlanDeposito>
               <sBTCuotaPlanDeposito>
                  <FechaPago>2022-07-25</FechaPago>
                  <Plazo>32</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>189.62</Interes>
                  <Impuestos>
                     <sBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.48</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </sBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </sBTCuotaPlanDeposito>
               <sBTCuotaPlanDeposito>
                  <FechaPago>2022-08-25</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <sBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </sBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </sBTCuotaPlanDeposito>
               <sBTCuotaPlanDeposito>
                  <FechaPago>2022-09-26</FechaPago>
                  <Plazo>31</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>183.67</Interes>
                  <Impuestos>
                     <sBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.18</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </sBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </sBTCuotaPlanDeposito>
               <sBTCuotaPlanDeposito>
                  <FechaPago>2022-10-26</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <sBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </sBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </sBTCuotaPlanDeposito>
               <sBTCuotaPlanDeposito>
                  <FechaPago>2022-11-28</FechaPago>
                  <Plazo>32</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>189.62</Interes>
                  <Impuestos>
                     <sBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.48</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </sBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </sBTCuotaPlanDeposito>
               <sBTCuotaPlanDeposito>
                  <FechaPago>2022-12-28</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <sBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </sBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </sBTCuotaPlanDeposito>
               <sBTCuotaPlanDeposito>
                  <FechaPago>2023-01-30</FechaPago>
                  <Plazo>32</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>189.62</Interes>
                  <Impuestos>
                     <sBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.48</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </sBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </sBTCuotaPlanDeposito>
               <sBTCuotaPlanDeposito>
                  <FechaPago>2023-02-28</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <sBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </sBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </sBTCuotaPlanDeposito>
               <sBTCuotaPlanDeposito>
                  <FechaPago>2023-03-31</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <sBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </sBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </sBTCuotaPlanDeposito>
               <sBTCuotaPlanDeposito>
                  <FechaPago>2023-04-21</FechaPago>
                  <Plazo>21</Plazo>
                  <TipoCuota>M</TipoCuota>
                  <Capital>20000.00</Capital>
                  <Interes>124.24</Interes>
                  <Impuestos>
                     <sBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>6.21</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </sBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </sBTCuotaPlanDeposito>
            </Cronograma>
         </sBTSimulacionDepositoAPlazo>
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
'{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": 1,
        "Usuario": "INSTALADOR",
        "Token": "30F74741A02C318CEFD55684",
        "Device": "GL"
    },
    "sBTDatosExtendidos": "",
    "sBTSimulacionDepositoAPlazo": {
        "simulacionId": 92,
        "producto": {
            "productoUId": 132,
            "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.",
            "moneda": "S/.",
            "papel": "$"
        },
        "clienteUId": 10009,
        "sucursal": "Sucursal Principal",
        "tipoProducto": "PP",
        "capital": 20000,
        "valorNominal": 0,
        "precio": 0,
        "tipoTasa": "Efectiva Anual",
        "tasa": 11.2,
        "tipoAnio": "360 Días",
        "plazo": 360,
        "tipoDia": "Días Comerciales",
        "fechaInicio": "2022-04-21",
        "fechaVencimiento": "2023-04-21",
        "periodicidad": 30,
        "intereses": 2132.71,
        "impuestos": {
            "sBTConcepto": {
                "concepto": "GANANCIA",
                "valor": 106.65,
                "texto": "Impuestos a las ganancias Totales"
            }
        },
        "otrosConceptos": "",
        "cronograma": {
            "sBTCuotaPlanDeposito": [
                {
                    "fechaPago": "2022-05-23",
                    "plazo": 32,
                    "tipoCuota": "I",
                    "capital": 0,
                    "interes": 189.62,
                    "impuestos": {
                        "sBTConcepto": {
                            "concepto": "GANANCIA",
                            "valor": 9.48,
                            "texto": "Impuestos a las ganancias"
                        }
                    },
                    "otrosConceptos": ""
                },
                {
                    "fechaPago": "2022-06-23",
                    "plazo": 30,
                    "tipoCuota": "I",
                    "capital": 0,
                    "interes": 177.72,
                    "impuestos": {
                        "sBTConcepto": {
                            "concepto": "GANANCIA",
                            "valor": 8.89,
                            "texto": "Impuestos a las ganancias"
                        }
                    },
                    "otrosConceptos": ""
                },
                {
                    "fechaPago": "2022-07-25",
                    "plazo": 32,
                    "tipoCuota": "I",
                    "capital": 0,
                    "interes": 189.62,
                    "impuestos": {
                        "sBTConcepto": {
                            "concepto": "GANANCIA",
                            "valor": 9.48,
                            "texto": "Impuestos a las ganancias"
                        }
                    },
                    "otrosConceptos": ""
                },
                {
                    "fechaPago": "2022-08-25",
                    "plazo": 30,
                    "tipoCuota": "I",
                    "capital": 0,
                    "interes": 177.72,
                    "impuestos": {
                        "sBTConcepto": {
                            "concepto": "GANANCIA",
                            "valor": 8.89,
                            "texto": "Impuestos a las ganancias"
                        }
                    },
                    "otrosConceptos": ""
                },
                {
                    "fechaPago": "2022-09-26",
                    "plazo": 31,
                    "tipoCuota": "I",
                    "capital": 0,
                    "interes": 183.67,
                    "impuestos": {
                        "sBTConcepto": {
                            "concepto": "GANANCIA",
                            "valor": 9.18,
                            "texto": "Impuestos a las ganancias"
                        }
                    },
                    "otrosConceptos": ""
                },
                {
                    "fechaPago": "2022-10-26",
                    "plazo": 30,
                    "tipoCuota": "I",
                    "capital": 0,
                    "interes": 177.72,
                    "impuestos": {
                        "sBTConcepto": {
                            "concepto": "GANANCIA",
                            "valor": 8.89,
                            "texto": "Impuestos a las ganancias"
                        }
                    },
                    "otrosConceptos": ""
                },
                {
                    "fechaPago": "2022-11-28",
                    "plazo": 32,
                    "tipoCuota": "I",
                    "capital": 0,
                    "interes": 189.62,
                    "impuestos": {
                        "sBTConcepto": {
                            "concepto": "GANANCIA",
                            "valor": 9.48,
                            "texto": "Impuestos a las ganancias"
                        }
                    },
                    "otrosConceptos": ""
                },
                {
                    "fechaPago": "2022-12-28",
                    "plazo": 30,
                    "tipoCuota": "I",
                    "capital": 0,
                    "interes": 177.72,
                    "impuestos": {
                        "sBTConcepto": {
                            "concepto": "GANANCIA",
                            "valor": 8.89,
                            "texto": "Impuestos a las ganancias"
                        }
                    },
                    "otrosConceptos": ""
                },
                {
                    "fechaPago": "2023-01-30",
                    "plazo": 32,
                    "tipoCuota": "I",
                    "capital": 0,
                    "interes": 189.62,
                    "impuestos": {
                        "sBTConcepto": {
                            "concepto": "GANANCIA",
                            "valor": 9.48,
                            "texto": "Impuestos a las ganancias"
                        }
                    },
                    "otrosConceptos": ""
                },
                {
                    "fechaPago": "2023-02-28",
                    "plazo": 30,
                    "tipoCuota": "I",
                    "capital": 0,
                    "interes": 177.72,
                    "impuestos": {
                        "sBTConcepto": {
                            "concepto": "GANANCIA",
                            "valor": 8.89,
                            "texto": "Impuestos a las ganancias"
                        }
                    },
                    "otrosConceptos": ""
                },
                {
                    "fechaPago": "2023-03-31",
                    "plazo": 30,
                    "tipoCuota": "I",
                    "capital": 0,
                    "interes": 177.72,
                    "impuestos": {
                        "sBTConcepto": {
                            "concepto": "GANANCIA",
                            "valor": 8.89,
                            "texto": "Impuestos a las ganancias"
                        }
                    },
                    "otrosConceptos": ""
                },
                {
                    "fechaPago": "2023-04-21",
                    "plazo": 21,
                    "tipoCuota": "M",
                    "capital": 20000,
                    "interes": 124.24,
                    "impuestos": {
                        "sBTConcepto": {
                            "concepto": "GANANCIA",
                            "valor": 6.21,
                            "texto": "Impuestos a las ganancias"
                        }
                    },
                    "otrosConceptos": ""
                }
            ]
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTDepositosAPlazo.SimularConCronograma",
        "Fecha": "2022-11-29",
        "Hora": "10:43:24",
        "Requerimiento": 1,
        "Numero": 497,
        "Estado": "OK"
    }
}'
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
capital | Double | Capital del cronograma. 
clienteUId | Long | Identificador de cliente. 
cronograma | [sBTCuotaPlanDeposito](#sbtcuotaplandeposito) | Cronograma del préstamo. 
fechaInicio | Date | Fecha de inicio. 
fechaVencimiento | Date | Fecha de vencimiento. 
impuestos | [sBTConcepto](#sbtconcepto) | Datos de impuestos. 
intereses | Double | Intereses. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Otros conceptos. 
periodicidad | Long | Periodicidad. 
plazo | Long |  Plazo. 
precio | Long | Precio. 
producto | [sBTProducto](#sbtproducto) | Datos del producto. 
simulacionId | Long | Identificador de simulación. 
sucursal | String | Sucursal. 
tasa | Long |  Tasa. 
tipoAnio | String | Tipo de año. 
tipoDia | String | Tipo de día. 
tipoProducto | String | Tipo de producto. 
tipoTasa | String | Tipo de tasa. 
valorNominal | Double | Valor nominal. 

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

### sBTCuotaPlanDeposito

::: center 
Los campos del tipo de dato estructurado sBTCuotaPlanDeposito son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
capital | Double | Capital. 
fechaPago | Date | Fecha de pago. 
impuestos | [sBTConcepto](#sbtconcepto) | Datos de impuestos. 
interes | Double | Interés. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Otros conceptos. 
plazo | Long |  Plazo. 
tipoCuota | String | Tipo de cuota. 
:::
<!-- CIERRA SDT -->
