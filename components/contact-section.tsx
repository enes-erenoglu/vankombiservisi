import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="iletisim" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Bizimle İletişime Geçin</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">Düşünceleriniz bizim için değerli</p>

            <Card className="bg-background/95 backdrop-blur">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <Input placeholder="İsminiz" className="bg-input border-border" />
                  <Input type="email" placeholder="Email adresiniz" className="bg-input border-border" />
                  <Textarea
                    placeholder="Bize aktarmak istediğiniz"
                    rows={4}
                    className="bg-input border-border resize-none"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Gönder</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center text-primary-foreground">
                <Phone className="h-6 w-6 mr-4 text-secondary" />
                <div>
                  <p className="font-semibold">Telefon</p>
                  <p className="text-primary-foreground/80">0554 104 32 65</p>
                </div>
              </div>

              <div className="flex items-center text-primary-foreground">
                <Mail className="h-6 w-6 mr-4 text-secondary" />
                <div>
                  <p className="font-semibold">E-posta</p>
                  <p className="text-primary-foreground/80">tanergurkan61@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center text-primary-foreground">
                <MapPin className="h-6 w-6 mr-4 text-secondary" />
                <div>
                  <p className="font-semibold">Adres</p>
                  <p className="text-primary-foreground/80">Van / Türkiye, 65030</p>
                </div>
              </div>

              <div className="flex items-center text-primary-foreground">
                <Clock className="h-6 w-6 mr-4 text-secondary" />
                <div>
                  <p className="font-semibold">Çalışma Saatleri</p>
                  <p className="text-primary-foreground/80">7/24 Hizmet</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="bg-background/95 backdrop-blur">
              <CardContent className="p-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Harita Görünümü</p>
                    <p className="text-sm">Kurtuluş Parkı, Van</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
