import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  MessageSquare,
  TrendingUp,
  MapPin,
} from "lucide-react";

export default function Home() {
  const committees = [
    {
      id: 1,
      neighborhood: "Özlüce",
      title: "Özlüce Sosyal Yardımlaşma Komitesi",
      description:
        "Mahallemizedki ihtiyaç sahipleri ailelerin tespiti ve desteklenmesi sürecini yönetir.",
      date: "15.01.2024",
      icon: "🤝",
    },
    {
      id: 2,
      neighborhood: "İhsaniye",
      title: "İhsaniye Çevre ve Geri Dönüşüm Grubu",
      description:
        "Atık yönetimi, park ve yeşil alanların korunması üzerine projeler geliştirir.",
      date: "01.02.2024",
      icon: "🌱",
    },
    {
      id: 3,
      neighborhood: "Beşevler",
      title: "Beşevler Kültür ve Sanat Birimi",
      description:
        "Mahalle sakinleri için atölyeler, açık hava sineması ve kültürel geziler düzenler.",
      date: "10.02.2024",
      icon: "🎭",
    },
  ];

  const stats = [
    {
      label: "Mahalle Aktif",
      value: "64",
      icon: MapPin,
      color: "text-blue-600",
    },
    { label: "Gönüllü", value: "1200+", icon: Users, color: "text-green-600" },
    {
      label: "Tamamlanan Proje",
      value: "320",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      label: "Aktif Karar",
      value: "45",
      icon: MessageSquare,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-r from-blue-600 via-blue-700 to-purple-700 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[30px_30px]" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Nilüfer Mahalle Komiteleri
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Katılımcı demokrasi mahallenizde başlıyor. Kararlara ortak olun,{" "}
              <span className="font-semibold text-white">
                geleceği birlikte inşa edelim.
              </span>
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Yeni Karar Önerisi
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Decorative waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-12 md:h-20 fill-white"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-12 md:-mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <p className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Committees Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Aktif Komiteler
            </h2>
            <p className="text-muted-foreground text-lg">
              Mahallelerdeki güncel çalışmalar ve projeler
            </p>
          </div>
          <Button variant="outline" size="lg" className="group">
            Tüm Komiteler
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committees.map((committee) => (
            <Card
              key={committee.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 overflow-hidden"
            >
              <div className="h-2 bg-linear-to-r from-blue-500 to-purple-500" />
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="text-4xl">{committee.icon}</div>
                  <Badge variant="secondary" className="text-xs">
                    <MapPin className="h-3 w-3 mr-1" />
                    {committee.neighborhood}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {committee.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {committee.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    📅 {committee.date}
                  </span>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Detaylar
                    <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-16">
        <Card className="bg-linear-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[30px_30px]" />
          <CardContent className="p-8 md:p-12 relative">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Mahallenizde değişim yaratın
              </h3>
              <p className="text-xl mb-6 text-blue-100">
                Komitelerimize katılın, fikirlerinizi paylaşın ve topluluk
                kararlarında söz sahibi olun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="default"
                  className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg"
                >
                  Hemen Katıl
                </Button>
                <Button
                  size="default"
                  className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg"
                >
                  Nasıl Çalışır?
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
