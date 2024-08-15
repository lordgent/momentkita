import React from 'react'
import Avatar from '@/components/avatar/avatar'
import UserLayout from '@/components/layouts/UserLayout'
import styled from './profile.module.css'

const ProfilePage = () => {
  return (
    <UserLayout>
      <div className={styled.bodyProfile}>
      <div className={styled.profileHead}>
            <div className={styled.profile}>
            <Avatar size='lg' initialName='T' />
            </div>
        </div>
        <div>
            <p className={styled.textFullname}>Tasyana Ayu L</p>
            <p className={styled.textUsername}>@tasyanaal</p>
        </div>
      </div>
    </UserLayout>
  )
}

export default ProfilePage