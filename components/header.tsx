"use client"

import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/yetis-logo.png"
              alt="YETİŞ Özel Kombi Servisi"
              width={200}
              height={80}
              className="h-10 md:h-12 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              Anasayfa
            </a>
            <a
              href="/hakkimizda"
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              Hakkımızda
            </a>
  
            <a
              href="/iletisim"
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              İletişim
            </a>
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden sm:flex items-center text-xs md:text-sm">
              <Phone className="h-3 w-3 md:h-4 md:w-4 text-primary mr-1 md:mr-2" />
              <span className="font-semibold text-primary">0554 104 32 65</span>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs md:text-sm px-3 md:px-4 py-2">
              Bize Ulaşın
            </Button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <a
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Anasayfa
              </a>
              <a
                href="/hakkimizda"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </a>
              <a
                href="#hizmetler"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetlerimiz
              </a>
              <a
                href="/iletisim"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </a>
              <div className="sm:hidden flex items-center pt-2 border-t border-border">
                <Phone className="h-4 w-4 text-primary mr-2" />
                <span className="font-semibold text-primary">0554 104 32 65</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
