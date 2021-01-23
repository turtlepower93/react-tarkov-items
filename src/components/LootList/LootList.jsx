import LootListItem from '../LootListItem/LootListItem';

export default function LootList({ lootItems }) {
    
    const items = lootItems.map((item => {
        return <LootListItem key={item._id} lootItem={item} />
    }))

    console.log(items)

    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const createdAtA = a.props.lootItem.createdAt
        const createdAtB = b.props.lootItem.createdAt;
      
        console.log(createdAtA)

        let comparison = 0;
        if (createdAtA > createdAtB) {
          comparison = -1;
        } else if (createdAtA < createdAtB) {
          comparison = 1;
        }
        return comparison;
      }


      items.sort(compare)

    // items.slice().sort((a,b) => {
    //     // console.log(a.props.lootItem.type)
    //     return a.props.lootItem.type > b.props.lootItem.type
    // })

    

    return (
        <>
            {items}
        </>
    )
}