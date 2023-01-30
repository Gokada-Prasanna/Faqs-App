// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onToggleButton = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderButtonImage = () => {
    const {isActive} = this.state

    const imageUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isActive ? 'minus' : 'plus'

    return (
      <button type="button" className="button" onClick={this.onToggleButton}>
        <img src={imageUrl} alt={altText} className="image" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="faqItem-container">
        <div className="questionButton-container">
          <h1 className="question">{questionText}</h1>
          {this.renderButtonImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
