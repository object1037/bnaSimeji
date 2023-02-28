import clsx from 'clsx'
import { useState } from 'react'

export const KaomojiBox = ({ kaomoji }: { kaomoji: string }) => {
  const [copied, setCopied] = useState(false)

  const listStyle = [
    'truncate',
    'max-w-full',
    'py-2',
    'px-4',
    'rounded-full',
    'border',
    'transition',
  ]
  const defaultStyle = [
    'border-stone-200',
    'dark:border-stone-700',
    'hover:bg-stone-100',
    'dark:hover:bg-stone-700',
  ]
  const copiedStyle = [
    'border-emerald-400',
    'dark:border-emerald-500',
    'bg-emerald-100',
    'dark:bg-emerald-900',
  ]

  const clickHandler = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2500)
    })
  }

  return (
    <button
      className={clsx(listStyle, copied ? copiedStyle : defaultStyle)}
      onClick={() => clickHandler(kaomoji)}
    >
      {kaomoji}
    </button>
  )
}
