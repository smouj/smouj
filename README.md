<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="assets/banner-light.png">
    <img src="assets/banner-light.png" alt="SMOUJ — independent software" width="100%">
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

## Profile

I build software for the computer on the desk: local AI runtimes, Windows utilities, developer tools and small games.

The constraint is always the same. It has to work offline, on hardware people already own, and it has to be inspectable rather than magic.

## Applications

<sub>Grouped by what they are for. Local execution is the common thread.</sub>

### Local AI

<sub>Inference and agent plumbing that runs on the machine, not in a datacentre.</sub>

| | App | What it is | Stars |
|:--:|:--|:--|:--:|
| <img src="assets/icons/kimari.png" width="26" height="26" alt=""> | **[Kimari](https://github.com/smouj/kimari-local-ai)**<br><sub>Local inference</sub> | Local LLM runtime for consumer GPUs with CUDA and an OpenAI-compatible API.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![CUDA](https://img.shields.io/badge/CUDA-76B900?style=flat-square&logo=nvidia&logoColor=white) ![GGUF](https://img.shields.io/badge/GGUF-4B5563?style=flat-square)</sub> | <a href="https://github.com/smouj/kimari-local-ai/stargazers"><img src="https://img.shields.io/github/stars/smouj/kimari-local-ai?style=flat-square&label=%E2%98%85&color=B5762E" alt="9 stars"></a> |
| <img src="assets/icons/aicode.png" width="26" height="26" alt=""> | **[AICodeStudio](https://github.com/smouj/AICodeStudio)**<br><sub>Developer IDE</sub> | AI-assisted IDE with local model routing and an OpenClaw bridge.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <a href="https://github.com/smouj/AICodeStudio/stargazers"><img src="https://img.shields.io/github/stars/smouj/AICodeStudio?style=flat-square&label=%E2%98%85&color=B5762E" alt="4 stars"></a> |
| <img src="assets/icons/agent-browser.png" width="26" height="26" alt=""> | **[agent-browser](https://github.com/smouj/agent-browser)**<br><sub>Agent tooling</sub> | Browser runtime and REST API that gives agents navigation, vision and interaction.<br><sub>![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)</sub> | <a href="https://github.com/smouj/agent-browser/stargazers"><img src="https://img.shields.io/github/stars/smouj/agent-browser?style=flat-square&label=%E2%98%85&color=B5762E" alt="6 stars"></a> |

### Windows desktop

<sub>Native utilities for the machine on the desk: monitoring, cleaning, capture and hardware panels.</sub>

| | App | What it is | Stars |
|:--:|:--|:--|:--:|
| <img src="assets/icons/holgura.svg" width="26" height="26" alt=""> | **[Holgura](https://github.com/smouj/holgura)**<br><sub>Storage hygiene</sub> | Windows and WSL cleaner that shows every file before deleting it. Dry run, safety gate, zero telemetry.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![WinUI 3](https://img.shields.io/badge/WinUI%203-0078D4?style=flat-square&logo=windows&logoColor=white)</sub> | <a href="https://github.com/smouj/holgura/stargazers"><img src="https://img.shields.io/github/stars/smouj/holgura?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/sysglance.png" width="26" height="26" alt=""> | **[SysGlance](https://github.com/smouj/sysglance)**<br><sub>System monitoring</sub> | Semi-transparent desktop overlay for real-time CPU, GPU, disk and network monitoring.<br><sub>![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)</sub> | <a href="https://github.com/smouj/sysglance/stargazers"><img src="https://img.shields.io/github/stars/smouj/sysglance?style=flat-square&label=%E2%98%85&color=B5762E" alt="1 star"></a> |
| <img src="assets/icons/openclaw-widget.png" width="26" height="26" alt=""> | **[OpenClaw Widget](https://github.com/smouj/openclaw-desktop-widget)**<br><sub>Desktop widget</sub> | Frameless, translucent widget with system health and the OpenClaw control panel.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white)</sub> | <a href="https://github.com/smouj/openclaw-desktop-widget/stargazers"><img src="https://img.shields.io/github/stars/smouj/openclaw-desktop-widget?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/lcdglance.svg" width="26" height="26" alt=""> | **[LCDGlance](https://github.com/smouj/lcdglance)**<br><sub>Hardware panel</sub> | Monitoring pages and animated mascots for the Logitech G510 LCD, from native code.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <a href="https://github.com/smouj/lcdglance/stargazers"><img src="https://img.shields.io/github/stars/smouj/lcdglance?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/classicvoice.png" width="26" height="26" alt=""> | **[ClassicVoice](https://github.com/smouj/classicvoice)**<br><sub>Speech</sub> | Offline multilingual text-to-speech for Windows built on eSpeak NG voices.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <a href="https://github.com/smouj/classicvoice/stargazers"><img src="https://img.shields.io/github/stars/smouj/classicvoice?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |

### TV and wearables

<sub>Local tools for Android TV and GloryFit-family smartwatches.</sub>

| | App | What it is | Stars |
|:--:|:--|:--|:--:|
| <img src="assets/icons/tervia.png" width="26" height="26" alt="Tervia icon"> | **[Tervia](https://github.com/smouj/tervia)**<br><sub>Android TV</sub> | Alpha Windows app for customizing Android TV home screens and discovering TVs on the local network.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white)</sub> | <a href="https://github.com/smouj/tervia/stargazers"><img src="https://img.shields.io/github/stars/smouj/tervia?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/my-dev-watch.png" width="26" height="26" alt="My Dev Watch icon"> | **[My Dev Watch](https://github.com/smouj/my-dev-watch)**<br><sub>Smartwatch companion</sub> | Local-first Android companion, watch-face studio and BLE lab for GloryFit-family smartwatches; early alpha.<br><sub>![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white) ![Android](https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=black)</sub> | <a href="https://github.com/smouj/my-dev-watch/stargazers"><img src="https://img.shields.io/github/stars/smouj/my-dev-watch?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |

### Voryda Suite

<sub>Four focused native Windows utilities under one visual identity.</sub>

| | App | What it is | Stars |
|:--:|:--|:--|:--:|
| <img src="https://raw.githubusercontent.com/smouj/smouj/main/assets/icons/voryda-rec.png?v=aa63e884a62d9e65f176825624dddf01a7e14ccf63a600452fbc89640b3cfee6" width="26" height="26" alt="Voryda Rec icon"> | **[Voryda Rec](https://github.com/smouj/voryda-rec)**<br><sub>Screen recording · alpha</sub> | Records a selected desktop region to H.264/MP4 using Windows Graphics Capture, DXGI and Media Foundation.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![WinForms](https://img.shields.io/badge/WinForms-5C2D91?style=flat-square)</sub> | <a href="https://github.com/smouj/voryda-rec/stargazers"><img src="https://img.shields.io/github/stars/smouj/voryda-rec?style=flat-square&label=%E2%98%85&color=8B949E" alt="GitHub stars for Voryda Rec"></a> |
| <img src="https://raw.githubusercontent.com/smouj/smouj/main/assets/icons/voryda-snap.png?v=e7158076109eeb15cc99427d45acea1df2a7448f3a02f824ce942681ba18fdce" width="26" height="26" alt="Voryda Snap icon"> | **[Voryda Snap](https://github.com/smouj/voryda-snap)**<br><sub>Screenshots</sub> | Captures a region, the primary display or a window; copies to the clipboard or saves PNG/JPEG.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![WinForms](https://img.shields.io/badge/WinForms-5C2D91?style=flat-square)</sub> | <a href="https://github.com/smouj/voryda-snap/stargazers"><img src="https://img.shields.io/github/stars/smouj/voryda-snap?style=flat-square&label=%E2%98%85&color=8B949E" alt="GitHub stars for Voryda Snap"></a> |
| <img src="https://raw.githubusercontent.com/smouj/smouj/main/assets/icons/voryda-down.png?v=4f13fad2ad34f1086d4275045e30e6ec832cca22d27448ff84ec0b835fb0a65f" width="26" height="26" alt="Voryda Down icon"> | **[Voryda Down](https://github.com/smouj/voryda-down)**<br><sub>Media downloads</sub> | A Windows frontend for yt-dlp, with FFmpeg for workflows that need merging or media processing.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![WinForms](https://img.shields.io/badge/WinForms-5C2D91?style=flat-square)</sub> | <a href="https://github.com/smouj/voryda-down/stargazers"><img src="https://img.shields.io/github/stars/smouj/voryda-down?style=flat-square&label=%E2%98%85&color=8B949E" alt="GitHub stars for Voryda Down"></a> |
| <img src="https://raw.githubusercontent.com/smouj/smouj/main/assets/icons/voryda-cut.png?v=b4a738683967ab6b81146dc1546db6ce7fe50ab27454b22cb48b94720bcb6c60" width="26" height="26" alt="Voryda Cut icon"> | **[Voryda Cut](https://github.com/smouj/voryda-cut)**<br><sub>Video editing · pre-alpha</sub> | An early WinUI 3 editor foundation; the editing UI and export workflow are still in development.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![WinUI 3](https://img.shields.io/badge/WinUI%203-0078D4?style=flat-square)</sub> | <a href="https://github.com/smouj/voryda-cut/stargazers"><img src="https://img.shields.io/github/stars/smouj/voryda-cut?style=flat-square&label=%E2%98%85&color=8B949E" alt="GitHub stars for Voryda Cut"></a> |

### Adobado Kit

<sub>An open-source creative suite built from focused local editors. Rust core, no subscription, no upload.</sub>

| | App | What it is | Stars |
|:--:|:--|:--|:--:|
| <img src="assets/icons/adobado-kit.png" width="26" height="26" alt=""> | **[Adobado Kit](https://github.com/smouj/Adobado_Kit)**<br><sub>Creative suite</sub> | Umbrella project: local creative tools derived from open-source editors, sharing one philosophy.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/Adobado_Kit/stargazers"><img src="https://img.shields.io/github/stars/smouj/Adobado_Kit?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-design.png" width="26" height="26" alt=""> | **[DesignAdobado](https://github.com/smouj/DesignAdobado)**<br><sub>Design</sub> | Local layout and composition, derived from DesignCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/DesignAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/DesignAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-photo.png" width="26" height="26" alt=""> | **[PhotoAdobado](https://github.com/smouj/PhotoAdobado)**<br><sub>Photo</sub> | Local image editor, derived from PhotoCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/PhotoAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/PhotoAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-art.png" width="26" height="26" alt=""> | **[ArtAdobado](https://github.com/smouj/ArtAdobado)**<br><sub>Vector</sub> | Local vector art, derived from VectorCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/ArtAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/ArtAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-light.png" width="26" height="26" alt=""> | **[LightAdobado](https://github.com/smouj/LightAdobado)**<br><sub>Photo workflow</sub> | Local developing and colour work, derived from LightCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/LightAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/LightAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-effect.png" width="26" height="26" alt=""> | **[EffectAdobado](https://github.com/smouj/EffectAdobado)**<br><sub>Motion</sub> | Local visual effects, derived from EffectCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/EffectAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/EffectAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-film.png" width="26" height="26" alt=""> | **[FilmAdobado](https://github.com/smouj/FilmAdobado)**<br><sub>Video</sub> | Local video editing, derived from FilmCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/FilmAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/FilmAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-sound.png" width="26" height="26" alt=""> | **[SoundAdobado](https://github.com/smouj/SoundAdobado)**<br><sub>Audio</sub> | Local audio editing, derived from SoundCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/SoundAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/SoundAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-pdf.png" width="26" height="26" alt=""> | **[PdfAdobado](https://github.com/smouj/PdfAdobado)**<br><sub>Documents</sub> | Local PDF work, derived from PdfCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/PdfAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/PdfAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |

### Reading and data

<sub>Tools that read the world without shipping it to someone else.</sub>

| | App | What it is | Stars |
|:--:|:--|:--|:--:|
| <img src="assets/icons/latido.svg" width="26" height="26" alt=""> | **[Latido](https://github.com/smouj/latido)**<br><sub>Information</sub> | Local-first reader for Bluesky, HN, Reddit, Mastodon, RSS and GitHub.<br><sub>![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Tauri](https://img.shields.io/badge/Tauri-24C8DB?style=flat-square&logo=tauri&logoColor=white)</sub> | <a href="https://github.com/smouj/latido/stargazers"><img src="https://img.shields.io/github/stars/smouj/latido?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/xlsx.png" width="26" height="26" alt=""> | **[XLSX Viewer](https://github.com/smouj/xlsx-viewer)**<br><sub>Documents</sub> | Local Excel viewer for Windows: no upload, no account, no macros.<br><sub>![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white)</sub> | <a href="https://github.com/smouj/xlsx-viewer/stargazers"><img src="https://img.shields.io/github/stars/smouj/xlsx-viewer?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/mundial-tv.png" width="26" height="26" alt=""> | **[Mundial TV](https://github.com/smouj/mundial-tv)**<br><sub>Media</sub> | Desktop player for live television channels from around the world.<br><sub>![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)</sub> | <a href="https://github.com/smouj/mundial-tv/stargazers"><img src="https://img.shields.io/github/stars/smouj/mundial-tv?style=flat-square&label=%E2%98%85&color=B5762E" alt="1 star"></a> |

### Developer tools

<sub>Everything here assumes an agent will read the source as often as a human does.</sub>

| | App | What it is | Stars |
|:--:|:--|:--|:--:|
| <img src="assets/icons/nudo.png" width="26" height="26" alt=""> | **[NUDO](https://github.com/smouj/nudo)**<br><sub>Languages</sub> | A language for humans and agents to read, write and verify the same source.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/nudo/stargazers"><img src="https://img.shields.io/github/stars/smouj/nudo?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |


## Practice

| Principle | In practice |
|:--|:--|
| **Measure before rewriting** | Profile the real thing first. Then change the smallest piece that explains the problem. |
| **Offline is a feature** | If a tool needs a server to be useful, it is a different product. |
| **Demos are demos** | Experimental work is labeled. Releases are tested, versioned and reversible. |

## Toolchain

**Languages**  
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white) ![GDScript](https://img.shields.io/badge/GDScript-478CBF?style=flat-square&logo=godotengine&logoColor=white) ![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white)

**Runtime**  
![llama.cpp](https://img.shields.io/badge/llama.cpp-1F242B?style=flat-square) ![CUDA](https://img.shields.io/badge/CUDA-76B900?style=flat-square&logo=nvidia&logoColor=white) ![GGUF](https://img.shields.io/badge/GGUF-4B5563?style=flat-square) ![Ollama](https://img.shields.io/badge/Ollama-111827?style=flat-square&logo=ollama&logoColor=white)

**Interface**  
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Tauri](https://img.shields.io/badge/Tauri-24C8DB?style=flat-square&logo=tauri&logoColor=white) ![WinUI 3](https://img.shields.io/badge/WinUI%203-0078D4?style=flat-square&logo=windows&logoColor=white) ![Godot](https://img.shields.io/badge/Godot-478CBF?style=flat-square&logo=godotengine&logoColor=white) ![Android](https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=black)

**Infrastructure**  
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)

## Elsewhere

| Channel | Where |
|:--|:--|
| **Code** | [github.com/smouj](https://github.com/smouj) |
| **Models** | [huggingface.co/Smouj013](https://huggingface.co/Smouj013) |
| **Notes** | [@smouj013](https://bsky.app/profile/smouj013.bsky.social) |
| **Community** | [Discord](https://discord.gg/BVWXWY5eUT) |

<sub>Also on <a href="https://www.threads.com/@smouj.013">Threads</a>, <a href="https://www.instagram.com/smouj.013/">Instagram</a> and <a href="https://www.reddit.com/user/SnooMarzipans9093">Reddit</a>. [Support the work](https://www.paypal.com/ncp/payment/XUY7RB9X2JE2G)</sub>

---

<p align="center"><sub>SMOUJ / 013 — independent software</sub></p>

