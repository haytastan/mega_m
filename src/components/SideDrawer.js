import React from 'react';
import './style.scss'

const SubMenuRender = ({item}) => (
    item.children.map((item_children,i)=>
        <li key={i}>
            <a>
                {item_children.title}
            </a>
        </li>
    )
)

const SideDrawer = props => {
    let drawerClass= 'multi-level side-drawer';
    if(props.show) {
        drawerClass = 'multi-level side-drawer open'
    }
    const {items} = props
    return(
        <div className={drawerClass}>
            <div className="side-drawer__item">
                <input type="checkbox" id="A"/>
                <label for="A">Products⮟</label>
                <ul>
                    <li>
                        {
                        items.map((item, i)=>
                            <div className="side-drawer__sub-item" key={i}>
                                <input type="checkbox" id={i}/>
                                {
                                    item.children? <label for={i}>{item.title}⮟</label>:<label for={i}>{item.title} »</label>
                                }
                                {
                                    item.children &&
                                    <ul>
                                        <SubMenuRender item={item} />
                                        <li>
                                            <a href="#">All {item.title} Products »</a>
                                        </li>
                                    </ul>
                                }
                            </div>
                        )
                    }
                    </li>
                </ul>
            </div>
            <div className="side-drawer__item">
                <input type="checkbox" id="B"/>
                <label for="B">Settings</label>
            </div>
        </div>
    )
}

export default SideDrawer;