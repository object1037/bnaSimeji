interface kaomoji {
  cell_mask: number
  freq: number
  icon: number
  pron: string
  prop: number
  type: number
  word: string
}

interface simejiResponse {
  cache: 0 | 1
  data: {
    hira: string
    cache_time: number
    candidates: kaomoji[]
    continue: 0 | 1
  }[]
}