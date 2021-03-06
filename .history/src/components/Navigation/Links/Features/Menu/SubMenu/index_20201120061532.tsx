import React from "react"
import ItemText from "../Item"
import Badge from "../Badge"

interface SubMenuProps {
    items: Item[]
}

interface Item {
    categoryName: string
    links: Link[]
}

interface Link {
    name: string
    route: string
}

const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
    return <div>
        {items.map((item, index) => (
            <div className="block" key={index}>
                {CategoryName(item, index)}
                <div className="mt-2">
                    {ItemsList(item)}
                </div>
            </div>
        ))}
    </div>
}

const CategoryName: React.FC<Item> = (item, index) => (
    <p className={`text-gray-500 text-xs font-sans font-semibold ${index === 1 && `mt-6`}`}>
        {item.categoryName}
    </p>
);

const ItemsList:  React.FC<Item> = (item: Item) => { return (
    item.links && item.links.map(({ name, route }, index) => Item(name, route, index)))}

const Item  = (name: any, route: any, index: any) => (
    <div key={index} className={`flex justify-start my-2`}>
        <ItemText name={name} route={route} />
        {index === 0 && <Badge text="NEW" />}
    </div>)

export { SubMenu }
