---
title: Obtener Préstamos por Rango Mora
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
::: note Método para obtener los préstamos que estén dentro del rango de mora ingresado.

**Nombre publicación:** BTPrestamos.ObtenerPrestamosPorRangoMora

**Programa:** RBTPG471

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
diasMoraDesde | Int | Días de mora desde.
diasMoraHasta | Int | Días de mora hasta.
actualiza | String | Habilita la actualización en la tabla SNG912 con los datos del préstamo [Hidden: Valor fijo 'S'].
offset | Int | Página de registros a obtener.
limit | Int | Tamaño de paginado.
contarRegistros | String | ¿Retorna cantidad de registros? (S/N)

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
quedanRegistros | String | ¿Existen más registros de los devueltos? (S/N)
cantidadRegistros | Int | Cantidad de registros totales.
sdtDatosPrestamos | [sBTDatosPrestamo](#sbtdatosprestamo) | Listado de los préstamos que están dentro del rango de días de mora.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | Días Mora Hasta no puede ser menor a Días Mora Desde.
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
      <bts:BTPrestamos.ObtenerPrestamosPorRangoMora>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>d51ae0498699865B3A2E76CF</bts:Token>
         </bts:Btinreq>
         <bts:diasMoraDesde>23</bts:diasMoraDesde>
         <bts:diasMoraHasta>100</bts:diasMoraHasta>
         <bts:offset>1</bts:offset>
         <bts:limit>10</bts:limit>
         <bts:contarRegistros>N</bts:contarRegistros>
      </bts:BTPrestamos.ObtenerPrestamosPorRangoMora>
   </soapenv:Body>
</soapenv:Envelope>

@tab JSON

curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPrestamosPorRangoMora=' \
  -H 'content-type: application/json' \
  -d '{
  "Btinreq": {
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Device": "GZ",
    "Usuario": "Instalador",
    "Token": "d51ae0498699865B3A2E76CF"
  },
  "diasMoraDesde": 23,
  "diasMoraHasta": 100,
  "offset": 1,
  "limit": 10,
  "contarRegistros": "N"
}'

:::

<!-- CIERRA EJEMPLO DE INVOCACIÓN --> <!-- ABRE EJEMPLO DE RESPUESTA -->

::: details Ejemplo de Respuesta
::: code-tabs #Formato

@tab XML

<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerPrestamosPorRangoMoraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">

         <Btinreq>
            <Device>GZ</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>d51ae0498699865B3A2E76CF</Token>
         </Btinreq>

         <quedanRegistros>S</quedanRegistros>
         <cantidadRegistros>27</cantidadRegistros>

         <sdtDatosPrestamos>
            <sBTDatosPrestamo>
               <plazo>113</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>521.12</deudaTotalVencida>
               <periodicidad>15</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2023-02-15</fechaVencimiento>
               <clienteUId>253</clienteUId>
               <diasMora>95</diasMora>
               <operacionUId>5819</operacionUId>
               <saldoCapital>500.00</saldoCapital>
               <estado>Normal</estado>
               <sucursal>MIRAFLORES</sucursal>
               <cantidadCuotas>8</cantidadCuotas>
            </sBTDatosPrestamo>
         </sdtDatosPrestamos>

         <Erroresnegocio/>

         <Btoutreq>
            <Numero>227484</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerPrestamosPorRangoMora</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-05-09</Fecha>
            <Hora>12:58:32</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>

      </BTPrestamos.ObtenerPrestamosPorRangoMoraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>

@tab JSON

{
  "quedanRegistros": "S",
  "cantidadRegistros": 27,
  "sdtDatosPrestamos": {
    "sBTDatosPrestamo": [
      {
        "plazo": 113,
        "deudaTotalVencida": 521.12,
        "clienteUId": 253,
        "diasMora": 95,
        "operacionUId": 5819,
        "saldoCapital": 500,
        "estado": "Normal",
        "sucursal": "MIRAFLORES",
        "cantidadCuotas": 8
      }
    ]
  }
}

:::

<!-- CIERRA EJEMPLO DE RESPUESTA -->

---
