# Calculadora · Proporción Sal

PWA para calcular la cantidad exacta de sal a añadir a cada bebida según el método David Huarte (Academia Unani).

## Funcionalidades

- **Proporción actual** — slider de 1 a 15 g/L en pasos de 0.25, con proyección semanal
- **Suero variable** — introduce la concentración de tu suero y el cálculo corrige el volumen real
- **Mis bebidas** — perfil guardado de bebidas habituales con sal exacta por toma
- **Cálculo inverso** — dado un líquido con X gramos, calcula la proporción con y sin suero

## URL

```
https://JavierNodoSedna.github.io/Paso-a-paso-Unani
```

## Instalar como app

### iPhone (Safari)
1. Abre la URL en Safari
2. Botón compartir → **"Añadir a pantalla de inicio"**

### Android (Chrome)
1. Abre la URL en Chrome
2. Menú → **"Añadir a pantalla de inicio"**

## Estructura del repo

```
index.html       ← app completa
manifest.json    ← configuración PWA
sw.js            ← service worker (funciona offline)
icons/
  icon-192.png
  icon-512.png
```

## Datos

Todo se guarda en `localStorage` del navegador. Sin servidores, sin cuentas.
