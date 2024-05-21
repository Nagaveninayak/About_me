import { useState, useEffect } from 'react';

interface ITypewriteProps {
    text: string;
    delay: number;
    infinite: boolean;
}

export function TypewriterAnimation({ text, delay, infinite }: ITypewriteProps) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        let timeout: any;
        if (currentIndex < text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

        } else if (infinite) { // ADD THIS CHECK
            setCurrentIndex(0);
            setCurrentText('');
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);

    return <span className="text-green-400 font-mono mb-.5 lowercase">{currentText}</span>;
};
