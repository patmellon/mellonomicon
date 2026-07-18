import { useState, type ReactElement } from 'react';

type LinkItem = {
  label: string;
  href: string;
  icon: ReactElement;
};

const links: LinkItem[] = [
  {
    label: 'X',
    href: 'https://x.com/ptmlln',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-x">
        <path
          d="M18.244 2H21.5l-7.116 8.133L22.75 22h-6.552l-5.13-6.71L5.198 22H1.94l7.61-8.698L1.5 2h6.718l4.637 6.118L18.244 2Zm-1.142 18h1.804L7.228 3.895H5.292L17.102 20Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/patmellon/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2C6.477 2 2 6.588 2 12.248c0 4.528 2.865 8.37 6.839 9.727.5.096.682-.223.682-.496 0-.245-.009-.894-.014-1.755-2.782.617-3.37-1.373-3.37-1.373-.455-1.184-1.11-1.499-1.11-1.499-.908-.636.069-.623.069-.623 1.004.072 1.532 1.056 1.532 1.056.892 1.566 2.341 1.114 2.91.852.091-.664.349-1.114.635-1.37-2.221-.26-4.555-1.14-4.555-5.076 0-1.121.39-2.038 1.029-2.756-.103-.261-.446-1.31.097-2.731 0 0 .84-.276 2.75 1.053A9.303 9.303 0 0 1 12 6.84c.85.004 1.707.118 2.507.347 1.909-1.329 2.748-1.053 2.748-1.053.545 1.421.202 2.47.1 2.731.64.718 1.027 1.635 1.027 2.756 0 3.946-2.338 4.813-4.566 5.068.359.319.679.948.679 1.911 0 1.379-.012 2.491-.012 2.829 0 .276.18.597.688.495C19.138 20.614 22 16.773 22 12.248 22 6.588 17.523 2 12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/patmellon/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.94 8.999H3.56V20h3.38V8.999ZM5.25 3.5A1.96 1.96 0 0 0 3.29 5.47c0 1.086.873 1.97 1.938 1.97h.023A1.97 1.97 0 0 0 7.23 5.47 1.97 1.97 0 0 0 5.25 3.5ZM20.44 13.205c0-3.322-1.75-4.868-4.083-4.868-1.884 0-2.727 1.048-3.2 1.788v-1.126H9.78c.044.747 0 11.001 0 11.001h3.379v-6.141c0-.328.024-.658.12-.893.263-.658.86-1.34 1.863-1.34 1.314 0 1.84 1.012 1.84 2.496V20h3.38v-6.795Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'Bandcamp',
    href: 'https://bridgeunderwater.bandcamp.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.266 5 2 19h13.734L22 5H8.266Zm6.098 12H5.988l4.425-10h8.376l-4.425 10Z" fill="currentColor" />
      </svg>
    ),
  },
];

function App() {
  const [portraitAvailable, setPortraitAvailable] = useState(true);

  return (
    <main className="page">
      <section className="intro" aria-labelledby="page-title">
        <div className="portrait-wrap">
          {portraitAvailable ? (
            <img
              className="portrait"
              src="/pat-portrait.jpg"
              alt="Portrait of Pat Mellon"
              onError={() => setPortraitAvailable(false)}
            />
          ) : (
            <div className="portrait placeholder" role="img" aria-label="Portrait placeholder for Pat Mellon">
              Pat
            </div>
          )}
        </div>
        <h1 id="page-title">Pat Mellon</h1>
        <p className="blurb">
          I&apos;m a software engineer exploring AI, making music, and writing about what I learn.
        </p>
        <nav aria-label="Social links">
          <ul className="icon-links">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer noopener" aria-label={link.label}>
                  {link.icon}
                  <span className="sr-only">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}

export default App;
