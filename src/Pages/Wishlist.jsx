import { MainProductCard } from '@/_components'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const Wishlist = () => {
  return (
    <>
        <div className="main px-[4%]">
            <div className="container mx-auto">
                <div className="wishlist py-10 flex flex-col items-start gap-8">
                    <div className="top w-full flex items-start md:items-center justify-between flex-col md:flex-row gap-5">
                        <div className="details flex items-start flex-col gap-2">
                            <h2 className='font-[Nunito] text-3xl font-semibold text-amber-600'>Favorites</h2>
                            <p>Find your saved audiobook and get ready to listen.</p>
                        </div>
                        <div className="search flex items-center gap-2 border border-zinc-400 rounded-2xl px-4 w-full md:w-fit">
                            <Input type='search' placeholder='Search favorites...' className={`border-none shadow-none`}/>
                            <Search className='text-amber-600'/>
                        </div>
                    </div>
                    <div className="bottom grid lg:grid-cols-4 lg:gap-6 md:gap-4 md:grid-cols-3 gap-4 grid-cols-2">
                        <MainProductCard />
                        <MainProductCard />
                        <MainProductCard />
                        <MainProductCard />
                        <MainProductCard />
                        <MainProductCard />
                        <MainProductCard />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Wishlist