import Image from 'next/image'
import PageInfo from '../PageInfo'
import Friend from '@/components/icons/Friend'
import Row from './Row'
import AddFriend from '@/components/icons/AddFriend'
import FriendGrid from './FriendGrid'

export default function Friends() {
  return (
        <PageInfo title="Friends">
            <div className='flex flex-col text-white'>
                <h1 className='text-2xl mb-2'>My Friends</h1>
                <FriendGrid/>
                
                <h1 className='text-white mt-4 text-2xl mt-6 mb-2'>Add New Friends</h1>
                <div className='flex flex-col gap-2'>
                    <p className='text-white'>Search For Friend By Username: </p>
                    <div className='flex flex-row gap-2 mb-6'>
                        <input className='border rounded' type="text" placeholder="Username"/>
                        <button className='border rounded border-white p-1 hover:bg-gray-700'>Search</button>
                    </div>
                    
                </div>
                <div className='flex flex-col gap-2'>
                    <Row image={<AddFriend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<AddFriend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<AddFriend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<AddFriend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<AddFriend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<AddFriend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>

                </div>
            </div>
        </PageInfo> 
    )
}

//Come back and replace the friend SVG with profile pictures
/*<div className='flex flex-col gap-2'>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                </div>*/