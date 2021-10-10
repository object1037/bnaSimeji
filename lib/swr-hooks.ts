import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export function useKaomojis(pron: string) {
  const { data, error } = useSWR(`https://cloud.simeji.me/py?ol=1&switch=2&section=1&ver=10.6&api_version=2&web=1&py=${pron}`, fetcher)

  return {
    kaomojis: data,
    isLoading: !error && !data,
    isError: error,
  }
}