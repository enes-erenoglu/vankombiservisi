"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const phoneNumber = "905541043265" // WhatsApp format: country code + number without +
  const message = "Merhaba, kombi servisi hakkında bilgi almak istiyorum."

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="h-7 w-7" />
    </Button>
  )
}
