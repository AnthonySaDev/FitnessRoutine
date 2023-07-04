import Image, { StaticImageData } from 'next/image';
import React from 'react';
import CostasImage from '../../../public/costas.png';
import FolgaImage from '../../../public/folga.png';
import OmbrosImage from '../../../public/ombros.png';
import PeitoImage from '../../../public/peito.png';
import BracosImage from '../../../public/bracos.png';
import PernasImage from '../../../public/pernas.png';
interface WorkoutProps {
  day: number;
}

const Workout: React.FC<WorkoutProps> = ({ day }) => {
  // Cria um array com o ciclo de treinos
  const workoutCycle = ['Folga', 'Peito', 'Costas', 'Pernas', 'Ombros', 'Bracos', 'Folga'];

  // Obtém o dia da semana para o dia atual
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const dayOfWeek = new Date(currentYear, currentMonth, day).getDay();

  // Define o treino do dia baseado no ciclo de treinos
  const workout = workoutCycle[dayOfWeek];

  // Cria um objeto com os caminhos das imagens
  const workoutImages: { [key: string]: StaticImageData } = {
    'Folga': FolgaImage,
    'Peito': PeitoImage,
    'Costas': CostasImage,
    'Pernas': PernasImage,
    'Ombros': OmbrosImage,
    'Bracos': BracosImage,
  };

  // Obtém a imagem do treino do dia
  const workoutImage = workoutImages[workout];

  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
      <h1 className='bg-[#5546b6] text-3xl font-bold text-center my-2 w-full'>Treino do Dia:</h1>
      <p className='text-center font-semibold text-lg'>Dia {day}: {workout}</p>
      <Image src={workoutImage} alt={workout} width={500} height={300}/>
    </div>
  );
}

export default Workout;
