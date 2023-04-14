// ce fichier contient le composant racine de votre application React. Vous pouvez y ajouter des composants enfants pour construire l'interface utilisateur de votre application
import React from 'react';

interface Props {
  name: string;
}

const App: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
    </div>
  );
};

export default App;