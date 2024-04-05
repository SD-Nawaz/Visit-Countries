import './index.css'

const CountriesList = props => {
  const {countryDetails, onAddVisitCountry} = props
  const {name, isVisited, id} = countryDetails

  const visitedParagraph = isVisited ? 'Visited' : 'Visit'

  const addVisited = () => onAddVisitCountry(id)
  return (
    <li className="country-items">
      <div className="country-item">
        <p className="name">{name}</p>
        {isVisited ? (
          <p className="visited">{visitedParagraph}</p>
        ) : (
          <button type="button" className="visit-button" onClick={addVisited}>
            {visitedParagraph}
          </button>
        )}
      </div>
      <hr />
    </li>
  )
}

export default CountriesList
