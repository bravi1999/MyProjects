// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp
  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="img" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
