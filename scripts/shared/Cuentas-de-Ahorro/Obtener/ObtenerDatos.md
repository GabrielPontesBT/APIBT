---
title: Obtener Datos
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
::: note Método para obtener los datos de un producto de cuenta de ahorro.

**Nombre publicación:** BTCuentasDeAhorro.ObtenerDatos

**Programa:** RBTPG007

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
operacionUId | Long | Identificador único de operación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtCajaAhorro | [sBTCajaAhorro](#sbtcajaahorro) | Datos de caja de ahorro.

@tab Errores

Código | Descripción
:--------- | :---------
30001 | No se recibió el identificador de operación.
30002 | No se recuperó operación para el identificador: [Número de identificador].
30003 | La operación ingresada no corresponde a una cuenta de ahorro.
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
      <bts:BTCuentasDeAhorro.ObtenerDatos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>281</bts:operacionUId>
      </bts:BTCuentasDeAhorro.ObtenerDatos>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ObtenerDatos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: c27aec65-f66f-b138-f9d3-15a243b6d5e4' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": 1,
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 281
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
      <BTCuentasDeAhorro.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtCajaAhorro>
            <cobraIntereses>S</cobraIntereses>
            <producto>
               <papel/>
               <moneda>$</moneda>
               <productoUId>0</productoUId>
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre>
            </producto>
            <idOperacionBT>0010100000021000000000000000001100001000000000001</idOperacionBT>
            <saldoPorConfirmar>0.00</saldoPorConfirmar>
            <descPaquete/>
            <idOperacionFmt>000000011_001</idOperacionFmt>
            <ejecutivo/>
            <saldoCobertura>0.00</saldoCobertura>
            <pagaInteresSobregiro>N</pagaInteresSobregiro>
            <saldoDisponible>7433400.28</saldoDisponible>
            <pagaComisCantMovimientos>S</pagaComisCantMovimientos>
            <saldoBloqueado>0.00</saldoBloqueado>
            <pagaComisBajoPromedio>S</pagaComisBajoPromedio>
            <operacionUId>281</operacionUId>
            <frecuenciaEmisionEC>Cuatrimestral</frecuenciaEmisionEC>
            <diasSobregiro>0</diasSobregiro>
            <saldoContable>7433400.28</saldoContable>
            <estado>Normal</estado>
            <fechaApertura>2015-12-23</fechaApertura>
            <sucursal>Casa Matriz</sucursal>
            <pagaComisEstadoCuenta/>
            <paquete>N</paquete>
         </sdtCajaAhorro>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>856</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasDeAhorro.ObtenerDatos</Servicio>
            <Fecha>2017-12-18</Fecha>
            <Requerimiento/>
            <Hora>10:42:59</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasDeAhorro.ObtenerDatosResponse>
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
  "sdtCajaAhorro": {
    "cobraIntereses": "S",
    "producto": {
      "papel": "",
      "moneda": "$",
      "productoUId": "0",
      "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física",
      "otrosConceptos": {
        "concepto": "",
        "texto": "",
        "valor": 0
      }
    },
    "idOperacionBT": "0010100000021000000000000000001100001000000000001",
    "saldoPorConfirmar": "0.00",
    "descPaquete": "",
    "idOperacionFmt": "000000011_001",
    "ejecutivo": "",
    "saldoCobertura": "0.00",
    "pagaInteresSobregiro": "N",
    "saldoDisponible": "7433400.28",
    "pagaComisCantMovimientos": "S",
    "saldoBloqueado": "0.00",
    "pagaComisBajoPromedio": "S",
    "operacionUId": "281",
    "frecuenciaEmisionEC": "Cuatrimestral",
    "diasSobregiro": "0",
    "saldoContable": "7433400.28",
    "estado": "Normal",
    "fechaApertura": "2015-12-23",
    "sucursal": "Casa Matriz",
    "pagaComisEstadoCuenta": "",
    "paquete": "N"
  },
  "Erroresnegocio": {
    "BTErrorNegocio": []
  },
  "Btoutreq": {
    "Numero": "857",
    "Estado": "OK",
    "Servicio": "BTCuentasDeAhorro.ObtenerDatos",
    "Fecha": "2017-12-18",
    "Requerimiento": 1,
    "Hora": "10:43:47",
    "Canal": "BTDIGITAL"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTCajaAhorro  

### sBTCajaAhorro

::: center 
Los campos del tipo de dato estructurado sBTCajaAhorro son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :--------- | :--------- 
cobraIntereses | String | Cobra intereses (S/N). 
descPaquete | String | Descripción de paquete. 
diasSobregiro | Short | Días de Sobregiro. 
ejecutivo | String | Nombre de ejecutivo de alta. 
estado | String | Descripción de estado de la operación. 
fechaApertura | Date | Fecha de alta. 
frecuenciaEmisionEC | String | Frecuencia de emisión de estado de cuenta. 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
operacionUId | Long | Identificador único de operación 
pagaComisBajoPromedio | String | Paga comisión por bajo promedio (S/N). 
pagaComisCantMovimientos | String | Paga comisión por cantidad de movimientos (S/N). 
pagaComisEstadoCuenta | String | Paga Comisión por estado de cuenta (S/N). 
pagaInteresSobregiro | String | Paga interes por sobregiro (S/N). 
paquete | String | Tiene paquete (S/N). 
producto | [sBTProducto](#sbtproducto) | Datos del Producto. 
saldoBloqueado | Double | Saldo bloqueado. 
saldoCobertura | Double | Saldo de cobertura. 
saldoContable | Double | Saldo total. 
saldoDisponible | Double | Saldo disponible. 
saldoPorConfirmar | Double | Saldo pendiente de confirmación. 
sucursal | String | Nombre de la sucursal de alta.
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

