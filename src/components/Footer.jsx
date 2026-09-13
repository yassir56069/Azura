import { site } from "../data/content";

export default function Footer() {
  return (
    <footer className="divider">
      <div className="section py-8">
        <div className="section-inner flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-ivoryDim">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.location} · {site.sector}</p>
        </div>
      </div>
    </footer>
  );
}
