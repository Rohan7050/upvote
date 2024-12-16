import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleData, SortByType } from "../types/articleType";

interface ArticlePageState {
    mainList: ArticleData[];
    currentActivePage: number;
    sortBy: SortByType;
    seachText: string;
    currentActiveArticleId: number;
    itemPerPage: number;
}

const articleInitialState: ArticlePageState = {
    mainList: [],
    currentActivePage: 0,
    sortBy: '',
    seachText: '',
    currentActiveArticleId: 0,
    itemPerPage: 8,

}

const articleSlice = createSlice({
    name: 'article',
    initialState: articleInitialState,
    reducers: {
        setInitialState(state, action: PayloadAction<ArticleData[]>) {
            state.mainList = action.payload;
            state.currentActivePage = 0;
            state.seachText = '';
            state.sortBy = '';
            state.currentActiveArticleId = 0;
        },

        setCurrentArticle(state, action: PayloadAction<number>) {
            state.currentActiveArticleId = action.payload;
        },

        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentActivePage = action.payload;
            state.currentActiveArticleId = 0;
        },

        setSearchText(state, action: PayloadAction<string>) {
            state.seachText = action.payload;
            state.currentActiveArticleId = 0;
        },

        setSortText(state, action: PayloadAction<SortByType>) {
            state.sortBy = action.payload;
            state.currentActiveArticleId = 0;
        }
    }
})

export const {setInitialState, setCurrentPage, setSearchText, setSortText, setCurrentArticle} = articleSlice.actions;
export default articleSlice.reducer;
