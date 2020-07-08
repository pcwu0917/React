# React

2020年5月8日11:41:21

## 1、搭建环境

### 引用

三个文件：

​	react.js	核心文件

​	react-dom.js	渲染页面中的DOM，依赖核心文件

​	babel.js	ES6转换为ESS，JSX语法转换成JavaScript

### 下载

react 核心包	npm i react  --save

react-dom		npm i react-dom  --save

babel				npm i babel-standalone	--save

### 初始化项目

1、npm init -y	创建package.json文件

2、在页面中引入上面三个文件

```js
<script src="node_modules/react/umd/react.development.js"></script>
<script src="node_modules/react-dom/umd/react-dom.development.js"></script>
<script src="node_modules/babel-standalone/babel.min.js"></script>
<body>
    <div id="myReactDOM"></div>
	<script type="text/babel">
    	let dom=<h1>Hello World</h1>
		//渲染视图
    	ReactDOM.render(dom,document.getElementById("myReactDOM"));
	</script>
</body>
```

## 2、JSX

### 注释

```js
 let myDom=<h1>
              {/*jsx中的注释部分*/}
              Hello World
            </h1>;
```

### 多行标签

```js
//如果一个变量中含有多行标签，需要一个父元素包裹
        let myDom2=(<div>
                        <div>第一个元素</div>
                        <div>第二个元素</div>
                    </div>);
```

### 表达式

在js中定义内容/变量，并把它放入到标签中，使用{}

```js
<script type="text/babel">
        //将js中定义的变量放入到标签中，使用{info}
        let info="Hello World";
        let h1=<h3>{info}</h3>;

        ReactDOM.render(h1,document.getElementById("d1"));
    </script>
```

```js
<script type="text/babel">
        //将js中定义的变量放入到标签中，使用{info}
        let info="Hello World";
        let num1=957;
        let num2=123;
        let h1=<h3>{info}</h3>;
        //计算
        let sum=<h3>{num1+num2}</h3>;
        function fun(obj){
            // return "name:"+obj.name+" age:"+obj.age;
            return `name:${obj.name} age:${obj.age}`;
        }

        let user={name:"xm",age:18};
        let strNumUser=<div>
                        {/*将info的内容和sum的内容展示出来*/}
                        <div>{info}</div>
                        <div>{sum}</div>
                        <div>{fun(user)}</div>
                    </div>
        ReactDOM.render(strNumUser,document.getElementById("d1"));
    </script>
```

![1588818871198](C:\Users\shlcm\AppData\Roaming\Typora\typora-user-images\1588818871198.png)

### html和js分离

```js
<div id="d1"></div>
<!--html和js 分离-->
<script src="jsx.js" type="text/babel"></script>
```

### 修改标签属性

```js
 <script type="text/babel">
    //设置超链接
       let text="baidu";
       let linkUrl="http://www.baidu.com";
       let a1=<a href={linkUrl}>{text}</a>;

    //更改css标签属性,注意属性如果有_需要将后面的字幕大写
        let style={color:"red",backgroundColor:"pink"}
        let dom1=<p style={style}>修改样式</p>;
    //如果要使用class，则需要使用className来定义
        let dom2=<p className="style2">修改样式</p>;

       ReactDOM.render(dom2,document.getElementById("d1"));
   </script>
   <style>
       .style2{
           color:black;
           background-color: pink;
       }
   </style>

```

## 3、列表渲染

### 遍历数组

#### map遍历

```js
let arr=["吃饭","睡觉","打豆豆"];
        //1、列表渲染，map方法中的item代表内容，index代表下标
let dom1=arr.map((item,index)=>{
    return (<p key={index}>{item}</p>);
})
```

#### for循环遍历

```js
 //2、利用函数遍历
function fun(){
 let newarr=[];
 for(let index in arr){
     newarr.push(<p key={index}>{arr[index]}</p>)
 }
 return newarr;
}
```

### 遍历对象

遍历对象的属性和值

```js
 <script type="text/babel">
        let obj={name:"xm",age:19};

        //获取obj的各个key和value
        console.log(obj.name);
        console.log(obj["age"]);
        console.log(Object.keys(obj));
        console.log(Object.values(obj));

        let objarr=<div>
            { Object.keys(obj).map((value,index)=>{
                return <p>遍历的属性是：{value},值是{obj[value]}</p>;
            })}
        </div>

        ReactDOM.render(objarr,document.getElementById("d1"));
    </script>
```

## 4、面向组件编程

### 组件

主要内容：构建方式、组件的属性、生命周期

三部分：属性props	状态：state	生命周期

创建：函数组件/无状态组件，类组件

### 创建无状态组件

```js
<script type="text/babel">
        //1、创建无状态组件，相当于自定义标签
        function MyCom(){
            return (<div>我是一个无状态组件</div>)
        }
        let com=<div>
                    <MyCom></MyCom>
                    <MyCom></MyCom>
                </div>;
        ReactDOM.render(com,document.getElementById("d1"));
    </script>
```

### 创建父子组件

```js
<script type="text/babel">
        //1、创建无状态组件，相当于自定义标签
    	//注意自定义标签都为大写，防止和HTML中的标签冲突（因为HTML标签都是小写）
        function SonCom1(){
            return (<div>我是子组件11111</div>)
        }
        function SonCom2(){
            return (<div>我是子组件22222</div>)
        }
        function SonCom3(){
            return (<div>我是子组件33333</div>)
        }
        function SonCom4(){
            return (<div>我是子组件44444</div>)
        }
		//2、创建父标签，包含四个子标签
        function FatherCom(){
            return (<div>
                        <SonCom1></SonCom1>
                        <SonCom2></SonCom2>
                        <SonCom3></SonCom3>
                        <SonCom4></SonCom4>
                    </div>)
        }
        let com=<div><FatherCom></FatherCom></div>;
        ReactDOM.render(com,document.getElementById("d1"));
    </script>
```

### 创建类组件

```js
<script type="text/babel">
    //创建MyCom组件，继承React的Component类，实现render()方法
	class MyCom extends React.Component{
        render(){
            return(
                <div></div>
            )
        }
    }
	let com=<MyCom />;
    Reactr.render(com,document.getElementById("d1"));
</script>
```

### props

#### 无状态组件取值

```js
//1、定义一个无状态组件，加载外部传入的各种属性，用props包裹
function Com(props){
   return(
      <div>学生信息：姓名：{props.name},年龄：{props.age}</div>
   )
}
//创建一个student对象
let student={
    name:"wpc",
    age:23
}
//利用扩展运算符...来填充各个属性
//补充：对象的扩展运算符(...)用于取出参数对象中的所有可遍历的属性，拷贝到当前对象中
ReactDOM.render(<Com {...student}/>,document.getElementById("d1"));
```

#### 类组件取值

```js
//2、定义类组件
class MyCom extends React.Component{
   render(){
       return(
       <div>我是类组件，一个学生的信息：name:{this.props.name},age:{this.props.age}</div>
       )
   }
}
//创建一个student对象
let student={
    name:"wpc",
    age:23
}
//利用扩展运算符...来填充各个属性
//补充：对象的扩展运算符(...)用于取出参数对象中的所有可遍历的属性，拷贝到当前对象中
ReactDOM.render(<MyCom {...student}/>,document.getElementById("d1"));
```

#### 设置默认值

```js
	<script type="text/babel">
        function Com(props){
            return(
                <div>
                    <div>学生信息</div>
                    <div>name:{props.name},age:{props.age}</div>
                </div>
            )
        }
        //设置Com组件的默认属性值
        Com.defaultProps={
            name:"佚名",
            age:"未知"
        }
        ReactDOM.render(<Com />,document.getElementById("d1"));
    </script>
```

#### props验证

验证传递进来的数据是否符合我们期望的类型或要求

只会在浏览器的控制台中打印错误，不会影响显示

1、引用props-types库

```
npm install prop-types --save
```

2、在文件中引用

```html
<script src="../node_modules/prop-types/prop-types.min.js"></script>
```

3、创建组件并添加验证逻辑

```js
 	<script type="text/babel">
        function Com(props){
            return(
                <div>
                    <div>学生信息</div>
                    <div>name:{props.name},age:{props.age}</div>
                </div>
            )
        }
        //创建验证工具
        Com.propTypes={
            name:PropTypes.string,  //定义name必须为string类型
            age:PropTypes.number    //定义年龄必须为数字
        }
        ReactDOM.render(<Com />,document.getElementById("d1"));
    </script>
```

更多约束参见 https://react.docschina.org/docs/typechecking-with-proptypes.html 

### State

组件的另外一个属性，和props的区别

props是组件对外的接口，state是组件对内的接口

```js
	<script type="text/babel">
        class Com extends React.Component{

            constructor(props){
                super(props);
               this.state={
                    name:"xixi"
               } 
            }
            render(){
                return(
                   //this.setState({key:newValue})异步的，react就会自动触发render进行数据的渲染
                    <div>
                        <button onClick={
                    				()=>{this.setState({name:"haha"})}
            				}>
                        点击切换div的名字</button>
                        <div>这是一个类组件,名字为：{this.state.name}</div>
                    </div>  
                )
            }
        }
    ReactDOM.render(<Com />,document.getElementById("d1"));
    </script>
```



## 5、汇总

以上内容汇总

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="node_modules/react/umd/react.development.js"></script>
    <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="node_modules/babel-standalone/babel.min.js"></script>
    <title>Hello World</title>
</head>
<body>
    <div id="d1"></div>
    <script type="text/babel">
        let student={name:"wpc",age:23};
        let arr=["亚瑟","项羽","夏侯淳"];  
        //测试map遍历
        let arrDom1=arr.map((value,index)=>{
            return (<li key={index}>{value}</li>);
        })
        //测试对象遍历
        let stuDOM1=Object.keys(student).map((value,index)=>{
            return (<li>属性：{value}，值：{student[value]}</li>)
        })

        //测试函数遍历
        function forFun(arr){
            let newarr=[];
            for(let index in arr)
                newarr.push(<li>{arr[index]}</li>);
            return newarr;
        }
        //测试函数取值
        function showStudent(student){
            return "name:"+student.name+" age:"+student.age;
        }

        //创建无状态组件,并取出里面的属性值
        function MyCom(props){
            return <p>我是一个无状态组件,学生信息：name:{props.name},age:{props.age}</p>;
        }
        //创建类组件，并取出其中的属性值
        class MyCom2 extends React.Component{
            render(){
                return(
                    <p>我是一个类组件，学生信息：name:{this.props.name},age:{this.props.age}</p>
                )
            }
        }
        //创建父组件，包含一个无状态组件和一个类组件
        class MyCom3 extends React.Component{
            render(){
                return(
                    <div>
                        <MyCom />
                        <MyCom2 />
                    </div>
                )
            }
        }
        let d1=(
                <div>
                    <h1>React</h1>
                    <h2>测试多行标签</h2>
                    <p>这是个首页</p>
                    <p>第二个p标签</p>

                    <h2>表达式及取值</h2>
                    <p>测试数学表达式：1+1={1+1}</p>
                    <p>测试获取对象属性值：student info---name:{student.name},age:{student.age}</p>
                    <p>测试函数值：{showStudent(student)}</p>
                    <p>注意以上取值时，均需要加大括号</p>

                    <h2>遍历列表</h2>
                    <h3>遍历数组</h3>
                    <p>map遍历:<ul>{arrDom1}</ul></p>
                    <p>for函数遍历:<ol>{forFun(arr)}</ol></p>
                    <h3>遍历对象</h3>
                    <p>学生信息：<ul>{stuDOM1}</ul></p>      
                    <h2>组件</h2>            
                    <h3>创建组件</h3>
                    {/*使用扩展运算符(...)，自动将传入的对象的属性赋值给props*/}
                    <h4>无状态组件（函数组件）</h4>
                    <MyCom {...student} />
                    <h4>类组件：</h4>
                    <MyCom2 {...student}/>
                    <h4>复合组件：</h4>
                    <MyCom3 />
                </div>
                );
        
        ReactDOM.render(d1,document.getElementById("d1"));
    </script>
</body>
</html>
```

## 6、ref

表单当前组件的真正实例的引用返回绑定当前属性的元素

### 字符串方式

```js
	<script type="text/babel">
        class RefCom extends React.Component{
            render(){
                return(
                    <div>
                        {/*创建引用ref="info"*/}
                        <input type="text" ref="info" placeholder="请输入" />
                        <button onClick={this.changeFun}>点击获取text中的值</button>
                    </div>
                )
            }
            changeFun=()=>{
                //打印ref=info的value内容
                console.log(this.refs.info.value);
            }
        }
```

### 回调函数形式

```js
		<script type="text/babel">
        class RefCom extends React.Component{
            render(){
                return(
                    <div>
                        {/*创建引用ref，名字为refTextInout*/}
                        <input type="text" ref={(input)=>{this.refTextInout=input}} placeholder="请输入" />
                        <button onClick={this.changeFun}>点击获取text中的值</button>
                    </div>
                )
            }
            changeFun=()=>{
                //打印ref=refTextInout的value内容
                console.log(this.refTextInout.value);
            }
        }
```

## 7、事件处理

### 1、bind绑定方式

直接绑定在标签上

```js
class Com extends React.Component{
    constructor(props){
        super(props);
        this.func=this.func.bind(this);
    }
    render(){
        return(
        	<div>
            	<button onClick={this.fun.bind(this)}>bind绑定</button>
            	<butoon onClick={this.funb}>箭头函数绑定</button>
				<button onClick={this.func}>提前绑定</button>
			</div>
        )
    }
}
fun(){
    console.log("bind绑定"+this)
}

funb=()=>{
    console.log("箭头函数绑定"+this)
}
func(){
    console.log("提前在construct中绑定"+this)
}
```

