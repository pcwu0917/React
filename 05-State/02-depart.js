class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    render(){
        return(
            <div>
                <h1>Hello world</h1>
                <h2>Now,it is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
let dom1=<Clock></Clock>;

ReactDOM.render(dom1,document.getElementById("d1"))