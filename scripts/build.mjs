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
  light: { bg: "#F2EFE8", ink: "#111111", muted: "#6B6560", line: "#D8D2C8", accent: "#D93A1F" },
  dark: { bg: "#0C0C0C", ink: "#F2EFE8", muted: "#8A8580", line: "#262626", accent: "#FF4A2E" }
};

function heroSvg(lang, theme) {
  const p = palettes[theme];
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" role="img" aria-label="SMOUJ — independent software">\n' +
'  <rect width="1200" height="340" fill="' + p.bg + '"/>\n' +
'  <rect x="0.5" y="0.5" width="1199" height="339" fill="none" stroke="' + p.line + '"/>\n' +
'  <text x="64" y="54" font-family="' + MONO + '" font-size="13" letter-spacing="2.8" fill="' + p.muted + '">' + esc(profile.kicker[lang].toUpperCase()) + '</text>\n' +
'  <text x="1136" y="54" text-anchor="end" font-family="' + MONO + '" font-size="13" letter-spacing="2.8" fill="' + p.muted + '">' + esc(profile.index[lang].toUpperCase()) + '</text>\n' +
'  <rect x="64" y="84" width="36" height="36" fill="none" stroke="' + p.ink + '" stroke-width="1.2"/>\n' +
'  <path d="M72 112 L92 92" stroke="' + p.accent + '" stroke-width="3"/>\n' +
'  <circle cx="92" cy="112" r="3" fill="' + p.accent + '"/>\n' +
'  <text x="116" y="238" font-family="' + SANS + '" font-size="144" font-weight="800" letter-spacing="-7" fill="' + p.ink + '">' + esc(profile.name) + '</text>\n' +
'  <path d="M674 238 L702 238 L728 96 L700 96 Z" fill="' + p.accent + '"/>\n' +
'  <text x="118" y="282" font-family="' + MONO + '" font-size="15.5" letter-spacing="3.2" fill="' + p.muted + '">' + esc(profile.tagline[lang].toUpperCase()) + '</text>\n' +
'  <line x1="856" y1="84" x2="856" y2="266" stroke="' + p.line + '"/>\n' +
'  <text x="1136" y="252" text-anchor="end" font-family="' + SANS + '" font-size="150" font-weight="700" letter-spacing="4" fill="none" stroke="' + p.accent + '" stroke-width="1.8">' + esc(profile.handle) + '</text>\n' +
'  <line x1="64" y1="306" x2="1136" y2="306" stroke="' + p.line + '"/>\n' +
'  <text x="64" y="328" font-family="' + MONO + '" font-size="11" letter-spacing="2" fill="' + p.muted + '">' + esc(profile.stamp[lang].toUpperCase()) + '</text>\n' +
'  <text x="1136" y="328" text-anchor="end" font-family="' + MONO + '" font-size="11" letter-spacing="2" fill="' + p.muted + '">GITHUB.COM/SMOUJ</text>\n' +
'</svg>\n';
}

const copy = {
  en: {
    profile: "PROFILE",
    selected: "SELECTED SYSTEMS",
    toolchain: "TOOLCHAIN",
    practice: "PRACTICE",
    elsewhere: "ELSEWHERE",
    also: "Also on",
    support: "Support the work",
    language: "Español",
    other: "README.es.md",
    headerAlt: "SMOUJ — independent software",
    footer: "SMOUJ / 013 — independent software",
    and: "and"
  },
  es: {
    profile: "PERFIL",
    selected: "SISTEMAS",
    toolchain: "HERRAMIENTAS",
    practice: "PRÁCTICA",
    elsewhere: "ENLACES",
    also: "También en",
    support: "Apoyar el trabajo",
    language: "English",
    other: "README.md",
    headerAlt: "SMOUJ — software independiente",
    footer: "SMOUJ / 013 — software independiente",
    and: "y"
  }
};

function linkList(list) {
  return list.map((l) => '<a href="' + esc(l.url) + '">' + esc(l.label) + '</a>').join(" · ");
}

function joinHuman(list, andWord) {
  const parts = list.map((l) => '<a href="' + esc(l.url) + '">' + esc(l.label) + '</a>');
  if (parts.length < 2) return parts.join("");
  return parts.slice(0, -1).join(", ") + " " + andWord + " " + parts[parts.length - 1];
}

function readme(lang) {
  const c = copy[lang];

  const headerLinks = links.header.map((l) => '<a href="' + esc(l.url) + '">' + esc(l.label) + '</a>').join(" · ");

  const intro = profile.intro[lang].join("\n\n");

  const selected = projects.map((p, i) => {
    const num = String(i + 1).padStart(2, "0");
    const meta = [];
    meta.push(p.tags.join(" · "));
    if (p.links && p.links.length) {
      meta.push(p.links.map((l) => "[" + l.label + "](" + l.url + ")").join(" · "));
    }
    return "### " + num + " / [" + p.name + "](" + p.url + ")\n\n" +
      p.desc[lang] + "<br>\n" +
      "<sub>↳ " + meta.join(" · ") + "</sub>";
  }).join("\n\n");

  const practice = profile.practice.map((p) =>
    "**" + p.title[lang] + "**  \n" + p.body[lang]
  ).join("\n\n");

  const toolchain = profile.toolchain.map((t) =>
    "**" + t.label[lang] + "** — " + t.items.join(" · ")
  ).join("  \n");

  const elsewhere = links.elsewhere.map((l) =>
    "**" + l.label[lang] + "** — [" + l.value + "](" + l.url + ")"
  ).join("  \n");

  const social = joinHuman(links.social, c.and);

  return '<p align="center">\n' +
'  <picture>\n' +
'    <source media="(prefers-color-scheme: dark)" srcset="assets/hero-' + lang + '-dark.svg">\n' +
'    <source media="(prefers-color-scheme: light)" srcset="assets/hero-' + lang + '-light.svg">\n' +
'    <img src="assets/hero-' + lang + '-light.svg" alt="' + esc(c.headerAlt) + '" width="100%">\n' +
'  </picture>\n' +
'</p>\n\n' +
'<p align="center">\n' +
'  ' + headerLinks + ' · <a href="' + c.other + '">' + c.language + '</a>\n' +
'</p>\n\n' +
'## / ' + c.profile + '\n\n' +
intro + '\n\n' +
'## / ' + c.selected + '\n\n' +
selected + '\n\n' +
'## / ' + c.toolchain + '\n\n' +
toolchain + '\n\n' +
'## / ' + c.practice + '\n\n' +
practice + '\n\n' +
'## / ' + c.elsewhere + '\n\n' +
elsewhere + '\n\n' +
c.also + ' ' + social + '. [' + c.support + '](' + esc(links.support.url) + ').\n\n' +
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
