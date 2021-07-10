import './App.css';

const DataItem = ({ county, value }) => {
  return (
    <div className='block-container'>
      <p className="block-country">{county}</p>
      <p className="block-value">{value}</p>

    </div>
  )
}

export default DataItem
