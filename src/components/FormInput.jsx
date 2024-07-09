function FormInput({labelText, type, name,placeholder}) {
    return (
        <label className="form-control w-full ">
          <div className="label">
            <span className="text-lg font-mono">{labelText}</span>
          </div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            required
            className={`input input-bordered w-full bg-transparent`}          />
        </label>
    );
  }
  
  export default FormInput;