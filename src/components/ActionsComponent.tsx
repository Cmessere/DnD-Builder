import React from "react";
import { Action, ActionsComponentProps, LegendaryActionsComponentProps } from "../services/types";

export const ActionsComponent = ({ actions }: ActionsComponentProps) => {
    return (
        <div>
            <h2>Actions</h2>
            {actions.map(a => <div><RenderActionComponent name={a.name} desc={a.desc} /></div>)}
        </div>
    );
};

export const LegendaryActionsComponent = ({ legendaryActions }: LegendaryActionsComponentProps) => {
    return (
        <div>
            <h2>Legendary Actions</h2>
            {legendaryActions.map(a => <div><RenderActionComponent name={a.name} desc={a.desc} /></div>)}
        </div>
    );
};
const RenderActionComponent = ({ name, desc }: Action) => {
    return (
        <div>
            <p><b>{name}.</b> {desc}</p>
        </div>
    );
};