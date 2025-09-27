import { useEffect, useState } from "react";


function useLocalStorage<T>(key: string, initialValue: T): [T, (value : T | ((val: T) => T )) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) :value;
            setStoredValue(valueToStore)
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        const handleStoreChange = () => {
            const item = window.localStorage.getItem(key)
            if (item) {
                setStoredValue(JSON.parse(item))
            }
        }

        window.addEventListener('storage', handleStoreChange);
        return () => window.removeEventListener('storage', handleStoreChange)

    }, [key])

    return [storedValue, setValue]
}