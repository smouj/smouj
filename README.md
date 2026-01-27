# Clawdbot Gateway Manager (Dashboard Clawdbot)

> **Aplicación de escritorio (Electron)** que funciona como centro de mando para **Clawdbot Gateway**: controla el estado del gateway, revisa logs, ajusta configuración y abre el panel web (`http://127.0.0.1:18789/`).

---

<img width="1440" height="3557" alt="dashboard-clawdbot" src="https://github.com/user-attachments/assets/f4ea3000-f1ed-49e9-8e89-bbaa0bd2a383" />

---

## 📚 Tabla de contenidos

- [Visión general](#-visión-general)
- [Características principales](#-características-principales)
- [Arquitectura rápida](#-arquitectura-rápida)
- [Requisitos](#-requisitos)
- [Instalación para usuarios finales](#-instalación-para-usuarios-finales)
- [Instalación para desarrolladores](#-instalación-para-desarrolladores)
- [Comandos útiles](#-comandos-útiles)
- [Actualización del repositorio](#-actualización-del-repositorio)
- [Generar build / instalador](#-generar-build--instalador)
- [Configuración](#-configuración)
- [Solución de problemas](#-solución-de-problemas)
- [Seguridad](#-seguridad)
- [Licencia](#-licencia)

---

## 🧭 Visión general

Clawdbot Gateway Manager es una **app de escritorio multiplataforma** (Windows, macOS, Linux) que **no reemplaza** a Clawdbot, sino que lo **orquesta y supervisa**. La app se encarga de:

1) Ejecutar comandos de Clawdbot (localmente o a través de WSL).  
2) Leer/escribir la configuración del Gateway.  
3) Mostrar estado, métricas y logs de forma centralizada.  

---

## ✅ Características principales

- **Control del gateway**: iniciar, detener y reiniciar.
- **Logs en vivo** con filtros/exportación.
- **Editor de configuración JSON** con validación.
- **Monitor de CPU/memoria** (con fallback si `ps` no existe).
- **Apertura del dashboard del gateway** en ventana integrada o navegador.
- **Terminal integrada** (WSL en Windows).

---

## 🧩 Arquitectura rápida

- **Clawdbot Gateway** corre en tu sistema (o en WSL si estás en Windows).
- **Dashboard Clawdbot** (esta app) se conecta al gateway y lo administra.
- **Interfaz web del gateway** disponible en `http://127.0.0.1:18789/`.

---

## 📦 Requisitos

### Usuario final (Windows recomendado)
- Windows 10/11.
- WSL instalado (opcional, recomendado si Clawdbot corre en Linux/WSL).

### Desarrollador
- **Node.js v18+** (v22 recomendado).
- **pnpm** (o npm, aunque pnpm es recomendado).
- **Git**.
- **Clawdbot CLI** instalado (en WSL o local, según tu entorno).

---

## 🧑‍💻 Instalación para usuarios finales

### ✅ Opción 1 — Instalador (Setup .exe)
1. Ve a **Releases**.
2. Descarga el instalador correcto para tu arquitectura:
   - **64 bits (x64)**: `Clawdbot Dashboard Setup X.Y.Z-x64.exe`
   - **32 bits (ia32)**: `Clawdbot Dashboard Setup X.Y.Z-ia32.exe`
3. Ejecuta el instalador.

> Si descargas el instalador equivocado, Windows mostrará el mensaje  
> “No se puede ejecutar esta aplicación en el equipo”.

> En releases recientes también verás archivos como `latest.yml` y `.blockmap`.  
> **Como usuario final**, normalmente solo necesitas el **Setup .exe**.

### ✅ Opción 2 — Portable/ZIP (si existe)
1. Descarga el ZIP portable.
2. Descomprime.
3. Ejecuta la app.

---

## 🛠️ Instalación para desarrolladores

### 1) Clonar el repositorio

```bash
git clone https://github.com/Ojete-Blog/dashboard-clawdbot.git
cd dashboard-clawdbot
```

### 2) Instalar dependencias

```bash
pnpm install
```

> También puedes usar `npm install`, pero el repo está optimizado para `pnpm`.

### 3) Ejecutar en modo desarrollo

```bash
pnpm start
```

### 4) Depurar (modo dev)

```bash
pnpm run dev
```

---

## ⚡ Comandos útiles

> Ejecuta estos comandos **desde la raíz del repositorio**.

| Tarea | Comando |
|------|---------|
| Instalar dependencias | `pnpm install` |
| Modo desarrollo | `pnpm start` |
| Modo dev (Electron) | `pnpm run dev` |
| Build (instalador) | `pnpm build` |
| Ver scripts disponibles | `pnpm run` |

---

## 🔄 Actualización del repositorio

### ✅ Si clonaste con Git (recomendado)

```bash
git status
git pull
pnpm install
```

Si tienes cambios locales que bloquean el pull:

```bash
git stash -u
git pull
pnpm install
```

Para recuperar cambios:

```bash
git stash pop
```

### ⚠️ Si descargaste como ZIP (sin `.git`)

- No puedes hacer `git pull`.
- Recomendación: **clonar nuevamente** el repo con Git.

---

## 🏗️ Generar build / instalador

```bash
pnpm build
```

### Salidas generadas

- **Windows:** `dist/setup/` (instalador `.exe`)
- **Linux:** `.deb` y `AppImage`
- **macOS:** `.dmg`

---

## ⚙️ Configuración

### 1) Configuración del Gateway (Clawdbot)

Ruta típica en Linux/WSL:

```bash
~/.clawdbot/clawdbot.json
```

> En Windows puedes acceder a WSL con:  
> `\\wsl$\<TuDistro>\home\<TuUsuario>\...`

### 2) Configuración de la app

Archivo principal:

```text
config.json
```

Valores destacados (ejemplo):

```json
{
  "gatewayPort": 18789,
  "gatewayHost": "127.0.0.1",
  "useWslConfig": true,
  "wslDistro": "Ubuntu-24.04",
  "selectedProfile": "default"
}
```

### 3) Variables de entorno soportadas

```text
CLAWDBOT_GATEWAY_PORT=18789
CLAWDBOT_GATEWAY_HOST=127.0.0.1
CLAWDBOT_CONFIG_PATH=/ruta/a/clawdbot.json
CLAWDBOT_APP_ICON=C:\ruta\a\icono.ico
```

---

## 🧯 Solución de problemas

### ❌ No abre `http://127.0.0.1:18789/`

En WSL:

```bash
clawdbot gateway status
```

Si no está corriendo:

```bash
clawdbot gateway restart
```

---

### ❌ “clawdbot no se reconoce…”

- Si Clawdbot está en WSL, asegúrate de que la app esté configurada en modo WSL/bridge.
- Verifica en WSL:

```bash
which clawdbot
clawdbot status
```

---

### ❌ Rebuild roto después de actualizar Node o dependencias

En PowerShell (Windows):

```powershell
rd /s /q node_modules
del pnpm-lock.yaml
pnpm store prune
pnpm install
pnpm build
```

---

## 🔐 Seguridad

- Mantén el gateway en **localhost** siempre que sea posible.
- Si necesitas acceso remoto, usa un túnel privado (por ejemplo **Tailscale**) en lugar de abrir puertos públicos.

---

## 📄 Licencia

MIT

---

## 🔗 Repositorio oficial

https://github.com/Ojete-Blog/dashboard-clawdbot
