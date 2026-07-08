---
title: Group Loan Individual Resimulation
---

<!-- ABRE DATOS DEL MÉTODO -->
::: note Método para resimular un préstamo individual dentro de un grupo.

**Nombre publicación:** PublicLoans.groupLoanIndividualResimulation

**Módulo:** Loans

**Programa:** PublicAPI.BTLOPA0042

**Alcance:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
simulationGUID | String $<(Length: 36)>$ | GUID (identificador único global) de la simulación.

@tab Body

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
capital | Double $<(Length: 18.2)>$ | Capital del préstamo.
rate | Double $<(Length: 11.6)>$ | Tasa.
keepFeesAndInsurances | Boolean | ¿Mantiene seguros y comisiones del preseteo o simulación anterior?
inputDisbursementFees | [SdtsBTLOFeeIn](#sdtsbtlofeein) | Comisiones en desembolso.
inputInstallmentFees | [SdtsBTLOFeeIn](#sdtsbtlofeein) | Comisiones por cuota.
inputInsurances | [SdtsBTLOInsuranceIn](#sdtsbtloinsurancein) | Seguros.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
rateTypeId | Byte $<(Length: 1)>$ | Identificador de tipo de tasa.
rate | Double $<(Length: 11.6)>$ | Tasa.
finantialTotalCostRate | Double $<(Length: 11.6)>$ | Tasa de costo financiero total.
firstPaymentDate | Date | Fecha de primer pago.
totalOfCapital | Double $<(Length: 18.2)>$ | Total de capital.
disbursementAmount | Double $<(Length: 18.2)>$ | Importe a desembolsar.
expirationDate | Date | Fecha de vencimiento de la operación.
term | Int $<(Length: 5)>$ | Plazo total.
totalOfInterest | Double $<(Length: 18.2)>$ | Total de interés.
totalOfFees | Double $<(Length: 18.2)>$ | Total de comisiones.
totalOfFeeTaxes | Double $<(Length: 18.2)>$ | Total de impuestos sobre comisiones.
totalOfTaxes | Double $<(Length: 18.2)>$ | Total de impuestos.
totalOfInsurances | Double $<(Length: 18.2)>$ | Total de seguros.
loan | [SdtsBTLOGLoanSimulation](#sdtsbtlogloansimulation) | Detalle de cuotas.
outputDisbursementFees | [SdtsBTLOFeeOut](#sdtsbtlofeeout) | Comisiones en desembolso.
outputInstallmentFees | [SdtsBTLOFeeOut](#sdtsbtlofeeout) | Comisiones por cuota.
outputInsurances | [SdtsBTLOInsuranceOut](#sdtsbtloinsuranceout) | Seguros.
installmentValue | Double $<(Length: 18.2)>$ | Valor Cuota.

@tab Errores

Código | Descripción
:--------- | :-----------
120020061 | No existen datos de simulación.
120060123 | El capital solicitado por el grupo es menor al mínimo permitido.
120060124 | El capital solicitado por el grupo es mayor al máximo permitido.
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
  "simulationGUID": "6bad8760-206d-4eed-ad31-845081289d22",
  "capital": 2000,
  "rate": 15,
  "keepFeesAndInsurances": true,
  "inputDisbursementFees": [
    {
      "feeId": "",
      "modified": "",
      "modificationType": "",
      "amount": "",
      "percentage": ""
    }
  ],
  "inputInstallmentFees": [
    {
      "feeId": "",
      "modified": "",
      "modificationType": "",
      "amount": "",
      "percentage": ""
    }
  ],
  "inputInsurances": [
    {
      "insuranceId": "",
      "modified": "",
      "policyStartDate": "",
      "policyEndDate": "",
      "policyNumber": "",
      "amount": "",
      "percentage": "",
      "extraPremium": "",
      "commercialValue": ""
    }
  ]
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
  "rateTypeId": 1,
  "rate": 15,
  "finantialTotalCostRate": 0,
  "firstPaymentDate": "2027-07-22",
  "totalOfCapital": 2000,
  "disbursementAmount": 2000,
  "expirationDate": "2027-10-07",
  "term": 82,
  "totalOfInterest": 34.83,
  "totalOfFees": 6000,
  "totalOfFeeTaxes": 0,
  "totalOfTaxes": 0,
  "totalOfInsurances": 65.93,
  "loan": {
    "productId": 9800104001,
    "currencyId": 0,
    "kindId": 0,
    "totalOfCapital": 2000,
    "fees": {
      "calculationBase": "",
      "editable": false,
      "feeId": 0
    },
    "installments": {
      "capital": 0,
      "deferredInterest": 0,
      "fees": {
        "amount": "",
        "feeId": "",
        "feeName": "",
        "taxes": "",
        "total": ""
      },
      "feesTotal": 0,
      "initialDate": "",
      "installmentNumber": 0,
      "installmentType": "",
      "insurances": {
        "amount": "",
        "description": "",
        "insuranceId": ""
      },
      "insurancesTotal": 0,
      "interest": 0,
      "paymentDate": "",
      "roundOff": 0,
      "taxes": 0,
      "term": 0,
      "total": 0,
      "typeOfGrace": ""
    },
    "insurances": {
      "amount": 0,
      "description": "",
      "insuranceId": 0
    }
  },
  "outputDisbursementFees": {
    "amount": "",
    "description": "",
    "distributionForm": "",
    "feeId": "",
    "maximumAmount": "",
    "minimumAmount": "",
    "modifiable": false,
    "percentage": "",
    "tax": "",
    "total": ""
  },
  "outputInstallmentFees": {
    "amount": "",
    "description": "",
    "distributionForm": "",
    "feeId": "",
    "maximumAmount": "",
    "minimumAmount": "",
    "modifiable": false,
    "percentage": "",
    "tax": "",
    "total": ""
  },
  "outputInsurances": {
    "allowsModification": false,
    "amount": "",
    "chargeTypeId": "",
    "commercialValue": "",
    "description": "",
    "extraPremium": "",
    "hasExtraPremium": false,
    "insuranceId": "",
    "insuranceTypeId": "",
    "insuranceTypeDescription": "",
    "percentage": "",
    "policyEndDate": "",
    "policyNumber": "",
    "policyStartDate": ""
  },
  "installmentValue": 675,
  "BusinessErrors": [],
  "Btoutreq": {
    "Estado": "OK",
    "Fecha": "2026-06-09",
    "Hora": "18:04:55",
    "Numero": 13547109,
    "Servicio": "PublicLoans.groupLoanIndividualResimulation",
    "Requerimiento": 1,
    "Canal": "BTMOBILE"
  }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details SdtsBTLOFeeIn

### SdtsBTLOFeeIn

::: center
Los campos del tipo de dato estructurado SdtsBTLOFeeIn son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
amount | Double $<(Length: 18.2)>$ | Monto.
feeId | Int $<(Length: 5)>$ | Identificador de comisión.
modificationType | Byte $<(Length: 1)>$ | Tipo de modificación.
modified | Boolean | Modificado.
percentage | Double $<(Length: 11.6)>$ | Porcentaje.
:::

::: details SdtsBTLOInsuranceIn

### SdtsBTLOInsuranceIn

::: center
Los campos del tipo de dato estructurado SdtsBTLOInsuranceIn son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
amount | Double $<(Length: 18.2)>$ | Monto agregado.
commercialValue | Double $<(Length: 18.2)>$ | Valor comercial.
extraPremium | Double $<(Length: 11.6)>$ | Prima adicional.
insuranceId | Int $<(Length: 9)>$ | Identificador de seguro.
percentage | Double $<(Length: 11.6)>$ | Porcentaje modificado.
policyEndDate | Date | Fecha de fin de póliza.
policyNumber | String $<(Length: 20)>$ | Número de póliza.
policyStartDate | Date | Fecha de inicio de póliza.
:::

::: details SdtsBTLOGLoanSimulation

### SdtsBTLOGLoanSimulation

::: center
Los campos del tipo de dato estructurado SdtsBTLOGLoanSimulation son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
currencyId | Short $<(Length: 4)>$ | Identificador de moneda.
fees | [SdtsBTLODisbursementFee](#sdtsbtlodisbursementfee) | Comisiones.
installments | [SdtsBTLOInstallmentDetail](#sdtsbtloinstallmentdetail) | Cuotas.
insurances | [SdtsBTLODisbursementInsurance](#sdtsbtlodisbursementinsurance) | Seguros.
kindId | Int $<(Length: 6)>$ | Identificador del tipo.
productId | Long $<(Length: 18)>$ | Identificador del producto.
totalOfCapital | Double $<(Length: 18.2)>$ | Total de capital.
:::

::: details SdtsBTLODisbursementFee

### SdtsBTLODisbursementFee

::: center
Los campos del tipo de dato estructurado SdtsBTLODisbursementFee son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
calculationBase | String $<(Length: 1)>$ | Base de cálculo.
editable | Boolean | ¿Editable?.
feeId | Int | Identificador de comisión.
:::

::: details SdtsBTLOInstallmentDetail

### SdtsBTLOInstallmentDetail

::: center
Los campos del tipo de dato estructurado SdtsBTLOInstallmentDetail son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
capital | Double | Capital.
deferredInterest | Double | Intereses diferidos.
fees | [SdtsBTLOFeeDetail](#sdtsbtlofeedetail) | Comisiones.
feesTotal | Double | Total de comisiones.
initialDate | Date | Fecha inicial.
installmentNumber | Short | Número de cuota.
installmentType | String | Tipo de cuota.
insurances | [SdtsBTLOInsuranceDetail](#sdtsbtloinsurancedetail) | Seguros.
insurancesTotal | Double | Total de seguros.
interest | Double | Interés.
paymentDate | Date | Fecha de fin.
roundOff | Double | Redondeo.
taxes | Double | Impuestos.
term | Int | Plazo.
total | Double | Total.
typeOfGrace | String $<(Length: 1)>$ | Tipo de gracia.
:::

::: details SdtsBTLOFeeDetail

### SdtsBTLOFeeDetail

::: center
Los campos del tipo de dato estructurado SdtsBTLOFeeDetail son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
amount | Double $<(Length: 18.2)>$ | Monto.
feeId | Int $<(Length: 5)>$ | Identificador de comisión.
feeName | String $<(Length: 30)>$ | Descripción.
taxes | Double $<(Length: 18.2)>$ | Impuestos.
total | Double $<(Length: 18.2)>$ | Total.
:::

::: details SdtsBTLOInsuranceDetail

### SdtsBTLOInsuranceDetail

::: center
Los campos del tipo de dato estructurado SdtsBTLOInsuranceDetail son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
amount | Double $<(Length: 18.2)>$ | Prima.
description | String $<(Length: 40)>$ | Descripción.
insuranceId | Int $<(Length: 9)>$ | Identificador de seguro.
:::

::: details SdtsBTLODisbursementInsurance

### SdtsBTLODisbursementInsurance

::: center
Los campos del tipo de dato estructurado SdtsBTLODisbursementInsurance son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
amount | Double | Prima.
description | String | Descripción.
insuranceId | Int | Identificador de seguro.
:::

::: details SdtsBTLOFeeOut

### SdtsBTLOFeeOut

::: center
Los campos del tipo de dato estructurado SdtsBTLOFeeOut son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
amount | Double $<(Length: 18.2)>$ | Monto.
description | String $<(Length: 30)>$ | Descripción.
distributionForm | String $<(Length: 1)>$ | Forma de distribución.
feeId | Int $<(Length: 5)>$ | Identificador de comisión.
maximumAmount | Double $<(Length: 18.2)>$ | Monto máximo.
minimumAmount | Double $<(Length: 18.2)>$ | Monto mínimo.
modifiable | Boolean | Modificable.
percentage | Double $<(Length: 11.6)>$ | Porcentaje.
tax | Double $<(Length: 18.2)>$ | Impuesto.
total | Double $<(Length: 18.2)>$ | Total.
:::

::: details SdtsBTLOInsuranceOut

### SdtsBTLOInsuranceOut

::: center
Los campos del tipo de dato estructurado SdtsBTLOInsuranceOut son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
allowsModification | Boolean | Permite modificación.
amount | Double $<(Length: 18.2)>$ | Monto agregado.
chargeTypeId | String $<(Length: 1)>$ | Identificador del tipo de cargo.
commercialValue | Double $<(Length: 18.2)>$ | Valor comercial.
description | String $<(Length: 30)>$ | Descripción.
extraPremium | Double $<(Length: 11.6)>$ | Prima adicional.
hasExtraPremium | Boolean | Tiene prima adicional.
insuranceId | Int $<(Length: 9)>$ | Identificador de seguro.
insuranceTypeId | Int $<(Length: 5)>$ | Identificador del tipo de seguro.
insuranceTypeDescription | String $<(Length: 40)>$ | Descripción del tipo de seguro.
percentage | Double $<(Length: 11.6)>$ | Porcentaje modificado.
policyEndDate | Date | Fecha de fin de póliza.
policyNumber | String $<(Length: 20)>$ | Número de póliza.
policyStartDate | Date | Fecha de inicio de póliza.
:::
<!-- CIERRA SDT -->
