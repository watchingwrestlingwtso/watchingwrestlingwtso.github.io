// src/pages/WrestlingMatchEdits.tsx
export default function MatchEdits() {
  return (
    <section className="page stack-lg">
      <h1>Match Edits</h1>

      <div className="card stack">
        <p>A Playlist of my Match Edits</p>

        <div className="video-embed">
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLGdFgcAqkiX74opSmlCPsBgbzwl_2va_9"
            allowFullScreen
            title="Match Edits Playlist"
          />
        </div>
      </div>
    </section>
  );
}

