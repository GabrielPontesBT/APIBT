---
title: Obtener Productos Habilitados
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
::: note Método para obtener un listado de los productos de depósito a plazo habilitados.

**Nombre publicación:** BTDepositoAPlazo.ObtenerProductosHabilitados

**Programa:** RBTPG447

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

Para configurar los productos habilitados, se debe agregar un registro en la guía especial 70100 para cada producto de la siguiente manera: 

Campo | Valor 
:--------- | :-----------  
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
tipoDeProducto | String | Tipo de producto (VTO: Vencimiento, PP: Pago periódico).

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtProductosDepositoAPlazo | [sBTProductosDepositoAPlazo](#sbtproductosdepositoaplazo) | Listado de productos habilitados.

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
      <bts:BTDepositosAPlazo.ObtenerProductosHabilitados>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>30F74741A02C318CEFD55684</bts:Token>
            <bts:Device>GL</bts:Device>
         </bts:Btinreq>
         <bts:tipoDeProducto></bts:tipoDeProducto>
      </bts:BTDepositosAPlazo.ObtenerProductosHabilitados>
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
         "tipoDeProducto": ""
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
      <BTDepositosAPlazo.ObtenerProductosHabilitados xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>30F74741A02C318CEFD55684</Token>
            <Device>GL</Device>
         </Btinreq>
         <sBTProductosDepositoAPlazo>
            <Producto>
               <Producto>
                  <productoUId>132</productoUId>
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.</nombre>
                  <moneda>S/.</moneda>
                  <papel>$</papel>
               </Producto>
               <tipoDeDeposito>PP</tipoDeDeposito>
               <DatosExtendidos></DatosExtendidos>
            </Producto>
         </sBTProductosDepositoAPlazo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTDepositosAPlazo.ObtenerProductosHabilitados</Servicio>
            <Fecha>2022-11-29</Fecha>
            <Hora>10:40:47</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>496</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerProductosHabilitados>
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
        "sBTProductosDepositoAPlazo": {
          "Producto": {
            "Producto": {
              "productoUId": 132,
              "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.",
              "moneda": "S/.",
              "papel": "$"
            },
            "tipoDeDeposito": "PP",
            "DatosExtendidos": ""
          }
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTDepositosAPlazo.ObtenerProductosHabilitados",
          "Fecha": "2022-11-29",
          "Hora": "10:40:47",
          "Requerimiento": 1,
          "Numero": 496,
          "Estado": "OK"
        }
      }'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTProductosDepositoAPlazo  

### sBTProductosDepositoAPlazo

::: center 
Los campos del tipo de dato estructurado sBTProductosDepositoAPlazo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
datosExtendidos | [sBTDatoExtendido](#sbtdatoextendido) | Listado de datos complementarios. 
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
papel | String | Símbolo del papel. 
productoUId | Long | Identificador único de producto. 
tipoDeDeposito | String | Tipo de depósito. (VTO: Vencimiento, PP: Pago periódico). 

### sBTDatoExtendido

::: center 
Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clave | String | Clave del dato extendido. 
lista | [sBTDatoLista](#sbtdatolista) | Lista de datos 
tipo | String | Tipo de dato extendido. 
valor | String | Valor de dato extendido. 

### sBTDatoLista

::: center 
Los campos del tipo de dato estructurado sBTDatoLista son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
clave | String | Identificador de información adicional. 
valor | String | Valor de información adicional. 
:::
<!-- CIERRA SDT -->