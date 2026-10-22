// components/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I apply for an internship on FastIntern?",
    answer:
      "Browse the available internships, click 'Apply Now' on the one that fits you, and complete the short application form. You'll need a verified profile and an updated resume. Applications are reviewed by the hiring company, and you'll get an update via email and your dashboard.",
  },
  {
    question: "Is FastIntern free for students?",
    answer:
      "Yes — creating a profile, browsing internships, and applying is completely free for students. We only charge companies for posting listings. Premium features like resume reviews or priority applications are optional and clearly marked.",
  },
  {
    question: "Do I need prior experience to apply?",
    answer:
      "Not at all. Many internships on FastIntern are explicitly designed for beginners and students. Each listing shows the required skills and experience level, so you can filter for roles that match where you are right now.",
  },
  {
    question: "Are these internships paid?",
    answer:
      "Most listings are paid, and the stipend is shown on every card. Some early-stage startups offer unpaid internships with strong learning value — these are clearly labeled, so you always know what to expect before applying.",
  },
  {
    question: "Can I apply to multiple internships at once?",
    answer:
      "Absolutely. We encourage applying to several roles that interest you. Each application is independent, and companies can't see where else you've applied. Just make sure your resume is tailored for the roles you care about most.",
  },
  {
    question: "How long does the selection process take?",
    answer:
      "It varies by company, but most respond within 1–2 weeks. Some fast-moving startups get back within 48 hours. You can track the status of every application from your dashboard, and we'll notify you the moment there's an update.",
  },
  {
    question: "Can I do a remote internship?",
    answer:
      "Yes. Use the 'Remote' filter on the internships page to see only work-from-home opportunities. Remote internships follow the same application process and often have flexible hours to fit around your studies.",
  },
  {
    question: "What happens after I complete an internship?",
    answer:
      "You'll receive a completion certificate and a verified badge on your FastIntern profile. Many of our partner companies convert high-performing interns into full-time employees — in fact, 87% of our interns receive a full-time offer.",
  },
];

export default function FAQ() {
  return (
    <section className="container mx-auto px-4 py-14">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to know before you apply
          </p>
        </div>

        {/* Accordion */}
        <Accordion  className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}