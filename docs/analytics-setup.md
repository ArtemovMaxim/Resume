# Настройка аналитики для сайта-портфолио

Этот документ содержит инструкции по настройке различных аналитических инструментов для вашего сайта-портфолио.

## Содержание

1. [Google Analytics](#google-analytics)
2. [Яндекс.Метрика](#яндексметрика)
3. [Facebook Pixel](#facebook-pixel)
4. [Отслеживание UTM-меток](#отслеживание-utm-меток)
5. [Безопасное хранение токенов](#безопасное-хранение-токенов)

## Google Analytics

### Шаг 1: Создание аккаунта Google Analytics

1. Перейдите на [analytics.google.com](https://analytics.google.com/)
2. Войдите в свой аккаунт Google
3. Нажмите "Начать измерение"
4. Создайте новый аккаунт:
   - Введите название аккаунта (например, "Портфолио Максима Артемова")
   - Выберите часовой пояс и валюту
   - Нажмите "Далее"
5. Создайте ресурс:
   - Введите название ресурса (например, "maxim-artemov.ru")
   - Выберите отрасль и размер бизнеса
   - Нажмите "Создать"
6. Примите условия использования

### Шаг 2: Получение идентификатора отслеживания

1. После создания ресурса вы получите идентификатор отслеживания (Measurement ID) в формате `G-XXXXXXXXXX`
2. Скопируйте этот идентификатор

### Шаг 3: Интеграция с сайтом

1. Откройте файл `.env.local` (создайте его, если он не существует)
2. Добавьте переменную окружения:

