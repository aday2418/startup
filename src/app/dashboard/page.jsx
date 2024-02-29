"use client"

import Image from 'next/image'
import PageInfo from './PageInfo'
import Friend from '@/components/icons/Friend'
import { lazy, useState } from 'react'
import TableTab from './TableTab'
import Songs from './Songs'
import Artists from './Artists'
import Genres from './Genres'
import { useContext } from 'react'
import { DarkModeContext } from './DarkModeProvider'
import UserDashboard from './UserDashboard'
import fakeUsers from "./friends/fakeUsers.json"

export default function Dashboard() {
  const storedFirstName = localStorage.getItem('firstName');
  const storedLastName = localStorage.getItem('lastName');
  const storedSpotify = localStorage.getItem('spotifyUsername');
  const storedPicture = localStorage.getItem('profilePicture')

  const user = {
    firstName: storedFirstName,
    lastName: storedLastName,
    username: storedSpotify,
    picture: storedPicture 
  }

  return (
    <PageInfo title="Dashboard">
      <UserDashboard user={user}/>
    </PageInfo>
  )
}

