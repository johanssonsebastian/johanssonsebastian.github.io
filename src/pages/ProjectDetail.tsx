import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, personalInfo, getProject } from "@/data/projects";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import fotografiskaSlide1 from "@/assets/fotografiska-slide-1.jpg";
import fotografiskaSlide2 from "@/assets/fotografiska-slide-2.jpg";
import fotografiskaSlide3 from "@/assets/fotografiska-slide-3.jpg";
import fotografiskaSlide4 from "@/assets/fotografiska-slide-4.jpg";
import drypopSlide1 from "@/assets/drypop-slide-1.jpg";
import drypopSlide2 from "@/assets/drypop-slide-2.jpg";
import sustainableFashionVideo from "@/assets/sustainable-fashion-video.mp4";
import sustainableSlide1 from "@/assets/sustainable-slide-1.png";
import sustainableSlide2 from "@/assets/sustainable-slide-2.png";
import theArchiveHeroImg from "@/assets/the-archive-hero.jpg";
import theArchive01 from "@/assets/the-archive-01.jpg";



// Byt ut bilderna för The Archive här – ett ställe för alla bildreferenser.
const theArchiveHero = {
  src: theArchiveHeroImg,
  alt: "The Archive – affischer för NTI Gymnasiet på en pelare på Götgatan i Stockholm",
  width: 1600,
  height: 1196,
};
const theArchiveGallery = [
  { src: theArchive01, alt: "Instagramflöde och story för The Archive-kampanjen", width: 1400, height: 934 },
];
const theArchiveSlides = [theArchiveHero, ...theArchiveGallery];

const fotografiskaSlides = [fotografiskaSlide1, fotografiskaSlide2, fotografiskaSlide3, fotografiskaSlide4];
const drypopSlides = [drypopSlide2, drypopSlide1];
const sustainableSlides: Array<{ type: 'video' | 'image'; src: string }> = [
  { type: 'video', src: sustainableFashionVideo },
  { type: 'image', src: sustainableSlide1 },
  { type: 'image', src: sustainableSlide2 },
];
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const ProjectDetail = () => {
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const project = getProject(id);
  const projectIndex = project ? projects.findIndex(p => p.id === project.id) : -1;
  const nextProject = projectIndex >= 0 ? projects[(projectIndex + 1) % projects.length] : undefined;
  useDocumentTitle(project ? `${project.title} — Sebastian Johansson` : "Projekt — Sebastian Johansson", project?.description);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentSlide(0);
  }, [id]);

  if (!project) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Projektet hittades inte</h1>
          <Link to="/" className="text-primary hover:underline">
            Tillbaka till startsidan
          </Link>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Back button */}
        <div className="px-6 md:px-12 lg:px-24 mb-12">
          <Link to="/#projects" className="group inline-flex items-center gap-3 min-h-[44px] text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-body text-sm tracking-wider uppercase">Tillbaka till projekt</span>
          </Link>
        </div>

        {/* Hero section */}
        <div className="px-6 md:px-12 lg:px-24 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-px bg-primary" />
                <span className="text-primary font-body text-xs tracking-[0.3em] uppercase">
                  {project.category}
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-8 tracking-tight">
                {project.title}
              </h1>

              {project.id === "5" && (
                <p className="text-2xl md:text-3xl text-primary font-display italic mb-8">
                  "Låt inte dina idéer samla damm."
                </p>
              )}

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-muted-foreground font-body text-sm">
                <span>{project.client}</span>
                <span className="text-primary">·</span>
                <span>{project.year}</span>
                <span className="text-primary">·</span>
                <span>{project.category}</span>
                <span className="text-primary">·</span>
                <span>Min roll: {project.role}</span>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Project image(s) */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="px-2 md:px-12 lg:px-24 mb-20">
          <div className="max-w-7xl mx-auto">
            {project.id === "2" ? (
              <div className="relative flex items-center gap-2 md:gap-4">
                {/* Previous button */}
                <button
                  onClick={() => setCurrentSlide(prev => prev === 0 ? fotografiskaSlides.length - 1 : prev - 1)}
                  className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full border border-border bg-card hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Föregående bild"
                >
                  <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-foreground" />
                </button>

                {/* Image */}
                <div className="flex-1 overflow-hidden bg-card">
                  <img 
                    src={fotografiskaSlides[currentSlide]} 
                    alt={`${project.title} slide ${currentSlide + 1}`} 
                    className="w-full h-auto object-contain" 
                  />
                </div>

                {/* Next button */}
                <button
                  onClick={() => setCurrentSlide(prev => prev === fotografiskaSlides.length - 1 ? 0 : prev + 1)}
                  className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full border border-border bg-card hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Nästa bild"
                >
                  <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-foreground" />
                </button>
              </div>
            ) : project.id === "3" ? (
              <div className="relative flex items-center gap-2 md:gap-4">
                {/* Previous button */}
                <button
                  onClick={() => setCurrentSlide(prev => prev === 0 ? drypopSlides.length - 1 : prev - 1)}
                  className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full border border-border bg-card hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Föregående bild"
                >
                  <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-foreground" />
                </button>

                {/* Image */}
                <div className="flex-1 overflow-hidden bg-card">
                  <img 
                    src={drypopSlides[currentSlide]} 
                    alt={`${project.title} slide ${currentSlide + 1}`} 
                    className="w-full h-auto object-contain" 
                  />
                </div>

                {/* Next button */}
                <button
                  onClick={() => setCurrentSlide(prev => prev === drypopSlides.length - 1 ? 0 : prev + 1)}
                  className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full border border-border bg-card hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Nästa bild"
                >
                  <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-foreground" />
                </button>
              </div>
            ) : project.id === "5" ? (
              <div className="relative flex items-center gap-2 md:gap-4">
                {/* Previous button */}
                <button
                  onClick={() => setCurrentSlide(prev => prev === 0 ? theArchiveSlides.length - 1 : prev - 1)}
                  className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full border border-border bg-card hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Föregående bild"
                >
                  <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-foreground" />
                </button>

                {/* Image */}
                <div className="flex-1 overflow-hidden bg-card">
                  <img
                    src={theArchiveSlides[currentSlide].src}
                    alt={theArchiveSlides[currentSlide].alt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Next button */}
                <button
                  onClick={() => setCurrentSlide(prev => prev === theArchiveSlides.length - 1 ? 0 : prev + 1)}
                  className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full border border-border bg-card hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Nästa bild"
                >
                  <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-foreground" />
                </button>
              </div>
            ) : project.id === "4" ? (
              <div className="relative flex items-center gap-1 md:gap-4">
                {/* Previous button */}
                <button
                  onClick={() => setCurrentSlide(prev => prev === 0 ? sustainableSlides.length - 1 : prev - 1)}
                  className="flex-shrink-0 w-6 h-6 md:w-12 md:h-12 rounded-full border border-border bg-card hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Föregående"
                >
                  <ChevronLeft className="w-3 h-3 md:w-6 md:h-6 text-foreground" />
                </button>

                {/* Media */}
                <div className="flex-1 overflow-hidden bg-card">
                  {sustainableSlides[currentSlide].type === 'video' ? (
                    <video 
                      src={sustainableSlides[currentSlide].src} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-auto object-contain"
                    />
                  ) : (
                    <img 
                      src={sustainableSlides[currentSlide].src} 
                      alt={`${project.title} slide ${currentSlide + 1}`} 
                      className="w-full h-auto object-contain" 
                    />
                  )}
                </div>

                {/* Next button */}
                <button
                  onClick={() => setCurrentSlide(prev => prev === sustainableSlides.length - 1 ? 0 : prev + 1)}
                  className="flex-shrink-0 w-6 h-6 md:w-12 md:h-12 rounded-full border border-border bg-card hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Nästa"
                >
                  <ChevronRight className="w-3 h-3 md:w-6 md:h-6 text-foreground" />
                </button>
              </div>
            ) : (
              <div className="aspect-[16/9] overflow-hidden bg-card">
                <img src={project.detailImage || project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </motion.div>

        {/* Content */}
        <div className="px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Main content */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }} className="lg:col-span-8">
                {/* Case Study Content - Dynamic based on project */}
                {project.id === "1" && (
                  <div className="space-y-12">
                    {/* Intro */}
                    <div>
                      <p className="text-xl text-foreground font-body leading-relaxed">
                        I detta case analyserade vi Under Your Skins webbplats med målet att identifiera 
                        vilka förändringar som kan driva fler återkommande kunder. Arbetet utgick från att 
                        följa hela kundresan, från köp till tiden efter leverans, för att förstå var 
                        lojaliteten tappas.
                      </p>
                    </div>

                    {/* Problem */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Utmaning</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Hur behåller vi kunder efter första köpet?</h3>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        Under Your Skin hade en stark förstaintryck men tappade kunder över tid. 
                        Utmaningen var att identifiera var i kundresan lojaliteten försvann och 
                        hur vi kunde skapa incitament för återkommande köp.
                      </p>
                    </div>

                    {/* Insikt */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Insikt</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Lojalitetsprogrammet var otydligt</h3>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        Det befintliga medlemsprogrammet, Lojalitetsklubben, var svårt att hitta och 
                        saknade tydlig progression. Kunder visste inte vad de kunde tjäna på att vara 
                        lojala eller hur nära de var nästa belöning.
                      </p>
                    </div>

                    {/* Lösning */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Lösning</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">En omdesignad medlemsupplevelse</h3>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>
                          Vi skapade en fungerande demohemsida där vi fokuserade på att vidareutveckla 
                          företagets befintliga medlemsprogram. Strukturen och navigationen designades om 
                          för att göra medlemsklubben tydligare och mer motiverande att stanna kvar i.
                        </p>
                        <ul className="space-y-3 ml-4">
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-2">•</span>
                            <span><strong className="text-foreground">Belöningssystem</strong>: visar hur långt kunden är från nästa belöning</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-2">•</span>
                            <span><strong className="text-foreground">Medlemsnivåer</strong>: brons, silver och guld för långsiktigt engagemang</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-2">•</span>
                            <span><strong className="text-foreground">Påfyllningspåminnelser</strong>: automatiska påminnelser när det är dags att fylla på produkter</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Min roll */}
                    <div className="bg-card border border-border p-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Min roll</span>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>Jag ansvarade för CRO-analysen och de datadrivna förslagen: kartläggning av kundresan efter köp, analys av friktion i medlemsflödet samt hypoteser och prioritering av de tester som skulle ge störst effekt på återköp.</p>
                        <p className="text-foreground italic">Platshållartext: fyll gärna på med dina exakta ansvarsområden.</p>
                      </div>
                    </div>

                    {/* Resultat/Tanke */}
                    <div className="bg-card border border-border p-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Resultat & Lärdomar</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Stärkt kundlojalitet genom bättre UX</h3>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        Designen uppdaterades för att bättre matcha varumärket och ge ett mer sammanhållet 
                        intryck. Med en tydligare progression i medlemsklubben och påminnelser som kommer 
                        när produkten faktiskt är på väg att ta slut blir återköpet det enkla valet. 
                        Lojalitet byggs i det lilla.
                      </p>
                    </div>
                  </div>
                )}

                {project.id === "2" && (
                  <div className="space-y-12">
                    {/* Subtitle */}
                    <div>
                      <p className="text-2xl md:text-3xl text-primary font-display italic mb-8">
                        Community-driven brand experience
                      </p>
                    </div>

                    {/* Brief */}
                    <div className="border-l-2 border-primary pl-8">
                      <p className="text-xl text-foreground font-body leading-relaxed">
                        Uppgiften var att ta fram ett koncept som stärker Fotografiskas relevans och varumärke 
                        hos framtida målgrupper genom ökat engagemang, inkludering och långsiktiga relationer. 
                        Fokus låg på att göra konst mer tillgänglig och meningsfull för unga vuxna i en tid 
                        av snabb samhällsförändring.
                      </p>
                    </div>

                    {/* Utmaning */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Utmaning</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Hur når vi nya generationer?</h3>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>
                          Hur kan Fotografiska växa sitt varumärke och nå nya generationer i en tid där 
                          traditionella museiformat riskerar att upplevas som dyra, otillgängliga och statiska?
                        </p>
                        <p>
                          Unga vuxna är konstant uppkopplade. 74 % upplever stress kopplat till skärmtid, 
                          samtidigt som omkring 60 % av unga (16–25) visar ett ökande intresse för kultur 
                          när den går att delta i tillsammans med andra. Trots detta väljs museer ofta bort.
                        </p>
                      </div>
                    </div>

                    {/* Insikt */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Insikt</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Kultur som identitet och tillhörighet</h3>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>
                          För framtida publik handlar kultur mindre om passiv konsumtion och mer om att få 
                          vara med och höra hemma någonstans. Unga vuxna som vår persona Lo (21) söker 
                          upplevelser som hjälper dem logga ut och umgås på riktigt. Museer upplevs ofta 
                          som platser för "andra".
                        </p>
                        <p>
                          Varumärken som bjuder in publiken som medskapare, snarare än betraktare, bygger 
                          starkare relationer och högre lojalitet över tid.
                        </p>
                      </div>
                    </div>

                    {/* Lösning */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Lösning</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Dear Future Me</h3>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>
                          Vi utvecklade <strong className="text-foreground">Dear Future Me</strong>, ett långsiktigt 
                          och community-drivet konstprojekt där Fotografiska vid sitt 15-årsjubileum bjuder in unga 
                          vuxna att dokumentera sin samtid med analoga engångskameror och personliga brev.
                        </p>
                        <p>
                          Deltagarna får i uppdrag att berätta om sig själva i 36 bilder. Materialet lämnas in 
                          via dropboxar runt om i Stockholm, och Fotografiska förvaltar innehållet som en tidskapsel.
                        </p>
                        <p className="text-foreground italic">
                          Efter 15 år öppnas kapseln i form av en jubileumsutställning, skapad av publiken själv.
                        </p>
                      </div>
                    </div>

                    {/* Strategiska byggstenar */}
                    <div className="bg-card border border-border p-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4 block">Strategiska byggstenar</span>
                      <ul className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span>Ett <strong className="text-foreground">fysiskt, analogt format</strong> som differentierar varumärket och skapar digital återhämtning</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">User-generated content</strong> som stärker räckvidd, äkthet och publikengagemang</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span>Ett <strong className="text-foreground">långsiktigt narrativ</strong> som bygger relation, förväntan och återkommande engagemang</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span>Ett <strong className="text-foreground">inkluderande uttryck</strong> som breddar målgruppen och sänker trösklar</span>
                        </li>
                      </ul>
                    </div>

                    {/* Min roll */}
                    <div className="bg-card border border-border p-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Min roll</span>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>Jag ansvarade för varumärkes- och growthstrategin i projektet: målgrupps- och insiktsarbete, hur konceptet skulle aktiveras i kanalerna samt hur engagemang och räckvidd skulle följas upp över tid.</p>
                        <p className="text-foreground italic">Platshållartext: fyll gärna på med dina exakta ansvarsområden.</p>
                      </div>
                    </div>

                    {/* Resultat */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Resultat & Lärdomar</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Konstprojekt som varumärkesstrategi</h3>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>
                          Konceptet fungerar som både konstprojekt och varumärkesstrategi. På kort sikt driver 
                          det uppmärksamhet och räckvidd kring jubileet. På lång sikt byggs ett community och 
                          ett emotionellt band till Fotografiska som håller i flera år.
                        </p>
                        <p className="text-foreground italic">
                          Caset visar hur kulturinstitutioner kan arbeta med growth och branding genom deltagande 
                          och långsiktig storytelling, snarare än traditionell kampanjlogik.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === "3" && (
                  <div className="space-y-12">
                    {/* Subtitle */}
                    <div>
                      <p className="text-2xl md:text-3xl text-primary font-display italic mb-8">
                        Paid Social & Growth Marketing Case
                      </p>
                    </div>

                    {/* Brief */}
                    <div className="border-l-2 border-primary pl-8">
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p className="text-xl text-foreground">
                          I detta case arbetade jag med DryPop som extern uppdragsgivare för att planera, 
                          producera och analysera annonsering i sociala medier.
                        </p>
                        <p>
                          Uppdraget omfattade hela paid social-processen: från målgruppsanalys och kreativ 
                          utveckling till kampanjuppsättning, A/B-testning, analys och optimering.
                        </p>
                        <p>
                          Målet var att skapa annonser som både respekterar varumärkets tonalitet och 
                          driver tydlig performance i Meta (och TikTok).
                        </p>
                      </div>
                    </div>

                    {/* Utmaning */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Utmaning</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">
                        Hur kan DryPop skapa annonser som sticker ut i flödet?
                      </h3>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        Utmaningen låg i att identifiera rätt målgrupper och formulera budskap som adresserar 
                        faktiska pain points. Sedan gällde det att testa vilket kreativt innehåll som presterar 
                        bäst, utan att kompromissa med varumärkets uttryck.
                      </p>
                    </div>

                    {/* Insikt */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Insikt</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">
                        Rätt kombination av målgrupp, format och tonalitet
                      </h3>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        I paid social vinner sällan det snyggaste budskapet. Det som avgör är att målgrupp, 
                        format och tonalitet träffar rätt tillsammans. Analysen visade att olika målgrupper 
                        reagerar fundamentalt olika på samma produkt, och att humor och rätt formatval ofta 
                        slår polerad reklam när kontexten stämmer.
                      </p>
                    </div>

                    {/* Lösning */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Lösning</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Datadrivet och iterativt arbetssätt</h3>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>
                          Jag arbetade datadrivet och iterativt genom hela processen. 
                          Två primära målgrupper identifierades:
                        </p>
                        <ul className="space-y-3 ml-4">
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-2">•</span>
                            <span><strong className="text-foreground">Barnfamiljer</strong>: fokus på hälsa, enkelhet och vardagslösningar</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-2">•</span>
                            <span><strong className="text-foreground">Friluftsmänniskor</strong>: fokus på funktion, packvänlighet och autenticitet</span>
                          </li>
                        </ul>
                        <p>
                          För varje målgrupp utvecklades flera kreativa uttryck och budskapsvinklar. 
                          Kampanjer sattes upp i Meta med trafik som kampanjmål och strukturerade A/B-tester:
                        </p>
                        <ul className="space-y-3 ml-4">
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-2">→</span>
                            <span>Lekfull vs. kommersiell kommunikation mot barnfamiljer</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-2">→</span>
                            <span>Video vs. stillbild mot friluftssegmentet</span>
                          </li>
                        </ul>
                        <p className="text-foreground italic">
                          Alla tester kördes parallellt med jämn budgetfördelning för att säkerställa 
                          jämförbar och tillförlitlig data.
                        </p>
                      </div>
                    </div>

                    {/* Strategiska byggstenar */}
                    <div className="bg-card border border-border p-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4 block">Strategiska byggstenar</span>
                      <ul className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">Datadriven målgruppssegmentering</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">Kreativa hypoteser</strong> testade genom A/B-experiment</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">Tydlig plattformsanpassning</strong> (format & copy)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span>Fokus på <strong className="text-foreground">performance-mått</strong> som CTR, CPC och räckvidd</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">Analys som grund</strong> för skalning och optimering</span>
                        </li>
                      </ul>
                    </div>

                    {/* Min roll */}
                    <div className="bg-card border border-border p-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Min roll</span>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>Jag ansvarade för hela paid social-processen: målgruppsanalys, kreativ utveckling, kampanjuppsättning i Meta, A/B-testning samt analys och löpande optimering.</p>
                        <p className="text-foreground italic">Platshållartext: fyll gärna på med dina exakta ansvarsområden.</p>
                      </div>
                    </div>

                    {/* Resultat */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Resultat & Lärdomar</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Data som styrde kreativ riktning</h3>
                      <ul className="space-y-3 text-muted-foreground font-body leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-2">•</span>
                          <span><strong className="text-foreground">Lekfull kommunikation</strong> mot barnfamiljer drev högre räckvidd och fler klick</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-2">•</span>
                          <span><strong className="text-foreground">Kommersiell kommunikation</strong> visade högre CTR och tydligare konverteringssignal</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-2">•</span>
                          <span><strong className="text-foreground">Video presterade markant bättre</strong> än stillbild för friluftsmålgruppen</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-2">•</span>
                          <span><strong className="text-foreground">Segmenterad kommunikation</strong> överträffade generiska budskap</span>
                        </li>
                      </ul>
                      <p className="text-foreground italic mt-6">
                        Caset bekräftade vikten av att låta data styra både kreativ riktning och budgetprioritering.
                      </p>
                    </div>

                    {/* Slutsats */}
                    <div className="bg-card border border-border p-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Slutsats</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Growth marketing i praktiken</h3>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>
                          Detta projekt gav praktisk erfarenhet av hela growth marketing-arbetssättet inom 
                          paid social: från strategi och kreativ produktion till kampanjuppsättning, analys 
                          och optimering.
                        </p>
                        <p className="text-foreground">Caset visar min förmåga att:</p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-2">•</span>
                            <span>arbeta strukturerat och datadrivet</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-2">•</span>
                            <span>formulera och testa hypoteser</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-2">•</span>
                            <span>analysera performance och dra affärsrelevanta slutsatser</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-2">•</span>
                            <span>balansera kreativitet med mätbara resultat</span>
                          </li>
                        </ul>
                        <p className="text-foreground italic mt-4">
                          Ett tydligt exempel på hur jag närmar mig growth marketing i praktiken: testa, 
                          lära och skala det som bevisat fungerar.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === "4" && (
                  <div className="space-y-12">
                    {/* Subtitle */}
                    <div>
                      <p className="text-2xl md:text-3xl text-primary font-display italic mb-4">
                        När Kexchoklad blev ett verktyg mot ensamhet
                      </p>
                      <p className="text-muted-foreground font-body text-sm tracking-wider uppercase">
                        Strategiskt case | Explore Sustainability 2025 | Berghs School of Communication
                      </p>
                    </div>

                    {/* Brief */}
                    <div className="border-l-2 border-primary pl-8">
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p className="text-xl text-foreground">
                          Inom ramen för kursen Business Unusual fick vi uppdraget att koppla ett etablerat, 
                          oväntat varumärke till ett samhällsproblem och skapa verklig nytta för människor, 
                          inte enbart en reklamkampanj.
                        </p>
                        <p>
                          Vi tilldelades Cloetta Kexchoklad och kategorin Public Health &amp; Welfare. En till synes 
                          osannolik kombination som krävde en kreativ brygga mellan vardagsgodis och samhällsnytta.
                        </p>
                        <p className="text-foreground italic">
                          Utmaningen: Hur kan en godisprodukt bidra till folkhälsan på ett trovärdigt, meningsfullt sätt?
                        </p>
                      </div>
                    </div>

                    {/* Utmaning */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Utmaning</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Sveriges växande ensamhetsproblem</h3>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>
                          Folkhälsomyndigheten pekar ut social isolering som en av vår tids stora folkhälsoutmaningar. 
                          Samtidigt visar RFSU att nästan var fjärde svensk inte haft sex den senaste månaden.
                        </p>
                        <p>
                          Unga vuxna vill träffas IRL, men modet att ta första steget saknas. Rädslan för 
                          avvisning, pandemins sociala avvänjning och dating-apparnas uttröttande effekt har 
                          skapat en generation som längtar efter närhet utan att veta hur den ska nås.
                        </p>
                      </div>
                    </div>

                    {/* Insikt */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Insikt</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Vilja utan verktyg</h3>
                      <ul className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">Vilja utan verktyg</strong>: unga vuxna vill knyta relationer IRL men saknar modet och verktygen att ta första steget</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">Digital trötthet</strong>: dating-appar skapar beroende men också utmattning; allt fler söker äkta, ofiltrerad kontakt</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">Rädslan dominerar</strong>: avvisningsrädsla är den största barriären, inte brist på intresse</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">Lek sänker tröskeln</strong>: lekfulla, odramatiska verktyg gör det skrämmande hanterbart</span>
                        </li>
                      </ul>
                    </div>

                    {/* Strategi / Lösning */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Lösning</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Från energisnack till social katalysator</h3>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>
                          Vi gjorde om mini-Kexchoklad från energisnack till social katalysator, ett konkret 
                          verktyg för att ta första steget. Genom att utnyttja den kulturella kopplingen till 
                          raggningsrepliken "Tjena, kexet" fick vi en trovärdig bro mellan varumärke och beteendeförändring.
                        </p>
                        <p className="text-foreground font-medium">Strategin vilar på tre pelare:</p>
                        <ul className="space-y-3 ml-4">
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-2">•</span>
                            <span>Normalisera flirten genom humor och nostalgi</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-2">•</span>
                            <span>Ge människor ett fysiskt verktyg som fördelar risken</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-2">•</span>
                            <span>Placera produkten där kontakt kan uppstå men sällan gör det</span>
                          </li>
                        </ul>
                        <p className="mt-4">
                          Kopplingen till <strong className="text-foreground">Business Unusual</strong> är tydlig: en godisproducent tar oväntat samhällsansvar. 
                          Kopplingen till <strong className="text-foreground">Public Health &amp; Welfare</strong> är forskningsgrundad. Fysisk närhet minskar stress, 
                          stärker immunförsvaret och fungerar som skyddsfaktor för psykisk ohälsa.
                        </p>
                      </div>
                    </div>

                    {/* Genomförande */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Genomförande</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Research & Kampanjfaser</h3>
                      <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
                        <div>
                          <p className="text-foreground font-medium mb-2">Research</p>
                          <p>
                            Analys av data från Internetstiftelsen, Folkhälsomyndigheten, RFSU och MUCF för att 
                            kartlägga ensamhetsproblematiken och identifiera beteendemönster.
                          </p>
                        </div>
                        <div>
                          <p className="text-foreground font-medium mb-3">Fyra kampanjfaser:</p>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-2">1.</span>
                              <span><strong className="text-foreground">TikTok-serie</strong>: creators testar klassiska raggningsrepliker IRL och dokumenterar genuina reaktioner</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-2">2.</span>
                              <span><strong className="text-foreground">OOH-kampanj</strong>: 90-talsestetik på affischer i barer, caféer och flygplatser</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-2">3.</span>
                              <span><strong className="text-foreground">Produktaktivering</strong>: limited edition-förpackningar i retrodesign placerade i sociala miljöer. Varje förpackning innehåller komplimang, raggningsreplik och kontaktfält</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-2">4.</span>
                              <span><strong className="text-foreground">Retail-lansering</strong>: QR-kod till kampanjsida med tips och community-innehåll</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Strategiska byggstenar */}
                    <div className="bg-card border border-border p-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4 block">Strategiska byggstenar</span>
                      <ul className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">Oväntat varumärkesansvar</strong>: från godis till social katalysator</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">Beteendedesign</strong>: verktyg som sänker tröskeln för handling</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">Kulturell relevans</strong>: nostalgisk estetik möter samtida problem</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">Flerkanalig aktivering</strong>: digital inspiration → fysisk handling</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">Skalbarhet</strong>: från pilot till samhällsrörelse</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <span><strong className="text-foreground">Långsiktig påverkan</strong>: bidrag till folkhälsa genom mänsklig närhet</span>
                        </li>
                      </ul>
                    </div>

                    {/* Min roll */}
                    <div className="bg-card border border-border p-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Min roll</span>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>Jag ansvarade för strategi och beteendedesign: insiktsarbete, målgruppsanalys samt hur konceptet skulle aktiveras och mätas.</p>
                        <p className="text-foreground italic">Platshållartext: fyll gärna på med dina exakta ansvarsområden.</p>
                      </div>
                    </div>

                    {/* Resultat / Insikter */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Resultat & Lärdomar</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Ett varumärke som äger ett beteende</h3>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>
                          Caset visar att ett godismärke kan äga ett beteende, inte bara ett smakögonblick. 
                          Genom att göra Kexchoklad till ett verktyg för första steget skapas en koppling 
                          mellan köptillfälle och social handling som går bortom traditionell reklam.
                        </p>
                        <p className="text-foreground italic">
                          Konceptet demonstrerar hur vardagsprodukter kan aktiveras för samhällsnytta utan 
                          att tappa kommersiell relevans.
                        </p>
                      </div>
                    </div>

                    {/* Lärdomar / Rekommendationer */}
                    <div className="bg-card border border-border p-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4 block">Lärdomar / Rekommendationer</span>
                      <div className="space-y-6">
                        <div>
                          <p className="text-foreground font-medium mb-3">Strategiska lärdomar</p>
                          <ul className="space-y-2 text-muted-foreground font-body leading-relaxed">
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-2">•</span>
                              <span>Beteendeförändring kräver både attityd och konkreta verktyg</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-2">•</span>
                              <span>Humor och låg tröskel är avgörande i känsliga frågor</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-2">•</span>
                              <span>Kulturell autenticitet slår generisk kommunikation</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-foreground font-medium mb-3">Framtida utveckling</p>
                          <ul className="space-y-2 text-muted-foreground font-body leading-relaxed">
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-2">•</span>
                              <span>Pilottestning med mätning av faktisk beteendeförändring</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-2">•</span>
                              <span>Partnerskap med folkhälsoaktörer</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-2">•</span>
                              <span>Expansion till universitet, festivaler och arbetsplatser</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Growth-potential */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Growth-potential</span>
                      <h3 className="font-display text-2xl text-foreground mb-4">Skalbarhet & Mätbarhet</h3>
                      <ul className="space-y-3 text-muted-foreground font-body leading-relaxed">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-2">•</span>
                          <span>Community-building och success stories</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-2">•</span>
                          <span>UGC-kampanjer som stärker social proof</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-2">•</span>
                          <span>Mätbara KPIs: interaktioner, relationer påbörjade, upplevd mod-ökning</span>
                        </li>
                      </ul>
                    </div>

                    {/* Footer */}
                    <div className="pt-8 border-t border-border">
                      <p className="text-muted-foreground font-body text-sm text-center italic">
                        Explore Sustainability 2025 | Berghs School of Communication
                      </p>
                    </div>
                  </div>
                )}

                {/* Default content for other projects */}
                {project.id === "5" && (
                  <div className="space-y-12">
                    {/* Utmaningen */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Utmaning</span>
                      <h2 className="font-display text-2xl text-foreground mb-4">
                        Teknikprogrammet har ett imageproblem. Inte ett kvalitetsproblem.
                      </h2>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        NTI Gymnasiet utbildar för yrken som kommer vara några av de mest efterfrågade i Sverige
                        framöver. Ändå väljer många bort programmet redan innan de tittat närmare på det. Det
                        uppfattas som smalt, som något för dem som redan kodar, och framför allt som något för
                        killar. Tidigare försök att bredda bilden hade landat i ytliga grepp som inte bet.
                      </p>
                    </div>

                    {/* Insikten */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Insikt</span>
                      <h2 className="font-display text-2xl text-foreground mb-4">
                        Unga väljer inte ett program. De väljer en identitet.
                      </h2>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        När vi pratade med högstadieelever handlade svaren nästan aldrig om utbildningen i sig. De
                        handlade om självbild: "det där är inte jag". Där avgörs valet, långt innan någon läser en
                        programbeskrivning.
                      </p>
                    </div>

                    {/* Rörelsen */}
                    <div className="bg-card border border-border p-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-6 block">Rörelsen</span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                          <span className="text-muted-foreground font-body text-xs tracking-[0.3em] uppercase mb-3 block">Från</span>
                          <p className="font-display text-2xl md:text-3xl text-muted-foreground">"Det där är inte jag."</p>
                        </div>
                        <div>
                          <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Till</span>
                          <p className="font-display text-2xl md:text-3xl text-foreground">"Det där är precis jag."</p>
                        </div>
                      </div>
                    </div>

                    {/* Konceptet */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Lösning — Konceptet</span>
                      <h2 className="font-display text-2xl text-foreground mb-4">The Archive</h2>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>
                          Alla har idéer som aldrig blir av. Skisser i marginalen, halvfärdiga anteckningar, en
                          tanke i mobilens utkast. De flesta av dem samlar damm.
                        </p>
                        <p>
                          The Archive gör det osynliga synligt: ett arkiv av riktiga, ofärdiga idéer från unga –
                          och NTI som platsen där de faktiskt kan byggas. Dammet står för potential, inte för
                          misslyckande.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div>
                          <h3 className="font-display text-xl text-foreground mb-2">Processen framför resultatet</h3>
                          <p className="text-muted-foreground font-body text-sm leading-relaxed">Det halvfärdiga är värt att visa.</p>
                        </div>
                        <div>
                          <h3 className="font-display text-xl text-foreground mb-2">Eleven är hjälten</h3>
                          <p className="text-muted-foreground font-body text-sm leading-relaxed">Inte skolan.</p>
                        </div>
                        <div>
                          <h3 className="font-display text-xl text-foreground mb-2">Damm är potential</h3>
                          <p className="text-muted-foreground font-body text-sm leading-relaxed">
                            Idén finns redan, den behöver bara någonstans att ta vägen.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Uttryck */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Lösning — Uttryck</span>
                      <h2 className="font-display text-2xl text-foreground mb-4">
                        Ingen klassisk skolreklam. Det ska kännas som ett arkiv av riktiga idéer.
                      </h2>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        Korniga texturer, handskriven text, post-its och gula överstrykningar mot en palett i
                        marinblå, ben och senapsgult.
                      </p>
                    </div>

                    {/* Aktivering */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Lösning — Aktivering</span>
                      <h2 className="font-display text-2xl text-foreground mb-4">Archive Wall på gymnasiemässan</h2>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        Konceptet lever i det fysiska rummet lika mycket som i flödet. En Archive Wall på
                        gymnasiemässan där besökare skriver ner en idé de aldrig gjort verklighet och lämnar den
                        på väggen – och tar med sig tanken att den faktiskt går att bygga.
                      </p>
                    </div>

                    {/* Min roll */}
                    <div className="bg-card border border-border p-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Min roll</span>
                      <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                        <p>
                          Jag ansvarade för growth marketing i projektet: kanal- och mediestrategi, kartläggning
                          av hur NTI och konkurrerande skolor faktiskt kommunicerar idag, målgrupps- och
                          segmenteringsarbete samt hur konceptet skulle aktiveras och följas upp över kampanjens
                          faser.
                        </p>
                        <p className="text-foreground italic">
                          Kort sagt: att se till att en stark idé också fick en väg ut till rätt människor vid
                          rätt tillfälle.
                        </p>
                      </div>
                    </div>

                    {/* Resultat & Lärdomar */}
                    <div className="border-l-2 border-primary pl-8">
                      <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-3 block">Resultat & Lärdomar</span>
                      <h2 className="font-display text-2xl text-foreground mb-4">Ett koncept som gör teknik igenkännbart</h2>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        Konceptet flyttar fokus från programmets innehåll till elevens självbild – och gör
                        teknikprogrammet till en plats där idéer faktiskt blir av. Lärdomen: när valet styrs av
                        identitet räcker det inte att beskriva utbildningen, den måste kännas igen.
                      </p>
                    </div>


                  </div>
                )}

                {/* Default content for other projects */}
                {!["1", "2", "3", "4", "5"].includes(project.id) && (
                  <div className="space-y-8">
                    <p className="text-xl text-foreground font-body leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                )}

                {/* Så skulle framgång mätas */}
                {project.kpis && project.kpis.length > 0 && (
                  <div className="mt-12 border border-primary/40 p-8">
                    <span className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4 block">
                      Så skulle framgång mätas
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.kpis.map((kpi) => (
                        <li key={kpi} className="flex items-start gap-3 text-muted-foreground font-body">
                          <span className="text-primary mt-1">→</span>
                          <span>{kpi}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </motion.div>

              {/* Sidebar */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }} className="lg:col-span-4">
                <div className="bg-card border border-border p-8 lg:sticky lg:top-32">
                  <a href={`mailto:${personalInfo.email}`} className="group flex items-center justify-between gap-4 min-h-[44px] text-primary hover:text-foreground transition-colors">
                    <span className="font-body text-sm tracking-wider uppercase">Diskutera projektet</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Nästa projekt */}
        {nextProject && (
          <div className="px-6 md:px-12 lg:px-24 mt-20">
            <div className="max-w-7xl mx-auto border-t border-border pt-10">
              <Link
                to={`/projekt/${nextProject.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <span className="text-primary font-body text-xs tracking-[0.3em] uppercase block mb-2">
                    Nästa projekt
                  </span>
                  <span className="font-display text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 min-h-[44px] text-primary font-body text-sm tracking-wider uppercase">
                  Nästa projekt <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>;
};
export default ProjectDetail;