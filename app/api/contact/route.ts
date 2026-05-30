import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // The Google Apps Script URL is now hidden on the server side
    const scriptUrl = "https://script.google.com/macros/s/AKfycbwEb8rJ0-o5mBKWJClNhqceU4OTuR4mItSYe3iFG8723d5Qr73_vAf8q8StJstJPXdZ/exec"

    await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    return NextResponse.json({ success: true, message: "Form submitted successfully" })
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
