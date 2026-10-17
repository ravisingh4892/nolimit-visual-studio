@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #05070b;
  --panel: #101827;
  --panel-soft: rgba(15, 23, 42, 0.7);
  --text: #f8fafc;
  --muted: #cbd5e1;
  --primary: #d1fe17;
  --primary-soft: rgba(209, 254, 23, 0.12);
}

html {
  scroll-behavior: smooth;
}

html, body, #__next {
  min-height: 100%;
}

body {
  @apply bg-[#05070b] text-white antialiased;
  font-family: 'Inter', sans-serif;
  background-image:
    radial-gradient(circle at top, rgba(209, 254, 23, 0.08), transparent 22%),
    linear-gradient(180deg, #05070b 0%, #070b12 100%);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Space Grotesk', sans-serif;
}

.eyebrow {
  @apply text-xs font-medium uppercase tracking-[0.28em] text-primary;
}

.card {
  @apply rounded-[28px] border border-slate-800 bg-slate-900/80 p-6;
}

::selection {
  background: rgba(209, 254, 23, 0.35);
  color: white;
}
