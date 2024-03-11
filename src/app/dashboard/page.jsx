
import Image from 'next/image'
import PageInfo from './PageInfo'
import Friend from '@/components/icons/Friend'
import TableTab from './TableTab'
import Songs from './Songs'
import Artists from './Artists'
import Genres from './Genres'
import { DarkModeContext } from './DarkModeProvider'
import UserDashboard from './UserDashboard'
import fakeUsers from "./friends/fakeUsers.json"
import { createServerClient } from '@supabase/ssr'
import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

export default function Dashboard() {

  return (
    <PageInfo title="Dashboard">
      <UserDashboard/>
    </PageInfo>
  )
}

