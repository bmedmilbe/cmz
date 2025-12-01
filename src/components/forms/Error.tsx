interface Props {
  errorText: string | undefined;
}
const Error = ({ errorText }: Props) => {
  return (
    <>{errorText && <span className="invalid-feedback">{errorText}</span>}</>
  );
};

export default Error;
