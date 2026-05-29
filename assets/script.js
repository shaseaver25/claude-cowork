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

// ============================================
// PROMPT REWRITER MICROSIM
// Runs on tips.html only — silently no-ops elsewhere
// ============================================
(function() {
  const root = document.getElementById('prompt-rewriter');
  if (!root) return;

  const chipsEl = document.getElementById('rw-chips');
  const tabsEl = document.getElementById('rw-tabs');
  const displayEl = document.getElementById('rw-display');
  const whyEl = document.getElementById('rw-why');
  const copyBtn = document.getElementById('rw-copy');

  const EXAMPLES = [
    {
      label: "Summarize a report",
      versions: {
        original: {
          text: '<span class="filler">Could you please</span> summarize <span class="filler">this</span> report?',
          plain: 'Could you please summarize this report?',
          why: 'It works, but Claude has no idea who the summary is for, how long, what to emphasize, or what format. You\'ll get a generic 3-paragraph summary &mdash; usually not what you wanted, but you can\'t complain about what you didn\'t specify.'
        },
        terse: {
          text: 'Summarize this report in 5 bullets.',
          plain: 'Summarize this report in 5 bullets.',
          why: '<b>Tighter is better.</b> Strip the "could you please" &mdash; Claude is not insulted. The "in 5 bullets" adds the single most useful constraint (length + format) without bloating the prompt. Often enough by itself.'
        },
        structured: {
          text: '<span class="section-label">Goal:</span> Executive summary of this report.\n<span class="section-label">Audience:</span> CFO.\n<span class="section-label">Format:</span> 5 bullets, under 200 words total.\n<span class="section-label">Emphasis:</span> Financial implications. Skip product details.',
          plain: 'Goal: Executive summary of this report.\nAudience: CFO.\nFormat: 5 bullets, under 200 words total.\nEmphasis: Financial implications. Skip product details.',
          why: '<b>Structured prompts win for high-stakes outputs.</b> By naming the audience, you tell Claude which details matter and which to drop. By naming the format, you save yourself a revision round. The labels are obvious to Claude even if you don\'t use the same words.'
        },
        constrained: {
          text: 'Summarize this report for our CFO in 5 bullets, under 200 words. <span class="added">Lead with the bottom line</span>; lead with what changed quarter-over-quarter. <span class="added">Skip product details</span>. <span class="added">If anything in the report would change our forecast, call it out explicitly</span>.',
          plain: 'Summarize this report for our CFO in 5 bullets, under 200 words. Lead with the bottom line; lead with what changed quarter-over-quarter. Skip product details. If anything in the report would change our forecast, call it out explicitly.',
          why: '<b>Constraints + decision-relevant framing.</b> "Lead with the bottom line" tells Claude how to order the bullets. "Skip product details" prevents wasted space. "Anything that would change our forecast" tells Claude what the CFO actually wants to know &mdash; the implication, not the catalog.'
        }
      }
    },
    {
      label: "Draft an email",
      versions: {
        original: {
          text: '<span class="filler">Can you help me</span> write an email to my boss <span class="filler">about</span> taking next Friday off?',
          plain: 'Can you help me write an email to my boss about taking next Friday off?',
          why: 'Vague enough that Claude will write a perfectly competent, perfectly generic email. You\'ll either send it as-is and sound like AI, or rewrite it &mdash; in which case why use AI?'
        },
        terse: {
          text: 'Email my boss: I\'m taking next Friday off. Polite, brief, no apology.',
          plain: 'Email my boss: I\'m taking next Friday off. Polite, brief, no apology.',
          why: '<b>Direct request + tone instruction.</b> "Polite, brief, no apology" is three constraints in five words. The "no apology" matters &mdash; default-Claude apologizes a lot in emails. Naming what NOT to do is often as valuable as naming what to do.'
        },
        structured: {
          text: '<span class="section-label">To:</span> My manager, [name].\n<span class="section-label">Subject:</span> Out of office next Friday.\n<span class="section-label">Goal:</span> Notify (not ask permission for) PTO on Friday, May 8.\n<span class="section-label">Coverage:</span> I\'ll hand off the X project to [colleague] beforehand.\n<span class="section-label">Tone:</span> Direct, respectful, 3-4 sentences max.',
          plain: 'To: My manager, [name].\nSubject: Out of office next Friday.\nGoal: Notify (not ask permission for) PTO on Friday, May 8.\nCoverage: I\'ll hand off the X project to [colleague] beforehand.\nTone: Direct, respectful, 3-4 sentences max.',
          why: '<b>Adds the meta you forgot you needed.</b> Subject line, coverage plan, the "notify not ask" framing &mdash; all the things you\'d have to revise after the first draft. Putting them upfront means the first draft is usable.'
        },
        constrained: {
          text: 'Draft an email to my manager letting them know I\'ll be out Friday May 8. <span class="added">3 sentences max. No apology. No explanation of why</span>. State the date, mention I\'ll hand off the X project to [colleague] beforehand, offer to answer anything before I leave. <span class="added">End without a "thanks!" or exclamation point</span>.',
          plain: 'Draft an email to my manager letting them know I\'ll be out Friday May 8. 3 sentences max. No apology. No explanation of why. State the date, mention I\'ll hand off the X project to [colleague] beforehand, offer to answer anything before I leave. End without a "thanks!" or exclamation point.',
          why: '<b>The "what NOT to do" constraints carry most of the work.</b> "No apology, no explanation, no exclamation point" prevents three common AI-email tells. The sentence-count cap forces tightness. The "offer to answer" gives the message a confident closing without overexplaining.'
        }
      }
    },
    {
      label: "Plan a meeting",
      versions: {
        original: {
          text: '<span class="filler">Help me</span> plan a team offsite.',
          plain: 'Help me plan a team offsite.',
          why: 'Claude has no idea: how many people, when, where, budget, what the offsite is FOR, what success looks like. You\'ll get a generic 5-section template with [PLACEHOLDER] in 30 places.'
        },
        terse: {
          text: 'Plan a 1-day offsite for 8 people in SF. Goals: team bonding + Q3 planning. Output as an agenda.',
          plain: 'Plan a 1-day offsite for 8 people in SF. Goals: team bonding + Q3 planning. Output as an agenda.',
          why: '<b>Five constraints in one sentence.</b> Duration, headcount, location, goals, output format. Claude can produce something specific. You\'ll still iterate, but the first draft is grounded in your reality, not in the average corporate offsite.'
        },
        structured: {
          text: '<span class="section-label">Team:</span> 8 people, product team, mix of remote &amp; in-person.\n<span class="section-label">Duration:</span> 1 day, June, weekday.\n<span class="section-label">Location:</span> SF Bay Area, within 1hr drive of city.\n<span class="section-label">Budget:</span> $5K all-in (venue + food + activities).\n<span class="section-label">Goals (priority order):</span> 1. Q3 planning alignment, 2. Team bonding, 3. Fun.\n<span class="section-label">Output:</span> Hour-by-hour agenda + 2 venue options + meal plan.',
          plain: 'Team: 8 people, product team, mix of remote & in-person.\nDuration: 1 day, June, weekday.\nLocation: SF Bay Area, within 1hr drive of city.\nBudget: $5K all-in (venue + food + activities).\nGoals (priority order): 1. Q3 planning alignment, 2. Team bonding, 3. Fun.\nOutput: Hour-by-hour agenda + 2 venue options + meal plan.',
          why: '<b>Goals in priority order is the unlock.</b> Claude makes tradeoffs against your priorities &mdash; if it has to cut bonding for planning time, you told it that\'s the right call. Without priority order, Claude has to guess.'
        },
        constrained: {
          text: 'Plan a 1-day product team offsite. 8 people. <span class="added">June, any weekday</span>. SF Bay Area, max 1hr from the city. $5K total budget. <span class="added">Primary goal is Q3 planning alignment</span>; team bonding is secondary; pure fun is third. Output: <span class="added">a 9am-5pm hour-by-hour agenda</span>, two venue suggestions with rough cost estimates, and a meal plan covering breakfast, lunch, and one snack. <span class="added">Each session under 90 minutes</span>. <span class="added">Build in 20-min breaks every 2 hours</span>.',
          plain: 'Plan a 1-day product team offsite. 8 people. June, any weekday. SF Bay Area, max 1hr from the city. $5K total budget. Primary goal is Q3 planning alignment; team bonding is secondary; pure fun is third. Output: a 9am-5pm hour-by-hour agenda, two venue suggestions with rough cost estimates, and a meal plan covering breakfast, lunch, and one snack. Each session under 90 minutes. Build in 20-min breaks every 2 hours.',
          why: '<b>This is what "told it what done looks like" actually looks like.</b> The result is a usable v1, not a template you\'ll edit. The session-length cap and break cadence are details a good facilitator knows &mdash; baking them in saves a revision round.'
        }
      }
    },
    {
      label: "Prep for an interview",
      versions: {
        original: {
          text: '<span class="filler">Help me</span> prep for <span class="filler">my</span> interview.',
          plain: 'Help me prep for my interview.',
          why: 'Claude doesn\'t know the role, the company, the stage of the process, what your strengths are, or what\'s scary about this one. You\'ll get a generic "top 10 common interview questions" list that doesn\'t help.'
        },
        terse: {
          text: 'Final-round interview for Director of Product at a B2B SaaS startup. Generate 10 likely questions and a STAR answer for the 3 hardest.',
          plain: 'Final-round interview for Director of Product at a B2B SaaS startup. Generate 10 likely questions and a STAR answer for the 3 hardest.',
          why: '<b>Role + stage + ask.</b> "Final-round" is critical context &mdash; the questions will differ from a screen. "B2B SaaS startup" anchors the kind of questions. STAR format is a specific structure most interviewers expect.'
        },
        structured: {
          text: '<span class="section-label">Role:</span> Director of Product, B2B SaaS startup (~50 people).\n<span class="section-label">Stage:</span> Final round with VP Product and CEO.\n<span class="section-label">My background:</span> 7 years PM at larger companies, this is my first director-level move.\n<span class="section-label">What I\'m worried about:</span> Leadership questions, scaling-down narrative, why startup now.\n<span class="section-label">Output:</span> 10 likely questions, ranked by likelihood. For the top 3 hardest, draft a STAR-format answer using my background.',
          plain: 'Role: Director of Product, B2B SaaS startup (~50 people).\nStage: Final round with VP Product and CEO.\nMy background: 7 years PM at larger companies, this is my first director-level move.\nWhat I\'m worried about: Leadership questions, scaling-down narrative, why startup now.\nOutput: 10 likely questions, ranked by likelihood. For the top 3 hardest, draft a STAR-format answer using my background.',
          why: '<b>Your worry list is gold.</b> Telling Claude what you\'re scared of focuses the prep where you actually need it. "Ranked by likelihood" is the discriminator &mdash; lists aren\'t prioritized by default.'
        },
        constrained: {
          text: 'Generate 10 likely final-round interview questions for a Director of Product role at a B2B SaaS startup (~50 employees). My background: 7 years PM at companies of 500+. <span class="added">Rank questions by likelihood</span>. For the top 3 hardest (focus on leadership, scaling-down, and "why startup now"), <span class="added">draft my answer in STAR format, max 200 words each, using context from my attached resume</span>. <span class="added">For each answer, add 1 sentence of follow-up question I should expect</span>.',
          plain: 'Generate 10 likely final-round interview questions for a Director of Product role at a B2B SaaS startup (~50 employees). My background: 7 years PM at companies of 500+. Rank questions by likelihood. For the top 3 hardest (focus on leadership, scaling-down, and "why startup now"), draft my answer in STAR format, max 200 words each, using context from my attached resume. For each answer, add 1 sentence of follow-up question I should expect.',
          why: '<b>The "follow-up question" addition is the pro move.</b> Real interviewers probe. By asking Claude to predict the follow-up, you prep for the second-order question, not just the first one. This is the kind of detail you only think to ask after one bad prep session.'
        }
      }
    }
  ];

  const TABS = [
    { id: 'original', label: 'Original', badge: '<span class="badge-orig">●</span>' },
    { id: 'terse', label: 'Terse', badge: '<span class="badge-better">●</span>' },
    { id: 'structured', label: 'Structured', badge: '<span class="badge-better">●</span>' },
    { id: 'constrained', label: 'With constraints', badge: '<span class="badge-better">●</span>' },
  ];

  let currentExample = 0;
  let currentTab = 'original';

  function renderChips() {
    chipsEl.innerHTML = EXAMPLES.map((ex, i) =>
      '<button class="rw-chip' + (i === currentExample ? ' active' : '') + '" data-i="' + i + '">' + ex.label + '</button>'
    ).join('');
    chipsEl.querySelectorAll('.rw-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        currentExample = parseInt(chip.dataset.i, 10);
        currentTab = 'original';
        renderAll();
        if (typeof window.gtagTrack === 'function') {
          window.gtagTrack('rewriter_example_selected', { example: EXAMPLES[currentExample].label });
        }
      });
    });
  }

  function renderTabs() {
    tabsEl.innerHTML = TABS.map(t =>
      '<button class="rw-tab' + (t.id === currentTab ? ' active' : '') + '" data-tab="' + t.id + '">' + t.badge + t.label + '</button>'
    ).join('');
    tabsEl.querySelectorAll('.rw-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        currentTab = tab.dataset.tab;
        renderDisplay();
        if (typeof window.gtagTrack === 'function') {
          window.gtagTrack('rewriter_version_viewed', {
            example: EXAMPLES[currentExample].label,
            version: currentTab
          });
        }
      });
    });
  }

  function renderDisplay() {
    // Re-render tab styles
    tabsEl.querySelectorAll('.rw-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === currentTab);
    });
    const v = EXAMPLES[currentExample].versions[currentTab];
    displayEl.innerHTML = v.text;
    whyEl.innerHTML = '<div class="rw-why-label">Why this version</div>' + v.why;
    copyBtn.dataset.prompt = v.plain;
  }

  function renderAll() {
    renderChips();
    renderTabs();
    renderDisplay();
  }

  renderAll();

  if (typeof window.gtagTrack === 'function') {
    window.gtagTrack('rewriter_loaded', {});
  }
})();
