<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/hero-en-dark.svg?v=4">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero-en-light.svg?v=4">
    <img src="assets/hero-en-light.svg?v=4" alt="SMOUJ — independent software" width="100%">
  </picture>
</p>

<p align="center">
  <a href="https://github.com/smouj"><img src="https://img.shields.io/badge/GitHub-smouj-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"></a>&nbsp;
  <a href="https://huggingface.co/Smouj013"><img src="https://img.shields.io/badge/Hugging%20Face-Smouj013-FFD21E?style=flat-square&logo=huggingface&logoColor=black" alt="Hugging Face"></a>&nbsp;
  <a href="https://bsky.app/profile/smouj013.bsky.social"><img src="https://img.shields.io/badge/Bluesky-%40smouj013-0085FF?style=flat-square&logo=bluesky&logoColor=white" alt="Bluesky"></a>&nbsp;
  <a href="https://discord.gg/BVWXWY5eUT"><img src="https://img.shields.io/badge/Discord-Smouj013-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord"></a>&nbsp;
  <a href="https://www.paypal.com/ncp/payment/XUY7RB9X2JE2G"><img src="https://img.shields.io/badge/PayPal-Donate-00457C?style=flat-square&logo=paypal&logoColor=white" alt="PayPal"></a>&nbsp;
  <a href="README.es.md"><img src="https://img.shields.io/badge/Espa%C3%B1ol-README-6E7681?style=flat-square" alt="Español"></a>
</p>

## / Profile

I build tools for the computer on the desk: local AI runtimes, Windows utilities, developer tools and small games.

Most of my work starts from the same constraint — it has to work offline, on hardware people already own, without a server in the critical path.

> **Currently** — Shipping **Holgura**, the **Adobado Kit** and **Latido**; researching game systems in Godot.

## / Selected systems

<sub>Seven groups, thirty-seven projects. Local execution is the common thread.</sub>

### / Local AI

<sub>Inference and agent plumbing that runs on the machine, not in a datacentre.</sub>

| | App | What it is | Stars |
|:--:|:--|:--|:--:|
| <img src="assets/icons/kimari.svg" width="22" height="22" alt=""> | **[Kimari](https://github.com/smouj/kimari-local-ai)**<br><sub>Local inference</sub> | Local LLM runtime for consumer GPUs with CUDA and an OpenAI-compatible API.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![CUDA](https://img.shields.io/badge/CUDA-76B900?style=flat-square&logo=nvidia&logoColor=white) ![GGUF](https://img.shields.io/badge/GGUF-4B5563?style=flat-square)</sub> | <a href="https://github.com/smouj/kimari-local-ai/stargazers"><img src="https://img.shields.io/github/stars/smouj/kimari-local-ai?style=flat-square&label=%E2%98%85&color=6E7681" alt="9 stars"></a> |
| <img src="assets/icons/aicode.svg" width="22" height="22" alt=""> | **[AICodeStudio](https://github.com/smouj/AICodeStudio)**<br><sub>Developer IDE</sub> | AI-assisted IDE with local model routing and an OpenClaw bridge.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <a href="https://github.com/smouj/AICodeStudio/stargazers"><img src="https://img.shields.io/github/stars/smouj/AICodeStudio?style=flat-square&label=%E2%98%85&color=6E7681" alt="4 stars"></a> |
| <img src="assets/icons/agent-browser.svg" width="22" height="22" alt=""> | **[agent-browser](https://github.com/smouj/agent-browser)**<br><sub>Agent tooling</sub> | Browser runtime and REST API that gives agents navigation, vision and interaction.<br><sub>![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)</sub> | <a href="https://github.com/smouj/agent-browser/stargazers"><img src="https://img.shields.io/github/stars/smouj/agent-browser?style=flat-square&label=%E2%98%85&color=6E7681" alt="6 stars"></a> |

### / Windows desktop

<sub>Native utilities for the machine on the desk: monitoring, cleaning, capture and hardware panels.</sub>

| | App | What it is | Stars |
|:--:|:--|:--|:--:|
| <img src="assets/icons/holgura.svg" width="22" height="22" alt=""> | **[Holgura](https://github.com/smouj/holgura)**<br><sub>Storage hygiene</sub> | Windows and WSL cleaner that shows every file before deleting it. Dry run, safety gate, zero telemetry.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![WinUI 3](https://img.shields.io/badge/WinUI%203-0078D4?style=flat-square&logo=windows&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/sysglance.png" width="22" height="22" alt=""> | **[SysGlance](https://github.com/smouj/sysglance)**<br><sub>System monitoring</sub> | Semi-transparent desktop overlay for real-time CPU, GPU, disk and network monitoring.<br><sub>![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)</sub> | <a href="https://github.com/smouj/sysglance/stargazers"><img src="https://img.shields.io/github/stars/smouj/sysglance?style=flat-square&label=%E2%98%85&color=6E7681" alt="1 stars"></a> |
| <img src="assets/icons/openclaw-widget.svg" width="22" height="22" alt=""> | **[OpenClaw Widget](https://github.com/smouj/openclaw-desktop-widget)**<br><sub>Desktop widget</sub> | Frameless, translucent widget with system health and the OpenClaw control panel.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/lcdglance.svg" width="22" height="22" alt=""> | **[LCDGlance](https://github.com/smouj/lcdglance)**<br><sub>Hardware panel</sub> | Monitoring pages and animated mascots for the Logitech G510 LCD, from native code.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/games-lcd.svg" width="22" height="22" alt=""> | **[Games LCD](https://github.com/smouj/games-lcd)**<br><sub>Hardware panel</sub> | Game-focused panel for the G510 LCD: Heroes of Might and Magic state at a glance.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/classicvoice.svg" width="22" height="22" alt=""> | **[ClassicVoice](https://github.com/smouj/classicvoice)**<br><sub>Speech</sub> | Offline multilingual text-to-speech for Windows built on eSpeak NG voices.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/olden-era.svg" width="22" height="22" alt=""> | **[Olden Era Overlay](https://github.com/smouj/olden-era-draft-overlay)**<br><sub>Game companion</sub> | Contextual local assistant for Heroes of Might and Magic: Olden Era.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/voryda-rec.png" width="22" height="22" alt=""> | **[Voryda Suite](https://github.com/smouj/voryda-rec)**<br><sub>Media suite</sub> | Four native Windows utilities for capture, recording, downloading and editing.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![WinUI 3](https://img.shields.io/badge/WinUI%203-0078D4?style=flat-square&logo=windows&logoColor=white) [Rec](https://github.com/smouj/voryda-rec) [Snap](https://github.com/smouj/voryda-snap) [Down](https://github.com/smouj/voryda-down) [Cut](https://github.com/smouj/voryda-cut)</sub> | <sub>—</sub> |

### / Adobado Kit

<sub>An open-source creative suite built from focused local editors. Rust core, no subscription, no upload.</sub>

| | App | What it is | Stars |
|:--:|:--|:--|:--:|
| <img src="assets/icons/adobado-kit.svg" width="22" height="22" alt=""> | **[Adobado Kit](https://github.com/smouj/Adobado_Kit)**<br><sub>Creative suite</sub> | Umbrella project: local creative tools derived from open-source editors, sharing one philosophy.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/adobado-design.png" width="22" height="22" alt=""> | **[DesignAdobado](https://github.com/smouj/DesignAdobado)**<br><sub>Design</sub> | Local layout and composition, derived from DesignCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/adobado-photo.png" width="22" height="22" alt=""> | **[PhotoAdobado](https://github.com/smouj/PhotoAdobado)**<br><sub>Photo</sub> | Local image editor, derived from PhotoCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/adobado-art.png" width="22" height="22" alt=""> | **[ArtAdobado](https://github.com/smouj/ArtAdobado)**<br><sub>Vector</sub> | Local vector art, derived from VectorCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/adobado-light.png" width="22" height="22" alt=""> | **[LightAdobado](https://github.com/smouj/LightAdobado)**<br><sub>Photo workflow</sub> | Local developing and colour work, derived from LightCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/adobado-effect.png" width="22" height="22" alt=""> | **[EffectAdobado](https://github.com/smouj/EffectAdobado)**<br><sub>Motion</sub> | Local visual effects, derived from EffectCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/adobado-film.png" width="22" height="22" alt=""> | **[FilmAdobado](https://github.com/smouj/FilmAdobado)**<br><sub>Video</sub> | Local video editing, derived from FilmCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/adobado-sound.png" width="22" height="22" alt=""> | **[SoundAdobado](https://github.com/smouj/SoundAdobado)**<br><sub>Audio</sub> | Local audio editing, derived from SoundCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/adobado-pdf.png" width="22" height="22" alt=""> | **[PdfAdobado](https://github.com/smouj/PdfAdobado)**<br><sub>Documents</sub> | Local PDF work, derived from PdfCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <sub>—</sub> |

### / Reading and data

<sub>Tools that read the world without shipping it to someone else.</sub>

| | App | What it is | Stars |
|:--:|:--|:--|:--:|
| <img src="assets/icons/latido.svg" width="22" height="22" alt=""> | **[Latido](https://github.com/smouj/latido)**<br><sub>Information</sub> | Local-first reader for Bluesky, HN, Reddit, Mastodon, RSS and GitHub.<br><sub>![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Tauri](https://img.shields.io/badge/Tauri-24C8DB?style=flat-square&logo=tauri&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/devicelab.svg" width="22" height="22" alt=""> | **[DeviceLab](https://github.com/smouj/devicelab)**<br><sub>Device tooling</sub> | Local-first dashboard for emulators and physical Android devices.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/xlsx.svg" width="22" height="22" alt=""> | **[XLSX Viewer](https://github.com/smouj/xlsx-viewer)**<br><sub>Documents</sub> | Local Excel viewer for Windows: no upload, no account, no macros.<br><sub>![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/mundial-tv.svg" width="22" height="22" alt=""> | **[Mundial TV](https://github.com/smouj/mundial-tv)**<br><sub>Media</sub> | Desktop player for live television channels from around the world.<br><sub>![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)</sub> | <a href="https://github.com/smouj/mundial-tv/stargazers"><img src="https://img.shields.io/github/stars/smouj/mundial-tv?style=flat-square&label=%E2%98%85&color=6E7681" alt="1 stars"></a> |

### / Developer tools

<sub>Everything here assumes an agent will read the source as often as a human does.</sub>

| | App | What it is | Stars |
|:--:|:--|:--|:--:|
| <img src="assets/icons/nudo.png" width="22" height="22" alt=""> | **[NUDO](https://github.com/smouj/nudo)**<br><sub>Languages</sub> | A language for humans and agents to read, write and verify the same source.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/skill-genesis.svg" width="22" height="22" alt=""> | **[Skill Genesis](https://github.com/smouj/skill-genesis)**<br><sub>Agent tooling</sub> | Autonomous generator of OpenClaw skills from a described capability.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <a href="https://github.com/smouj/skill-genesis/stargazers"><img src="https://img.shields.io/github/stars/smouj/skill-genesis?style=flat-square&label=%E2%98%85&color=6E7681" alt="1 stars"></a> |
| <img src="assets/icons/prompt-organizer.svg" width="22" height="22" alt=""> | **[Prompt Organizer](https://github.com/smouj/prompt-organizer)**<br><sub>Workflow</sub> | Visual tool to organise prompts, audits, bugs and backlog in one place.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/openclaw-desk.svg" width="22" height="22" alt=""> | **[ClawDesk](https://github.com/smouj/openclaw-desk)**<br><sub>Operations</sub> | Local web panel to manage agents, sessions and gateway state.<br><sub>![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)</sub> | <a href="https://github.com/smouj/openclaw-desk/stargazers"><img src="https://img.shields.io/github/stars/smouj/openclaw-desk?style=flat-square&label=%E2%98%85&color=6E7681" alt="1 stars"></a> |

### / Games and research

<sub>Small games, ROM tooling and engines built to be taken apart.</sub>

| | App | What it is | Stars |
|:--:|:--|:--|:--:|
| <img src="assets/icons/project-infest.svg" width="22" height="22" alt=""> | **[PROJECT INFEST](https://github.com/smouj/project-infest)**<br><sub>Game in development</sub> | Co-op extermination FPS with household chores under pressure. Godot, GDScript.<br><sub>![Godot](https://img.shields.io/badge/Godot-478CBF?style=flat-square&logo=godotengine&logoColor=white) ![GDScript](https://img.shields.io/badge/GDScript-478CBF?style=flat-square&logo=godotengine&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/romulous.svg" width="22" height="22" alt=""> | **[Romulous](https://github.com/smouj/romulous)**<br><sub>ROM research</sub> | Game Boy Color ROM unraveler: extract every byte and understand it.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/ferronest.svg" width="22" height="22" alt=""> | **[FerroNest](https://github.com/smouj/FerroNest)**<br><sub>Simulation</sub> | Strategic ant colony management where you design the rules, not the orders.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/tagworld.svg" width="22" height="22" alt=""> | **[TAGWORLD](https://github.com/smouj/tagworld)**<br><sub>Location game</sub> | Virtual graffiti game laid over a real-world map.<br><sub>![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/royal-pixel.svg" width="22" height="22" alt=""> | **[Royal Pixel Game](https://github.com/smouj/royal-pixel-game)**<br><sub>Persistent world</sub> | Persistent, community-built pixel world.<br><sub>![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/shatter.svg" width="22" height="22" alt=""> | **[Shatter Protocol](https://github.com/smouj/shatter-protocol)**<br><sub>Roguelike</sub> | Tactical roguelike RPG breakout.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/dbzlsw.svg" width="22" height="22" alt=""> | **[DBZ LSW Fangame](https://github.com/smouj/dbzlsw-fangame)**<br><sub>ROM game</sub> | Fan game and research built on Dragon Ball Z: Legendary Super Warriors.<br><sub>![Godot](https://img.shields.io/badge/Godot-478CBF?style=flat-square&logo=godotengine&logoColor=white)</sub> | <sub>—</sub> |

### / Kits and SDKs

<sub>Reusable cores extracted from the games, packaged for other people to build on.</sub>

| | App | What it is | Stars |
|:--:|:--|:--|:--:|
| <img src="assets/icons/dbz-sdk.svg" width="22" height="22" alt=""> | **[DBZ LSW Modding SDK](https://github.com/smouj/dbz-lsw-modding-sdk)**<br><sub>Modding SDK</sub> | ROM-first modding SDK: parse, edit and recompile without losing a single byte.<br><sub>![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)</sub> | <sub>—</sub> |
| <img src="assets/icons/ttg.svg" width="22" height="22" alt=""> | **[Trading Tazos Game](https://github.com/smouj/TTG-Engine)**<br><sub>Game platform</sub> | Full-stack game platform: 3D client, authoritative server, PvP, chat and docs.<br><sub>![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) [Engine](https://github.com/smouj/TTG-Engine) [Backend](https://github.com/smouj/TTG-Backend) [PvP](https://github.com/smouj/TTG-PvP) [Chat](https://github.com/smouj/TTG-Chat) [Web](https://github.com/smouj/TTG-Webpage) [Docs](https://github.com/smouj/TTG-Docs)</sub> | <sub>—</sub> |

## / Practice

| Principle | In practice |
|:--|:--|
| **Measure before rewriting** | Profile the real thing first. Then change the smallest piece that explains the problem. |
| **Offline is a feature** | If a tool needs a server to be useful, it is a different product. |
| **Demos are demos** | Experimental work is labeled. Releases are tested, versioned and reversible. |

## / Toolchain

**Languages**  
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white) ![GDScript](https://img.shields.io/badge/GDScript-478CBF?style=flat-square&logo=godotengine&logoColor=white)

**Runtime**  
![llama.cpp](https://img.shields.io/badge/llama.cpp-1F242B?style=flat-square) ![CUDA](https://img.shields.io/badge/CUDA-76B900?style=flat-square&logo=nvidia&logoColor=white) ![GGUF](https://img.shields.io/badge/GGUF-4B5563?style=flat-square) ![Ollama](https://img.shields.io/badge/Ollama-111827?style=flat-square&logo=ollama&logoColor=white)

**Interface**  
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Tauri](https://img.shields.io/badge/Tauri-24C8DB?style=flat-square&logo=tauri&logoColor=white) ![WinUI 3](https://img.shields.io/badge/WinUI%203-0078D4?style=flat-square&logo=windows&logoColor=white) ![Godot](https://img.shields.io/badge/Godot-478CBF?style=flat-square&logo=godotengine&logoColor=white)

**Infrastructure**  
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)

## / Elsewhere

| Channel | Where |
|:--|:--|
| **Code** | [github.com/smouj](https://github.com/smouj) |
| **Models** | [huggingface.co/Smouj013](https://huggingface.co/Smouj013) |
| **Notes** | [@smouj013](https://bsky.app/profile/smouj013.bsky.social) |
| **Community** | [Discord](https://discord.gg/BVWXWY5eUT) |

<sub>Also on <a href="https://www.threads.com/@smouj.013">Threads</a>, <a href="https://www.instagram.com/smouj.013/">Instagram</a> and <a href="https://www.reddit.com/user/SnooMarzipans9093">Reddit</a>. [Support the work](https://www.paypal.com/ncp/payment/XUY7RB9X2JE2G)</sub>

---

<p align="center"><sub>SMOUJ / 013 — independent software</sub></p>
