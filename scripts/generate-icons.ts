// Этот скрипт можно запустить с помощью команды:
// npx ts-node scripts/generate-icons.ts

import sharp from "sharp"
import fs from "fs"
import path from "path"

// Создаем директорию для иконок, если она не существует
const iconsDir = path.join(process.cwd(), "public", "icons")
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true })
}

// Путь к исходному изображению (логотип)
const sourcePath = path.join(process.cwd(), "public", "logo.png")

// Размеры иконок для PWA
const sizes = [72, 96, 128, 144, 152, 192, 384, 512]

// Генерация иконок
async function generateIcons() {
  try {
    // Проверяем, существует ли исходное изображение
    if (!fs.existsSync(sourcePath)) {
      console.error("Исходное изображение не найдено:", sourcePath)
      return
    }

    // Создаем иконки разных размеров
    for (const size of sizes) {
      await sharp(sourcePath)
        .resize(size, size)
        .toFile(path.join(iconsDir, `icon-${size}x${size}.png`))

      console.log(`Создана иконка размером ${size}x${size}`)
    }

    // Создаем иконку для Apple Touch Icon
    await sharp(sourcePath)
      .resize(180, 180)
      .toFile(path.join(process.cwd(), "public", "apple-touch-icon.png"))

    console.log("Создана иконка apple-touch-icon.png")

    // Создаем иконку для favicon
    await sharp(sourcePath)
      .resize(32, 32)
      .toFile(path.join(process.cwd(), "public", "favicon.ico"))

    console.log("Создана иконка favicon.ico")

    // Создаем иконку для маскируемых иконок
    await sharp(sourcePath).resize(512, 512).toFile(path.join(iconsDir, "maskable-icon.png"))

    console.log("Создана маскируемая иконка")

    // Создаем иконку для уведомлений
    await sharp(sourcePath).resize(72, 72).toFile(path.join(iconsDir, "badge-72x72.png"))

    console.log("Создана иконка для уведомлений")

    console.log("Все иконки успешно созданы!")
  } catch (error) {
    console.error("Ошибка при создании иконок:", error)
  }
}

generateIcons()

