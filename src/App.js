import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './app.css';
import Home from './pages/Home';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import ProfilePage from './pages/ProfilePage';
import AddRecipePage from './pages/AddRecipe';
import Header from './components/header/Header';
import AddRecipeButton from './components/addrecipebutton/AddRecipeButton';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/recipe/:id">
            <RecipeDetailPage />
          </Route>
          <Route path="/profile">
            <Profilepage />
          </Route>
          <Route path="/add-recipe">
            <AddRecipepage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
      <AddRecipeButton />
    </div>
  );
}

function Homepage() {
  return <Home />;
}
function RecipeDetailPage() {
  return <RecipeDetailsPage />;
}
function Profilepage() {
  return <ProfilePage />;
}
function AddRecipepage() {
  return <AddRecipePage />;
}

export default App;
