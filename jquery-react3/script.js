const PubSubManager = {
    subscribers: [],
    /**
     * Agrega un nuevo subscriptor al objeto
     * @param {*} parent el objeto contexto al que pertenece el subscriptor
     * @param {*} callback función a ejecutar por el subscriptor al actualizar 
     * el estado de este objeto
     */
    subscribe: function(parent, callback) {
        this.subscribers.push({ parent: parent, callback: callback });
    },

    /**
     * Notifica a los subscriptores de que ha habido un cambio en el estado del 
     * objeto
     * @param {*} name valor que ha cambiado en el objeto
     */
    color: function(name) {
        this.subscribers.forEach(sub => {
            sub.callback(name, sub.parent);
        })
    }
}

$(function() {
    setTimeout(() => {
        let root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            React.createElement(MyComponent, { context: PubSubManager })
        )
    }, 0);

    // change the box color every few seconds
    setInterval(_ => {
        let box = $("#box")
        let color = box.css("background-color") === "rgb(255, 0, 0)" ? 'green' : 'red'

        // change background of the box
        box.css('background-color', color);

        PubSubManager.color(color)
    }, 1000)
})