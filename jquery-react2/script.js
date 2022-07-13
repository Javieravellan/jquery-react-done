
const UIManager = {
    getColor: function (parent, callback) {
        callback($("#box").css('background-color'), parent)
    },
    setColor: function (name) {
        $("#box").css('background-color', name);
    }
}; 

$(function() {
    setTimeout(() => {
        let root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            React.createElement(MyComponent, { context: UIManager })
        )
    }, 0);
})