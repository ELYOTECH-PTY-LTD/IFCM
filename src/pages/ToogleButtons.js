import React , {Component} from 'react'

export class ToogleButton extends Component{
    constructor(props){
        super(props)
        this.state = {
            tabType : 'general'
        }
}
toggleMe=(value)=>{
    this.setState({
        tabType:value
    })
}
render(){
    return(
        <div>
            <div className="btn">
            <button className="btn_primary" onClick={() => this.toggleMe('general')}> General</button>
            <button className="btn_secondary" onClick={() => this.toggleMe('shop')}> Shop</button>
            <button className="btn_third" onClick={() => this.toggleMe('etc')}> Etc</button>
            </div>
            <div>
                {
                    this.state.tabType ==='general' && <div> General Section </div>
                }
                {
                    this.state.tabType ==='shop' && <div> shop Section </div>
                }
                {
                    this.state.tabType ==='etc' && <div> etc Section </div>
                }
            </div>
        </div>
    )
}
}

export default ToogleButton