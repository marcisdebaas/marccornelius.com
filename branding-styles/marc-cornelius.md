# Marc Cornelius - Brand Style Guide

## Brand Identity

**Stijl:** Minimalistisch, premium, tech-forward
**Toon:** Professioneel maar benaderbaar, modern en zelfverzekerd
**Design approach:** Clean en rustig - veel witruimte, geen ornamentele elementen, geen gradients, geen zware animaties

---

## Kleuren

### Dark Theme (Primair / Homepage)

| Rol               | Kleur      | Hex       |
|-------------------|------------|-----------|
| Achtergrond       | Deep dark  | `#141414` |
| Card achtergrond  | Dark card  | `#1E1E1E` |
| Border            | Dark border| `#2A2A2A` |
| Accent (primair)  | Mint groen | `#34D399` |
| Heading tekst     | Off-white  | `#F0EDE8` |
| Body tekst        | Taupe      | `#A8A29E` |
| Ondersteunend     | Grijs      | `#666666` |
| Diep zwart        | Sectie bg  | `#0A0A0A` |

### Light Theme (Business OS)

| Rol               | Kleur           | Hex       |
|-------------------|-----------------|-----------|
| Achtergrond       | Wit             | `#FFFFFF` |
| Alt. achtergrond  | Off-white       | `#F8F7F5` |
| Accent (primair)  | Forest groen    | `#1B5E3B` |
| Heading tekst     | Near black      | `#111111` |
| Body tekst        | Donkergrijs     | `#3D3D3D` |
| Ondersteunend     | Medium grijs    | `#777777` |
| Border            | Lichtgrijs      | `#E5E5E5` |

---

## Typografie

### Fonts

| Type     | Font              | Gebruik                        |
|----------|-------------------|--------------------------------|
| Heading  | **DM Serif Display** | H1, H2, H3 - weight 400     |
| Body     | **DM Sans**        | Paragrafen, labels, UI-tekst  |
| Fallback | Inter              | Beschikbaar, spaarzaam gebruikt|

### Schaalverdeling

| Element     | Desktop          | Mobiel     | Line-height  |
|-------------|------------------|------------|--------------|
| H1          | 48px             | 40px       | 56px         |
| H2          | 40px (2.5rem)    | 32px       | Tight        |
| H3          | 32px (2rem)      | 22px       | Tight        |
| Body        | 18px             | 16px       | 1.6 - 1.75  |
| Small       | 15px             | 13px       | Normal       |
| Labels/Tags | 13px uppercase   | 13px       | Tracking 0.12em |

### Font weights

- 400 (regular) - body tekst, headings (DM Serif Display)
- 500 (medium) - secondary buttons, labels
- 600 (semibold) - primary buttons, emphasis
- 700 (bold) - sterke nadruk

---

## Spacing & Layout

### Container

- Max-width: `6xl` (1152px)
- Horizontale padding: 3rem (desktop), 1.5rem (mobiel)
- Verticale sectie-spacing: 5rem - 6rem (py-20 / py-24)

### Gaps

| Context       | Spacing          |
|---------------|------------------|
| Card grid     | gap-4 tot gap-6  |
| Secties       | gap-8 tot gap-16 |
| Lijst items   | gap-2 tot gap-3  |

### Grid

- Standaard: 1 kolom (mobiel) naar 2-3 kolommen (desktop)
- Flexbox-first benadering
- Mobile-first responsive design

---

## Componenten

### Buttons

**Primary CTA:**
- Vorm: `rounded-full` (pill shape)
- Padding: `py-3.5 px-8`
- Achtergrond: accent kleur (`#34D399` dark / `#1B5E3B` light)
- Tekst: donker op accent achtergrond, semibold
- Hover: opacity 90%

**Secondary:**
- Vorm: `rounded-full`
- Border: 1px heading kleur
- Achtergrond: transparant
- Hover: subtiele achtergrond tint (heading/10%)

### Cards

- Achtergrond: `#1E1E1E` (dark) / wit (light)
- Border: 1px `#2A2A2A`
- Border-radius: 16px (`rounded-2xl`)
- Padding: 28px - 32px (p-7 / p-8)
- Hover: border kleurt naar accent/30%

### Inputs

- Padding: `px-5 py-3.5`
- Border-radius: 8px (`rounded-lg`)
- Achtergrond: card kleur
- Border: 1px border kleur
- Focus: border wordt accent kleur
- Placeholder: `#666666`

### Tekst decoratie

- Accent underline: accent kleur
- Underline offset: 4px
- Underline dikte: 2px
- Links: hover via opacity of kleur transition

---

## Visuele kenmerken

### Wat wel

- Flat kleuren, geen gradients
- Subtiele transitions (opacity, kleur, border)
- Veel ademruimte
- Sterke typografische hierarchie
- Professionele fotografie (headshots, lifestyle)
- SVG iconen (inline)
- Sectie-scheiding via dunne border-top lijnen

### Wat niet

- Geen gradients
- Geen zware animaties of motion
- Geen decoratieve illustraties
- Geen drukke patronen of texturen
- Geen afgeronde foto's (behalve avatars)

---

## Brand Assets

| Asset          | Locatie                        | Formaat   |
|----------------|--------------------------------|-----------|
| Logo           | `/public/images/logo.png`      | 48x24px   |
| Client logos   | `/public/images/client-logos.svg`| 366x33px |
| Foto's Marc    | `/public/images/_MG_*.jpg`     | JPEG      |
| Blog images    | `/public/images/blog/`         | Divers    |

**Logo gedrag:** Inverteert op light theme (via CSS `invert`)
**Client logos:** 40% opacity, subtiel op achtergrond

---

## Toepassing per context

### Dark context (standaard)

Gebruik voor: homepage, portfolio, persoonlijke branding, social media visuals

### Light context

Gebruik voor: zakelijke proposities, Business OS pagina's, formele documenten

### Consistentieregels

1. Altijd DM Serif Display voor headings, DM Sans voor body
2. Accent groen is de enige kleuraccent - gebruik spaarzaam
3. Buttons zijn altijd pill-shaped (rounded-full) tenzij in Business OS context
4. Minimaal 2 niveaus typografisch contrast per sectie (heading + body)
5. Cards hebben altijd een subtiele border, nooit een shadow
