import { formatPrice } from '../data/lecturers.js'

function TariffList({ tariffs }) {
  return (
    <ul className="tariff-list">
      {tariffs.map((tariff) => (
        <li key={tariff.name}>
          <span>{tariff.name}</span>
          <strong>{formatPrice(tariff.price)}</strong>
        </li>
      ))}
    </ul>
  )
}

export default TariffList
