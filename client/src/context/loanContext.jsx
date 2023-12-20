const { createContext, useContext, useState } = require("react");

const LoanContext = createContext();

export const useLoans = () => {
    const context = useContext(LoanContext);

    if(!context) {
        throw new Error("useLoans must be used witthin a LoanProvider");
    }

    return context;
}

export const LoanProvider = ({ children }) => {

    const [loans, setLoans] = useState([]);

    <LoanContext.Provider value={{loans,}}>
        { children }
    </LoanContext.Provider>
}