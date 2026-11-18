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

const researchImage = (url, alt) => {
  const image = safeURL(url);
  return image ? `
    <div class="research-card-image">
      <img src="${escapeHTML(image)}" alt="${escapeHTML(alt)}" loading="lazy">
    </div>` : '';
};

const homeResearchTopic = topic => {
  const icon = safeURL(topic.icon);
  const iconMarkup = icon ? `<img src="${escapeHTML(icon)}" alt="" width="24" height="24" loading="lazy">` : escapeHTML(topic.iconText);
  return `
    <li>
      <a class="topic-preview" href="${researchURL(topic.id)}">
        <span class="topic-icon" aria-hidden="true">${iconMarkup}</span>
        <span>${escapeHTML(topic.title)}</span>
        ${arrow}
      </a>
    </li>`;
};

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

const researchDetail = (topic, heading = 'h3') => {
  const id = escapeHTML(topic.id);
  const paragraphs = [topic.description].flat().filter(Boolean);
  const tags = topic.tags ?? [];
  const publicationTopic = topic.publicationTopic;
  return `
    <article class="research-card" id="${id}" aria-labelledby="topic-${id}" tabindex="-1">
      ${researchImage(topic.image, topic.imageAlt)}
      <div class="research-card-copy">
        <${heading} id="topic-${id}">${escapeHTML(topic.title)}</${heading}>
        ${paragraphs.map(paragraph => `<p>${researchText(paragraph)}</p>`).join('')}
        ${tags.length ? `<div class="research-tags">${tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('')}</div>` : ''}
        ${publicationTopic ? `<a class="text-link" href="publications.html?topic=${encodeURIComponent(publicationTopic)}">Related publications ${arrow}</a>` : ''}
      </div>
    </article>`;
};

const researchGroup = group => group.topics.length ? `
  <section class="research-detail-group" id="${escapeHTML(group.id)}">
    <h2>${escapeHTML(group.title)}</h2>
    <div class="research-detail-list">
      ${group.topics.map(topic => researchDetail(topic)).join('')}
    </div>
  </section>` : `<div class="research-detail-group">${researchDetail(group, 'h2')}</div>`;
const paperCard = item => `<article class="paper" id="${escapeHTML(item.id)}"><div class="paper-year">${escapeHTML(item.year)} <span aria-hidden="true">/</span></div><div><span class="tag">${escapeHTML(item.topic)}</span><h3>${escapeHTML(item.title)}</h3><p class="authors">${escapeHTML(item.authors)}</p><p class="venue">${escapeHTML(item.venue)}</p>${item.paper||item.code||item.project?`<div class="paper-links">${link(item.paper,'Paper ↗')}${link(item.code,'Code ↗')}${link(item.project,'Project ↗')}</div>`:''}<details><summary>Abstract</summary><p>${escapeHTML(item.summary)}</p></details>${item.bibtex?`<details><summary>BibTeX</summary><pre>${escapeHTML(item.bibtex)}</pre></details>`:''}</div></article>`;
const contact = `<div class="container"><div class="contact-strip" id="contact"><div><h3>Let’s connect.</h3><p>${data.email?'For research inquiries and collaboration, get in touch.':'Lab contact information will be added here.'}</p>${data.affiliation?`<p>${escapeHTML(data.affiliation)}</p>`:''}${data.address?`<p>${escapeHTML(data.address)}</p>`:''}</div>${data.email?link(`mailto:${data.email}`,'Contact the lab ↗','text-link'):'<span class="text-link">Contact details coming soon</span>'}</div></div>`;
const main = document.querySelector('#main');
if(page === 'home') {
  main.innerHTML = `<div class="container"><section class="hero" aria-labelledby="hero-title"><div class="hero-copy"><h1 id="hero-title">Artificial Intelligence<br>and Robot Control <span>(AIRC) Lab</span></h1><p>${escapeHTML(data.description)}</p></div></section><section class="section news-layout" id="news"><div class="news-intro"><span class="eyebrow">From the lab</span><h2>Latest news</h2><p>Research updates, new ideas,<br>and life at AIRC.</p></div><div>${data.news.map(item=>`<article class="news-row"><div class="news-date">${escapeHTML(item.date)}</div><div><span class="tag">${escapeHTML(item.type)}</span><h3>${item.url?link(item.url,item.title):escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p></div></article>`).join('')}</div></section></div>${homeResearch()}<section class="container section" style="border-top:0"><div class="section-heading"><div><span class="eyebrow">Ideas into practice</span><h2>Selected publications</h2></div><a class="text-link" href="publications.html">All publications ${arrow}</a></div>${data.publications.filter(item=>item.selected).map(paperCard).join('')}</section>${contact}`;
}
if(page === 'research') {
  main.innerHTML = `
    ${intro('Our research','Control.Learning.Manipulation','Exploring the connection between intelligent algorithms and physical systems.')}
    <div class="container research-details">${data.research.map(researchGroup).join('')}</div>
    ${contact}`;
}
if(page === 'publications') {
  main.innerHTML = `${intro('Research output','Publications','A collection of research in artificial intelligence, robot learning, and control. Browse by year or topic, or search for a paper.')}<section class="container" aria-label="Publication library"><form class="filters" role="search"><div class="field"><label for="paper-search">SEARCH PUBLICATIONS</label><input id="paper-search" type="search" placeholder="Title, author, or keyword…" autocomplete="off"></div><div class="field year"><label for="paper-year">YEAR</label><select id="paper-year"><option value="">All years</option>${[...new Set(data.publications.map(item=>item.year))].sort().reverse().map(year=>`<option>${escapeHTML(year)}</option>`).join('')}</select></div><div class="field topic"><label for="paper-topic">RESEARCH AREA</label><select id="paper-topic"><option value="">All areas</option>${[...new Set(data.publications.map(item=>item.topic))].map(topic=>`<option>${escapeHTML(topic)}</option>`).join('')}</select></div></form><p class="result-count" id="result-count" role="status" aria-live="polite"></p><div id="paper-list"></div></section>`;
  const search = document.querySelector('#paper-search'), year = document.querySelector('#paper-year'), topic = document.querySelector('#paper-topic');
  const requestedTopic = new URLSearchParams(location.search).get('topic');
  if ([...topic.options].some(option=>option.value===requestedTopic)) topic.value = requestedTopic;
  const update = () => {
    const query = search.value.trim().toLowerCase();
    const papers = data.publications.filter(item=>(!year.value || item.year===year.value)&&(!topic.value || item.topic===topic.value)&&`${item.title} ${item.authors} ${item.topic} ${item.venue} ${item.summary}`.toLowerCase().includes(query)).sort((a,b)=>b.year.localeCompare(a.year));
    document.querySelector('#result-count').textContent = `${papers.length} publication${papers.length===1?'':'s'}`;
    document.querySelector('#paper-list').innerHTML = papers.length ? papers.map(paperCard).join('') : '<div class="empty"><h3>No publications found</h3><p>Try another keyword, year, or research area.</p><button class="button" id="reset-filters" type="button">Clear filters</button></div>';
    document.querySelector('#reset-filters')?.addEventListener('click',()=>{search.value='';year.value='';topic.value='';update();search.focus();});
  };
  document.querySelector('form').addEventListener('submit',event=>event.preventDefault());
  search.addEventListener('input',update); year.addEventListener('change',update); topic.addEventListener('change',update); update();
}
if(page === 'team') {
  const personCard = person => {
    const image = safeURL(person.image);
    const portrait = image
      ? `<img src="${escapeHTML(image)}" alt="${escapeHTML(person.name)}">`
      : '<span class="portrait-placeholder" aria-hidden="true"></span>';
    return `
      <article class="person">
        <div class="portrait">${portrait}</div>
        <h3>${person.website ? link(person.website, person.name) : escapeHTML(person.name)}</h3>
        <p>${escapeHTML(person.focus)}</p>
      </article>`;
  };
  main.innerHTML = `${intro('The people behind the work','Our team','A place for curious minds to explore artificial intelligence, robotics, and control together.')}<div class="container">${[...new Set(data.team.map(person=>person.group))].map(group=>`<section class="team-section"><h2>${escapeHTML(group)}</h2><div class="people-grid">${data.team.filter(person=>person.group===group).map(personCard).join('')}</div></section>`).join('')}</div>${contact}`;
}
document.querySelector('#footer').innerHTML = `<footer class="site-footer"><div class="container"><div class="footer-main"><div><div class="footer-name">AIRC Lab</div><div class="footer-description">Artificial Intelligence and Robot Control Lab${data.affiliation?`<br>${escapeHTML(data.affiliation)}`:''}</div></div><div class="footer-links"><a href="research.html">Research</a><a href="publications.html">Publications</a><a href="team.html">Team</a>${link(data.github,'GitHub ↗')}</div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} AIRC Lab</span><span>Artificial Intelligence & Robot Control</span></div></div></footer>`;
