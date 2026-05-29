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
