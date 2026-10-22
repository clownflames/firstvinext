// components/GreatDeal.tsx
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

type Deal = {
  id: string;
  badge: string;
  title: string;
  description: string;
  cta: string;
};

const deals: Deal[] = [
  {
    id: "1",
    badge: "Limited Time",
    title: "Get 50% Off on Premium Internship Access",
    description:
      "Unlock exclusive internships at top companies with a verified profile. Offer ends this week.",
    cta: "Claim Offer",
  },
  {
    id: "2",
    badge: "New",
    title: "Refer a Friend, Earn ₹1,000",
    description:
      "Invite your friends to FastIntern and earn rewards when they land their first internship.",
    cta: "Invite Now",
  },
  {
    id: "3",
    badge: "Featured",
    title: "Free Resume Review by Industry Experts",
    description:
      "Stand out from the crowd — get your resume reviewed by professionals from top tech companies.",
    cta: "Get Review",
  },
  {
    id: "4",
    badge: "Hot",
    title: "100+ New Internships Added This Week",
    description:
      "Fresh opportunities from startups to Fortune 500s. Apply early before spots fill up.",
    cta: "Explore Now",
  },
];

const ROTATE_MS = 4000;

export default function GreatDeal() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out → swap content → fade in
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % deals.length);
        setFade(true);
      }, 300);
    }, ROTATE_MS);

    return () => clearInterval(interval);
  }, []);

  const deal = deals[index];

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="relative w-full overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-xl">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-6 p-8 sm:p-12 lg:p-16">
          {/* Badge */}
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            {deal.badge}
          </span>

          {/* Content with fade transition */}
          <div
            className={`transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {deal.title}
            </h2>
            <p className="mt-4 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
              {deal.description}
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="mt-6 gap-2"
            >
              {deal.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dot indicators */}
          <div className="mt-4 flex gap-2">
            {deals.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setIndex(i);
                    setFade(true);
                  }, 300);
                }}
                aria-label={`Go to deal ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-primary-foreground"
                    : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}