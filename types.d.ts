export type DateLike = Date | string | number;

export type UIConfig = {
  locale?: string
}

export type LinkableProps = {
  href: string
  to: string
  defaultTag: string
}