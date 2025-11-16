import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  const router = useRouter();

  // Dummy user data
  const user = {
    fullName: "Siwanthaka Savinda",
    email: "siwanthaka@example.com",
    phone: "+94 71 123 4567",
    imageUrl:
      "https://i.pravatar.cc/300", // placeholder avatar image
  };

  const handleEditProfile = () => {
    console.log("/edit-profile"); // navigate to edit screen
  };

  const handleLogout = () => {
    console.log("User logged out"); // implement your logout logic
  };

  return (
    <View className="flex-1 bg-white px-5 pt-10">
      {/* Profile Image */}
      <View className="items-center mb-8">
        <Image
          source={{ uri: user.imageUrl }}
          className="w-32 h-32 rounded-full border-4 border-primary"
        />
      </View>

      {/* User Info Card */}
      <View>
        <Text className="base-semibold text-gray-500 mb-1">Full Name</Text>
        <Text className="paragraph-medium text-dark-100 mb-3">{user.fullName}</Text>

        <Text className="base-semibold text-gray-500 mb-1">Email</Text>
        <Text className="paragraph-medium text-dark-100 mb-3">{user.email}</Text>

        <Text className="base-semibold text-gray-500 mb-1">Phone Number</Text>
        <Text className="paragraph-medium text-dark-100">{user.phone}</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity
        onPress={handleEditProfile}
        className="bg-primary py-4 rounded-2xl mb-4 items-center shadow-md"
      >
        <Text className="base-bold text-white text-lg">Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleLogout}
        className="bg-red-500 py-4 rounded-2xl items-center shadow-md"
      >
        <Text className="base-bold text-white text-lg">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
