import { useState } from 'react';
import Tariff from './Tariff';

const TariffList = () => {
    const [selectedTariff, setSelectedTariff] = useState(null);

    const tariffs = [
        { name: 'Безлимитный 300', price: 300, speed: "до 10 мбит/cек" },
        { name: 'Безлимитный 450', price: 450, speed: "до 50 мбит/cек", },
        { name: 'Безлимитный 550', price: 550, speed: "до 100 мбит/cек", },
        { name: 'Безлимитный 1000', price: 1000, speed: "до 200 мбит/cек", },
    ];

    const handleTariffSelect = (price) => {
        setSelectedTariff(price);
    };

    return (
        <div>
            {tariffs.map((tariff) => (
                <Tariff
                    key={tariff.name}
                    name={tariff.name}
                    price={tariff.price}
                    speed={tariff.speed}
                    isSelected={tariff.price === selectedTariff}
                    onSelect={() => handleTariffSelect(tariff.price)}
                />
            ))}
        </div>
    );
};

export default TariffList;