export default function ExperienceSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h3 className="text-3xl font-bold mb-12">💼 Experience</h3>
<div className="relative space-y-12 border-l-0 md:border-l border-gray-200 pl-0 md:pl-8">
        {/* CODILAR */}
        <div className="relative">
          <span className="absolute -left-[9px] top-2 w-4 h-4 bg-violet-600 rounded-full"></span>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <div>
                <h4 className="text-xl font-semibold">Codilar Technologies</h4>
                <p className="text-sm text-violet-600 font-medium">
                  Software Engineer
                </p>
              </div>
              <span className="text-sm text-gray-500">Jan 2025 — Present</span>
            </div>

            <p className="text-gray-600 mb-6">
              Worked on end-to-end development of large-scale B2B and D2C
              Shopify platforms, collaborating with cross-functional teams while
              owning architecture, performance, client demos, and production
              support.
            </p>

            <div class="grid sm:grid-cols-2 gap-4 mb-6">
              <div class="bg-gray-50 rounded-xl p-4">
                <p class="text-sm font-semibold text-gray-800 mb-1">
                  🚀 Delivery &amp; Scale
                </p>
                <p class="text-sm text-gray-600">
                  Delivered 2 large-scale B2B platforms and contributed to 6+
                  Shopify production launches across multiple regions.
                </p>
              </div>

              <div class="bg-gray-50 rounded-xl p-4">
                <p class="text-sm font-semibold text-gray-800 mb-1">
                  🧠 Leadership
                </p>
                <p class="text-sm text-gray-600">
                  Led a team of 4 developers, driving sprint planning,
                  architecture decisions, and stakeholder communication.
                </p>
              </div>

              <div class="bg-gray-50 rounded-xl p-4">
                <p class="text-sm font-semibold text-gray-800 mb-1">
                  ⚙️ Engineering
                </p>
                <p class="text-sm text-gray-600">
                  Built B2B workflows, trade-in calculators, and custom Shopify
                  logic on Growth and Plus plans.
                </p>
              </div>

              <div class="bg-gray-50 rounded-xl p-4">
                <p class="text-sm font-semibold text-gray-800 mb-1">
                  📈 Performance
                </p>
                <p class="text-sm text-gray-600">
                  Improved Core Web Vitals by refactoring legacy scripts and
                  resolving third-party conflicts.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="pill-secondary">Software Engineer</span>
              <span className="pill-secondary">E-Commerce</span>
              <span className="pill-secondary">Node.js</span>
              <span className="pill-secondary">React</span>
              <span className="pill-secondary">Shopify</span>
              <span className="pill-secondary">B2B-D2C</span>
              <span className="pill-secondary">Leadership</span>
            </div>
          </div>
        </div>

        {/* GENIUS */}
        <div className="relative">
          <span className="absolute -left-[9px] top-2 w-4 h-4 bg-gray-400 rounded-full"></span>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h4 className="text-lg font-semibold"></h4>
            <p className="text-sm text-gray-500 mb-2"></p>

            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <div>
                <h4 className="text-xl font-semibold">
                  Genius Consultants Ltd.
                </h4>
                <p className="text-sm text-violet-600 font-medium">
                  Web Developer
                </p>
              </div>
              <span className="text-sm text-gray-500">Dec 2022 — Dec 2024</span>
            </div>

            <p className="text-gray-600 mb-6">
              Built and maintained enterprise HRMS and Payroll interfaces
              integrated with .NET backend systems for international clients
              (Dubai project). Engineered data-heavy dashboards, centralized
              notification systems, and interactive grading modules using
              HTML-CSS, JQuery, JavaScript and Bootstrap. Refactored legacy
              jQuery codebases, resolving architectural defects in appraisal and
              exit management workflows. Implemented dynamic PDF generation
              modules for tax invoices and compliance documentation.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="pill-secondary">JavaScript</span>
              <span className="pill-secondary">JQuery</span>
              <span className="pill-secondary">HTML-CSS</span>
              <span className="pill-secondary">Bootstrap</span>
              <span className="pill-secondary">React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
