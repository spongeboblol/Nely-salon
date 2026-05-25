'use client'

import { useState } from 'react'
import Image from 'next/image'

interface SafeImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fallbackColor?: string
  sizes?: string
}

export default function SafeImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
  fallbackColor = '#FFE4EE',
  sizes,
}: SafeImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`flex items-center justify-center ${fill ? 'absolute inset-0' : ''} ${className ?? ''}`}
        style={{
          backgroundColor: fallbackColor,
          ...(fill ? {} : { width: '100%', aspectRatio: width && height ? `${width}/${height}` : '4/3' }),
        }}
      >
        <span className="text-accent/25 text-xs font-bold uppercase tracking-widest select-none">
          {alt}
        </span>
      </div>
    )
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes ?? '100vw'}
        onError={() => setError(true)}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={className}
      priority={priority}
      sizes={sizes}
      style={{ width: '100%', height: 'auto' }}
      onError={() => setError(true)}
    />
  )
}
