/* global React */
/**
 * Form — AUTONOMIA Design System
 *
 * Atomic form components. WCAG 2.2 AA compliant. All states covered.
 *
 * Components:
 *  - <FormField>  Wrapper: label + helper + error + required indicator
 *  - <Input>      Text-like inputs (text, email, tel, url, password, etc.)
 *  - <Textarea>   Multi-line input with optional auto-grow
 *  - <Select>     Native select (a11y-first, no custom dropdown)
 *  - <Checkbox>   Custom-styled real checkbox
 *  - <Radio>      Custom-styled real radio
 *
 * @example
 *   <FormField
 *     label="Email"
 *     helper="Para enviar o link do diagnóstico"
 *     required
 *   >
 *     <Input type="email" name="email" />
 *   </FormField>
 *
 *   <FormField label="Mensagem" error="Mínimo 10 caracteres">
 *     <Textarea rows={4} />
 *   </FormField>
 */

let _idCounter = 0;
const useUid = (prefix) => {
  const ref = React.useRef(null);
  if (ref.current === null) {
    ref.current = `${prefix}-${++_idCounter}`;
  }
  return ref.current;
};

/* ─────────────────────────────────────────────────────
   FormField — Wrapper providing label + helper + error
   ───────────────────────────────────────────────────── */
const FormFieldContext = React.createContext(null);

function FormField(props) {
  const {
    children,
    label,
    helper,
    error,
    required = false,
    disabled = false,
    optional = false,
    id: idProp,
    layout = 'stack',  // 'stack' or 'inline' (for checkbox/radio)
    className = '',
    ...rest
  } = props;

  const autoId = useUid('field');
  const id = idProp || autoId;
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;

  const describedBy = [
    helper && helperId,
    error && errorId
  ].filter(Boolean).join(' ') || undefined;

  const classes = [
    'field',
    `field--${layout}`,
    error && 'field--error',
    disabled && 'field--disabled',
    className
  ].filter(Boolean).join(' ');

  const contextValue = {
    id,
    describedBy,
    error: !!error,
    required,
    disabled
  };

  return (
    <FormFieldContext.Provider value={contextValue}>
      <div className={classes} {...rest}>
        {label && layout === 'stack' && (
          <label htmlFor={id} className="field__label">
            {label}
            {required && <span className="field__required" aria-label="obrigatório">*</span>}
            {optional && !required && <span className="field__optional"> (opcional)</span>}
          </label>
        )}

        <div className="field__control">
          {children}

          {label && layout === 'inline' && (
            <label htmlFor={id} className="field__label field__label--inline">
              {label}
              {required && <span className="field__required" aria-label="obrigatório">*</span>}
            </label>
          )}
        </div>

        {helper && !error && (
          <p id={helperId} className="field__helper">{helper}</p>
        )}

        {error && (
          <p id={errorId} className="field__error" role="alert">
            <span className="field__error-icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M7 4v3M7 9.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            {error}
          </p>
        )}
      </div>
    </FormFieldContext.Provider>
  );
}

/* ─────────────────────────────────────────────────────
   Input — Text-like inputs
   ───────────────────────────────────────────────────── */
function Input(props) {
  const {
    type = 'text',
    size = 'md',
    leftSlot,
    rightSlot,
    className = '',
    id: idProp,
    'aria-describedby': ariaDescribedByProp,
    'aria-invalid': ariaInvalidProp,
    required: requiredProp,
    disabled: disabledProp,
    ...rest
  } = props;

  const ctx = React.useContext(FormFieldContext);
  const id = idProp || ctx?.id;
  const ariaDescribedBy = ariaDescribedByProp || ctx?.describedBy;
  const ariaInvalid = ariaInvalidProp ?? ctx?.error ?? undefined;
  const required = requiredProp ?? ctx?.required ?? false;
  const disabled = disabledProp ?? ctx?.disabled ?? false;

  const classes = [
    'input',
    `input--${size}`,
    leftSlot && 'input--has-left',
    rightSlot && 'input--has-right',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {leftSlot && <span className="input__slot input__slot--left" aria-hidden="true">{leftSlot}</span>}
      <input
        type={type}
        id={id}
        className="input__control"
        aria-describedby={ariaDescribedBy}
        aria-invalid={ariaInvalid || undefined}
        required={required}
        disabled={disabled}
        {...rest}
      />
      {rightSlot && <span className="input__slot input__slot--right" aria-hidden="true">{rightSlot}</span>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Textarea
   ───────────────────────────────────────────────────── */
function Textarea(props) {
  const {
    size = 'md',
    rows = 4,
    autoGrow = false,
    showCount = false,
    maxLength,
    value: valueProp,
    onChange: onChangeProp,
    className = '',
    id: idProp,
    'aria-describedby': ariaDescribedByProp,
    'aria-invalid': ariaInvalidProp,
    required: requiredProp,
    disabled: disabledProp,
    ...rest
  } = props;

  const ctx = React.useContext(FormFieldContext);
  const id = idProp || ctx?.id;
  const ariaDescribedBy = ariaDescribedByProp || ctx?.describedBy;
  const ariaInvalid = ariaInvalidProp ?? ctx?.error ?? undefined;
  const required = requiredProp ?? ctx?.required ?? false;
  const disabled = disabledProp ?? ctx?.disabled ?? false;

  const [internalValue, setInternalValue] = React.useState(rest.defaultValue ?? '');
  const value = valueProp ?? internalValue;
  const taRef = React.useRef(null);

  const handleChange = (e) => {
    if (valueProp === undefined) setInternalValue(e.target.value);
    onChangeProp?.(e);
    if (autoGrow && taRef.current) {
      taRef.current.style.height = 'auto';
      taRef.current.style.height = taRef.current.scrollHeight + 'px';
    }
  };

  const classes = [
    'textarea',
    `textarea--${size}`,
    autoGrow && 'textarea--auto-grow',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <textarea
        ref={taRef}
        id={id}
        rows={rows}
        className="textarea__control"
        aria-describedby={ariaDescribedBy}
        aria-invalid={ariaInvalid || undefined}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      {showCount && maxLength && (
        <div className="textarea__count" aria-live="polite">
          <span className={String(value).length > maxLength * 0.9 ? 'textarea__count--warn' : ''}>
            {String(value).length}
          </span>
          /{maxLength}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Select — Native (a11y-first)
   ───────────────────────────────────────────────────── */
function Select(props) {
  const {
    children,
    options,
    placeholder,
    size = 'md',
    className = '',
    id: idProp,
    'aria-describedby': ariaDescribedByProp,
    'aria-invalid': ariaInvalidProp,
    required: requiredProp,
    disabled: disabledProp,
    ...rest
  } = props;

  const ctx = React.useContext(FormFieldContext);
  const id = idProp || ctx?.id;
  const ariaDescribedBy = ariaDescribedByProp || ctx?.describedBy;
  const ariaInvalid = ariaInvalidProp ?? ctx?.error ?? undefined;
  const required = requiredProp ?? ctx?.required ?? false;
  const disabled = disabledProp ?? ctx?.disabled ?? false;

  const classes = [
    'select',
    `select--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <select
        id={id}
        className="select__control"
        aria-describedby={ariaDescribedBy}
        aria-invalid={ariaInvalid || undefined}
        required={required}
        disabled={disabled}
        defaultValue={rest.defaultValue ?? (placeholder ? '' : undefined)}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>{placeholder}</option>
        )}
        {options
          ? options.map(opt => (
              <option key={opt.value ?? opt} value={opt.value ?? opt} disabled={opt.disabled}>
                {opt.label ?? opt}
              </option>
            ))
          : children
        }
      </select>
      <span className="select__chevron" aria-hidden="true">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 1.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Checkbox — Custom-styled real input
   ───────────────────────────────────────────────────── */
function Checkbox(props) {
  const {
    label,
    helper,
    indeterminate = false,
    className = '',
    id: idProp,
    required: requiredProp,
    disabled: disabledProp,
    ...rest
  } = props;

  const ctx = React.useContext(FormFieldContext);
  const autoId = useUid('cb');
  const id = idProp || ctx?.id || autoId;
  const required = requiredProp ?? ctx?.required ?? false;
  const disabled = disabledProp ?? ctx?.disabled ?? false;
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const classes = [
    'checkbox',
    disabled && 'checkbox--disabled',
    className
  ].filter(Boolean).join(' ');

  return (
    <label htmlFor={id} className={classes}>
      <input
        ref={ref}
        type="checkbox"
        id={id}
        className="checkbox__input"
        required={required}
        disabled={disabled}
        {...rest}
      />
      <span className="checkbox__box" aria-hidden="true">
        <svg className="checkbox__check" width="12" height="10" viewBox="0 0 12 10" fill="none">
          <path d="M1 5l3.5 3.5L11 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="checkbox__dash"></span>
      </span>
      {label && (
        <span className="checkbox__label">
          {label}
          {required && <span className="field__required" aria-label="obrigatório">*</span>}
        </span>
      )}
      {helper && <span className="checkbox__helper">{helper}</span>}
    </label>
  );
}

/* ─────────────────────────────────────────────────────
   Radio
   ───────────────────────────────────────────────────── */
function Radio(props) {
  const {
    label,
    helper,
    className = '',
    id: idProp,
    required: requiredProp,
    disabled: disabledProp,
    ...rest
  } = props;

  const autoId = useUid('rd');
  const id = idProp || autoId;
  const ctx = React.useContext(FormFieldContext);
  const required = requiredProp ?? ctx?.required ?? false;
  const disabled = disabledProp ?? ctx?.disabled ?? false;

  const classes = [
    'radio',
    disabled && 'radio--disabled',
    className
  ].filter(Boolean).join(' ');

  return (
    <label htmlFor={id} className={classes}>
      <input
        type="radio"
        id={id}
        className="radio__input"
        required={required}
        disabled={disabled}
        {...rest}
      />
      <span className="radio__circle" aria-hidden="true"></span>
      {label && (
        <span className="radio__label">
          {label}
          {required && <span className="field__required" aria-label="obrigatório">*</span>}
        </span>
      )}
      {helper && <span className="radio__helper">{helper}</span>}
    </label>
  );
}

/* ─────────────────────────────────────────────────────
   RadioGroup — Wrapper for related radios
   ───────────────────────────────────────────────────── */
function RadioGroup(props) {
  const {
    children,
    label,
    helper,
    error,
    name,
    required = false,
    layout = 'vertical',
    className = '',
    ...rest
  } = props;

  const groupId = useUid('rg');
  const helperId = `${groupId}-helper`;
  const errorId = `${groupId}-error`;
  const labelId = `${groupId}-label`;

  const describedBy = [
    helper && helperId,
    error && errorId
  ].filter(Boolean).join(' ') || undefined;

  const classes = [
    'radio-group',
    `radio-group--${layout}`,
    error && 'radio-group--error',
    className
  ].filter(Boolean).join(' ');

  return (
    <fieldset
      className={classes}
      aria-labelledby={label ? labelId : undefined}
      aria-describedby={describedBy}
      aria-required={required}
      aria-invalid={!!error || undefined}
      {...rest}
    >
      {label && (
        <legend id={labelId} className="radio-group__legend">
          {label}
          {required && <span className="field__required" aria-label="obrigatório">*</span>}
        </legend>
      )}
      <div className={`radio-group__items radio-group__items--${layout}`}>
        {React.Children.map(children, child =>
          React.isValidElement(child) && child.type === Radio
            ? React.cloneElement(child, { name: name ?? child.props.name })
            : child
        )}
      </div>
      {helper && !error && (
        <p id={helperId} className="field__helper">{helper}</p>
      )}
      {error && (
        <p id={errorId} className="field__error" role="alert">{error}</p>
      )}
    </fieldset>
  );
}

/* ─────────────────────────────────────────────────────
   Exports
   ───────────────────────────────────────────────────── */
window.Form = {
  Field: FormField,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  RadioGroup
};

window.FormField = FormField;
window.Input = Input;
window.Textarea = Textarea;
window.Select = Select;
window.Checkbox = Checkbox;
window.Radio = Radio;
window.RadioGroup = RadioGroup;
