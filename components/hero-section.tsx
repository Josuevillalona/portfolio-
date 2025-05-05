"use client"

import { Button } from "@/components/ui/button"
import AnimateInView from "./animate-in-view"

export default function HeroSection() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 text-center">
      <AnimateInView>
        <h1 className="mb-6 font-sans text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
          Transforming Operational Chaos into Seamless Flow.
        </h1>
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <p className="mx-auto mb-8 max-w-3xl text-lg font-body text-gray-700 dark:text-gray-300 sm:text-xl md:text-2xl">
          I leverage technology and AI to automate processes, remove bottlenecks, and unlock efficiency for growing
          businesses.
        </p>
      </AnimateInView>

      <AnimateInView delay={0.4}>
        <Button
          className="bg-[#3182CE] hover:bg-[#2c74b3] px-8 py-6 text-lg"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Get In Touch
        </Button>
      </AnimateInView>
    </section>
  )
}
