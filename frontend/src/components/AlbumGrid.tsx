import { Component, For } from 'solid-js'
import { AlbumCard } from './AlbumCard'
import { Album } from '../types'

interface AlbumGridProps {
  albums: Album[]
}

export const AlbumGrid: Component<AlbumGridProps> = (props) => {
  return (
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <For each={props.albums}>
        {(album) => <AlbumCard album={album} />}
      </For>
    </div>
  )
}
