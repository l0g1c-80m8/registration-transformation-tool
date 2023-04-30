import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={"min-h-screen min-w-screen dark:bg-slate-800 text-zinc-50 text-4xl pl-6 pt-6"}>
      <div>
        Registration Tool
      </div>
    </main>
  )
}
