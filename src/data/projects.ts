import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import drypopCover from "@/assets/drypop-cover.png";
import project4 from "@/assets/project-4.jpg";
 import kexchokladCover from "@/assets/kexchoklad-cover.jpg";
import underYourSkinDetail from "@/assets/under-your-skin-detail.png";
import fotografiskaCover from "@/assets/fotografiska-cover.jpg";
import theArchiveHero from "@/assets/the-archive-hero.jpg";
import theArchive01 from "@/assets/the-archive-01.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  detailImage?: string;
  year: string;
  tags: string[];
  featured?: boolean;
  link?: string;
}

// Lägg till, ta bort eller ändra projekt här!
export const projects: Project[] = [
  {
    id: "5",
    title: "The Archive",
    category: "Growth Marketing",
    description:
      "Ett kommunikationskoncept som gör om bilden av teknikprogrammet – från något smalt och nördigt till något man kan känna igen sig i. Byggt kring en enkel tanke: de flesta idéer blir aldrig av.",
    image: theArchive01,
    detailImage: theArchive01,
    year: "2026",
    tags: ["Growth Marketing", "Kanalstrategi", "Konceptutveckling", "Kampanj", "Employer/Skolbranding"],
    featured: true,
  },
  {
    id: "1",
    title: "Under Your Skin",
    category: "CRO & Analys",
    description: "CRO-analys med fokus på att öka återkommande kunder och stärka kundlojalitet.",
    image: project1,
    detailImage: underYourSkinDetail,
    year: "kurs",
    tags: ["CRO & Analys"],
    featured: true,
  },
  {
    id: "2",
    title: "Fotografiska",
    category: "Brand Strategy",
    description: "Community-driven brand experience som stärker Fotografiskas relevans hos framtida målgrupper genom deltagande och långsiktig storytelling.",
    image: fotografiskaCover,
    year: "2024",
    tags: ["Branding", "Growth", "Strategy"],
    featured: true,
  },
  {
    id: "3",
    title: "DryPop",
    category: "Paid Social & Performance Marketing",
    description: "Datadrivet paid social-case med målgruppsanalys, kreativ utveckling, A/B-testning och kampanjoptimering i Meta.",
    image: drypopCover,
    year: "2024",
    tags: ["Paid Social", "Growth Marketing", "A/B Testing"],
    featured: true,
  },
  {
    id: "4",
    title: "Sluta Glo. Börja Ragga",
    category: "Strategi & Beteendedesign",
    description: "När Kexchoklad blev ett verktyg mot ensamhet – ett strategiskt case om hur en godisprodukt kan bidra till folkhälsan.",
    image: kexchokladCover,
    year: "2025",
    tags: ["Strategy", "Public Health", "Behavior Design"],
    featured: true,
  },
];

// Din personliga info - ändra här!
export const personalInfo = {
  name: "Sebastian Johansson",
  title: "Growth Marketing Student",
  school: "Berghs School of Communication",
  email: "sebastian.johansson@student.berghs.se",
  linkedin: "https://linkedin.com/in/dittnamn",
  bio: "Jag är growth marketing-student på Berghs School of Communication med ett starkt driv att skapa trafik som faktiskt genererar mätbara resultat. Jag brinner för att förstå hela tillväxtresan – från första klick till långsiktig kundrelation – och motiveras av att testa, analysera och optimera det som verkligen gör skillnad.",
};
