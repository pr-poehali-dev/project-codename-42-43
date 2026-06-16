import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Насколько стойкие ваши ароматы?",
      answer:
        "Наши духи держатся на коже от 8 до 12 часов в зависимости от композиции. Высокая концентрация ароматических масел обеспечивает выраженный шлейф в течение всего дня.",
    },
    {
      question: "Это оригинальная парфюмерия или аналоги?",
      answer:
        "AURÉLLE — это собственные авторские композиции на основе качественных парфюмерных компонентов. Мы предлагаем достойное звучание по честной цене без переплаты за бренд.",
    },
    {
      question: "Как выбрать аромат, если не могу понюхать?",
      answer:
        "Каждый аромат подробно описан по семействам и нотам — свежие, цветочные, древесные. Если сомневаетесь, напишите нам, и мы поможем подобрать вариант под ваши предпочтения.",
    },
    {
      question: "Как быстро вы доставляете заказы?",
      answer:
        "Отправляем заказы в день оформления при наличии товара. Доставка по России занимает от 1 до 5 дней в зависимости от региона. Каждый флакон бережно упакован.",
    },
    {
      question: "Можно ли вернуть духи, если не подошёл аромат?",
      answer:
        "Запечатанный товар можно вернуть в течение 14 дней. Вскрытую парфюмерию вернуть нельзя по санитарным нормам, поэтому советуем уточнить детали до покупки.",
    },
    {
      question: "Какие объёмы флаконов есть в наличии?",
      answer:
        "Большинство ароматов доступны в форматах 50 мл и 100 мл. Компактный флакон удобно носить с собой, а большой выгоднее по цене за миллилитр.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о наших ароматах, стойкости, доставке и возврате.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}