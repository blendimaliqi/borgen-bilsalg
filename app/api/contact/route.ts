import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      customerName,
      customerEmail,
      customerPhone,
      merke,
      pris,
      arsmodell,
      maxKilometer,
      drivstoff,
      karosseri,
      girkasse,
      hjuldrift,
      message,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: customerEmail, // so you can reply directly to the customer
      subject: `Ny bilforespørsel fra ${customerName}`,
      text: `
Du har mottatt en ny bilforespørsel fra nettsiden:

Kundeinformasjon:
Navn: ${customerName}
E-post: ${customerEmail}
Telefon: ${customerPhone || "(ikke oppgitt)"}

Bilønsker:
Merke: ${merke}
Pris: ${pris}
Årsmodell: ${arsmodell}
Maks kilometer: ${maxKilometer}
Drivstoff: ${drivstoff}
Karosseri: ${karosseri}
Girkasse: ${girkasse}
Hjuldrift: ${hjuldrift}

Melding fra kunde:
${message || "(ingen melding)"}
      `,
    });

    console.log("Message sent:", info.messageId);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
