import React, {Component} from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      selected_id:null,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is ...'},
        {id:2, title:'CSS', desc:'CSS is ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is ...'}
    ]
    }
  }
  render() {
    var _title, _desc=null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

    }else if(this.state.mode === 'read'){
      var i = 0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i]
        if(data.id === this.state.selected_id){
          _title = data.title; 
          _desc = data.desc;   
          break;
        }

        i++;
      }
    }

    return (
      <div className="App">
        <Subject title={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage = {function(){
          this.setState(
            {mode:'welcome',
            selected_id:null}
          )
        }.bind(this)}
        >
        </Subject>
       {/*
        <header>
          <h1><a href="/" onClick={function(e){                            //event onClick = {}
            // alert('hi');
            console.log(e);
            e.preventDefault();
            // this.state.mode = 'welcome';                                //'this' is nothing > add '.bind' to select this=f() 
            this.setState({                                                //do not use '.state.mode' but '.setState' use object select to change this.state  ...   why? 
              mode:'welcome'
            });                                                            // when use .bind function, 
          }.bind(this)}>{this.state.subject.title}</a></h1>                
          {this.state.subject.sub}
        </header>*/}
        <TOC onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_id:Number(id)
          });
        }.bind(this)}
         data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}


export default App;
