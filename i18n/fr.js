/* FR language pack — generated for portfolio/index.html.
   Structure mirrors SECTIONS_ZH / EN exactly: 6 sections, same star counts.
   Live demos are not translated: FR points to the English demos. */
window.FR = {
ui: {
  liveDemo: "Démo live &nbsp;entièrement interactive",
  openTab: "Ouvrir dans un nouvel onglet →",
  demoTitle: " · démo",
  dnote: "Données anonymisées · toutes les données de la démo sont fictives",
  prev: "Précédent", next: "Suivant", toc: "Sommaire",
  tags: ["AI Enablement","Low-code","Automatisation des processus","Local-first"],
  aboutBg: "Pendant mon stage en Opérations, j’ai réalisé de bout en bout les vrais workflows métier de l’équipe, et constaté nombre d’étapes répétitives et automatisables. Je ne voulais pas d’une IA gadget : je l’ai transformée en workflows reproductibles, et les processus clés de l’équipe sont passés de plusieurs heures de travail manuel à quelques minutes. Au-delà, la curiosité me pousse à explorer de nouvelles façons de travailler avec l’IA : ce qui est réplicable, ce n’est pas un outil en particulier, c’est le cadre et la méthode de construction.",
  aboutDo: [
    "Décomposer les processus métier et transformer les règles implicites en définitions exécutables",
    "Livrer les processus sous forme d’outils opérationnels avec low-code + IA, sans écrire le code ligne par ligne",
    "Concevoir la recette et les tests pour que les outils restent fiables entre d’autres mains"],
  ghline: "Une sélection de projets est sur GitHub →"
},
sections: [
{
  no:"00", title:"Vue d’ensemble", tag:"Intro",
  star:[{label:"",zh:"", html:`
    <p style="font-size:1.05em;max-width:44em;line-height:1.8">
    Utilisatrice avancée de l’IA en première ligne des opérations, j’explore ce que les workflows automatisés par l’IA peuvent accomplir. Chacun de ces processus métier, je l’ai d’abord réalisé de bout en bout — puis automatisé moi-même : <b>6 outils de niveau production</b>, livrés en solo, qui font passer le travail Excel central de l’équipe de plusieurs heures à quelques minutes.<br><br>
    Ce que j’apporte, ce n’est pas du code. C’est la boucle : <b>décomposer le processus → définir les règles → diriger l’IA pour construire → concevoir la vérification comme garde-fou</b>.
    </p>
    <div class="metrics">
      <div><b>6</b><small>outils de niveau production</small></div>
      <div><b>2380</b><small>assertions de test</small></div>
      <div><b>120 k+</b><small>lignes de données</small></div>
      <div><b>0</b><small>token &middot; donnée sortante</small></div>
    </div>
    <nav class="dir">
      <a data-goto="1"><b>01</b>Automatisation du rapport mensuel <span>&mdash; de plusieurs heures manuelles à un clic, les rapprochements comme garde-fou</span></a>
      <a data-goto="2"><b>02</b>Vérification de documents <span>&mdash; OCR hors ligne + rapprochement tolérant : du contrôle à l’œil fichier par fichier au verdict en lot</span></a>
      <a data-goto="3"><b>03</b>Plateforme d’outils d’équipe <span>&mdash; six outils, une entrée, tout hors ligne, zéro installation</span></a>
      <a data-goto="4"><b>04</b>Agent personnel de recherche d’emploi <span>&mdash; un agent multi-skills construit pour moi-même</span></a>
      <a data-goto="5"><b>05</b>Résultats &amp; méthode <span>&mdash; au-delà des chiffres, une façon reproductible de livrer</span></a>
    </nav>
    <button class="cta" data-goto="1">Étude de cas phare →</button>`}]
},
{
  no:"01", title:"Rapport mensuel automatisé", tag:"Cas phare", demo:"demo/monthly_report_demo_en.html",
  demoLabel:"Démo live &nbsp;interactive · en anglais",
  star:[
    {label:"Contexte",zh:"", items:[
      "Le rapport mensuel de l’équipe reposait entièrement sur un travail Excel manuel : deux tables sources totalisant 120 k+ lignes (plus de 100 k lignes d’historique détaillé et un registre de 20 k+), empilées de chaînes de formules qu’une seule modification maladroite suffisait à casser ; chaque rapport prenait une heure ou plus.",
      "Incidents réels : un total de synthèse sorti 30 000 trop haut, avec toutes les recherches en aval périmées ; une ligne insérée qui décale tout le dessous ; des formules copiées d’un mois à l’autre pas toutes mises à jour, si bien qu’un même rapport mélangeait en silence deux règles de calcul."]},
    {label:"Méthode",zh:"", html:`
      <figure class="chart">
      <svg viewBox="0 0 680 340">
<g class="lbl"><text x="45" y="60" text-anchor="middle">Processus</text></g>
<g><text x="45" y="118" class="lbl" text-anchor="middle">Moi</text><text x="45" y="134" class="sm mut" text-anchor="middle">jugement</text></g>
<g><text x="45" y="204" class="lbl" text-anchor="middle">IA</text><text x="45" y="220" class="sm mut" text-anchor="middle">exécution</text></g>
<g><text x="45" y="272" class="lbl" text-anchor="middle">Garde-fou</text></g>

<g fill="var(--mist1)" opacity=".55"><rect x="96" y="40" width="132" height="32" rx="3"/><rect x="238" y="40" width="132" height="32" rx="3"/><rect x="380" y="40" width="132" height="32" rx="3"/><rect x="522" y="40" width="132" height="32" rx="3"/></g>
<g text-anchor="middle" class="sm"><text x="162" y="61">① Préparation</text><text x="304" y="61">② Synthèses</text><text x="446" y="61">③ Graphiques</text><text x="588" y="61">④ Envoi e-mail</text></g>
<g stroke="var(--ink2)" fill="none" opacity=".5"><path d="M228 56 L238 56"/><path d="M370 56 L380 56"/><path d="M512 56 L522 56"/></g>

<g fill="var(--accent-soft)" stroke="var(--accent)" stroke-opacity=".45"><rect x="96" y="90" width="132" height="66" rx="3"/><rect x="238" y="90" width="132" height="66" rx="3"/><rect x="380" y="90" width="132" height="66" rx="3"/><rect x="522" y="90" width="132" height="66" rx="3"/></g>
<g text-anchor="middle" class="sm">
 <text x="162" y="112">ce qui est valide</text><text x="162" y="130">mois de rattachement</text><text x="162" y="148">quand s’arrêter</text>
 <text x="304" y="112">définition des KPI</text><text x="304" y="130">quoi exclure</text><text x="304" y="148">quoi montrer</text>
 <text x="446" y="121">quels KPI suivre</text><text x="446" y="139">signaler les écarts</text>
 <text x="588" y="121">ce que voit le lecteur</text><text x="588" y="139">formulation &amp; plan</text>
</g>

<g fill="#fff" stroke="var(--rule)"><rect x="96" y="176" width="132" height="42" rx="3"/><rect x="238" y="176" width="132" height="42" rx="3"/><rect x="380" y="176" width="132" height="42" rx="3"/><rect x="522" y="176" width="132" height="42" rx="3"/></g>
<g text-anchor="middle" class="sm mut"><text x="162" y="202">lire · nettoyer · valider</text><text x="304" y="202">calculs · tableaux</text><text x="446" y="202">tracé des graphiques</text><text x="588" y="202">générer le .eml</text></g>

<rect x="96" y="240" width="558" height="40" rx="3" fill="var(--mist3)" opacity=".55"/>
<text x="375" y="258" text-anchor="middle">Tests de recette conçus par moi : 34 suites · 2380 assertions</text>
<text x="375" y="273" text-anchor="middle" class="sm mut">modifiez une règle ou cassez un chiffre : les tests passent au rouge aussitôt</text>
<text x="0" y="316" class="sm mut">Résultat : production passée de 1 h+ à quelques minutes, sans dégradation quand les données grossissent.</text>
</svg>
      <figcaption>Répartition des rôles : je fixe les règles métier, l’IA écrit le code, les tests servent de garde-fou</figcaption>
      </figure>
      <figure class="chart">
      <svg viewBox="0 0 680 330">
<text x="0" y="18" class="lbl">Le même rapport : j’ai réécrit la règle trois fois</text>
<g>
 <rect x="0" y="40" width="200" height="82" rx="3" fill="#fff" stroke="var(--rule)"/>
 <text x="14" y="60" class="sm acc">Ce que j’ai vu</text>
 <text x="14" y="80" class="sm">un même rapport mélangeait</text><text x="14" y="96" class="sm">deux règles de calcul</text><text x="14" y="112" class="sm mut">copies inter-mois pas à jour</text>
 <path d="M100 126 L100 146" stroke="var(--accent)" fill="none"/><path d="M96 140 L100 147 L104 140" fill="var(--accent)"/>
 <rect x="0" y="150" width="200" height="76" rx="3" fill="var(--accent-soft)"/><rect x="0" y="150" width="3" height="76" fill="var(--accent)"/>
 <text x="14" y="170" class="sm acc">La règle que j’ai posée</text>
 <text x="14" y="190" class="sm">toute la table alignée sur le</text><text x="14" y="208" class="sm"><tspan font-weight="600">mois du premier traitement</tspan></text>
</g>
<g transform="translate(240 0)">
 <rect x="0" y="40" width="200" height="82" rx="3" fill="#fff" stroke="var(--rule)"/>
 <text x="14" y="60" class="sm acc">Ce que j’ai vu</text>
 <text x="14" y="80" class="sm">totaux et lignes non rattachées</text><text x="14" y="96" class="sm">masquaient la vraie distribution</text>
 <path d="M100 126 L100 146" stroke="var(--accent)" fill="none"/><path d="M96 140 L100 147 L104 140" fill="var(--accent)"/>
 <rect x="0" y="150" width="200" height="76" rx="3" fill="var(--accent-soft)"/><rect x="0" y="150" width="3" height="76" fill="var(--accent)"/>
 <text x="14" y="170" class="sm acc">La règle que j’ai posée</text>
 <text x="14" y="190" class="sm"><tspan font-weight="600">exclure ces deux catégories</tspan>,</text><text x="14" y="208" class="sm">ne garder que le comparable</text>
</g>
<g transform="translate(480 0)">
 <rect x="0" y="40" width="200" height="82" rx="3" fill="#fff" stroke="var(--rule)"/>
 <text x="14" y="60" class="sm acc">Ce que j’ai vu</text>
 <text x="14" y="80" class="sm">rattachement encore ambigu :</text><text x="14" y="96" class="sm">des lignes dérivaient entre mois</text>
 <path d="M100 126 L100 146" stroke="var(--accent)" fill="none"/><path d="M96 140 L100 147 L104 140" fill="var(--accent)"/>
 <rect x="0" y="150" width="200" height="76" rx="3" fill="var(--accent-soft)"/><rect x="0" y="150" width="3" height="76" fill="var(--accent)"/>
 <text x="14" y="170" class="sm acc">La règle que j’ai posée</text>
 <text x="14" y="190" class="sm"><tspan font-weight="600">resserrer et figer</tspan> la définition,</text><text x="14" y="208" class="sm">dans les tests : la dérive s’arrête</text>
</g>
<g stroke="var(--rule)" fill="none"><path d="M200 188 L240 188"/><path d="M440 188 L480 188"/></g>
<text x="0" y="266" class="sm mut">Ces trois décisions ne sont pas des fonctionnalités de l’outil : ce sont des règles métier. L’outil ne fait que les verrouiller.</text>
<text x="0" y="292" class="sm mut">Une fois la définition inscrite dans les tests, plus aucun rapport ne peut mélanger deux calculs.</text>
</svg>
      <figcaption>Évolution du jugement : voir le problème → reposer la règle → la verrouiller dans les tests</figcaption>
      </figure>
      <ul>
      <li>Fini le rapport assemblé par captures d’écran et copier-coller : images floues et mises en forme cassées disparaissent à la source.</li>
      <li>Répartition des rôles : je définis chaque indicateur et chaque règle métier (p. ex. « mois de rattachement = mois du premier traitement » ; ou des choix de présentation comme lister tous les cas ou mettre en avant le plus gros — des arbitrages que l’IA ne peut pas faire), l’IA implémente, et je conçois les tests de recette.</li>
      <li>L’objectif de conception n’est pas « plus vite » : c’est d’éliminer l’erreur humaine du processus — rapprochements croisés multiples, tableaux haut et bas qui doivent se recouper, écarts signalés en rouge automatiquement.</li>
      <li>Les tests font leurs preuves : je sabote volontairement un contrôle pour vérifier qu’il passe bien au rouge — la suite protège de vraies règles, ce n’est pas de la décoration.</li>
      </ul>`},
    {label:"Livrable",zh:"", html:`
      <ul><li>Livré en un seul fichier (~1,2 Mo) : zéro installation, zéro dépendance, entièrement hors ligne.</li></ul>`},
    {label:"Résultats",zh:"", items:[
      "Temps de production : 1 h+ → quelques minutes, indépendant de la croissance des données.",
      "34 suites de tests et 2380 assertions, toutes au vert : les règles de calcul restent sous garde.",
      "Aucun incident de mélange de définitions ni de décalage depuis la mise en service."]}
  ]
},
{
  no:"02", title:"Vérification de documents", tag:"Cas phare", demo:"demo/doc_check_demo_en.html",
  demoLabel:"Démo live &nbsp;interactive · en anglais",
  star:[
    {label:"Contexte",zh:"", items:[
      "Le contrôle consistait à vérifier chaque document client (docx / PDF / scan) champ par champ contre les données du système.",
      "Une seule personne faisait ce contrôle à l’œil pour toute l’équipe : lent, sujet aux oublis — et les documents contiennent des informations métier confidentielles."]},
    {label:"Méthode",zh:"", html:`
      <div class="verdict">La décision qui comptait : ce n’est <b>pas un travail pour un LLM cloud</b>. Les documents confidentiels n’ont aucun canal conforme vers un modèle externe — le local n’est pas l’option la moins chère, c’est la seule viable. Le contrôle exige aussi des verdicts reproductibles et auditables, ce qu’une sortie de LLM non déterministe ne peut pas donner.</div>
      <figure class="chart">
      <svg viewBox="0 0 660 300">
<rect x="0" y="46" width="430" height="180" rx="6" fill="var(--mist3)" fill-opacity=".18" stroke="var(--accent)" stroke-dasharray="5 4"/>
<text x="14" y="70" class="lbl">Ma machine · tout hors ligne</text>
<g fill="#fff" stroke="var(--rule)"><rect x="16" y="116" width="90" height="56" rx="3"/><rect x="122" y="116" width="110" height="56" rx="3"/><rect x="248" y="116" width="80" height="56" rx="3"/></g>
<rect x="344" y="116" width="70" height="56" rx="3" fill="var(--accent)"/>
<g text-anchor="middle"><text x="61" y="139" class="sm">Document</text><text x="61" y="157" class="sm mut">docx / PDF / image</text>
<text x="177" y="134" class="sm">Extraction texte</text><text x="177" y="150" class="sm mut">docx lu nativement</text><text x="177" y="164" class="sm mut">images → OCR local</text>
<text x="288" y="139" class="sm">Contrôle</text><text x="288" y="157" class="sm mut">règles écrites</text>
<text x="379" y="139" class="sm" style="fill:#fff">Verdict</text><text x="379" y="157" class="sm" style="fill:#fff;opacity:.85">reproductible</text></g>
<g stroke="var(--ink2)" fill="none" opacity=".55"><path d="M106 144 L122 144"/><path d="M232 144 L248 144"/><path d="M328 144 L344 144"/></g>
<g stroke="#c0605e" fill="none"><path d="M430 144 L510 144" stroke-dasharray="5 4"/><path d="M462 132 L478 156"/><path d="M478 132 L462 156"/></g>
<rect x="522" y="116" width="130" height="56" rx="3" fill="#fff" stroke="#c0605e" stroke-dasharray="5 4"/>
<text x="587" y="139" text-anchor="middle" class="sm" style="fill:#c0605e">LLM cloud / API</text><text x="587" y="157" text-anchor="middle" class="sm" style="fill:#c0605e;opacity:.8">non utilisé</text>
<text x="470" y="190" text-anchor="middle" class="sm" style="fill:#c0605e">les documents ne quittent jamais la machine</text>
<text x="0" y="256" class="sm mut">Moteur OCR intégré au système : zéro installation, zéro coût d’API, zéro token sortant — et les règles sont du texte brut, auditables.</text>
<text x="0" y="278" class="sm mut">Du contrôle à l’œil (minutes par fichier) au verdict en secondes, identique à chaque passage.</text>
</svg>
      <figcaption>Frontière des données : toute la chaîne tourne sur la machine ; la voie cloud a été écartée</figcaption>
      </figure>
      <ul>
      <li>Les sources de texte sont hiérarchisées par fiabilité : le docx est lu nativement (zéro dépendance, 100 % exact) ; seuls les PDF et les images passent par le moteur OCR intégré à Windows (Windows.Media.Ocr via PowerShell + WinRT) — hors ligne, sans installation, sans droits admin. Chaque source a son propre niveau d’exigence.</li>
      <li>Tout tourne en local : zéro coût d’API, zéro token dépensé, les données ne quittent pas la machine, fonctionne hors ligne.</li>
      </ul>`},
    {label:"Livrable",zh:"", html:`
      <ul><li>Un outil HTML en un seul fichier : déposez un document, obtenez un verdict — les champs clés marqués en vert ou en rouge automatiquement.</li></ul>`},
    {label:"Résultats",zh:"", items:[
      "Le contrôle par document passe de plusieurs minutes à l’œil à quelques secondes : dépôt → clic → verdict.",
      "Fini le risque d’oubli visuel ; les verdicts sont reproductibles et traçables.",
      "Traitement des dossiers nettement accéléré, à l’appui de 1 500 à 2 000 dossiers de contrôle par mois."]},
    {label:"Open source",zh:"", html:`
      <p style="margin:0;font-size:.82rem;color:var(--ink2)">L’approche OCR locale a été extraite et publiée en open source (<a href="https://github.com/chutinaa/local-ocr-kit" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;border-bottom:1px solid var(--rule)">local-ocr-kit</a>) — moteur, recettes réutilisables et version web.</p>`}
  ]
},
{
  no:"03", title:"Plateforme d’outils d’équipe", tag:"Plateforme", demo:"demo/tools_hub_demo_en.html", demoLabel:"Panorama des outils &nbsp;six outils · cliquer une carte pour déplier · en anglais",
  star:[
    {label:"Système",zh:"", html:`
      <p style="margin-bottom:14px;color:var(--ink2)">4 outils de production + 4 versions tutorielles + un Hub unifié, soit 9 livrables ; fusions multi-sources, contrôles de format en lot et conversion de données inter-sites passent de plusieurs heures à quelques minutes.</p>
      <ul>
      <li>Chaque outil est livré avec sa version tutorielle et ses données de test ; notes produit et logique sous-jacente sont écrites noir sur blanc.</li>
      <li>L’ensemble fonctionne entièrement hors ligne (styles, icônes et parseurs intégrés) : machine neuve ou pas de réseau, ça marche — 9/9 en test réel.</li>
      <li>Une entrée Hub unique, un langage visuel commun, livré au standard produit : un système, pas un tas de scripts.</li>
      </ul>
      <div class="verdict">Évolution du jugement : de « construire les outils un par un » à « construire une plateforme au standard produit » — entrée unifiée, style unifié, fichiers uniques hors ligne, présentés ensemble dans le Hub.</div>
      <figure class="chart shotfig"><img src="assets/hub_home.png" alt="Accueil du Hub" loading="lazy"><figcaption>Accueil du Hub · interface réelle (noms de systèmes rendus génériques) ; l’interface du Hub est en chinois — la démo ci-dessus est la visite guidée en anglais</figcaption></figure>`},
    {label:"Open source",zh:"", html:`
      <p style="margin:0;font-size:.82rem;color:var(--ink2)">L’approche de livraison hors ligne a été extraite et publiée en open source (<a href="https://github.com/chutinaa/offline-html-kit" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;border-bottom:1px solid var(--rule)">offline-html-kit</a>) — recettes réutilisables, exemple et contre-exemple.</p>`}
  ]
},
{
  no:"04", title:"Agent de recherche d’emploi", tag:"Agent sur mesure", demo:"demo/agent_demo_en.html", demoLabel:"Démo live &nbsp;choisissez une tâche, six composants se partagent le travail · en anglais",
  star:[
    {label:"Contexte",zh:"", html:`
      <ul>
      <li>Mes éléments de candidature étaient éparpillés : plusieurs versions de CV, des preuves de projets réparties entre documents, captures d’écran et code — chaque candidature obligeait à tout refouiller.</li>
      <li>Demander à l’IA d’écrire le CV directement sur-embellit et invente des motivations : ça se lit bien mais ce n’est pas vrai, donc inutilisable.</li>
      <li>J’ai donc construit un agent sur mesure adossé à une <b>base d’expériences</b> : d’abord transformer le vécu réel en fiches, puis faire tourner le matching d’offres, l’adaptation du CV et la préparation d’entretien sur ces fiches.</li>
      </ul>`},
    {label:"Construction",zh:"", html:`
      <ul>
      <li>Le cœur, c’est le <b>routage</b> : l’instruction principale ne fait rien elle-même — elle classe la tâche et la confie à la bonne skill, si bien que ce que chaque couche possède et fait est explicite (52 règles / 11 groupes).</li>
      <li>Aucune des 11 skills sur mesure n’existait toute faite : chacune a été façonnée petit à petit — collecte et classement, sortie adaptée, notation d’offres, contrôle du style.</li>
      <li>Les données sont en couches : preuves brutes → expériences structurées → sortie adaptée ; tout ce qui part vers l’extérieur passe un dernier contrôle de style — la même logique de recette que côté travail.</li>
      </ul>
      <div class="rfg">
      <svg class="ringsvg" viewBox="-152 -152 304 304" data-a="-1" aria-label="Architecture en couches de l’agent">
      <circle r="130" class="ring rg3"/><circle r="92" class="ring rg2"/><circle r="54" class="ring rg1"/>
      <circle r="26" class="core"/><text y="5" class="coretxt" font-size="13">MOI</text>
      <circle cx="25.9" cy="-88.3" r="4.5" class="sdot"/><circle cx="91.1" cy="-13.1" r="4.5" class="sdot"/><circle cx="83.7" cy="38.2" r="4.5" class="sdot"/><circle cx="49.7" cy="77.4" r="4.5" class="sdot"/><circle cx="0" cy="92" r="4.5" class="sdot"/><circle cx="-49.7" cy="77.4" r="4.5" class="sdot"/><circle cx="-83.7" cy="38.2" r="4.5" class="sdot"/><circle cx="-91.1" cy="-13.1" r="4.5" class="sdot"/><circle cx="-69.5" cy="-60.2" r="4.5" class="sdot"/><circle cx="-25.9" cy="-88.3" r="4.5" class="sdot"/>
      <text y="44" class="rname nn1">RÈGLES</text><text y="82" class="rname nn2">SKILLS</text><text y="114" class="rname nn3">SAVOIR</text>
      <text x="40.8" y="-26.4" class="bignum gg1">52</text><text x="69.4" y="-51.4" class="bignum gg2">11</text><text x="98.1" y="-76.3" class="bignum gg3">60+</text>
      <circle r="40" stroke-width="28" class="rhit" data-l="1"/><circle r="73" stroke-width="38" class="rhit" data-l="2"/><circle r="111" stroke-width="38" class="rhit" data-l="3"/><circle r="26" class="rhitc rhit" data-l="0"/>
      </svg>
      <div class="rcards">
      <div class="rcard on" data-rc="ov"><small>VUE D’ENSEMBLE</small><h4>Des couches, pas un prompt</h4><p>De l’intérieur vers l’extérieur : les règles fixent les limites, les skills répartissent le travail, la base de savoir détient les faits. Survolez une couche pour le détail.</p></div>
      <div class="rcard" data-rc="0"><small>CŒUR · décision</small><h4>Moi · dernier mot</h4><p>Postuler ou non, quelle version, ce qui part : c’est toujours l’humain qui décide. L’IA fournit analyses et brouillons, pas de décisions.</p></div>
      <div class="rcard" data-rc="1"><small>COUCHE 01 · limites</small><h4>Règles · <i>52</i></h4><p>Limites et lignes rouges : ne jamais inventer d’expérience ; l’adaptation par offre n’écrit jamais dans le fichier maître ; mes formats et mes limites passent en premier.</p></div>
      <div class="rcard" data-rc="2"><small>COUCHE 02 · répartition</small><h4>Skills · <i>11</i></h4><p>Chacune a un seul rôle, déclenchée à la demande, sans interférence — aucune toute faite, toutes façonnées à la main.</p><div class="chips"><span>Collecte</span><span>Fusion du maître</span><span>Complément d’expérience</span><span>Choix du CV</span><span>Adaptation du CV</span><span>Lettre de motivation</span><span>Contrôle du style</span><span>Préparation d’entretien</span><span>Notation d’offres</span><span>Archivage d’offres</span><span>Index des ressources</span></div></div>
      <div class="rcard" data-rc="3"><small>COUCHE 03 · faits</small><h4>Base de savoir · en croissance</h4><p>La base d’expériences longue durée est la source unique de vérité : preuves brutes → expériences structurées → sortie adaptée, gardées en couches séparées.</p></div>
      </div>
      </div>`},
    {label:"Évolution",zh:"", html:`
      <p style="margin-bottom:12px;color:var(--ink2)">Les règles n’ont pas été conçues d’avance : elles se sont resserrées une à une au fil des problèmes rencontrés en usage réel. Trois exemples :</p>
      <ul>
      <li><b>L’adaptation par offre n’écrit jamais dans le maître.</b> La personnalisation ponctuelle polluait la base longue durée → les brouillons par offre n’écrivent plus dans le maître par défaut → fichier maître et sorties ponctuelles vivent désormais en couches séparées.</li>
      </ul>
      <div class="verdict"><b>Hallucination de JD :</b> au départ, la notation d’offres comptait simplement les mots-clés communs — les scores sortaient trop hauts.
      <p><b>Premier resserrage :</b> passage à une grille — des points de base pour les fondamentaux, puis bonus / malus selon la direction de carrière.</p>
      <p><b>Deuxième resserrage :</b> en pratique, beaucoup de JD s’avèrent écrites par IA et joliment emballées pour des postes en réalité très back-office. L’agent modélise donc d’abord la place du poste dans l’entreprise : le travail qui nourrit directement les décisions métier compte à plein ; celui qui ne fait que soutenir les décisions d’autrui est décoté.</p>
      <p><b>Utilisé pour de vrai :</b> il a re-noté un stage en dessous de ce que la JD laissait croire, et j’ai réordonné mes candidatures en conséquence.</p></div>
      <ul>
      <li><b>Ne jamais inventer d’expérience.</b> Les retouches de CV par IA dérivent vers le sur-emballage et le jargon de consultant → seul un léger polissage est permis : ne pas changer la nature d’un projet, pas d’impact métier inventé → chaque ligne s’appuie sur une preuve réelle.</li>
      </ul>`},
    {label:"Résultats",zh:"", html:`
      <ul>
      <li>L’expérience est consignée une fois et réutilisée pour de bon : matching d’offres, adaptation du CV et préparation d’entretien tournent sur la même base — fini de repartir de zéro avec un chatbot.</li>
      <li>Usage réel : les règles de notation ont percé à jour un poste bien emballé et corrigé mes priorités de candidature.</li>
      <li>Le même schéma couches + routage + contrôle que mes systèmes côté travail — voir 05.</li>
      </ul>
      <figure class="chart shotfig"><img src="assets/agent_home.png" alt="Accueil de l’agent" loading="lazy"><figcaption>Accueil de l’agent · interface réelle (en chinois)</figcaption></figure>`}
  ]
},
{
  no:"05", title:"Résultats & méthode", tag:"En bref",
  star:[
    {label:"Bilan",zh:"", html:`
      <div class="nums">
        <div><b>4</b><span>études de cas</span></div>
        <div><b>1 h → 1 min</b><span>production du rapport mensuel</span></div>
        <div><b>10/10</b><span>référentiel 100 % correct<br>auparavant vérifié à la main</span></div>
        <div><b>9/9</b><span>outils utilisables hors ligne<br>ouvrir et lancer, zéro install.</span></div>
        <div><b>120 k+</b><span>lignes traitées par rapport</span></div>
      </div>`},
    {label:"Méthode",zh:"une seule boucle, à l’œuvre dans les quatre cas", html:`
      <div class="loop">
        <svg viewBox="0 0 760 150">
          <defs>
            <marker id="m5ar" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#6a63a6"/></marker>
            <marker id="m5ar2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#c0605e"/></marker>
          </defs>
          <rect x="30" y="30" width="190" height="58" rx="10" fill="#aab2f0" opacity=".28" stroke="#aab2f0"/>
          <text x="125" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#1c1b19">L’humain · pose les règles</text>
          <text x="125" y="74" text-anchor="middle" font-size="10" fill="#6b6862">définitions · lignes rouges · standards</text>
          <rect x="285" y="30" width="190" height="58" rx="10" fill="#b6e0d8" opacity=".35" stroke="#8ec7bc"/>
          <text x="380" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#1c1b19">L’IA · implémente</text>
          <text x="380" y="74" text-anchor="middle" font-size="10" fill="#6b6862">code · répétition · traitements en lot</text>
          <rect x="540" y="30" width="190" height="58" rx="10" fill="#f0c2cc" opacity=".35" stroke="#d99aa9"/>
          <text x="635" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#1c1b19">La recette · verrouille</text>
          <text x="635" y="74" text-anchor="middle" font-size="10" fill="#6b6862">chiffres rapprochés un à un · contrôle du style</text>
          <line x1="222" y1="59" x2="281" y2="59" stroke="#6a63a6" stroke-width="1.6" marker-end="url(#m5ar)"/>
          <line x1="477" y1="59" x2="536" y2="59" stroke="#6a63a6" stroke-width="1.6" marker-end="url(#m5ar)"/>
          <path d="M635 92 v22 q0 10 -10 10 H135 q-10 0 -10 -10 V96" fill="none" stroke="#c0605e" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#m5ar2)"/>
          <rect x="290" y="114" width="180" height="20" rx="10" fill="#fdfdfc"/>
          <text x="380" y="128" text-anchor="middle" font-size="10.5" fill="#c0605e" font-weight="600">échec → renvoi, règles resserrées</text>
        </svg>
        <div class="cols">
          <p><b>Le jugement métier reste humain.</b> Comment les indicateurs se définissent, ce qui compte comme faux, quelles actions exigent une validation préalable : l’expérience implicite devient des règles explicites, et l’IA ne tranche aucune question métier (le mois de rattachement d’un rapport est décidé d’abord par un humain, puis inscrit dans les règles).</p>
          <p><b>L’implémentation va à l’IA — personne n’écrit le code ligne par ligne.</b> À l’intérieur des règles, elle avance seule ; au-delà, elle doit s’arrêter et demander. Chaque modification est sauvegardée, relue et rapportée (les quatre outils des études de cas ont été construits ainsi ; je n’ai jamais écrit le code ligne par ligne).</p>
          <p><b>Une sortie fausse ne peut pas sortir.</b> Les chiffres clés sont extraits et rapprochés un à un — tout écart est renvoyé ; l’incertain part en revue humaine ; ce qui est destiné à l’extérieur passe un dernier contrôle de langue (l’outil de rapport repose sur 2 388 contrôles automatiques : un seul échec et le rapport ne part pas).</p>
        </div>
      </div>`},
    {label:"Transférable",zh:"la même méthode, appliquée deux fois", html:`
      <div class="trans">
        <div class="side">
          <h4>Côté travail<small>cas 01–03</small></h4>
          <p>Un système de skills capture les définitions et les leçons d’ingénierie ; une base de connaissances métier détient les règles — le rapport, le vérificateur et la plateforme grandissent tous sur ce socle.</p>
          <a class="back" data-goto="1">Retour aux cas 01–03 →</a>
        </div>
        <div class="mid"><span class="lbl">même méthode</span><span class="arr">⇄</span></div>
        <div class="side">
          <h4>Côté personnel<small>cas 04</small></h4>
          <p>L’agent de recherche d’emploi, c’est la même structure reconstruite : l’IA conversationnelle décomposée en système multi-étapes, avec répartition des rôles et limites — la bonne skill pour la bonne décision, les contextes bien séparés. La méthode voyage ; elle n’est pas liée à un scénario.</p>
          <a class="back" data-goto="4">Voir la démo live en 04 →</a>
        </div>
      </div>
      <div class="starter"><b>Comment démarrer avec cette méthode</b>
        <ol>
          <li>Écrivez d’abord vos définitions comme règles explicites : ce qui compte comme juste, ce qui compte comme faux, ce qui exige de demander avant d’agir</li>
          <li>Confiez l’implémentation à l’IA : le code et les traitements en lot sont son travail — n’écrivez pas ligne par ligne</li>
          <li>Fixez votre propre barre de recette : comment les résultats sont vérifiés, et ce qui se passe en cas d’échec — à décider avant la mise en service</li>
        </ol>
      </div>`}
  ]
}]};
