// Write your code here
import './index.css'

const Notification = props => {
  const {children} = props

  return <li className="notification-list-container">{children}</li>
}
export default Notification
