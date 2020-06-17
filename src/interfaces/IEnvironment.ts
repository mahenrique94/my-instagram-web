interface IEnvironment {
  api: {
    url: string
  }
  app: {
    environment: string | null
    namespace: string
  }
}

export default IEnvironment
