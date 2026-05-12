import { NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export async function POST() {
  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([841.89, 595.28]); // A4 landscape
    const { width, height } = page.getSize();

    const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Background colour — forest green
    page.drawRectangle({
      x: 0, y: 0, width, height,
      color: rgb(0.110, 0.055, 0.020),
    });

    // Gold border
    page.drawRectangle({
      x: 30, y: 30, width: width - 60, height: height - 60,
      borderColor: rgb(0.788, 0.659, 0.298),
      borderWidth: 2,
      color: rgb(0.110, 0.055, 0.020),
    });

    // Inner ivory background
    page.drawRectangle({
      x: 50, y: 50, width: width - 100, height: height - 100,
      color: rgb(0.969, 0.953, 0.925),
    });

    // Title
    page.drawText("SAMYUT YOGA", {
      x: width / 2 - 120, y: height - 120,
      size: 32, font: timesBold,
      color: rgb(0.110, 0.055, 0.020),
    });

    // Subtitle
    page.drawText("Certificate of Completion", {
      x: width / 2 - 135, y: height - 165,
      size: 24, font: timesRoman,
      color: rgb(0.788, 0.659, 0.298),
    });

    // Presented to
    page.drawText("This is to certify that", {
      x: width / 2 - 80, y: height - 215,
      size: 14, font: helvetica,
      color: rgb(0.3, 0.3, 0.3),
    });

    // Student name
    page.drawText("Student Name", {
      x: width / 2 - 90, y: height - 255,
      size: 28, font: timesBold,
      color: rgb(0.110, 0.055, 0.020),
    });

    // Course
    page.drawText("has successfully completed the", {
      x: width / 2 - 100, y: height - 295,
      size: 14, font: helvetica,
      color: rgb(0.3, 0.3, 0.3),
    });

    page.drawText("200-Hour Ashtanga Yoga Teacher Training Course", {
      x: width / 2 - 195, y: height - 335,
      size: 18, font: timesBold,
      color: rgb(0.110, 0.055, 0.020),
    });

    // School details
    page.drawText("Samyut Yoga · Mysore, Karnataka, India", {
      x: width / 2 - 140, y: height - 375,
      size: 12, font: helvetica,
      color: rgb(0.5, 0.5, 0.5),
    });

    // Accreditation
    page.drawText("Yoga Alliance Registered Yoga School (RYS 200) · E-RYT 500 Faculty", {
      x: width / 2 - 200, y: height - 405,
      size: 10, font: helvetica,
      color: rgb(0.5, 0.5, 0.5),
    });

    // Signature line
    const sigY = 110;
    page.drawLine({
      start: { x: 150, y: sigY + 20 }, end: { x: 350, y: sigY + 20 },
      thickness: 1, color: rgb(0.7, 0.7, 0.7),
    });
    page.drawText("Yogacharya Aravind Prasad", {
      x: 155, y: sigY + 5,
      size: 11, font: timesRoman, color: rgb(0.3, 0.3, 0.3),
    });
    page.drawText("E-RYT 500, YACEP", {
      x: 175, y: sigY - 10,
      size: 9, font: helvetica, color: rgb(0.5, 0.5, 0.5),
    });

    // Date
    page.drawLine({
      start: { x: width - 350, y: sigY + 20 }, end: { x: width - 150, y: sigY + 20 },
      thickness: 1, color: rgb(0.7, 0.7, 0.7),
    });
    page.drawText(new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" }), {
      x: width - 320, y: sigY + 5,
      size: 11, font: timesRoman, color: rgb(0.3, 0.3, 0.3),
    });
    page.drawText("Date of Completion", {
      x: width - 290, y: sigY - 10,
      size: 9, font: helvetica, color: rgb(0.5, 0.5, 0.5),
    });

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="samyut-yoga-certificate.pdf"',
      },
    });
  } catch (err) {
    console.error("Certificate generation error:", err);
    return NextResponse.json({ error: "Failed to generate certificate" }, { status: 500 });
  }
}
