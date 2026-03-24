---
title: Obtener Hobbies
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
::: note Método para obtener un listado de los hobbies ingresados en el sistema.

**Nombre publicación:** BTPersonas.ObtenerHobbies

**Programa:** RBTPG397

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
No aplica. | No aplica. | No aplica.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtHobbies | [sBTHobby](#sbthobby) | Listado de hobbies.

@tab Errores 

No aplica.
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
      <bts:BTPersonas.ObtenerHobbies>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>3214436424A8B5C60A82434C</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
      </bts:BTPersonas.ObtenerHobbies>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerHobbies' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "bc8b678bc44A8B5C60A82434"
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
      <BTPersonas.ObtenerHobbiesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>3214436424A8B5C60A82434C</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtHobbies> 
            <SdtsBTHobby> 
               <codigo>1</codigo> 
               <descripcion>Aeromodelismo</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>2</codigo> 
               <descripcion>Ajedrez</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>3</codigo> 
               <descripcion>Arte</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>4</codigo> 
               <descripcion>Arte Gráfico</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>5</codigo> 
               <descripcion>Automovilismo</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>6</codigo> 
               <descripcion>Automodelismo</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>7</codigo> 
               <descripcion>Baile</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>8</codigo> 
               <descripcion>Basquetball</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>9</codigo> 
               <descripcion>Bolos</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>10</codigo> 
               <descripcion>Camping</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>11</codigo> 
               <descripcion>Carpintería</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>12</codigo> 
               <descripcion>Caza</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>13</codigo> 
               <descripcion>Ciclismo</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>14</codigo> 
               <descripcion>Cine</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>15</codigo> 
               <descripcion>Coleccionista</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>16</codigo> 
               <descripcion>Computadores</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>17</codigo> 
               <descripcion>Decoración</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>18</codigo> 
               <descripcion>Dep.Aventura</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>19</codigo> 
               <descripcion>Dep.Náuticos</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>20</codigo> 
               <descripcion>Deportes</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>21</codigo> 
               <descripcion>Dibujar</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>22</codigo> 
               <descripcion>Ecología</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>23</codigo> 
               <descripcion>Equitación</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>24</codigo> 
               <descripcion>Football</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>25</codigo> 
               <descripcion>Fotografía</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>26</codigo> 
               <descripcion>Golf</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>27</codigo> 
               <descripcion>Idiomas</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>28</codigo> 
               <descripcion>Jardinería</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>29</codigo> 
               <descripcion>Lectura</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>30</codigo> 
               <descripcion>Montañismo</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>31</codigo> 
               <descripcion>Motociclismo</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>32</codigo> 
               <descripcion>Música</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>33</codigo> 
               <descripcion>Natación</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>34</codigo> 
               <descripcion>Pasatiempos</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>35</codigo> 
               <descripcion>Pasear</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>36</codigo> 
               <descripcion>Pesca</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>37</codigo> 
               <descripcion>Pintar</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>38</codigo> 
               <descripcion>Rugby</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>39</codigo> 
               <descripcion>Squash</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>40</codigo> 
               <descripcion>Taekwondo</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>41</codigo> 
               <descripcion>Teatro</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>42</codigo> 
               <descripcion>Tenis</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>43</codigo> 
               <descripcion>Tenis de mesa</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>44</codigo> 
               <descripcion>Viajar</descripcion> 
            </SdtsBTHobby> 
            <SdtsBTHobby> 
               <codigo>99</codigo> 
               <descripcion>Otros</descripcion> 
            </SdtsBTHobby> 
         </sdtHobbies>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ObtenerHobbies</Servicio>
            <Fecha>2022-05-31</Fecha>
            <Hora>16:03:29</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8856</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ObtenerHobbiesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "c2cfd09eff4A8B5C60A82434"
    },
    "sdtHobbies": { 
        "SdtsBTHobby": [ 
        { 
            "codigo": "1", 
            "descripcion": "Aeromodelismo" 
        }, 
        { 
            "codigo": "2", 
            "descripcion": "Ajedrez" 
        }, 
        { 
            "codigo": "3", 
            "descripcion": "Arte" 
        }, 
        { 
            "codigo": "4", 
            "descripcion": "Arte Gráfico" 
        }, 
        { 
            "codigo": "5", 
            "descripcion": "Automovilismo" 
        }, 
        { 
            "codigo": "6", 
            "descripcion": "Automodelismo" 
        }, 
        { 
            "codigo": "7", 
            "descripcion": "Baile" 
        }, 
        { 
            "codigo": "8", 
            "descripcion": "Basquetball" 
        }, 
        { 
            "codigo": "9", 
            "descripcion": "Bolos" 
        }, 
        { 
            "codigo": "10", 
            "descripcion": "Camping" 
        }, 
        { 
            "codigo": "11", 
            "descripcion": "Carpintería" 
        }, 
        { 
            "codigo": "12", 
            "descripcion": "Caza" 
        }, 
        { 
            "codigo": "13", 
            "descripcion": "Ciclismo" 
        }, 
        { 
            "codigo": "14", 
            "descripcion": "Cine" 
        }, 
        { 
            "codigo": "15", 
            "descripcion": "Coleccionista" 
        }, 
        { 
            "codigo": "16", 
            "descripcion": "Computadores" 
        }, 
        { 
            "codigo": "17", 
            "descripcion": "Decoración" 
        }, 
        { 
            "codigo": "18", 
            "descripcion": "Dep.Aventura" 
        }, 
        { 
            "codigo": "19", 
            "descripcion": "Dep.Náuticos" 
        }, 
        { 
            "codigo": "20", 
            "descripcion": "Deportes" 
        }, 
        { 
            "codigo": "21", 
            "descripcion": "Dibujar" 
        }, 
        { 
            "codigo": "22", 
            "descripcion": "Ecología" 
        }, 
        { 
            "codigo": "23", 
            "descripcion": "Equitación" 
        }, 
        { 
            "codigo": "24", 
            "descripcion": "Football" 
        }, 
        { 
            "codigo": "25", 
            "descripcion": "Fotografía" 
        }, 
        { 
            "codigo": "26", 
            "descripcion": "Golf" 
        }, 
        { 
            "codigo": "27", 
            "descripcion": "Idiomas" 
        }, 
        { 
            "codigo": "28", 
            "descripcion": "Jardinería" 
        }, 
        { 
            "codigo": "29", 
            "descripcion": "Lectura" 
        }, 
        { 
            "codigo": "30", 
            "descripcion": "Montañismo" 
        }, 
        { 
            "codigo": "31", 
            "descripcion": "Motociclismo" 
        }, 
        { 
            "codigo": "32", 
            "descripcion": "Música" 
        }, 
        { 
            "codigo": "33", 
            "descripcion": "Natación" 
        }, 
        { 
            "codigo": "34", 
            "descripcion": "Pasatiempos" 
        }, 
        { 
            "codigo": "35", 
            "descripcion": "Pasear" 
        }, 
        { 
            "codigo": "36", 
            "descripcion": "Pesca" 
        }, 
        { 
            "codigo": "37", 
            "descripcion": "Pintar" 
        }, 
        { 
            "codigo": "38", 
            "descripcion": "Rugby" 
        }, 
        { 
            "codigo": "39", 
            "descripcion": "Squash" 
        }, 
        { 
            "codigo": "40", 
            "descripcion": "Taekwondo" 
        }, 
        { 
            "codigo": "41", 
            "descripcion": "Teatro" 
        }, 
        { 
            "codigo": "42", 
            "descripcion": "Tenis" 
        }, 
        { 
            "codigo": "43", 
            "descripcion": "Tenis de mesa" 
        }, 
        { 
            "codigo": "44", 
            "descripcion": "Viajar" 
        }, 
        { 
            "codigo": "99", 
            "descripcion": "Otros" 
        } 
        ] 
    },
    "Erroresnegocio": {
    },
    "Btoutreq": {
        "Numero": "839",
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerHobbies",
        "Requerimiento": "1",
        "Fecha": "2022-05-12",
        "Hora": "15:35:54",
        "Canal": "BTDIGITAL"
    }
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTHobby

### sBTHobby

::: center
Los campos del tipo de dato estructurado sBTHobby son los siguientes:

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
codigo | Short | Código de Hobby. 
descripcion | String | Descripción de Hobby. 
:::
<!-- CIERRA SDT -->