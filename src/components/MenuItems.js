import React from 'react';
import './style.scss'

const MenuRow = ({menu, onMouseOver, style}) => (
    <li className={style}>
        <a href='#'
            onMouseOver={() => onMouseOver(menu.image)}>
            {menu.title}
        </a>
    </li>
)

const MenuItems = props => {
    const {items} = props
    return(
        <li className="widget__menubar-item">
            <ul className="menu__items">
            {
                items.map((item, i)=>{
                    return(
                        <div key={i}>
                            <MenuRow menu={item} onMouseOver={props.onMouseOver} style={'main-menu__title'}/>
                            {item.children &&
                                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                    <MenuRow
                                        style={'sub-menu__title'}
                                        menu={item.children['0']}
                                        onMouseOver={props.onMouseOver}/>
                                    <MenuRow
                                        style={'sub-menu__title'}
                                        menu={item.children['1']}
                                        onMouseOver={props.onMouseOver}/>
                                    {/* <menuRow key={i+1} children={item}/> */}
                                    <li className='sub-menu__title'><a href='#'>More</a></li>
                                </div>
                            }
                        </div>
                    )
                })
            }
            </ul>
        </li>
    )
}

export default MenuItems;