import Image from 'next/image'
import type { Logo } from '@/lib/content'

// Sizes each logo so wide wordmarks and square marks carry similar visual
// weight: height shrinks as the logo gets wider (inverse square root of aspect).
export default function LogoImage({
  logo,
  base = 40,
  maxWidth = 150,
  className = '',
}: {
  logo: Logo
  base?: number
  maxWidth?: number
  className?: string
}) {
  const aspect = logo.w / logo.h
  let height = base / Math.sqrt(Math.max(aspect, 0.6) / 1.6)
  height = Math.min(height, base * 1.35)
  let width = height * aspect
  if (width > maxWidth) {
    width = maxWidth
    height = width / aspect
  }
  return (
    <Image
      src={logo.src}
      alt={logo.name}
      width={Math.round(width)}
      height={Math.round(height)}
      className={`select-none ${className}`}
      style={{ width: Math.round(width), height: Math.round(height) }}
    />
  )
}
