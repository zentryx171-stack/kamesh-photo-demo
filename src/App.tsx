/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import GhostFibers from './GhostFibers';

export default function App() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'about' | 'inquire'>('portfolio');
  const [lightboxImage, setLightboxImage] = useState<{ title: string; subtitle: string; src: string; alt: string } | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    clientNames: '',
    clientEmail: '',
    clientPhone: '',
    eventType: 'luxury-wedding',
    eventDate: '',
    eventLocation: '',
    eventCountry: 'Italy',
    guestScope: '120 guests across 3 days',
    experiencePackage: 'grand_celebration',
    mediumPreference: 'hybrid_film',
    clientVision: '',
    eventPlanner: '',
    investmentRange: '25k_40k'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1000);
  };

  const resetProposalForm = () => {
    setFormSubmitted(false);
    setFormData({
      clientNames: '',
      clientEmail: '',
      clientPhone: '',
      eventType: 'luxury-wedding',
      eventDate: '',
      eventLocation: '',
      eventCountry: 'Italy',
      guestScope: '120 guests across 3 days',
      experiencePackage: 'grand_celebration',
      mediumPreference: 'hybrid_film',
      clientVision: '',
      eventPlanner: '',
      investmentRange: '25k_40k'
    });
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md antialiased selection:bg-secondary selection:text-on-secondary relative">
      <GhostFibers />
      {/* Top Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-surface-container-high">
        <div className="h-20 w-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActiveTab('portfolio')}>
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-secondary border border-secondary/30">
              <span className="font-headline-sm text-sm font-semibold italic">K</span>
            </div>
            <span className="font-headline-sm text-lg tracking-widest uppercase text-primary">Kamesh</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`font-label-lg uppercase tracking-widest text-xs transition-colors py-1 ${
                activeTab === 'portfolio' ? 'text-secondary border-b border-secondary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`font-label-lg uppercase tracking-widest text-xs transition-colors py-1 ${
                activeTab === 'about' ? 'text-secondary border-b border-secondary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              About &amp; Philosophy
            </button>
            <button
              onClick={() => setActiveTab('inquire')}
              className={`font-label-lg uppercase tracking-widest text-xs transition-colors py-1 ${
                activeTab === 'inquire' ? 'text-secondary border-b border-secondary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Inquire / Proposal
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('inquire')}
              className="hidden sm:inline-flex items-center justify-center font-label-md text-xs uppercase px-5 py-2.5 border border-secondary text-primary hover:bg-secondary hover:text-on-secondary transition-colors duration-300 tracking-widest"
            >
              Book a Commission
            </button>
            <div className="w-9 h-9 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-background">
        {/* Ambient Glows */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-[25%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-secondary-container/10 blur-[130px] opacity-40"></div>
          <div className="absolute top-[40%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-surface-container-highest/20 blur-[140px] opacity-30"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-on-secondary-fixed-variant/5 blur-[160px] opacity-25"></div>
        </div>

        {/* TAB 1: PORTFOLIO & HOME */}
        {activeTab === 'portfolio' && (
          <div className="flex flex-col w-full relative z-10">
            {/* HERO SECTION */}
            <section className="relative w-full min-h-[92vh] flex flex-col justify-between -mt-20 pt-24 pb-12 px-6 md:px-12 lg:px-16 bg-transparent overflow-hidden">
              <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] pointer-events-none z-0"></div>

              <div className="relative z-10 max-w-5xl my-auto py-12 md:py-16">
                <h1 className="font-headline-xl text-4xl md:text-6xl lg:text-[5rem] tracking-tight text-primary font-light mb-2 max-w-4xl uppercase">
                  Kamesh Photography
                </h1>
                <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl font-light leading-relaxed mt-4">
                  Dindigul, Tamil Nadu. Specialized in all types of professional photography, wedding photo shoots, portrait sessions, and cinematic event coverages.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setActiveTab('inquire')}
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-md text-xs uppercase tracking-[0.22em] transition-all duration-300 hover:bg-secondary hover:text-on-secondary shadow-lg cursor-pointer"
                  >
                    Request Commission
                  </button>
                  <button
                    onClick={() => setActiveTab('about')}
                    className="inline-flex items-center justify-center px-7 py-4 bg-surface-container-lowest/60 backdrop-blur-md text-primary font-label-md text-xs uppercase tracking-[0.22em] transition-all duration-300 hover:bg-surface-container-high/80 cursor-pointer"
                  >
                    The Craft
                  </button>
                </div>
              </div>

            </section>

            {/* PHILOSOPHY & CRAFT SECTION */}
            <section className="relative w-full py-28 px-6 md:px-12 lg:px-16 bg-surface">
              <div className="max-w-6xl mx-auto mb-20 md:mb-28">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-surface-container-high">
                  <div>
                    <span className="font-label-sm text-xs uppercase tracking-[0.25em] text-secondary">Atelier Study</span>
                    <h2 className="font-headline-xl text-3xl md:text-4xl text-primary mt-2">The Philosophy of Modern Heirloom</h2>
                  </div>
                  <p className="font-body-md text-sm text-on-surface-variant max-w-md font-light">
                    An intentional communion of haute couture refinement, natural cinema light, and unflinching documentary truth.
                  </p>
                </div>
              </div>

              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-5 flex flex-col gap-10">
                  <div
                    onClick={() => setLightboxImage({
                      title: "Atelier Director",
                      subtitle: "Silver Gelatin · Studio",
                      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa2M9QcnHTnMbi6qmxIo93xNgzw6pnAxyvwnP2YK__RMHx3ogaJzhCgQ4b4jZn2EqXwpxtRJIpWUT-zau22SzHI_b59BfdLTLkfNzS7Ez3ax7b0DQ07etGiqCPNLA0DrLeWQwoNtcAguNO70HDLfS0bbIIMOeGYdyCF3HEEdJiVHMYSvPmWk6rAIU8-X1fgOGY8lOVFNw5XPbXP0IhseuOvvAucrGVYRjpL3Hq02xX0jY2O719Z5nq",
                      alt: "Lead artist in private atelier studio"
                    })}
                    className="relative group bg-surface-container-lowest p-2 shadow-2xl overflow-hidden cursor-pointer"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-surface-container">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa2M9QcnHTnMbi6qmxIo93xNgzw6pnAxyvwnP2YK__RMHx3ogaJzhCgQ4b4jZn2EqXwpxtRJIpWUT-zau22SzHI_b59BfdLTLkfNzS7Ez3ax7b0DQ07etGiqCPNLA0DrLeWQwoNtcAguNO70HDLfS0bbIIMOeGYdyCF3HEEdJiVHMYSvPmWk6rAIU8-X1fgOGY8lOVFNw5XPbXP0IhseuOvvAucrGVYRjpL3Hq02xX0jY2O719Z5nq"
                        alt="Lead artist in private atelier studio holding medium format camera"
                        className="w-full h-full object-cover grayscale contrast-[1.05] brightness-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                    </div>
                    <div className="pt-4 pb-2 px-3 flex justify-between items-center text-on-surface-variant">
                      <span className="font-label-sm text-xs tracking-widest uppercase">Atelier Director (Click to View)</span>
                      <span className="font-label-sm text-xs uppercase tracking-widest text-outline">Silver Gelatin</span>
                    </div>
                  </div>

                  <div className="space-y-6 text-on-surface-variant font-body-md text-sm leading-relaxed">
                    <p className="first-letter:font-headline-xl first-letter:text-secondary first-letter:text-5xl first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                      Every celebration holds an architectural cadence—a silent dialogue between the room, the garments, and the unfiltered pulse of human connection. We eschew staged choreography in favor of quiet observation.
                    </p>
                    <p>
                      Equipped with 35mm and 120mm medium-format rollfilm alongside cutting-edge sensors, our studio works strictly with available ambient illumination, creating tactile frames that resonate decades after the final glass is poured.
                    </p>
                  </div>

                  <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-surface-container-high">
                    <div>
                      <div className="font-headline-sm text-xl text-secondary">120 &amp; 35mm</div>
                      <p className="font-label-sm text-xs uppercase tracking-wider text-outline mt-1">Archival Roll Film</p>
                    </div>
                    <div>
                      <div className="font-headline-sm text-xl text-secondary">Naturalist</div>
                      <p className="font-label-sm text-xs uppercase tracking-wider text-outline mt-1">Light Sculpting</p>
                    </div>
                    <div>
                      <div className="font-headline-sm text-xl text-secondary">Handmade</div>
                      <p className="font-label-sm text-xs uppercase tracking-wider text-outline mt-1">Linen Bound Books</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-12">
                  <div
                    onClick={() => setLightboxImage({
                      title: "Couture Silhouette & Veil",
                      subtitle: "Villa Balbiano · Archivio",
                      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYHSRtnLwqcg2vz-IuN9n6T5ZBSCPKzt6rdzAMx1-z-MbkcTiIBsQTVNK8TK5rYzVyNGpgTKrPdoPQRzZ4Hap2ZNsEib2J_DOVyrSWejUM_U1Qz7sKkXKfsmTeIVlzR5At3RI_xwthcBl9XQ_rB5w0TI8Jnmk_14g5SdxzOVRRlLk2txfrPcXjRFk-k_d8tKxuSscF6wQtFp86ugcc8a8PckAMygdD8slJ-aLhTSTBfMtagc28ML3g",
                      alt: "Haute couture bride in French lace veil"
                    })}
                    className="relative bg-surface-container-lowest p-2 shadow-2xl cursor-pointer group"
                  >
                    <div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-surface-container">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYHSRtnLwqcg2vz-IuN9n6T5ZBSCPKzt6rdzAMx1-z-MbkcTiIBsQTVNK8TK5rYzVyNGpgTKrPdoPQRzZ4Hap2ZNsEib2J_DOVyrSWejUM_U1Qz7sKkXKfsmTeIVlzR5At3RI_xwthcBl9XQ_rB5w0TI8Jnk_14g5SdxzOVRRlLk2txfrPcXjRFk-k_d8tKxuSscF6wQtFp86ugcc8a8PckAMygdD8slJ-aLhTSTBfMtagc28ML3g"
                        alt="Haute couture bride in French lace veil in monochromatic natural light"
                        className="w-full h-full object-cover object-center filter grayscale contrast-[1.08] group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                    </div>
                    <div className="p-4 flex items-center justify-between text-on-surface-variant">
                      <span className="font-headline-sm text-xl text-primary font-normal italic">Couture Silhouette &amp; Veil (Click to Expand)</span>
                      <span className="font-label-sm text-xs uppercase tracking-widest text-secondary">Villa Balbiano</span>
                    </div>
                  </div>

                  <div className="flex flex-col divide-y divide-surface-container-high">
                    <div className="py-6 group">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-xs uppercase tracking-[0.2em] text-secondary">01 / Signature Discipline</span>
                        <span className="material-symbols-outlined text-outline-variant">north_east</span>
                      </div>
                      <h3 className="font-headline-md text-2xl text-primary mt-2">Editorial Weddings &amp; Multi-Day Weekends</h3>
                      <p className="font-body-sm text-sm text-on-surface-variant mt-2 font-light">
                        Comprehensive visual documentation across Welcome Soirées, ceremonies, and private dawn excursions throughout Europe, North America, and Japan.
                      </p>
                    </div>

                    <div className="py-6 group">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-xs uppercase tracking-[0.2em] text-secondary">02 / Intimate Commissions</span>
                        <span className="material-symbols-outlined text-outline-variant">north_east</span>
                      </div>
                      <h3 className="font-headline-md text-2xl text-primary mt-2">Destination Elopements &amp; Sanctuaries</h3>
                      <p className="font-body-sm text-sm text-on-surface-variant mt-2 font-light">
                        Unobtrusive, cinematic presence tailored for private celebrations in secluded villas, historic palazzos, and dramatic coastlines.
                      </p>
                    </div>

                    <div className="py-6 group">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-xs uppercase tracking-[0.2em] text-secondary">03 / Studio Monograph</span>
                        <span className="material-symbols-outlined text-outline-variant">north_east</span>
                      </div>
                      <h3 className="font-headline-md text-2xl text-primary mt-2">Fine Art Portraiture &amp; Bespoke Albums</h3>
                      <p className="font-body-sm text-sm text-on-surface-variant mt-2 font-light">
                        Piezography museum rag prints, bespoke silk binding crafted in Florence, and editorial portrait sessions for private collections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: ABOUT & PHILOSOPHY */}
        {activeTab === 'about' && (
          <div className="flex flex-col w-full relative z-10 py-16 px-6 md:px-12 lg:px-16 max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <span className="font-label-sm text-xs uppercase tracking-[0.25em] text-secondary">Atelier Monograph</span>
              <h1 className="font-headline-xl text-4xl md:text-5xl text-primary mt-2">About &amp; Artistic Philosophy</h1>
              <p className="font-body-lg text-base text-on-surface-variant max-w-2xl mx-auto mt-4 font-light">
                Operating between Paris and Lake Como, Kamesh Studio serves an international clientele seeking uncompromising aesthetic discipline and emotional truth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6 text-on-surface-variant font-body-md text-base leading-relaxed">
                <h3 className="font-headline-md text-2xl text-primary">The Pursuit of Permanent Legacy</h3>
                <p>
                  In an era dominated by instantaneous digital volume, our studio champions the deliberate slowing down of time. We believe that true luxury lies in restraint, tactile craftsmanship, and uncompromising personal attention.
                </p>
                <p>
                  Every commission is approached not as a vendor contract, but as an intimate documentary collaboration. We spend days with families, understanding the subtle cadence of gestures, inherited heirloom pieces, and architectural environments.
                </p>
              </div>
              <div className="bg-surface-container p-4 rounded-2xl shadow-xl">
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6y4Md-cZWCmnfhV_k_1539AO2xU-qPBblAhr_8M2kjxzTFUkdtCKgIywpl8G3KuvM-YngDBSffG-zyXLJRTNazbOZc4RPNtfJGqCgazBNImGBGuAmB6wjNaeDubNEsd1Z37-SFaY75qaKk5vxE1kc47GVERSag92uTQen3ss9JnhgghFeY9ldZ8rIWo9sKr9k7tGwnrp4mTELsKgQll3-W5L97G0M0H_KUiSHgB6e6XAZPLSprYlc"
                    alt="Tuscan Splendor at Dusk"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INQUIRE / PROPOSAL */}
        {activeTab === 'inquire' && (
          <section className="relative w-full py-20 px-6 md:px-12 lg:px-16 bg-surface-container-lowest overflow-hidden" id="proposal">
            <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
              <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-secondary-container blur-[140px]"></div>
              <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-surface-container-highest blur-[160px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-label-md text-xs uppercase tracking-[0.28em] text-secondary">Limited Archive 2025—2026</span>
                <h2 className="font-headline-xl text-3xl md:text-5xl text-primary mt-3">Commission an Experience</h2>
                <p className="font-body-md text-sm md:text-base text-on-surface-variant mt-3 max-w-xl mx-auto font-light">
                  We accept a restricted number of commissions per season to ensure unparalleled focus and creative integrity for each heirloom story.
                </p>
              </div>

              <div className="backdrop-blur-2xl bg-white/[0.04] border border-white/[0.12] shadow-2xl rounded-2xl p-8 md:p-14">
                {!formSubmitted ? (
                  <form onSubmit={handleProposalSubmit} className="space-y-8">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-label-sm text-xs uppercase tracking-[0.2em] text-on-surface-variant" htmlFor="clientNames">
                          Full Names of Couple or Subject <span className="text-secondary">*</span>
                        </label>
                        <input
                          type="text"
                          id="clientNames"
                          name="clientNames"
                          value={formData.clientNames}
                          onChange={handleInputChange}
                          placeholder="e.g. Eleanor Vance &amp; Julian Rossi"
                          required
                          className="w-full bg-surface-container-lowest/80 border border-outline-variant/65 rounded px-4 py-3.5 text-primary placeholder:text-outline font-body-md focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-label-sm text-xs uppercase tracking-[0.2em] text-on-surface-variant" htmlFor="clientEmail">
                          Email Address <span className="text-secondary">*</span>
                        </label>
                        <input
                          type="email"
                          id="clientEmail"
                          name="clientEmail"
                          value={formData.clientEmail}
                          onChange={handleInputChange}
                          placeholder="eleanor@atelier.com"
                          required
                          className="w-full bg-surface-container-lowest/80 border border-outline-variant/65 rounded px-4 py-3.5 text-primary placeholder:text-outline font-body-md focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-label-sm text-xs uppercase tracking-[0.2em] text-on-surface-variant" htmlFor="clientPhone">
                          Direct Telephone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="clientPhone"
                          name="clientPhone"
                          value={formData.clientPhone}
                          onChange={handleInputChange}
                          placeholder="+39 02 8900 1234"
                          className="w-full bg-surface-container-lowest/80 border border-outline-variant/65 rounded px-4 py-3.5 text-primary placeholder:text-outline font-body-md focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-label-sm text-xs uppercase tracking-[0.2em] text-on-surface-variant" htmlFor="eventType">
                          Commission Category <span className="text-secondary">*</span>
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-surface-container-lowest/80 border border-outline-variant/65 rounded px-4 py-3.5 text-primary font-body-md focus:outline-none focus:border-secondary transition-colors cursor-pointer"
                        >
                          <option value="luxury-wedding" className="bg-surface-container">Luxury Multi-Day Wedding Celebration</option>
                          <option value="destination-elopement" className="bg-surface-container">Intimate Destination Elopement</option>
                          <option value="private-portraiture" className="bg-surface-container">Fine Art Private Portraiture</option>
                          <option value="editorial-fashion" className="bg-surface-container">Editorial / Fashion Commission</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-label-sm text-xs uppercase tracking-[0.2em] text-on-surface-variant" htmlFor="eventDate">
                          Approximate Date or Season <span className="text-secondary">*</span>
                        </label>
                        <input
                          type="text"
                          id="eventDate"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          placeholder="e.g. September 2025 or Autumn"
                          required
                          className="w-full bg-surface-container-lowest/80 border border-outline-variant/65 rounded px-4 py-3.5 text-primary placeholder:text-outline font-body-md focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-label-sm text-xs uppercase tracking-[0.2em] text-on-surface-variant" htmlFor="eventLocation">
                          Location &amp; Venue <span className="text-secondary">*</span>
                        </label>
                        <input
                          type="text"
                          id="eventLocation"
                          name="eventLocation"
                          value={formData.eventLocation}
                          onChange={handleInputChange}
                          placeholder="e.g. Villa d'Este, Lake Como, Italy"
                          required
                          className="w-full bg-surface-container-lowest/80 border border-outline-variant/65 rounded px-4 py-3.5 text-primary placeholder:text-outline font-body-md focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-label-sm text-xs uppercase tracking-[0.2em] text-on-surface-variant" htmlFor="guestScope">
                          Estimated Guest Count &amp; Scale
                        </label>
                        <input
                          type="text"
                          id="guestScope"
                          name="guestScope"
                          value={formData.guestScope}
                          onChange={handleInputChange}
                          placeholder="e.g. 120 guests across 3 days"
                          className="w-full bg-surface-container-lowest/80 border border-outline-variant/65 rounded px-4 py-3.5 text-primary placeholder:text-outline font-body-md focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-label-sm text-xs uppercase tracking-[0.2em] text-on-surface-variant" htmlFor="investmentRange">
                          Anticipated Photography Budget
                        </label>
                        <select
                          id="investmentRange"
                          name="investmentRange"
                          value={formData.investmentRange}
                          onChange={handleInputChange}
                          className="w-full bg-surface-container-lowest/80 border border-outline-variant/65 rounded px-4 py-3.5 text-primary font-body-md focus:outline-none focus:border-secondary transition-colors"
                        >
                          <option value="15k_25k" className="bg-surface-container">€15,000 – €25,000</option>
                          <option value="25k_40k" className="bg-surface-container">€25,000 – €40,000</option>
                          <option value="40k_plus" className="bg-surface-container">€40,000 + (Multi-Day Destination)</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 5 */}
                    <div className="flex flex-col gap-2">
                      <label className="font-label-sm text-xs uppercase tracking-[0.2em] text-on-surface-variant" htmlFor="clientVision">
                        Share Your Story &amp; Aesthetic Vision <span className="text-secondary">*</span>
                      </label>
                      <textarea
                        id="clientVision"
                        name="clientVision"
                        rows={4}
                        value={formData.clientVision}
                        onChange={handleInputChange}
                        placeholder="Tell us about the atmosphere you are curating, wardrobe intentions, architectural details, and what drawing you to our work..."
                        required
                        className="w-full bg-surface-container-lowest/80 border border-outline-variant/65 rounded p-4 text-primary placeholder:text-outline font-body-md focus:outline-none focus:border-secondary transition-colors resize-none"
                      ></textarea>
                    </div>

                    {/* Submit & Discretion Notice */}
                    <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-3 text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary text-[20px]">lock</span>
                        <span className="font-label-sm text-xs tracking-wider uppercase">
                          Discreet, thoughtful responses within 48 business hours.
                        </span>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-10 py-4 bg-primary text-on-primary font-label-md text-xs uppercase tracking-[0.25em] transition-all duration-300 hover:bg-secondary hover:text-on-secondary shadow-xl active:scale-[0.98] cursor-pointer"
                      >
                        {isSubmitting ? 'Transmitting Proposal...' : 'Submit Proposal Request'}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-surface-container-high text-secondary flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-[32px]">mark_email_read</span>
                    </div>
                    <span className="font-label-md text-xs uppercase text-secondary tracking-widest mb-2">Transmission Received</span>
                    <h3 className="font-headline-xl text-3xl text-primary mb-3">Gratitude for Your Trust</h3>
                    <p className="font-body-md text-sm text-on-surface-variant max-w-md font-light mb-8">
                      Your inquiry has been placed into the atelier review queue. Kamesh personally evaluates every event portfolio to guarantee alignment with our seasonal schedule. You will receive a bespoke correspondence within 48 hours.
                    </p>
                    <button
                      onClick={resetProposalForm}
                      type="button"
                      className="px-8 py-3 bg-surface-container text-primary hover:bg-surface-container-high transition-colors font-label-sm text-xs uppercase tracking-wider rounded-lg cursor-pointer"
                    >
                      Return to Dossier
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-on-surface-variant text-xs font-label-sm uppercase tracking-[0.22em] border-t border-surface-container-high pt-6">
                <span>Direct Atelier: studio@kameshphoto.com</span>
                <span className="mt-2 sm:mt-0">Dindigul, Tamil Nadu</span>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-surface-container-lowest p-4 rounded-2xl border border-surface-container-high shadow-2xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-surface-container text-primary flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-4">
              <img src={lightboxImage.src} alt={lightboxImage.alt} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between px-2">
              <div>
                <h3 className="font-headline-sm text-xl text-primary italic">{lightboxImage.title}</h3>
                <p className="font-label-sm text-xs text-secondary uppercase tracking-widest">{lightboxImage.subtitle}</p>
              </div>
              <span className="text-xs text-outline uppercase tracking-wider">Archival Series · High Resolution</span>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high py-16 mt-20">
        <div className="w-full px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-headline-sm text-lg tracking-wider uppercase text-primary">Kamesh Photography</span>
            <p className="font-body-sm text-xs text-on-surface-variant">Dindigul, Tamil Nadu</p>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors">Instagram</a>
            <a href="#" className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors">Journal</a>
            <a href="#" className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors">Archive</a>
          </div>
          <div className="font-label-sm text-xs uppercase tracking-widest text-outline">© 2026 Kamesh Studio. All Rights Reserved.</div>
        </div>
      </footer>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 h-16 bg-surface-container-lowest/90 backdrop-blur-xl border-t border-surface-container-high flex items-center justify-around px-6">
        <button
          onClick={() => setActiveTab('portfolio')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'portfolio' ? 'text-secondary' : 'text-on-surface-variant hover:text-on-surface'}`}
        >
          <span className="material-symbols-outlined text-[20px]">grid_view</span>
          <span className="font-label-sm text-[10px] uppercase">Portfolio</span>
        </button>
        <button
          onClick={() => setActiveTab('about')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'about' ? 'text-secondary' : 'text-on-surface-variant hover:text-on-surface'}`}
        >
          <span className="material-symbols-outlined text-[20px]">auto_stories</span>
          <span className="font-label-sm text-[10px] uppercase">Philosophy</span>
        </button>
        <button
          onClick={() => setActiveTab('inquire')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'inquire' ? 'text-secondary' : 'text-on-surface-variant hover:text-on-surface'}`}
        >
          <span className="material-symbols-outlined text-[20px]">mail</span>
          <span className="font-label-sm text-[10px] uppercase">Inquire</span>
        </button>
      </nav>
    </div>
  );
}
