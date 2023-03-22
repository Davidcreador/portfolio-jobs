import Head from 'next/head'

import { Container } from '@/components/Container'
import { FormattedDate } from '@/components/FormattedDate'

import data from "@/data.json";

function EpisodeEntry({ episode }) {
  return (
    <article
      aria-labelledby={`episode-${episode.id}-title`}
      className="py-10 sm:py-12"
    >
      <Container>
        <div className="flex flex-col items-start">
          <h2
            id={`episode-${episode.id}-title`}
            className="mt-2 text-lg font-bold text-slate-900"
          >
            {episode.title}
          </h2>
          <h3
            id={`episode-${episode.id}-title`}
            className="mt-2 text-sm font-bold text-slate-900"
          >
            <a target="_blank" href={`${episode.link}`} rel="noreferrer">{episode.place}</a>
          </h3>
          <FormattedDate
            date={episode.date}
            className="order-first font-mono text-sm leading-7 text-slate-500"
          />
          <p className="mt-1 text-base leading-7 text-slate-700">
            {episode.description}
          </p>
        </div>
      </Container>
    </article>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          David Pastor - Portfolio
        </title>
        <meta
          name="description"
          content="Showcase personal/professional work over the past years working as Software Engineer"
        />
      </Head>
      <div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
        <Container>
          <h1 className="text-2xl font-bold leading-7 text-slate-900">
            Job history
          </h1>
        </Container>
        <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
          {data.map((job) => (
            <EpisodeEntry key={job.id} episode={job} />
          ))}
        </div>
      </div>
    </>
  )
}