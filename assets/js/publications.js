const bibtexOutput = {
  bibliographyContainer: ['', ''],
  entry: ['', ''],
  list: ['\n', ''],
  listItem: ['  ', '\n']
};

// Citation.js renders some LaTeX commands as markup. Publication cards display plain text.
const bibtexPlainText = value => value.replace(/<\/?(?:i|b|sup|sub|span)(?: [^>]*)?>/g, '').trim();

function publicationLink(value) {
  const target = String(value ?? '').trim();
  if (!target) return '';
  try {
    const url = new URL(target.replace(/\\([%&_#])/g, '$1'), document.baseURI);
    return /^https?:$/.test(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
}

function publicationFromBibtex(entry) {
  const field = name => {
    const value = String(entry.properties[name] ?? '').trim();
    return value ? AircBibtex.parseField(value, name) : '';
  };
  const text = name => {
    const value = field(name);
    return bibtexPlainText(Array.isArray(value) ? value.join(', ') : value);
  };
  const names = field('author') || field('editor') || [];
  const authors = names.map(({ given, prefix, family, suffix }) => {
    const name = [given, prefix, family].filter(Boolean).join(' ');
    return bibtexPlainText(suffix ? `${name}, ${suffix}` : name);
  }).join(', ');
  const venueFields = ['journaltitle', 'journal', 'booktitle', 'howpublished', 'institution', 'school', 'publisher'];
  const venue = venueFields.map(text).find(Boolean) || '';
  const selected = text('selected');

  return {
    id: entry.label,
    title: text('title') || entry.label,
    authors,
    venue,
    year: text('year') || text('date').match(/^\d{4}/)?.[0] || '',
    topic: text('topic'),
    keywords: text('keywords'),
    summary: text('abstract'),
    selected: selected ? /^true$/i.test(selected) : undefined,
    paper: publicationLink(entry.properties.url),
    code: publicationLink(entry.properties.code),
    project: publicationLink(entry.properties.project),
    bibtex: AircBibtex.formatFile([entry], bibtexOutput)
  };
}

async function loadPublications() {
  const response = await fetch('assets/publications.bib');
  if (!response.ok) throw new Error(`Could not load publications.bib (HTTP ${response.status}).`);
  const bibtex = await response.text();
  return AircBibtex.parseFile(bibtex).filter(entry => entry.type !== 'xdata').map(publicationFromBibtex);
}
