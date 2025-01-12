# 🛠️ Documentación del Proyecto

<div align="center">

![GitHub Metrics](./github-metrics.svg)

<table>
<tr>
<td>✅ Tests Exitosos</td>
<td>❌ Tests Fallidos</td>
</tr>
<tr>
<td>

![Cypress Tests](https://img.shields.io/badge/test-success-green)

</td>
<td>

![Cypress Tests](https://img.shields.io/badge/test-failure-red)

</td>
</tr>
</table>

</div>

## 📝 Corrección del Error (Linter)

### 🔍 Corrección del problema con las comillas en [id].js y index.js

<details>
<summary><b>#### ❗ Problema detectado:</b></summary>
El linter detectó un error porque en los archivos `api/users/[id].js` y `api/users/index.js` se estaban utilizando comillas simples (') en lugar de comillas dobles ("). El proyecto está configurado para que el linter reconozca comillas dobles.
</details>

### ✅ Solución aplicada:

<table>
<tr>
<th colspan="2">Proceso de Corrección</th>
</tr>
<tr>
<td>

##### Revisión de los ficheros afectados:
- Se identificaron los archivos `api/users/[id].js` y `api/users/index.js` como problemáticos según los logs del linter.

</td>
<td>

##### Actualización de las comillas:
- Se sustituyeron todas las comillas simples por comillas dobles en los ficheros mencionados.

</td>
</tr>
</table>

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

<table>
<tr>
<th>Resultado del Linter</th>
<th>Evidencias</th>
</tr>
<tr>
<td>

✨ El linter se ejecuta sin ningún error ni warning.

</td>
<td>
<table>
<tr>
<td>

**Modificación:**
![Error inicial](/img/1.png)

</td>
<td>

**.yml compilado:**
![Compilado](/img/2.png)

</td>
</tr>
</table>
</td>
</tr>
</table>

---

## 🧪 Documentación de Cypress

<table>
<tr>
<th>⚙️ Configuración yml</th>
<th>🔄 Proceso de validación</th>
<th>📈 Resultados</th>
</tr>
<tr>
<td>
<div style="display: flex; gap: 20px;">

![yml](/img/6.png)
![yml](/img/5.png)

</div>
</td>
<td>

Los cambios se verifican mediante commit en https://github.com/JavierTomasTormo/nodejs-blog-practica/actions/

**Estado de GitHub Actions:**
![Cypress Job](/img/3.png)

</td>
<td>

**Tests de Cypress:**
![Resultados Tests](/img/4.png)

</td>
</tr>
</table>

---

## 🏆 Documentación de Badge

<table>
<tr>
<th>⚙️ Configuración yml</th>
<th>🔄 Proceso y Resultados</th>
</tr>
<tr>
<td>

![yml](/img/8.png)

</td>
<td>
<table>
<tr>
<td>

**Estado de GitHub Actions:**
![Badge Job](/img/7.png)

</td>
<td>

**Resultados de Cypress:**
![Resultados Tests](/img/9.png)

</td>
</tr>
</table>
</td>
</tr>
</table>

---

## 🏆 Documentación de Deploy

<table>
<tr>
<th>⚙️ Configuración yml</th>
<th>🔄 Proceso y Resultados</th>
</tr>
<tr>
<td>

![yml](/img/10.png)

</td>
<td>
<table>
<tr>
<td>

**Estado de GitHub Actions:**
![Deploy Job](/img/11.png)

</td>
<td>

**Resultados del Deploy:**
![Resultados Tests](/img/12.png)

</td>
</tr>
</table>
</td>
</tr>
</table>

---

## 🏆 Documentación de Notifications

<table>
<tr>
<th>⚙️ Configuración yml</th>
<th>🔄 Proceso y Resultados</th>
</tr>
<tr>
<td>

![yml](/img/13.png)

</td>
<td>
<table>
<tr>
<td>

**Estado de GitHub Actions:**
![Notification Job](/img/14.png)

</td>
<td>

**Resultados del Deploy:**
![Resultados Tests](/img/15.png)

</td>
</tr>
</table>
</td>
</tr>
</table>

## Metricas

![GitHub Metrics](./github-metrics.svg)


![Cypress Tests](https://img.shields.io/badge/test-success-green)

RESULTAT DELS ÚLTIMS TESTS
![Cypress Tests](https://img.shields.io/badge/test-failure-red)