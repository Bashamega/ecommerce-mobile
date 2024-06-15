import React from 'react';
import { TextInput, Text} from 'react-native';
import { Div } from './TailwindComponents';

interface InputProps {
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, secureTextEntry = false }) => {
    return (
        <Div className=' border-b-2 border-[#F69F219E]'>
            <TextInput
                
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
           
        </Div>
    );
};

export default Input;

