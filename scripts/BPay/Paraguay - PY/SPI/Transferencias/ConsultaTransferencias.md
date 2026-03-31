---
title: Consulta Transferencias 
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
::: note Método para la consulta de transferencias.

**Nombre publicación:** BTTransferencias.Consultar

**Programa:** PBTPPY101

**Global/País:** Paraguay
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatoriedad | Comentarios
:--------- | :--------- | :--------- | :---------
movimientoUId | Int | M | Identificador de movimiento contable (BTSIE00Id).
sentido	| Int | M | (E) Enviada - (R) Recibida.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
camara 			    | String | Cámara por la cual se realizó la transferencia.
codigoBanco 	    | Int    | Identificador de banco Destino (FXSNP1Id).
nombreBanco 		| String | Nombre de banco Destino.
cuenta 			    | String | Cuenta destino.
nombre 	            | String | Nombre destino.
tipoDocumento 		| String | Tipo documento destino.
documento 			| String | Número documento destino.
concepto 			| String | motivo, detalle.
referenciaUnica 	| String | Referencia.
estado 			    | String | Estado: Ok, pendiente, error.
fecha 			    | Date 	 | Fecha. 
hora 			    | String | Hora.
referenciaEnvio 	| String | Referencia generada en LBTR o ACH.

@tab Errores

Código | Descripción
:--------- | :---------
10004 | No se encontró transferencia en el sistema.
::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab Envio transferencia
```json
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Usuario": "INSTALADOR",
        "Device": "ABC",
        "Requerimiento": "1",
        "Token": "59A1752B373672F3C3EECC3D"
    },
    "movimientoUID": "438",
    "sentido": "E"
}
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab Respuesta
```json
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Usuario": "INSTALADOR",
        "Device": "ABC",
        "Requerimiento": "1",
        "Token": "59A1752B373672F3C3EECC3D"
    },
    "camara": "SPI",
    "codigoBanco": 12,
    "nombreBanco": "BANCO GNB PARAGUAY SA",
    "cuenta": "010143323888",
    "nombre": "DESTINATARIO",
    "tipoDocumento": "CI",
    "documento": "3546681",
    "concepto": "Pago de alquiler",
    "referenciaUnica": "TUFIPYPA28042561440002719663",
    "estado": "OK",
    "fecha": "2025-04-28",
    "hora": "17:04:21",
    "referenciaEnvio": "",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Estado": "OK",
        "Fecha": "2025-05-02",
        "Hora": "16:51:43",
        "Numero": 14385,
        "Servicio": "BTTransferencias.Consultar",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL"
    }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->