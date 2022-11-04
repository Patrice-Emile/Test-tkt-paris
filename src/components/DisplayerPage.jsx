const DisplayerPage = (props) => {
  const { children, hideHeader, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <main>{children}</main>
    </div>
  );
};

export default DisplayerPage;
