class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            context: props.context
        }
        // se subscribe a los cambios en el estado del objeto context
        // proporciona la función que se va a ejecutar en cada cambio.
        this.state.context.subscribe(this, this.onColor);
    }

    onColor(color, that) {
        that.setState({color: color});
    }

    render() {
        return (
            <div className='alert alert-success' role="alert">
                <h3>Hello, from React!</h3>
                <span 
                className={ 'badge ' + (this.state.color === 'red'
                    ? 'badge-danger' : 'badge-success') + ' p-3' }>
                    { this.state.color }
                </span>
            </div>
        )
    }
} 