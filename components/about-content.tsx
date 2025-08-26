import Image from "next/image"

export function AboutContent() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Profesyonel Servis Desteğimizle Hizmetinizdeyiz
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Van Kombi Servisi olarak sektörde yılların tecrübesi ve müşteri memnuniyetini esas alan hizmet
                anlayışımızla faaliyet göstermekteyiz. Alanında uzman, eğitimli ve sertifikalı teknik ekibimizle kombi
                arıza tespiti, bakım, onarım ve montaj hizmetlerinde hızlı, güvenilir ve profesyonel çözümler sunuyoruz.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kombinin sorunsuz çalışması, evinizin sıcaklığı ve yaşam konforunuz için 7/24 kesintisiz hizmet sunmayı
                ilke edinmiş bir firmayız. Isıtma sistemleri ve kombi teknolojilerinde yaşanan yenilikleri yakından
                takip ederek, her marka ve model kombiye yönelik hizmetlerimizi sürekli geliştiriyoruz.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Neden Biz?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kombi servis hizmetlerinde başarımızı oluşturan temel değerlerimizden biri güven ve kalitedir.
                Müşterilerimizle aramızdaki güven bağını kurarken, hizmetlerimizin her aşamasında şeffaflık ve dürüstlük
                ilkesini benimsiyoruz.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/professional-boiler-technician-working-on-heating-.png"
              alt="Profesyonel kombi teknisyeni"
              width={500}
              height={600}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
