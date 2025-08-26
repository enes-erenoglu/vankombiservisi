import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-accent-foreground">
                YETİŞ Özel Kombi Servisi
              </h3>
              <p className="text-accent-foreground/80 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                Van'da profesyonel kombi servisi hizmetleri. 7/24 kesintisiz hizmet, uzman teknisyen kadrosu ve
                garantili çözümler.
              </p>

              {/* Social Media */}
              <div className="flex space-x-3 md:space-x-4">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <Facebook className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <Twitter className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-accent-foreground">Hızlı Linkler</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="/"
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm md:text-base"
                  >
                    Anasayfa
                  </a>
                </li>
                <li>
                  <a
                    href="/hakkimizda"
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm md:text-base"
                  >
                    Hakkımızda
                  </a>
                </li>
         
                <li>
                  <a
                    href="/iletisim"
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm md:text-base"
                  >
                    İletişim
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-accent-foreground">Hizmetlerimiz</h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="text-accent-foreground/80 text-sm md:text-base">Kombi Bakımı</li>
                <li className="text-accent-foreground/80 text-sm md:text-base">Kombi Arıza Onarımı</li>
                <li className="text-accent-foreground/80 text-sm md:text-base">Kombi Montajı</li>
                <li className="text-accent-foreground/80 text-sm md:text-base">Petek Temizliği</li>
                <li className="text-accent-foreground/80 text-sm md:text-base">7/24 Acil Servis</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-accent-foreground">İletişim</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-accent-foreground/80 text-sm md:text-base">0554 104 32 65</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-accent-foreground/80 text-sm md:text-base break-all">
                    tanergurkan61@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-accent-foreground/80 text-sm md:text-base">Van / Türkiye, 65030</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-accent-foreground/80 text-sm md:text-base">7/24 Hizmet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-accent-foreground/20 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-accent-foreground/60 text-xs md:text-sm text-center lg:text-left">
              Copyright © 2019 YETİŞ Özel Kombi Servisi - Tüm hakları saklıdır.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 md:gap-4 text-xs md:text-sm">
              <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                Müşteri Memnuniyet Politikası
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                Hizmet Şartları
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                KVKK
              </a>
            </div>
          </div>

          <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-accent-foreground/10">
            <p className="text-accent-foreground/60 text-xs text-center leading-relaxed px-2">
              Sitemizde ve duyurularımızda kullanılan logolar ve markalar ilgili firmaların tescilli markasıdır. İlgili
              markaların özel teknik servisi olarak hizmet vermekteyiz. Sitemiz ve bilgiler İzinsiz Kullanılamaz ve
              yasakttır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
