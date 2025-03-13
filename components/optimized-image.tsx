"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoadingComplete"> {
  fallback?: string
  lowQuality?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  className,
  fallback = "/placeholder.svg",
  lowQuality = false,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  // Сбрасываем состояние при изменении src
  useEffect(() => {
    setIsLoaded(false)
    setError(false)
  }, [src])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && !error && <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />}
      <Image
        src={error ? fallback : src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          lowQuality ? "filter blur-[1px]" : "",
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        priority={priority}
        {...props}
      />
    </div>
  )
}

