<div align="center">

<br/>

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ███████╗███╗   ██╗ ██████╗ ███████╗████████╗              ║
║   ██╔════╝████╗  ██║██╔═══██╗██╔════╝╚══██╔══╝              ║
║   ███████╗██╔██╗ ██║██║   ██║███████╗   ██║                 ║
║   ╚════██║██║╚██╗██║██║   ██║╚════██║   ██║                 ║
║   ███████║██║ ╚████║╚██████╔╝███████║   ██║                 ║
║   ╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝   ╚═╝                 ║
║                                                              ║
║   Full-Stack Developer · Arquitecto de Sistemas IA           ║
║   IA local-first en GPUs de consumo                          ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

<a href="https://x.com/smouj013"><img src="https://img.shields.io/badge/@smouj013-000?style=flat-square&logo=x&logoColor=white" alt="X"></a>
<a href="https://github.com/smouj"><img src="https://img.shields.io/badge/GitHub-smouj-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"></a>
<a href="https://discord.gg/zQKjRzczTS"><img src="https://img.shields.io/badge/Discord-RPGCLAW-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord"></a>
&nbsp;
<a href="./README.md"><img src="https://img.shields.io/badge/READ_IN-ENGLISH-1f6feb?style=flat-square" alt="English"></a>

<br/><br/>

</div>

---

## Qué construyo

Diseño **sistemas de IA local-first** que corren completamente en hardware de consumo — sin suscripciones cloud, sin fugas de datos, sin vendor lock-in. Mi stack va desde entrenar adaptadores LLM personalizados en una GTX 1060 hasta desplegar juegos multiplayer full-stack con agentes IA en tiempo real.

Tres focos actuales:
- **🧠 IA Local** — Entrenar, evaluar y servir LLMs personalizados en GPUs gaming
- **🎮 Desarrollo de Juegos** — Multiplayer en tiempo real con 3D (Three.js) y canvas pixel art
- **🤖 Orquestación de Agentes** — Coordinar agentes IA autónomos para workflows reales

---

## Proyectos Activos

<table>
<tr>
<td width="50%">

### 🦁 [Kimari Local AI](https://github.com/smouj/kimari-local-ai)
**Entrenamiento y serving de LLMs en GPUs de consumo**

Ejecuta modelos de lenguaje potentes en GTX 1060/1080. Sin cloud. Construido sobre llama.cpp + CUDA con adaptadores SFT personalizados, pipelines de evaluación privados y un Gateway Dashboard en tiempo real.

`Python` `llama.cpp` `CUDA` `Next.js` `HuggingFace`

⭐ 5 · 🧪 Alpha (gate BLOCKED)

</td>
<td width="50%">

### ⚔️ [MedaClaw Arena](https://github.com/smouj/medaclaw-arena)
**Juego de combate táctico con robots modulares**

Arena en estilo retro cel-shading con medallones MedaCore conscientes, 28 efectos de sonido CC0, sistema de audio, misiones diarias, ladder seasonal y OAuth (Discord + GitHub).

`TypeScript` `Next.js` `Three.js` `Prisma` `PM2`

🎮 Activo en [medaclawarena.com](https://medaclawarena.com)

</td>
</tr>
<tr>
<td width="50%">

### 🧱 [Royal Pixel Game (RPGCLAW)](https://github.com/smouj/royal-pixel-game)
**Canvas colaborativo de píxeles en tiempo real**

Coloca píxeles en un canvas mundial compartido. Backend WebSocket multiplayer, despliegue Docker, proxy inverso Caddy, analytics autoalojado (Plausible).

`JavaScript` `Node.js` `MongoDB` `Docker` `Caddy`

🎮 Activo en [rpgclaw.com](https://rpgclaw.com)

</td>
<td width="50%">

### 🛡️ [CAPTCHA Shield](https://github.com/smouj/captcha-shield)
**Sistema CAPTCHA avanzado anti-bot/IA**

14 señales de comportamiento, 7 tipos de reto, verificación QR móvil. 100% client-side, sin servidor necesario.

`TypeScript` `React`

⭐ 4

</td>
</tr>
<tr>
<td width="50%">

### 🧬 [MythosForge](https://github.com/smouj/MythosForge)
**Investigación en Transformers de profundidad recurrente**

Inferencia loopeada LTI-estable, atención MLA/GQA conmutable, routing MoE y halting adaptativo (ACT). Investigación independiente.

`Python` `PyTorch`

⭐ 1

</td>
<td width="50%">

### 🎬 [FlickClaw](https://github.com/smouj/FlickClaw)
**Generador de clips virales con subtítulos IA**

Genera clips virales automáticamente con subtítulos potenciados por IA. Compara precios, planes y características de 54+ herramientas de IA.

`Python` `Next.js`

</td>
</tr>
</table>

---

## Stack

```
Lenguajes    Python · TypeScript · JavaScript · SQL
IA/ML        PyTorch · llama.cpp · CUDA · HuggingFace · QLoRA · Ollama
Frontend     Next.js · React · Three.js · Tailwind CSS · shadcn/ui
Backend      Node.js · FastAPI · Express · MongoDB · PostgreSQL · Prisma
Infra        Docker · Caddy · PM2 · Linux · CUDA · WSL2
Agentes      OpenClaw · Orquestación de agentes personalizada · Workflows autónomos
GPU          NVIDIA GTX 1060 6GB (CUDA 6.1) — entrenamiento e inferencia en hardware de consumo
```

---

## Filosofía

| Principio | Práctica |
|:---|:---|
| **Local-first** | La IA corre en tu hardware, no en el cloud de otro |
| **Privacidad por defecto** | Sin telemetría, sin exfiltración de datos, sin API keys para uso local |
| **Open-source siempre** | Cada herramienta que publico es abierta. Fórkeala, aprende, mejórala |
| **Hardware de consumo** | Si no corre en una GTX 1060, la arquitectura es incorrecta |
| **Ship, no talk** | Productos funcionando sobre presentaciones pulidas |

---

## Infra que gestiono

```
VPS Producción (Linux)
├── rpgclaw.com         — Canvas de píxeles multiplayer
├── medaclawarena.com   — Juego de combate táctico
├── Plausible Analytics — Autoalojado, respeta la privacidad
└── FlickClaw           — Comparador de herramientas IA

Dev Local (WSL2 + GTX 1060)
├── Kimari Local AI     — Entrenamiento y serving de LLMs
├── Ollama (7 modelos)  — Runtime de inferencia local
├── OpenClaw Gateway    — Orquestación de agentes
└── llama.cpp + CUDA    — Inferencia acelerada por GPU
```

---

<div align="center">

**[Ver todos los repositorios →](https://github.com/smouj?tab=repositories)**

<br/>

<sub>Construido con cafeína, CUDA y convicción.</sub>

</div>
