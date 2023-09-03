import React, { useEffect, useState } from 'react';

const ShipList: React.FC = () => {
  const [ships, setShips] = useState<
    Array<{
      name: string;
      model: string;
      manufacturer: string;
      cost_in_credits: string;
      length: string;
      max_atmosphering_speed: string;
      crew: string;
      passengers: string;
      cargo_capacity: string;
      consumables: string;
      hyperdrive_rating: string;
      MGLT: string;
      starship_class: string;
    }>
  >([]);

  const [selectedShip, setSelectedShip] = useState<
    | {
        name: string;
        model: string;
        manufacturer: string;
        cost_in_credits: string;
        length: string;
        max_atmosphering_speed: string;
        crew: string;
        passengers: string;
        cargo_capacity: string;
        consumables: string;
        hyperdrive_rating: string;
        MGLT: string;
        starship_class: string;
      }
    | null
  >(null);

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const response = await fetch('https://swapi.py4e.com/api/starships/');
        const data = await response.json();
        const listShips = data.results;

        const shipData = listShips.map((ship: any) => ({
          name: ship.name,
          model: ship.model,
          manufacturer: ship.manufacturer,
          cost_in_credits: ship.cost_in_credits,
          length: ship.length,
          max_atmosphering_speed: ship.max_atmosphering_speed,
          crew: ship.crew,
          passengers: ship.passengers,
          cargo_capacity: ship.cargo_capacity,
          consumables: ship.consumables,
          hyperdrive_rating: ship.hyperdrive_rating,
          MGLT: ship.MGLT,
          starship_class: ship.starship_class,
        }));

        setShips(shipData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchShips();
  }, []);

  const handleShowInfoClick = (ship: any) => {
    setSelectedShip(ship);
  };

  const handleCloseInfoClick = () => {
    setSelectedShip(null);
  };

  return (
    <div>
      <ul id='item'>
        {ships.map((ship, index) => (
          <li key={index} id='shiP'>
            <h3>{ship.name}</h3>
            <button onClick={() => handleShowInfoClick(ship)}>Show Info</button>
            {selectedShip === ship && (
              <div className='shipContent'>
                <p>Model: {ship.model}</p>
                <p>Manufacturer: {ship.manufacturer}</p>
                <p>Cost in Credits: {ship.cost_in_credits}</p>
                <p>Length: {ship.length}</p>
                <p>Max_atmosphering_speed: {ship.max_atmosphering_speed}</p>
                <p>Crew: {ship.crew}</p>
                <p>Passengers: {ship.passengers}</p>
                <p>Cargo_capacity: {ship.cargo_capacity}</p>
                <p>Hyperdrive_rating: {ship.hyperdrive_rating}</p>
                <p>MGLT: {ship.MGLT}</p>
                <p>Starship_class: {ship.starship_class}</p>
                <button onClick={handleCloseInfoClick} id='closeButton'>Close Info</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipList;