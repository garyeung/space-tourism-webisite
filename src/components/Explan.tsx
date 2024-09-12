function Explanation({rank, name, description}:{rank: string, name: string, description: string}){
    return (
        <div className='explanation'>
            <div className='explanation-text'>
              <p className='explanation-rank'>{rank}</p>
              <h1 className='explanation-name'>{name}</h1>
            </div>
            <div>
                <p className='description'>{description}</p>
            </div>
        </div>
    );
}

export default Explanation;