import { useKaomojis } from "../lib/swr-hooks"
import { memo } from "react"

const SearchResult = memo(function SearchResult({
  pron
 }: {
  pron: string
 }) {
  const { kaomojis, isLoading, isError } = useKaomojis(pron)
  if (isLoading) {
    return null
  }
  if (isError) {
    return <p>エラー</p>
  }
  return (
    <div>
      <ul>
        {kaomojis!.map((kaomoji) => {
          return <li key={kaomoji.word}>{kaomoji.word}</li>
        })}
      </ul>
    </div>
  )
})

export default SearchResult