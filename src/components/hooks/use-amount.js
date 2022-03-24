import { useState } from 'react';

export default function useAmount(initialCount = 0) {
    //console.log(useState())
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);

    return { count, increment, decrement };
}
