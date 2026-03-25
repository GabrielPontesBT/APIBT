---
title: Obtener Rubros Bolsa
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
::: note Método para obtener posibles rubros de bolsa ingresados en el sistema.

**Nombre publicación:** BTIndicadores.ObtenerRubrosBolsa

**Programa:** RBTPG708

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtRubrosBolsa | [sBTRubroBolsa](#sbtrubrobolsa) | Listado de rubros de bolsa.

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
      <bts:BTIndicadores.ObtenerRubrosBolsa>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>?</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerRubrosBolsa>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerRubrosBolsa' \
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
      <BTIndicadores.ObtenerRubrosBolsaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>?</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>959C2E0AEF210ABC0D8AA8F7</Token>
         </Btinreq>
         <sdtRubrosBolsa>
            <sBTRubroBolsa>
               <moneda>0</moneda>
               <cuentaCliente>0</cuentaCliente>
               <signoMoneda>$</signoMoneda>
               <ocurrencias>9</ocurrencias>
               <descripcion>Mon.Y Bill.En Empresa-Ventanilla</descripcion>
               <subOperacion>400</subOperacion>
               <rubro>101002001</rubro>
               <papel>0</papel>
               <nombreSucursal>Casa Matriz</nombreSucursal>
               <nombrePapel>Billete</nombrePapel>
               <empresa>1</empresa>
               <tipoOperacion>0</tipoOperacion>
               <operacion>0</operacion>
               <sucursal>1</sucursal>
               <nombreEmpresa>Finaxis</nombreEmpresa>
            </sBTRubroBolsa>
            <sBTRubroBolsa>
               ...
            </sBTRubroBolsa>
            ...
         </sdtRubrosBolsa>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11987</Numero>
            <Estado>OK</Estado>
            <Servicio>BTIndicadores.ObtenerRubrosBolsa</Servicio>
            <Requerimiento>?</Requerimiento>
            <Fecha>2023-05-22</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>13:55:55</Hora>
         </Btoutreq>
      </BTIndicadores.ObtenerRubrosBolsaResponse>
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
   "sdtRubrosBolsa": {
      "sBTRubroBolsa": [
      {
         "moneda": 0,
         "cuentaCliente": 0,
         "signoMoneda": "$",
         "ocurrencias": 9,
         "descripcion": "Mon.Y Bill.En Empresa-Ventanilla",
         "subOperacion": 400,
         "rubro": 101002001,
         "papel": 0,
         "nombreSucursal": "Casa Matriz",
         "nombrePapel": "Billete",
         "empresa": 1,
         "tipoOperacion": 0,
         "operacion": 0,
         "sucursal": 1,
         "nombreEmpresa": "Finaxis"
      },
      {
         ...
      },
      ...
      ]
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": 11987,
      "Estado": "OK",
      "Servicio": "BTIndicadores.ObtenerRubrosBolsa",
      "Requerimiento": "?",
      "Fecha": "2023-05-22",
      "Canal": "BTDIGITAL",
      "Hora": "13:55:55"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTRubroBolsa  

### sBTRubroBolsa

::: center 
Los campos del tipo de dato estructurado sBTRubroBolsa son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cuentaCliente | Int | Cuenta cliente. 
descripcion | String | Nombre del rubro.   
empresa | Int | Identificador de empresa. 
moneda | Int | Identificador de moneda. 
nombreEmpresa | String | Nombre de la empresa. 
nombrePapel | String | Nombre del papel.   
nombreSucursal | String | Nombre de la sucursal. 
ocurrencias | Int | Ocurrencias.    
operacion | Int | Identificador de operación.      
papel | Int | Identificador de papel. 
rubro | Int | Número de rubro. 
signoMoneda | String | Signo de la moneda.   
subOperacion | Int | Identificador de sub operación.  
sucursal | Int | Identificador de sucursal. 
tipoOperacion | Int | Identificador de tipo de operación. 
:::
<!-- CIERRA SDT -->