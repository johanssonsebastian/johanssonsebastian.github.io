// Plain, image-free portfolio data for the MCP server.
// Kept separate from src/data/projects.ts so the bundled edge function
// does not import image assets.

export interface McpProject {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  tags: string[];
  url: string;
}

export const mcpProjects: McpProject[] = [
  {
    id: "5",
    title: "The Archive",
    category: "Growth Marketing",
    description:
      "Kommunikationskoncept för NTI Gymnasiet som gör om bilden av teknikprogrammet – från något smalt till något för alla med idéer.",
    year: "2026",
    tags: ["Growth Marketing", "Strategy", "Campaign"],
    url: "/projekt/5",
  },
  {
    id: "1",
    title: "Under Your Skin",
    category: "CRO & Analys",
    description:
      "CRO-analys med fokus på att öka återkommande kunder och stärka kundlojalitet.",
    year: "kurs",
    tags: ["CRO & Analys"],
    url: "/projekt/1",
  },
  {
    id: "2",
    title: "Fotografiska",
    category: "Brand Strategy",
    description:
      "Community-driven brand experience som stärker Fotografiskas relevans hos framtida målgrupper genom deltagande och långsiktig storytelling.",
    year: "2024",
    tags: ["Branding", "Growth", "Strategy"],
    url: "/projekt/2",
  },
  {
    id: "3",
    title: "DryPop",
    category: "Paid Social & Performance Marketing",
    description:
      "Datadrivet paid social-case med målgruppsanalys, kreativ utveckling, A/B-testning och kampanjoptimering i Meta.",
    year: "2024",
    tags: ["Paid Social", "Growth Marketing", "A/B Testing"],
    url: "/projekt/3",
  },
  {
    id: "4",
    title: "Sluta Glo. Börja Ragga",
    category: "Strategi & Beteendedesign",
    description:
      "När Kexchoklad blev ett verktyg mot ensamhet – ett strategiskt case om hur en godisprodukt kan bidra till folkhälsan.",
    year: "2025",
    tags: ["Strategy", "Public Health", "Behavior Design"],
    url: "/projekt/4",
  },
];

export const mcpProfile = {
  name: "Sebastian Johansson",
  title: "Growth Marketing Student",
  school: "Berghs School of Communication",
  email: "sebastian.johansson@student.berghs.se",
  bio: "Jag är growth marketing-student på Berghs School of Communication med ett starkt driv att skapa trafik som faktiskt genererar mätbara resultat. Jag brinner för att förstå hela tillväxtresan – från första klick till långsiktig kundrelation – och motiveras av att testa, analysera och optimera det som verkligen gör skillnad.",
};