---
title: Obtener Transacciones por Estados
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
::: note Método para obtener las transacciones por estado ingresadas en el sistema.

**Nombre publicación:** BTIndicadores.ObtenerTransaccionesEstados

**Programa:** RBTPG706

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
sdtTransaccionesEstados | [sBTTransaccionesEstados](#sbttransaccionesestados) | Listado de trasacciones.

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
      <bts:BTIndicadores.ObtenerTransaccionesEstados>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>?</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerTransaccionesEstados>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerTransaccionesEstados' \
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
      <BTIndicadores.ObtenerTransaccionesEstadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>?</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>959C2E0AEF210ABC0D8AA8F7</Token>
         </Btinreq>
         <sdtTransaccionesEstados>
            <transaccionM>0</transaccionM>
            <transaccionL>3</transaccionL>
            <transaccionH>0</transaccionH>
            <otros>54</otros>
            <transaccionE>31</transaccionE>
            <transaccionB>42</transaccionB>
            <transaccionX>0</transaccionX>
            <transaccionA>0</transaccionA>
            <exito>17</exito>
            <error>31</error>
            <transaccionS>17</transaccionS>
            <transaccionR>0</transaccionR>
            <transaccionSP>0</transaccionSP>
            <sucursalParametros>0</sucursalParametros>
            <transaccionP>9</transaccionP>
            <transaccionN>0</transaccionN>
         </sdtTransaccionesEstados>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11993</Numero>
            <Estado>OK</Estado>
            <Servicio>BTIndicadores.ObtenerTransaccionesEstados</Servicio>
            <Requerimiento>?</Requerimiento>
            <Fecha>2023-05-22</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>15:37:04</Hora>
         </Btoutreq>
      </BTIndicadores.ObtenerTransaccionesEstadosResponse>
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
   "sdtTransaccionesEstados": {
      "transaccionM": 0,
      "transaccionL": 3,
      "transaccionH": 0,
      "otros": 54,
      "transaccionE": 31,
      "transaccionB": 42,
      "transaccionX": 0,
      "transaccionA": 0,
      "exito": 17,
      "error": 31,
      "transaccionS": 17,
      "transaccionR": 0,
      "transaccionSP": 0,
      "sucursalParametros": 0,
      "transaccionP": 9,
      "transaccionN": 0
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": 11993,
      "Estado": "OK",
      "Servicio": "BTIndicadores.ObtenerTransaccionesEstados",
      "Requerimiento": "?",
      "Fecha": "2023-05-22",
      "Canal": "BTDIGITAL",
      "Hora": "15:37:04"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTransaccionesEstados  

### sBTTransaccionesEstados

::: center 
Los campos del tipo de dato estructurado sBTTransaccionesEstados son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
error | Int | Transacciones contabilizadas con error.                                                              
exito | Int | Transacciones contabilizadas con éxito.                                                              
otros | Int | Otros tipos de contabilización.                                                        
sucursalParametros | Int | Parámetros de sucursal.                                                                    
transaccionA | Int | Movimiento autorizado sin contabilizar.                                                
transaccionB | Int | Movimiento de ingreso batch no contabilizado.                                          
transaccionE | Int | Movimiento con errores.                                                                
transaccionH | Int | Movimiento contabilizado y pasado al histórico.                                        
transaccionL | Int | Movimiento de ingreso libre no contabilizado.                                          
transaccionM | Int | Movimiento con autorizaciones pendientes.                                              
transaccionN | Int | Movimiento ingresado por el transaccional no contabilizado.                            
transaccionP | Int | Movimiento contabilizado, pasado al histórico, con archivos de saldos históricos actualizados. 
transaccionR | Int | Movimiento con autorizaciones denegadas.                                               
transaccionS | Int | Movimiento contabilizado sin pasar al histórico.                                       
transaccionSP | Int | Movimiento sin especificar.                                                                       
transaccionX | Int | Movimiento con autorización por tipo cambio ingresado, para ser retomado.                    
:::
<!-- CIERRA SDT -->