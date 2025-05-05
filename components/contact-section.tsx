"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, FileText } from "lucide-react"
import AnimateInView from "./animate-in-view"

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 px-4 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl text-center">
        <AnimateInView>
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
        </AnimateInView>

        <AnimateInView delay={0.2}>
          <p className="mx-auto mb-8 max-w-2xl font-body text-lg text-gray-700 dark:text-gray-300">
            Ready to bring seamless flow and efficiency to your operations? Let's connect and discuss how I can help
            your business thrive.
          </p>
        </AnimateInView>

        <AnimateInView delay={0.3}>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:josuevillalona@gmail.com"
              className="flex items-center gap-2 text-lg text-[#3182CE] hover:underline"
            >
              <Mail size={20} />
              josuevillalona@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/josuevillalona"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-[#3182CE] hover:underline"
            >
              <Linkedin size={20} />
              linkedin.com/in/josuevillalona
            </a>
          </div>
        </AnimateInView>

        <AnimateInView delay={0.4}>
          <Button
            className="bg-[#3182CE] hover:bg-[#2c74b3] gap-2 px-6 py-6 text-lg"
            onClick={() => {
              // In a real implementation, this would link to the actual résumé file
              window.open("/assets/josue-villalona-resume.pdf", "_blank")
            }}
          >
            <FileText size={20} />
            Download Résumé (PDF)
          </Button>
        </AnimateInView>
      </div>
    </section>
  )
}
