// src/pages/OtherEdits.tsx
export default function OtherEdits(){
  return (
    <section className="page">
      <h1>Other Edits</h1>
      <div className="card">
        <p>Non-wrestling edits coming soon...</p>
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
