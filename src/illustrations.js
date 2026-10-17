const heartMark = `<svg viewBox="0 0 64 58" aria-hidden="true"><path d="M32 56 7.7 33.1C-5.1 20.8 2.2 2.5 16.5 2.5c7 0 12.4 4.1 15.5 10.1C35.1 6.6 40.5 2.5 47.5 2.5c14.3 0 21.6 18.3 8.8 30.6L32 56Z"/></svg>`;

const flightArt = `<svg class="flight-art" viewBox="0 0 440 150" role="img" aria-label="A heart follows a dotted path toward a paper airplane">
  <path class="flight-path" d="M28 40c36 47 105 49 153 23 42-23 91-61 151-35 37 16 36 47 3 59-44 16-118-5-139 21-17 20 20 34 60 25 40-9 71-21 102-12"/>
  <g class="flight-heart"><path d="M39 46 27 35C18 27 22 15 32 15c5 0 8 3 10 7 2-4 6-7 10-7 10 0 15 12 5 20L39 46Z"/></g>
  <g class="paper-plane" transform="translate(355 99) rotate(-14)"><path d="m0 14 38-13-13 29-7-12L0 14Z" fill="#f4eee7"/><path d="m18 18 20-17-13 29-7-12Z" fill="#c7d4e4"/><path d="m0 14 18 4 7 12" fill="none" stroke="#fff5eb" stroke-width="1.2"/></g>
</svg>`;

function windowArtwork(open = false) {
  return `<svg class="window-art${open ? " is-open" : ""}" viewBox="0 0 700 520" role="img" aria-label="A balcony window between a warm room and a blue city night">
    <defs>
      <linearGradient id="wall" x1="90" y1="60" x2="610" y2="420" gradientUnits="userSpaceOnUse"><stop stop-color="#26384f"/><stop offset=".48" stop-color="#536070"/><stop offset="1" stop-color="#6c4850"/></linearGradient>
      <linearGradient id="roomGlow" x1="230" y1="180" x2="360" y2="370" gradientUnits="userSpaceOnUse"><stop stop-color="#ffcc8b"/><stop offset=".65" stop-color="#ae7154"/><stop offset="1" stop-color="#483040"/></linearGradient>
      <linearGradient id="nightGlow" x1="410" y1="150" x2="470" y2="375" gradientUnits="userSpaceOnUse"><stop stop-color="#304a78"/><stop offset=".6" stop-color="#142542"/><stop offset="1" stop-color="#101827"/></linearGradient>
      <linearGradient id="drape" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#74505a"/><stop offset=".45" stop-color="#493746"/><stop offset="1" stop-color="#262638"/></linearGradient>
      <linearGradient id="drapeBlue" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#526680"/><stop offset=".5" stop-color="#344158"/><stop offset="1" stop-color="#252b3a"/></linearGradient>
      <linearGradient id="windowCity" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#9fc7ef"/><stop offset="1" stop-color="#25364e"/></linearGradient>
      <clipPath id="windowView"><path d="M188 372V201c0-80 73-117 162-117s162 37 162 117v171H188Z"/></clipPath>
    </defs>
    <ellipse cx="350" cy="448" rx="282" ry="32" fill="#111b2b" opacity=".8"/>
    <path d="M95 45h510v363H95z" fill="url(#wall)" stroke="#101827" stroke-width="10"/>
    <path d="M105 52h490M105 117h490M105 182h490M105 247h490M105 312h490M105 377h490M170 48v355M240 48v355M310 48v355M380 48v355M450 48v355M520 48v355" stroke="#b7b1b0" stroke-opacity=".18" stroke-width="2"/>
    <path d="M158 378V204c0-103 81-145 192-145s192 42 192 145v174H158Z" fill="#201c29" stroke="#261d29" stroke-width="18"/>
    <g clip-path="url(#windowView)">
      <path d="M178 69h173v330H178z" fill="url(#roomGlow)"/>
      <path d="M351 69h174v330H351z" fill="url(#nightGlow)"/>
      <circle cx="231" cy="131" r="63" fill="#ffcf82" opacity=".16"/>
      <path d="M188 303h165v91H188z" fill="#4f3436"/>
      <path d="M188 299h165v7H188z" fill="#d5a477"/>
      <path d="M207 188h36v55h-36zM253 166h47v78h-47z" fill="#745346" opacity=".68"/>
      <path d="M211 194h29v36h-29zM258 172h37v59h-37z" fill="#e7b87f" opacity=".67"/>
      <g fill="#fff0c9"><circle cx="217" cy="203" r="2"/><circle cx="232" cy="218" r="2"/><circle cx="264" cy="183" r="2"/><circle cx="284" cy="205" r="2"/></g>
      <path d="M317 278v-79" stroke="#45303a" stroke-width="6"/><path d="m296 202 42-1-7-16h-29l-6 17Z" fill="#f7c781"/><path d="M296 204h42v9h-42z" fill="#f3c078"/>
      <circle cx="318" cy="206" r="28" fill="#ffcf82" opacity=".14"/>
      <path d="M353 338h184v61H353z" fill="#111c31"/>
      <path d="M364 274h28v64h-28zM398 231h31v107h-31zM437 265h27v73h-27zM470 211h37v127h-37zM511 250h23v88h-23z" fill="#172b49"/>
      <path d="M364 274h28v64h-28zM398 231h31v107h-31zM437 265h27v73h-27zM470 211h37v127h-37zM511 250h23v88h-23z" fill="url(#windowCity)" opacity=".7"/>
      <circle cx="466" cy="127" r="19" fill="#f8d6b3" opacity=".85"/><circle cx="466" cy="127" r="34" fill="#9cbbe3" opacity=".1"/>
      <g fill="#ebc98d" opacity=".78"><rect x="370" y="287" width="4" height="6"/><rect x="405" y="246" width="5" height="7"/><rect x="419" y="264" width="5" height="7"/><rect x="480" y="225" width="5" height="8"/><rect x="493" y="244" width="5" height="8"/><rect x="516" y="261" width="4" height="7"/></g>
      <g class="window-person person-left"><ellipse cx="289" cy="260" rx="32" ry="43" fill="#362834"/><circle cx="285" cy="218" r="23" fill="#d7a081"/><path d="M261 219c0-32 39-37 48-8l-5 11c-11-5-23-11-43-3Z" fill="#392a2d"/><path d="M249 293c8-32 65-38 80 1v45h-80v-46Z" fill="#bf827f"/><path d="M274 254c6 3 12 3 18 0" stroke="#6e4140" stroke-width="2" stroke-linecap="round"/><circle cx="294" cy="222" r="2" fill="#302326"/></g>
      <g class="window-person person-right"><ellipse cx="410" cy="263" rx="29" ry="42" fill="#151d2c"/><circle cx="416" cy="217" r="22" fill="#c58e70"/><path d="M394 218c-1-27 36-36 48-12l-4 12c-13-5-24-3-44 5Z" fill="#1d202b"/><path d="M382 293c6-30 55-37 77-1v47h-77v-46Z" fill="#344b70"/><path d="M406 254c6 3 12 3 17 0" stroke="#624034" stroke-width="2" stroke-linecap="round"/><circle cx="427" cy="221" r="2" fill="#25202a"/></g>
      <g fill="#fff1c7" opacity=".65"><circle cx="204" cy="122" r="2"/><circle cx="268" cy="144" r="1.7"/><circle cx="459" cy="168" r="1.7"/><circle cx="501" cy="189" r="1.4"/></g>
    </g>
    <path d="M349 60v321M157 204c0-103 81-145 193-145s192 42 192 145" fill="none" stroke="#1c1c29" stroke-width="15"/>
    <path d="M351 66v307" stroke="#c3a1a0" stroke-opacity=".42" stroke-width="2"/>
    <g class="curtain curtain-left"><path d="M171 189c25-27 57-32 93-18v184h-92l-7-166Z" fill="url(#drapeBlue)"/><path d="M187 183v170m17-178v182m18-184v184m18-179v179" stroke="#b3b9c2" stroke-opacity=".13" stroke-width="7"/><path d="M170 355h94" stroke="#b9a2a0" stroke-opacity=".35" stroke-width="6"/></g>
    <g class="curtain curtain-right"><path d="M529 189c-25-27-57-32-93-18v184h92l7-166Z" fill="url(#drape)"/><path d="M513 183v170m-17-178v182m-18-184v184m-18-179v179" stroke="#f0c1a4" stroke-opacity=".13" stroke-width="7"/><path d="M530 355h-94" stroke="#b9a2a0" stroke-opacity=".35" stroke-width="6"/></g>
    <path d="M130 372h440v17H130z" fill="#392732"/><path d="M122 388h456v13H122z" fill="#75514c"/>
    <path d="M82 385h536v18H82z" fill="#30242d"/><path d="M83 403h534v12H83z" fill="#664440"/>
    <path d="M111 403v47m479-47v47M146 403v46m408-46v46M190 403v46m320-46v46M234 403v46m232-46v46M278 403v46m144-46v46M322 403v46m56-46v46" stroke="#211d2a" stroke-width="7"/>
    <path d="M71 453h558v13H71z" fill="#4c3435"/><path d="M91 467h520v12H91z" fill="#221d29"/>
    <g class="window-plant" fill="#253b35"><path d="M116 383c-3-25 10-38 22-40 0 19-6 32-22 40Zm19 0c2-30 18-43 30-39-2 19-10 33-30 39Zm-29 0c-11-22-5-39 5-45 8 17 8 31-5 45Z"/><path d="M551 383c-3-25 10-38 22-40 0 19-6 32-22 40Zm19 0c2-30 18-43 30-39-2 19-10 33-30 39Zm-29 0c-11-22-5-39 5-45 8 17 8 31-5 45Z"/></g>
    <path d="M103 390h50l-6 17h-38l-6-17Zm470 0h50l-6 17h-38l-6-17Z" fill="#916d62"/>
  </svg>`;
}

const cakeArtwork = `<svg class="cake-art" viewBox="0 0 520 610" role="img" aria-label="An ivory two-tier cake with three candles and cherry blossoms">
  <defs>
    <linearGradient id="cakeIvory" x1="100" y1="0" x2="410" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#d8c8ba"/><stop offset=".18" stop-color="#fff7ee"/><stop offset=".58" stop-color="#f4e8dd"/><stop offset="1" stop-color="#c7b2a8"/></linearGradient>
    <linearGradient id="cakeTop" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fffaf3"/><stop offset="1" stop-color="#ead8ce"/></linearGradient>
    <linearGradient id="candleWax" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#c8959c"/><stop offset=".48" stop-color="#fff2e8"/><stop offset="1" stop-color="#c1868d"/></linearGradient>
    <radialGradient id="candleFlame"><stop stop-color="#fff6c5"/><stop offset=".38" stop-color="#ffc05f"/><stop offset="1" stop-color="#f47a50"/></radialGradient>
    <filter id="cakeGlow" x="-50%" y="-30%" width="200%" height="180%"><feGaussianBlur stdDeviation="15"/></filter>
  </defs>
  <ellipse cx="260" cy="524" rx="205" ry="38" fill="#c27385" opacity=".21" filter="url(#cakeGlow)"/>
  <ellipse cx="260" cy="535" rx="190" ry="24" fill="#d7b4ad" opacity=".16"/>
  <path d="M190 491h140l24 65H166l24-65Z" fill="#433035"/><ellipse cx="260" cy="492" rx="71" ry="17" fill="#ae8380"/><path d="M142 467c0-13 53-24 118-24s118 11 118 24v18c0 14-53 26-118 26s-118-12-118-26v-18Z" fill="url(#cakeIvory)"/><ellipse cx="260" cy="467" rx="118" ry="25" fill="url(#cakeTop)" stroke="#fff8f0" stroke-width="4"/>
  <path d="M174 338c0-17 39-29 86-29s86 12 86 29v116c0 19-39 32-86 32s-86-13-86-32V338Z" fill="url(#cakeIvory)"/><ellipse cx="260" cy="339" rx="86" ry="28" fill="url(#cakeTop)"/><path d="M174 354c23 13 53 18 86 18s64-6 86-18v13c-22 13-53 19-86 19s-63-6-86-19v-13Z" fill="#fff6ee" opacity=".75"/><path d="M181 447c20 12 47 18 79 18 34 0 60-7 79-18" stroke="#c9989b" stroke-opacity=".5" stroke-width="2"/>
  <path d="M208 214c0-15 24-25 52-25s52 10 52 25v112c0 18-23 29-52 29s-52-11-52-29V214Z" fill="url(#cakeIvory)"/><ellipse cx="260" cy="215" rx="52" ry="20" fill="url(#cakeTop)"/><path d="M209 230c14 10 31 14 51 14s39-5 51-14v12c-14 10-31 14-51 14s-37-4-51-14v-12Z" fill="#fff7ef"/>
  <g fill="url(#candleWax)" stroke="#b17b83" stroke-width="1"><rect x="217" y="129" width="19" height="84" rx="6"/><rect x="250" y="105" width="20" height="108" rx="6"/><rect x="284" y="132" width="19" height="81" rx="6"/></g>
  <g stroke="#685150" stroke-width="2"><path d="M226 129v-9m34-15v-9m33 36v-8"/></g>
  <g class="candle-flames"><path class="flame flame-one" d="M226 119c-16-18 3-33 7-46 13 16 18 29 3 46-3 4-8 4-10 0Z" fill="url(#candleFlame)"/><path class="flame flame-two" d="M255 97c-17-19 2-36 7-51 14 19 19 33 3 51-3 4-8 4-10 0Z" fill="url(#candleFlame)"/><path class="flame flame-three" d="M291 124c-16-17 2-31 6-44 13 17 17 28 3 44-3 4-7 4-9 0Z" fill="url(#candleFlame)"/></g>
  <g class="smoke"><path d="M227 118c-13-12 15-16 2-31m32 10c-13-12 15-16 2-31m32 57c-13-12 15-16 2-31" fill="none" stroke="#cbd4df" stroke-width="4" stroke-linecap="round" opacity=".75"/></g>
  <g fill="none" stroke="#8c595a" stroke-width="4" stroke-linecap="round"><path d="M115 425c46-37 66-61 88-121 15-39 20-66 46-98M404 437c-35-32-50-61-73-109-17-34-27-57-43-82M141 390c36-3 63 6 88 35M365 386c-40 1-66 18-88 48M191 343c-27-11-45-25-59-48M339 319c28-16 46-35 58-58"/></g>
  <g fill="#6f8b69"><path d="M156 380c-21-20-18-35-5-40 15 11 20 24 5 40Zm35-59c-23-16-24-31-12-38 17 9 24 22 12 38Zm-44-35c-5-25 5-34 18-31 7 18 2 30-18 31Zm186 90c20-22 18-36 4-41-16 12-20 25-4 41Zm-31-68c24-15 25-30 14-38-18 8-25 21-14 38Zm48-36c6-24-3-34-16-32-8 18-4 31 16 32Z"/></g>
  <g class="blossoms" fill="#fff1eb" stroke="#d7a0a0" stroke-width="1.6"><g transform="translate(151 319)"><ellipse cy="-10" rx="7" ry="11"/><ellipse cx="10" cy="-2" rx="7" ry="11" transform="rotate(72 10 -2)"/><ellipse cx="6" cy="9" rx="7" ry="11" transform="rotate(144 6 9)"/><ellipse cx="-6" cy="9" rx="7" ry="11" transform="rotate(216 -6 9)"/><ellipse cx="-10" cy="-2" rx="7" ry="11" transform="rotate(288 -10 -2)"/><circle r="4" fill="#dfa965" stroke="none"/></g><g transform="translate(220 266) scale(.85)"><ellipse cy="-10" rx="7" ry="11"/><ellipse cx="10" cy="-2" rx="7" ry="11" transform="rotate(72 10 -2)"/><ellipse cx="6" cy="9" rx="7" ry="11" transform="rotate(144 6 9)"/><ellipse cx="-6" cy="9" rx="7" ry="11" transform="rotate(216 -6 9)"/><ellipse cx="-10" cy="-2" rx="7" ry="11" transform="rotate(288 -10 -2)"/><circle r="4" fill="#dfa965" stroke="none"/></g><g transform="translate(363 292) scale(.9)"><ellipse cy="-10" rx="7" ry="11"/><ellipse cx="10" cy="-2" rx="7" ry="11" transform="rotate(72 10 -2)"/><ellipse cx="6" cy="9" rx="7" ry="11" transform="rotate(144 6 9)"/><ellipse cx="-6" cy="9" rx="7" ry="11" transform="rotate(216 -6 9)"/><ellipse cx="-10" cy="-2" rx="7" ry="11" transform="rotate(288 -10 -2)"/><circle r="4" fill="#dfa965" stroke="none"/></g><g transform="translate(317 402) scale(1.08)"><ellipse cy="-10" rx="7" ry="11"/><ellipse cx="10" cy="-2" rx="7" ry="11" transform="rotate(72 10 -2)"/><ellipse cx="6" cy="9" rx="7" ry="11" transform="rotate(144 6 9)"/><ellipse cx="-6" cy="9" rx="7" ry="11" transform="rotate(216 -6 9)"/><ellipse cx="-10" cy="-2" rx="7" ry="11" transform="rotate(288 -10 -2)"/><circle r="4" fill="#dfa965" stroke="none"/></g><g transform="translate(183 437) scale(.68)"><ellipse cy="-10" rx="7" ry="11"/><ellipse cx="10" cy="-2" rx="7" ry="11" transform="rotate(72 10 -2)"/><ellipse cx="6" cy="9" rx="7" ry="11" transform="rotate(144 6 9)"/><ellipse cx="-6" cy="9" rx="7" ry="11" transform="rotate(216 -6 9)"/><ellipse cx="-10" cy="-2" rx="7" ry="11" transform="rotate(288 -10 -2)"/><circle r="4" fill="#dfa965" stroke="none"/></g><g transform="translate(391 388) scale(.7)"><ellipse cy="-10" rx="7" ry="11"/><ellipse cx="10" cy="-2" rx="7" ry="11" transform="rotate(72 10 -2)"/><ellipse cx="6" cy="9" rx="7" ry="11" transform="rotate(144 6 9)"/><ellipse cx="-6" cy="9" rx="7" ry="11" transform="rotate(216 -6 9)"/><ellipse cx="-10" cy="-2" rx="7" ry="11" transform="rotate(288 -10 -2)"/><circle r="4" fill="#dfa965" stroke="none"/></g></g>
  <g fill="#e5a9a5"><circle cx="133" cy="361" r="4"/><circle cx="231" cy="302" r="4"/><circle cx="383" cy="344" r="4"/><circle cx="294" cy="433" r="4"/><circle cx="173" cy="401" r="3"/></g>
</svg>`;

const envelopeArtwork = `<svg class="hero-envelope" viewBox="0 0 520 360" role="img" aria-label="An ivory envelope with a letter tucked inside">
  <defs><linearGradient id="paper" x1="65" y1="80" x2="452" y2="317" gradientUnits="userSpaceOnUse"><stop stop-color="#fffaf1"/><stop offset=".52" stop-color="#eee1d5"/><stop offset="1" stop-color="#d7c4ba"/></linearGradient><linearGradient id="flap" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff8ec"/><stop offset="1" stop-color="#dfcec1"/></linearGradient><filter id="envShadow" x="-20%" y="-25%" width="140%" height="165%"><feDropShadow dx="0" dy="18" stdDeviation="14" flood-color="#02050c" flood-opacity=".42"/></filter></defs>
  <g filter="url(#envShadow)"><path d="M64 105c0-10 8-18 18-18h356c10 0 18 8 18 18v215H64V105Z" fill="url(#paper)" stroke="#fff8ed" stroke-width="3"/><path class="letter-sheet" d="M130 124h260v143H130z" rx="4" fill="#fffaf1"/><path d="M153 158h154m-154 20h206m-206 20h193m-193 20h169" stroke="#c5a9a1" stroke-opacity=".43" stroke-width="5" stroke-linecap="round"/><path d="M64 110 260 245 456 110v210H64V110Z" fill="#e9dbd0" stroke="#f9eee3" stroke-width="2"/><path d="m64 320 146-126 50 51 50-51 146 126H64Z" fill="url(#paper)" stroke="#d7c4ba" stroke-width="2"/><path class="envelope-flap" d="M64 104c0-10 8-17 18-17h356c10 0 18 7 18 17L260 239 64 104Z" fill="url(#flap)" stroke="#fffaf3" stroke-width="3"/><path d="m64 105 196 134 196-134" fill="none" stroke="#c8b3a9" stroke-opacity=".55" stroke-width="2"/></g>
  <path class="envelope-seal" d="M260 253c-16-15-35 1-19 18l19 18 19-18c16-17-3-33-19-18Z" fill="#dc7883"/>
</svg>`;

const coupleArtwork = `<svg class="couple-art" viewBox="0 0 540 370" role="img" aria-label="Two people standing close together on a balcony">
  <defs><linearGradient id="silhouetteGlow" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#ffe3ba" stop-opacity=".45"/><stop offset="1" stop-color="#f7a38f" stop-opacity="0"/></linearGradient></defs>
  <ellipse cx="270" cy="274" rx="135" ry="112" fill="url(#silhouetteGlow)"/>
  <path d="M55 245h430M65 275h410M78 308h384" stroke="#111827" stroke-width="8"/><path d="M92 236v98m356-98v98M145 243v91m250-91v91M198 243v91m144-91v91M251 243v91m38-91v91" stroke="#151a27" stroke-width="7"/>
  <g fill="#080b13"><path d="M203 170c0-27 18-46 42-46s42 19 42 46c0 18-10 31-22 37l11 27 45 21c12 6 18 18 20 34H158c2-18 9-29 22-36l43-20 11-26c-19-7-31-20-31-37Z"/><path d="M303 183c0-26 16-44 39-44s39 18 39 44c0 16-8 27-20 34l12 21c31 11 48 31 53 62H283c5-29 16-49 43-62l12-21c-21-7-35-17-35-34Z"/></g>
  <path d="M250 158c5 6 10 8 17 8m56 18c5 5 11 7 17 7" stroke="#d9a08b" stroke-opacity=".5" stroke-width="2" stroke-linecap="round"/>
  <path d="M126 343h289" stroke="#080b13" stroke-width="20" stroke-linecap="round"/>
</svg>`;

const heartSkyArt = `<svg class="sky-heart" viewBox="0 0 120 112" aria-hidden="true"><defs><radialGradient id="heartGlow" cx=".4" cy=".25" r=".8"><stop stop-color="#ff938e"/><stop offset=".65" stop-color="#e96070"/><stop offset="1" stop-color="#c7425a"/></radialGradient></defs><path d="M60 108 12 63C-12 40 5 5 32 5c14 0 23 8 28 19C66 13 76 5 89 5c27 0 44 35 20 58l-49 45Z" fill="url(#heartGlow)"/></svg>`;
