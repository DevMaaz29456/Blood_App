const InputType = ({
  value,
  onChange, // ✅ Ensure this is correctly passed
  name,
  inputType,
  labelText,
  labelFor,
}) => {
  return (
    <div>
      <div className="form-group mb-1">
        <label htmlFor={labelFor} className="form-label">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange} // ✅ Fixed here
        />
      </div>
    </div>
  );
};

export default InputType;
