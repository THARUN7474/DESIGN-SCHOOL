'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Fundamentals of Graphic Design',
      description:
        'Learn the core principles of graphic design to create visually stunning content.',
      slug: 'fundamentals-of-graphic-design',
      isFeatured: true,
    },
    {
      title: 'Web Design Essentials',
      description:
        'Master the basics of web design and create responsive, user-friendly websites.',
      slug: 'web-design-essentials',
      isFeatured: true,
    },
    {
      title: 'UI/UX Design Principles',
      description:
        'Understand the fundamentals of user interface and user experience design.',
      slug: 'ui-ux-design-principles',
      isFeatured: true,
    },
    {
      title: 'Branding and Identity Design',
      description:
        'Learn how to create compelling brand identities that resonate with audiences.',
      slug: 'branding-and-identity-design',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Motion Graphics and Animation',
      description:
        'Explore the world of motion graphics and animation to bring your designs to life.',
      slug: 'motion-graphics-and-animation',
      isFeatured: true,
    },
    {
      title: 'Digital Illustration Techniques',
      description:
        'Enhance your illustration skills with advanced digital techniques.',
      slug: 'digital-illustration-techniques',
      isFeatured: true,
    },
  
  ];

  return (
    <div className="p-12 bg-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Design Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars