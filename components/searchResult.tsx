import { useKaomojis } from "../lib/swr-hooks"
import { memo } from "react"

const SearchResult = memo(function SearchResult({
  pron
 }: {
  pron: string
 }) {
  const { kaomojis, isLoading, isError } = useKaomojis(pron)
  return (
    <div>aa</div>
  )
})

export default SearchResult