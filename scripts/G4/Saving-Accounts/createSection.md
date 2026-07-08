---
title: Create Section
---

<!-- ABRE DATOS DEL MÉTODO -->
::: note Método para crear un apartado a una cuenta de ahorro.

**Nombre publicación:** PublicSavingAccounts.createSection

**Módulo:** Liabilities.SavingsAccounts

**Programa:** PublicAPI.BTSAPA0011

**Alcance:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
savingAccountGUID | String $<(Length: 36)>$ | GUID (identificador único global) de la cuenta de ahorro.

@tab Body

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
category | Int $<(Length: 5)>$ | Categoría del apartado.
concept | String $<(Length: 255)>$ | Concepto.
geolocalization | [SdtsBTGeolocalization](#sdtsbtgeolocalization) | Datos de geolocalización.
transferType | Byte $<(Length: 1)>$ | Tipo de transferencia.
frequency | Byte $<(Length: 1)>$ | Frecuencia.
amount | Double $<(Length: 18.2)>$ | Monto.
monthlyTransferDay | Byte $<(Length: 2)>$ | Día mensual de transferencia.
weeklyTransferDay | Byte $<(Length: 1)>$ | Día semanal de transferencia.
schedulesTransfer | Boolean | Indica si programa la transferencia.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sectionGUID | String $<(Length: 36)>$ | GUID (identificador único global) del apartado.

@tab Errores

Código | Descripción
:--------- | :-----------
14001010001 | Debe ingresar el GUID de la cuenta de ahorro.
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
    "Token": "C004FACBFC2507D9B6B9A13E"
  },
  "savingAccountGUID": "65e099e6-00ef-4dcd-a244-0c2aa0793c3e",
  "category": "1",
  "concept": "Gastos Varios",
  "geolocalization": {
    "latitude": "44.666666",
    "longitude": "53.123456",
    "timestamp": "2026-06-14T12:02:00UTC-3"
  },
  "transferType": "1",
  "frequency": "3",
  "amount": "200",
  "monthlyTransferDay": "24",
  "weeklyTransferDay": "0",
  "schedulesTransfer": "true"
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
    "Token": "C004FACBFC2507D9B6B9A13E"
  },
  "sectionGUID": "78824b30-366d-4686-a84e-89ffa0e35285",
  "BusinessErrors": {
    "BusinessError": []
  },
  "Btoutreq": {
    "Estado": "OK",
    "Fecha": "2026-06-16",
    "Hora": "19:45:56",
    "Numero": 13585058,
    "Servicio": "PublicSavingAccounts.createSection",
    "Requerimiento": "1",
    "Canal": "BTDIGITAL"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details SdtsBTGeolocalization

### SdtsBTGeolocalization

::: center
Los campos del tipo de dato estructurado SdtsBTGeolocalization son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
latitude | Double | Latitud.
longitude | Double $<(Length: 11.8)>$ | Longitud.
timestamp | String $<(Length: 35)>$ | Fecha, hora y zona horaria expresado en el siguiente formato: AAAA-MM-DDTHH:MM:SS.XXXXXX(+/-)HH:MM.
:::
<!-- CIERRA SDT -->
