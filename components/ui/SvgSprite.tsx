// Inline SVG symbol sprite ported verbatim from the legacy site.
// Rendered once near the top of <body>; icons reference symbols via <use href="#i-*">.
const SPRITE = `
<defs>
  <symbol id="i-sparkle" viewBox="0 0 24 24"><path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z"/><path d="M19 4l.6 1.8L21 6l-1.4.4L19 8l-.6-1.6L17 6l1.4-.2z"/><path d="M5 16l.5 1.5L7 18l-1.5.5L5 20l-.5-1.5L3 18l1.5-.5z"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></symbol>
  <symbol id="i-mappin" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></symbol>
  <symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></symbol>
  <symbol id="i-car" viewBox="0 0 24 24"><path d="M5 17H3v-5l2.5-5h13L21 12v5h-2"/><circle cx="7.5" cy="17" r="2"/><circle cx="16.5" cy="17" r="2"/></symbol>
  <symbol id="i-users" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></symbol>
  <symbol id="i-bus" viewBox="0 0 24 24"><path d="M4 6c0-1 1-2 2-2h12a2 2 0 012 2v11h-2"/><path d="M4 17h16"/><path d="M4 6v11h2"/><circle cx="8" cy="17" r="2"/><circle cx="16" cy="17" r="2"/><path d="M4 11h16"/></symbol>
  <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></symbol>
  <symbol id="i-nav" viewBox="0 0 24 24"><polygon points="3 11 22 2 13 21 11 13 3 11"/></symbol>
  <symbol id="i-briefcase" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></symbol>
  <symbol id="i-snow" viewBox="0 0 24 24"><path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M19.07 4.93L4.93 19.07"/></symbol>
  <symbol id="i-music" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></symbol>
  <symbol id="i-mountain" viewBox="0 0 24 24"><path d="M8 3l-7 18h22L15 3l-3.5 9L8 3z"/></symbol>
  <symbol id="i-fuel" viewBox="0 0 24 24"><path d="M3 22V4a2 2 0 012-2h7a2 2 0 012 2v18"/><path d="M3 14h11"/><path d="M14 8l3 3v7a2 2 0 002 2 2 2 0 002-2v-9l-4-4"/></symbol>
  <symbol id="i-road" viewBox="0 0 24 24"><path d="M4 19l3-14h10l3 14"/><path d="M12 5v3M12 11v3M12 17v2"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></symbol>
  <symbol id="i-tag" viewBox="0 0 24 24"><path d="M20.59 13.41l-7.18 7.17a2 2 0 01-2.82 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1.5"/></symbol>
  <symbol id="i-headset" viewBox="0 0 24 24"><path d="M3 18v-3a9 9 0 0118 0v3"/><path d="M3 18a2 2 0 002 2h1v-6H5a2 2 0 00-2 2zM21 18a2 2 0 01-2 2h-1v-6h1a2 2 0 012 2z"/></symbol>
  <symbol id="i-award" viewBox="0 0 24 24"><circle cx="12" cy="9" r="6"/><path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.11"/></symbol>
  <symbol id="i-map" viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><path d="M8 2v16M16 6v16"/></symbol>
  <symbol id="i-wrench" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></symbol>
  <symbol id="i-card" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></symbol>
  <symbol id="i-star" viewBox="0 0 24 24"><polygon points="12 2 15.1 8.5 22 9.3 17 14.1 18.2 21 12 17.7 5.8 21 7 14.1 2 9.3 8.9 8.5 12 2"/></symbol>
  <symbol id="i-quote" viewBox="0 0 24 24"><path d="M3 21c0-3 1-6 5-7l-1-2c-3 1-5 4-5 7v2h6v-7H3v7zm12 0c0-3 1-6 5-7l-1-2c-3 1-5 4-5 7v2h6v-7h-5v7z"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
  <symbol id="i-chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></symbol>
  <symbol id="i-send" viewBox="0 0 24 24"><path d="M22 2L11 13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></symbol>
  <symbol id="i-eye" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></symbol>
  <symbol id="i-plane" viewBox="0 0 24 24"><path d="M22 16.92V20a1 1 0 01-1.08 1 19.79 19.79 0 01-3.42-.49l-2.83-7.07L22 9.92V16.92zM2 7.08V4a1 1 0 011.08-1 19.79 19.79 0 013.42.49l2.83 7.07L2 14.08V7.08zM10 2l2 4 4 1-3 3 .5 4L10 12l-3.5 2L7 10 4 7l4-1 2-4z"/></symbol>
  <symbol id="i-camera" viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></symbol>
  <symbol id="i-loop" viewBox="0 0 24 24"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></symbol>
  <symbol id="i-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></symbol>
  <symbol id="i-pin-city" viewBox="0 0 24 24"><path d="M3 21h18"/><path d="M5 21V8l5-3 5 3v13"/><path d="M15 21V11l4-2v12"/><path d="M9 9h2M9 13h2M9 17h2"/></symbol>
  <symbol id="i-whatsapp" viewBox="0 0 32 32"><path d="M16 0C7.163 0 0 7.163 0 16c0 2.827.737 5.479 2.027 7.785L0 32l8.451-2.016A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.803-1.872l-.485-.287-5.02 1.197 1.22-4.888-.317-.503A13.261 13.261 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.945c-.399-.2-2.36-1.163-2.726-1.296-.366-.133-.633-.2-.9.2-.266.4-1.032 1.296-1.266 1.563-.233.267-.466.3-.865.1-2.36-1.18-3.91-2.107-5.462-4.777-.413-.712.413-.66 1.18-2.193.133-.267.067-.5-.033-.7-.1-.2-.9-2.16-1.233-2.96-.326-.776-.657-.669-.9-.681l-.766-.013c-.267 0-.7.1-1.066.5-.366.4-1.4 1.368-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.04 2.54 1.097 3.537 1.19 4.807.999.772-.115 2.36-.964 2.693-1.897.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.766-.467z"/></symbol>
  <symbol id="i-instagram" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></symbol>
  <symbol id="i-facebook" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></symbol>
  <symbol id="i-youtube" viewBox="0 0 24 24"><path d="M22.5 7s-.2-1.5-.9-2.1c-.8-.9-1.7-.9-2.1-1C16.5 3.5 12 3.5 12 3.5s-4.5 0-7.5.4c-.4.1-1.3.1-2.1 1C1.7 5.5 1.5 7 1.5 7S1.3 8.7 1.3 10.5v1.5c0 1.7.2 3.5.2 3.5s.2 1.5.9 2.1c.8.9 1.9.9 2.4 1 1.7.2 7.2.4 7.2.4s4.5 0 7.5-.4c.4-.1 1.3-.1 2.1-1 .7-.6.9-2.1.9-2.1s.2-1.7.2-3.5v-1.5C22.7 8.7 22.5 7 22.5 7z"/><polygon points="9.75 14.5 9.75 8.5 15.5 11.5 9.75 14.5"/></symbol>
</defs>`;

export default function SvgSprite() {
  return (
    <svg
      width={0}
      height={0}
      style={{ position: "absolute" }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: SPRITE }}
    />
  );
}
