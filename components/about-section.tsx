import AnimateInView from "./animate-in-view"

export default function AboutSection() {
  return (
    <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl text-center">
        <AnimateInView>
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl">About Me: Finding the Flow</h2>
        </AnimateInView>

        <AnimateInView delay={0.2}>
          <div className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full bg-[#E2E8F0]">
            <img
              src="/placeholder.svg?height=128&width=128"
              alt="Josue Villalona"
              className="h-full w-full object-cover"
            />
          </div>
        </AnimateInView>

        <AnimateInView delay={0.3}>
          <p className="mb-6 font-body text-lg text-gray-700 dark:text-gray-300">
            With a background in Psychology and Languages, I bring a unique perspective to operational challenges. I've
            spent years optimizing startup operations, identifying bottlenecks, and implementing solutions that create
            seamless workflows. My recent focus has been applying AI tools to further enhance efficiency, all guided by
            the concept of "Flow" - creating systems where work progresses naturally without friction.
          </p>
        </AnimateInView>
      </div>
    </section>
  )
}
