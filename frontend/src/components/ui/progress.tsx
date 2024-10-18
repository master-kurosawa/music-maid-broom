import { Component, splitProps } from 'solid-js'

export interface ProgressProps {
  value?: number
  class?: string
  [key: string]: any
}

export const Progress: Component<ProgressProps> = (props) => {
  const [local, rest] = splitProps(props, ["value", "class"])

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={local.value}
      class={`relative h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-slate-500 bg-secondary ${local.class || ""}`}
      {...rest}
    >
      <div
        class="h-full w-full flex-1 bg-purple-400 dark:bg-purple-600 transition-all"
        style={{ transform: `translateX(-${100 - (local.value || 0)}%)` }}
      />
    </div>
  )
}
