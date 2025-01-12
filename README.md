# 🛠️ Documentación del Proyecto

<div align="center">

![GitHub Metrics](./github-metrics.svg)

![Cypress Tests](https://img.shields.io/badge/test-success-green)

RESULTAT DELS ÚLTIMS TESTS

![Cypress Tests](https://img.shields.io/badge/test-failure-red)

</div>

## 📝 Corrección del Error (Linter)

### 🔍 Corrección del problema con las comillas en [id].js y index.js

<details>
<summary><b>#### ❗ Problema detectado:</b></summary>
El linter detectó un error porque en los archivos `api/users/[id].js` y `api/users/index.js` se estaban utilizando comillas simples (') en lugar de comillas dobles ("). El proyecto está configurado para que el linter reconozca comillas dobles.
</details>

### ✅ Solución aplicada:

<div style="padding-left: 20px;">

##### Revisión de los ficheros afectados:
- Se identificaron los archivos `api/users/[id].js` y `api/users/index.js` como problemáticos según los logs del linter.

##### Actualización de las comillas:
- Se sustituyeron todas las comillas simples por comillas dobles en los ficheros mencionados.

</div>

### 📄 Ejemplos:

<table>
<tr>
<th>Antes de la corrección:</th>
<th>Después de la corrección:</th>
</tr>
<tr>
<td>


// api/users/[id].js 
// api/users/index.js
    case 'GET':
      return getUserById();


</td>
<td>


// api/users/[id].js
// api/users/index.js
    case "GET":
      return getUserById();


</td>
</tr>
</table>

### 🚀 Validación y Resultados:

npm run lint

✨ El linter se ejecuta sin ningún error ni warning.

### 📸 Evidencias:
<div style="display: flex; gap: 20px;">
<div>

**Modificación:**
![Error inicial](/img/1.png)

</div>
<div>

**.yml compilado:**
![Compilado](/img/2.png)

</div>
</div>

---

## 🧪 Documentación de Cypress

### ⚙️ Configuración yml
<div style="display: flex; gap: 20px;">

![yml](/img/6.png)
![yml](/img/5.png)

</div>

### 🔄 Proceso de validación
Los cambios se verifican mediante commit en https://github.com/JavierTomasTormo/nodejs-blog-practica/actions/

<div align="center">

**Estado de GitHub Actions:**
![Cypress Job](/img/3.png)

</div>

### 📈 Resultados
<div align="center">

**Tests de Cypress:**
![Resultados Tests](/img/4.png)

</div>

---

## 🏆 Documentación de Badge

### ⚙️ Configuración yml
<div align="center">

![yml](/img/8.png)

</div>

### 🔄 Proceso de validación
Los cambios se verifican mediante commit en https://github.com/JavierTomasTormo/nodejs-blog-practica/actions/

<div align="center">

**Estado de GitHub Actions:**
![Badge Job](/img/7.png)

**Resultados de Cypress:**
![Resultados Tests](/img/9.png)

</div>

---

## 🏆 Documentación de Deploy

### ⚙️ Configuración yml
<div align="center">

![yml](/img/10.png)

</div>

### 🔄 Proceso de validación
Los cambios se verifican mediante commit en https://github.com/JavierTomasTormo/nodejs-blog-practica/actions/

<div align="center">

**Estado de GitHub Actions:**
![Deploy Job](/img/11.png)

**Resultados del Deploy:**
![Resultados Tests](/img/12.png)

</div>

---

## 🏆 Documentación de Notifications

### ⚙️ Configuración yml
<div align="center">

![yml](/img/13.png)

</div>

### 🔄 Proceso de validación
Los cambios se verifican mediante commit en https://github.com/JavierTomasTormo/nodejs-blog-practica/actions/

<div align="center">

**Estado de GitHub Actions:**
![Notification Job](/img/14.png)

**Resultados del Deploy:**
![Resultados Tests](/img/15.png)

</div>