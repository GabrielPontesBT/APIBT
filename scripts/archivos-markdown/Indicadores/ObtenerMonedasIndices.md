---
title: Obtener Monedas Indices
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
::: note Método para obtener las monedas e índices en funcionamiento.

**Nombre publicación:** BTIndicadores.ObtenerMonedasIndices

**Programa:** RBTPG704

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtMonedas | [sBTMonedaIndice](#sbtmonedaindice) | Listado de monedas en uso contable.

@tab Errores

No aplica.
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
      <bts:BTIndicadores.ObtenerMonedasIndices>
         <bts:Btinreq>
           <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>?</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerMonedasIndices>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerMonedasIndices' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
   "Btinreq": {
      "Device": 1,
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7",
      "Usuario": "INSTALADOR",
      "Requerimiento": "?"
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
      <BTIndicadores.ObtenerMonedasIndicesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>?</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>959C2E0AEF210ABC0D8AA8F7</Token>
         </Btinreq>
         <sdtMonedas>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>0</codigo>
               <nombre>Pesos</nombre>
            </sBTMonedaIndice>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>105</codigo>
               <nombre>DOLAR AUSTRALIANO</nombre>
            </sBTMonedaIndice>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>500</codigo>
               <nombre>PESOS ARGENTINOS</nombre>
            </sBTMonedaIndice>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>1111</codigo>
               <nombre>EURO</nombre>
            </sBTMonedaIndice>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>2222</codigo>
               <nombre>DÓLAR ESTADOUNIDENSE</nombre>
            </sBTMonedaIndice>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>2225</codigo>
               <nombre>DÓLAR ESTADOUNIDENSE - BILLETE</nombre>
            </sBTMonedaIndice>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>3600</codigo>
               <nombre>YENS</nombre>
            </sBTMonedaIndice>
         </sdtMonedas>
         <sdtIndices>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>0</codigo>
               <nombre>Billete</nombre>
            </sBTMonedaIndice>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>50</codigo>
               <nombre>Unidad de Valor Adquisitivo</nombre>
            </sBTMonedaIndice>
         </sdtIndices>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11991</Numero>
            <Estado>OK</Estado>
            <Servicio>BTIndicadores.ObtenerMonedasIndices</Servicio>
            <Requerimiento>?</Requerimiento>
            <Fecha>2023-05-22</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>15:09:29</Hora>
         </Btoutreq>
      </BTIndicadores.ObtenerMonedasIndicesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": 1,
      "Usuario": "INSTALADOR",
      "Requerimiento": "?",
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7"
   },
   "sdtMonedas": {
      "sBTMonedaIndice": [
      {
         "tipoCambio": "N",
         "codigo": 0,
         "nombre": "Pesos"
      },
      {
         "tipoCambio": "N",
         "codigo": 105,
         "nombre": "DOLAR AUSTRALIANO"
      },
      {
         "tipoCambio": "N",
         "codigo": 500,
         "nombre": "PESOS ARGENTINOS"
      },
      {
         "tipoCambio": "N",
         "codigo": 1111,
         "nombre": "EURO"
      },
      {
         "tipoCambio": "N",
         "codigo": 2222,
         "nombre": "DÓLAR ESTADOUNIDENSE"
      },
      {
         "tipoCambio": "N",
         "codigo": 2225,
         "nombre": "DÓLAR ESTADOUNIDENSE - BILLETE"
      },
      {
         "tipoCambio": "N",
         "codigo": 3600,
         "nombre": "YENS"
      }
      ]
   },
   "sdtIndices": {
      "sBTMonedaIndice": [
      {
         "tipoCambio": "N",
         "codigo": 0,
         "nombre": "Billete"
      },
      {
         "tipoCambio": "N",
         "codigo": 50,
         "nombre": "Unidad de Valor Adquisitivo"
      }
      ]
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": 11991,
      "Estado": "OK",
      "Servicio": "BTIndicadores.ObtenerMonedasIndices",
      "Requerimiento": "?",
      "Fecha": "2023-05-22",
      "Canal": "BTDIGITAL",
      "Hora": "15:09:29"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTMonedaIndice  

### sBTMonedaIndice

::: center 
Los campos del tipo de dato estructurado sBTMonedaIndice son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Int | Código identificador de moneda. 
nombre | String | Nombre de moneda. 
tipoCambio | String | Tipo Cambio. 
:::
<!-- CIERRA SDT -->