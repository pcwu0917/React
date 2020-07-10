class Gate extends React.Component{
    constructor(props){
        super(props);
        this.state={isLogin:true};
        this.login=this.login.bind(this);
        this.logout=this.logout.bind(this);
    }

    login(){
        this.setState({isLogin:true});
    }
    logout(){
        this.setState({isLogin:false});
    }

    render(){
        const isLogin=this.state.isLogin
        let buttonDOM=null;
        if(isLogin){
            buttonDOM=<Logout onClick={this.logout}></Logout>
        }else{
            buttonDOM=<Login onClick={this.login}></Login>
        }
        return (
            <div>
                {buttonDOM}
            </div>
        )
    }
}

function Login(props){
    return <button onClick={props.onClick}>登录</button>
}
function Logout(props){
    return <button onClick={props.onClick}>退出</button>
}

ReactDOM.render(<Gate />,document.getElementById("d1"));