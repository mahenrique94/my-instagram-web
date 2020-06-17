import { config } from '@config'

const getAction = (name: string) => `${config.app.namespace.toUpperCase()}_${name.toUpperCase()}`

export { getAction }
