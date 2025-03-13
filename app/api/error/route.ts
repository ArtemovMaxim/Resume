import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const errorData = await request.json()

    // Здесь можно сохранить ошибку в базу данных или отправить в сервис мониторинга
    console.error("Client error:", errorData)

    // В реальном приложении здесь будет код для отправки ошибок в сервис мониторинга
    // Например, в Sentry, LogRocket, Bugsnag и т.д.

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing error report:", error)
    return NextResponse.json({ error: "Failed to process error report" }, { status: 500 })
  }
}

