/* eslint-disable jsx-a11y/anchor-is-valid */
function Film() {
  return (
    <div className='film'>
      <video className='bg-dark' width='750' height='500' muted>
        <source src='../video/test.mp4' type='video/mp4'></source>
      </video>
    </div>
  );
}
export default Film;
