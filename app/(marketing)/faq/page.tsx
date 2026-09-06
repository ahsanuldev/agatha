'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/button';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const generalFaqs: FaqItem[] = [
  {
    id: 'general-1',
    question: 'WHAT IS A SHORT/LONG TERM GOAL OF YOURS?',
    answer:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
  },
  {
    id: 'general-2',
    question: "WHAT IS THE LONGEST THAT YOU'VE STAYED AWAKE FOR?",
    answer:
      'Deleniti lucilius appellantur pri at, nullam putent sea ad. Mutat liber saperet ex eum, omnium aliquando an qui. An pro solum iudico, per ea congue soluta saperet. Ex exerci commodo apeirian per, at invidunt mnesarchum pro. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente.',
  },
  {
    id: 'general-3',
    question: 'HOW WOULD YOU KNOW IF YOU WERE IN LOVE?',
    answer:
      'Usu in labore bonorum. Te est dicant viderer, mei ea verear detraxit consulatu. Mei graeco omnesque ex, case oratio detraxit vim ex, has eu aeque similique. Et prima luptatum dissentias pro. Legere percipit his id. At vidit facilis theophrastus per.',
  },
  {
    id: 'general-4',
    question: 'DO YOU HAVE ANY PETS?',
    answer:
      'At vidit facilis theophrastus per. Nec eu tale graece aeterno, ex sint nominati reformidans vim. Quidam eleifend ei eum, alienum voluptatibus ad vix. Justo quando ex nec. Tation aliquid eam ne, eu modo illud mei, possim nonumes cum ad.',
  },
  {
    id: 'general-5',
    question: 'WHAT IS YOUR LEAST FAVORITE CHORE?',
    answer:
      'Mea solet eloquentiam ad, nec at erat munere maluisset, in errem aliquam qui. Te mei ceteros maiorum, erant suavitate deseruisse ea nam, ea ferri convenire eam. Mel et malorum ullamcorper, mediocrem dissentias nec ex, vel te feugait consulatu.',
  },
];

const presaleFaqs: FaqItem[] = [
  {
    id: 'presale-1',
    question: 'WHAT WAS YOUR FAVORITE CARTOON?',
    answer:
      'Ex luptatum vituperata sit, no graece comprehensam mea. Te duo luptatum insolens maluisset, ius te dicam prodesset. Idque adipisci adipiscing ea vix, eu sea audire scriptorem. Qui eu accusamus moderatius, at pericula persecuti moderatius pri.',
  },
  {
    id: 'presale-2',
    question: 'WHAT IS YOUR FAVORITE HOLIDAY?',
    answer:
      'Movet possit eum ea. Pri ne odio tation. At detraxit menandri mea, pri latine conceptam an. An quod torquatos gloriatur eos, est suas illum libris no, graeco tincidunt mel ut. At vim omnes lucilius corrumpit, integre menandri hendrerit mea ut.',
  },
  {
    id: 'presale-3',
    question: 'IF YOU COULD INVENT A HOLIDAY, WHAT WOULD IT BE?',
    answer:
      'Velit timeam inimicus vis te, vis ex offendit concludaturque. Est id hinc mutat. Cum te populo facete. Usu fugit oblique adolescens ut, modo congue vituperatoribus id mea. Mel ut dolor veniam, ad vegan excepteur butcher vice lomo.',
  },
];

export default function FaqPage() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const usefulLinks = [
    { title: 'Labore Wes Anderson', href: '#0' },
    { title: 'Menda Shoreditch', href: '#0' },
    { title: 'Vice Lomo', href: '#0' },
    { title: 'Keffiyeh Helvetica', href: '#0' },
    { title: 'Moon Tempor', href: '#0' },
  ];

  return (
    <main className="min-h-screen bg-[#131313] text-white">
      {/* Page Header matching Agatha alter-heading style */}
      <PageHeader
        title="FAQ"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Page - FAQ' },
        ]}
        bgImage="https://images.unsplash.com/photo-1511468102400-883d6ea28755?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Content Section */}
      <section id="content-section" className="-mt-[80px] md:-mt-[100px] relative z-10 w-full pb-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1320px] mx-auto bg-[#0b0b0b] border border-neutral-800/80 rounded-[6px] p-6 md:p-[45px] shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 font-mono">
              
              {/* Left Column: Accordions matching user screenshot media_1788653130860.png */}
              <div className="col-left md:col-span-8 space-y-9 font-mono">
                
                {/* General Help */}
                <div>
                  <h3 className="text-xl md:text-2xl font-mono uppercase text-[#a0a0a0] font-light tracking-normal mb-1">
                    GENERAL HELP:
                  </h3>
                  <div className="text-2xl md:text-3xl font-mono text-[#666666] mb-5 select-none leading-none">~</div>

                  <div className="space-y-3">
                    {generalFaqs.map((faq) => {
                      const isOpen = !!openIds[faq.id];
                      return (
                        <div key={faq.id} className="rounded-[3px]">
                          <button
                            type="button"
                            onClick={() => toggleAccordion(faq.id)}
                            className="w-full flex items-center justify-between gap-4 px-5 py-3.5 text-left text-[12.5px] font-mono uppercase tracking-[1.5px] text-[#a0a0a0] hover:text-white transition-colors bg-[#202020] hover:bg-[#252525] rounded-[3px] cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span
                              className={`transition-transform duration-300 text-[#666666] shrink-0 ${
                                isOpen ? 'rotate-180 text-white' : ''
                              }`}
                            >
                              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                              </svg>
                            </span>
                          </button>

                          {/* Smooth Animated Accordion Content */}
                          <div
                            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                              isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                            }`}
                          >
                            <div className="overflow-hidden">
                              <div className="pt-4 pb-5 px-1 text-[13px] text-[#888888] leading-[1.85] font-mono">
                                {faq.answer}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pre-Sale Questions */}
                <div>
                  <h3 className="text-xl md:text-2xl font-mono uppercase text-[#a0a0a0] font-light tracking-normal mb-1">
                    PRE-SALE QUESTIONS:
                  </h3>
                  <div className="text-2xl md:text-3xl font-mono text-[#666666] mb-5 select-none leading-none">~</div>

                  <div className="space-y-3">
                    {presaleFaqs.map((faq) => {
                      const isOpen = !!openIds[faq.id];
                      return (
                        <div key={faq.id} className="rounded-[3px]">
                          <button
                            type="button"
                            onClick={() => toggleAccordion(faq.id)}
                            className="w-full flex items-center justify-between gap-4 px-5 py-3.5 text-left text-[12.5px] font-mono uppercase tracking-[1.5px] text-[#a0a0a0] hover:text-white transition-colors bg-[#202020] hover:bg-[#252525] rounded-[3px] cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span
                              className={`transition-transform duration-300 text-[#666666] shrink-0 ${
                                isOpen ? 'rotate-180 text-white' : ''
                              }`}
                            >
                              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                              </svg>
                            </span>
                          </button>

                          {/* Smooth Animated Accordion Content */}
                          <div
                            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                              isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                            }`}
                          >
                            <div className="overflow-hidden">
                              <div className="pt-4 pb-5 px-1 text-[13px] text-[#888888] leading-[1.85] font-mono">
                                {faq.answer}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Column: Sidebar matching user screenshot media_1788653130860.png */}
              <div className="col-right md:col-span-4 font-mono">
                <div className="sidebar sidebar-right space-y-9 pl-0 md:pl-8 lg:pl-10 md:border-l md:border-dotted md:border-[#2d2d2d]">
                  
                  {/* Info Widget */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-mono uppercase text-[#a0a0a0] font-light tracking-normal mb-1">
                      INFO
                    </h3>
                    <div className="text-2xl md:text-3xl font-mono text-[#666666] mb-4 select-none leading-none">~</div>
                    <p className="text-[12.5px] text-[#777777] leading-[1.85] font-mono">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nemo odit cupiditate nam maiores, accusantium quis doloribus expedita sapiente. Voluptatibus unde explicabo?
                    </p>
                  </div>

                  {/* Useful Links Widget matching screenshot */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-mono uppercase text-[#a0a0a0] font-light tracking-normal mb-1">
                      USEFUL LINKS
                    </h3>
                    <div className="text-2xl md:text-3xl font-mono text-[#666666] mb-4 select-none leading-none">~</div>
                    <ul className="space-y-2 text-[12.5px] font-mono text-[#a78339] tracking-wide">
                      {usefulLinks.map((link, idx) => (
                        <li key={idx}>
                          <a
                            href={link.href}
                            onClick={(e) => e.preventDefault()}
                            className="hover:text-white transition-colors duration-200 block"
                          >
                            - {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/*  a Question Gold Button matching screenshot */}
                  <div className="pt-1">
                    <Link href="/contact">
                      <Button
                        variant="primary"
                        size="md"
                        className="shadow-md cursor-pointer"
                      >
                        ASK A QUESTION
                      </Button>
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

