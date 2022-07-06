import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./index.scss";
export default function File(props) {
  const {
    value,
    placeholder,
    name,
    prepend,
    accept,
    append,
    outerClassName,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          name={name}
          accept={accept}
          className="d-none"
          type="file"
          ref={refInputFile}
          value={value}
          onChange={props.onChange}
        />
        <input
          defaultValue={value}
          placeholder={placeholder}
          onClick={() => refInputFile.current.click()}
          className={["form-control", inputClassName].join(" ")}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

File.defaultProps = {
  placeholder: "Browse a file...",
};
File.propTypes = {
  name: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  value: PropTypes.PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  append: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};
