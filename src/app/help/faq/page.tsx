"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const faqs = [
  {
    question: "How do I get started with SGT Learn?",
    answer:
      "Getting started is easy! Simply browse our course catalog, choose a course that interests you, and click 'Enroll'. You can start learning immediately after enrollment.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with a course, you can request a full refund within 30 days of purchase.",
  },
  {
    question: "How long do I have access to a course?",
    answer:
      "Once you enroll in a course, you have lifetime access to the course materials. You can learn at your own pace and revisit the content anytime.",
  },
  {
    question: "Do you offer certificates of completion?",
    answer:
      "Yes, you'll receive a certificate of completion after finishing a course. This certificate can be downloaded and shared on your professional profiles.",
  },
  {
    question: "Can I access courses on mobile devices?",
    answer:
      "Yes, our platform is fully responsive. You can access your courses on any device through our website or mobile app.",
  },
  {
    question: "How do I contact support if I need help?",
    answer:
      "You can reach our support team through the chat feature on our support page, or by email. We typically respond within 24 hours.",
  },
];

export default function FAQPage() {
  const router = useRouter();

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <div>
          <Button
            variant="ghost"
            className="mb-4 -ml-4 text-muted-foreground hover:text-foreground"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Help Center
          </Button>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
            <p className="text-muted-foreground">
              Find answers to common questions about SGT Learn
            </p>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Still have questions? We're here to help!
          </p>
          <Button asChild>
            <Link href="/help/support">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 