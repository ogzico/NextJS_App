import Link from 'next/link'
import Head from 'next/head'
import useSWR from 'swr'

import Layout from '../components/Layout'

function FirstPost() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('https://jsonmock.hackerrank.com/api/movies?Year=2015', fetcher)
  return (
    <Layout>
      <div>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>

        {error && <div>failed</div>}
        {!data && <div>...loading</div>}
        {data && 
        data.data.map(movie =>
          <div key={movie.Title}>{movie.Title}</div>
          )
        }
      </div>
    </Layout>
  )
}

export default FirstPost
