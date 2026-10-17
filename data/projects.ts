export const projects = [
  {
    slug: 'signal-os',
    title: 'Signal OS',
    tag: 'AI Operations',
    short: 'A workflow intelligence layer that helps teams automate triage, summarization and escalation across operations.',
    cover: '/assets/signal-os.png',
    content: `
## Signal OS — AI Operations

Signal OS is a workflow intelligence layer built to help operations teams cut through alert fatigue and focus on high-value incidents. We designed an automated triage pipeline that ingests telemetry, applies classification and summarization, and surfaces concise action items to the right teams.

Highlights

- Automated triage reduced mean time to acknowledge by 4x
- Smart summarization compresses incident context into single-paragraph handoffs
- Integrated with common ticketing and chatops workflows for one-click escalation

Design & Build

We focused on a clean, signal-first interface that prioritized context and next actions. The UI combines real-time metrics with compact timeline views and customizable rules so teams can tune automation with confidence.
`
  },
  {
    slug: 'nexus-pilot',
    title: 'Nexus Pilot',
    tag: 'Product Design',
    short: 'A rapid experimentation platform for exploring user journeys, prompts, pricing panels and AI features.',
    cover: '/assets/nexus-pilot.png',
    content: `
## Nexus Pilot — Product Design

Nexus Pilot is a rapid experimentation platform that helps product teams prototype AI features, run controlled rollouts, and measure impact on core metrics. We shipped a modular experimentation flow that supported A/B, multi-arm bandit tests and feature flags.

Highlights

- Fast prototyping with composable UI blocks
- Built-in instrumentation for prompt-level analytics
- Easy rollback and targeted rollouts by cohort

Design & Build

Our approach focused on developer ergonomics and product clarity. The interface guides users through hypothesis definition, prompt editing, and result analysis while keeping experimentation costs visible.
`
  },
  {
    slug: 'sage-loop',
    title: 'Sage Loop',
    tag: 'Research',
    short: 'A decision-support system for research teams that blends qualitative insight with measurable action loops.',
    cover: '/assets/sage-loop.png',
    content: `
## Sage Loop — Research

Sage Loop is a decision-support tool for research and strategy teams. It aggregates signals from qualitative interviews, survey results, and behavioral telemetry to surface repeatable patterns and prioritized recommendations.

Highlights

- Synthesizes qualitative notes into structured findings
- Links insights to measurable experiments and success criteria
- Exports recommendations into stakeholder-friendly summaries

Design & Build

We focused on traceability and reproducibility: each insight links back to source notes, transcripts and data so teams can validate suggested actions and follow through.
`
  }
]
