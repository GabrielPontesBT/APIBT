---
title: Obtener Préstamos Castigados
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
::: note Método para obtener los productos de préstamo castigados de un cliente.

**Nombre publicación:** BTClientes.ObtenerPrestamosCastigados

**Programa:** RBTPG185

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

Se debe parametrizar el módulo correspondiente a castigos ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :---------  
Correlativo 1 | 1 
Correlativo 2 | 1 
Valor específico 1 | Módulo correspondiente a castigos. 
Valor específico 2 | 67 (Estado de operación castigada). 

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
correlativo | Int | Correlativo en el que se guardó el módulo correspondiente a préstamos castigados [Hidden].

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtProductosPrestamos | [sBTProductoPrestamo](#sbtproductoprestamo) | Listado de préstamos.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el identificador.
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
      <bts:BTClientes.ObtenerPrestamosCastigados>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTClientes.ObtenerPrestamosCastigados>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPrestamosCastigados=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 4
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
      <BTClientes.ObtenerPrestamosCastigadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>845cec4b724A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosPrestamos>
            <sBTProductoPrestamo>
               <operacionUId>1</operacionUId>
               <idOperacionFmt>0000000170-000</idOperacionFmt>
               <idOperacionBT>0010000100101000000000000000002700000000000170003</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Sucursal Beta</sucursal>
               <saldo>87128.11</saldo>
               <estado/>
            </sBTProductoPrestamo>
         </sdtProductosPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>785</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerPrestamosCastigados</Servicio>
            <Fecha>2017-12-15</Fecha>
            <Requerimiento/>
            <Hora>16:07:38</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerPrestamosCastigadosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
  "Btinreq": {
    "Device": "AV",
    "Usuario": "MINSTALADOR",
    "Requerimiento": 1,
    "Canal": "BTDIGITAL",
    "Token": "fa2c02c95a4A8B5C60A82434"
  },
  "sdtProductosPrestamos": {
    "sBTProductoPrestamo": [
      {
        "saldo": "87128.11",
        "sucursal": "Sucursal Beta",
        "producto": {
          "papel": "",
          "moneda": "$",
          "productoUId": "0",
          "nombre": "PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad",
          "otrosConceptos": {
            "concepto": "",
            "texto": "",
            "valor": 0
          }
        },
        "idOperacionBT": "0010000100101000000000000000002700000000000170003",
        "operacionUId": "1",
        "idOperacionFmt": "0000000170-000",
        "estado": ""
      }
    ]
  },
  "Erroresnegocio": {
    "BTErrorNegocio": []
  },
  "Btoutreq": {
    "Numero": "786",
    "Estado": "OK",
    "Servicio": "BTClientes.ObtenerPrestamosCastigados",
    "Fecha": "2017-12-15",
    "Requerimiento": 1,
    "Hora": "16:35:22",
    "Canal": "BTDIGITAL"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTProductoPrestamo  

### sBTProductoPrestamo

::: center 
Los campos del tipo de dato estructurado sBTProductoPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
estado | String | Descripción de estado. 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
operacionUId | Long | Identificador único de operación. 
producto | [sBTProducto](#sbtproducto) | Datos del producto. 
saldo | Double | Capital. 
sucursal | String | Nombre de la sucursal.
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

<!-- CIERRA SDT -->

