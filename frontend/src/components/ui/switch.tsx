import { Component, splitProps } from 'solid-js'

export interface SwitchProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  class?: string
  [key: string]: any
}

export const Switch: Component<SwitchProps> = (props) => {
  const [local, rest] = splitProps(props, ["checked", "onChange", "class"])
  return (
    <button
      role="switch"
      aria-checked={local.checked}
      class={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${local.checked ? 'bg-primary' : 'bg-input'
        } ${local.class || ""}`}
      onClick={() => local.onChange?.(!local.checked)}
      {...rest}
    >
      <span
        class={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${local.checked ? 'translate-x-5' : 'translate-x-0'
          }`}
      />
    </button>
  )
}
