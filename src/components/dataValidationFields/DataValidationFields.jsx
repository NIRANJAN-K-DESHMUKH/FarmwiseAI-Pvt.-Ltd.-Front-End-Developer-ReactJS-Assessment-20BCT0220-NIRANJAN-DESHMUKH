
const dataValidationFields = (fieldTypeProps) => {
    const fieldType = fieldTypeProps.type;
    return (
        <div className="dataValidationFieldsWrapper">
            {/* <form action="" className="dataValidationFields">

            </form> */}
            <div className="dataValidationFields">

                <label htmlFor="fieldDisplayName">Field Display Name</label>
                <input type="text" className="fieldDisplayName" id="fieldDisplayName" name="fieldDisplayName"/>

                <label htmlFor="fieldDataTypeDropdown">Field Data Type</label>
                <select name="fieldDataTypeDropdown" id="fieldDataTypeDropdown" className="fieldDataTypeDropdown">
                    <option value="">Select Field Data Type</option>
                    <option value="Number">Number</option>
                    <option value="String">String</option>
                    <option value="Date">Date</option>
                </select>

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
                
                <select name="fieldMandatory" id="fieldMandatory" className="fieldMandatory">
                    <option value="">Is this field mandatory?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                
                {
                    fieldType === "Dropdown" 
                    ? <div> 
                        <label htmlFor="fieldDataDropdown">Field Data</label> 
                        <input type="text" className="fieldDataDropdown" id="fieldDataDropdown" name="fieldDataDropdown" placeholder="Enter space separated: e.g. 'CSE IT ECE EEE MECH'"/>
                      </div>
                    : <div> 
                        <label htmlFor="fieldData">Field Data</label> 
                        <input type="text" className="fieldData"/>
                      </div>
                }

                <button className="fieldConfirmBtn" id="fieldConfirmBtn" name="fieldConfirmBtn">Confirm</button>


            </div>
        </div>
    );
};

export default dataValidationFields;