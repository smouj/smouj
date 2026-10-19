#!/usr/bin/env node
// Generates README.md, README.es.md and the hero artwork from profile/*.json.
// Run: node scripts/build.mjs

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (name) => JSON.parse(readFileSync(join(root, "profile", name), "utf8"));
const profile = read("profile.json");
const projects = read("projects.json");
const links = read("links.json");

const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const MONO = "ui-monospace, 'SF Mono', 'Cascadia Mono', 'Roboto Mono', Menlo, Consolas, monospace";

const esc = (s) => String(s)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const write = (path, data) => {
  mkdirSync(dirname(join(root, path)), { recursive: true });
  writeFileSync(join(root, path), data, "utf8");
};

const palettes = {
  light: {
    bg1: "#FBF7EF", bg2: "#F2EADF", ink: "#171A1E", muted: "#6F6A62",
    line: "#E2D8C8", accent: "#B5762E"
  },
  dark: {
    bg1: "#0F1419", bg2: "#172029", ink: "#F4EFE6", muted: "#96A1AB",
    line: "#2A323B", accent: "#E8B26A"
  }
};

function heroSvg(lang, theme) {
  const p = palettes[theme];
  const wave = "M744 180 C790 120 842 120 888 180 S984 240 1030 180 S1090 140 1120 172";
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" role="img" aria-label="SMOUJ — independent software">\n' +
'  <defs>\n' +
'    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">\n' +
'      <stop offset="0" stop-color="' + p.bg1 + '"/>\n' +
'      <stop offset="1" stop-color="' + p.bg2 + '"/>\n' +
'    </linearGradient>\n' +
'    <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">\n' +
'      <stop offset="0" stop-color="' + p.accent + '" stop-opacity="0"/>\n' +
'      <stop offset="0.35" stop-color="' + p.accent + '" stop-opacity="0.75"/>\n' +
'      <stop offset="1" stop-color="' + p.accent + '"/>\n' +
'    </linearGradient>\n' +
'  </defs>\n' +
'  <rect x="0.5" y="0.5" width="1199" height="339" rx="24" fill="url(#bg)" stroke="' + p.line + '"/>\n' +
'  <g opacity="0.35" stroke="' + p.line + '" stroke-width="1">\n' +
'    <line x1="760" y1="108" x2="760" y2="252"/>\n' +
'    <line x1="838" y1="108" x2="838" y2="252"/>\n' +
'    <line x1="916" y1="108" x2="916" y2="252"/>\n' +
'    <line x1="994" y1="108" x2="994" y2="252"/>\n' +
'    <line x1="1072" y1="108" x2="1072" y2="252"/>\n' +
'  </g>\n' +
'  <path d="' + wave + '" fill="none" stroke="' + p.accent + '" stroke-width="1.4" opacity="0.18" transform="translate(0,-30)"/>\n' +
'  <path d="' + wave + '" fill="none" stroke="' + p.accent + '" stroke-width="1.4" opacity="0.32" transform="translate(0,30)"/>\n' +
'  <path d="' + wave + '" fill="none" stroke="url(#wave)" stroke-width="1.8"/>\n' +
'  <circle cx="1120" cy="172" r="4" fill="' + p.accent + '"/>\n' +
'  <circle cx="1120" cy="172" r="10" fill="none" stroke="' + p.accent + '" stroke-width="1" opacity="0.35"/>\n' +
'  <rect x="64" y="56" width="30" height="30" rx="8" fill="none" stroke="' + p.ink + '" stroke-opacity="0.4"/>\n' +
'  <path d="M72 79 L86 63" stroke="' + p.accent + '" stroke-width="2.4"/>\n' +
'  <circle cx="86" cy="79" r="2.2" fill="' + p.accent + '"/>\n' +
'  <text x="108" y="77" font-family="' + MONO + '" font-size="12.5" letter-spacing="2.6" fill="' + p.muted + '">' + esc(profile.kicker[lang].toUpperCase()) + '</text>\n' +
'  <text x="1136" y="77" text-anchor="end" font-family="' + MONO + '" font-size="12.5" letter-spacing="2.6" fill="' + p.muted + '">013 / ' + esc(profile.index[lang].toUpperCase()) + '</text>\n' +
'  <text x="64" y="208" font-family="' + SANS + '" font-size="96" font-weight="700" letter-spacing="-2" fill="' + p.ink + '">' + esc(profile.name) + '</text>\n' +
'  <text x="424" y="206" font-family="' + MONO + '" font-size="21" letter-spacing="1.5" fill="' + p.accent + '">/ 013</text>\n' +
'  <text x="66" y="252" font-family="' + SANS + '" font-size="19.5" fill="' + p.muted + '">' + esc(profile.tagline[lang]) + '</text>\n' +
'  <line x1="64" y1="292" x2="1136" y2="292" stroke="' + p.line + '"/>\n' +
'  <text x="64" y="316" font-family="' + MONO + '" font-size="11.5" letter-spacing="2" fill="' + p.muted + '">' + esc(profile.stamp[lang].toUpperCase()) + '</text>\n' +
'  <text x="1136" y="316" text-anchor="end" font-family="' + MONO + '" font-size="11.5" letter-spacing="2" fill="' + p.muted + '">GITHUB.COM/SMOUJ</text>\n' +
'</svg>\n';
}

const copy = {
  en: {
    profile: "Profile",
    selected: "Selected systems",
    deckSelected: "Six public projects. Local execution is the common thread.",
    toolchain: "Toolchain",
    practice: "Practice",
    elsewhere: "Elsewhere",
    currently: "Currently",
    system: "System",
    what: "What it is",
    stack: "Stack",
    principle: "Principle",
    inPractice: "In practice",
    also: "Also on",
    support: "Support the work",
    channel: "Channel",
    where: "Where",
    language: "Español",
    other: "README.es.md",
    headerAlt: "SMOUJ — independent software",
    footer: "SMOUJ / 013 — independent software",
    and: "and"
  },
  es: {
    profile: "Perfil",
    selected: "Sistemas",
    deckSelected: "Seis proyectos públicos. La ejecución local es el hilo común.",
    toolchain: "Herramientas",
    practice: "Práctica",
    elsewhere: "Enlaces",
    currently: "Ahora",
    system: "Sistema",
    what: "Qué es",
    stack: "Stack",
    principle: "Principio",
    inPractice: "En la práctica",
    also: "También en",
    support: "Apoyar el trabajo",
    channel: "Canal",
    where: "Dónde",
    language: "English",
    other: "README.md",
    headerAlt: "SMOUJ — software independiente",
    footer: "SMOUJ / 013 — software independiente",
    and: "y"
  }
};

const badgeSpec = {
  Python: ["3776AB", "python", "white"],
  TypeScript: ["3178C6", "typescript", "white"],
  "C#": ["512BD4", "dotnet", "white"],
  Rust: ["B7410E", "rust", "white"],
  GDScript: ["478CBF", "godotengine", "white"],
  "llama.cpp": ["1F242B", null, null],
  CUDA: ["76B900", "nvidia", "white"],
  GGUF: ["4B5563", null, null],
  Ollama: ["111827", "ollama", "white"],
  React: ["20232A", "react", "61DAFB"],
  Tauri: ["24C8DB", "tauri", "white"],
  "WinUI 3": ["0078D4", "windows", "white"],
  Godot: ["478CBF", "godotengine", "white"],
  Linux: ["FCC624", "linux", "black"],
  Docker: ["2496ED", "docker", "white"],
  SQLite: ["003B57", "sqlite", "white"],
  PostgreSQL: ["4169E1", "postgresql", "white"]
};

function badge(label) {
  const spec = badgeSpec[label] || ["1F242B", null, null];
  let url = "https://img.shields.io/badge/" + encodeURIComponent(label) + "-" + spec[0] + "?style=flat-square";
  if (spec[1]) url += "&logo=" + spec[1] + "&logoColor=" + spec[2];
  return "![" + label + "](" + url + ")";
}

function socialBadges(lang) {
  const c = copy[lang];
  const items = [
    ["GitHub", "https://github.com/smouj", "https://img.shields.io/badge/GitHub-smouj-181717?style=flat-square&logo=github&logoColor=white"],
    ["Hugging Face", "https://huggingface.co/Smouj013", "https://img.shields.io/badge/Hugging%20Face-Smouj013-FFD21E?style=flat-square&logo=huggingface&logoColor=black"],
    ["Bluesky", "https://bsky.app/profile/smouj013.bsky.social", "https://img.shields.io/badge/Bluesky-%40smouj013-0085FF?style=flat-square&logo=bluesky&logoColor=white"],
    ["Discord", "https://discord.gg/BVWXWY5eUT", "https://img.shields.io/badge/Discord-Smouj013-5865F2?style=flat-square&logo=discord&logoColor=white"],
    [c.language, c.other, "https://img.shields.io/badge/" + encodeURIComponent(c.language) + "-README-6E7681?style=flat-square"]
  ];
  return items.map(([alt, href, src]) => '<a href="' + href + '"><img src="' + src + '" alt="' + alt + '"></a>').join("&nbsp;\n  ");
}

function selectedTable(lang) {
  const c = copy[lang];
  const rows = projects.map((p, i) => {
    const num = String(i + 1).padStart(2, "0");
    const meta = p.tags.slice();
    if (p.links && p.links.length) {
      meta.push(...p.links.map((l) => "[" + l.label + "](" + l.url + ")"));
    }
    return "| " + num + " | **[" + p.name + "](" + p.url + ")**<br><sub>" + p.focus + "</sub> | " + p.desc[lang] + "<br><sub>" + meta.join(" · ") + "</sub> |";
  }).join("\n");
  return "| # | " + c.system + " | " + c.what + " |\n" +
    "|:--|:--|:--|\n" + rows;
}

function practiceTable(lang) {
  const c = copy[lang];
  const rows = profile.practice.map((p) =>
    "| **" + p.title[lang] + "** | " + p.body[lang] + " |"
  ).join("\n");
  return "| " + c.principle + " | " + c.inPractice + " |\n" +
    "|:--|:--|\n" + rows;
}

function toolchainBadges(lang) {
  return profile.toolchain.map((t) =>
    "**" + t.label[lang] + "**  \n" + t.items.map(badge).join(" ")
  ).join("\n\n");
}

function elsewhereTable(lang) {
  const c = copy[lang];
  const rows = links.elsewhere.map((l) =>
    "| **" + l.label[lang] + "** | [" + l.value + "](" + l.url + ") |"
  ).join("\n");
  return "| " + c.channel + " | " + c.where + " |\n" +
    "|:--|:--|\n" + rows;
}

function joinHuman(list, andWord) {
  const parts = list.map((l) => '<a href="' + esc(l.url) + '">' + esc(l.label) + '</a>');
  if (parts.length < 2) return parts.join("");
  return parts.slice(0, -1).join(", ") + " " + andWord + " " + parts[parts.length - 1];
}

function readme(lang) {
  const c = copy[lang];
  const intro = profile.intro[lang].join("\n\n");
  const social = joinHuman(links.social, c.and);

  return '<p align="center">\n' +
'  <picture>\n' +
'    <source media="(prefers-color-scheme: dark)" srcset="assets/hero-' + lang + '-dark.svg?v=4">\n' +
'    <source media="(prefers-color-scheme: light)" srcset="assets/hero-' + lang + '-light.svg?v=4">\n' +
'    <img src="assets/hero-' + lang + '-light.svg?v=4" alt="' + esc(c.headerAlt) + '" width="100%">\n' +
'  </picture>\n' +
'</p>\n\n' +
'<p align="center">\n' +
'  ' + socialBadges(lang) + '\n' +
'</p>\n\n' +
'## / ' + c.profile + '\n\n' +
intro + '\n\n' +
'> **' + c.currently + '** — ' + profile.currently[lang] + '\n\n' +
'## / ' + c.selected + '\n\n' +
'<sub>' + c.deckSelected + '</sub>\n\n' +
selectedTable(lang) + '\n\n' +
'## / ' + c.practice + '\n\n' +
practiceTable(lang) + '\n\n' +
'## / ' + c.toolchain + '\n\n' +
toolchainBadges(lang) + '\n\n' +
'## / ' + c.elsewhere + '\n\n' +
elsewhereTable(lang) + '\n\n' +
'<sub>' + c.also + ' ' + social + '. [' + c.support + '](' + esc(links.support.url) + ')</sub>\n\n' +
'---\n\n' +
'<p align="center"><sub>' + esc(c.footer) + '</sub></p>\n';
}

for (const lang of ["en", "es"]) {
  for (const theme of ["light", "dark"]) {
    write("assets/hero-" + lang + "-" + theme + ".svg", heroSvg(lang, theme));
  }
  write(lang === "en" ? "README.md" : "README.es.md", readme(lang));
}

console.log("Built README.md, README.es.md and 4 hero assets.");
