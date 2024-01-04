export default () => {

  return <>
    <input type='text' placeholder='cc' value='hello bro' onChange={ (e) => console.log(e.target.value) } />
  </>

}