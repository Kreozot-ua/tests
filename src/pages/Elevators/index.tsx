import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { Fab, Tooltip } from '@mui/material';
import { Add, Info } from '@mui/icons-material';

import { Building, ElevatorsInfo } from '~components/core';
import { useAppDispatch, useAppSelector } from '~store/hooks';
import { addBuilding, removeBuilding } from '~store/actions/buildingsActions';
import { buildingsSelector } from '~store/selectors/buildingsSelectors';
import { generateId } from '~utils/index';

import { useStyles } from './styles';

export default function Elevators() {
  const { classes } = useStyles();
  const buildings = useAppSelector(buildingsSelector);
  const dispatch = useAppDispatch();

  const handleAddBuilding = useCallback(() => dispatch(addBuilding({ buildingId: generateId() })), [dispatch]);

  const handleRemoveBuilding = (id: number) => dispatch(removeBuilding({ buildingId: id }));

  return (
    <>
      <Helmet>
        <title>Elevators</title>
      </Helmet>
      <div className={classes.root}>
        {Object.keys(buildings).map((id) => (
          <Building
            key={id}
            buildingId={Number(id)}
            onRemove={handleRemoveBuilding}
            buildingsQuantity={Object.keys(buildings).length}
          />
        ))}
        <div className={classes.buttons}>
          <Tooltip title={<ElevatorsInfo />}>
            <Fab>
              <Info />
            </Fab>
          </Tooltip>
          <Fab disabled={Object.keys(buildings).length > 2} onClick={handleAddBuilding}>
            <Add />
          </Fab>
        </div>
      </div>
    </>
  )
}
