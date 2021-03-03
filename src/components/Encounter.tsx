import React from 'react';
import { useParams } from 'react-router-dom';
import { MonsterDetail, Monsters } from '../services/ApiClient';
import { Monster, MonsterList } from '../services/types';
import { ErrorComponent } from './ErrorComponent';
import { Loading } from './Loading';
import { DataGrid, GridCellParams } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';

export const Encounter = () => {
    const { type }: any = useParams();
    const [monstersList, setMonstersList] = React.useState(undefined as any as MonsterList);
    const [encounterMonsters, setEcnounterMonsters] = React.useState(undefined as any as Monster);
    const [error, setError] = React.useState(undefined);

    React.useEffect(() => {
        Monsters()
            .then((response) => setMonstersList(response.data))
            .catch(error => setError(error));
    }, []);

    React.useEffect(() => {
        MonsterDetail(type)
            .then((response) => setEcnounterMonsters(response.data))
            .catch(error => setError(error));
    }, [type]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        {
            field: 'action',
            headerName: ' ',
            width: 100,
            renderCell: (params: GridCellParams) => (
              <strong>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ marginLeft: 16 }}
                  onClick={() => (console.log(params.value))}
                >
                  +
                </Button>
              </strong>
            ),
          },
      ];

      
      if (error) {
          return <ErrorComponent error={error} />;
        }
    if (monstersList && encounterMonsters) {
        const rows = monstersList.results.map((m, i) => ({id:i, name:m.name, action:m.index }))
        return (
            <div style={{ height: "95vh", width: '500px' }}>
                <DataGrid rows={rows} columns={columns} pageSize={monstersList.count} />
            </div>
        );
    }
    else {
        return <Loading />;
    }
};
