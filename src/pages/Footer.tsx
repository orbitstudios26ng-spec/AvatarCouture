const ORBIT_STUDIOS_URL = "https://orbit-studios.vercel.app/";

const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-xl font-semibold text-gradient-gold">AVATAR COUTURE</p>
      <p className="text-sm text-muted-foreground font-body">
        © 2026 Avatar Couture. Entire website created by{" "}
        <a
          href={ORBIT_STUDIOS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold-light transition-colors"
        >
          Orbit Studios
        </a>
        .
      </p>
    </div>
  </footer>
);

export default Footer;
