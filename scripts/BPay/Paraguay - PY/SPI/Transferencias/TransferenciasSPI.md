---
title: Transferencias SPI
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
::: note Método para el envío de transferencias por Sistema de pago Interbancario.

**Nombre publicación:** BTTransferencias.Enviar

**Programa:** PBTPPY100

**Global/País:** Paraguay
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Obligatorio | Comentarios
:--------- | :--------- | :--------- | :---------
operacionUId   			    | Int 		| S	| Identificador Cuenta débito (BTSIO00Id).
moneda 			            | Int 		| S	| Valor de moneda nacional(6900) ó dólar(1). 
importeTransferencia		| Double    | S	| Importe a enviar. 
bancoDestino 				| Int 		| S	| Código de banco destino(FXSNP1Id).
cuentaDestino				| String	| S	| Cuenta de cliente a realizar crédito.
tipoDocumentoBeneficiario	| Int 		| S	| Tipo documento del cliente crédito.
documentoBeneficiario		| String	| S	| Numero de documento de cliente crédito.
nombreBeneficiario		    | String 	| S	| Nombre de cliente crédito.
detalleTransferencia		| String 	| S	| Motivo - mensaje a enviar en la transferencia.
conceptoEntidadReceptora 	| String 	| N	| Campo utilizado en transferencias LBTR - ACH.
codigoProposito 			| String	| S	| Concepto del Servicio del Cliente del Traspasante (CSCT).
codigoInstrumento 			| String 	| S	| Código utilizado para indicar si es alias o normal.
canal                       | String 	| S	| Canal de entrada: HB(HomeBanking) - MOBILE.
modoEnvio                   | String 	| S	| Acción a realizar, VALIDAR, SIMULAR, TRANSFERIR.
camara                      | String 	| S	| Tipo de cámara por donde se desea enviar la transferencia(SPI).

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
camara 			        | String | Tipo de documento.
estado 	                | String | Documento Beneficiario.
importeDebito 			| Double | Nombre Beneficiario.
cotizacion 			    | Double | Dirección Beneficiario.
comision 	            | Double | Teléfono.
referencia 		        | String | Identificador de instrucción.
movimientoUId 			| Int 	 | Impuesto.


@tab Errores

Código | Descripción
:--------- | :---------
10010 | No se ingreso opercionUID.
10011 | No se ingreso moneda.
10012 | No se ingreso importe.
10013 | No se ingreso código de banco beneficiario.
10014 | No se ingreso cuenta de beneficiario.
10015 | No se ingreso tipo documento de beneficiario.
10016 | No se ingreso documento de beneficiario.
10017 | No se ingreso Nombre de beneficiario.
10018 | No se ingreso detalle de transferencia.
10019 | No se ingreso concepto para entidad receptora.
10020 | No se ingreso canal- (HB - MOBILE)
10021 | No se ingreso modo(VALIDAR, SIMULAR, TRANSFERIR).
10022 | Canal ingresado no es valido - (HB - MOBILE)
10023 | Modo ingresado no es valido(VALIDAR, SIMULAR, TRANSFERIR).
10024 | No se ingreso cámara.
10025 | Cámara ingresada no es valida(LBTR, SPI, AG-ACH, AG-LBTR).
10026 | Código propósito no es valido(CSCT).
10027 | Código de instrumento no es valido(001 - 002).

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
    "operacionUID": "5",
    "moneda": "6900",
    "importeTransferencia": "10000",
    "bancoDestino": "12",
    "cuentaDestino": "010143323888",
    "tipoDocumentoBeneficiario": "1",
    "documentoBeneficiario": "3546681",
    "nombreBeneficiario": "DESTINATARIO",
    "detalleTransferencia": "Detalle",
    "conceptoEntidadReceptora": "Concepto",
    "codigoProposito": "CSCT",
    "codigoInstrumento": "001",
    "canal": "MOBILE",
    "modoEnvio": "TRANSFERIR",
    "camara": "SPI"
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
    "estado": "PENDIENTE",
    "importeDebito": 10000,
    "cotizacion": 0,
    "comision": 0,
    "referencia": "TUFIPYPA02052535040002720550",
    "movimientoUID": 456,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Estado": "OK",
        "Fecha": "2025-05-02",
        "Hora": "09:44:07",
        "Numero": 14059,
        "Servicio": "BTTransferencias.Enviar",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL"
    }
}
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->
