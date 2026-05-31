export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
          Un projet en tête ?
        </h2>

        {/* Email Link */}
        <a
          href="mailto:contact@raythan.design"
          className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#86868b] hover:text-white transition-colors duration-300 tracking-tight"
        >
          contact@raythan.design
        </a>

        {/* Spacer */}
        <div className="mt-24 md:mt-32" />
      </div>
    </section>
  )
}
