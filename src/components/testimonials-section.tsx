import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Елена Морозова",
    role: "Покупатель, Москва",
    avatar: "/professional-woman-scientist.png",
    content:
      "Заказала свежий аромат на каждый день — держится с утра до вечера, коллеги постоянно спрашивают, что за духи. За такую цену это находка!",
  },
  {
    name: "Дмитрий Соколов",
    role: "Покупатель, Санкт-Петербург",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Брал древесный аромат для себя. Стойкость отличная, звучит дорого и совсем не резкий. Доставили на следующий день, упаковка аккуратная.",
  },
  {
    name: "Анна Ковалёва",
    role: "Покупатель, Казань",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Купила цветочный аромат в подарок маме — она в восторге. Нежный шлейф, красивый флакон. Теперь хочу такой же себе!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Отзывы покупателей</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят те, кто уже выбрал свой аромат AURÉLLE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}