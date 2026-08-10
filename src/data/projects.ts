import project1 from "@/assets/project-1.jpg";
import drypopCover from "@/assets/drypop-cover.png";
import kexchokladCover from "@/assets/kexchoklad-cover.jpg";
import underYourSkinDetail from "@/assets/under-your-skin-detail.png";
import fotografiskaCover from "@/assets/fotografiska-cover.jpg";
import theArchive01 from "@/assets/the-archive-01.jpg";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  /** Uppdragsgivare / kund */
  client: string;
  /** Min roll i projektet – visas på kort och i metadata-raden */
  role: string;
  description: string;
  image: string;
  detailImage?: string;
  year: string;
  tags: string[];
  featured?: boolean;
  link?: string;
  /** KPI:er som visas i blocket "Så skulle framgång mätas" */
  kpis?: string[];
}

// Lägg till, ta bort eller ändra projekt här!
export const projects: Project[] = [
  {
    id: "5",
    slug: "the-archive",
    title: "The Archive",
    category: "Growth Marketing",
    client: "NTI Gymnasiet",
    role: "Growth- & mediestrategi",
    description:
      "Ett kommunikationskoncept som gör om bilden av teknikprogrammet – från något smalt och nördigt till något man kan känna igen sig i. Byggt kring en enkel tanke: de flesta idéer blir aldrig av.",
    image: theArchive01,
    detailImage: theArchive01,
    year: "2026",
    tags: ["Growth Marketing", "Kanalstrategi", "Konceptutveckling", "Kampanj", "Employer/Skolbranding"],
    featured: true,
    kpis: [
      "Antal ansökningar till teknikprogrammet",
      "CTR på paid social",
      "Deltagande vid Archive Wall",
      "Andel tjejer bland sökande",
    ],
  },
  {
    id: "1",
    slug: "under-your-skin",
    title: "Under Your Skin",
    category: "CRO & Analys",
    client: "Under Your Skin",
    role: "CRO-analys & UX-förslag",
    description: "CRO-analys med fokus på att öka återkommande kunder och stärka kundlojalitet.",
    image: project1,
    detailImage: underYourSkinDetail,
    year: "2025",
    tags: ["CRO & Analys"],
    featured: true,
    kpis: [
      "Återköpsfrekvens",
      "Andel medlemmar av kunderna",
      "CTR på påfyllningspåminnelser",
      "Churn",
    ],
  },
  {
    id: "2",
    slug: "fotografiska",
    title: "Fotografiska",
    category: "Brand Strategy",
    client: "Fotografiska",
    role: "Varumärkes- & growthstrategi",
    description:
      "Community-driven brand experience som stärker Fotografiskas relevans hos framtida målgrupper genom deltagande och långsiktig storytelling.",
    image: fotografiskaCover,
    year: "2024",
    tags: ["Brand Strategy", "Growth", "Strategy"],
    featured: true,
    kpis: [
      "Antal inlämnade tidskapslar",
      "Andel besökare under 26 år",
      "UGC-räckvidd",
      "Återkommande besök",
    ],
  },
  {
    id: "3",
    slug: "drypop",
    title: "DryPop",
    category: "Paid Social & Performance Marketing",
    client: "DryPop",
    role: "Paid social & kampanjoptimering",
    description:
      "Datadrivet paid social-case med målgruppsanalys, kreativ utveckling, A/B-testning och kampanjoptimering i Meta.",
    image: drypopCover,
    year: "2024",
    tags: ["Paid Social", "Growth Marketing", "A/B Testing"],
    featured: true,
    kpis: ["CTR", "CPC", "Konverteringsgrad", "ROAS"],
  },
  {
    id: "4",
    slug: "sluta-glo-borja-ragga",
    title: "Sluta Glo. Börja Ragga",
    category: "Strategi & Beteendedesign",
    client: "Kexchoklad",
    role: "Strategi & beteendedesign",
    description:
      "När Kexchoklad blev ett verktyg mot ensamhet – ett strategiskt case om hur en godisprodukt kan bidra till folkhälsan.",
    image: kexchokladCover,
    year: "2025",
    tags: ["Strategy", "Public Health", "Behavior Design"],
    featured: true,
    kpis: ["Interaktioner", "Relationer påbörjade", "Upplevd mod-ökning", "Räckvidd"],
  },
];

export const getProject = (idOrSlug?: string) =>
  projects.find((p) => p.slug === idOrSlug || p.id === idOrSlug);

// Din personliga info - ändra här!
export const personalInfo = {
  name: "Sebastian Johansson",
  title: "Growth marketer",
  school: "Berghs School of Communication",
  email: "sebastian.johansson@student.berghs.se",
  linkedin: "https://www.linkedin.com/in/sebastian-johansson-3941a3385?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  cvUrl: "/cv-sebastian-johansson.pdf",
  bio: "Jag är growth marketer, nyexaminerad från Berghs School of Communication, med ett starkt driv att skapa trafik som faktiskt genererar mätbara resultat. Jag brinner för att förstå hela tillväxtresan – från första klick till långsiktig kundrelation – och motiveras av att testa, analysera och optimera det som verkligen gör skillnad.",
  bioClosing:
    "Nu söker jag min första roll inom growth eller performance marketing – där jag får testa, mäta och skala det som fungerar.",
};

export const skills = [
  "Performance Marketing",
  "CRO & A/B-testning",
  "SEO & Content",
  "CRM & Marketing Automation",
  "E-handel",
  "Webbanalys",
];

export const tools = [
  "Google Analytics 4",
  "Google Tag Manager",
  "Google Ads",
  "Meta Ads",
  "SEMrush",
  "Hotjar",
];
