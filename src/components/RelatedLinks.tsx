import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RelatedLink {
  label: string;
  href: string;
}

interface RelatedLinksProps {
  title: string;
  links: RelatedLink[];
}

export function RelatedLinks({ title, links }: RelatedLinksProps) {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-6">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.href}
              className="group flex items-center justify-between p-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {link.label}
              </span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pre-defined link sets for reuse - MATCHING App.tsx routes exactly
export const CLASS_LINKS = [
  { label: "Class 7 Math", href: "/class-7-math-tutor" },
  { label: "Class 8 Math", href: "/class-8-math-tutor" },
  { label: "Class 9 Math", href: "/class-9-math-tutor" },
  { label: "Class 10 Math", href: "/class-10-math-tutor" },
  { label: "Class 11 Math", href: "/class-11-math-tutor" },
  { label: "Class 12 Math", href: "/class-12-math-tutor" },
  { label: "B.Sc Math", href: "/bsc-math-tutor" },
];

export const BOARD_LINKS = [
  { label: "WBBSE/Madhyamik", href: "/wbbse-math-tutor" },
  { label: "CBSE Board", href: "/cbse-math-tutor" },
  { label: "ICSE Board", href: "/icse-math-tutor" },
  { label: "Calcutta University", href: "/calcutta-university-bsc-math" },
  { label: "WBSU", href: "/wbsu-bsc-math" },
];

export const LOCATION_LINKS = [
  { label: "Belghoria", href: "/math-tutor-belghoria" },
  { label: "Dunlop", href: "/math-tutor-dunlop" },
  { label: "Sodepur", href: "/math-tutor-sodepur" },
  { label: "Barrackpore", href: "/math-tutor-barrackpore" },
  { label: "Dum Dum", href: "/math-tutor-dum-dum" },
  { label: "Lake Town", href: "/math-tutor-lake-town" },
  { label: "Shyambazar", href: "/math-tutor-shyambazar" },
  { label: "Sinthi More", href: "/math-tutor-sinthi-more" },
  { label: "Ariadaha", href: "/math-tutor-ariadaha" },
  { label: "Sobha Bazar", href: "/math-tutor-sobha-bazar" },
];
