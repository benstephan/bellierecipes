import React from 'react';
import axios from 'axios';
import './addrecipe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

class AddRecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeimage: '',
            recipename: '',
            recipestep: '',
            recipesteps: [],
            recipetimer: '',
            recipetimers: [],
            recipeingredientname: '',
            recipequantity: '',
            recipetype: '',
            recipeingredientnames: [],
            recipequantities: [],
            recipetypes: [],
            recipeingredients: [],
        };
        this.handleImageInput = this.handleImageInput.bind(this);
        this.handleMessageInput = this.handleMessageInput.bind(this);
        this.handleStepInput = this.handleStepInput.bind(this);
        this.handleTimerInput = this.handleTimerInput.bind(this);
        this.handleIngredientNameInput = this.handleIngredientNameInput.bind(this);
        this.handleQuantityInput = this.handleQuantityInput.bind(this);
        this.handleTypeInput = this.handleTypeInput.bind(this);
    }
    handleImageInput(e) {
        this.setState({ recipeimage: e.target.value });
    }
    handleMessageInput(e) {
        this.setState({ recipename: e.target.value });
    }
    handleStepInput(e){
        this.setState({recipestep: e.target.value});
    }
    handleTimerInput(e){
        this.setState({recipetimer: e.target.value});
    }
    handleIngredientNameInput(e){
        this.setState({recipeingredientname: e.target.value});
    }
    handleQuantityInput(e){
        this.setState({recipequantity: e.target.value});
    }
    handleTypeInput(e){
        this.setState({recipetype: e.target.value});
    }
    addStep(e){
        e.preventDefault();
        
        this.setState({ recipesteps: [...this.state.recipesteps, this.state.recipestep],
            recipetimers: [...this.state.recipetimers, this.state.recipetimer],
            recipestep: '',
            recipetimer: ''
        })
    }
    addIngredient(e){
        e.preventDefault();
        
        this.setState({ 
            recipeingredientnames: [...this.state.recipeingredientnames, this.state.recipeingredientname],
            recipequantities: [...this.state.recipequantities, this.state.recipequantity],
            recipetypes: [...this.state.recipetypes, this.state.recipetype],
            recipetype: '',
            recipequantity: ''
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const recipeImage = this.state.recipeimage;
        const name = this.state.recipename;
        const nameToSlug = name.replace(/\s+/g, '-').toLowerCase();
        const steps = this.state.recipesteps;
        const timers = this.state.timers;
        const recipeQuantities = this.state.recipequantities;
        const recipeTypes = this.state.recipetypes;
        let ingList = [];
        
        this.state.recipeingredientnames.map(function(value, i) {
            const singleIng = {}
            singleIng.name = value;
            singleIng.quantity = recipeQuantities[i]
            singleIng.type = recipeTypes[i];
            return ingList.push(singleIng);
        });

        const recipeObject = {
            steps: steps,
            timers: timers,
            name: name,
            slug: nameToSlug,
            favorite: false,
            ingredients: ingList,
            imageURL: recipeImage,
            originalURL: "#",
        }
        if(recipeImage === '' || name === '' || steps === '' || ingList === ''){
            alert('missing fields');
        }else{
       
            axios.post('http://localhost:4000/addRecipe', recipeObject)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    recipeimage: '',
                    recipename: '',
                    recipestep: '',
                    recipesteps: [],
                    recipetimer: '',
                    recipetimers: [],
                    recipeingredientname: '',
                    recipequantity: '',
                    recipetype: '',
                    recipeingredientnames: [],
                    recipequantities: [],
                    recipetypes: [],
                    recipeingredients: [],
                })
                
            }).catch((error) => {
                console.log('Axios Error: ', error)
            });        

        }
    }
    
    render(){

        return (
            <div className="add-recipe-form small-container">
                <form>
                    <fieldset>
                        <label>Recipe Image (url)</label>
                        <input 
                            type="text" 
                            name="recipe-image-url" 
                            className="form-input" 
                            onChange={this.handleImageInput}
                            value={this.state.recipeimage}    
                        />
                    </fieldset>
                    <fieldset>
                        <label>Recipe Name</label>
                        <input 
                            type="text" 
                            name="recipe-name" 
                            className="form-input" 
                            onChange={this.handleMessageInput}
                            value={this.state.recipename}    
                        />
                    </fieldset>
                    <fieldset>
                        <label>Recipe Steps</label>
                        <textarea 
                        className="recipeSteps hidden-input"
                        onChange={this.handleSteps}
                        value={this.state.recipesteps}   
                        ></textarea>
                        <textarea 
                        className="recipeTimers hidden-input"
                        onChange={this.handleTimers}
                        value={this.state.recipetimers}   
                        ></textarea>
                        <div className="form-row">
                        <div>
                        <input 
                            type="text" 
                            name="recipe-step" 
                            className="form-input" 
                            onChange={this.handleStepInput}
                            value={this.state.recipestep}
                            placeholder="Step Description"
                        />
                        </div>
                        <div>
                        <input 
                            type="text" 
                            name="recipe-timer" 
                            className="form-input" 
                            onChange={this.handleTimerInput}
                            value={this.state.recipetimer}  
                            placeholder="Time for Step"  
                        />
                        </div>
                        <div>
                       <button onClick={this.addStep.bind(this)} className="add-recipe-form__add-btn"><FontAwesomeIcon icon={faPlus} /></button>
                       </div>
                        </div>
                        {this.state.recipesteps.map((step, i) => {
                            return <span key={i}>{step} {this.state.recipetimers[i]} <button className="add-recipe-form__add-btn"><FontAwesomeIcon icon={faMinus} /></button></span>
                        })}
                        
                    </fieldset>
                    <fieldset>
                    <label>Recipe Ingredients</label>
                    <textarea 
                        className="recipeIngredientName hidden-input"
                        onChange={this.handleIngredientsName}
                        value={this.state.recipeingredientnames}   
                        ></textarea>
                        <textarea 
                        className="recipeIngredientsQuantity hidden-input"
                        onChange={this.handleQuantities}
                        value={this.state.recipequantities}   
                        ></textarea>
                        <textarea 
                        className="recipeIngredientsTypes hidden-input"
                        onChange={this.handleTypes}
                        value={this.state.recipetypes}   
                        ></textarea>
                        <div className="form-row">
                        <input 
                            type="text" 
                            name="recipe-ingredient-name" 
                            className="form-input" 
                            onChange={this.handleIngredientNameInput}
                            value={this.state.recipeingredientname} 
                            placeholder="Ingredient Name"   
                        />
                        <input 
                            type="text" 
                            name="recipe-ingredient-quantity" 
                            className="form-input" 
                            onChange={this.handleQuantityInput}
                            value={this.state.recipequantity}    
                            placeholder="Ingredient Quantity"
                        />
                        <input 
                            type="text" 
                            name="recipe-ingredient-type" 
                            className="form-input" 
                            onChange={this.handleTypeInput}
                            value={this.state.recipetype}    
                            placeholder="Type of Ingredient"
                        />
                        <button onClick={this.addIngredient.bind(this)} className="add-recipe-form__add-btn"><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                        {this.state.recipeingredientnames.map((ingredient, i) => {
                            return <span key={i}>{ingredient} {this.state.recipequantities[i]} {this.state.recipetypes[i]} <button className="add-recipe-form__add-btn"><FontAwesomeIcon icon={faMinus} /></button></span>
                        })}
                    </fieldset>
                    <button type="submit" onClick={this.handleSubmit.bind(this)} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
    
}

export default AddRecipeForm