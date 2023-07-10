"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

const Input = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return 
    router.push(`/search/${search}`)
    setSearch('')
  }
  return (
    <form onSubmit={handleSubmit} className='mt-3 flex items-center justify-center'>
    <input
    onChange={(e) => setSearch(e.target.value)}
    value={search}
     className='bg-transparent py-3 w-[1050px] text-[14px] outline-none' placeholder='search keywords...' type='text'>
    </input>
    <button type='submit' className='text-amber-600 disabled:text-gray-400 text-base'>Search</button>
    </form>
  )
}

export default Input
