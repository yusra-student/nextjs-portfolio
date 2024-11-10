import { NextResponse } from "next/server";
import { Resend } from "resend";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL!;

interface RequestBody {
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request): Promise<Response> {
  const { email, subject, message }: RequestBody = await req.json();
  console.log(email, subject, message);
  
  try {
    // Convert the JSX to HTML
    const htmlContent = renderToStaticMarkup(
      <>
        <h1>{subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>{message}</p>
      </>
    );

    // Send the email with HTML content
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      html: htmlContent, // Pass the HTML string instead of JSX
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'An error occurred'
    });
  }
}
