class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        // get reference to a jquery object
        var box = this.state.context.find('#box')
        // change color of the box
        box.css('background-color', (box.css('background-color') === 'rgb(255, 0, 0)' ? 'green' : 'red'));
    }

    render() {
        return (
            <div className='alert alert-success' role="alert">
                <h3>Hello, from React!</h3>
                <button 
                    type='button' 
                    className='btn btn-default' 
                    onClick={this.onClick }>Click Me!
                </button>
            </div>
        )
    }
} 