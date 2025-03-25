import React from 'react'
import './Time.css'

export const Time = () => {
  return (
    <>
        <div className="component-card animate-scale-in">
  <h2 className="text-xl font-medium mb-6">Cronómetro</h2>

  <div className="flex flex-col items-center gap-6">
    <div className="time-display">

      <span id="formatted-time" className="text-4xl font-mono font-medium tabular-nums tracking-wider">00:00</span>
    </div>

    <div className="button-container">
      <button id="start-button" className="btn-primary w-32 flex items-center justify-center gap-2" aria-label="Iniciar">
        <span className="icon">▶</span>
        <span>Iniciar</span>
      </button>

      <button id="stop-button" className="btn-primary w-32 flex items-center justify-center gap-2" aria-label="Parar" disabled>
        <span className="icon">■</span>
        <span>Parar</span>
      </button>
    </div>
  </div>
</div>

    </>
  )
}
