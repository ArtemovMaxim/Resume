"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Accessibility, Eye, Type, Contrast, RotateCcw } from "lucide-react"

type AccessibilitySettings = {
  fontSize: number
  lineHeight: number
  letterSpacing: number
  contrast: "normal" | "high" | "inverted"
  reducedMotion: boolean
  dyslexicFont: boolean
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100, // процент от базового размера
  lineHeight: 1.5,
  letterSpacing: 0,
  contrast: "normal",
  reducedMotion: false,
  dyslexicFont: false,
}

export default function AccessibilitySettings() {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings)
  const [mounted, setMounted] = useState(false)

  // Загружаем настройки из localStorage при монтировании
  useEffect(() => {
    setMounted(true)
    const savedSettings = localStorage.getItem("accessibility-settings")
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings)
        setSettings(parsedSettings)
        applySettings(parsedSettings)
      } catch (e) {
        console.error("Failed to parse accessibility settings", e)
      }
    }
  }, [])

  // Сохраняем настройки в localStorage при изменении
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("accessibility-settings", JSON.stringify(settings))
      applySettings(settings)
    }
  }, [settings, mounted])

  // Применяем настройки к документу
  const applySettings = (settings: AccessibilitySettings) => {
    const root = document.documentElement

    // Размер шрифта
    root.style.setProperty("--accessibility-font-size", `${settings.fontSize}%`)

    // Высота строки
    root.style.setProperty("--accessibility-line-height", settings.lineHeight.toString())

    // Межбуквенное расстояние
    root.style.setProperty("--accessibility-letter-spacing", `${settings.letterSpacing}px`)

    // Контрастность
    root.classList.remove("high-contrast", "inverted-contrast")
    if (settings.contrast === "high") {
      root.classList.add("high-contrast")
    } else if (settings.contrast === "inverted") {
      root.classList.add("inverted-contrast")
    }

    // Уменьшенное движение
    if (settings.reducedMotion) {
      root.classList.add("reduced-motion")
    } else {
      root.classList.remove("reduced-motion")
    }

    // Шрифт для дислексии
    if (settings.dyslexicFont) {
      root.classList.add("dyslexic-font")
    } else {
      root.classList.remove("dyslexic-font")
    }
  }

  // Сброс настроек
  const resetSettings = () => {
    setSettings(defaultSettings)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full" aria-label="Настройки доступности">
          <Accessibility className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Настройки доступности</DialogTitle>
          <DialogDescription>Настройте параметры отображения сайта для комфортного просмотра.</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="text">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="text">
              <Type className="h-4 w-4 mr-2" />
              Текст
            </TabsTrigger>
            <TabsTrigger value="vision">
              <Eye className="h-4 w-4 mr-2" />
              Зрение
            </TabsTrigger>
            <TabsTrigger value="motion">
              <Contrast className="h-4 w-4 mr-2" />
              Движение
            </TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="space-y-4">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="font-size">Размер шрифта: {settings.fontSize}%</Label>
                </div>
                <Slider
                  id="font-size"
                  min={80}
                  max={200}
                  step={10}
                  value={[settings.fontSize]}
                  onValueChange={(value) => setSettings({ ...settings, fontSize: value[0] })}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="line-height">Высота строки: {settings.lineHeight}</Label>
                </div>
                <Slider
                  id="line-height"
                  min={1}
                  max={2.5}
                  step={0.1}
                  value={[settings.lineHeight]}
                  onValueChange={(value) => setSettings({ ...settings, lineHeight: value[0] })}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="letter-spacing">Межбуквенное расстояние: {settings.letterSpacing}px</Label>
                </div>
                <Slider
                  id="letter-spacing"
                  min={0}
                  max={5}
                  step={0.5}
                  value={[settings.letterSpacing]}
                  onValueChange={(value) => setSettings({ ...settings, letterSpacing: value[0] })}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="dyslexic-font">Шрифт для дислексии</Label>
                <Switch
                  id="dyslexic-font"
                  checked={settings.dyslexicFont}
                  onCheckedChange={(checked) => setSettings({ ...settings, dyslexicFont: checked })}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="vision" className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant={settings.contrast === "normal" ? "default" : "outline"}
                  onClick={() => setSettings({ ...settings, contrast: "normal" })}
                >
                  Обычный
                </Button>
                <Button
                  variant={settings.contrast === "high" ? "default" : "outline"}
                  onClick={() => setSettings({ ...settings, contrast: "high" })}
                >
                  Высокий контраст
                </Button>
                <Button
                  variant={settings.contrast === "inverted" ? "default" : "outline"}
                  onClick={() => setSettings({ ...settings, contrast: "inverted" })}
                >
                  Инвертированный
                </Button>
              </div>

              <div className="p-4 border rounded-md">
                <h3 className="text-lg font-medium mb-2">Пример текста</h3>
                <p>Это пример текста для проверки настроек контрастности и читаемости.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="motion" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="reduced-motion">Уменьшенное движение</Label>
                <Switch
                  id="reduced-motion"
                  checked={settings.reducedMotion}
                  onCheckedChange={(checked) => setSettings({ ...settings, reducedMotion: checked })}
                />
              </div>

              <p className="text-sm text-muted-foreground">
                Включение этой опции уменьшит или отключит анимации на сайте.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end mt-4">
          <Button variant="outline" onClick={resetSettings} className="flex items-center">
            <RotateCcw className="h-4 w-4 mr-2" />
            Сбросить настройки
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

