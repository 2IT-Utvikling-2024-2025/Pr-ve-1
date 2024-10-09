import { useState } from "react";

export default function Japan() {



    const [nok, setNok] = useState('');
    const [yen, setYen] = useState('');

    const convertToYen = () => {
        // Convert Nok to Yen (1 nok = 13.83 Yen)
        const yenValue = parseFloat(nok) * 13.83;
        setYen(yenValue.toFixed(2)); // Round to 2 decimal places
    };

    return (
        <div>
            <input
                type="text"
                value={nok}
                onChange={(e) => setNok(e.target.value)}
                placeholder="Enter Valuta in nok"
            />
            <button onClick={convertToYen}>Convert to Yen</button>
            {yen && <p>{`${nok} nok is equal to ${yen} yen`}</p>}
        </div>
    );
}






        /*
    return (
        <>  
            <h1> Været i Japan</h1>
            { Overskrift eller bilde }
            { <h1>current temp in japan is 30*Celsius</h1> }
            {}
        </>
    )
} 
*/

