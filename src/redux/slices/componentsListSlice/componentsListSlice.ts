import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IComponent {
    name: string;
    img: string;
}

interface IComponentsSlice {
    allComponents: IComponent[];
    filteredComponents: IComponent[];
    loading: boolean;
    error: null | string;
}

const initialState: IComponentsSlice = {
    allComponents: [],
    filteredComponents: [],
    loading: true,
    error: null,
};

const componentsListSlice = createSlice({
    name: "componentsList",
    initialState,
    reducers: {
        fetchComponentsListRequest: (state) => {
            state.loading = true;
            state.error = null;
        },

        fetchComponentsListSuccess: (state, action: PayloadAction<IComponent[]>) => {
            state.loading = false;
            state.allComponents = action.payload;
            state.filteredComponents = action.payload;
        },

        fetchComponentsListFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },

        filterComponents: (state, action: PayloadAction<string>) => {
            const query = action.payload.toLowerCase();

            if (query === "") {
                state.filteredComponents = state.allComponents;
                return;
            }

            state.filteredComponents = state.allComponents.filter((component) => {
                return component.name.startsWith(query);
            });

            return;
        },
    },
});

export const { fetchComponentsListRequest, fetchComponentsListSuccess, fetchComponentsListFailure, filterComponents } =
    componentsListSlice.actions;

export const componentsListReducer = componentsListSlice.reducer;
