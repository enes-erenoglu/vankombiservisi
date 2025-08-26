import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type ContactPayload = {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>
    const name = (body.name || "").toString().trim()
    const email = (body.email || "").toString().trim()
    const message = (body.message || "").toString().trim()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Zorunlu alanlar eksik" }, { status: 400 })
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com"
    const port = Number(process.env.SMTP_PORT || 587)
    const secure = (process.env.SMTP_SECURE || "false").toLowerCase() === "true" || port === 465
    const user = process.env.SMTP_USER || process.env.EMAIL_USER
    const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS
    const from = process.env.MAIL_FROM || user || ""
    const to = process.env.MAIL_TO || user || ""

    if (!user || !pass || !from || !to) {
      return NextResponse.json({ error: "Mail yapılandırması eksik" }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    })

    const subject = `Yeni iletişim formu: ${name}`
    const text = `Ad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`
    const html = `
      <div style="font-family:system-ui,Segoe UI,Arial,sans-serif;font-size:14px;color:#111">
        <h2 style="margin:0 0 12px">Yeni iletişim formu</h2>
        <p><strong>Ad:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mesaj:</strong></p>
        <p style="white-space:pre-line">${escapeHtml(message)}</p>
      </div>
    `

    await transporter.sendMail({ from, to, replyTo: email, subject, text, html })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("/api/contact error", error)
    return NextResponse.json({ error: "Beklenmeyen bir hata oluştu" }, { status: 500 })
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}


