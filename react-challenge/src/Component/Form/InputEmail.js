const InputEmail = ({label,defaultValue,onChange})=>{
    return <div class="form-floating">
    <label for="inputEmail">{label}</label>
    <input class="form-control" defaultValue={defaultValue} onChange={onChange} id="inputEmail" type="email" placeholder="Enter your email..." />
    </div>
}

export default InputEmail;