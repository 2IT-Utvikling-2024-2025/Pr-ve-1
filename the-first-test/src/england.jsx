import { useState } from "react";

export default function England() {

   
   
   
    const [nok, setNok] = useState('');
    const [pund, setPund] = useState('');

    const convertToPund = () => {
        // Convert Nok to Pund (1 nok = 0.071 Pund)
        const pundValue = parseFloat(nok) * 0.071;
        setPund(pundValue.toFixed(2)); // Round to 2 decimal places
    };

    return (
        <div>
            <input
                type="text"
                value={nok}
                onChange={(e) => setNok(e.target.value)}
                placeholder="Enter Valuta in nok"
            />
            <button onClick={convertToPund}>Convert to Pund</button>
            {pund && <p>{`${nok} nok is equal to ${pund} pund`}</p>}
        </div>
    );
}   

   
   
   /*
   
   
    return (
        <>  
            <h1> Været i England</h1>
            { Overskrift eller bilde }
            { Temperatur }
            { Valuta input slik som beskrevet i oppgaven }
        </>
    )

*/