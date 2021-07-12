import React, {useState} from 'react'
import propTypes from 'prop-types'
import "./index.scss"
export default function File(props) {
    const {
        value,
        placeholder,
        name,
        prepend,
        append,
        outerClassName,
        inputClassName,
        errorResponse,

    } = props;

    const refInputFile = useRef(null);
   
    return (
        <div className={["input-text mb-3",outerClassName].join(" ")}>
            <div className="input-group">
                {prepend && (
                    <div className="input-group-prepend bg-gray-900">
                        <span className="input-group-text">{prepend}</span>
                    </div>
                )}
                <input name={name} accept={accept} className="d-none" type="file" ref={refInputFile} value={value} onChange={props.onChange} />
                <input defaultValue={value} placeholder={placeholder} onClick={() => refInputFile.current.click()} className={["form-control",inputClassName].join(" ")} />
                {append && (
                    <div className="input-group-append bg-gray-900">
                        <span className="input-group-text">
                            {append}
                        </span>
                    </div>
                )}
            </div>
            {hasError && <span className="error-helper"> </span>}
        </div>
    );
}

Text.defaultProps = {
   
    placeholder : "Browse a file...",
   
}
Text.propTypes = {
    name : propTypes.string.isRequired,
    accept : propTypes.string.isRequired,
    value : propTypes.propTypes.string.isRequired,
    onChange : propTypes.func.isRequired,
    prepend : propTypes.oneOfType([propTypes.number,propTypes.string]),
    append : propTypes.oneOfType([propTypes.number,propTypes.string]),
    placeholder : propTypes.string,
    outerClassName : propTypes.string,
    inputClassName : propTypes.string 
};
