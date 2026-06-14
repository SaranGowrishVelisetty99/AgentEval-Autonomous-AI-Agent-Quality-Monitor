import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AgentEvalAI from './AgentEval.jsx'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <AgentEvalAI />
    </StrictMode>,
  )
}