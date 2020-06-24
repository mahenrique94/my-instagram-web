interface IEnvironment {
  api: {
    url: string
  }
  app: {
    environment: string | null
    namespace: string
    storageKeys: {
      auth: string
    }
  }
}

export default IEnvironment
