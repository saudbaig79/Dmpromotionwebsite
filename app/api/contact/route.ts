import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, message, to } = body

    // Configure your email service here
    // This is a placeholder - you'll need to set up your email service
    // For now, we'll just log and return success
    
    console.log('Contact form submission:', {
      name: `${firstName} ${lastName}`,
      email,
      company,
      message,
      sentTo: to
    })

    // In production, implement actual email sending
    // Example with nodemailer:
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    })

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: to,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })
    */

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json({ success: false }, { status: 500 })
  }
}
