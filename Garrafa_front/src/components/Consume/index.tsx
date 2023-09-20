'use client'
import { useEffect, useState } from 'react';

export default function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Substitua a URL abaixo pela rota do seu servidor backend
    fetch('https://apigarrafa.atitude247.com.br/api/garrafa-no-mar/health')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }, []);
  return (
    <div>
        {
          data ? (
            <div>
              <p>{data}</p>
            </div>
          ) : (
            <p>Carregando...</p>
          )
        }
    </div>
  );
}