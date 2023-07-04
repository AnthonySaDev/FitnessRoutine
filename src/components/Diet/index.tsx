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
            <div className='text-left m-auto flex flex-col mt-2 mb-4 lg:w-1/2 gap-4 text-lg px-4'>
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
