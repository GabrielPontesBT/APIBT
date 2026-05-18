---
title: Create
---

<!-- ABRE DATOS DEL MÉTODO -->
::: note Método para contratar un depósito a plazo.

**Nombre publicación:** PublicTermDeposit.create

**Módulo:** TermDeposit

**Programa:** PublicAPI.BTTDPA0002

**Alcance:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
simulationGUID | String $<(length: 36)>$ | GUID (identificador único global) de la simulación del depósito a plazo.
counterpartyGUID | String $<(length: 36)>$ | GUID (identificador único global) de la contraparte.
expirationAccountGUID | String $<(length: 36)>$ | GUID (identificador único global) de la cuenta de destino al vencimiento.
recurringPaymentAccountGUID | String $<(length: 36)>$ | GUID (identificador único global) de la cuenta de destino del pago periódico.

@tab Body

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
expirationInstruction | Short $<(length: 3)>$ | Identificador de la instrucción al vencimiento.
recurringPaymentInstruction | Short $<(length: 3)>$ | Identificador de la instrucción de pago periódico.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
termDepositGUID | String $<(length: 36)>$ | GUID (identificador único global) del depósito a plazo.
movementGUID | String $<(length: 36)>$ | GUID (identificador único global) del movimiento.

@tab Errores

Código | Descripción
:--------- | :-----------
Completar manualmente | Completar manualmente

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
    "Canal": "BTDIGITAL",
    "Usuario": "INSTALADOR",
    "Device": "INSTALADOR",
    "Requerimiento": "1",
    "Token": "A8068BDF0E08AC754A7B94F5"
  },
  "simulationGUID": "3f47a1b2-8c5e-4d9a-b6f1-2e8d3c7a4051",
  "counterpartyGUID": "7a2b9c4d-1e6f-4830-a5d2-9b3c8e1f6742",
  "expirationAccountGUID": "1d5e8f2a-3b7c-4960-8e1d-5a2f9b4c7d83",
  "recurringPaymentAccountGUID": "",
  "expirationInstruction": 1,
  "recurringPaymentInstruction": 
}'
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
    "Canal": "BTDIGITAL",
    "Usuario": "INSTALADOR",
    "Device": "INSTALADOR",
    "Requerimiento": "1",
    "Token": "A8068BDF0E08AC754A7B94F5"
  },
  "termDepositGUID": "2e8b5c1a-7d3f-4a92-b6e4-1c9d7f5a8b36",
  "movementGUID": "6f1d4b8e-2a5c-4739-9b3e-4d7c1f8a5b92",
  "Btoutreq": {
    "Estado": "OK",
    "Fecha": "2026-05-15",
    "Hora": "14:07:38",
    "Numero": 13472661,
    "Servicio": "PublicTermDeposit.create",
    "Requerimiento": "1",
    "Canal": "BTDIGITAL"
  }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->