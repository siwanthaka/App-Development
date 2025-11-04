import { getCategories, getMenu } from '@/lib/appwrite';
import useAppwrite from '@/lib/useAppwrite';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  const {data, refetch, loading} = useAppwrite({
    fn: getMenu,
    params: {
      category: '',
      query: '',
      limit: 6,
    }
  });
  const {data: categories} = useAppwrite({fn: getCategories});

  console.log(data);
  
  return (
    <SafeAreaView>
      <Text>search</Text>
    </SafeAreaView>
  )
}

export default Search
