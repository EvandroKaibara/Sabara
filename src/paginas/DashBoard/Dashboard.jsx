import React, { useEffect, useState } from 'react';
import Navegacao from "../../componentes/Navegacao";
import './Dashboard.css';
import Rodape from '../../componentes/Rodape';

const Dashboard = () => {
  const [dados, setDados] = useState({
    temperatura: '–',
    umidade: '–',
    luminosidade: '–'
  });

  useEffect(() => {
    const fetchDadosSala = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/room/');

        if (!response.ok) {
          throw new Error('Erro ao buscar dados da sala');
        }

        const data = await response.json();

        if (data.length > 0) {
          const ultimaSala = data[data.length - 1]; 
          setDados({
            temperatura: ultimaSala.temperatura,
            umidade: ultimaSala.umidade,
            luminosidade: ultimaSala.luminosidade
          });
        }
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error.message);
      }
    };

    fetchDadosSala();
  }, []);

  return (
    <>
    <Navegacao />
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard de Dados Ambientais</h1>
      <div className="dashboard-box">
        <div className="dashboard-item">
          <h3>Temperatura</h3>
          <p>{dados.temperatura}°C</p>
        </div>
        <div className="dashboard-item">
          <h3>Umidade</h3>
          <p>{dados.umidade}%</p>
        </div>
        <div className="dashboard-item">
          <h3>Luminosidade</h3>
          <p>{dados.luminosidade} lux</p>
        </div>
      </div>
    </div>
    <Rodape />
    </>
  );
};

export default Dashboard;
