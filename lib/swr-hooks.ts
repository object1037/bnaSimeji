import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export function useKaomojis(pron: string) {
  const { data, error } = useSWR<kaomoji[], Error>(`/api/kaomoji/${pron}`, fetcher, {revalidateOnFocus: false})

  return {
    kaomojis: data,
    isLoading: !error && !data,
    isError: error,
  }
}