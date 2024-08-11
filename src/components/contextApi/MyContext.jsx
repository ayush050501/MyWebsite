import { createContext, useState } from 'react';

// Create a Context
const MyContext = createContext();

// Create a Provider component
const MyProvider = ({ children }) => {
    const [title, setTitle] = useState('Rohan Verma');
    const [description, setDescription] = useState("Rohan Verma is a 32-year-old software engineer based in the tech hub of Bangalore. With a deep passion for coding, Rohan has mastered Python and JavaScript, and his contributions to open-source projects have earned him recognition in the developer community. He’s constantly exploring new technologies and enjoys the challenge of solving complex problems. When he's not working, Rohan spends his weekends hiking in the Western Ghats, immersing himself in nature. He's also a tech enthusiast who loves trying out the latest gadgets, whether it's the newest smartphone or an innovative piece of wearable technology.");

    return <MyContext.Provider value={{ title, setTitle, description, setDescription }}>{children}</MyContext.Provider>;
};

export { MyContext, MyProvider };
