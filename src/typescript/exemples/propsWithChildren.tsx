import { ReactNode } from "react";


const FavoriteDigimonsProvider = ({ children }: {children: ReactNode}) => <div>{children}</div>;

interface ProvidersProps {
  children: ReactNode; //Utilizamos o tipo nativo do React chamado ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return <FavoriteDigimonsProvider>{children}</FavoriteDigimonsProvider>;
};

export default Providers;
