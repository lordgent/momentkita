import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchDataPost} from '../../providers/actions/posts'
import { AppDispatch,RootState } from '@/providers/store'
import UserLayout from '@/components/layouts/UserLayout'
import styled from './home.module.css'
import CardPost from '@/components/card/card'
import LoadingCard from '@/components/loading-card/LoadingCard'

const HomePage = () => {

  const dispatch = useDispatch<AppDispatch>(); 
  const { data,loading } = useSelector((state: RootState) => state.posts.list_post);

  React.useEffect(() => {
    dispatch(fetchDataPost())
  },[])

  return (
    <UserLayout>
      <div className={styled.body}>
          {loading ?
          <LoadingCard/>
            :
            <div className={styled.gridBody}>

           { data.map((item,i) =>
              <CardPost key={i} index={i}/>
            ) }
            </div>
        }
      </div>
    </UserLayout>
  )
}

export default HomePage