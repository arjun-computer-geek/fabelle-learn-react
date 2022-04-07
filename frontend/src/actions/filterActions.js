import { FILTER_BY_RATING, SORT_BY_CATEGORY,FILTER_BY_STOCK  } from "constants/filterConstants"

export const getRatings = async (rating, dispatch) => {
    dispatch({
        type: FILTER_BY_RATING,
        payload: rating
    })
}
export const sort = async (category, dispatch) => {
    dispatch({
        type: SORT_BY_CATEGORY,
        payload: category
    })
}

export const stock = async(dispatch) => {
    dispatch({
        type: FILTER_BY_STOCK,
    })
}