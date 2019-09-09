import {put} from "redux-saga/effects";
import * as actions from "../actions/index";
import axios from "../../axios-orders";


export function* initIngredientsSaga(action) {
    try {
        const res = yield axios.get("https://mary-s-burgers.firebaseio.com/ingredients.json");
        yield put(actions.setIngredients(res.data));
    } catch (error) {
        yield put(actions.fetchIngredientsFailed());
    }
}
