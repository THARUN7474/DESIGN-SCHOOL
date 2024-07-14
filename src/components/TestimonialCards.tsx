'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      'Joining the design school completely revolutionized my approach to graphic design. The instructors are incredibly knowledgeable and supportive!',
    name: 'Jordan Smith',
    title: 'Graphic Design Student',
  },
  {
    quote:
      "The community and mentorship at this school are unparalleled. I've grown significantly as a web designer and developer, thanks to their comprehensive curriculum.",
    name: 'Taylor Brown',
    title: 'Web Design Student',
  },
  {
    quote:
      "This school provided me with the skills and confidence to excel in UI/UX design. I'm incredibly thankful for the personalized guidance.",
    name: 'Jamie Lee',
    title: 'UI/UX Design Student',
  },
  {
    quote:
      'As an aspiring illustrator, finding the right guidance was crucial. This school paired me with a mentor who truly understands my artistic vision and goals.',
    name: 'Casey Johnson',
    title: 'Illustration Student',
  },
  {
    quote:
      'The branding and identity design courses here were eye-opening. Highly recommend for anyone looking to build a strong portfolio!',
    name: 'Morgan Davis',
    title: 'Branding and Identity Design Student',
  },
  ];

function DesignSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.01] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Feel our Harmony: Voices of Design</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default DesignSchoolTestimonials