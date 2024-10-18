import { Component, splitProps } from 'solid-js'

export const Card: Component<{ class?: string, [key: string]: any }> = (props) => {
  const [local, rest] = splitProps(props, ["class"])
  return <div class={`rounded-lg border bg-card text-card-foreground shadow-sm ${local.class || ""}`} {...rest} />
}

export const CardHeader: Component<{ class?: string, [key: string]: any }> = (props) => {
  const [local, rest] = splitProps(props, ["class"])
  return <div class={`flex flex-col space-y-1.5 p-6 ${local.class || ""}`} {...rest} />
}

export const CardTitle: Component<{ class?: string, [key: string]: any }> = (props) => {
  const [local, rest] = splitProps(props, ["class"])
  return <h3 class={`text-lg font-semibold leading-none tracking-tight ${local.class || ""}`} {...rest} />
}

export const CardDescription: Component<{ class?: string, [key: string]: any }> = (props) => {
  const [local, rest] = splitProps(props, ["class"])
  return <p class={`text-sm text-muted-foreground ${local.class || ""}`} {...rest} />
}

export const CardContent: Component<{ class?: string, [key: string]: any }> = (props) => {
  const [local, rest] = splitProps(props, ["class"])
  return <div class={`p-6 pt-0 ${local.class || ""}`} {...rest} />
}

export const CardFooter: Component<{ class?: string, [key: string]: any }> = (props) => {
  const [local, rest] = splitProps(props, ["class"])
  return <div class={`flex items-center p-6 pt-0 ${local.class || ""}`} {...rest} />
}
