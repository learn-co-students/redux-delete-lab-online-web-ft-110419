
export const deleteBand = id => {
    return { type: "DELETE_BAND", id }
}

export const addBand = name => {
    return { type: "ADD_BAND", name }
}