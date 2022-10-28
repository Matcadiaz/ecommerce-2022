const Loader = ({ loading }) => {
    return (
        <h2>
           { loading == true ? 'Loading...' : ''} 
        </h2>   
    );
}
 
export default Loader;