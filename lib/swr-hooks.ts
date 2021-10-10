import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export function useKaomojis(pron: string) {
  const { data, error } = useSWR(`/api/kaomoji/${pron}`, fetcher)

  return {
    kaomojis: data,
    isLoading: !error && !data,
    isError: error,
  }
}