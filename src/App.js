import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  //const title = 'Webcome to the new Blog';
  return (
    <Router>
      <div className="App">
        <Navbar /> {/*luôn luôn hiển thị */}
        <div className="content">
          <Switch>
             <Route exact path="/"> {/*phải thêm exact để tránh tình trạng các route sau vẫn về trang Home */}
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
