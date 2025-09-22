import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  const destinations = [
    {
      id: 1,
      name: "Горные маршруты",
      location: "Альпы, Швейцария",
      image: "/img/f7ba253b-adb0-4181-b3b5-ce041e20405b.jpg",
      rating: 4.9,
      reviews: 156,
      category: "Природа"
    },
    {
      id: 2,
      name: "Исторический центр",
      location: "Прага, Чехия", 
      image: "/img/8a082c70-dba1-4a46-bb2f-0fde5e04e463.jpg",
      rating: 4.8,
      reviews: 243,
      category: "Культура"
    }
  ];

  const routes = [
    {
      title: "Маршрут по горным вершинам",
      duration: "7 дней",
      difficulty: "Средний",
      price: "от 35 000 ₽"
    },
    {
      title: "Культурное наследие Европы",
      duration: "5 дней", 
      difficulty: "Легкий",
      price: "от 25 000 ₽"
    }
  ];

  const reviews = [
    {
      name: "Анна К.",
      rating: 5,
      text: "Невероятное путешествие! Гид был очень знающим, а маршрут продуман до мелочей.",
      location: "Швейцария"
    },
    {
      name: "Михаил П.",
      rating: 5,
      text: "Отличная организация поездки. Рекомендую всем, кто любит активный отдых!",
      location: "Прага"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-display font-bold text-xl text-primary">
              WanderGuide
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#destinations" className="text-foreground hover:text-primary transition-colors">
                Направления
              </a>
              <a href="#routes" className="text-foreground hover:text-primary transition-colors">
                Маршруты
              </a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">
                Отзывы
              </a>
              <a href="#booking" className="text-foreground hover:text-primary transition-colors">
                Бронирование
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Menu" size={20} className="md:hidden" />
              <span className="hidden md:inline">Войти</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Откройте мир с нашими
            <span className="text-primary block">путеводителями</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Исследуйте удивительные места планеты с профессиональными гидами. 
            Создавайте незабываемые воспоминания в каждом путешествии.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-fade-in">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Куда хотите отправиться?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button size="lg" className="px-8">
                Поиск
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Направлений</div>
            </div>
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-primary">2000+</div>
              <div className="text-sm text-muted-foreground">Довольных туристов</div>
            </div>
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Экспертных гидов</div>
            </div>
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">Средний рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Популярные направления
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите из наших тщательно отобранных направлений для незабываемого приключения
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <Card key={destination.id} className={`overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale group`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {destination.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-xl mb-2">{destination.name}</h3>
                  <p className="text-muted-foreground mb-4 flex items-center">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    {destination.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Icon name="Star" size={16} className="text-yellow-500 mr-1" />
                      <span className="font-medium">{destination.rating}</span>
                      <span className="text-muted-foreground text-sm ml-1">
                        ({destination.reviews} отзывов)
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Рекомендуемые маршруты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Готовые маршруты от наших экспертов для максимального удовольствия от путешествия
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <Card key={index} className={`p-6 animate-fade-in hover-scale`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display font-semibold text-xl flex-1">{route.title}</h3>
                  <div className="text-right">
                    <div className="font-display font-bold text-primary text-lg">{route.price}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-1" />
                    {route.duration}
                  </div>
                  <div className="flex items-center">
                    <Icon name="Activity" size={16} className="mr-1" />
                    {route.difficulty}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">
                    Забронировать
                  </Button>
                  <Button variant="outline">
                    <Icon name="Heart" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Отзывы путешественников
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Узнайте, что говорят наши клиенты о своих приключениях
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className={`p-6 animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.location}</div>
                  </div>
                  <div className="ml-auto flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{review.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section id="booking" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 md:p-12 bg-gradient-to-r from-primary/10 to-accent/10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Готовы к приключению?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нашими экспертами и начните планировать свое следующее незабываемое путешествие уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать тур
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-display font-bold text-xl mb-4">WanderGuide</div>
              <p className="text-primary-foreground/80 mb-4">
                Ваш надежный спутник в мире путешествий
              </p>
              <div className="flex gap-4">
                <Icon name="Facebook" size={20} className="hover:scale-110 transition-transform cursor-pointer" />
                <Icon name="Instagram" size={20} className="hover:scale-110 transition-transform cursor-pointer" />
                <Icon name="Twitter" size={20} className="hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Направления</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Европа</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Азия</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Америка</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Африка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Групповые туры</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Индивидуальные маршруты</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Бронирование отелей</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Трансферы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@wanderguide.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Тверская, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 WanderGuide. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}