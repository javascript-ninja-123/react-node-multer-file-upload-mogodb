import React,{Component} from 'react';
import {connect} from 'react-redux';
import {uploadFile} from '../actions';
 class APP extends Component {

   state = {
     file:null,
     error:''
   }

   onChange = e => this.setState({file:e.target.files[0]})
   onSumbit = e => {
     e.preventDefault();
     if(!this.state.file){
       return this.setState({error:'upload a file and submit'})
     }
     this.props.uploadFile(this.state.file);
     this.setState({file:null,error:''});
   }
    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSumbit} encType='multipart/form-data'>
                  <label>upload a file</label>
                  <input type='file' name='file' onChange={this.onChange}/>
                  <button type='submit'>Submit</button>
                </form>
                <p>{this.state.error}</p>
            </div>
        );
    }
}

export default connect(null,{uploadFile})(APP)
