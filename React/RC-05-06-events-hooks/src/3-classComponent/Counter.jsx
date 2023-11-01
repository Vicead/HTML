//* ====================== CLASS COMPONENTS AND STATE ======================
//* React taki Class-Components  ES6 class yapısını temel alır.
//* çok fazla boilerplate code a sahipler.
//* fakat, state lere sahip olabilirler
//*  state component hakkında data veya bilgi içermek için kullanılan yerleşik bir React object tidir. component in durumu zamanla değişebilir ;
//* ne zaman değişse component re-render olur.
//* this.state ile constructor da state için bir initial value atayabiliriz. constructor  dışında, state i setState() metoduyla değiştirebiliriz,
//* =========================================================================
import {Component} from 'react';

class Counter extends Component{
  constructor(props){
    super(props)
    this.state={sayac:props.count||0}
  }
  //fonksiyonlar
  arttir(){
    this.setState({sayac:this.state.sayac+1})
  }
  //!arrow function olduğu zaman bind etmeye gerek yok
  azalt=()=>{
    this.setState({sayac:this.state.sayac-1})
  }
  render(){
    return(
      <div className='text-center'>
        <h1>Sayac: {this.state.sayac} </h1>
        <button className='btn btn-primary' onClick={this.arttir.bind(this)}>ARTTIR</button>
        <button className='btn btn-danger' onClick={this.azalt}>AZALT</button>
      </div>
    )
  }
}

export default Counter