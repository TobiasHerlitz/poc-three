import { Scene } from './three'

import './App.css'
import { ChangeEvent, useState } from 'react'

const floorOptions = [
  {
    label: 'Stormogul',
    width: 6,
    depth: 3
  },
  {
    label: 'Lillmogul',
    width: 4,
    depth: 3
  }
];

function App() {
  const [showThingy, setShowThingy] = useState(true);
  const [floorDimensions, setFloorDimensions] = useState(floorOptions[0])

  const selectFloorDimension = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = floorOptions.find(
      (floorOption) => floorOption.label === e.target.value
    )

    if (!selectedOption) return;
    setFloorDimensions(selectedOption);
  }

  return (
    <div className="root">
      <div className="selection">
        <label>
          Visa bollen
          <input
            type="checkbox"
            defaultChecked
            onChange={
              ({ target }) => setShowThingy(target.checked)}
            />
        </label>
        <label>Golvyta
          <select onChange={selectFloorDimension}>
            {floorOptions.map((floorOption) => (
              <option
                key={floorOption.label}
                value={floorOption.label}
              >
                {floorOption.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Scene showThingy={showThingy} floorDimensions={floorDimensions} />
    </div>
  )
}

export default App
