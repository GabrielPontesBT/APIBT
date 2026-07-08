---
title: Process Member Death Write Off
---

<!-- ABRE DATOS DEL MÉTODO -->
::: note Método para quebranto por fallecimiento

**Nombre publicación:** PublicLoans.processMemberDeathWriteOff

**Módulo:** Loans

**Programa:** PublicAPI.BTLOPA0050

**Alcance:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
groupId | Int $<(Length: 9)>$ | Identificador de grupo.
loanGUID | String $<(Length: 36)>$ | GUID (identificador único global) del préstamo.

@tab Body

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
deceasedDate | Date | Fecha de fallecimiento.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
movementGUID | String $<(Length: 36)>$ | GUID (identificador único global) del movimiento.

@tab Errores

No aplica.

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
    "Token": "E3ADC97E57DC5FDE4F408A70"
  },
  "groupId": "70",
  "loanGUID": "7de60dc6-b377-4683-9a8d-95ce6c69df74",
  "deceasedDate": "2027-07-30"
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
    "Token": "E3ADC97E57DC5FDE4F408A70"
  },
  "movementGUID": "58cfb0f0-4922-4d38-8d76-3a72ba3aa9d0",
  "BusinessErrors": {
    "BusinessError": []
  },
  "Btoutreq": {
    "Estado": "OK",
    "Fecha": "2026-06-16",
    "Hora": "18:50:57",
    "Numero": 13584292,
    "Servicio": "PublicLoans.processMemberDeathWriteOff",
    "Requerimiento": "1",
    "Canal": "BTDIGITAL"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->