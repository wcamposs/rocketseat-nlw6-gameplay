// libraries
import React from "react";
import { 
    Image, 
    Text,
    ScrollView 
} from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

// js
import { styles } from "./styles";

// utils
import { categories } from "../../utils/categories";

// components
import { Category } from "../Category";

interface Props {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
}

export function CategorySelect({ 
    categorySelected, 
    setCategory 
}: Props) {
    return(
        <ScrollView 
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {categories.map((category) => (
                <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    onPress={() => setCategory(category.id)}
                />
            ))}
        </ScrollView>
    );
}
