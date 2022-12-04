import Logo  from '../assets/search.svg'
const SearchBox = ({ inputRef, onSubmitHandeler, toggleHandler }) => {
    return ( 
        <div className="search-container">
            <div>
            <label className="switch">
                <input type="checkbox" />
                    <div className="slider round" onClick={ toggleHandler }>
                    <span className="on">C&#176;</span>
                    <span className="off">F&#176;</span>
                </div>
           </label>
            </div>
            <div>
            <form className='form'>
                <input type="search" placeholder="search city" ref={inputRef}/>
                <button onClick={onSubmitHandeler} ><img src={Logo} alt="" /></button>
            </form>
            </div>
        </div>
        
    )
}

export default SearchBox 