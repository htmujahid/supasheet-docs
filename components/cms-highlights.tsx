'use client';

import { LayoutGrid, KanbanSquare, Image, CalendarDays } from 'lucide-react';
import { useState, useEffect } from 'react';

const dataViews = [
  {
    icon: LayoutGrid,
    title: 'Grid View',
    description: 'Spreadsheet-like interface with powerful filtering, sorting, and bulk editing — the everyday workhorse for ops teams.',
    image: {
      light: '/images/sheet-light.png',
      dark: '/images/sheet-dark.png',
    },
  },
  {
    icon: KanbanSquare,
    title: 'Kanban View',
    description: 'Drag tasks across columns. Configure groupings via your schema and run pipelines, sprints, or deal stages with no extra UI code.',
    image: {
      light: '/images/kanban-light.png',
      dark: '/images/kanban-dark.png',
    },
  },
  {
    icon: CalendarDays,
    title: 'Calendar View',
    description: 'Schedule and reschedule by drag-and-drop. Point at any date column and your records show up as events.',
    image: {
      light: '/images/calendar-light.png',
      dark: '/images/calendar-dark.png',
    },
  },
  {
    icon: Image,
    title: 'Gallery View',
    description: 'Browse data as visual cards. Perfect for products, portfolios, media libraries, and people directories.',
    image: {
      light: '/images/gallery-light.png',
      dark: '/images/gallery-dark.png',
    },
  },
];

export function CMSHighlights() {
  const [selectedView, setSelectedView] = useState(0);
  const [progress, setProgress] = useState(0);
  const activeView = dataViews[selectedView];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setSelectedView((current) => (current + 1) % dataViews.length);
          return 0;
        }
        return prev + 1;
      });
    }, 100); // Update every 100ms for smooth animation (10 seconds total)

    return () => clearInterval(interval);
  }, []);

  const handleViewClick = (index: number) => {
    setSelectedView(index);
    setProgress(0);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              The same data, every way your team works
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Configure once in the table comment, switch views with a click. Each view is built
              for a specific workflow — from spreadsheet edits to kanban pipelines to calendar scheduling.
            </p>
          </div>
          <div className="grid lg:grid-cols-[300px_1fr] gap-6">
            {/* Left Side Menu */}
            <div className="space-y-2">
              {dataViews.map((view, index) => {
                const IconComponent = view.icon;
                const isActive = selectedView === index;
                return (
                  <button
                    key={view.title}
                    onClick={() => handleViewClick(index)}
                    className={`relative w-full text-left rounded-xl border p-4 transition-all overflow-hidden ${
                      isActive
                        ? 'bg-accent border-border'
                        : 'bg-card hover:bg-accent/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${
                        isActive ? 'bg-primary/10' : 'bg-muted/50'
                      }`}>
                        <IconComponent className={`h-5 w-5 ${
                          isActive ? 'text-primary' : 'text-foreground'
                        }`} />
                      </div>
                      <div className="space-y-1">
                        <h3 className={`font-semibold text-base ${
                          isActive ? 'text-foreground' : 'text-foreground'
                        }`}>
                          {view.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {view.description}
                        </p>
                      </div>
                    </div>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted-foreground/20">
                        <div
                          className="h-full bg-primary transition-all duration-100 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            {/* Right Side Image Display */}
            <div className="rounded-xl border shadow-sm bg-card overflow-hidden">
              <div className="border-b p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 border">
                    {(() => {
                      const IconComponent = activeView.icon;
                      return <IconComponent className="h-5 w-5 text-primary" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{activeView.title}</h3>
                  </div>
                </div>
              </div>
              <div className="bg-muted/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeView.image.light}
                  alt={activeView.title}
                  className="w-full h-auto dark:hidden"
                />
              {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeView.image.dark}
                  alt={activeView.title}
                  className="w-full h-auto hidden dark:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
