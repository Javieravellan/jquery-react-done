
$(function() {
    setTimeout(function() {
        let root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            React.createElement(MyComponent, {context: $('body')})
        )
      /* ReactDOM.render(React.createElement(MyComponent, { context: $('body') }), 
        document.getElementById('root')); */
    }, 0);
})