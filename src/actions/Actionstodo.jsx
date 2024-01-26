
const confirmField = (inputData) => {
    return {
        type: "ADD_FIELD_DATA",
        payload: {
            id: new Date().getTime().toString(),
            data: inputData
        }
    }
};

const deleteFields = () => {
    return {
        type: "DELETE_ALL"
    }
};



export {confirmField, deleteFields};