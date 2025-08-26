import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Settings, Thermometer, Clock, Shield, Users } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Servis Hizmetlerimiz",
      description:
        "Van Kombi Servisi olarak müşteri memnuniyetini hedefleyen bir anlayışa sahip, kendi bünyemizde oluşturduğumuz mobil servis ağı ile tüketicilerimize en kaliteli ve en hızlı servis hizmeti sunmayı amaçlıyoruz.",
      icon: Wrench,
    },
    {
      number: "02",
      title: "Van Kombi Servisi Çözüm Merkezi",
      description:
        "Van Kombi Servisi Çözüm Merkezi'ni arayarak 7Gün/24 Saat telefonda çözülebilecek cihaz arızalarını uzman müşteri temsilcilerimizle çözümleyebilir, servis gereken durumlar için servis yazdırabilirsiniz",
      icon: Settings,
    },
    {
      number: "03",
      title: "Van Kombi Servisi Hizmetleri",
      description:
        "Kombime neden bakım yaptırmalıyım, hangi aralıkla bakım yapılmalıdır, kombim arızalandı ne yapmalıyım? sorularının cevaplarını burada bulabilirsiniz.",
      icon: Thermometer,
    },
  ]

  const features = [
    {
      icon: Clock,
      title: "7/24 Kesintisiz Hizmet",
      description:
        "Kombi arızaları her zaman beklenmedik anlarda meydana gelebilir. Soğuk kış günlerinde kombi sorunu yaşamanız durumunda mağduriyet yaşamamanız adına haftanın her günü, günün her saati hizmet veriyoruz.",
    },
    {
      icon: Shield,
      title: "Garantili Hizmet",
      description:
        "Hizmetlerimizin tamamı garantili olup, işçiliğimizde ve kullanılan yedek parçalarda uzun ömürlü çözümler sunuyoruz. Garantili hizmet anlayışımız sayesinde kombi sorunlarınız tekrarlanmaz.",
    },
    {
      icon: Users,
      title: "Uzman Kadro",
      description:
        "Teknik ekibimiz, kombi bakım, onarım ve montaj konularında gerekli eğitimleri almış, alanında sertifikalı uzmanlardan oluşmaktadır. Her marka ve model kombiye uygun profesyonel çözümler üretiyoruz.",
    },
  ]

  return (
    <section id="hizmetler" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-card-foreground mb-3 md:mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Van'da kombi servisi alanında uzman ekibimizle 7/24 hizmet veriyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg md:text-xl font-bold mr-3 md:mr-4 flex-shrink-0">
                      {service.number}
                    </div>
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-secondary flex-shrink-0" />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-card-foreground leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center px-4">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
