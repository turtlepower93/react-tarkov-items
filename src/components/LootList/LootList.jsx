import LootListItem from '../LootListItem/LootListItem';

export default function LootList({ lootItems, handleDeleteItem }) {
    
    const items = lootItems.map((item => {
        return <LootListItem key={item._id} lootItem={item} handleDeleteItem={handleDeleteItem} />
    }))

    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const createdAtA = a.props.lootItem.createdAt
        const createdAtB = b.props.lootItem.createdAt;

        let comparison = 0;
        if (createdAtA > createdAtB) {
          comparison = -1;
        } else if (createdAtA < createdAtB) {
          comparison = 1;
        }
        return comparison;
      }


      items.sort(compare)

    return (
        <>
            {items}
        </>
    )
}