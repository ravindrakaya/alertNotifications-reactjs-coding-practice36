// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {IoMdWarning, IoMdInformationCircle} from 'react-icons/io'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'

import './index.css'

const notificationList = [
  {
    id: 1,
    icon: <AiFillCheckCircle />,
    heading: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    id: 2,
    icon: <RiErrorWarningFill />,
    heading: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the files',
  },
  {
    id: 3,
    icon: <IoMdWarning />,
    heading: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 4,
    icon: <IoMdInformationCircle />,
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => (
  <ul className="alert-notifications-container">
    <h1 className="main-heading">Alert Notifications</h1>
    {notificationList.map(eachItem => (
      <Notification>
        <div className="list-container">
          {eachItem.icon}
          <div>
            <h1 id={`id${eachItem.id}`} className="heading">
              {eachItem.heading}
            </h1>
            <p className="description">{eachItem.description}</p>
          </div>
          <GrFormClose />
        </div>
      </Notification>
    ))}
  </ul>
)

export default AlertNotifications
