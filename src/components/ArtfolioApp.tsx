import { useMemo, useState } from 'react';
import {
  ArrowDownUp,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Check,
  ChevronDown,
  CircleHelp,
  Compass,
  Grid2X2,
  Heart,
  Layers3,
  Menu,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from 'lucide-react';

type Artwork = {
  id: number;
  title: string;
  artist: string;
  location: string;
  year: number;
  medium: string;
  dimensions: string;
  price: string;
  genre: string;
  collection: string;
  image: string;
  note: string;
};

const artworks: Artwork[] = [
  {
    id: 1,
    title: 'A Study in Motion',
    artist: 'Mara Solis',
    location: 'Brooklyn, NY',
    year: 2025,
    medium: 'Oil and graphite on linen',
    dimensions: '76 × 101 cm',
    price: '$3,800',
    genre: 'Abstract',
    collection: 'Color in motion',
    image: 'https://cdn.b12.io/client_media/0U0qFqi9/7ff25775-bda6-11f1-8085-0242ac110002-a-sophisticated-contemporary-gallery-artwork-photograph-for-.jpg',
    note: 'Solis layers loose arcs of pigment until movement feels almost tangible. A quietly confident centerpiece for a considered room.',
  },
  {
    id: 2,
    title: 'Sunday, Somewhere',
    artist: 'Nina Okafor',
    location: 'London, UK',
    year: 2024,
    medium: 'Oil on cotton canvas',
    dimensions: '61 × 81 cm',
    price: '$2,450',
    genre: 'Figurative',
    collection: 'Quiet forms',
    image: 'https://cdn.b12.io/client_media/0U0qFqi9/7ff30b54-bda6-11f1-927e-0242ac110002-a-contemporary-figurative-oil-painting-artwork-photographed-.jpg',
    note: 'A pause in the middle of an ordinary day, rendered in warm light and generous, simplified shapes.',
  },
  {
    id: 3,
    title: 'Soft Terrain No. 4',
    artist: 'Elliot Park',
    location: 'Seoul, KR',
    year: 2025,
    medium: 'Acrylic and pumice on canvas',
    dimensions: '90 × 70 cm',
    price: '$4,200',
    genre: 'Abstract',
    collection: 'Color in motion',
    image: 'https://cdn.b12.io/client_media/0U0qFqi9/8038cd15-bda6-11f1-81ee-0242ac110002-a-richly-textured-contemporary-abstract-painting-artwork-dee.jpg',
    note: 'Built from tactile layers and softened edges, this work rewards a closer look from every angle.',
  },
  {
    id: 4,
    title: 'Last Light, East Pier',
    artist: 'Amélie Laurent',
    location: 'Marseille, FR',
    year: 2023,
    medium: 'Oil on linen',
    dimensions: '80 × 100 cm',
    price: '$3,100',
    genre: 'Landscape',
    collection: 'Quiet forms',
    image: 'https://cdn.b12.io/client_media/0U0qFqi9/800b2bf7-bda6-11f1-8266-0242ac110002-a-beautiful-contemporary-landscape-painting-hazy-twilight-co.jpg',
    note: 'A still coastline at the edge of evening. Laurent makes the space between sea and sky feel wonderfully expansive.',
  },
  {
    id: 5,
    title: 'The Red Room',
    artist: 'Jo Park',
    location: 'Los Angeles, CA',
    year: 2025,
    medium: 'Oil and cold wax on panel',
    dimensions: '55 × 72 cm',
    price: '$2,900',
    genre: 'Still life',
    collection: 'Color in motion',
    image: 'https://cdn.b12.io/client_media/0U0qFqi9/801f3a50-bda6-11f1-8105-0242ac110002-a-contemporary-sculptural-still-life-painting-in-expressive-.jpg',
    note: 'A familiar bloom becomes an expressive study in shape, shadow and the pleasures of looking slowly.',
  },
  {
    id: 6,
    title: 'Held in the In-Between',
    artist: 'Sofia Reyes',
    location: 'Mexico City, MX',
    year: 2024,
    medium: 'Ink and watercolor on paper',
    dimensions: '50 × 65 cm',
    price: '$1,850',
    genre: 'Works on paper',
    collection: 'Color in motion',
    image: 'https://cdn.b12.io/client_media/0U0qFqi9/801c418f-bda6-11f1-a3a1-0242ac110002-an-elegant-contemporary-abstract-artwork-layered-translucent.jpg',
    note: 'Fluid passages of color meet delicate marks in a one-of-a-kind work on handmade paper.',
  },
  {
    id: 7,
    title: 'A Place to Return To',
    artist: 'Theo Bennett',
    location: 'Lisbon, PT',
    year: 2024,
    medium: 'Egg tempera on wood panel',
    dimensions: '68 × 86 cm',
    price: '$3,450',
    genre: 'Landscape',
    collection: 'Quiet forms',
    image: 'https://cdn.b12.io/client_media/0U0qFqi9/8002d478-bda6-11f1-86ec-0242ac110002-modern-fine-art-painting-of-a-quiet-architectural-courtyard-.jpg',
    note: 'An intimate architectural view held in warm afternoon stillness; a small world with a long horizon.',
  },
  {
    id: 8,
    title: 'Field Notes in Yellow',
    artist: 'Rae Kim',
    location: 'Portland, OR',
    year: 2025,
    medium: 'Acrylic and collage on canvas',
    dimensions: '72 × 92 cm',
    price: '$2,700',
    genre: 'Abstract',
    collection: 'New perspectives',
    image: 'https://cdn.b12.io/client_media/0U0qFqi9/7fed8fea-bda6-11f1-842e-0242ac110002-a-large-contemporary-abstract-artwork-with-sculptural-fields.jpg',
    note: 'Playful, painterly shapes come together with a lightness that feels both spontaneous and beautifully resolved.',
  },
];

const genres = ['All works', 'Abstract', 'Figurative', 'Landscape', 'Still life', 'Works on paper'];
const collections = [
  { title: 'Color in motion', count: '04 works', descriptor: 'For rooms that could use a little energy.', artists: 'Mara Solis, Elliot Park +2' },
  { title: 'Quiet forms', count: '03 works', descriptor: 'A softer kind of statement.', artists: 'Nina Okafor, Amélie Laurent +1' },
  { title: 'New perspectives', count: '01 work', descriptor: 'A first look at what’s just arrived.', artists: 'Rae Kim' },
];

const currencyValue = (price: string) => Number(price.replace(/[$,]/g, ''));

export default function ArtfolioApp() {
  const [view, setView] = useState('Discover');
  const [genre, setGenre] = useState('All works');
  const [query, setQuery] = useState('');
  const [saved, setSaved] = useState<number[]>([]);
  const [selected, setSelected] = useState<Artwork | null>(null);
  const [sort, setSort] = useState('Curator’s picks');
  const [sortOpen, setSortOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [collectionFilter, setCollectionFilter] = useState('');
  const [showMood, setShowMood] = useState(false);

  const visibleArtworks = useMemo(() => {
    let list = [...artworks];
    if (view === 'Saved') list = list.filter((work) => saved.includes(work.id));
    if (genre !== 'All works') list = list.filter((work) => work.genre === genre);
    if (collectionFilter) list = list.filter((work) => work.collection === collectionFilter);
    const needle = query.trim().toLowerCase();
    if (needle) list = list.filter((work) => `${work.title} ${work.artist} ${work.genre} ${work.medium}`.toLowerCase().includes(needle));
    if (sort === 'Price: low to high') list.sort((a, b) => currencyValue(a.price) - currencyValue(b.price));
    if (sort === 'Artist A–Z') list.sort((a, b) => a.artist.localeCompare(b.artist));
    if (sort === 'Newest first') list.sort((a, b) => b.year - a.year);
    return list;
  }, [view, saved, genre, query, sort, collectionFilter]);

  const navigate = (next: string) => {
    setView(next);
    setCollectionFilter('');
    setGenre('All works');
    setQuery('');
    setMobileMenu(false);
  };

  const toggleSaved = (id: number) => {
    setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  const setMood = (nextGenre: string) => {
    setGenre(nextGenre);
    setView('Discover');
    setCollectionFilter('');
    setShowMood(false);
  };

  const pageHeading = view === 'Discover' ? 'Find something that stays with you.' : view === 'Saved' ? 'Your saved works.' : view === 'Artists' ? 'Artists worth knowing.' : 'Thoughtful edits, made for looking.';
  const sectionId = pageHeading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  return (
    <div className="artfolio-shell">
      <aside className={`app-sidebar ${mobileMenu ? 'sidebar-open' : ''}`}>
        <a className="brand" href="/index#discover" onClick={() => navigate('Discover')} aria-label="Artfolio home">
          <span className="brand-mark"><span /><span /><span /></span>
          <span>artfolio<span className="brand-period">.</span></span>
        </a>
        <div className="workspace-switcher">
          <span className="workspace-avatar">S</span>
          <span className="workspace-copy"><strong>Studio account</strong><small>Collector workspace</small></span>
          <ChevronDown size={15} />
        </div>
        <p className="nav-label">YOUR SPACE</p>
        <nav className="side-nav" aria-label="Main navigation">
          <button className={view === 'Discover' ? 'nav-item active' : 'nav-item'} onClick={() => navigate('Discover')}><Compass size={18} />Discover</button>
          <button className={view === 'Saved' ? 'nav-item active' : 'nav-item'} onClick={() => navigate('Saved')}><Bookmark size={18} />Saved works{saved.length > 0 && <span className="nav-count">{saved.length}</span>}</button>
          <button className={view === 'Artists' ? 'nav-item active' : 'nav-item'} onClick={() => navigate('Artists')}><span className="artists-icon">Aa</span>Artists</button>
          <button className={view === 'Collections' ? 'nav-item active' : 'nav-item'} onClick={() => navigate('Collections')}><Layers3 size={18} />Collections</button>
        </nav>
        <div className="sidebar-rule" />
        <p className="nav-label">A GOOD PLACE TO START</p>
        <button className="side-feature" onClick={() => setShowMood((open) => !open)}>
          <span className="feature-icon"><Sparkles size={16} /></span>
          <span><strong>Explore by mood</strong><small>A more personal edit</small></span>
          <ArrowUpRight size={15} />
        </button>
        <div className="sidebar-bottom">
          <div className="curator-note"><span className="online-dot" /><span>Fresh eyes, every week</span></div>
          <button className="help-link" onClick={() => setAccountOpen(true)}><CircleHelp size={16} />About Artfolio</button>
          <div className="profile-row"><span className="profile-avatar">JD</span><span><strong>Jamie Davis</strong><small>Private collector</small></span><button aria-label="Account options" onClick={() => setAccountOpen(true)}><ChevronDown size={15} /></button></div>
        </div>
      </aside>

      {mobileMenu && <button className="mobile-backdrop" aria-label="Close navigation" onClick={() => setMobileMenu(false)} />}

      <main className="app-main">
        <header className="topbar">
          <button className="mobile-menu-button" aria-label="Open navigation" onClick={() => setMobileMenu(true)}><Menu size={21} /></button>
          <div className="breadcrumb"><span>Artfolio</span><span className="breadcrumb-slash">/</span><strong>{view}</strong></div>
          <div className="topbar-actions">
            <span className="edition-label"><span className="online-dot" />Independent art, thoughtfully found</span>
            <button className="sign-in-button" onClick={() => setAccountOpen(true)}>Sign in <ArrowUpRight size={14} /></button>
          </div>
        </header>

        <section className="page-content" id={sectionId}>
          <div className="page-intro">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> THE ART OF FINDING</p>
              <h1>{pageHeading}</h1>
              <p className="intro-subtitle">Original work from independent artists, chosen with care.</p>
            </div>
            <button className="curator-button" onClick={() => setShowMood((open) => !open)}><Sparkles size={16} />A curator’s edit <ArrowRight size={15} /></button>
          </div>

          {showMood && (
            <div className="mood-panel">
              <div className="mood-copy"><span className="mood-spark"><Sparkles size={16} /></span><div><strong>What are you in the mood for?</strong><p>Choose a feeling. We’ll find a place to begin.</p></div></div>
              <div className="mood-choices"><button onClick={() => setMood('Abstract')}>A little more color</button><button onClick={() => setMood('Landscape')}>Somewhere quieter</button><button onClick={() => setMood('Figurative')}>People &amp; stories</button><button className="mood-close" aria-label="Close mood choices" onClick={() => setShowMood(false)}><X size={17} /></button></div>
            </div>
          )}

          {view === 'Artists' ? (
            <div className="directory-view">
              <div className="directory-heading"><div><span className="eyebrow">A LITTLE CLOSER</span><h2>Meet the makers.</h2></div><span className="result-count">{new Set(artworks.map((work) => work.artist)).size} independent artists</span></div>
              <div className="artist-grid">{artworks.filter((work, index) => artworks.findIndex((item) => item.artist === work.artist) === index).map((work, index) => <button className="artist-card" key={work.artist} onClick={() => { setView('Discover'); setGenre('All works'); setQuery(work.artist); }}><span className="artist-image-wrap"><img src={work.image} alt={`${work.title} by ${work.artist}`} /><span className="artist-index">0{index + 1}</span><ArrowUpRight size={17} className="artist-arrow" /></span><strong>{work.artist}</strong><span>{work.location} <span className="artist-dot">·</span> {work.genre}</span></button>)}</div>
            </div>
          ) : view === 'Collections' ? (
            <div className="directory-view">
              <div className="directory-heading"><div><span className="eyebrow">A CONSIDERED SELECTION</span><h2>Little worlds of their own.</h2></div><span className="result-count">3 curator-led collections</span></div>
              <div className="collection-grid">{collections.map((collection, index) => { const work = artworks.find((item) => item.collection === collection.title)!; return <button className="collection-card" key={collection.title} onClick={() => { setView('Discover'); setGenre('All works'); setQuery(''); setCollectionFilter(collection.title); }}><span className={`collection-image collection-image-${index + 1}`}><img src={work.image} alt="" /><span className="collection-count">{collection.count}</span><span className="collection-open"><ArrowUpRight size={18} /></span></span><span className="collection-details"><span className="eyebrow">CURATOR’S EDIT</span><strong>{collection.title}</strong><span>{collection.descriptor}</span><small>{collection.artists}</small></span></button>; })}</div>
            </div>
          ) : (
            <>
              <div className="featured-strip">
                <div className="featured-icon"><Sparkles size={17} /></div>
                <div className="featured-text"><strong>A thoughtful place to start</strong><span>New work, emerging voices, and the occasional happy surprise.</span></div>
                <div className="featured-artists"><span className="mini-avatar avatar-amber">M</span><span className="mini-avatar avatar-blue">N</span><span className="mini-avatar avatar-lilac">E</span><span className="featured-plus">+5 new artists</span></div>
                <button className="featured-link" onClick={() => navigate('Artists')}>Meet them <ArrowRight size={15} /></button>
              </div>

              <div className="gallery-toolbar">
                <div className="filter-list" role="group" aria-label="Filter by style">{genres.map((item) => <button key={item} className={genre === item ? 'filter-chip selected' : 'filter-chip'} onClick={() => { setGenre(item); setCollectionFilter(''); }}>{item}</button>)}</div>
                <div className="gallery-tools">
                  <label className="search-box"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a work or artist" aria-label="Search artworks or artists" />{query && <button aria-label="Clear search" onClick={() => setQuery('')}><X size={14} /></button>}</label>
                  <div className="sort-wrap"><button className="sort-button" onClick={() => setSortOpen((open) => !open)}><ArrowDownUp size={15} /><span>{sort}</span><ChevronDown size={14} /></button>{sortOpen && <div className="sort-menu">{['Curator’s picks', 'Newest first', 'Price: low to high', 'Artist A–Z'].map((item) => <button key={item} onClick={() => { setSort(item); setSortOpen(false); }}>{item}{sort === item && <Check size={14} />}</button>)}</div>}</div>
                  <button className="filter-icon-button" aria-label="Show style filters" onClick={() => setShowMood((open) => !open)}><SlidersHorizontal size={16} /></button>
                </div>
              </div>
              {collectionFilter && <div className="active-collection"><span>Showing collection</span><strong>{collectionFilter}</strong><button aria-label="Clear collection filter" onClick={() => setCollectionFilter('')}><X size={14} /></button></div>}

              <div className="artwork-heading"><div><h2>{view === 'Saved' ? 'Your saved works' : genre === 'All works' ? 'A few things to look at.' : genre}</h2><p>{view === 'Saved' ? 'Only you can see what you’re keeping close.' : 'Consider this a good place to begin.'}</p></div><div className="artwork-count"><Grid2X2 size={15} />{visibleArtworks.length} works</div></div>

              {visibleArtworks.length > 0 ? <div className="artwork-grid">{visibleArtworks.map((work, index) => <article className={`artwork-card ${index % 3 === 1 ? 'card-offset' : ''}`} key={work.id}><button className="artwork-image-button" onClick={() => setSelected(work)} aria-label={`View ${work.title} by ${work.artist}`}><img src={work.image} alt={`${work.title}, an original ${work.genre.toLowerCase()} artwork by ${work.artist}`} loading={index > 3 ? 'lazy' : 'eager'} /><span className="image-open"><ArrowUpRight size={17} /></span><span className="image-edition">ORIGINAL · {work.year}</span></button><div className="artwork-info"><div className="artwork-copy"><button className="artwork-title" onClick={() => setSelected(work)}>{work.title}</button><span>{work.artist} <span className="artist-dot">·</span> {work.location}</span></div><button className={`save-button ${saved.includes(work.id) ? 'is-saved' : ''}`} onClick={() => toggleSaved(work.id)} aria-label={saved.includes(work.id) ? `Remove ${work.title} from saved works` : `Save ${work.title}`}><Heart size={17} fill={saved.includes(work.id) ? 'currentColor' : 'none'} /></button></div><div className="artwork-meta"><span>{work.medium}</span><strong>{work.price}</strong></div></article>)}</div> : <div className="empty-state"><span className="empty-icon"><Bookmark size={21} /></span><h3>{view === 'Saved' ? 'A space for the ones you love.' : 'Nothing quite like that yet.'}</h3><p>{view === 'Saved' ? 'Tap the heart on any artwork to keep it close. Your saved works will gather here.' : 'Try another artist, artwork, or style.'}</p><button onClick={() => { navigate('Discover'); }}>Explore all works <ArrowRight size={15} /></button></div>}

              <div className="gallery-footnote"><span><Sparkles size={14} />Independent artists, always.</span><span>Thoughtfully discovered, never endless.</span></div>
            </>
          )}

          <div className="bottom-note"><span className="bottom-note-mark"><span /><span /><span /></span><span>Art is a little more meaningful when you know who made it.</span><button onClick={() => navigate('Artists')}>Get to know the artists <ArrowRight size={14} /></button></div>
        </section>
        <div className="app-footer"><span>© 2026 Artfolio</span><span>Made for people who love looking.</span><button onClick={() => setAccountOpen(true)}>About this space <ArrowUpRight size={13} /></button></div>
      </main>

      {selected && <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}><section className="artwork-dialog" id={selected.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')} role="dialog" aria-modal="true" aria-labelledby="artwork-dialog-title" onClick={(event) => event.stopPropagation()}><button className="dialog-close" aria-label="Close artwork details" onClick={() => setSelected(null)}><X size={19} /></button><div className="dialog-image"><img src={selected.image} alt={`${selected.title} by ${selected.artist}`} /><span>ORIGINAL WORK · {selected.year}</span></div><div className="dialog-content"><span className="eyebrow">{selected.genre.toUpperCase()} · {selected.location.toUpperCase()}</span><h2 id="artwork-dialog-title">{selected.title}</h2><p className="dialog-artist">By {selected.artist}</p><p className="dialog-note">{selected.note}</p><div className="dialog-specs"><div><span>MEDIUM</span><strong>{selected.medium}</strong></div><div><span>DIMENSIONS</span><strong>{selected.dimensions}</strong></div><div><span>YEAR</span><strong>{selected.year}</strong></div></div><div className="dialog-bottom"><strong>{selected.price}</strong><button className={`dialog-save ${saved.includes(selected.id) ? 'is-saved' : ''}`} onClick={() => toggleSaved(selected.id)}><Heart size={16} fill={saved.includes(selected.id) ? 'currentColor' : 'none'} />{saved.includes(selected.id) ? 'Saved to your works' : 'Save this work'}</button></div><p className="dialog-footnote">For artist enquiries, sign in to your collector workspace.</p></div></section></div>}

      {accountOpen && <div className="modal-backdrop" role="presentation" onClick={() => setAccountOpen(false)}><section className="account-dialog" id="make-room-for-what-moves-you" role="dialog" aria-modal="true" aria-labelledby="account-title" onClick={(event) => event.stopPropagation()}><button className="dialog-close" aria-label="Close" onClick={() => setAccountOpen(false)}><X size={19} /></button><span className="account-mark"><span className="brand-mark"><span /><span /><span /></span></span><span className="eyebrow">YOUR COLLECTOR SPACE</span><h2 id="account-title">Make room for what moves you.</h2><p>Collector accounts are being prepared. Soon, your saved works and artist conversations will travel with you.</p><button className="account-dismiss" onClick={() => setAccountOpen(false)}>Keep exploring <ArrowRight size={15} /></button><span className="account-note">A preview of Artfolio · Early access</span></section></div>}
    </div>
  );
}
