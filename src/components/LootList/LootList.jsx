import LootListItem from '../LootListItem/LootListItem';

export default function LootList({ lootItems }) {
    
    const items = lootItems.map((item => <LootListItem key={item._id} lootItem={item} />))

    return (
        <>
            {items}
        </>
    )
}