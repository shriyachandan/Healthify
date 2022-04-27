import React from 'react'
import styled from 'styled-components'

import AppWrapper from 'components/AppWrapper/AppWrapper'
import Box from 'components/Box/Box'
import Description from 'components/Description/Description'
import FormField from 'components/FormField/FormField'
import FormWrapper from 'components/FormWrapper/FormWrapper'
import Button from 'components/Button/Button'
import Highlight from 'components/Highlight/Highlight'
import Result from 'components/Result/Result'

const Select = styled.select`
    background-color: ${props => props.theme.colors.secondary};
    border: none;
    border-radius: 5px;
    padding: 15px 10px;
    color: ${props => props.theme.colors.text};
    width: 100%;
`;

const Label = styled.label`
    display: block;
    font-size: 15px;
    margin-bottom: 8px;
    font-weight: ${props => props.theme.font.weight.semibold};
`;

const Calories = () => {
    const [calories, setCalories] = React.useState(0);
    const [age, setAge] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [activity, setActivity] = React.useState(1);
    const [error, setError] = React.useState('');
    const [sex, setSex] = React.useState('male');
    
    let ppm, cpm, pal;

    const calculateCalories = () => {
        if (!age || !weight || !height || !activity) {
            setError('Fields cannot be empty');
            return;
        }

        if (activity == 1) {
            pal = 1.4;
        } else if (activity == 2) {
            pal = 1.6;
        } else if (activity == 3) {
            pal = 1.75;
        } else if (activity == 4) { 
            pal = 2.0;
        } else if (activity == 5) {
            pal = 2.2;
        }

        
        if (sex === 'male') {
            ppm = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            ppm = 10 * weight + 6.25 * height - 5 * age - 161;
        }
        
        cpm = ppm * pal;
        setCalories(Math.round(cpm));
    }

    return (
        <AppWrapper>
            <Box>
                <h2>TDEE Calculator</h2>
                <Description>Shows you the total daily calorie intake required to maintain your body.</Description>

                { calories ? (
                    <>
                        <Result>
                            <p>TDEE: <Highlight>{calories} kcal</Highlight></p>
                        </Result>
                        <Button onClick={() => setCalories(0)}>Go Back</Button>
                    </>
                ) : (
                    <>
                        <FormWrapper>
                            <Label>Sex</Label>
                            <Select onChange={e => setSex(e.target.value)}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Select>


                            <FormField 
                                type="number"
                                name="age"
                                label="Age"
                                id="age"
                                value={age}
                                onChange={e => setAge(e.target.value)}
                            />

                            <Label>Activity Level</Label>
                            <Select onChange={e => setActivity(e.target.value)}>
                                <option value="1">1. Little/No Exercise</option>
                                <option value="2">2. Light Exercise(2-3 times a week)</option>
                                <option value="3">3. Moderate Exercise(3-5 times a week)</option>
                                <option value="4">4. Intense Exercise(6-7 times a week)</option>
                                <option value="5">5. Athelete</option>
                            </Select>

                            <FormField 
                                type="number"
                                name="weight"
                                label="Weight (kg)"
                                id="weight"
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                            />
                            

                            <FormField 
                                type="number"
                                name="height"
                                label="Height (cm)"
                                id="height"
                                value={height}
                                onChange={e => setHeight(e.target.value)}
                            />

                            { error && <p style={{color: 'red'}}>{error}</p> }
                        </FormWrapper>

                        <Button onClick={calculateCalories}>Calculate</Button>
                    </>
                )}
            </Box>
        </AppWrapper>
    )
}

export default Calories