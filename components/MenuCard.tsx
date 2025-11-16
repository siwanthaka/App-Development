import { useCartStore } from '@/store/cart.store';
import { MenuItem } from '@/type';
import { Image, Platform, Text, TouchableOpacity } from 'react-native';

const MenuCard = ({ item }: { item: MenuItem }) => {
  const imageUrl = item.image_url;
  const { addItem } = useCartStore();

  const handleAdd = () => {
    // Ensure id is a string and pass correct property name "customizations"
    addItem({
      id: item.$id?.toString() ?? String(item.id ?? item.$id ?? Date.now()),
      name: item.name,
      price: item.price,
      image_url: imageUrl,
      customizations: [], // correct spelling and default to empty array
    });
  };

  return (
    <TouchableOpacity
      className="menu-card"
      style={Platform.OS === 'android' ? { elevation: 10, shadowColor: '#878787' } : {}}
    >
      <Image source={{ uri: imageUrl }} className="size-32 absolute -top-10" resizeMode="contain" />
      <Text className="text-center base-bold text-dark-100 mb-2" numberOfLines={1}>{item.name}</Text>
      <Text className="body-regular text-gray-200 mb-4">From ${item.price}</Text>

      {/* Touchable contains the visible text so presses register */}
      <TouchableOpacity onPress={handleAdd} className="inline-block">
        <Text className="paragraph-bold text-primary">Add to Cart +</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MenuCard;
