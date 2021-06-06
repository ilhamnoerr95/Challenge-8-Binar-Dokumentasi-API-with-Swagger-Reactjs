const InputPassword = ({label,defaultValue,onChange})=>{
    return <div class="form-floating">
    <label for="inputPassword">{label}</label>
    <input class="form-control" defaultValue={defaultValue} onChange={onChange} id="inputPassword" type="password" placeholder="Enter your name..." />
</div>

}

export default InputPassword;