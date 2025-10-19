import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const specialties = [
    {
      title: 'Программирование в компьютерных системах',
      description: 'Разработка ПО, веб-приложений и мобильных приложений',
      icon: 'Code',
      careers: 'Backend/Frontend разработчик, Full-stack Developer',
      salary: 'от 80 000 ₽'
    },
    {
      title: 'Экономика и бухгалтерский учет',
      description: 'Финансовый анализ, бухгалтерия, налогообложение',
      icon: 'Calculator',
      careers: 'Бухгалтер, финансовый аналитик, экономист',
      salary: 'от 60 000 ₽'
    },
    {
      title: 'Гостиничное дело',
      description: 'Управление отелями, туризм, сервис',
      icon: 'Hotel',
      careers: 'Администратор отеля, менеджер по туризму',
      salary: 'от 50 000 ₽'
    },
    {
      title: 'Дизайн (по отраслям)',
      description: 'Графический дизайн, веб-дизайн, UX/UI',
      icon: 'Palette',
      careers: 'Графический дизайнер, UI/UX designer',
      salary: 'от 70 000 ₽'
    },
    {
      title: 'Юриспруденция',
      description: 'Правоведение, юридическое консультирование',
      icon: 'Scale',
      careers: 'Юрист, помощник юриста, правовед',
      salary: 'от 65 000 ₽'
    },
    {
      title: 'Маркетинг',
      description: 'Цифровой маркетинг, SMM, реклама',
      icon: 'TrendingUp',
      careers: 'Маркетолог, SMM-менеджер, бренд-менеджер',
      salary: 'от 55 000 ₽'
    }
  ];

  const teachers = [
    {
      name: 'Иванова Мария Петровна',
      position: 'Директор колледжа',
      experience: '25 лет в образовании',
      photo: 'https://cdn.poehali.dev/projects/91485a38-c241-4415-bc49-700a948b2565/files/0af2bc56-2285-4edb-9a81-128071b51f09.jpg'
    },
    {
      name: 'Смирнов Алексей Викторович',
      position: 'Зам. директора по учебной работе',
      experience: '18 лет преподавания',
      photo: 'https://cdn.poehali.dev/projects/91485a38-c241-4415-bc49-700a948b2565/files/b9fa9d0e-5763-43c0-a0da-334bdd31932a.jpg'
    },
    {
      name: 'Петрова Елена Сергеевна',
      position: 'Преподаватель программирования',
      experience: '12 лет опыта',
      photo: 'https://cdn.poehali.dev/projects/91485a38-c241-4415-bc49-700a948b2565/files/9927c315-fdf2-4917-9776-8615e208e382.jpg'
    }
  ];

  const news = [
    {
      date: '15.10.2025',
      title: 'Открытие новой лаборатории программирования',
      category: 'Образование'
    },
    {
      date: '10.10.2025',
      title: 'Студенты колледжа победили в городской олимпиаде',
      category: 'Достижения'
    },
    {
      date: '05.10.2025',
      title: 'День открытых дверей - 20 октября',
      category: 'События'
    }
  ];

  const events = [
    {
      date: '20.10.2025',
      title: 'День открытых дверей',
      description: 'Знакомство с колледжем и специальностями'
    },
    {
      date: '25.10.2025',
      title: 'Олимпиада по математике',
      description: 'Городская студенческая олимпиада'
    },
    {
      date: '01.11.2025',
      title: 'Хакатон "Код будущего"',
      description: '48 часов программирования'
    }
  ];

  const schedule = [
    { time: '09:00 - 09:45', pair: '1 пара' },
    { time: '09:55 - 10:40', pair: '2 пара' },
    { time: '11:00 - 11:45', pair: '3 пара' },
    { time: '12:05 - 12:50', pair: '4 пара' },
    { time: '13:00 - 13:45', pair: '5 пара' },
    { time: '13:55 - 14:40', pair: '6 пара' }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="sticky top-0 z-50 bg-slate-800/90 backdrop-blur-md shadow-md border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" className="text-primary" size={32} />
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Перспектива
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О колледже' },
                { id: 'applicants', label: 'Абитуриенту' },
                { id: 'students', label: 'Студентам' },
                { id: 'education', label: 'Учебный процесс' },
                { id: 'news', label: 'Новости' },
                { id: 'life', label: 'Студенческая жизнь' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 pb-32 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                Образование для успешной карьеры
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Современные специальности, практический опыт и гарантированное трудоустройство
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
                  <Icon name="CheckCircle" className="text-green-500" size={24} />
                  <span className="font-semibold text-gray-900">Гарантия трудоустройства</span>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
                  <Icon name="Wallet" className="text-blue-500" size={24} />
                  <span className="font-semibold text-gray-900">Доступная цена</span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                Подать заявку на обучение
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/91485a38-c241-4415-bc49-700a948b2565/files/0af2bc56-2285-4edb-9a81-128071b51f09.jpg"
                alt="Студенты"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Популярные специальности</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {specialties.slice(0, 3).map((spec, idx) => (
                <Card
                  key={idx}
                  className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary animate-slide-up cursor-pointer"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                      <Icon name={spec.icon as any} className="text-white" size={32} />
                    </div>
                    <CardTitle className="font-heading">{spec.title}</CardTitle>
                    <CardDescription>{spec.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="mb-2">
                      {spec.salary}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Последние новости</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {news.map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge>{item.category}</Badge>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <CardTitle className="text-lg font-heading">{item.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">О колледже</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Коммерческий колледж «Перспектива» - современное образовательное учреждение с 15-летней историей
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {teachers.map((teacher, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="h-48 overflow-hidden">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{teacher.name}</CardTitle>
                  <CardDescription>{teacher.position}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    <Icon name="Award" className="inline mr-1" size={16} />
                    {teacher.experience}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8">
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">Виртуальный тур по колледжу</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src="https://cdn.poehali.dev/projects/91485a38-c241-4415-bc49-700a948b2565/files/b9fa9d0e-5763-43c0-a0da-334bdd31932a.jpg"
                alt="Здание колледжа"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://cdn.poehali.dev/projects/91485a38-c241-4415-bc49-700a948b2565/files/9927c315-fdf2-4917-9776-8615e208e382.jpg"
                alt="Учебные классы"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center">
              <Icon name="MapPin" className="mr-2 text-primary" size={28} />
              Контакты
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@perspektiva-college.ru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-gray-600">г. Москва, ул. Образцова, д. 15</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <Icon name="Map" className="text-gray-400" size={64} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="applicants" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Абитуриенту</h2>

          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold mb-8 text-center">Все специальности</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialties.map((spec, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-all hover:scale-105">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-3">
                      <Icon name={spec.icon as any} className="text-white" size={28} />
                    </div>
                    <CardTitle className="font-heading text-lg">{spec.title}</CardTitle>
                    <CardDescription className="mt-2">{spec.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Карьерные перспективы:</p>
                      <p className="text-sm text-gray-600">{spec.careers}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Средняя зарплата:</p>
                      <Badge variant="secondary" className="mt-1">{spec.salary}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-heading font-bold mb-6">Приемная кампания 2025</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">Документы для поступления:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1" size={18} />
                    <span>Аттестат об основном общем образовании</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1" size={18} />
                    <span>Паспорт (копия)</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1" size={18} />
                    <span>6 фотографий 3x4</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1" size={18} />
                    <span>Медицинская справка 086/у</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Сроки подачи документов:</h4>
                <div className="space-y-3">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="font-semibold">Начало приема</p>
                    <p className="text-2xl font-heading font-bold text-primary">20 июня 2025</p>
                  </div>
                  <div className="bg-secondary/10 rounded-lg p-4">
                    <p className="font-semibold">Окончание приема</p>
                    <p className="text-2xl font-heading font-bold text-secondary">15 августа 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 mb-12">
            <h3 className="text-2xl font-heading font-bold mb-6">Часто задаваемые вопросы</h3>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="font-semibold">
                  Какой проходной балл?
                </AccordionTrigger>
                <AccordionContent>
                  Зачисление происходит на основе среднего балла аттестата. В 2024 году проходной балл составил 3.8
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="font-semibold">
                  Есть ли общежитие?
                </AccordionTrigger>
                <AccordionContent>
                  Да, у нас есть современное общежитие на 200 мест с комфортными условиями проживания
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="font-semibold">
                  Сколько стоит обучение?
                </AccordionTrigger>
                <AccordionContent>
                  Стоимость обучения зависит от специальности и составляет от 45 000 до 65 000 рублей в год
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="font-semibold">
                  Гарантируете ли вы трудоустройство?
                </AccordionTrigger>
                <AccordionContent>
                  Да, мы сотрудничаем с более чем 150 компаниями-партнерами и гарантируем помощь в трудоустройстве всем выпускникам
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Card className="bg-gradient-to-br from-primary to-secondary text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Форма связи с приемной комиссией</CardTitle>
              <CardDescription className="text-white/80">Задайте вопрос и мы свяжемся с вами</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Ваше имя" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
              <Input placeholder="Email или телефон" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
              <Textarea placeholder="Ваш вопрос" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" rows={4} />
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold w-full">
                Отправить вопрос
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="students" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Студентам</h2>

          <Tabs defaultValue="schedule" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto">
              <TabsTrigger value="schedule" className="py-3">Расписание</TabsTrigger>
              <TabsTrigger value="library" className="py-3">Библиотека</TabsTrigger>
              <TabsTrigger value="scholarship" className="py-3">Стипендии</TabsTrigger>
              <TabsTrigger value="dormitory" className="py-3">Общежитие</TabsTrigger>
              <TabsTrigger value="bells" className="py-3">Звонки</TabsTrigger>
            </TabsList>

            <TabsContent value="schedule" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Расписание занятий</CardTitle>
                  <CardDescription>Актуальное расписание на текущую неделю</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-5 gap-4">
                    {['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'].map((day, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4">
                        <h4 className="font-heading font-bold mb-3 text-center">{day}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-white rounded p-2">
                            <p className="font-semibold">Математика</p>
                            <p className="text-xs text-muted-foreground">09:00 - 10:30</p>
                          </div>
                          <div className="bg-white rounded p-2">
                            <p className="font-semibold">Информатика</p>
                            <p className="text-xs text-muted-foreground">11:00 - 12:30</p>
                          </div>
                          <div className="bg-white rounded p-2">
                            <p className="font-semibold">Английский</p>
                            <p className="text-xs text-muted-foreground">13:00 - 14:30</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="library">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading flex items-center">
                    <Icon name="BookOpen" className="mr-2 text-primary" size={28} />
                    Электронная библиотека
                  </CardTitle>
                  <CardDescription>Доступ к тысячам учебников и материалов</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-4">
                  {['Учебники', 'Методические пособия', 'Научные статьи'].map((category, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                      <Icon name="Library" className="mx-auto mb-3 text-primary" size={48} />
                      <h4 className="font-heading font-bold">{category}</h4>
                      <p className="text-sm text-muted-foreground mt-2">500+ материалов</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="scholarship">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading flex items-center">
                    <Icon name="Trophy" className="mr-2 text-primary" size={28} />
                    Стипендии
                  </CardTitle>
                  <CardDescription>Информация о стипендиальных программах</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6">
                      <h4 className="font-heading font-bold text-lg mb-2">Академическая стипендия</h4>
                      <p className="text-3xl font-bold text-primary mb-2">3 000 ₽</p>
                      <p className="text-sm text-muted-foreground">Для студентов с оценками 4.5+</p>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6">
                      <h4 className="font-heading font-bold text-lg mb-2">Повышенная стипендия</h4>
                      <p className="text-3xl font-bold text-secondary mb-2">5 000 ₽</p>
                      <p className="text-sm text-muted-foreground">За достижения и отличную учебу</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dormitory">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading flex items-center">
                    <Icon name="Home" className="mr-2 text-primary" size={28} />
                    Общежитие
                  </CardTitle>
                  <CardDescription>Комфортные условия проживания для иногородних студентов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Условия проживания:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Icon name="Check" className="text-green-500 mr-2 mt-1" size={18} />
                          <span>Комнаты на 2-3 человека</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="text-green-500 mr-2 mt-1" size={18} />
                          <span>Wi-Fi на всей территории</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="text-green-500 mr-2 mt-1" size={18} />
                          <span>Общая кухня и прачечная</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="text-green-500 mr-2 mt-1" size={18} />
                          <span>Охрана 24/7</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6">
                      <h4 className="font-semibold text-lg mb-3">Стоимость проживания:</h4>
                      <p className="text-4xl font-heading font-bold text-primary mb-2">2 500 ₽</p>
                      <p className="text-muted-foreground">в месяц</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bells">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading flex items-center">
                    <Icon name="Clock" className="mr-2 text-primary" size={28} />
                    Расписание звонков
                  </CardTitle>
                  <CardDescription>Время начала и окончания занятий</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {schedule.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4">
                        <span className="font-heading font-bold text-lg">{item.pair}</span>
                        <span className="text-gray-700 font-semibold">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Учебный процесс</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {['Отделение программирования', 'Экономическое отделение', 'Отделение дизайна'].map((dept, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Building" className="text-white" size={24} />
                  </div>
                  <CardTitle className="font-heading">{dept}</CardTitle>
                  <CardDescription>Современное оборудование и опытные преподаватели</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="mb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Производственная практика</CardTitle>
              <CardDescription>Реальный опыт работы в ведущих компаниях</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Наши партнеры:</h4>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 flex items-center">
                      <Icon name="Briefcase" className="text-primary mr-3" size={20} />
                      <span>IT компании (Яндекс, VK, Сбер)</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 flex items-center">
                      <Icon name="Briefcase" className="text-primary mr-3" size={20} />
                      <span>Финансовые организации</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 flex items-center">
                      <Icon name="Briefcase" className="text-primary mr-3" size={20} />
                      <span>Дизайн-студии</span>
                    </div>
                  </div>
                </div>
                <img
                  src="https://cdn.poehali.dev/projects/91485a38-c241-4415-bc49-700a948b2565/files/9927c315-fdf2-4917-9776-8615e208e382.jpg"
                  alt="Практика"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl flex items-center">
                <Icon name="Calendar" className="mr-2 text-primary" size={28} />
                График учебного процесса на 2024-2025 год
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-green-50 border-l-4 border-green-500 rounded p-4">
                    <p className="font-semibold">1 семестр</p>
                    <p className="text-sm text-muted-foreground">1 сентября - 31 декабря</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-4">
                    <p className="font-semibold">Зимняя сессия</p>
                    <p className="text-sm text-muted-foreground">15 января - 31 января</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 rounded p-4">
                    <p className="font-semibold">2 семестр</p>
                    <p className="text-sm text-muted-foreground">1 февраля - 31 мая</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-4">
                    <p className="font-semibold">Летняя сессия</p>
                    <p className="text-sm text-muted-foreground">1 июня - 20 июня</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Новости и события</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Лента новостей</h3>
              <div className="space-y-4">
                {[
                  {
                    date: '18.10.2025',
                    title: 'Запуск программы стажировок в IT компаниях',
                    category: 'Карьера',
                    description: 'Студенты получат возможность стажироваться в ведущих технологических компаниях'
                  },
                  {
                    date: '15.10.2025',
                    title: 'Открытие новой лаборатории программирования',
                    category: 'Образование',
                    description: 'Современное оборудование для практических занятий по разработке ПО'
                  },
                  {
                    date: '10.10.2025',
                    title: 'Студенты колледжа победили в городской олимпиаде',
                    category: 'Достижения',
                    description: 'Команда заняла первое место в олимпиаде по математике'
                  },
                  {
                    date: '05.10.2025',
                    title: 'День открытых дверей - 20 октября',
                    category: 'События',
                    description: 'Приглашаем будущих студентов познакомиться с колледжем'
                  }
                ].map((newsItem, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{newsItem.category}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Icon name="Calendar" className="mr-1" size={14} />
                          {newsItem.date}
                        </span>
                      </div>
                      <CardTitle className="text-lg font-heading">{newsItem.title}</CardTitle>
                      <CardDescription>{newsItem.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Афиша мероприятий</h3>
              <div className="space-y-4">
                {events.map((event, idx) => (
                  <Card key={idx} className="bg-gradient-to-r from-primary/5 to-secondary/5 hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-xl p-4 text-center min-w-[80px]">
                          <p className="text-2xl font-heading font-bold">{event.date.split('.')[0]}</p>
                          <p className="text-sm">
                            {['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'][parseInt(event.date.split('.')[1]) - 1]}
                          </p>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="font-heading mb-2">{event.title}</CardTitle>
                          <CardDescription>{event.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="life" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Студенты вне учёбы</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Насыщенная студенческая жизнь - спорт, творчество, мероприятия
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Спортивные секции', icon: 'Dumbbell', count: '10+', description: 'Футбол, волейбол, баскетбол, плавание' },
              { title: 'Творческие клубы', icon: 'Music', count: '8', description: 'Театр, музыка, танцы, КВН' },
              { title: 'Студенческий совет', icon: 'Users', count: '50', description: 'Активных участников' },
              { title: 'Мероприятия в год', icon: 'Calendar', count: '30+', description: 'Концерты, фестивали, конкурсы' }
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="font-heading">{item.title}</CardTitle>
                  <p className="text-3xl font-heading font-bold text-primary my-2">{item.count}</p>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
            <CardHeader>
              <CardTitle className="font-heading text-2xl flex items-center">
                <Icon name="Utensils" className="mr-2 text-primary" size={28} />
                Студенческая столовая
              </CardTitle>
              <CardDescription>Вкусное и доступное питание каждый день</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <Icon name="Coffee" className="mx-auto mb-3 text-primary" size={40} />
                  <h4 className="font-semibold mb-2">Завтраки</h4>
                  <p className="text-2xl font-bold text-primary">150-250 ₽</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <Icon name="UtensilsCrossed" className="mx-auto mb-3 text-primary" size={40} />
                  <h4 className="font-semibold mb-2">Обеды</h4>
                  <p className="text-2xl font-bold text-primary">200-350 ₽</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <Icon name="Cookie" className="mx-auto mb-3 text-primary" size={40} />
                  <h4 className="font-semibold mb-2">Буфет</h4>
                  <p className="text-2xl font-bold text-primary">50-150 ₽</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 px-4 mt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4 flex items-center">
                <Icon name="GraduationCap" className="mr-2" size={28} />
                Перспектива
              </h3>
              <p className="text-white/80">Коммерческий колледж современного образования</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/80">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О колледже</button></li>
                <li><button onClick={() => scrollToSection('applicants')} className="hover:text-white transition-colors">Абитуриенту</button></li>
                <li><button onClick={() => scrollToSection('students')} className="hover:text-white transition-colors">Студентам</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center">
                  <Icon name="Phone" className="mr-2" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={16} />
                  info@perspektiva-college.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" className="mr-2" size={16} />
                  г. Москва, ул. Образцова, 15
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2025 Колледж «Перспектива». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;