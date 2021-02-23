import React from 'react';
import { MonsterGridProps } from '../services/types';
import MonsterCard from './MonsterCard';
import "./styles/MonsterGrid.css" 

export const MonsterGrid = ({ monsters }: MonsterGridProps) => {
    return (
        <div className="monsters-list-div">
            <div className="monsters-row">
                {monsters.slice(0, 5).map((monster) => <li className="monster-list-item" key={monster.name}><MonsterCard monster={monster}/></li>)}
            </div>
            <div className="monsters-row">
                {monsters.slice(5, 10).map((monster) => <li className="monster-list-item" key={monster.name}><MonsterCard monster={monster}/></li>)}
            </div>
            <div className="monsters-row">
                {monsters.slice(10, 15).map((monster) => <li className="monster-list-item" key={monster.name}><MonsterCard monster={monster}/></li>)}
            </div>
            <div className="monsters-row">
                {monsters.slice(15, 20).map((monster) => <li className="monster-list-item" key={monster.name}><MonsterCard monster={monster}/></li>)}
            </div>
            <div className="monsters-row">
                {monsters.slice(20, 25).map((monster) => <li className="monster-list-item" key={monster.name}><MonsterCard monster={monster}/></li>)}
            </div>
        </div>
    );
};
