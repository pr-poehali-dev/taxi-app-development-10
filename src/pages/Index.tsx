import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeTab, setActiveTab] = useState('booking');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [selectedCar, setSelectedCar] = useState('comfort');

  const carTypes = [
    { id: 'economy', name: 'Эконом', price: '150', icon: 'Car', time: '3 мин' },
    { id: 'comfort', name: 'Комфорт', price: '250', icon: 'Sparkles', time: '5 мин' },
    { id: 'business', name: 'Бизнес', price: '450', icon: 'Crown', time: '7 мин' },
  ];

  const paymentMethods = [
    { id: '1', type: 'card', last4: '4242', brand: 'Visa', isDefault: true },
    { id: '2', type: 'card', last4: '8888', brand: 'Mastercard', isDefault: false },
    { id: '3', type: 'wallet', balance: '1,250', isDefault: false },
  ];

  const recentTrips = [
    { id: '1', from: 'ТЦ Галерея', to: 'Аэропорт', date: '15 дек', price: '850', rating: 5 },
    { id: '2', from: 'Офис', to: 'Дом', date: '14 дек', price: '320', rating: 5 },
    { id: '3', from: 'Ресторан', to: 'Кинотеатр', date: '12 дек', price: '180', rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container max-w-6xl mx-auto p-4 md:p-6">
        {/* Header */}
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/28477501-9e4a-42fb-8a88-192c3f092e27/files/fcd4da9e-21de-42cd-84e4-712751effdf1.jpg" 
                  alt="Такси" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Такси Татьяна
              </h1>
            </div>
            <Avatar className="w-12 h-12 border-2 border-primary/20 cursor-pointer hover:scale-105 transition-transform">
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                АИ
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 h-14 bg-white/80 backdrop-blur-sm shadow-lg">
            <TabsTrigger value="booking" className="gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
              <Icon name="MapPin" size={18} />
              <span className="hidden sm:inline">Поездка</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
              <Icon name="User" size={18} />
              <span className="hidden sm:inline">Профиль</span>
            </TabsTrigger>
            <TabsTrigger value="payment" className="gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
              <Icon name="CreditCard" size={18} />
              <span className="hidden sm:inline">Оплата</span>
            </TabsTrigger>
            <TabsTrigger value="support" className="gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
              <Icon name="MessageCircle" size={18} />
              <span className="hidden sm:inline">Помощь</span>
            </TabsTrigger>
          </TabsList>

          {/* Booking Tab */}
          <TabsContent value="booking" className="space-y-6 animate-fade-in">
            <Card className="shadow-xl border-none bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="Navigation" size={24} className="text-primary" />
                  Забронировать поездку
                </CardTitle>
                <CardDescription>Укажите маршрут и выберите автомобиль</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Route Selection */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup" className="text-base font-medium flex items-center gap-2">
                      <Icon name="CircleDot" size={16} className="text-primary" />
                      Откуда
                    </Label>
                    <Input
                      id="pickup"
                      placeholder="Введите адрес отправления"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="h-12 text-base border-2 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dropoff" className="text-base font-medium flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-secondary" />
                      Куда
                    </Label>
                    <Input
                      id="dropoff"
                      placeholder="Введите адрес назначения"
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                      className="h-12 text-base border-2 focus:border-secondary"
                    />
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-64 bg-gradient-to-br from-muted/50 to-muted rounded-2xl flex items-center justify-center border-2 border-muted overflow-hidden">
                  <div className="text-center space-y-3">
                    <Icon name="Map" size={48} className="text-muted-foreground/40 mx-auto" />
                    <p className="text-muted-foreground text-sm">Карта маршрута</p>
                  </div>
                </div>

                {/* Car Selection */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Icon name="Car" size={20} className="text-accent" />
                    Выберите класс автомобиля
                  </h3>
                  <div className="grid gap-3">
                    {carTypes.map((car) => (
                      <button
                        key={car.id}
                        onClick={() => setSelectedCar(car.id)}
                        className={`p-4 rounded-xl border-2 transition-all hover:scale-[1.02] ${
                          selectedCar === car.id
                            ? 'border-primary bg-gradient-to-r from-primary/10 to-secondary/10 shadow-lg'
                            : 'border-muted hover:border-primary/50 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              selectedCar === car.id
                                ? 'bg-gradient-to-br from-primary to-secondary text-white'
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              <Icon name={car.icon as any} size={24} />
                            </div>
                            <div className="text-left">
                              <p className="font-semibold text-lg">{car.name}</p>
                              <p className="text-sm text-muted-foreground">Подача ~ {car.time}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">{car.price} ₽</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg"
                >
                  <Icon name="Zap" size={20} className="mr-2" />
                  Заказать такси
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6 animate-fade-in">
            <Card className="shadow-xl border-none bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20 border-4 border-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">
                      АИ
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-1">Александр Иванов</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Icon name="Phone" size={14} />
                      +7 (999) 123-45-67
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Rating Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                    <CardContent className="pt-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Icon name="Star" size={24} className="text-primary fill-primary" />
                        <span className="text-3xl font-bold text-primary">4.9</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Рейтинг пассажира</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                    <CardContent className="pt-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Icon name="MapPin" size={24} className="text-secondary" />
                        <span className="text-3xl font-bold text-secondary">47</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Поездок выполнено</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                    <CardContent className="pt-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Icon name="Trophy" size={24} className="text-accent" />
                        <span className="text-3xl font-bold text-accent">Gold</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Статус в системе</p>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                {/* Recent Trips */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Icon name="History" size={20} className="text-primary" />
                    Недавние поездки
                  </h3>
                  <div className="space-y-3">
                    {recentTrips.map((trip) => (
                      <Card key={trip.id} className="hover:shadow-md transition-shadow bg-gradient-to-r from-white to-muted/20">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <Icon name="Circle" size={8} className="text-primary fill-primary" />
                                <span className="font-medium">{trip.from}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Icon name="MapPin" size={12} className="text-secondary" />
                                <span className="text-muted-foreground">{trip.to}</span>
                              </div>
                            </div>
                            <div className="text-right space-y-1">
                              <p className="font-semibold text-lg">{trip.price} ₽</p>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: trip.rating }).map((_, i) => (
                                  <Icon key={i} name="Star" size={12} className="text-primary fill-primary" />
                                ))}
                              </div>
                              <p className="text-xs text-muted-foreground">{trip.date}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Tab */}
          <TabsContent value="payment" className="space-y-6 animate-fade-in">
            <Card className="shadow-xl border-none bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="Wallet" size={24} className="text-primary" />
                  Способы оплаты
                </CardTitle>
                <CardDescription>Управляйте картами и балансом</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Wallet Balance */}
                <Card className="bg-gradient-to-br from-primary via-secondary to-accent text-white border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/80 text-sm mb-1">Баланс кошелька</p>
                        <p className="text-4xl font-bold">1,250 ₽</p>
                      </div>
                      <Icon name="Sparkles" size={48} className="text-white/40" />
                    </div>
                    <Button variant="secondary" className="mt-4 w-full bg-white/20 hover:bg-white/30 text-white border-white/40">
                      <Icon name="Plus" size={18} className="mr-2" />
                      Пополнить
                    </Button>
                  </CardContent>
                </Card>

                {/* Payment Methods */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Привязанные карты</h3>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Icon name="Plus" size={16} />
                      Добавить
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {paymentMethods.filter(m => m.type === 'card').map((method) => (
                      <Card key={method.id} className={`hover:shadow-md transition-all ${
                        method.isDefault ? 'border-2 border-primary bg-gradient-to-r from-primary/5 to-secondary/5' : ''
                      }`}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                                <Icon name="CreditCard" size={24} className="text-muted-foreground" />
                              </div>
                              <div>
                                <p className="font-semibold">{method.brand}</p>
                                <p className="text-sm text-muted-foreground">•••• {method.last4}</p>
                              </div>
                            </div>
                            {method.isDefault && (
                              <Badge className="bg-primary">По умолчанию</Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="space-y-6 animate-fade-in">
            <Card className="shadow-xl border-none bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="Headphones" size={24} className="text-primary" />
                  Служба поддержки
                </CardTitle>
                <CardDescription>Мы на связи 24/7</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Button variant="outline" className="h-auto p-4 justify-start gap-3 hover:border-primary hover:bg-primary/5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name="MessageCircle" size={20} className="text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">Онлайн-чат</p>
                      <p className="text-xs text-muted-foreground">Ответим за минуту</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 justify-start gap-3 hover:border-secondary hover:bg-secondary/5">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-secondary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">Позвонить</p>
                      <p className="text-xs text-muted-foreground">8-800-123-45-67</p>
                    </div>
                  </Button>
                </div>

                <Separator />

                {/* FAQ */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Icon name="HelpCircle" size={20} className="text-accent" />
                    Частые вопросы
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Как изменить способ оплаты?',
                      'Что делать, если водитель опаздывает?',
                      'Как отменить поездку?',
                      'Как повысить свой рейтинг?',
                    ].map((question, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{question}</p>
                            <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-semibold text-lg">Написать в поддержку</h3>
                  <div className="space-y-3">
                    <Input placeholder="Тема обращения" className="h-12" />
                    <textarea
                      placeholder="Опишите вашу проблему..."
                      className="w-full min-h-32 p-3 rounded-lg border-2 border-input bg-background resize-none focus:border-primary focus:outline-none"
                    />
                    <Button className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}