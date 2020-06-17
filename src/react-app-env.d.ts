/* eslint-disable spaced-comment  */
/// <reference types="react-scripts" />
declare interface Array {
  $sortBy(...args: string[]): any[]
}

declare interface Console {
  tron
}

declare module 'sort-by' {
  export default function sortBy(...args: string[]): (a: any, b: any) => number
}
