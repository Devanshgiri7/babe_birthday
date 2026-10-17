import { birthdayContent } from "./birthday-content.js";
import { heartMark, flightArt, windowArtwork, cakeArtwork, envelopeArtwork, coupleArtwork, heartSkyArt } from "./illustrations.js";

const stage = document.querySelector("#stage");
const root = document.querySelector("#scene-root");
const progressCount = document.querySelector("#progress-count");
const progressFill = document.querySelector("#progress-fill");
const progress = document.querySelector("#scene-progress");
const toast = document.querySelector("#sound-toast");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const recipient = escapeHTML(birthdayContent.recipient);
const personalize = (value) => escapeHTML(String(value).replaceAll("{{recipient}}", birthdayContent.recipient).replaceAll("{{date}}", birthdayContent.date));
const letter = birthdayContent.letter;

function particles(kind = "petals", count = 12) {
  return `<div class="particle-field particle-field--${kind}" aria-hidden="true">${Array.from({ length: count }, (_, index) => {
    const x = ((index * 37 + 11) % 96) + 2;
    const delay = -((index * 1.63) % 18);
    const duration = 11 + ((index * 7) % 12);
    const size = 7 + ((index * 13) % 12);
    const drift = ((index * 19) % 70) - 35;
    return `<span class="particle particle--${kind}" style="--x:${x}%;--delay:${delay}s;--duration:${duration}s;--size:${size}px;--drift:${drift}px"></span>`;
  }).join("")}</div>`;
}

function cityBackdrop(extraClass = "") {
  return `<div class="city-backdrop ${extraClass}" aria-hidden="true"><div class="stars stars--small"></div><div class="stars stars--large"></div><img src="./assets/night-city.svg" alt="" class="city-art"/><div class="cloud-bank"></div></div>`;
}

function scene(index, name, body, extraClass = "") {
  return `<section class="scene ${extraClass}" data-scene-index="${index}" aria-label="${escapeHTML(name)}" aria-hidden="${index === 0 ? "false" : "true"}" ${index === 0 ? 'data-active="true"' : ""}>
    <div class="scene-wash" aria-hidden="true"></div>
    ${body}
    <span class="scene-edge-light" aria-hidden="true"></span>
  </section>`;
}

function sceneHeading(kicker, title = "") {
  return `<div class="scene-heading"><span class="eyebrow">${kicker}</span>${title ? `<h2>${title}</h2>` : ""}</div>`;
}

const opening = scene(0, "A little universe for you", `
  ${cityBackdrop("city-backdrop--opening")}
  ${particles("petals", 8)}
  <div class="opening-orbit" aria-hidden="true">${flightArt}</div>
  <div class="opening-copy">
    <p class="date-line">${escapeHTML(birthdayContent.date)}</p>
    <p class="opening-dedication">For the person who<br/>makes the distance feel small</p>
    <h1 class="recipient-name">${recipient}<span class="name-heart">${heartMark}</span></h1>
  </div>
  <div class="opening-footer"><p class="script-caption">everything after this is yours</p><button class="primary-button" type="button" data-action="next" data-next="1">Play <span aria-hidden="true">↗</span></button></div>
  <span class="tiny-note">a little universe, just for you</span>
`, "scene--opening is-active");

const closedWindow = scene(1, "Same window, two skies", `
  <div class="window-scene-wrap">
    <div class="window-title">same window, two skies</div>
    <div class="window-spotlight" aria-hidden="true"></div>
    <div class="window-scene">${windowArtwork(false)}</div>
    <p class="window-caption script-caption">Pull the curtains up</p>
  </div>
  <div class="scene-action-area"><button class="primary-button primary-button--soft" type="button" data-action="open-curtains">Open the curtains <span aria-hidden="true">↗</span></button></div>
`, "scene--window scene--window-closed");

const openWindow = scene(2, "One more thing", `
  <div class="window-scene-wrap">
    <div class="window-title">same window, two skies</div>
    <div class="window-spotlight" aria-hidden="true"></div>
    <div class="window-scene">${windowArtwork(true)}</div>
    <p class="window-caption script-caption">one more thing</p>
  </div>
  <div class="scene-action-area"><button class="primary-button primary-button--soft" type="button" data-action="next" data-next="3">Tap to Continue <span aria-hidden="true">↗</span></button></div>
`, "scene--window scene--window-reveal");

const cake = scene(3, "Make a wish", `
  ${particles("petals", 18)}
  <div class="cake-message script-caption">wish big, I'm not there to stop you</div>
  <div class="cake-halo" aria-hidden="true"></div>
  <div class="cake-platform" aria-hidden="true"></div>
  <div class="cake-stage">${cakeArtwork}</div>
  <div class="cake-rose rose-left" aria-hidden="true">✿</div><div class="cake-rose rose-right" aria-hidden="true">✿</div>
  <div class="scene-action-area"><button class="primary-button" type="button" data-action="blow-candles">Blow the candles <span aria-hidden="true">✧</span></button></div>
`, "scene--cake");

const birthdayReveal = scene(4, "Happy Birthday", `
  ${particles("petals", 20)}
  <div class="birthday-halo" aria-hidden="true"></div>
  <div class="birthday-florals" aria-hidden="true"><svg viewBox="0 0 600 500"><path d="M54 300c113-13 96-189 240-208m-199 301c142-38 196-32 272-220 26-65 72-79 164-105M90 407c120-64 172-23 265-87 79-55 97-144 185-143" fill="none" stroke="#986867" stroke-width="3"/><g fill="#fff0e8" stroke="#dca7a3" stroke-width="1.5"><path d="M87 175c0-17 13-18 19-4 7-14 20-13 20 3s-20 26-20 26-19-10-19-25Zm354-92c0-17 13-18 19-4 7-14 20-13 20 3s-20 26-20 26-19-10-19-25Zm44 270c0-17 13-18 19-4 7-14 20-13 20 3s-20 26-20 26-19-10-19-25Zm-327 20c0-17 13-18 19-4 7-14 20-13 20 3s-20 26-20 26-19-10-19-25Z"/></g><g fill="#e8a9a5"><circle cx="108" cy="185" r="3"/><circle cx="472" cy="88" r="3"/><circle cx="492" cy="361" r="3"/><circle cx="193" cy="381" r="3"/></g></svg></div>
  <div class="birthday-lettering"><span>Happy</span><span>Birthday</span><small>to ${recipient}</small></div>
  <div class="birthday-pedestal" aria-hidden="true"><span class="pedestal-cake">${heartMark}</span></div>
  <div class="scene-action-area"><button class="primary-button" type="button" data-action="next" data-next="5">One more stop <span aria-hidden="true">↗</span></button></div>
`, "scene--birthday");

const envelopeScene = scene(5, "A sky full of letters", `
  ${particles("petals", 20)}
  <div class="envelope-glow" aria-hidden="true"></div>
  <div class="small-envelope-bed" aria-hidden="true">${Array.from({ length: 16 }, (_, i) => `<span class="mini-envelope" style="--tilt:${(i * 23) % 38 - 19}deg;--lift:${(i * 11) % 20}px;--env-delay:${(i % 8) * -.6}s"></span>`).join("")}</div>
  <button class="envelope-scene-art" type="button" data-action="open-envelope" aria-label="Open the birthday envelope">${envelopeArtwork}</button>
  <p class="envelope-caption script-caption">a few words, carried across the miles</p>
  <div class="scene-action-area"><button class="primary-button primary-button--soft" type="button" data-action="open-envelope">Tap to open <span aria-hidden="true">↗</span></button></div>
`, "scene--envelope");

const letterParagraphs = letter.paragraphs.map((paragraph, index) => `<p style="--line-delay:${(index + 1) * 120}ms">${personalize(paragraph)}</p>`).join("");
const letterCard = scene(6, "A birthday letter for Avni", `
  ${particles("petals", 10)}
  <article class="letter-card" aria-label="Birthday letter">
    <div class="letter-topline"><span class="letter-stamp">${heartMark}</span><span class="letter-date">${escapeHTML(birthdayContent.date)}</span></div>
    <h2 class="letter-recipient">${recipient} <span>💗,</span></h2>
    <div class="letter-scroll" tabindex="0" aria-label="Scroll through the birthday letter">
      <p class="letter-salutation">${personalize(letter.salutation)}</p>
      ${letterParagraphs}
      <p class="letter-signoff">${personalize(letter.signoff).replace("\n", "<br/>")}</p>
    </div>
    <span class="letter-flourish" aria-hidden="true">with all my heart</span>
  </article>
  <div class="letter-envelope-bed" aria-hidden="true">${Array.from({ length: 12 }, (_, i) => `<span class="mini-envelope" style="--tilt:${(i * 17) % 34 - 17}deg;--lift:${(i * 7) % 15}px;--env-delay:${(i % 6) * -.8}s"></span>`).join("")}</div>
  <div class="scene-action-area"><button class="primary-button primary-button--soft" type="button" data-action="next" data-next="7">Continue <span aria-hidden="true">↗</span></button></div>
`, "scene--letter");

const finalScene = scene(7, "However far, still this close", `
  ${cityBackdrop("city-backdrop--final")}
  ${particles("petals", 8)}
  <div class="heart-halo" aria-hidden="true"></div>
  <div class="final-heart">${heartSkyArt}</div>
  <p class="final-message script-caption">however far, still this close</p>
  <div class="final-couple">${coupleArtwork}</div>
  <button class="replay-button" type="button" data-action="replay">Replay our story <span aria-hidden="true">↺</span></button>
`, "scene--final");

root.innerHTML = [opening, closedWindow, openWindow, cake, birthdayReveal, envelopeScene, letterCard, finalScene].join("");
const scenes = [...root.querySelectorAll(".scene")];
let activeIndex = 0;
let isTransitioning = false;
let soundEnabled = false;
let musicElement = null;
let audioContext = null;
let masterGain = null;
let toastTimer;
let revealTimer;

function updateProgress(index) {
  progressCount.innerHTML = `${String(index + 1).padStart(2, "0")} <i>/</i> 08`;
  progressFill.style.width = `${((index + 1) / 8) * 100}%`;
  progress.setAttribute("aria-label", `Scene ${index + 1} of 8`);
}

function goTo(index) {
  if (isTransitioning || index < 0 || index >= scenes.length || index === activeIndex) return;
  isTransitioning = true;
  const outgoing = scenes[activeIndex];
  const incoming = scenes[index];
  // Fade the current scene away before revealing the next one, then hold the transition lock through its entrance.
  outgoing.classList.add("is-leaving");
  stage.classList.add("is-transitioning");
  const fadeOutTime = reducedMotion.matches ? 0 : 320;
  window.setTimeout(() => {
    outgoing.classList.remove("is-active", "is-leaving");
    outgoing.setAttribute("aria-hidden", "true");
    incoming.classList.add("is-active");
    incoming.setAttribute("aria-hidden", "false");
    activeIndex = index;
    stage.dataset.scene = String(index + 1);
    updateProgress(index);
    window.clearTimeout(revealTimer);
    revealTimer = window.setTimeout(() => {
      incoming.classList.add("is-settled");
      stage.classList.remove("is-transitioning");
      isTransitioning = false;
    }, reducedMotion.matches ? 0 : 820);
  }, fadeOutTime);
}

function resetJourney(preserveCurrentScene = false) {
  const previousIndex = activeIndex;
  scenes.forEach((item, index) => {
    item.classList.remove("curtains-open", "candles-out", "envelope-open", "is-settled", "is-entering", "is-leaving");
    const windowArt = item.querySelector(".window-art");
    if (windowArt && index === 1) windowArt.classList.remove("is-open");
    const curtainButton = item.querySelector('[data-action="open-curtains"]');
    if (curtainButton) {
      curtainButton.disabled = false;
      curtainButton.classList.remove("is-hidden");
      curtainButton.innerHTML = `Open the curtains <span aria-hidden="true">↗</span>`;
    }
    const continueButton = item.querySelector(".curtain-continue");
    continueButton?.remove();
    const candleButton = item.querySelector('[data-action="blow-candles"]');
    if (candleButton) candleButton.disabled = false;
    item.querySelectorAll('[data-action="open-envelope"]').forEach((button) => { button.disabled = false; });
    const envelopeActionButton = item.querySelector(".scene-action-area [data-action='open-envelope']");
    if (envelopeActionButton) envelopeActionButton.innerHTML = `Tap to open <span aria-hidden="true">↗</span>`;
  });
  if (!preserveCurrentScene) {
    activeIndex = 0;
    scenes[0].classList.add("is-active");
    scenes[0].setAttribute("aria-hidden", "false");
    scenes.slice(1).forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-hidden", "true");
    });
    stage.dataset.scene = "1";
    updateProgress(0);
  } else {
    activeIndex = previousIndex;
    scenes.forEach((item, index) => {
      item.classList.toggle("is-active", index === previousIndex);
      item.setAttribute("aria-hidden", String(index !== previousIndex));
    });
    stage.dataset.scene = String(previousIndex + 1);
    updateProgress(previousIndex);
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3000);
}

function startAmbientPad() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    showToast("Audio is not available in this browser.");
    return false;
  }
  try {
    audioContext ??= new AudioContextClass();
    if (audioContext.state === "suspended") audioContext.resume();
    if (!masterGain) {
      masterGain = audioContext.createGain();
      masterGain.gain.value = 0;
      masterGain.connect(audioContext.destination);
      [130.81, 196, 261.63, 329.63].forEach((frequency, index) => {
        const oscillator = audioContext.createOscillator();
        const voiceGain = audioContext.createGain();
        oscillator.type = index === 3 ? "sine" : "triangle";
        oscillator.frequency.value = frequency;
        oscillator.detune.value = index % 2 ? 3 : -2;
        voiceGain.gain.value = index === 3 ? 0.2 : 0.28;
        oscillator.connect(voiceGain).connect(masterGain);
        oscillator.start();
      });
    }
    masterGain.gain.cancelScheduledValues(audioContext.currentTime);
    masterGain.gain.setTargetAtTime(0.035, audioContext.currentTime, 1.1);
    return true;
  } catch {
    showToast("Audio could not start. Your story is still ready to enjoy.");
    return false;
  }
}

function stopAmbientPad() {
  if (masterGain && audioContext) masterGain.gain.setTargetAtTime(0, audioContext.currentTime, 0.35);
}

async function toggleSound(button) {
  if (!soundEnabled) {
    if (birthdayContent.musicSrc) {
      musicElement ??= new Audio(birthdayContent.musicSrc);
      musicElement.loop = true;
      musicElement.volume = 0.28;
      try {
        await musicElement.play();
      } catch {
        showToast("Tap again to start music, or leave the story in silence.");
        return;
      }
    } else if (!startAmbientPad()) return;
    soundEnabled = true;
  } else {
    soundEnabled = false;
    if (musicElement) musicElement.pause();
    stopAmbientPad();
  }
  button.setAttribute("aria-pressed", String(soundEnabled));
  button.setAttribute("aria-label", soundEnabled ? "Turn off music" : "Turn on music");
  button.title = soundEnabled ? "Turn music off" : "Turn music on";
}

function burstAt(sceneElement) {
  const layer = document.createElement("div");
  layer.className = "magic-burst";
  layer.setAttribute("aria-hidden", "true");
  layer.innerHTML = Array.from({ length: 18 }, (_, i) => `<span style="--angle:${i * 20}deg;--distance:${60 + (i % 4) * 24}px;--spark-delay:${(i % 5) * 35}ms">${i % 4 === 0 ? "♥" : "✧"}</span>`).join("");
  sceneElement.append(layer);
  window.setTimeout(() => layer.remove(), reducedMotion.matches ? 20 : 1300);
}

function openCurtains(button) {
  const current = scenes[1];
  if (button.disabled || current.classList.contains("curtains-open")) return;
  button.disabled = true;
  current.classList.add("curtains-open");
  current.querySelector(".window-art")?.classList.add("is-open");
  current.querySelector(".window-caption").textContent = "two skies, one little world";
  const delay = reducedMotion.matches ? 0 : 1050;
  window.setTimeout(() => {
    button.classList.add("is-hidden");
    const next = document.createElement("button");
    next.className = "primary-button primary-button--soft curtain-continue";
    next.type = "button";
    next.dataset.action = "next";
    next.dataset.next = "2";
    next.innerHTML = `Continue <span aria-hidden="true">↗</span>`;
    current.querySelector(".scene-action-area").append(next);
  }, delay);
}

function blowCandles(button) {
  const current = scenes[3];
  if (button.disabled) return;
  button.disabled = true;
  current.classList.add("candles-out");
  button.innerHTML = `Make a wish <span aria-hidden="true">✧</span>`;
  burstAt(current);
  window.setTimeout(() => goTo(4), reducedMotion.matches ? 40 : 1500);
}

function openEnvelope(button) {
  const current = scenes[5];
  if (button.disabled) return;
  current.querySelectorAll('[data-action="open-envelope"]').forEach((actionButton) => { actionButton.disabled = true; });
  current.classList.add("envelope-open");
  burstAt(current);
  const actionButton = current.querySelector(".scene-action-area [data-action='open-envelope']");
  if (actionButton) actionButton.innerHTML = `A little note for you <span aria-hidden="true">✧</span>`;
  window.setTimeout(() => goTo(6), reducedMotion.matches ? 40 : 1250);
}

root.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button || button.disabled) return;
  const action = button.dataset.action;
  if (action === "next") goTo(Number(button.dataset.next));
  if (action === "open-curtains") openCurtains(button);
  if (action === "blow-candles") blowCandles(button);
  if (action === "open-envelope") openEnvelope(button);
  if (action === "replay") {
    if (isTransitioning) return;
    resetJourney(true);
    goTo(0);
  }
});

document.querySelector("#sound-toggle").addEventListener("click", (event) => toggleSound(event.currentTarget));
document.querySelector("#fullscreen-toggle").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  try {
    if (!document.fullscreenElement) {
      if (!stage.requestFullscreen) {
        showToast("Fullscreen is not supported here. The story works beautifully without it.");
        return;
      }
      await stage.requestFullscreen();
    } else if (document.exitFullscreen) await document.exitFullscreen();
  } catch {
    showToast("Fullscreen is not available here. The story works beautifully without it.");
  }
});
document.addEventListener("fullscreenchange", () => {
  const button = document.querySelector("#fullscreen-toggle");
  const fullscreen = Boolean(document.fullscreenElement);
  button.setAttribute("aria-label", fullscreen ? "Exit fullscreen" : "Enter fullscreen");
  button.title = fullscreen ? "Exit fullscreen" : "Fullscreen";
});
document.addEventListener("visibilitychange", () => document.body.classList.toggle("page-hidden", document.hidden));
reducedMotion.addEventListener?.("change", () => stage.classList.toggle("reduce-motion", reducedMotion.matches));
if (reducedMotion.matches) stage.classList.add("reduce-motion");
stage.dataset.scene = "1";
updateProgress(0);
