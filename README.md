
## Instalação

Instale fitness routine com npm

```bash
  npm install fitnessroutine
  cd fitnessroutine
```
    
# Fitness Routine

Projeto criado para regular rotina de treino e dieta para uso pessoal, adaptando minha dieta e treino baseado no horário de serviço do meu gymbro, que faz um rodízio de horários e não estava conseguindo se adaptar pra conseguir achar um horário para irmos.


## Uso/Exemplos
# Controle de horários
```javascript
import React from 'react';

interface DayOfJobProps {
  day: number;
  isToday: boolean;
}

const DayOfJob: React.FC<DayOfJobProps> = ({ day, isToday }) => {
  const workSchedules = [
    '18h-24h', '18h-24h', '18h-24h', '18h-24h', 'Folga',
    '12h-18h', '12h-18h', '12h-18h', '12h-18h', 'Folga',
    '6h-12h', '6h-12h', '6h-12h', '6h-12h', 'Folga',
    '24h-6h', '24h-6h', '24h-6h', '24h-6h', 'Folga'
  ];

  let workSchedule = workSchedules[(day - 1) % workSchedules.length];

  return (
    <div className={`p-10 text-center line-clamp-1 grid place-items-center text-3xl cursor-pointer ${isToday ? 'bg-[#533ee2]' : 'bg-[#29116b]'}`}>
      <div>{day}</div>
      <div>{workSchedule}</div>
    </div>
  );
}

export default DayOfJob;

```
# Controle day dieta
```javascript
import React from 'react';

interface DietProps {
    day: number;
}

type CarbCycleType = 'Alto' | 'Médio' | 'Baixo';

const Diet: React.FC<DietProps> = ({ day }) => {

    const carbCycle: CarbCycleType[] = ['Alto', 'Baixo', 'Médio', 'Médio', 'Médio', 'Médio', 'Baixo'];


    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const dayOfWeek = new Date(currentYear, currentMonth, day).getDay();


    const diet: CarbCycleType = carbCycle[dayOfWeek];


    const mealPlan = {
        Alto: {
            breakfast: '3 ovos mexidos (240 calorias) e 2 fatias de pão de forma (200 calorias) - Total: 440 calorias',
            lunch: '1 prato cheio de arroz (aprox. 205 calorias), 1 concha de feijão (aprox. 74 calorias), 200g de carne magra (dependendo da carne, aprox. 220 a 300 calorias) e salada à vontade - Total: 499 a 579 calorias',
            dinner: 'Igual ao almoço - Total: 499 a 579 calorias',
            snacks: '1 maçã (95 calorias) e 1 fatia de pão de forma (100 calorias) - Total: 195 calorias',
            total: '1633 a 1793 calorias',
        },
        Médio: {
            breakfast: '2 ovos mexidos (160 calorias) e 1 fatia de pão de forma (100 calorias) - Total: 260 calorias',
            lunch: ' 1/2 prato de arroz (aprox. 102.5 calorias), 1 concha de feijão (74 calorias), 200g de carne magra (220 a 300 calorias) e salada à vontade - Total: 396.5 a 476.5 calorias',
            dinner: ' Igual ao almoço - Total: 396.5 a 476.5 calorias',
            snacks: ' 1 maçã (95 calorias) e 1 fatia de pão de forma (100 calorias) - Total: 195 calorias',
            total: '1248 a 1408 calorias',
        },
        Baixo: {
            breakfast: '3 ovos mexidos (240 calorias) e 1 fatia de pão de forma (100 calorias) - Total: 340 calorias',
            lunch: '200g de carne magra (220 a 300 calorias), salada à vontade e 1/4 de prato de arroz (aprox. 51.25 calorias) - Total: 271.25 a 351.25 calorias',
            dinner: 'Igual ao almoço - Total: 271.25 a 351.25 calorias',
            snacks: '2 scoops de proteína whey, 30g de amêndoas',
            total: '977.5 a 1137.5 calorias',
        }
    }

    return (
        <div className='text-center flex flex-col gap-2'>
            <h1 className='bg-[#5546b6] text-3xl font-bold'>Dieta</h1>
            <p>Dia de Carbo {diet}</p>
            <h2 className='font-bold text-2xl'>Plano de Refeições:</h2>
            <div className='text-left m-auto flex flex-col mt-2 mb-4 lg:w-1/2 gap-4 text-lg'>
                <span><strong>Café da Manhã: </strong>{mealPlan[diet].breakfast}<br /></span>
                <span><strong>Almoço: </strong>{mealPlan[diet].lunch}<br /></span>
                <span><strong>Jantar: </strong>{mealPlan[diet].dinner}<br /></span>
                <span><strong>Lanches: </strong>{mealPlan[diet].snacks}<br /></span>
                <span>Total: {mealPlan[diet].total}</span>
            </div>

        </div>
    );
}

export default Diet;


```
# Controle do Treino do dia
```javascript
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import BracosImage from '../../../public/bracos.png';
import CostasImage from '../../../public/costas.png';
import FolgaImage from '../../../public/folga.png';
import OmbrosImage from '../../../public/ombros.png';
import PeitoImage from '../../../public/peito.png';
import PernasImage from '../../../public/pernas.png';
interface WorkoutProps {
  day: number;
}

const Workout: React.FC<WorkoutProps> = ({ day }) => {
  // Cria um array com o ciclo de treinos
  const workoutCycle = ['Folga', 'Peito', 'Costas', 'Pernas', 'Ombros', 'Braços', 'Folga'];

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
    'Braços': BracosImage,
  };

  // Obtém a imagem do treino do dia
  const workoutImage = workoutImages[workout];

  return (
    <div className='flex flex-col gap-2 h-full items-center justify-between'>
      <h1 className='bg-[#5546b6] text-3xl font-bold text-center w-full'>Treino do Dia:</h1>
      <p className='text-center font-semibold text-lg'>Dia {day}: {workout}</p>
      <Image src={workoutImage} alt={workout} className='h-[450px] w-full object-cover'/>
    </div>
  );
}

export default Workout;

```

## Autores

- [@AnthonySaDev](https://www.github.com/AnthonySaDev)

