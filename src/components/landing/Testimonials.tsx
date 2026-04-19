interface Testimonial {
  name: string;
  text: string;
  rating: number;
  time: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Luciana Cordeiro',
    text: 'O One Pilates é um estúdio maravilhoso, com profissionais muito competentes, o que é fundamental. Atendimento impecável!',
    rating: 5,
    time: 'Editado um ano atrás',
    initials: 'L'
  },
  {
    name: 'Erika Zsoldos',
    text: 'Faço pilates na One Pilates desde 2016 e amo! A equipe é maravilhosa, super capacitadas e atenciosas.',
    rating: 5,
    time: 'Um ano atrás',
    initials: 'E'
  },
  {
    name: 'Vivian Kairalla',
    text: 'Estou há doze anos no One Pilates e a cada dia o estúdio se supera com relação à qualidade da aulas e profissionais.',
    rating: 5,
    time: 'Editado um ano atrás',
    initials: 'V'
  }
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f3f7f4_100%)] px-4 py-16 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center sm:mb-14 md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c75a21] sm:text-sm">
            Experiencia de quem vive o metodo
          </p>

          <h2 className="text-3xl font-semibold text-[#12202a] sm:text-4xl md:text-5xl">
            Resultados reais, com acompanhamento proximo
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#5a6873] sm:text-base md:text-lg">
            Relatos de alunos que evoluiram em mobilidade, postura e bem-estar
            com um plano individualizado e orientacao tecnica em cada sessao.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="group flex flex-col rounded-3xl border border-[#d6ddd8] bg-white p-6 shadow-[0_12px_30px_rgba(12,24,36,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(12,24,36,0.12)] sm:p-7 md:p-8"
            >
              <div className="flex items-center mb-4 sm:mb-5">
                <div className="mr-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#1b2c37] text-lg font-semibold text-white sm:mr-4 sm:h-14 sm:w-14 sm:text-xl">
                  {testimonial.initials}
                </div>

                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-[#12202a] sm:text-base">
                    {testimonial.name}
                  </h4>
                  <span className="text-xs text-[#6c7a84] sm:text-sm">
                    {testimonial.time}
                  </span>
                </div>
              </div>

              <div className="mb-3 text-lg text-[#f59a42] sm:mb-4 sm:text-xl">
                {'★'.repeat(testimonial.rating)}
              </div>

              <p className="text-sm italic leading-relaxed text-[#55636d] sm:text-base">
                "{testimonial.text}"
              </p>
              <span className="mt-5 inline-flex w-fit rounded-full bg-[#f59a42]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#c75a21]">
                Avaliacao 5 estrelas
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
