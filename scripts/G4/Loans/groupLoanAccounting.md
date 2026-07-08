---
title: Group Loan Accounting
---

<!-- ABRE DATOS DEL MÉTODO -->
::: note Método para contabilizar un préstamo grupal.

**Nombre publicación:** PublicLoans.groupLoanAccounting

**Módulo:** Loans

**Programa:** PublicAPI.BTLOPA0044

**Alcance:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

No aplica.

@tab Body

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
groupId | Int $<(Length: 9)>$ | Identificador de grupo.
cycleId | Int $<(Length: 9)>$ | Identificador del ciclo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
accountingEntries | [SdtsBTMGMemberAccountingEntry](#sdtsbtmgmemberaccountingentry) | Listado de asientos por integrante.

@tab Errores

Código | Descripción
:--------- | :-----------
120050010 | Debe ingresar el identificador de grupo.
:::
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación
::: code-tabs #Formato
@tab JSON
```json
{
  "Btinreq": {
    "Canal": "BTMOBILE",
    "Usuario": "INSTALADOR",
    "Device": "INSTALADOR",
    "Requerimiento": 1,
    "Token": "229E7557863E8FC9C64DFECC"
  },
  "groupId": 32,
  "cycleId": 1
}
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta
::: code-tabs #Formato
@tab JSON
```json
{
  "Btinreq": {
    "Canal": "BTMOBILE",
    "Usuario": "INSTALADOR",
    "Device": "INSTALADOR",
    "Requerimiento": 1,
    "Token": "229E7557863E8FC9C64DFECC"
  },
  "accountingEntries": {
    "counterpartyGUID": "",
    "movementGUID": ""
  },
  "BusinessErrors": [],
  "Btoutreq": {
    "Estado": "OK",
    "Fecha": "2026-06-09",
    "Hora": "18:11:30",
    "Numero": 13547120,
    "Servicio": "PublicLoans.groupLoanAccounting",
    "Requerimiento": 1,
    "Canal": "BTMOBILE"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details SdtsBTMGMemberAccountingEntry

### SdtsBTMGMemberAccountingEntry

::: center
Los campos del tipo de dato estructurado SdtsBTMGMemberAccountingEntry son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
counterpartyGUID | String $<(Length: 36)>$ | GUID (identificador único global) de contraparte.
movementGUID | String $<(Length: 36)>$ | GUID (identificador único global) del asiento contable.
:::
<!-- CIERRA SDT -->
