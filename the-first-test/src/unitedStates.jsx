import { useState } from "react";

export default function Unitedstates() {




    const [nok, setNok] = useState('');
    const [usd, setUsd] = useState('');

    const convertToUsd = () => {
        // Convert Nok to Usd (1 nok = 0.093 Usd)
        const usdValue = parseFloat(nok) * 0.093;
        setUsd(usdValue.toFixed(2)); // Round to 2 decimal places
    };

    return (
        <div>
            <input
                type="text"
                value={nok}
                onChange={(e) => setNok(e.target.value)}
                placeholder="Enter Valuta in nok"
            />
            <button onClick={convertToUsd}>Convert to Usd</button>
            {usd && <p>{`${nok} nok is equal to ${usd} usd`}</p>}
        </div>
    );
}



/*
    return (
        <>  
            <h1> Været i United States </h1>
            { Overskrift eller bilde }
            { Temperatur }
            { Valuta input slik som beskrevet i oppgaven }
        </>
    )
}

*/
