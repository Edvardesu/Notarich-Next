const Label = (props: any) => {
    const {htmlFor, children} = props;
    return (
        <label htmlFor={htmlFor} className="block text-gray-700">
        {children}
      </label>
    );
};

export default Label;