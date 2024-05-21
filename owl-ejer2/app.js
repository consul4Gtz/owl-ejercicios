//import XMLDocument from '/app.xml';

(function() {
    //creando el primer componente 
    const { Component, mount, xml, useRef, onMounted, useState, reactive, useEnv } = owl;
  
    //para que se enfoque en la barra de busqueda
  // Owl Components
  //owl trabja con clases 

  class Counter extends Component {
    static template = xml /* xml */`
    <div class="app">
        <h1>Contando clicks</h1>
        <p>clicks: <t t-esc="state.value"/></p>
        <button t-on-click="increment">+</button>
  </div>
      `;

    setup() {
        this.state = useState({ value: 0 });
    }

    increment() {
        this.state.value++;
    }
    
}

//componente 2
//sera el que se relacione con el anterior
    // -------------------------------------------------------------------------
    // Setup
    mount(Counter, document.body, { dev: true});
  })();
  
  


