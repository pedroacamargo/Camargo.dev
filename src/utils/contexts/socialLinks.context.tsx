import React, { createContext, ReactNode } from "react";

interface LinksContextType {
    github: string;
    instagram: string;
    linkedin: string;
    twitter: string;
};

interface LinksProviderProps {
    children: ReactNode,
}

export const LinksContext = createContext<LinksContextType>({
    github: "",
    instagram: "",
    linkedin: "",
    twitter: "",
});

export const LinksProvider = ({ children }: LinksProviderProps) => {
    const links = {
        github: "https://github.com/pedroacamargo",
        instagram: "https://www.instagram.com/pedroa_camargo/",
        linkedin: "https://www.linkedin.com/in/pedro-augusto-camargo-336349255/",
        twitter: "",
    };

    return (
        <LinksContext.Provider value={links}>
            {children}
        </LinksContext.Provider>
    );
};