import './index.css'

const VisitedCountries = props => {
  const {countryDetails, onRemoveItem} = props
  const {name, imageUrl, id} = countryDetails

  const onClickRemove = () => onRemoveItem(id)

  return (
    <li className="visited-item">
      <img src={imageUrl} className="image" alt="thumbnail" />
      <div className="visited-content">
        <p className="visited-name">{name}</p>
        <button type="button" className="remove-button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountries
