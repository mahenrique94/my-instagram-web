import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron.configure({
  name: 'My Instagram Web',
})
  .use(reactotronRedux())
  .connect()

console.tron = Reactotron

export { reactotron }
