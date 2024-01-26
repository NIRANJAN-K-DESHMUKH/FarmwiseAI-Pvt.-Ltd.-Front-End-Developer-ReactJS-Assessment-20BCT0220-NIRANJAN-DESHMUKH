import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { confirmField } from "../../actions/Actionstodo.jsx";

const DataValidationFields = (fieldTypeProps) => {
    
    const fieldType = fieldTypeProps.fieldtype;
    const userType = fieldTypeProps.usertype;

    const [inputData, setInputData] = useState("");

    const dispatch = useDispatch();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setInputData([
            event.target.elements.fieldDisplayName.value,
            fieldType,
            event.target.elements.fieldDataTypeDropdown.value,
            event.target.elements.fieldDataLength.value || event.target.elements.fieldDataDropdownLength.value || {min:event.target.elements.valuefieldDateMinRange.value,max:event.target.elements.valuefieldDateMaxRange.value},
            event.target.elements.fieldData.value || event.target.elements.fieldDataDropdown.value,
            event.target.elements.fieldMandatory.value,
            
        ]);
    };

    useEffect(() => {
            inputData === "" ? handleEmpty() : handleAddField();
      },[inputData]);

    const handleAddField = () => {
        dispatch(confirmField(inputData));
        setInputData("");
    };

    const handleEmpty = () => {
    };



    return (
        <div className="dataValidationFieldsWrapper">
            <form className="dataValidationFieldsForm" onSubmit={handleFormSubmit}>
                <div className="dataValidationFields">
                    
                    <div className="class1">
                    <label htmlFor="fieldDisplayName">Field Display Name</label>
                    <input type="text" className="fieldDisplayName" id="fieldDisplayName" name="fieldDisplayName"/>
                    </div>
                    

                    <div className="class1">
                    <label htmlFor="fieldDataTypeDropdown">Field Data Type</label>
                    <select name="fieldDataTypeDropdown" id="fieldDataTypeDropdown" className="fieldDataTypeDropdown">
                        <option value="">Select Field Data Type</option>
                        <option value="Number">Number</option>
                        <option value="String">String</option>
                        <option value="Date">Date</option>
                    </select></div>
                    
                    <div className="class1">
                    {
                        fieldType === "Date-Picker" ? <div>
                                                        <label htmlFor="">Date Range Validation</label>
                                                        <label htmlFor="fieldDateMinRange">Min Date</label>
                                                        <input type="date" className="fieldDateMinRange" id="fieldDateMinRange" name="fieldDateMinRange"/>
                                                        <label htmlFor="fieldDateMaxRange">Max Date</label>
                                                        <input type="date" className="fieldDateMaxRange" id="fieldDateMaxRange" name="fieldDateMaxRange"/>
                                                    </div>
                        : fieldType === "Text-Box" ?  <div>
                                                        <label htmlFor="fieldDataLength">Field Max Length Allowed</label>
                                                        <input type="number" className="fieldDataLength" id="fieldDataLength" name="fieldDataLength"/>
                                                    </div>
                        : <div>
                            <label htmlFor="fieldDataDropdownLength">Field Max Length Allowed - Nill</label>
                            <input type="text" className="fieldDataDropdownLength" id="fieldDataDropdownLength" name="fieldDataDropdownLength"/>                  
                        </div>
                    }
                    </div>
                    
                    <div className="class1">
                    <select name="fieldMandatory" id="fieldMandatory" className="fieldMandatory">
                        <option value="">Is this field mandatory?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    </div>
                    
                    <div className="class1">
                    {
                        fieldType === "Dropdown" 
                        ? <div> 
                            <label htmlFor="fieldDataDropdown">Field Data</label> 
                            <input type="text" className="fieldDataDropdown" id="fieldDataDropdown" name="fieldDataDropdown" placeholder="Enter space separated: e.g. 'CSE IT ECE EEE MECH'"/>
                        </div>
                        : <div> 
                            <label htmlFor="fieldData">Field Data</label> 
                            <input type="text" className="fieldData" id="fieldData" name="fieldData"/>
                        </div>
                    }
                    </div>
                    
                    <div className="class1"> <button className="fieldConfirmBtn" id="fieldConfirmBtn" name="fieldConfirmBtn">Confirm</button>
                    </div>

                </div>
            </form>
            
        </div>
    );
};

export default DataValidationFields;