# Documentació de la correcció de l'error (Punt 2)

## Correcció del problema amb les cometes en [id].js i index.js

### Problema detectat:
El linter va detectar un error perquè en els arxius `api/users/[id].js` i `api/users/index.js` s'estaven utilitzant cometes simples (') en lloc de cometes dobles ("). El projecte està configurat perquè el linter reconega cometes dobles.

### Solució aplicada:

#### Revisió dels fitxers afectats:
- Es van identificar els arxius `api/users/[id].js` i `api/users/index.js` com a problemàtics segons els logs del linter.

#### Actualització de les cometes simples a cometes dobles:
- Es van substituir totes les cometes simples per cometes dobles en els fitxers esmentats.

### Exemple abans de la correcció:
// api/users/[id].js
// api/users/index.js
    case 'GET':
      return getUserById();

### Exemple després de la correcció:
// api/users/[id].js
// api/users/index.js
    case "GET":
      return getUserById();

### Comando utilitzat per validar els canvis:

npm run lint

### Resultat del npm run lint:
El linter s'executa sense cap error ni warning.

### Captures de pantalla dels passos:
- Modificació: ![Error inicial](/img/1.png)
- .yml compliat: ![Compilat](/img/2.png)
