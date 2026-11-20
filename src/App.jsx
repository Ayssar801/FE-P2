import './App.scss'

function App() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center mb-4">
        <div className="col-md-4 mb-2">
          <button className="btn btn-primary w-100">
            Primary color is #9b59b6
          </button>
        </div>
        <div className="col-md-4 mb-2">
          <button className="btn btn-secondary w-100">
            Secondary color is #1abc9c
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card">
            <div className="card-header">
              <h3 className="mb-0">Lorem ipsum dolor sit amet</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae commodi tempora
                voluptates eos maxime inventore suscipit ipsum reiciendis, quidem quia at
                accusantium aliquid nihil placeat doloremque cupiditate esse ab odio?
              </p>
            </div>
          </div>
        </div>
 
        <div className="col-md-6 mb-3">
          <div className="card">
            <div className="card-header">
              <h3 className="mb-0">Lorem ipsum dolor sit amet</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae commodi tempora
                voluptates eos maxime inventore suscipit ipsum reiciendis, quidem quia at
                accusantium aliquid nihil placeat doloremque cupiditate esse ab odio?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default App
 