---
title: Get Members Of Group
---

<!-- ABRE DATOS DEL MÉTODO -->
::: note Método para obtener los integrantes de un grupo.

**Nombre publicación:** PublicLoans.getMembersOfGroup

**Módulo:** Loans

**Programa:** PublicAPI.BTLOPA0037

**Alcance:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
offset | Long $<(Length: 10)>$ | Número de registros a omitir desde el inicio del resultado.
limit | Long $<(Length: 10)>$ | Cantidad máxima de registros a retornar en una sola respuesta.
groupId | Int $<(Length: 9)>$ | Identificador de grupo.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
hasNext | Boolean | ¿Existen más páginas disponibles en la paginación?
membersData | [SdtsBTMGMemberData](#sdtsbtmgmemberdata) | Listado de integrantes.

@tab Errores

Código | Descripción
:--------- | :-----------
120050010 | Debe ingresar el identificador de grupo.
120060101 | El grupo no existe.
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
  "offset": 0,
  "limit": 10,
  "groupId": 1
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
  "hasNext": false,
  "membersData": {
    "counterpartyGUID": "",
    "counterpartyName": "",
    "countryId": "",
    "countryDescription": "",
    "cycleIdOfMember": "",
    "documentNumber": "",
    "documentTypeId": "",
    "documentTypeDescription": "",
    "memberTypeId": "",
    "memberTypeDescription": "",
    "personGUID": "",
    "personName": ""
  },
  "BusinessErrors": [],
  "Btoutreq": {
    "Estado": "OK",
    "Fecha": "2026-06-09",
    "Hora": "14:25:44",
    "Numero": 13543381,
    "Servicio": "PublicLoans.getMembersOfGroup",
    "Requerimiento": 1,
    "Canal": "BTMOBILE"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details SdtsBTMGMemberData

### SdtsBTMGMemberData

::: center
Los campos del tipo de dato estructurado SdtsBTMGMemberData son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
counterpartyGUID | String $<(Length: 36)>$ | GUID (identificador único global) de contraparte.
counterpartyName | String $<(Length: 70)>$ | Nombre de contraparte.
countryId | Short $<(Length: 4)>$ | Identificador del país.
countryDescription | String $<(Length: 30)>$ | Descripción del país.
cycleIdOfMember | Int $<(Length: 9)>$ | Ciclo del miembro en el grupo.
documentNumber | String $<(Length: 25)>$ | Número de documento.
documentTypeId | Short $<(Length: 4)>$ | Identificador del tipo de documento.
documentTypeDescription | String $<(Length: 30)>$ | Descripción del tipo de documento.
memberTypeId | Byte $<(Length: 2)>$ | Identificador del tipo de miembro.
memberTypeDescription | String $<(Length: 40)>$ | Descripción del tipo de miembro.
personGUID | String $<(Length: 36)>$ | GUID (identificador único global) de persona.
personName | String $<(Length: 70)>$ | Nombre de persona.
:::
<!-- CIERRA SDT -->
