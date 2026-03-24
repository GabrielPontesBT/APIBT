--- 
title: Obtener Roles 
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

<!-- ABRE LOS DATOS DEL MÉTODO -->
::: note Método para obtener un listado de los roles de Workflow. 

**Nombre publicación:** BTWorkflow.ObtenerRoles 

**Programa:** RBTPG464 

**Global/País:** Global 
:::
<!-- CIERRA LOS DATOS DEL MÉTODO --> 

<!-- ABRE LA TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtRoles | [sBTRolWF](#sbtrolwf) | Listado de roles de Workflow.

@tab Errores

Código | Descripción
:--------- | :-----------
40001 | No existen roles ingresados en el sistema. 
:::
<!-- CIERRA LA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato 

@tab XML 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTWorkflow.ObtenerRoles> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>151D0C3440510F1D04029085</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
         </bts:Btinreq> 
      </bts:BTWorkflow.ObtenerRoles> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 

@tab JSON
```json
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTWorkflow_v1?ObtenerRoles \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Usuario": "INSTALADOR", 
      "Device": "GP", 
      "Requerimiento": "1", 
      "Token": "200f0b8b654A8B5C60A82434" 
    }, 
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
      <BTWorkflow.ObtenerRolesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Token>151D0C3440510F1D04029085</Token> 
            <Canal>BTDIGITAL</Canal> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <sdtRoles> 
            <sBTRolWF> 
               <descripcion>Public</descripcion> 
               <codigo>0</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Operativo Sucursal</descripcion> 
               <codigo>1</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Oficial Operaciones</descripcion> 
               <codigo>2</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Gerente de Sucursal</descripcion> 
               <codigo>3</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Digitador</descripcion> 
               <codigo>4</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Call Center</descripcion> 
               <codigo>5</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Asesor de Créditos</descripcion> 
               <codigo>6</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Gte. Microfinanzas</descripcion> 
               <codigo>7</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Gerente Consumo</descripcion> 
               <codigo>8</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Gerente Comercial</descripcion> 
               <codigo>9</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Comité de Crédito</descripcion> 
               <codigo>10</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Asistente Plataforma</descripcion> 
               <codigo>11</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Encargado Créditos</descripcion> 
               <codigo>12</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Gerente Nal.Créditos</descripcion> 
               <codigo>13</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Subgerente Créditos</descripcion> 
               <codigo>14</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Gerente de Agencia</descripcion> 
               <codigo>15</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Operativo Agencia</descripcion> 
               <codigo>16</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Invisible</descripcion> 
               <codigo>17</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Contable</descripcion> 
               <codigo>18</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Alta Producto</descripcion> 
               <codigo>19</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Aprobador General</descripcion> 
               <codigo>20</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Validador</descripcion> 
               <codigo>21</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Control LisNegras</descripcion> 
               <codigo>22</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Analista Junior</descripcion> 
               <codigo>23</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Analista Senior</descripcion> 
               <codigo>24</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Ejecutivo Cuenta</descripcion> 
               <codigo>25</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Ingreso_C</descripcion> 
               <codigo>26</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Confirm_C</descripcion> 
               <codigo>27</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>CRV-COMERCIAL</descripcion> 
               <codigo>28</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>CRV-ANALISTA</descripcion> 
               <codigo>29</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>CRV-ESTAMENTO</descripcion> 
               <codigo>30</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>CRV-OPERACIONES.2</descripcion> 
               <codigo>31</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>CRV-OPERACIONES.3</descripcion> 
               <codigo>32</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>CRV-OPERACIONES.M</descripcion> 
               <codigo>33</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>CRV-OPERACIONES.1</descripcion> 
               <codigo>34</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>CRV-OPERACIONES.REF</descripcion> 
               <codigo>35</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Vendedor</descripcion> 
               <codigo>36</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Notarial</descripcion> 
               <codigo>37</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Sistema</descripcion> 
               <codigo>38</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>ALR_RespSuc</descripcion> 
               <codigo>39</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>ALR_ComPrev</descripcion> 
               <codigo>40</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>ALR_OfCump</descripcion> 
               <codigo>41</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>ALR_ComRos</descripcion> 
               <codigo>42</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Analista Regional</descripcion> 
               <codigo>43</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Jefe Nal. de Riesgos</descripcion> 
               <codigo>44</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Gerente Nacional</descripcion> 
               <codigo>45</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Analista de Riesgos</descripcion> 
               <codigo>46</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Vicep. de Riesgos</descripcion> 
               <codigo>47</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Analista Intermedio</descripcion> 
               <codigo>48</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Gerente de Negocios</descripcion> 
               <codigo>49</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Jefe de Negocios</descripcion> 
               <codigo>50</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Asesor Crédito</descripcion> 
               <codigo>51</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Plataforma</descripcion> 
               <codigo>52</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Asistente Operativo</descripcion> 
               <codigo>53</codigo> 
            </sBTRolWF> 
         </sdtRoles> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Estado>OK</Estado> 
            <Canal>BTDIGITAL</Canal> 
            <Fecha>2022-11-29</Fecha> 
            <Servicio>BTWorkflow.ObtenerRoles</Servicio> 
            <Hora>12:46:03</Hora> 
            <Numero>225657</Numero> 
            <Requerimiento>1</Requerimiento> 
         </Btoutreq> 
      </BTWorkflow.ObtenerRolesResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 

@tab JSON
```json
{ 
   "Btinreq": { 
   "Device": "GP", 
   "Usuario": "INSTALADOR", 
   "Requerimiento": "1", 
   "Canal": "BTDIGITAL", 
   "Token": "47D750A861C4243EDE981344" 
 }, 
   "sdtRoles": { 
      "sBTRolWF": [ 
      { 
         "descripcion": "Public", 
         "codigo": "0" 
      }, 
      { 
         "descripcion": "Operativo Sucursal", 
         "codigo": "1" 
      }, 
      { 
         "descripcion": "Oficial Operaciones", 
         "codigo": "2" 
      }, 
      { 
         "descripcion": "Gerente de Sucursal", 
         "codigo": "3" 
      }, 
      { 
         "descripcion": "Digitador", 
         "codigo": "4" 
      }, 
      { 
         "descripcion": "Call Center", 
         "codigo": "5" 
      }, 
      { 
         "descripcion": "Asesor de Créditos", 
         "codigo": "6" 
      }, 
      { 
         "descripcion": "Gte. Microfinanzas", 
         "codigo": "7" 
      }, 
      { 
         "descripcion": "Gerente Consumo", 
         "codigo": "8" 
      }, 
      { 
         "descripcion": "Gerente Comercial", 
         "codigo": "9" 
      }, 
      { 
         "descripcion": "Comité de Crédito", 
         "codigo": "10" 
      }, 
      { 
         "descripcion": "Asistente Plataforma", 
         "codigo": "11" 
      }, 
      { 
         "descripcion": "Encargado Créditos", 
         "codigo": "12" 
      }, 
      { 
         "descripcion": "Gerente Nal.Créditos", 
         "codigo": "13" 
      }, 
      { 
         "descripcion": "Subgerente Créditos", 
         "codigo": "14" 
      }, 
      { 
         "descripcion": "Gerente de Agencia", 
         "codigo": "15" 
      }, 
      { 
         "descripcion": "Operativo Agencia", 
         "codigo": "16" 
      }, 
      { 
         "descripcion": "Invisible", 
         "codigo": "17" 
      }, 
      { 
         "descripcion": "Contable", 
         "codigo": "18" 
      }, 
      { 
         "descripcion": "Alta Producto", 
         "codigo": "19" 
      }, 
      { 
         "descripcion": "Aprobador General", 
         "codigo": "20" 
      }, 
      { 
         "descripcion": "Validador", 
         "codigo": "21" 
      }, 
      { 
         "descripcion": "Control LisNegras", 
         "codigo": "22" 
      }, 
      { 
         "descripcion": "Analista Junior", 
         "codigo": "23" 
      }, 
      { 
         "descripcion": "Analista Senior", 
         "codigo": "24" 
      }, 
      { 
         "descripcion": "Ejecutivo Cuenta", 
         "codigo": "25" 
      }, 
      { 
         "descripcion": "Ingreso_C", 
         "codigo": "26" 
      }, 
      { 
         "descripcion": "Confirm_C", 
         "codigo": "27" 
      }, 
      { 
         "descripcion": "CRV-COMERCIAL", 
         "codigo": "28" 
      }, 
      { 
         "descripcion": "CRV-ANALISTA", 
         "codigo": "29" 
      }, 
      { 
         "descripcion": "CRV-ESTAMENTO", 
         "codigo": "30" 
      }, 
      { 
         "descripcion": "CRV-OPERACIONES.2", 
         "codigo": "31" 
      }, 
      { 
         "descripcion": "CRV-OPERACIONES.3", 
         "codigo": "32" 
      }, 
      { 
         "descripcion": "CRV-OPERACIONES.M", 
         "codigo": "33" 
      }, 
      { 
         "descripcion": "CRV-OPERACIONES.1", 
         "codigo": "34" 
      }, 
      { 
         "descripcion": "CRV-OPERACIONES.REF", 
         "codigo": "35" 
      }, 
      { 
         "descripcion": "Vendedor", 
         "codigo": "36" 
      }, 
      { 
         "descripcion": "Notarial", 
         "codigo": "37" 
      }, 
      { 
         "descripcion": "Sistema", 
         "codigo": "38" 
      }, 
      { 
         "descripcion": "ALR_RespSuc", 
         "codigo": "39" 
      }, 
      { 
         "descripcion": "ALR_ComPrev", 
         "codigo": "40" 
      }, 
      { 
         "descripcion": "ALR_OfCump", 
         "codigo": "41" 
      }, 
      { 
         "descripcion": "ALR_ComRos", 
         "codigo": "42" 
      }, 
      { 
         "descripcion": "Analista Regional", 
         "codigo": "43" 
      }, 
      { 
         "descripcion": "Jefe Nal. de Riesgos", 
         "codigo": "44" 
      }, 
      { 
         "descripcion": "Gerente Nacional", 
         "codigo": "45" 
      }, 
      { 
         "descripcion": "Analista de Riesgos", 
         "codigo": "46" 
      }, 
      { 
         "descripcion": "Vicep. de Riesgos", 
         "codigo": "47" 
      }, 
      { 
         "descripcion": "Analista Intermedio", 
         "codigo": "48" 
      }, 
      { 
         "descripcion": "Gerente de Negocios", 
         "codigo": "49" 
      }, 
      { 
         "descripcion": "Jefe de Negocios", 
         "codigo": "50" 
      }, 
      { 
         "descripcion": "Asesor Crédito", 
         "codigo": "51" 
      }, 
      { 
         "descripcion": "Plataforma", 
         "codigo": "52" 
      }, 
      { 
         "descripcion": "Asistente Operativo", 
         "codigo": "53" 
      } 
      ] 
   }, 
   "Btoutreq": { 
      "Numero": "109140", 
      "Estado": "OK", 
      "Servicio": "BTWorkflow.ObtenerRoles", 
      "Requerimiento": "1", 
      "Fecha": "2020-11-24", 
      "Canal": "BTDIGITAL", 
      "Hora": "13:29:43" 
   } 
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT --> 
::: details sBTRolWF  

### sBTRolWF

::: center 
Los campos del tipo de dato estructurado sBTRolWF son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
codigo | Int | Código del rol.
descripcion | String | Descripción del rol.
:::
<!-- CIERRA SDT -->