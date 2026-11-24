const data = window.AIRC;
const page = document.body.dataset.page;
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
// Accept local asset paths and web/email links, including when content is edited later.
const safeURL = value => value && !/^(?:[a-z]+:|\/\/)/i.test(value) ? value : /^(https?:\/\/|mailto:)/i.test(value || '') ? value : '';
const link = (url, label, className = '') => safeURL(url) ? `<a class="${className}" href="${escapeHTML(safeURL(url))}">${escapeHTML(label)}</a>` : '';
const arrow = '<span aria-hidden="true">↗</span>';
const navigation = [['home','index.html','Home'],['research','research.html','Research'],['publications','publications.html','Publications'],['team','team.html','Team']];
document.querySelector('#header').innerHTML = `<header class="site-header"><div class="container header-inner"><div class="header-brands"><a class="brand" href="index.html" aria-label="AIRC Lab home"><img src="assets/images/branding/lab-icon.png" alt="Artificial Intelligence and Robot Control (AIRC) Lab" width="761" height="320"></a><a class="university-brand" href="https://www.um.edu.mo/" aria-label="University of Macau"><img src="assets/images/branding/university-of-macau.png" alt="澳門大學 · University of Macau" width="1024" height="672"></a></div><button class="menu-button" type="button" aria-expanded="false" aria-controls="navigation">Menu <span aria-hidden="true">☰</span></button><nav class="nav" id="navigation" aria-label="Main navigation">${navigation.map(([id,url,title])=>`<a href="${url}" ${page===id?'aria-current="page"':''}>${title}</a>`).join('')}</nav></div></header>`;
const menu = document.querySelector('.menu-button');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded',String(open)); document.querySelector('.nav').classList.toggle('open',open); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { menu.setAttribute('aria-expanded','false'); document.querySelector('.nav').classList.remove('open'); menu.focus(); } });
const intro = (eyebrow,title,description) => `<div class="container"><div class="page-intro"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${description}</p></div></div>`;
const researchURL = id => `research.html#${encodeURIComponent(id)}`;
const researchText = value => escapeHTML(value).replace(/\*\*([^*\r\n]+)\*\*/g, '<strong>$1</strong>');

const researchImage = (url, alt, overlay = '') => {
  const image = safeURL(url);
  return image ? `
    <div class="research-card-image">
      <img src="${escapeHTML(image)}" alt="${escapeHTML(alt)}" loading="lazy">
      ${overlay}
    </div>` : '';
};

const researchIcon = item => {
  const icon = safeURL(item.icon);
  const iconMarkup = icon ? `<img src="${escapeHTML(icon)}" alt="" width="24" height="24" loading="lazy">` : escapeHTML(item.iconText);
  return `<span class="topic-icon" aria-hidden="true">${iconMarkup}</span>`;
};

const homeResearchTopic = topic => `
  <li>
    <a class="topic-preview" href="${researchURL(topic.id)}">
      ${researchIcon(topic)}
      <span>${escapeHTML(topic.title)}</span>
      ${arrow}
    </a>
  </li>`;

const homeResearchGroup = group => `
  <article class="research-overview-group" data-research="${escapeHTML(group.id)}">
    <div class="research-overview-main">
      ${researchImage(group.homeImage, group.imageAlt)}
      <div class="research-overview-copy">
        <h3><a href="${researchURL(group.id)}">${escapeHTML(group.title)}</a></h3>
        <p>${researchText(group.abstract)}</p>
      </div>
    </div>
    ${group.topics.length ? `<ul class="topic-previews">${group.topics.map(homeResearchTopic).join('')}</ul>` : ''}
  </article>`;

const homeResearch = () => `
  <section class="section research-band" id="research-directions">
    <div class="container">
      <div class="section-heading">
        <div><span class="eyebrow">What we explore</span><h2>Research directions</h2></div>
        <a class="text-link" href="research.html">All research ${arrow}</a>
      </div>
      <div class="research-overview-list">${data.research.map(homeResearchGroup).join('')}</div>
    </div>
  </section>`;

const researchGroupHeading = (group, id) => `
  <h2 class="research-group-heading"${id ? ` id="${id}"` : ''}>
    ${researchIcon(group)}<span>${escapeHTML(group.title)}</span>
  </h2>`;

const researchDetail = (topic, heading = 'h3') => {
  const id = escapeHTML(topic.id);
  const paragraphs = [topic.description].flat().filter(Boolean);
  const tags = topic.tags ?? [];
  const publicationTopic = topic.publicationTopic;
  const demoURL = safeURL(topic.videoUrl);
  const demoLabel = '<span aria-hidden="true">▶</span> Watch video';
  const demoButton = demoURL
    ? `<a class="demo-button" href="${escapeHTML(demoURL)}" aria-label="Watch video for ${escapeHTML(topic.title)}">${demoLabel}</a>`
    : `<button class="demo-button" type="button" disabled>${demoLabel} <small>Coming soon</small></button>`;
  return `
    <article class="research-card" id="${id}" aria-labelledby="topic-${id}" tabindex="-1">
      ${researchImage(topic.image, topic.imageAlt, demoButton)}
      <div class="research-card-copy">
        ${heading === 'h2' ? researchGroupHeading(topic, `topic-${id}`) : `<h3 id="topic-${id}">${escapeHTML(topic.title)}</h3>`}
        ${paragraphs.map(paragraph => `<p>${researchText(paragraph)}</p>`).join('')}
        ${tags.length ? `<div class="research-tags">${tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('')}</div>` : ''}
        ${publicationTopic ? `<a class="text-link" href="publications.html?topic=${encodeURIComponent(publicationTopic)}">Related publications ${arrow}</a>` : ''}
      </div>
    </article>`;
};

const researchGroup = group => group.topics.length ? `
  <section class="research-detail-group" id="${escapeHTML(group.id)}">
    ${researchGroupHeading(group)}
    <div class="research-detail-list">
      ${group.topics.map(topic => researchDetail(topic)).join('')}
    </div>
  </section>` : `<div class="research-detail-group">${researchDetail(group, 'h2')}</div>`;
const newestPublicationFirst = (a, b) => b.year.localeCompare(a.year);
const paperCard = item => {
  const links = link(item.paper, 'Paper ↗') + link(item.code, 'Code ↗') + link(item.project, 'Project ↗');
  return `
    <article class="paper" id="${escapeHTML(item.id)}">
      <div class="paper-year">${item.year ? `${escapeHTML(item.year)} <span aria-hidden="true">/</span>` : ''}</div>
      <div>
        ${item.topic ? `<span class="tag">${escapeHTML(item.topic)}</span>` : ''}
        <h3>${escapeHTML(item.title)}</h3>
        ${item.authors ? `<p class="authors">${escapeHTML(item.authors)}</p>` : ''}
        ${item.venue ? `<p class="venue">${escapeHTML(item.venue)}</p>` : ''}
        ${links ? `<div class="paper-links">${links}</div>` : ''}
        ${item.summary ? `<details><summary>Abstract</summary><p>${escapeHTML(item.summary)}</p></details>` : ''}
        <details><summary>BibTeX</summary><pre>${escapeHTML(item.bibtex)}</pre></details>
      </div>
    </article>`;
};
const contact = `<div class="container"><div class="contact-strip" id="contact"><div><h3>Let’s connect.</h3><p>${data.email?'For research inquiries and collaboration, get in touch.':'Lab contact information will be added here.'}</p>${data.affiliation?`<p>${escapeHTML(data.affiliation)}</p>`:''}${data.address?`<p>${escapeHTML(data.address)}</p>`:''}</div>${data.email?link(`mailto:${data.email}`,'Contact the lab ↗','text-link'):'<span class="text-link">Contact details coming soon</span>'}</div></div>`;
const main = document.querySelector('#main');
if(page === 'home') {
  main.innerHTML = `<section class="hero" aria-labelledby="hero-title"><div class="hero-copy container"><h1 id="hero-title">Artificial Intelligence<br>and Robot Control <span>(AIRC) Lab</span></h1><p>${escapeHTML(data.description)}</p></div></section>${homeResearch()}<div id="selected-publications"></div>${contact}`;
  loadPublications().then(publications => {
    const marked = publications.filter(item => item.selected === true);
    const selected = marked.length
      ? marked
      : publications.filter(item => item.selected !== false).sort(newestPublicationFirst).slice(0, 2);
    if (!selected.length) return;
    document.querySelector('#selected-publications').innerHTML = `
      <section class="container section" style="border-top:0">
        <div class="section-heading">
          <div><span class="eyebrow">Ideas into practice</span><h2>Selected publications</h2></div>
          <a class="text-link" href="publications.html">All publications ${arrow}</a>
        </div>
        ${selected.map(paperCard).join('')}
      </section>`;
  }).catch(error => console.error(error));
}
if(page === 'research') {
  main.innerHTML = `
    ${intro('Our research','Control.Learning.Manipulation','Exploring the connection between intelligent algorithms and physical systems.')}
    <div class="container research-details">${data.research.map(researchGroup).join('')}</div>`;
}
if(page === 'publications') {
  main.innerHTML = `
    ${intro('Research output','Publications','A collection of research in artificial intelligence, robot learning, and control. Browse by year or topic, or search for a paper.')}
    <section class="container" id="publication-library" aria-label="Publication library">
      <p role="status">Loading publications…</p>
    </section>`;
  const library = document.querySelector('#publication-library');
  loadPublications().then(publications => {
    if (!publications.length) {
      library.innerHTML = '<p class="empty" role="status">No publications have been added yet.</p>';
      return;
    }
    const years = [...new Set(publications.map(item => item.year).filter(Boolean))].sort().reverse();
    const topics = [...new Set(publications.map(item => item.topic).filter(Boolean))];
    const options = values => values.map(value => `<option value="${escapeHTML(value)}">${escapeHTML(value)}</option>`).join('');
    publications.sort(newestPublicationFirst);
    library.innerHTML = `
      <form class="filters" role="search">
        <div class="field">
          <label for="paper-search">SEARCH PUBLICATIONS</label>
          <input id="paper-search" type="search" placeholder="Title, author, or keyword…" autocomplete="off">
        </div>
        <div class="field year">
          <label for="paper-year">YEAR</label>
          <select id="paper-year" ${years.length ? '' : 'disabled'}><option value="">All years</option>${options(years)}</select>
        </div>
        <div class="field topic">
          <label for="paper-topic">RESEARCH AREA</label>
          <select id="paper-topic" ${topics.length ? '' : 'disabled'}><option value="">All areas</option>${options(topics)}</select>
        </div>
      </form>
      <p class="result-count" id="result-count" role="status" aria-live="polite"></p>
      <div id="paper-list"></div>`;
    const search = library.querySelector('#paper-search');
    const year = library.querySelector('#paper-year');
    const topic = library.querySelector('#paper-topic');
    const resultCount = library.querySelector('#result-count');
    const paperList = library.querySelector('#paper-list');
    const requestedTopic = new URLSearchParams(location.search).get('topic');
    if (topics.includes(requestedTopic)) topic.value = requestedTopic;

    const update = () => {
      const query = search.value.trim().toLowerCase();
      const papers = publications.filter(item => {
        const text = [item.title, item.authors, item.topic, item.venue, item.summary, item.keywords].join(' ');
        return (!year.value || item.year === year.value)
          && (!topic.value || item.topic === topic.value)
          && text.toLowerCase().includes(query);
      });
      resultCount.textContent = `${papers.length} publication${papers.length === 1 ? '' : 's'}`;
      paperList.innerHTML = papers.length ? papers.map(paperCard).join('') : '<div class="empty"><h3>No publications found</h3><p>Try another keyword, year, or research area.</p><button class="button" id="reset-filters" type="button">Clear filters</button></div>';
      paperList.querySelector('button#reset-filters')?.addEventListener('click', () => {
        search.value = '';
        year.value = '';
        topic.value = '';
        update();
        search.focus();
      });
    };
    library.querySelector('form').addEventListener('submit', event => event.preventDefault());
    search.addEventListener('input', update);
    year.addEventListener('change', update);
    topic.addEventListener('change', update);
    update();
  }).catch(error => {
    const message = location.protocol === 'file:'
      ? 'Start a local web server to preview the bibliography.'
      : 'The bibliography could not be loaded.';
    library.innerHTML = `<p class="empty" role="status">${message}</p>`;
    console.error(error);
  });
}
if(page === 'team') {
  const compareNames = new Intl.Collator('en', { sensitivity: 'base' }).compare;
  const surname = person => person.surname?.trim() || person.name.trim().split(/\s+/).pop();
  const personCard = (person, loading) => {
    const image = safeURL(person.image);
    const portrait = image
      ? `<img src="${escapeHTML(image)}" alt="${escapeHTML(person.name)}" loading="${loading}" decoding="async">`
      : '<span class="portrait-placeholder" aria-hidden="true"></span>';
    const websiteLink = link(person.website?.trim(), 'Website', 'text-link');
    const email = person.email?.trim();
    const emailLink = email ? link(`mailto:${email}`, email, 'text-link') : '';
    return `
      <article class="person">
        <div class="portrait">${portrait}</div>
        <h3>${escapeHTML(person.name)}</h3>
        ${websiteLink || emailLink ? `<div class="person-links">${websiteLink}${emailLink}</div>` : ''}
        <p>${escapeHTML(person.focus)}</p>
      </article>`;
  };
  const teamGroups = [...new Set(data.team.map(person => person.group))];
  const teamSection = (group, groupIndex) => {
    const people = data.team.filter(person => person.group === group);
    if (/\bstudents?$/i.test(group)) {
      people.sort((a, b) => compareNames(surname(a), surname(b)) || compareNames(a.name, b.name));
    }
    const loading = groupIndex === 0 ? 'eager' : 'lazy';
    return `
      <section class="team-section">
        <h2>${escapeHTML(group)}</h2>
        <div class="people-grid">${people.map(person => personCard(person, loading)).join('')}</div>
      </section>`;
  };
  main.innerHTML = `
    ${intro('The people behind the work','Our team','A place for curious minds to explore artificial intelligence, robotics, and control together.')}
    <div class="container">${teamGroups.map(teamSection).join('')}</div>`;
}
document.querySelector('#footer').innerHTML = `<footer class="site-footer"><div class="container"><div class="footer-main"><div><div class="footer-name">AIRC Lab</div><div class="footer-description">Artificial Intelligence and Robot Control Lab${data.affiliation?`<br>${escapeHTML(data.affiliation)}`:''}</div></div><div class="footer-links"><a href="research.html">Research</a><a href="publications.html">Publications</a><a href="team.html">Team</a>${link(data.github,'GitHub ↗')}</div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} AIRC Lab</span><span>Artificial Intelligence & Robot Control</span></div></div></footer>`;
