import { Users, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutFeatures() {
  const features = [
    {
      icon: Users,
      title: "Uzman Teknisyenler",
      description: "Sertifikalı teknisyenlerimiz, kombiniz için en iyi bakım ve onarım hizmetlerini sunar.",
    },
    {
      icon: Award,
      title: "Sertifikalı Hizmetler",
      description:
        "Uluslararası standartlara uygun hizmetler sunarak, kombinizin verimli ve güvenli çalışmasını sağlıyoruz.",
    },
    {
      icon: TrendingUp,
      title: "Uygun Fiyatlı Kaliteli Hizmet",
      description: "İhtiyaçlarınıza uygun, uygun fiyatlı plan ve paketlerimizden yararlanın.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Profesyonel kombi servis hizmetlerimizle daha iyi bir yaşama başlayın
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-3 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background rounded-full p-12 shadow-lg">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Servis Talebi Oluşturun</h3>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ad Soyad"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Adresiniz"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                Hemen Başlayın
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
