import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type components = { name: string; img: string };

interface ComponentsListState {
    components: components[];
    filteredComponents: components[];
}

const componentsList = [
    { name: "accordion", img: "/assets/cover.jpg" },
    { name: "button", img: "/assets/cover.jpg" },
    { name: "card [Horizintal]", img: "/assets/cover.jpg" },
    { name: "card [Vertical]", img: "/assets/cover.jpg" },
    { name: "carousel", img: "/assets/cover.jpg" },
    { name: "checkbox", img: "/assets/cover.jpg" },
    { name: "context menu", img: "/assets/cover.jpg" },
    { name: "dialog", img: "/assets/cover.jpg" },
    { name: "dropdown", img: "/assets/cover.jpg" },
    { name: "hover card", img: "/assets/cover.jpg" },
    { name: "input", img: "/assets/cover.jpg" },
    { name: "navbar", img: "/assets/cover.jpg" },
    { name: "pagination", img: "/assets/cover.jpg" },
    { name: "progress bar", img: "/assets/cover.jpg" },
    { name: "progress circle", img: "/assets/cover.jpg" },
    { name: "radio input", img: "/assets/cover.jpg" },
    { name: "scroll area", img: "/assets/cover.jpg" },
    { name: "scroll spy", img: "/assets/cover.jpg" },
    { name: "select", img: "/assets/cover.jpg" },
    { name: "skeleton card", img: "/assets/cover.jpg" },
    { name: "skeleton text", img: "/assets/cover.jpg" },
    { name: "slider", img: "/assets/cover.jpg" },
    { name: "speed dial", img: "/assets/cover.jpg" },
    { name: "spinner", img: "/assets/cover.jpg" },
    { name: "tabs", img: "/assets/cover.jpg" },
    { name: "toast", img: "/assets/cover.jpg" },
    { name: "toggle switch", img: "/assets/cover.jpg" },
    { name: "tooltip", img: "/assets/cover.jpg" },
];

const initialState: ComponentsListState = {
    components: componentsList,
    filteredComponents: componentsList,
};

const componentsListSlice = createSlice({
    name: "componentsList",
    initialState,
    reducers: {
        filterComponents(state, action: PayloadAction<{ query: string }>) {
            const query = action.payload.query.toLocaleLowerCase();

            if (query === "") {
                state.filteredComponents = state.components;
                return;
            }

            state.filteredComponents = state.components.filter((component) => {
                return component.name.startsWith(query);
            });
        },
    },
});

export const { filterComponents } = componentsListSlice.actions;
export default componentsListSlice.reducer;
