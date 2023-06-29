import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface Ingredient {
  name: string
  icon: string
  weight: number
  id: string
}

export interface Day {
  name: string
  dishName: string
  ingredients: Ingredient[]
}
