import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export const SearchForm = ({
  pron
}: {
  pron: string
}) => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push(`/${inputValue}`)
  }

  const formStyle = [
    'flex',
    'justify-center',
    'space-x-3',
    'max-w-md',
    'mx-auto'
  ]
  const buttonStyle = [
    'bg-gray-900',
    'dark:bg-gray-100',
    'text-gray-100',
    'dark:text-gray-900',
    'rounded-md',
    'border',
    'border-gray-900',
    'dark:border-gray-100',
    'p-3',
    'text-xl',
    'hover:bg-transparent',
    'hover:text-gray-900',
    'dark:hover:text-gray-100',
    'transition'
  ]

  return (
    <form onSubmit={submitHandler} className={clsx(formStyle)}>
      <input
        aria-label="search kaomoji"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={pron ? pron : "もち"}
        className="rounded-md flex-grow dark:bg-gray-800"
      />
      <button type="submit" className={clsx(buttonStyle)} aria-label="検索">
        <FiSearch />
      </button>
    </form>
  )
}