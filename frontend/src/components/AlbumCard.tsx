import { Component } from 'solid-js'
import { MoreVertical, CheckCircle, AlertCircle, RefreshCw } from 'lucide-solid'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Album } from '../types'

interface AlbumCardProps {
  album: Album
}

const statusIcons = {
  "Done": () => <CheckCircle class="w-5 h-5 text-green-500" />,
  "Requires action": () => <AlertCircle class="w-5 h-5 text-yellow-500" />,
  "Processing": () => <RefreshCw class="w-5 h-5 text-blue-500 animate-spin" />,
}

export const AlbumCard: Component<AlbumCardProps> = (props) => {
  const handleAlbumClick = () => {
    if (props.album.status === "Done") {
      console.log(`Navigating to album view for: ${props.album.title}`)
      // In a real application, you would use a router to navigate to the album view
      // For example: navigate(`/albums/${props.album.id}`)
    }
  }

  const handleActionRequired = (e: Event) => {
    e.stopPropagation()
    console.log(`Handling required action for: ${props.album.title}`)
    // In a real application, you would implement the logic to handle the required action
  }

  return (
    <Card
      class={`overflow-hidden dark:bg-gray-800 dark:border-gray-700 ${props.album.status === "Done" ? "cursor-pointer" : ""}`}
      onClick={handleAlbumClick}
    >
      <CardHeader class="p-0">
        <div class="relative aspect-square">
          <img
            src={props.album.cover}
            alt={`${props.album.title} cover`}
            class="object-cover w-full h-full rounded-t-lg"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg" />
          <div class="absolute bottom-2 left-2 flex items-center space-x-1">
            {statusIcons[props.album.status]()}
            <span class="text-xs font-medium text-white">{props.album.status}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            class="absolute top-2 right-2 text-white hover:text-white/80"
          >
            <MoreVertical class="w-5 h-5" />
            <span class="sr-only">More options</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent class="p-4">
        <CardTitle class="text-base truncate dark:text-white">{props.album.title}</CardTitle>
        <CardDescription class="text-sm truncate dark:text-gray-400">{props.album.artist}</CardDescription>
      </CardContent>
      <CardFooter class="flex justify-between p-4 pt-0">
        <span class="text-xs text-muted-foreground dark:text-gray-500">
          {props.album.year}
        </span>
        {props.album.status === "Requires action" && (
          <Button
            variant="secondary"
            size="sm"
            class="h-8 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            onClick={handleActionRequired}
          >
            Take Action
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
