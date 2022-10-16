import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Idea } from "../../domain/Idea";
import { IdeasList } from "./IdeasList";

export const IdeasListScreen = (props: {
  navigation: NativeStackNavigationProp<any>;
}) => {
  const navigation = props.navigation;
  const [ideas, setIdeas] = useState<Idea[]>([]);

  const handleNewIdeaPressed = () => {
    navigation.push("NewIdea");
  };

  return (
    <>
      <IdeasList ideas={ideas} onNewIdeaPress={handleNewIdeaPressed} />
    </>
  );
};