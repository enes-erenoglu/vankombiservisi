import { Card, CardContent } from "@/components/ui/card"

export function AboutServices() {
  const services = [
    {
      title: "Kombi Montajı",
      description:
        "Yeni kombi alımlarınızda, doğru montaj büyük önem taşır. Uzman ekibimiz, kombinizin montajını en doğru ve güvenilir şekilde gerçekleştirir.",
    },
    {
      title: "Petek Temizliği",
      description:
        "Kombinizin daha verimli çalışması için petek temizliği şarttır. Özel ekipmanlarımızla radyatör ve tesisat temizliğini profesyonelce gerçekleştirerek ısı verimliliğini artırıyoruz.",
    },
    {
      title: "Vizyonumuz",
      description:
        "Müşteri memnuniyetini en üst seviyede tutarak, kombi bakım ve onarım hizmetlerinde lider firma olmayı hedefliyoruz. Teknolojiyi yakından takip eden, alanında uzman ekibimizle hizmet kalitemizi sürekli geliştiriyoruz ve sektörde fark yaratıyoruz.",
    },
    {
      title: "Misyonumuz",
      description:
        "Güvenilir, hızlı ve garantili kombi servis hizmetleri sunarak, yaşam alanlarınızı konforlu ve güvenli hale getirmek. Enerji verimliliği sağlayan çözümlerle hem doğayı korumak hem de müşterilerimizin enerji maliyetlerini düşürmek.",
    },
    {
      title: "Müşteri Memnuniyeti Odaklı Hizmet",
      description:
        "Bizim için en önemli değer, müşteri memnuniyetidir. Her müşterimize özel çözümler sunarak ihtiyaçlarını en doğru şekilde karşılıyor, güvenilir hizmet anlayışımızla fark yaratıyoruz. Kombinizle ilgili tüm sorularınızda tek yapmanız gereken bize ulaşmak; gerisini biz hallediyoruz.",
    },
    {
      title: "Uygun Fiyat Politikası",
      description:
        "Kaliteli hizmeti uygun fiyatlarla sunmayı hedefliyoruz. Ekonomik ve şeffaf fiyat politikamız sayesinde bütçenizi zorlamadan kombiniz için gerekli tüm hizmetleri alabilirsiniz.",
    },
    {
      title: "Uzman Kadro",
      description:
        "Teknik ekibimiz, kombi bakım, onarım ve montaj konularında gerekli eğitimleri almış, alanında sertifikalı uzmanlardan oluşmaktadır. Ekibimiz, her marka ve model kombiye uygun profesyonel çözümler üreterek, siz değerli müşterilerimize hızlı ve garantili hizmet sunmaktadır.",
    },
    {
      title: "7/24 Kesintisiz Hizmet",
      description:
        "Kombi arızaları her zaman beklenmedik anlarda meydana gelebilir. Soğuk kış günlerinde kombi sorunu yaşamanız durumunda mağduriyet yaşamamanız adına haftanın her günü, günün 24 saati hizmet veriyoruz. Çağrı merkezimizi arayarak günün her anında profesyonel destek alabilirsiniz.",
    },
    {
      title: "Garantili Hizmet",
      description:
        "Hizmetlerimizin tamamı garantili olup, işçiliğimizde ve kullanılan yedek parçalarda uzun ömürlü çözümler sunuyoruz. Garantili hizmet anlayışımız sayesinde kombi sorunlarınız tekrarlanmaz ve ek maliyetlerden kaçınmış olursunuz.",
    },
    {
      title: "Hızlı ve Etkili Çözümler",
      description:
        "Kombi arızalarında hızlı müdahale, sorunun büyümesini önler ve yaşam konforunuzu kısa sürede geri kazandırır. Profesyonel ekibimiz, arıza tespiti ve onarım aşamalarını hızla tamamlayarak kombinizin eski performansına kavuşmasını sağlar.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Hizmetlerimiz</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kombi Servisi olarak sunduğumuz hizmetler şunlardır:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
