import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Стойкость до 12 часов",
    description: "Высокая концентрация ароматических масел — аромат раскрывается весь день и не выветривается к обеду.",
    icon: "zap",
    badge: "Стойкость",
  },
  {
    title: "Натуральные компоненты",
    description: "Парфюмерные композиции на основе качественных эфирных масел без агрессивной химии и резкости.",
    icon: "globe",
    badge: "Натурально",
  },
  {
    title: "Доступная цена",
    description: "Премиальное звучание аромата по честной цене — без переплаты за громкое имя на флаконе.",
    icon: "target",
    badge: "Выгодно",
  },
  {
    title: "Унисекс и классика",
    description: "Ароматы для неё, для него и универсальные композиции — каждый найдёт свой характер.",
    icon: "link",
    badge: "Для всех",
  },
  {
    title: "Удобный формат",
    description: "Компактные флаконы 50 и 100 мл с надёжным распылителем — берите аромат с собой куда угодно.",
    icon: "brain",
    badge: "Формат",
  },
  {
    title: "Быстрая доставка",
    description: "Отправляем заказы по всей России в день оформления. Бережная упаковка каждого флакона.",
    icon: "lock",
    badge: "Доставка",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают AURÉLLE</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Качественная парфюмерия, которая раскрывает вашу индивидуальность каждый день
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}