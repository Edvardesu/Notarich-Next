const Label = (props) => {
    const {htmlFor, children} = props;
    return (
        <label htmlFor={htmlFor} className="block text-gray-700">
        {children}
      </label>
    );
};

export default Label;