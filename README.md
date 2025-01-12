# 🛠️ Documentación del Proyecto

## 📝 Corrección del Error (Linter)

### 🔍 Corrección del problema con las comillas en [id].js y index.js

#### ❗ Problema detectado:
El linter detectó un error porque en los archivos `api/users/[id].js` y `api/users/index.js` se estaban utilizando comillas simples (') en lugar de comillas dobles ("). El proyecto está configurado para que el linter reconozca comillas dobles.

#### ✅ Solución aplicada:

##### Revisión de los ficheros afectados:
- Se identificaron los archivos `api/users/[id].js` y `api/users/index.js` como problemáticos según los logs del linter.

##### Actualización de las comillas:
- Se sustituyeron todas las comillas simples por comillas dobles en los ficheros mencionados.

#### 📄 Ejemplos:

**Antes de la corrección:**
```sh	
// api/users/[id].js 
// api/users/index.js
    case 'GET':
      return getUserById();
```

**Después de la corrección:**

```sh
// api/users/[id].js
// api/users/index.js
    case "GET":
      return getUserById();
```

#### 🚀 Validación:
```sh
npm run lint
```

#### 📊 Resultado:
✨ El linter se ejecuta sin ningún error ni warning.

#### 📸 Evidencias:
Error inicial
![Error inicial](/img/1.png){width=80%}

.yml compilado
![Compilado](/img/2.png){width=80%}

---

## 🧪 Documentación de Cypress

### ⚙️ Añadido a Configuración yml:
Configuración yml
![yml](/img/6.png){width=80%}

Configuración yml adicional
![yml](/img/5.png){width=80%}

### 🔄 Proceso de validación:
Los cambios se verifican mediante commit en https://github.com/JavierTomasTormo/nodejs-blog-practica/actions/

Estado de GitHub Actions
![Cypress Job](/img/3.png){width=80%}

### 📈 Resultados:
Tests de Cypress
![Resultados Tests](/img/4.png){width=80%}

---

## 🏆 Documentación de Badge

### ⚙️ Configuración yml:
Configuración Badge
![yml](/img/8.png){width=80%}

### 🔄 Proceso de validación:
Los cambios se verifican mediante commit en https://github.com/JavierTomasTormo/nodejs-blog-practica/actions/

Estado de GitHub Actions
![Badge Job](/img/7.png){width=80%}

### 📊 Resultados:
Resultados de Cypress
![Resultados Tests](/img/9.png){width=80%}

---

## 🏆 Documentación de Deploy

### ⚙️ Configuración yml:
Configuración Deploy
![yml](/img/10.png){width=80%}

### 🔄 Proceso de validación:
Los cambios se verifican mediante commit en https://github.com/JavierTomasTormo/nodejs-blog-practica/actions/

Estado de GitHub Actions
![Deploy Job](/img/11.png){width=80%}

### 📊 Resultados:
Resultados del Deploy
![Resultados Tests](/img/12.png){width=80%}

## 🏆 Documentación de Notifications

### ⚙️ Configuración yml:
Configuración Notifications
![yml](/img/13.png){width=80%}

### 🔄 Proceso de validación:
Los cambios se verifican mediante commit en https://github.com/JavierTomasTormo/nodejs-blog-practica/actions/

Estado de GitHub Actions
![Notification Job](/img/14.png){width=80%}

### 📊 Resultados:
Resultados del Deploy
![Resultados Tests](/img/.png){width=80%}

## Metricas

Métricas de GitHub
![GitHub Metrics](./github-metrics.svg){width=80%}


![Cypress Tests](https://img.shields.io/badge/test-success-green)


![Cypress Tests](https://img.shields.io/badge/test-failure-red)

RESULTAT DELS ÚLTIMS TESTS
![Cypress Tests](https://img.shields.io/badge/test-failure-red)