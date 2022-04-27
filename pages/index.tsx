import { SearchForm } from "../components/searchForm"

const Home = () => {
  return (
    <>
    <SearchForm pron='' />
    <div className="my-12 mx-auto max-w-lg">
      <h2 className="font-bold text-2xl">使い方</h2>
      <ol className="list-disc list-inside my-6 space-y-2">
        <li>変換したい単語を<span className="font-bold">ひらがな2文字以上</span>で入力し、検索する</li>
        <li>出てきた結果をクリックするとクリップボードにコピーできる</li>
      </ol>
    </div>
    </>
  )
}

export default Home