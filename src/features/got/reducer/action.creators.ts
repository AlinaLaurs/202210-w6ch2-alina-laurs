import { Character } from './../models/character';
import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action.types';

export const loadActionCreator = createAction<Array<Character>>(
    actionTypes.load
);

export const addActionCreator = createAction<Character>(actionTypes.add);

export const updateActionCreator = createAction<Character>(actionTypes.update);

export const deleteActionCreator = createAction<Character>(actionTypes.delete);
