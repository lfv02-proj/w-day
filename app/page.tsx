"use client";

import { FormEvent, useEffect, useState } from "react";

const nearby = [
  {
    number: "01",
    title: "Stroll through Mikulov",
    text: "Wander the old town, browse the cafés around the square, and take in the chateau from below.",
    tag: "5 min walk",
  },
  {
    number: "02",
    title: "Climb Svatý Kopeček",
    text: "A short, beautiful hike to Holy Hill with wide views over the town, vineyards, and Pálava.",
    tag: "Sunset favourite",
  },
  {
    number: "03",
    title: "Taste Moravian wine",
    text: "Book a cellar tasting and discover the crisp whites and Blaufränkisch that make this region famous.",
    tag: "Reserve ahead",
  },
  {
    number: "04",
    title: "Explore Lednice & Valtice",
    text: "Turn the weekend into a mini escape with palaces, gardens, cycling paths, and vineyard roads.",
    tag: "25 min by car",
  },
];

const faqs = [
  ["Can I bring a plus one?", "Please follow the names listed on your invitation. If you are unsure, send us a message before submitting your RSVP."],
  ["Are children invited?", "We love your little ones. Your invitation will note whether we have reserved seats for them at the celebration."],
  ["What should I wear?", "Formal or cocktail attire in the guest palette below. Please avoid white, ivory, and bridal cream."],
  ["Will transport be provided?", "We plan to share a local shuttle timetable once accommodation responses are in. Please include where you are staying in your RSVP."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [days, setDays] = useState("—");

  useEffect(() => {
    const wedding = new Date("2027-07-12T16:00:00+02:00").getTime();
    const remaining = Math.max(0, Math.ceil((wedding - Date.now()) / 86400000));
    setDays(String(remaining));
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Back to top">L <span>&</span> V</a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
        <nav id="main-nav" className={menuOpen ? "open" : ""} aria-label="Main navigation">
          {["Story", "Weekend", "Mikulov", "Palette", "RSVP"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grain" />
        <div className="hero-copy">
          <p className="eyebrow">A celebration in South Moravia</p>
          <h1>Love, in<br /><em>Mikulov</em></h1>
          <p className="hero-intro">Together with our families, we invite you to join us for an evening of vows, wine, and dancing beneath the chateau walls.</p>
          <a className="button button-light" href="#rsvp">Kindly respond <span>↘</span></a>
        </div>
        <div className="hero-date" aria-label="Wedding date and venue">
          <div><span>12</span><small>July</small></div>
          <i />
          <div><span>2027</span><small>4 o’clock</small></div>
        </div>
        <p className="hero-location">Mikulov Chateau · Czech Republic</p>
      </section>

      <section className="intro section" id="story">
        <p className="section-number">I · Our day</p>
        <div className="intro-grid">
          <h2>We can&apos;t wait to<br />celebrate <em>with you.</em></h2>
          <div className="intro-copy">
            <p>There are places that seem made for a celebration. For us, it is Mikulov: warm stone, winding lanes, vineyard air, and the people we love all in one place.</p>
            <p>Please treat this website as your guide to the weekend. We&apos;ll keep it updated as the day draws closer.</p>
          </div>
        </div>
        <div className="countdown">
          <span>{days}</span>
          <p>days until<br />we say “I do”</p>
          <div className="seal">12·07<br />2027</div>
        </div>
      </section>

      <section className="weekend section dark" id="weekend">
        <div className="section-heading">
          <p className="section-number">II · The celebration</p>
          <h2>One unforgettable<br /><em>summer evening.</em></h2>
        </div>
        <div className="schedule">
          <article>
            <time>16:00</time>
            <div><span>01</span><h3>Welcome</h3><p>Arrive at the chateau, find your seat, and enjoy a welcome drink in the courtyard.</p></div>
          </article>
          <article>
            <time>16:30</time>
            <div><span>02</span><h3>Ceremony</h3><p>We exchange vows surrounded by our favourite people and the gardens of Mikulov.</p></div>
          </article>
          <article>
            <time>18:00</time>
            <div><span>03</span><h3>Dinner</h3><p>A long-table feast with Moravian wine, speeches, and golden-hour views.</p></div>
          </article>
          <article>
            <time>21:00</time>
            <div><span>04</span><h3>Dancing</h3><p>Meet us beneath the lights for cake, music, and a very full dance floor.</p></div>
          </article>
        </div>
      </section>

      <section className="venue section">
        <div className="venue-image" role="img" aria-label="Burgundy wedding moodboard with candlelit tables and florals" />
        <div className="venue-card">
          <p className="section-number">The venue</p>
          <h2>Zámek<br /><em>Mikulov</em></h2>
          <p>Zámek 1/4<br />692 01 Mikulov<br />Czech Republic</p>
          <a href="https://maps.google.com/?q=Mikulov+Chateau" target="_blank" rel="noreferrer">Open in maps <span>↗</span></a>
        </div>
      </section>

      <section className="explore section" id="mikulov">
        <div className="section-heading light-heading">
          <p className="section-number">III · Make a weekend of it</p>
          <h2>A little more<br /><em>of Mikulov.</em></h2>
          <p>For those travelling from near and far, here are a few lovely ways to spend your time around the celebration.</p>
        </div>
        <div className="nearby-grid">
          {nearby.map((place) => (
            <article key={place.number}>
              <span className="nearby-number">{place.number}</span>
              <div>
                <p className="tag">{place.tag}</p>
                <h3>{place.title}</h3>
                <p>{place.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="travel section">
        <p className="section-number">IV · Travel notes</p>
        <div className="travel-grid">
          <h2>Getting here<br />& staying <em>nearby.</em></h2>
          <div className="travel-details">
            <article><span>By air</span><p>Vienna Airport is roughly 90 minutes away by car. Brno Airport is around 50 minutes away.</p></article>
            <article><span>By train</span><p>Travel to Břeclav, then connect to Mikulov by regional train or taxi. Check your route closer to the date.</p></article>
            <article><span>Stay</span><p>Choose accommodation in central Mikulov so the chateau, cafés, and planned shuttle stops are close at hand.</p></article>
          </div>
        </div>
        <p className="travel-note">Hotel recommendations and booking details will be added here once our room blocks are confirmed.</p>
      </section>

      <section className="palette section dark" id="palette">
        <div className="palette-copy">
          <p className="section-number">V · Dress with us</p>
          <h2>Our guest<br /><em>colour story.</em></h2>
          <p>Formal or cocktail attire in rich, romantic tones. Think candlelight, dark fruit, pressed linen, and a touch of old-world glamour.</p>
          <p className="small-note">Kindly reserve white and ivory for the couple.</p>
        </div>
        <div className="swatches" aria-label="Suggested wedding guest colour palette">
          <div style={{ "--swatch": "#F1E8DB" } as React.CSSProperties}><span>Antique linen</span><small>#F1E8DB</small></div>
          <div style={{ "--swatch": "#B6A79A" } as React.CSSProperties}><span>Smoky taupe</span><small>#B6A79A</small></div>
          <div style={{ "--swatch": "#8A5C6B" } as React.CSSProperties}><span>Soft fig</span><small>#8A5C6B</small></div>
          <div style={{ "--swatch": "#8C2B3A" } as React.CSSProperties}><span>Crimson rose</span><small>#8C2B3A</small></div>
          <div style={{ "--swatch": "#451721" } as React.CSSProperties}><span>Ink plum</span><small>#451721</small></div>
        </div>
      </section>

      <section className="faq section">
        <p className="section-number">VI · A few details</p>
        <h2>Before you<br /><em>pack your bags.</em></h2>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question}>
              <summary><span>0{index + 1}</span>{question}<i>+</i></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rsvp section" id="rsvp">
        <div className="rsvp-intro">
          <p className="section-number">VII · Répondez s&apos;il vous plaît</p>
          <h2>Will you<br /><em>join us?</em></h2>
          <p>Please reply by 12 April 2027. One response per household is perfect.</p>
        </div>
        {submitted ? (
          <div className="thank-you" role="status">
            <span>♥</span>
            <h3>Thank you, truly.</h3>
            <p>Your response has been noted for this demo. When you are ready to use the site for real guests, connect the form to your preferred form service.</p>
            <button className="text-button" onClick={() => setSubmitted(false)}>Submit another response</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Full name<input name="name" type="text" placeholder="Your name" required /></label>
            <fieldset>
              <legend>Will you be joining us?</legend>
              <label className="radio"><input type="radio" name="attending" value="yes" required /><span>Joyfully accepts</span></label>
              <label className="radio"><input type="radio" name="attending" value="no" /><span>Regretfully declines</span></label>
            </fieldset>
            <div className="form-row">
              <label>Number of guests<select name="guests" defaultValue="1"><option>1</option><option>2</option><option>3</option><option>4</option></select></label>
              <label>Dietary needs<input name="dietary" type="text" placeholder="Allergies or preferences" /></label>
            </div>
            <label>Where are you staying?<input name="hotel" type="text" placeholder="Hotel or accommodation (if known)" /></label>
            <label>A note for us<textarea name="message" rows={3} placeholder="Song request, travel question, or a little hello…" /></label>
            <button className="button button-dark" type="submit">Send our response <span>↗</span></button>
          </form>
        )}
      </section>

      <footer>
        <p className="monogram">L <span>&</span> V</p>
        <p>12 · 07 · 2027<br />Mikulov, Czech Republic</p>
        <a href="#top">Back to the beginning ↑</a>
      </footer>
    </main>
  );
}
