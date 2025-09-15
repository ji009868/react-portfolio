import { useState, useEffect } from 'react';

function Dday() {
    const graduationDate = new Date('2026-03-01');
    const [remainingDays, setRemainingDays] = useState(0);

    useEffect(() => {
        const today = new Date();
        const differenceInTime = graduationDate.getTime() - today.getTime();
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        setRemainingDays(differenceInDays);
    }, []);

    return (
        <div>
            <h2>🎓 졸업까지 D-{remainingDays}</h2>
        </div>
    );
}

export default Dday;
