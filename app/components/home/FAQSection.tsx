import SectionHeader from "../SectionHeader"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    id: 1,
    question: "What are the school hours at Little Learners Academy?",
    answer: `Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.`
  },
  {
    id: 2,
    question: "Is there a uniform policy for students?",
    answer: `Yes, we have a uniform policy to promote a sense of community and equality among our students. Our uniforms are comfortable and practical, designed to suit the active lifestyle of young children.`
  },

  {
    id: 3,
    question: "What extracurricular activities are available for students?",
    answer: `We offer a variety of extracurricular activities, including art, music, sports, and dance. These activities are designed to enhance our students' creativity, physical fitness, and social skills.`
  },

  {
    id: 4,
    question: "What extracurricular activities are available for students?",
    answer: `We offer a variety of extracurricular activities, including art, music, sports, and dance. These activities are designed to enhance our students' creativity, physical fitness, and social skills.`
  },

  {
    id: 5,
    question: "How do you handle food allergies and dietary restrictions?",
    answer: `We take food allergies and dietary restrictions very seriously. Our kitchen staff is trained to prepare meals that accommodate various dietary needs, and we work closely with parents to ensure their child's safety and well-being.`
  },

  {
    id: 6,
    question: "What is the teacher-to-student ratio at Little Learners Academy?",
    answer: `We maintain a low teacher-to-student ratio to ensure personalized attention and support for each child. Our dedicated staff is committed to creating a nurturing and effective learning environment.`
  },
  {
    id: 7,
    question: "How do you handle discipline and behavior management?",
    answer: `We believe in positive reinforcement and proactive behavior management strategies. Our approach focuses on teaching children self-regulation, empathy, and respect for others, creating a supportive and inclusive environment.`
  },
  {
    id: 8,
    question: "How do I apply for admission to Little Learners Academy?",
    answer: `To apply for admission, please visit our website and fill out the online application form. You can also contact our admissions office directly for assistance and to schedule a tour of our facilities.`
  },


]

const FAQSection = () => {
  return (
    <section className="section" id="faqs">
      <div className="container mt-12 py-10">
        <SectionHeader subheading="Solutions for the doubts"
          heading="Frequently asked questions"
          description="Find all the essestial information you need in our FAQ section, designed to address common questions and and help you make informed decisions for your child's education."
        />

        <div className="mt-20 text-center">
          <Accordion
            type="single"
            collapsible
            className="w-full flex gap-4"
            defaultValue="item-1"
            id="a"
          >
            <div className="flex-1 space-y-4">
              {
                faqs.slice(0, 4).map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`}  >
                    <AccordionTrigger className="cursor-pointer">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))
              }
            </div>

            <div className="flex-1 space-y-4">
              {
                faqs.slice(4, 8).map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                    <AccordionTrigger className="cursor-pointer">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))
              }
            </div>

          </Accordion>


        </div >
      </div >
    </section >
  )
}

export default FAQSection