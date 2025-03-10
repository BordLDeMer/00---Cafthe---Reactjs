// visualiser une commande passée
    // demande à l'API
import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const sendRequest = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/commandes');
        console.log('Réponse de la commande :', response);
    } catch (error) {
        console.error('Erreur lors de la commande :', error);
    }
};
    // Affichage au client
        // Création du Context
const CommandContext = createContext();

const CommandProvider = ({ children }) => {
    const [commands, setCommands] = useState([]);

    const addCommand = (command) => {
        setCommands((prevCommands) => [...prevCommands, command]);
    };

    return (
        <CommandContext.Provider value={{ commands, addCommand }}>
            {children}
        </CommandContext.Provider>
    );
};

const CommandList = () => {
    const { commands } = useContext(CommandContext);

    return (
        <ul>
            {commands.map((cmd, index) => (
                <li key={index}>{cmd}</li>
            ))}
        </ul>
    );
};

const CommandSender = () => {
    const { addCommand } = useContext(CommandContext);

    return (
        <button onClick={() => addCommand('Nouvelle Commande')}>Envoyer Commande</button>
    );
};

const App = () => {
    return (
        <CommandProvider>
            <CommandSender />
            <CommandList />
        </CommandProvider>
    );
};

export default App;
