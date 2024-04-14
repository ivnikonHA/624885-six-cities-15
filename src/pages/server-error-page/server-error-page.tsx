const notFoundWrapperStyle = {
  width: '420px',
  marginTop: '16.7vh',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingTop: '94px',
  textAlign: 'center' as const,
  backgroundImage: 'url(../img/ico-no-results.svg)',
  backgroundSize: '60px 73px',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat'
};
const notFoundStyle = {
  display: 'block',
  marginBottom: '5px',
  fontSize: '32px',
  lineHeight: 1.1875
};

export default function ServerErrorPage() {
  return (
    <div style={notFoundWrapperStyle}>
      <b style={notFoundStyle}>404. Server error</b>
    </div>
  );
}
