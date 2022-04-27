import React from 'react'

import Box from 'components/Box/Box'
import Description from 'components/Description/Description'
import FormField from 'components/FormField/FormField'
import Button from 'components/Button/Button' 
import FormWrapper from 'components/FormWrapper/FormWrapper'
import Result from 'components/Result/Result'
import Highlight from 'components/Highlight/Highlight'
import AppWrapper from 'components/AppWrapper/AppWrapper'

const Water = () => {
    const [weight, setWeight] = React.useState('');
    const [error, setError] = React.useState('');
    const [water, setWater] = React.useState('');

    const appReset = () => {
        setWeight('');
        setWater('');
        setError('');
    }

    const calculateWater = () => {
        if (!weight) {
            setError('Field cannot be empty!');
            return false;
        }

        if (weight > 400) {
            setError('Incorrect weight!');
            return false;
        }

        const water = weight * 35;
        setError('');

        setWater(water)
    }

    return (
        <AppWrapper>
            <Box>
                <h2>Water Intake Calculator</h2>
                <Description>Water is essential for the digestive process - it makes it easier for us to eat, digest and use food. It also protects the brain, eyeball and spinal cord, and in pregnant women - also the fetus. Adequate hydration is also essential for the proper functioning of the joints.</Description>

                {water ? (
                    <>
                        <Result>
                            <p>The water requirement per day is: <Highlight>{water} ml</Highlight></p>
                        </Result>
                        <Button onClick={appReset}>Go Back</Button>
                    </>
                ) : (
                    <>
                        <FormWrapper>
                            <FormField
                                id="weight"
                                type="number"
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                                name="weight"
                                label="Weight (w kg)"
                                placeholder="Enter your weight (eg. 70)"
                            />
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </FormWrapper>

                        <Button onClick={calculateWater}>Calculate</Button>
                    </>
                )}
            </Box>
        </AppWrapper>
    )
}

export default Water