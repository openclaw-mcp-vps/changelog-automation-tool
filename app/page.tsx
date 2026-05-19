export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate Changelogs from Git Commits Automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub or GitLab repos. Let AI categorize your commits, PRs, and issues into polished release notes — in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to try. Cancel anytime.</p>
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left text-sm font-mono text-[#8b949e] overflow-x-auto">
          <p className="text-[#58a6ff] mb-2">## v1.4.0 — 2024-06-10</p>
          <p className="text-green-400">### ✨ Features</p>
          <p>- Add dark mode support (#142)</p>
          <p>- Integrate GitHub Actions webhook (#138)</p>
          <p className="mt-2 text-yellow-400">### 🐛 Bug Fixes</p>
          <p>- Fix pagination on large repos (#145)</p>
          <p>- Resolve token expiry edge case (#140)</p>
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "⚡", title: "Instant Analysis", desc: "Scans your full commit history and categorizes changes automatically." },
          { icon: "🤖", title: "AI Categorization", desc: "Smart regex + AI patterns sort features, fixes, and breaking changes." },
          { icon: "📋", title: "Custom Templates", desc: "Export to Markdown, HTML, or your own changelog format." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited repositories",
              "GitHub & GitLab support",
              "AI-powered categorization",
              "Custom changelog templates",
              "Webhook & CI/CD integration",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which Git providers are supported?",
              a: "GitHub and GitLab are fully supported. Bitbucket support is on the roadmap."
            },
            {
              q: "How does AI categorization work?",
              a: "We use a combination of conventional commit parsing and AI pattern matching to classify commits into features, bug fixes, breaking changes, and more."
            },
            {
              q: "Can I customize the changelog format?",
              a: "Yes. You can choose from built-in templates (Keep a Changelog, GitHub Releases) or define your own Markdown template with custom sections."
            }
          ].map((item) => (
            <div key={item.q} className="border-b border-[#30363d] pb-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Changelog Automation Tool. All rights reserved.
      </footer>
    </main>
  );
}
