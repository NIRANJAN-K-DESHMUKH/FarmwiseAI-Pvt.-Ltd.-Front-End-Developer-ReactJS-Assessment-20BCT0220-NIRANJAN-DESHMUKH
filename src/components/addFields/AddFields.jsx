import { useState } from "react";
import FieldSelect from "../fieldSelect/FieldSelect.jsx";
import { useDispatch, useSelector } from "react-redux";
import { deleteFields } from "../../actions/Actionstodo.jsx";
import "./addfields.css"

const AddFields = () => {

    const [userType, setUserType] = useState("");
    const [addFieldButtonIsClicked, setAddFieldButtonIsClicked] = useState(false);
    const dispatch = useDispatch();
    const list = useSelector((state) => {
        return state.Reducers.list
    });

    const handleChangeUserType = (event) => {
        setUserType(event.target.value);
    };

    const handleAddFieldClick = () => {
        (userType !== "") ? setAddFieldButtonIsClicked(!addFieldButtonIsClicked) : alert("Select a valid User Type from the dropdown: Student or Self-Employee or Business");
    };

    const handleDeleteAll = () => {
        dispatch(deleteFields());
    };

    return (
        <div className=""> 
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
                {addFieldButtonIsClicked ? <FieldSelect key={userType} type={userType}/> : <></>}
            </span>

            </div>

            <hr />

            <div className="listAddedFields">
                list of added fields
                <div>
                    <div className="table">
                        <div className="headings1">
                            <div className="heading">No</div>
                            <div className="heading">Field Name</div>
                            <div className="heading">Field Type</div>
                            <div className="heading">Field Data Type</div>
                            <div className="heading">Field Validation</div>
                            <div className="heading">Field Data</div>
                            <div className="heading">Is Mandatory</div>
                        </div>
                    {
                        list.map((l) => {
                            return (
                            <div key={l.id} className="headings">
                                <div className="heading">{"1"}</div>
                                <div className="heading">{l.data[0]}</div>
                                <div className="heading">{l.data[1]}</div>
                                <div className="heading">{l.data[2]}</div>
                                <div className="heading">{JSON.stringify(l.data[3])}</div>
                                <div className="heading">{JSON.stringify(l.data[4])}</div>
                                <div className="heading">{l.data[5]}</div>
                            </div>
                            )
                        })
                    }
                    </div>
                    
                </div>
            
            </div>

            <div>
            <button className="confirmAllFields">Confirm</button>
            <button className="deleteAllFields" onClick={handleDeleteAll}>Reset</button>
            </div>
        
        </div>
    );
};

export default AddFields;