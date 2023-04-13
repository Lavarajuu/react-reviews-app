// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewsListIndex: 0}

  leftButtonClicked = () => {
    const {reviewsListIndex} = this.state
    if (reviewsListIndex > 0) {
      this.setState(prevState => ({
        reviewsListIndex: prevState.reviewsListIndex - 1,
      }))
    }
  }

  rightButtonClicked = () => {
    const {reviewsListIndex} = this.state
    if (reviewsListIndex < 3) {
      this.setState(prevState => ({
        reviewsListIndex: prevState.reviewsListIndex + 1,
      }))
    }
  }

  getReview = reviewsList => {
    const {reviewsListIndex} = this.state
    return reviewsList[reviewsListIndex]
  }

  render() {
    const {reviewsList} = this.props
    const review = this.getReview(reviewsList)
    const {username, imgUrl, companyName, description} = review
    return (
      <div className="app-container">
        <div className="reviews-container">
          <h1 className="heading">Reviews</h1>
          <img className="image" alt={username} src={imgUrl} />
          <div className="button-container">
            <button
              type="button"
              className="button"
              onClick={this.leftButtonClicked}
              data-testid="leftArrow"
            >
              <img
                className="arrow"
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              />
            </button>
            <p className="userName">{username}</p>
            <button
              type="button"
              className="button"
              onClick={this.rightButtonClicked}
              data-testid="rightArrow"
            >
              <img
                className="arrow"
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              />
            </button>
          </div>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
