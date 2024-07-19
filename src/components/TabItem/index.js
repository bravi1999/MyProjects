// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, selectTab, isActive} = props
  const {tabId, displayText} = eachTab
  const onSelectTab = () => {
    selectTab(tabId)
  }
  const isTabActive = tabId === isActive ? 'btn-active' : ''
  return (
    <button
      type="button"
      className={`button ${isTabActive}`}
      onClick={onSelectTab}
    >
      {displayText}
    </button>
  )
}

export default TabItem
