/* EN language pack — generated for portfolio/index.html.
   Structure mirrors SECTIONS_ZH exactly: 6 sections, same star counts. */
window.EN = {
ui: {
  liveDemo: "Live Demo &nbsp;fully interactive",
  openTab: "Open in new tab \u2192",
  demoTitle: " demo",
  dnote: "De-identified \u00b7 all demo data is fictional",
  prev: "Previous", next: "Next", toc: "Contents",
  tags: ["AI Enablement","Low-code","Workflow Automation","Local-first"],
  aboutBg: "During my Operations internship I worked through the team\u2019s real business workflows end to end, and found plenty of repetitive, automatable steps. I didn\u2019t want AI as a one-off trick, so I turned it into repeatable workflows; the team\u2019s core processes went from hours of manual work to minutes. Beyond that, curiosity keeps me exploring new ways of working with AI: what\u2019s replicable isn\u2019t any single tool \u2014 it\u2019s the framework and the method for building.",
  aboutDo: [
    "Break down business processes and turn implicit rules into executable definitions",
    "Ship processes as working tools with low-code + AI \u2014 without writing code line by line",
    "Design acceptance and testing so the tools stay reliable in other people\u2019s hands"],
  ghline: "Selected projects are on GitHub \u2192"
},
sections: [
{
  no:"00", title:"Overview", tag:"Intro",
  star:[{label:"",zh:"", html:`
    <p style="font-size:1.05em;max-width:44em;line-height:1.8">
    A power user of AI on the operations front line, exploring what AI-automated workflows can do. I&rsquo;ve worked through every one of these business processes end to end &mdash; then automated them myself: <b>6 production-grade tools</b>, shipped solo, cutting the team&rsquo;s core Excel work from hours to minutes.<br><br>
    What I bring isn&rsquo;t code. It&rsquo;s the loop: <b>break down the process &rarr; define the rules &rarr; direct AI to build &rarr; design verification as the safeguard</b>.
    </p>
    <div class="metrics">
      <div><b>6</b><small>production-grade tools</small></div>
      <div><b>2,380</b><small>test assertions</small></div>
      <div><b>120k+</b><small>rows of data</small></div>
      <div><b>0</b><small>tokens &middot; data sent out</small></div>
    </div>
    <nav class="dir">
      <a data-goto="1"><b>01</b>Monthly report automation <span>&mdash; from hours of manual work to one click, cross-checks as the safeguard</span></a>
      <a data-goto="2"><b>02</b>Document verification <span>&mdash; offline OCR + tolerant matching turns file-by-file eyework into batch verdicts</span></a>
      <a data-goto="3"><b>03</b>Team tools platform <span>&mdash; six tools, one entry, all offline, zero install</span></a>
      <a data-goto="4"><b>04</b>Personal job-search agent <span>&mdash; a multi-skill agent I built for myself</span></a>
      <a data-goto="5"><b>05</b>Results &amp; method <span>&mdash; beyond the numbers, a repeatable way of shipping</span></a>
    </nav>
    <button class="cta" data-goto="1">Featured case &rarr;</button>`}]
},
{
  no:"01", title:"Monthly Report Automation", tag:"Featured", demo:"demo/monthly_report_demo_en.html",
  demoLabel:"Live Demo &nbsp;fully interactive",
  star:[
    {label:"Context",zh:"", items:[
      "The team\u2019s monthly business report ran entirely on manual Excel work: two source tables totalling 120k+ rows (100k+ line-level history plus a 20k+ register), stacked with formula chains that broke with a single careless edit; each report took an hour or more to produce.",
      "Real incidents: a summary total came out 30,000 too high and every downstream lookup went stale; one inserted row shifted everything below it; formulas copied across months were not fully updated, so a single report silently mixed two metric definitions."]},
    {label:"Methodology",zh:"", html:`
      <figure class="chart">
      <svg viewBox="0 0 680 340">
<g class="lbl"><text x="45" y="60" text-anchor="middle">Process</text></g>
<g><text x="45" y="118" class="lbl" text-anchor="middle">Me</text><text x="45" y="134" class="sm mut" text-anchor="middle">judgment</text></g>
<g><text x="45" y="204" class="lbl" text-anchor="middle">AI</text><text x="45" y="220" class="sm mut" text-anchor="middle">implementation</text></g>
<g><text x="45" y="272" class="lbl" text-anchor="middle">Safeguard</text></g>

<g fill="var(--mist1)" opacity=".55"><rect x="96" y="40" width="132" height="32" rx="3"/><rect x="238" y="40" width="132" height="32" rx="3"/><rect x="380" y="40" width="132" height="32" rx="3"/><rect x="522" y="40" width="132" height="32" rx="3"/></g>
<g text-anchor="middle" class="sm"><text x="162" y="61">\u2460 Pre-process</text><text x="304" y="61">\u2461 Summary tables</text><text x="446" y="61">\u2462 Trend charts</text><text x="588" y="61">\u2463 Email out</text></g>
<g stroke="var(--ink2)" fill="none" opacity=".5"><path d="M228 56 L238 56"/><path d="M370 56 L380 56"/><path d="M512 56 L522 56"/></g>

<g fill="var(--accent-soft)" stroke="var(--accent)" stroke-opacity=".45"><rect x="96" y="90" width="132" height="66" rx="3"/><rect x="238" y="90" width="132" height="66" rx="3"/><rect x="380" y="90" width="132" height="66" rx="3"/><rect x="522" y="90" width="132" height="66" rx="3"/></g>
<g text-anchor="middle" class="sm">
 <text x="162" y="112">what counts as valid</text><text x="162" y="130">month attribution</text><text x="162" y="148">when to stop</text>
 <text x="304" y="112">metric definitions</text><text x="304" y="130">what to exclude</text><text x="304" y="148">what to show</text>
 <text x="446" y="121">which KPIs to watch</text><text x="446" y="139">how to flag outliers</text>
 <text x="588" y="121">what the reader sees</text><text x="588" y="139">wording &amp; structure</text>
</g>

<g fill="#fff" stroke="var(--rule)"><rect x="96" y="176" width="132" height="42" rx="3"/><rect x="238" y="176" width="132" height="42" rx="3"/><rect x="380" y="176" width="132" height="42" rx="3"/><rect x="522" y="176" width="132" height="42" rx="3"/></g>
<g text-anchor="middle" class="sm mut"><text x="162" y="202">parse \u00b7 clean \u00b7 validate</text><text x="304" y="202">compute \u00b7 build tables</text><text x="446" y="202">draw charts</text><text x="588" y="202">generate .eml</text></g>

<rect x="96" y="240" width="558" height="40" rx="3" fill="var(--mist3)" opacity=".55"/>
<text x="375" y="258" text-anchor="middle">Acceptance tests I designed: 34 suites \u00b7 2,380 assertions</text>
<text x="375" y="273" text-anchor="middle" class="sm mut">change a rule or break a number \u2014 the tests go red immediately</text>
<text x="0" y="316" class="sm mut">Result: production time down from 1h+ to minutes \u2014 and it no longer degrades as the data grows.</text>
</svg>
      <figcaption>Division of labour: I set the business rules, AI writes the code, tests are the safeguard</figcaption>
      </figure>
      <figure class="chart">
      <svg viewBox="0 0 680 330">
<text x="0" y="18" class="lbl">Same report \u2014 I rewrote the rules three times</text>
<g>
 <rect x="0" y="40" width="200" height="82" rx="3" fill="#fff" stroke="var(--rule)"/>
 <text x="14" y="60" class="sm acc">What I saw</text>
 <text x="14" y="80" class="sm">one report quietly mixing</text><text x="14" y="96" class="sm">two metric definitions</text><text x="14" y="112" class="sm mut">cross-month copies missed updates</text>
 <path d="M100 126 L100 146" stroke="var(--accent)" fill="none"/><path d="M96 140 L100 147 L104 140" fill="var(--accent)"/>
 <rect x="0" y="150" width="200" height="76" rx="3" fill="var(--accent-soft)"/><rect x="0" y="150" width="3" height="76" fill="var(--accent)"/>
 <text x="14" y="170" class="sm acc">The rule I set</text>
 <text x="14" y="190" class="sm">unify the whole table on the</text><text x="14" y="208" class="sm"><tspan font-weight="600">month of first handling</tspan></text>
</g>
<g transform="translate(240 0)">
 <rect x="0" y="40" width="200" height="82" rx="3" fill="#fff" stroke="var(--rule)"/>
 <text x="14" y="60" class="sm acc">What I saw</text>
 <text x="14" y="80" class="sm">summary and unattributed rows</text><text x="14" y="96" class="sm">hiding the real distribution</text>
 <path d="M100 126 L100 146" stroke="var(--accent)" fill="none"/><path d="M96 140 L100 147 L104 140" fill="var(--accent)"/>
 <rect x="0" y="150" width="200" height="76" rx="3" fill="var(--accent-soft)"/><rect x="0" y="150" width="3" height="76" fill="var(--accent)"/>
 <text x="14" y="170" class="sm acc">The rule I set</text>
 <text x="14" y="190" class="sm"><tspan font-weight="600">exclude both categories</tspan>,</text><text x="14" y="208" class="sm">keep only what is comparable</text>
</g>
<g transform="translate(480 0)">
 <rect x="0" y="40" width="200" height="82" rx="3" fill="#fff" stroke="var(--rule)"/>
 <text x="14" y="60" class="sm acc">What I saw</text>
 <text x="14" y="80" class="sm">attribution still ambiguous \u2014</text><text x="14" y="96" class="sm">records drifting between months</text>
 <path d="M100 126 L100 146" stroke="var(--accent)" fill="none"/><path d="M96 140 L100 147 L104 140" fill="var(--accent)"/>
 <rect x="0" y="150" width="200" height="76" rx="3" fill="var(--accent-soft)"/><rect x="0" y="150" width="3" height="76" fill="var(--accent)"/>
 <text x="14" y="170" class="sm acc">The rule I set</text>
 <text x="14" y="190" class="sm"><tspan font-weight="600">tighten and freeze</tspan> the definition,</text><text x="14" y="208" class="sm">written into tests \u2014 no more drift</text>
</g>
<g stroke="var(--rule)" fill="none"><path d="M200 188 L240 188"/><path d="M440 188 L480 188"/></g>
<text x="0" y="266" class="sm mut">These three are not tool features; they are business rules. The tool just locks them in so nobody can break them.</text>
<text x="0" y="292" class="sm mut">Once a definition lives in the tests, no report can mix two calculations again.</text>
</svg>
      <figcaption>How the judgment evolved: see the problem \u2192 reset the rule \u2192 lock it into tests</figcaption>
      </figure>
      <ul>
      <li>Reports are no longer assembled from screenshots and copy-paste \u2014 blurry images and broken formatting are gone at the source.</li>
      <li>Division of labour: I define every metric and business rule (e.g. &ldquo;attribution month = month of first handling&rdquo;; presentation calls such as listing every case vs. highlighting the biggest \u2014 trade-offs AI cannot make), AI implements, and I design the acceptance tests.</li>
      <li>The key design goal is not &ldquo;faster&rdquo; \u2014 it is engineering human error out of the process: multiple cross-checks, upper and lower tables must reconcile, gaps auto-flagged in red.</li>
      <li>The tests prove themselves: I deliberately tamper with a check to confirm it really turns red \u2014 the suite guards the real rules; it is not decoration.</li>
      </ul>`},
    {label:"Output",zh:"", html:`
      <ul><li>Ships as a single file (~1.2 MB): zero install, zero dependencies, fully offline.</li></ul>`},
    {label:"Result",zh:"", items:[
      "Production time: 1h+ \u2192 minutes, independent of data growth.",
      "34 test suites and 2,380 assertions, all green \u2014 the metric definitions stay guarded.",
      "No definition-mixing or misalignment incidents since launch."]}
  ]
},
{
  no:"02", title:"Document Verification", tag:"Featured", demo:"demo/doc_check_demo_en.html",
  demoLabel:"Live Demo &nbsp;fully interactive",
  star:[
    {label:"Context",zh:"", items:[
      "Review meant checking every customer application document (docx / PDF / scanned image) field by field against system records.",
      "One person on the whole team did this by eye \u2014 slow and miss-prone, and the documents contain confidential business information."]},
    {label:"Methodology",zh:"", html:`
      <div class="verdict">The call that mattered: this is <b>not a job for a cloud LLM</b>. Confidential documents have no compliant channel to an external model \u2014 local is not the cheaper option, it is the only viable one. Review also demands reproducible, auditable verdicts, which non-deterministic LLM output cannot give.</div>
      <figure class="chart">
      <svg viewBox="0 0 660 300">
<rect x="0" y="46" width="430" height="180" rx="6" fill="var(--mist3)" fill-opacity=".18" stroke="var(--accent)" stroke-dasharray="5 4"/>
<text x="14" y="70" class="lbl">My machine \u00b7 fully offline</text>
<g fill="#fff" stroke="var(--rule)"><rect x="16" y="116" width="90" height="56" rx="3"/><rect x="122" y="116" width="110" height="56" rx="3"/><rect x="248" y="116" width="80" height="56" rx="3"/></g>
<rect x="344" y="116" width="70" height="56" rx="3" fill="var(--accent)"/>
<g text-anchor="middle"><text x="61" y="139" class="sm">Document in</text><text x="61" y="157" class="sm mut">docx / PDF / image</text>
<text x="177" y="134" class="sm">Extract text</text><text x="177" y="150" class="sm mut">docx read natively</text><text x="177" y="164" class="sm mut">images \u2192 local OCR</text>
<text x="288" y="139" class="sm">Rule check</text><text x="288" y="157" class="sm mut">explicit rules</text>
<text x="379" y="139" class="sm" style="fill:#fff">Verdict</text><text x="379" y="157" class="sm" style="fill:#fff;opacity:.85">reproducible</text></g>
<g stroke="var(--ink2)" fill="none" opacity=".55"><path d="M106 144 L122 144"/><path d="M232 144 L248 144"/><path d="M328 144 L344 144"/></g>
<g stroke="#c0605e" fill="none"><path d="M430 144 L510 144" stroke-dasharray="5 4"/><path d="M462 132 L478 156"/><path d="M478 132 L462 156"/></g>
<rect x="522" y="116" width="130" height="56" rx="3" fill="#fff" stroke="#c0605e" stroke-dasharray="5 4"/>
<text x="587" y="139" text-anchor="middle" class="sm" style="fill:#c0605e">Cloud LLM / API</text><text x="587" y="157" text-anchor="middle" class="sm" style="fill:#c0605e;opacity:.8">not used</text>
<text x="470" y="190" text-anchor="middle" class="sm" style="fill:#c0605e">documents never leave the machine</text>
<text x="0" y="256" class="sm mut">Uses the OS\u2019s built-in OCR engine: zero install, zero API cost, zero tokens out \u2014 and the rules are plain text, auditable.</text>
<text x="0" y="278" class="sm mut">Eye-checking each file (minutes) \u2192 seconds, and the same file gives the same verdict every time.</text>
</svg>
      <figcaption>Data boundary: the whole pipeline runs on-device; the cloud path was rejected</figcaption>
      </figure>
      <ul>
      <li>Text sources are tiered by trust: docx is parsed natively (zero dependencies, 100% accurate); only PDFs and images fall back to Windows\u2019 built-in OCR engine (Windows.Media.Ocr via PowerShell + WinRT) \u2014 offline, no install, no admin rights. Each source gets its own strictness level.</li>
      <li>Everything runs locally: zero API cost, zero token spend, data never leaves the machine, works offline.</li>
      </ul>`},
    {label:"Output",zh:"", html:`
      <ul><li>A single-file HTML tool: drop a document in, get a verdict \u2014 key fields auto-marked green or red.</li></ul>`},
    {label:"Result",zh:"", items:[
      "Per-document checking went from minutes of eye-balling to seconds: upload \u2192 click \u2192 verdict.",
      "No more missed-by-eye risk; verdicts are reproducible and traceable.",
      "Much faster case turnaround, supporting 1,500\u20132,000 review cases a month."]},
    {label:"Open Source",zh:"", html:`
      <p style="margin:0;font-size:.82rem;color:var(--ink2)">The local OCR approach is extracted and open-sourced (<a href="https://github.com/chutinaa/local-ocr-kit" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;border-bottom:1px solid var(--rule)">local-ocr-kit</a>) \u2014 engine, reusable recipes and a web version.</p>`}
  ]
},
{
  no:"03", title:"Team Tools Platform", tag:"Platform", demo:"demo/tools_hub_demo_en.html", demoLabel:"Tools Overview &nbsp;all six tools \u00b7 click a card to expand",
  star:[
    {label:"System",zh:"", html:`
      <p style="margin-bottom:14px;color:var(--ink2)">4 production tools + 4 tutorial editions + a unified Hub \u2014 9 deliverables in all; multi-source merges, batch format checks and cross-site data conversion went from hours to minutes.</p>
      <ul>
      <li>Every tool ships with a tutorial edition and test data; product notes and the underlying logic are written down.</li>
      <li>The whole set runs fully offline (styles, icons and parsers all inlined) \u2014 new machine or no network, it still works: 9/9 in live tests.</li>
      <li>One Hub entry, one visual language, shipped to product standard \u2014 a system, not a pile of scripts.</li>
      </ul>
      <div class="verdict">How the judgment evolved: from &ldquo;build tools one by one&rdquo; to &ldquo;build a platform to product standard&rdquo; \u2014 unified entry, unified style, all offline single-file, presented together in the Hub.</div>
      <figure class="chart shotfig"><img src="assets/hub_home.png" alt="Tools Hub home" loading="lazy"><figcaption>Hub home \u00b7 real interface (system names genericised); Hub UI is in Chinese \u2014 the demo above is the English walkthrough</figcaption></figure>`},
    {label:"Open Source",zh:"", html:`
      <p style="margin:0;font-size:.82rem;color:var(--ink2)">The offline-delivery approach is extracted and open-sourced (<a href="https://github.com/chutinaa/offline-html-kit" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;border-bottom:1px solid var(--rule)">offline-html-kit</a>) \u2014 reusable recipes with a working example and an anti-example.</p>`}
  ]
},
{
  no:"04", title:"Personal Job-Search Agent", tag:"Custom agent", demo:"demo/agent_demo_en.html", demoLabel:"Live Demo &nbsp;pick a task, watch six components split the work",
  star:[
    {label:"Context",zh:"", html:`
      <ul>
      <li>Job-hunt materials were scattered: several resume versions, project evidence spread across documents, screenshots and code \u2014 every application meant digging through it all again.</li>
      <li>Asking AI to write the resume directly over-polishes and invents motivation \u2014 it reads well but is not true, so I could not use it.</li>
      <li>So I built a custom agent that runs on an <b>experience base</b>: first turn real experience into records, then run job matching, resume tailoring and interview prep on top of those records.</li>
      </ul>`},
    {label:"Build",zh:"", html:`
      <ul>
      <li>The core is <b>routing</b>: the main instruction does nothing itself \u2014 it classifies the task and hands it to the right skill, so what each layer owns and does is explicit (52 rules / 11 groups).</li>
      <li>None of the 11 custom skills existed off the shelf: each was fed into shape bit by bit \u2014 intake and filing, tailored output, decision scoring, style gatekeeping.</li>
      <li>Data is layered: raw evidence \u2192 structured experience \u2192 tailored output; anything outward-facing passes a final style gate \u2014 the same acceptance thinking as on the work side.</li>
      </ul>
      <div class="rfg">
      <svg class="ringsvg" viewBox="-152 -152 304 304" data-a="-1" aria-label="Agent layer architecture">
      <circle r="130" class="ring rg3"/><circle r="92" class="ring rg2"/><circle r="54" class="ring rg1"/>
      <circle r="26" class="core"/><text y="5" class="coretxt" font-size="13">ME</text>
      <circle cx="25.9" cy="-88.3" r="4.5" class="sdot"/><circle cx="91.1" cy="-13.1" r="4.5" class="sdot"/><circle cx="83.7" cy="38.2" r="4.5" class="sdot"/><circle cx="49.7" cy="77.4" r="4.5" class="sdot"/><circle cx="0" cy="92" r="4.5" class="sdot"/><circle cx="-49.7" cy="77.4" r="4.5" class="sdot"/><circle cx="-83.7" cy="38.2" r="4.5" class="sdot"/><circle cx="-91.1" cy="-13.1" r="4.5" class="sdot"/><circle cx="-69.5" cy="-60.2" r="4.5" class="sdot"/><circle cx="-25.9" cy="-88.3" r="4.5" class="sdot"/>
      <text y="44" class="rname nn1">RULES</text><text y="82" class="rname nn2">SKILL</text><text y="114" class="rname nn3">KNOWLEDGE</text>
      <text x="40.8" y="-26.4" class="bignum gg1">52</text><text x="69.4" y="-51.4" class="bignum gg2">11</text><text x="98.1" y="-76.3" class="bignum gg3">60+</text>
      <circle r="40" stroke-width="28" class="rhit" data-l="1"/><circle r="73" stroke-width="38" class="rhit" data-l="2"/><circle r="111" stroke-width="38" class="rhit" data-l="3"/><circle r="26" class="rhitc rhit" data-l="0"/>
      </svg>
      <div class="rcards">
      <div class="rcard on" data-rc="ov"><small>OVERVIEW</small><h4>Layers, not one prompt</h4><p>Inside out: rules set the boundaries, SKILL divides the work, the knowledge base holds the facts. Hover any layer for details.</p></div>
      <div class="rcard" data-rc="0"><small>CORE \u00b7 decision</small><h4>Me \u00b7 final say</h4><p>Apply or not, which version, what goes out \u2014 the human always decides. AI supplies analysis and drafts, not decisions.</p></div>
      <div class="rcard" data-rc="1"><small>LAYER 01 \u00b7 boundaries</small><h4>Rules \u00b7 <i>52</i></h4><p>Boundaries and red lines: never invent experience; per-job tailoring never writes back to the master file; my formats and boundaries take top priority.</p></div>
      <div class="rcard" data-rc="2"><small>LAYER 02 \u00b7 division</small><h4>SKILL \u00b7 <i>11</i></h4><p>Each owns one job, triggered on demand, no interference \u2014 none off the shelf, all fed into shape by hand.</p><div class="chips"><span>Intake</span><span>Master merge</span><span>Experience fill-in</span><span>Resume selection</span><span>Resume tailoring</span><span>Cover letter</span><span>Style gate</span><span>Interview prep</span><span>JD scoring</span><span>Job archive</span><span>Resource index</span></div></div>
      <div class="rcard" data-rc="3"><small>LAYER 03 \u00b7 facts</small><h4>Knowledge base \u00b7 growing</h4><p>The long-term experience base is the single source of truth: raw evidence \u2192 structured experience \u2192 tailored output, kept in separate layers.</p></div>
      </div>
      </div>`},
    {label:"Evolution",zh:"", html:`
      <p style="margin-bottom:12px;color:var(--ink2)">The rules were not designed up front \u2014 they were tightened one by one as real use hit problems. Three of them:</p>
      <ul>
      <li><b>Per-job tailoring never writes back to the master.</b> One-off customisation was polluting the long-term base \u2192 per-job drafts stopped writing back by default \u2192 master file and one-off output now live in separate layers.</li>
      </ul>
      <div class="verdict"><b>JD hallucination:</b> at first, JD scoring just counted keyword overlap \u2014 scores ran high.
      <p><b>First tightening:</b> switched to a rubric \u2014 base points for the fundamentals, then add or subtract by career direction.</p>
      <p><b>Second tightening:</b> in practice, many JDs turn out to be AI-written and beautifully packaged for what are really back-office roles. So the agent now models where the role sits inside the company first: work that feeds business decisions directly scores at full weight; work that merely supports someone else\u2019s decisions gets discounted.</p>
      <p><b>Used for real:</b> it re-scored one internship below what the JD suggested, and I re-ordered my applications accordingly.</p></div>
      <ul>
      <li><b>Never invent experience.</b> AI resume edits drift into over-packaging and consulting-speak \u2192 only light polish is allowed: no changing what a project was, no invented business impact \u2192 every line is backed by real evidence.</li>
      </ul>`},
    {label:"Result",zh:"", html:`
      <ul>
      <li>Experience is recorded once and reused for good: job matching, resume tailoring and interview prep all run on the same base \u2014 no more starting from zero with a chatbot.</li>
      <li>Real use: the JD-scoring rules saw through a well-packaged role and corrected my application priorities.</li>
      <li>The same layer + route + gate pattern as my work-side systems \u2014 see 05.</li>
      </ul>
      <figure class="chart shotfig"><img src="assets/agent_home.png" alt="Job-search agent home" loading="lazy"><figcaption>Agent home \u00b7 real interface (UI in Chinese)</figcaption></figure>`}
  ]
},
{
  no:"05", title:"Results & Method", tag:"At a glance",
  star:[
    {label:"Results",zh:"", html:`
      <div class="nums">
        <div><b>4</b><span>selected cases</span></div>
        <div><b>1h \u2192 1min</b><span>monthly report production</span></div>
        <div><b>10/10</b><span>doc-check baseline all correct<br>previously checked by hand</span></div>
        <div><b>9/9</b><span>tools fully usable offline<br>open and run, zero install</span></div>
        <div><b>120k+</b><span>rows processed per report</span></div>
      </div>`},
    {label:"Method",zh:"one loop, running in all four cases", html:`
      <div class="loop">
        <svg viewBox="0 0 760 150">
          <defs>
            <marker id="m5ar" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#6a63a6"/></marker>
            <marker id="m5ar2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#c0605e"/></marker>
          </defs>
          <rect x="30" y="30" width="190" height="58" rx="10" fill="#aab2f0" opacity=".28" stroke="#aab2f0"/>
          <text x="125" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#1c1b19">Human \u00b7 sets the rules</text>
          <text x="125" y="74" text-anchor="middle" font-size="10" fill="#6b6862">definitions \u00b7 red lines \u00b7 standards</text>
          <rect x="285" y="30" width="190" height="58" rx="10" fill="#b6e0d8" opacity=".35" stroke="#8ec7bc"/>
          <text x="380" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#1c1b19">AI \u00b7 implements</text>
          <text x="380" y="74" text-anchor="middle" font-size="10" fill="#6b6862">code \u00b7 repetition \u00b7 batch runs</text>
          <rect x="540" y="30" width="190" height="58" rx="10" fill="#f0c2cc" opacity=".35" stroke="#d99aa9"/>
          <text x="635" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#1c1b19">Acceptance \u00b7 gatekeeps</text>
          <text x="635" y="74" text-anchor="middle" font-size="10" fill="#6b6862">number-for-number checks \u00b7 style gate</text>
          <line x1="222" y1="59" x2="281" y2="59" stroke="#6a63a6" stroke-width="1.6" marker-end="url(#m5ar)"/>
          <line x1="477" y1="59" x2="536" y2="59" stroke="#6a63a6" stroke-width="1.6" marker-end="url(#m5ar)"/>
          <path d="M635 92 v22 q0 10 -10 10 H135 q-10 0 -10 -10 V96" fill="none" stroke="#c0605e" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#m5ar2)"/>
          <rect x="290" y="114" width="180" height="20" rx="10" fill="#fdfdfc"/>
          <text x="380" y="128" text-anchor="middle" font-size="10.5" fill="#c0605e" font-weight="600">fail \u2192 sent back, rules tightened</text>
        </svg>
        <div class="cols">
          <p><b>Business judgment stays human.</b> How metrics are defined, what counts as wrong, which actions need sign-off first \u2014 implicit experience becomes explicit rules, and AI makes no business calls (which month a report counts toward is decided by a person first, then written into the rules).</p>
          <p><b>Implementation goes to AI \u2014 nobody writes code line by line.</b> Inside the rules it runs on its own; outside them it must stop and ask. Every change is backed up, re-read and reported (all four case-study tools were built this way; I never wrote the code line by line).</p>
          <p><b>Wrong output cannot get out.</b> Key numbers are extracted and checked one against one \u2014 mismatches are sent back; anything uncertain goes to human review; outward-facing output passes a final language gate (the report tool sits on 2,388 automated checks \u2014 one failure and the report does not ship).</p>
        </div>
      </div>`},
    {label:"Transferable",zh:"same method, landed twice", html:`
      <div class="trans">
        <div class="side">
          <h4>Work side<small>cases 01\u201303</small></h4>
          <p>A skill system captures definitions and engineering lessons; a domain knowledge base holds the business rules \u2014 the report, the checker and the platform all grow on this foundation.</p>
          <a class="back" data-goto="1">Back to cases 01\u201303 \u2192</a>
        </div>
        <div class="mid"><span class="lbl">same method</span><span class="arr">\u21c4</span></div>
        <div class="side">
          <h4>Personal side<small>case 04</small></h4>
          <p>The job-search agent is the same structure built again: chat-style AI broken into a multi-step system with division of labour and boundaries \u2014 the right skill for the right call, contexts kept separate. The method travels; it is not tied to one scenario.</p>
          <a class="back" data-goto="4">See the live demo in 04 \u2192</a>
        </div>
      </div>
      <div class="starter"><b>How to start with this method</b>
        <ol>
          <li>Write your definitions as explicit rules first: what counts as right, what counts as wrong, what must be asked before acting</li>
          <li>Hand implementation to AI: code and batch runs are its job \u2014 do not write line by line</li>
          <li>Set your own acceptance bar: how results are checked and what happens on failure \u2014 decide before going live</li>
        </ol>
      </div>`}
  ]
}]};
