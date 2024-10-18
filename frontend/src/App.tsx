import { Component } from 'solid-js'
import { Disc3 } from 'lucide-solid'
import { Progress } from './components/ui/progress'
import { AlbumGrid } from './components/AlbumGrid'
import { Album } from './types'

const albums: Album[] = [
  { id: 1, title: "Nevermind", artist: "Nirvana", year: 1991, cover: "https://placeholder.pics/svg/200x200", status: "Done" },
  { id: 2, title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973, cover: "https://placeholder.pics/svg/200x200", status: "Requires action" },
  { id: 3, title: "Thriller", artist: "Michael Jackson", year: 1982, cover: "https://placeholder.pics/svg/200x200", status: "Processing" },
  { id: 4, title: "Back in Black", artist: "AC/DC", year: 1980, cover: "https://placeholder.pics/svg/200x200", status: "Done" },
  { id: 5, title: "Hotel California", artist: "Eagles", year: 1976, cover: "https://placeholder.pics/svg/200x200", status: "Requires action" },
  { id: 6, title: "21", artist: "Adele", year: 2011, cover: "https://placeholder.pics/svg/200x200", status: "Processing" },
]

const App: Component = () => {
  return (
    <div class="flex flex-col min-h-screen bg-background dark:bg-gray-900">
      <header class="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-gray-900/90 dark:border-gray-800">
        <div class="container flex items-center justify-between h-14 px-4 mx-auto">
          <h1 class="text-lg font-semibold dark:text-white">Music Dashboard</h1>
          <div class="flex items-center space-x-4">

            <div class="flex items-center space-x-2">
              <Disc3 class="w-6 h-6 animate-spin dark:text-gray-400" />
              <span class="text-sm font-medium dark:text-gray-300 text-nowrap">Downloading: 2 albums</span>
            </div>

            <Progress value={33} class="w-[200px]" />
          </div>
        </div>
      </header>
      <main class="flex-1 py-6 dark:bg-gray-900">
        <div class="container px-4 mx-auto">
          <h2 class="mb-6 text-2xl font-bold dark:text-white">Your Albums</h2>
          <AlbumGrid albums={albums} />
        </div>
      </main>
    </div>
  )
}

export default App
