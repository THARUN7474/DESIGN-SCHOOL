
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const designSchoolContent = [
  {
    title: 'Unleash Your Creativity: A Personalized Journey in Design Mastery',
    description:
      'Embark on a design journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our design school, your aspirations meet our dedicated support, creating a path to mastery.',
  },
  {
    title: 'Innovative Design Thinking',
    description:
      'Immerse yourself in a learning environment that fosters innovative design thinking. Our approach encourages you to push boundaries and think outside the box, transforming your creative vision into reality.',
  },
  {
    title: 'Cutting-Edge Curriculum',
    description:
      'Our curriculum is continuously updated to include the latest design trends and technologies, ensuring you’re always learning with the most current and effective methods. Stay ahead in the dynamic world of design with our progressive education.',
  },
  {
    title: 'Interactive Feedback & Engagement',
    description:
      'Experience an interactive learning process where feedback is immediate and constructive, enhancing your understanding of design principles and techniques. Our engaging platform supports real-time collaboration and critique.',
  },
  {
    title: 'Limitless Learning Opportunities',
    description:
      'With our expansive resource library and diverse course offerings, you’ll always find something new to explore. Our platform provides continuous opportunities for growth, ensuring your design skills are always evolving.',
  },
  {
    title: 'Join a Vibrant Community of Creatives',
    description:
      'Connect with fellow design enthusiasts and professionals in a supportive and vibrant community. Share ideas, collaborate on projects, and build a network that will inspire and elevate your design journey.',
  },
];

function WhyChooseUs() {
  return (
    <div className="bg-black-900">
        <StickyScroll content={designSchoolContent} />
    </div>
  )
}

export default WhyChooseUs