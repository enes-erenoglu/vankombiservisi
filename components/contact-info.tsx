import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <Card className="bg-background border-border">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-card-foreground">İletişim Bilgileri</h3>

          <div className="space-y-6">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-primary mr-4" />
              <div>
                <p className="font-semibold text-card-foreground">Telefon</p>
                <p className="text-muted-foreground">0554 104 32 65</p>
              </div>
            </div>

            <div className="flex items-center">
              <Mail className="h-6 w-6 text-primary mr-4" />
              <div>
                <p className="font-semibold text-card-foreground">E-posta</p>
                <p className="text-muted-foreground">tanergurkan61@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-primary mr-4" />
              <div>
                <p className="font-semibold text-card-foreground">Adres</p>
                <p className="text-muted-foreground">Van / Türkiye, 65030</p>
              </div>
            </div>

            <div className="flex items-center">
              <Clock className="h-6 w-6 text-primary mr-4" />
              <div>
                <p className="font-semibold text-card-foreground">Çalışma Saatleri</p>
                <p className="text-muted-foreground">7/24 Kesintisiz Hizmet</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map */}
      <Card className="bg-background border-border">
        <CardContent className="p-0">
          <div className="w-full h-80 bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8234567890123!2d43.3833333!3d38.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDMwJzAwLjAiTiA0M8KwMjMnMDAuMCJF!5e0!3m2!1str!2str!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="YETİŞ Özel Kombi Servisi Konum"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
