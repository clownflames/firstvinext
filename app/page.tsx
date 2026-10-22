import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import FAQ from '@/components/web/FAQ'
import GreatDeal from '@/components/web/GreatDeal'
import Internships from '@/components/web/Internships'
import MotivationMarquee from '@/components/web/MotivationMarquee'
import Navbar from '@/components/web/Navbar'
import React from 'react'
import Marquee from 'react-fast-marquee'

interface Internship {
  id: number,
  title: string,
  description: string
}

export default function page() {
  const internships: Internship[] = [
    {
      id: 1,
      title: "Python internship",
      description: "this is very good internship if you want to learn python and exprience real world skills"
    },
    {
      id: 2,
      title: "java internship",
      description: "this is also a good internship if you want to learn java and collact projects of your resume"

    }
    , {
      id: 3,
      title: "Full stack development internship",
      description: "this is also a good internship for trying to learn web development in deeply"
    }
  ]


  return (
    <div>
      <Navbar />

      <Internships />

      <MotivationMarquee />
      <GreatDeal />
      <FAQ />



    </div>
  )
}
