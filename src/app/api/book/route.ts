import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, email, service, stylist, date, time, notes } = body

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Short SMS-friendly message (T-Mobile gateway ~160 chars)
    const smsText = [
      `NEW APPT REQUEST`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Stylist: ${stylist || 'No pref'}`,
      `Date: ${date} @ ${time}`,
      notes ? `Notes: ${notes}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: '6265423328@tmomail.net',
      subject: 'New Appointment Request',
      text: smsText,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Booking email error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
