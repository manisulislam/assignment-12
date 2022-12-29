import React from 'react';

const Blog = () => {
    return (
        <div className='my-12 border p-5 m-3 rounded'>
            <h3 className='text-2xl text-orange-500 text-center my-12 font-bold'>WELCOM TO OUR OCLOCK</h3>
            <div>
                <h2 className='text-1xl my-4 font-semibold'>1. What are the different ways to manage a state in a React application?</h2>
                <p>Ans: Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.

                    svg viewer

                    The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:

                    Hooks
                    React Context API
                    Apollo Link State</p>


            </div>
            <div>
                <h2 className='text-1xl my-4 font-semibold'>2. How does prototypical inheritance work?</h2>
                <p>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div>
                <h2 className='text-1xl my-4 font-semibold'>3.  What is a unit test? Why should we write unit tests?</h2>
                <p>
                The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </div>
            <div>
                <h2 className='text-1xl my-4 font-semibold'>
                4. React vs. Angular vs. Vue?
                </h2>
                <p>Both - Angular JS and React JS frameworks are used to create web interfaces for front end development. Angular is Google's matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You.</p>
            </div>
        </div>
    );
};

export default Blog;