import { useState } from "react";
import FieldSelect from "../fieldSelect/FieldSelect.jsx";

const AddFields = () => {

    const [userType, setUserType] = useState("");
    const [addFieldButtonIsClicked, setAddFieldButtonIsClicked] = useState(false);

    const handleChangeUserType = (event) => {
        setUserType(event.target.value);
    };

    const handleAddFieldClick = () => {
        (userType !== "") ? setAddFieldButtonIsClicked(!addFieldButtonIsClicked) : alert("Select a valid User Type from the dropdown: Student or Self-Employee or Business");
    };

    return (
        <div className="addFields">
            <div className="userTypeSelect">
                <select name="userDropdown" id="userDropdown" className="userDropdown" value={userType} onChange={handleChangeUserType}>
                    <option value="">Select</option>
                    <option value="Student">Student</option>
                    <option value="Self-Employee">Self-Employee</option>
                    <option value="Business">Business</option>
                </select>
            </div>
            <div className="addFieldButtonWrapper">
                <button className="addFieldButton" onClick={handleAddFieldClick}>Add Field</button>
            </div>
    
            <span className="fieldSelectWrapper">
                {addFieldButtonIsClicked ? <FieldSelect /> : <></>}
            </span>

            <hr />

            <div className="listAddedFields">
                list of added fields
            </div>
        
        </div>
    );
};

export default AddFields;