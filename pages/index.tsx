import { useRouter } from "next/router"
import { useEffect } from "react"
import { SearchForm } from "../components/searchForm"
import NProgress from "nprogress"

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    NProgress.configure({ showSpinner: false })
    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
  
  return (
    <SearchForm pron='' />
  )
}

export default Home