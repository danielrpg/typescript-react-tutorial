import React from 'react';

interface GreetingProps {
    name?: string;
}

interface GreetingState {
    message: string;
}

export default class Greeting extends React.Component<GreetingProps, GreetingState> {
    constructor(props: GreetingProps) {
        super(props);
        console.log('Name is ===> ' + props.name)
        this.state = {
            message: `Hello from, ${props.name}`
        }
    }
    
    state: GreetingState;

    static getDerivedStateFromProps(props: GreetingProps, state: GreetingState) {
        console.log(props, state);

        if(props.name && props.name !== state.message) {
            const newState = {...state};
            newState.message = Greeting.getMessage(props.name);
            return newState;
        }

        return state;
    }

    static getMessage(name: string = "") {
        return `Hello from, ${name}`;
    }

    render() {
        console.log("rendering Greeting")

        if(!this.props.name) {
            return <div>No mane given</div>
        }

        return <div>
            {this.state.message}
        </div>;
    }
}