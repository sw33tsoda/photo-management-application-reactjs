import {createSlice} from '@reduxjs/toolkit';
import { version } from 'react';

const photo = createSlice({
    name:   'photos',
    initialState:   [
        {
            id: 91176,
            categoryId: 5,
            photo: 'https://picsum.photos/id/532/300/300',
            title: 'Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.'
        },
        {
            id: 82605,
            categoryId: 1,
            photo: 'https://picsum.photos/id/43/300/300',
            title: 'Ad officia magna veniam sunt.'
        },
        {
            id: 74760,
            categoryId: 3,
            photo: 'https://picsum.photos/id/722/300/300',
            title: 'Minim anim in sunt esse nisi sit magna consequat in sit laboris adipisicing.'
        },
        {
            id: 39588,
            categoryId: 5,
            photo: 'https://picsum.photos/id/294/300/300',
            title: 'Deserunt in tempor est id consectetur cupidatat.'
        },
        {
            id: 72133,
            categoryId: 4,
            photo: 'https://picsum.photos/id/229/300/300',
            title: 'Labore culpa velit sunt sit anim ad do veniam do proident sunt et nisi mollit.'
        },
        {
            id: 95333,
            categoryId: 1,
            photo: 'https://picsum.photos/id/862/300/300',
            title: 'Fugiat fugiat voluptate tempor minim ipsum nisi culpa magna officia ea deserunt tempor.'
        },
    ],
    reducers:   {
        addPhoto:   (state, action) => {
            state.push(action.payload);
        },
        removePhoto: (state, action) => {
            const indexOfPhoto = state.findIndex(value => value.id === action.payload.id);
            state.splice(indexOfPhoto,1);
        }
    }
})

const {reducer, actions} = photo;
export const {addPhoto, removePhoto} = actions;
export default reducer; 