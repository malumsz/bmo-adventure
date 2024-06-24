import {
    getCustomProperty,
    incrementCustomProperty,
    setCustomProperty,
  } from "./updateCustomProperty.js"
  
  const SPEED = 0.02 // Velocidade mais lenta que o chão para criar profundidade
  const skyElem = document.querySelector("[data-sky]")
  
  export function setupSky() {
    setCustomProperty(skyElem, "--left", 0)
  }
  
  export function updateSky(delta, speedScale) {
    incrementCustomProperty(skyElem, "--left", delta * speedScale * SPEED * -1)
  
    if (getCustomProperty(skyElem, "--left") <= -300) {
      incrementCustomProperty(skyElem, "--left", 600)
    }
  }
  