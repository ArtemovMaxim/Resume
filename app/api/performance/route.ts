import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const metrics = await request.json()

    // Здесь можно сохранить метрики в базу данных или отправить в сервис мониторинга
    console.log("Performance metrics:", metrics)

    // В реальном приложении здесь будет код для отправки метрик в сервис мониторинга
    // Например, в Google Analytics, Sentry, LogRocket и т.д.

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing performance metrics:", error)
    return NextResponse.json({ error: "Failed to process metrics" }, { status: 500 })
  }
}

