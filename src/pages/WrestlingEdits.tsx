// src/pages/WrestlingEdits.tsx
export default function WrestlingEdits(){
  return (
    <section className="page">
      <h1>Wrestling Edits</h1>
      <div className="card">
        <p>Wrestling Edits coming soon...</p>
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
