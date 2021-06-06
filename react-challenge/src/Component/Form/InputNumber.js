const InputNumber = ({label,defaultValue,onChange})=>{
    return <div class="form-floating">
    <label for="inputPhone">{label}</label>
    <input class="form-control" defaultValue={defaultValue} onChange={onChange} id="inputPhone" type="number" placeholder="Enter your Phone Number..." />
    
    </div>
}

export default InputNumber;
