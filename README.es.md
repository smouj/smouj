<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="assets/banner-light.png">
    <img src="assets/banner-light.png" alt="SMOUJ — software independiente" width="100%">
  </picture>
</p>

<p align="center">
  <a href="https://github.com/smouj"><img src="https://img.shields.io/badge/GitHub-smouj-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"></a>&nbsp;
  <a href="https://huggingface.co/Smouj013"><img src="https://img.shields.io/badge/Hugging%20Face-Smouj013-FFD21E?style=flat-square&logo=huggingface&logoColor=black" alt="Hugging Face"></a>&nbsp;
  <a href="https://bsky.app/profile/smouj013.bsky.social"><img src="https://img.shields.io/badge/Bluesky-%40smouj013-0085FF?style=flat-square&logo=bluesky&logoColor=white" alt="Bluesky"></a>&nbsp;
  <a href="https://discord.gg/BVWXWY5eUT"><img src="https://img.shields.io/badge/Discord-Smouj013-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord"></a>&nbsp;
  <a href="https://www.paypal.com/ncp/payment/XUY7RB9X2JE2G"><img src="https://img.shields.io/badge/PayPal-Donate-00457C?style=flat-square&logo=paypal&logoColor=white" alt="PayPal"></a>&nbsp;
  <a href="README.md"><img src="https://img.shields.io/badge/English-README-6E7681?style=flat-square" alt="English"></a>
</p>

## Perfil

Construyo software para el ordenador que tienes delante: runtimes de IA local, utilidades de Windows, herramientas para desarrolladores y juegos pequeños.

La restricción es siempre la misma. Tiene que funcionar sin conexión, en hardware que la gente ya tiene, y tiene que poder inspeccionarse en vez de ser magia.

## Aplicaciones

<sub>Agrupadas por para qué sirven. La ejecución local es el hilo común.</sub>

### IA local

<sub>Inferencia y herramientas de agentes que corren en la máquina, no en un centro de datos.</sub>

| | App | Qué es | Estrellas |
|:--:|:--|:--|:--:|
| <img src="assets/icons/kimari.png" width="26" height="26" alt=""> | **[Kimari](https://github.com/smouj/kimari-local-ai)**<br><sub>Local inference</sub> | Runtime LLM local para GPUs de consumo con CUDA y API compatible con OpenAI.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![CUDA](https://img.shields.io/badge/CUDA-76B900?style=flat-square&logo=nvidia&logoColor=white) ![GGUF](https://img.shields.io/badge/GGUF-4B5563?style=flat-square)</sub> | <a href="https://github.com/smouj/kimari-local-ai/stargazers"><img src="https://img.shields.io/github/stars/smouj/kimari-local-ai?style=flat-square&label=%E2%98%85&color=B5762E" alt="9 stars"></a> |
| <img src="assets/icons/aicode.png" width="26" height="26" alt=""> | **[AICodeStudio](https://github.com/smouj/AICodeStudio)**<br><sub>Developer IDE</sub> | IDE asistido por IA con enrutado a modelos locales y puente con OpenClaw.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <a href="https://github.com/smouj/AICodeStudio/stargazers"><img src="https://img.shields.io/github/stars/smouj/AICodeStudio?style=flat-square&label=%E2%98%85&color=B5762E" alt="4 stars"></a> |
| <img src="assets/icons/agent-browser.png" width="26" height="26" alt=""> | **[agent-browser](https://github.com/smouj/agent-browser)**<br><sub>Agent tooling</sub> | Runtime de navegador y API REST para navegación, visión e interacción de agentes.<br><sub>![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)</sub> | <a href="https://github.com/smouj/agent-browser/stargazers"><img src="https://img.shields.io/github/stars/smouj/agent-browser?style=flat-square&label=%E2%98%85&color=B5762E" alt="6 stars"></a> |

### Escritorio Windows

<sub>Utilidades nativas para el equipo: monitorización, limpieza, captura y paneles de hardware.</sub>

| | App | Qué es | Estrellas |
|:--:|:--|:--|:--:|
| <img src="assets/icons/holgura.svg" width="26" height="26" alt=""> | **[Holgura](https://github.com/smouj/holgura)**<br><sub>Storage hygiene</sub> | Limpiador de Windows y WSL que enseña cada archivo antes de borrarlo. Simulacro, puerta de seguridad y cero telemetría.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![WinUI 3](https://img.shields.io/badge/WinUI%203-0078D4?style=flat-square&logo=windows&logoColor=white)</sub> | <a href="https://github.com/smouj/holgura/stargazers"><img src="https://img.shields.io/github/stars/smouj/holgura?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/sysglance.png" width="26" height="26" alt=""> | **[SysGlance](https://github.com/smouj/sysglance)**<br><sub>System monitoring</sub> | Overlay semitransparente de escritorio con CPU, GPU, disco y red en tiempo real.<br><sub>![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)</sub> | <a href="https://github.com/smouj/sysglance/stargazers"><img src="https://img.shields.io/github/stars/smouj/sysglance?style=flat-square&label=%E2%98%85&color=B5762E" alt="1 star"></a> |
| <img src="assets/icons/openclaw-widget.png" width="26" height="26" alt=""> | **[OpenClaw Widget](https://github.com/smouj/openclaw-desktop-widget)**<br><sub>Desktop widget</sub> | Widget sin bordes y translúcido con la salud del sistema y el panel de OpenClaw.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white)</sub> | <a href="https://github.com/smouj/openclaw-desktop-widget/stargazers"><img src="https://img.shields.io/github/stars/smouj/openclaw-desktop-widget?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/lcdglance.svg" width="26" height="26" alt=""> | **[LCDGlance](https://github.com/smouj/lcdglance)**<br><sub>Hardware panel</sub> | Páginas de monitorización y mascotas animadas para el LCD del Logitech G510.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <a href="https://github.com/smouj/lcdglance/stargazers"><img src="https://img.shields.io/github/stars/smouj/lcdglance?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/classicvoice.png" width="26" height="26" alt=""> | **[ClassicVoice](https://github.com/smouj/classicvoice)**<br><sub>Speech</sub> | Síntesis de voz multilingüe offline para Windows sobre voces de eSpeak NG.<br><sub>![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)</sub> | <a href="https://github.com/smouj/classicvoice/stargazers"><img src="https://img.shields.io/github/stars/smouj/classicvoice?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |

### TV y wearables

<sub>Herramientas para Android TV, televisión en directo y relojes inteligentes.</sub>

| | App | Qué es | Estrellas |
|:--:|:--|:--|:--:|
| <img src="assets/icons/tervia.png" width="26" height="26" alt="Icono de Tervia"> | **[Tervia](https://github.com/smouj/tervia)**<br><sub>Android TV</sub> | App para Windows en fase alfa para personalizar el inicio de Android TV y descubrir televisores en la red local.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white)</sub> | <a href="https://github.com/smouj/tervia/stargazers"><img src="https://img.shields.io/github/stars/smouj/tervia?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/mundial-tv.png" width="26" height="26" alt=""> | **[Mundial TV](https://github.com/smouj/mundial-tv)**<br><sub>Live TV</sub> | Reproductor de escritorio de televisión en directo de todo el mundo.<br><sub>![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)</sub> | <a href="https://github.com/smouj/mundial-tv/stargazers"><img src="https://img.shields.io/github/stars/smouj/mundial-tv?style=flat-square&label=%E2%98%85&color=B5762E" alt="1 star"></a> |
| <img src="assets/icons/my-dev-watch.png" width="26" height="26" alt="Icono de My Dev Watch"> | **[My Dev Watch](https://github.com/smouj/my-dev-watch)**<br><sub>Smartwatch companion</sub> | Compañero local para Android, estudio de esferas y laboratorio BLE para relojes GloryFit; en fase alfa.<br><sub>![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white) ![Android](https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=black)</sub> | <a href="https://github.com/smouj/my-dev-watch/stargazers"><img src="https://img.shields.io/github/stars/smouj/my-dev-watch?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |

### Voryda Suite

<sub>Cinco herramientas de Windows bajo una misma identidad visual.</sub>

| | App | Qué es | Estrellas |
|:--:|:--|:--|:--:|
| <img src="https://raw.githubusercontent.com/smouj/smouj/main/assets/icons/voryda-rec.png?v=aa63e884a62d9e65f176825624dddf01a7e14ccf63a600452fbc89640b3cfee6" width="26" height="26" alt="Icono de Voryda Rec"> | **[Voryda Rec](https://github.com/smouj/voryda-rec)**<br><sub>Grabación de pantalla · alfa</sub> | Graba una región seleccionada del escritorio en H.264/MP4 con Windows Graphics Capture, DXGI y Media Foundation.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![WinForms](https://img.shields.io/badge/WinForms-5C2D91?style=flat-square)</sub> | <a href="https://github.com/smouj/voryda-rec/stargazers"><img src="https://img.shields.io/github/stars/smouj/voryda-rec?style=flat-square&label=%E2%98%85&color=8B949E" alt="Estrellas de Voryda Rec en GitHub"></a> |
| <img src="https://raw.githubusercontent.com/smouj/smouj/main/assets/icons/voryda-snap.png?v=e7158076109eeb15cc99427d45acea1df2a7448f3a02f824ce942681ba18fdce" width="26" height="26" alt="Icono de Voryda Snap"> | **[Voryda Snap](https://github.com/smouj/voryda-snap)**<br><sub>Capturas de pantalla</sub> | Captura una región, la pantalla principal o una ventana; copia la imagen al portapapeles o la guarda en PNG/JPEG.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![WinForms](https://img.shields.io/badge/WinForms-5C2D91?style=flat-square)</sub> | <a href="https://github.com/smouj/voryda-snap/stargazers"><img src="https://img.shields.io/github/stars/smouj/voryda-snap?style=flat-square&label=%E2%98%85&color=8B949E" alt="Estrellas de Voryda Snap en GitHub"></a> |
| <img src="https://raw.githubusercontent.com/smouj/smouj/main/assets/icons/voryda-down.png?v=4f13fad2ad34f1086d4275045e30e6ec832cca22d27448ff84ec0b835fb0a65f" width="26" height="26" alt="Icono de Voryda Down"> | **[Voryda Down](https://github.com/smouj/voryda-down)**<br><sub>Descargas de medios</sub> | Interfaz nativa de Windows para yt-dlp; FFmpeg se usa en los flujos que necesitan combinar o procesar medios.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![WinForms](https://img.shields.io/badge/WinForms-5C2D91?style=flat-square)</sub> | <a href="https://github.com/smouj/voryda-down/stargazers"><img src="https://img.shields.io/github/stars/smouj/voryda-down?style=flat-square&label=%E2%98%85&color=8B949E" alt="Estrellas de Voryda Down en GitHub"></a> |
| <img src="https://raw.githubusercontent.com/smouj/smouj/main/assets/icons/voryda-cut.png?v=b4a738683967ab6b81146dc1546db6ce7fe50ab27454b22cb48b94720bcb6c60" width="26" height="26" alt="Icono de Voryda Cut"> | **[Voryda Cut](https://github.com/smouj/voryda-cut)**<br><sub>Edición de vídeo · pre-alfa</sub> | Base inicial de un editor WinUI 3; la interfaz de edición y la exportación siguen en desarrollo.<br><sub>![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![WinUI 3](https://img.shields.io/badge/WinUI%203-0078D4?style=flat-square)</sub> | <a href="https://github.com/smouj/voryda-cut/stargazers"><img src="https://img.shields.io/github/stars/smouj/voryda-cut?style=flat-square&label=%E2%98%85&color=8B949E" alt="Estrellas de Voryda Cut en GitHub"></a> |
| <img src="assets/icons/voryda-sheet.png" width="26" height="26" alt=""> | **[Voryda Sheet](https://github.com/smouj/xlsx-viewer)**<br><sub>Spreadsheet viewer</sub> | Visor sin conexión para .xlsx, .xlsm, .xls y .csv; no sube archivos ni ejecuta macros.<br><sub>![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)</sub> | <a href="https://github.com/smouj/xlsx-viewer/stargazers"><img src="https://img.shields.io/github/stars/smouj/xlsx-viewer?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |

### Adobado Kit

<sub>Suite creativa open source hecha de editores locales y enfocados. Núcleo en Rust, sin suscripción y sin subir nada.</sub>

| | App | Qué es | Estrellas |
|:--:|:--|:--|:--:|
| <img src="assets/icons/adobado-kit.png" width="26" height="26" alt=""> | **[Adobado Kit](https://github.com/smouj/Adobado_Kit)**<br><sub>Creative suite</sub> | Proyecto paraguas: herramientas creativas locales derivadas de editores open source, con una sola filosofía.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/Adobado_Kit/stargazers"><img src="https://img.shields.io/github/stars/smouj/Adobado_Kit?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-design.png" width="26" height="26" alt=""> | **[DesignAdobado](https://github.com/smouj/DesignAdobado)**<br><sub>Design</sub> | Diseño y composición local, derivado de DesignCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/DesignAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/DesignAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-photo.png" width="26" height="26" alt=""> | **[PhotoAdobado](https://github.com/smouj/PhotoAdobado)**<br><sub>Photo</sub> | Editor de imagen local, derivado de PhotoCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/PhotoAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/PhotoAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-art.png" width="26" height="26" alt=""> | **[ArtAdobado](https://github.com/smouj/ArtAdobado)**<br><sub>Vector</sub> | Arte vectorial local, derivado de VectorCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/ArtAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/ArtAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-light.png" width="26" height="26" alt=""> | **[LightAdobado](https://github.com/smouj/LightAdobado)**<br><sub>Photo workflow</sub> | Revelado y color local, derivado de LightCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/LightAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/LightAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-effect.png" width="26" height="26" alt=""> | **[EffectAdobado](https://github.com/smouj/EffectAdobado)**<br><sub>Motion</sub> | Efectos visuales locales, derivado de EffectCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/EffectAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/EffectAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-film.png" width="26" height="26" alt=""> | **[FilmAdobado](https://github.com/smouj/FilmAdobado)**<br><sub>Video</sub> | Edición de vídeo local, derivado de FilmCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/FilmAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/FilmAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-sound.png" width="26" height="26" alt=""> | **[SoundAdobado](https://github.com/smouj/SoundAdobado)**<br><sub>Audio</sub> | Edición de audio local, derivado de SoundCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/SoundAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/SoundAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |
| <img src="assets/icons/adobado-pdf.png" width="26" height="26" alt=""> | **[PdfAdobado](https://github.com/smouj/PdfAdobado)**<br><sub>Documents</sub> | Trabajo con PDF en local, derivado de PdfCraft.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/PdfAdobado/stargazers"><img src="https://img.shields.io/github/stars/smouj/PdfAdobado?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |

### Lectura y datos

<sub>Herramientas que leen el mundo sin enviarlo a terceros.</sub>

| | App | Qué es | Estrellas |
|:--:|:--|:--|:--:|
| <img src="assets/icons/latido.svg" width="26" height="26" alt=""> | **[Latido](https://github.com/smouj/latido)**<br><sub>Information</sub> | Lector local-first de Bluesky, HN, Reddit, Mastodon, RSS y GitHub.<br><sub>![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Tauri](https://img.shields.io/badge/Tauri-24C8DB?style=flat-square&logo=tauri&logoColor=white)</sub> | <a href="https://github.com/smouj/latido/stargazers"><img src="https://img.shields.io/github/stars/smouj/latido?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |

### Herramientas de desarrollo

<sub>Todo aquí asume que un agente leerá el código tan a menudo como una persona.</sub>

| | App | Qué es | Estrellas |
|:--:|:--|:--|:--:|
| <img src="assets/icons/nudo.png" width="26" height="26" alt=""> | **[NUDO](https://github.com/smouj/nudo)**<br><sub>Languages</sub> | Lenguaje para que humanos y agentes lean, escriban y verifiquen la misma fuente.<br><sub>![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white)</sub> | <a href="https://github.com/smouj/nudo/stargazers"><img src="https://img.shields.io/github/stars/smouj/nudo?style=flat-square&label=%E2%98%85&color=8B949E" alt="0 stars"></a> |


## Práctica

| Principio | En la práctica |
|:--|:--|
| **Medir antes de reescribir** | Perfila lo real primero. Después cambia la pieza más pequeña que explique el problema. |
| **Offline es una característica** | Si una herramienta necesita un servidor para ser útil, es otro producto. |
| **Una demo es una demo** | Lo experimental se etiqueta. Las releases se prueban, se versionan y se pueden revertir. |

## Herramientas

**Lenguajes**  
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![Rust](https://img.shields.io/badge/Rust-B7410E?style=flat-square&logo=rust&logoColor=white) ![GDScript](https://img.shields.io/badge/GDScript-478CBF?style=flat-square&logo=godotengine&logoColor=white) ![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white)

**Runtime**  
![llama.cpp](https://img.shields.io/badge/llama.cpp-1F242B?style=flat-square) ![CUDA](https://img.shields.io/badge/CUDA-76B900?style=flat-square&logo=nvidia&logoColor=white) ![GGUF](https://img.shields.io/badge/GGUF-4B5563?style=flat-square) ![Ollama](https://img.shields.io/badge/Ollama-111827?style=flat-square&logo=ollama&logoColor=white)

**Interfaz**  
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Tauri](https://img.shields.io/badge/Tauri-24C8DB?style=flat-square&logo=tauri&logoColor=white) ![WinUI 3](https://img.shields.io/badge/WinUI%203-0078D4?style=flat-square&logo=windows&logoColor=white) ![Godot](https://img.shields.io/badge/Godot-478CBF?style=flat-square&logo=godotengine&logoColor=white) ![Android](https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=black)

**Infraestructura**  
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)

## Enlaces

| Canal | Dónde |
|:--|:--|
| **Código** | [github.com/smouj](https://github.com/smouj) |
| **Modelos** | [huggingface.co/Smouj013](https://huggingface.co/Smouj013) |
| **Notas** | [@smouj013](https://bsky.app/profile/smouj013.bsky.social) |
| **Comunidad** | [Discord](https://discord.gg/BVWXWY5eUT) |

<sub>También en <a href="https://www.threads.com/@smouj.013">Threads</a>, <a href="https://www.instagram.com/smouj.013/">Instagram</a> y <a href="https://www.reddit.com/user/SnooMarzipans9093">Reddit</a>. [Apoyar el trabajo](https://www.paypal.com/ncp/payment/XUY7RB9X2JE2G)</sub>

---

<p align="center"><sub>SMOUJ / 013 — software independiente</sub></p>

