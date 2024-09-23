function FormFieldset({
  type,
  autoFocus,
  normal,
  minLength,
  name,
  handler,
  placeholder,
  required,
  value,
  children,
}) {
  return (
    <fieldset className="form-group">
      <input
        type={type}
        autoFocus={autoFocus}
        className={`form-control ${normal ? "" : "form-control-lg"}`}
        minLength={minLength}
        name={name}
        onChange={handler}
        placeholder={placeholder}
        required={required}
        value={value}
      />
      {children}
    </fieldset>
  );
}

export default FormFieldset;
