#!/usr/bin/env node
// Generates README.md, README.es.md and all profile artwork from profile/*.json.
// Run: node scripts/build.mjs

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (name) => JSON.parse(readFileSync(join(root, "profile", name), "utf8"));
const profile = read("profile.json");
const projects = read("projects.json");
const links = read("links.json");

const SANS = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const MONO = "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace";

const esc = (s) => String(s)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const wrap = (text, max, maxLines = 2) => {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? line + " " + word : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  if (lines.length <= maxLines) return lines;
  const kept = lines.slice(0, maxLines);
  kept[maxLines - 1] = kept[maxLines - 1].replace(/[.,;:]?$/, "…");
  return kept;
};

const write = (path, data) => {
  mkdirSync(dirname(join(root, path)), { recursive: true });
  writeFileSync(join(root, path), data, "utf8");
};

function headerSvg(lang) {
  const tagline = esc(profile.tagline[lang]).toUpperCase();
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" role="img" aria-label="SMOUJ">\n' +
'  <defs>\n' +
'    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">\n' +
'      <stop offset="0" stop-color="#0B0F14"/>\n' +
'      <stop offset="0.55" stop-color="#0D1117"/>\n' +
'      <stop offset="1" stop-color="#121A24"/>\n' +
'    </linearGradient>\n' +
'    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">\n' +
'      <stop offset="0" stop-color="#1F6FEB" stop-opacity="0.28"/>\n' +
'      <stop offset="1" stop-color="#1F6FEB" stop-opacity="0"/>\n' +
'    </radialGradient>\n' +
'    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">\n' +
'      <stop offset="0" stop-color="#3FB950"/>\n' +
'      <stop offset="1" stop-color="#58A6FF"/>\n' +
'    </linearGradient>\n' +
'    <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">\n' +
'      <circle cx="1.5" cy="1.5" r="1.1" fill="#30363D"/>\n' +
'    </pattern>\n' +
'  </defs>\n' +
'  <rect x="0.5" y="0.5" width="1199" height="299" rx="18" fill="url(#bg)" stroke="#21262D"/>\n' +
'  <rect x="742" y="54" width="404" height="192" fill="url(#dots)" opacity="0.5"/>\n' +
'  <ellipse cx="980" cy="150" rx="250" ry="150" fill="url(#glow)"/>\n' +
'  <line x1="742" y1="60" x2="742" y2="240" stroke="#21262D" stroke-width="1"/>\n' +
'  <g stroke="#2D333B" stroke-width="1.2" fill="none">\n' +
'    <path d="M842 150 L926 104 L1016 150 L926 196 Z"/>\n' +
'    <path d="M926 104 L926 196"/>\n' +
'    <path d="M842 150 L1016 150"/>\n' +
'  </g>\n' +
'  <g>\n' +
'    <circle cx="842" cy="150" r="5" fill="#0D1117" stroke="#58A6FF" stroke-width="1.6"/>\n' +
'    <circle cx="926" cy="104" r="5" fill="#0D1117" stroke="#3FB950" stroke-width="1.6"/>\n' +
'    <circle cx="1016" cy="150" r="7" fill="#58A6FF"/>\n' +
'    <circle cx="926" cy="196" r="5" fill="#0D1117" stroke="#3FB950" stroke-width="1.6"/>\n' +
'    <circle cx="1068" cy="150" r="3" fill="#30363D"/>\n' +
'  </g>\n' +
'  <rect x="64" y="62" width="46" height="3" rx="1.5" fill="url(#accent)"/>\n' +
'  <text x="64" y="164" font-family="' + SANS + '" font-size="78" font-weight="700" letter-spacing="9" fill="#F0F6FC">' + esc(profile.name) + '</text>\n' +
'  <text x="66" y="210" font-family="' + MONO + '" font-size="17" letter-spacing="4" fill="#9AA7B4">' + tagline + '</text>\n' +
'</svg>\n';
}

function cardSvg(project, lang, index) {
  const lines = wrap(project.desc[lang], 84, 2);
  const desc = lines.map((line, i) => '<tspan x="42" dy="' + (i === 0 ? 0 : 21) + '">' + esc(line) + '</tspan>').join("");
  const tags = esc(project.tags.join("  ·  "));
  const num = String(index + 1).padStart(2, "0");
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 176" role="img" aria-label="' + esc(project.name) + '">\n' +
'  <title>' + esc(project.name) + '</title>\n' +
'  <rect x="0.5" y="0.5" width="999" height="175" rx="14" fill="#0D1117" stroke="#21262D"/>\n' +
'  <rect x="1" y="18" width="3" height="140" rx="1.5" fill="' + project.accent + '"/>\n' +
'  <text x="42" y="58" font-family="' + SANS + '" font-size="25" font-weight="600" fill="#F0F6FC">' + esc(project.name) + '</text>\n' +
'  <text x="960" y="58" text-anchor="end" font-family="' + MONO + '" font-size="11" letter-spacing="2" fill="#3D444D">' + num + '</text>\n' +
'  <text x="42" y="92" font-family="' + SANS + '" font-size="17" fill="#A1AAB4">' + desc + '</text>\n' +
'  <text x="42" y="148" font-family="' + MONO + '" font-size="12.5" letter-spacing="1.5" fill="#8B949E">' + tags + '</text>\n' +
'</svg>\n';
}

const copy = {
  en: {
    about: "About",
    work: "Selected work",
    engineering: "Engineering",
    stack: "Core stack",
    more: "More",
    repos: "Repositories",
    support: "Support",
    language: "Español",
    other: "README.es.md",
    headerAlt: "SMOUJ — AI, software, games, local-first"
  },
  es: {
    about: "Sobre mí",
    work: "Trabajo seleccionado",
    engineering: "Ingeniería",
    stack: "Stack principal",
    more: "Más",
    repos: "Repositorios",
    support: "Apoyar",
    language: "English",
    other: "README.md",
    headerAlt: "SMOUJ — IA, software, juegos, local-first"
  }
};

function linkLine(list) {
  return list.map((l) => '<a href="' + esc(l.url) + '">' + esc(l.label) + '</a>').join(" · ");
}

function readme(lang) {
  const c = copy[lang];
  const header = links.header.map((l) => '<a href="' + esc(l.url) + '">' + esc(l.label) + '</a>').join(" · ");

  const cards = projects.map((p, i) => {
    const alt = esc(p.name + " — " + p.desc[lang]);
    const image = '<a href="' + esc(p.url) + '"><img src="assets/projects/' + p.id + '-' + lang + '.svg" alt="' + alt + '" width="100%"></a>';
    const extra = [];
    if (p.links && p.links.length) {
      extra.push('<p align="center"><sub>' + linkLine(p.links) + '</sub></p>');
    }
    if (p.note) {
      extra.push('<p align="center"><sub>' + esc(p.note[lang]) + '</sub></p>');
    }
    return [image, ...extra].join("\n");
  }).join("\n\n");

  const principles = profile.principles.map((p) =>
    "**" + p.title[lang] + "**  \n" + p.body[lang]
  ).join("\n\n");

  const stack = profile.stack.map((s) =>
    "**" + s.label[lang] + "** — " + s.items.join(" · ")
  ).join("\n\n");

  const footer = linkLine(links.footer) + " · <a href=\"" + esc(links.support.url) + "\">" + esc(links.support.label[lang]) + "</a>";

  return '<div align="center">\n' +
'  <img src="assets/header-' + lang + '.svg" alt="' + esc(c.headerAlt) + '" width="100%">\n' +
'</div>\n\n' +
'<p align="center">\n' +
'  ' + header + ' · <a href="' + c.other + '">' + c.language + '</a>\n' +
'</p>\n\n' +
'## ' + c.about + '\n\n' +
profile.about[lang] + '\n\n' +
'## ' + c.work + '\n\n' +
cards + '\n\n' +
'## ' + c.engineering + '\n\n' +
principles + '\n\n' +
'## ' + c.stack + '\n\n' +
stack + '\n\n' +
'## ' + c.more + '\n\n' +
profile.more[lang] + '\n\n' +
'[' + c.repos + '](https://github.com/smouj?tab=repositories) · [Hugging Face](https://huggingface.co/Smouj013) · [Bluesky](https://bsky.app/profile/smouj013.bsky.social)\n\n' +
'---\n\n' +
'<p align="center"><sub>' + footer + '</sub></p>\n';
}

for (const lang of ["en", "es"]) {
  write("assets/header-" + lang + ".svg", headerSvg(lang));
  projects.forEach((p, i) => write("assets/projects/" + p.id + "-" + lang + ".svg", cardSvg(p, lang, i)));
  write(lang === "en" ? "README.md" : "README.es.md", readme(lang));
}

console.log("Built README.md, README.es.md and " + (projects.length * 2 + 2) + " SVG assets.");
