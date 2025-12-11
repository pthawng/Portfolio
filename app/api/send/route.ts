import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    // Check for API Key first
    const apiKey = process.env.RESEND_API_KEY;
    console.log("Debug: API Key loaded?", apiKey ? `Yes(${apiKey.substring(0, 5)}...)` : "No");

    if (!apiKey) {
        console.error("❌ ERROR: RESEND_API_KEY is missing in .env.local");
        return NextResponse.json(
            { error: "Server Configuration Error: Missing API Key" },
            { status: 500 }
        );
    }

    const resend = new Resend(apiKey);

    try {
        const { name, email, message } = await req.json();

        // Validate inputs
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL || "delivered@resend.dev",
            subject: `New message from ${name}`,
            replyTo: email,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                    <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                        <!-- Header -->
                        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">New Portfolio Contact</h1>
                        </div>
                        
                        <!-- Content -->
                        <div style="padding: 40px 30px;">
                            <div style="margin-bottom: 25px;">
                                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                                <p style="margin: 0; color: #1f2937; font-size: 18px; font-weight: 500;">${name}</p>
                            </div>
                            
                            <div style="margin-bottom: 25px;">
                                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                                <p style="margin: 0;">
                                    <a href="mailto:${email}" style="color: #667eea; font-size: 18px; font-weight: 500; text-decoration: none;">${email}</a>
                                </p>
                            </div>
                            
                            <div style="margin-bottom: 0;">
                                <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                                <div style="background-color: #f9fafb; border-left: 4px solid #667eea; padding: 20px; border-radius: 8px;">
                                    <p style="margin: 0; color: #374151; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Footer -->
                        <div style="background-color: #f9fafb; padding: 20px 30px; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0; color: #9ca3af; font-size: 14px; text-align: center;">
                                Sent from your Portfolio Contact Form
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        if (data.error) {
            console.error("Resend API Error:", data.error);
            return NextResponse.json({ error: data.error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Internal Server Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
