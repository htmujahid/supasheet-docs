'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: '1',
    question: 'What is Supasheet?',
    answer: 'Supasheet is a complete, opinionated CMS platform built on top of Supabase. It provides everything you need including admin panels, dashboards, charts, reports, authentication, file management, and more - all integrated and ready to use.',
  },
  {
    id: '2',
    question: 'Do I need to know Supabase to use Supasheet?',
    answer: 'Basic knowledge of Supabase is helpful but not required. Supasheet handles most of the complexity for you. Simply provide your Supabase connection details and start building.',
  },
  {
    id: '3',
    question: 'Is Supasheet free to use?',
    answer: 'Yes! Supasheet is completely open source and free to use. You can clone the repository, modify it, and deploy it anywhere. You only pay for your Supabase hosting costs.',
  },
  {
    id: '4',
    question: 'Can I customize Supasheet for my needs?',
    answer: 'Absolutely! Supasheet is built to be highly customizable. You can modify themes, add custom components, create hooks, and extend functionality. The codebase is well-documented and uses modern React patterns.',
  },
  {
    id: '5',
    question: 'What technologies does Supasheet use?',
    answer: 'Supasheet is built with Next.js, TypeScript, React, and Tailwind CSS. It leverages Supabase for authentication, database, and storage, providing a modern, type-safe development experience.',
  },
  {
    id: '6',
    question: 'How do I get started?',
    answer: 'Clone the repository, install dependencies, configure your Supabase connection details in the environment variables, and run the development server. Check our documentation for detailed setup instructions.',
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed">
              Everything you need to know about Supasheet. Can't find what you're looking for?
              Check our documentation.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-muted/50 rounded-lg border overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-muted/80 transition-colors"
                >
                  <span className="font-semibold text-base">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-4 pt-2 text-left">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
