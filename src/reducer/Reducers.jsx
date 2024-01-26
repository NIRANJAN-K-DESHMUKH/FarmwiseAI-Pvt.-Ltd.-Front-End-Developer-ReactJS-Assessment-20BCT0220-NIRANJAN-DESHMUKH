
const initialData = {
    list: []
}
const Reducers = (state=initialData, action) => {
    switch(action.type) {
        case "ADD_FIELD_DATA":
            const {id, data} = action.payload;
            console.log(data);
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "DELETE_ALL":
            return {
                ...state,
                list: []
            }
        default:
            return state;
    }

};

export default Reducers;