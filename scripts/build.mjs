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

const copy = {
  en: {
    profile: "Profile",
    selected: "Applications",
    deckSelected: "Grouped by what they are for. Local execution is the common thread.",
    toolchain: "Toolchain",
    practice: "Practice",
    elsewhere: "Elsewhere",
    app: "App",
    stars: "Stars",
    locked: "🔒 private while it is in development",
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
    selected: "Aplicaciones",
    deckSelected: "Agrupadas por para qué sirven. La ejecución local es el hilo común.",
    toolchain: "Herramientas",
    practice: "Práctica",
    elsewhere: "Enlaces",
    app: "App",
    stars: "Estrellas",
    locked: "🔒 privado mientras está en desarrollo",
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
  WPF: ["512BD4", "dotnet", "white"],
  JavaScript: ["F7DF1E", "javascript", "black"],
  HTML: ["E34F26", "html5", "white"],
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
    ["PayPal", links.support.url, "https://img.shields.io/badge/PayPal-Donate-00457C?style=flat-square&logo=paypal&logoColor=white"],
    [c.language, c.other, "https://img.shields.io/badge/" + encodeURIComponent(c.language) + "-README-6E7681?style=flat-square"]
  ];
  return items.map(([alt, href, src]) => '<a href="' + href + '"><img src="' + src + '" alt="' + alt + '"></a>').join("&nbsp;\n  ");
}

function starBadge(p) {
  if (p.private) return "<sub>—</sub>";
  const color = p.stars > 0 ? "B5762E" : "8B949E";
  const src = "https://img.shields.io/github/stars/smouj/" + p.repo +
    "?style=flat-square&label=%E2%98%85&color=" + color;
  const alt = p.stars === 1 ? "1 star" : p.stars + " stars";
  return '<a href="https://github.com/smouj/' + p.repo + '/stargazers"><img src="' + src + '" alt="' + alt + '"></a>';
}

function groupTable(group, lang) {
  const c = copy[lang];
  const rows = group.items.map((p) => {
    const meta = p.tags.map(badge);
    if (p.links && p.links.length) {
      meta.push(...p.links.map((l) => "[" + l[lang] + "](" + l.url + ")"));
    }
    const name = p.private
      ? "<strong>" + p.name + "</strong> 🔒"
      : "**[" + p.name + "](" + p.url + ")**";
    return "| <img src=\"assets/icons/" + p.icon + "\" width=\"26\" height=\"26\" alt=\"\"> " +
      "| " + name + "<br><sub>" + p.focus + "</sub> " +
      "| " + p.desc[lang] + "<br><sub>" + meta.join(" ") + "</sub> " +
      "| " + starBadge(p) + " |";
  }).join("\n");
  return "| | " + c.app + " | " + c.what + " | " + c.stars + " |\n" +
    "|:--:|:--|:--|:--:|\n" + rows;
}

function selectedSection(lang) {
  return projects.groups.map((g) =>
    "### " + g.title[lang] + "\n\n" +
    "<sub>" + g.deck[lang] + "</sub>\n\n" +
    groupTable(g, lang)
  ).join("\n\n");
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
'    <source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.png">\n' +
'    <source media="(prefers-color-scheme: light)" srcset="assets/banner-light.png">\n' +
'    <img src="assets/banner-light.png" alt="' + esc(c.headerAlt) + '" width="100%">\n' +
'  </picture>\n' +
'</p>\n\n' +
'<p align="center">\n' +
'  ' + socialBadges(lang) + '\n' +
'</p>\n\n' +
'## ' + c.profile + '\n\n' +
intro + '\n\n' +
'' +
'## ' + c.selected + '\n\n' +
'<sub>' + c.deckSelected + '</sub>\n\n<sub>' + c.locked + '</sub>\n\n' +
selectedSection(lang) + '\n\n' +
'## ' + c.practice + '\n\n' +
practiceTable(lang) + '\n\n' +
'## ' + c.toolchain + '\n\n' +
toolchainBadges(lang) + '\n\n' +
'## ' + c.elsewhere + '\n\n' +
elsewhereTable(lang) + '\n\n' +
'<sub>' + c.also + ' ' + social + '. [' + c.support + '](' + esc(links.support.url) + ')</sub>\n\n' +
'---\n\n' +
'<p align="center"><sub>' + esc(c.footer) + '</sub></p>\n';
}

for (const lang of ["en", "es"]) {
  write(lang === "en" ? "README.md" : "README.es.md", readme(lang));
}

console.log("Built README.md and README.es.md.");
