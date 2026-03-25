---
title: Obtener Cotizaciones de Pizarra Especial
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
::: note Método para obtener las cotizaciones de una pizarra especial.

**Nombre publicación:** BTPrecios.ObtenerCotizacionesPizarraEspecial

**Programa:** RBTPG635

**Global/País:** Global 
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
identificadorPizarra | Short | Identificador de la pizarra.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtMoneda | [sBTMoneda](#sbtmoneda) | Datos de la moneda.
compra | Double | Valor de compra de la moneda.
venta | Double | Valor de venta de la moneda.
sdtCotizacionesPizarra | [sBTCotizacionPizarra](#sbtcotizacionpizarra) | Lista de las cotizaciones de la pizarra.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió identificador de la pizarra.


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
      <bts:BTPrecios.ObtenerCotizacionesPizarraEspecial>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9F85C7F7E7515863B688E0F4</bts:Token>
         </bts:Btinreq>
         <bts:identificadorPizarra>10</bts:identificadorPizarra>
      </bts:BTPrecios.ObtenerCotizacionesPizarraEspecial>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerCotizacionesPizarraEspecial' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
  "Btinreq": {
    "Canal": "BTDIGITAL",
    "Usuario": "INSTALADOR",
    "Device": "FC",
    "Requerimiento": "0",
    "Token": "D2868674D8C3483A48324170"
  },
  "identificadorPizarra": "10"
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
      <BTPrecios.ObtenerCotizacionesPizarraEspecialResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9F85C7F7E7515863B688E0F4</Token>
         </Btinreq>
         <sdtMoneda>
            <descripcion>DÓLAR ESTADOUNIDENSE</descripcion>
            <identificador>2222</identificador>
            <simbolo>USD</simbolo>
         </sdtMoneda>
         <compra>20.0</compra>
         <venta>21.0</venta>
         <sdtCotizacionesPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>1.2</arbitrajeCompra>
               <moneda>
                  <descripcion>DOLAR AUSTRALIANO</descripcion>
                  <identificador>105</identificador>
                  <simbolo>AUD</simbolo>
               </moneda>
               <tipoCambioVenta>26.25</tipoCambioVenta>
               <tipoCambioCompra>16.67</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.8</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>3.6</arbitrajeCompra>
               <moneda>
                  <descripcion>PESOS ARGENTINOS</descripcion>
                  <identificador>500</identificador>
                  <simbolo>ARS</simbolo>
               </moneda>
               <tipoCambioVenta>8.75</tipoCambioVenta>
               <tipoCambioCompra>5.56</tipoCambioCompra>
               <arbitrajeCentral>3.0</arbitrajeCentral>
               <arbitrajeVenta>2.4</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>PESO ARG. BILL</descripcion>
                  <identificador>501</identificador>
                  <simbolo>AR$</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>3.6</arbitrajeCompra>
               <moneda>
                  <descripcion>REAL</descripcion>
                  <identificador>1000</identificador>
                  <simbolo>BRL</simbolo>
               </moneda>
               <tipoCambioVenta>8.75</tipoCambioVenta>
               <tipoCambioCompra>5.56</tipoCambioCompra>
               <arbitrajeCentral>3.0</arbitrajeCentral>
               <arbitrajeVenta>2.4</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>REAL BILLETE</descripcion>
                  <identificador>1001</identificador>
                  <simbolo>BR$</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>1.04</arbitrajeCompra>
               <moneda>
                  <descripcion>EURO</descripcion>
                  <identificador>1111</identificador>
                  <simbolo>EUR</simbolo>
               </moneda>
               <tipoCambioVenta>32.76</tipoCambioVenta>
               <tipoCambioCompra>20.8</tipoCambioCompra>
               <arbitrajeCentral>1.3</arbitrajeCentral>
               <arbitrajeVenta>1.56</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>EURO BILLETE</descripcion>
                  <identificador>1115</identificador>
                  <simbolo>EU$</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>Colon Costarricesense</descripcion>
                  <identificador>1123</identificador>
                  <simbolo>CRC</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>PESOS CHILENOS</descripcion>
                  <identificador>1300</identificador>
                  <simbolo>CL$</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>1.2</arbitrajeCompra>
               <moneda>
                  <descripcion>DÓLAR NEOZELANDÉS</descripcion>
                  <identificador>1490</identificador>
                  <simbolo>NZD</simbolo>
               </moneda>
               <tipoCambioVenta>26.25</tipoCambioVenta>
               <tipoCambioCompra>16.67</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.8</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>RAND SUDAFRICANO</descripcion>
                  <identificador>1620</identificador>
                  <simbolo>ZAR</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>CORONAS DANESAS</descripcion>
                  <identificador>1800</identificador>
                  <simbolo>DKK</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.8</arbitrajeCompra>
               <moneda>
                  <descripcion>DÓLAR ESTADOUNIDENSE - BILLETE</descripcion>
                  <identificador>2225</identificador>
                  <simbolo>U$D</simbolo>
               </moneda>
               <tipoCambioVenta>25.2</tipoCambioVenta>
               <tipoCambioCompra>16.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>1.2</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>DÓLAR FONDO</descripcion>
                  <identificador>2230</identificador>
                  <simbolo>USF</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>1.2</arbitrajeCompra>
               <moneda>
                  <descripcion>DÓLAR CANADIENSE</descripcion>
                  <identificador>2309</identificador>
                  <simbolo>CAD</simbolo>
               </moneda>
               <tipoCambioVenta>26.25</tipoCambioVenta>
               <tipoCambioCompra>16.67</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.8</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.8</arbitrajeCompra>
               <moneda>
                  <descripcion>LIBRAS ESTERLINAS</descripcion>
                  <identificador>2700</identificador>
                  <simbolo>GBP</simbolo>
               </moneda>
               <tipoCambioVenta>25.2</tipoCambioVenta>
               <tipoCambioCompra>16.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>1.2</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>LIBRAS EST. BILL</descripcion>
                  <identificador>2701</identificador>
                  <simbolo>GB$</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>2.4</arbitrajeCompra>
               <moneda>
                  <descripcion>YENS</descripcion>
                  <identificador>3600</identificador>
                  <simbolo>JPY</simbolo>
               </moneda>
               <tipoCambioVenta>13.13</tipoCambioVenta>
               <tipoCambioCompra>8.33</tipoCambioCompra>
               <arbitrajeCentral>2.0</arbitrajeCentral>
               <arbitrajeVenta>1.6</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>CORONA NORUEGA</descripcion>
                  <identificador>4600</identificador>
                  <simbolo>NOK</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>GUARANÍ TR.</descripcion>
                  <identificador>4800</identificador>
                  <simbolo>PYG</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>GUARANÍ</descripcion>
                  <identificador>4801</identificador>
                  <simbolo>PY$</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>1.0</arbitrajeCompra>
               <moneda>
                  <descripcion>CORONAS SUECAS</descripcion>
                  <identificador>5800</identificador>
                  <simbolo>SEK</simbolo>
               </moneda>
               <tipoCambioVenta>26.0</tipoCambioVenta>
               <tipoCambioCompra>20.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>1.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>1.2</arbitrajeCompra>
               <moneda>
                  <descripcion>FRANCOS SUIZOS</descripcion>
                  <identificador>5900</identificador>
                  <simbolo>CHF</simbolo>
               </moneda>
               <tipoCambioVenta>26.25</tipoCambioVenta>
               <tipoCambioCompra>16.67</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.8</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>FR. SUIZO BILL.</descripcion>
                  <identificador>5901</identificador>
                  <simbolo>CH$</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>BOLIVAR</descripcion>
                  <identificador>6200</identificador>
                  <simbolo>VEF</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
            <sBTCotizacionPizarra>
               <arbitrajeCompra>0.0</arbitrajeCompra>
               <moneda>
                  <descripcion>ONZA TROY ORO</descripcion>
                  <identificador>9000</identificador>
                  <simbolo>ORO</simbolo>
               </moneda>
               <tipoCambioVenta>0.0</tipoCambioVenta>
               <tipoCambioCompra>0.0</tipoCambioCompra>
               <arbitrajeCentral>1.0</arbitrajeCentral>
               <arbitrajeVenta>0.0</arbitrajeVenta>
            </sBTCotizacionPizarra>
         </sdtCotizacionesPizarra>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>36717</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrecios.ObtenerCotizacionesPizarraEspecial</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-11-20</Fecha>
            <Hora>11:37:22</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrecios.ObtenerCotizacionesPizarraEspecialResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
  "Btinreq": {
    "Device": "FC",
    "Usuario": "INSTALADOR",
    "Requerimiento": "0",
    "Canal": "BTDIGITAL",
    "Token": "D2868674D8C3483A48324170"
  },
  "sdtMoneda": {
      "descripcion": "DÓLAR ESTADOUNIDENSE",
      "identificador": 2222,
      "simbolo": "USD"
   },
   "compra": 20,
   "venta": 21,
   "sdtCotizacionesPizarra": {
      "sBTCotizacionPizarra": [
      {
         "arbitrajeCompra": 1.2,
         "moneda": {
            "descripcion": "DOLAR AUSTRALIANO",
            "identificador": 105,
            "simbolo": "AUD"
         },
         "tipoCambioVenta": 26.25,
         "tipoCambioCompra": 16.67,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0.8
      },
      {
         "arbitrajeCompra": 3.6,
         "moneda": {
            "descripcion": "PESOS ARGENTINOS",
            "identificador": 500,
            "simbolo": "ARS"
         },
         "tipoCambioVenta": 8.75,
         "tipoCambioCompra": 5.56,
         "arbitrajeCentral": 3,
         "arbitrajeVenta": 2.4
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "PESO ARG. BILL",
            "identificador": 501,
            "simbolo": "AR$"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      },
      {
         "arbitrajeCompra": 3.6,
         "moneda": {
            "descripcion": "REAL",
            "identificador": 1000,
            "simbolo": "BRL"
         },
         "tipoCambioVenta": 8.75,
         "tipoCambioCompra": 5.56,
         "arbitrajeCentral": 3,
         "arbitrajeVenta": 2.4
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "REAL BILLETE",
            "identificador": 1001,
            "simbolo": "BR$"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      },
      {
         "arbitrajeCompra": 1.04,
         "moneda": {
            "descripcion": "EURO",
            "identificador": 1111,
            "simbolo": "EUR"
         },
         "tipoCambioVenta": 32.76,
         "tipoCambioCompra": 20.8,
         "arbitrajeCentral": 1.3,
         "arbitrajeVenta": 1.56
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "EURO BILLETE",
            "identificador": 1115,
            "simbolo": "EU$"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "Colon Costarricesense",
            "identificador": 1123,
            "simbolo": "CRC"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "PESOS CHILENOS",
            "identificador": 1300,
            "simbolo": "CL$"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      },
      {
         "arbitrajeCompra": 1.2,
         "moneda": {
            "descripcion": "DÓLAR NEOZELANDÉS",
            "identificador": 1490,
            "simbolo": "NZD"
         },
         "tipoCambioVenta": 26.25,
         "tipoCambioCompra": 16.67,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0.8
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "RAND SUDAFRICANO",
            "identificador": 1620,
            "simbolo": "ZAR"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "CORONAS DANESAS",
            "identificador": 1800,
            "simbolo": "DKK"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      },
      {
         "arbitrajeCompra": 0.8,
         "moneda": {
            "descripcion": "DÓLAR ESTADOUNIDENSE - BILLETE",
            "identificador": 2225,
            "simbolo": "U$D"
         },
         "tipoCambioVenta": 25.2,
         "tipoCambioCompra": 16,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 1.2
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "DÓLAR FONDO",
            "identificador": 2230,
            "simbolo": "USF"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      },
      {
         "arbitrajeCompra": 1.2,
         "moneda": {
            "descripcion": "DÓLAR CANADIENSE",
            "identificador": 2309,
            "simbolo": "CAD"
         },
         "tipoCambioVenta": 26.25,
         "tipoCambioCompra": 16.67,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0.8
      },
      {
         "arbitrajeCompra": 0.8,
         "moneda": {
            "descripcion": "LIBRAS ESTERLINAS",
            "identificador": 2700,
            "simbolo": "GBP"
         },
         "tipoCambioVenta": 25.2,
         "tipoCambioCompra": 16,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 1.2
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "LIBRAS EST. BILL",
            "identificador": 2701,
            "simbolo": "GB$"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      },
      {
         "arbitrajeCompra": 2.4,
         "moneda": {
            "descripcion": "YENS",
            "identificador": 3600,
            "simbolo": "JPY"
         },
         "tipoCambioVenta": 13.13,
         "tipoCambioCompra": 8.33,
         "arbitrajeCentral": 2,
         "arbitrajeVenta": 1.6
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "CORONA NORUEGA",
            "identificador": 4600,
            "simbolo": "NOK"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "GUARANÍ TR.",
            "identificador": 4800,
            "simbolo": "PYG"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "GUARANÍ",
            "identificador": 4801,
            "simbolo": "PY$"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      },
      {
         "arbitrajeCompra": 1,
         "moneda": {
            "descripcion": "CORONAS SUECAS",
            "identificador": 5800,
            "simbolo": "SEK"
         },
         "tipoCambioVenta": 26,
         "tipoCambioCompra": 20,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 1
      },
      {
         "arbitrajeCompra": 1.2,
         "moneda": {
            "descripcion": "FRANCOS SUIZOS",
            "identificador": 5900,
            "simbolo": "CHF"
         },
         "tipoCambioVenta": 26.25,
         "tipoCambioCompra": 16.67,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0.8
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "FR. SUIZO BILL.",
            "identificador": 5901,
            "simbolo": "CH$"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "BOLIVAR",
            "identificador": 6200,
            "simbolo": "VEF"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      },
      {
         "arbitrajeCompra": 0,
         "moneda": {
            "descripcion": "ONZA TROY ORO",
            "identificador": 9000,
            "simbolo": "ORO"
         },
         "tipoCambioVenta": 0,
         "tipoCambioCompra": 0,
         "arbitrajeCentral": 1,
         "arbitrajeVenta": 0
      }
      ]
   },
  "Erroresnegocio": "",
  "Btoutreq": {
    "Numero": "36637",
    "Estado": "OK",
    "Servicio": "BTPersonas.ObtenerTextos",
    "Requerimiento": "0",
    "Fecha": "2025-11-07",
    "Hora": "15:51:35",
    "Canal": "BTDIGITAL"
  }
}

'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTMoneda  

### sBTMoneda

::: center 
Los campos del tipo de dato estructurado sBTMoneda son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
descripcion | String | Descripción de moneda.
identificador | Short | Identificador de moneda.
simbolo | String | Símbolo de moneda.

:::

::: details sBTCotizacionPizarra  

### sBTCotizacionPizarra

::: center 
Los campos del tipo de dato estructurado sBTCotizacionPizarra son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
arbitrajeCompra | Double | Arbitraje de compra.
moneda | [sBTMoneda](#sbtmoneda) | Datos de la moneda.
tipoCambioVenta | Double | Tipo de cambio de venta.
tipoCambioCompra | Double | Tipo de cambio de compra.
arbitrajeCentral | Double | Arbitraje central.
arbitrajeVenta | Double | Arbitraje venta.

:::
<!-- CIERRA SDT -->