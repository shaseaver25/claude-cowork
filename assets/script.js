const skills = {
  sales: [
    { name: 'Account research', desc: 'Dossier on any company or person — buyer, pricing, competitors.' },
    { name: 'Call prep', desc: 'Pre-meeting brief with attendees and recommended agenda.' },
    { name: 'Call summary', desc: 'Turn rough notes or a transcript into action items and follow-up.' },
    { name: 'Pipeline review', desc: 'Health check on open deals with risks and next moves.' },
    { name: 'Forecast', desc: 'Best/likely/worst scenarios with gap-to-quota analysis.' },
    { name: 'Draft outreach', desc: 'Research + personalized cold email in one step.' },
    { name: 'Competitive intelligence', desc: 'Battlecards comparing you to a competitor.' },
    { name: 'Daily briefing', desc: 'Prioritized list of what to do today, ranked.' },
    { name: 'Create an asset', desc: 'Generate one-pagers, decks, or landing pages from deal context.' },
  ],
  marketing: [
    { name: 'Campaign plan', desc: 'Full brief with audience, channels, content calendar, KPIs.' },
    { name: 'Draft content', desc: 'Blog, email, social, landing page, press release — channel-aware.' },
    { name: 'Email sequence', desc: 'Multi-email flows with branching, timing, and A/B suggestions.' },
    { name: 'SEO audit', desc: 'Site-wide audit with keyword gaps and prioritized fixes.' },
    { name: 'Brand review', desc: 'Check copy against your voice, terminology, and claims policy.' },
    { name: 'Competitive brief', desc: 'Positioning gaps and messaging angles competitors haven\'t claimed.' },
    { name: 'Performance report', desc: 'Channel summary with wins, misses, and next-period priorities.' },
  ],
  product: [
    { name: 'Write spec / PRD', desc: 'Turn an idea into a structured product spec with success metrics.' },
    { name: 'Roadmap update', desc: 'Now/Next/Later view with reprioritization logic.' },
    { name: 'Sprint planning', desc: 'Capacity, scope, and P0 vs. stretch for the next sprint.' },
    { name: 'Metrics review', desc: 'Weekly or monthly review with insights and recommended actions.' },
    { name: 'Synthesize research', desc: 'Themes and rankings from interview/survey notes.' },
    { name: 'Competitive brief', desc: 'Where to differentiate vs. achieve parity.' },
    { name: 'Stakeholder update', desc: 'Audience-tuned updates for exec, eng, or customer.' },
    { name: 'Brainstorming', desc: 'Sharp thinking partner for product problems.' },
  ],
  engineering: [
    { name: 'Code review', desc: 'Security, performance, and correctness check on a diff or PR.' },
    { name: 'Debug', desc: 'Reproduce, isolate, diagnose, and fix.' },
    { name: 'System design', desc: 'API design, data modeling, service boundaries.' },
    { name: 'Architecture (ADR)', desc: 'Decision records with tradeoffs and consequences.' },
    { name: 'Testing strategy', desc: 'Test plans and coverage approaches.' },
    { name: 'Tech debt', desc: 'Identify and prioritize what to refactor.' },
    { name: 'Documentation', desc: 'READMEs, runbooks, API docs, onboarding guides.' },
    { name: 'Incident response', desc: 'Triage during an incident, postmortem after.' },
    { name: 'Deploy checklist', desc: 'Pre-deployment verification with rollback triggers.' },
    { name: 'Standup', desc: 'Yesterday/today/blockers from recent activity.' },
  ],
  design: [
    { name: 'Design critique', desc: 'Structured feedback on usability and hierarchy.' },
    { name: 'Accessibility review', desc: 'WCAG 2.1 AA audit on a design or page.' },
    { name: 'UX copy', desc: 'Microcopy, error messages, empty states, CTAs.' },
    { name: 'Design handoff', desc: 'Developer spec sheet with tokens and states.' },
    { name: 'Design system', desc: 'Audit, document, or extend the system.' },
    { name: 'User research', desc: 'Plan interviews, design surveys, write research questions.' },
    { name: 'Research synthesis', desc: 'Themes and insights from research data.' },
  ],
  legal: [
    { name: 'Triage NDA', desc: 'Green/yellow/red classification with escalation rules.' },
    { name: 'Review contract', desc: 'Clause-by-clause analysis against your playbook with redlines.' },
    { name: 'Vendor check', desc: 'Consolidated view of vendor agreements with gap analysis.' },
    { name: 'Compliance check', desc: 'Applicable regs, required approvals, risk areas.' },
    { name: 'Risk assessment', desc: 'Severity × likelihood matrix with escalation criteria.' },
    { name: 'Legal response', desc: 'Templated replies with built-in escalation checks.' },
    { name: 'Signature request', desc: 'Pre-signature checklist + e-sign routing.' },
    { name: 'Meeting briefing', desc: 'Context + action tracking for legal-relevant meetings.' },
  ],
  ops: [
    { name: 'Process doc', desc: 'Flowcharts, RACI, SOPs for any workflow.' },
    { name: 'Status report', desc: 'KPIs, risks, action items for stakeholders.' },
    { name: 'Capacity plan', desc: 'Workload analysis and utilization forecasting.' },
    { name: 'Vendor review', desc: 'Cost, risk, and recommendation for a vendor.' },
    { name: 'Risk assessment', desc: 'Risk register with mitigation plans.' },
    { name: 'Compliance tracking', desc: 'SOC 2, ISO, GDPR audit prep and tracking.' },
    { name: 'Runbook', desc: 'Step-by-step procedures with rollback paths.' },
    { name: 'Change request', desc: 'Impact analysis and rollback plan for CAB approval.' },
    { name: 'Process optimization', desc: 'Find bottlenecks and recommend fixes.' },
  ],
  support: [
    { name: 'Ticket triage', desc: 'Categorize, prioritize (P1–P4), route, check for duplicates.' },
    { name: 'Draft response', desc: 'Tailored customer reply matching situation and tone.' },
    { name: 'Customer research', desc: 'Multi-source lookup with citations.' },
    { name: 'Customer escalation', desc: 'Package issues for engineering with full context.' },
    { name: 'KB article', desc: 'Self-service article from a resolved ticket.' },
  ],
  seo: [
    { name: 'SEO audit', desc: 'Full site health check with prioritized issues.' },
    { name: 'On-page SEO', desc: 'Optimize a specific page for a keyword.' },
    { name: 'Technical SEO', desc: 'Core web vitals, crawlability, indexation.' },
    { name: 'Keyword clustering', desc: 'Group keywords into topical pillars and pages.' },
    { name: 'Content brief', desc: 'Structured outline before writing.' },
    { name: 'Content strategy', desc: 'Calendar, gaps, editorial plan.' },
    { name: 'Schema markup', desc: 'JSON-LD structured data for rich snippets.' },
    { name: 'Internal linking', desc: 'Find orphan pages, improve link equity.' },
    { name: 'AI visibility', desc: 'How your brand appears in ChatGPT / Claude / Perplexity.' },
    { name: 'Broken links', desc: 'Find and fix 404s.' },
    { name: 'Content translation', desc: 'Localize with hreflang and cultural adaptation.' },
  ],
};

function renderSkills(role) {
  const container = document.getElementById('role-content');
  const list = skills[role] || [];
  container.innerHTML = list.map(s => `
    <div class="tile">
      <div class="tile-title">${s.name}</div>
      <div class="tile-desc">${s.desc}</div>
    </div>
  `).join('');
}
document.querySelectorAll('.role-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.role-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderSkills(tab.dataset.role);
  });
});
renderSkills('sales');

const toast = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1600);
}
document.querySelectorAll('.copy-prompt').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.dataset.prompt;
    if (!text) return;
    navigator.clipboard.writeText(text).then(
      () => showToast('Copied — paste into Claude'),
      () => showToast('Copy failed')
    );
  });
});
// GA4 event tracking — fires alongside existing copy/click behavior
// Requires window.gtagTrack to be defined (set in each page's head)
document.querySelectorAll('.copy-prompt').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.dataset.prompt || '';
    const label = btn.querySelector('.prompt-label');
    const labelText = label ? label.textContent.trim() : 'unlabeled';
    if (typeof window.gtagTrack === 'function') {
      window.gtagTrack('prompt_copy', {
        prompt_label: labelText,
        prompt_length: text.length,
        page_path: location.pathname
      });
    }
  });
});

// Track role-tab clicks (skills library page)
document.querySelectorAll('.role-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    if (typeof window.gtagTrack === 'function') {
      window.gtagTrack('role_tab_select', {
        role: tab.dataset.role,
        page_path: location.pathname
      });
    }
  });
});

// Track external link clicks (github, anthropic, etc.)
document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof window.gtagTrack === 'function') {
      window.gtagTrack('outbound_click', {
        href: link.href,
        text: (link.textContent || '').trim().slice(0, 80)
      });
    }
  });
});

// Track accordion expansions (tutorial accordions)
document.querySelectorAll('details.acc').forEach(det => {
  det.addEventListener('toggle', () => {
    if (det.open && typeof window.gtagTrack === 'function') {
      const title = det.querySelector('.acc-title');
      window.gtagTrack('tutorial_open', {
        tutorial: title ? title.textContent.trim() : det.id
      });
    }
  });
});

// ============================================
// PICK-YOUR-CLAUDE DIAGNOSTIC MICROSIM
// Runs on index.html only — silently no-ops elsewhere
// ============================================
(function() {
  const root = document.getElementById('claude-diagnostic');
  if (!root) return;

  const body = document.getElementById('diag-body');
  const dotsEl = document.getElementById('diag-dots');
  const stepLabel = document.getElementById('diag-step-label');
  const resetBtn = document.getElementById('diag-reset');

  // Each option awards points to one or more products
  const QUESTIONS = [
    {
      q: "What's the work you mostly want AI to help with?",
      options: [
        { title: "Quick questions, drafts, brainstorming",
          desc: "Researching, writing, explaining, thinking out loud",
          score: { ai: 3, cowork: 0, code: 0, api: 0 } },
        { title: "Real work that touches my files and apps",
          desc: "Reading documents, writing reports, driving software on my computer",
          score: { ai: 0, cowork: 3, code: 0, api: 0 } },
        { title: "Writing software in a codebase",
          desc: "Refactoring, fixing bugs, running tests, opening PRs",
          score: { ai: 0, cowork: 0, code: 3, api: 0 } },
        { title: "Building Claude into a product I ship",
          desc: "Embedding Claude into software my customers use",
          score: { ai: 0, cowork: 0, code: 0, api: 3 } },
      ]
    },
    {
      q: "Where do you want Claude to live?",
      options: [
        { title: "In my browser or on my phone",
          desc: "Open a tab, ask, close. Available anywhere with a network connection.",
          score: { ai: 2, cowork: 0, code: 0, api: 0 } },
        { title: "A native Mac app with access to my files",
          desc: "Read and write files in folders I select; drive other apps with my permission",
          score: { ai: 0, cowork: 2, code: 0, api: 0 } },
        { title: "In my terminal, where my repo is",
          desc: "CLI tool that runs git, runs tests, edits source files",
          score: { ai: 0, cowork: 0, code: 2, api: 0 } },
        { title: "Behind an API, called from my own code",
          desc: "I'll handle the user interface myself; I just want the model endpoint",
          score: { ai: 0, cowork: 0, code: 0, api: 2 } },
      ]
    },
    {
      q: "What best describes your situation?",
      options: [
        { title: "Curious individual or light personal use",
          desc: "Mostly trying things out, hobby projects, occasional drafting",
          score: { ai: 1, cowork: 0, code: 0, api: 0 } },
        { title: "Professional knowledge work, used daily",
          desc: "Marketing, ops, product, legal, education, consulting, etc.",
          score: { ai: 0, cowork: 2, code: 0, api: 0 } },
        { title: "Engineer working in a codebase daily",
          desc: "Software engineer, ML engineer, devops, data engineer",
          score: { ai: 0, cowork: 1, code: 2, api: 0 } },
        { title: "Builder shipping AI features to end users",
          desc: "Indie hacker, startup founder, applied ML engineer",
          score: { ai: 0, cowork: 0, code: 1, api: 2 } },
      ]
    },
  ];

  const RESULTS = {
    ai: {
      name: "Claude.ai",
      eyebrow: "Your fit",
      reason: "Quick access, no setup, works from any device. For conversation-first work where you don't need Claude touching your files or driving your apps, Claude.ai is the fastest path. Available free; Pro+ for higher usage.",
      runnerUp: "If you find yourself wanting to give it access to files or run it on a schedule, the upgrade is <b>Cowork mode</b> in the desktop app — same conversations, more capabilities.",
      ctas: [
        { label: "Go to Claude.ai", href: "https://claude.ai", primary: true, external: true },
        { label: "See the comparison →", href: "compare.html", primary: false }
      ]
    },
    cowork: {
      name: "Claude Cowork",
      eyebrow: "Your fit — and you're already here",
      reason: "Real work that touches your files, calendar, email, and apps is exactly what Cowork was built for. You get persistent memory, scheduled tasks, file read/write, and direct integration with the tools you already use. Included in all paid Claude plans.",
      runnerUp: "If you also write code professionally, pair Cowork with <b>Claude Code</b> — they work well together. If your work is mostly conversational, the simpler <b>Claude.ai</b> may be enough.",
      ctas: [
        { label: "Install Cowork", href: "install.html", primary: true },
        { label: "Quick Start →", href: "quickstart.html", primary: false }
      ]
    },
    code: {
      name: "Claude Code",
      eyebrow: "Your fit",
      reason: "Engineering-shaped work belongs in the terminal where your repo lives. Claude Code runs git commands, edits files, runs tests, and opens PRs as an agentic coding partner. Included in Pro+ plans.",
      runnerUp: "For non-coding work that touches your files (briefings, reports, scheduled tasks), pair Code with <b>Cowork</b> — both are included in the same plan.",
      ctas: [
        { label: "Get Claude Code", href: "https://claude.com/code", primary: true, external: true },
        { label: "Compare to other tools →", href: "compare.html", primary: false }
      ]
    },
    api: {
      name: "the Anthropic API",
      eyebrow: "Your fit",
      reason: "Direct access to Claude models for embedding in software you ship. No chat UI in the way, no subscription overhead — pay per token, scale as needed. Choose the model that fits your task (Opus for hardest reasoning, Sonnet for balance, Haiku for cost-efficient at speed).",
      runnerUp: "If you also want a chat UI for your team to use Claude day-to-day, add a <b>Claude.ai Team plan</b> alongside. The API and chat products are separate.",
      ctas: [
        { label: "Anthropic API docs", href: "https://docs.anthropic.com", primary: true, external: true },
        { label: "Pricing details →", href: "compare.html", primary: false }
      ]
    }
  };

  let currentStep = 0;
  let scores = { ai: 0, cowork: 0, code: 0, api: 0 };

  function renderQuestion(idx) {
    const q = QUESTIONS[idx];
    let html = '<div class="diag-question">' + q.q + '</div>';
    html += '<div class="diag-options">';
    q.options.forEach((opt, i) => {
      html += '<button class="diag-option" data-idx="' + i + '">';
      html += '<span class="diag-option-title">' + opt.title + '</span>';
      html += '<span class="diag-option-desc">' + opt.desc + '</span>';
      html += '</button>';
    });
    html += '</div>';
    body.innerHTML = html;

    // wire up clicks
    body.querySelectorAll('.diag-option').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        const opt = q.options[i];
        Object.keys(opt.score).forEach(k => scores[k] += opt.score[k]);

        // GA tracking
        if (typeof window.gtagTrack === 'function') {
          window.gtagTrack('diagnostic_answer', {
            question_index: idx + 1,
            answer_title: opt.title
          });
        }

        currentStep++;
        if (currentStep < QUESTIONS.length) {
          updateProgress();
          renderQuestion(currentStep);
        } else {
          renderResult();
        }
      });
    });
  }

  function updateProgress() {
    const dots = dotsEl.querySelectorAll('.diag-dot');
    dots.forEach((d, i) => {
      d.classList.remove('active', 'done');
      if (i < currentStep) d.classList.add('done');
      else if (i === currentStep) d.classList.add('active');
    });
    if (currentStep < QUESTIONS.length) {
      stepLabel.textContent = 'Question ' + (currentStep + 1) + ' of ' + QUESTIONS.length;
    } else {
      stepLabel.textContent = 'Your recommendation';
    }
  }

  function renderResult() {
    updateProgress();
    resetBtn.style.display = 'inline-block';

    // Find the winner
    const winner = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    const result = RESULTS[winner];

    if (typeof window.gtagTrack === 'function') {
      window.gtagTrack('diagnostic_completed', {
        recommendation: result.name,
        scores: JSON.stringify(scores)
      });
    }

    let html = '<div class="diag-result">';
    html += '<div class="diag-result-eyebrow">' + result.eyebrow + '</div>';
    html += '<div class="diag-result-title">Try <span class="product-name">' + result.name + '</span>.</div>';
    html += '<p class="diag-result-reason">' + result.reason + '</p>';
    html += '<div class="diag-result-runner-up"><b>Also worth knowing:</b> ' + result.runnerUp + '</div>';
    html += '<div class="diag-result-actions">';
    result.ctas.forEach(cta => {
      const cls = 'diag-result-cta ' + (cta.primary ? 'primary' : 'secondary');
      const target = cta.external ? ' target="_blank" rel="noopener"' : '';
      html += '<a href="' + cta.href + '" class="' + cls + '"' + target + '>' + cta.label + '</a>';
    });
    html += '</div></div>';
    body.innerHTML = html;
  }

  function reset() {
    currentStep = 0;
    scores = { ai: 0, cowork: 0, code: 0, api: 0 };
    resetBtn.style.display = 'none';
    updateProgress();
    renderQuestion(0);

    if (typeof window.gtagTrack === 'function') {
      window.gtagTrack('diagnostic_reset', {});
    }
  }

  resetBtn.addEventListener('click', reset);

  // Initialize
  if (typeof window.gtagTrack === 'function') {
    window.gtagTrack('diagnostic_started', {});
  }
  renderQuestion(0);
})();
