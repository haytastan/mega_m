import React from 'react';
import './style.scss'
import MenuItems from './MenuItems'

const defaultImage = "https://etfdailynews.com/wp-content/uploads/2016/10/sony-sne-logo.jpg"
class NavigationItems extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            imageSrc: ''
        }
    }
    componentDidMount(){
        this.setState({
            imageSrc: defaultImage
        })
    }
    onMouseOver = (src) => {
        console.log("aaa",typeof(src))
        if(src === ""){
            this.setState({
                imageSrc: defaultImage
            })
        }else{
            this.setState({
                imageSrc: src
            })
        }
    }
    render(){
        const {imageSrc} = this.state
        const firstSection = Object.entries(this.props.items).slice(0,5).map(entry => entry[1]);
        const secondSection = Object.entries(this.props.items).slice(5,10).map(entry => entry[1]);
        let drawerClass= 'widget__menubar';
        if(this.props.show) {
            drawerClass = 'widget__menubar menuOpen'
        }
    return(
        <ul className={drawerClass}>
            <li className="widget__menubar-item widget__main-menu--hover submenu-item--expanded">
                <a href="#">Products</a>
                <ul className="widget__menubar">
                    <MenuItems items={firstSection} onMouseOver={this.onMouseOver}/>
                    <MenuItems items={secondSection} onMouseOver={this.onMouseOver}/>
                    <li className="widget__menubar-item all_products">
                        <a href='#'>See All Products(100+)></a>
                        <img src={imageSrc} />
                    </li>
                </ul>
            </li>
            <li className="widget__menubar-item widget__main-menu--hover"><a href='#'>Settings</a></li>
        </ul>
        )
    }
}

export default NavigationItems;