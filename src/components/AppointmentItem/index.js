// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsFavorite} = props
  const {title, date, isStarred, id} = appointmentDetails

  const onClickIcon = () => {
    toggleIsFavorite(id)
  }

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="lists-container">
      <div className="card">
        <p className="title-header">{title}</p>
        <button
          type="button"
          className="star"
          onClick={onClickIcon}
          testid="star"
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}
export default AppointmentItem
